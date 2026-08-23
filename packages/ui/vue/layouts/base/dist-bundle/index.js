(function(){var i="ui.vue.layouts.base",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".dottet[data-v-901ba03a]{background:#fafafa;background-image:radial-gradient(#b8b8b8 1px,transparent 0);background-size:40px 40px;background-position:-19px -19px}.ghost-placeholder[data-v-901ba03a]{position:absolute;background-color:#0000001a;border-radius:5px;border:2px dashed #ccc;z-index:100000;pointer-events:none}.report-container[data-v-901ba03a]{display:flex;justify-content:flex-start;align-items:flex-start;flex-direction:column;width:100%;height:100%;position:relative}.report-container__title[data-v-901ba03a]{width:100%;padding:16px;border-bottom:1px dashed #e0e0e0}.report-container .widgets-adding-controls[data-v-901ba03a]{display:flex;border:1px solid #e0e0e0;border-radius:8px;margin:16px}.widget-board[data-v-901ba03a]{width:100%;height:100%;display:flex;box-sizing:border-box;overflow:auto}.report-container .add-btn[data-v-901ba03a]{margin:0 16px 16px 0;align-self:self-end}.dashboard-item[data-v-901ba03a]{position:absolute;width:100%;height:100%}.dashboard-item-container[data-v-901ba03a]{position:absolute}.dropdown-buttons-container[data-v-901ba03a]{display:flex;flex-direction:column;gap:.5rem;z-index:99999}.va-dropdown__content[data-v-901ba03a]{z-index:10000000!important}.va-dropdown__content.va-select-dropdown__content.va-dropdown__content-wrapper[data-v-901ba03a]{z-index:20000000!important}.add_widget-button[data-v-901ba03a]{position:absolute;display:flex;flex-direction:row;gap:10px;right:30px;bottom:20px}.v-enter-active[data-v-901ba03a],.v-leave-active[data-v-901ba03a]{transition:opacity .5s ease}.v-enter-from[data-v-901ba03a],.v-leave-to[data-v-901ba03a]{opacity:0}.ghost{display:none}.report-container[data-v-55dc2169]{width:100%;height:100%;position:relative}.scroll-viewport[data-v-55dc2169]{width:100%;height:100%;overflow:auto}.canvas[data-v-55dc2169]{position:relative;min-width:100vw;min-height:100vh;box-sizing:border-box}.dottet[data-v-55dc2169]{background:#fafafa;background-image:radial-gradient(#b8b8b8 1px,transparent 0);background-size:40px 40px;background-position:-19px -19px;background-repeat:repeat}.ghost-placeholder[data-v-55dc2169]{position:absolute;background-color:#0000001a;border-radius:5px;border:2px dashed #ccc;z-index:1000000;pointer-events:none}.widget-board[data-v-55dc2169]{position:absolute;top:0;left:0;width:100%;height:100%}.minimap[data-v-55dc2169]{position:absolute;bottom:16px;left:80px;width:200px;height:140px;background:#ffffffe6;border:1px solid #ccc;border-radius:6px;box-shadow:0 2px 8px #00000026;z-index:999999;cursor:pointer;overflow:hidden}.minimap-canvas[data-v-55dc2169]{position:relative;width:100%;height:100%}.minimap-widget[data-v-55dc2169]{position:absolute;background:#154ec24d;border:1px solid rgba(21,78,194,.5);border-radius:1px}.minimap-viewport[data-v-55dc2169]{position:absolute;border:2px solid #e42222;background:#e4222214;border-radius:2px;pointer-events:none}.report-container .add-btn[data-v-55dc2169]{margin:0 16px 16px 0;align-self:self-end}.dashboard-item[data-v-55dc2169]{position:absolute;width:100%;height:100%}.dashboard-item-container[data-v-55dc2169]{position:absolute}.widget-board-dropdown[data-v-55dc2169]{width:100%;height:100%}.dropdown-buttons-container[data-v-55dc2169]{display:flex;flex-direction:column;gap:.5rem;z-index:99999}.canvas-context-menu[data-v-55dc2169]{position:absolute;background:#fff;border:1px solid #ccc;border-radius:4px;padding:8px;box-shadow:0 2px 8px #00000026;z-index:10000001}.va-dropdown__content[data-v-55dc2169]{z-index:10000000!important}.va-dropdown__content.va-select-dropdown__content.va-dropdown__content-wrapper[data-v-55dc2169]{z-index:20000000!important}.add_widget-button[data-v-55dc2169]{position:absolute;display:flex;flex-direction:row;gap:10px;right:30px;bottom:20px}.pages_board[data-v-55dc2169]{position:absolute;display:flex;flex-direction:column;gap:10px;left:80px;bottom:20px}.v-enter-active[data-v-55dc2169],.v-leave-active[data-v-55dc2169]{transition:opacity .5s ease}.v-enter-from[data-v-55dc2169],.v-leave-to[data-v-55dc2169]{opacity:0}.bounce-enter-active[data-v-55dc2169]{animation:bounce-in-55dc2169 .5s}.bounce-leave-active[data-v-55dc2169]{animation:bounce-in-55dc2169 .5s reverse}@keyframes bounce-in-55dc2169{0%{transform:scaleY(0%) translateY(100%);opacity:0}to{transform:scaleY(1) translateY(0);opacity:1}}\n";})();
import { LAYOUT_REPOSITORY as op } from "org.eclipse.daanse.board.app.lib.api.layout.page";
import { ref as se, computed as an, defineComponent as Qu, inject as sp, onMounted as up, nextTick as Cu, createElementBlock as ue, openBlock as fe, Fragment as xo, renderList as Eu, unref as lr, normalizeStyle as on, normalizeClass as fp, createElementVNode as me, createVNode as oe, watch as Vy, resolveComponent as su, createCommentVNode as uu, withCtx as Me, toDisplayString as Ky, createTextVNode as Qn, withModifiers as Zy } from "vue";
import { useLayoutStore as Jy } from "org.eclipse.daanse.board.app.ui.vue.stores.layout";
import { useWidgetsStore as Qy } from "org.eclipse.daanse.board.app.ui.vue.stores.widgets";
import { defineStore as jy } from "pinia";
import { WidgetWrapper as lp, defaultConfig as tS } from "org.eclipse.daanse.board.app.ui.vue.widget.wrapper";
import { useRoute as cp, useRouter as rS } from "vue-router";
import nS from "vuedraggable";
const { identifiers: eS } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), vp = jy("widget-clipboard", () => {
  const t = se(null), e = an(() => t.value !== null);
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
var iS = ki.exports, cv;
function aS() {
  return cv || (cv = 1, (function(t, e) {
    (function() {
      var r, n = "4.17.21", a = 200, s = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", u = "Expected a function", f = "Invalid `variable` option passed into `_.template`", c = "__lodash_hash_undefined__", v = 500, p = "__lodash_placeholder__", h = 1, d = 2, m = 4, _ = 1, x = 2, y = 1, b = 2, E = 4, R = 8, M = 16, D = 32, w = 64, O = 128, I = 256, P = 512, B = 30, H = "...", W = 800, L = 16, Y = 1, X = 2, j = 3, rt = 1 / 0, V = 9007199254740991, et = 17976931348623157e292, nt = NaN, U = 4294967295, ft = U - 1, vt = U >>> 1, ut = [
        ["ary", O],
        ["bind", y],
        ["bindKey", b],
        ["curry", R],
        ["curryRight", M],
        ["flip", P],
        ["partial", D],
        ["partialRight", w],
        ["rearg", I]
      ], lt = "[object Arguments]", st = "[object Array]", dt = "[object AsyncFunction]", _t = "[object Boolean]", Dt = "[object Date]", Ft = "[object DOMException]", ot = "[object Error]", mt = "[object Function]", at = "[object GeneratorFunction]", J = "[object Map]", pt = "[object Number]", St = "[object Null]", Rt = "[object Object]", xt = "[object Promise]", Ct = "[object Proxy]", Bt = "[object RegExp]", Yt = "[object Set]", or = "[object String]", sr = "[object Symbol]", ir = "[object Undefined]", Qt = "[object WeakMap]", Ce = "[object WeakSet]", zr = "[object ArrayBuffer]", Pe = "[object DataView]", Gn = "[object Float32Array]", xi = "[object Float64Array]", $e = "[object Int8Array]", dn = "[object Int16Array]", yi = "[object Int32Array]", Fn = "[object Uint8Array]", hn = "[object Uint8ClampedArray]", Si = "[object Uint16Array]", bi = "[object Uint32Array]", $o = /\b__p \+= '';/g, Ci = /\b(__p \+=) '' \+/g, $t = /(__e\(.*?\)|\b__t\)) \+\n'';/g, yr = /&(?:amp|lt|gt|quot|#39);/g, Ei = /[&<>"']/g, da = RegExp(yr.source), Vo = RegExp(Ei.source), wi = /<%-([\s\S]+?)%>/g, Sh = /<%([\s\S]+?)%>/g, Lf = /<%=([\s\S]+?)%>/g, bh = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Ch = /^\w*$/, Eh = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Ko = /[\\^$.*+?()[\]{}|]/g, wh = RegExp(Ko.source), Zo = /^\s+/, Dh = /\s/, Mh = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Th = /\{\n\/\* \[wrapped with (.+)\] \*/, Rh = /,? & /, Oh = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Ih = /[()=,{}\[\]\/\s]/, Ph = /\\(\\)?/g, Ah = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Wf = /\w*$/, Bh = /^[-+]0x[0-9a-f]+$/i, zh = /^0b[01]+$/i, Gh = /^\[object .+?Constructor\]$/, Fh = /^0o[0-7]+$/i, Lh = /^(?:0|[1-9]\d*)$/, Wh = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, ha = /($^)/, Nh = /['\n\r\u2028\u2029\\]/g, ga = "\\ud800-\\udfff", kh = "\\u0300-\\u036f", Hh = "\\ufe20-\\ufe2f", Yh = "\\u20d0-\\u20ff", Nf = kh + Hh + Yh, kf = "\\u2700-\\u27bf", Hf = "a-z\\xdf-\\xf6\\xf8-\\xff", Xh = "\\xac\\xb1\\xd7\\xf7", qh = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Uh = "\\u2000-\\u206f", $h = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Yf = "A-Z\\xc0-\\xd6\\xd8-\\xde", Xf = "\\ufe0e\\ufe0f", qf = Xh + qh + Uh + $h, Jo = "['’]", Vh = "[" + ga + "]", Uf = "[" + qf + "]", ma = "[" + Nf + "]", $f = "\\d+", Kh = "[" + kf + "]", Vf = "[" + Hf + "]", Kf = "[^" + ga + qf + $f + kf + Hf + Yf + "]", Qo = "\\ud83c[\\udffb-\\udfff]", Zh = "(?:" + ma + "|" + Qo + ")", Zf = "[^" + ga + "]", jo = "(?:\\ud83c[\\udde6-\\uddff]){2}", ts = "[\\ud800-\\udbff][\\udc00-\\udfff]", Ln = "[" + Yf + "]", Jf = "\\u200d", Qf = "(?:" + Vf + "|" + Kf + ")", Jh = "(?:" + Ln + "|" + Kf + ")", jf = "(?:" + Jo + "(?:d|ll|m|re|s|t|ve))?", tl = "(?:" + Jo + "(?:D|LL|M|RE|S|T|VE))?", rl = Zh + "?", el = "[" + Xf + "]?", Qh = "(?:" + Jf + "(?:" + [Zf, jo, ts].join("|") + ")" + el + rl + ")*", jh = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", tg = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", nl = el + rl + Qh, rg = "(?:" + [Kh, jo, ts].join("|") + ")" + nl, eg = "(?:" + [Zf + ma + "?", ma, jo, ts, Vh].join("|") + ")", ng = RegExp(Jo, "g"), ig = RegExp(ma, "g"), rs = RegExp(Qo + "(?=" + Qo + ")|" + eg + nl, "g"), ag = RegExp([
        Ln + "?" + Vf + "+" + jf + "(?=" + [Uf, Ln, "$"].join("|") + ")",
        Jh + "+" + tl + "(?=" + [Uf, Ln + Qf, "$"].join("|") + ")",
        Ln + "?" + Qf + "+" + jf,
        Ln + "+" + tl,
        tg,
        jh,
        $f,
        rg
      ].join("|"), "g"), og = RegExp("[" + Jf + ga + Nf + Xf + "]"), sg = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, ug = [
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
      ], fg = -1, jt = {};
      jt[Gn] = jt[xi] = jt[$e] = jt[dn] = jt[yi] = jt[Fn] = jt[hn] = jt[Si] = jt[bi] = !0, jt[lt] = jt[st] = jt[zr] = jt[_t] = jt[Pe] = jt[Dt] = jt[ot] = jt[mt] = jt[J] = jt[pt] = jt[Rt] = jt[Bt] = jt[Yt] = jt[or] = jt[Qt] = !1;
      var Jt = {};
      Jt[lt] = Jt[st] = Jt[zr] = Jt[Pe] = Jt[_t] = Jt[Dt] = Jt[Gn] = Jt[xi] = Jt[$e] = Jt[dn] = Jt[yi] = Jt[J] = Jt[pt] = Jt[Rt] = Jt[Bt] = Jt[Yt] = Jt[or] = Jt[sr] = Jt[Fn] = Jt[hn] = Jt[Si] = Jt[bi] = !0, Jt[ot] = Jt[mt] = Jt[Qt] = !1;
      var lg = {
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
      }, cg = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }, vg = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      }, pg = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      }, dg = parseFloat, hg = parseInt, il = typeof no == "object" && no && no.Object === Object && no, gg = typeof self == "object" && self && self.Object === Object && self, br = il || gg || Function("return this")(), es = e && !e.nodeType && e, gn = es && !0 && t && !t.nodeType && t, al = gn && gn.exports === es, ns = al && il.process, Jr = (function() {
        try {
          var N = gn && gn.require && gn.require("util").types;
          return N || ns && ns.binding && ns.binding("util");
        } catch {
        }
      })(), ol = Jr && Jr.isArrayBuffer, sl = Jr && Jr.isDate, ul = Jr && Jr.isMap, fl = Jr && Jr.isRegExp, ll = Jr && Jr.isSet, cl = Jr && Jr.isTypedArray;
      function Xr(N, $, q) {
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
      function mg(N, $, q, gt) {
        for (var It = -1, Xt = N == null ? 0 : N.length; ++It < Xt; ) {
          var hr = N[It];
          $(gt, hr, q(hr), N);
        }
        return gt;
      }
      function Qr(N, $) {
        for (var q = -1, gt = N == null ? 0 : N.length; ++q < gt && $(N[q], q, N) !== !1; )
          ;
        return N;
      }
      function _g(N, $) {
        for (var q = N == null ? 0 : N.length; q-- && $(N[q], q, N) !== !1; )
          ;
        return N;
      }
      function vl(N, $) {
        for (var q = -1, gt = N == null ? 0 : N.length; ++q < gt; )
          if (!$(N[q], q, N))
            return !1;
        return !0;
      }
      function Ve(N, $) {
        for (var q = -1, gt = N == null ? 0 : N.length, It = 0, Xt = []; ++q < gt; ) {
          var hr = N[q];
          $(hr, q, N) && (Xt[It++] = hr);
        }
        return Xt;
      }
      function _a(N, $) {
        var q = N == null ? 0 : N.length;
        return !!q && Wn(N, $, 0) > -1;
      }
      function is(N, $, q) {
        for (var gt = -1, It = N == null ? 0 : N.length; ++gt < It; )
          if (q($, N[gt]))
            return !0;
        return !1;
      }
      function rr(N, $) {
        for (var q = -1, gt = N == null ? 0 : N.length, It = Array(gt); ++q < gt; )
          It[q] = $(N[q], q, N);
        return It;
      }
      function Ke(N, $) {
        for (var q = -1, gt = $.length, It = N.length; ++q < gt; )
          N[It + q] = $[q];
        return N;
      }
      function as(N, $, q, gt) {
        var It = -1, Xt = N == null ? 0 : N.length;
        for (gt && Xt && (q = N[++It]); ++It < Xt; )
          q = $(q, N[It], It, N);
        return q;
      }
      function xg(N, $, q, gt) {
        var It = N == null ? 0 : N.length;
        for (gt && It && (q = N[--It]); It--; )
          q = $(q, N[It], It, N);
        return q;
      }
      function os(N, $) {
        for (var q = -1, gt = N == null ? 0 : N.length; ++q < gt; )
          if ($(N[q], q, N))
            return !0;
        return !1;
      }
      var yg = ss("length");
      function Sg(N) {
        return N.split("");
      }
      function bg(N) {
        return N.match(Oh) || [];
      }
      function pl(N, $, q) {
        var gt;
        return q(N, function(It, Xt, hr) {
          if ($(It, Xt, hr))
            return gt = Xt, !1;
        }), gt;
      }
      function xa(N, $, q, gt) {
        for (var It = N.length, Xt = q + (gt ? 1 : -1); gt ? Xt-- : ++Xt < It; )
          if ($(N[Xt], Xt, N))
            return Xt;
        return -1;
      }
      function Wn(N, $, q) {
        return $ === $ ? Bg(N, $, q) : xa(N, dl, q);
      }
      function Cg(N, $, q, gt) {
        for (var It = q - 1, Xt = N.length; ++It < Xt; )
          if (gt(N[It], $))
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
      function gl(N, $, q, gt, It) {
        return It(N, function(Xt, hr, Zt) {
          q = gt ? (gt = !1, Xt) : $(q, Xt, hr, Zt);
        }), q;
      }
      function Eg(N, $) {
        var q = N.length;
        for (N.sort($); q--; )
          N[q] = N[q].value;
        return N;
      }
      function fs(N, $) {
        for (var q, gt = -1, It = N.length; ++gt < It; ) {
          var Xt = $(N[gt]);
          Xt !== r && (q = q === r ? Xt : q + Xt);
        }
        return q;
      }
      function ls(N, $) {
        for (var q = -1, gt = Array(N); ++q < N; )
          gt[q] = $(q);
        return gt;
      }
      function wg(N, $) {
        return rr($, function(q) {
          return [q, N[q]];
        });
      }
      function ml(N) {
        return N && N.slice(0, Sl(N) + 1).replace(Zo, "");
      }
      function qr(N) {
        return function($) {
          return N($);
        };
      }
      function cs(N, $) {
        return rr($, function(q) {
          return N[q];
        });
      }
      function Di(N, $) {
        return N.has($);
      }
      function _l(N, $) {
        for (var q = -1, gt = N.length; ++q < gt && Wn($, N[q], 0) > -1; )
          ;
        return q;
      }
      function xl(N, $) {
        for (var q = N.length; q-- && Wn($, N[q], 0) > -1; )
          ;
        return q;
      }
      function Dg(N, $) {
        for (var q = N.length, gt = 0; q--; )
          N[q] === $ && ++gt;
        return gt;
      }
      var Mg = us(lg), Tg = us(cg);
      function Rg(N) {
        return "\\" + pg[N];
      }
      function Og(N, $) {
        return N == null ? r : N[$];
      }
      function Nn(N) {
        return og.test(N);
      }
      function Ig(N) {
        return sg.test(N);
      }
      function Pg(N) {
        for (var $, q = []; !($ = N.next()).done; )
          q.push($.value);
        return q;
      }
      function vs(N) {
        var $ = -1, q = Array(N.size);
        return N.forEach(function(gt, It) {
          q[++$] = [It, gt];
        }), q;
      }
      function yl(N, $) {
        return function(q) {
          return N($(q));
        };
      }
      function Ze(N, $) {
        for (var q = -1, gt = N.length, It = 0, Xt = []; ++q < gt; ) {
          var hr = N[q];
          (hr === $ || hr === p) && (N[q] = p, Xt[It++] = q);
        }
        return Xt;
      }
      function ya(N) {
        var $ = -1, q = Array(N.size);
        return N.forEach(function(gt) {
          q[++$] = gt;
        }), q;
      }
      function Ag(N) {
        var $ = -1, q = Array(N.size);
        return N.forEach(function(gt) {
          q[++$] = [gt, gt];
        }), q;
      }
      function Bg(N, $, q) {
        for (var gt = q - 1, It = N.length; ++gt < It; )
          if (N[gt] === $)
            return gt;
        return -1;
      }
      function zg(N, $, q) {
        for (var gt = q + 1; gt--; )
          if (N[gt] === $)
            return gt;
        return gt;
      }
      function kn(N) {
        return Nn(N) ? Fg(N) : yg(N);
      }
      function pe(N) {
        return Nn(N) ? Lg(N) : Sg(N);
      }
      function Sl(N) {
        for (var $ = N.length; $-- && Dh.test(N.charAt($)); )
          ;
        return $;
      }
      var Gg = us(vg);
      function Fg(N) {
        for (var $ = rs.lastIndex = 0; rs.test(N); )
          ++$;
        return $;
      }
      function Lg(N) {
        return N.match(rs) || [];
      }
      function Wg(N) {
        return N.match(ag) || [];
      }
      var Ng = (function N($) {
        $ = $ == null ? br : Hn.defaults(br.Object(), $, Hn.pick(br, ug));
        var q = $.Array, gt = $.Date, It = $.Error, Xt = $.Function, hr = $.Math, Zt = $.Object, ps = $.RegExp, kg = $.String, jr = $.TypeError, Sa = q.prototype, Hg = Xt.prototype, Yn = Zt.prototype, ba = $["__core-js_shared__"], Ca = Hg.toString, Ut = Yn.hasOwnProperty, Yg = 0, bl = (function() {
          var i = /[^.]+$/.exec(ba && ba.keys && ba.keys.IE_PROTO || "");
          return i ? "Symbol(src)_1." + i : "";
        })(), Ea = Yn.toString, Xg = Ca.call(Zt), qg = br._, Ug = ps(
          "^" + Ca.call(Ut).replace(Ko, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        ), wa = al ? $.Buffer : r, Je = $.Symbol, Da = $.Uint8Array, Cl = wa ? wa.allocUnsafe : r, Ma = yl(Zt.getPrototypeOf, Zt), El = Zt.create, wl = Yn.propertyIsEnumerable, Ta = Sa.splice, Dl = Je ? Je.isConcatSpreadable : r, Mi = Je ? Je.iterator : r, mn = Je ? Je.toStringTag : r, Ra = (function() {
          try {
            var i = bn(Zt, "defineProperty");
            return i({}, "", {}), i;
          } catch {
          }
        })(), $g = $.clearTimeout !== br.clearTimeout && $.clearTimeout, Vg = gt && gt.now !== br.Date.now && gt.now, Kg = $.setTimeout !== br.setTimeout && $.setTimeout, Oa = hr.ceil, Ia = hr.floor, ds = Zt.getOwnPropertySymbols, Zg = wa ? wa.isBuffer : r, Ml = $.isFinite, Jg = Sa.join, Qg = yl(Zt.keys, Zt), gr = hr.max, wr = hr.min, jg = gt.now, t0 = $.parseInt, Tl = hr.random, r0 = Sa.reverse, hs = bn($, "DataView"), Ti = bn($, "Map"), gs = bn($, "Promise"), Xn = bn($, "Set"), Ri = bn($, "WeakMap"), Oi = bn(Zt, "create"), Pa = Ri && new Ri(), qn = {}, e0 = Cn(hs), n0 = Cn(Ti), i0 = Cn(gs), a0 = Cn(Xn), o0 = Cn(Ri), Aa = Je ? Je.prototype : r, Ii = Aa ? Aa.valueOf : r, Rl = Aa ? Aa.toString : r;
        function C(i) {
          if (ar(i) && !Pt(i) && !(i instanceof Nt)) {
            if (i instanceof te)
              return i;
            if (Ut.call(i, "__wrapped__"))
              return Oc(i);
          }
          return new te(i);
        }
        var Un = /* @__PURE__ */ (function() {
          function i() {
          }
          return function(o) {
            if (!er(o))
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
        function te(i, o) {
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
          evaluate: Sh,
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
        }, C.prototype = Ba.prototype, C.prototype.constructor = C, te.prototype = Un(Ba.prototype), te.prototype.constructor = te;
        function Nt(i) {
          this.__wrapped__ = i, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = U, this.__views__ = [];
        }
        function s0() {
          var i = new Nt(this.__wrapped__);
          return i.__actions__ = Gr(this.__actions__), i.__dir__ = this.__dir__, i.__filtered__ = this.__filtered__, i.__iteratees__ = Gr(this.__iteratees__), i.__takeCount__ = this.__takeCount__, i.__views__ = Gr(this.__views__), i;
        }
        function u0() {
          if (this.__filtered__) {
            var i = new Nt(this);
            i.__dir__ = -1, i.__filtered__ = !0;
          } else
            i = this.clone(), i.__dir__ *= -1;
          return i;
        }
        function f0() {
          var i = this.__wrapped__.value(), o = this.__dir__, l = Pt(i), g = o < 0, S = l ? i.length : 0, T = S1(0, S, this.__views__), A = T.start, G = T.end, k = G - A, K = g ? G : A - 1, Z = this.__iteratees__, tt = Z.length, ct = 0, yt = wr(k, this.__takeCount__);
          if (!l || !g && S == k && yt == k)
            return jl(i, this.__actions__);
          var Mt = [];
          t:
            for (; k-- && ct < yt; ) {
              K += o;
              for (var Gt = -1, Tt = i[K]; ++Gt < tt; ) {
                var Wt = Z[Gt], kt = Wt.iteratee, Vr = Wt.type, Or = kt(Tt);
                if (Vr == X)
                  Tt = Or;
                else if (!Or) {
                  if (Vr == Y)
                    continue t;
                  break t;
                }
              }
              Mt[ct++] = Tt;
            }
          return Mt;
        }
        Nt.prototype = Un(Ba.prototype), Nt.prototype.constructor = Nt;
        function _n(i) {
          var o = -1, l = i == null ? 0 : i.length;
          for (this.clear(); ++o < l; ) {
            var g = i[o];
            this.set(g[0], g[1]);
          }
        }
        function l0() {
          this.__data__ = Oi ? Oi(null) : {}, this.size = 0;
        }
        function c0(i) {
          var o = this.has(i) && delete this.__data__[i];
          return this.size -= o ? 1 : 0, o;
        }
        function v0(i) {
          var o = this.__data__;
          if (Oi) {
            var l = o[i];
            return l === c ? r : l;
          }
          return Ut.call(o, i) ? o[i] : r;
        }
        function p0(i) {
          var o = this.__data__;
          return Oi ? o[i] !== r : Ut.call(o, i);
        }
        function d0(i, o) {
          var l = this.__data__;
          return this.size += this.has(i) ? 0 : 1, l[i] = Oi && o === r ? c : o, this;
        }
        _n.prototype.clear = l0, _n.prototype.delete = c0, _n.prototype.get = v0, _n.prototype.has = p0, _n.prototype.set = d0;
        function Ae(i) {
          var o = -1, l = i == null ? 0 : i.length;
          for (this.clear(); ++o < l; ) {
            var g = i[o];
            this.set(g[0], g[1]);
          }
        }
        function h0() {
          this.__data__ = [], this.size = 0;
        }
        function g0(i) {
          var o = this.__data__, l = za(o, i);
          if (l < 0)
            return !1;
          var g = o.length - 1;
          return l == g ? o.pop() : Ta.call(o, l, 1), --this.size, !0;
        }
        function m0(i) {
          var o = this.__data__, l = za(o, i);
          return l < 0 ? r : o[l][1];
        }
        function _0(i) {
          return za(this.__data__, i) > -1;
        }
        function x0(i, o) {
          var l = this.__data__, g = za(l, i);
          return g < 0 ? (++this.size, l.push([i, o])) : l[g][1] = o, this;
        }
        Ae.prototype.clear = h0, Ae.prototype.delete = g0, Ae.prototype.get = m0, Ae.prototype.has = _0, Ae.prototype.set = x0;
        function Be(i) {
          var o = -1, l = i == null ? 0 : i.length;
          for (this.clear(); ++o < l; ) {
            var g = i[o];
            this.set(g[0], g[1]);
          }
        }
        function y0() {
          this.size = 0, this.__data__ = {
            hash: new _n(),
            map: new (Ti || Ae)(),
            string: new _n()
          };
        }
        function S0(i) {
          var o = $a(this, i).delete(i);
          return this.size -= o ? 1 : 0, o;
        }
        function b0(i) {
          return $a(this, i).get(i);
        }
        function C0(i) {
          return $a(this, i).has(i);
        }
        function E0(i, o) {
          var l = $a(this, i), g = l.size;
          return l.set(i, o), this.size += l.size == g ? 0 : 1, this;
        }
        Be.prototype.clear = y0, Be.prototype.delete = S0, Be.prototype.get = b0, Be.prototype.has = C0, Be.prototype.set = E0;
        function xn(i) {
          var o = -1, l = i == null ? 0 : i.length;
          for (this.__data__ = new Be(); ++o < l; )
            this.add(i[o]);
        }
        function w0(i) {
          return this.__data__.set(i, c), this;
        }
        function D0(i) {
          return this.__data__.has(i);
        }
        xn.prototype.add = xn.prototype.push = w0, xn.prototype.has = D0;
        function de(i) {
          var o = this.__data__ = new Ae(i);
          this.size = o.size;
        }
        function M0() {
          this.__data__ = new Ae(), this.size = 0;
        }
        function T0(i) {
          var o = this.__data__, l = o.delete(i);
          return this.size = o.size, l;
        }
        function R0(i) {
          return this.__data__.get(i);
        }
        function O0(i) {
          return this.__data__.has(i);
        }
        function I0(i, o) {
          var l = this.__data__;
          if (l instanceof Ae) {
            var g = l.__data__;
            if (!Ti || g.length < a - 1)
              return g.push([i, o]), this.size = ++l.size, this;
            l = this.__data__ = new Be(g);
          }
          return l.set(i, o), this.size = l.size, this;
        }
        de.prototype.clear = M0, de.prototype.delete = T0, de.prototype.get = R0, de.prototype.has = O0, de.prototype.set = I0;
        function Ol(i, o) {
          var l = Pt(i), g = !l && En(i), S = !l && !g && en(i), T = !l && !g && !S && Zn(i), A = l || g || S || T, G = A ? ls(i.length, kg) : [], k = G.length;
          for (var K in i)
            (o || Ut.call(i, K)) && !(A && // Safari 9 has enumerable `arguments.length` in strict mode.
            (K == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            S && (K == "offset" || K == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            T && (K == "buffer" || K == "byteLength" || K == "byteOffset") || // Skip index properties.
            Le(K, k))) && G.push(K);
          return G;
        }
        function Il(i) {
          var o = i.length;
          return o ? i[Ms(0, o - 1)] : r;
        }
        function P0(i, o) {
          return Va(Gr(i), yn(o, 0, i.length));
        }
        function A0(i) {
          return Va(Gr(i));
        }
        function ms(i, o, l) {
          (l !== r && !he(i[o], l) || l === r && !(o in i)) && ze(i, o, l);
        }
        function Pi(i, o, l) {
          var g = i[o];
          (!(Ut.call(i, o) && he(g, l)) || l === r && !(o in i)) && ze(i, o, l);
        }
        function za(i, o) {
          for (var l = i.length; l--; )
            if (he(i[l][0], o))
              return l;
          return -1;
        }
        function B0(i, o, l, g) {
          return Qe(i, function(S, T, A) {
            o(g, S, l(S), A);
          }), g;
        }
        function Pl(i, o) {
          return i && we(o, Sr(o), i);
        }
        function z0(i, o) {
          return i && we(o, Lr(o), i);
        }
        function ze(i, o, l) {
          o == "__proto__" && Ra ? Ra(i, o, {
            configurable: !0,
            enumerable: !0,
            value: l,
            writable: !0
          }) : i[o] = l;
        }
        function _s(i, o) {
          for (var l = -1, g = o.length, S = q(g), T = i == null; ++l < g; )
            S[l] = T ? r : Qs(i, o[l]);
          return S;
        }
        function yn(i, o, l) {
          return i === i && (l !== r && (i = i <= l ? i : l), o !== r && (i = i >= o ? i : o)), i;
        }
        function re(i, o, l, g, S, T) {
          var A, G = o & h, k = o & d, K = o & m;
          if (l && (A = S ? l(i, g, S, T) : l(i)), A !== r)
            return A;
          if (!er(i))
            return i;
          var Z = Pt(i);
          if (Z) {
            if (A = C1(i), !G)
              return Gr(i, A);
          } else {
            var tt = Dr(i), ct = tt == mt || tt == at;
            if (en(i))
              return ec(i, G);
            if (tt == Rt || tt == lt || ct && !S) {
              if (A = k || ct ? {} : Sc(i), !G)
                return k ? v1(i, z0(A, i)) : c1(i, Pl(A, i));
            } else {
              if (!Jt[tt])
                return S ? i : {};
              A = E1(i, tt, G);
            }
          }
          T || (T = new de());
          var yt = T.get(i);
          if (yt)
            return yt;
          T.set(i, A), Zc(i) ? i.forEach(function(Tt) {
            A.add(re(Tt, o, l, Tt, i, T));
          }) : Vc(i) && i.forEach(function(Tt, Wt) {
            A.set(Wt, re(Tt, o, l, Wt, i, T));
          });
          var Mt = K ? k ? Ls : Fs : k ? Lr : Sr, Gt = Z ? r : Mt(i);
          return Qr(Gt || i, function(Tt, Wt) {
            Gt && (Wt = Tt, Tt = i[Wt]), Pi(A, Wt, re(Tt, o, l, Wt, i, T));
          }), A;
        }
        function G0(i) {
          var o = Sr(i);
          return function(l) {
            return Al(l, i, o);
          };
        }
        function Al(i, o, l) {
          var g = l.length;
          if (i == null)
            return !g;
          for (i = Zt(i); g--; ) {
            var S = l[g], T = o[S], A = i[S];
            if (A === r && !(S in i) || !T(A))
              return !1;
          }
          return !0;
        }
        function Bl(i, o, l) {
          if (typeof i != "function")
            throw new jr(u);
          return Wi(function() {
            i.apply(r, l);
          }, o);
        }
        function Ai(i, o, l, g) {
          var S = -1, T = _a, A = !0, G = i.length, k = [], K = o.length;
          if (!G)
            return k;
          l && (o = rr(o, qr(l))), g ? (T = is, A = !1) : o.length >= a && (T = Di, A = !1, o = new xn(o));
          t:
            for (; ++S < G; ) {
              var Z = i[S], tt = l == null ? Z : l(Z);
              if (Z = g || Z !== 0 ? Z : 0, A && tt === tt) {
                for (var ct = K; ct--; )
                  if (o[ct] === tt)
                    continue t;
                k.push(Z);
              } else T(o, tt, g) || k.push(Z);
            }
          return k;
        }
        var Qe = sc(Ee), zl = sc(ys, !0);
        function F0(i, o) {
          var l = !0;
          return Qe(i, function(g, S, T) {
            return l = !!o(g, S, T), l;
          }), l;
        }
        function Ga(i, o, l) {
          for (var g = -1, S = i.length; ++g < S; ) {
            var T = i[g], A = o(T);
            if (A != null && (G === r ? A === A && !$r(A) : l(A, G)))
              var G = A, k = T;
          }
          return k;
        }
        function L0(i, o, l, g) {
          var S = i.length;
          for (l = zt(l), l < 0 && (l = -l > S ? 0 : S + l), g = g === r || g > S ? S : zt(g), g < 0 && (g += S), g = l > g ? 0 : Qc(g); l < g; )
            i[l++] = o;
          return i;
        }
        function Gl(i, o) {
          var l = [];
          return Qe(i, function(g, S, T) {
            o(g, S, T) && l.push(g);
          }), l;
        }
        function Cr(i, o, l, g, S) {
          var T = -1, A = i.length;
          for (l || (l = D1), S || (S = []); ++T < A; ) {
            var G = i[T];
            o > 0 && l(G) ? o > 1 ? Cr(G, o - 1, l, g, S) : Ke(S, G) : g || (S[S.length] = G);
          }
          return S;
        }
        var xs = uc(), Fl = uc(!0);
        function Ee(i, o) {
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
            i = i[De(o[l++])];
          return l && l == g ? i : r;
        }
        function Ll(i, o, l) {
          var g = o(i);
          return Pt(i) ? g : Ke(g, l(i));
        }
        function Tr(i) {
          return i == null ? i === r ? ir : St : mn && mn in Zt(i) ? y1(i) : A1(i);
        }
        function Ss(i, o) {
          return i > o;
        }
        function W0(i, o) {
          return i != null && Ut.call(i, o);
        }
        function N0(i, o) {
          return i != null && o in Zt(i);
        }
        function k0(i, o, l) {
          return i >= wr(o, l) && i < gr(o, l);
        }
        function bs(i, o, l) {
          for (var g = l ? is : _a, S = i[0].length, T = i.length, A = T, G = q(T), k = 1 / 0, K = []; A--; ) {
            var Z = i[A];
            A && o && (Z = rr(Z, qr(o))), k = wr(Z.length, k), G[A] = !l && (o || S >= 120 && Z.length >= 120) ? new xn(A && Z) : r;
          }
          Z = i[0];
          var tt = -1, ct = G[0];
          t:
            for (; ++tt < S && K.length < k; ) {
              var yt = Z[tt], Mt = o ? o(yt) : yt;
              if (yt = l || yt !== 0 ? yt : 0, !(ct ? Di(ct, Mt) : g(K, Mt, l))) {
                for (A = T; --A; ) {
                  var Gt = G[A];
                  if (!(Gt ? Di(Gt, Mt) : g(i[A], Mt, l)))
                    continue t;
                }
                ct && ct.push(Mt), K.push(yt);
              }
            }
          return K;
        }
        function H0(i, o, l, g) {
          return Ee(i, function(S, T, A) {
            o(g, l(S), T, A);
          }), g;
        }
        function Bi(i, o, l) {
          o = tn(o, i), i = wc(i, o);
          var g = i == null ? i : i[De(ne(o))];
          return g == null ? r : Xr(g, i, l);
        }
        function Wl(i) {
          return ar(i) && Tr(i) == lt;
        }
        function Y0(i) {
          return ar(i) && Tr(i) == zr;
        }
        function X0(i) {
          return ar(i) && Tr(i) == Dt;
        }
        function zi(i, o, l, g, S) {
          return i === o ? !0 : i == null || o == null || !ar(i) && !ar(o) ? i !== i && o !== o : q0(i, o, l, g, zi, S);
        }
        function q0(i, o, l, g, S, T) {
          var A = Pt(i), G = Pt(o), k = A ? st : Dr(i), K = G ? st : Dr(o);
          k = k == lt ? Rt : k, K = K == lt ? Rt : K;
          var Z = k == Rt, tt = K == Rt, ct = k == K;
          if (ct && en(i)) {
            if (!en(o))
              return !1;
            A = !0, Z = !1;
          }
          if (ct && !Z)
            return T || (T = new de()), A || Zn(i) ? _c(i, o, l, g, S, T) : _1(i, o, k, l, g, S, T);
          if (!(l & _)) {
            var yt = Z && Ut.call(i, "__wrapped__"), Mt = tt && Ut.call(o, "__wrapped__");
            if (yt || Mt) {
              var Gt = yt ? i.value() : i, Tt = Mt ? o.value() : o;
              return T || (T = new de()), S(Gt, Tt, l, g, T);
            }
          }
          return ct ? (T || (T = new de()), x1(i, o, l, g, S, T)) : !1;
        }
        function U0(i) {
          return ar(i) && Dr(i) == J;
        }
        function Cs(i, o, l, g) {
          var S = l.length, T = S, A = !g;
          if (i == null)
            return !T;
          for (i = Zt(i); S--; ) {
            var G = l[S];
            if (A && G[2] ? G[1] !== i[G[0]] : !(G[0] in i))
              return !1;
          }
          for (; ++S < T; ) {
            G = l[S];
            var k = G[0], K = i[k], Z = G[1];
            if (A && G[2]) {
              if (K === r && !(k in i))
                return !1;
            } else {
              var tt = new de();
              if (g)
                var ct = g(K, Z, k, i, o, tt);
              if (!(ct === r ? zi(Z, K, _ | x, g, tt) : ct))
                return !1;
            }
          }
          return !0;
        }
        function Nl(i) {
          if (!er(i) || T1(i))
            return !1;
          var o = We(i) ? Ug : Gh;
          return o.test(Cn(i));
        }
        function $0(i) {
          return ar(i) && Tr(i) == Bt;
        }
        function V0(i) {
          return ar(i) && Dr(i) == Yt;
        }
        function K0(i) {
          return ar(i) && to(i.length) && !!jt[Tr(i)];
        }
        function kl(i) {
          return typeof i == "function" ? i : i == null ? Wr : typeof i == "object" ? Pt(i) ? Xl(i[0], i[1]) : Yl(i) : fv(i);
        }
        function Es(i) {
          if (!Li(i))
            return Qg(i);
          var o = [];
          for (var l in Zt(i))
            Ut.call(i, l) && l != "constructor" && o.push(l);
          return o;
        }
        function Z0(i) {
          if (!er(i))
            return P1(i);
          var o = Li(i), l = [];
          for (var g in i)
            g == "constructor" && (o || !Ut.call(i, g)) || l.push(g);
          return l;
        }
        function ws(i, o) {
          return i < o;
        }
        function Hl(i, o) {
          var l = -1, g = Fr(i) ? q(i.length) : [];
          return Qe(i, function(S, T, A) {
            g[++l] = o(S, T, A);
          }), g;
        }
        function Yl(i) {
          var o = Ns(i);
          return o.length == 1 && o[0][2] ? Cc(o[0][0], o[0][1]) : function(l) {
            return l === i || Cs(l, i, o);
          };
        }
        function Xl(i, o) {
          return Hs(i) && bc(o) ? Cc(De(i), o) : function(l) {
            var g = Qs(l, i);
            return g === r && g === o ? js(l, i) : zi(o, g, _ | x);
          };
        }
        function La(i, o, l, g, S) {
          i !== o && xs(o, function(T, A) {
            if (S || (S = new de()), er(T))
              J0(i, o, A, l, La, g, S);
            else {
              var G = g ? g(Xs(i, A), T, A + "", i, o, S) : r;
              G === r && (G = T), ms(i, A, G);
            }
          }, Lr);
        }
        function J0(i, o, l, g, S, T, A) {
          var G = Xs(i, l), k = Xs(o, l), K = A.get(k);
          if (K) {
            ms(i, l, K);
            return;
          }
          var Z = T ? T(G, k, l + "", i, o, A) : r, tt = Z === r;
          if (tt) {
            var ct = Pt(k), yt = !ct && en(k), Mt = !ct && !yt && Zn(k);
            Z = k, ct || yt || Mt ? Pt(G) ? Z = G : ur(G) ? Z = Gr(G) : yt ? (tt = !1, Z = ec(k, !0)) : Mt ? (tt = !1, Z = nc(k, !0)) : Z = [] : Ni(k) || En(k) ? (Z = G, En(G) ? Z = jc(G) : (!er(G) || We(G)) && (Z = Sc(k))) : tt = !1;
          }
          tt && (A.set(k, Z), S(Z, k, g, T, A), A.delete(k)), ms(i, l, Z);
        }
        function ql(i, o) {
          var l = i.length;
          if (l)
            return o += o < 0 ? l : 0, Le(o, l) ? i[o] : r;
        }
        function Ul(i, o, l) {
          o.length ? o = rr(o, function(T) {
            return Pt(T) ? function(A) {
              return Sn(A, T.length === 1 ? T[0] : T);
            } : T;
          }) : o = [Wr];
          var g = -1;
          o = rr(o, qr(wt()));
          var S = Hl(i, function(T, A, G) {
            var k = rr(o, function(K) {
              return K(T);
            });
            return { criteria: k, index: ++g, value: T };
          });
          return Eg(S, function(T, A) {
            return l1(T, A, l);
          });
        }
        function Q0(i, o) {
          return $l(i, o, function(l, g) {
            return js(i, g);
          });
        }
        function $l(i, o, l) {
          for (var g = -1, S = o.length, T = {}; ++g < S; ) {
            var A = o[g], G = Sn(i, A);
            l(G, A) && Gi(T, tn(A, i), G);
          }
          return T;
        }
        function j0(i) {
          return function(o) {
            return Sn(o, i);
          };
        }
        function Ds(i, o, l, g) {
          var S = g ? Cg : Wn, T = -1, A = o.length, G = i;
          for (i === o && (o = Gr(o)), l && (G = rr(i, qr(l))); ++T < A; )
            for (var k = 0, K = o[T], Z = l ? l(K) : K; (k = S(G, Z, k, g)) > -1; )
              G !== i && Ta.call(G, k, 1), Ta.call(i, k, 1);
          return i;
        }
        function Vl(i, o) {
          for (var l = i ? o.length : 0, g = l - 1; l--; ) {
            var S = o[l];
            if (l == g || S !== T) {
              var T = S;
              Le(S) ? Ta.call(i, S, 1) : Os(i, S);
            }
          }
          return i;
        }
        function Ms(i, o) {
          return i + Ia(Tl() * (o - i + 1));
        }
        function t1(i, o, l, g) {
          for (var S = -1, T = gr(Oa((o - i) / (l || 1)), 0), A = q(T); T--; )
            A[g ? T : ++S] = i, i += l;
          return A;
        }
        function Ts(i, o) {
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
        function r1(i) {
          return Il(Jn(i));
        }
        function e1(i, o) {
          var l = Jn(i);
          return Va(l, yn(o, 0, l.length));
        }
        function Gi(i, o, l, g) {
          if (!er(i))
            return i;
          o = tn(o, i);
          for (var S = -1, T = o.length, A = T - 1, G = i; G != null && ++S < T; ) {
            var k = De(o[S]), K = l;
            if (k === "__proto__" || k === "constructor" || k === "prototype")
              return i;
            if (S != A) {
              var Z = G[k];
              K = g ? g(Z, k, G) : r, K === r && (K = er(Z) ? Z : Le(o[S + 1]) ? [] : {});
            }
            Pi(G, k, K), G = G[k];
          }
          return i;
        }
        var Kl = Pa ? function(i, o) {
          return Pa.set(i, o), i;
        } : Wr, n1 = Ra ? function(i, o) {
          return Ra(i, "toString", {
            configurable: !0,
            enumerable: !1,
            value: ru(o),
            writable: !0
          });
        } : Wr;
        function i1(i) {
          return Va(Jn(i));
        }
        function ee(i, o, l) {
          var g = -1, S = i.length;
          o < 0 && (o = -o > S ? 0 : S + o), l = l > S ? S : l, l < 0 && (l += S), S = o > l ? 0 : l - o >>> 0, o >>>= 0;
          for (var T = q(S); ++g < S; )
            T[g] = i[g + o];
          return T;
        }
        function a1(i, o) {
          var l;
          return Qe(i, function(g, S, T) {
            return l = o(g, S, T), !l;
          }), !!l;
        }
        function Wa(i, o, l) {
          var g = 0, S = i == null ? g : i.length;
          if (typeof o == "number" && o === o && S <= vt) {
            for (; g < S; ) {
              var T = g + S >>> 1, A = i[T];
              A !== null && !$r(A) && (l ? A <= o : A < o) ? g = T + 1 : S = T;
            }
            return S;
          }
          return Rs(i, o, Wr, l);
        }
        function Rs(i, o, l, g) {
          var S = 0, T = i == null ? 0 : i.length;
          if (T === 0)
            return 0;
          o = l(o);
          for (var A = o !== o, G = o === null, k = $r(o), K = o === r; S < T; ) {
            var Z = Ia((S + T) / 2), tt = l(i[Z]), ct = tt !== r, yt = tt === null, Mt = tt === tt, Gt = $r(tt);
            if (A)
              var Tt = g || Mt;
            else K ? Tt = Mt && (g || ct) : G ? Tt = Mt && ct && (g || !yt) : k ? Tt = Mt && ct && !yt && (g || !Gt) : yt || Gt ? Tt = !1 : Tt = g ? tt <= o : tt < o;
            Tt ? S = Z + 1 : T = Z;
          }
          return wr(T, ft);
        }
        function Zl(i, o) {
          for (var l = -1, g = i.length, S = 0, T = []; ++l < g; ) {
            var A = i[l], G = o ? o(A) : A;
            if (!l || !he(G, k)) {
              var k = G;
              T[S++] = A === 0 ? 0 : A;
            }
          }
          return T;
        }
        function Jl(i) {
          return typeof i == "number" ? i : $r(i) ? nt : +i;
        }
        function Ur(i) {
          if (typeof i == "string")
            return i;
          if (Pt(i))
            return rr(i, Ur) + "";
          if ($r(i))
            return Rl ? Rl.call(i) : "";
          var o = i + "";
          return o == "0" && 1 / i == -rt ? "-0" : o;
        }
        function je(i, o, l) {
          var g = -1, S = _a, T = i.length, A = !0, G = [], k = G;
          if (l)
            A = !1, S = is;
          else if (T >= a) {
            var K = o ? null : g1(i);
            if (K)
              return ya(K);
            A = !1, S = Di, k = new xn();
          } else
            k = o ? [] : G;
          t:
            for (; ++g < T; ) {
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
          return o = tn(o, i), i = wc(i, o), i == null || delete i[De(ne(o))];
        }
        function Ql(i, o, l, g) {
          return Gi(i, o, l(Sn(i, o)), g);
        }
        function Na(i, o, l, g) {
          for (var S = i.length, T = g ? S : -1; (g ? T-- : ++T < S) && o(i[T], T, i); )
            ;
          return l ? ee(i, g ? 0 : T, g ? T + 1 : S) : ee(i, g ? T + 1 : 0, g ? S : T);
        }
        function jl(i, o) {
          var l = i;
          return l instanceof Nt && (l = l.value()), as(o, function(g, S) {
            return S.func.apply(S.thisArg, Ke([g], S.args));
          }, l);
        }
        function Is(i, o, l) {
          var g = i.length;
          if (g < 2)
            return g ? je(i[0]) : [];
          for (var S = -1, T = q(g); ++S < g; )
            for (var A = i[S], G = -1; ++G < g; )
              G != S && (T[S] = Ai(T[S] || A, i[G], o, l));
          return je(Cr(T, 1), o, l);
        }
        function tc(i, o, l) {
          for (var g = -1, S = i.length, T = o.length, A = {}; ++g < S; ) {
            var G = g < T ? o[g] : r;
            l(A, i[g], G);
          }
          return A;
        }
        function Ps(i) {
          return ur(i) ? i : [];
        }
        function As(i) {
          return typeof i == "function" ? i : Wr;
        }
        function tn(i, o) {
          return Pt(i) ? i : Hs(i, o) ? [i] : Rc(qt(i));
        }
        var o1 = Lt;
        function rn(i, o, l) {
          var g = i.length;
          return l = l === r ? g : l, !o && l >= g ? i : ee(i, o, l);
        }
        var rc = $g || function(i) {
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
        function s1(i, o) {
          var l = o ? Bs(i.buffer) : i.buffer;
          return new i.constructor(l, i.byteOffset, i.byteLength);
        }
        function u1(i) {
          var o = new i.constructor(i.source, Wf.exec(i));
          return o.lastIndex = i.lastIndex, o;
        }
        function f1(i) {
          return Ii ? Zt(Ii.call(i)) : {};
        }
        function nc(i, o) {
          var l = o ? Bs(i.buffer) : i.buffer;
          return new i.constructor(l, i.byteOffset, i.length);
        }
        function ic(i, o) {
          if (i !== o) {
            var l = i !== r, g = i === null, S = i === i, T = $r(i), A = o !== r, G = o === null, k = o === o, K = $r(o);
            if (!G && !K && !T && i > o || T && A && k && !G && !K || g && A && k || !l && k || !S)
              return 1;
            if (!g && !T && !K && i < o || K && l && S && !g && !T || G && l && S || !A && S || !k)
              return -1;
          }
          return 0;
        }
        function l1(i, o, l) {
          for (var g = -1, S = i.criteria, T = o.criteria, A = S.length, G = l.length; ++g < A; ) {
            var k = ic(S[g], T[g]);
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
          for (var S = -1, T = i.length, A = l.length, G = -1, k = o.length, K = gr(T - A, 0), Z = q(k + K), tt = !g; ++G < k; )
            Z[G] = o[G];
          for (; ++S < A; )
            (tt || S < T) && (Z[l[S]] = i[S]);
          for (; K--; )
            Z[G++] = i[S++];
          return Z;
        }
        function oc(i, o, l, g) {
          for (var S = -1, T = i.length, A = -1, G = l.length, k = -1, K = o.length, Z = gr(T - G, 0), tt = q(Z + K), ct = !g; ++S < Z; )
            tt[S] = i[S];
          for (var yt = S; ++k < K; )
            tt[yt + k] = o[k];
          for (; ++A < G; )
            (ct || S < T) && (tt[yt + l[A]] = i[S++]);
          return tt;
        }
        function Gr(i, o) {
          var l = -1, g = i.length;
          for (o || (o = q(g)); ++l < g; )
            o[l] = i[l];
          return o;
        }
        function we(i, o, l, g) {
          var S = !l;
          l || (l = {});
          for (var T = -1, A = o.length; ++T < A; ) {
            var G = o[T], k = g ? g(l[G], i[G], G, l, i) : r;
            k === r && (k = i[G]), S ? ze(l, G, k) : Pi(l, G, k);
          }
          return l;
        }
        function c1(i, o) {
          return we(i, ks(i), o);
        }
        function v1(i, o) {
          return we(i, xc(i), o);
        }
        function ka(i, o) {
          return function(l, g) {
            var S = Pt(l) ? mg : B0, T = o ? o() : {};
            return S(l, i, wt(g, 2), T);
          };
        }
        function $n(i) {
          return Lt(function(o, l) {
            var g = -1, S = l.length, T = S > 1 ? l[S - 1] : r, A = S > 2 ? l[2] : r;
            for (T = i.length > 3 && typeof T == "function" ? (S--, T) : r, A && Rr(l[0], l[1], A) && (T = S < 3 ? r : T, S = 1), o = Zt(o); ++g < S; ) {
              var G = l[g];
              G && i(o, G, g, T);
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
            for (var S = l.length, T = o ? S : -1, A = Zt(l); (o ? T-- : ++T < S) && g(A[T], T, A) !== !1; )
              ;
            return l;
          };
        }
        function uc(i) {
          return function(o, l, g) {
            for (var S = -1, T = Zt(o), A = g(o), G = A.length; G--; ) {
              var k = A[i ? G : ++S];
              if (l(T[k], k, T) === !1)
                break;
            }
            return o;
          };
        }
        function p1(i, o, l) {
          var g = o & y, S = Fi(i);
          function T() {
            var A = this && this !== br && this instanceof T ? S : i;
            return A.apply(g ? l : this, arguments);
          }
          return T;
        }
        function fc(i) {
          return function(o) {
            o = qt(o);
            var l = Nn(o) ? pe(o) : r, g = l ? l[0] : o.charAt(0), S = l ? rn(l, 1).join("") : o.slice(1);
            return g[i]() + S;
          };
        }
        function Vn(i) {
          return function(o) {
            return as(sv(ov(o).replace(ng, "")), i, "");
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
            return er(g) ? g : l;
          };
        }
        function d1(i, o, l) {
          var g = Fi(i);
          function S() {
            for (var T = arguments.length, A = q(T), G = T, k = Kn(S); G--; )
              A[G] = arguments[G];
            var K = T < 3 && A[0] !== k && A[T - 1] !== k ? [] : Ze(A, k);
            if (T -= K.length, T < l)
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
                l - T
              );
            var Z = this && this !== br && this instanceof S ? g : i;
            return Xr(Z, this, A);
          }
          return S;
        }
        function lc(i) {
          return function(o, l, g) {
            var S = Zt(o);
            if (!Fr(o)) {
              var T = wt(l, 3);
              o = Sr(o), l = function(G) {
                return T(S[G], G, S);
              };
            }
            var A = i(o, l, g);
            return A > -1 ? S[T ? o[A] : A] : r;
          };
        }
        function cc(i) {
          return Fe(function(o) {
            var l = o.length, g = l, S = te.prototype.thru;
            for (i && o.reverse(); g--; ) {
              var T = o[g];
              if (typeof T != "function")
                throw new jr(u);
              if (S && !A && Ua(T) == "wrapper")
                var A = new te([], !0);
            }
            for (g = A ? g : l; ++g < l; ) {
              T = o[g];
              var G = Ua(T), k = G == "wrapper" ? Ws(T) : r;
              k && Ys(k[0]) && k[1] == (O | R | D | I) && !k[4].length && k[9] == 1 ? A = A[Ua(k[0])].apply(A, k[3]) : A = T.length == 1 && Ys(T) ? A[G]() : A.thru(T);
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
        function Ha(i, o, l, g, S, T, A, G, k, K) {
          var Z = o & O, tt = o & y, ct = o & b, yt = o & (R | M), Mt = o & P, Gt = ct ? r : Fi(i);
          function Tt() {
            for (var Wt = arguments.length, kt = q(Wt), Vr = Wt; Vr--; )
              kt[Vr] = arguments[Vr];
            if (yt)
              var Or = Kn(Tt), Kr = Dg(kt, Or);
            if (g && (kt = ac(kt, g, S, yt)), T && (kt = oc(kt, T, A, yt)), Wt -= Kr, yt && Wt < K) {
              var fr = Ze(kt, Or);
              return dc(
                i,
                o,
                Ha,
                Tt.placeholder,
                l,
                kt,
                fr,
                G,
                k,
                K - Wt
              );
            }
            var ge = tt ? l : this, ke = ct ? ge[i] : i;
            return Wt = kt.length, G ? kt = B1(kt, G) : Mt && Wt > 1 && kt.reverse(), Z && k < Wt && (kt.length = k), this && this !== br && this instanceof Tt && (ke = Gt || Fi(ke)), ke.apply(ge, kt);
          }
          return Tt;
        }
        function vc(i, o) {
          return function(l, g) {
            return H0(l, i, o(g), {});
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
              typeof l == "string" || typeof g == "string" ? (l = Ur(l), g = Ur(g)) : (l = Jl(l), g = Jl(g)), S = i(l, g);
            }
            return S;
          };
        }
        function zs(i) {
          return Fe(function(o) {
            return o = rr(o, qr(wt())), Lt(function(l) {
              var g = this;
              return i(o, function(S) {
                return Xr(S, g, l);
              });
            });
          });
        }
        function Xa(i, o) {
          o = o === r ? " " : Ur(o);
          var l = o.length;
          if (l < 2)
            return l ? Ts(o, i) : o;
          var g = Ts(o, Oa(i / kn(o)));
          return Nn(o) ? rn(pe(g), 0, i).join("") : g.slice(0, i);
        }
        function h1(i, o, l, g) {
          var S = o & y, T = Fi(i);
          function A() {
            for (var G = -1, k = arguments.length, K = -1, Z = g.length, tt = q(Z + k), ct = this && this !== br && this instanceof A ? T : i; ++K < Z; )
              tt[K] = g[K];
            for (; k--; )
              tt[K++] = arguments[++G];
            return Xr(ct, S ? l : this, tt);
          }
          return A;
        }
        function pc(i) {
          return function(o, l, g) {
            return g && typeof g != "number" && Rr(o, l, g) && (l = g = r), o = Ne(o), l === r ? (l = o, o = 0) : l = Ne(l), g = g === r ? o < l ? 1 : -1 : Ne(g), t1(o, l, g, i);
          };
        }
        function qa(i) {
          return function(o, l) {
            return typeof o == "string" && typeof l == "string" || (o = ie(o), l = ie(l)), i(o, l);
          };
        }
        function dc(i, o, l, g, S, T, A, G, k, K) {
          var Z = o & R, tt = Z ? A : r, ct = Z ? r : A, yt = Z ? T : r, Mt = Z ? r : T;
          o |= Z ? D : w, o &= ~(Z ? w : D), o & E || (o &= -4);
          var Gt = [
            i,
            o,
            S,
            yt,
            tt,
            Mt,
            ct,
            G,
            k,
            K
          ], Tt = l.apply(r, Gt);
          return Ys(i) && Dc(Tt, Gt), Tt.placeholder = g, Mc(Tt, i, o);
        }
        function Gs(i) {
          var o = hr[i];
          return function(l, g) {
            if (l = ie(l), g = g == null ? 0 : wr(zt(g), 292), g && Ml(l)) {
              var S = (qt(l) + "e").split("e"), T = o(S[0] + "e" + (+S[1] + g));
              return S = (qt(T) + "e").split("e"), +(S[0] + "e" + (+S[1] - g));
            }
            return o(l);
          };
        }
        var g1 = Xn && 1 / ya(new Xn([, -0]))[1] == rt ? function(i) {
          return new Xn(i);
        } : iu;
        function hc(i) {
          return function(o) {
            var l = Dr(o);
            return l == J ? vs(o) : l == Yt ? Ag(o) : wg(o, i(o));
          };
        }
        function Ge(i, o, l, g, S, T, A, G) {
          var k = o & b;
          if (!k && typeof i != "function")
            throw new jr(u);
          var K = g ? g.length : 0;
          if (K || (o &= -97, g = S = r), A = A === r ? A : gr(zt(A), 0), G = G === r ? G : zt(G), K -= S ? S.length : 0, o & w) {
            var Z = g, tt = S;
            g = S = r;
          }
          var ct = k ? r : Ws(i), yt = [
            i,
            o,
            l,
            g,
            S,
            Z,
            tt,
            T,
            A,
            G
          ];
          if (ct && I1(yt, ct), i = yt[0], o = yt[1], l = yt[2], g = yt[3], S = yt[4], G = yt[9] = yt[9] === r ? k ? 0 : i.length : gr(yt[9] - K, 0), !G && o & (R | M) && (o &= -25), !o || o == y)
            var Mt = p1(i, o, l);
          else o == R || o == M ? Mt = d1(i, o, G) : (o == D || o == (y | D)) && !S.length ? Mt = h1(i, o, l, g) : Mt = Ha.apply(r, yt);
          var Gt = ct ? Kl : Dc;
          return Mc(Gt(Mt, yt), i, o);
        }
        function gc(i, o, l, g) {
          return i === r || he(i, Yn[l]) && !Ut.call(g, l) ? o : i;
        }
        function mc(i, o, l, g, S, T) {
          return er(i) && er(o) && (T.set(o, i), La(i, o, r, mc, T), T.delete(o)), i;
        }
        function m1(i) {
          return Ni(i) ? r : i;
        }
        function _c(i, o, l, g, S, T) {
          var A = l & _, G = i.length, k = o.length;
          if (G != k && !(A && k > G))
            return !1;
          var K = T.get(i), Z = T.get(o);
          if (K && Z)
            return K == o && Z == i;
          var tt = -1, ct = !0, yt = l & x ? new xn() : r;
          for (T.set(i, o), T.set(o, i); ++tt < G; ) {
            var Mt = i[tt], Gt = o[tt];
            if (g)
              var Tt = A ? g(Gt, Mt, tt, o, i, T) : g(Mt, Gt, tt, i, o, T);
            if (Tt !== r) {
              if (Tt)
                continue;
              ct = !1;
              break;
            }
            if (yt) {
              if (!os(o, function(Wt, kt) {
                if (!Di(yt, kt) && (Mt === Wt || S(Mt, Wt, l, g, T)))
                  return yt.push(kt);
              })) {
                ct = !1;
                break;
              }
            } else if (!(Mt === Gt || S(Mt, Gt, l, g, T))) {
              ct = !1;
              break;
            }
          }
          return T.delete(i), T.delete(o), ct;
        }
        function _1(i, o, l, g, S, T, A) {
          switch (l) {
            case Pe:
              if (i.byteLength != o.byteLength || i.byteOffset != o.byteOffset)
                return !1;
              i = i.buffer, o = o.buffer;
            case zr:
              return !(i.byteLength != o.byteLength || !T(new Da(i), new Da(o)));
            case _t:
            case Dt:
            case pt:
              return he(+i, +o);
            case ot:
              return i.name == o.name && i.message == o.message;
            case Bt:
            case or:
              return i == o + "";
            case J:
              var G = vs;
            case Yt:
              var k = g & _;
              if (G || (G = ya), i.size != o.size && !k)
                return !1;
              var K = A.get(i);
              if (K)
                return K == o;
              g |= x, A.set(i, o);
              var Z = _c(G(i), G(o), g, S, T, A);
              return A.delete(i), Z;
            case sr:
              if (Ii)
                return Ii.call(i) == Ii.call(o);
          }
          return !1;
        }
        function x1(i, o, l, g, S, T) {
          var A = l & _, G = Fs(i), k = G.length, K = Fs(o), Z = K.length;
          if (k != Z && !A)
            return !1;
          for (var tt = k; tt--; ) {
            var ct = G[tt];
            if (!(A ? ct in o : Ut.call(o, ct)))
              return !1;
          }
          var yt = T.get(i), Mt = T.get(o);
          if (yt && Mt)
            return yt == o && Mt == i;
          var Gt = !0;
          T.set(i, o), T.set(o, i);
          for (var Tt = A; ++tt < k; ) {
            ct = G[tt];
            var Wt = i[ct], kt = o[ct];
            if (g)
              var Vr = A ? g(kt, Wt, ct, o, i, T) : g(Wt, kt, ct, i, o, T);
            if (!(Vr === r ? Wt === kt || S(Wt, kt, l, g, T) : Vr)) {
              Gt = !1;
              break;
            }
            Tt || (Tt = ct == "constructor");
          }
          if (Gt && !Tt) {
            var Or = i.constructor, Kr = o.constructor;
            Or != Kr && "constructor" in i && "constructor" in o && !(typeof Or == "function" && Or instanceof Or && typeof Kr == "function" && Kr instanceof Kr) && (Gt = !1);
          }
          return T.delete(i), T.delete(o), Gt;
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
          for (var o = i.name + "", l = qn[o], g = Ut.call(qn, o) ? l.length : 0; g--; ) {
            var S = l[g], T = S.func;
            if (T == null || T == i)
              return S.name;
          }
          return o;
        }
        function Kn(i) {
          var o = Ut.call(C, "placeholder") ? C : i;
          return o.placeholder;
        }
        function wt() {
          var i = C.iteratee || eu;
          return i = i === eu ? kl : i, arguments.length ? i(arguments[0], arguments[1]) : i;
        }
        function $a(i, o) {
          var l = i.__data__;
          return M1(o) ? l[typeof o == "string" ? "string" : "hash"] : l.map;
        }
        function Ns(i) {
          for (var o = Sr(i), l = o.length; l--; ) {
            var g = o[l], S = i[g];
            o[l] = [g, S, bc(S)];
          }
          return o;
        }
        function bn(i, o) {
          var l = Og(i, o);
          return Nl(l) ? l : r;
        }
        function y1(i) {
          var o = Ut.call(i, mn), l = i[mn];
          try {
            i[mn] = r;
            var g = !0;
          } catch {
          }
          var S = Ea.call(i);
          return g && (o ? i[mn] = l : delete i[mn]), S;
        }
        var ks = ds ? function(i) {
          return i == null ? [] : (i = Zt(i), Ve(ds(i), function(o) {
            return wl.call(i, o);
          }));
        } : au, xc = ds ? function(i) {
          for (var o = []; i; )
            Ke(o, ks(i)), i = Ma(i);
          return o;
        } : au, Dr = Tr;
        (hs && Dr(new hs(new ArrayBuffer(1))) != Pe || Ti && Dr(new Ti()) != J || gs && Dr(gs.resolve()) != xt || Xn && Dr(new Xn()) != Yt || Ri && Dr(new Ri()) != Qt) && (Dr = function(i) {
          var o = Tr(i), l = o == Rt ? i.constructor : r, g = l ? Cn(l) : "";
          if (g)
            switch (g) {
              case e0:
                return Pe;
              case n0:
                return J;
              case i0:
                return xt;
              case a0:
                return Yt;
              case o0:
                return Qt;
            }
          return o;
        });
        function S1(i, o, l) {
          for (var g = -1, S = l.length; ++g < S; ) {
            var T = l[g], A = T.size;
            switch (T.type) {
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
        function b1(i) {
          var o = i.match(Th);
          return o ? o[1].split(Rh) : [];
        }
        function yc(i, o, l) {
          o = tn(o, i);
          for (var g = -1, S = o.length, T = !1; ++g < S; ) {
            var A = De(o[g]);
            if (!(T = i != null && l(i, A)))
              break;
            i = i[A];
          }
          return T || ++g != S ? T : (S = i == null ? 0 : i.length, !!S && to(S) && Le(A, S) && (Pt(i) || En(i)));
        }
        function C1(i) {
          var o = i.length, l = new i.constructor(o);
          return o && typeof i[0] == "string" && Ut.call(i, "index") && (l.index = i.index, l.input = i.input), l;
        }
        function Sc(i) {
          return typeof i.constructor == "function" && !Li(i) ? Un(Ma(i)) : {};
        }
        function E1(i, o, l) {
          var g = i.constructor;
          switch (o) {
            case zr:
              return Bs(i);
            case _t:
            case Dt:
              return new g(+i);
            case Pe:
              return s1(i, l);
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
            case J:
              return new g();
            case pt:
            case or:
              return new g(i);
            case Bt:
              return u1(i);
            case Yt:
              return new g();
            case sr:
              return f1(i);
          }
        }
        function w1(i, o) {
          var l = o.length;
          if (!l)
            return i;
          var g = l - 1;
          return o[g] = (l > 1 ? "& " : "") + o[g], o = o.join(l > 2 ? ", " : " "), i.replace(Mh, `{
/* [wrapped with ` + o + `] */
`);
        }
        function D1(i) {
          return Pt(i) || En(i) || !!(Dl && i && i[Dl]);
        }
        function Le(i, o) {
          var l = typeof i;
          return o = o ?? V, !!o && (l == "number" || l != "symbol" && Lh.test(i)) && i > -1 && i % 1 == 0 && i < o;
        }
        function Rr(i, o, l) {
          if (!er(l))
            return !1;
          var g = typeof o;
          return (g == "number" ? Fr(l) && Le(o, l.length) : g == "string" && o in l) ? he(l[o], i) : !1;
        }
        function Hs(i, o) {
          if (Pt(i))
            return !1;
          var l = typeof i;
          return l == "number" || l == "symbol" || l == "boolean" || i == null || $r(i) ? !0 : Ch.test(i) || !bh.test(i) || o != null && i in Zt(o);
        }
        function M1(i) {
          var o = typeof i;
          return o == "string" || o == "number" || o == "symbol" || o == "boolean" ? i !== "__proto__" : i === null;
        }
        function Ys(i) {
          var o = Ua(i), l = C[o];
          if (typeof l != "function" || !(o in Nt.prototype))
            return !1;
          if (i === l)
            return !0;
          var g = Ws(l);
          return !!g && i === g[0];
        }
        function T1(i) {
          return !!bl && bl in i;
        }
        var R1 = ba ? We : ou;
        function Li(i) {
          var o = i && i.constructor, l = typeof o == "function" && o.prototype || Yn;
          return i === l;
        }
        function bc(i) {
          return i === i && !er(i);
        }
        function Cc(i, o) {
          return function(l) {
            return l == null ? !1 : l[i] === o && (o !== r || i in Zt(l));
          };
        }
        function O1(i) {
          var o = Qa(i, function(g) {
            return l.size === v && l.clear(), g;
          }), l = o.cache;
          return o;
        }
        function I1(i, o) {
          var l = i[1], g = o[1], S = l | g, T = S < (y | b | O), A = g == O && l == R || g == O && l == I && i[7].length <= o[8] || g == (O | I) && o[7].length <= o[8] && l == R;
          if (!(T || A))
            return i;
          g & y && (i[2] = o[2], S |= l & y ? 0 : E);
          var G = o[3];
          if (G) {
            var k = i[3];
            i[3] = k ? ac(k, G, o[4]) : G, i[4] = k ? Ze(i[3], p) : o[4];
          }
          return G = o[5], G && (k = i[5], i[5] = k ? oc(k, G, o[6]) : G, i[6] = k ? Ze(i[5], p) : o[6]), G = o[7], G && (i[7] = G), g & O && (i[8] = i[8] == null ? o[8] : wr(i[8], o[8])), i[9] == null && (i[9] = o[9]), i[0] = o[0], i[1] = S, i;
        }
        function P1(i) {
          var o = [];
          if (i != null)
            for (var l in Zt(i))
              o.push(l);
          return o;
        }
        function A1(i) {
          return Ea.call(i);
        }
        function Ec(i, o, l) {
          return o = gr(o === r ? i.length - 1 : o, 0), function() {
            for (var g = arguments, S = -1, T = gr(g.length - o, 0), A = q(T); ++S < T; )
              A[S] = g[o + S];
            S = -1;
            for (var G = q(o + 1); ++S < o; )
              G[S] = g[S];
            return G[o] = l(A), Xr(i, this, G);
          };
        }
        function wc(i, o) {
          return o.length < 2 ? i : Sn(i, ee(o, 0, -1));
        }
        function B1(i, o) {
          for (var l = i.length, g = wr(o.length, l), S = Gr(i); g--; ) {
            var T = o[g];
            i[g] = Le(T, l) ? S[T] : r;
          }
          return i;
        }
        function Xs(i, o) {
          if (!(o === "constructor" && typeof i[o] == "function") && o != "__proto__")
            return i[o];
        }
        var Dc = Tc(Kl), Wi = Kg || function(i, o) {
          return br.setTimeout(i, o);
        }, qs = Tc(n1);
        function Mc(i, o, l) {
          var g = o + "";
          return qs(i, w1(g, z1(b1(g), l)));
        }
        function Tc(i) {
          var o = 0, l = 0;
          return function() {
            var g = jg(), S = L - (g - l);
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
            var T = Ms(l, S), A = i[T];
            i[T] = i[l], i[l] = A;
          }
          return i.length = o, i;
        }
        var Rc = O1(function(i) {
          var o = [];
          return i.charCodeAt(0) === 46 && o.push(""), i.replace(Eh, function(l, g, S, T) {
            o.push(S ? T.replace(Ph, "$1") : g || l);
          }), o;
        });
        function De(i) {
          if (typeof i == "string" || $r(i))
            return i;
          var o = i + "";
          return o == "0" && 1 / i == -rt ? "-0" : o;
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
        function z1(i, o) {
          return Qr(ut, function(l) {
            var g = "_." + l[0];
            o & l[1] && !_a(i, g) && i.push(g);
          }), i.sort();
        }
        function Oc(i) {
          if (i instanceof Nt)
            return i.clone();
          var o = new te(i.__wrapped__, i.__chain__);
          return o.__actions__ = Gr(i.__actions__), o.__index__ = i.__index__, o.__values__ = i.__values__, o;
        }
        function G1(i, o, l) {
          (l ? Rr(i, o, l) : o === r) ? o = 1 : o = gr(zt(o), 0);
          var g = i == null ? 0 : i.length;
          if (!g || o < 1)
            return [];
          for (var S = 0, T = 0, A = q(Oa(g / o)); S < g; )
            A[T++] = ee(i, S, S += o);
          return A;
        }
        function F1(i) {
          for (var o = -1, l = i == null ? 0 : i.length, g = 0, S = []; ++o < l; ) {
            var T = i[o];
            T && (S[g++] = T);
          }
          return S;
        }
        function L1() {
          var i = arguments.length;
          if (!i)
            return [];
          for (var o = q(i - 1), l = arguments[0], g = i; g--; )
            o[g - 1] = arguments[g];
          return Ke(Pt(l) ? Gr(l) : [l], Cr(o, 1));
        }
        var W1 = Lt(function(i, o) {
          return ur(i) ? Ai(i, Cr(o, 1, ur, !0)) : [];
        }), N1 = Lt(function(i, o) {
          var l = ne(o);
          return ur(l) && (l = r), ur(i) ? Ai(i, Cr(o, 1, ur, !0), wt(l, 2)) : [];
        }), k1 = Lt(function(i, o) {
          var l = ne(o);
          return ur(l) && (l = r), ur(i) ? Ai(i, Cr(o, 1, ur, !0), r, l) : [];
        });
        function H1(i, o, l) {
          var g = i == null ? 0 : i.length;
          return g ? (o = l || o === r ? 1 : zt(o), ee(i, o < 0 ? 0 : o, g)) : [];
        }
        function Y1(i, o, l) {
          var g = i == null ? 0 : i.length;
          return g ? (o = l || o === r ? 1 : zt(o), o = g - o, ee(i, 0, o < 0 ? 0 : o)) : [];
        }
        function X1(i, o) {
          return i && i.length ? Na(i, wt(o, 3), !0, !0) : [];
        }
        function q1(i, o) {
          return i && i.length ? Na(i, wt(o, 3), !0) : [];
        }
        function U1(i, o, l, g) {
          var S = i == null ? 0 : i.length;
          return S ? (l && typeof l != "number" && Rr(i, o, l) && (l = 0, g = S), L0(i, o, l, g)) : [];
        }
        function Ic(i, o, l) {
          var g = i == null ? 0 : i.length;
          if (!g)
            return -1;
          var S = l == null ? 0 : zt(l);
          return S < 0 && (S = gr(g + S, 0)), xa(i, wt(o, 3), S);
        }
        function Pc(i, o, l) {
          var g = i == null ? 0 : i.length;
          if (!g)
            return -1;
          var S = g - 1;
          return l !== r && (S = zt(l), S = l < 0 ? gr(g + S, 0) : wr(S, g - 1)), xa(i, wt(o, 3), S, !0);
        }
        function Ac(i) {
          var o = i == null ? 0 : i.length;
          return o ? Cr(i, 1) : [];
        }
        function $1(i) {
          var o = i == null ? 0 : i.length;
          return o ? Cr(i, rt) : [];
        }
        function V1(i, o) {
          var l = i == null ? 0 : i.length;
          return l ? (o = o === r ? 1 : zt(o), Cr(i, o)) : [];
        }
        function K1(i) {
          for (var o = -1, l = i == null ? 0 : i.length, g = {}; ++o < l; ) {
            var S = i[o];
            g[S[0]] = S[1];
          }
          return g;
        }
        function Bc(i) {
          return i && i.length ? i[0] : r;
        }
        function Z1(i, o, l) {
          var g = i == null ? 0 : i.length;
          if (!g)
            return -1;
          var S = l == null ? 0 : zt(l);
          return S < 0 && (S = gr(g + S, 0)), Wn(i, o, S);
        }
        function J1(i) {
          var o = i == null ? 0 : i.length;
          return o ? ee(i, 0, -1) : [];
        }
        var Q1 = Lt(function(i) {
          var o = rr(i, Ps);
          return o.length && o[0] === i[0] ? bs(o) : [];
        }), j1 = Lt(function(i) {
          var o = ne(i), l = rr(i, Ps);
          return o === ne(l) ? o = r : l.pop(), l.length && l[0] === i[0] ? bs(l, wt(o, 2)) : [];
        }), tm = Lt(function(i) {
          var o = ne(i), l = rr(i, Ps);
          return o = typeof o == "function" ? o : r, o && l.pop(), l.length && l[0] === i[0] ? bs(l, r, o) : [];
        });
        function rm(i, o) {
          return i == null ? "" : Jg.call(i, o);
        }
        function ne(i) {
          var o = i == null ? 0 : i.length;
          return o ? i[o - 1] : r;
        }
        function em(i, o, l) {
          var g = i == null ? 0 : i.length;
          if (!g)
            return -1;
          var S = g;
          return l !== r && (S = zt(l), S = S < 0 ? gr(g + S, 0) : wr(S, g - 1)), o === o ? zg(i, o, S) : xa(i, dl, S, !0);
        }
        function nm(i, o) {
          return i && i.length ? ql(i, zt(o)) : r;
        }
        var im = Lt(zc);
        function zc(i, o) {
          return i && i.length && o && o.length ? Ds(i, o) : i;
        }
        function am(i, o, l) {
          return i && i.length && o && o.length ? Ds(i, o, wt(l, 2)) : i;
        }
        function om(i, o, l) {
          return i && i.length && o && o.length ? Ds(i, o, r, l) : i;
        }
        var sm = Fe(function(i, o) {
          var l = i == null ? 0 : i.length, g = _s(i, o);
          return Vl(i, rr(o, function(S) {
            return Le(S, l) ? +S : S;
          }).sort(ic)), g;
        });
        function um(i, o) {
          var l = [];
          if (!(i && i.length))
            return l;
          var g = -1, S = [], T = i.length;
          for (o = wt(o, 3); ++g < T; ) {
            var A = i[g];
            o(A, g, i) && (l.push(A), S.push(g));
          }
          return Vl(i, S), l;
        }
        function Us(i) {
          return i == null ? i : r0.call(i);
        }
        function fm(i, o, l) {
          var g = i == null ? 0 : i.length;
          return g ? (l && typeof l != "number" && Rr(i, o, l) ? (o = 0, l = g) : (o = o == null ? 0 : zt(o), l = l === r ? g : zt(l)), ee(i, o, l)) : [];
        }
        function lm(i, o) {
          return Wa(i, o);
        }
        function cm(i, o, l) {
          return Rs(i, o, wt(l, 2));
        }
        function vm(i, o) {
          var l = i == null ? 0 : i.length;
          if (l) {
            var g = Wa(i, o);
            if (g < l && he(i[g], o))
              return g;
          }
          return -1;
        }
        function pm(i, o) {
          return Wa(i, o, !0);
        }
        function dm(i, o, l) {
          return Rs(i, o, wt(l, 2), !0);
        }
        function hm(i, o) {
          var l = i == null ? 0 : i.length;
          if (l) {
            var g = Wa(i, o, !0) - 1;
            if (he(i[g], o))
              return g;
          }
          return -1;
        }
        function gm(i) {
          return i && i.length ? Zl(i) : [];
        }
        function mm(i, o) {
          return i && i.length ? Zl(i, wt(o, 2)) : [];
        }
        function _m(i) {
          var o = i == null ? 0 : i.length;
          return o ? ee(i, 1, o) : [];
        }
        function xm(i, o, l) {
          return i && i.length ? (o = l || o === r ? 1 : zt(o), ee(i, 0, o < 0 ? 0 : o)) : [];
        }
        function ym(i, o, l) {
          var g = i == null ? 0 : i.length;
          return g ? (o = l || o === r ? 1 : zt(o), o = g - o, ee(i, o < 0 ? 0 : o, g)) : [];
        }
        function Sm(i, o) {
          return i && i.length ? Na(i, wt(o, 3), !1, !0) : [];
        }
        function bm(i, o) {
          return i && i.length ? Na(i, wt(o, 3)) : [];
        }
        var Cm = Lt(function(i) {
          return je(Cr(i, 1, ur, !0));
        }), Em = Lt(function(i) {
          var o = ne(i);
          return ur(o) && (o = r), je(Cr(i, 1, ur, !0), wt(o, 2));
        }), wm = Lt(function(i) {
          var o = ne(i);
          return o = typeof o == "function" ? o : r, je(Cr(i, 1, ur, !0), r, o);
        });
        function Dm(i) {
          return i && i.length ? je(i) : [];
        }
        function Mm(i, o) {
          return i && i.length ? je(i, wt(o, 2)) : [];
        }
        function Tm(i, o) {
          return o = typeof o == "function" ? o : r, i && i.length ? je(i, r, o) : [];
        }
        function $s(i) {
          if (!(i && i.length))
            return [];
          var o = 0;
          return i = Ve(i, function(l) {
            if (ur(l))
              return o = gr(l.length, o), !0;
          }), ls(o, function(l) {
            return rr(i, ss(l));
          });
        }
        function Gc(i, o) {
          if (!(i && i.length))
            return [];
          var l = $s(i);
          return o == null ? l : rr(l, function(g) {
            return Xr(o, r, g);
          });
        }
        var Rm = Lt(function(i, o) {
          return ur(i) ? Ai(i, o) : [];
        }), Om = Lt(function(i) {
          return Is(Ve(i, ur));
        }), Im = Lt(function(i) {
          var o = ne(i);
          return ur(o) && (o = r), Is(Ve(i, ur), wt(o, 2));
        }), Pm = Lt(function(i) {
          var o = ne(i);
          return o = typeof o == "function" ? o : r, Is(Ve(i, ur), r, o);
        }), Am = Lt($s);
        function Bm(i, o) {
          return tc(i || [], o || [], Pi);
        }
        function zm(i, o) {
          return tc(i || [], o || [], Gi);
        }
        var Gm = Lt(function(i) {
          var o = i.length, l = o > 1 ? i[o - 1] : r;
          return l = typeof l == "function" ? (i.pop(), l) : r, Gc(i, l);
        });
        function Fc(i) {
          var o = C(i);
          return o.__chain__ = !0, o;
        }
        function Fm(i, o) {
          return o(i), i;
        }
        function Ka(i, o) {
          return o(i);
        }
        var Lm = Fe(function(i) {
          var o = i.length, l = o ? i[0] : 0, g = this.__wrapped__, S = function(T) {
            return _s(T, i);
          };
          return o > 1 || this.__actions__.length || !(g instanceof Nt) || !Le(l) ? this.thru(S) : (g = g.slice(l, +l + (o ? 1 : 0)), g.__actions__.push({
            func: Ka,
            args: [S],
            thisArg: r
          }), new te(g, this.__chain__).thru(function(T) {
            return o && !T.length && T.push(r), T;
          }));
        });
        function Wm() {
          return Fc(this);
        }
        function Nm() {
          return new te(this.value(), this.__chain__);
        }
        function km() {
          this.__values__ === r && (this.__values__ = Jc(this.value()));
          var i = this.__index__ >= this.__values__.length, o = i ? r : this.__values__[this.__index__++];
          return { done: i, value: o };
        }
        function Hm() {
          return this;
        }
        function Ym(i) {
          for (var o, l = this; l instanceof Ba; ) {
            var g = Oc(l);
            g.__index__ = 0, g.__values__ = r, o ? S.__wrapped__ = g : o = g;
            var S = g;
            l = l.__wrapped__;
          }
          return S.__wrapped__ = i, o;
        }
        function Xm() {
          var i = this.__wrapped__;
          if (i instanceof Nt) {
            var o = i;
            return this.__actions__.length && (o = new Nt(this)), o = o.reverse(), o.__actions__.push({
              func: Ka,
              args: [Us],
              thisArg: r
            }), new te(o, this.__chain__);
          }
          return this.thru(Us);
        }
        function qm() {
          return jl(this.__wrapped__, this.__actions__);
        }
        var Um = ka(function(i, o, l) {
          Ut.call(i, l) ? ++i[l] : ze(i, l, 1);
        });
        function $m(i, o, l) {
          var g = Pt(i) ? vl : F0;
          return l && Rr(i, o, l) && (o = r), g(i, wt(o, 3));
        }
        function Vm(i, o) {
          var l = Pt(i) ? Ve : Gl;
          return l(i, wt(o, 3));
        }
        var Km = lc(Ic), Zm = lc(Pc);
        function Jm(i, o) {
          return Cr(Za(i, o), 1);
        }
        function Qm(i, o) {
          return Cr(Za(i, o), rt);
        }
        function jm(i, o, l) {
          return l = l === r ? 1 : zt(l), Cr(Za(i, o), l);
        }
        function Lc(i, o) {
          var l = Pt(i) ? Qr : Qe;
          return l(i, wt(o, 3));
        }
        function Wc(i, o) {
          var l = Pt(i) ? _g : zl;
          return l(i, wt(o, 3));
        }
        var t_ = ka(function(i, o, l) {
          Ut.call(i, l) ? i[l].push(o) : ze(i, l, [o]);
        });
        function r_(i, o, l, g) {
          i = Fr(i) ? i : Jn(i), l = l && !g ? zt(l) : 0;
          var S = i.length;
          return l < 0 && (l = gr(S + l, 0)), ro(i) ? l <= S && i.indexOf(o, l) > -1 : !!S && Wn(i, o, l) > -1;
        }
        var e_ = Lt(function(i, o, l) {
          var g = -1, S = typeof o == "function", T = Fr(i) ? q(i.length) : [];
          return Qe(i, function(A) {
            T[++g] = S ? Xr(o, A, l) : Bi(A, o, l);
          }), T;
        }), n_ = ka(function(i, o, l) {
          ze(i, l, o);
        });
        function Za(i, o) {
          var l = Pt(i) ? rr : Hl;
          return l(i, wt(o, 3));
        }
        function i_(i, o, l, g) {
          return i == null ? [] : (Pt(o) || (o = o == null ? [] : [o]), l = g ? r : l, Pt(l) || (l = l == null ? [] : [l]), Ul(i, o, l));
        }
        var a_ = ka(function(i, o, l) {
          i[l ? 0 : 1].push(o);
        }, function() {
          return [[], []];
        });
        function o_(i, o, l) {
          var g = Pt(i) ? as : gl, S = arguments.length < 3;
          return g(i, wt(o, 4), l, S, Qe);
        }
        function s_(i, o, l) {
          var g = Pt(i) ? xg : gl, S = arguments.length < 3;
          return g(i, wt(o, 4), l, S, zl);
        }
        function u_(i, o) {
          var l = Pt(i) ? Ve : Gl;
          return l(i, ja(wt(o, 3)));
        }
        function f_(i) {
          var o = Pt(i) ? Il : r1;
          return o(i);
        }
        function l_(i, o, l) {
          (l ? Rr(i, o, l) : o === r) ? o = 1 : o = zt(o);
          var g = Pt(i) ? P0 : e1;
          return g(i, o);
        }
        function c_(i) {
          var o = Pt(i) ? A0 : i1;
          return o(i);
        }
        function v_(i) {
          if (i == null)
            return 0;
          if (Fr(i))
            return ro(i) ? kn(i) : i.length;
          var o = Dr(i);
          return o == J || o == Yt ? i.size : Es(i).length;
        }
        function p_(i, o, l) {
          var g = Pt(i) ? os : a1;
          return l && Rr(i, o, l) && (o = r), g(i, wt(o, 3));
        }
        var d_ = Lt(function(i, o) {
          if (i == null)
            return [];
          var l = o.length;
          return l > 1 && Rr(i, o[0], o[1]) ? o = [] : l > 2 && Rr(o[0], o[1], o[2]) && (o = [o[0]]), Ul(i, Cr(o, 1), []);
        }), Ja = Vg || function() {
          return br.Date.now();
        };
        function h_(i, o) {
          if (typeof o != "function")
            throw new jr(u);
          return i = zt(i), function() {
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
            throw new jr(u);
          return i = zt(i), function() {
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
          var g = Ge(i, R, r, r, r, r, r, o);
          return g.placeholder = Yc.placeholder, g;
        }
        function Xc(i, o, l) {
          o = l ? r : o;
          var g = Ge(i, M, r, r, r, r, r, o);
          return g.placeholder = Xc.placeholder, g;
        }
        function qc(i, o, l) {
          var g, S, T, A, G, k, K = 0, Z = !1, tt = !1, ct = !0;
          if (typeof i != "function")
            throw new jr(u);
          o = ie(o) || 0, er(l) && (Z = !!l.leading, tt = "maxWait" in l, T = tt ? gr(ie(l.maxWait) || 0, o) : T, ct = "trailing" in l ? !!l.trailing : ct);
          function yt(fr) {
            var ge = g, ke = S;
            return g = S = r, K = fr, A = i.apply(ke, ge), A;
          }
          function Mt(fr) {
            return K = fr, G = Wi(Wt, o), Z ? yt(fr) : A;
          }
          function Gt(fr) {
            var ge = fr - k, ke = fr - K, lv = o - ge;
            return tt ? wr(lv, T - ke) : lv;
          }
          function Tt(fr) {
            var ge = fr - k, ke = fr - K;
            return k === r || ge >= o || ge < 0 || tt && ke >= T;
          }
          function Wt() {
            var fr = Ja();
            if (Tt(fr))
              return kt(fr);
            G = Wi(Wt, Gt(fr));
          }
          function kt(fr) {
            return G = r, ct && g ? yt(fr) : (g = S = r, A);
          }
          function Vr() {
            G !== r && rc(G), K = 0, g = k = S = G = r;
          }
          function Or() {
            return G === r ? A : kt(Ja());
          }
          function Kr() {
            var fr = Ja(), ge = Tt(fr);
            if (g = arguments, S = this, k = fr, ge) {
              if (G === r)
                return Mt(k);
              if (tt)
                return rc(G), G = Wi(Wt, o), yt(k);
            }
            return G === r && (G = Wi(Wt, o)), A;
          }
          return Kr.cancel = Vr, Kr.flush = Or, Kr;
        }
        var g_ = Lt(function(i, o) {
          return Bl(i, 1, o);
        }), m_ = Lt(function(i, o, l) {
          return Bl(i, ie(o) || 0, l);
        });
        function __(i) {
          return Ge(i, P);
        }
        function Qa(i, o) {
          if (typeof i != "function" || o != null && typeof o != "function")
            throw new jr(u);
          var l = function() {
            var g = arguments, S = o ? o.apply(this, g) : g[0], T = l.cache;
            if (T.has(S))
              return T.get(S);
            var A = i.apply(this, g);
            return l.cache = T.set(S, A) || T, A;
          };
          return l.cache = new (Qa.Cache || Be)(), l;
        }
        Qa.Cache = Be;
        function ja(i) {
          if (typeof i != "function")
            throw new jr(u);
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
        function x_(i) {
          return kc(2, i);
        }
        var y_ = o1(function(i, o) {
          o = o.length == 1 && Pt(o[0]) ? rr(o[0], qr(wt())) : rr(Cr(o, 1), qr(wt()));
          var l = o.length;
          return Lt(function(g) {
            for (var S = -1, T = wr(g.length, l); ++S < T; )
              g[S] = o[S].call(this, g[S]);
            return Xr(i, this, g);
          });
        }), Ks = Lt(function(i, o) {
          var l = Ze(o, Kn(Ks));
          return Ge(i, D, r, o, l);
        }), Uc = Lt(function(i, o) {
          var l = Ze(o, Kn(Uc));
          return Ge(i, w, r, o, l);
        }), S_ = Fe(function(i, o) {
          return Ge(i, I, r, r, r, o);
        });
        function b_(i, o) {
          if (typeof i != "function")
            throw new jr(u);
          return o = o === r ? o : zt(o), Lt(i, o);
        }
        function C_(i, o) {
          if (typeof i != "function")
            throw new jr(u);
          return o = o == null ? 0 : gr(zt(o), 0), Lt(function(l) {
            var g = l[o], S = rn(l, 0, o);
            return g && Ke(S, g), Xr(i, this, S);
          });
        }
        function E_(i, o, l) {
          var g = !0, S = !0;
          if (typeof i != "function")
            throw new jr(u);
          return er(l) && (g = "leading" in l ? !!l.leading : g, S = "trailing" in l ? !!l.trailing : S), qc(i, o, {
            leading: g,
            maxWait: o,
            trailing: S
          });
        }
        function w_(i) {
          return Nc(i, 1);
        }
        function D_(i, o) {
          return Ks(As(o), i);
        }
        function M_() {
          if (!arguments.length)
            return [];
          var i = arguments[0];
          return Pt(i) ? i : [i];
        }
        function T_(i) {
          return re(i, m);
        }
        function R_(i, o) {
          return o = typeof o == "function" ? o : r, re(i, m, o);
        }
        function O_(i) {
          return re(i, h | m);
        }
        function I_(i, o) {
          return o = typeof o == "function" ? o : r, re(i, h | m, o);
        }
        function P_(i, o) {
          return o == null || Al(i, o, Sr(o));
        }
        function he(i, o) {
          return i === o || i !== i && o !== o;
        }
        var A_ = qa(Ss), B_ = qa(function(i, o) {
          return i >= o;
        }), En = Wl(/* @__PURE__ */ (function() {
          return arguments;
        })()) ? Wl : function(i) {
          return ar(i) && Ut.call(i, "callee") && !wl.call(i, "callee");
        }, Pt = q.isArray, z_ = ol ? qr(ol) : Y0;
        function Fr(i) {
          return i != null && to(i.length) && !We(i);
        }
        function ur(i) {
          return ar(i) && Fr(i);
        }
        function G_(i) {
          return i === !0 || i === !1 || ar(i) && Tr(i) == _t;
        }
        var en = Zg || ou, F_ = sl ? qr(sl) : X0;
        function L_(i) {
          return ar(i) && i.nodeType === 1 && !Ni(i);
        }
        function W_(i) {
          if (i == null)
            return !0;
          if (Fr(i) && (Pt(i) || typeof i == "string" || typeof i.splice == "function" || en(i) || Zn(i) || En(i)))
            return !i.length;
          var o = Dr(i);
          if (o == J || o == Yt)
            return !i.size;
          if (Li(i))
            return !Es(i).length;
          for (var l in i)
            if (Ut.call(i, l))
              return !1;
          return !0;
        }
        function N_(i, o) {
          return zi(i, o);
        }
        function k_(i, o, l) {
          l = typeof l == "function" ? l : r;
          var g = l ? l(i, o) : r;
          return g === r ? zi(i, o, r, l) : !!g;
        }
        function Zs(i) {
          if (!ar(i))
            return !1;
          var o = Tr(i);
          return o == ot || o == Ft || typeof i.message == "string" && typeof i.name == "string" && !Ni(i);
        }
        function H_(i) {
          return typeof i == "number" && Ml(i);
        }
        function We(i) {
          if (!er(i))
            return !1;
          var o = Tr(i);
          return o == mt || o == at || o == dt || o == Ct;
        }
        function $c(i) {
          return typeof i == "number" && i == zt(i);
        }
        function to(i) {
          return typeof i == "number" && i > -1 && i % 1 == 0 && i <= V;
        }
        function er(i) {
          var o = typeof i;
          return i != null && (o == "object" || o == "function");
        }
        function ar(i) {
          return i != null && typeof i == "object";
        }
        var Vc = ul ? qr(ul) : U0;
        function Y_(i, o) {
          return i === o || Cs(i, o, Ns(o));
        }
        function X_(i, o, l) {
          return l = typeof l == "function" ? l : r, Cs(i, o, Ns(o), l);
        }
        function q_(i) {
          return Kc(i) && i != +i;
        }
        function U_(i) {
          if (R1(i))
            throw new It(s);
          return Nl(i);
        }
        function $_(i) {
          return i === null;
        }
        function V_(i) {
          return i == null;
        }
        function Kc(i) {
          return typeof i == "number" || ar(i) && Tr(i) == pt;
        }
        function Ni(i) {
          if (!ar(i) || Tr(i) != Rt)
            return !1;
          var o = Ma(i);
          if (o === null)
            return !0;
          var l = Ut.call(o, "constructor") && o.constructor;
          return typeof l == "function" && l instanceof l && Ca.call(l) == Xg;
        }
        var Js = fl ? qr(fl) : $0;
        function K_(i) {
          return $c(i) && i >= -V && i <= V;
        }
        var Zc = ll ? qr(ll) : V0;
        function ro(i) {
          return typeof i == "string" || !Pt(i) && ar(i) && Tr(i) == or;
        }
        function $r(i) {
          return typeof i == "symbol" || ar(i) && Tr(i) == sr;
        }
        var Zn = cl ? qr(cl) : K0;
        function Z_(i) {
          return i === r;
        }
        function J_(i) {
          return ar(i) && Dr(i) == Qt;
        }
        function Q_(i) {
          return ar(i) && Tr(i) == Ce;
        }
        var j_ = qa(ws), tx = qa(function(i, o) {
          return i <= o;
        });
        function Jc(i) {
          if (!i)
            return [];
          if (Fr(i))
            return ro(i) ? pe(i) : Gr(i);
          if (Mi && i[Mi])
            return Pg(i[Mi]());
          var o = Dr(i), l = o == J ? vs : o == Yt ? ya : Jn;
          return l(i);
        }
        function Ne(i) {
          if (!i)
            return i === 0 ? i : 0;
          if (i = ie(i), i === rt || i === -rt) {
            var o = i < 0 ? -1 : 1;
            return o * et;
          }
          return i === i ? i : 0;
        }
        function zt(i) {
          var o = Ne(i), l = o % 1;
          return o === o ? l ? o - l : o : 0;
        }
        function Qc(i) {
          return i ? yn(zt(i), 0, U) : 0;
        }
        function ie(i) {
          if (typeof i == "number")
            return i;
          if ($r(i))
            return nt;
          if (er(i)) {
            var o = typeof i.valueOf == "function" ? i.valueOf() : i;
            i = er(o) ? o + "" : o;
          }
          if (typeof i != "string")
            return i === 0 ? i : +i;
          i = ml(i);
          var l = zh.test(i);
          return l || Fh.test(i) ? hg(i.slice(2), l ? 2 : 8) : Bh.test(i) ? nt : +i;
        }
        function jc(i) {
          return we(i, Lr(i));
        }
        function rx(i) {
          return i ? yn(zt(i), -V, V) : i === 0 ? i : 0;
        }
        function qt(i) {
          return i == null ? "" : Ur(i);
        }
        var ex = $n(function(i, o) {
          if (Li(o) || Fr(o)) {
            we(o, Sr(o), i);
            return;
          }
          for (var l in o)
            Ut.call(o, l) && Pi(i, l, o[l]);
        }), tv = $n(function(i, o) {
          we(o, Lr(o), i);
        }), eo = $n(function(i, o, l, g) {
          we(o, Lr(o), i, g);
        }), nx = $n(function(i, o, l, g) {
          we(o, Sr(o), i, g);
        }), ix = Fe(_s);
        function ax(i, o) {
          var l = Un(i);
          return o == null ? l : Pl(l, o);
        }
        var ox = Lt(function(i, o) {
          i = Zt(i);
          var l = -1, g = o.length, S = g > 2 ? o[2] : r;
          for (S && Rr(o[0], o[1], S) && (g = 1); ++l < g; )
            for (var T = o[l], A = Lr(T), G = -1, k = A.length; ++G < k; ) {
              var K = A[G], Z = i[K];
              (Z === r || he(Z, Yn[K]) && !Ut.call(i, K)) && (i[K] = T[K]);
            }
          return i;
        }), sx = Lt(function(i) {
          return i.push(r, mc), Xr(rv, r, i);
        });
        function ux(i, o) {
          return pl(i, wt(o, 3), Ee);
        }
        function fx(i, o) {
          return pl(i, wt(o, 3), ys);
        }
        function lx(i, o) {
          return i == null ? i : xs(i, wt(o, 3), Lr);
        }
        function cx(i, o) {
          return i == null ? i : Fl(i, wt(o, 3), Lr);
        }
        function vx(i, o) {
          return i && Ee(i, wt(o, 3));
        }
        function px(i, o) {
          return i && ys(i, wt(o, 3));
        }
        function dx(i) {
          return i == null ? [] : Fa(i, Sr(i));
        }
        function hx(i) {
          return i == null ? [] : Fa(i, Lr(i));
        }
        function Qs(i, o, l) {
          var g = i == null ? r : Sn(i, o);
          return g === r ? l : g;
        }
        function gx(i, o) {
          return i != null && yc(i, o, W0);
        }
        function js(i, o) {
          return i != null && yc(i, o, N0);
        }
        var mx = vc(function(i, o, l) {
          o != null && typeof o.toString != "function" && (o = Ea.call(o)), i[o] = l;
        }, ru(Wr)), _x = vc(function(i, o, l) {
          o != null && typeof o.toString != "function" && (o = Ea.call(o)), Ut.call(i, o) ? i[o].push(l) : i[o] = [l];
        }, wt), xx = Lt(Bi);
        function Sr(i) {
          return Fr(i) ? Ol(i) : Es(i);
        }
        function Lr(i) {
          return Fr(i) ? Ol(i, !0) : Z0(i);
        }
        function yx(i, o) {
          var l = {};
          return o = wt(o, 3), Ee(i, function(g, S, T) {
            ze(l, o(g, S, T), g);
          }), l;
        }
        function Sx(i, o) {
          var l = {};
          return o = wt(o, 3), Ee(i, function(g, S, T) {
            ze(l, S, o(g, S, T));
          }), l;
        }
        var bx = $n(function(i, o, l) {
          La(i, o, l);
        }), rv = $n(function(i, o, l, g) {
          La(i, o, l, g);
        }), Cx = Fe(function(i, o) {
          var l = {};
          if (i == null)
            return l;
          var g = !1;
          o = rr(o, function(T) {
            return T = tn(T, i), g || (g = T.length > 1), T;
          }), we(i, Ls(i), l), g && (l = re(l, h | d | m, m1));
          for (var S = o.length; S--; )
            Os(l, o[S]);
          return l;
        });
        function Ex(i, o) {
          return ev(i, ja(wt(o)));
        }
        var wx = Fe(function(i, o) {
          return i == null ? {} : Q0(i, o);
        });
        function ev(i, o) {
          if (i == null)
            return {};
          var l = rr(Ls(i), function(g) {
            return [g];
          });
          return o = wt(o), $l(i, l, function(g, S) {
            return o(g, S[0]);
          });
        }
        function Dx(i, o, l) {
          o = tn(o, i);
          var g = -1, S = o.length;
          for (S || (S = 1, i = r); ++g < S; ) {
            var T = i == null ? r : i[De(o[g])];
            T === r && (g = S, T = l), i = We(T) ? T.call(i) : T;
          }
          return i;
        }
        function Mx(i, o, l) {
          return i == null ? i : Gi(i, o, l);
        }
        function Tx(i, o, l, g) {
          return g = typeof g == "function" ? g : r, i == null ? i : Gi(i, o, l, g);
        }
        var nv = hc(Sr), iv = hc(Lr);
        function Rx(i, o, l) {
          var g = Pt(i), S = g || en(i) || Zn(i);
          if (o = wt(o, 4), l == null) {
            var T = i && i.constructor;
            S ? l = g ? new T() : [] : er(i) ? l = We(T) ? Un(Ma(i)) : {} : l = {};
          }
          return (S ? Qr : Ee)(i, function(A, G, k) {
            return o(l, A, G, k);
          }), l;
        }
        function Ox(i, o) {
          return i == null ? !0 : Os(i, o);
        }
        function Ix(i, o, l) {
          return i == null ? i : Ql(i, o, As(l));
        }
        function Px(i, o, l, g) {
          return g = typeof g == "function" ? g : r, i == null ? i : Ql(i, o, As(l), g);
        }
        function Jn(i) {
          return i == null ? [] : cs(i, Sr(i));
        }
        function Ax(i) {
          return i == null ? [] : cs(i, Lr(i));
        }
        function Bx(i, o, l) {
          return l === r && (l = o, o = r), l !== r && (l = ie(l), l = l === l ? l : 0), o !== r && (o = ie(o), o = o === o ? o : 0), yn(ie(i), o, l);
        }
        function zx(i, o, l) {
          return o = Ne(o), l === r ? (l = o, o = 0) : l = Ne(l), i = ie(i), k0(i, o, l);
        }
        function Gx(i, o, l) {
          if (l && typeof l != "boolean" && Rr(i, o, l) && (o = l = r), l === r && (typeof o == "boolean" ? (l = o, o = r) : typeof i == "boolean" && (l = i, i = r)), i === r && o === r ? (i = 0, o = 1) : (i = Ne(i), o === r ? (o = i, i = 0) : o = Ne(o)), i > o) {
            var g = i;
            i = o, o = g;
          }
          if (l || i % 1 || o % 1) {
            var S = Tl();
            return wr(i + S * (o - i + dg("1e-" + ((S + "").length - 1))), o);
          }
          return Ms(i, o);
        }
        var Fx = Vn(function(i, o, l) {
          return o = o.toLowerCase(), i + (l ? av(o) : o);
        });
        function av(i) {
          return tu(qt(i).toLowerCase());
        }
        function ov(i) {
          return i = qt(i), i && i.replace(Wh, Mg).replace(ig, "");
        }
        function Lx(i, o, l) {
          i = qt(i), o = Ur(o);
          var g = i.length;
          l = l === r ? g : yn(zt(l), 0, g);
          var S = l;
          return l -= o.length, l >= 0 && i.slice(l, S) == o;
        }
        function Wx(i) {
          return i = qt(i), i && Vo.test(i) ? i.replace(Ei, Tg) : i;
        }
        function Nx(i) {
          return i = qt(i), i && wh.test(i) ? i.replace(Ko, "\\$&") : i;
        }
        var kx = Vn(function(i, o, l) {
          return i + (l ? "-" : "") + o.toLowerCase();
        }), Hx = Vn(function(i, o, l) {
          return i + (l ? " " : "") + o.toLowerCase();
        }), Yx = fc("toLowerCase");
        function Xx(i, o, l) {
          i = qt(i), o = zt(o);
          var g = o ? kn(i) : 0;
          if (!o || g >= o)
            return i;
          var S = (o - g) / 2;
          return Xa(Ia(S), l) + i + Xa(Oa(S), l);
        }
        function qx(i, o, l) {
          i = qt(i), o = zt(o);
          var g = o ? kn(i) : 0;
          return o && g < o ? i + Xa(o - g, l) : i;
        }
        function Ux(i, o, l) {
          i = qt(i), o = zt(o);
          var g = o ? kn(i) : 0;
          return o && g < o ? Xa(o - g, l) + i : i;
        }
        function $x(i, o, l) {
          return l || o == null ? o = 0 : o && (o = +o), t0(qt(i).replace(Zo, ""), o || 0);
        }
        function Vx(i, o, l) {
          return (l ? Rr(i, o, l) : o === r) ? o = 1 : o = zt(o), Ts(qt(i), o);
        }
        function Kx() {
          var i = arguments, o = qt(i[0]);
          return i.length < 3 ? o : o.replace(i[1], i[2]);
        }
        var Zx = Vn(function(i, o, l) {
          return i + (l ? "_" : "") + o.toLowerCase();
        });
        function Jx(i, o, l) {
          return l && typeof l != "number" && Rr(i, o, l) && (o = l = r), l = l === r ? U : l >>> 0, l ? (i = qt(i), i && (typeof o == "string" || o != null && !Js(o)) && (o = Ur(o), !o && Nn(i)) ? rn(pe(i), 0, l) : i.split(o, l)) : [];
        }
        var Qx = Vn(function(i, o, l) {
          return i + (l ? " " : "") + tu(o);
        });
        function jx(i, o, l) {
          return i = qt(i), l = l == null ? 0 : yn(zt(l), 0, i.length), o = Ur(o), i.slice(l, l + o.length) == o;
        }
        function ty(i, o, l) {
          var g = C.templateSettings;
          l && Rr(i, o, l) && (o = r), i = qt(i), o = eo({}, o, g, gc);
          var S = eo({}, o.imports, g.imports, gc), T = Sr(S), A = cs(S, T), G, k, K = 0, Z = o.interpolate || ha, tt = "__p += '", ct = ps(
            (o.escape || ha).source + "|" + Z.source + "|" + (Z === Lf ? Ah : ha).source + "|" + (o.evaluate || ha).source + "|$",
            "g"
          ), yt = "//# sourceURL=" + (Ut.call(o, "sourceURL") ? (o.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++fg + "]") + `
`;
          i.replace(ct, function(Tt, Wt, kt, Vr, Or, Kr) {
            return kt || (kt = Vr), tt += i.slice(K, Kr).replace(Nh, Rg), Wt && (G = !0, tt += `' +
__e(` + Wt + `) +
'`), Or && (k = !0, tt += `';
` + Or + `;
__p += '`), kt && (tt += `' +
((__t = (` + kt + `)) == null ? '' : __t) +
'`), K = Kr + Tt.length, Tt;
          }), tt += `';
`;
          var Mt = Ut.call(o, "variable") && o.variable;
          if (!Mt)
            tt = `with (obj) {
` + tt + `
}
`;
          else if (Ih.test(Mt))
            throw new It(f);
          tt = (k ? tt.replace($o, "") : tt).replace(Ci, "$1").replace($t, "$1;"), tt = "function(" + (Mt || "obj") + `) {
` + (Mt ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (G ? ", __e = _.escape" : "") + (k ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + tt + `return __p
}`;
          var Gt = uv(function() {
            return Xt(T, yt + "return " + tt).apply(r, A);
          });
          if (Gt.source = tt, Zs(Gt))
            throw Gt;
          return Gt;
        }
        function ry(i) {
          return qt(i).toLowerCase();
        }
        function ey(i) {
          return qt(i).toUpperCase();
        }
        function ny(i, o, l) {
          if (i = qt(i), i && (l || o === r))
            return ml(i);
          if (!i || !(o = Ur(o)))
            return i;
          var g = pe(i), S = pe(o), T = _l(g, S), A = xl(g, S) + 1;
          return rn(g, T, A).join("");
        }
        function iy(i, o, l) {
          if (i = qt(i), i && (l || o === r))
            return i.slice(0, Sl(i) + 1);
          if (!i || !(o = Ur(o)))
            return i;
          var g = pe(i), S = xl(g, pe(o)) + 1;
          return rn(g, 0, S).join("");
        }
        function ay(i, o, l) {
          if (i = qt(i), i && (l || o === r))
            return i.replace(Zo, "");
          if (!i || !(o = Ur(o)))
            return i;
          var g = pe(i), S = _l(g, pe(o));
          return rn(g, S).join("");
        }
        function oy(i, o) {
          var l = B, g = H;
          if (er(o)) {
            var S = "separator" in o ? o.separator : S;
            l = "length" in o ? zt(o.length) : l, g = "omission" in o ? Ur(o.omission) : g;
          }
          i = qt(i);
          var T = i.length;
          if (Nn(i)) {
            var A = pe(i);
            T = A.length;
          }
          if (l >= T)
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
              for (S.global || (S = ps(S.source, qt(Wf.exec(S)) + "g")), S.lastIndex = 0; K = S.exec(Z); )
                var tt = K.index;
              k = k.slice(0, tt === r ? G : tt);
            }
          } else if (i.indexOf(Ur(S), G) != G) {
            var ct = k.lastIndexOf(S);
            ct > -1 && (k = k.slice(0, ct));
          }
          return k + g;
        }
        function sy(i) {
          return i = qt(i), i && da.test(i) ? i.replace(yr, Gg) : i;
        }
        var uy = Vn(function(i, o, l) {
          return i + (l ? " " : "") + o.toUpperCase();
        }), tu = fc("toUpperCase");
        function sv(i, o, l) {
          return i = qt(i), o = l ? r : o, o === r ? Ig(i) ? Wg(i) : bg(i) : i.match(o) || [];
        }
        var uv = Lt(function(i, o) {
          try {
            return Xr(i, r, o);
          } catch (l) {
            return Zs(l) ? l : new It(l);
          }
        }), fy = Fe(function(i, o) {
          return Qr(o, function(l) {
            l = De(l), ze(i, l, Vs(i[l], i));
          }), i;
        });
        function ly(i) {
          var o = i == null ? 0 : i.length, l = wt();
          return i = o ? rr(i, function(g) {
            if (typeof g[1] != "function")
              throw new jr(u);
            return [l(g[0]), g[1]];
          }) : [], Lt(function(g) {
            for (var S = -1; ++S < o; ) {
              var T = i[S];
              if (Xr(T[0], this, g))
                return Xr(T[1], this, g);
            }
          });
        }
        function cy(i) {
          return G0(re(i, h));
        }
        function ru(i) {
          return function() {
            return i;
          };
        }
        function vy(i, o) {
          return i == null || i !== i ? o : i;
        }
        var py = cc(), dy = cc(!0);
        function Wr(i) {
          return i;
        }
        function eu(i) {
          return kl(typeof i == "function" ? i : re(i, h));
        }
        function hy(i) {
          return Yl(re(i, h));
        }
        function gy(i, o) {
          return Xl(i, re(o, h));
        }
        var my = Lt(function(i, o) {
          return function(l) {
            return Bi(l, i, o);
          };
        }), _y = Lt(function(i, o) {
          return function(l) {
            return Bi(i, l, o);
          };
        });
        function nu(i, o, l) {
          var g = Sr(o), S = Fa(o, g);
          l == null && !(er(o) && (S.length || !g.length)) && (l = o, o = i, i = this, S = Fa(o, Sr(o)));
          var T = !(er(l) && "chain" in l) || !!l.chain, A = We(i);
          return Qr(S, function(G) {
            var k = o[G];
            i[G] = k, A && (i.prototype[G] = function() {
              var K = this.__chain__;
              if (T || K) {
                var Z = i(this.__wrapped__), tt = Z.__actions__ = Gr(this.__actions__);
                return tt.push({ func: k, args: arguments, thisArg: i }), Z.__chain__ = K, Z;
              }
              return k.apply(i, Ke([this.value()], arguments));
            });
          }), i;
        }
        function xy() {
          return br._ === this && (br._ = qg), this;
        }
        function iu() {
        }
        function yy(i) {
          return i = zt(i), Lt(function(o) {
            return ql(o, i);
          });
        }
        var Sy = zs(rr), by = zs(vl), Cy = zs(os);
        function fv(i) {
          return Hs(i) ? ss(De(i)) : j0(i);
        }
        function Ey(i) {
          return function(o) {
            return i == null ? r : Sn(i, o);
          };
        }
        var wy = pc(), Dy = pc(!0);
        function au() {
          return [];
        }
        function ou() {
          return !1;
        }
        function My() {
          return {};
        }
        function Ty() {
          return "";
        }
        function Ry() {
          return !0;
        }
        function Oy(i, o) {
          if (i = zt(i), i < 1 || i > V)
            return [];
          var l = U, g = wr(i, U);
          o = wt(o), i -= U;
          for (var S = ls(g, o); ++l < i; )
            o(l);
          return S;
        }
        function Iy(i) {
          return Pt(i) ? rr(i, De) : $r(i) ? [i] : Gr(Rc(qt(i)));
        }
        function Py(i) {
          var o = ++Yg;
          return qt(i) + o;
        }
        var Ay = Ya(function(i, o) {
          return i + o;
        }, 0), By = Gs("ceil"), zy = Ya(function(i, o) {
          return i / o;
        }, 1), Gy = Gs("floor");
        function Fy(i) {
          return i && i.length ? Ga(i, Wr, Ss) : r;
        }
        function Ly(i, o) {
          return i && i.length ? Ga(i, wt(o, 2), Ss) : r;
        }
        function Wy(i) {
          return hl(i, Wr);
        }
        function Ny(i, o) {
          return hl(i, wt(o, 2));
        }
        function ky(i) {
          return i && i.length ? Ga(i, Wr, ws) : r;
        }
        function Hy(i, o) {
          return i && i.length ? Ga(i, wt(o, 2), ws) : r;
        }
        var Yy = Ya(function(i, o) {
          return i * o;
        }, 1), Xy = Gs("round"), qy = Ya(function(i, o) {
          return i - o;
        }, 0);
        function Uy(i) {
          return i && i.length ? fs(i, Wr) : 0;
        }
        function $y(i, o) {
          return i && i.length ? fs(i, wt(o, 2)) : 0;
        }
        return C.after = h_, C.ary = Nc, C.assign = ex, C.assignIn = tv, C.assignInWith = eo, C.assignWith = nx, C.at = ix, C.before = kc, C.bind = Vs, C.bindAll = fy, C.bindKey = Hc, C.castArray = M_, C.chain = Fc, C.chunk = G1, C.compact = F1, C.concat = L1, C.cond = ly, C.conforms = cy, C.constant = ru, C.countBy = Um, C.create = ax, C.curry = Yc, C.curryRight = Xc, C.debounce = qc, C.defaults = ox, C.defaultsDeep = sx, C.defer = g_, C.delay = m_, C.difference = W1, C.differenceBy = N1, C.differenceWith = k1, C.drop = H1, C.dropRight = Y1, C.dropRightWhile = X1, C.dropWhile = q1, C.fill = U1, C.filter = Vm, C.flatMap = Jm, C.flatMapDeep = Qm, C.flatMapDepth = jm, C.flatten = Ac, C.flattenDeep = $1, C.flattenDepth = V1, C.flip = __, C.flow = py, C.flowRight = dy, C.fromPairs = K1, C.functions = dx, C.functionsIn = hx, C.groupBy = t_, C.initial = J1, C.intersection = Q1, C.intersectionBy = j1, C.intersectionWith = tm, C.invert = mx, C.invertBy = _x, C.invokeMap = e_, C.iteratee = eu, C.keyBy = n_, C.keys = Sr, C.keysIn = Lr, C.map = Za, C.mapKeys = yx, C.mapValues = Sx, C.matches = hy, C.matchesProperty = gy, C.memoize = Qa, C.merge = bx, C.mergeWith = rv, C.method = my, C.methodOf = _y, C.mixin = nu, C.negate = ja, C.nthArg = yy, C.omit = Cx, C.omitBy = Ex, C.once = x_, C.orderBy = i_, C.over = Sy, C.overArgs = y_, C.overEvery = by, C.overSome = Cy, C.partial = Ks, C.partialRight = Uc, C.partition = a_, C.pick = wx, C.pickBy = ev, C.property = fv, C.propertyOf = Ey, C.pull = im, C.pullAll = zc, C.pullAllBy = am, C.pullAllWith = om, C.pullAt = sm, C.range = wy, C.rangeRight = Dy, C.rearg = S_, C.reject = u_, C.remove = um, C.rest = b_, C.reverse = Us, C.sampleSize = l_, C.set = Mx, C.setWith = Tx, C.shuffle = c_, C.slice = fm, C.sortBy = d_, C.sortedUniq = gm, C.sortedUniqBy = mm, C.split = Jx, C.spread = C_, C.tail = _m, C.take = xm, C.takeRight = ym, C.takeRightWhile = Sm, C.takeWhile = bm, C.tap = Fm, C.throttle = E_, C.thru = Ka, C.toArray = Jc, C.toPairs = nv, C.toPairsIn = iv, C.toPath = Iy, C.toPlainObject = jc, C.transform = Rx, C.unary = w_, C.union = Cm, C.unionBy = Em, C.unionWith = wm, C.uniq = Dm, C.uniqBy = Mm, C.uniqWith = Tm, C.unset = Ox, C.unzip = $s, C.unzipWith = Gc, C.update = Ix, C.updateWith = Px, C.values = Jn, C.valuesIn = Ax, C.without = Rm, C.words = sv, C.wrap = D_, C.xor = Om, C.xorBy = Im, C.xorWith = Pm, C.zip = Am, C.zipObject = Bm, C.zipObjectDeep = zm, C.zipWith = Gm, C.entries = nv, C.entriesIn = iv, C.extend = tv, C.extendWith = eo, nu(C, C), C.add = Ay, C.attempt = uv, C.camelCase = Fx, C.capitalize = av, C.ceil = By, C.clamp = Bx, C.clone = T_, C.cloneDeep = O_, C.cloneDeepWith = I_, C.cloneWith = R_, C.conformsTo = P_, C.deburr = ov, C.defaultTo = vy, C.divide = zy, C.endsWith = Lx, C.eq = he, C.escape = Wx, C.escapeRegExp = Nx, C.every = $m, C.find = Km, C.findIndex = Ic, C.findKey = ux, C.findLast = Zm, C.findLastIndex = Pc, C.findLastKey = fx, C.floor = Gy, C.forEach = Lc, C.forEachRight = Wc, C.forIn = lx, C.forInRight = cx, C.forOwn = vx, C.forOwnRight = px, C.get = Qs, C.gt = A_, C.gte = B_, C.has = gx, C.hasIn = js, C.head = Bc, C.identity = Wr, C.includes = r_, C.indexOf = Z1, C.inRange = zx, C.invoke = xx, C.isArguments = En, C.isArray = Pt, C.isArrayBuffer = z_, C.isArrayLike = Fr, C.isArrayLikeObject = ur, C.isBoolean = G_, C.isBuffer = en, C.isDate = F_, C.isElement = L_, C.isEmpty = W_, C.isEqual = N_, C.isEqualWith = k_, C.isError = Zs, C.isFinite = H_, C.isFunction = We, C.isInteger = $c, C.isLength = to, C.isMap = Vc, C.isMatch = Y_, C.isMatchWith = X_, C.isNaN = q_, C.isNative = U_, C.isNil = V_, C.isNull = $_, C.isNumber = Kc, C.isObject = er, C.isObjectLike = ar, C.isPlainObject = Ni, C.isRegExp = Js, C.isSafeInteger = K_, C.isSet = Zc, C.isString = ro, C.isSymbol = $r, C.isTypedArray = Zn, C.isUndefined = Z_, C.isWeakMap = J_, C.isWeakSet = Q_, C.join = rm, C.kebabCase = kx, C.last = ne, C.lastIndexOf = em, C.lowerCase = Hx, C.lowerFirst = Yx, C.lt = j_, C.lte = tx, C.max = Fy, C.maxBy = Ly, C.mean = Wy, C.meanBy = Ny, C.min = ky, C.minBy = Hy, C.stubArray = au, C.stubFalse = ou, C.stubObject = My, C.stubString = Ty, C.stubTrue = Ry, C.multiply = Yy, C.nth = nm, C.noConflict = xy, C.noop = iu, C.now = Ja, C.pad = Xx, C.padEnd = qx, C.padStart = Ux, C.parseInt = $x, C.random = Gx, C.reduce = o_, C.reduceRight = s_, C.repeat = Vx, C.replace = Kx, C.result = Dx, C.round = Xy, C.runInContext = N, C.sample = f_, C.size = v_, C.snakeCase = Zx, C.some = p_, C.sortedIndex = lm, C.sortedIndexBy = cm, C.sortedIndexOf = vm, C.sortedLastIndex = pm, C.sortedLastIndexBy = dm, C.sortedLastIndexOf = hm, C.startCase = Qx, C.startsWith = jx, C.subtract = qy, C.sum = Uy, C.sumBy = $y, C.template = ty, C.times = Oy, C.toFinite = Ne, C.toInteger = zt, C.toLength = Qc, C.toLower = ry, C.toNumber = ie, C.toSafeInteger = rx, C.toString = qt, C.toUpper = ey, C.trim = ny, C.trimEnd = iy, C.trimStart = ay, C.truncate = oy, C.unescape = sy, C.uniqueId = Py, C.upperCase = uy, C.upperFirst = tu, C.each = Lc, C.eachRight = Wc, C.first = Bc, nu(C, (function() {
          var i = {};
          return Ee(C, function(o, l) {
            Ut.call(C.prototype, l) || (i[l] = o);
          }), i;
        })(), { chain: !1 }), C.VERSION = n, Qr(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(i) {
          C[i].placeholder = C;
        }), Qr(["drop", "take"], function(i, o) {
          Nt.prototype[i] = function(l) {
            l = l === r ? 1 : gr(zt(l), 0);
            var g = this.__filtered__ && !o ? new Nt(this) : this.clone();
            return g.__filtered__ ? g.__takeCount__ = wr(l, g.__takeCount__) : g.__views__.push({
              size: wr(l, U),
              type: i + (g.__dir__ < 0 ? "Right" : "")
            }), g;
          }, Nt.prototype[i + "Right"] = function(l) {
            return this.reverse()[i](l).reverse();
          };
        }), Qr(["filter", "map", "takeWhile"], function(i, o) {
          var l = o + 1, g = l == Y || l == j;
          Nt.prototype[i] = function(S) {
            var T = this.clone();
            return T.__iteratees__.push({
              iteratee: wt(S, 3),
              type: l
            }), T.__filtered__ = T.__filtered__ || g, T;
          };
        }), Qr(["head", "last"], function(i, o) {
          var l = "take" + (o ? "Right" : "");
          Nt.prototype[i] = function() {
            return this[l](1).value()[0];
          };
        }), Qr(["initial", "tail"], function(i, o) {
          var l = "drop" + (o ? "" : "Right");
          Nt.prototype[i] = function() {
            return this.__filtered__ ? new Nt(this) : this[l](1);
          };
        }), Nt.prototype.compact = function() {
          return this.filter(Wr);
        }, Nt.prototype.find = function(i) {
          return this.filter(i).head();
        }, Nt.prototype.findLast = function(i) {
          return this.reverse().find(i);
        }, Nt.prototype.invokeMap = Lt(function(i, o) {
          return typeof i == "function" ? new Nt(this) : this.map(function(l) {
            return Bi(l, i, o);
          });
        }), Nt.prototype.reject = function(i) {
          return this.filter(ja(wt(i)));
        }, Nt.prototype.slice = function(i, o) {
          i = zt(i);
          var l = this;
          return l.__filtered__ && (i > 0 || o < 0) ? new Nt(l) : (i < 0 ? l = l.takeRight(-i) : i && (l = l.drop(i)), o !== r && (o = zt(o), l = o < 0 ? l.dropRight(-o) : l.take(o - i)), l);
        }, Nt.prototype.takeRightWhile = function(i) {
          return this.reverse().takeWhile(i).reverse();
        }, Nt.prototype.toArray = function() {
          return this.take(U);
        }, Ee(Nt.prototype, function(i, o) {
          var l = /^(?:filter|find|map|reject)|While$/.test(o), g = /^(?:head|last)$/.test(o), S = C[g ? "take" + (o == "last" ? "Right" : "") : o], T = g || /^find/.test(o);
          S && (C.prototype[o] = function() {
            var A = this.__wrapped__, G = g ? [1] : arguments, k = A instanceof Nt, K = G[0], Z = k || Pt(A), tt = function(Wt) {
              var kt = S.apply(C, Ke([Wt], G));
              return g && ct ? kt[0] : kt;
            };
            Z && l && typeof K == "function" && K.length != 1 && (k = Z = !1);
            var ct = this.__chain__, yt = !!this.__actions__.length, Mt = T && !ct, Gt = k && !yt;
            if (!T && Z) {
              A = Gt ? A : new Nt(this);
              var Tt = i.apply(A, G);
              return Tt.__actions__.push({ func: Ka, args: [tt], thisArg: r }), new te(Tt, ct);
            }
            return Mt && Gt ? i.apply(this, G) : (Tt = this.thru(tt), Mt ? g ? Tt.value()[0] : Tt.value() : Tt);
          });
        }), Qr(["pop", "push", "shift", "sort", "splice", "unshift"], function(i) {
          var o = Sa[i], l = /^(?:push|sort|unshift)$/.test(i) ? "tap" : "thru", g = /^(?:pop|shift)$/.test(i);
          C.prototype[i] = function() {
            var S = arguments;
            if (g && !this.__chain__) {
              var T = this.value();
              return o.apply(Pt(T) ? T : [], S);
            }
            return this[l](function(A) {
              return o.apply(Pt(A) ? A : [], S);
            });
          };
        }), Ee(Nt.prototype, function(i, o) {
          var l = C[o];
          if (l) {
            var g = l.name + "";
            Ut.call(qn, g) || (qn[g] = []), qn[g].push({ name: o, func: l });
          }
        }), qn[Ha(r, b).name] = [{
          name: "wrapper",
          func: r
        }], Nt.prototype.clone = s0, Nt.prototype.reverse = u0, Nt.prototype.value = f0, C.prototype.at = Lm, C.prototype.chain = Wm, C.prototype.commit = Nm, C.prototype.next = km, C.prototype.plant = Ym, C.prototype.reverse = Xm, C.prototype.toJSON = C.prototype.valueOf = C.prototype.value = qm, C.prototype.first = C.prototype.head, Mi && (C.prototype[Mi] = Hm), C;
      }), Hn = Ng();
      gn ? ((gn.exports = Hn)._ = Hn, es._ = Hn) : br._ = Hn;
    }).call(iS);
  })(ki, ki.exports)), ki.exports;
}
var pp = aS();
function dp(t = "") {
  const e = Jy(t), r = Qy(t), n = vp(), a = se({
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
      const O = "li_" + Math.random().toString(36).substring(7), I = Math.max(...e.layout.map((H) => H.z), 0), P = pp.cloneDeep(w.widget);
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
const oS = { class: "widget-board" }, sS = { class: "dashboard-item" }, uS = /* @__PURE__ */ Qu({
  __name: "View",
  props: {
    pageId: {}
  },
  setup(t) {
    const e = t, r = cp(), n = e.pageId ?? r.params.pageid ?? "", {
      widgetStore: a,
      getInitialStyle: s
    } = dp(n || ""), u = sp(eS.TINY_EMITTER);
    return up(async () => {
      console.log("Base View component mounted for page:", n), await Cu(), console.log("📄 Emitting system:pageLoaded for page:", n), u.emit("system:pageLoaded", { pageId: n });
    }), (f, c) => (fe(), ue("div", oS, [
      (fe(!0), ue(xo, null, Eu(lr(a)?.widgets || [], (v) => (fe(), ue("div", {
        key: v.uid,
        class: fp(`${v.uid} dashboard-item-container`),
        style: on(lr(s)(v.uid)),
        ref_for: !0,
        ref: v.uid
      }, [
        me("div", sS, [
          oe(lr(lp), {
            widget: v,
            ref_for: !0,
            ref: `${v.uid}_wrapper`,
            editEnabled: !1
          }, null, 8, ["widget"])
        ])
      ], 6))), 128))
    ]));
  }
}), hp = (t, e) => {
  const r = t.__vccOpts || t;
  for (const [n, a] of e)
    r[n] = a;
  return r;
}, fS = /* @__PURE__ */ hp(uS, [["__scopeId", "data-v-901ba03a"]]);
function lS(t) {
  for (var e = [], r = 1; r < arguments.length; r++)
    e[r - 1] = arguments[r];
  return e.map(function(n) {
    return n.split(" ").map(function(a) {
      return a ? "" + t + a : "";
    }).join(" ");
  }).join(" ");
}
function cS(t, e) {
  return e.replace(/([^}{]*){/gm, function(r, n) {
    return n.replace(/\.([^{,\s\d.]+)/g, "." + t + "$1") + "{";
  });
}
function He(t, e) {
  return function(r) {
    r && (t[e] = r);
  };
}
function gp(t, e, r) {
  return function(n) {
    n && (t[e][r] = n);
  };
}
function vv(t, e) {
  return function(r) {
    var n = r.prototype;
    t.forEach(function(a) {
      e(n, a);
    });
  };
}
function vS(t, e) {
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
var pS = "function", dS = "object", hS = "string", gS = "number", ju = "undefined", mp = typeof window !== ju, mS = typeof document !== ju && document, _S = [{
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
function xS() {
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
function Se(t) {
  return t && typeof t === dS;
}
function dr(t) {
  return Array.isArray(t);
}
function kr(t) {
  return typeof t === hS;
}
function si(t) {
  return typeof t === gS;
}
function tf(t) {
  return typeof t === pS;
}
function yS(t, e) {
  var r = t === "" || t == " ", n = e === "" || e == " ";
  return n && r || t === e;
}
function _p(t, e, r, n, a) {
  var s = rf(t, e, r);
  return s ? r : SS(t, e, r + 1, n, a);
}
function rf(t, e, r) {
  if (!t.ignore)
    return null;
  var n = e.slice(Math.max(r - 3, 0), r + 3).join("");
  return new RegExp(t.ignore).exec(n);
}
function SS(t, e, r, n, a) {
  for (var s = function(v) {
    var p = e[v].trim();
    if (p === t.close && !rf(t, e, v))
      return {
        value: v
      };
    var h = v, d = Hr(a, function(m) {
      var _ = m.open;
      return _ === p;
    });
    if (d && (h = _p(d, e, v, n, a)), h === -1)
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
  var r = kr(e) ? {
    separator: e
  } : e, n = r.separator, a = n === void 0 ? "," : n, s = r.isSeparateFirst, u = r.isSeparateOnlyOpenClose, f = r.isSeparateOpenClose, c = f === void 0 ? u : f, v = r.openCloseCharacters, p = v === void 0 ? _S : v, h = p.map(function(O) {
    var I = O.open, P = O.close;
    return I === P ? I : I + "|" + P;
  }).join("|"), d = "(\\s*" + a + "\\s*|" + h + "|\\s+)", m = new RegExp(d, "g"), _ = t.split(m).filter(function(O) {
    return O && O !== "undefined";
  }), x = _.length, y = [], b = [];
  function E() {
    return b.length ? (y.push(b.join("")), b = [], !0) : !1;
  }
  for (var R = function(O) {
    var I = _[O].trim(), P = O, B = Hr(p, function(L) {
      var Y = L.open;
      return Y === I;
    }), H = Hr(p, function(L) {
      var Y = L.close;
      return Y === I;
    });
    if (B) {
      if (P = _p(B, _, O, x, p), P !== -1 && c)
        return E() && s || (y.push(_.slice(O, P + 1).join("")), O = P, s) ? (M = O, "break") : (M = O, "continue");
    } else if (H && !rf(H, _, O)) {
      var W = xS(p);
      return W.splice(p.indexOf(H), 1), {
        value: ef(t, {
          separator: a,
          isSeparateFirst: s,
          isSeparateOnlyOpenClose: u,
          isSeparateOpenClose: c,
          openCloseCharacters: W
        })
      };
    } else if (yS(I, a) && !u)
      return E(), s ? (M = O, "break") : (M = O, "continue");
    P === -1 && (P = x - 1), b.push(_.slice(O, P + 1).join("")), O = P, M = O;
  }, M, D = 0; D < x; ++D) {
    var w = R(D);
    if (D = M, typeof w == "object") return w.value;
    if (w === "break") break;
  }
  return b.length && y.push(b.join("")), y;
}
function ln(t) {
  return ef(t, "");
}
function Rn(t) {
  return ef(t, ",");
}
function xp(t) {
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
function bS(t) {
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
function Hr(t, e, r) {
  var n = qe(t, e);
  return n > -1 ? t[n] : r;
}
var yp = /* @__PURE__ */ (function() {
  var t = Ji(), e = mp && (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame);
  return e ? e.bind(window) : function(r) {
    var n = Ji(), a = setTimeout(function() {
      r(n - t);
    }, 1e3 / 60);
    return a;
  };
})(), CS = /* @__PURE__ */ (function() {
  var t = mp && (window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.msCancelAnimationFrame);
  return t ? t.bind(window) : function(e) {
    clearTimeout(e);
  };
})();
function Ue(t) {
  return Object.keys(t);
}
function ES(t) {
  var e = Ue(t);
  return e.map(function(r) {
    return t[r];
  });
}
function Vt(t, e) {
  var r = ia(t), n = r.value, a = r.unit;
  if (Se(e)) {
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
function pv(t, e, r, n) {
  return n === void 0 && (n = t[0] / t[1]), [[Ot(e[0], pr), Ot(e[0] / n, pr)], [Ot(e[1] * n, pr), Ot(e[1], pr)]].filter(function(a) {
    return a.every(function(s, u) {
      var f = e[u], c = Ot(f, pr);
      return r ? s <= f || s <= c : s >= f || s >= c;
    });
  })[0] || t;
}
function Sp(t, e, r, n) {
  if (!n)
    return t.map(function(m, _) {
      return wu(m, e[_], r[_]);
    });
  var a = t[0], s = t[1], u = n === !0 ? a / s : n, f = pv(t, e, !1, u), c = f[0], v = f[1], p = pv(t, r, !0, u), h = p[0], d = p[1];
  return a < c || s < v ? (a = c, s = v) : (a > h || s > d) && (a = h, s = d), [a, s];
}
function wS(t) {
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
function DS(t) {
  return [0, 1].map(function(e) {
    return Du(t.map(function(r) {
      return r[e];
    }));
  });
}
function dv(t) {
  var e = DS(t), r = cr(e, t[0]), n = cr(e, t[1]);
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
function hv(t, e) {
  return t.forEach(function(r, n) {
    t[n] = Ot(t[n], e);
  }), t;
}
function MS(t) {
  for (var e = [], r = 0; r < t; ++r)
    e.push(r);
  return e;
}
function bp(t) {
  return t.reduce(function(e, r) {
    return e.concat(r);
  }, []);
}
function Cp(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
function _r(t, e) {
  return t.classList ? t.classList.contains(e) : !!t.className.match(new RegExp("(\\s|^)" + e + "(\\s|$)"));
}
function Ep(t, e) {
  t.classList ? t.classList.add(e) : t.className += " " + e;
}
function wp(t, e) {
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
  return t?.ownerDocument || mS;
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
function Dp(t) {
  return t && "postMessage" in t && "blur" in t && "self" in t;
}
function hi(t) {
  return Se(t) && t.nodeName && t.nodeType && "ownerDocument" in t;
}
var TS = /* @__PURE__ */ (function() {
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
})(), RS = /* @__PURE__ */ (function() {
  function t() {
    this.object = {};
  }
  var e = t.prototype;
  return e.get = function(r) {
    return this.object[r];
  }, e.set = function(r, n) {
    this.object[r] = n;
  }, t;
})(), OS = typeof Map == "function", IS = /* @__PURE__ */ (function() {
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
function PS(t, e) {
  var r = [], n = [];
  return t.forEach(function(a) {
    var s = a[0], u = a[1], f = new IS();
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
var AS = /* @__PURE__ */ (function() {
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
    var r = PS(this.changedBeforeAdded, this.fixed), n = this.changed, a = [];
    this.cacheOrdered = r.filter(function(s, u) {
      var f = s[0], c = s[1], v = n[u], p = v[0], h = v[1];
      if (f !== c)
        return a.push([p, h]), !0;
    }), this.cachePureChanged = a;
  }, t;
})();
function aa(t, e, r) {
  var n = OS ? Map : r ? RS : TS, a = r || function(E) {
    return E;
  }, s = [], u = [], f = [], c = t.map(a), v = e.map(a), p = new n(), h = new n(), d = [], m = [], _ = {}, x = [], y = 0, b = 0;
  return c.forEach(function(E, R) {
    p.set(E, R);
  }), v.forEach(function(E, R) {
    h.set(E, R);
  }), c.forEach(function(E, R) {
    var M = h.get(E);
    typeof M > "u" ? (++b, u.push(R)) : _[M] = b;
  }), v.forEach(function(E, R) {
    var M = p.get(E);
    typeof M > "u" ? (s.push(R), ++y) : (f.push([M, R]), b = _[R] || 0, d.push([M - b, R - y]), m.push(R === M), M !== R && x.push([M, R]));
  }), u.reverse(), new AS(t, e, s, u, x, f, d, m);
}
var BS = /* @__PURE__ */ (function() {
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
var Te = function() {
  return Te = Object.assign || function(e) {
    for (var r, n = 1, a = arguments.length; n < a; n++) {
      r = arguments[n];
      for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
    }
    return e;
  }, Te.apply(this, arguments);
};
function Mp(t, e) {
  var r = {};
  for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(t); a < n.length; a++)
      e.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[a]) && (r[n[a]] = t[n[a]]);
  return r;
}
function gv(t, e, r) {
  for (var n = 0, a = e.length, s; n < a; n++)
    (s || !(n in e)) && (s || (s = Array.prototype.slice.call(e, 0, n)), s[n] = e[n]);
  return t.concat(s || Array.prototype.slice.call(e));
}
function mv(t) {
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
function _v(t) {
  var e = t.className, r = Mp(t, ["className"]);
  return e != null && (r.class = e), delete r.style, delete r.children, r;
}
function xv(t) {
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
function Rp(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Op(t) {
  t.forEach(function(e) {
    e();
  });
}
function zS() {
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
    var f = this, c = f.d, v = ES(n).filter(function(_) {
      return _.$_req;
    }), p = Tp(v.map(function(_) {
      return _.$_subs;
    })), h = Hr(p, function(_) {
      return _.d === c;
    });
    if (f.b && !kr(a) && !u && !f.s(a.props, s) && !h) {
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
    return kr(a) || (f.ps = a.props, f.ref = a.ref), of(this), f.r(r, n, f.b ? m : {}, s), !0;
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
function Ip() {
  return Object.__CROACT_CURRENT_INSTNACE__;
}
function GS() {
  return af;
}
function FS(t) {
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
    s.$_timer || (s.$_state = {}), clearTimeout(s.$_timer), s.$_timer = 0, s.$_state = Te(Te({}, s.$_state), r), a ? s.$_setState(n, a) : s.$_timer = window.setTimeout(function() {
      s.$_timer = 0, s.$_setState(n, a);
    });
  }, e.forceUpdate = function(r) {
    this.setState({}, r, !0);
  }, e.componentDidMount = function() {
  }, e.componentDidUpdate = function(r, n) {
  }, e.componentWillUnmount = function() {
  }, e.$_setState = function(r, n) {
    var a = [], s = this.$_p, u = sa(s.c, [s], [s.o], a, s._cs, Te(Te({}, this.state), this.$_state), n);
    u && (r && a.push(r), Op(a), of(null));
  }, t;
})(), Pp = /* @__PURE__ */ (function(t) {
  oa(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  var r = e.prototype;
  return r.shouldComponentUpdate = function(n, a) {
    return Co(this.props, n) || Co(this.state, a);
  }, e;
})(sf);
function Ap(t) {
  var e = function(r) {
    e.current = r;
  };
  return e.current = t, e;
}
function LS(t) {
  return t._fr = !0, t;
}
function WS(t, e, r, n) {
  var a, s;
  return !((a = t?.prototype) === null || a === void 0) && a.render ? s = new t(e, r) : (s = new sf(e, r), s.constructor = t, t._fr ? (n.fr = Ap(), s.render = function() {
    return this.constructor(this.props, n.fr);
  }) : s.render = zS), s.$_p = n, s;
}
var NS = /* @__PURE__ */ (function(t) {
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
    c._cs = a, h ? (m = WS(v, p, _, c), c.b = m) : (m.props = p, m.context = _);
    var x = m.state;
    c._usefs = [], c._uefs = [];
    var y = m.render();
    ((f = (u = y?.props) === null || u === void 0 ? void 0 : u.children) === null || f === void 0 ? void 0 : f.length) === 0 && (y.props.children = c.ps.children);
    var b = Te(Te({}, a), m.$_cs);
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
function kS(t, e, r) {
  var n = uf(_v(t), _v(e)), a = n.added, s = n.removed, u = n.changed;
  for (var f in a)
    r.setAttribute(f, a[f]);
  for (var c in u)
    r.setAttribute(c, u[c][1]);
  for (var v in s)
    r.removeAttribute(v);
}
function HS(t, e, r) {
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
function YS(t, e, r) {
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
function XS(t) {
  return t.replace(/^on/g, "").toLowerCase();
}
var qS = /* @__PURE__ */ (function(t) {
  oa(e, t);
  function e() {
    var n = t !== null && t.apply(this, arguments) || this;
    return n.typ = "elem", n._es = {}, n._svg = !1, n;
  }
  var r = e.prototype;
  return r.e = function(n, a) {
    var s = this, u = s._es, f = s.b, c = XS(n);
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
    var x = f.b, y = xv(s), b = y[0], E = y[1], R = xv(v), M = R[0], D = R[1];
    return kS(b, M, x), HS(E, D, f), YS(s.style || {}, v.style || {}, x), n.push(function() {
      c ? f.md() : f.ud();
    }), !0;
  }, r.un = function() {
    var n = this, a = n._es, s = n.b;
    for (var u in a)
      mr(s, u, a[u]);
    n._ps.forEach(function(f) {
      f.un();
    }), n._es = {}, n._sel || Rp(s);
  }, e;
})(Go);
function Qi(t) {
  if (!t || hi(t))
    return t;
  var e = t.$_p._ps;
  return e.length ? Qi(e[0].b) : null;
}
function Bp(t) {
  if (t) {
    if (t.b && hi(t.b))
      return t;
    var e = t._ps;
    return e.length ? Bp(e[0]) : null;
  }
}
function xe(t, e) {
  for (var r = [], n = 2; n < arguments.length; n++)
    r[n - 2] = arguments[n];
  var a = e || {}, s = a.key, u = a.ref, f = Mp(a, ["key", "ref"]);
  return {
    type: t,
    key: s,
    ref: u,
    props: Te(Te({}, f), {
      children: bp(r).filter(function(c) {
        return c != null && c !== !1;
      })
    })
  };
}
var zp = /* @__PURE__ */ (function(t) {
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
})(Go), US = /* @__PURE__ */ (function(t) {
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
    Rp(this.b);
  }, e;
})(Go);
function $S(t, e, r) {
  var n = r.map(function(c) {
    return kr(c) ? null : c.key;
  }), a = mv(e.map(function(c) {
    return c.k;
  })), s = mv(n), u = aa(a, s, function(c) {
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
    e.splice(c, 0, yv(r[c], n[c], c, t));
  });
  var f = u.maintained.filter(function(c) {
    c[0];
    var v = c[1], p = r[v], h = e[v], d = kr(p) ? "text_".concat(p) : p.type;
    return d !== h.t ? (h.un(), e.splice(v, 1, yv(p, n[v], v, t)), !0) : (h.i = v, !1);
  });
  return gv(gv([], u.added, !0), f.map(function(c) {
    c[0];
    var v = c[1];
    return v;
  }));
}
function VS(t, e) {
  for (var r = t._ps, n = r.length, a = e.i + 1; a < n; ++a) {
    var s = Qi(r[a].b);
    if (s)
      return s;
  }
  return null;
}
function yv(t, e, r, n) {
  var a = n.d + 1;
  if (kr(t) || si(t))
    return new US("text_".concat(t), a, e, r, n, null, {});
  var s = t.type, u = typeof s == "string" ? qS : NS;
  return new u(s, a, e, r, n, t.ref, t.props);
}
function sa(t, e, r, n, a, s, u) {
  var f = $S(t, e, r), c = t._hyd, v = e.filter(function(h, d) {
    return h._hyd = c, h.u(n, a, r[d], s, u);
  });
  t.typ === "container" && t._sel && e.forEach(function(h) {
    var d = Bp(h);
    d && (d._sel = !0);
  }), t._hyd = null;
  var p = zo(t);
  return p && f.reverse().forEach(function(h) {
    var d = e[h], m = Qi(d.b);
    if (m && p !== m && !m.parentNode) {
      var _ = VS(t, d);
      p.insertBefore(m, _);
    }
  }), v.length > 0;
}
function KS(t, e, r, n) {
  r === void 0 && (r = e.__CROACT__), n === void 0 && (n = {});
  var a = !!r;
  r || (r = new zp(e));
  var s = [];
  return sa(r, r._ps, t ? [t] : [], s, n, void 0, void 0), Op(s), of(null), a || (e.__CROACT__ = r), r;
}
function Sv(t, e, r) {
  return !r && t && (r = new zp(e.parentElement), r._hyd = [e], r._sel = !0), KS(t, e, r), r;
}
function Gp(t) {
  var e = Ip(), r = e._hs || (e._hs = []), n = GS(), a = r[n];
  if (FS(n + 1), a) {
    if (!Co(a.deps, t.deps))
      return a.updated = !1, a;
    r[n] = t;
  } else
    r.push(t);
  return t.value = t.func(), t.updated = !0, t;
}
function ZS(t, e) {
  var r = Gp({
    func: t,
    deps: e
  });
  return r.value;
}
function JS(t) {
  return ZS(function() {
    return Ap(t);
  }, []);
}
function Fp(t, e, r) {
  var n = Ip(), a = Gp({
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
function QS(t, e, r) {
  Fp(function() {
    t?.(e());
  }, r, !0);
}
function ff(t, e) {
  for (var r = t.length, n = 0; n < r; ++n)
    if (e(t[n], n))
      return !0;
  return !1;
}
function Lp(t, e) {
  for (var r = t.length, n = 0; n < r; ++n)
    if (e(t[n], n))
      return t[n];
  return null;
}
function Wp(t) {
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
function jS() {
  if (typeof navigator > "u" || !navigator || !navigator.userAgentData)
    return !1;
  var t = navigator.userAgentData, e = t.brands || t.uaList;
  return !!(e && e.length);
}
function tb(t, e) {
  var r = lf("(" + t + ")((?:\\/|\\s|:)([0-9|\\.|_]+))", e);
  return r ? r[3] : "";
}
function Tu(t) {
  return t.replace(/_/g, ".");
}
function Hi(t, e) {
  var r = null, n = "-1";
  return ff(t, function(a) {
    var s = lf("(" + a.test + ")((?:\\/|\\s|:)([0-9|\\.|_]+))?", e);
    return !s || a.brand ? !1 : (r = a, n = s[3] || "-1", a.versionAlias ? n = a.versionAlias : a.versionTest && (n = tb(a.versionTest.toLowerCase(), e) || n), n = Tu(n), !0);
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
    var a = Np(e, n);
    return a ? (r.brand = n.id, r.version = n.versionAlias || a.version, r.version !== "-1") : !1;
  }), r;
}
function Np(t, e) {
  return Lp(t, function(r) {
    var n = r.brand;
    return lf("" + e.test, n.toLowerCase());
  });
}
var kp = [{
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
}], Hp = [{
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
}], Ru = [{
  test: "applewebkit",
  id: "webkit",
  versionTest: "applewebkit|safari"
}], Yp = [{
  test: "(?=(iphone|ipad))(?!(.*version))",
  id: "webview"
}, {
  test: "(?=(android|iphone|ipad))(?=.*(naver|daum|; wv))",
  id: "webview"
}, {
  // test webview
  test: "webview",
  id: "webview"
}], Xp = [{
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
function qp(t) {
  return !!Hi(Yp, t).preset;
}
function rb(t) {
  var e = Wp(t), r = !!/mobi/g.exec(e), n = {
    name: "unknown",
    version: "-1",
    majorVersion: -1,
    webview: qp(e),
    chromium: !1,
    chromiumVersion: "-1",
    webkit: !1,
    webkitVersion: "-1"
  }, a = {
    name: "unknown",
    version: "-1",
    majorVersion: -1
  }, s = Hi(kp, e), u = s.preset, f = s.version, c = Hi(Xp, e), v = c.preset, p = c.version, h = Hi(Hp, e);
  if (n.chromium = !!h.preset, n.chromiumVersion = h.version, !n.chromium) {
    var d = Hi(Ru, e);
    n.webkit = !!d.preset, n.webkitVersion = d.version;
  }
  return v && (a.name = v.id, a.version = p, a.majorVersion = parseInt(p, 10)), u && (n.name = u.id, n.version = f, n.webview && a.name === "ios" && n.name !== "safari" && (n.webview = !1)), n.majorVersion = parseInt(n.version, 10), {
    browser: n,
    os: a,
    isMobile: r,
    isHints: !1
  };
}
function eb(t) {
  var e = navigator.userAgentData, r = (e.uaList || e.brands).slice(), n = e.mobile || !1, a = r[0], s = (e.platform || navigator.platform).toLowerCase(), u = {
    name: a.brand,
    version: a.version,
    majorVersion: -1,
    webkit: !1,
    webkitVersion: "-1",
    chromium: !1,
    chromiumVersion: "-1",
    webview: !!ao(Yp, r).brand || qp(Wp())
  }, f = {
    name: "unknown",
    version: "-1",
    majorVersion: -1
  };
  u.webkit = !u.chromium && ff(Ru, function(d) {
    return Np(r, d);
  });
  var c = ao(Hp, r);
  if (u.chromium = !!c.brand, u.chromiumVersion = c.version || "-1", !u.chromium) {
    var v = ao(Ru, r);
    u.webkit = !!v.brand, u.webkitVersion = v.version || "-1";
  }
  var p = Lp(Xp, function(d) {
    return new RegExp("" + d.test, "g").exec(s);
  });
  f.name = p ? p.id : "";
  {
    var h = ao(kp, r);
    u.name = h.brand || u.name, u.version = h.brand && t ? t.uaFullVersion : h.version;
  }
  return u.webkit && (f.name = n ? "ios" : "mac"), f.name === "ios" && u.webview && (u.version = "-1"), f.version = Tu(f.version), u.version = Tu(u.version), f.majorVersion = parseInt(f.version, 10), u.majorVersion = parseInt(u.version, 10), {
    browser: u,
    os: f,
    isMobile: n,
    isHints: !0
  };
}
function nb(t) {
  return jS() ? eb() : rb(t);
}
function ib(t, e, r, n, a, s) {
  for (var u = 0; u < a; ++u) {
    var f = r + u * a, c = n + u * a;
    t[f] += t[c] * s, e[f] += e[c] * s;
  }
}
function ab(t, e, r, n, a) {
  for (var s = 0; s < a; ++s) {
    var u = r + s * a, f = n + s * a, c = t[u], v = e[u];
    t[u] = t[f], t[f] = c, e[u] = e[f], e[f] = v;
  }
}
function ob(t, e, r, n, a) {
  for (var s = 0; s < n; ++s) {
    var u = r + s * n;
    t[u] /= a, e[u] /= a;
  }
}
function Up(t, e, r) {
  for (var n = t.slice(), a = 0; a < r; ++a)
    n[a * r + e - 1] = 0, n[(e - 1) * r + a] = 0;
  return n[(e - 1) * (r + 1)] = 1, n;
}
function Oe(t, e) {
  e === void 0 && (e = Math.sqrt(t.length));
  for (var r = t.slice(), n = tr(e), a = 0; a < e; ++a) {
    var s = e * a + a;
    if (!Ot(r[s], pr)) {
      for (var u = a + 1; u < e; ++u)
        if (r[e * a + u]) {
          ab(r, n, a, u, e);
          break;
        }
    }
    if (!Ot(r[s], pr))
      return [];
    ob(r, n, a, e, r[s]);
    for (var u = 0; u < e; ++u) {
      var f = u, c = u + a * e, v = r[c];
      !Ot(v, pr) || a === u || ib(r, n, f, a, e, -v);
    }
  }
  return n;
}
function sb(t, e) {
  e === void 0 && (e = Math.sqrt(t.length));
  for (var r = [], n = 0; n < e; ++n)
    for (var a = 0; a < e; ++a)
      r[a * e + n] = t[e * n + a];
  return r;
}
function $p(t, e) {
  e === void 0 && (e = Math.sqrt(t.length));
  for (var r = [], n = t[e * e - 1], a = 0; a < e - 1; ++a)
    r[a] = t[e * (e - 1) + a] / n;
  return r[e - 1] = 0, r;
}
function ub(t, e) {
  for (var r = tr(e), n = 0; n < e - 1; ++n)
    r[e * (e - 1) + n] = t[n] || 0;
  return r;
}
function On(t, e) {
  for (var r = t.slice(), n = t.length; n < e - 1; ++n)
    r[n] = 0;
  return r[e - 1] = 1, r;
}
function be(t, e, r) {
  if (e === void 0 && (e = Math.sqrt(t.length)), e === r)
    return t;
  for (var n = tr(r), a = Math.min(e, r), s = 0; s < a - 1; ++s) {
    for (var u = 0; u < a - 1; ++u)
      n[s * r + u] = t[s * e + u];
    n[(s + 1) * r - 1] = t[(s + 1) * e - 1], n[(r - 1) * r + s] = t[(e - 1) * e + s];
  }
  return n[r * r - 1] = t[e * e - 1], n;
}
function Eo(t) {
  for (var e = [], r = 1; r < arguments.length; r++)
    e[r - 1] = arguments[r];
  var n = tr(t);
  return e.forEach(function(a) {
    n = Kt(n, a, t);
  }), n;
}
function Kt(t, e, r) {
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
function Ht(t, e) {
  for (var r = Math.min(t.length, e.length), n = t.slice(), a = 0; a < r; ++a)
    n[a] = n[a] + e[a];
  return n;
}
function Et(t, e) {
  for (var r = Math.min(t.length, e.length), n = t.slice(), a = 0; a < r; ++a)
    n[a] = n[a] - e[a];
  return n;
}
function fb(t, e) {
  return e === void 0 && (e = t.length === 6), e ? [t[0], t[1], 0, t[2], t[3], 0, t[4], t[5], 1] : t;
}
function Vp(t, e) {
  return e === void 0 && (e = t.length === 9), e ? [t[0], t[1], t[3], t[4], t[6], t[7]] : t;
}
function Mr(t, e, r) {
  r === void 0 && (r = e.length);
  var n = Kt(t, e, r), a = n[r - 1];
  return n.map(function(s) {
    return s / a;
  });
}
function lb(t, e) {
  return Kt(t, [1, 0, 0, 0, 0, Math.cos(e), Math.sin(e), 0, 0, -Math.sin(e), Math.cos(e), 0, 0, 0, 0, 1], 4);
}
function cb(t, e) {
  return Kt(t, [Math.cos(e), 0, -Math.sin(e), 0, 0, 1, 0, 0, Math.sin(e), 0, Math.cos(e), 0, 0, 0, 0, 1], 4);
}
function vb(t, e) {
  return Kt(t, fa(e, 4));
}
function oo(t, e) {
  var r = e[0], n = r === void 0 ? 1 : r, a = e[1], s = a === void 0 ? 1 : a, u = e[2], f = u === void 0 ? 1 : u;
  return Kt(t, [n, 0, 0, 0, 0, s, 0, 0, 0, 0, f, 0, 0, 0, 0, 1], 4);
}
function ua(t, e) {
  return Mr(fa(e, 3), On(t, 3));
}
function lu(t, e) {
  var r = e[0], n = r === void 0 ? 0 : r, a = e[1], s = a === void 0 ? 0 : a, u = e[2], f = u === void 0 ? 0 : u;
  return Kt(t, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, n, s, f, 1], 4);
}
function bv(t, e) {
  return Kt(t, e, 4);
}
function fa(t, e) {
  var r = Math.cos(t), n = Math.sin(t), a = tr(e);
  return a[0] = r, a[1] = n, a[e] = -n, a[e + 1] = r, a;
}
function tr(t) {
  for (var e = t * t, r = [], n = 0; n < e; ++n)
    r[n] = n % (t + 1) ? 0 : 1;
  return r;
}
function cf(t, e) {
  for (var r = tr(e), n = Math.min(t.length, e - 1), a = 0; a < n; ++a)
    r[(e + 1) * a] = t[a];
  return r;
}
function In(t, e) {
  for (var r = tr(e), n = Math.min(t.length, e - 1), a = 0; a < n; ++a)
    r[e * (e - 1) + a] = t[a];
  return r;
}
function vf(t, e, r, n, a, s, u, f) {
  var c = t[0], v = t[1], p = e[0], h = e[1], d = r[0], m = r[1], _ = n[0], x = n[1], y = a[0], b = a[1], E = s[0], R = s[1], M = u[0], D = u[1], w = f[0], O = f[1], I = [c, 0, p, 0, d, 0, _, 0, v, 0, h, 0, m, 0, x, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, c, 0, p, 0, d, 0, _, 0, v, 0, h, 0, m, 0, x, 0, 1, 0, 1, 0, 1, 0, 1, -y * c, -b * c, -E * p, -R * p, -M * d, -D * d, -w * _, -O * _, -y * v, -b * v, -E * h, -R * h, -M * m, -D * m, -w * x, -O * x], P = Oe(I, 8);
  if (!P.length)
    return [];
  var B = Kt(P, [y, b, E, R, M, D, w, O], 8);
  return B[8] = 1, be(sb(B), 3, 4);
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
function pb() {
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
function db(t, e) {
  var r = Mr(t, [e[0], e[1] || 0, e[2] || 0, 1], 4), n = r[3] || 1;
  return [
    r[0] / n,
    r[1] / n,
    r[2] / n
  ];
}
function ti(t) {
  var e = pb();
  return t.forEach(function(r) {
    var n = r.matrixFunction, a = r.functionValue;
    n && (e = n(e, a));
  }), e;
}
function ui(t, e) {
  e === void 0 && (e = 0);
  var r = dr(t) ? t : ln(t);
  return r.map(function(n) {
    var a = xp(n), s = a.prefix, u = a.value, f = null, c = s, v = "";
    if (s === "translate" || s === "translateX" || s === "translate3d") {
      var p = Se(e) ? qi(qi({}, e), { "o%": e["%"] }) : {
        "%": e,
        "o%": e
      }, h = Rn(u).map(function(L, Y) {
        return Y === 0 && "x%" in p ? p["%"] = e["x%"] : Y === 1 && "y%" in p ? p["%"] = e["y%"] : p["%"] = e["o%"], Vt(L, p);
      }), d = h[0], m = h[1], _ = m === void 0 ? 0 : m, x = h[2], y = x === void 0 ? 0 : x;
      f = lu, v = [d, _, y];
    } else if (s === "translateY") {
      var b = Se(e) ? qi({ "%": e["y%"] }, e) : {
        "%": e
      }, _ = Vt(u, b);
      f = lu, v = [0, _, 0];
    } else if (s === "translateZ") {
      var y = parseFloat(u);
      f = lu, v = [0, 0, y];
    } else if (s === "scale" || s === "scale3d") {
      var E = Rn(u).map(function(L) {
        return parseFloat(L);
      }), R = E[0], M = E[1], D = M === void 0 ? R : M, w = E[2], O = w === void 0 ? 1 : w;
      f = oo, v = [R, D, O];
    } else if (s === "scaleX") {
      var R = parseFloat(u);
      f = oo, v = [R, 1, 1];
    } else if (s === "scaleY") {
      var D = parseFloat(u);
      f = oo, v = [1, D, 1];
    } else if (s === "scaleZ") {
      var O = parseFloat(u);
      f = oo, v = [1, 1, O];
    } else if (s === "rotate" || s === "rotateZ" || s === "rotateX" || s === "rotateY") {
      var I = ia(u), P = I.unit, B = I.value, H = P === "rad" ? B : B * Math.PI / 180;
      s === "rotate" || s === "rotateZ" ? (c = "rotateZ", f = vb) : s === "rotateX" ? f = lb : s === "rotateY" && (f = cb), v = H;
    } else if (s === "matrix3d")
      f = bv, v = Rn(u).map(function(L) {
        return parseFloat(L);
      });
    else if (s === "matrix") {
      var W = Rn(u).map(function(L) {
        return parseFloat(L);
      });
      f = bv, v = [
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
function hb(t, e) {
  Ou(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
var Kp = typeof Map == "function" ? void 0 : /* @__PURE__ */ (function() {
  var t = 0;
  return function(e) {
    return e.__DIFF_KEY__ || (e.__DIFF_KEY__ = ++t);
  };
})(), Zp = /* @__PURE__ */ (function(t) {
  hb(e, t);
  function e(r) {
    return r === void 0 && (r = []), t.call(this, r, Kp) || this;
  }
  return e;
})(BS);
function gb(t, e) {
  return aa(t, e, Kp);
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
function mb() {
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
    if (Se(r))
      for (var a in r)
        this.on(a, r[a]);
    else
      this._addEvent(r, n, {});
    return this;
  }, e.off = function(r, n) {
    if (!r)
      this._events = {};
    else if (Se(r))
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
    }, n.currentTarget = this, mb(s).forEach(function(f) {
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
function _b(t, e) {
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
function xb(t) {
  var e = t.container;
  return e === document.body ? [e.scrollLeft || document.documentElement.scrollLeft, e.scrollTop || document.documentElement.scrollTop] : [e.scrollLeft, e.scrollTop];
}
function Cv(t, e) {
  return t.addEventListener("scroll", e), function() {
    t.removeEventListener("scroll", e);
  };
}
function so(t) {
  if (t) {
    if (kr(t))
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
var yb = /* @__PURE__ */ (function(t) {
  _b(e, t);
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
    var s = a.container, u = a.getScrollPosition, f = u === void 0 ? xb : u;
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
      var s = a === !0 ? Cv : a, u = so(n.container);
      a === !0 && (u === document.body || u === document.documentElement) ? this._unregister = Cv(window, this._onScroll) : this._unregister = s(u, this._onScroll);
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
function Sb() {
  for (var t = 0, e = 0, r = arguments.length; e < r; e++) t += arguments[e].length;
  for (var n = Array(t), a = 0, e = 0; e < r; e++) for (var s = arguments[e], u = 0, f = s.length; u < f; u++, a++) n[a] = s[u];
  return n;
}
function Nr(t) {
  return Ot(t, pr);
}
function bb(t, e) {
  return t.every(function(r, n) {
    return Nr(r - e[n]) === 0;
  });
}
function Cb(t, e) {
  return !Nr(t[0] - e[0]) && !Nr(t[1] - e[1]);
}
function Jp(t) {
  return t.length < 3 ? 0 : Math.abs(wS(t.map(function(e, r) {
    var n = t[r + 1] || t[0];
    return e[0] * n[1] - n[0] * e[1];
  }))) / 2;
}
function Ev(t, e) {
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
    if (bb(v, x))
      h.push({
        pos: t,
        line: _,
        type: "line"
      });
    else {
      var b = Qp(pf(v, x), [c, _]);
      b.forEach(function(E) {
        _.some(function(R) {
          return Cb(R, E);
        }) ? h.push({
          pos: E,
          line: _,
          type: "point"
        }) : Nr(y[1] - a) !== 0 && h.push({
          pos: E,
          line: _,
          type: "intersection"
        });
      });
    }
  }), Hr(h, function(_) {
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
          var E = Hr(b, function(D) {
            return D[1] !== a;
          }), R = m[x[0]], M = E[1] > a ? 1 : -1;
          R ? R !== M && ++d : m[x[0]] = M;
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
function Qp(t, e) {
  var r = e.map(function(h) {
    return [0, 1].map(function(d) {
      return [Math.min(h[0][d], h[1][d]), Math.max(h[0][d], h[1][d])];
    });
  }), n = [];
  if (t.length === 2) {
    var a = t[0], s = a[0], u = a[1];
    if (Nr(s - t[1][0])) {
      if (!Nr(u - t[1][1])) {
        var v = Math.max.apply(Math, r.map(function(h) {
          return h[0][0];
        })), p = Math.min.apply(Math, r.map(function(h) {
          return h[0][1];
        }));
        if (Nr(v - p) > 0)
          return [];
        n = [[v, u], [p, u]];
      }
    } else {
      var f = Math.max.apply(Math, r.map(function(h) {
        return h[1][0];
      })), c = Math.min.apply(Math, r.map(function(h) {
        return h[1][1];
      }));
      if (Nr(f - c) > 0)
        return [];
      n = [[s, f], [s, c]];
    }
  }
  return n.length || (n = t.filter(function(h) {
    var d = h[0], m = h[1];
    return r.every(function(_) {
      return 0 <= Nr(d - _[0][0]) && 0 <= Nr(_[0][1] - d) && 0 <= Nr(m - _[1][0]) && 0 <= Nr(_[1][1] - m);
    });
  })), n.map(function(h) {
    return [Nr(h[0]), Nr(h[1])];
  });
}
function Bu(t) {
  return Sb(t.slice(1), [t[0]]).map(function(e, r) {
    return [t[r], e];
  });
}
function Eb(t, e) {
  var r = t.slice(), n = e.slice();
  dv(r) === -1 && r.reverse(), dv(n) === -1 && n.reverse();
  var a = Bu(r), s = Bu(n), u = a.map(function(p) {
    return wo(p[0], p[1]);
  }), f = s.map(function(p) {
    return wo(p[0], p[1]);
  }), c = [];
  u.forEach(function(p, h) {
    var d = a[h], m = [];
    f.forEach(function(_, x) {
      var y = pf(p, _), b = Qp(y, [d, s[x]]);
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
function wb(t, e) {
  var r = Eb(t, e);
  return r.map(function(n) {
    var a = n.pos;
    return a;
  });
}
function Db(t, e) {
  var r = wb(t, e);
  return Jp(r);
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
function Mb(t, e) {
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
function Tb(t, e) {
  var r = e[0] - t[0], n = e[1] - t[1], a = Math.atan2(n, r);
  return a >= 0 ? a : a + Math.PI * 2;
}
function cu(t) {
  return Tb([
    t[0].clientX,
    t[0].clientY
  ], [
    t[1].clientX,
    t[1].clientY
  ]) / Math.PI * 180;
}
function Rb(t) {
  return t.touches && t.touches.length >= 2;
}
function uo(t) {
  return t ? t.touches ? Ib(t.touches) : [jp(t)] : [];
}
function Ob(t) {
  return t && (t.type.indexOf("mouse") > -1 || "button" in t);
}
function wv(t, e, r) {
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
function Ib(t) {
  for (var e = Math.min(t.length, 2), r = [], n = 0; n < e; ++n)
    r.push(jp(t[n]));
  return r;
}
function jp(t) {
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
    var n = wv(e || this.prevClients, this.prevClients, this.startClients), a = n.deltaX, s = n.deltaY;
    return this.movement += Math.sqrt(a * a + s * s), this.prevClients = e, n;
  }, t.prototype.getPositions = function(e) {
    e === void 0 && (e = this.prevClients);
    for (var r = this.prevClients, n = this.startClients, a = Math.min(this.length, r.length), s = [], u = 0; u < a; ++u)
      s[u] = wv([e[u]], [r[u]], [n[u]]);
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
})(), Dv = ["textarea", "input"], Pb = /* @__PURE__ */ (function(t) {
  Mb(e, t);
  function e(r, n) {
    n === void 0 && (n = {});
    var a = t.call(this) || this;
    a.options = {}, a.flag = !1, a.pinchFlag = !1, a.data = {}, a.isDrag = !1, a.isPinch = !1, a.clientStores = [], a.targets = [], a.prevTime = 0, a.doubleFlag = !1, a._useMouse = !1, a._useTouch = !1, a._useDrag = !1, a._dragFlag = !1, a._isTrusted = !1, a._isMouseEvent = !1, a._isSecondaryButton = !1, a._preventMouseEvent = !1, a._prevInputEvent = null, a._isDragAPI = !1, a._isIdle = !0, a._preventMouseEventId = 0, a._window = window, a.onDragStart = function(d, m) {
      if (m === void 0 && (m = !0), !(!a.flag && d.cancelable === !1)) {
        var _ = d.type.indexOf("drag") >= -1;
        if (!(a.flag && _)) {
          a._isDragAPI = !0;
          var x = a.options, y = x.container, b = x.pinchOutside, E = x.preventWheelClick, R = x.preventRightClick, M = x.preventDefault, D = x.checkInput, w = x.dragFocusedInput, O = x.preventClickEventOnDragStart, I = x.preventClickEventOnDrag, P = x.preventClickEventByCondition, B = a._useTouch, H = !a.flag;
          if (a._isSecondaryButton = d.which === 3 || d.button === 2, E && (d.which === 2 || d.button === 1) || R && (d.which === 3 || d.button === 2))
            return a.stop(), !1;
          if (H) {
            var W = a._window.document.activeElement, L = d.target;
            if (L) {
              var Y = L.tagName.toLowerCase(), X = Dv.indexOf(Y) > -1, j = L.isContentEditable;
              if (X || j) {
                if (D || !w && W === L)
                  return !1;
                if (W && (W === L || j && W.isContentEditable && W.contains(L)))
                  if (w)
                    L.blur();
                  else
                    return !1;
              } else if ((M || d.type === "touchstart") && W) {
                var rt = W.tagName.toLowerCase();
                (W.isContentEditable || Dv.indexOf(rt) > -1) && W.blur();
              }
              (O || I || P) && Er(a._window, "click", a._onClick, !0);
            }
            a.clientStores = [new pu(uo(d))], a._isIdle = !1, a.flag = !0, a.isDrag = !1, a._isTrusted = m, a._dragFlag = !0, a._prevInputEvent = d, a.data = {}, a.doubleFlag = Ji() - a.prevTime < 200, a._isMouseEvent = Ob(d), !a._isMouseEvent && a._preventMouseEvent && a._allowMouseEvent();
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
          }))) : B && b && mr(y, "touchstart", a.onDragStart), a.flag && Rb(d)) {
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
        var m = a.options, _ = m.pinchOutside, x = m.container, y = m.preventClickEventOnDrag, b = m.preventClickEventOnDragStart, E = m.preventClickEventByCondition, R = a.isDrag;
        (y || b || E) && requestAnimationFrame(function() {
          a._allowClickEvent();
        }), !E && !b && y && !R && a._allowClickEvent(), a._useTouch && _ && mr(x, "touchstart", a.onDragStart), a.pinchFlag && a.onPinchEnd(d);
        var M = d?.touches ? uo(d) : [], D = M.length;
        D === 0 || !a.options.keepDragging ? a.flag = !1 : a._addStore(new pu(M));
        var w = a._getPosition(), O = Ji(), I = !R && a.doubleFlag;
        a._prevInputEvent = null, a.prevTime = R || I ? 0 : O, a.flag || (a._dettachDragEvent(), a._preventMouseEvent || a.emit("dragEnd", vr({ data: a.data, datas: a.data, isDouble: I, isDrag: R, isClick: !R, isMouseEvent: a._isMouseEvent, isSecondaryButton: a._isSecondaryButton, inputEvent: d, isTrusted: a._isTrusted }, w)), a.clientStores = [], a._isMouseEvent || (a._preventMouseEvent = !0, clearTimeout(a._preventMouseEventId), a._preventMouseEventId = setTimeout(function() {
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
    a._window = Dp(u) ? u : fn(u), a.options = vr({ checkInput: !1, container: u && !("document" in u) ? fn(u) : u, preventRightClick: !0, preventWheelClick: !0, preventClickEventOnDragStart: !1, preventClickEventOnDrag: !1, preventClickEventByCondition: null, preventDefault: !0, checkWindowBlur: !1, keepDragging: !1, pinchThreshold: 0, events: ["touch", "mouse"] }, n);
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
function Ab(t) {
  for (var e = 5381, r = t.length; r; )
    e = e * 33 ^ t.charCodeAt(--r);
  return e >>> 0;
}
var Bb = Ab;
function zb(t) {
  return Bb(t).toString(36);
}
function Gb(t) {
  if (t && t.getRootNode) {
    var e = t.getRootNode();
    if (e.nodeType === 11)
      return e;
  }
}
function Fb(t, e, r) {
  return r.original ? e : e.replace(/([^};{\s}][^};{]*|^\s*){/mg, function(n, a) {
    var s = a.trim();
    return (s ? Rn(s) : [""]).map(function(u) {
      var f = u.trim();
      return f.indexOf("@") === 0 ? f : f.indexOf(":global") > -1 ? f.replace(/\:global/g, "") : f.indexOf(":host") > -1 ? "".concat(f.replace(/\:host/g, ".".concat(t))) : f ? ".".concat(t, " ").concat(f) : ".".concat(t);
    }).join(", ") + " {";
  });
}
function Lb(t, e, r, n, a) {
  var s = di(n), u = s.createElement("style");
  return u.setAttribute("type", "text/css"), u.setAttribute("data-styled-id", t), u.setAttribute("data-styled-count", "1"), r.nonce && u.setAttribute("nonce", r.nonce), u.innerHTML = Fb(t, e, r), (a || s.head || s.body).appendChild(u), u;
}
function Wb(t) {
  var e = "rCS" + zb(t);
  return {
    className: e,
    inject: function(r, n) {
      n === void 0 && (n = {});
      var a = Gb(r), s = (a || r.ownerDocument || document).querySelector('style[data-styled-id="'.concat(e, '"]'));
      if (!s)
        s = Lb(e, t, n, r, a);
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
function Nb(t, e) {
  var r = {};
  for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(t); a < n.length; a++)
    e.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[a]) && (r[n[a]] = t[n[a]]);
  return r;
}
function td(t, e) {
  var r = Wb(e), n = r.className;
  return LS(function(a, s) {
    var u = a.className, f = u === void 0 ? "" : u;
    a.cspNonce;
    var c = Nb(a, ["className", "cspNonce"]), v = JS();
    return QS(s, function() {
      return v.current;
    }, []), Fp(function() {
      var p = r.inject(v.current, {
        nonce: a.cspNonce
      });
      return function() {
        p.destroy();
      };
    }, []), xe(t, Gu({
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
function kb(t, e) {
  var r = {};
  for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(t); a < n.length; a++)
      e.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[a]) && (r[n[a]] = t[n[a]]);
  return r;
}
function Hb(t, e, r, n) {
  var a = arguments.length, s = a < 3 ? e : n, u;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") s = Reflect.decorate(t, e, r, n);
  else for (var f = t.length - 1; f >= 0; f--) (u = t[f]) && (s = (a < 3 ? u(s) : a > 3 ? u(e, r, s) : u(e, r)) || s);
  return a > 3 && s && Object.defineProperty(e, r, s), s;
}
function Yb(t) {
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
var Xb = ["n", "w", "s", "e"], df = ["n", "w", "s", "e", "nw", "ne", "sw", "se"];
function qb(t, e) {
  return 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="'.concat(32 * t, 'px" height="').concat(32 * t, 'px" viewBox="0 0 32 32" ><path d="M 16,5 L 12,10 L 14.5,10 L 14.5,22 L 12,22 L 16,27 L 20,22 L 17.5,22 L 17.5,10 L 20, 10 L 16,5 Z" stroke-linejoin="round" stroke-width="1.2" fill="black" stroke="white" style="transform:rotate(').concat(e, 'deg);transform-origin: 16px 16px"></path></svg>');
}
function Ub(t) {
  var e = qb(1, t), r = Math.round(t / 45) * 45 % 180, n = "ns-resize";
  return r === 135 ? n = "nwse-resize" : r === 45 ? n = "nesw-resize" : r === 90 && (n = "ew-resize"), "cursor:".concat(n, ";cursor: url('").concat(e, "') 16 16, ").concat(n, ";");
}
var gi = nb(), rd = gi.browser.webkit, ed = rd && (function() {
  var t = typeof window > "u" ? { userAgent: "" } : window.navigator, e = /applewebkit\/([^\s]+)/g.exec(t.userAgent.toLowerCase());
  return e ? parseFloat(e[1]) < 605 : !1;
})(), nd = gi.browser.name, id = parseInt(gi.browser.version, 10), $b = nd === "chrome", Vb = gi.browser.chromium, Kb = parseInt(gi.browser.chromiumVersion, 10) || 0, Zb = $b && id >= 109 || Vb && Kb >= 109, Jb = nd === "firefox", Qb = parseInt(gi.browser.webkitVersion, 10) >= 612 || id >= 15, hf = "moveable-", jb = df.map(function(t) {
  var e = "", r = "", n = "center", a = "center", s = "calc(var(--moveable-control-padding, 20) * -1px)";
  return t.indexOf("n") > -1 && (e = "top: ".concat(s, ";"), a = "bottom"), t.indexOf("s") > -1 && (e = "top: 0px;", a = "top"), t.indexOf("w") > -1 && (r = "left: ".concat(s, ";"), n = "right"), t.indexOf("e") > -1 && (r = "left: 0px;", n = "left"), '.around-control[data-direction*="'.concat(t, `"] {
        `).concat(r).concat(e, `
        transform-origin: `).concat(n, " ").concat(a, `;
    }`);
}).join(`
`), tC = `
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
`.concat(jb, `
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
`).concat(Ub(t), `
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

`).concat(ed ? `:global svg *:before {
content:"";
transform-origin: inherit;
}` : "", `
`), rC = [
  [0, 1, 2],
  [1, 0, 3],
  [2, 0, 3],
  [3, 1, 2]
], Lu = 1e-4, Br = 1e-7, fo = 1e-9, Wu = Math.pow(10, 10), Mv = -Wu, eC = {
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
}, ad = {
  n: 0,
  s: 180,
  w: 270,
  e: 90,
  nw: 315,
  ne: 45,
  sw: 225,
  se: 135
}, od = [
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
  var a = t.length === 16, s = a ? 4 : 3, u = zn(t, r, n, s), f = F(u, 4), c = F(f[0], 2), v = c[0], p = c[1], h = F(f[1], 2), d = h[0], m = h[1], _ = F(f[2], 2), x = _[0], y = _[1], b = F(f[3], 2), E = b[0], R = b[1], M = F(nr(t, e, s), 2), D = M[0], w = M[1], O = Math.min(v, d, x, E), I = Math.min(p, m, y, R), P = Math.max(v, d, x, E), B = Math.max(p, m, y, R);
  v = v - O || 0, d = d - O || 0, x = x - O || 0, E = E - O || 0, p = p - I || 0, m = m - I || 0, y = y - I || 0, R = R - I || 0, D = D - O || 0, w = w - I || 0;
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
    pos4: [E, R],
    direction: L
  };
}
function sd(t, e) {
  var r = e.clientX, n = e.clientY, a = e.datas, s = t.state, u = s.moveableClientRect, f = s.rootMatrix, c = s.is3d, v = s.pos1, p = u.left, h = u.top, d = c ? 4 : 3, m = F(Et(vi(f, [r - p, n - h], d), v), 2), _ = m[0], x = m[1], y = F(Ie({ datas: a, distX: _, distY: x }), 2), b = y[0], E = y[1];
  return [b, E];
}
function Bn(t, e) {
  var r = e.datas, n = t.state, a = n.allMatrix, s = n.beforeMatrix, u = n.is3d, f = n.left, c = n.top, v = n.origin, p = n.offsetMatrix, h = n.targetMatrix, d = n.transformOrigin, m = u ? 4 : 3;
  r.is3d = u, r.matrix = a, r.targetMatrix = h, r.beforeMatrix = s, r.offsetMatrix = p, r.transformOrigin = d, r.inverseMatrix = Oe(a, m), r.inverseBeforeMatrix = Oe(s, m), r.absoluteOrigin = On(Ht([f, c], v), m), r.startDragBeforeDist = Mr(r.inverseBeforeMatrix, r.absoluteOrigin, m), r.startDragDist = Mr(r.inverseMatrix, r.absoluteOrigin, m);
}
function nC(t) {
  return oi(t.datas.beforeTransform, [50, 50], 100, 100).direction;
}
function Lo(t, e, r) {
  var n = e.datas, a = e.originalDatas.beforeRenderable, s = n.transformIndex, u = a.nextTransforms, f = u.length, c = a.nextTransformAppendedIndexes, v = -1;
  s === -1 ? (r === "translate" ? v = 0 : r === "rotate" && (v = qe(u, function(m) {
    return m.match(/scale\(/g);
  })), v === -1 && (v = u.length), n.transformIndex = v) : Hr(c, function(m) {
    return m.index === s && m.functionName === r;
  }) ? v = s : v = s + c.filter(function(m) {
    return m.index < s;
  }).length;
  var p = RE(u, t.state, v), h = p.targetFunction, d = r === "rotate" ? "rotateZ" : r;
  n.beforeFunctionTexts = p.beforeFunctionTexts, n.afterFunctionTexts = p.afterFunctionTexts, n.beforeTransform = p.beforeFunctionMatrix, n.beforeTransform2 = p.beforeFunctionMatrix2, n.targetTansform = p.targetFunctionMatrix, n.afterTransform = p.afterFunctionMatrix, n.afterTransform2 = p.afterFunctionMatrix2, n.targetAllTransform = p.allFunctionMatrix, h.functionName === d ? (n.afterFunctionTexts.splice(0, 1), n.isAppendTransform = !1) : f > v && (n.isAppendTransform = !0, a.nextTransformAppendedIndexes = it(it([], F(c), !1), [{
    functionName: r,
    index: v,
    isAppend: !0
  }], !1));
}
function Wo(t, e, r) {
  return "".concat(t.beforeFunctionTexts.join(" "), " ").concat(t.isAppendTransform ? r : e, " ").concat(t.afterFunctionTexts.join(" "));
}
function iC(t) {
  var e = t.datas, r = t.distX, n = t.distY, a = F(fd({ datas: e, distX: r, distY: n }), 2), s = a[0], u = a[1], f = ud(e, ub([s, u], 4));
  return Mr(f, On([0, 0, 0], 4), 4);
}
function ud(t, e, r) {
  var n = t.beforeTransform, a = t.afterTransform, s = t.beforeTransform2, u = t.afterTransform2, f = t.targetAllTransform, c = r ? Kt(f, e, 4) : Kt(e, f, 4), v = Kt(Oe(r ? s : n, 4), c, 4), p = Kt(v, Oe(r ? u : a, 4), 4);
  return p;
}
function fd(t) {
  var e = t.datas, r = t.distX, n = t.distY, a = e.inverseBeforeMatrix, s = e.is3d, u = e.startDragBeforeDist, f = e.absoluteOrigin, c = s ? 4 : 3;
  return Et(Mr(a, Ht(f, [r, n]), c), u);
}
function Ie(t, e) {
  var r = t.datas, n = t.distX, a = t.distY, s = r.inverseBeforeMatrix, u = r.inverseMatrix, f = r.is3d, c = r.startDragBeforeDist, v = r.startDragDist, p = r.absoluteOrigin, h = f ? 4 : 3;
  return Et(Mr(e ? s : u, Ht(p, [n, a]), h), e ? c : v);
}
function aC(t, e) {
  var r = t.datas, n = t.distX, a = t.distY;
  r.beforeMatrix;
  var s = r.matrix, u = r.is3d;
  r.startDragBeforeDist;
  var f = r.startDragDist, c = r.absoluteOrigin, v = u ? 4 : 3;
  return Et(Mr(s, Ht(f, [n, a]), v), c);
}
function oC(t, e, r, n, a, s) {
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
function ld(t) {
  var e = [];
  return t[1] >= 0 && (t[0] >= 0 && e.push(3), t[0] <= 0 && e.push(2)), t[1] <= 0 && (t[0] >= 0 && e.push(1), t[0] <= 0 && e.push(0)), e;
}
function sC(t, e) {
  return ld(e).map(function(r) {
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
function uC(t, e, r, n, a, s) {
  var u = zn(e, r, n, a), f = xr(u, s), c = t[0] - f[0], v = t[1] - f[1];
  return [c, v];
}
function pa(t, e, r, n) {
  return Kt(t, Vi(e, n, r), n);
}
function fC(t, e, r, n) {
  var a = t.transformOrigin, s = t.offsetMatrix, u = t.is3d, f = u ? 4 : 3, c;
  if (kr(r)) {
    var v = e.beforeTransform, p = e.afterTransform;
    n ? c = be(ji(r), 4, f) : c = be(Kt(Kt(v, ji([r]), 4), p, 4), 4, f);
  } else
    c = r;
  return pa(s, c, a, f);
}
function lC(t, e) {
  var r = t.transformOrigin, n = t.offsetMatrix, a = t.is3d, s = t.targetMatrix, u = t.targetAllTransform, f = a ? 4 : 3;
  return pa(n, Kt(u || s, cf(e, f), f), r, f);
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
function cd(t, e, r, n, a) {
  mf(a, e);
  var s = Ir.drag(t, va(a, t.state, r, n)), u = s ? s.transform : e;
  return z(z({ transform: e, drag: s }, Ar({
    transform: u
  }, a)), { afterTransform: u });
}
function _f(t, e, r, n, a, s) {
  var u = fC(t.state, a, e, s), f = pC(t, r, n, u);
  return f;
}
function vd(t, e, r, n, a, s, u) {
  var f = _f(t, e, r, a, s, u), c = t.state, v = c.left, p = c.top, h = t.props.groupable, d = h ? v : 0, m = h ? p : 0, _ = Et(n, f);
  return Et(_, [d, m]);
}
function cC(t, e, r, n, a, s, u) {
  var f = vd(t, e, r, n, a, s, u);
  return f;
}
function vC(t, e, r) {
  return [
    e ? -1 + t[0] / (e / 2) : 0,
    r ? -1 + t[1] / (r / 2) : 0
  ];
}
function pC(t, e, r, n) {
  n === void 0 && (n = t.state.allMatrix);
  var a = t.state, s = a.width, u = a.height, f = a.is3d, c = f ? 4 : 3, v = [
    s / 2 * (1 + e[0]) + r[0],
    u / 2 * (1 + e[1]) + r[1]
  ];
  return nr(n, v, c);
}
function dC(t, e, r) {
  var n = r.fixedDirection, a = r.fixedPosition, s = r.fixedOffset;
  return vd(t, "rotate(".concat(e, "deg)"), n, a, s, r);
}
function hC(t, e, r, n, a, s) {
  var u = t.props.groupable, f = t.state, c = f.transformOrigin, v = f.offsetMatrix, p = f.is3d, h = f.width, d = f.height, m = f.left, _ = f.top, x = s.fixedDirection, y = s.nextTargetMatrix || f.targetMatrix, b = p ? 4 : 3, E = oC(a, e, r, h, d, c), R = u ? m : 0, M = u ? _ : 0, D = pa(v, y, E, b), w = uC(n, D, e, r, b, x);
  return Et(w, [R, M]);
}
function gC(t, e) {
  return xr(ve(t.state), e);
}
function mC(t, e) {
  var r = t.targetGesto, n = t.controlGesto, a;
  return r?.isFlag() && (a = r.getEventData()[e]), !a && n?.isFlag() && (a = n.getEventData()[e]), a || {};
}
function _C(t) {
  if (t && t.getRootNode) {
    var e = t.getRootNode();
    if (e.nodeType === 11)
      return e;
  }
}
function xC(t) {
  var e = t("scale"), r = t("rotate"), n = t("translate"), a = [];
  return n && n !== "0px" && n !== "none" && a.push("translate(".concat(n.split(/\s+/).join(","), ")")), r && r !== "1" && r !== "none" && a.push("rotate(".concat(r, ")")), e && e !== "1" && e !== "none" && a.push("scale(".concat(e.split(/\s+/).join(","), ")")), a;
}
function pd(t, e, r) {
  for (var n = t, a = [], s = nf(t) || pn(t), u = !r && t === e || t === s, f = u, c = !1, v = 3, p, h, d, m = !1, _ = ra(e, e, !0).offsetParent, x = 1; n && !f; ) {
    f = u;
    var y = Yr(n), b = y("position"), E = Fd(n), R = b === "fixed", M = xC(y), D = fb(gE(E)), w = void 0, O = !1, I = !1, P = 0, B = 0, H = 0, W = 0, L = {
      hasTransform: !1,
      fixedContainer: null
    };
    R && (m = !0, L = SE(n), _ = L.fixedContainer);
    var Y = D.length;
    !c && (Y === 16 || M.length) && (c = !0, v = 4, Uu(a), d && (d = be(d, 3, 4))), c && Y === 9 && (D = be(D, 3, 4));
    var X = yE(n, t), j = X.tagName, rt = X.hasOffset, V = X.isSVG, et = X.origin, nt = X.targetOrigin, U = X.offset, ft = F(U, 2), vt = ft[0], ut = ft[1];
    j === "svg" && !n.ownerSVGElement && d && (a.push({
      type: "target",
      target: n,
      matrix: bE(n, v)
    }), a.push({
      type: "offset",
      target: n,
      matrix: tr(v)
    }));
    var lt = parseFloat(y("zoom")) || 1;
    if (R)
      w = L.fixedContainer, O = !0;
    else {
      var st = ra(n, e, !1, !0, y), dt = st.offsetZoom;
      if (w = st.offsetParent, O = st.isEnd, I = st.isStatic, x *= dt, (st.isCustomElement || dt !== 1) && I)
        vt -= w.offsetLeft, ut -= w.offsetTop;
      else if (Jb || Zb) {
        var _t = st.parentSlotElement;
        if (_t) {
          for (var Dt = w, Ft = 0, ot = 0; Dt && _C(Dt); )
            Ft += Dt.offsetLeft, ot += Dt.offsetTop, Dt = Dt.offsetParent;
          vt -= Ft, ut -= ot;
        }
      }
    }
    if (rd && !Qb && rt && !V && I && (b === "relative" || b === "static") && (vt -= w.offsetLeft, ut -= w.offsetTop, u = u || O), R)
      rt && L.hasTransform && (H = w.clientLeft, W = w.clientTop);
    else if (rt && _ !== w && (P = w.clientLeft, B = w.clientTop), rt && w === s) {
      var mt = Ld(n, !1);
      vt += mt[0], ut += mt[1];
    }
    if (a.push({
      type: "target",
      target: n,
      matrix: Vi(D, v, et)
    }), M.length && (a.push({
      type: "offset",
      target: n,
      matrix: tr(v)
    }), a.push({
      type: "target",
      target: n,
      matrix: Vi(ji(M), v, et)
    })), rt) {
      var at = n === t, J = at ? 0 : n.scrollLeft, pt = at ? 0 : n.scrollTop;
      a.push({
        type: "offset",
        target: n,
        matrix: In([
          vt - J + P - H,
          ut - pt + B - W
        ], v)
      });
    } else
      a.push({
        type: "offset",
        target: n,
        origin: et
      });
    if (lt !== 1 && a.push({
      type: "zoom",
      target: n,
      matrix: Vi(cf([lt, lt], v), v, [0, 0])
    }), d || (d = D), p || (p = et), h || (h = nt), f || R)
      break;
    n = w, u = O, (!r || n === s) && (f = u);
  }
  return d || (d = tr(v)), p || (p = [0, 0]), h || (h = [0, 0]), {
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
function yC(t) {
  var e = Dn?.get(t);
  if (e)
    return e;
  var r = Ki(t, !0);
  return Dn && Dn.set(t, r), r;
}
function SC(t, e) {
  if (ei) {
    var r = Hr(ei, function(a) {
      return a[0][0] == t && a[0][1] == e;
    });
    if (r)
      return r[1];
  }
  var n = pd(t, e, !0);
  return ei && ei.push([[t, e], n]), n;
}
function Yr(t) {
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
function ye(t, e, r) {
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
  var f = !!r.match(/Start$/g), c = !!r.match(/End$/g), v = a.isPinch, p = a.datas, h = ye(t, e.name, a), d = t.moveables, m = [], _ = h.map(function(x, y) {
    var b = d[y], E = b.state, R = E.gestos, M = x;
    if (f)
      M = new fi(u).dragStart(n, x), m.push(M);
    else {
      if (R[u] || (R[u] = p.childGestos[y]), !R[u])
        return;
      M = va(x, E, n, v, s, u), m.push(M);
    }
    var D = e[r](b, z(z({}, M), { parentFlag: !0 }));
    return c && (R[u] = null), D;
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
  var u = !!r.match(/End$/g), f = ye(t, e.name, n), c = t.moveables, v = f.map(function(p, h) {
    var d = c[h], m = p;
    m = a(d, p);
    var _ = e[r](d, z(z({}, m), { parentFlag: !0 }));
    return u && (d.state.gestos = {}), _;
  });
  return v;
}
function Mo(t, e, r, n) {
  var a = r.fixedDirection, s = r.fixedPosition, u = n.datas.startPositions || ve(e.state), f = xr(u, a), c = F(Mr(fa(-t.rotation / 180 * Math.PI, 3), [f[0] - s[0], f[1] - s[1], 1], 3), 2), v = c[0], p = c[1];
  return n.datas.originalX = v, n.datas.originalY = p, n;
}
function dd(t, e, r, n) {
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
    var R = (Ot(v, 15) + m * ad[b] + 720) % 180, M = {};
    return Ue(x).forEach(function(D) {
      M["data-".concat(D)] = x[D];
    }), n.createElement("div", z({ className: bt.apply(void 0, it(["control", "direction", b, e], F(y), !1)), "data-rotation": R, "data-direction": b }, M, { key: "direction-".concat(b), style: Io.apply(void 0, it([u, c], F(E.map(function(D) {
      return s[D];
    })), !1)) }));
  });
}
function hd(t, e, r, n) {
  var a = An(t.props, r), s = a.renderDirections, u = s === void 0 ? e : s, f = a.displayAroundControls;
  if (!u)
    return [];
  var c = u === !0 ? df : u;
  return it(it([], F(f ? xd(t, n, r, c) : []), !1), F(dd(t, r, c.map(function(v) {
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
  return t.createElement("div", { key: "line-".concat(s), className: bt.apply(void 0, it(["line", "direction", e ? "edge" : "", e], F(u), !1)), "data-rotation": v, "data-line-key": s, "data-direction": e, style: Xi(r, n, a, c) });
}
function gd(t, e, r, n, a) {
  var s = r === !0 ? Xb : r;
  return s.map(function(u, f) {
    var c = F(gf[u], 2), v = c[0], p = c[1];
    if (p != null)
      return ta(t, u, n[v], n[p], a, "".concat(e, "Edge").concat(f), e);
  }).filter(Boolean);
}
function md(t) {
  return function(e, r) {
    var n = An(e.props, t).edge;
    return n && (n === !0 || n.length) ? it(it([], F(gd(r, t, n, e.getState().renderPoses, e.props.zoom)), !1), F(bC(e, t, r)), !1) : _d(e, t, r);
  };
}
function _d(t, e, r) {
  return hd(t, df, e, r);
}
function bC(t, e, r) {
  return hd(t, ["nw", "ne", "sw", "se"], e, r);
}
function xd(t, e, r, n) {
  var a = t.renderState;
  a.renderDirectionMap || (a.renderDirectionMap = {});
  var s = t.getState(), u = s.renderPoses, f = s.rotation, c = s.direction, v = a.renderDirectionMap, p = t.props.zoom, h = Pr(c), d = f / Math.PI * 180;
  return (n || Ue(v)).map(function(m) {
    var _ = gf[m];
    if (!_)
      return null;
    var x = (Ot(d, 15) + h * ad[m] + 720) % 180, y = ["around-control"];
    return r && y.push("direction", r), e.createElement("div", { className: bt.apply(void 0, it([], F(y), !1)), "data-rotation": x, "data-direction": m, key: "direction-around-".concat(m), style: Io.apply(void 0, it([f, p], F(_.map(function(b) {
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
  var r = t.state, n = r.containerClientRect, a = n.clientHeight, s = n.clientWidth, u = n.clientLeft, f = n.clientTop, c = r.snapOffset, v = c.left, p = c.top, h = c.right, d = c.bottom, m = e || t.props.bounds || {}, _ = m.position || "client", x = _ === "css", y = m.left, b = y === void 0 ? -1 / 0 : y, E = m.top, R = E === void 0 ? -1 / 0 : E, M = m.right, D = M === void 0 ? x ? -1 / 0 : 1 / 0 : M, w = m.bottom, O = w === void 0 ? x ? -1 / 0 : 1 / 0 : w;
  return x && (D = s + h - v - D, O = a + d - p - O), {
    left: b + v - u,
    right: D + v - u,
    top: R + p - f,
    bottom: O + p - f
  };
}
function CC(t, e, r) {
  var n = Ho(t), a = n.left, s = n.top, u = n.right, f = n.bottom, c = F(r, 2), v = c[0], p = c[1], h = F(Et(r, e), 2), d = h[0], m = h[1];
  Q(d) < Br && (d = 0), Q(m) < Br && (m = 0);
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
    var E = m / d, R = r[1] - E * v, M = 0, D = 0, w = !1;
    x && u <= v ? (M = E * u + R, D = u, w = !0) : !x && v <= a && (M = E * a + R, D = a, w = !0), w && (M < s || M > f) && (w = !1), w || (_ && f <= p ? (M = f, D = (M - R) / E, w = !0) : !_ && p <= s && (M = s, D = (M - R) / E, w = !0)), w && (y.isBound = !0, y.pos = D, y.offset = v - D, b.isBound = !0, b.pos = M, b.offset = p - M);
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
    return Q(v.offset) - Q(c.offset);
  });
}
function Rv(t, e, r) {
  var n = r ? t.map(function(a) {
    return ua(a, r);
  }) : t;
  return n.some(function(a) {
    return a[0] < e.left && Q(a[0] - e.left) > 0.1 || a[0] > e.right && Q(a[0] - e.right) > 0.1 || a[1] < e.top && Q(a[1] - e.top) > 0.1 || a[1] > e.bottom && Q(a[1] - e.bottom) > 0.1;
  });
}
function EC(t, e, r) {
  var n = ce(t), a = Math.sqrt(n * n - e * e) || 0;
  return [a, -a].sort(function(s, u) {
    return Q(s - t[r ? 0 : 1]) - Q(u - t[r ? 0 : 1]);
  }).map(function(s) {
    return cr([0, 0], r ? [s, e] : [e, s]);
  });
}
function wC(t, e, r, n, a) {
  if (!t.props.bounds)
    return [];
  var s = a * Math.PI / 180, u = Ho(t), f = u.left, c = u.top, v = u.right, p = u.bottom, h = f - n[0], d = v - n[0], m = c - n[1], _ = p - n[1], x = {
    left: h,
    top: m,
    right: d,
    bottom: _
  };
  if (!Rv(r, x, 0))
    return [];
  var y = [];
  return [
    [h, 0],
    [d, 0],
    [m, 1],
    [_, 1]
  ].forEach(function(b) {
    var E = F(b, 2), R = E[0], M = E[1];
    r.forEach(function(D) {
      var w = cr([0, 0], D);
      y.push.apply(y, it([], F(EC(D, R, M).map(function(O) {
        return s + O - w;
      }).filter(function(O) {
        return !Rv(e, x, O);
      }).map(function(O) {
        return Ot(O * 180 / Math.PI, Br);
      })), !1));
    });
  }), y;
}
var DC = ["left", "right", "center"], MC = ["top", "bottom", "middle"], Ov = {
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
function TC(t, e) {
  var r = yf(t), n = {};
  for (var a in r)
    a in e && r[a] && (n[a] = e[a]);
  return n;
}
function Sf(t, e) {
  var r = TC(t, e), n = MC.filter(function(s) {
    return s in r;
  }), a = DC.filter(function(s) {
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
function RC(t, e, r) {
  var n = nr(t, [e.clientLeft, e.clientTop], r);
  return [
    e.left + n[0],
    e.top + n[1]
  ];
}
function OC(t) {
  var e = F(t, 2), r = e[0], n = e[1], a = n[0] - r[0], s = n[1] - r[1];
  Math.abs(a) < pr && (a = 0), Math.abs(s) < pr && (s = 0);
  var u = 0, f = 0, c = 0;
  return a ? s ? (u = -s / a, f = 1, c = u * r[0] - r[1]) : (f = 1, c = -r[1]) : (u = -1, c = r[0]), [u, f, c].map(function(v) {
    return Ot(v, pr);
  });
}
var yd = "snapRotationThreshold", Sd = "snapRotationDegrees", bd = "snapHorizontalThreshold", Cd = "snapVerticalThreshold";
function Yo(t, e, r, n, a, s, u) {
  var f;
  n === void 0 && (n = []), a === void 0 && (a = []);
  var c = t.props, v = ((f = t.state.snapThresholdInfo) === null || f === void 0 ? void 0 : f.multiples) || [1, 1], p = qv(u, c[bd], 5), h = qv(s, c[Cd], 5);
  return Ed(t.state.guidelines, e, r, n, a, p, h, v);
}
function Ed(t, e, r, n, a, s, u, f) {
  return {
    vertical: Pv(t, "vertical", e, u * f[0], n),
    horizontal: Pv(t, "horizontal", r, s * f[1], a)
  };
}
function IC(t, e, r) {
  var n = F(r, 2), a = n[0], s = n[1], u = F(e, 2), f = u[0], c = u[1], v = F(Et(r, e), 2), p = v[0], h = v[1], d = h > 0, m = p > 0;
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
  b.posInfos.filter(function(j) {
    var rt = j.pos;
    return m ? rt >= f : rt <= f;
  }), E.posInfos.filter(function(j) {
    var rt = j.pos;
    return d ? rt >= c : rt <= c;
  }), b.isSnap = b.posInfos.length > 0, E.isSnap = E.posInfos.length > 0;
  var R = ku(b), M = R.isSnap, D = R.guideline, w = ku(E), O = w.isSnap, I = w.guideline, P = O ? I.pos[1] : 0, B = M ? D.pos[0] : 0;
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
function Iv(t, e, r, n) {
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
function Pv(t, e, r, n, a) {
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
function PC(t, e, r, n, a) {
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
  }) : t.props.keepRatio ? s.push([-1, -1], [-1, 1], [1, -1], [1, 1], r) : (s.push.apply(s, it([], F(sC([
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
function wd(t, e) {
  var r = Q(t.offset), n = Q(e.offset);
  return t.isBound && e.isBound ? n - r : t.isBound ? -1 : e.isBound ? 1 : t.isSnap && e.isSnap ? n - r : t.isSnap ? -1 : e.isSnap || r < Br ? 1 : n < Br ? -1 : r - n;
}
function To(t, e) {
  return t.slice().sort(function(r, n) {
    var a = r.sign[e], s = n.sign[e], u = r.offset[e], f = n.offset[e];
    if (a) {
      if (!s)
        return -1;
    } else return 1;
    return wd({ isBound: r.isBound, isSnap: r.isSnap, offset: u }, { isBound: n.isBound, isSnap: n.isSnap, offset: f });
  })[0];
}
function AC(t, e, r) {
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
function Dd(t, e) {
  var r = Du([e[0][0], e[1][0]]), n = Du([e[0][1], e[1][1]]);
  return {
    vertical: r <= t[0],
    horizontal: n <= t[1]
  };
}
function bf(t, e) {
  var r = F(e, 2), n = r[0], a = r[1], s = a[0] - n[0], u = a[1] - n[1];
  Q(s) < Br && (s = 0), Q(u) < Br && (u = 0);
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
function Md(t, e, r, n) {
  return n === void 0 && (n = Br), t.every(function(a) {
    var s = bf(a, e), u = s <= 0;
    return u === r || Q(s) <= n;
  });
}
function Av(t, e, r, n, a) {
  return a === void 0 && (a = 0), n && e - a <= t || !n && t <= r + a ? {
    isBound: !0,
    offset: n ? e - t : r - t
  } : {
    isBound: !1,
    offset: 0
  };
}
function BC(t, e) {
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
  if (Md([
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
  var y = un(r, u, m, a), b = un(r, u, x, a), E = un(r, u, d, s), R = un(r, u, _, s), M = y.isBound && b.isBound, D = y.isBound || b.isBound, w = E.isBound && R.isBound, O = E.isBound || R.isBound, I = ci(y.offset, b.offset), P = ci(E.offset, R.offset), B = [0, 0], H = !1, W = !1;
  return Q(P) < Q(I) ? (B = [I, 0], H = D, W = M) : (B = [0, P], H = O, W = w), {
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
        return Av(M, p[0], h[0], n, a);
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
      return Av(b, p[1], h[1], n, a);
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
function Td(t, e, r) {
  return e.map(function(n) {
    var a = BC(t, n), s = a.isBound, u = a.offset, f = a.isVerticalBound, c = a.isHorizontalBound, v = n.multiple, p = Ie({
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
function zC(t, e, r) {
  var n, a = Cf(t, e, [0, 0], !1).map(function(d) {
    return z(z({}, d), { multiple: d.multiple.map(function(m) {
      return Q(m) * 2;
    }) });
  }), s = Td(t, a, r), u = To(s, 0), f = To(s, 1), c = 0, v = 0, p = u.isVerticalBound || f.isVerticalBound, h = u.isHorizontalBound || f.isHorizontalBound;
  return (p || h) && (n = F(aC({
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
function GC(t, e) {
  var r = [], n = t[0], a = t[1];
  return n && a ? r.push([[0, a * 2], t, [-n, a]], [[n * 2, 0], t, [n, -a]]) : n ? (r.push([[n * 2, 0], [n, 1], [n, -1]]), e && r.push([[0, -1], [n, -1], [-n, -1]], [[0, 1], [n, 1], [-n, 1]])) : a ? (r.push([[0, a * 2], [1, a], [-1, a]]), e && r.push([[-1, 0], [-1, a], [-1, -a]], [[1, 0], [1, a], [1, -a]])) : r.push([[-1, 0], [-1, -1], [-1, 1]], [[1, 0], [1, -1], [1, 1]], [[0, -1], [-1, -1], [1, -1]], [[0, 1], [-1, 1], [1, 1]]), r;
}
function Cf(t, e, r, n) {
  var a = t.state, s = a.allMatrix, u = a.is3d, f = zn(s, 100, 100, u ? 4 : 3), c = xr(f, [0, 0]);
  return GC(r, n).map(function(v) {
    var p = F(v, 3), h = p[0], d = p[1], m = p[2], _ = [
      xr(f, d),
      xr(f, m)
    ], x = OC(_), y = Dd(c, _), b = y.vertical, E = y.horizontal, R = bf(c, _) <= 0;
    return {
      multiple: h,
      centerSign: R,
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
function Bv(t, e, r, n) {
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
    return !Md(e, s, u);
  });
}
function FC(t) {
  var e = F(t, 2), r = e[0], n = e[1], a = n[0] - r[0], s = n[1] - r[1];
  if (!a)
    return Q(r[0]);
  if (!s)
    return Q(r[1]);
  var u = s / a;
  return Q((-u * r[0] + r[1]) / Math.sqrt(Math.pow(u, 2) + 1));
}
function LC(t) {
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
function WC(t, e, r, n, a) {
  var s = t.props.innerBounds, u = a * Math.PI / 180;
  if (!s)
    return [];
  var f = s.left, c = s.top, v = s.width, p = s.height, h = f - n[0], d = f + v - n[0], m = c - n[1], _ = c + p - n[1], x = [
    [h, m],
    [d, m],
    [h, _],
    [d, _]
  ], y = xr(r, [0, 0]);
  if (!Bv(r, x, y, 0))
    return [];
  var b = [], E = x.map(function(R) {
    return [
      ce(R),
      cr([0, 0], R)
    ];
  });
  return [
    [r[0], r[1]],
    [r[1], r[3]],
    [r[3], r[2]],
    [r[2], r[0]]
  ].forEach(function(R) {
    var M = cr([0, 0], LC(R)), D = FC(R);
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
      return !Bv(e, x, y, w);
    }).map(function(w) {
      return Ot(w * 180 / Math.PI, Br);
    })), !1));
  }), b;
}
function NC(t) {
  var e = t.props.innerBounds, r = ni();
  if (!e)
    return {
      boundMap: r,
      vertical: [],
      horizontal: []
    };
  var n = t.getRect(), a = n.pos1, s = n.pos2, u = n.pos3, f = n.pos4, c = [a, s, u, f], v = xr(c, [0, 0]), p = e.left, h = e.top, d = e.width, m = e.height, _ = [[p, h], [p, h + m]], x = [[p, h], [p + d, h]], y = [[p + d, h], [p + d, h + m]], b = [[p, h + m], [p + d, h + m]], E = Cf(t, c, [0, 0], !1), R = [], M = [];
  return E.forEach(function(D) {
    var w = D.line, O = D.lineConstants, I = Dd(v, w), P = I.horizontal, B = I.vertical, H = un(w, O, x, B, 1, !0), W = un(w, O, b, B, 1, !0), L = un(w, O, _, P, 1, !0), Y = un(w, O, y, P, 1, !0);
    H.isBound && !r.top && (R.push(h), r.top = !0), W.isBound && !r.bottom && (R.push(h + m), r.bottom = !0), L.isBound && !r.left && (M.push(p), r.left = !0), Y.isBound && !r.right && (M.push(p + d), r.right = !0);
  }), {
    boundMap: r,
    horizontal: R,
    vertical: M
  };
}
function kC(t, e, r, n) {
  var a = e[0] - t[0], s = e[1] - t[1];
  if (Q(a) < pr && (a = 0), Q(s) < pr && (s = 0), !a)
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
  var s = kC(t, e, r, n);
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
function Ro(t, e) {
  return t.isBound ? t.offset : e.isSnap ? ku(e).offset : 0;
}
function HC(t, e, r, n, a) {
  var s = F(e, 2), u = s[0], f = s[1], c = F(r, 2), v = c[0], p = c[1], h = F(n, 2), d = h[0], m = h[1], _ = F(a, 2), x = _[0], y = _[1], b = -x, E = -y;
  if (t && u && f) {
    b = 0, E = 0;
    var R = [];
    if (v && p ? R.push([0, y], [x, 0]) : v ? R.push([x, 0]) : p ? R.push([0, y]) : d && m ? R.push([0, y], [x, 0]) : d ? R.push([x, 0]) : m && R.push([0, y]), R.length) {
      R.sort(function(O, I) {
        return ce(Et([u, f], O)) - ce(Et([u, f], I));
      });
      var M = R[0];
      if (M[0] && Q(u) > pr)
        b = -M[0], E = f * Q(u + b) / Q(u) - f;
      else if (M[1] && Q(f) > pr) {
        var D = f;
        E = -M[1], b = u * Q(f + E) / Q(D) - u;
      }
      if (t && p && v)
        if (Q(b) > pr && Q(b) < Q(x)) {
          var w = Q(x) / Q(b);
          b *= w, E *= w;
        } else if (Q(E) > pr && Q(E) < Q(y)) {
          var w = Q(y) / Q(E);
          b *= w, E *= w;
        } else
          b = ci(-x, b), E = ci(-y, E);
    }
  } else
    b = u || v ? -x : 0, E = f || p ? -y : 0;
  return [b, E];
}
function YC(t, e, r, n, a, s) {
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
  var u = Df(s.absolutePoses, [e, r]), f = le(u), c = f.left, v = f.right, p = f.top, h = f.bottom, d = {
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
  }), x = Xo(t, a, _, d), y = x.vertical, b = x.horizontal, E = zC(t, u, s), R = E.vertical, M = E.horizontal, D = y.isSnap, w = b.isSnap, O = y.isBound || R.isBound, I = b.isBound || M.isBound, P = ci(y.offset, R.offset), B = ci(b.offset, M.offset), H = F(HC(n, [e, r], [O, I], [D, w], [P, B]), 2), W = H[0], L = H[1];
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
  } : Yo(t, r.vertical, r.horizontal, void 0, void 0, void 0, void 0), c = f.horizontal, v = f.vertical, p = Ro(s[0], c), h = Ro(u[0], v), d = Q(p), m = Q(h);
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
function zv(t, e, r, n, a, s, u) {
  u === void 0 && (u = [1, 1]);
  var f = xf(e, r, n), c = f.horizontal, v = f.vertical, p = Ed(t, r, n, [], [], a, s, u), h = p.horizontal, d = p.vertical, m = Ro(c[0], h), _ = Ro(v[0], d), x = Q(m), y = Q(_);
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
function XC(t, e, r, n) {
  var a = cr(t, e) / Math.PI * 180, s = r.vertical, u = s.isBound, f = s.isSnap, c = s.dist, v = r.horizontal, p = v.isBound, h = v.isSnap, d = v.dist, m = a % 180, _ = m < 3 || m > 177, x = m > 87 && m < 93;
  return d < c && (u || f && !x && (!n || !_)) ? "vertical" : p || h && !_ && (!n || !x) ? "horizontal" : "";
}
function qC(t, e, r, n, a, s) {
  return r.map(function(u) {
    var f = F(u, 2), c = f[0], v = f[1], p = xr(e, c), h = xr(e, v), d = n ? UC(t, p, h, a) : Xo(t, a, {
      vertical: [h[0]],
      horizontal: [h[1]]
    }), m = d.horizontal, _ = m.offset, x = m.isBound, y = m.isSnap, b = d.vertical, E = b.offset, R = b.isBound, M = b.isSnap, D = Et(v, c);
    if (!E && !_)
      return {
        isBound: R || x,
        isSnap: M || y,
        sign: D,
        offset: [0, 0]
      };
    var w = XC(p, h, d, n);
    if (!w)
      return {
        sign: D,
        isBound: !1,
        isSnap: !1,
        offset: [0, 0]
      };
    var O = w === "vertical", I = [0, 0];
    return !n && Q(v[0]) === 1 && Q(v[1]) === 1 && c[0] !== v[0] && c[1] !== v[1] ? I = Ie({
      datas: s,
      distX: -E,
      distY: -_
    }) : I = Hu(p, h, -(O ? E : _), O, s).offset, I = I.map(function(P, B) {
      return P * (D[B] ? 2 / D[B] : 0);
    }), {
      sign: D,
      isBound: O ? R : x,
      isSnap: O ? M : y,
      offset: I
    };
  });
}
function Gv(t, e) {
  return t.isBound ? t.offset : e.isSnap ? e.offset : 0;
}
function UC(t, e, r, n) {
  var a = CC(t, e, r), s = a.horizontal, u = a.vertical, f = n ? {
    horizontal: { isSnap: !1 },
    vertical: { isSnap: !1 }
  } : IC(t, e, r), c = f.horizontal, v = f.vertical, p = Gv(s, c), h = Gv(u, v), d = Q(p), m = Q(h);
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
function $C(t, e, r, n, a) {
  var s = [-r[0], -r[1]], u = t.state, f = u.width, c = u.height, v = t.props.bounds, p = 1 / 0, h = 1 / 0;
  if (v) {
    var d = [
      [r[0], -r[1]],
      [-r[0], r[1]]
    ], m = v.left, _ = m === void 0 ? -1 / 0 : m, x = v.top, y = x === void 0 ? -1 / 0 : x, b = v.right, E = b === void 0 ? 1 / 0 : b, R = v.bottom, M = R === void 0 ? 1 / 0 : R;
    d.forEach(function(D) {
      var w = D[0] !== s[0], O = D[1] !== s[1], I = xr(e, D), P = cr(n, I) * 360 / Math.PI;
      if (O) {
        var B = I.slice();
        (Q(P - 360) < 2 || Q(P - 180) < 2) && (B[1] = n[1]);
        var H = Hu(n, B, (n[1] < I[1] ? M : y) - I[1], !1, a), W = F(H.offset, 2), L = W[1], Y = H.isOutside;
        isNaN(L) || (h = c + (Y ? 1 : -1) * Q(L));
      }
      if (w) {
        var B = I.slice();
        (Q(P - 90) < 2 || Q(P - 270) < 2) && (B[0] = n[0]);
        var X = Hu(n, B, (n[0] < I[0] ? E : _) - I[0], !0, a), j = F(X.offset, 1), rt = j[0], V = X.isOutside;
        isNaN(rt) || (p = f + (V ? 1 : -1) * Q(rt));
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
    var p = ce(v), h = cr(v, [0, 0]);
    return [e.createElement("div", { className: bt("line", "horizontal", "dragline", "dashed"), key: "dragRotateGuideline", style: {
      width: "".concat(p, "px"),
      transform: "translate(".concat(c[0], "px, ").concat(c[1], "px) rotate(").concat(h, "rad) scaleY(").concat(s, ")")
    } })];
  },
  dragStart: function(t, e) {
    var r = e.datas, n = e.parentEvent, a = e.parentGesto, s = t.state, u = s.gestos, f = s.style;
    if (u.draggable)
      return !1;
    u.draggable = a || t.targetGesto, r.datas = {}, r.left = parseFloat(f.left || "") || 0, r.top = parseFloat(f.top || "") || 0, r.bottom = parseFloat(f.bottom || "") || 0, r.right = parseFloat(f.right || "") || 0, r.startValue = [0, 0], Bn(t, e), ko(t, e, "translate"), vE(t, r), r.prevDist = [0, 0], r.prevBeforeDist = [0, 0], r.isDrag = !1, r.deltaOffset = [0, 0];
    var c = At(t, e, z({ set: function(p) {
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
        var b = t.props, E = b.parentMoveable, R = v ? 0 : b.throttleDrag || p || 0, M = n ? 0 : b.throttleDragRotate || 0, D = 0, w = !1, O = !1, I = !1, P = !1;
        if (!n && M > 0 && (h || d)) {
          var B = b.startDragRotate || 0, H = Ot(B + cr([0, 0], [h, d]) * 180 / Math.PI, M) - B, W = d * Math.abs(Math.cos((H - 90) / 180 * Math.PI)), L = h * Math.abs(Math.cos(H / 180 * Math.PI)), Y = ce([L, W]);
          D = H * Math.PI / 180, h = Y * Math.cos(D), d = Y * Math.sin(D);
        }
        if (!s && !n && !a) {
          var X = F(YC(t, h, d, M, !f && c || u, r), 2), j = X[0], rt = X[1];
          w = j.isSnap, O = j.isBound, I = rt.isSnap, P = rt.isBound;
          var V = j.offset, et = rt.offset;
          h += V, d += et;
        }
        var nt = Ht(fd({ datas: r, distX: h, distY: d }), y), U = Ht(iC({ datas: r, distX: h, distY: d }), y);
        hv(U, Br), hv(nt, Br), M || (!w && !O && (U[0] = Ot(U[0], R), nt[0] = Ot(nt[0], R)), !I && !P && (U[1] = Ot(U[1], R), nt[1] = Ot(nt[1], R)));
        var ft = Et(nt, y), vt = Et(U, y), ut = Et(vt, _), lt = Et(ft, x);
        r.prevDist = vt, r.prevBeforeDist = ft, r.passDelta = ut, r.passDist = vt;
        var st = r.left + ft[0], dt = r.top + ft[1], _t = r.right - ft[0], Dt = r.bottom - ft[1], Ft = Wo(r, "translate(".concat(U[0], "px, ").concat(U[1], "px)"), "translate(".concat(vt[0], "px, ").concat(vt[1], "px)"));
        if (mf(e, Ft), t.state.dragInfo.dist = n ? [0, 0] : vt, !(!n && !E && ut.every(function(pt) {
          return !pt;
        }) && lt.some(function(pt) {
          return !pt;
        }))) {
          var ot = t.state, mt = ot.width, at = ot.height, J = At(t, e, z({ transform: Ft, dist: vt, delta: ut, translate: U, beforeDist: ft, beforeDelta: lt, beforeTranslate: nt, left: st, top: dt, right: _t, bottom: Dt, width: mt, height: at, isPinch: s }, Ar({
            transform: Ft
          }, e)));
          return !n && ht(t, "onDrag", J), J;
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
      var a = Zr(t, e, {});
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
      return ht(t, "onDragGroupEnd", Zr(t, e, {
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
function Rd(t, e) {
  var r = xr(t, e), n = [0, 0];
  return {
    fixedPosition: r,
    fixedDirection: e,
    fixedOffset: n
  };
}
function VC(t, e) {
  var r = t.allMatrix, n = t.is3d, a = t.width, s = t.height, u = n ? 4 : 3, f = [
    a / 2 * (1 + e[0]),
    s / 2 * (1 + e[1])
  ], c = nr(r, f, u), v = [0, 0];
  return {
    fixedPosition: c,
    fixedDirection: e,
    fixedOffset: v
  };
}
function Od(t, e) {
  var r = t.allMatrix, n = t.is3d, a = t.width, s = t.height, u = n ? 4 : 3, f = vC(e, a, s), c = nr(r, e, u), v = [
    a ? 0 : e[0],
    s ? 0 : e[1]
  ];
  return {
    fixedPosition: c,
    fixedDirection: f,
    fixedOffset: v
  };
}
var Fv = Rf("resizable"), Yu = {
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
  render: md("resizable"),
  dragControlCondition: Fv,
  viewClassName: Tf("resizable"),
  dragControlStart: function(t, e) {
    var r, n = e.inputEvent, a = e.isPinch, s = e.isGroup, u = e.parentDirection, f = e.parentGesto, c = e.datas, v = e.parentFixedDirection, p = e.parentEvent, h = Yd(u, a, n, c), d = t.state, m = d.target, _ = d.width, x = d.height, y = d.gestos;
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
    c.transformOrigin = kr(b) ? b.split(" ") : b, c.startOffsetMatrix = d.offsetMatrix, c.startTransformOrigin = d.transformOrigin, c.isWidth = (r = e?.parentIsWidth) !== null && r !== void 0 ? r : !h[0] && !h[1] || h[0] || !h[1];
    function E(P) {
      c.ratio = P && isFinite(P) ? P : 0;
    }
    c.startPositions = ve(t.state);
    function R(P) {
      var B = Rd(c.startPositions, P);
      c.fixedDirection = B.fixedDirection, c.fixedPosition = B.fixedPosition, c.fixedOffset = B.fixedOffset;
    }
    function M(P) {
      var B = Od(t.state, P);
      c.fixedDirection = B.fixedDirection, c.fixedPosition = B.fixedPosition, c.fixedOffset = B.fixedOffset;
    }
    function D(P) {
      c.minSize = [
        Vt("".concat(P[0]), 0) || 0,
        Vt("".concat(P[1]), 0) || 0
      ];
    }
    function w(P) {
      var B = [
        P[0] || 1 / 0,
        P[1] || 1 / 0
      ];
      (!si(B[0]) || isFinite(B[0])) && (B[0] = Vt("".concat(B[0]), 0) || 1 / 0), (!si(B[1]) || isFinite(B[1])) && (B[1] = Vt("".concat(B[1]), 0) || 1 / 0), c.maxSize = B;
    }
    E(_ / x), R(v || [-h[0], -h[1]]), c.setFixedDirection = R, c.setFixedPosition = M, c.setMin = D, c.setMax = w;
    var O = At(t, e, {
      direction: h,
      startRatio: c.ratio,
      set: function(P) {
        var B = F(P, 2), H = B[0], W = B[1];
        c.startWidth = H, c.startHeight = W;
      },
      setMin: D,
      setMax: w,
      setRatio: E,
      setFixedDirection: R,
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
    var r, n = e.datas, a = e.parentFlag, s = e.isPinch, u = e.parentKeepRatio, f = e.dragClient, c = e.parentDist, v = e.useSnap, p = e.isRequest, h = e.isGroup, d = e.parentEvent, m = e.resolveMatrix, _ = n.isResize, x = n.transformOrigin, y = n.startWidth, b = n.startHeight, E = n.prevWidth, R = n.prevHeight, M = n.minSize, D = n.maxSize, w = n.ratio, O = n.startOffsetWidth, I = n.startOffsetHeight, P = n.isWidth;
    if (!_)
      return;
    if (m) {
      var B = t.state.is3d, H = n.startOffsetMatrix, W = n.startTransformOrigin, L = B ? 4 : 3, Y = ji(Do(e)), X = Math.sqrt(Y.length);
      L !== X && (Y = be(Y, X, L));
      var j = pa(H, Y, W, L), rt = zn(j, O, I, L);
      n.startPositions = rt, n.nextTargetMatrix = Y, n.nextAllMatrix = j;
    }
    var V = An(t.props, "resizable"), et = V.resizeFormat, nt = V.throttleResize, U = nt === void 0 ? a ? 0 : 1 : nt, ft = V.parentMoveable, vt = V.keepRatioFinally, ut = n.direction, lt = ut, st = 0, dt = 0;
    !ut[0] && !ut[1] && (lt = [1, 1]);
    var _t = w && (u ?? V.keepRatio) || !1;
    function Dt() {
      var ir = n.fixedDirection, Qt = Kd(lt, _t, n, e);
      st = Qt.distWidth, dt = Qt.distHeight;
      var Ce = lt[0] - ir[0] || _t ? Math.max(O + st, Br) : O, zr = lt[1] - ir[1] || _t ? Math.max(I + dt, Br) : I;
      return _t && O && I && (P ? zr = Ce / w : Ce = zr * w), [Ce, zr];
    }
    var Ft = F(Dt(), 2), ot = Ft[0], mt = Ft[1];
    d || (n.setFixedDirection(n.fixedDirection), ht(t, "onBeforeResize", At(t, e, {
      startFixedDirection: n.startFixedDirection,
      startFixedPosition: n.startFixedPosition,
      setFixedDirection: function(ir) {
        var Qt;
        return n.setFixedDirection(ir), Qt = F(Dt(), 2), ot = Qt[0], mt = Qt[1], [ot, mt];
      },
      setFixedPosition: function(ir) {
        var Qt;
        return n.setFixedPosition(ir), Qt = F(Dt(), 2), ot = Qt[0], mt = Qt[1], [ot, mt];
      },
      boundingWidth: ot,
      boundingHeight: mt,
      setSize: function(ir) {
        var Qt;
        Qt = F(ir, 2), ot = Qt[0], mt = Qt[1];
      }
    }, !0)));
    var at = f;
    f || (!a && s ? at = gC(t, [0, 0]) : at = n.fixedPosition);
    var J = [0, 0];
    s || (J = lE(t, ot, mt, ut, at, !v && p, n)), c && (!c[0] && (J[0] = 0), !c[1] && (J[1] = 0));
    function pt() {
      var ir;
      et && (ir = F(et([ot, mt]), 2), ot = ir[0], mt = ir[1]), ot = Ot(ot, U), mt = Ot(mt, U);
    }
    if (_t) {
      lt[0] && lt[1] && J[0] && J[1] && (Q(J[0]) > Q(J[1]) ? J[1] = 0 : J[0] = 0);
      var St = !J[0] && !J[1];
      St && pt(), lt[0] && !lt[1] || J[0] && !J[1] || St && P ? (ot += J[0], mt = ot / w) : (!lt[0] && lt[1] || !J[0] && J[1] || St && !P) && (mt += J[1], ot = mt * w);
    } else
      ot += J[0], mt += J[1], ot = Math.max(0, ot), mt = Math.max(0, mt);
    r = F(Sp([ot, mt], M, D, _t ? w : !1), 2), ot = r[0], mt = r[1], pt(), _t && (h || vt) && (P ? mt = ot / w : ot = mt * w), st = ot - O, dt = mt - I;
    var Rt = [st - E, dt - R];
    n.prevWidth = st, n.prevHeight = dt;
    var xt = hC(t, ot, mt, at, x, n);
    if (!(!ft && Rt.every(function(ir) {
      return !ir;
    }) && xt.every(function(ir) {
      return !ir;
    }))) {
      var Ct = Ir.drag(t, va(e, t.state, xt, !!s, !1, "draggable")), Bt = Ct.transform, Yt = y + st, or = b + dt, sr = At(t, e, z({ width: Yt, height: or, offsetWidth: Math.round(ot), offsetHeight: Math.round(mt), startRatio: w, boundingWidth: ot, boundingHeight: mt, direction: ut, dist: [st, dt], delta: Rt, isPinch: !!s, drag: Ct }, qd({
        style: {
          width: "".concat(Yt, "px"),
          height: "".concat(or, "px")
        },
        transform: Bt
      }, Ct, e)));
      return !d && ht(t, "onResize", sr), sr;
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
      var a = Zr(t, e, {});
      return !n && ht(t, "onResizeEnd", a), a;
    }
  },
  dragGroupControlCondition: Fv,
  dragGroupControlStart: function(t, e) {
    var r = e.datas, n = this.dragControlStart(t, z(z({}, e), { isGroup: !0 }));
    if (!n)
      return !1;
    var a = ye(t, "resizable", e), s = r.startOffsetWidth, u = r.startOffsetHeight;
    function f() {
      var m = r.minSize;
      a.forEach(function(_) {
        var x = _.datas, y = x.minSize, b = x.startOffsetWidth, E = x.startOffsetHeight, R = s * (b ? y[0] / b : 0), M = u * (E ? y[1] / E : 0);
        m[0] = Math.max(m[0], R), m[1] = Math.max(m[1], M);
      });
    }
    function c() {
      var m = r.maxSize;
      a.forEach(function(_) {
        var x = _.datas, y = x.maxSize, b = x.startOffsetWidth, E = x.startOffsetHeight, R = s * (b ? y[0] / b : 0), M = u * (E ? y[1] / E : 0);
        m[0] = Math.min(m[0], R), m[1] = Math.min(m[1], M);
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
        ht(t, "onBeforeResizeGroup", At(t, e, z(z({}, m), { targets: n.targets }), !0));
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
          return z(z({}, _), { parentDist: null, parentScale: v, dragClient: Ht(p, [y, b]), parentKeepRatio: c });
        }), d = z({ targets: n.targets, events: h }, a);
        return ht(t, "onResizeGroup", d), d;
      }
    }
  },
  dragGroupControlEnd: function(t, e) {
    var r = e.isDrag, n = e.datas;
    if (n.isResize) {
      this.dragControlEnd(t, e);
      var a = Xe(t, this, "dragControlEnd", e), s = Zr(t, e, {
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
  var s = t.props.groupable, u = t.state, f = u.is3d ? 4 : 3, c = e.origin, v = nr(
    t.state.rootMatrix,
    // TO-DO #710
    Et([c[0], c[1]], s ? [0, 0] : [u.left, u.top]),
    f
  ), p = Ht([a.left, a.top], v);
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
    var h = fE(t, e, n, a + n);
    p = h.isSnap, v = a + h.dist;
  }
  p || (v = Ot(a + n, f));
  var d = v - a;
  return r.prevSnapDeg = d, [d - c, d, v];
}
function Id(t, e, r) {
  var n = F(e, 4), a = n[0], s = n[1], u = n[2], f = n[3];
  if (t === "none")
    return [];
  if (dr(t))
    return t.map(function(y) {
      return Id(y, [a, s, u, f], r)[0];
    });
  var c = F((t || "top").split("-"), 2), v = c[0], p = c[1], h = [a, s];
  v === "left" ? h = [u, a] : v === "right" ? h = [s, f] : v === "bottom" && (h = [f, u]);
  var d = [
    (h[0][0] + h[1][0]) / 2,
    (h[0][1] + h[1][1]) / 2
  ], m = kd(h, r);
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
  if (_r(r, bt("rotation-control")) || t.props.rotateAroundControls && _r(r, bt("around-control")) || _r(r, bt("control")) && _r(r, bt("rotatable")))
    return !0;
  var n = t.props.rotationTarget;
  return n ? Of(n, !0).some(function(a) {
    return a ? r === a || r.contains(a) : !1;
  }) : !1;
}
var KC = `.rotation {
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
`, ZC = {
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
  css: [KC],
  viewClassName: function(t) {
    return t.isDragging("rotatable") ? bt("view-rotation-dragging") : "";
  },
  render: function(t, e) {
    var r = An(t.props, "rotatable"), n = r.rotatable, a = r.rotationPosition, s = r.zoom, u = r.renderDirections, f = r.rotateAroundControls, c = r.resolveAblesWithRotatable, v = t.getState(), p = v.renderPoses, h = v.direction;
    if (!n)
      return null;
    var d = Id(a, p, h), m = [];
    if (d.forEach(function(b, E) {
      var R = F(b, 2), M = R[0], D = R[1];
      m.push(e.createElement(
        "div",
        { key: "rotation".concat(E), className: bt("rotation"), style: {
          // tslint:disable-next-line: max-line-length
          transform: "translate(-50%) translate(".concat(M[0], "px, ").concat(M[1], "px) rotate(").concat(D, "rad)")
        } },
        e.createElement("div", { className: bt("line rotation-line"), style: {
          transform: "scaleX(".concat(s, ")")
        } }),
        e.createElement("div", { className: bt("control rotation-control"), style: {
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
      })), m.push.apply(m, it([], F(dd(t, "rotatable", y, e)), !1));
    }
    return f && m.push.apply(m, it([], F(xd(t, e)), !1)), m;
  },
  dragControlCondition: Xu,
  dragControlStart: function(t, e) {
    var r, n, a = e.datas, s = e.clientX, u = e.clientY, f = e.parentRotate, c = e.parentFlag, v = e.isPinch, p = e.isRequest, h = t.state, d = h.target, m = h.left, _ = h.top, x = h.direction, y = h.beforeDirection, b = h.targetTransform, E = h.moveableClientRect, R = h.offsetMatrix, M = h.targetMatrix, D = h.allMatrix, w = h.width, O = h.height;
    if (!p && !d)
      return !1;
    var I = t.getRect();
    a.rect = I, a.transform = b, a.left = m, a.top = _;
    var P = function(lt) {
      var st = Od(t.state, lt);
      a.fixedDirection = st.fixedDirection, a.fixedOffset = st.fixedOffset, a.fixedPosition = st.fixedPosition, U && U.setFixedPosition(lt);
    }, B = function(lt) {
      var st = VC(t.state, lt);
      a.fixedDirection = st.fixedDirection, a.fixedOffset = st.fixedOffset, a.fixedPosition = st.fixedPosition, U && U.setFixedDirection(lt);
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
        var X = Y.getAttribute("data-direction") || "", j = eC[X];
        if (j) {
          a.isControl = !0, a.isAroundControl = _r(Y, bt("around-control")), a.controlDirection = j;
          var rt = Y.getAttribute("data-resolve");
          rt && (a.resolveAble = rt);
          var V = wE(h.rootMatrix, h.renderPoses, E);
          r = F(xr(V, j), 2), H = r[0], W = r[1];
        }
      }
      a.beforeInfo = { origin: I.beforeOrigin }, a.afterInfo = { origin: I.origin }, a.absoluteInfo = {
        origin: I.origin,
        startValue: I.rotation
      };
      var et = P;
      P = function(lt) {
        var st = h.is3d ? 4 : 3, dt = F(Ht($p(M, st), lt), 2), _t = dt[0], Dt = dt[1], Ft = Mr(R, On([_t, Dt], st)), ot = Mr(D, On([lt[0], lt[1]], st));
        et(lt);
        var mt = h.posDelta;
        a.beforeInfo.origin = Et(Ft, mt), a.afterInfo.origin = Et(ot, mt), a.absoluteInfo.origin = Et(ot, mt), gu(t, a.beforeInfo, H, W, E), gu(t, a.afterInfo, H, W, E), gu(t, a.absoluteInfo, H, W, E);
      }, B = function(lt) {
        var st = xr([
          [0, 0],
          [w, 0],
          [0, O],
          [w, O]
        ], lt);
        P(st);
      };
    }
    a.startClientX = H, a.startClientY = W, a.direction = x, a.beforeDirection = y, a.startValue = 0, a.datas = {}, ko(t, e, "rotate");
    var nt = !1, U = !1;
    if (a.isControl && a.resolveAble) {
      var ft = a.resolveAble;
      ft === "resizable" && (U = Yu.dragControlStart(t, z(z({}, new fi("resizable").dragStart([0, 0], e)), { parentPosition: a.controlPosition, parentFixedPosition: a.fixedPosition })));
    }
    U || (nt = Ir.dragStart(t, new fi().dragStart([0, 0], e))), P(DE(t));
    var vt = At(t, e, z(z({ set: function(lt) {
      a.startValue = lt * Math.PI / 180;
    }, setFixedDirection: B, setFixedPosition: P }, No(t, e)), { dragStart: nt, resizeStart: U })), ut = ht(t, "onRotateStart", vt);
    return a.isRotate = ut !== !1, h.snapRenderInfo = {
      request: e.isRequest
    }, a.isRotate ? vt : !1;
  },
  dragControl: function(t, e) {
    var r, n, a, s = e.datas, u = e.clientDistX, f = e.clientDistY, c = e.parentRotate, v = e.parentFlag, p = e.isPinch, h = e.groupDelta, d = e.resolveMatrix, m = s.beforeDirection, _ = s.beforeInfo, x = s.afterInfo, y = s.absoluteInfo, b = s.isRotate, E = s.startValue, R = s.rect, M = s.startClientX, D = s.startClientY;
    if (b) {
      Lo(t, e, "rotate");
      var w = nC(e), O = m * w, I = t.props.parentMoveable, P = 0, B, H, W = 0, L, Y, X = 0, j, rt, V = 180 / Math.PI * E, et = y.startValue, nt = !1, U = M + u, ft = D + f;
      if (!v && "parentDist" in e) {
        var vt = e.parentDist;
        B = vt, L = vt, j = vt;
      } else p || v ? (B = So(c, m, _), L = So(c, O, x), j = So(c, O, y)) : (B = mu(U, ft, m, _), L = mu(U, ft, O, x), j = mu(U, ft, O, y), nt = !0);
      if (H = V + B, Y = V + L, rt = et + j, ht(t, "onBeforeRotate", At(t, e, {
        beforeRotation: H,
        rotation: Y,
        absoluteRotation: rt,
        setRotation: function(at) {
          L = at - V, B = L, j = L;
        }
      }, !0)), r = F(_u(t, R, _, B, V, nt), 3), P = r[0], B = r[1], H = r[2], n = F(_u(t, R, x, L, V, nt), 3), W = n[0], L = n[1], Y = n[2], a = F(_u(t, R, y, j, et, nt), 3), X = a[0], j = a[1], rt = a[2], !(!X && !W && !P && !I && !d)) {
        var ut = Wo(s, "rotate(".concat(Y, "deg)"), "rotate(".concat(L, "deg)"));
        d && (s.fixedPosition = _f(t, s.targetAllTransform, s.fixedDirection, s.fixedOffset, s));
        var lt = dC(t, L, s), st = Et(Ht(h || [0, 0], lt), s.prevInverseDist || [0, 0]);
        s.prevInverseDist = lt, s.requestValue = null;
        var dt = cd(t, ut, st, p, e), _t = dt, Dt = Ye([U, ft], y.startAbsoluteOrigin) - y.startDist, Ft = void 0;
        if (s.resolveAble === "resizable") {
          var ot = Yu.dragControl(t, z(z({}, va(e, t.state, [e.deltaX, e.deltaY], !!p, !1, "resizable")), { resolveMatrix: !0, parentDistance: Dt }));
          ot && (Ft = ot, _t = qd(_t, ot, e));
        }
        var mt = At(t, e, z(z({ delta: W, dist: L, rotate: Y, rotation: Y, beforeDist: B, beforeDelta: P, beforeRotate: H, beforeRotation: H, absoluteDist: j, absoluteDelta: X, absoluteRotate: rt, absoluteRotation: rt, isPinch: !!p, resize: Ft }, dt), _t));
        return ht(t, "onRotate", mt), mt;
      }
    }
  },
  dragControlEnd: function(t, e) {
    var r = e.datas;
    if (r.isRotate) {
      r.isRotate = !1;
      var n = Zr(t, e, {});
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
      var m = h.state, _ = m.left, x = m.top, y = m.beforeOrigin, b = Ht(Et([_, x], [a, s]), Et(y, u));
      return d.datas.startGroupClient = b, d.datas.groupClient = b, z(z({}, d), { parentRotate: 0 });
    }), v = z(z({}, f), { targets: t.props.targets, events: c }), p = ht(t, "onRotateGroupStart", v);
    return r.isRotate = p !== !1, r.isRotate ? f : !1;
  },
  dragGroupControl: function(t, e) {
    var r = e.datas;
    if (r.isRotate) {
      Uo(t, "onBeforeRotate", function(v) {
        ht(t, "onBeforeRotateGroup", At(t, e, z(z({}, v), { targets: t.props.targets }), !0));
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
      var a = Xe(t, this, "dragControlEnd", e), s = Zr(t, e, {
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
function JC(t, e) {
  var r, n = t.direction, a = t.classNames, s = t.size, u = t.pos, f = t.zoom, c = t.key, v = n === "horizontal", p = v ? "Y" : "X";
  return e.createElement("div", {
    key: c,
    className: a.join(" "),
    style: (r = {}, r[v ? "width" : "height"] = "".concat(s), r.transform = "translate(".concat(u[0], ", ").concat(u[1], ") translate").concat(p, "(-50%) scale").concat(p, "(").concat(f, ")"), r)
  });
}
function Ef(t, e) {
  return JC(z(z({}, t), { classNames: it([
    bt("line", "guideline", t.direction)
  ], F(t.classNames), !1).filter(function(r) {
    return r;
  }), size: t.size || "".concat(t.sizeValue, "px"), pos: t.pos || t.posValue.map(function(r) {
    return "".concat(Ot(r, 0.1), "px");
  }) }), e);
}
function Lv(t, e, r, n, a, s, u, f) {
  var c = t.props.zoom;
  return r.map(function(v, p) {
    var h = v.type, d = v.pos, m = [0, 0];
    return m[u] = n, m[u ? 0 : 1] = -a + d, Ef({
      key: "".concat(e, "TargetGuideline").concat(p),
      classNames: [bt("target", "bold", h)],
      posValue: m,
      sizeValue: s,
      zoom: c,
      direction: e
    }, f);
  });
}
function Wv(t, e, r, n, a, s) {
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
      classNames: y ? [bt("bold"), b] : [bt("normal"), b],
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
  } : _, y = v.zoom, b = e === "horizontal" ? "X" : "Y", E = e === "vertical" ? "height" : "width", R = Math.abs(a), M = m ? parseFloat(R.toFixed(h)) : 0;
  return f.createElement(
    "div",
    { key: "".concat(e, "-").concat(r, "-guideline-").concat(n), className: bt("guideline-group", e), style: (c = {
      left: "".concat(s[0], "px"),
      top: "".concat(s[1], "px")
    }, c[E] = "".concat(R, "px"), c) },
    Ef({
      direction: e,
      classNames: [bt(r), u],
      size: "100%",
      posValue: [0, 0],
      sizeValue: R,
      zoom: y
    }, f),
    f.createElement("div", { className: bt("size-value", "gap"), style: {
      transform: "translate".concat(b, "(-50%) scale(").concat(y, ")")
    } }, M > 0 ? x(M, e) : "")
  );
}
function QC(t, e, r, n) {
  var a = t === "vertical" ? 0 : 1, s = t === "vertical" ? 1 : 0, u = a ? cn : vn, f = r[u.start], c = r[u.end];
  return Ud(e, function(v) {
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
        var E = m.pos, R = { element: y, rect: z(z({}, b), (_ = {}, _[u.end] = b[u.start], _)) }, M = { element: y, rect: z(z({}, b), (x = {}, x[u.start] = b[u.end], x)) }, D = [0, 0], w = [0, 0];
        D[a] = E[a], D[s] = E[s], w[a] = E[a], w[s] = E[s] + m.size, p.push({
          type: t,
          pos: D,
          size: 0,
          elementRect: R,
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
function jC(t, e, r, n, a) {
  var s = t.props.isDisplayInnerSnapDigit, u = [];
  return ["vertical", "horizontal"].forEach(function(f) {
    var c = e.filter(function(y) {
      return y.type === f;
    }), v = f === "vertical" ? 1 : 0, p = v ? 0 : 1, h = QC(f, c, n, s), d = v ? vn : cn, m = v ? cn : vn, _ = n[d.start], x = n[d.end];
    h.forEach(function(y) {
      var b = y.total, E = y.start, R = y.end, M = y.inner, D = r[p] + b[0].pos[p] - n[m.start], w = n;
      E.forEach(function(O) {
        var I = O.elementRect.rect, P = w[d.start] - I[d.end];
        if (P > 0) {
          var B = [0, 0];
          B[v] = r[v] + w[d.start] - _ - P, B[p] = D, u.push(Yi(t, f, "dashed", u.length, P, B, O.className, a));
        }
        w = I;
      }), w = n, R.forEach(function(O) {
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
function tE(t, e, r, n, a) {
  var s = [];
  return ["horizontal", "vertical"].forEach(function(u) {
    var f = e.filter(function(y) {
      return y.type === u;
    }).slice(0, 1), c = u === "vertical" ? 0 : 1, v = c ? 0 : 1, p = c ? vn : cn, h = c ? cn : vn, d = n[p.start], m = n[p.end], _ = n[h.start], x = n[h.end];
    f.forEach(function(y) {
      var b = y.gap, E = y.gapRects, R = Math.max.apply(Math, it([_], F(E.map(function(w) {
        var O = w.rect;
        return O[h.start];
      })), !1)), M = Math.min.apply(Math, it([x], F(E.map(function(w) {
        var O = w.rect;
        return O[h.end];
      })), !1)), D = (R + M) / 2;
      R === M || D === (_ + x) / 2 || E.forEach(function(w) {
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
  var e, r, n = t.state, a = n.containerClientRect, s = n.hasFixed, u = a.overflow, f = a.scrollHeight, c = a.scrollWidth, v = a.clientHeight, p = a.clientWidth, h = a.clientLeft, d = a.clientTop, m = t.props, _ = m.snapGap, x = _ === void 0 ? !0 : _, y = m.verticalGuidelines, b = m.horizontalGuidelines, E = m.snapThreshold, R = E === void 0 ? 5 : E, M = m.maxSnapElementGuidelineDistance, D = M === void 0 ? 1 / 0 : M, w = m.isDisplayGridGuidelines, O = le(ve(t.state)), I = O.top, P = O.left, B = O.bottom, H = O.right, W = { top: I, left: P, bottom: B, right: H, center: (P + H) / 2, middle: (I + B) / 2 }, L = iE(t), Y = it([], F(L), !1), X = ((r = (e = n.snapThresholdInfo) === null || e === void 0 ? void 0 : e.multiples) !== null && r !== void 0 ? r : [1, 1]).map(function(et) {
    return et * R;
  });
  x && Y.push.apply(Y, it([], F(rE(t, W, X)), !1));
  var j = z({}, n.snapOffset || {
    left: 0,
    top: 0,
    bottom: 0,
    right: 0
  });
  if (Y.push.apply(Y, it([], F(nE(t, u ? c : p, u ? f : v, h, d, j, w)), !1)), s) {
    var rt = a.left, V = a.top;
    j.left += rt, j.top += V, j.right += rt, j.bottom += V;
  }
  return Y.push.apply(Y, it([], F(Ad(b || !1, y || !1, u ? c : p, u ? f : v, h, d, j)), !1)), Y = Y.filter(function(et) {
    var nt = et.element, U = et.elementRect, ft = et.type;
    if (!nt || !U)
      return !0;
    var vt = U.rect;
    return Pd(W, vt, ft, D);
  }), Y;
}
function rE(t, e, r) {
  var n = t.props, a = n.maxSnapElementGuidelineDistance, s = a === void 0 ? 1 / 0 : a, u = n.maxSnapElementGapDistance, f = u === void 0 ? 1 / 0 : u, c = t.state.elementRects, v = [];
  return [
    ["vertical", cn, vn],
    ["horizontal", vn, cn]
  ].forEach(function(p) {
    var h = F(p, 3), d = h[0], m = h[1], _ = h[2], x = e[m.start], y = e[m.end], b = e[m.center], E = e[_.start], R = e[_.end], M = {
      left: r[0],
      top: r[1]
    };
    function D(I) {
      var P = I.rect, B = M[m.start];
      return P[m.end] < x + B ? x - P[m.end] : y - B < P[m.start] ? P[m.start] - y : -1;
    }
    var w = c.filter(function(I) {
      var P = I.rect;
      return P[_.start] > R || P[_.end] < E ? !1 : D(I) > 0;
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
      var P = F(I, 2), B = P[0], H = P[1], W = B.rect, L = H.rect, Y = W[m.start], X = W[m.end], j = L[m.start], rt = L[m.end], V = M[m.start], et = 0, nt = 0, U = !1, ft = !1, vt = !1;
      if (X <= x && y <= j) {
        if (ft = !0, et = (j - X - (y - x)) / 2, nt = X + et + (y - x) / 2, Q(nt - b) > V)
          return;
      } else if (X < j && rt < x + V) {
        if (U = !0, et = j - X, nt = rt + et, Q(nt - x) > V)
          return;
      } else if (X < j && y - V < Y) {
        if (vt = !0, et = j - X, nt = Y - et, Q(nt - y) > V)
          return;
      } else
        return;
      et && Pd(e, L, d, s) && (et > f || v.push({
        type: d,
        pos: d === "vertical" ? [nt, 0] : [0, nt],
        element: H.element,
        size: 0,
        className: H.className,
        isStart: U,
        isCenter: ft,
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
function eE(t, e, r, n) {
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
      var R = E.map(function(D, w) {
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
        var W = y[B], L = y[P], Y = bp(b.map(function(U) {
          return [
            U[P] - L,
            U[B],
            W - U[B] - U[P] + L
          ];
        })).filter(function(U) {
          return U;
        }).sort(function(U, ft) {
          return U - ft;
        }), X = Y[0], j = Y.map(function(U) {
          return Ot(U / X, 0.1) * I;
        }), rt = 1, V = Ot(W / X, 0.1);
        for (rt = 1; rt <= 10 && !j.every(function(U) {
          return U * rt % 1 === 0;
        }); ++rt)
          ;
        var et = (-D + 1) / 2, nt = bo(L - H, L - H + W, et, 1 - et);
        return {
          multiple: V * rt,
          dir: D,
          snapSize: I,
          snapOffset: Math.round(nt / I)
        };
      }), M = R.map(function(D) {
        return D.multiple || 1;
      });
      f.snapThresholdInfo.multiples = M, f.snapThresholdInfo.offset = R.map(function(D) {
        return D.snapOffset;
      }), R.forEach(function(D, w) {
        D.snapSize;
      });
    }
  } else
    f.snapThresholdInfo = null;
}
function nE(t, e, r, n, a, s, u) {
  n === void 0 && (n = 0), a === void 0 && (a = 0);
  var f = t.props, c = t.state, v = f.snapGridWidth, p = v === void 0 ? 0 : v, h = f.snapGridHeight, d = h === void 0 ? 0 : h, m = [], _ = s.left, x = s.top, y = [0, 0];
  eE(t, n, a, s);
  var b = c.snapThresholdInfo, E = p, R = d;
  if (b && (p *= b.multiples[0] || 1, d *= b.multiples[1] || 1, y = b.offset), d) {
    for (var M = function(w) {
      m.push({
        type: "horizontal",
        pos: [
          _,
          Ot(y[1] * R + w - a + x, 0.1)
        ],
        className: bt("grid-guideline"),
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
        className: bt("grid-guideline"),
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
function Pd(t, e, r, n) {
  return r === "horizontal" ? Q(t.right - e.left) <= n || Q(t.left - e.right) <= n || t.left <= e.right && e.left <= t.right : r === "vertical" ? Q(t.bottom - e.top) <= n || Q(t.top - e.bottom) <= n || t.top <= e.bottom && e.top <= t.bottom : !0;
}
function iE(t) {
  var e = t.state, r = t.props.elementGuidelines, n = r === void 0 ? [] : r;
  if (!n.length)
    return e.elementRects = [], [];
  var a = (e.elementRects || []).filter(function(d) {
    return !d.refresh;
  }), s = n.map(function(d) {
    return Se(d) && "element" in d ? z(z({}, d), { element: Re(d.element, !0) }) : {
      element: Re(d, !0)
    };
  }).filter(function(d) {
    return d.element;
  }), u = gb(a.map(function(d) {
    return d.element;
  }), s.map(function(d) {
    return d.element;
  })), f = u.maintained, c = u.added, v = [];
  f.forEach(function(d) {
    var m = F(d, 2), _ = m[0], x = m[1];
    v[x] = a[_];
  }), aE(t, c.map(function(d) {
    return s[d];
  })).map(function(d, m) {
    v[c[m]] = d;
  }), e.elementRects = v;
  var p = yf(t.props.elementSnapDirections), h = [];
  return v.forEach(function(d) {
    var m = d.element, _ = d.top, x = _ === void 0 ? p.top : _, y = d.left, b = y === void 0 ? p.left : y, E = d.right, R = E === void 0 ? p.right : E, M = d.bottom, D = M === void 0 ? p.bottom : M, w = d.center, O = w === void 0 ? p.center : w, I = d.middle, P = I === void 0 ? p.middle : I, B = d.className, H = d.rect, W = Sf({
      top: x,
      right: R,
      left: b,
      bottom: D,
      center: O,
      middle: P
    }, H), L = W.horizontal, Y = W.vertical, X = W.horizontalNames, j = W.verticalNames, rt = H.top, V = H.left, et = H.right - V, nt = H.bottom - rt, U = [et, nt];
    Y.forEach(function(ft, vt) {
      h.push({
        type: "vertical",
        element: m,
        pos: [
          Ot(ft, 0.1),
          rt
        ],
        size: nt,
        sizes: U,
        className: B,
        elementRect: d,
        elementDirection: Ov[j[vt]] || j[vt],
        direction: ""
      });
    }), L.forEach(function(ft, vt) {
      h.push({
        type: "horizontal",
        element: m,
        pos: [
          V,
          Ot(ft, 0.1)
        ],
        size: et,
        sizes: U,
        className: B,
        elementRect: d,
        elementDirection: Ov[X[vt]] || X[vt],
        direction: ""
      });
    });
  }), h;
}
function Nv(t, e) {
  return t ? t.map(function(r) {
    var n = Se(r) ? r : { pos: r }, a = n.pos;
    return si(a) ? n : z(z({}, n), { pos: Vt(a, e) });
  }) : [];
}
function Ad(t, e, r, n, a, s, u) {
  a === void 0 && (a = 0), s === void 0 && (s = 0), u === void 0 && (u = { left: 0, top: 0, right: 0, bottom: 0 });
  var f = [], c = u.left, v = u.top, p = u.bottom, h = u.right, d = r + h - c, m = n + p - v;
  return Nv(t, m).forEach(function(_) {
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
  }), Nv(e, d).forEach(function(_) {
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
function aE(t, e) {
  if (!e.length)
    return [];
  var r = t.props.groupable, n = t.state, a = n.containerClientRect, s = n.rootMatrix, u = n.is3d, f = n.offsetDelta, c = u ? 4 : 3, v = F(RC(s, a, c), 2), p = v[0], h = v[1], d = r ? 0 : f[0], m = r ? 0 : f[1];
  return e.map(function(_) {
    var x = _.element.getBoundingClientRect(), y = x.left - p - d, b = x.top - h - m, E = b + x.height, R = y + x.width, M = F(vi(s, [y, b], c), 2), D = M[0], w = M[1], O = F(vi(s, [R, E], c), 2), I = O[0], P = O[1];
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
    var u = Re(n, !0);
    if (u) {
      var f = Ki(u), c = Uv(e, [
        f.left - a.left,
        f.top - a.top
      ]), v = Uv(e, [
        f.right - a.right,
        f.bottom - a.bottom
      ]);
      s.left = Ot(c[0], 1e-5), s.top = Ot(c[1], 1e-5), s.right = Ot(v[0], 1e-5), s.bottom = Ot(v[1], 1e-5);
    }
  }
  return e.snapContainer = n, e.snapOffset = s, e.guidelines = qu(t), e.enableSnap = !0, !0;
}
function Bd(t, e, r, n, a, s) {
  var u = zn(t, e, r, s ? 4 : 3), f = xr(u, n);
  return Df(u, Et(a, f));
}
function kv(t) {
  return t ? t / Q(t) : 0;
}
function oE(t, e, r, n, a, s) {
  var u = s.fixedDirection, f = AC(r, u, n), c = Cf(t, e, r, n), v = it(it([], F(qC(t, e, f, n, a, s)), !1), F(Td(t, c, s)), !1), p = To(v, 0), h = To(v, 1);
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
function sE(t, e, r, n, a, s, u, f, c) {
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
function zd(t, e, r, n, a, s, u, f) {
  for (var c = ve(t.state), v = t.props.keepRatio, p = 0, h = 0, d = 0; d < 2; ++d) {
    var m = e(p, h), _ = oE(t, m, a, v, u, f), x = _.width, y = _.height, b = x.isBound, E = y.isBound, R = x.offset, M = y.offset;
    if (d === 1 && (b || (R = 0), E || (M = 0)), d === 0 && u && !b && !E)
      return [0, 0];
    if (v) {
      var D = Q(R) * (r ? 1 / r : 1), w = Q(M) * (n ? 1 / n : 1), O = b && E ? D < w : E || !b && D < w;
      O ? R = r * M / n : M = n * R / r;
    }
    p += R, h += M;
  }
  if (!v && a[0] && a[1]) {
    var I = $C(t, c, a, s, f), P = I.maxWidth, B = I.maxHeight, H = F(sE(t, e(p, h).map(function(Y) {
      return Y.map(function(X) {
        return Ot(X, Lu);
      });
    }), r + p, n + h, P, B, a, u, f), 2), R = H[0], M = H[1];
    p += R, h += M;
  }
  return [p, h];
}
function $i(t) {
  return t < 0 && (t = t % 360 + 360), t %= 360, t;
}
function uE(t, e) {
  e = $i(e);
  var r = Math.floor(t / 360), n = r * 360 + 360 - e, a = r * 360 + e;
  return Q(t - n) < Q(t - a) ? n : a;
}
function xu(t, e) {
  t = $i(t), e = $i(e);
  var r = $i(t - e);
  return Math.min(r, 360 - r);
}
function fE(t, e, r, n) {
  var a, s = t.props, u = (a = s[yd]) !== null && a !== void 0 ? a : 5, f = s[Sd];
  if (_i(t, "rotatable")) {
    var c = e.pos1, v = e.pos2, p = e.pos3, h = e.pos4, d = e.origin, m = r * Math.PI / 180, _ = [c, v, p, h].map(function(M) {
      return Et(M, d);
    }), x = _.map(function(M) {
      return ua(M, m);
    }), y = it(it([], F(wC(t, _, x, d, r)), !1), F(WC(t, _, x, d, r)), !1);
    y.sort(function(M, D) {
      return Q(M - r) - Q(D - r);
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
    }), R = E[0];
    if (xu(R, n) <= u)
      return {
        isSnap: !0,
        dist: r + uE(n, R) - n
      };
  }
  return {
    isSnap: !1,
    dist: r
  };
}
function lE(t, e, r, n, a, s, u) {
  if (!_i(t, "resizable"))
    return [0, 0];
  var f = u.fixedDirection, c = u.nextAllMatrix, v = t.state, p = v.allMatrix, h = v.is3d;
  return zd(t, function(d, m) {
    return Bd(c || p, e + d, r + m, f, a, h);
  }, e, r, n, a, s, u);
}
function cE(t, e, r, n, a) {
  if (!_i(t, "scalable"))
    return [0, 0];
  var s = a.startOffsetWidth, u = a.startOffsetHeight, f = a.fixedPosition, c = a.fixedDirection, v = a.is3d, p = zd(t, function(h, d) {
    return Bd(lC(a, Ht(e, [h / s, d / u])), s, u, c, f, v);
  }, s, u, r, f, n, a);
  return [p[0] / s, p[1] / u];
}
function vE(t, e) {
  e.absolutePoses = ve(t.state);
}
function Hv(t) {
  var e = [];
  return t.forEach(function(r) {
    r.guidelineInfos.forEach(function(n) {
      var a = n.guideline;
      Hr(e, function(s) {
        return s.guideline === a;
      }) || (a.direction = "", e.push({ guideline: a, posInfo: r }));
    });
  }), e.map(function(r) {
    var n = r.guideline, a = r.posInfo;
    return z(z({}, n), { direction: a.direction });
  });
}
function Yv(t, e, r, n, a, s) {
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
  var p = NC(t), h = p.boundMap, d = p.vertical, m = p.horizontal;
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
var pE = Rf("", ["resizable", "scalable"]), dE = {
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
    yd,
    Sd,
    bd,
    Cd,
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
    var d = Math.min(s[0], u[0], f[0], c[0]), m = Math.min(s[1], u[1], f[1], c[1]), _ = v.externalPoses || [], x = ve(t.state), y = [], b = [], E = [], R = [], M = [], D = le(x), w = D.width, O = D.height, I = D.top, P = D.left, B = D.bottom, H = D.right, W = { left: P, right: H, top: I, bottom: B, center: (P + H) / 2, middle: (I + B) / 2 }, L = _.length > 0, Y = L ? le(_) : {};
    if (!v.request) {
      if (v.direction && M.push(PC(t, x, v.direction, h, h)), v.snap) {
        var X = le(x);
        v.center && (X.middle = (X.top + X.bottom) / 2, X.center = (X.left + X.right) / 2), M.push(Iv(t, X, h, h));
      }
      L && (v.center && (Y.middle = (Y.top + Y.bottom) / 2, Y.center = (Y.left + Y.right) / 2), M.push(Iv(t, Y, h, h))), M.forEach(function(ut) {
        var lt = ut.vertical.posInfos, st = ut.horizontal.posInfos;
        y.push.apply(y, it([], F(lt.filter(function(dt) {
          var _t = dt.guidelineInfos;
          return _t.some(function(Dt) {
            var Ft = Dt.guideline;
            return !Ft.hide;
          });
        }).map(function(dt) {
          return {
            type: "snap",
            pos: dt.pos
          };
        })), !1)), b.push.apply(b, it([], F(st.filter(function(dt) {
          var _t = dt.guidelineInfos;
          return _t.some(function(Dt) {
            var Ft = Dt.guideline;
            return !Ft.hide;
          });
        }).map(function(dt) {
          return {
            type: "snap",
            pos: dt.pos
          };
        })), !1)), E.push.apply(E, it([], F(Hv(lt)), !1)), R.push.apply(R, it([], F(Hv(st)), !1));
      });
    }
    var j = Yv(t, [P, H], [I, B], y, b), rt = j.boundMap, V = j.innerBoundMap;
    L && Yv(t, [Y.left, Y.right], [Y.top, Y.bottom], y, b, v.externalBounds);
    var et = it(it([], F(E), !1), F(R), !1), nt = et.filter(function(ut) {
      return ut.element && !ut.gapRects;
    }), U = et.filter(function(ut) {
      return ut.gapRects;
    }).sort(function(ut, lt) {
      return ut.gap - lt.gap;
    });
    ht(t, "onSnap", {
      guidelines: et.filter(function(ut) {
        var lt = ut.element;
        return !lt;
      }),
      elements: nt,
      gaps: U
    }, !0);
    var ft = ai(t, "boundMap", rt, function(ut) {
      return JSON.stringify(ut);
    }, ni()), vt = ai(t, "innerBoundMap", V, function(ut) {
      return JSON.stringify(ut);
    }, ni());
    return (rt === ft || V === vt) && ht(t, "onBound", {
      bounds: rt,
      innerBounds: V
    }, !0), it(it(it(it(it(it([], F(jC(t, nt, [d, m], W, e)), !1), F(tE(t, U, [d, m], W, e)), !1), F(Wv(t, "horizontal", R, [a, n], W, e)), !1), F(Wv(t, "vertical", E, [a, n], W, e)), !1), F(Lv(t, "horizontal", b, d, n, w, 0, e)), !1), F(Lv(t, "vertical", y, m, a, O, 1, e)), !1);
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
    if (pE(t, e) || Xu(t, e))
      return !0;
    if (!e.isRequest && e.inputEvent)
      return _r(e.inputEvent.target, bt("snap-control"));
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
function hE(t, e) {
  return [
    t[0] * e[0],
    t[1] * e[1]
  ];
}
function bt() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return lS.apply(void 0, it([hf], F(t), !1));
}
function Gd(t) {
  t();
}
function gE(t) {
  return !t || t === "none" ? [1, 0, 0, 1, 0, 0] : Se(t) ? t : ji(t);
}
function Vi(t, e, r) {
  return Eo(e, In(r, e), t, In(r.map(function(n) {
    return -n;
  }), e));
}
function mE(t, e, r) {
  if (e === "%") {
    var n = wf(t.ownerSVGElement);
    return n[r ? "width" : "height"] / 100;
  }
  return 1;
}
function _E(t) {
  var e = xE(Mf(t, ":before"));
  return e.map(function(r, n) {
    var a = ia(r), s = a.value, u = a.unit;
    return s * mE(t, u, n === 0);
  });
}
function Oo(t) {
  return t ? t.split(" ") : ["0", "0"];
}
function xE(t) {
  return Oo(t.transformOrigin);
}
function Fd(t) {
  var e = Yr(t), r = e("transform");
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
    var R = Yr(v), M = v.tagName.toLowerCase(), D = Fd(v), w = R("willChange"), O = parseFloat(R("zoom")) || 1;
    if (x = R("position"), n && O !== 1) {
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
      v = B.host, m = !0, x = Yr(v)("position");
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
function yE(t, e) {
  var r, n = t.tagName.toLowerCase(), a = t.offsetLeft, s = t.offsetTop, u = Yr(t), f = na(a), c = !f, v, p;
  return !c && (n !== "svg" || t.ownerSVGElement) ? (v = ed ? _E(t) : Oo(u("transformOrigin")).map(function(h) {
    return parseFloat(h);
  }), p = v.slice(), c = !0, n === "svg" ? (a = 0, s = 0) : (r = F(CE(t, v, t === e && e.tagName.toLowerCase() === "g"), 4), a = r[0], s = r[1], v[0] = r[2], v[1] = r[3])) : (v = Oo(u("transformOrigin")).map(function(h) {
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
function Ld(t, e) {
  var r = Yr(t), n = Yr(pn(t)), a = n("position");
  if (!e && (!a || a === "static"))
    return [0, 0];
  var s = parseInt(n("marginLeft"), 10), u = parseInt(n("marginTop"), 10);
  return r("position") === "absolute" && ((r("top") !== "auto" || r("bottom") !== "auto") && (u = 0), (r("left") !== "auto" || r("right") !== "auto") && (s = 0)), [s, u];
}
function Uu(t) {
  t.forEach(function(e) {
    var r = e.matrix;
    r && (e.matrix = be(r, 3, 4));
  });
}
function SE(t) {
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
  return e === void 0 && (e = t.length > 9), "".concat(e ? "matrix3d" : "matrix", "(").concat(Vp(t, !e).join(","), ")");
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
function bE(t, e) {
  var r, n = wf(t), a = n.width, s = n.height, u = n.clientWidth, f = n.clientHeight, c = u / a, v = f / s, p = t.preserveAspectRatio.baseVal, h = p.align, d = p.meetOrSlice, m = [0, 0], _ = [c, v], x = [0, 0];
  if (h !== 1) {
    var y = (h - 2) % 3, b = Math.floor((h - 2) / 3);
    m[0] = a * y / 2, m[1] = s * b / 2;
    var E = d === 2 ? Math.max(v, c) : Math.min(c, v);
    _[0] = E, _[1] = E, x[0] = (u - a) / 2 * y, x[1] = (f - s) / 2 * b;
  }
  var R = cf(_, e);
  return r = F(x, 2), R[e * (e - 1)] = r[0], R[e * (e - 1) + 1] = r[1], Vi(R, e, m);
}
function CE(t, e, r) {
  var n = t.tagName.toLowerCase();
  if (!t.getBBox || !r && n === "g")
    return [0, 0, 0, 0];
  var a = Yr(t), s = a("transform-box") === "fill-box", u = t.getBBox(), f = wf(t.ownerSVGElement), c = u.x, v = u.y;
  n === "foreignobject" && !c && !v && (c = parseFloat(t.getAttribute("x")) || 0, v = parseFloat(t.getAttribute("y")) || 0);
  var p = c - f.x, h = v - f.y, d = s ? e[0] : e[0] - p, m = s ? e[1] : e[1] - h;
  return [p, h, d, m];
}
function nr(t, e, r) {
  return Mr(t, On(e, r), r);
}
function zn(t, e, r, n) {
  return [[0, 0], [e, 0], [0, r], [e, r]].map(function(a) {
    return nr(t, a, n);
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
function Xv(t, e, r, n) {
  var a = zn(t, e, r, n);
  return le(a);
}
function EE(t, e, r, n, a) {
  var s, u = t.target, f = t.origin, c = e.matrix, v = Nd(u), p = v.offsetWidth, h = v.offsetHeight, d = r.getBoundingClientRect(), m = [0, 0];
  r === pn(r) && (m = Ld(u, !0));
  for (var _ = u.getBoundingClientRect(), x = _.left - d.left + r.scrollLeft - (r.clientLeft || 0) + m[0], y = _.top - d.top + r.scrollTop - (r.clientTop || 0) + m[1], b = _.width, E = _.height, R = Eo(n, a, c), M = Xv(R, p, h, n), D = M.left, w = M.top, O = M.width, I = M.height, P = nr(R, f, n), B = Et(P, [D, w]), H = [
    x + B[0] * b / O,
    y + B[1] * E / I
  ], W = [0, 0], L = 0; ++L < 10; ) {
    var Y = Oe(a, n);
    s = F(Et(nr(Y, H, n), nr(Y, P, n)), 2), W[0] = s[0], W[1] = s[1];
    var X = Eo(n, a, In(W, n), c), j = Xv(X, p, h, n), rt = j.left, V = j.top, et = rt - x, nt = V - y;
    if (Q(et) < 2 && Q(nt) < 2)
      break;
    H[0] -= et, H[1] -= nt;
  }
  return W.map(function(U) {
    return Math.round(U);
  });
}
function wE(t, e, r) {
  var n = t.length === 16, a = n ? 4 : 3, s = e.map(function(c) {
    return nr(t, c, a);
  }), u = r.left, f = r.top;
  return s.map(function(c) {
    return [c[0] + u, c[1] + f];
  });
}
function ce(t) {
  return Math.sqrt(t[0] * t[0] + t[1] * t[1]);
}
function Wd(t, e) {
  return ce([
    e[0] - t[0],
    e[1] - t[1]
  ]);
}
function Xi(t, e, r, n) {
  r === void 0 && (r = 1), n === void 0 && (n = cr(t, e));
  var a = Wd(t, e);
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
  return Se(r) ? z(z({}, t), r) : t;
}
function Nd(t) {
  var e = t && !na(t.offsetWidth), r = 0, n = 0, a = 0, s = 0, u = 0, f = 0, c = 0, v = 0, p = 0, h = 0, d = 0, m = 0, _ = 1 / 0, x = 1 / 0, y = 1 / 0, b = 1 / 0, E = 0, R = 0, M = !1;
  if (t)
    if (!e && t.ownerSVGElement) {
      var D = t.getBBox();
      M = !0, r = D.width, n = D.height, u = r, f = n, c = r, v = n, a = r, s = n;
    } else {
      var w = Yr(t), O = t.style, I = w("boxSizing") === "border-box", P = parseFloat(w("borderLeftWidth")) || 0, B = parseFloat(w("borderRightWidth")) || 0, H = parseFloat(w("borderTopWidth")) || 0, W = parseFloat(w("borderBottomWidth")) || 0, L = parseFloat(w("paddingLeft")) || 0, Y = parseFloat(w("paddingRight")) || 0, X = parseFloat(w("paddingTop")) || 0, j = parseFloat(w("paddingBottom")) || 0, rt = L + Y, V = X + j, et = P + B, nt = H + W, U = rt + et, ft = V + nt, vt = w("position"), ut = 0, lt = 0;
      if ("clientLeft" in t) {
        var st = null;
        if (vt === "absolute") {
          var dt = ra(t, pn(t));
          st = dt.offsetParent;
        } else
          st = t.parentElement;
        if (st) {
          var _t = Yr(st);
          ut = parseFloat(_t("width")), lt = parseFloat(_t("height"));
        }
      }
      p = Math.max(rt, Vt(w("minWidth"), ut) || 0), h = Math.max(V, Vt(w("minHeight"), lt) || 0), _ = Vt(w("maxWidth"), ut), x = Vt(w("maxHeight"), lt), isNaN(_) && (_ = 1 / 0), isNaN(x) && (x = 1 / 0), E = Vt(O.width, 0) || 0, R = Vt(O.height, 0) || 0, u = parseFloat(w("width")) || 0, f = parseFloat(w("height")) || 0, c = Q(u - E) < 1 ? wu(p, E || u, _) : u, v = Q(f - R) < 1 ? wu(h, R || f, x) : f, r = c, n = v, a = c, s = v, I ? (y = _, b = x, d = p, m = h, c = r - U, v = n - ft) : (y = _ + U, b = x + ft, d = p + U, m = h + ft, r = c + U, n = v + ft), a = c + rt, s = v + V;
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
function kd(t, e) {
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
function Hd(t, e) {
  var r = t === pn(t) || t === nf(t), n = {
    clientLeft: t.clientLeft,
    clientTop: t.clientTop,
    clientWidth: t.clientWidth,
    clientHeight: t.clientHeight,
    scrollWidth: t.scrollWidth,
    scrollHeight: t.scrollHeight,
    overflow: !1
  };
  return r && (n.clientHeight = Math.max(e.height, n.clientHeight), n.scrollHeight = Math.max(e.height, n.scrollHeight)), n.overflow = Yr(t)("overflow") !== "visible", z(z({}, e), n);
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
  return r && n ? Hd(r, p) : p;
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
  return t && e ? Hd(t, f) : f;
}
function DE(t) {
  var e = t.props, r = e.groupable, n = e.svgOrigin, a = t.getState(), s = a.offsetWidth, u = a.offsetHeight, f = a.svg, c = a.transformOrigin;
  return !r && f && n ? If(n, s, u) : c;
}
function Yd(t, e, r, n) {
  var a;
  if (t)
    a = t;
  else if (e)
    a = [0, 0];
  else {
    var s = r.target;
    a = Xd(s, n);
  }
  return a;
}
function Xd(t, e) {
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
    Ht(e, t[0]),
    Ht(e, t[1]),
    Ht(e, t[2]),
    Ht(e, t[3])
  ];
}
function ve(t) {
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
function qd(t, e, r) {
  var n = e.afterTransform || e.transform;
  return z(z({}, Ar(z(z(z({}, t.style), e.style), { transform: n }), r)), { afterTransform: n, transform: t.transform });
}
function At(t, e, r, n) {
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
function Zr(t, e, r) {
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
function qv() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  for (var r = t.length - 1, n = 0; n < r; ++n) {
    var a = t[n];
    if (!na(a))
      return a;
  }
  return t[r];
}
function Ud(t, e) {
  var r = [], n = [];
  return t.forEach(function(a, s) {
    var u = e(a, s, t), f = n.indexOf(u), c = r[f] || [];
    f === -1 && (n.push(u), r.push(c)), c.push(a);
  }), r;
}
function ME(t, e) {
  var r = [], n = {};
  return t.forEach(function(a, s) {
    var u = e(a, s, t), f = n[u];
    f || (f = [], n[u] = f, r.push(f)), f.push(a);
  }), r;
}
function $d(t) {
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
  return Mr(Oe(t, r), On(e, r), r);
}
function TE(t, e) {
  var r, n = t.is3d, a = t.rootMatrix, s = n ? 4 : 3;
  return r = F(vi(a, [e.distX, e.distY], s), 2), e.distX = r[0], e.distY = r[1], e;
}
function ae(t, e, r, n) {
  if (!r[0] && !r[1])
    return e;
  var a = nr(t, [kv(r[0] || 1), 0], n), s = nr(t, [0, kv(r[1] || 1)], n), u = nr(t, [
    r[0] / ce(a),
    r[1] / ce(s)
  ], n);
  return Ht(e, u);
}
function _e(t, e, r) {
  return r ? "".concat(t / e * 100, "%") : "".concat(t, "px");
}
function Po(t) {
  return Q(t) <= Br ? 0 : t;
}
function Tf(t) {
  return function(e) {
    if (!e.isDragging(t))
      return "";
    var r = mC(e, t), n = r.deg;
    return n ? bt("view-control-rotation".concat(n)) : "";
  };
}
function Rf(t, e) {
  return e === void 0 && (e = [t]), function(r, n) {
    if (n.isRequest)
      return e.some(function(s) {
        return n.requestAble === s;
      }) ? n.parentDirection : !1;
    var a = n.inputEvent.target;
    return _r(a, bt("direction")) && (!t || _r(a, bt(t)));
  };
}
function RE(t, e, r) {
  var n, a = ui(t, {
    "x%": function(D) {
      return D / 100 * e.offsetWidth;
    },
    "y%": function(D) {
      return D / 100 * e.offsetHeight;
    }
  }), s = t.slice(0, r < 0 ? void 0 : r), u = t.slice(0, r < 0 ? void 0 : r + 1), f = t[r] || "", c = r < 0 ? [] : t.slice(r), v = r < 0 ? [] : t.slice(r + 1), p = a.slice(0, r < 0 ? void 0 : r), h = a.slice(0, r < 0 ? void 0 : r + 1), d = (n = a[r]) !== null && n !== void 0 ? n : ui([""])[0], m = r < 0 ? [] : a.slice(r), _ = r < 0 ? [] : a.slice(r + 1), x = d ? [d] : [], y = ti(p), b = ti(h), E = ti(m), R = ti(_), M = Kt(y, E, 4);
  return {
    transforms: t,
    beforeFunctionMatrix: y,
    beforeFunctionMatrix2: b,
    targetFunctionMatrix: ti(x),
    afterFunctionMatrix: E,
    afterFunctionMatrix2: R,
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
function OE(t) {
  return !t || !Se(t) || hi(t) ? !1 : dr(t) || "length" in t;
}
function Re(t, e) {
  return t ? hi(t) ? t : kr(t) ? e ? document.querySelector(t) : t : tf(t) ? t() : Dp(t) ? t : "current" in t ? t.current : t : null;
}
function Of(t, e) {
  if (!t)
    return [];
  var r = OE(t) ? [].slice.call(t) : [t];
  return r.reduce(function(n, a) {
    return kr(a) && e ? it(it([], F(n), !1), F([].slice.call(document.querySelectorAll(a))), !1) : (dr(a) ? n.push(Of(a, e)) : n.push(Re(a, e)), n);
  }, []);
}
function IE(t, e, r) {
  var n = cr(t, e) / Math.PI * 180;
  return n = r >= 0 ? n : 180 - n, n = n >= 0 ? n : 360 + n, n;
}
function Uv(t, e) {
  var r = t.rootMatrix, n = t.is3d, a = n ? 4 : 3, s = Oe(r, a);
  return n || (s = be(s, 3, 4)), s[12] = 0, s[13] = 0, s[14] = 0, db(s, e);
}
function Vd(t, e, r, n, a) {
  var s = F(t, 2), u = s[0], f = s[1], c = 0, v = 0;
  if (a && u && f) {
    var p = cr([0, 0], e), h = cr([0, 0], n), d = ce(e), m = Math.cos(p - h) * d;
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
function Kd(t, e, r, n) {
  var a, s = r.ratio, u = r.startOffsetWidth, f = r.startOffsetHeight, c = 0, v = 0, p = n.distX, h = n.distY, d = n.pinchScale, m = n.parentDistance, _ = n.parentDist, x = n.parentScale, y = r.fixedDirection, b = [0, 1].map(function(O) {
    return Q(t[O] - y[O]);
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
    var R = u * b[0], M = f * b[1], D = ce([R, M]);
    c = m / D * R * E[0], v = m / D * M * E[1];
  } else {
    var w = Ie({ datas: r, distX: p, distY: h });
    w = E.map(function(O, I) {
      return w[I] * O;
    }), a = F(Vd([u, f], w, s, t, e), 2), c = a[0], v = a[1];
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
    Vt(a, e) || 0,
    Vt(s, r) || 0
  ];
}
function PE(t, e, r) {
  var n = t.map(function(s) {
    return Et(s, e);
  }), a = n.map(function(s) {
    return ua(s, r);
  });
  return {
    prev: n,
    next: a,
    result: a.map(function(s) {
      return Ht(s, e);
    })
  };
}
function Zd(t, e) {
  return t.length === e.length && t.every(function(r, n) {
    var a = e[n], s = dr(r), u = dr(a);
    return s && u ? Zd(r, a) : !s && !u ? r === a : !1;
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
function Q(t) {
  return Math.abs(t);
}
function Su(t, e) {
  return MS(t).map(function(r) {
    return e(r);
  });
}
function Jd(t) {
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
var AE = ca("pinchable", {
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
    }), d = At(t, e, {});
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
      var v = a * (1 - 1 / n), p = At(t, e, {});
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
      var f = "onPinch".concat(s ? "Group" : "", "End"), c = Zr(t, e, { isDrag: n });
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
}), $v = Rf("scalable"), BE = {
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
  render: md("scalable"),
  dragControlCondition: $v,
  viewClassName: Tf("scalable"),
  dragControlStart: function(t, e) {
    var r = e.datas, n = e.isPinch, a = e.inputEvent, s = e.parentDirection, u = Yd(s, n, a, r), f = t.state, c = f.width, v = f.height, p = f.targetTransform, h = f.target, d = f.pos1, m = f.pos2, _ = f.pos4;
    if (!u || !h)
      return !1;
    n || Bn(t, e), r.datas = {}, r.transform = p, r.prevDist = [1, 1], r.direction = u, r.startOffsetWidth = c, r.startOffsetHeight = v, r.startValue = [1, 1];
    var x = !u[0] && !u[1] || u[0] || !u[1];
    ko(t, e, "scale"), r.isWidth = x;
    function y(w) {
      r.ratio = w && isFinite(w) ? w : 0;
    }
    r.startPositions = ve(t.state);
    function b(w) {
      var O = Rd(r.startPositions, w);
      r.fixedDirection = O.fixedDirection, r.fixedPosition = O.fixedPosition, r.fixedOffset = O.fixedOffset;
    }
    r.setFixedDirection = b, y(Ye(d, m) / Ye(m, _)), b([-u[0], -u[1]]);
    var E = function(w) {
      r.minScaleSize = w;
    }, R = function(w) {
      r.maxScaleSize = w;
    };
    E([-1 / 0, -1 / 0]), R([1 / 0, 1 / 0]);
    var M = At(t, e, z(z({ direction: u, set: function(w) {
      r.startValue = w;
    }, setRatio: y, setFixedDirection: b, setMinScaleSize: E, setMaxScaleSize: R }, No(t, e)), { dragStart: Ir.dragStart(t, new fi().dragStart([0, 0], e)) })), D = ht(t, "onScaleStart", M);
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
    var E = t.props, R = E.throttleScale, M = E.parentMoveable, D = h;
    !h[0] && !h[1] && (D = [1, 1]);
    var w = b && (n ?? E.keepRatio) || !1, O = t.state, I = [
      x[0],
      x[1]
    ];
    function P() {
      var ot = Kd(D, w, r, e), mt = ot.distWidth, at = ot.distHeight, J = d ? (d + mt) / d : 1, pt = m ? (m + at) / m : 1;
      x[0] || (I[0] = mt / d), x[1] || (I[1] = at / m);
      var St = (D[0] || w ? J : 1) * I[0], Rt = (D[1] || w ? pt : 1) * I[1];
      return St === 0 && (St = Pr(p[0]) * fo), Rt === 0 && (Rt = Pr(p[1]) * fo), [St, Rt];
    }
    var B = P();
    if (!s && t.props.groupable) {
      var H = O.snapRenderInfo || {}, W = H.direction;
      dr(W) && (W[0] || W[1]) && (O.snapRenderInfo = { direction: h, request: e.isRequest });
    }
    ht(t, "onBeforeScale", At(t, e, {
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
    ], Y = u, X = [0, 0], j = Pr(L[0] * L[1]), rt = !u && !a && s;
    if (rt || v ? Y = _f(t, r.targetAllTransform, [0, 0], [0, 0], r) : u || (Y = r.fixedPosition), s || (X = cE(t, L, h, !c && f, r)), w) {
      D[0] && D[1] && X[0] && X[1] && (Math.abs(X[0] * d) > Math.abs(X[1] * m) ? X[1] = 0 : X[0] = 0);
      var V = !X[0] && !X[1];
      if (V && (y ? L[0] = Ot(L[0] * I[0], R) / I[0] : L[1] = Ot(L[1] * I[1], R) / I[1]), D[0] && !D[1] || X[0] && !X[1] || V && y) {
        L[0] += X[0];
        var et = d * L[0] * I[0] / b;
        L[1] = Pr(j * L[0]) * Q(et / m / I[1]);
      } else if (!D[0] && D[1] || !X[0] && X[1] || V && !y) {
        L[1] += X[1];
        var nt = m * L[1] * I[1] * b;
        L[0] = Pr(j * L[1]) * Q(nt / d / I[0]);
      }
    } else
      L[0] += X[0], L[1] += X[1], X[0] || (L[0] = Ot(L[0] * I[0], R) / I[0]), X[1] || (L[1] = Ot(L[1] * I[1], R) / I[1]);
    L[0] === 0 && (L[0] = Pr(p[0]) * fo), L[1] === 0 && (L[1] = Pr(p[1]) * fo), B = hE(L, [I[0], I[1]]);
    var U = [
      d,
      m
    ], ft = [
      d * B[0],
      m * B[1]
    ];
    ft = Sp(ft, r.minScaleSize, r.maxScaleSize, w ? b : !1), B = Su(2, function(ot) {
      return U[ot] ? ft[ot] / U[ot] : ft[ot];
    }), L = Su(2, function(ot) {
      return B[ot] / I[ot];
    });
    var vt = Su(2, function(ot) {
      return p[ot] ? L[ot] / p[ot] : L[ot];
    }), ut = "scale(".concat(L.join(", "), ")"), lt = "scale(".concat(B.join(", "), ")"), st = Wo(r, lt, ut), dt = !x[0] || !x[1], _t = cC(t, dt ? lt : ut, r.fixedDirection, Y, r.fixedOffset, r, dt), Dt = rt ? _t : Et(_t, r.prevInverseDist || [0, 0]);
    if (r.prevDist = L, r.prevInverseDist = _t, B[0] === p[0] && B[1] === p[1] && Dt.every(function(ot) {
      return !ot;
    }) && !M && !rt)
      return !1;
    var Ft = At(t, e, z({ offsetWidth: d, offsetHeight: m, direction: h, scale: B, dist: L, delta: vt, isPinch: !!s }, cd(t, st, Dt, s, e)));
    return ht(t, "onScale", Ft), Ft;
  },
  dragControlEnd: function(t, e) {
    var r = e.datas;
    if (!r.isScale)
      return !1;
    r.isScale = !1;
    var n = Zr(t, e, {});
    return ht(t, "onScaleEnd", n), n;
  },
  dragGroupControlCondition: $v,
  dragGroupControlStart: function(t, e) {
    var r = e.datas, n = this.dragControlStart(t, e);
    if (!n)
      return !1;
    var a = ye(t, "resizable", e);
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
        ht(t, "onBeforeScaleGroup", At(t, e, z(z({}, p), { targets: t.props.targets }), !0));
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
            dragClient: Ht(f, [m, _])
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
      var a = Xe(t, this, "dragControlEnd", e), s = Zr(t, e, {
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
function Vv(t, e, r) {
  var n = cr(t, e), a = cr(t, r), s = a - n;
  return s >= 0 ? s : s + 2 * Math.PI;
}
function zE(t, e) {
  var r = Vv(t[0], t[1], t[2]), n = Vv(e[0], e[1], e[2]), a = Math.PI;
  return !(r >= a && n <= a || r <= a && n >= a);
}
var GE = {
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
  viewClassName: Tf("warpable"),
  render: function(t, e) {
    var r = t.props, n = r.resizable, a = r.scalable, s = r.warpable, u = r.zoom;
    if (n || a || !s)
      return [];
    var f = t.state, c = f.pos1, v = f.pos2, p = f.pos3, h = f.pos4, d = nn(c, v), m = nn(v, c), _ = nn(c, p), x = nn(p, c), y = nn(p, h), b = nn(h, p), E = nn(v, h), R = nn(h, v);
    return it([
      e.createElement("div", { className: bt("line"), key: "middeLine1", style: Xi(d, y, u) }),
      e.createElement("div", { className: bt("line"), key: "middeLine2", style: Xi(m, b, u) }),
      e.createElement("div", { className: bt("line"), key: "middeLine3", style: Xi(_, E, u) }),
      e.createElement("div", { className: bt("line"), key: "middeLine4", style: Xi(x, R, u) })
    ], F(_d(t, "warpable", e)), !1);
  },
  dragControlCondition: function(t, e) {
    if (e.isRequest)
      return !1;
    var r = e.inputEvent.target;
    return _r(r, bt("direction")) && _r(r, bt("warpable"));
  },
  dragControlStart: function(t, e) {
    var r = e.datas, n = e.inputEvent, a = t.props.target, s = n.target, u = Xd(s, r);
    if (!u || !a)
      return !1;
    var f = t.state, c = f.transformOrigin, v = f.is3d, p = f.targetTransform, h = f.targetMatrix, d = f.width, m = f.height, _ = f.left, x = f.top;
    r.datas = {}, r.targetTransform = p, r.warpTargetMatrix = v ? h : be(h, 3, 4), r.targetInverseMatrix = Up(Oe(r.warpTargetMatrix, 4), 3, 4), r.direction = u, r.left = _, r.top = x, r.poses = [
      [0, 0],
      [d, 0],
      [0, m],
      [d, m]
    ].map(function(E) {
      return Et(E, c);
    }), r.nextPoses = r.poses.map(function(E) {
      var R = F(E, 2), M = R[0], D = R[1];
      return Mr(r.warpTargetMatrix, [M, D, 0, 1], 4);
    }), r.startValue = tr(4), r.prevMatrix = tr(4), r.absolutePoses = ve(f), r.posIndexes = ld(u), Bn(t, e), ko(t, e, "matrix3d"), f.snapRenderInfo = {
      request: e.isRequest,
      direction: u
    };
    var y = At(t, e, z({ set: function(E) {
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
      E[P] = Ht(E[P], b);
    }), !rC.every(function(P) {
      return zE(P.map(function(B) {
        return p[B];
      }), P.map(function(B) {
        return E[B];
      }));
    }))
      return !1;
    var R = vf(p[0], p[2], p[1], p[3], E[0], E[2], E[1], E[3]);
    if (!R.length)
      return !1;
    var M = Kt(u, R, 4), D = ud(r, M, !0), w = Kt(Oe(f, 4), D, 4);
    r.prevMatrix = D;
    var O = Kt(v, D, 4), I = Wo(r, "matrix3d(".concat(O.join(", "), ")"), "matrix3d(".concat(D.join(", "), ")"));
    return mf(e, I), ht(t, "onWarp", At(t, e, z({ delta: w, matrix: O, dist: D, multiply: Kt, transform: I }, Ar({
      transform: I
    }, e)))), !0;
  },
  dragControlEnd: function(t, e) {
    var r = e.datas, n = e.isDrag;
    return r.isWarp ? (r.isWarp = !1, ht(t, "onWarpEnd", Zr(t, e, {})), n) : !1;
  }
}, FE = /* @__PURE__ */ bt("area-pieces"), go = /* @__PURE__ */ bt("area-piece"), Qd = /* @__PURE__ */ bt("avoid"), LE = bt("view-dragging");
function bu(t) {
  var e = t.areaElement;
  if (e) {
    var r = t.state, n = r.width, a = r.height;
    wp(e, Qd), e.style.cssText += "left: 0px; top: 0px; width: ".concat(n, "px; height: ").concat(a, "px");
  }
}
function Kv(t) {
  return t.createElement(
    "div",
    { key: "area_pieces", className: FE },
    t.createElement("div", { className: go }),
    t.createElement("div", { className: go }),
    t.createElement("div", { className: go }),
    t.createElement("div", { className: go })
  );
}
var jd = {
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
    var r = t.props, n = r.target, a = r.dragArea, s = r.groupable, u = r.passDragArea, f = t.getState(), c = f.width, v = f.height, p = f.renderPoses, h = u ? bt("area", "pass") : bt("area");
    if (s)
      return [
        e.createElement("div", { key: "area", ref: He(t, "areaElement"), className: h }),
        Kv(e)
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
      Kv(e)
    ];
  },
  dragStart: function(t, e) {
    var r = e.datas, n = e.clientX, a = e.clientY, s = e.inputEvent;
    if (!s)
      return !1;
    r.isDragArea = !1;
    var u = t.areaElement, f = t.state, c = f.moveableClientRect, v = f.renderPoses, p = f.rootMatrix, h = f.is3d, d = c.left, m = c.top, _ = le(v), x = _.left, y = _.top, b = _.width, E = _.height, R = h ? 4 : 3, M = F(vi(p, [n - d, a - m], R), 2), D = M[0], w = M[1];
    D -= x, w -= y;
    var O = [
      { left: x, top: y, width: b, height: w - 10 },
      { left: x, top: y, width: D - 10, height: E },
      { left: x, top: y + w + 10, width: b, height: E - w - 10 },
      { left: x + D + 10, top: y, width: b - D - 10, height: E }
    ], I = [].slice.call(u.nextElementSibling.children);
    O.forEach(function(P, B) {
      I[B].style.cssText = "left: ".concat(P.left, "px;top: ").concat(P.top, "px; width: ").concat(P.width, "px; height: ").concat(P.height, "px;");
    }), Ep(u, Qd), f.disableNativeEvent = !0;
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
    e.disableNativeEvent && yp(function() {
      e.disableNativeEvent = !1;
    });
  }
}, WE = ca("origin", {
  props: ["origin", "svgOrigin"],
  render: function(t, e) {
    var r = t.props, n = r.zoom, a = r.svgOrigin, s = r.groupable, u = t.getState(), f = u.beforeOrigin, c = u.rotation, v = u.svg, p = u.allMatrix, h = u.is3d, d = u.left, m = u.top, _ = u.offsetWidth, x = u.offsetHeight, y;
    if (!s && v && a) {
      var b = F(If(a, _, x), 2), E = b[0], R = b[1], M = h ? 4 : 3, D = nr(p, [E, R], M);
      y = Io(c, n, Et(D, [d, m]));
    } else
      y = Io(c, n, f);
    return [
      e.createElement("div", { className: bt("control", "origin"), style: y, key: "beforeOrigin" })
    ];
  }
});
function NE(t) {
  var e = t.scrollContainer;
  return [
    e.scrollLeft,
    e.scrollTop
  ];
}
var kE = {
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
    var r = t.props, n = r.scrollContainer, a = n === void 0 ? t.getContainer() : n, s = r.scrollOptions, u = new yb(), f = Re(a, !0);
    e.datas.dragScroll = u, t.state.dragScroll = u;
    var c = e.isControl ? "controlGesto" : "targetGesto", v = e.targets;
    u.on("scroll", function(p) {
      var h = p.container, d = p.direction, m = At(t, e, {
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
      var n = t.props, a = n.scrollContainer, s = a === void 0 ? t.getContainer() : a, u = n.scrollThreshold, f = u === void 0 ? 0 : u, c = n.scrollThrottleTime, v = c === void 0 ? 0 : c, p = n.getScrollPosition, h = p === void 0 ? NE : p, d = n.scrollOptions;
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
}, th = {
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
}, HE = ca("padding", {
  props: ["padding"],
  render: function(t, e) {
    var r = t.props;
    if (r.dragArea)
      return [];
    var n = Jd(r.padding || {}), a = n.left, s = n.top, u = n.right, f = n.bottom, c = t.getState(), v = c.renderPoses, p = c.pos1, h = c.pos2, d = c.pos3, m = c.pos4, _ = [p, h, d, m], x = [];
    return a > 0 && x.push([0, 2]), s > 0 && x.push([0, 1]), u > 0 && x.push([1, 3]), f > 0 && x.push([2, 3]), x.map(function(y, b) {
      var E = F(y, 2), R = E[0], M = E[1], D = _[R], w = _[M], O = v[R], I = v[M], P = vf([0, 0], [100, 0], [0, 100], [100, 100], D, w, O, I);
      if (P.length)
        return e.createElement("div", { key: "padding".concat(b), className: bt("padding"), style: {
          transform: qo(P, !0)
        } });
    });
  }
}), Zv = ["nw", "ne", "se", "sw"];
function mo(t, e) {
  var r = t[0] + t[1], n = r > e ? e / r : 1;
  return t[0] *= n, t[1] = e - t[1] * n, t;
}
var YE = [1, 2, 5, 6], XE = [0, 3, 4, 7], Mn = [1, -1, -1, 1], Tn = [1, 1, -1, -1];
function Pf(t, e, r, n, a, s, u, f) {
  a === void 0 && (a = 0), s === void 0 && (s = 0), u === void 0 && (u = r), f === void 0 && (f = n);
  var c = [], v = !1, p = t.filter(function(d) {
    return !d.virtual;
  }), h = p.map(function(d) {
    var m = d.horizontal, _ = d.vertical, x = d.pos;
    if (_ && !v && (v = !0, c.push("/")), v) {
      var y = Math.max(0, _ === 1 ? x[1] - s : f - x[1]);
      return c.push(_e(y, n, e)), y;
    } else {
      var y = Math.max(0, m === 1 ? x[0] - a : u - x[0]);
      return c.push(_e(y, r, e)), y;
    }
  });
  return {
    radiusPoses: p,
    styles: c,
    raws: h
  };
}
function rh(t) {
  for (var e = [0, 0], r = [0, 0], n = t.length, a = 0; a < n; ++a) {
    var s = t[a];
    s.sub && (s.horizontal && (e[1] === 0 && (e[0] = a), e[1] = a - e[0] + 1, r[0] = a + 1), s.vertical && (r[1] === 0 && (r[0] = a), r[1] = a - r[0] + 1));
  }
  return {
    horizontalRange: e,
    verticalRange: r
  };
}
function eh(t, e, r, n, a, s, u) {
  var f, c, v, p;
  s === void 0 && (s = [0, 0]), u === void 0 && (u = !1);
  var h = t.indexOf("/"), d = (h > -1 ? t.slice(0, h) : t).length, m = t.slice(0, d), _ = t.slice(d + 1), x = m.length, y = _.length, b = y > 0, E = F(m, 4), R = E[0], M = R === void 0 ? "0px" : R, D = E[1], w = D === void 0 ? M : D, O = E[2], I = O === void 0 ? M : O, P = E[3], B = P === void 0 ? w : P, H = F(_, 4), W = H[0], L = W === void 0 ? M : W, Y = H[1], X = Y === void 0 ? b ? L : w : Y, j = H[2], rt = j === void 0 ? b ? L : I : j, V = H[3], et = V === void 0 ? b ? X : B : V, nt = [M, w, I, B].map(function(st) {
    return Vt(st, e);
  }), U = [L, X, rt, et].map(function(st) {
    return Vt(st, r);
  }), ft = nt.slice(), vt = U.slice();
  f = F(mo([ft[0], ft[1]], e), 2), ft[0] = f[0], ft[1] = f[1], c = F(mo([ft[3], ft[2]], e), 2), ft[3] = c[0], ft[2] = c[1], v = F(mo([vt[0], vt[3]], r), 2), vt[0] = v[0], vt[3] = v[1], p = F(mo([vt[1], vt[2]], r), 2), vt[1] = p[0], vt[2] = p[1];
  var ut = u ? ft : ft.slice(0, Math.max(s[0], x)), lt = u ? vt : vt.slice(0, Math.max(s[1], y));
  return it(it([], F(ut.map(function(st, dt) {
    var _t = Zv[dt];
    return {
      virtual: dt >= x,
      horizontal: Mn[dt],
      vertical: 0,
      pos: [n + st, a + (Tn[dt] === -1 ? r : 0)],
      sub: !0,
      raw: nt[dt],
      direction: _t
    };
  })), !1), F(lt.map(function(st, dt) {
    var _t = Zv[dt];
    return {
      virtual: dt >= y,
      horizontal: 0,
      vertical: Tn[dt],
      pos: [n + (Mn[dt] === -1 ? e : 0), a + st],
      sub: !0,
      raw: U[dt],
      direction: _t
    };
  })), !1);
}
function qE(t, e, r, n, a) {
  a === void 0 && (a = e.length);
  var s = rh(t.slice(n)), u = s.horizontalRange, f = s.verticalRange, c = r - n, v = 0;
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
function UE(t, e, r, n, a, s, u, f, c, v, p) {
  v === void 0 && (v = 0), p === void 0 && (p = 0);
  var h = rh(t.slice(r)), d = h.horizontalRange, m = h.verticalRange;
  if (n > -1)
    for (var _ = Mn[n] === 1 ? s - v : f - s, x = d[1]; x <= n; ++x) {
      var y = Tn[x] === 1 ? p : c, b = 0;
      if (n === x ? b = s : x === 0 ? b = v + _ : Mn[x] === -1 && (b = f - (e[r][0] - v)), t.splice(r + x, 0, {
        horizontal: Mn[x],
        vertical: 0,
        pos: [b, y]
      }), e.splice(r + x, 0, [b, y]), x === 0)
        break;
    }
  else if (a > -1) {
    var E = Tn[a] === 1 ? u - p : c - u;
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
    for (var M = m[0], x = m[1]; x <= a; ++x) {
      var b = Mn[x] === 1 ? v : f, y = 0;
      if (a === x ? y = u : x === 0 ? y = p + E : Tn[x] === 1 ? y = e[r + M][1] : Tn[x] === -1 && (y = c - (e[r + M][1] - p)), t.push({
        horizontal: 0,
        vertical: Tn[x],
        pos: [b, y]
      }), e.push([b, y]), x === 0)
        break;
    }
  }
}
function $E(t, e) {
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
var VE = [
  [0, -1, "n"],
  [1, 0, "e"]
], KE = [
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
      return "".concat(_e(w[0], s, n), " ").concat(_e(w[1], u, n));
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
      return _e(w, O % 2 ? s : u, n);
    });
    if (r.length > 8) {
      var b = F(Et(r[4], r[0]), 2), E = b[0], R = b[1];
      y.push.apply(y, it(["round"], F(Pf(v.slice(8).map(function(w, O) {
        return z(z({}, w), { pos: r[O] });
      }), n, E, R, _, d, m, x).styles), !1));
    }
    return y;
  } else if (h || c === "ellipse") {
    var M = r[0], D = _e(Q(r[1][1] - M[1]), h ? Math.sqrt((s * s + u * u) / 2) : u, n), y = h ? [D] : [_e(Q(r[2][0] - M[0]), s, n), D];
    return y.push("at", _e(M[0], s, n), _e(M[1], u, n)), y;
  }
}
function Ao(t, e, r, n) {
  var a = [n, (n + e) / 2, e], s = [t, (t + r) / 2, r];
  return KE.map(function(u) {
    var f = F(u, 3), c = f[0], v = f[1], p = f[2], h = a[c + 1], d = s[v + 1];
    return {
      vertical: Q(v),
      horizontal: Q(c),
      direction: p,
      pos: [h, d]
    };
  });
}
function nh(t) {
  var e = [1 / 0, -1 / 0], r = [1 / 0, -1 / 0];
  return t.forEach(function(n) {
    var a = n.pos;
    e[0] = Math.min(e[0], a[0]), e[1] = Math.max(e[1], a[0]), r[0] = Math.min(r[0], a[1]), r[1] = Math.max(r[1], a[1]);
  }), [
    Q(e[1] - e[0]),
    Q(r[1] - r[0])
  ];
}
function Jv(t, e, r, n, a) {
  var s, u, f, c, v, p, h, d, m;
  if (t) {
    var _ = a;
    if (!_) {
      var x = Yr(t), y = x("clipPath");
      _ = y !== "none" ? y : x("clip");
    }
    if (!((!_ || _ === "none" || _ === "auto") && (_ = n, !_))) {
      var b = xp(_), E = b.prefix, R = E === void 0 ? _ : E, M = b.value, D = M === void 0 ? "" : M, w = R === "circle", O = " ";
      if (R === "polygon") {
        var I = Rn(D || "0% 0%, 100% 0%, 100% 100%, 0% 100%");
        O = ",";
        var P = I.map(function(Yt) {
          var or = F(Yt.split(" "), 2), sr = or[0], ir = or[1];
          return {
            vertical: 1,
            horizontal: 1,
            pos: [
              Vt(sr, e),
              Vt(ir, r)
            ]
          };
        }), B = Pn(P.map(function(Yt) {
          return Yt.pos;
        }));
        return {
          type: R,
          clipText: _,
          poses: P,
          splitter: O,
          left: B.minX,
          right: B.maxX,
          top: B.minY,
          bottom: B.maxY
        };
      } else if (w || R === "ellipse") {
        var H = "", W = "", L = 0, Y = 0, I = ln(D);
        if (w) {
          var X = "";
          s = F(I, 4), u = s[0], X = u === void 0 ? "50%" : u, f = s[2], H = f === void 0 ? "50%" : f, c = s[3], W = c === void 0 ? "50%" : c, L = Vt(X, Math.sqrt((e * e + r * r) / 2)), Y = L;
        } else {
          var j = "", rt = "";
          v = F(I, 5), p = v[0], j = p === void 0 ? "50%" : p, h = v[1], rt = h === void 0 ? "50%" : h, d = v[3], H = d === void 0 ? "50%" : d, m = v[4], W = m === void 0 ? "50%" : m, L = Vt(j, e), Y = Vt(rt, r);
        }
        var V = [
          Vt(H, e),
          Vt(W, r)
        ], P = it([
          {
            vertical: 1,
            horizontal: 1,
            pos: V,
            direction: "nesw"
          }
        ], F(VE.slice(0, w ? 1 : 2).map(function(sr) {
          return {
            vertical: Q(sr[1]),
            horizontal: sr[0],
            direction: sr[2],
            sub: !0,
            pos: [
              V[0] + sr[0] * L,
              V[1] + sr[1] * Y
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
          splitter: O
        };
      } else if (R === "inset") {
        var I = ln(D || "0 0 0 0"), et = I.indexOf("round"), nt = (et > -1 ? I.slice(0, et) : I).length, U = I.slice(nt + 1), ft = F(I.slice(0, nt), 4), vt = ft[0], ut = ft[1], lt = ut === void 0 ? vt : ut, st = ft[2], dt = st === void 0 ? vt : st, _t = ft[3], Dt = _t === void 0 ? lt : _t, Ft = F([vt, dt].map(function(sr) {
          return Vt(sr, r);
        }), 2), ot = Ft[0], mt = Ft[1], at = F([Dt, lt].map(function(sr) {
          return Vt(sr, e);
        }), 2), J = at[0], pt = at[1], St = e - pt, Rt = r - mt, xt = eh(U, St - J, Rt - ot, J, ot), P = it(it([], F(Ao(ot, St, Rt, J)), !1), F(xt), !1);
        return {
          type: "inset",
          clipText: _,
          poses: P,
          top: ot,
          left: J,
          right: St,
          bottom: Rt,
          radius: U,
          splitter: O
        };
      } else if (R === "rect") {
        var I = Rn(D || "0px, ".concat(e, "px, ").concat(r, "px, 0px"));
        O = ",";
        var Ct = F(I.map(function(Ce) {
          var zr = ia(Ce).value;
          return zr;
        }), 4), Bt = Ct[0], pt = Ct[1], mt = Ct[2], J = Ct[3], P = Ao(Bt, pt, mt, J);
        return {
          type: "rect",
          clipText: _,
          poses: P,
          top: Bt,
          right: pt,
          bottom: mt,
          left: J,
          values: I,
          splitter: O
        };
      }
    }
  }
}
function ZE(t, e, r, n, a) {
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
    var _ = F(nh(t), 2), x = _[0], y = _[1], b = x && y ? x / y : 0;
    if (b && a) {
      var E = (e + 4) % 8, R = t[E].pos, M = [0, 0];
      u.indexOf("w") > -1 ? M[0] = -1 : u.indexOf("e") > -1 && (M[0] = 1), u.indexOf("n") > -1 ? M[1] = -1 : u.indexOf("s") > -1 && (M[1] = 1);
      var D = Vd([x, y], r, b, M, !0), w = x + D[0], O = y + D[1], I = R[1], P = R[1], B = R[0], H = R[0];
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
    t.forEach(function(X, j) {
      var rt = X.direction, V = X.horizontal, et = X.vertical;
      !rt || rt.indexOf(L) === -1 || (c[j] = [
        Y || !V ? 0 : r[0],
        !Y || !et ? 0 : r[1]
      ]);
    });
  }) : c[e] = r;
  return c;
}
function JE(t, e) {
  var r = F(sd(t, e), 2), n = r[0], a = r[1], s = e.datas, u = s.clipPath, f = s.clipIndex, c = u, v = c.type, p = c.poses, h = c.splitter, d = p.map(function(E) {
    return E.pos;
  });
  if (v === "polygon")
    d.splice(f, 0, [n, a]);
  else if (v === "inset") {
    var m = YE.indexOf(f), _ = XE.indexOf(f), x = p.length;
    if (UE(p, d, 8, m, _, n, a, d[4][0], d[4][1], d[0][0], d[0][1]), x === p.length)
      return;
  } else
    return;
  var y = Af(t, u, d), b = "".concat(v, "(").concat(y.join(h), ")");
  ht(t, "onClip", At(t, e, z({ clipEventType: "added", clipType: v, poses: d, clipStyles: y, clipStyle: b, distX: 0, distY: 0 }, Ar({
    clipPath: b
  }, e))));
}
function QE(t, e) {
  var r = e.datas, n = r.clipPath, a = r.clipIndex, s = n, u = s.type, f = s.poses, c = s.splitter, v = f.map(function(m) {
    return m.pos;
  }), p = v.length;
  if (u === "polygon")
    f.splice(a, 1), v.splice(a, 1);
  else if (u === "inset") {
    if (a < 8 || (qE(f, v, a, 8, p), p === f.length))
      return;
  } else
    return;
  var h = Af(t, n, v), d = "".concat(u, "(").concat(h.join(c), ")");
  ht(t, "onClip", At(t, e, z({ clipEventType: "removed", clipType: u, poses: v, clipStyles: h, clipStyle: d, distX: 0, distY: 0 }, Ar({
    clipPath: d
  }, e))));
}
var jE = {
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
    var r = t.props, n = r.customClipPath, a = r.defaultClipPath, s = r.clipArea, u = r.zoom, f = r.groupable, c = t.getState(), v = c.target, p = c.width, h = c.height, d = c.allMatrix, m = c.is3d, _ = c.left, x = c.top, y = c.pos1, b = c.pos2, E = c.pos3, R = c.pos4, M = c.clipPathState, D = c.snapBoundInfos, w = c.rotation;
    if (!v || f)
      return [];
    var O = Jv(v, p, h, a || "inset", M || n);
    if (!O)
      return [];
    var I = m ? 4 : 3, P = O.type, B = O.poses, H = B.map(function(pt) {
      var St = nr(d, pt.pos, I);
      return [
        St[0] - _,
        St[1] - x
      ];
    }), W = [], L = [], Y = P === "rect", X = P === "inset", j = P === "polygon";
    if (Y || X || j) {
      var rt = X ? H.slice(0, 8) : H;
      L = rt.map(function(pt, St) {
        var Rt = St === 0 ? rt[rt.length - 1] : rt[St - 1], xt = cr(Rt, pt), Ct = Wd(Rt, pt);
        return e.createElement("div", { key: "clipLine".concat(St), className: bt("line", "clip-line", "snap-control"), "data-clip-index": St, style: {
          width: "".concat(Ct, "px"),
          transform: "translate(".concat(Rt[0], "px, ").concat(Rt[1], "px) rotate(").concat(xt, "rad) scaleY(").concat(u, ")")
        } });
      });
    }
    if (W = H.map(function(pt, St) {
      return e.createElement("div", { key: "clipControl".concat(St), className: bt("control", "clip-control", "snap-control"), "data-clip-index": St, style: {
        transform: "translate(".concat(pt[0], "px, ").concat(pt[1], "px) rotate(").concat(w, "rad) scale(").concat(u, ")")
      } });
    }), X && W.push.apply(W, it([], F(H.slice(8).map(function(pt, St) {
      return e.createElement("div", { key: "clipRadiusControl".concat(St), className: bt("control", "clip-control", "clip-radius", "snap-control"), "data-clip-index": 8 + St, style: {
        transform: "translate(".concat(pt[0], "px, ").concat(pt[1], "px) rotate(").concat(w, "rad) scale(").concat(u, ")")
      } });
    })), !1)), P === "circle" || P === "ellipse") {
      var V = O.left, et = O.top, nt = O.radiusX, U = O.radiusY, ft = F(Et(nr(d, [V, et], I), nr(d, [0, 0], I)), 2), vt = ft[0], ut = ft[1], lt = "none";
      if (!s) {
        for (var st = Math.max(10, nt / 5, U / 5), dt = [], _t = 0; _t <= st; ++_t) {
          var Dt = Math.PI * 2 / st * _t;
          dt.push([
            nt + (nt - u) * Math.cos(Dt),
            U + (U - u) * Math.sin(Dt)
          ]);
        }
        dt.push([nt, -2]), dt.push([-2, -2]), dt.push([-2, U * 2 + 2]), dt.push([nt * 2 + 2, U * 2 + 2]), dt.push([nt * 2 + 2, -2]), dt.push([nt, -2]), lt = "polygon(".concat(dt.map(function(pt) {
          return "".concat(pt[0], "px ").concat(pt[1], "px");
        }).join(", "), ")");
      }
      W.push(e.createElement("div", { key: "clipEllipse", className: bt("clip-ellipse", "snap-control"), style: {
        width: "".concat(nt * 2, "px"),
        height: "".concat(U * 2, "px"),
        clipPath: lt,
        transform: "translate(".concat(-_ + vt, "px, ").concat(-x + ut, "px) ").concat(qo(d))
      } }));
    }
    if (s) {
      var Ft = le(it([y, b, E, R], F(H), !1)), ot = Ft.width, mt = Ft.height, at = Ft.left, J = Ft.top;
      if (j || Y || X) {
        var dt = X ? H.slice(0, 8) : H;
        W.push(e.createElement("div", { key: "clipArea", className: bt("clip-area", "snap-control"), style: {
          width: "".concat(ot, "px"),
          height: "".concat(mt, "px"),
          transform: "translate(".concat(at, "px, ").concat(J, "px)"),
          clipPath: "polygon(".concat(dt.map(function(St) {
            return "".concat(St[0] - at, "px ").concat(St[1] - J, "px");
          }).join(", "), ")")
        } }));
      }
    }
    return D && ["vertical", "horizontal"].forEach(function(pt) {
      var St = D[pt], Rt = pt === "horizontal";
      St.isSnap && L.push.apply(L, it([], F(St.snap.posInfos.map(function(xt, Ct) {
        var Bt = xt.pos, Yt = Et(nr(d, Rt ? [0, Bt] : [Bt, 0], I), [_, x]), or = Et(nr(d, Rt ? [p, Bt] : [Bt, h], I), [_, x]);
        return ta(e, "", Yt, or, u, "clip".concat(pt, "snap").concat(Ct), "guideline");
      })), !1)), St.isBound && L.push.apply(L, it([], F(St.bounds.map(function(xt, Ct) {
        var Bt = xt.pos, Yt = Et(nr(d, Rt ? [0, Bt] : [Bt, 0], I), [_, x]), or = Et(nr(d, Rt ? [p, Bt] : [Bt, h], I), [_, x]);
        return ta(e, "", Yt, or, u, "clip".concat(pt, "bounds").concat(Ct), "guideline", "bounds", "bold");
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
    var r = t.state, n = t.props, a = n.defaultClipPath, s = n.customClipPath, u = r.target, f = r.width, c = r.height, v = e.inputEvent ? e.inputEvent.target : null, p = v && v.getAttribute("class") || "", h = e.datas, d = Jv(u, f, c, a || "inset", s);
    if (!d)
      return !1;
    var m = d.clipText, _ = d.type, x = d.poses, y = ht(t, "onClipStart", At(t, e, {
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
    var _ = An(t.props, "clippable"), x = _.keepRatio, y = 0, b = 0, E = u.draggable, R = Ie(e);
    f && E ? (r = F(E.prevBeforeDist, 2), y = r[0], b = r[1]) : (n = F(R, 2), y = n[0], b = n[1]);
    var M = [y, b], D = t.state, w = D.width, O = D.height, I = !h && !v && !p, P = m.type, B = m.poses, H = m.splitter, W = B.map(function($t) {
      return $t.pos;
    });
    I && (y = -y, b = -b);
    var L = !v || B[d].direction === "nesw", Y = P === "inset" || P === "rect", X = B.map(function() {
      return [0, 0];
    });
    if (v && !L) {
      var j = B[d], rt = j.horizontal, V = j.vertical, et = [
        y * Q(rt),
        b * Q(V)
      ];
      X = ZE(B, d, et, Y, x);
    } else L && (X = W.map(function() {
      return [y, b];
    }));
    var nt = W.map(function($t, yr) {
      return Ht($t, X[yr]);
    }), U = it([], F(nt), !1);
    D.snapBoundInfos = null;
    var ft = m.type === "circle", vt = m.type === "ellipse";
    if (ft || vt) {
      var ut = le(nt), lt = Q(ut.bottom - ut.top), st = Q(vt ? ut.right - ut.left : lt), dt = nt[0][1] + lt, _t = nt[0][0] - st, Dt = nt[0][0] + st;
      ft && (U.push([Dt, ut.bottom]), X.push([1, 0])), U.push([ut.left, dt]), X.push([0, 1]), U.push([_t, ut.bottom]), X.push([1, 0]);
    }
    var Ft = Ad((_.clipHorizontalGuidelines || []).map(function($t) {
      return Vt("".concat($t), O);
    }), (_.clipVerticalGuidelines || []).map(function($t) {
      return Vt("".concat($t), w);
    }), w, O), ot = [], mt = [];
    if (ft || vt)
      ot = [U[4][0], U[2][0]], mt = [U[1][1], U[3][1]];
    else if (Y) {
      var at = [U[0], U[2], U[4], U[6]], J = [X[0], X[2], X[4], X[6]];
      ot = at.filter(function($t, yr) {
        return J[yr][0];
      }).map(function($t) {
        return $t[0];
      }), mt = at.filter(function($t, yr) {
        return J[yr][1];
      }).map(function($t) {
        return $t[1];
      });
    } else
      ot = U.filter(function($t, yr) {
        return X[yr][0];
      }).map(function($t) {
        return $t[0];
      }), mt = U.filter(function($t, yr) {
        return X[yr][1];
      }).map(function($t) {
        return $t[1];
      });
    var pt = [0, 0], St = zv(Ft, _.clipTargetBounds && { left: 0, top: 0, right: w, bottom: O }, ot, mt, 5, 5), Rt = St.horizontal, xt = St.vertical, Ct = Rt.offset, Bt = xt.offset;
    if (Rt.isBound && (pt[1] += Ct), xt.isBound && (pt[0] += Bt), (vt || ft) && X[0][0] === 0 && X[0][1] === 0) {
      var ut = le(nt), Yt = ut.bottom - ut.top, or = vt ? ut.right - ut.left : Yt, sr = xt.isBound ? Q(Bt) : xt.snapIndex === 0 ? -Bt : Bt, ir = Rt.isBound ? Q(Ct) : Rt.snapIndex === 0 ? -Ct : Ct;
      or -= sr, Yt -= ir, ft && (Yt = wd(xt, Rt) > 0 ? Yt : or, or = Yt);
      var Qt = U[0];
      U[1][1] = Qt[1] - Yt, U[2][0] = Qt[0] + or, U[3][1] = Qt[1] + Yt, U[4][0] = Qt[0] - or;
    } else if (Y && x && v) {
      var Ce = F(nh(B), 2), zr = Ce[0], Pe = Ce[1], Gn = zr && Pe ? zr / Pe : 0, xi = B[d], $e = xi.direction || "", dn = U[1][1], dt = U[5][1], _t = U[7][0], Dt = U[3][0];
      Q(Ct) <= Q(Bt) ? Ct = Pr(Ct) * Q(Bt) / Gn : Bt = Pr(Bt) * Q(Ct) * Gn, $e.indexOf("w") > -1 ? _t -= Bt : $e.indexOf("e") > -1 ? Dt -= Bt : (_t += Bt / 2, Dt -= Bt / 2), $e.indexOf("n") > -1 ? dn -= Ct : $e.indexOf("s") > -1 ? dt -= Ct : (dn += Ct / 2, dt -= Ct / 2);
      var yi = Ao(dn, Dt, dt, _t);
      U.forEach(function(da, Vo) {
        var wi;
        wi = F(yi[Vo].pos, 2), da[0] = wi[0], da[1] = wi[1];
      });
    } else
      U.forEach(function($t, yr) {
        var Ei = X[yr];
        Ei[0] && ($t[0] -= Bt), Ei[1] && ($t[1] -= Ct);
      });
    var Fn = Af(t, m, nt), hn = "".concat(P, "(").concat(Fn.join(H), ")");
    if (D.clipPathState = hn, ft || vt)
      ot = [U[4][0], U[2][0]], mt = [U[1][1], U[3][1]];
    else if (Y) {
      var at = [U[0], U[2], U[4], U[6]];
      ot = at.map(function(yr) {
        return yr[0];
      }), mt = at.map(function(yr) {
        return yr[1];
      });
    } else
      ot = U.map(function($t) {
        return $t[0];
      }), mt = U.map(function($t) {
        return $t[1];
      });
    if (D.snapBoundInfos = zv(Ft, _.clipTargetBounds && { left: 0, top: 0, right: w, bottom: O }, ot, mt, 1, 1), E) {
      var Si = D.is3d, bi = D.allMatrix, $o = Si ? 4 : 3, Ci = pt;
      f && (Ci = [
        M[0] + pt[0] - R[0],
        M[1] + pt[1] - R[1]
      ]), E.deltaOffset = Kt(bi, [Ci[0], Ci[1], 0, 0], $o);
    }
    return ht(t, "onClip", At(t, e, z({ clipEventType: "changed", clipType: P, poses: nt, clipStyle: hn, clipStyles: Fn, distX: y, distY: b }, Ar((a = {}, a[P === "rect" ? "clip" : "clipPath"] = hn, a), e)))), !0;
  },
  dragControlEnd: function(t, e) {
    this.unset(t);
    var r = e.isDrag, n = e.datas, a = e.isDouble, s = n.isLine, u = n.isClipStart, f = n.isControl;
    return u ? (ht(t, "onClipEnd", Zr(t, e, {})), a && (f ? QE(t, e) : s && JE(t, e)), a || r) : !1;
  },
  unset: function(t) {
    t.state.clipPathState = "", t.state.snapBoundInfos = null;
  }
}, tw = {
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
    return e.isRequest ? e.requestAble === "originDraggable" : _r(e.inputEvent.target, bt("origin"));
  },
  dragControlStart: function(t, e) {
    var r = e.datas;
    Bn(t, e);
    var n = At(t, e, {
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
    var R = Ht(r.startOrigin, b), M = Ht(r.startTargetOrigin, b), D = Et(b, r.prevOrigin), w = pa(h, d, R, y), O = t.getRect(), I = le(zn(w, v, p, y)), P = [
      O.left - I.left,
      O.top - I.top
    ];
    r.prevOrigin = b;
    var B = [
      _e(M[0], v, x),
      _e(M[1], p, x)
    ].join(" "), H = Ir.drag(t, va(e, t.state, P, !!n)), W = At(t, e, z(z({ width: v, height: p, origin: R, dist: b, delta: D, transformOrigin: B, drag: H }, Ar({
      transformOrigin: B,
      transform: H.transform
    }, e)), { afterTransform: H.transform }));
    return ht(t, "onDragOrigin", W), W;
  },
  dragControlEnd: function(t, e) {
    var r = e.datas;
    return r.isDragOrigin ? (ht(t, "onDragOriginEnd", Zr(t, e, {})), !0) : !1;
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
function rw(t, e, r, n) {
  var a = t.filter(function(c) {
    var v = c.virtual, p = c.horizontal;
    return p && !v;
  }).length, s = t.filter(function(c) {
    var v = c.virtual, p = c.vertical;
    return p && !v;
  }).length, u = -1;
  if (e === 0 && (a === 0 ? u = 0 : a === 1 && (u = 1)), e === 2 && (a <= 2 ? u = 2 : a <= 3 && (u = 3)), e === 3 && (s === 0 ? u = 4 : s < 4 && (u = 7)), e === 1 && (s <= 1 ? u = 5 : s <= 2 && (u = 6)), !(u === -1 || !t[u].virtual)) {
    var f = t[u];
    ew(t, u), u < 4 ? f.pos[0] = r : f.pos[1] = n;
  }
}
function ew(t, e) {
  e < 4 ? t.slice(0, e + 1).forEach(function(r) {
    r.virtual = !1;
  }) : (t[0].virtual && (t[0].virtual = !1), t.slice(4, e + 1).forEach(function(r) {
    r.virtual = !1;
  }));
}
function nw(t, e) {
  e < 4 ? t.slice(e, 4).forEach(function(r) {
    r.virtual = !0;
  }) : t.slice(e).forEach(function(r) {
    r.virtual = !0;
  });
}
function Qv(t, e, r, n, a) {
  n === void 0 && (n = [0, 0]);
  var s = [];
  return !t || t === "0px" ? s = [] : s = ln(t), eh(s, e, r, 0, 0, n, a);
}
function jv(t, e, r, n, a) {
  var s = t.state, u = s.width, f = s.height, c = Pf(a, t.props.roundRelative, u, f), v = c.raws, p = c.styles, h = c.radiusPoses, d = $E(h, v), m = d.horizontals, _ = d.verticals, x = p.join(" ");
  s.borderRadiusState = x;
  var y = At(t, e, z({ horizontals: m, verticals: _, borderRadius: x, width: u, height: f, delta: n, dist: r }, Ar({
    borderRadius: x
  }, e)));
  return ht(t, "onRound", y), y;
}
function tp(t) {
  var e, r, n = t.getState().style, a = n.borderRadius || "";
  if (!a && t.props.groupable) {
    var s = t.moveables[0], u = t.getTargets()[0];
    u && (s?.props.target === u ? (a = (r = (e = t.moveables[0]) === null || e === void 0 ? void 0 : e.state.style.borderRadius) !== null && r !== void 0 ? r : "", n.borderRadius = a) : (a = Mf(u).borderRadius, n.borderRadius = a));
  }
  return a;
}
var iw = {
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
    return e === !0 || e === "line" ? bt("round-line-clickable") : "";
  },
  requestStyle: function() {
    return ["borderRadius"];
  },
  requestChildStyle: function() {
    return ["borderRadius"];
  },
  render: function(t, e) {
    var r = t.getState(), n = r.target, a = r.width, s = r.height, u = r.allMatrix, f = r.is3d, c = r.left, v = r.top, p = r.borderRadiusState, h = t.props, d = h.minRoundControls, m = d === void 0 ? [0, 0] : d, _ = h.maxRoundControls, x = _ === void 0 ? [4, 4] : _, y = h.zoom, b = h.roundPadding, E = b === void 0 ? 0 : b, R = h.isDisplayShadowRoundControls, M = h.groupable;
    if (!n)
      return null;
    var D = p || tp(t), w = f ? 4 : 3, O = Qv(D, a, s, m, !0);
    if (!O)
      return null;
    var I = 0, P = 0, B = M ? [0, 0] : [c, v];
    return O.map(function(H, W) {
      var L = H.horizontal, Y = H.vertical, X = H.direction || "", j = it([], F(H.pos), !1);
      P += Math.abs(L), I += Math.abs(Y), L && X.indexOf("n") > -1 && (j[1] -= E), Y && X.indexOf("w") > -1 && (j[0] -= E), L && X.indexOf("s") > -1 && (j[1] += E), Y && X.indexOf("e") > -1 && (j[0] += E);
      var rt = Et(nr(u, j, w), B), V = R && R !== "horizontal", et = H.vertical ? I <= x[1] && (V || !H.virtual) : P <= x[0] && (R || !H.virtual);
      return e.createElement("div", { key: "borderRadiusControl".concat(W), className: bt("control", "border-radius", H.vertical ? "vertical" : "", H.virtual ? "virtual" : ""), "data-radius-index": W, style: {
        display: et ? "block" : "none",
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
    var h = At(t, e, {}), d = ht(t, "onRoundStart", h);
    if (d === !1)
      return !1;
    n.lineIndex = v, n.controlIndex = c, n.isControl = u, n.isLine = f, Bn(t, e);
    var m = t.props, _ = m.roundRelative, x = m.minRoundControls, y = x === void 0 ? [0, 0] : x, b = t.state, E = b.width, R = b.height;
    n.isRound = !0, n.prevDist = [0, 0];
    var M = tp(t), D = Qv(M || "", E, R, y, !0) || [];
    return n.controlPoses = D, b.borderRadiusState = Pf(D, _, E, R).styles.join(" "), h;
  },
  dragControl: function(t, e) {
    var r = e.datas, n = r.controlPoses;
    if (!r.isRound || !r.isControl || !n.length)
      return !1;
    var a = r.controlIndex, s = F(Ie(e), 2), u = s[0], f = s[1], c = [u, f], v = Et(c, r.prevDist), p = t.props.maxRoundControls, h = p === void 0 ? [4, 4] : p, d = t.state, m = d.width, _ = d.height, x = n[a], y = x.vertical, b = x.horizontal, E = n.map(function(M) {
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
    var R = n.map(function(M, D) {
      return z(z({}, M), { pos: Ht(M.pos, E[D]) });
    });
    return a < 4 ? R.slice(0, a + 1).forEach(function(M) {
      M.virtual = !1;
    }) : R.slice(4, a + 1).forEach(function(M) {
      M.virtual = !1;
    }), r.prevDist = [u, f], jv(t, e, c, v, R);
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
        nw(v, u);
      else if (f && (d === !0 || d === "line")) {
        var m = F(sd(t, e), 2), _ = m[0], x = m[1];
        rw(v, c, _, x);
      }
      p !== v.filter(function(b) {
        var E = b.virtual;
        return E;
      }).length && jv(t, e, [0, 0], [0, 0], v);
    }
    var y = Zr(t, e, {});
    return ht(t, "onRoundEnd", y), r.borderRadiusState = "", y;
  },
  dragGroupControlStart: function(t, e) {
    var r = this.dragControlStart(t, e);
    if (!r)
      return !1;
    var n = t.moveables, a = t.props.targets, s = ye(t, "roundable", e), u = z({ targets: t.props.targets, events: s.map(function(f, c) {
      return z(z({}, f), { target: a[c], moveable: n[c], currentTarget: n[c] });
    }) }, r);
    return ht(t, "onRoundGroupStart", u), r;
  },
  dragGroupControl: function(t, e) {
    var r = this.dragControl(t, e);
    if (!r)
      return !1;
    var n = t.moveables, a = t.props.targets, s = ye(t, "roundable", e), u = z({ targets: t.props.targets, events: s.map(function(f, c) {
      return z(z(z({}, f), { target: a[c], moveable: n[c], currentTarget: n[c] }), Ar({
        borderRadius: r.borderRadius
      }, f));
    }) }, r);
    return ht(t, "onRoundGroup", u), u;
  },
  dragGroupControlEnd: function(t, e) {
    var r = t.moveables, n = t.props.targets, a = ye(t, "roundable", e);
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
function aw(t, e) {
  var r = e ? 4 : 3, n = tr(r), a = "matrix".concat(e ? "3d" : "", "(").concat(n.join(","), ")");
  return t === a || t === "matrix(1,0,0,1,0,0)";
}
var ih = {
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
    var r = t.state, n = r.is3d, a = r.targetMatrix, s = r.inlineTransform, u = n ? "matrix3d(".concat(a.join(","), ")") : "matrix(".concat(Vp(a, !0), ")"), f = !s || s === "none" ? u : s;
    e.datas.startTransforms = aw(f, n) ? [] : ln(f);
  },
  resetStyle: function(t) {
    var e = t.datas;
    e.nextStyle = {}, e.nextTransforms = t.datas.startTransforms, e.nextTransformAppendedIndexes = [];
  },
  fillDragStartParams: function(t, e) {
    return At(t, e, {
      setTransform: function(r) {
        e.datas.startTransforms = dr(r) ? r : ln(r);
      },
      isPinch: !!e.isPinch
    });
  },
  fillDragParams: function(t, e) {
    return At(t, e, {
      isPinch: !!e.isPinch
    });
  },
  dragStart: function(t, e) {
    this.setTransform(t, e), this.resetStyle(e), ht(t, "onBeforeRenderStart", this.fillDragStartParams(t, e));
  },
  drag: function(t, e) {
    e.datas.startTransforms || this.setTransform(t, e), this.resetStyle(e), ht(t, "onBeforeRender", At(t, e, {
      isPinch: !!e.isPinch
    }));
  },
  dragEnd: function(t, e) {
    e.datas.startTransforms || (this.setTransform(t, e), this.resetStyle(e)), ht(t, "onBeforeRenderEnd", At(t, e, {
      isPinch: !!e.isPinch,
      isDrag: e.isDrag
    }));
  },
  dragGroupStart: function(t, e) {
    var r = this;
    this.dragStart(t, e);
    var n = ye(t, "beforeRenderable", e), a = t.moveables, s = n.map(function(u, f) {
      var c = a[f];
      return r.setTransform(c, u), r.resetStyle(u), r.fillDragStartParams(c, u);
    });
    ht(t, "onBeforeRenderGroupStart", At(t, e, {
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
    var n = ye(t, "beforeRenderable", e), a = t.moveables, s = n.map(function(u, f) {
      var c = a[f];
      return r.resetStyle(u), r.fillDragParams(c, u);
    });
    ht(t, "onBeforeRenderGroup", At(t, e, {
      isPinch: !!e.isPinch,
      targets: t.props.targets,
      events: s
    }));
  },
  dragGroupEnd: function(t, e) {
    this.dragEnd(t, e), ht(t, "onBeforeRenderGroupEnd", At(t, e, {
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
}, ah = {
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
    ht(t, "onRenderStart", At(t, e, {
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
    ht(t, "onRenderGroupStart", At(t, e, {
      isPinch: !!e.isPinch,
      targets: t.props.targets
    }));
  },
  dragGroup: function(t, e) {
    var r = this, n = ye(t, "beforeRenderable", e), a = t.moveables, s = n.map(function(u, f) {
      var c = a[f];
      return r.fillDragParams(c, u);
    });
    ht(t, "onRenderGroup", At(t, e, z(z({ isPinch: !!e.isPinch, targets: t.props.targets, transform: lo(e), transformObject: {} }, Ar(co(e))), { events: s })));
  },
  dragGroupEnd: function(t, e) {
    var r = this, n = ye(t, "beforeRenderable", e), a = t.moveables, s = n.map(function(u, f) {
      var c = a[f];
      return r.fillDragEndParams(c, u);
    });
    ht(t, "onRenderGroupEnd", At(t, e, z({ isPinch: !!e.isPinch, isDrag: e.isDrag, targets: t.props.targets, events: s, transformObject: {}, transform: lo(e) }, Ar(co(e)))));
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
    }), At(t, e, z({ isPinch: !!e.isPinch, transformObject: r, transform: lo(e) }, Ar(co(e))));
  },
  fillDragEndParams: function(t, e) {
    var r = {};
    return ui(Do(e) || []).forEach(function(n) {
      r[n.name] = n.functionValue;
    }), At(t, e, z({ isPinch: !!e.isPinch, isDrag: e.isDrag, transformObject: r, transform: lo(e) }, Ar(co(e))));
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
  }, R = f && (!t.targetGesto || !t.controlGesto || !t.targetGesto.isFlag() || !t.controlGesto.isFlag());
  R && t.updateRect(a, !0, !1);
  var M = s.datas, D = d ? "controlGesto" : "targetGesto", w = t[D], O = function(W, L, Y) {
    if (!(L in W) || w !== t[D])
      return !1;
    var X = W.name, j = M[X] || (M[X] = {});
    if (f && (j.isEventStart = !Y || !W[Y] || W[Y](t, s)), !j.isEventStart)
      return !1;
    var rt = W[L](t, z(z({}, s), { stop: E, datas: j, originalDatas: M, inputTarget: y }));
    return t._emitter.off(), f && rt === !1 && (j.isEventStart = !1), rt;
  };
  R && m.forEach(function(W) {
    W.unset && W.unset(t);
  }), O(ih, "drag".concat(n).concat(a));
  var I = 0, P = 0;
  r.forEach(function(W) {
    if (b)
      return !1;
    var L = "".concat(W).concat(n).concat(a), Y = "".concat(W).concat(n, "Condition");
    a === "" && !h && TE(t.state, s);
    var X = m.filter(function(V) {
      return V[L];
    });
    X = X.filter(function(V, et) {
      return V.name && X.indexOf(V) === et;
    });
    var j = X.filter(function(V) {
      return O(V, L, Y);
    }), rt = j.length;
    b && ++I, rt && ++P, !b && f && X.length && !rt && (I += X.filter(function(V) {
      var et = V.name, nt = M[et];
      return nt.isEventStart ? V.dragRelation !== "strong" : !1;
    }).length ? 1 : 0);
  }), (!v || P) && O(ah, "drag".concat(n).concat(a));
  var B = w !== t[D] || I === r.length;
  if ((c || b || B) && (t.state.gestos = {}, t.moveables && t.moveables.forEach(function(W) {
    W.state.gestos = {};
  }), m.forEach(function(W) {
    W.unset && W.unset(t);
  })), f && !B && !h && P && t.props.preventDefault && s?.preventDefault(), t.isUnmounted || B)
    return !1;
  if (!f && P && !u || c) {
    var H = t.props.flushSync || Gd;
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
function oh(t, e, r) {
  var n = t.controlBox, a = [], s = t.props, u = s.dragArea, f = t.state.target, c = s.dragTarget;
  a.push(n), (!u || c) && a.push(e), !u && c && f && e !== f && s.dragTargetSelf && a.push(f);
  var v = Bf(t);
  return uh(t, a, "targetAbles", r, {
    dragStart: v,
    pinchStart: v
  });
}
function sh(t, e) {
  var r = t.controlBox, n = [];
  n.push(r);
  var a = Bf(t, !0), s = function(u, f) {
    if (f === void 0 && (f = u.inputEvent.target), f === r)
      return !0;
    var c = a(u, f);
    return !c;
  };
  return uh(t, n, "controlAbles", e, {
    dragStart: s,
    pinchStart: s
  });
}
function uh(t, e, r, n, a) {
  a === void 0 && (a = {});
  var s = r === "targetAbles", u = t.props, f = u.pinchOutside, c = u.pinchThreshold, v = u.preventClickEventOnDrag, p = u.preventClickDefault, h = u.checkInput, d = u.dragFocusedInput, m = u.preventDefault, _ = m === void 0 ? !0 : m, x = u.preventRightClick, y = x === void 0 ? !0 : x, b = u.preventWheelClick, E = b === void 0 ? !0 : b, R = u.dragContainer, M = Re(R, !0), D = {
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
  }, w = new Pb(e, D), O = n === "Control";
  return ["drag", "pinch"].forEach(function(I) {
    ["Start", "", "End"].forEach(function(P) {
      w.on("".concat(I).concat(P), function(B) {
        var H, W = B.eventType, L = I === "drag" && B.isPinch;
        if (a[W] && !a[W](B)) {
          B.stop();
          return;
        }
        if (!L) {
          var Y = I === "drag" ? [I] : ["drag", I], X = it([], F(t[r]), !1), j = Zi(t, X, Y, n, P, B);
          j ? (t.props.stopPropagation || P === "Start" && O) && ((H = B?.inputEvent) === null || H === void 0 || H.stopPropagation()) : B.stop();
        }
      });
    });
  }), w;
}
var ow = /* @__PURE__ */ (function() {
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
function sw(t, e, r, n) {
  var a;
  r === void 0 && (r = e);
  var s = pd(t, e), u = s.matrixes, f = s.is3d, c = s.targetMatrix, v = s.transformOrigin, p = s.targetOrigin, h = s.offsetContainer, d = s.hasFixed, m = s.zoom, _ = SC(h, r), x = _.matrixes, y = _.is3d, b = _.offsetContainer, E = _.zoom, R = n, M = 4, D = t.tagName.toLowerCase() !== "svg" && "ownerSVGElement" in t, w = c, O = tr(M), I = tr(M), P = tr(M), B = tr(M), H = u.length, W = x.map(function(et) {
    return z(z({}, et), { matrix: et.matrix ? it([], F(et.matrix), !1) : void 0 });
  }).reverse();
  u.reverse(), !f && R && (w = be(w, 3, 4), Uu(u)), !y && R && Uu(W), W.forEach(function(et) {
    I = Kt(I, et.matrix, M);
  });
  var L = r || pn(t), Y = ((a = W[0]) === null || a === void 0 ? void 0 : a.target) || ra(L, L, !0).offsetParent, X = W.slice(1).reduce(function(et, nt) {
    return Kt(et, nt.matrix, M);
  }, tr(M));
  u.forEach(function(et, nt) {
    if (H - 2 === nt && (P = O.slice()), H - 1 === nt && (B = O.slice()), !et.matrix) {
      var U = u[nt + 1], ft = EE(et, U, Y, M, Kt(X, O, M));
      et.matrix = In(ft, M);
    }
    O = Kt(O, et.matrix, M);
  });
  var j = !D && f;
  w || (w = tr(j ? 4 : 3));
  var rt = qo(D && w.length === 16 ? be(w, 4, 3) : w, j), V = I;
  return I = Up(I, M, M), {
    hasZoom: m !== 1 || E !== 1,
    hasFixed: d,
    matrixes: u,
    rootMatrix: I,
    originalRootMatrix: V,
    beforeMatrix: P,
    offsetMatrix: B,
    allMatrix: O,
    targetMatrix: w,
    targetTransform: rt,
    inlineTransform: t.style.transform,
    transformOrigin: v,
    targetOrigin: p,
    is3d: R,
    offsetContainer: h,
    offsetRootContainer: b
  };
}
function uw(t, e, r, n) {
  r === void 0 && (r = e);
  var a = 0, s = 0, u = 0, f = {}, c = Nd(t);
  if (t && (a = c.offsetWidth, s = c.offsetHeight), t) {
    var v = sw(t, e, r, n), p = oi(v.allMatrix, v.transformOrigin, a, s);
    f = z(z({}, v), p);
    var h = oi(v.allMatrix, [50, 50], 100, 100);
    u = kd([h.pos1, h.pos2], h.direction);
  }
  var d = 4;
  return z(z(z({ hasZoom: !1, width: a, height: s, rotation: u }, c), { originalRootMatrix: tr(d), rootMatrix: tr(d), beforeMatrix: tr(d), offsetMatrix: tr(d), allMatrix: tr(d), targetMatrix: tr(d), targetTransform: "", inlineTransform: "", transformOrigin: [0, 0], targetOrigin: [0, 0], is3d: !0, left: 0, top: 0, right: 0, bottom: 0, origin: [0, 0], pos1: [0, 0], pos2: [0, 0], pos3: [0, 0], pos4: [0, 0], direction: 1, hasFixed: !1, offsetContainer: null, offsetRootContainer: null, matrixes: [] }), f);
}
function Zu(t, e, r, n, a, s) {
  s === void 0 && (s = []);
  var u = 1, f = [0, 0], c = po(), v = po(), p = po(), h = po(), d = [0, 0], m = {}, _ = uw(e, r, a, !0);
  if (e) {
    var x = Yr(e);
    s.forEach(function(W) {
      m[W] = x(W);
    });
    var y = _.is3d ? 4 : 3, b = oi(_.offsetMatrix, Ht(_.transformOrigin, $p(_.targetMatrix, y)), _.width, _.height);
    u = b.direction, f = Ht(b.origin, [b.left - _.left, b.top - _.top]), h = Ki(_.offsetRootContainer);
    var E = ra(n, n, !0).offsetParent || _.offsetRootContainer;
    if (_.hasZoom) {
      var R = oi(Kt(_.originalRootMatrix, _.allMatrix), _.transformOrigin, _.width, _.height), M = oi(_.originalRootMatrix, Oo(Yr(E)("transformOrigin")).map(function(W) {
        return parseFloat(W);
      }), E.offsetWidth, E.offsetHeight);
      if (c = yu(R, h), p = yu(M, h, E, !0), t) {
        var D = R.left, w = R.top;
        v = yu({
          left: D,
          top: w,
          bottom: w,
          right: w
        }, h);
      }
    } else {
      c = Ki(e), p = yC(E), t && (v = Ki(t));
      var O = p.left, I = p.top, P = p.clientLeft, B = p.clientTop, H = [
        c.left - O,
        c.top - I
      ];
      d = Et(vi(_.rootMatrix, H, 4), [P + _.left, B + _.top]);
    }
  }
  return z({ targetClientRect: c, containerClientRect: p, moveableClientRect: v, rootContainerClientRect: h, beforeDirection: u, beforeOrigin: f, originalBeforeOrigin: f, target: e, style: m, offsetDelta: d }, _);
}
function rp(t) {
  var e = t.pos1, r = t.pos2, n = t.pos3, a = t.pos4;
  if (!e || !r || !n || !a)
    return null;
  var s = Pn([e, r, n, a]), u = [s.minX, s.minY], f = Et(t.origin, u);
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
        CS(r._observerId), r._observerId = yp(function() {
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
    var _ = F(a || [0, 0], 2), x = _[0], y = _[1], b = n.left, E = n.top, R = n.target, M = n.direction, D = n.hasFixed, w = n.offsetDelta, O = r.targets, I = this.isDragging(), P = {};
    this.getEnabledAbles().forEach(function(X) {
      P["data-able-".concat(X.name.toLowerCase())] = !0;
    });
    var B = this._getAbleClassName(), H = O && O.length && (R || h) || u || !this._hasFirstTarget && this.state.isPersisted, W = this.controlBox || this.props.firstRenderState || this.props.persistData, L = [b - x, E - y];
    !h && r.useAccuratePosition && (L[0] += w[0], L[1] += w[1]);
    var Y = {
      position: D ? "fixed" : "absolute",
      display: H ? "block" : "none",
      visibility: W ? "visible" : "hidden",
      transform: "translate3d(".concat(L[0], "px, ").concat(L[1], "px, ").concat(v, ")"),
      "--zoom": f,
      "--zoompx": "".concat(f, "px")
    };
    return d && (Y["--moveable-line-padding"] = d), m && (Y["--moveable-control-padding"] = m), xe(
      p,
      z({ cspNonce: c, ref: He(this, "controlBox"), className: "".concat(bt("control-box", M === -1 ? "reverse" : "", I ? "dragging" : ""), " ").concat(B, " ").concat(s) }, P, { onClick: this._onPreventClick, style: Y }),
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
    return Hr(n, function(a) {
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
    var d = p.left, m = p.top, _ = p.width, x = p.height, y = Ev([s, u, c, f], v), b = Db(y, [
      [d, m],
      [d + _, m],
      [d + _, m + x],
      [d, m + x]
    ]), E = Jp(y);
    return !b || !E ? 0 : Math.min(100, b / E * 100);
  }, e.prototype.isInside = function(r, n) {
    var a = this.state, s = a.target, u = a.pos1, f = a.pos2, c = a.pos3, v = a.pos4, p = a.targetClientRect;
    return s ? Au([r, n], Ev([u, f, v, c], p)) : !1;
  }, e.prototype.updateRect = function(r, n, a) {
    a === void 0 && (a = !0);
    var s = this.props, u = !s.parentPosition && !s.wrapperMoveable;
    u && li(!0);
    var f = s.parentMoveable, c = this.state, v = c.target || s.target, p = this.getContainer(), h = f ? f._rootContainer : this._rootContainer, d = Zu(this.controlBox, v, p, p, h || p, this._getRequestStyles());
    if (!v && this._hasFirstTarget && s.persistData) {
      var m = rp(s.persistData);
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
    var r = this.state, n = ve(this.state), a = F(n, 4), s = a[0], u = a[1], f = a[2], c = a[3], v = le(n), p = r.width, h = r.height, d = v.width, m = v.height, _ = v.left, x = v.top, y = [r.left, r.top], b = Ht(y, r.origin), E = Ht(y, r.beforeOrigin), R = r.transformOrigin;
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
      n?.isIdle() === !1 && $u(this, !1), n?.stop();
    }
    if (!r || r === "control") {
      var n = this.controlGesto;
      n?.isIdle() === !1 && $u(this, !0), n?.stop();
    }
  }, e.prototype.getRotation = function() {
    var r = this.state, n = r.pos1, a = r.pos2, s = r.direction;
    return IE(n, a, s);
  }, e.prototype.request = function(r, n, a) {
    n === void 0 && (n = {});
    var s = this, u = s.props, f = u.parentMoveable || u.wrapperMoveable || s, c = f.props.ables, v = u.groupable, p = Hr(c, function(b) {
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
    var b = Jd(a || {}), E = b.left, R = b.top, M = b.bottom, D = b.right, w = c ? 4 : 3, O = [];
    x ? O = u : this.controlBox && n.groupable ? O = s : O = Ht(s, [m, _]);
    var I = Eo(w, In(O.map(function(Y) {
      return -Y;
    }), w), f, In(u, w)), P = ae(I, v, [-E, -R], w), B = ae(I, p, [D, -R], w), H = ae(I, h, [-E, M], w), W = ae(I, d, [D, M], w);
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
          ae(I, v, [-E - L, -R], w),
          ae(I, p, [D + L, -R], w)
        ],
        [
          ae(I, p, [D, -R - L], w),
          ae(I, d, [D, M + L], w)
        ],
        [
          ae(I, d, [D + L, M], w),
          ae(I, h, [-E - L, M], w)
        ],
        [
          ae(I, h, [-E, M + L], w),
          ae(I, v, [-E, -R - L], w)
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
    return a[s] || (a[s] = td(r, n)), a[s];
  }, e.prototype.getState = function() {
    var r, n = this.props;
    (n.target || !((r = n.targets) === null || r === void 0) && r.length) && (this._hasFirstTarget = !0);
    var a = this.controlBox, s = n.persistData, u = n.firstRenderState;
    if (u && !a)
      return u;
    if (!this._hasFirstTarget && s) {
      var f = rp(s);
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
      createElement: xe
    };
    return this.renderState = {}, ME($d(ho(this.getEnabledAbles(), ["render"], a).map(function(u) {
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
    s && (ii(this, !1), this.updateState({ gestos: {} })), n || ii(this, !0), a && r && !this.targetGesto && (this.targetGesto = oh(this, a, "")), !this.controlGesto && n && (this.controlGesto = sh(this, "Control"));
  }, e.prototype._updateTargets = function() {
    var r = this.props;
    this._prevPropTarget = this._propTarget, this._prevDragTarget = this._dragTarget, this._prevOriginalDragTarget = this._originalDragTarget, this._prevDragArea = r.dragArea, this._propTarget = r.target, this._originalDragTarget = r.dragTarget || r.target, this._dragTarget = Re(this._originalDragTarget, !0);
  }, e.prototype._renderLines = function() {
    var r = this.props, n = r, a = n.zoom, s = n.hideDefaultLines, u = n.hideChildMoveableDefaultLines, f = n.parentMoveable;
    if (s || f && u)
      return [];
    var c = this.getState(), v = {
      createElement: xe
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
        m || (m = new ow(a, r, p), s[p] = m), m.setAbles(h);
      });
    }
  }, e.prototype._checkUpdateRootContainer = function() {
    var r = this.props.rootContainer;
    !this._rootContainer && r && (this._rootContainer = Re(r, !0));
  }, e.prototype._checkUpdateViewContainer = function() {
    var r = this.props.viewContainer;
    !this._viewContainer && r && (this._viewContainer = Re(r, !0));
    var n = this._viewContainer;
    n && this._changeAbleViewClassNames(it(it([], F(this._getAbleViewClassNames()), !1), [
      this.isDragging() ? LE : ""
    ], !1));
  }, e.prototype._changeAbleViewClassNames = function(r) {
    var n = this._viewContainer, a = Ud(r.filter(Boolean), function(v) {
      return v;
    }).map(function(v) {
      var p = F(v, 1), h = p[0];
      return h;
    }), s = this._viewClassNames, u = aa(s, a), f = u.removed, c = u.added;
    f.forEach(function(v) {
      wp(n, s[v]);
    }), c.forEach(function(v) {
      Ep(n, a[v]);
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
      return (!((h = f[m]) === null || h === void 0) && h.isEventStart || !((d = c[m]) === null || d === void 0) && d.isEventStart) && (_ += " ".concat(bt("".concat(m).concat(r, "-dragging")))), _.trim();
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
          for (var d = Yb(v), m = d.next(); !m.done; m = d.next()) {
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
    flushSync: Gd,
    firstRenderState: null,
    persistData: null,
    viewContainer: null,
    requestStyles: [],
    useAccuratePosition: !1
  }, e;
})(Pp), zf = {
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
      return e.createElement(pi, { key: "moveable" + x, ref: gp(t, "moveables", x), target: _, origin: !1, requestStyles: m, cssStyled: n.cssStyled, customStyledMap: n.customStyledMap, useResizeObserver: n.useResizeObserver, useMutationObserver: n.useMutationObserver, hideChildMoveableDefaultLines: n.hideChildMoveableDefaultLines, parentMoveable: t, parentPosition: [u, f], persistData: h[x], zoom: v });
    })), !1), F($d(p.map(function(_, x) {
      var y = _.pos1, b = _.pos2, E = _.pos3, R = _.pos4, M = [y, b, E, R];
      return [
        [0, 1],
        [1, 3],
        [3, 2],
        [2, 0]
      ].map(function(D, w) {
        var O = F(D, 2), I = O[0], P = O[1];
        return ta(e, "", Et(M[I], d), Et(M[P], d), v, "group-rect-".concat(x, "-").concat(w));
      });
    }))), !1);
  }
}, fw = ca("clickable", {
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
      ht(t, "onClick", At(t, e, {
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
      }), f = s > -1), ht(t, "onClickGroup", At(t, e, {
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
var lw = ca("edgeDraggable", {
  css: [
    `.edge.edgeDraggable.line {
cursor: move;
}`
  ],
  render: function(t, e) {
    var r = t.props, n = r.edgeDraggable;
    return n ? gd(e, "edgeDraggable", n, t.getState().renderPoses, r.zoom) : [];
  },
  dragCondition: function(t, e) {
    var r, n = t.props, a = (r = e.inputEvent) === null || r === void 0 ? void 0 : r.target;
    return !n.edgeDraggable || !a ? !1 : !n.draggable && _r(a, bt("direction")) && _r(a, bt("edge")) && _r(a, bt("edgeDraggable"));
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
    return !n.edgeDraggable || !a ? !1 : !n.draggable && _r(a, bt("direction")) && _r(a, bt("line"));
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
}), fh = {
  name: "individualGroupable",
  props: [
    "individualGroupable",
    "individualGroupableProps"
  ],
  events: []
}, Gf = [
  ih,
  th,
  dE,
  AE,
  Ir,
  lw,
  Yu,
  BE,
  GE,
  ZC,
  kE,
  HE,
  WE,
  tw,
  jE,
  iw,
  zf,
  fh,
  fw,
  jd,
  ah
], cw = /* @__PURE__ */ Gf.reduce(function(t, e) {
  return (e.events || []).forEach(function(r) {
    Cp(t, r);
  }), t;
}, []), vw = /* @__PURE__ */ Gf.reduce(function(t, e) {
  return (e.props || []).forEach(function(r) {
    Cp(t, r);
  }), t;
}, []);
function ep(t, e) {
  var r = F(t, 3), n = r[0], a = r[1], s = r[2];
  return (n * e[0] + a * e[1] + s) / Math.sqrt(n * n + a * a);
}
function _o(t, e) {
  var r = F(t, 2), n = r[0], a = r[1];
  return -n * e[0] - a * e[1];
}
function np(t, e) {
  return Math.max.apply(Math, it([], F(t.map(function(r) {
    var n = F(r, 4), a = n[0], s = n[1], u = n[2], f = n[3];
    return Math.max(a[e], s[e], u[e], f[e]);
  })), !1));
}
function ip(t, e) {
  return Math.min.apply(Math, it([], F(t.map(function(r) {
    var n = F(r, 4), a = n[0], s = n[1], u = n[2], f = n[3];
    return Math.min(a[e], s[e], u[e], f[e]);
  })), !1));
}
function pw(t, e) {
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
    var d = h / 180 * Math.PI, m = Math.tan(d), _ = -1 / m, x = [Wu, Mv], y = [[0, 0], [0, 0]], b = [Wu, Mv], E = [[0, 0], [0, 0]];
    t.forEach(function(vt) {
      vt.forEach(function(ut) {
        var lt = ep([-m, 1, 0], ut), st = ep([-_, 1, 0], ut);
        x[0] > lt && (y[0] = ut, x[0] = lt), x[1] < lt && (y[1] = ut, x[1] = lt), b[0] > st && (E[0] = ut, b[0] = st), b[1] < st && (E[1] = ut, b[1] = st);
      });
    });
    var R = F(y, 2), M = R[0], D = R[1], w = F(E, 2), O = w[0], I = w[1], P = [-m, 1, _o([-m, 1], M)], B = [-m, 1, _o([-m, 1], D)], H = [-_, 1, _o([-_, 1], O)], W = [-_, 1, _o([-_, 1], I)];
    r = F([
      [P, H],
      [P, W],
      [B, H],
      [B, W]
    ].map(function(vt) {
      var ut = F(vt, 2), lt = ut[0], st = ut[1];
      return pf(lt, st)[0];
    }), 4), s = r[0], u = r[1], f = r[2], c = r[3], v = b[1] - b[0], p = x[1] - x[0];
  } else {
    var L = ip(t, 0), Y = ip(t, 1), X = np(t, 0), j = np(t, 1);
    if (s = [L, Y], u = [X, Y], f = [L, j], c = [X, j], v = X - L, p = j - Y, h % 180) {
      var rt = [f, s, c, u];
      n = F(rt, 4), s = n[0], u = n[1], f = n[2], c = n[3], v = j - Y, p = X - L;
    }
  }
  if (h % 360 > 180) {
    var rt = [c, f, u, s];
    a = F(rt, 4), s = a[0], u = a[1], f = a[2], c = a[3];
  }
  var V = Pn([s, u, f, c]), et = V.minX, nt = V.minY, U = V.maxX, ft = V.maxY;
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
    maxY: ft,
    rotation: e
  };
}
function lh(t, e) {
  var r = e.map(function(n) {
    if (dr(n)) {
      var a = lh(t, n), s = a.length;
      return s > 1 ? a : s === 1 ? a[0] : null;
    } else {
      var u = Hr(t, function(f) {
        var c = f.manager;
        return c.props.target === n;
      });
      return u ? (u.finded = !0, u.manager) : null;
    }
  }).filter(Boolean);
  return r.length === 1 && dr(r[0]) ? r[0] : r;
}
var dw = /* @__PURE__ */ (function(t) {
  la(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.differ = new Zp(), r.moveables = [], r.transformOrigin = "50% 50%", r.renderGroupRects = [], r._targetGroups = [], r._hasFirstTargets = !1, r;
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
    }), h = this.props.targetGroups || [], d = lh(p, h), m = f.useDefaultGroupRotate;
    d.push.apply(d, it([], F(p.filter(function(_t) {
      var Dt = _t.finded;
      return !Dt;
    }).map(function(_t) {
      var Dt = _t.manager;
      return Dt;
    })), !1));
    var _ = [], x = !n || r !== "" && f.updateGroup, y = f.defaultGroupRotate || 0;
    if (!this._hasFirstTargets) {
      var b = (s = f.persistData) === null || s === void 0 ? void 0 : s.rotation;
      b != null && (y = b);
    }
    function E(_t, Dt, Ft) {
      var ot = _t.map(function(xt) {
        if (dr(xt)) {
          var Ct = E(xt, Dt), Bt = [Ct.pos1, Ct.pos2, Ct.pos3, Ct.pos4];
          return _.push(Ct), { poses: Bt, rotation: Ct.rotation };
        } else
          return {
            poses: ve(xt.state),
            rotation: xt.getRotation()
          };
      }), mt = ot.map(function(xt) {
        var Ct = xt.rotation;
        return Ct;
      }), at = 0, J = mt[0], pt = mt.every(function(xt) {
        return Math.abs(J - xt) < 0.1;
      });
      x ? at = !m && pt ? J : y : at = !m && !Ft && pt ? J : Dt;
      var St = ot.map(function(xt) {
        var Ct = xt.poses;
        return Ct;
      }), Rt = pw(St, at);
      return Rt;
    }
    var R = E(d, this.rotation, !0);
    x && (this.rotation = R.rotation, this.transformOrigin = f.defaultGroupOrigin || "50% 50%", this.scale = [1, 1]), this._targetGroups = h, this.renderGroupRects = _;
    var M = this.transformOrigin, D = this.rotation, w = this.scale, O = R.width, I = R.height, P = R.minX, B = R.minY, H = PE([
      [0, 0],
      [O, 0],
      [0, I],
      [O, I]
    ], If(M, O, I), this.rotation / 180 * Math.PI), W = Pn(H.result), L = W.minX, Y = W.minY, X = " rotate(".concat(D, "deg)") + " scale(".concat(Pr(w[0]), ", ").concat(Pr(w[1]), ")"), j = "translate(".concat(-L, "px, ").concat(-Y, "px)").concat(X);
    this.controlBox.style.transform = "translate3d(".concat(P, "px, ").concat(B, "px, ").concat(this.props.translateZ || 0, ")"), v.style.cssText += "left:0px;top:0px;" + "transform-origin:".concat(M, ";") + "width:".concat(O, "px;height:").concat(I, "px;") + "transform: ".concat(j), u.width = O, u.height = I;
    var rt = this.getContainer(), V = Zu(this.controlBox, v, this.controlBox, this.getContainer(), this._rootContainer || rt, []), et = [V.left, V.top], nt = F(ve(V), 4), U = nt[0], ft = nt[1], vt = nt[2], ut = nt[3], lt = Pn([U, ft, vt, ut]), st = [lt.minX, lt.minY], dt = Pr(w[0] * w[1]);
    V.pos1 = Et(U, st), V.pos2 = Et(ft, st), V.pos3 = Et(vt, st), V.pos4 = Et(ut, st), V.left = P - V.left + st[0], V.top = B - V.top + st[1], V.origin = Et(Ht(et, V.origin), st), V.beforeOrigin = Et(Ht(et, V.beforeOrigin), st), V.originalBeforeOrigin = Ht(et, V.originalBeforeOrigin), V.transformOrigin = Et(Ht(et, V.transformOrigin), st), v.style.transform = "translate(".concat(-L - st[0], "px, ").concat(-Y - st[1], "px)") + X, li(), this.updateState(z(z({}, V), { posDelta: st, direction: dt, beforeDirection: dt }), a);
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
    t.prototype._updateTargets.call(this), this._originalDragTarget = this.props.dragTarget || this.areaElement, this._dragTarget = Re(this._originalDragTarget, !0);
  }, e.prototype._updateEvents = function() {
    var r = this.state, n = this.props, a = this._prevDragTarget, s = n.dragTarget || this.areaElement, u = n.targets, f = this.differ.update(u), c = f.added, v = f.changed, p = f.removed, h = c.length || p.length;
    (h || this._prevOriginalDragTarget !== this._originalDragTarget) && (ii(this, !1), ii(this, !0), this.updateState({ gestos: {} })), a !== s && (r.target = null), r.target || (r.target = this.areaElement, this.controlBox.style.display = "block"), r.target && (this.targetGesto || (this.targetGesto = oh(this, this._dragTarget, "Group")), this.controlGesto || (this.controlGesto = sh(this, "GroupControl")));
    var d = !Vu(r.container, n.container);
    d && (r.container = n.container), (d || h || this.transformOrigin !== (n.defaultGroupOrigin || "50% 50%") || v.length || u.length && !Zd(this._targetGroups, n.targetGroups || [])) && (this.updateRect(), this._hasFirstTargets = !0), this._isPropTargetChanged = !!h;
  }, e.prototype._updateObserver = function() {
  }, e.defaultProps = z(z({}, pi.defaultProps), { transformOrigin: ["50%", "50%"], groupable: !0, dragArea: !0, keepRatio: !0, targets: [], defaultGroupRotate: 0, defaultGroupOrigin: "50% 50%" }), e;
})(pi), hw = /* @__PURE__ */ (function(t) {
  la(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.moveables = [], r;
  }
  return e.prototype.render = function() {
    var r = this, n, a = this.props, s = a.cspNonce, u = a.cssStyled, f = a.persistData, c = a.targets || [], v = c.length, p = this.isUnmounted || !v, h = (n = f?.children) !== null && n !== void 0 ? n : [];
    return p && !v && h.length ? c = h.map(function() {
      return null;
    }) : p || (h = []), xe(u, { cspNonce: s, ref: He(this, "controlBox"), className: bt("control-box") }, c.map(function(d, m) {
      var _, x, y = (x = (_ = a.individualGroupableProps) === null || _ === void 0 ? void 0 : _.call(a, d, m)) !== null && x !== void 0 ? x : {};
      return xe(pi, z({ key: "moveable" + m, ref: gp(r, "moveables", m) }, a, y, { target: d, wrapperMoveable: r, isWrapperMounted: r.isMoveableMounted, persistData: h[m] }));
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
    var a = n, s = Hr(this.moveables, function(u) {
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
function ch(t, e) {
  var r = [];
  return t.forEach(function(n) {
    if (n) {
      if (kr(n)) {
        e[n] && r.push.apply(r, it([], F(e[n]), !1));
        return;
      }
      dr(n) ? r.push.apply(r, it([], F(ch(n, e)), !1)) : r.push(n);
    }
  }), r;
}
function vh(t, e) {
  var r = [];
  return t.forEach(function(n) {
    if (n) {
      if (kr(n)) {
        e[n] && r.push.apply(r, it([], F(e[n]), !1));
        return;
      }
      dr(n) ? r.push(vh(n, e)) : r.push(n);
    }
  }), r;
}
function ph(t, e) {
  return t.length !== e.length || t.some(function(r, n) {
    var a = e[n];
    return !r && !a ? !1 : r != a ? dr(r) && dr(a) ? ph(r, a) : !0 : !1;
  });
}
var gw = /* @__PURE__ */ (function(t) {
  la(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.refTargets = [], r.selectorMap = {}, r._differ = new Zp(), r._elementTargets = [], r._tmpRefTargets = [], r._tmpSelectorMap = {}, r._onChangeTargets = null, r;
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
    this.defaultStyled = td("div", cS(hf, tC + a));
  }, e.getTotalAbles = function() {
    return it([th, zf, fh, jd], F(this.defaultAbles), !1);
  }, e.prototype.render = function() {
    var r, n = this.constructor;
    n.defaultStyled || n.makeStyled();
    var a = this.props, s = a.ables, u = a.props, f = kb(a, ["ables", "props"]), c = F(this._updateRefs(!0), 2), v = c[0], p = c[1], h = ch(v, p), d = h.length > 1, m = n.getTotalAbles(), _ = it(it([], F(m), !1), F(s || []), !1), x = z(z(z({}, f), u || {}), { ables: _, cssStyled: n.defaultStyled, customStyledMap: n.customStyledMap });
    this._elementTargets = h;
    var y = null, b = this.moveable, E = f.persistData;
    if (E?.children && (d = !0), f.individualGroupable)
      return xe(hw, z({ key: "individual-group", ref: He(this, "moveable") }, x, { target: null, targets: h }));
    if (d) {
      var R = vh(v, p);
      if (b && !b.props.groupable && !b.props.individualGroupable) {
        var M = b.props.target;
        M && h.indexOf(M) > -1 && (y = z({}, b.state));
      }
      return xe(dw, z({ key: "group", ref: He(this, "moveable") }, x, (r = f.groupableProps) !== null && r !== void 0 ? r : {}, { target: null, targets: h, targetGroups: R, firstRenderState: y }));
    } else {
      var D = h[0];
      if (b && (b.props.groupable || b.props.individualGroupable)) {
        var w = b.moveables || [], O = Hr(w, function(I) {
          return I.props.target === D;
        });
        O && (y = z({}, O.state));
      }
      return xe(pi, z({ key: "single", ref: He(this, "moveable") }, x, { target: D, firstRenderState: y }));
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
    var n = this.refTargets, a = Of(this.props.target || this.props.targets), s = typeof document < "u", u = ph(n, a), f = this.selectorMap, c = {};
    return this.refTargets.forEach(function v(p) {
      if (kr(p)) {
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
  }, e.defaultAbles = [], e.customStyledMap = {}, e.defaultStyled = null, Hb([
    vS(od)
  ], e.prototype, "moveable", void 0), e;
})(Pp), mw = /* @__PURE__ */ (function(t) {
  la(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e.defaultAbles = Gf, e;
})(gw), Ju = function(t, e) {
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
function _w(t, e, r, n) {
  var a = arguments.length, s = a < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, u;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") s = Reflect.decorate(t, e, r, n);
  else for (var f = t.length - 1; f >= 0; f--) (u = t[f]) && (s = (a < 3 ? u(s) : a > 3 ? u(e, r, s) : u(e, r)) || s);
  return a > 3 && s && Object.defineProperty(e, r, s), s;
}
var xw = /* @__PURE__ */ (function(t) {
  Ff(e, t);
  function e(n) {
    var a = t.call(this, n) || this;
    return a.state = {}, a.state = a.props, a;
  }
  var r = e.prototype;
  return r.render = function() {
    return xe(mw, ea({
      ref: He(this, "moveable")
    }, this.state));
  }, e;
})(sf), Bo = vw, dh = od, hh = cw, yw = /* @__PURE__ */ (function(t) {
  Ff(e, t);
  function e(n, a) {
    a === void 0 && (a = {});
    var s = t.call(this) || this;
    s.containerProvider = null, s.selfElement = null, s._warp = !1;
    var u = ea({}, a), f = {};
    hh.forEach(function(p) {
      f[bS("on ".concat(p))] = function(h) {
        return s.trigger(p, h);
      };
    });
    var c;
    a.warpSelf ? (delete a.warpSelf, s._warp = !0, c = n) : (c = di(n).createElement("div"), n.appendChild(c)), s.containerProvider = Sv(xe(xw, ea({
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
    Sv(null, a, this.containerProvider), this._warp || (n = a?.parentElement) === null || n === void 0 || n.removeChild(a), this.containerProvider = null, this.off(), this.selfElement = null, this.innerMoveable = null;
  }, r.getMoveable = function() {
    return this.innerMoveable.moveable;
  }, e = _w([vv(dh, function(n, a) {
    n[a] || (n[a] = function() {
      for (var s = [], u = 0; u < arguments.length; u++)
        s[u] = arguments[u];
      var f = this.getMoveable();
      if (!(!f || !f[a]))
        return f[a].apply(f, s);
    });
  }), vv(Bo, function(n, a) {
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
})(Fo), Sw = /* @__PURE__ */ (function(t) {
  Ff(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e;
})(yw);
const gh = {};
dh.forEach((t) => {
  gh[t] = function(...e) {
    return this.$_moveable[t](...e);
  };
});
const mh = {};
Bo.forEach((t) => {
  mh[t] = function(e) {
    this.$_moveable[t] = e;
  };
});
const bw = Qu({
  name: "moveable",
  methods: gh,
  props: Bo,
  watch: mh,
  mounted() {
    const t = {}, e = this.$props;
    Bo.forEach((s) => {
      const u = e[s];
      na(u) || (t[s] = e[s]);
    });
    const n = this.$refs.moveableElement, a = new Sw(n, {
      ...t,
      warpSelf: !0
    });
    hh.forEach((s) => {
      a.on(s, (u) => {
        this.$emit(s, { ...u });
      });
    }), this.$_moveable = a;
  },
  beforeUnmount() {
    this.$_moveable.destroy();
  }
}), Cw = bw, Ew = (t, e) => {
  const r = t.__vccOpts || t;
  for (const [n, a] of e)
    r[n] = a;
  return r;
}, ww = { ref: "moveableElement" };
function Dw(t, e, r, n, a, s) {
  return fe(), ue("div", ww, null, 512);
}
const Mw = /* @__PURE__ */ Ew(Cw, [["render", Dw]]), Tw = { style: { display: "none" } }, Rw = { class: "widget-board" }, Ow = { class: "dropdown-buttons-container" }, Iw = { class: "dropdown-buttons-container" }, Pw = { class: "minimap-canvas" }, Aw = 550, Bw = 200, zw = 200, Gw = 140, Fw = /* @__PURE__ */ Qu({
  __name: "Edit",
  emits: ["openSettings", "removeWidget"],
  setup(t, { emit: e }) {
    const r = e, n = cp();
    rS();
    const a = n.params.pageid || "", s = se(), u = se(""), f = se([]), c = se(!1), v = sp("endpointfinder", null);
    an(() => !!v), se(!1), se(void 0);
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
      moveUp: R,
      moveDown: M,
      moveToBottom: D,
      moveToTop: w,
      addWidget: O,
      removeWidget: I,
      copyWidget: P,
      pasteWidget: B
    } = dp(a), H = an(() => h?.widgets || []), W = an(() => {
      const at = p?.layout || [];
      if (at.length === 0) return { width: 0, height: 0 };
      let J = 0, pt = 0;
      for (const St of at) {
        const Rt = (St.x || 0) + (St.width || 0), xt = (St.y || 0) + (St.height || 0);
        Rt > J && (J = Rt), xt > pt && (pt = xt);
      }
      return {
        width: J + Aw,
        height: pt + Bw
      };
    }), L = se(null), Y = se({ x: 0, y: 0, w: 1, h: 1 }), X = an(() => {
      const at = L.value, J = Math.max(W.value.width, at?.clientWidth || 1), pt = Math.max(W.value.height, at?.clientHeight || 1);
      return Math.min(zw / J, Gw / pt);
    }), j = () => {
      const at = L.value;
      if (!at) return;
      const J = Math.max(W.value.width, at.clientWidth), pt = Math.max(W.value.height, at.clientHeight);
      Y.value = {
        x: at.scrollLeft / J,
        y: at.scrollTop / pt,
        w: at.clientWidth / J,
        h: at.clientHeight / pt
      };
    }, rt = (at) => {
      const J = L.value;
      if (!J) return;
      const St = at.currentTarget.getBoundingClientRect(), Rt = (at.clientX - St.left) / St.width, xt = (at.clientY - St.top) / St.height, Ct = Math.max(W.value.width, J.clientWidth), Bt = Math.max(W.value.height, J.clientHeight);
      J.scrollLeft = Rt * Ct - J.clientWidth / 2, J.scrollTop = xt * Bt - J.clientHeight / 2;
    }, V = an(() => {
      const at = L.value;
      return at ? W.value.width > at.clientWidth || W.value.height > at.clientHeight : !1;
    });
    up(() => {
      Cu(() => j());
    }), Vy(W, () => Cu(() => j()));
    const et = se({ x: 0, y: 0 }), nt = (at) => {
      P(at);
    }, U = se({ visible: !1, x: 0, y: 0 }), ft = (at) => {
      if (!d.hasClipboard) {
        U.value.visible = !1;
        return;
      }
      at.preventDefault();
      const J = at.currentTarget.getBoundingClientRect();
      et.value = {
        x: at.clientX - J.left,
        y: at.clientY - J.top
      }, U.value = {
        visible: !0,
        x: at.clientX - J.left,
        y: at.clientY - J.top
      };
    }, vt = () => {
      U.value.visible = !1;
    }, ut = () => {
      B(et.value.x, et.value.y), U.value.visible = !1;
    }, lt = (at, J, pt, St) => {
      const Rt = { datasourceId: J, settings: {} }, xt = pp.cloneDeep(tS), Ct = m.value.width, Bt = m.value.height, Yt = {
        x: pt - Ct / 2,
        y: St - Bt / 2,
        width: Ct,
        height: Bt,
        z: 3005
      };
      O(at, Rt, xt, Yt);
    }, st = (at) => {
      r("openSettings", at);
    };
    an(() => H.value.length === 0 && (p?.layout || []).length === 0);
    const dt = (at) => {
      I(at), r("removeWidget", at);
    };
    an(() => H.value.find((at) => at.uid === u.value));
    const _t = (at) => {
      const J = L.value;
      if (!J) return { x: 0, y: 0 };
      const pt = J.getBoundingClientRect();
      return {
        x: at.clientX - pt.left + J.scrollLeft,
        y: at.clientY - pt.top + J.scrollTop
      };
    }, Dt = (at) => {
      console.log("ondrop"), _();
      const J = _t(at);
      s.value = { dropX: J.x, dropY: J.y };
    }, Ft = (at) => {
      if (at.dataTransfer?.types.includes("text/plain")) {
        at.preventDefault(), c.value = !0;
        const J = _t(at);
        m.value.x = J.x - m.value.width / 2, m.value.y = J.y - m.value.height / 2, m.value.visible = !0;
      }
    }, ot = (at) => {
      at.dataTransfer?.types.includes("text/plain") && (c.value = !1, _());
    }, mt = (at) => {
      console.log(at);
      const J = "test", pt = at.added?.element?.type || "default", St = s.value?.dropX ?? m.value.x + m.value.width / 2, Rt = s.value?.dropY ?? m.value.y + m.value.height / 2;
      lt(pt, J, St, Rt);
    };
    return (at, J) => {
      const pt = su("va-button"), St = su("va-dropdown-content"), Rt = su("va-dropdown");
      return fe(), ue("div", {
        class: "report-container",
        onContextmenu: ft,
        onClick: vt
      }, [
        me("div", {
          class: "scroll-viewport",
          ref_key: "scrollContainer",
          ref: L,
          onScroll: j
        }, [
          me("div", {
            class: "canvas dottet",
            style: on({
              minWidth: W.value.width > 0 ? `max(100vw, ${W.value.width}px)` : void 0,
              minHeight: W.value.height > 0 ? `max(100vh, ${W.value.height}px)` : void 0
            }),
            onDrop: Dt,
            onDragover: Ft,
            onDragleave: ot
          }, [
            oe(lr(nS), {
              list: f.value,
              group: { name: "widgets" },
              "ghost-class": "ghost",
              itemKey: "type",
              style: { position: "absolute", top: "0", left: "0", height: "100%", width: "100%" },
              onChange: mt,
              onDrop: Dt,
              onDragover: Ft,
              onDragleave: ot,
              onContextmenu: ft
            }, {
              item: Me(({ element: xt }) => [
                me("div", Tw, Ky(xt?.type || ""), 1)
              ]),
              _: 1
            }, 8, ["list"]),
            me("div", Rw, [
              lr(m).visible ? (fe(), ue("div", {
                key: 0,
                class: "ghost-placeholder",
                style: on({
                  left: `${lr(m).x}px`,
                  top: `${lr(m).y}px`,
                  width: `${lr(m).width}px`,
                  height: `${lr(m).height}px`
                })
              }, null, 4)) : uu("", !0),
              (fe(!0), ue(xo, null, Eu(H.value, (xt) => (fe(), ue(xo, {
                key: xt.uid
              }, [
                me("div", {
                  class: fp(`${xt.uid} dashboard-item-container`),
                  style: on(lr(x)(xt.uid)),
                  ref_for: !0,
                  ref: xt.uid
                }, [
                  oe(Rt, {
                    trigger: "right-click",
                    "auto-placement": !1,
                    placement: "right-start",
                    cursor: ""
                  }, {
                    anchor: Me(() => [
                      me("div", {
                        class: "dashboard-item",
                        onContextmenu: J[0] || (J[0] = Zy(() => {
                        }, ["stop"]))
                      }, [
                        oe(lr(lp), {
                          widget: xt,
                          ref_for: !0,
                          ref: `${xt.uid}_wrapper`,
                          onOpenSettings: st,
                          editEnabled: "",
                          onRemoveWidget: dt
                        }, null, 8, ["widget"])
                      ], 32)
                    ]),
                    default: Me(() => [
                      oe(St, null, {
                        default: Me(() => [
                          me("div", Ow, [
                            oe(pt, {
                              onClick: (Ct) => lr(R)(xt.uid)
                            }, {
                              default: Me(() => [...J[1] || (J[1] = [
                                Qn(" Move up ", -1)
                              ])]),
                              _: 1
                            }, 8, ["onClick"]),
                            oe(pt, {
                              onClick: (Ct) => lr(M)(xt.uid)
                            }, {
                              default: Me(() => [...J[2] || (J[2] = [
                                Qn(" Move down ", -1)
                              ])]),
                              _: 1
                            }, 8, ["onClick"]),
                            oe(pt, {
                              onClick: (Ct) => lr(w)(xt.uid)
                            }, {
                              default: Me(() => [...J[3] || (J[3] = [
                                Qn(" Move to top ", -1)
                              ])]),
                              _: 1
                            }, 8, ["onClick"]),
                            oe(pt, {
                              onClick: (Ct) => lr(D)(xt.uid)
                            }, {
                              default: Me(() => [...J[4] || (J[4] = [
                                Qn(" Move to bottom ", -1)
                              ])]),
                              _: 1
                            }, 8, ["onClick"]),
                            oe(pt, {
                              onClick: (Ct) => nt(xt.uid)
                            }, {
                              default: Me(() => [...J[5] || (J[5] = [
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
                oe(lr(Mw), {
                  target: [`.${xt.uid}`],
                  draggable: !0,
                  resizable: !0,
                  useResizeObserver: !0,
                  useMutationObserver: !0,
                  onDrag: (Ct) => lr(b)(xt.uid, Ct),
                  onResize: (Ct) => lr(E)(xt.uid, Ct),
                  snappable: !0,
                  snapGridWidth: 20,
                  snapGridHeight: 20,
                  origin: !1,
                  ref_for: !0,
                  ref: `${xt.uid}_control`,
                  style: on(lr(y)(xt.uid))
                }, null, 8, ["target", "onDrag", "onResize", "style"])
              ], 64))), 128)),
              U.value.visible && lr(d).hasClipboard ? (fe(), ue("div", {
                key: 1,
                class: "canvas-context-menu",
                style: on({ left: U.value.x + "px", top: U.value.y + "px" })
              }, [
                me("div", Iw, [
                  oe(pt, {
                    onClick: ut,
                    size: "small"
                  }, {
                    default: Me(() => [...J[6] || (J[6] = [
                      Qn(" Paste ", -1)
                    ])]),
                    _: 1
                  })
                ])
              ], 4)) : uu("", !0)
            ])
          ], 36)
        ], 544),
        V.value ? (fe(), ue("div", {
          key: 0,
          class: "minimap",
          onClick: rt
        }, [
          me("div", Pw, [
            (fe(!0), ue(xo, null, Eu(lr(p)?.layout || [], (xt) => (fe(), ue("div", {
              key: xt.id,
              class: "minimap-widget",
              style: on({
                left: xt.x * X.value + "px",
                top: xt.y * X.value + "px",
                width: xt.width * X.value + "px",
                height: xt.height * X.value + "px"
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
          ])
        ])) : uu("", !0)
      ], 32);
    };
  }
}), Lw = /* @__PURE__ */ hp(Fw, [["__scopeId", "data-v-55dc2169"]]), _h = "org.eclipse.daanse.board.app.ui.vue.layouts.base";
function xh({ services: t }) {
  t.getRequired(op).addLayout({
    id: _h,
    name: "BaseLayout",
    description: "pixelbased Layout",
    component: fS,
    editor: Lw
  });
}
function yh({ services: t }) {
  t.getRequired(op).removeLayout(_h);
}
const Ww = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  activate: xh,
  deactivate: yh,
  useClipboardStore: vp
}, Symbol.toStringTag, { value: "Module" })), ap = "org.eclipse.daanse.board.app.ui.vue.layouts.base", Nw = "0.0.1-next.1";
async function Kw(t) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${ap}: tsm runtime is not initialized`);
  e.register(ap, Ww, Nw, "ui.vue.layouts.base"), await xh?.(t);
}
async function Zw(t) {
  await yh?.(t);
}
export {
  Kw as activate,
  Zw as deactivate,
  vp as useClipboardStore
};
