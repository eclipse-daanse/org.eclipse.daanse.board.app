(function(){var i="ui.vue.composer.ogc",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".vjs-tree-brackets{cursor:pointer}.vjs-tree-brackets:hover{color:#1890ff}.vjs-check-controller{position:absolute;left:0}.vjs-check-controller.is-checked .vjs-check-controller-inner{background-color:#1890ff;border-color:#0076e4}.vjs-check-controller.is-checked .vjs-check-controller-inner.is-checkbox:after{transform:rotate(45deg) scaleY(1)}.vjs-check-controller.is-checked .vjs-check-controller-inner.is-radio:after{transform:translate(-50%,-50%) scale(1)}.vjs-check-controller .vjs-check-controller-inner{display:inline-block;position:relative;border:1px solid #bfcbd9;border-radius:2px;vertical-align:middle;box-sizing:border-box;width:16px;height:16px;background-color:#fff;z-index:1;cursor:pointer;transition:border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46)}.vjs-check-controller .vjs-check-controller-inner:after{box-sizing:content-box;content:\"\";border:2px solid #fff;border-left:0;border-top:0;height:8px;left:4px;position:absolute;top:1px;transform:rotate(45deg) scaleY(0);width:4px;transition:transform .15s cubic-bezier(.71,-.46,.88,.6) .05s;transform-origin:center}.vjs-check-controller .vjs-check-controller-inner.is-radio{border-radius:100%}.vjs-check-controller .vjs-check-controller-inner.is-radio:after{border-radius:100%;height:4px;background-color:#fff;left:50%;top:50%}.vjs-check-controller .vjs-check-controller-original{opacity:0;outline:none;position:absolute;z-index:-1;inset:0;margin:0}.vjs-carets{position:absolute;right:0;cursor:pointer}.vjs-carets svg{transition:transform .3s}.vjs-carets:hover{color:#1890ff}.vjs-carets-close{transform:rotate(-90deg)}.vjs-tree-node{display:flex;position:relative;line-height:20px}.vjs-tree-node.has-carets{padding-left:15px}.vjs-tree-node.has-carets.has-selector,.vjs-tree-node.has-selector{padding-left:30px}.vjs-tree-node.is-highlight,.vjs-tree-node:hover{background-color:#e6f7ff;border-radius:4px}.vjs-tree-node.is-highlight .vjs-tree-node-actions,.vjs-tree-node:hover .vjs-tree-node-actions{display:block}.vjs-tree-node .vjs-indent{display:flex;position:relative}.vjs-tree-node .vjs-indent-unit.has-line{border-left:1px dashed #bfcbd9}.vjs-tree-node .vjs-tree-node-actions{display:none;position:absolute;right:0;top:0;padding:0 4px;background-color:#e6f7ff;border-radius:4px}.vjs-tree-node .vjs-tree-node-actions .vjs-tree-node-actions-item{cursor:pointer}.vjs-tree-node .vjs-tree-node-actions .vjs-tree-node-actions-item:hover{color:#1890ff}.vjs-tree-node.dark.is-highlight,.vjs-tree-node.dark .vjs-tree-node-actions,.vjs-tree-node.dark:hover{background-color:#2e4558}.vjs-node-index{position:absolute;right:100%;margin-right:4px;user-select:none}.vjs-colon{white-space:pre}.vjs-comment{color:#bfcbd9}.vjs-key{white-space:nowrap}.vjs-value{word-break:break-word}.vjs-tree-node.dynamic-height .vjs-value{white-space:pre-wrap}.vjs-value-null,.vjs-value-undefined{color:#d55fde}.vjs-value-boolean,.vjs-value-number{color:#1d8ce0}.vjs-value-string{color:#13ce66}.vjs-tree{font-family:Monaco,Menlo,Consolas,Bitstream Vera Sans Mono,monospace;font-size:14px;text-align:left}.vjs-tree.is-virtual{overflow:auto}.vjs-tree.is-virtual .vjs-tree-node{white-space:nowrap}\n";})();
import * as Q from "vue";
import { defineComponent as xe, ref as re, shallowRef as Ae, watch as se, createElementBlock as ne, openBlock as Z, createVNode as W, unref as A, createElementVNode as De, toDisplayString as Ie, inject as Be, computed as Ge, Fragment as ce, createBlock as pe } from "vue";
import { useTranslation as Ve, useTemporaryStore as He } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { DSelect as _, DCheckbox as me } from "org.eclipse.daanse.board.app.ui.vue.controls";
import { OgcFeatureComposer as ye } from "org.eclipse.daanse.board.app.lib.composer.ogc";
import { identifier as Me } from "org.eclipse.daanse.board.app.lib.repository.datasource";
import { DATASOURCE_REPOSITORY as je } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { component as Re } from "@eclipse-daanse/tsm";
var Ke = { 207: (e, n, r) => {
  e.exports = r(452);
}, 452: (e) => {
  var n = (function(r) {
    var a, C = Object.prototype, w = C.hasOwnProperty, V = typeof Symbol == "function" ? Symbol : {}, d = V.iterator || "@@iterator", y = V.asyncIterator || "@@asyncIterator", p = V.toStringTag || "@@toStringTag";
    function F(t, o, c) {
      return Object.defineProperty(t, o, { value: c, enumerable: !0, configurable: !0, writable: !0 }), t[o];
    }
    try {
      F({}, "");
    } catch {
      F = function(o, c, h) {
        return o[c] = h;
      };
    }
    function B(t, o, c, h) {
      var u = o && o.prototype instanceof K ? o : K, b = Object.create(u.prototype), O = new s(h || []);
      return b._invoke = /* @__PURE__ */ (function(x, T, f) {
        var S = z;
        return function(E, ee) {
          if (S === H) throw new Error("Generator is already running");
          if (S === P) {
            if (E === "throw") throw ee;
            return v();
          }
          for (f.method = E, f.arg = ee; ; ) {
            var ae = f.delegate;
            if (ae) {
              var le = $(ae, f);
              if (le) {
                if (le === j) continue;
                return le;
              }
            }
            if (f.method === "next") f.sent = f._sent = f.arg;
            else if (f.method === "throw") {
              if (S === z) throw S = P, f.arg;
              f.dispatchException(f.arg);
            } else f.method === "return" && f.abrupt("return", f.arg);
            S = H;
            var te = R(x, T, f);
            if (te.type === "normal") {
              if (S = f.done ? P : U, te.arg === j) continue;
              return { value: te.arg, done: f.done };
            }
            te.type === "throw" && (S = P, f.method = "throw", f.arg = te.arg);
          }
        };
      })(t, c, O), b;
    }
    function R(t, o, c) {
      try {
        return { type: "normal", arg: t.call(o, c) };
      } catch (h) {
        return { type: "throw", arg: h };
      }
    }
    r.wrap = B;
    var z = "suspendedStart", U = "suspendedYield", H = "executing", P = "completed", j = {};
    function K() {
    }
    function q() {
    }
    function G() {
    }
    var J = {};
    F(J, d, (function() {
      return this;
    }));
    var N = Object.getPrototypeOf, g = N && N(N(m([])));
    g && g !== C && w.call(g, d) && (J = g);
    var k = G.prototype = K.prototype = Object.create(J);
    function I(t) {
      ["next", "throw", "return"].forEach((function(o) {
        F(t, o, (function(c) {
          return this._invoke(o, c);
        }));
      }));
    }
    function L(t, o) {
      function c(u, b, O, x) {
        var T = R(t[u], t, b);
        if (T.type !== "throw") {
          var f = T.arg, S = f.value;
          return S && typeof S == "object" && w.call(S, "__await") ? o.resolve(S.__await).then((function(E) {
            c("next", E, O, x);
          }), (function(E) {
            c("throw", E, O, x);
          })) : o.resolve(S).then((function(E) {
            f.value = E, O(f);
          }), (function(E) {
            return c("throw", E, O, x);
          }));
        }
        x(T.arg);
      }
      var h;
      this._invoke = function(u, b) {
        function O() {
          return new o((function(x, T) {
            c(u, b, x, T);
          }));
        }
        return h = h ? h.then(O, O) : O();
      };
    }
    function $(t, o) {
      var c = t.iterator[o.method];
      if (c === a) {
        if (o.delegate = null, o.method === "throw") {
          if (t.iterator.return && (o.method = "return", o.arg = a, $(t, o), o.method === "throw")) return j;
          o.method = "throw", o.arg = new TypeError("The iterator does not provide a 'throw' method");
        }
        return j;
      }
      var h = R(c, t.iterator, o.arg);
      if (h.type === "throw") return o.method = "throw", o.arg = h.arg, o.delegate = null, j;
      var u = h.arg;
      return u ? u.done ? (o[t.resultName] = u.value, o.next = t.nextLoc, o.method !== "return" && (o.method = "next", o.arg = a), o.delegate = null, j) : u : (o.method = "throw", o.arg = new TypeError("iterator result is not an object"), o.delegate = null, j);
    }
    function D(t) {
      var o = { tryLoc: t[0] };
      1 in t && (o.catchLoc = t[1]), 2 in t && (o.finallyLoc = t[2], o.afterLoc = t[3]), this.tryEntries.push(o);
    }
    function i(t) {
      var o = t.completion || {};
      o.type = "normal", delete o.arg, t.completion = o;
    }
    function s(t) {
      this.tryEntries = [{ tryLoc: "root" }], t.forEach(D, this), this.reset(!0);
    }
    function m(t) {
      if (t) {
        var o = t[d];
        if (o) return o.call(t);
        if (typeof t.next == "function") return t;
        if (!isNaN(t.length)) {
          var c = -1, h = function u() {
            for (; ++c < t.length; ) if (w.call(t, c)) return u.value = t[c], u.done = !1, u;
            return u.value = a, u.done = !0, u;
          };
          return h.next = h;
        }
      }
      return { next: v };
    }
    function v() {
      return { value: a, done: !0 };
    }
    return q.prototype = G, F(k, "constructor", G), F(G, "constructor", q), q.displayName = F(G, p, "GeneratorFunction"), r.isGeneratorFunction = function(t) {
      var o = typeof t == "function" && t.constructor;
      return !!o && (o === q || (o.displayName || o.name) === "GeneratorFunction");
    }, r.mark = function(t) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(t, G) : (t.__proto__ = G, F(t, p, "GeneratorFunction")), t.prototype = Object.create(k), t;
    }, r.awrap = function(t) {
      return { __await: t };
    }, I(L.prototype), F(L.prototype, y, (function() {
      return this;
    })), r.AsyncIterator = L, r.async = function(t, o, c, h, u) {
      u === void 0 && (u = Promise);
      var b = new L(B(t, o, c, h), u);
      return r.isGeneratorFunction(o) ? b : b.next().then((function(O) {
        return O.done ? O.value : b.next();
      }));
    }, I(k), F(k, p, "Generator"), F(k, d, (function() {
      return this;
    })), F(k, "toString", (function() {
      return "[object Generator]";
    })), r.keys = function(t) {
      var o = [];
      for (var c in t) o.push(c);
      return o.reverse(), function h() {
        for (; o.length; ) {
          var u = o.pop();
          if (u in t) return h.value = u, h.done = !1, h;
        }
        return h.done = !0, h;
      };
    }, r.values = m, s.prototype = { constructor: s, reset: function(t) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = a, this.done = !1, this.delegate = null, this.method = "next", this.arg = a, this.tryEntries.forEach(i), !t) for (var o in this) o.charAt(0) === "t" && w.call(this, o) && !isNaN(+o.slice(1)) && (this[o] = a);
    }, stop: function() {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if (t.type === "throw") throw t.arg;
      return this.rval;
    }, dispatchException: function(t) {
      if (this.done) throw t;
      var o = this;
      function c(T, f) {
        return b.type = "throw", b.arg = t, o.next = T, f && (o.method = "next", o.arg = a), !!f;
      }
      for (var h = this.tryEntries.length - 1; h >= 0; --h) {
        var u = this.tryEntries[h], b = u.completion;
        if (u.tryLoc === "root") return c("end");
        if (u.tryLoc <= this.prev) {
          var O = w.call(u, "catchLoc"), x = w.call(u, "finallyLoc");
          if (O && x) {
            if (this.prev < u.catchLoc) return c(u.catchLoc, !0);
            if (this.prev < u.finallyLoc) return c(u.finallyLoc);
          } else if (O) {
            if (this.prev < u.catchLoc) return c(u.catchLoc, !0);
          } else {
            if (!x) throw new Error("try statement without catch or finally");
            if (this.prev < u.finallyLoc) return c(u.finallyLoc);
          }
        }
      }
    }, abrupt: function(t, o) {
      for (var c = this.tryEntries.length - 1; c >= 0; --c) {
        var h = this.tryEntries[c];
        if (h.tryLoc <= this.prev && w.call(h, "finallyLoc") && this.prev < h.finallyLoc) {
          var u = h;
          break;
        }
      }
      u && (t === "break" || t === "continue") && u.tryLoc <= o && o <= u.finallyLoc && (u = null);
      var b = u ? u.completion : {};
      return b.type = t, b.arg = o, u ? (this.method = "next", this.next = u.finallyLoc, j) : this.complete(b);
    }, complete: function(t, o) {
      if (t.type === "throw") throw t.arg;
      return t.type === "break" || t.type === "continue" ? this.next = t.arg : t.type === "return" ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : t.type === "normal" && o && (this.next = o), j;
    }, finish: function(t) {
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var c = this.tryEntries[o];
        if (c.finallyLoc === t) return this.complete(c.completion, c.afterLoc), i(c), j;
      }
    }, catch: function(t) {
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var c = this.tryEntries[o];
        if (c.tryLoc === t) {
          var h = c.completion;
          if (h.type === "throw") {
            var u = h.arg;
            i(c);
          }
          return u;
        }
      }
      throw new Error("illegal catch attempt");
    }, delegateYield: function(t, o, c) {
      return this.delegate = { iterator: m(t), resultName: o, nextLoc: c }, this.method === "next" && (this.arg = a), j;
    } }, r;
  })(e.exports);
  try {
    regeneratorRuntime = n;
  } catch {
    typeof globalThis == "object" ? globalThis.regeneratorRuntime = n : Function("r", "regeneratorRuntime = r")(n);
  }
} }, ge = {};
function Y(e) {
  var n = ge[e];
  if (n !== void 0) return n.exports;
  var r = ge[e] = { exports: {} };
  return Ke[e](r, r.exports, Y), r.exports;
}
Y.n = (e) => {
  var n = e && e.__esModule ? () => e.default : () => e;
  return Y.d(n, { a: n }), n;
}, Y.d = (e, n) => {
  for (var r in n) Y.o(n, r) && !Y.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: n[r] });
}, Y.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n);
var Fe = {};
function de(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var r = 0, a = new Array(n); r < n; r++) a[r] = e[r];
  return a;
}
function Pe(e, n) {
  if (e) {
    if (typeof e == "string") return de(e, n);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? de(e, n) : void 0;
  }
}
function ie(e) {
  return (function(n) {
    if (Array.isArray(n)) return de(n);
  })(e) || (function(n) {
    if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null) return Array.from(n);
  })(e) || Pe(e) || (function() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  })();
}
function oe(e, n, r) {
  return n in e ? Object.defineProperty(e, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = r, e;
}
Y.d(Fe, { A: () => ze });
const l = (ve = { Fragment: () => Q.Fragment, computed: () => Q.computed, createTextVNode: () => Q.createTextVNode, createVNode: () => Q.createVNode, defineComponent: () => Q.defineComponent, nextTick: () => Q.nextTick, reactive: () => Q.reactive, ref: () => Q.ref, watch: () => Q.watch, watchEffect: () => Q.watchEffect }, ue = {}, Y.d(ue, ve), ue), Ye = (0, l.defineComponent)({ props: { data: { required: !0, type: String }, onClick: Function }, render: function() {
  var e = this.data, n = this.onClick;
  return (0, l.createVNode)("span", { class: "vjs-tree-brackets", onClick: n }, [e]);
} }), Ue = (0, l.defineComponent)({ emits: ["change", "update:modelValue"], props: { checked: { type: Boolean, default: !1 }, isMultiple: Boolean, onChange: Function }, setup: function(e, n) {
  var r = n.emit;
  return { uiType: (0, l.computed)((function() {
    return e.isMultiple ? "checkbox" : "radio";
  })), model: (0, l.computed)({ get: function() {
    return e.checked;
  }, set: function(a) {
    return r("update:modelValue", a);
  } }) };
}, render: function() {
  var e = this.uiType, n = this.model, r = this.$emit;
  return (0, l.createVNode)("label", { class: ["vjs-check-controller", n ? "is-checked" : ""], onClick: function(a) {
    return a.stopPropagation();
  } }, [(0, l.createVNode)("span", { class: "vjs-check-controller-inner is-".concat(e) }, null), (0, l.createVNode)("input", { checked: n, class: "vjs-check-controller-original is-".concat(e), type: e, onChange: function() {
    return r("change", n);
  } }, null)]);
} }), qe = (0, l.defineComponent)({ props: { nodeType: { required: !0, type: String }, onClick: Function }, render: function() {
  var e = this.nodeType, n = this.onClick, r = e === "objectStart" || e === "arrayStart";
  return r || e === "objectCollapsed" || e === "arrayCollapsed" ? (0, l.createVNode)("span", { class: "vjs-carets vjs-carets-".concat(r ? "open" : "close"), onClick: n }, [(0, l.createVNode)("svg", { viewBox: "0 0 1024 1024", focusable: "false", "data-icon": "caret-down", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true" }, [(0, l.createVNode)("path", { d: "M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z" }, null)])]) : null;
} });
var ve, ue;
function fe(e) {
  return fe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, fe(e);
}
function Te(e) {
  return Object.prototype.toString.call(e).slice(8, -1).toLowerCase();
}
function X(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "root", r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, a = (arguments.length > 3 ? arguments[3] : void 0) || {}, C = a.key, w = a.index, V = a.type, d = V === void 0 ? "content" : V, y = a.showComma, p = y !== void 0 && y, F = a.length, B = F === void 0 ? 1 : F, R = Te(e);
  if (R === "array") {
    var z = be(e.map((function(P, j, K) {
      return X(P, "".concat(n, "[").concat(j, "]"), r + 1, { index: j, showComma: j !== K.length - 1, length: B, type: d });
    })));
    return [X("[", n, r, { showComma: !1, key: C, length: e.length, type: "arrayStart" })[0]].concat(z, X("]", n, r, { showComma: p, length: e.length, type: "arrayEnd" })[0]);
  }
  if (R === "object") {
    var U = Object.keys(e), H = be(U.map((function(P, j, K) {
      return X(e[P], /^[a-zA-Z_]\w*$/.test(P) ? "".concat(n, ".").concat(P) : "".concat(n, '["').concat(P, '"]'), r + 1, { key: P, showComma: j !== K.length - 1, length: B, type: d });
    })));
    return [X("{", n, r, { showComma: !1, key: C, index: w, length: U.length, type: "objectStart" })[0]].concat(H, X("}", n, r, { showComma: p, length: U.length, type: "objectEnd" })[0]);
  }
  return [{ content: e, level: r, key: C, index: w, path: n, showComma: p, length: B, type: d }];
}
function be(e) {
  if (typeof Array.prototype.flat == "function") return e.flat();
  for (var n = ie(e), r = []; n.length; ) {
    var a = n.shift();
    Array.isArray(a) ? n.unshift.apply(n, ie(a)) : r.push(a);
  }
  return r;
}
function he(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : /* @__PURE__ */ new WeakMap();
  if (e == null) return e;
  if (e instanceof Date) return new Date(e);
  if (e instanceof RegExp) return new RegExp(e);
  if (fe(e) !== "object") return e;
  if (n.get(e)) return n.get(e);
  if (Array.isArray(e)) {
    var r = e.map((function(w) {
      return he(w, n);
    }));
    return n.set(e, r), r;
  }
  var a = {};
  for (var C in e) a[C] = he(e[C], n);
  return n.set(e, a), a;
}
function we(e, n, r, a, C, w, V) {
  try {
    var d = e[w](V), y = d.value;
  } catch (p) {
    return void r(p);
  }
  d.done ? n(y) : Promise.resolve(y).then(a, C);
}
var $e = Y(207), Ce = Y.n($e);
function ke(e, n) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    n && (a = a.filter((function(C) {
      return Object.getOwnPropertyDescriptor(e, C).enumerable;
    }))), r.push.apply(r, a);
  }
  return r;
}
function Ne(e) {
  for (var n = 1; n < arguments.length; n++) {
    var r = arguments[n] != null ? arguments[n] : {};
    n % 2 ? ke(Object(r), !0).forEach((function(a) {
      oe(e, a, r[a]);
    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ke(Object(r)).forEach((function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
    }));
  }
  return e;
}
var Le = { data: { type: [String, Number, Boolean, Array, Object], default: null }, rootPath: { type: String, default: "root" }, indent: { type: Number, default: 2 }, showLength: { type: Boolean, default: !1 }, showDoubleQuotes: { type: Boolean, default: !0 }, renderNodeKey: Function, renderNodeValue: Function, renderNodeActions: { type: [Boolean, Function], default: void 0 }, selectableType: String, showSelectController: { type: Boolean, default: !1 }, showLine: { type: Boolean, default: !0 }, showLineNumber: { type: Boolean, default: !1 }, selectOnClickNode: { type: Boolean, default: !0 }, nodeSelectable: { type: Function, default: function() {
  return !0;
} }, highlightSelectedNode: { type: Boolean, default: !0 }, showIcon: { type: Boolean, default: !1 }, theme: { type: String, default: "light" }, showKeyValueSpace: { type: Boolean, default: !0 }, editable: { type: Boolean, default: !1 }, editableTrigger: { type: String, default: "click" }, onNodeClick: { type: Function }, onNodeMouseover: { type: Function }, onBracketsClick: { type: Function }, onIconClick: { type: Function }, onValueChange: { type: Function } };
const Qe = (0, l.defineComponent)({ name: "TreeNode", props: Ne(Ne({}, Le), {}, { node: { type: Object, required: !0 }, collapsed: Boolean, checked: Boolean, style: Object, onSelectedChange: { type: Function } }), emits: ["nodeClick", "nodeMouseover", "bracketsClick", "iconClick", "selectedChange", "valueChange"], setup: function(e, n) {
  var r = n.emit, a = (0, l.computed)((function() {
    return Te(e.node.content);
  })), C = (0, l.computed)((function() {
    return "vjs-value vjs-value-".concat(a.value);
  })), w = (0, l.computed)((function() {
    return e.showDoubleQuotes ? '"'.concat(e.node.key, '"') : e.node.key;
  })), V = (0, l.computed)((function() {
    return e.selectableType === "multiple";
  })), d = (0, l.computed)((function() {
    return e.selectableType === "single";
  })), y = (0, l.computed)((function() {
    return e.nodeSelectable(e.node) && (V.value || d.value);
  })), p = (0, l.reactive)({ editing: !1 }), F = function(N) {
    var g, k, I = (k = (g = N.target) === null || g === void 0 ? void 0 : g.value) === "null" ? null : k === "undefined" ? void 0 : k === "true" || k !== "false" && (k[0] + k[k.length - 1] === '""' || k[0] + k[k.length - 1] === "''" ? k.slice(1, -1) : typeof Number(k) == "number" && !isNaN(Number(k)) || k === "NaN" ? Number(k) : k);
    r("valueChange", I, e.node.path);
  }, B = (0, l.computed)((function() {
    var N, g = (N = e.node) === null || N === void 0 ? void 0 : N.content;
    return g === null ? g = "null" : g === void 0 && (g = "undefined"), a.value === "string" ? '"'.concat(g, '"') : g + "";
  })), R = function() {
    var N = e.renderNodeValue;
    return N ? N({ node: e.node, defaultValue: B.value }) : B.value;
  }, z = function() {
    r("bracketsClick", !e.collapsed, e.node);
  }, U = function() {
    r("iconClick", !e.collapsed, e.node);
  }, H = function() {
    r("selectedChange", e.node);
  }, P = function() {
    r("nodeClick", e.node), y.value && e.selectOnClickNode && r("selectedChange", e.node);
  }, j = function() {
    r("nodeMouseover", e.node);
  }, K = function(N) {
    if (e.editable && !p.editing) {
      p.editing = !0;
      var g = function k(I) {
        var L;
        I.target !== N.target && ((L = I.target) === null || L === void 0 ? void 0 : L.parentElement) !== N.target && (p.editing = !1, document.removeEventListener("click", k));
      };
      document.removeEventListener("click", g), document.addEventListener("click", g);
    }
  }, q = (function() {
    var N = (0, l.ref)(!1), g = (function() {
      var k, I = (k = Ce().mark((function L($) {
        return Ce().wrap((function(D) {
          for (; ; ) switch (D.prev = D.next) {
            case 0:
              return D.prev = 0, D.next = 3, navigator.clipboard.writeText($);
            case 3:
              N.value = !0, setTimeout((function() {
                N.value = !1;
              }), 300), D.next = 10;
              break;
            case 7:
              D.prev = 7, D.t0 = D.catch(0), console.error("[vue-json-pretty] Copy failed: ", D.t0);
            case 10:
            case "end":
              return D.stop();
          }
        }), L, null, [[0, 7]]);
      })), function() {
        var L = this, $ = arguments;
        return new Promise((function(D, i) {
          var s = k.apply(L, $);
          function m(t) {
            we(s, D, i, m, v, "next", t);
          }
          function v(t) {
            we(s, D, i, m, v, "throw", t);
          }
          m(void 0);
        }));
      });
      return function(L) {
        return I.apply(this, arguments);
      };
    })();
    return { copy: g };
  })().copy, G = function() {
    var N = e.node, g = N.key, k = N.path, I = e.rootPath, L = new Function("data", "return data".concat(k.slice(I.length)))(e.data), $ = JSON.stringify(g ? oe({}, g, L) : L, null, 2);
    q($);
  }, J = function() {
    var N = e.renderNodeActions;
    if (!N) return null;
    var g = { copy: G };
    return typeof N == "function" ? N({ node: e.node, defaultActions: g }) : (0, l.createVNode)("span", { onClick: G, class: "vjs-tree-node-actions-item" }, [(0, l.createTextVNode)("copy")]);
  };
  return function() {
    var N, g = e.node;
    return (0, l.createVNode)("div", { class: { "vjs-tree-node": !0, "has-selector": e.showSelectController, "has-carets": e.showIcon, "is-highlight": e.highlightSelectedNode && e.checked, dark: e.theme === "dark" }, onClick: P, onMouseover: j, style: e.style }, [e.showLineNumber && (0, l.createVNode)("span", { class: "vjs-node-index" }, [g.id + 1]), e.showSelectController && y.value && g.type !== "objectEnd" && g.type !== "arrayEnd" && (0, l.createVNode)(Ue, { isMultiple: V.value, checked: e.checked, onChange: H }, null), (0, l.createVNode)("div", { class: "vjs-indent" }, [Array.from(Array(g.level)).map((function(k, I) {
      return (0, l.createVNode)("div", { key: I, class: { "vjs-indent-unit": !0, "has-line": e.showLine } }, [Array.from(Array(e.indent)).map((function() {
        return (0, l.createVNode)(l.Fragment, null, [(0, l.createTextVNode)(" ")]);
      }))]);
    })), e.showIcon && (0, l.createVNode)(qe, { nodeType: g.type, onClick: U }, null)]), g.key && (0, l.createVNode)("span", { class: "vjs-key" }, [(N = e.renderNodeKey, N ? N({ node: e.node, defaultKey: w.value || "" }) : w.value), (0, l.createVNode)("span", { class: "vjs-colon" }, [":".concat(e.showKeyValueSpace ? " " : "")])]), (0, l.createVNode)("span", null, [g.type !== "content" && g.content ? (0, l.createVNode)(Ye, { data: g.content.toString(), onClick: z }, null) : (0, l.createVNode)("span", { class: C.value, onClick: !e.editable || e.editableTrigger && e.editableTrigger !== "click" ? void 0 : K, onDblclick: e.editable && e.editableTrigger === "dblclick" ? K : void 0 }, [e.editable && p.editing ? (0, l.createVNode)("input", { value: B.value, onChange: F, style: { padding: "3px 8px", border: "1px solid #eee", boxShadow: "none", boxSizing: "border-box", borderRadius: 5, fontFamily: "inherit" } }, null) : R()]), g.showComma && (0, l.createVNode)("span", null, [","]), e.showLength && e.collapsed && (0, l.createVNode)("span", { class: "vjs-comment" }, [(0, l.createTextVNode)(" // "), g.length, (0, l.createTextVNode)(" items ")])]), e.renderNodeActions && (0, l.createVNode)("span", { class: "vjs-tree-node-actions" }, [J()])]);
  };
} });
function Oe(e, n) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    n && (a = a.filter((function(C) {
      return Object.getOwnPropertyDescriptor(e, C).enumerable;
    }))), r.push.apply(r, a);
  }
  return r;
}
function M(e) {
  for (var n = 1; n < arguments.length; n++) {
    var r = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Oe(Object(r), !0).forEach((function(a) {
      oe(e, a, r[a]);
    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Oe(Object(r)).forEach((function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
    }));
  }
  return e;
}
const ze = (0, l.defineComponent)({ name: "Tree", props: M(M({}, Le), {}, { collapsedNodeLength: { type: Number, default: 1 / 0 }, deep: { type: Number, default: 1 / 0 }, pathCollapsible: { type: Function, default: function() {
  return !1;
} }, virtual: { type: Boolean, default: !1 }, height: { type: Number, default: 400 }, itemHeight: { type: Number, default: 20 }, dynamicHeight: { type: Boolean, default: !0 }, selectedValue: { type: [String, Array], default: function() {
  return "";
} }, collapsedOnClickBrackets: { type: Boolean, default: !0 }, style: Object, onSelectedChange: { type: Function }, theme: { type: String, default: "light" } }), slots: ["renderNodeKey", "renderNodeValue", "renderNodeActions"], emits: ["nodeClick", "nodeMouseover", "bracketsClick", "iconClick", "selectedChange", "update:selectedValue", "update:data"], setup: function(e, n) {
  var r = n.emit, a = n.slots, C = (0, l.ref)(), w = (0, l.computed)((function() {
    return X(e.data, e.rootPath);
  })), V = function(i, s) {
    return w.value.reduce((function(m, v) {
      var t, o = v.level >= i || v.length >= s, c = (t = e.pathCollapsible) === null || t === void 0 ? void 0 : t.call(e, v);
      return v.type !== "objectStart" && v.type !== "arrayStart" || !o && !c ? m : M(M({}, m), {}, oe({}, v.path, 1));
    }), {});
  }, d = (0, l.reactive)({ translateY: 0, visibleData: null, hiddenPaths: V(e.deep, e.collapsedNodeLength), startIndex: 0, endIndex: 0 }), y = [], p = [], F = 0, B = {}, R = function(i) {
    y = Array(i).fill(0).map((function() {
      return e.itemHeight || 20;
    })), (p = new Array(i + 1))[0] = 0;
    for (var s = 0; s < i; s++) p[s + 1] = p[s] + y[s];
    F = p[i] || 0;
  }, z = function(i) {
    var s = y.length;
    i < 0 && (i = 0), i > s && (i = s);
    for (var m = i; m < s; m++) p[m + 1] = p[m] + y[m];
    F = p[s] || 0;
  }, U = function(i, s) {
    for (var m = 0, v = i.length - 1; m < v; ) {
      var t = m + v >>> 1;
      i[t] < s ? m = t + 1 : v = t;
    }
    return m;
  }, H = (0, l.computed)((function() {
    for (var i = null, s = [], m = w.value.length, v = 0; v < m; v++) {
      var t = M(M({}, w.value[v]), {}, { id: v }), o = d.hiddenPaths[t.path];
      if (i && i.path === t.path) {
        var c = i.type === "objectStart", h = M(M(M({}, t), i), {}, { showComma: t.showComma, content: c ? "{...}" : "[...]", type: c ? "objectCollapsed" : "arrayCollapsed" });
        i = null, s.push(h);
      } else {
        if (o && !i) {
          i = t;
          continue;
        }
        if (i) continue;
        s.push(t);
      }
    }
    return s;
  })), P = (0, l.computed)((function() {
    var i = e.selectedValue;
    return i && e.selectableType === "multiple" && Array.isArray(i) ? i : [i];
  })), j = (0, l.computed)((function() {
    return !e.selectableType || e.selectOnClickNode || e.showSelectController ? "" : "When selectableType is not null, selectOnClickNode and showSelectController cannot be false at the same time, because this will cause the selection to fail.";
  })), K = (0, l.computed)((function() {
    return e.dynamicHeight ? F || 0 : H.value.length * e.itemHeight;
  })), q = function i() {
    var s = H.value;
    if (s) if (e.virtual) {
      var m, v = ((m = C.value) === null || m === void 0 ? void 0 : m.scrollTop) || 0;
      if (e.dynamicHeight) {
        y.length !== s.length && R(s.length);
        var t = (function(T) {
          var f = U(p, T + 1e-4);
          return Math.max(0, Math.min(f - 1, y.length - 1));
        })(v), o = (function(T, f) {
          var S = U(p, T + f);
          return Math.max(0, Math.min(S + 1, y.length));
        })(v, e.height), c = Math.max(0, t - 5), h = Math.min(s.length, o + 5);
        d.startIndex = c, d.endIndex = h, d.translateY = p[c] || 0, d.visibleData = s.slice(c, h), (0, l.nextTick)().then((function() {
          for (var T = !1, f = d.startIndex; f < d.endIndex; f++) {
            var S = B[f];
            if (S) {
              var E = S.offsetHeight;
              E && y[f] !== E && (y[f] = E, p[f + 1] = p[f] + y[f], z(f + 1), T = !0);
            }
          }
          T && i();
        }));
      } else {
        var u = e.height / e.itemHeight, b = Math.floor(v / e.itemHeight), O = b < 0 ? 0 : b + u > s.length ? s.length - u : b;
        O < 0 && (O = 0);
        var x = O + u;
        d.translateY = O * e.itemHeight, d.startIndex = O, d.endIndex = x, d.visibleData = s.slice(O, x);
      }
    } else d.translateY = 0, d.startIndex = 0, d.endIndex = s.length, d.visibleData = s;
  }, G = null, J = function() {
    G && cancelAnimationFrame(G), G = requestAnimationFrame((function() {
      q();
    }));
  }, N = function(i) {
    var s, m, v = i.path, t = e.selectableType;
    if (t === "multiple") {
      var o = P.value.findIndex((function(b) {
        return b === v;
      })), c = ie(P.value);
      o !== -1 ? c.splice(o, 1) : c.push(v), r("update:selectedValue", c), r("selectedChange", c, ie(P.value));
    } else if (t === "single" && P.value[0] !== v) {
      var h = (s = P.value, m = 1, (function(b) {
        if (Array.isArray(b)) return b;
      })(s) || (function(b, O) {
        var x = b == null ? null : typeof Symbol < "u" && b[Symbol.iterator] || b["@@iterator"];
        if (x != null) {
          var T, f, S = [], E = !0, ee = !1;
          try {
            for (x = x.call(b); !(E = (T = x.next()).done) && (S.push(T.value), !O || S.length !== O); E = !0) ;
          } catch (ae) {
            ee = !0, f = ae;
          } finally {
            try {
              E || x.return == null || x.return();
            } finally {
              if (ee) throw f;
            }
          }
          return S;
        }
      })(s, m) || Pe(s, m) || (function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      })())[0], u = v;
      r("update:selectedValue", u), r("selectedChange", u, h);
    }
  }, g = function(i) {
    r("nodeClick", i);
  }, k = function(i) {
    r("nodeMouseover", i);
  }, I = function(i, s) {
    if (i) d.hiddenPaths = M(M({}, d.hiddenPaths), {}, oe({}, s, 1));
    else {
      var m = M({}, d.hiddenPaths);
      delete m[s], d.hiddenPaths = m;
    }
  }, L = function(i, s) {
    e.collapsedOnClickBrackets && I(i, s.path), r("bracketsClick", i, s);
  }, $ = function(i, s) {
    I(i, s.path), r("iconClick", i, s);
  }, D = function(i, s) {
    var m = he(e.data), v = e.rootPath;
    new Function("data", "val", "data".concat(s.slice(v.length), "=val"))(m, i), r("update:data", m);
  };
  return (0, l.watchEffect)((function() {
    j.value && (function(i) {
      throw new Error("[VueJSONPretty] ".concat(i));
    })(j.value);
  })), (0, l.watchEffect)((function() {
    H.value && (e.virtual && e.dynamicHeight && y.length !== H.value.length && R(H.value.length), q());
  })), (0, l.watch)((function() {
    return [e.dynamicHeight, e.itemHeight, w.value.length];
  }), (function() {
    e.virtual && e.dynamicHeight && (R(H.value.length), (0, l.nextTick)(q));
  })), (0, l.watch)((function() {
    return e.deep;
  }), (function(i) {
    i && (d.hiddenPaths = V(i, e.collapsedNodeLength));
  })), (0, l.watch)((function() {
    return e.collapsedNodeLength;
  }), (function(i) {
    i && (d.hiddenPaths = V(e.deep, i));
  })), function() {
    var i, s, m, v, t, o = (i = e.renderNodeKey) !== null && i !== void 0 ? i : a.renderNodeKey, c = (s = e.renderNodeValue) !== null && s !== void 0 ? s : a.renderNodeValue, h = (m = (v = e.renderNodeActions) !== null && v !== void 0 ? v : a.renderNodeActions) !== null && m !== void 0 && m, u = (t = d.visibleData) === null || t === void 0 ? void 0 : t.map((function(b, O) {
      var x = d.startIndex + O;
      return (0, l.createVNode)("div", { key: b.id, ref: function(T) {
        return (function(f, S) {
          S ? B[f] = S : delete B[f];
        })(x, T || null);
      } }, [(0, l.createVNode)(Qe, { data: e.data, rootPath: e.rootPath, indent: e.indent, node: b, collapsed: !!d.hiddenPaths[b.path], theme: e.theme, showDoubleQuotes: e.showDoubleQuotes, showLength: e.showLength, checked: P.value.includes(b.path), selectableType: e.selectableType, showLine: e.showLine, showLineNumber: e.showLineNumber, showSelectController: e.showSelectController, selectOnClickNode: e.selectOnClickNode, nodeSelectable: e.nodeSelectable, highlightSelectedNode: e.highlightSelectedNode, editable: e.editable, editableTrigger: e.editableTrigger, showIcon: e.showIcon, showKeyValueSpace: e.showKeyValueSpace, renderNodeKey: o, renderNodeValue: c, renderNodeActions: h, onNodeClick: g, onNodeMouseover: k, onBracketsClick: L, onIconClick: $, onSelectedChange: N, onValueChange: D, class: e.dynamicHeight ? "dynamic-height" : void 0, style: e.dynamicHeight ? {} : e.itemHeight && e.itemHeight !== 20 ? { lineHeight: "".concat(e.itemHeight, "px") } : {} }, null)]);
    }));
    return (0, l.createVNode)("div", { ref: C, class: { "vjs-tree": !0, "is-virtual": e.virtual, dark: e.theme === "dark" }, onScroll: e.virtual ? J : void 0, style: e.showLineNumber ? M({ paddingLeft: "".concat(12 * Number(w.value.length.toString().length), "px") }, e.style) : e.style }, [e.virtual ? (0, l.createVNode)("div", { class: "vjs-tree-list", style: { height: "".concat(e.height, "px") } }, [(0, l.createVNode)("div", { class: "vjs-tree-list-holder", style: { height: "".concat(K.value, "px") } }, [(0, l.createVNode)("div", { class: "vjs-tree-list-holder-inner", style: { transform: "translateY(".concat(d.translateY, "px)") } }, [u])])]) : u]);
  };
} });
var Je = Fe.A;
const We = {
  key: 0,
  class: "grid grid-cols-2 grid-rows-4 gap-4 overflow-auto w-full h-full"
}, Xe = { key: 1 }, Ze = /* @__PURE__ */ xe({
  __name: "Preview",
  props: {
    dataSource: {}
  },
  setup(e) {
    const n = e, { t: r } = Ve("composerOgc"), a = re(null), C = re(null), w = Ae(null), V = re(n.dataSource), { update: d } = He(n.dataSource.type, V, w);
    return se(w, async () => {
      C.value = await w.value.getData("FeatureCollection"), a.value = C.value?.features || [];
    }, { deep: !0 }), se(n.dataSource, () => {
      d();
    }, { deep: !0 }), (y, p) => w.value ? (Z(), ne("div", We, [
      W(A(Je), { data: C.value }, null, 8, ["data"])
    ])) : (Z(), ne("div", Xe, [
      De("h3", null, Ie(A(r)("Ogc.preview")), 1)
    ]));
  }
}), _e = /* @__PURE__ */ xe({
  __name: "Settings",
  props: {
    config: {},
    dataSources: {},
    connections: {}
  },
  setup(e) {
    const n = Be(Me), { t: r } = Ve("composerOgc"), a = Ge(() => e.dataSources.filter((d) => d.type === "csv" || d.type === "xmla")), C = re([]), w = re([]), V = ["Point"];
    return se(() => e.config.connectedDatasources, async (d) => {
      C.value = await ye.getHeaders(
        d,
        n
      ), w.value = await ye.getProperties(
        d,
        n
      );
    }), (d, y) => (Z(), ne(ce, null, [
      W(A(_), {
        modelValue: e.config.connectedDatasources,
        "onUpdate:modelValue": y[0] || (y[0] = (p) => e.config.connectedDatasources = p),
        label: A(r)("Settings.sources"),
        options: a.value,
        multiple: "",
        "label-key": "name",
        "value-key": "uid"
      }, null, 8, ["modelValue", "label", "options"]),
      W(A(me), {
        modelValue: e.config.useGeometryFromData,
        "onUpdate:modelValue": y[1] || (y[1] = (p) => e.config.useGeometryFromData = p),
        label: A(r)("Ogc.geometryFromData"),
        style: { margin: "0.5rem 0" }
      }, null, 8, ["modelValue", "label"]),
      e.config.useGeometryFromData ? (Z(), ne(ce, { key: 0 }, [
        W(A(me), {
          modelValue: e.config.useGeometryFromProps,
          "onUpdate:modelValue": y[2] || (y[2] = (p) => e.config.useGeometryFromProps = p),
          label: A(r)("Ogc.geometryFromProps"),
          style: { margin: "0.5rem 0" }
        }, null, 8, ["modelValue", "label"]),
        e.config.useGeometryFromProps ? (Z(), pe(A(_), {
          key: 0,
          modelValue: e.config.geometryPropsField,
          "onUpdate:modelValue": y[3] || (y[3] = (p) => e.config.geometryPropsField = p),
          label: A(r)("Ogc.geometryPropsField"),
          options: w.value
        }, null, 8, ["modelValue", "label", "options"])) : (Z(), pe(A(_), {
          key: 1,
          modelValue: e.config.geometryField,
          "onUpdate:modelValue": y[4] || (y[4] = (p) => e.config.geometryField = p),
          label: A(r)("Ogc.geometryField"),
          options: C.value
        }, null, 8, ["modelValue", "label", "options"]))
      ], 64)) : (Z(), ne(ce, { key: 1 }, [
        W(A(_), {
          modelValue: e.config.xField,
          "onUpdate:modelValue": y[5] || (y[5] = (p) => e.config.xField = p),
          label: A(r)("Ogc.xField"),
          options: C.value
        }, null, 8, ["modelValue", "label", "options"]),
        W(A(_), {
          modelValue: e.config.yField,
          "onUpdate:modelValue": y[6] || (y[6] = (p) => e.config.yField = p),
          label: A(r)("Ogc.yField"),
          options: C.value
        }, null, 8, ["modelValue", "label", "options"]),
        W(A(_), {
          modelValue: e.config.geometryType,
          "onUpdate:modelValue": y[7] || (y[7] = (p) => e.config.geometryType = p),
          label: A(r)("Ogc.geometryType"),
          options: V
        }, null, 8, ["modelValue", "label"])
      ], 64))
    ], 64));
  }
}), et = { sources: "Quellen" }, tt = { geometryFromData: "Geometrie aus den Daten", geometryFromProps: "Geometrie aus den Eigenschaften", geometryPropsField: "Feld der Geometrie-Eigenschaft", geometryField: "Feld der Geometrie", xField: "Feld für die X-Koordinate", yField: "Feld für die Y-Koordinate", geometryType: "Art der Geometrie", preview: "Vorschau der OGC Feature Collection" }, rt = {
  Settings: et,
  Ogc: tt
}, nt = { sources: "Sources" }, ot = { geometryFromData: "Geometry from the data", geometryFromProps: "Geometry from the properties", geometryPropsField: "Field of the geometry property", geometryField: "Geometry field", xField: "Field for the X coordinate", yField: "Field for the Y coordinate", geometryType: "Geometry type", preview: "OGC feature collection preview" }, at = {
  Settings: nt,
  Ogc: ot
};
var it = Object.getOwnPropertyDescriptor, lt = (e, n, r, a) => {
  for (var C = a > 1 ? void 0 : a ? it(n, r) : n, w = e.length - 1, V; w >= 0; w--)
    (V = e[w]) && (C = V(C) || C);
  return C;
};
const Ee = "composerOgc";
let Se = class {
  namespace = Ee;
  resources = {
    de: rt,
    en: at
  };
};
Se = lt([
  Re({
    service: ["Translations"],
    properties: { "i18n.namespace": Ee }
  })
], Se);
const ct = Symbol.for("OgcFeatureComposer"), ut = Symbol.for("OgcComposerPreview"), st = Symbol.for("OgcComposerSettings");
function vt({ services: e }) {
  e.register("OgcComposerPreview", Ze), e.register("OgcComposerSettings", _e), e.getRequired(je).registerDatasourceType("OGC Composer", {
    icon: "sensors",
    kind: "composer",
    Store: ct,
    Preview: ut,
    Settings: st
  });
}
function bt({ services: e }) {
  e.getRequired(je).unregisterDatasourceType("OGC Composer"), e.unregister("OgcComposerPreview"), e.unregister("OgcComposerSettings");
}
export {
  Se as ComposerOgcTranslations,
  vt as activate,
  bt as deactivate
};
