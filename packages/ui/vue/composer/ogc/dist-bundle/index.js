(function(){var i="ui.vue.composer.ogc",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".vjs-tree-brackets{cursor:pointer}.vjs-tree-brackets:hover{color:#1890ff}.vjs-check-controller{position:absolute;left:0}.vjs-check-controller.is-checked .vjs-check-controller-inner{background-color:#1890ff;border-color:#0076e4}.vjs-check-controller.is-checked .vjs-check-controller-inner.is-checkbox:after{transform:rotate(45deg) scaleY(1)}.vjs-check-controller.is-checked .vjs-check-controller-inner.is-radio:after{transform:translate(-50%,-50%) scale(1)}.vjs-check-controller .vjs-check-controller-inner{display:inline-block;position:relative;border:1px solid #bfcbd9;border-radius:2px;vertical-align:middle;box-sizing:border-box;width:16px;height:16px;background-color:#fff;z-index:1;cursor:pointer;transition:border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46)}.vjs-check-controller .vjs-check-controller-inner:after{box-sizing:content-box;content:\"\";border:2px solid #fff;border-left:0;border-top:0;height:8px;left:4px;position:absolute;top:1px;transform:rotate(45deg) scaleY(0);width:4px;transition:transform .15s cubic-bezier(.71,-.46,.88,.6) .05s;transform-origin:center}.vjs-check-controller .vjs-check-controller-inner.is-radio{border-radius:100%}.vjs-check-controller .vjs-check-controller-inner.is-radio:after{border-radius:100%;height:4px;background-color:#fff;left:50%;top:50%}.vjs-check-controller .vjs-check-controller-original{opacity:0;outline:none;position:absolute;z-index:-1;inset:0;margin:0}.vjs-carets{position:absolute;right:0;cursor:pointer}.vjs-carets svg{transition:transform .3s}.vjs-carets:hover{color:#1890ff}.vjs-carets-close{transform:rotate(-90deg)}.vjs-tree-node{display:flex;position:relative;line-height:20px}.vjs-tree-node.has-carets{padding-left:15px}.vjs-tree-node.has-carets.has-selector,.vjs-tree-node.has-selector{padding-left:30px}.vjs-tree-node.is-highlight,.vjs-tree-node:hover{background-color:#e6f7ff;border-radius:4px}.vjs-tree-node.is-highlight .vjs-tree-node-actions,.vjs-tree-node:hover .vjs-tree-node-actions{display:block}.vjs-tree-node .vjs-indent{display:flex;position:relative}.vjs-tree-node .vjs-indent-unit.has-line{border-left:1px dashed #bfcbd9}.vjs-tree-node .vjs-tree-node-actions{display:none;position:absolute;right:0;top:0;padding:0 4px;background-color:#e6f7ff;border-radius:4px}.vjs-tree-node .vjs-tree-node-actions .vjs-tree-node-actions-item{cursor:pointer}.vjs-tree-node .vjs-tree-node-actions .vjs-tree-node-actions-item:hover{color:#1890ff}.vjs-tree-node.dark.is-highlight,.vjs-tree-node.dark .vjs-tree-node-actions,.vjs-tree-node.dark:hover{background-color:#2e4558}.vjs-node-index{position:absolute;right:100%;margin-right:4px;user-select:none}.vjs-colon{white-space:pre}.vjs-comment{color:#bfcbd9}.vjs-key{white-space:nowrap}.vjs-value{word-break:break-word}.vjs-tree-node.dynamic-height .vjs-value{white-space:pre-wrap}.vjs-value-null,.vjs-value-undefined{color:#d55fde}.vjs-value-boolean,.vjs-value-number{color:#1d8ce0}.vjs-value-string{color:#13ce66}.vjs-tree{font-family:Monaco,Menlo,Consolas,Bitstream Vera Sans Mono,monospace;font-size:14px;text-align:left}.vjs-tree.is-virtual{overflow:auto}.vjs-tree.is-virtual .vjs-tree-node{white-space:nowrap}\n";})();
import * as Q from "vue";
import { defineComponent as Ne, ref as ee, shallowRef as Pe, watch as ce, createElementBlock as te, openBlock as X, createVNode as J, unref as Le, createElementVNode as Te, inject as Fe, computed as Ee, resolveComponent as fe, Fragment as ie, createBlock as he } from "vue";
import { useTemporaryStore as Ae } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { OgcFeatureComposer as pe } from "org.eclipse.daanse.board.app.lib.composer.ogc";
import { identifier as De } from "org.eclipse.daanse.board.app.lib.repository.datasource";
import { DATASOURCE_REPOSITORY as Se } from "org.eclipse.daanse.board.app.lib.api.datasource";
var Ie = { 207: (e, n, r) => {
  e.exports = r(452);
}, 452: (e) => {
  var n = (function(r) {
    var a, N = Object.prototype, x = N.hasOwnProperty, O = typeof Symbol == "function" ? Symbol : {}, s = O.iterator || "@@iterator", w = O.asyncIterator || "@@asyncIterator", k = O.toStringTag || "@@toStringTag";
    function m(t, o, c) {
      return Object.defineProperty(t, o, { value: c, enumerable: !0, configurable: !0, writable: !0 }), t[o];
    }
    try {
      m({}, "");
    } catch {
      m = function(o, c, h) {
        return o[c] = h;
      };
    }
    function I(t, o, c, h) {
      var u = o && o.prototype instanceof R ? o : R, v = Object.create(u.prototype), S = new d(h || []);
      return v._invoke = /* @__PURE__ */ (function(j, T, f) {
        var V = $;
        return function(E, Z) {
          if (V === H) throw new Error("Generator is already running");
          if (V === L) {
            if (E === "throw") throw Z;
            return g();
          }
          for (f.method = E, f.arg = Z; ; ) {
            var re = f.delegate;
            if (re) {
              var ae = q(re, f);
              if (ae) {
                if (ae === P) continue;
                return ae;
              }
            }
            if (f.method === "next") f.sent = f._sent = f.arg;
            else if (f.method === "throw") {
              if (V === $) throw V = L, f.arg;
              f.dispatchException(f.arg);
            } else f.method === "return" && f.abrupt("return", f.arg);
            V = H;
            var _ = G(j, T, f);
            if (_.type === "normal") {
              if (V = f.done ? L : K, _.arg === P) continue;
              return { value: _.arg, done: f.done };
            }
            _.type === "throw" && (V = L, f.method = "throw", f.arg = _.arg);
          }
        };
      })(t, c, S), v;
    }
    function G(t, o, c) {
      try {
        return { type: "normal", arg: t.call(o, c) };
      } catch (h) {
        return { type: "throw", arg: h };
      }
    }
    r.wrap = I;
    var $ = "suspendedStart", K = "suspendedYield", H = "executing", L = "completed", P = {};
    function R() {
    }
    function Y() {
    }
    function B() {
    }
    var z = {};
    m(z, s, (function() {
      return this;
    }));
    var C = Object.getPrototypeOf, y = C && C(C(p([])));
    y && y !== N && x.call(y, s) && (z = y);
    var b = B.prototype = R.prototype = Object.create(z);
    function D(t) {
      ["next", "throw", "return"].forEach((function(o) {
        m(t, o, (function(c) {
          return this._invoke(o, c);
        }));
      }));
    }
    function F(t, o) {
      function c(u, v, S, j) {
        var T = G(t[u], t, v);
        if (T.type !== "throw") {
          var f = T.arg, V = f.value;
          return V && typeof V == "object" && x.call(V, "__await") ? o.resolve(V.__await).then((function(E) {
            c("next", E, S, j);
          }), (function(E) {
            c("throw", E, S, j);
          })) : o.resolve(V).then((function(E) {
            f.value = E, S(f);
          }), (function(E) {
            return c("throw", E, S, j);
          }));
        }
        j(T.arg);
      }
      var h;
      this._invoke = function(u, v) {
        function S() {
          return new o((function(j, T) {
            c(u, v, j, T);
          }));
        }
        return h = h ? h.then(S, S) : S();
      };
    }
    function q(t, o) {
      var c = t.iterator[o.method];
      if (c === a) {
        if (o.delegate = null, o.method === "throw") {
          if (t.iterator.return && (o.method = "return", o.arg = a, q(t, o), o.method === "throw")) return P;
          o.method = "throw", o.arg = new TypeError("The iterator does not provide a 'throw' method");
        }
        return P;
      }
      var h = G(c, t.iterator, o.arg);
      if (h.type === "throw") return o.method = "throw", o.arg = h.arg, o.delegate = null, P;
      var u = h.arg;
      return u ? u.done ? (o[t.resultName] = u.value, o.next = t.nextLoc, o.method !== "return" && (o.method = "next", o.arg = a), o.delegate = null, P) : u : (o.method = "throw", o.arg = new TypeError("iterator result is not an object"), o.delegate = null, P);
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
    function p(t) {
      if (t) {
        var o = t[s];
        if (o) return o.call(t);
        if (typeof t.next == "function") return t;
        if (!isNaN(t.length)) {
          var c = -1, h = function u() {
            for (; ++c < t.length; ) if (x.call(t, c)) return u.value = t[c], u.done = !1, u;
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
    return Y.prototype = B, m(b, "constructor", B), m(B, "constructor", Y), Y.displayName = m(B, k, "GeneratorFunction"), r.isGeneratorFunction = function(t) {
      var o = typeof t == "function" && t.constructor;
      return !!o && (o === Y || (o.displayName || o.name) === "GeneratorFunction");
    }, r.mark = function(t) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(t, B) : (t.__proto__ = B, m(t, k, "GeneratorFunction")), t.prototype = Object.create(b), t;
    }, r.awrap = function(t) {
      return { __await: t };
    }, D(F.prototype), m(F.prototype, w, (function() {
      return this;
    })), r.AsyncIterator = F, r.async = function(t, o, c, h, u) {
      u === void 0 && (u = Promise);
      var v = new F(I(t, o, c, h), u);
      return r.isGeneratorFunction(o) ? v : v.next().then((function(S) {
        return S.done ? S.value : v.next();
      }));
    }, D(b), m(b, k, "Generator"), m(b, s, (function() {
      return this;
    })), m(b, "toString", (function() {
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
    }, r.values = p, d.prototype = { constructor: d, reset: function(t) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = a, this.done = !1, this.delegate = null, this.method = "next", this.arg = a, this.tryEntries.forEach(i), !t) for (var o in this) o.charAt(0) === "t" && x.call(this, o) && !isNaN(+o.slice(1)) && (this[o] = a);
    }, stop: function() {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if (t.type === "throw") throw t.arg;
      return this.rval;
    }, dispatchException: function(t) {
      if (this.done) throw t;
      var o = this;
      function c(T, f) {
        return v.type = "throw", v.arg = t, o.next = T, f && (o.method = "next", o.arg = a), !!f;
      }
      for (var h = this.tryEntries.length - 1; h >= 0; --h) {
        var u = this.tryEntries[h], v = u.completion;
        if (u.tryLoc === "root") return c("end");
        if (u.tryLoc <= this.prev) {
          var S = x.call(u, "catchLoc"), j = x.call(u, "finallyLoc");
          if (S && j) {
            if (this.prev < u.catchLoc) return c(u.catchLoc, !0);
            if (this.prev < u.finallyLoc) return c(u.finallyLoc);
          } else if (S) {
            if (this.prev < u.catchLoc) return c(u.catchLoc, !0);
          } else {
            if (!j) throw new Error("try statement without catch or finally");
            if (this.prev < u.finallyLoc) return c(u.finallyLoc);
          }
        }
      }
    }, abrupt: function(t, o) {
      for (var c = this.tryEntries.length - 1; c >= 0; --c) {
        var h = this.tryEntries[c];
        if (h.tryLoc <= this.prev && x.call(h, "finallyLoc") && this.prev < h.finallyLoc) {
          var u = h;
          break;
        }
      }
      u && (t === "break" || t === "continue") && u.tryLoc <= o && o <= u.finallyLoc && (u = null);
      var v = u ? u.completion : {};
      return v.type = t, v.arg = o, u ? (this.method = "next", this.next = u.finallyLoc, P) : this.complete(v);
    }, complete: function(t, o) {
      if (t.type === "throw") throw t.arg;
      return t.type === "break" || t.type === "continue" ? this.next = t.arg : t.type === "return" ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : t.type === "normal" && o && (this.next = o), P;
    }, finish: function(t) {
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var c = this.tryEntries[o];
        if (c.finallyLoc === t) return this.complete(c.completion, c.afterLoc), i(c), P;
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
      return this.delegate = { iterator: p(t), resultName: o, nextLoc: c }, this.method === "next" && (this.arg = a), P;
    } }, r;
  })(e.exports);
  try {
    regeneratorRuntime = n;
  } catch {
    typeof globalThis == "object" ? globalThis.regeneratorRuntime = n : Function("r", "regeneratorRuntime = r")(n);
  }
} }, ye = {};
function U(e) {
  var n = ye[e];
  if (n !== void 0) return n.exports;
  var r = ye[e] = { exports: {} };
  return Ie[e](r, r.exports, U), r.exports;
}
U.n = (e) => {
  var n = e && e.__esModule ? () => e.default : () => e;
  return U.d(n, { a: n }), n;
}, U.d = (e, n) => {
  for (var r in n) U.o(n, r) && !U.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: n[r] });
}, U.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n);
var xe = {};
function ue(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var r = 0, a = new Array(n); r < n; r++) a[r] = e[r];
  return a;
}
function Ve(e, n) {
  if (e) {
    if (typeof e == "string") return ue(e, n);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? ue(e, n) : void 0;
  }
}
function oe(e) {
  return (function(n) {
    if (Array.isArray(n)) return ue(n);
  })(e) || (function(n) {
    if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null) return Array.from(n);
  })(e) || Ve(e) || (function() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  })();
}
function ne(e, n, r) {
  return n in e ? Object.defineProperty(e, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = r, e;
}
U.d(xe, { A: () => Ue });
const l = (me = { Fragment: () => Q.Fragment, computed: () => Q.computed, createTextVNode: () => Q.createTextVNode, createVNode: () => Q.createVNode, defineComponent: () => Q.defineComponent, nextTick: () => Q.nextTick, reactive: () => Q.reactive, ref: () => Q.ref, watch: () => Q.watch, watchEffect: () => Q.watchEffect }, le = {}, U.d(le, me), le), Be = (0, l.defineComponent)({ props: { data: { required: !0, type: String }, onClick: Function }, render: function() {
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
var me, le;
function se(e) {
  return se = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, se(e);
}
function Oe(e) {
  return Object.prototype.toString.call(e).slice(8, -1).toLowerCase();
}
function W(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "root", r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, a = (arguments.length > 3 ? arguments[3] : void 0) || {}, N = a.key, x = a.index, O = a.type, s = O === void 0 ? "content" : O, w = a.showComma, k = w !== void 0 && w, m = a.length, I = m === void 0 ? 1 : m, G = Oe(e);
  if (G === "array") {
    var $ = ge(e.map((function(L, P, R) {
      return W(L, "".concat(n, "[").concat(P, "]"), r + 1, { index: P, showComma: P !== R.length - 1, length: I, type: s });
    })));
    return [W("[", n, r, { showComma: !1, key: N, length: e.length, type: "arrayStart" })[0]].concat($, W("]", n, r, { showComma: k, length: e.length, type: "arrayEnd" })[0]);
  }
  if (G === "object") {
    var K = Object.keys(e), H = ge(K.map((function(L, P, R) {
      return W(e[L], /^[a-zA-Z_]\w*$/.test(L) ? "".concat(n, ".").concat(L) : "".concat(n, '["').concat(L, '"]'), r + 1, { key: L, showComma: P !== R.length - 1, length: I, type: s });
    })));
    return [W("{", n, r, { showComma: !1, key: N, index: x, length: K.length, type: "objectStart" })[0]].concat(H, W("}", n, r, { showComma: k, length: K.length, type: "objectEnd" })[0]);
  }
  return [{ content: e, level: r, key: N, index: x, path: n, showComma: k, length: I, type: s }];
}
function ge(e) {
  if (typeof Array.prototype.flat == "function") return e.flat();
  for (var n = oe(e), r = []; n.length; ) {
    var a = n.shift();
    Array.isArray(a) ? n.unshift.apply(n, oe(a)) : r.push(a);
  }
  return r;
}
function de(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : /* @__PURE__ */ new WeakMap();
  if (e == null) return e;
  if (e instanceof Date) return new Date(e);
  if (e instanceof RegExp) return new RegExp(e);
  if (se(e) !== "object") return e;
  if (n.get(e)) return n.get(e);
  if (Array.isArray(e)) {
    var r = e.map((function(x) {
      return de(x, n);
    }));
    return n.set(e, r), r;
  }
  var a = {};
  for (var N in e) a[N] = de(e[N], n);
  return n.set(e, a), a;
}
function ve(e, n, r, a, N, x, O) {
  try {
    var s = e[x](O), w = s.value;
  } catch (k) {
    return void r(k);
  }
  s.done ? n(w) : Promise.resolve(w).then(a, N);
}
var Ge = U(207), be = U.n(Ge);
function we(e, n) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    n && (a = a.filter((function(N) {
      return Object.getOwnPropertyDescriptor(e, N).enumerable;
    }))), r.push.apply(r, a);
  }
  return r;
}
function Ce(e) {
  for (var n = 1; n < arguments.length; n++) {
    var r = arguments[n] != null ? arguments[n] : {};
    n % 2 ? we(Object(r), !0).forEach((function(a) {
      ne(e, a, r[a]);
    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : we(Object(r)).forEach((function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
    }));
  }
  return e;
}
var je = { data: { type: [String, Number, Boolean, Array, Object], default: null }, rootPath: { type: String, default: "root" }, indent: { type: Number, default: 2 }, showLength: { type: Boolean, default: !1 }, showDoubleQuotes: { type: Boolean, default: !0 }, renderNodeKey: Function, renderNodeValue: Function, renderNodeActions: { type: [Boolean, Function], default: void 0 }, selectableType: String, showSelectController: { type: Boolean, default: !1 }, showLine: { type: Boolean, default: !0 }, showLineNumber: { type: Boolean, default: !1 }, selectOnClickNode: { type: Boolean, default: !0 }, nodeSelectable: { type: Function, default: function() {
  return !0;
} }, highlightSelectedNode: { type: Boolean, default: !0 }, showIcon: { type: Boolean, default: !1 }, theme: { type: String, default: "light" }, showKeyValueSpace: { type: Boolean, default: !0 }, editable: { type: Boolean, default: !1 }, editableTrigger: { type: String, default: "click" }, onNodeClick: { type: Function }, onNodeMouseover: { type: Function }, onBracketsClick: { type: Function }, onIconClick: { type: Function }, onValueChange: { type: Function } };
const Re = (0, l.defineComponent)({ name: "TreeNode", props: Ce(Ce({}, je), {}, { node: { type: Object, required: !0 }, collapsed: Boolean, checked: Boolean, style: Object, onSelectedChange: { type: Function } }), emits: ["nodeClick", "nodeMouseover", "bracketsClick", "iconClick", "selectedChange", "valueChange"], setup: function(e, n) {
  var r = n.emit, a = (0, l.computed)((function() {
    return Oe(e.node.content);
  })), N = (0, l.computed)((function() {
    return "vjs-value vjs-value-".concat(a.value);
  })), x = (0, l.computed)((function() {
    return e.showDoubleQuotes ? '"'.concat(e.node.key, '"') : e.node.key;
  })), O = (0, l.computed)((function() {
    return e.selectableType === "multiple";
  })), s = (0, l.computed)((function() {
    return e.selectableType === "single";
  })), w = (0, l.computed)((function() {
    return e.nodeSelectable(e.node) && (O.value || s.value);
  })), k = (0, l.reactive)({ editing: !1 }), m = function(C) {
    var y, b, D = (b = (y = C.target) === null || y === void 0 ? void 0 : y.value) === "null" ? null : b === "undefined" ? void 0 : b === "true" || b !== "false" && (b[0] + b[b.length - 1] === '""' || b[0] + b[b.length - 1] === "''" ? b.slice(1, -1) : typeof Number(b) == "number" && !isNaN(Number(b)) || b === "NaN" ? Number(b) : b);
    r("valueChange", D, e.node.path);
  }, I = (0, l.computed)((function() {
    var C, y = (C = e.node) === null || C === void 0 ? void 0 : C.content;
    return y === null ? y = "null" : y === void 0 && (y = "undefined"), a.value === "string" ? '"'.concat(y, '"') : y + "";
  })), G = function() {
    var C = e.renderNodeValue;
    return C ? C({ node: e.node, defaultValue: I.value }) : I.value;
  }, $ = function() {
    r("bracketsClick", !e.collapsed, e.node);
  }, K = function() {
    r("iconClick", !e.collapsed, e.node);
  }, H = function() {
    r("selectedChange", e.node);
  }, L = function() {
    r("nodeClick", e.node), w.value && e.selectOnClickNode && r("selectedChange", e.node);
  }, P = function() {
    r("nodeMouseover", e.node);
  }, R = function(C) {
    if (e.editable && !k.editing) {
      k.editing = !0;
      var y = function b(D) {
        var F;
        D.target !== C.target && ((F = D.target) === null || F === void 0 ? void 0 : F.parentElement) !== C.target && (k.editing = !1, document.removeEventListener("click", b));
      };
      document.removeEventListener("click", y), document.addEventListener("click", y);
    }
  }, Y = (function() {
    var C = (0, l.ref)(!1), y = (function() {
      var b, D = (b = be().mark((function F(q) {
        return be().wrap((function(A) {
          for (; ; ) switch (A.prev = A.next) {
            case 0:
              return A.prev = 0, A.next = 3, navigator.clipboard.writeText(q);
            case 3:
              C.value = !0, setTimeout((function() {
                C.value = !1;
              }), 300), A.next = 10;
              break;
            case 7:
              A.prev = 7, A.t0 = A.catch(0), console.error("[vue-json-pretty] Copy failed: ", A.t0);
            case 10:
            case "end":
              return A.stop();
          }
        }), F, null, [[0, 7]]);
      })), function() {
        var F = this, q = arguments;
        return new Promise((function(A, i) {
          var d = b.apply(F, q);
          function p(t) {
            ve(d, A, i, p, g, "next", t);
          }
          function g(t) {
            ve(d, A, i, p, g, "throw", t);
          }
          p(void 0);
        }));
      });
      return function(F) {
        return D.apply(this, arguments);
      };
    })();
    return { copy: y };
  })().copy, B = function() {
    var C = e.node, y = C.key, b = C.path, D = e.rootPath, F = new Function("data", "return data".concat(b.slice(D.length)))(e.data), q = JSON.stringify(y ? ne({}, y, F) : F, null, 2);
    Y(q);
  }, z = function() {
    var C = e.renderNodeActions;
    if (!C) return null;
    var y = { copy: B };
    return typeof C == "function" ? C({ node: e.node, defaultActions: y }) : (0, l.createVNode)("span", { onClick: B, class: "vjs-tree-node-actions-item" }, [(0, l.createTextVNode)("copy")]);
  };
  return function() {
    var C, y = e.node;
    return (0, l.createVNode)("div", { class: { "vjs-tree-node": !0, "has-selector": e.showSelectController, "has-carets": e.showIcon, "is-highlight": e.highlightSelectedNode && e.checked, dark: e.theme === "dark" }, onClick: L, onMouseover: P, style: e.style }, [e.showLineNumber && (0, l.createVNode)("span", { class: "vjs-node-index" }, [y.id + 1]), e.showSelectController && w.value && y.type !== "objectEnd" && y.type !== "arrayEnd" && (0, l.createVNode)(He, { isMultiple: O.value, checked: e.checked, onChange: H }, null), (0, l.createVNode)("div", { class: "vjs-indent" }, [Array.from(Array(y.level)).map((function(b, D) {
      return (0, l.createVNode)("div", { key: D, class: { "vjs-indent-unit": !0, "has-line": e.showLine } }, [Array.from(Array(e.indent)).map((function() {
        return (0, l.createVNode)(l.Fragment, null, [(0, l.createTextVNode)(" ")]);
      }))]);
    })), e.showIcon && (0, l.createVNode)(Me, { nodeType: y.type, onClick: K }, null)]), y.key && (0, l.createVNode)("span", { class: "vjs-key" }, [(C = e.renderNodeKey, C ? C({ node: e.node, defaultKey: x.value || "" }) : x.value), (0, l.createVNode)("span", { class: "vjs-colon" }, [":".concat(e.showKeyValueSpace ? " " : "")])]), (0, l.createVNode)("span", null, [y.type !== "content" && y.content ? (0, l.createVNode)(Be, { data: y.content.toString(), onClick: $ }, null) : (0, l.createVNode)("span", { class: N.value, onClick: !e.editable || e.editableTrigger && e.editableTrigger !== "click" ? void 0 : R, onDblclick: e.editable && e.editableTrigger === "dblclick" ? R : void 0 }, [e.editable && k.editing ? (0, l.createVNode)("input", { value: I.value, onChange: m, style: { padding: "3px 8px", border: "1px solid #eee", boxShadow: "none", boxSizing: "border-box", borderRadius: 5, fontFamily: "inherit" } }, null) : G()]), y.showComma && (0, l.createVNode)("span", null, [","]), e.showLength && e.collapsed && (0, l.createVNode)("span", { class: "vjs-comment" }, [(0, l.createTextVNode)(" // "), y.length, (0, l.createTextVNode)(" items ")])]), e.renderNodeActions && (0, l.createVNode)("span", { class: "vjs-tree-node-actions" }, [z()])]);
  };
} });
function ke(e, n) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    n && (a = a.filter((function(N) {
      return Object.getOwnPropertyDescriptor(e, N).enumerable;
    }))), r.push.apply(r, a);
  }
  return r;
}
function M(e) {
  for (var n = 1; n < arguments.length; n++) {
    var r = arguments[n] != null ? arguments[n] : {};
    n % 2 ? ke(Object(r), !0).forEach((function(a) {
      ne(e, a, r[a]);
    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ke(Object(r)).forEach((function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
    }));
  }
  return e;
}
const Ue = (0, l.defineComponent)({ name: "Tree", props: M(M({}, je), {}, { collapsedNodeLength: { type: Number, default: 1 / 0 }, deep: { type: Number, default: 1 / 0 }, pathCollapsible: { type: Function, default: function() {
  return !1;
} }, virtual: { type: Boolean, default: !1 }, height: { type: Number, default: 400 }, itemHeight: { type: Number, default: 20 }, dynamicHeight: { type: Boolean, default: !0 }, selectedValue: { type: [String, Array], default: function() {
  return "";
} }, collapsedOnClickBrackets: { type: Boolean, default: !0 }, style: Object, onSelectedChange: { type: Function }, theme: { type: String, default: "light" } }), slots: ["renderNodeKey", "renderNodeValue", "renderNodeActions"], emits: ["nodeClick", "nodeMouseover", "bracketsClick", "iconClick", "selectedChange", "update:selectedValue", "update:data"], setup: function(e, n) {
  var r = n.emit, a = n.slots, N = (0, l.ref)(), x = (0, l.computed)((function() {
    return W(e.data, e.rootPath);
  })), O = function(i, d) {
    return x.value.reduce((function(p, g) {
      var t, o = g.level >= i || g.length >= d, c = (t = e.pathCollapsible) === null || t === void 0 ? void 0 : t.call(e, g);
      return g.type !== "objectStart" && g.type !== "arrayStart" || !o && !c ? p : M(M({}, p), {}, ne({}, g.path, 1));
    }), {});
  }, s = (0, l.reactive)({ translateY: 0, visibleData: null, hiddenPaths: O(e.deep, e.collapsedNodeLength), startIndex: 0, endIndex: 0 }), w = [], k = [], m = 0, I = {}, G = function(i) {
    w = Array(i).fill(0).map((function() {
      return e.itemHeight || 20;
    })), (k = new Array(i + 1))[0] = 0;
    for (var d = 0; d < i; d++) k[d + 1] = k[d] + w[d];
    m = k[i] || 0;
  }, $ = function(i) {
    var d = w.length;
    i < 0 && (i = 0), i > d && (i = d);
    for (var p = i; p < d; p++) k[p + 1] = k[p] + w[p];
    m = k[d] || 0;
  }, K = function(i, d) {
    for (var p = 0, g = i.length - 1; p < g; ) {
      var t = p + g >>> 1;
      i[t] < d ? p = t + 1 : g = t;
    }
    return p;
  }, H = (0, l.computed)((function() {
    for (var i = null, d = [], p = x.value.length, g = 0; g < p; g++) {
      var t = M(M({}, x.value[g]), {}, { id: g }), o = s.hiddenPaths[t.path];
      if (i && i.path === t.path) {
        var c = i.type === "objectStart", h = M(M(M({}, t), i), {}, { showComma: t.showComma, content: c ? "{...}" : "[...]", type: c ? "objectCollapsed" : "arrayCollapsed" });
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
  })), P = (0, l.computed)((function() {
    return !e.selectableType || e.selectOnClickNode || e.showSelectController ? "" : "When selectableType is not null, selectOnClickNode and showSelectController cannot be false at the same time, because this will cause the selection to fail.";
  })), R = (0, l.computed)((function() {
    return e.dynamicHeight ? m || 0 : H.value.length * e.itemHeight;
  })), Y = function i() {
    var d = H.value;
    if (d) if (e.virtual) {
      var p, g = ((p = N.value) === null || p === void 0 ? void 0 : p.scrollTop) || 0;
      if (e.dynamicHeight) {
        w.length !== d.length && G(d.length);
        var t = (function(T) {
          var f = K(k, T + 1e-4);
          return Math.max(0, Math.min(f - 1, w.length - 1));
        })(g), o = (function(T, f) {
          var V = K(k, T + f);
          return Math.max(0, Math.min(V + 1, w.length));
        })(g, e.height), c = Math.max(0, t - 5), h = Math.min(d.length, o + 5);
        s.startIndex = c, s.endIndex = h, s.translateY = k[c] || 0, s.visibleData = d.slice(c, h), (0, l.nextTick)().then((function() {
          for (var T = !1, f = s.startIndex; f < s.endIndex; f++) {
            var V = I[f];
            if (V) {
              var E = V.offsetHeight;
              E && w[f] !== E && (w[f] = E, k[f + 1] = k[f] + w[f], $(f + 1), T = !0);
            }
          }
          T && i();
        }));
      } else {
        var u = e.height / e.itemHeight, v = Math.floor(g / e.itemHeight), S = v < 0 ? 0 : v + u > d.length ? d.length - u : v;
        S < 0 && (S = 0);
        var j = S + u;
        s.translateY = S * e.itemHeight, s.startIndex = S, s.endIndex = j, s.visibleData = d.slice(S, j);
      }
    } else s.translateY = 0, s.startIndex = 0, s.endIndex = d.length, s.visibleData = d;
  }, B = null, z = function() {
    B && cancelAnimationFrame(B), B = requestAnimationFrame((function() {
      Y();
    }));
  }, C = function(i) {
    var d, p, g = i.path, t = e.selectableType;
    if (t === "multiple") {
      var o = L.value.findIndex((function(v) {
        return v === g;
      })), c = oe(L.value);
      o !== -1 ? c.splice(o, 1) : c.push(g), r("update:selectedValue", c), r("selectedChange", c, oe(L.value));
    } else if (t === "single" && L.value[0] !== g) {
      var h = (d = L.value, p = 1, (function(v) {
        if (Array.isArray(v)) return v;
      })(d) || (function(v, S) {
        var j = v == null ? null : typeof Symbol < "u" && v[Symbol.iterator] || v["@@iterator"];
        if (j != null) {
          var T, f, V = [], E = !0, Z = !1;
          try {
            for (j = j.call(v); !(E = (T = j.next()).done) && (V.push(T.value), !S || V.length !== S); E = !0) ;
          } catch (re) {
            Z = !0, f = re;
          } finally {
            try {
              E || j.return == null || j.return();
            } finally {
              if (Z) throw f;
            }
          }
          return V;
        }
      })(d, p) || Ve(d, p) || (function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      })())[0], u = g;
      r("update:selectedValue", u), r("selectedChange", u, h);
    }
  }, y = function(i) {
    r("nodeClick", i);
  }, b = function(i) {
    r("nodeMouseover", i);
  }, D = function(i, d) {
    if (i) s.hiddenPaths = M(M({}, s.hiddenPaths), {}, ne({}, d, 1));
    else {
      var p = M({}, s.hiddenPaths);
      delete p[d], s.hiddenPaths = p;
    }
  }, F = function(i, d) {
    e.collapsedOnClickBrackets && D(i, d.path), r("bracketsClick", i, d);
  }, q = function(i, d) {
    D(i, d.path), r("iconClick", i, d);
  }, A = function(i, d) {
    var p = de(e.data), g = e.rootPath;
    new Function("data", "val", "data".concat(d.slice(g.length), "=val"))(p, i), r("update:data", p);
  };
  return (0, l.watchEffect)((function() {
    P.value && (function(i) {
      throw new Error("[VueJSONPretty] ".concat(i));
    })(P.value);
  })), (0, l.watchEffect)((function() {
    H.value && (e.virtual && e.dynamicHeight && w.length !== H.value.length && G(H.value.length), Y());
  })), (0, l.watch)((function() {
    return [e.dynamicHeight, e.itemHeight, x.value.length];
  }), (function() {
    e.virtual && e.dynamicHeight && (G(H.value.length), (0, l.nextTick)(Y));
  })), (0, l.watch)((function() {
    return e.deep;
  }), (function(i) {
    i && (s.hiddenPaths = O(i, e.collapsedNodeLength));
  })), (0, l.watch)((function() {
    return e.collapsedNodeLength;
  }), (function(i) {
    i && (s.hiddenPaths = O(e.deep, i));
  })), function() {
    var i, d, p, g, t, o = (i = e.renderNodeKey) !== null && i !== void 0 ? i : a.renderNodeKey, c = (d = e.renderNodeValue) !== null && d !== void 0 ? d : a.renderNodeValue, h = (p = (g = e.renderNodeActions) !== null && g !== void 0 ? g : a.renderNodeActions) !== null && p !== void 0 && p, u = (t = s.visibleData) === null || t === void 0 ? void 0 : t.map((function(v, S) {
      var j = s.startIndex + S;
      return (0, l.createVNode)("div", { key: v.id, ref: function(T) {
        return (function(f, V) {
          V ? I[f] = V : delete I[f];
        })(j, T || null);
      } }, [(0, l.createVNode)(Re, { data: e.data, rootPath: e.rootPath, indent: e.indent, node: v, collapsed: !!s.hiddenPaths[v.path], theme: e.theme, showDoubleQuotes: e.showDoubleQuotes, showLength: e.showLength, checked: L.value.includes(v.path), selectableType: e.selectableType, showLine: e.showLine, showLineNumber: e.showLineNumber, showSelectController: e.showSelectController, selectOnClickNode: e.selectOnClickNode, nodeSelectable: e.nodeSelectable, highlightSelectedNode: e.highlightSelectedNode, editable: e.editable, editableTrigger: e.editableTrigger, showIcon: e.showIcon, showKeyValueSpace: e.showKeyValueSpace, renderNodeKey: o, renderNodeValue: c, renderNodeActions: h, onNodeClick: y, onNodeMouseover: b, onBracketsClick: F, onIconClick: q, onSelectedChange: C, onValueChange: A, class: e.dynamicHeight ? "dynamic-height" : void 0, style: e.dynamicHeight ? {} : e.itemHeight && e.itemHeight !== 20 ? { lineHeight: "".concat(e.itemHeight, "px") } : {} }, null)]);
    }));
    return (0, l.createVNode)("div", { ref: N, class: { "vjs-tree": !0, "is-virtual": e.virtual, dark: e.theme === "dark" }, onScroll: e.virtual ? z : void 0, style: e.showLineNumber ? M({ paddingLeft: "".concat(12 * Number(x.value.length.toString().length), "px") }, e.style) : e.style }, [e.virtual ? (0, l.createVNode)("div", { class: "vjs-tree-list", style: { height: "".concat(e.height, "px") } }, [(0, l.createVNode)("div", { class: "vjs-tree-list-holder", style: { height: "".concat(R.value, "px") } }, [(0, l.createVNode)("div", { class: "vjs-tree-list-holder-inner", style: { transform: "translateY(".concat(s.translateY, "px)") } }, [u])])]) : u]);
  };
} });
var Ke = xe.A;
const Ye = {
  key: 0,
  class: "grid grid-cols-2 grid-rows-4 gap-4 overflow-auto w-full h-full"
}, qe = { key: 1 }, Qe = /* @__PURE__ */ Ne({
  __name: "Preview",
  props: {
    dataSource: {}
  },
  setup(e) {
    const n = e, r = ee(null), a = ee(null), N = Pe(null), x = ee(n.dataSource), { update: O } = Ae(n.dataSource.type, x, N);
    return ce(N, async () => {
      a.value = await N.value.getData("FeatureCollection"), r.value = a.value?.features || [];
    }, { deep: !0 }), ce(n.dataSource, () => {
      O();
    }, { deep: !0 }), (s, w) => N.value ? (X(), te("div", Ye, [
      J(Le(Ke), { data: a.value }, null, 8, ["data"])
    ])) : (X(), te("div", qe, [...w[0] || (w[0] = [
      Te("h3", null, "OGC Feature Collection Preview", -1)
    ])]));
  }
}), $e = /* @__PURE__ */ Ne({
  __name: "Settings",
  props: {
    config: {},
    dataSources: {},
    connections: {}
  },
  setup(e) {
    const n = Fe(De), r = Ee(() => e.dataSources.filter((O) => O.type === "csv" || O.type === "xmla")), a = ee([]), N = ee([]), x = ["Point"];
    return ce(() => e.config.connectedDatasources, async (O) => {
      a.value = await pe.getHeaders(
        O,
        n
      ), N.value = await pe.getProperties(
        O,
        n
      );
    }), (O, s) => {
      const w = fe("VaSelect"), k = fe("VaCheckbox");
      return X(), te(ie, null, [
        J(w, {
          modelValue: e.config.connectedDatasources,
          "onUpdate:modelValue": s[0] || (s[0] = (m) => e.config.connectedDatasources = m),
          label: "Sources",
          options: r.value,
          multiple: "",
          "text-by": "name",
          "value-by": "uid"
        }, null, 8, ["modelValue", "options"]),
        J(k, {
          modelValue: e.config.useGeometryFromData,
          "onUpdate:modelValue": s[1] || (s[1] = (m) => e.config.useGeometryFromData = m),
          label: "Use geometry from data",
          style: { margin: "0.5rem 0" }
        }, null, 8, ["modelValue"]),
        e.config.useGeometryFromData ? (X(), te(ie, { key: 0 }, [
          J(k, {
            modelValue: e.config.useGeometryFromProps,
            "onUpdate:modelValue": s[2] || (s[2] = (m) => e.config.useGeometryFromProps = m),
            label: "Use geometry from properties",
            style: { margin: "0.5rem 0" }
          }, null, 8, ["modelValue"]),
          e.config.useGeometryFromProps ? (X(), he(w, {
            key: 0,
            modelValue: e.config.geometryPropsField,
            "onUpdate:modelValue": s[3] || (s[3] = (m) => e.config.geometryPropsField = m),
            label: "Geometry properties field",
            options: N.value
          }, null, 8, ["modelValue", "options"])) : (X(), he(w, {
            key: 1,
            modelValue: e.config.geometryField,
            "onUpdate:modelValue": s[4] || (s[4] = (m) => e.config.geometryField = m),
            label: "Geometry field",
            options: a.value
          }, null, 8, ["modelValue", "options"]))
        ], 64)) : (X(), te(ie, { key: 1 }, [
          J(w, {
            modelValue: e.config.xField,
            "onUpdate:modelValue": s[5] || (s[5] = (m) => e.config.xField = m),
            label: "X Coordinate field",
            options: a.value
          }, null, 8, ["modelValue", "options"]),
          J(w, {
            modelValue: e.config.yField,
            "onUpdate:modelValue": s[6] || (s[6] = (m) => e.config.yField = m),
            label: "Y Coordinate field",
            options: a.value
          }, null, 8, ["modelValue", "options"]),
          J(w, {
            modelValue: e.config.geometryType,
            "onUpdate:modelValue": s[7] || (s[7] = (m) => e.config.geometryType = m),
            label: "Geometry type",
            options: x
          }, null, 8, ["modelValue"])
        ], 64))
      ], 64);
    };
  }
}), ze = Symbol.for("OgcFeatureComposer"), Je = Symbol.for("OgcComposerPreview"), We = Symbol.for("OgcComposerSettings");
function nt({ services: e }) {
  e.register("OgcComposerPreview", Qe), e.register("OgcComposerSettings", $e), e.getRequired(Se).registerDatasourceType("OGC Composer", {
    Store: ze,
    Preview: Je,
    Settings: We
  });
}
function rt({ services: e }) {
  e.getRequired(Se).unregisterDatasourceType("OGC Composer"), e.unregister("OgcComposerPreview"), e.unregister("OgcComposerSettings");
}
export {
  nt as activate,
  rt as deactivate
};
