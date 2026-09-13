(function(){var i="ui.vue.composer.ogc",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".vjs-tree-brackets{cursor:pointer}.vjs-tree-brackets:hover{color:#1890ff}.vjs-check-controller{position:absolute;left:0}.vjs-check-controller.is-checked .vjs-check-controller-inner{background-color:#1890ff;border-color:#0076e4}.vjs-check-controller.is-checked .vjs-check-controller-inner.is-checkbox:after{transform:rotate(45deg) scaleY(1)}.vjs-check-controller.is-checked .vjs-check-controller-inner.is-radio:after{transform:translate(-50%,-50%) scale(1)}.vjs-check-controller .vjs-check-controller-inner{display:inline-block;position:relative;border:1px solid #bfcbd9;border-radius:2px;vertical-align:middle;box-sizing:border-box;width:16px;height:16px;background-color:#fff;z-index:1;cursor:pointer;transition:border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46)}.vjs-check-controller .vjs-check-controller-inner:after{box-sizing:content-box;content:\"\";border:2px solid #fff;border-left:0;border-top:0;height:8px;left:4px;position:absolute;top:1px;transform:rotate(45deg) scaleY(0);width:4px;transition:transform .15s cubic-bezier(.71,-.46,.88,.6) .05s;transform-origin:center}.vjs-check-controller .vjs-check-controller-inner.is-radio{border-radius:100%}.vjs-check-controller .vjs-check-controller-inner.is-radio:after{border-radius:100%;height:4px;background-color:#fff;left:50%;top:50%}.vjs-check-controller .vjs-check-controller-original{opacity:0;outline:none;position:absolute;z-index:-1;inset:0;margin:0}.vjs-carets{position:absolute;right:0;cursor:pointer}.vjs-carets svg{transition:transform .3s}.vjs-carets:hover{color:#1890ff}.vjs-carets-close{transform:rotate(-90deg)}.vjs-tree-node{display:flex;position:relative;line-height:20px}.vjs-tree-node.has-carets{padding-left:15px}.vjs-tree-node.has-carets.has-selector,.vjs-tree-node.has-selector{padding-left:30px}.vjs-tree-node.is-highlight,.vjs-tree-node:hover{background-color:#e6f7ff;border-radius:4px}.vjs-tree-node.is-highlight .vjs-tree-node-actions,.vjs-tree-node:hover .vjs-tree-node-actions{display:block}.vjs-tree-node .vjs-indent{display:flex;position:relative}.vjs-tree-node .vjs-indent-unit.has-line{border-left:1px dashed #bfcbd9}.vjs-tree-node .vjs-tree-node-actions{display:none;position:absolute;right:0;top:0;padding:0 4px;background-color:#e6f7ff;border-radius:4px}.vjs-tree-node .vjs-tree-node-actions .vjs-tree-node-actions-item{cursor:pointer}.vjs-tree-node .vjs-tree-node-actions .vjs-tree-node-actions-item:hover{color:#1890ff}.vjs-tree-node.dark.is-highlight,.vjs-tree-node.dark .vjs-tree-node-actions,.vjs-tree-node.dark:hover{background-color:#2e4558}.vjs-node-index{position:absolute;right:100%;margin-right:4px;user-select:none}.vjs-colon{white-space:pre}.vjs-comment{color:#bfcbd9}.vjs-key{white-space:nowrap}.vjs-value{word-break:break-word}.vjs-tree-node.dynamic-height .vjs-value{white-space:pre-wrap}.vjs-value-null,.vjs-value-undefined{color:#d55fde}.vjs-value-boolean,.vjs-value-number{color:#1d8ce0}.vjs-value-string{color:#13ce66}.vjs-tree{font-family:Monaco,Menlo,Consolas,Bitstream Vera Sans Mono,monospace;font-size:14px;text-align:left}.vjs-tree.is-virtual{overflow:auto}.vjs-tree.is-virtual .vjs-tree-node{white-space:nowrap}\n";})();
import * as Q from "vue";
import { defineComponent as xe, ref as ne, shallowRef as Fe, watch as se, createElementBlock as re, openBlock as Z, createVNode as W, unref as $, createElementVNode as Te, inject as Ee, computed as Ae, Fragment as ce, createBlock as pe } from "vue";
import { useTemporaryStore as De } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { DSelect as _, DCheckbox as ye } from "org.eclipse.daanse.board.app.ui.vue.controls";
import { OgcFeatureComposer as me } from "org.eclipse.daanse.board.app.lib.composer.ogc";
import { identifier as Ie } from "org.eclipse.daanse.board.app.lib.repository.datasource";
import { DATASOURCE_REPOSITORY as Oe } from "org.eclipse.daanse.board.app.lib.api.datasource";
var Be = { 207: (e, n, r) => {
  e.exports = r(452);
}, 452: (e) => {
  var n = (function(r) {
    var a, k = Object.prototype, N = k.hasOwnProperty, O = typeof Symbol == "function" ? Symbol : {}, s = O.iterator || "@@iterator", p = O.asyncIterator || "@@asyncIterator", S = O.toStringTag || "@@toStringTag";
    function P(t, o, c) {
      return Object.defineProperty(t, o, { value: c, enumerable: !0, configurable: !0, writable: !0 }), t[o];
    }
    try {
      P({}, "");
    } catch {
      P = function(o, c, h) {
        return o[c] = h;
      };
    }
    function I(t, o, c, h) {
      var u = o && o.prototype instanceof R ? o : R, v = Object.create(u.prototype), C = new d(h || []);
      return v._invoke = /* @__PURE__ */ (function(V, F, f) {
        var x = z;
        return function(E, ee) {
          if (x === G) throw new Error("Generator is already running");
          if (x === L) {
            if (E === "throw") throw ee;
            return g();
          }
          for (f.method = E, f.arg = ee; ; ) {
            var ae = f.delegate;
            if (ae) {
              var le = q(ae, f);
              if (le) {
                if (le === j) continue;
                return le;
              }
            }
            if (f.method === "next") f.sent = f._sent = f.arg;
            else if (f.method === "throw") {
              if (x === z) throw x = L, f.arg;
              f.dispatchException(f.arg);
            } else f.method === "return" && f.abrupt("return", f.arg);
            x = G;
            var te = M(V, F, f);
            if (te.type === "normal") {
              if (x = f.done ? L : U, te.arg === j) continue;
              return { value: te.arg, done: f.done };
            }
            te.type === "throw" && (x = L, f.method = "throw", f.arg = te.arg);
          }
        };
      })(t, c, C), v;
    }
    function M(t, o, c) {
      try {
        return { type: "normal", arg: t.call(o, c) };
      } catch (h) {
        return { type: "throw", arg: h };
      }
    }
    r.wrap = I;
    var z = "suspendedStart", U = "suspendedYield", G = "executing", L = "completed", j = {};
    function R() {
    }
    function Y() {
    }
    function B() {
    }
    var J = {};
    P(J, s, (function() {
      return this;
    }));
    var w = Object.getPrototypeOf, m = w && w(w(y([])));
    m && m !== k && N.call(m, s) && (J = m);
    var b = B.prototype = R.prototype = Object.create(J);
    function D(t) {
      ["next", "throw", "return"].forEach((function(o) {
        P(t, o, (function(c) {
          return this._invoke(o, c);
        }));
      }));
    }
    function T(t, o) {
      function c(u, v, C, V) {
        var F = M(t[u], t, v);
        if (F.type !== "throw") {
          var f = F.arg, x = f.value;
          return x && typeof x == "object" && N.call(x, "__await") ? o.resolve(x.__await).then((function(E) {
            c("next", E, C, V);
          }), (function(E) {
            c("throw", E, C, V);
          })) : o.resolve(x).then((function(E) {
            f.value = E, C(f);
          }), (function(E) {
            return c("throw", E, C, V);
          }));
        }
        V(F.arg);
      }
      var h;
      this._invoke = function(u, v) {
        function C() {
          return new o((function(V, F) {
            c(u, v, V, F);
          }));
        }
        return h = h ? h.then(C, C) : C();
      };
    }
    function q(t, o) {
      var c = t.iterator[o.method];
      if (c === a) {
        if (o.delegate = null, o.method === "throw") {
          if (t.iterator.return && (o.method = "return", o.arg = a, q(t, o), o.method === "throw")) return j;
          o.method = "throw", o.arg = new TypeError("The iterator does not provide a 'throw' method");
        }
        return j;
      }
      var h = M(c, t.iterator, o.arg);
      if (h.type === "throw") return o.method = "throw", o.arg = h.arg, o.delegate = null, j;
      var u = h.arg;
      return u ? u.done ? (o[t.resultName] = u.value, o.next = t.nextLoc, o.method !== "return" && (o.method = "next", o.arg = a), o.delegate = null, j) : u : (o.method = "throw", o.arg = new TypeError("iterator result is not an object"), o.delegate = null, j);
    }
    function A(t) {
      var o = { tryLoc: t[0] };
      1 in t && (o.catchLoc = t[1]), 2 in t && (o.finallyLoc = t[2], o.afterLoc = t[3]), this.tryEntries.push(o);
    }
    function i(t) {
      var o = t.completion || {};
      o.type = "normal", delete o.arg, t.completion = o;
    }
    function d(t) {
      this.tryEntries = [{ tryLoc: "root" }], t.forEach(A, this), this.reset(!0);
    }
    function y(t) {
      if (t) {
        var o = t[s];
        if (o) return o.call(t);
        if (typeof t.next == "function") return t;
        if (!isNaN(t.length)) {
          var c = -1, h = function u() {
            for (; ++c < t.length; ) if (N.call(t, c)) return u.value = t[c], u.done = !1, u;
            return u.value = a, u.done = !0, u;
          };
          return h.next = h;
        }
      }
      return { next: g };
    }
    function g() {
      return { value: a, done: !0 };
    }
    return Y.prototype = B, P(b, "constructor", B), P(B, "constructor", Y), Y.displayName = P(B, S, "GeneratorFunction"), r.isGeneratorFunction = function(t) {
      var o = typeof t == "function" && t.constructor;
      return !!o && (o === Y || (o.displayName || o.name) === "GeneratorFunction");
    }, r.mark = function(t) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(t, B) : (t.__proto__ = B, P(t, S, "GeneratorFunction")), t.prototype = Object.create(b), t;
    }, r.awrap = function(t) {
      return { __await: t };
    }, D(T.prototype), P(T.prototype, p, (function() {
      return this;
    })), r.AsyncIterator = T, r.async = function(t, o, c, h, u) {
      u === void 0 && (u = Promise);
      var v = new T(I(t, o, c, h), u);
      return r.isGeneratorFunction(o) ? v : v.next().then((function(C) {
        return C.done ? C.value : v.next();
      }));
    }, D(b), P(b, S, "Generator"), P(b, s, (function() {
      return this;
    })), P(b, "toString", (function() {
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
    }, r.values = y, d.prototype = { constructor: d, reset: function(t) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = a, this.done = !1, this.delegate = null, this.method = "next", this.arg = a, this.tryEntries.forEach(i), !t) for (var o in this) o.charAt(0) === "t" && N.call(this, o) && !isNaN(+o.slice(1)) && (this[o] = a);
    }, stop: function() {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if (t.type === "throw") throw t.arg;
      return this.rval;
    }, dispatchException: function(t) {
      if (this.done) throw t;
      var o = this;
      function c(F, f) {
        return v.type = "throw", v.arg = t, o.next = F, f && (o.method = "next", o.arg = a), !!f;
      }
      for (var h = this.tryEntries.length - 1; h >= 0; --h) {
        var u = this.tryEntries[h], v = u.completion;
        if (u.tryLoc === "root") return c("end");
        if (u.tryLoc <= this.prev) {
          var C = N.call(u, "catchLoc"), V = N.call(u, "finallyLoc");
          if (C && V) {
            if (this.prev < u.catchLoc) return c(u.catchLoc, !0);
            if (this.prev < u.finallyLoc) return c(u.finallyLoc);
          } else if (C) {
            if (this.prev < u.catchLoc) return c(u.catchLoc, !0);
          } else {
            if (!V) throw new Error("try statement without catch or finally");
            if (this.prev < u.finallyLoc) return c(u.finallyLoc);
          }
        }
      }
    }, abrupt: function(t, o) {
      for (var c = this.tryEntries.length - 1; c >= 0; --c) {
        var h = this.tryEntries[c];
        if (h.tryLoc <= this.prev && N.call(h, "finallyLoc") && this.prev < h.finallyLoc) {
          var u = h;
          break;
        }
      }
      u && (t === "break" || t === "continue") && u.tryLoc <= o && o <= u.finallyLoc && (u = null);
      var v = u ? u.completion : {};
      return v.type = t, v.arg = o, u ? (this.method = "next", this.next = u.finallyLoc, j) : this.complete(v);
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
      return this.delegate = { iterator: y(t), resultName: o, nextLoc: c }, this.method === "next" && (this.arg = a), j;
    } }, r;
  })(e.exports);
  try {
    regeneratorRuntime = n;
  } catch {
    typeof globalThis == "object" ? globalThis.regeneratorRuntime = n : Function("r", "regeneratorRuntime = r")(n);
  }
} }, ge = {};
function K(e) {
  var n = ge[e];
  if (n !== void 0) return n.exports;
  var r = ge[e] = { exports: {} };
  return Be[e](r, r.exports, K), r.exports;
}
K.n = (e) => {
  var n = e && e.__esModule ? () => e.default : () => e;
  return K.d(n, { a: n }), n;
}, K.d = (e, n) => {
  for (var r in n) K.o(n, r) && !K.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: n[r] });
}, K.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n);
var Ve = {};
function de(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var r = 0, a = new Array(n); r < n; r++) a[r] = e[r];
  return a;
}
function je(e, n) {
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
  })(e) || je(e) || (function() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  })();
}
function oe(e, n, r) {
  return n in e ? Object.defineProperty(e, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = r, e;
}
K.d(Ve, { A: () => Ue });
const l = (ve = { Fragment: () => Q.Fragment, computed: () => Q.computed, createTextVNode: () => Q.createTextVNode, createVNode: () => Q.createVNode, defineComponent: () => Q.defineComponent, nextTick: () => Q.nextTick, reactive: () => Q.reactive, ref: () => Q.ref, watch: () => Q.watch, watchEffect: () => Q.watchEffect }, ue = {}, K.d(ue, ve), ue), Ge = (0, l.defineComponent)({ props: { data: { required: !0, type: String }, onClick: Function }, render: function() {
  var e = this.data, n = this.onClick;
  return (0, l.createVNode)("span", { class: "vjs-tree-brackets", onClick: n }, [e]);
} }), He = (0, l.defineComponent)({ emits: ["change", "update:modelValue"], props: { checked: { type: Boolean, default: !1 }, isMultiple: Boolean, onChange: Function }, setup: function(e, n) {
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
} }), Me = (0, l.defineComponent)({ props: { nodeType: { required: !0, type: String }, onClick: Function }, render: function() {
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
function Pe(e) {
  return Object.prototype.toString.call(e).slice(8, -1).toLowerCase();
}
function X(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "root", r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, a = (arguments.length > 3 ? arguments[3] : void 0) || {}, k = a.key, N = a.index, O = a.type, s = O === void 0 ? "content" : O, p = a.showComma, S = p !== void 0 && p, P = a.length, I = P === void 0 ? 1 : P, M = Pe(e);
  if (M === "array") {
    var z = be(e.map((function(L, j, R) {
      return X(L, "".concat(n, "[").concat(j, "]"), r + 1, { index: j, showComma: j !== R.length - 1, length: I, type: s });
    })));
    return [X("[", n, r, { showComma: !1, key: k, length: e.length, type: "arrayStart" })[0]].concat(z, X("]", n, r, { showComma: S, length: e.length, type: "arrayEnd" })[0]);
  }
  if (M === "object") {
    var U = Object.keys(e), G = be(U.map((function(L, j, R) {
      return X(e[L], /^[a-zA-Z_]\w*$/.test(L) ? "".concat(n, ".").concat(L) : "".concat(n, '["').concat(L, '"]'), r + 1, { key: L, showComma: j !== R.length - 1, length: I, type: s });
    })));
    return [X("{", n, r, { showComma: !1, key: k, index: N, length: U.length, type: "objectStart" })[0]].concat(G, X("}", n, r, { showComma: S, length: U.length, type: "objectEnd" })[0]);
  }
  return [{ content: e, level: r, key: k, index: N, path: n, showComma: S, length: I, type: s }];
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
    var r = e.map((function(N) {
      return he(N, n);
    }));
    return n.set(e, r), r;
  }
  var a = {};
  for (var k in e) a[k] = he(e[k], n);
  return n.set(e, a), a;
}
function we(e, n, r, a, k, N, O) {
  try {
    var s = e[N](O), p = s.value;
  } catch (S) {
    return void r(S);
  }
  s.done ? n(p) : Promise.resolve(p).then(a, k);
}
var Re = K(207), ke = K.n(Re);
function Ce(e, n) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    n && (a = a.filter((function(k) {
      return Object.getOwnPropertyDescriptor(e, k).enumerable;
    }))), r.push.apply(r, a);
  }
  return r;
}
function Ne(e) {
  for (var n = 1; n < arguments.length; n++) {
    var r = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Ce(Object(r), !0).forEach((function(a) {
      oe(e, a, r[a]);
    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ce(Object(r)).forEach((function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
    }));
  }
  return e;
}
var Le = { data: { type: [String, Number, Boolean, Array, Object], default: null }, rootPath: { type: String, default: "root" }, indent: { type: Number, default: 2 }, showLength: { type: Boolean, default: !1 }, showDoubleQuotes: { type: Boolean, default: !0 }, renderNodeKey: Function, renderNodeValue: Function, renderNodeActions: { type: [Boolean, Function], default: void 0 }, selectableType: String, showSelectController: { type: Boolean, default: !1 }, showLine: { type: Boolean, default: !0 }, showLineNumber: { type: Boolean, default: !1 }, selectOnClickNode: { type: Boolean, default: !0 }, nodeSelectable: { type: Function, default: function() {
  return !0;
} }, highlightSelectedNode: { type: Boolean, default: !0 }, showIcon: { type: Boolean, default: !1 }, theme: { type: String, default: "light" }, showKeyValueSpace: { type: Boolean, default: !0 }, editable: { type: Boolean, default: !1 }, editableTrigger: { type: String, default: "click" }, onNodeClick: { type: Function }, onNodeMouseover: { type: Function }, onBracketsClick: { type: Function }, onIconClick: { type: Function }, onValueChange: { type: Function } };
const Ke = (0, l.defineComponent)({ name: "TreeNode", props: Ne(Ne({}, Le), {}, { node: { type: Object, required: !0 }, collapsed: Boolean, checked: Boolean, style: Object, onSelectedChange: { type: Function } }), emits: ["nodeClick", "nodeMouseover", "bracketsClick", "iconClick", "selectedChange", "valueChange"], setup: function(e, n) {
  var r = n.emit, a = (0, l.computed)((function() {
    return Pe(e.node.content);
  })), k = (0, l.computed)((function() {
    return "vjs-value vjs-value-".concat(a.value);
  })), N = (0, l.computed)((function() {
    return e.showDoubleQuotes ? '"'.concat(e.node.key, '"') : e.node.key;
  })), O = (0, l.computed)((function() {
    return e.selectableType === "multiple";
  })), s = (0, l.computed)((function() {
    return e.selectableType === "single";
  })), p = (0, l.computed)((function() {
    return e.nodeSelectable(e.node) && (O.value || s.value);
  })), S = (0, l.reactive)({ editing: !1 }), P = function(w) {
    var m, b, D = (b = (m = w.target) === null || m === void 0 ? void 0 : m.value) === "null" ? null : b === "undefined" ? void 0 : b === "true" || b !== "false" && (b[0] + b[b.length - 1] === '""' || b[0] + b[b.length - 1] === "''" ? b.slice(1, -1) : typeof Number(b) == "number" && !isNaN(Number(b)) || b === "NaN" ? Number(b) : b);
    r("valueChange", D, e.node.path);
  }, I = (0, l.computed)((function() {
    var w, m = (w = e.node) === null || w === void 0 ? void 0 : w.content;
    return m === null ? m = "null" : m === void 0 && (m = "undefined"), a.value === "string" ? '"'.concat(m, '"') : m + "";
  })), M = function() {
    var w = e.renderNodeValue;
    return w ? w({ node: e.node, defaultValue: I.value }) : I.value;
  }, z = function() {
    r("bracketsClick", !e.collapsed, e.node);
  }, U = function() {
    r("iconClick", !e.collapsed, e.node);
  }, G = function() {
    r("selectedChange", e.node);
  }, L = function() {
    r("nodeClick", e.node), p.value && e.selectOnClickNode && r("selectedChange", e.node);
  }, j = function() {
    r("nodeMouseover", e.node);
  }, R = function(w) {
    if (e.editable && !S.editing) {
      S.editing = !0;
      var m = function b(D) {
        var T;
        D.target !== w.target && ((T = D.target) === null || T === void 0 ? void 0 : T.parentElement) !== w.target && (S.editing = !1, document.removeEventListener("click", b));
      };
      document.removeEventListener("click", m), document.addEventListener("click", m);
    }
  }, Y = (function() {
    var w = (0, l.ref)(!1), m = (function() {
      var b, D = (b = ke().mark((function T(q) {
        return ke().wrap((function(A) {
          for (; ; ) switch (A.prev = A.next) {
            case 0:
              return A.prev = 0, A.next = 3, navigator.clipboard.writeText(q);
            case 3:
              w.value = !0, setTimeout((function() {
                w.value = !1;
              }), 300), A.next = 10;
              break;
            case 7:
              A.prev = 7, A.t0 = A.catch(0), console.error("[vue-json-pretty] Copy failed: ", A.t0);
            case 10:
            case "end":
              return A.stop();
          }
        }), T, null, [[0, 7]]);
      })), function() {
        var T = this, q = arguments;
        return new Promise((function(A, i) {
          var d = b.apply(T, q);
          function y(t) {
            we(d, A, i, y, g, "next", t);
          }
          function g(t) {
            we(d, A, i, y, g, "throw", t);
          }
          y(void 0);
        }));
      });
      return function(T) {
        return D.apply(this, arguments);
      };
    })();
    return { copy: m };
  })().copy, B = function() {
    var w = e.node, m = w.key, b = w.path, D = e.rootPath, T = new Function("data", "return data".concat(b.slice(D.length)))(e.data), q = JSON.stringify(m ? oe({}, m, T) : T, null, 2);
    Y(q);
  }, J = function() {
    var w = e.renderNodeActions;
    if (!w) return null;
    var m = { copy: B };
    return typeof w == "function" ? w({ node: e.node, defaultActions: m }) : (0, l.createVNode)("span", { onClick: B, class: "vjs-tree-node-actions-item" }, [(0, l.createTextVNode)("copy")]);
  };
  return function() {
    var w, m = e.node;
    return (0, l.createVNode)("div", { class: { "vjs-tree-node": !0, "has-selector": e.showSelectController, "has-carets": e.showIcon, "is-highlight": e.highlightSelectedNode && e.checked, dark: e.theme === "dark" }, onClick: L, onMouseover: j, style: e.style }, [e.showLineNumber && (0, l.createVNode)("span", { class: "vjs-node-index" }, [m.id + 1]), e.showSelectController && p.value && m.type !== "objectEnd" && m.type !== "arrayEnd" && (0, l.createVNode)(He, { isMultiple: O.value, checked: e.checked, onChange: G }, null), (0, l.createVNode)("div", { class: "vjs-indent" }, [Array.from(Array(m.level)).map((function(b, D) {
      return (0, l.createVNode)("div", { key: D, class: { "vjs-indent-unit": !0, "has-line": e.showLine } }, [Array.from(Array(e.indent)).map((function() {
        return (0, l.createVNode)(l.Fragment, null, [(0, l.createTextVNode)(" ")]);
      }))]);
    })), e.showIcon && (0, l.createVNode)(Me, { nodeType: m.type, onClick: U }, null)]), m.key && (0, l.createVNode)("span", { class: "vjs-key" }, [(w = e.renderNodeKey, w ? w({ node: e.node, defaultKey: N.value || "" }) : N.value), (0, l.createVNode)("span", { class: "vjs-colon" }, [":".concat(e.showKeyValueSpace ? " " : "")])]), (0, l.createVNode)("span", null, [m.type !== "content" && m.content ? (0, l.createVNode)(Ge, { data: m.content.toString(), onClick: z }, null) : (0, l.createVNode)("span", { class: k.value, onClick: !e.editable || e.editableTrigger && e.editableTrigger !== "click" ? void 0 : R, onDblclick: e.editable && e.editableTrigger === "dblclick" ? R : void 0 }, [e.editable && S.editing ? (0, l.createVNode)("input", { value: I.value, onChange: P, style: { padding: "3px 8px", border: "1px solid #eee", boxShadow: "none", boxSizing: "border-box", borderRadius: 5, fontFamily: "inherit" } }, null) : M()]), m.showComma && (0, l.createVNode)("span", null, [","]), e.showLength && e.collapsed && (0, l.createVNode)("span", { class: "vjs-comment" }, [(0, l.createTextVNode)(" // "), m.length, (0, l.createTextVNode)(" items ")])]), e.renderNodeActions && (0, l.createVNode)("span", { class: "vjs-tree-node-actions" }, [J()])]);
  };
} });
function Se(e, n) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    n && (a = a.filter((function(k) {
      return Object.getOwnPropertyDescriptor(e, k).enumerable;
    }))), r.push.apply(r, a);
  }
  return r;
}
function H(e) {
  for (var n = 1; n < arguments.length; n++) {
    var r = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Se(Object(r), !0).forEach((function(a) {
      oe(e, a, r[a]);
    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Se(Object(r)).forEach((function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
    }));
  }
  return e;
}
const Ue = (0, l.defineComponent)({ name: "Tree", props: H(H({}, Le), {}, { collapsedNodeLength: { type: Number, default: 1 / 0 }, deep: { type: Number, default: 1 / 0 }, pathCollapsible: { type: Function, default: function() {
  return !1;
} }, virtual: { type: Boolean, default: !1 }, height: { type: Number, default: 400 }, itemHeight: { type: Number, default: 20 }, dynamicHeight: { type: Boolean, default: !0 }, selectedValue: { type: [String, Array], default: function() {
  return "";
} }, collapsedOnClickBrackets: { type: Boolean, default: !0 }, style: Object, onSelectedChange: { type: Function }, theme: { type: String, default: "light" } }), slots: ["renderNodeKey", "renderNodeValue", "renderNodeActions"], emits: ["nodeClick", "nodeMouseover", "bracketsClick", "iconClick", "selectedChange", "update:selectedValue", "update:data"], setup: function(e, n) {
  var r = n.emit, a = n.slots, k = (0, l.ref)(), N = (0, l.computed)((function() {
    return X(e.data, e.rootPath);
  })), O = function(i, d) {
    return N.value.reduce((function(y, g) {
      var t, o = g.level >= i || g.length >= d, c = (t = e.pathCollapsible) === null || t === void 0 ? void 0 : t.call(e, g);
      return g.type !== "objectStart" && g.type !== "arrayStart" || !o && !c ? y : H(H({}, y), {}, oe({}, g.path, 1));
    }), {});
  }, s = (0, l.reactive)({ translateY: 0, visibleData: null, hiddenPaths: O(e.deep, e.collapsedNodeLength), startIndex: 0, endIndex: 0 }), p = [], S = [], P = 0, I = {}, M = function(i) {
    p = Array(i).fill(0).map((function() {
      return e.itemHeight || 20;
    })), (S = new Array(i + 1))[0] = 0;
    for (var d = 0; d < i; d++) S[d + 1] = S[d] + p[d];
    P = S[i] || 0;
  }, z = function(i) {
    var d = p.length;
    i < 0 && (i = 0), i > d && (i = d);
    for (var y = i; y < d; y++) S[y + 1] = S[y] + p[y];
    P = S[d] || 0;
  }, U = function(i, d) {
    for (var y = 0, g = i.length - 1; y < g; ) {
      var t = y + g >>> 1;
      i[t] < d ? y = t + 1 : g = t;
    }
    return y;
  }, G = (0, l.computed)((function() {
    for (var i = null, d = [], y = N.value.length, g = 0; g < y; g++) {
      var t = H(H({}, N.value[g]), {}, { id: g }), o = s.hiddenPaths[t.path];
      if (i && i.path === t.path) {
        var c = i.type === "objectStart", h = H(H(H({}, t), i), {}, { showComma: t.showComma, content: c ? "{...}" : "[...]", type: c ? "objectCollapsed" : "arrayCollapsed" });
        i = null, d.push(h);
      } else {
        if (o && !i) {
          i = t;
          continue;
        }
        if (i) continue;
        d.push(t);
      }
    }
    return d;
  })), L = (0, l.computed)((function() {
    var i = e.selectedValue;
    return i && e.selectableType === "multiple" && Array.isArray(i) ? i : [i];
  })), j = (0, l.computed)((function() {
    return !e.selectableType || e.selectOnClickNode || e.showSelectController ? "" : "When selectableType is not null, selectOnClickNode and showSelectController cannot be false at the same time, because this will cause the selection to fail.";
  })), R = (0, l.computed)((function() {
    return e.dynamicHeight ? P || 0 : G.value.length * e.itemHeight;
  })), Y = function i() {
    var d = G.value;
    if (d) if (e.virtual) {
      var y, g = ((y = k.value) === null || y === void 0 ? void 0 : y.scrollTop) || 0;
      if (e.dynamicHeight) {
        p.length !== d.length && M(d.length);
        var t = (function(F) {
          var f = U(S, F + 1e-4);
          return Math.max(0, Math.min(f - 1, p.length - 1));
        })(g), o = (function(F, f) {
          var x = U(S, F + f);
          return Math.max(0, Math.min(x + 1, p.length));
        })(g, e.height), c = Math.max(0, t - 5), h = Math.min(d.length, o + 5);
        s.startIndex = c, s.endIndex = h, s.translateY = S[c] || 0, s.visibleData = d.slice(c, h), (0, l.nextTick)().then((function() {
          for (var F = !1, f = s.startIndex; f < s.endIndex; f++) {
            var x = I[f];
            if (x) {
              var E = x.offsetHeight;
              E && p[f] !== E && (p[f] = E, S[f + 1] = S[f] + p[f], z(f + 1), F = !0);
            }
          }
          F && i();
        }));
      } else {
        var u = e.height / e.itemHeight, v = Math.floor(g / e.itemHeight), C = v < 0 ? 0 : v + u > d.length ? d.length - u : v;
        C < 0 && (C = 0);
        var V = C + u;
        s.translateY = C * e.itemHeight, s.startIndex = C, s.endIndex = V, s.visibleData = d.slice(C, V);
      }
    } else s.translateY = 0, s.startIndex = 0, s.endIndex = d.length, s.visibleData = d;
  }, B = null, J = function() {
    B && cancelAnimationFrame(B), B = requestAnimationFrame((function() {
      Y();
    }));
  }, w = function(i) {
    var d, y, g = i.path, t = e.selectableType;
    if (t === "multiple") {
      var o = L.value.findIndex((function(v) {
        return v === g;
      })), c = ie(L.value);
      o !== -1 ? c.splice(o, 1) : c.push(g), r("update:selectedValue", c), r("selectedChange", c, ie(L.value));
    } else if (t === "single" && L.value[0] !== g) {
      var h = (d = L.value, y = 1, (function(v) {
        if (Array.isArray(v)) return v;
      })(d) || (function(v, C) {
        var V = v == null ? null : typeof Symbol < "u" && v[Symbol.iterator] || v["@@iterator"];
        if (V != null) {
          var F, f, x = [], E = !0, ee = !1;
          try {
            for (V = V.call(v); !(E = (F = V.next()).done) && (x.push(F.value), !C || x.length !== C); E = !0) ;
          } catch (ae) {
            ee = !0, f = ae;
          } finally {
            try {
              E || V.return == null || V.return();
            } finally {
              if (ee) throw f;
            }
          }
          return x;
        }
      })(d, y) || je(d, y) || (function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      })())[0], u = g;
      r("update:selectedValue", u), r("selectedChange", u, h);
    }
  }, m = function(i) {
    r("nodeClick", i);
  }, b = function(i) {
    r("nodeMouseover", i);
  }, D = function(i, d) {
    if (i) s.hiddenPaths = H(H({}, s.hiddenPaths), {}, oe({}, d, 1));
    else {
      var y = H({}, s.hiddenPaths);
      delete y[d], s.hiddenPaths = y;
    }
  }, T = function(i, d) {
    e.collapsedOnClickBrackets && D(i, d.path), r("bracketsClick", i, d);
  }, q = function(i, d) {
    D(i, d.path), r("iconClick", i, d);
  }, A = function(i, d) {
    var y = he(e.data), g = e.rootPath;
    new Function("data", "val", "data".concat(d.slice(g.length), "=val"))(y, i), r("update:data", y);
  };
  return (0, l.watchEffect)((function() {
    j.value && (function(i) {
      throw new Error("[VueJSONPretty] ".concat(i));
    })(j.value);
  })), (0, l.watchEffect)((function() {
    G.value && (e.virtual && e.dynamicHeight && p.length !== G.value.length && M(G.value.length), Y());
  })), (0, l.watch)((function() {
    return [e.dynamicHeight, e.itemHeight, N.value.length];
  }), (function() {
    e.virtual && e.dynamicHeight && (M(G.value.length), (0, l.nextTick)(Y));
  })), (0, l.watch)((function() {
    return e.deep;
  }), (function(i) {
    i && (s.hiddenPaths = O(i, e.collapsedNodeLength));
  })), (0, l.watch)((function() {
    return e.collapsedNodeLength;
  }), (function(i) {
    i && (s.hiddenPaths = O(e.deep, i));
  })), function() {
    var i, d, y, g, t, o = (i = e.renderNodeKey) !== null && i !== void 0 ? i : a.renderNodeKey, c = (d = e.renderNodeValue) !== null && d !== void 0 ? d : a.renderNodeValue, h = (y = (g = e.renderNodeActions) !== null && g !== void 0 ? g : a.renderNodeActions) !== null && y !== void 0 && y, u = (t = s.visibleData) === null || t === void 0 ? void 0 : t.map((function(v, C) {
      var V = s.startIndex + C;
      return (0, l.createVNode)("div", { key: v.id, ref: function(F) {
        return (function(f, x) {
          x ? I[f] = x : delete I[f];
        })(V, F || null);
      } }, [(0, l.createVNode)(Ke, { data: e.data, rootPath: e.rootPath, indent: e.indent, node: v, collapsed: !!s.hiddenPaths[v.path], theme: e.theme, showDoubleQuotes: e.showDoubleQuotes, showLength: e.showLength, checked: L.value.includes(v.path), selectableType: e.selectableType, showLine: e.showLine, showLineNumber: e.showLineNumber, showSelectController: e.showSelectController, selectOnClickNode: e.selectOnClickNode, nodeSelectable: e.nodeSelectable, highlightSelectedNode: e.highlightSelectedNode, editable: e.editable, editableTrigger: e.editableTrigger, showIcon: e.showIcon, showKeyValueSpace: e.showKeyValueSpace, renderNodeKey: o, renderNodeValue: c, renderNodeActions: h, onNodeClick: m, onNodeMouseover: b, onBracketsClick: T, onIconClick: q, onSelectedChange: w, onValueChange: A, class: e.dynamicHeight ? "dynamic-height" : void 0, style: e.dynamicHeight ? {} : e.itemHeight && e.itemHeight !== 20 ? { lineHeight: "".concat(e.itemHeight, "px") } : {} }, null)]);
    }));
    return (0, l.createVNode)("div", { ref: k, class: { "vjs-tree": !0, "is-virtual": e.virtual, dark: e.theme === "dark" }, onScroll: e.virtual ? J : void 0, style: e.showLineNumber ? H({ paddingLeft: "".concat(12 * Number(N.value.length.toString().length), "px") }, e.style) : e.style }, [e.virtual ? (0, l.createVNode)("div", { class: "vjs-tree-list", style: { height: "".concat(e.height, "px") } }, [(0, l.createVNode)("div", { class: "vjs-tree-list-holder", style: { height: "".concat(R.value, "px") } }, [(0, l.createVNode)("div", { class: "vjs-tree-list-holder-inner", style: { transform: "translateY(".concat(s.translateY, "px)") } }, [u])])]) : u]);
  };
} });
var Ye = Ve.A;
const qe = {
  key: 0,
  class: "grid grid-cols-2 grid-rows-4 gap-4 overflow-auto w-full h-full"
}, Qe = { key: 1 }, $e = /* @__PURE__ */ xe({
  __name: "Preview",
  props: {
    dataSource: {}
  },
  setup(e) {
    const n = e, r = ne(null), a = ne(null), k = Fe(null), N = ne(n.dataSource), { update: O } = De(n.dataSource.type, N, k);
    return se(k, async () => {
      a.value = await k.value.getData("FeatureCollection"), r.value = a.value?.features || [];
    }, { deep: !0 }), se(n.dataSource, () => {
      O();
    }, { deep: !0 }), (s, p) => k.value ? (Z(), re("div", qe, [
      W($(Ye), { data: a.value }, null, 8, ["data"])
    ])) : (Z(), re("div", Qe, [...p[0] || (p[0] = [
      Te("h3", null, "OGC Feature Collection Preview", -1)
    ])]));
  }
}), ze = /* @__PURE__ */ xe({
  __name: "Settings",
  props: {
    config: {},
    dataSources: {},
    connections: {}
  },
  setup(e) {
    const n = Ee(Ie), r = Ae(() => e.dataSources.filter((O) => O.type === "csv" || O.type === "xmla")), a = ne([]), k = ne([]), N = ["Point"];
    return se(() => e.config.connectedDatasources, async (O) => {
      a.value = await me.getHeaders(
        O,
        n
      ), k.value = await me.getProperties(
        O,
        n
      );
    }), (O, s) => (Z(), re(ce, null, [
      W($(_), {
        modelValue: e.config.connectedDatasources,
        "onUpdate:modelValue": s[0] || (s[0] = (p) => e.config.connectedDatasources = p),
        label: "Quellen",
        options: r.value,
        multiple: "",
        "label-key": "name",
        "value-key": "uid"
      }, null, 8, ["modelValue", "options"]),
      W($(ye), {
        modelValue: e.config.useGeometryFromData,
        "onUpdate:modelValue": s[1] || (s[1] = (p) => e.config.useGeometryFromData = p),
        label: "Geometrie aus den Daten",
        style: { margin: "0.5rem 0" }
      }, null, 8, ["modelValue"]),
      e.config.useGeometryFromData ? (Z(), re(ce, { key: 0 }, [
        W($(ye), {
          modelValue: e.config.useGeometryFromProps,
          "onUpdate:modelValue": s[2] || (s[2] = (p) => e.config.useGeometryFromProps = p),
          label: "Geometrie aus den Eigenschaften",
          style: { margin: "0.5rem 0" }
        }, null, 8, ["modelValue"]),
        e.config.useGeometryFromProps ? (Z(), pe($(_), {
          key: 0,
          modelValue: e.config.geometryPropsField,
          "onUpdate:modelValue": s[3] || (s[3] = (p) => e.config.geometryPropsField = p),
          label: "Feld der Geometrie-Eigenschaft",
          options: k.value
        }, null, 8, ["modelValue", "options"])) : (Z(), pe($(_), {
          key: 1,
          modelValue: e.config.geometryField,
          "onUpdate:modelValue": s[4] || (s[4] = (p) => e.config.geometryField = p),
          label: "Feld der Geometrie",
          options: a.value
        }, null, 8, ["modelValue", "options"]))
      ], 64)) : (Z(), re(ce, { key: 1 }, [
        W($(_), {
          modelValue: e.config.xField,
          "onUpdate:modelValue": s[5] || (s[5] = (p) => e.config.xField = p),
          label: "Feld für die X-Koordinate",
          options: a.value
        }, null, 8, ["modelValue", "options"]),
        W($(_), {
          modelValue: e.config.yField,
          "onUpdate:modelValue": s[6] || (s[6] = (p) => e.config.yField = p),
          label: "Feld für die Y-Koordinate",
          options: a.value
        }, null, 8, ["modelValue", "options"]),
        W($(_), {
          modelValue: e.config.geometryType,
          "onUpdate:modelValue": s[7] || (s[7] = (p) => e.config.geometryType = p),
          label: "Art der Geometrie",
          options: N
        }, null, 8, ["modelValue"])
      ], 64))
    ], 64));
  }
}), Je = Symbol.for("OgcFeatureComposer"), We = Symbol.for("OgcComposerPreview"), Xe = Symbol.for("OgcComposerSettings");
function ot({ services: e }) {
  e.register("OgcComposerPreview", $e), e.register("OgcComposerSettings", ze), e.getRequired(Oe).registerDatasourceType("OGC Composer", {
    Store: Je,
    Preview: We,
    Settings: Xe
  });
}
function at({ services: e }) {
  e.getRequired(Oe).unregisterDatasourceType("OGC Composer"), e.unregister("OgcComposerPreview"), e.unregister("OgcComposerSettings");
}
export {
  ot as activate,
  at as deactivate
};
