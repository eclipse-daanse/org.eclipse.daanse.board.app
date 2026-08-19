(function(){var i="ui.vue.composer.ogc",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".vjs-tree-brackets{cursor:pointer}.vjs-tree-brackets:hover{color:#1890ff}.vjs-check-controller{position:absolute;left:0}.vjs-check-controller.is-checked .vjs-check-controller-inner{background-color:#1890ff;border-color:#0076e4}.vjs-check-controller.is-checked .vjs-check-controller-inner.is-checkbox:after{transform:rotate(45deg) scaleY(1)}.vjs-check-controller.is-checked .vjs-check-controller-inner.is-radio:after{transform:translate(-50%,-50%) scale(1)}.vjs-check-controller .vjs-check-controller-inner{display:inline-block;position:relative;border:1px solid #bfcbd9;border-radius:2px;vertical-align:middle;box-sizing:border-box;width:16px;height:16px;background-color:#fff;z-index:1;cursor:pointer;transition:border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46)}.vjs-check-controller .vjs-check-controller-inner:after{box-sizing:content-box;content:\"\";border:2px solid #fff;border-left:0;border-top:0;height:8px;left:4px;position:absolute;top:1px;transform:rotate(45deg) scaleY(0);width:4px;transition:transform .15s cubic-bezier(.71,-.46,.88,.6) .05s;transform-origin:center}.vjs-check-controller .vjs-check-controller-inner.is-radio{border-radius:100%}.vjs-check-controller .vjs-check-controller-inner.is-radio:after{border-radius:100%;height:4px;background-color:#fff;left:50%;top:50%}.vjs-check-controller .vjs-check-controller-original{opacity:0;outline:none;position:absolute;z-index:-1;top:0;left:0;right:0;bottom:0;margin:0}.vjs-carets{position:absolute;right:0;cursor:pointer}.vjs-carets svg{transition:transform .3s}.vjs-carets:hover{color:#1890ff}.vjs-carets-close{transform:rotate(-90deg)}.vjs-tree-node{display:flex;position:relative;line-height:20px}.vjs-tree-node.has-carets{padding-left:15px}.vjs-tree-node.has-carets.has-selector,.vjs-tree-node.has-selector{padding-left:30px}.vjs-tree-node.is-highlight,.vjs-tree-node:hover{background-color:#e6f7ff;border-radius:4px}.vjs-tree-node.is-highlight .vjs-tree-node-actions,.vjs-tree-node:hover .vjs-tree-node-actions{display:block}.vjs-tree-node .vjs-indent{display:flex;position:relative}.vjs-tree-node .vjs-indent-unit.has-line{border-left:1px dashed #bfcbd9}.vjs-tree-node .vjs-tree-node-actions{display:none;position:absolute;right:0;top:0;padding:0 4px;background-color:#e6f7ff;border-radius:4px}.vjs-tree-node .vjs-tree-node-actions .vjs-tree-node-actions-item{cursor:pointer}.vjs-tree-node .vjs-tree-node-actions .vjs-tree-node-actions-item:hover{color:#1890ff}.vjs-tree-node.dark.is-highlight,.vjs-tree-node.dark .vjs-tree-node-actions,.vjs-tree-node.dark:hover{background-color:#2e4558}.vjs-node-index{position:absolute;right:100%;margin-right:4px;user-select:none}.vjs-colon{white-space:pre}.vjs-comment{color:#bfcbd9}.vjs-key{white-space:nowrap}.vjs-value{word-break:break-word}.vjs-tree-node.dynamic-height .vjs-value{white-space:pre-wrap}.vjs-value-null,.vjs-value-undefined{color:#d55fde}.vjs-value-boolean,.vjs-value-number{color:#1d8ce0}.vjs-value-string{color:#13ce66}.vjs-tree{font-family:Monaco,Menlo,Consolas,Bitstream Vera Sans Mono,monospace;font-size:14px;text-align:left}.vjs-tree.is-virtual{overflow:auto}.vjs-tree.is-virtual .vjs-tree-node{white-space:nowrap}";})();
const e = __tsm__.require("vue");
const { defineComponent, ref, shallowRef, watch, createElementBlock, openBlock, createVNode, unref, createElementVNode, computed, resolveComponent, Fragment, createBlock } = __tsm__.require("vue");
const { useTemporaryStore } = __tsm__.require("org.eclipse.daanse.board.app.ui.vue.composables");
const { container, identifiers: identifiers$1 } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
const { identifier: identifier$2, DATASOURCE_REPOSITORY } = __tsm__.require("org.eclipse.daanse.board.app.lib.repository.datasource");
var t$1 = { 207: (e2, t2, n2) => {
  e2.exports = n2(452);
}, 452: (e2) => {
  var t2 = (function(e3) {
    var t3, n2 = Object.prototype, r2 = n2.hasOwnProperty, o2 = "function" == typeof Symbol ? Symbol : {}, a2 = o2.iterator || "@@iterator", i2 = o2.asyncIterator || "@@asyncIterator", c2 = o2.toStringTag || "@@toStringTag";
    function l2(e4, t4, n3) {
      return Object.defineProperty(e4, t4, { value: n3, enumerable: true, configurable: true, writable: true }), e4[t4];
    }
    try {
      l2({}, "");
    } catch (e4) {
      l2 = function(e5, t4, n3) {
        return e5[t4] = n3;
      };
    }
    function u2(e4, t4, n3, r3) {
      var o3 = t4 && t4.prototype instanceof y2 ? t4 : y2, a3 = Object.create(o3.prototype), i3 = new V2(r3 || []);
      return a3._invoke = /* @__PURE__ */ (function(e5, t5, n4) {
        var r4 = s2;
        return function(o4, a4) {
          if (r4 === f2) throw new Error("Generator is already running");
          if (r4 === p2) {
            if ("throw" === o4) throw a4;
            return P2();
          }
          for (n4.method = o4, n4.arg = a4; ; ) {
            var i4 = n4.delegate;
            if (i4) {
              var c3 = j2(i4, n4);
              if (c3) {
                if (c3 === v2) continue;
                return c3;
              }
            }
            if ("next" === n4.method) n4.sent = n4._sent = n4.arg;
            else if ("throw" === n4.method) {
              if (r4 === s2) throw r4 = p2, n4.arg;
              n4.dispatchException(n4.arg);
            } else "return" === n4.method && n4.abrupt("return", n4.arg);
            r4 = f2;
            var l3 = d2(e5, t5, n4);
            if ("normal" === l3.type) {
              if (r4 = n4.done ? p2 : h2, l3.arg === v2) continue;
              return { value: l3.arg, done: n4.done };
            }
            "throw" === l3.type && (r4 = p2, n4.method = "throw", n4.arg = l3.arg);
          }
        };
      })(e4, n3, i3), a3;
    }
    function d2(e4, t4, n3) {
      try {
        return { type: "normal", arg: e4.call(t4, n3) };
      } catch (e5) {
        return { type: "throw", arg: e5 };
      }
    }
    e3.wrap = u2;
    var s2 = "suspendedStart", h2 = "suspendedYield", f2 = "executing", p2 = "completed", v2 = {};
    function y2() {
    }
    function g2() {
    }
    function m2() {
    }
    var b2 = {};
    l2(b2, a2, (function() {
      return this;
    }));
    var w2 = Object.getPrototypeOf, N2 = w2 && w2(w2(L2([])));
    N2 && N2 !== n2 && r2.call(N2, a2) && (b2 = N2);
    var k2 = m2.prototype = y2.prototype = Object.create(b2);
    function C2(e4) {
      ["next", "throw", "return"].forEach((function(t4) {
        l2(e4, t4, (function(e5) {
          return this._invoke(t4, e5);
        }));
      }));
    }
    function x2(e4, t4) {
      function n3(o4, a3, i3, c3) {
        var l3 = d2(e4[o4], e4, a3);
        if ("throw" !== l3.type) {
          var u3 = l3.arg, s3 = u3.value;
          return s3 && "object" == typeof s3 && r2.call(s3, "__await") ? t4.resolve(s3.__await).then((function(e5) {
            n3("next", e5, i3, c3);
          }), (function(e5) {
            n3("throw", e5, i3, c3);
          })) : t4.resolve(s3).then((function(e5) {
            u3.value = e5, i3(u3);
          }), (function(e5) {
            return n3("throw", e5, i3, c3);
          }));
        }
        c3(l3.arg);
      }
      var o3;
      this._invoke = function(e5, r3) {
        function a3() {
          return new t4((function(t5, o4) {
            n3(e5, r3, t5, o4);
          }));
        }
        return o3 = o3 ? o3.then(a3, a3) : a3();
      };
    }
    function j2(e4, n3) {
      var r3 = e4.iterator[n3.method];
      if (r3 === t3) {
        if (n3.delegate = null, "throw" === n3.method) {
          if (e4.iterator.return && (n3.method = "return", n3.arg = t3, j2(e4, n3), "throw" === n3.method)) return v2;
          n3.method = "throw", n3.arg = new TypeError("The iterator does not provide a 'throw' method");
        }
        return v2;
      }
      var o3 = d2(r3, e4.iterator, n3.arg);
      if ("throw" === o3.type) return n3.method = "throw", n3.arg = o3.arg, n3.delegate = null, v2;
      var a3 = o3.arg;
      return a3 ? a3.done ? (n3[e4.resultName] = a3.value, n3.next = e4.nextLoc, "return" !== n3.method && (n3.method = "next", n3.arg = t3), n3.delegate = null, v2) : a3 : (n3.method = "throw", n3.arg = new TypeError("iterator result is not an object"), n3.delegate = null, v2);
    }
    function S2(e4) {
      var t4 = { tryLoc: e4[0] };
      1 in e4 && (t4.catchLoc = e4[1]), 2 in e4 && (t4.finallyLoc = e4[2], t4.afterLoc = e4[3]), this.tryEntries.push(t4);
    }
    function O2(e4) {
      var t4 = e4.completion || {};
      t4.type = "normal", delete t4.arg, e4.completion = t4;
    }
    function V2(e4) {
      this.tryEntries = [{ tryLoc: "root" }], e4.forEach(S2, this), this.reset(true);
    }
    function L2(e4) {
      if (e4) {
        var n3 = e4[a2];
        if (n3) return n3.call(e4);
        if ("function" == typeof e4.next) return e4;
        if (!isNaN(e4.length)) {
          var o3 = -1, i3 = function n4() {
            for (; ++o3 < e4.length; ) if (r2.call(e4, o3)) return n4.value = e4[o3], n4.done = false, n4;
            return n4.value = t3, n4.done = true, n4;
          };
          return i3.next = i3;
        }
      }
      return { next: P2 };
    }
    function P2() {
      return { value: t3, done: true };
    }
    return g2.prototype = m2, l2(k2, "constructor", m2), l2(m2, "constructor", g2), g2.displayName = l2(m2, c2, "GeneratorFunction"), e3.isGeneratorFunction = function(e4) {
      var t4 = "function" == typeof e4 && e4.constructor;
      return !!t4 && (t4 === g2 || "GeneratorFunction" === (t4.displayName || t4.name));
    }, e3.mark = function(e4) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(e4, m2) : (e4.__proto__ = m2, l2(e4, c2, "GeneratorFunction")), e4.prototype = Object.create(k2), e4;
    }, e3.awrap = function(e4) {
      return { __await: e4 };
    }, C2(x2.prototype), l2(x2.prototype, i2, (function() {
      return this;
    })), e3.AsyncIterator = x2, e3.async = function(t4, n3, r3, o3, a3) {
      void 0 === a3 && (a3 = Promise);
      var i3 = new x2(u2(t4, n3, r3, o3), a3);
      return e3.isGeneratorFunction(n3) ? i3 : i3.next().then((function(e4) {
        return e4.done ? e4.value : i3.next();
      }));
    }, C2(k2), l2(k2, c2, "Generator"), l2(k2, a2, (function() {
      return this;
    })), l2(k2, "toString", (function() {
      return "[object Generator]";
    })), e3.keys = function(e4) {
      var t4 = [];
      for (var n3 in e4) t4.push(n3);
      return t4.reverse(), function n4() {
        for (; t4.length; ) {
          var r3 = t4.pop();
          if (r3 in e4) return n4.value = r3, n4.done = false, n4;
        }
        return n4.done = true, n4;
      };
    }, e3.values = L2, V2.prototype = { constructor: V2, reset: function(e4) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t3, this.done = false, this.delegate = null, this.method = "next", this.arg = t3, this.tryEntries.forEach(O2), !e4) for (var n3 in this) "t" === n3.charAt(0) && r2.call(this, n3) && !isNaN(+n3.slice(1)) && (this[n3] = t3);
    }, stop: function() {
      this.done = true;
      var e4 = this.tryEntries[0].completion;
      if ("throw" === e4.type) throw e4.arg;
      return this.rval;
    }, dispatchException: function(e4) {
      if (this.done) throw e4;
      var n3 = this;
      function o3(r3, o4) {
        return c3.type = "throw", c3.arg = e4, n3.next = r3, o4 && (n3.method = "next", n3.arg = t3), !!o4;
      }
      for (var a3 = this.tryEntries.length - 1; a3 >= 0; --a3) {
        var i3 = this.tryEntries[a3], c3 = i3.completion;
        if ("root" === i3.tryLoc) return o3("end");
        if (i3.tryLoc <= this.prev) {
          var l3 = r2.call(i3, "catchLoc"), u3 = r2.call(i3, "finallyLoc");
          if (l3 && u3) {
            if (this.prev < i3.catchLoc) return o3(i3.catchLoc, true);
            if (this.prev < i3.finallyLoc) return o3(i3.finallyLoc);
          } else if (l3) {
            if (this.prev < i3.catchLoc) return o3(i3.catchLoc, true);
          } else {
            if (!u3) throw new Error("try statement without catch or finally");
            if (this.prev < i3.finallyLoc) return o3(i3.finallyLoc);
          }
        }
      }
    }, abrupt: function(e4, t4) {
      for (var n3 = this.tryEntries.length - 1; n3 >= 0; --n3) {
        var o3 = this.tryEntries[n3];
        if (o3.tryLoc <= this.prev && r2.call(o3, "finallyLoc") && this.prev < o3.finallyLoc) {
          var a3 = o3;
          break;
        }
      }
      a3 && ("break" === e4 || "continue" === e4) && a3.tryLoc <= t4 && t4 <= a3.finallyLoc && (a3 = null);
      var i3 = a3 ? a3.completion : {};
      return i3.type = e4, i3.arg = t4, a3 ? (this.method = "next", this.next = a3.finallyLoc, v2) : this.complete(i3);
    }, complete: function(e4, t4) {
      if ("throw" === e4.type) throw e4.arg;
      return "break" === e4.type || "continue" === e4.type ? this.next = e4.arg : "return" === e4.type ? (this.rval = this.arg = e4.arg, this.method = "return", this.next = "end") : "normal" === e4.type && t4 && (this.next = t4), v2;
    }, finish: function(e4) {
      for (var t4 = this.tryEntries.length - 1; t4 >= 0; --t4) {
        var n3 = this.tryEntries[t4];
        if (n3.finallyLoc === e4) return this.complete(n3.completion, n3.afterLoc), O2(n3), v2;
      }
    }, catch: function(e4) {
      for (var t4 = this.tryEntries.length - 1; t4 >= 0; --t4) {
        var n3 = this.tryEntries[t4];
        if (n3.tryLoc === e4) {
          var r3 = n3.completion;
          if ("throw" === r3.type) {
            var o3 = r3.arg;
            O2(n3);
          }
          return o3;
        }
      }
      throw new Error("illegal catch attempt");
    }, delegateYield: function(e4, n3, r3) {
      return this.delegate = { iterator: L2(e4), resultName: n3, nextLoc: r3 }, "next" === this.method && (this.arg = t3), v2;
    } }, e3;
  })(e2.exports);
  try {
    regeneratorRuntime = t2;
  } catch (e3) {
    "object" == typeof globalThis ? globalThis.regeneratorRuntime = t2 : Function("r", "regeneratorRuntime = r")(t2);
  }
} }, n = {};
function r(e2) {
  var o2 = n[e2];
  if (void 0 !== o2) return o2.exports;
  var a2 = n[e2] = { exports: {} };
  return t$1[e2](a2, a2.exports, r), a2.exports;
}
r.n = (e2) => {
  var t2 = e2 && e2.__esModule ? () => e2.default : () => e2;
  return r.d(t2, { a: t2 }), t2;
}, r.d = (e2, t2) => {
  for (var n2 in t2) r.o(t2, n2) && !r.o(e2, n2) && Object.defineProperty(e2, n2, { enumerable: true, get: t2[n2] });
}, r.o = (e2, t2) => Object.prototype.hasOwnProperty.call(e2, t2);
var o = {};
function a$1(e2, t2) {
  (null == t2 || t2 > e2.length) && (t2 = e2.length);
  for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++) r2[n2] = e2[n2];
  return r2;
}
function i$1(e2, t2) {
  if (e2) {
    if ("string" == typeof e2) return a$1(e2, t2);
    var n2 = Object.prototype.toString.call(e2).slice(8, -1);
    return "Object" === n2 && e2.constructor && (n2 = e2.constructor.name), "Map" === n2 || "Set" === n2 ? Array.from(e2) : "Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? a$1(e2, t2) : void 0;
  }
}
function c$1(e2) {
  return (function(e3) {
    if (Array.isArray(e3)) return a$1(e3);
  })(e2) || (function(e3) {
    if ("undefined" != typeof Symbol && null != e3[Symbol.iterator] || null != e3["@@iterator"]) return Array.from(e3);
  })(e2) || i$1(e2) || (function() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  })();
}
function l$1(e2, t2, n2) {
  return t2 in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
}
r.d(o, { A: () => L$1 });
const u = (f$1 = { Fragment: () => e.Fragment, computed: () => e.computed, createTextVNode: () => e.createTextVNode, createVNode: () => e.createVNode, defineComponent: () => e.defineComponent, nextTick: () => e.nextTick, reactive: () => e.reactive, ref: () => e.ref, watch: () => e.watch, watchEffect: () => e.watchEffect }, p = {}, r.d(p, f$1), p), d = (0, u.defineComponent)({ props: { data: { required: true, type: String }, onClick: Function }, render: function() {
  var e2 = this.data, t2 = this.onClick;
  return (0, u.createVNode)("span", { class: "vjs-tree-brackets", onClick: t2 }, [e2]);
} }), s = (0, u.defineComponent)({ emits: ["change", "update:modelValue"], props: { checked: { type: Boolean, default: false }, isMultiple: Boolean, onChange: Function }, setup: function(e2, t2) {
  var n2 = t2.emit;
  return { uiType: (0, u.computed)((function() {
    return e2.isMultiple ? "checkbox" : "radio";
  })), model: (0, u.computed)({ get: function() {
    return e2.checked;
  }, set: function(e3) {
    return n2("update:modelValue", e3);
  } }) };
}, render: function() {
  var e2 = this.uiType, t2 = this.model, n2 = this.$emit;
  return (0, u.createVNode)("label", { class: ["vjs-check-controller", t2 ? "is-checked" : ""], onClick: function(e3) {
    return e3.stopPropagation();
  } }, [(0, u.createVNode)("span", { class: "vjs-check-controller-inner is-".concat(e2) }, null), (0, u.createVNode)("input", { checked: t2, class: "vjs-check-controller-original is-".concat(e2), type: e2, onChange: function() {
    return n2("change", t2);
  } }, null)]);
} }), h$1 = (0, u.defineComponent)({ props: { nodeType: { required: true, type: String }, onClick: Function }, render: function() {
  var e2 = this.nodeType, t2 = this.onClick, n2 = "objectStart" === e2 || "arrayStart" === e2;
  return n2 || "objectCollapsed" === e2 || "arrayCollapsed" === e2 ? (0, u.createVNode)("span", { class: "vjs-carets vjs-carets-".concat(n2 ? "open" : "close"), onClick: t2 }, [(0, u.createVNode)("svg", { viewBox: "0 0 1024 1024", focusable: "false", "data-icon": "caret-down", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true" }, [(0, u.createVNode)("path", { d: "M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z" }, null)])]) : null;
} });
var f$1, p;
function v(e2) {
  return v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
    return typeof e3;
  } : function(e3) {
    return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
  }, v(e2);
}
function y$1(e2) {
  return Object.prototype.toString.call(e2).slice(8, -1).toLowerCase();
}
function g$1(e2) {
  var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "root", n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, r2 = (arguments.length > 3 ? arguments[3] : void 0) || {}, o2 = r2.key, a2 = r2.index, i2 = r2.type, c2 = void 0 === i2 ? "content" : i2, l2 = r2.showComma, u2 = void 0 !== l2 && l2, d2 = r2.length, s2 = void 0 === d2 ? 1 : d2, h2 = y$1(e2);
  if ("array" === h2) {
    var f2 = m$1(e2.map((function(e3, r3, o3) {
      return g$1(e3, "".concat(t2, "[").concat(r3, "]"), n2 + 1, { index: r3, showComma: r3 !== o3.length - 1, length: s2, type: c2 });
    })));
    return [g$1("[", t2, n2, { showComma: false, key: o2, length: e2.length, type: "arrayStart" })[0]].concat(f2, g$1("]", t2, n2, { showComma: u2, length: e2.length, type: "arrayEnd" })[0]);
  }
  if ("object" === h2) {
    var p2 = Object.keys(e2), v2 = m$1(p2.map((function(r3, o3, a3) {
      return g$1(e2[r3], /^[a-zA-Z_]\w*$/.test(r3) ? "".concat(t2, ".").concat(r3) : "".concat(t2, '["').concat(r3, '"]'), n2 + 1, { key: r3, showComma: o3 !== a3.length - 1, length: s2, type: c2 });
    })));
    return [g$1("{", t2, n2, { showComma: false, key: o2, index: a2, length: p2.length, type: "objectStart" })[0]].concat(v2, g$1("}", t2, n2, { showComma: u2, length: p2.length, type: "objectEnd" })[0]);
  }
  return [{ content: e2, level: n2, key: o2, index: a2, path: t2, showComma: u2, length: s2, type: c2 }];
}
function m$1(e2) {
  if ("function" == typeof Array.prototype.flat) return e2.flat();
  for (var t2 = c$1(e2), n2 = []; t2.length; ) {
    var r2 = t2.shift();
    Array.isArray(r2) ? t2.unshift.apply(t2, c$1(r2)) : n2.push(r2);
  }
  return n2;
}
function b$1(e2) {
  var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : /* @__PURE__ */ new WeakMap();
  if (null == e2) return e2;
  if (e2 instanceof Date) return new Date(e2);
  if (e2 instanceof RegExp) return new RegExp(e2);
  if ("object" !== v(e2)) return e2;
  if (t2.get(e2)) return t2.get(e2);
  if (Array.isArray(e2)) {
    var n2 = e2.map((function(e3) {
      return b$1(e3, t2);
    }));
    return t2.set(e2, n2), n2;
  }
  var r2 = {};
  for (var o2 in e2) r2[o2] = b$1(e2[o2], t2);
  return t2.set(e2, r2), r2;
}
function w$1(e2, t2, n2, r2, o2, a2, i2) {
  try {
    var c2 = e2[a2](i2), l2 = c2.value;
  } catch (e3) {
    return void n2(e3);
  }
  c2.done ? t2(l2) : Promise.resolve(l2).then(r2, o2);
}
var N$1 = r(207), k$1 = r.n(N$1);
function C$1(e2, t2) {
  var n2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e2);
    t2 && (r2 = r2.filter((function(t3) {
      return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
    }))), n2.push.apply(n2, r2);
  }
  return n2;
}
function x(e2) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2 ? C$1(Object(n2), true).forEach((function(t3) {
      l$1(e2, t3, n2[t3]);
    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : C$1(Object(n2)).forEach((function(t3) {
      Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
    }));
  }
  return e2;
}
var j = { data: { type: [String, Number, Boolean, Array, Object], default: null }, rootPath: { type: String, default: "root" }, indent: { type: Number, default: 2 }, showLength: { type: Boolean, default: false }, showDoubleQuotes: { type: Boolean, default: true }, renderNodeKey: Function, renderNodeValue: Function, renderNodeActions: { type: [Boolean, Function], default: void 0 }, selectableType: String, showSelectController: { type: Boolean, default: false }, showLine: { type: Boolean, default: true }, showLineNumber: { type: Boolean, default: false }, selectOnClickNode: { type: Boolean, default: true }, nodeSelectable: { type: Function, default: function() {
  return true;
} }, highlightSelectedNode: { type: Boolean, default: true }, showIcon: { type: Boolean, default: false }, theme: { type: String, default: "light" }, showKeyValueSpace: { type: Boolean, default: true }, editable: { type: Boolean, default: false }, editableTrigger: { type: String, default: "click" }, onNodeClick: { type: Function }, onNodeMouseover: { type: Function }, onBracketsClick: { type: Function }, onIconClick: { type: Function }, onValueChange: { type: Function } };
const S$1 = (0, u.defineComponent)({ name: "TreeNode", props: x(x({}, j), {}, { node: { type: Object, required: true }, collapsed: Boolean, checked: Boolean, style: Object, onSelectedChange: { type: Function } }), emits: ["nodeClick", "nodeMouseover", "bracketsClick", "iconClick", "selectedChange", "valueChange"], setup: function(e2, t2) {
  var n2 = t2.emit, r2 = (0, u.computed)((function() {
    return y$1(e2.node.content);
  })), o2 = (0, u.computed)((function() {
    return "vjs-value vjs-value-".concat(r2.value);
  })), a2 = (0, u.computed)((function() {
    return e2.showDoubleQuotes ? '"'.concat(e2.node.key, '"') : e2.node.key;
  })), i2 = (0, u.computed)((function() {
    return "multiple" === e2.selectableType;
  })), c2 = (0, u.computed)((function() {
    return "single" === e2.selectableType;
  })), f2 = (0, u.computed)((function() {
    return e2.nodeSelectable(e2.node) && (i2.value || c2.value);
  })), p2 = (0, u.reactive)({ editing: false }), v2 = function(t3) {
    var r3, o3, a3 = "null" === (o3 = null === (r3 = t3.target) || void 0 === r3 ? void 0 : r3.value) ? null : "undefined" === o3 ? void 0 : "true" === o3 || "false" !== o3 && (o3[0] + o3[o3.length - 1] === '""' || o3[0] + o3[o3.length - 1] === "''" ? o3.slice(1, -1) : "number" == typeof Number(o3) && !isNaN(Number(o3)) || "NaN" === o3 ? Number(o3) : o3);
    n2("valueChange", a3, e2.node.path);
  }, g2 = (0, u.computed)((function() {
    var t3, n3 = null === (t3 = e2.node) || void 0 === t3 ? void 0 : t3.content;
    return null === n3 ? n3 = "null" : void 0 === n3 && (n3 = "undefined"), "string" === r2.value ? '"'.concat(n3, '"') : n3 + "";
  })), m2 = function() {
    var t3 = e2.renderNodeValue;
    return t3 ? t3({ node: e2.node, defaultValue: g2.value }) : g2.value;
  }, b2 = function() {
    n2("bracketsClick", !e2.collapsed, e2.node);
  }, N2 = function() {
    n2("iconClick", !e2.collapsed, e2.node);
  }, C2 = function() {
    n2("selectedChange", e2.node);
  }, x2 = function() {
    n2("nodeClick", e2.node), f2.value && e2.selectOnClickNode && n2("selectedChange", e2.node);
  }, j2 = function() {
    n2("nodeMouseover", e2.node);
  }, S2 = function(t3) {
    if (e2.editable && !p2.editing) {
      p2.editing = true;
      var n3 = function e3(n4) {
        var r3;
        n4.target !== t3.target && (null === (r3 = n4.target) || void 0 === r3 ? void 0 : r3.parentElement) !== t3.target && (p2.editing = false, document.removeEventListener("click", e3));
      };
      document.removeEventListener("click", n3), document.addEventListener("click", n3);
    }
  }, O2 = (function() {
    var e3 = (0, u.ref)(false), t3 = (function() {
      var t4, n3 = (t4 = k$1().mark((function t5(n4) {
        return k$1().wrap((function(t6) {
          for (; ; ) switch (t6.prev = t6.next) {
            case 0:
              return t6.prev = 0, t6.next = 3, navigator.clipboard.writeText(n4);
            case 3:
              e3.value = true, setTimeout((function() {
                e3.value = false;
              }), 300), t6.next = 10;
              break;
            case 7:
              t6.prev = 7, t6.t0 = t6.catch(0), console.error("[vue-json-pretty] Copy failed: ", t6.t0);
            case 10:
            case "end":
              return t6.stop();
          }
        }), t5, null, [[0, 7]]);
      })), function() {
        var e4 = this, n4 = arguments;
        return new Promise((function(r3, o3) {
          var a3 = t4.apply(e4, n4);
          function i3(e5) {
            w$1(a3, r3, o3, i3, c3, "next", e5);
          }
          function c3(e5) {
            w$1(a3, r3, o3, i3, c3, "throw", e5);
          }
          i3(void 0);
        }));
      });
      return function(e4) {
        return n3.apply(this, arguments);
      };
    })();
    return { copy: t3 };
  })().copy, V2 = function() {
    var t3 = e2.node, n3 = t3.key, r3 = t3.path, o3 = e2.rootPath, a3 = new Function("data", "return data".concat(r3.slice(o3.length)))(e2.data), i3 = JSON.stringify(n3 ? l$1({}, n3, a3) : a3, null, 2);
    O2(i3);
  }, L2 = function() {
    var t3 = e2.renderNodeActions;
    if (!t3) return null;
    var n3 = { copy: V2 };
    return "function" == typeof t3 ? t3({ node: e2.node, defaultActions: n3 }) : (0, u.createVNode)("span", { onClick: V2, class: "vjs-tree-node-actions-item" }, [(0, u.createTextVNode)("copy")]);
  };
  return function() {
    var t3, n3 = e2.node;
    return (0, u.createVNode)("div", { class: { "vjs-tree-node": true, "has-selector": e2.showSelectController, "has-carets": e2.showIcon, "is-highlight": e2.highlightSelectedNode && e2.checked, dark: "dark" === e2.theme }, onClick: x2, onMouseover: j2, style: e2.style }, [e2.showLineNumber && (0, u.createVNode)("span", { class: "vjs-node-index" }, [n3.id + 1]), e2.showSelectController && f2.value && "objectEnd" !== n3.type && "arrayEnd" !== n3.type && (0, u.createVNode)(s, { isMultiple: i2.value, checked: e2.checked, onChange: C2 }, null), (0, u.createVNode)("div", { class: "vjs-indent" }, [Array.from(Array(n3.level)).map((function(t4, n4) {
      return (0, u.createVNode)("div", { key: n4, class: { "vjs-indent-unit": true, "has-line": e2.showLine } }, [Array.from(Array(e2.indent)).map((function() {
        return (0, u.createVNode)(u.Fragment, null, [(0, u.createTextVNode)(" ")]);
      }))]);
    })), e2.showIcon && (0, u.createVNode)(h$1, { nodeType: n3.type, onClick: N2 }, null)]), n3.key && (0, u.createVNode)("span", { class: "vjs-key" }, [(t3 = e2.renderNodeKey, t3 ? t3({ node: e2.node, defaultKey: a2.value || "" }) : a2.value), (0, u.createVNode)("span", { class: "vjs-colon" }, [":".concat(e2.showKeyValueSpace ? " " : "")])]), (0, u.createVNode)("span", null, ["content" !== n3.type && n3.content ? (0, u.createVNode)(d, { data: n3.content.toString(), onClick: b2 }, null) : (0, u.createVNode)("span", { class: o2.value, onClick: !e2.editable || e2.editableTrigger && "click" !== e2.editableTrigger ? void 0 : S2, onDblclick: e2.editable && "dblclick" === e2.editableTrigger ? S2 : void 0 }, [e2.editable && p2.editing ? (0, u.createVNode)("input", { value: g2.value, onChange: v2, style: { padding: "3px 8px", border: "1px solid #eee", boxShadow: "none", boxSizing: "border-box", borderRadius: 5, fontFamily: "inherit" } }, null) : m2()]), n3.showComma && (0, u.createVNode)("span", null, [","]), e2.showLength && e2.collapsed && (0, u.createVNode)("span", { class: "vjs-comment" }, [(0, u.createTextVNode)(" // "), n3.length, (0, u.createTextVNode)(" items ")])]), e2.renderNodeActions && (0, u.createVNode)("span", { class: "vjs-tree-node-actions" }, [L2()])]);
  };
} });
function O$2(e2, t2) {
  var n2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e2);
    t2 && (r2 = r2.filter((function(t3) {
      return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
    }))), n2.push.apply(n2, r2);
  }
  return n2;
}
function V$1(e2) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2 ? O$2(Object(n2), true).forEach((function(t3) {
      l$1(e2, t3, n2[t3]);
    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : O$2(Object(n2)).forEach((function(t3) {
      Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
    }));
  }
  return e2;
}
const L$1 = (0, u.defineComponent)({ name: "Tree", props: V$1(V$1({}, j), {}, { collapsedNodeLength: { type: Number, default: 1 / 0 }, deep: { type: Number, default: 1 / 0 }, pathCollapsible: { type: Function, default: function() {
  return false;
} }, virtual: { type: Boolean, default: false }, height: { type: Number, default: 400 }, itemHeight: { type: Number, default: 20 }, dynamicHeight: { type: Boolean, default: true }, selectedValue: { type: [String, Array], default: function() {
  return "";
} }, collapsedOnClickBrackets: { type: Boolean, default: true }, style: Object, onSelectedChange: { type: Function }, theme: { type: String, default: "light" } }), slots: ["renderNodeKey", "renderNodeValue", "renderNodeActions"], emits: ["nodeClick", "nodeMouseover", "bracketsClick", "iconClick", "selectedChange", "update:selectedValue", "update:data"], setup: function(e2, t2) {
  var n2 = t2.emit, r2 = t2.slots, o2 = (0, u.ref)(), a2 = (0, u.computed)((function() {
    return g$1(e2.data, e2.rootPath);
  })), d2 = function(t3, n3) {
    return a2.value.reduce((function(r3, o3) {
      var a3, i2 = o3.level >= t3 || o3.length >= n3, c2 = null === (a3 = e2.pathCollapsible) || void 0 === a3 ? void 0 : a3.call(e2, o3);
      return "objectStart" !== o3.type && "arrayStart" !== o3.type || !i2 && !c2 ? r3 : V$1(V$1({}, r3), {}, l$1({}, o3.path, 1));
    }), {});
  }, s2 = (0, u.reactive)({ translateY: 0, visibleData: null, hiddenPaths: d2(e2.deep, e2.collapsedNodeLength), startIndex: 0, endIndex: 0 }), h2 = [], f2 = [], p2 = 0, v2 = {}, y2 = function(t3) {
    h2 = Array(t3).fill(0).map((function() {
      return e2.itemHeight || 20;
    })), (f2 = new Array(t3 + 1))[0] = 0;
    for (var n3 = 0; n3 < t3; n3++) f2[n3 + 1] = f2[n3] + h2[n3];
    p2 = f2[t3] || 0;
  }, m2 = function(e3) {
    var t3 = h2.length;
    e3 < 0 && (e3 = 0), e3 > t3 && (e3 = t3);
    for (var n3 = e3; n3 < t3; n3++) f2[n3 + 1] = f2[n3] + h2[n3];
    p2 = f2[t3] || 0;
  }, w2 = function(e3, t3) {
    for (var n3 = 0, r3 = e3.length - 1; n3 < r3; ) {
      var o3 = n3 + r3 >>> 1;
      e3[o3] < t3 ? n3 = o3 + 1 : r3 = o3;
    }
    return n3;
  }, N2 = (0, u.computed)((function() {
    for (var e3 = null, t3 = [], n3 = a2.value.length, r3 = 0; r3 < n3; r3++) {
      var o3 = V$1(V$1({}, a2.value[r3]), {}, { id: r3 }), i2 = s2.hiddenPaths[o3.path];
      if (e3 && e3.path === o3.path) {
        var c2 = "objectStart" === e3.type, l2 = V$1(V$1(V$1({}, o3), e3), {}, { showComma: o3.showComma, content: c2 ? "{...}" : "[...]", type: c2 ? "objectCollapsed" : "arrayCollapsed" });
        e3 = null, t3.push(l2);
      } else {
        if (i2 && !e3) {
          e3 = o3;
          continue;
        }
        if (e3) continue;
        t3.push(o3);
      }
    }
    return t3;
  })), k2 = (0, u.computed)((function() {
    var t3 = e2.selectedValue;
    return t3 && "multiple" === e2.selectableType && Array.isArray(t3) ? t3 : [t3];
  })), C2 = (0, u.computed)((function() {
    return !e2.selectableType || e2.selectOnClickNode || e2.showSelectController ? "" : "When selectableType is not null, selectOnClickNode and showSelectController cannot be false at the same time, because this will cause the selection to fail.";
  })), x2 = (0, u.computed)((function() {
    return e2.dynamicHeight ? p2 || 0 : N2.value.length * e2.itemHeight;
  })), j2 = function t3() {
    var n3 = N2.value;
    if (n3) if (e2.virtual) {
      var r3, a3 = (null === (r3 = o2.value) || void 0 === r3 ? void 0 : r3.scrollTop) || 0;
      if (e2.dynamicHeight) {
        h2.length !== n3.length && y2(n3.length);
        var i2 = (function(e3) {
          var t4 = w2(f2, e3 + 1e-4);
          return Math.max(0, Math.min(t4 - 1, h2.length - 1));
        })(a3), c2 = (function(e3, t4) {
          var n4 = w2(f2, e3 + t4);
          return Math.max(0, Math.min(n4 + 1, h2.length));
        })(a3, e2.height), l2 = Math.max(0, i2 - 5), d3 = Math.min(n3.length, c2 + 5);
        s2.startIndex = l2, s2.endIndex = d3, s2.translateY = f2[l2] || 0, s2.visibleData = n3.slice(l2, d3), (0, u.nextTick)().then((function() {
          for (var e3 = false, n4 = s2.startIndex; n4 < s2.endIndex; n4++) {
            var r4 = v2[n4];
            if (r4) {
              var o3 = r4.offsetHeight;
              o3 && h2[n4] !== o3 && (h2[n4] = o3, f2[n4 + 1] = f2[n4] + h2[n4], m2(n4 + 1), e3 = true);
            }
          }
          e3 && t3();
        }));
      } else {
        var p3 = e2.height / e2.itemHeight, g2 = Math.floor(a3 / e2.itemHeight), b2 = g2 < 0 ? 0 : g2 + p3 > n3.length ? n3.length - p3 : g2;
        b2 < 0 && (b2 = 0);
        var k3 = b2 + p3;
        s2.translateY = b2 * e2.itemHeight, s2.startIndex = b2, s2.endIndex = k3, s2.visibleData = n3.slice(b2, k3);
      }
    } else s2.translateY = 0, s2.startIndex = 0, s2.endIndex = n3.length, s2.visibleData = n3;
  }, O2 = null, L2 = function() {
    O2 && cancelAnimationFrame(O2), O2 = requestAnimationFrame((function() {
      j2();
    }));
  }, P2 = function(t3) {
    var r3, o3, a3 = t3.path, l2 = e2.selectableType;
    if ("multiple" === l2) {
      var u2 = k2.value.findIndex((function(e3) {
        return e3 === a3;
      })), d3 = c$1(k2.value);
      -1 !== u2 ? d3.splice(u2, 1) : d3.push(a3), n2("update:selectedValue", d3), n2("selectedChange", d3, c$1(k2.value));
    } else if ("single" === l2 && k2.value[0] !== a3) {
      var s3 = (r3 = k2.value, o3 = 1, (function(e3) {
        if (Array.isArray(e3)) return e3;
      })(r3) || (function(e3, t4) {
        var n3 = null == e3 ? null : "undefined" != typeof Symbol && e3[Symbol.iterator] || e3["@@iterator"];
        if (null != n3) {
          var r4, o4, a4 = [], i2 = true, c2 = false;
          try {
            for (n3 = n3.call(e3); !(i2 = (r4 = n3.next()).done) && (a4.push(r4.value), !t4 || a4.length !== t4); i2 = true) ;
          } catch (e4) {
            c2 = true, o4 = e4;
          } finally {
            try {
              i2 || null == n3.return || n3.return();
            } finally {
              if (c2) throw o4;
            }
          }
          return a4;
        }
      })(r3, o3) || i$1(r3, o3) || (function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      })())[0], h3 = a3;
      n2("update:selectedValue", h3), n2("selectedChange", h3, s3);
    }
  }, T = function(e3) {
    n2("nodeClick", e3);
  }, E2 = function(e3) {
    n2("nodeMouseover", e3);
  }, A = function(e3, t3) {
    if (e3) s2.hiddenPaths = V$1(V$1({}, s2.hiddenPaths), {}, l$1({}, t3, 1));
    else {
      var n3 = V$1({}, s2.hiddenPaths);
      delete n3[t3], s2.hiddenPaths = n3;
    }
  }, F2 = function(t3, r3) {
    e2.collapsedOnClickBrackets && A(t3, r3.path), n2("bracketsClick", t3, r3);
  }, I2 = function(e3, t3) {
    A(e3, t3.path), n2("iconClick", e3, t3);
  }, B = function(t3, r3) {
    var o3 = b$1(e2.data), a3 = e2.rootPath;
    new Function("data", "val", "data".concat(r3.slice(a3.length), "=val"))(o3, t3), n2("update:data", o3);
  };
  return (0, u.watchEffect)((function() {
    C2.value && (function(e3) {
      throw new Error("[VueJSONPretty] ".concat(e3));
    })(C2.value);
  })), (0, u.watchEffect)((function() {
    N2.value && (e2.virtual && e2.dynamicHeight && h2.length !== N2.value.length && y2(N2.value.length), j2());
  })), (0, u.watch)((function() {
    return [e2.dynamicHeight, e2.itemHeight, a2.value.length];
  }), (function() {
    e2.virtual && e2.dynamicHeight && (y2(N2.value.length), (0, u.nextTick)(j2));
  })), (0, u.watch)((function() {
    return e2.deep;
  }), (function(t3) {
    t3 && (s2.hiddenPaths = d2(t3, e2.collapsedNodeLength));
  })), (0, u.watch)((function() {
    return e2.collapsedNodeLength;
  }), (function(t3) {
    t3 && (s2.hiddenPaths = d2(e2.deep, t3));
  })), function() {
    var t3, n3, i2, c2, l2, d3 = null !== (t3 = e2.renderNodeKey) && void 0 !== t3 ? t3 : r2.renderNodeKey, h3 = null !== (n3 = e2.renderNodeValue) && void 0 !== n3 ? n3 : r2.renderNodeValue, f3 = null !== (i2 = null !== (c2 = e2.renderNodeActions) && void 0 !== c2 ? c2 : r2.renderNodeActions) && void 0 !== i2 && i2, p3 = null === (l2 = s2.visibleData) || void 0 === l2 ? void 0 : l2.map((function(t4, n4) {
      var r3 = s2.startIndex + n4;
      return (0, u.createVNode)("div", { key: t4.id, ref: function(e3) {
        return (function(e4, t5) {
          t5 ? v2[e4] = t5 : delete v2[e4];
        })(r3, e3 || null);
      } }, [(0, u.createVNode)(S$1, { data: e2.data, rootPath: e2.rootPath, indent: e2.indent, node: t4, collapsed: !!s2.hiddenPaths[t4.path], theme: e2.theme, showDoubleQuotes: e2.showDoubleQuotes, showLength: e2.showLength, checked: k2.value.includes(t4.path), selectableType: e2.selectableType, showLine: e2.showLine, showLineNumber: e2.showLineNumber, showSelectController: e2.showSelectController, selectOnClickNode: e2.selectOnClickNode, nodeSelectable: e2.nodeSelectable, highlightSelectedNode: e2.highlightSelectedNode, editable: e2.editable, editableTrigger: e2.editableTrigger, showIcon: e2.showIcon, showKeyValueSpace: e2.showKeyValueSpace, renderNodeKey: d3, renderNodeValue: h3, renderNodeActions: f3, onNodeClick: T, onNodeMouseover: E2, onBracketsClick: F2, onIconClick: I2, onSelectedChange: P2, onValueChange: B, class: e2.dynamicHeight ? "dynamic-height" : void 0, style: e2.dynamicHeight ? {} : e2.itemHeight && 20 !== e2.itemHeight ? { lineHeight: "".concat(e2.itemHeight, "px") } : {} }, null)]);
    }));
    return (0, u.createVNode)("div", { ref: o2, class: { "vjs-tree": true, "is-virtual": e2.virtual, dark: "dark" === e2.theme }, onScroll: e2.virtual ? L2 : void 0, style: e2.showLineNumber ? V$1({ paddingLeft: "".concat(12 * Number(a2.value.length.toString().length), "px") }, e2.style) : e2.style }, [e2.virtual ? (0, u.createVNode)("div", { class: "vjs-tree-list", style: { height: "".concat(e2.height, "px") } }, [(0, u.createVNode)("div", { class: "vjs-tree-list-holder", style: { height: "".concat(x2.value, "px") } }, [(0, u.createVNode)("div", { class: "vjs-tree-list-holder-inner", style: { transform: "translateY(".concat(s2.translateY, "px)") } }, [p3])])]) : p3]);
  };
} });
var P = o.A;
const _hoisted_1 = {
  key: 0,
  class: "grid grid-cols-2 grid-rows-4 gap-4 overflow-auto w-full h-full"
};
const _hoisted_2 = { key: 1 };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Preview",
  props: {
    dataSource: {}
  },
  setup(__props) {
    const props = __props;
    const data = ref(null);
    const featureCollection = ref(null);
    const tempStore = shallowRef(null);
    const settingsRef = ref(props.dataSource);
    const { update } = useTemporaryStore(props.dataSource.type, settingsRef, tempStore);
    watch(tempStore, async () => {
      featureCollection.value = await tempStore.value.getData("FeatureCollection");
      data.value = featureCollection.value?.features || [];
    }, { deep: true });
    watch(props.dataSource, () => {
      update();
    }, { deep: true });
    return (_ctx, _cache) => {
      return tempStore.value ? (openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(unref(P), { data: featureCollection.value }, null, 8, ["data"])
      ])) : (openBlock(), createElementBlock("div", _hoisted_2, [..._cache[0] || (_cache[0] = [
        createElementVNode("h3", null, "OGC Feature Collection Preview", -1)
      ])]));
    };
  }
});
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x2) {
  return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
}
function getAugmentedNamespace(n2) {
  if (Object.prototype.hasOwnProperty.call(n2, "__esModule")) return n2;
  var f2 = n2.default;
  if (typeof f2 == "function") {
    var a2 = function a3() {
      if (this instanceof a3) {
        return Reflect.construct(f2, arguments, this.constructor);
      }
      return f2.apply(this, arguments);
    };
    a2.prototype = f2.prototype;
  } else a2 = {};
  Object.defineProperty(a2, "__esModule", { value: true });
  Object.keys(n2).forEach(function(k2) {
    var d2 = Object.getOwnPropertyDescriptor(n2, k2);
    Object.defineProperty(a2, k2, d2.get ? d2 : {
      enumerable: true,
      get: function() {
        return n2[k2];
      }
    });
  });
  return a2;
}
var ReflectLite = {};
/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
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
var hasRequiredReflectLite;
function requireReflectLite() {
  if (hasRequiredReflectLite) return ReflectLite;
  hasRequiredReflectLite = 1;
  var Reflect2;
  (function(Reflect3) {
    (function(factory) {
      var root = typeof globalThis === "object" ? globalThis : typeof commonjsGlobal === "object" ? commonjsGlobal : typeof self === "object" ? self : typeof this === "object" ? this : sloppyModeThis();
      var exporter = makeExporter(Reflect3);
      if (typeof root.Reflect !== "undefined") {
        exporter = makeExporter(root.Reflect, exporter);
      }
      factory(exporter, root);
      if (typeof root.Reflect === "undefined") {
        root.Reflect = Reflect3;
      }
      function makeExporter(target, previous) {
        return function(key, value) {
          Object.defineProperty(target, key, { configurable: true, writable: true, value });
          if (previous)
            previous(key, value);
        };
      }
      function sloppyModeThis() {
        throw new ReferenceError("globalThis could not be found. Please polyfill globalThis before loading this module.");
      }
    })(function(exporter, root) {
      var supportsSymbol = typeof Symbol === "function";
      var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : fail("Symbol.toPrimitive not found.");
      var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : fail("Symbol.iterator not found.");
      var functionPrototype = Object.getPrototypeOf(Function);
      var _Map = typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : fail("A valid Map constructor could not be found.");
      var _Set = typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : fail("A valid Set constructor could not be found.");
      var _WeakMap = typeof WeakMap === "function" ? WeakMap : fail("A valid WeakMap constructor could not be found.");
      var registrySymbol = supportsSymbol ? Symbol.for("@reflect-metadata:registry") : void 0;
      var metadataRegistry = GetOrCreateMetadataRegistry();
      var metadataProvider = CreateMetadataProvider(metadataRegistry);
      function decorate(decorators, target, propertyKey, attributes) {
        if (!IsUndefined(propertyKey)) {
          if (!IsArray(decorators))
            throw new TypeError();
          if (!IsObject(target))
            throw new TypeError();
          if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes))
            throw new TypeError();
          if (IsNull(attributes))
            attributes = void 0;
          propertyKey = ToPropertyKey(propertyKey);
          return DecorateProperty(decorators, target, propertyKey, attributes);
        } else {
          if (!IsArray(decorators))
            throw new TypeError();
          if (!IsConstructor(target))
            throw new TypeError();
          return DecorateConstructor(decorators, target);
        }
      }
      exporter("decorate", decorate);
      function metadata(metadataKey, metadataValue) {
        function decorator(target, propertyKey) {
          if (!IsObject(target))
            throw new TypeError();
          if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey))
            throw new TypeError();
          OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
        }
        return decorator;
      }
      exporter("metadata", metadata);
      function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
        if (!IsObject(target))
          throw new TypeError();
        if (!IsUndefined(propertyKey))
          propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
      }
      exporter("defineMetadata", defineMetadata);
      function hasMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target))
          throw new TypeError();
        if (!IsUndefined(propertyKey))
          propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryHasMetadata(metadataKey, target, propertyKey);
      }
      exporter("hasMetadata", hasMetadata);
      function hasOwnMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target))
          throw new TypeError();
        if (!IsUndefined(propertyKey))
          propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
      }
      exporter("hasOwnMetadata", hasOwnMetadata);
      function getMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target))
          throw new TypeError();
        if (!IsUndefined(propertyKey))
          propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryGetMetadata(metadataKey, target, propertyKey);
      }
      exporter("getMetadata", getMetadata);
      function getOwnMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target))
          throw new TypeError();
        if (!IsUndefined(propertyKey))
          propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
      }
      exporter("getOwnMetadata", getOwnMetadata);
      function getMetadataKeys(target, propertyKey) {
        if (!IsObject(target))
          throw new TypeError();
        if (!IsUndefined(propertyKey))
          propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryMetadataKeys(target, propertyKey);
      }
      exporter("getMetadataKeys", getMetadataKeys);
      function getOwnMetadataKeys(target, propertyKey) {
        if (!IsObject(target))
          throw new TypeError();
        if (!IsUndefined(propertyKey))
          propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryOwnMetadataKeys(target, propertyKey);
      }
      exporter("getOwnMetadataKeys", getOwnMetadataKeys);
      function deleteMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target))
          throw new TypeError();
        if (!IsUndefined(propertyKey))
          propertyKey = ToPropertyKey(propertyKey);
        var provider = GetMetadataProvider(
          target,
          propertyKey,
          /*Create*/
          false
        );
        if (IsUndefined(provider))
          return false;
        return provider.OrdinaryDeleteMetadata(metadataKey, target, propertyKey);
      }
      exporter("deleteMetadata", deleteMetadata);
      function DecorateConstructor(decorators, target) {
        for (var i2 = decorators.length - 1; i2 >= 0; --i2) {
          var decorator = decorators[i2];
          var decorated = decorator(target);
          if (!IsUndefined(decorated) && !IsNull(decorated)) {
            if (!IsConstructor(decorated))
              throw new TypeError();
            target = decorated;
          }
        }
        return target;
      }
      function DecorateProperty(decorators, target, propertyKey, descriptor) {
        for (var i2 = decorators.length - 1; i2 >= 0; --i2) {
          var decorator = decorators[i2];
          var decorated = decorator(target, propertyKey, descriptor);
          if (!IsUndefined(decorated) && !IsNull(decorated)) {
            if (!IsObject(decorated))
              throw new TypeError();
            descriptor = decorated;
          }
        }
        return descriptor;
      }
      function OrdinaryHasMetadata(MetadataKey, O2, P2) {
        var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O2, P2);
        if (hasOwn)
          return true;
        var parent = OrdinaryGetPrototypeOf(O2);
        if (!IsNull(parent))
          return OrdinaryHasMetadata(MetadataKey, parent, P2);
        return false;
      }
      function OrdinaryHasOwnMetadata(MetadataKey, O2, P2) {
        var provider = GetMetadataProvider(
          O2,
          P2,
          /*Create*/
          false
        );
        if (IsUndefined(provider))
          return false;
        return ToBoolean(provider.OrdinaryHasOwnMetadata(MetadataKey, O2, P2));
      }
      function OrdinaryGetMetadata(MetadataKey, O2, P2) {
        var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O2, P2);
        if (hasOwn)
          return OrdinaryGetOwnMetadata(MetadataKey, O2, P2);
        var parent = OrdinaryGetPrototypeOf(O2);
        if (!IsNull(parent))
          return OrdinaryGetMetadata(MetadataKey, parent, P2);
        return void 0;
      }
      function OrdinaryGetOwnMetadata(MetadataKey, O2, P2) {
        var provider = GetMetadataProvider(
          O2,
          P2,
          /*Create*/
          false
        );
        if (IsUndefined(provider))
          return;
        return provider.OrdinaryGetOwnMetadata(MetadataKey, O2, P2);
      }
      function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O2, P2) {
        var provider = GetMetadataProvider(
          O2,
          P2,
          /*Create*/
          true
        );
        provider.OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O2, P2);
      }
      function OrdinaryMetadataKeys(O2, P2) {
        var ownKeys = OrdinaryOwnMetadataKeys(O2, P2);
        var parent = OrdinaryGetPrototypeOf(O2);
        if (parent === null)
          return ownKeys;
        var parentKeys = OrdinaryMetadataKeys(parent, P2);
        if (parentKeys.length <= 0)
          return ownKeys;
        if (ownKeys.length <= 0)
          return parentKeys;
        var set = new _Set();
        var keys = [];
        for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
          var key = ownKeys_1[_i];
          var hasKey = set.has(key);
          if (!hasKey) {
            set.add(key);
            keys.push(key);
          }
        }
        for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
          var key = parentKeys_1[_a];
          var hasKey = set.has(key);
          if (!hasKey) {
            set.add(key);
            keys.push(key);
          }
        }
        return keys;
      }
      function OrdinaryOwnMetadataKeys(O2, P2) {
        var provider = GetMetadataProvider(
          O2,
          P2,
          /*create*/
          false
        );
        if (!provider) {
          return [];
        }
        return provider.OrdinaryOwnMetadataKeys(O2, P2);
      }
      function Type(x2) {
        if (x2 === null)
          return 1;
        switch (typeof x2) {
          case "undefined":
            return 0;
          case "boolean":
            return 2;
          case "string":
            return 3;
          case "symbol":
            return 4;
          case "number":
            return 5;
          case "object":
            return x2 === null ? 1 : 6;
          default:
            return 6;
        }
      }
      function IsUndefined(x2) {
        return x2 === void 0;
      }
      function IsNull(x2) {
        return x2 === null;
      }
      function IsSymbol(x2) {
        return typeof x2 === "symbol";
      }
      function IsObject(x2) {
        return typeof x2 === "object" ? x2 !== null : typeof x2 === "function";
      }
      function ToPrimitive(input, PreferredType) {
        switch (Type(input)) {
          case 0:
            return input;
          case 1:
            return input;
          case 2:
            return input;
          case 3:
            return input;
          case 4:
            return input;
          case 5:
            return input;
        }
        var hint = "string";
        var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
        if (exoticToPrim !== void 0) {
          var result = exoticToPrim.call(input, hint);
          if (IsObject(result))
            throw new TypeError();
          return result;
        }
        return OrdinaryToPrimitive(input);
      }
      function OrdinaryToPrimitive(O2, hint) {
        var valueOf, result, toString_2;
        {
          var toString_1 = O2.toString;
          if (IsCallable(toString_1)) {
            var result = toString_1.call(O2);
            if (!IsObject(result))
              return result;
          }
          var valueOf = O2.valueOf;
          if (IsCallable(valueOf)) {
            var result = valueOf.call(O2);
            if (!IsObject(result))
              return result;
          }
        }
        throw new TypeError();
      }
      function ToBoolean(argument) {
        return !!argument;
      }
      function ToString(argument) {
        return "" + argument;
      }
      function ToPropertyKey(argument) {
        var key = ToPrimitive(argument);
        if (IsSymbol(key))
          return key;
        return ToString(key);
      }
      function IsArray(argument) {
        return Array.isArray ? Array.isArray(argument) : argument instanceof Object ? argument instanceof Array : Object.prototype.toString.call(argument) === "[object Array]";
      }
      function IsCallable(argument) {
        return typeof argument === "function";
      }
      function IsConstructor(argument) {
        return typeof argument === "function";
      }
      function IsPropertyKey(argument) {
        switch (Type(argument)) {
          case 3:
            return true;
          case 4:
            return true;
          default:
            return false;
        }
      }
      function GetMethod(V2, P2) {
        var func = V2[P2];
        if (func === void 0 || func === null)
          return void 0;
        if (!IsCallable(func))
          throw new TypeError();
        return func;
      }
      function GetIterator(obj) {
        var method = GetMethod(obj, iteratorSymbol);
        if (!IsCallable(method))
          throw new TypeError();
        var iterator = method.call(obj);
        if (!IsObject(iterator))
          throw new TypeError();
        return iterator;
      }
      function IteratorValue(iterResult) {
        return iterResult.value;
      }
      function IteratorStep(iterator) {
        var result = iterator.next();
        return result.done ? false : result;
      }
      function IteratorClose(iterator) {
        var f2 = iterator["return"];
        if (f2)
          f2.call(iterator);
      }
      function OrdinaryGetPrototypeOf(O2) {
        var proto = Object.getPrototypeOf(O2);
        if (typeof O2 !== "function" || O2 === functionPrototype)
          return proto;
        if (proto !== functionPrototype)
          return proto;
        var prototype = O2.prototype;
        var prototypeProto = prototype && Object.getPrototypeOf(prototype);
        if (prototypeProto == null || prototypeProto === Object.prototype)
          return proto;
        var constructor = prototypeProto.constructor;
        if (typeof constructor !== "function")
          return proto;
        if (constructor === O2)
          return proto;
        return constructor;
      }
      function fail(e2) {
        throw e2;
      }
      function CreateMetadataRegistry() {
        var fallback;
        if (!IsUndefined(registrySymbol) && typeof root.Reflect !== "undefined" && !(registrySymbol in root.Reflect) && typeof root.Reflect.defineMetadata === "function") {
          fallback = CreateFallbackProvider(root.Reflect);
        }
        var first;
        var second;
        var rest;
        var targetProviderMap = new _WeakMap();
        var registry = {
          registerProvider,
          getProvider,
          setProvider
        };
        return registry;
        function registerProvider(provider) {
          if (!Object.isExtensible(registry)) {
            throw new Error("Cannot add provider to a frozen registry.");
          }
          switch (true) {
            case fallback === provider:
              break;
            case IsUndefined(first):
              first = provider;
              break;
            case first === provider:
              break;
            case IsUndefined(second):
              second = provider;
              break;
            case second === provider:
              break;
            default:
              if (rest === void 0)
                rest = new _Set();
              rest.add(provider);
              break;
          }
        }
        function getProviderNoCache(O2, P2) {
          if (!IsUndefined(first)) {
            if (first.isProviderFor(O2, P2))
              return first;
            if (!IsUndefined(second)) {
              if (second.isProviderFor(O2, P2))
                return first;
              if (!IsUndefined(rest)) {
                var iterator = GetIterator(rest);
                while (true) {
                  var next = IteratorStep(iterator);
                  if (!next) {
                    return void 0;
                  }
                  var provider = IteratorValue(next);
                  if (provider.isProviderFor(O2, P2)) {
                    IteratorClose(iterator);
                    return provider;
                  }
                }
              }
            }
          }
          if (!IsUndefined(fallback) && fallback.isProviderFor(O2, P2)) {
            return fallback;
          }
          return void 0;
        }
        function getProvider(O2, P2) {
          var providerMap = targetProviderMap.get(O2);
          var provider;
          if (!IsUndefined(providerMap)) {
            provider = providerMap.get(P2);
          }
          if (!IsUndefined(provider)) {
            return provider;
          }
          provider = getProviderNoCache(O2, P2);
          if (!IsUndefined(provider)) {
            if (IsUndefined(providerMap)) {
              providerMap = new _Map();
              targetProviderMap.set(O2, providerMap);
            }
            providerMap.set(P2, provider);
          }
          return provider;
        }
        function hasProvider(provider) {
          if (IsUndefined(provider))
            throw new TypeError();
          return first === provider || second === provider || !IsUndefined(rest) && rest.has(provider);
        }
        function setProvider(O2, P2, provider) {
          if (!hasProvider(provider)) {
            throw new Error("Metadata provider not registered.");
          }
          var existingProvider = getProvider(O2, P2);
          if (existingProvider !== provider) {
            if (!IsUndefined(existingProvider)) {
              return false;
            }
            var providerMap = targetProviderMap.get(O2);
            if (IsUndefined(providerMap)) {
              providerMap = new _Map();
              targetProviderMap.set(O2, providerMap);
            }
            providerMap.set(P2, provider);
          }
          return true;
        }
      }
      function GetOrCreateMetadataRegistry() {
        var metadataRegistry2;
        if (!IsUndefined(registrySymbol) && IsObject(root.Reflect) && Object.isExtensible(root.Reflect)) {
          metadataRegistry2 = root.Reflect[registrySymbol];
        }
        if (IsUndefined(metadataRegistry2)) {
          metadataRegistry2 = CreateMetadataRegistry();
        }
        if (!IsUndefined(registrySymbol) && IsObject(root.Reflect) && Object.isExtensible(root.Reflect)) {
          Object.defineProperty(root.Reflect, registrySymbol, {
            enumerable: false,
            configurable: false,
            writable: false,
            value: metadataRegistry2
          });
        }
        return metadataRegistry2;
      }
      function CreateMetadataProvider(registry) {
        var metadata2 = new _WeakMap();
        var provider = {
          isProviderFor: function(O2, P2) {
            var targetMetadata = metadata2.get(O2);
            if (IsUndefined(targetMetadata))
              return false;
            return targetMetadata.has(P2);
          },
          OrdinaryDefineOwnMetadata: OrdinaryDefineOwnMetadata2,
          OrdinaryHasOwnMetadata: OrdinaryHasOwnMetadata2,
          OrdinaryGetOwnMetadata: OrdinaryGetOwnMetadata2,
          OrdinaryOwnMetadataKeys: OrdinaryOwnMetadataKeys2,
          OrdinaryDeleteMetadata
        };
        metadataRegistry.registerProvider(provider);
        return provider;
        function GetOrCreateMetadataMap(O2, P2, Create) {
          var targetMetadata = metadata2.get(O2);
          var createdTargetMetadata = false;
          if (IsUndefined(targetMetadata)) {
            if (!Create)
              return void 0;
            targetMetadata = new _Map();
            metadata2.set(O2, targetMetadata);
            createdTargetMetadata = true;
          }
          var metadataMap = targetMetadata.get(P2);
          if (IsUndefined(metadataMap)) {
            if (!Create)
              return void 0;
            metadataMap = new _Map();
            targetMetadata.set(P2, metadataMap);
            if (!registry.setProvider(O2, P2, provider)) {
              targetMetadata.delete(P2);
              if (createdTargetMetadata) {
                metadata2.delete(O2);
              }
              throw new Error("Wrong provider for target.");
            }
          }
          return metadataMap;
        }
        function OrdinaryHasOwnMetadata2(MetadataKey, O2, P2) {
          var metadataMap = GetOrCreateMetadataMap(
            O2,
            P2,
            /*Create*/
            false
          );
          if (IsUndefined(metadataMap))
            return false;
          return ToBoolean(metadataMap.has(MetadataKey));
        }
        function OrdinaryGetOwnMetadata2(MetadataKey, O2, P2) {
          var metadataMap = GetOrCreateMetadataMap(
            O2,
            P2,
            /*Create*/
            false
          );
          if (IsUndefined(metadataMap))
            return void 0;
          return metadataMap.get(MetadataKey);
        }
        function OrdinaryDefineOwnMetadata2(MetadataKey, MetadataValue, O2, P2) {
          var metadataMap = GetOrCreateMetadataMap(
            O2,
            P2,
            /*Create*/
            true
          );
          metadataMap.set(MetadataKey, MetadataValue);
        }
        function OrdinaryOwnMetadataKeys2(O2, P2) {
          var keys = [];
          var metadataMap = GetOrCreateMetadataMap(
            O2,
            P2,
            /*Create*/
            false
          );
          if (IsUndefined(metadataMap))
            return keys;
          var keysObj = metadataMap.keys();
          var iterator = GetIterator(keysObj);
          var k2 = 0;
          while (true) {
            var next = IteratorStep(iterator);
            if (!next) {
              keys.length = k2;
              return keys;
            }
            var nextValue = IteratorValue(next);
            try {
              keys[k2] = nextValue;
            } catch (e2) {
              try {
                IteratorClose(iterator);
              } finally {
                throw e2;
              }
            }
            k2++;
          }
        }
        function OrdinaryDeleteMetadata(MetadataKey, O2, P2) {
          var metadataMap = GetOrCreateMetadataMap(
            O2,
            P2,
            /*Create*/
            false
          );
          if (IsUndefined(metadataMap))
            return false;
          if (!metadataMap.delete(MetadataKey))
            return false;
          if (metadataMap.size === 0) {
            var targetMetadata = metadata2.get(O2);
            if (!IsUndefined(targetMetadata)) {
              targetMetadata.delete(P2);
              if (targetMetadata.size === 0) {
                metadata2.delete(targetMetadata);
              }
            }
          }
          return true;
        }
      }
      function CreateFallbackProvider(reflect) {
        var defineMetadata2 = reflect.defineMetadata, hasOwnMetadata2 = reflect.hasOwnMetadata, getOwnMetadata2 = reflect.getOwnMetadata, getOwnMetadataKeys2 = reflect.getOwnMetadataKeys, deleteMetadata2 = reflect.deleteMetadata;
        var metadataOwner = new _WeakMap();
        var provider = {
          isProviderFor: function(O2, P2) {
            var metadataPropertySet = metadataOwner.get(O2);
            if (!IsUndefined(metadataPropertySet) && metadataPropertySet.has(P2)) {
              return true;
            }
            if (getOwnMetadataKeys2(O2, P2).length) {
              if (IsUndefined(metadataPropertySet)) {
                metadataPropertySet = new _Set();
                metadataOwner.set(O2, metadataPropertySet);
              }
              metadataPropertySet.add(P2);
              return true;
            }
            return false;
          },
          OrdinaryDefineOwnMetadata: defineMetadata2,
          OrdinaryHasOwnMetadata: hasOwnMetadata2,
          OrdinaryGetOwnMetadata: getOwnMetadata2,
          OrdinaryOwnMetadataKeys: getOwnMetadataKeys2,
          OrdinaryDeleteMetadata: deleteMetadata2
        };
        return provider;
      }
      function GetMetadataProvider(O2, P2, Create) {
        var registeredProvider = metadataRegistry.getProvider(O2, P2);
        if (!IsUndefined(registeredProvider)) {
          return registeredProvider;
        }
        if (Create) {
          if (metadataRegistry.setProvider(O2, P2, metadataProvider)) {
            return metadataProvider;
          }
          throw new Error("Illegal state.");
        }
        return void 0;
      }
    });
  })(Reflect2 || (Reflect2 = {}));
  return ReflectLite;
}
requireReflectLite();
function c(t2, n2, e2) {
  return Reflect.getOwnMetadata(n2, t2, e2);
}
function a(t2, n2, e2, u2) {
  Reflect.defineMetadata(n2, e2, t2, u2);
}
function i(t2, n2, e2, u2, f2) {
  const r2 = u2(c(t2, n2, f2) ?? e2());
  Reflect.defineMetadata(n2, r2, t2, f2);
}
function t(t2) {
  const o2 = Object.getPrototypeOf(t2.prototype), r2 = o2?.constructor;
  return r2;
}
function* l(...e2) {
  for (const t2 of e2) yield* t2;
}
var f;
!(function(e2) {
  e2.moduleId = "moduleId", e2.serviceId = "serviceId";
})(f || (f = {}));
const h = "@inversifyjs/core/classMetadataReflectKey";
function g() {
  return { constructorArguments: [], lifecycle: { postConstructMethodNames: /* @__PURE__ */ new Set(), preDestroyMethodNames: /* @__PURE__ */ new Set() }, properties: /* @__PURE__ */ new Map(), scope: void 0 };
}
const m = "@inversifyjs/core/pendingClassMetadataCountReflectKey";
const y = Symbol.for("@inversifyjs/core/InversifyCoreError");
class M extends Error {
  [y];
  kind;
  constructor(e2, t2, n2) {
    super(t2, n2), this[y] = true, this.kind = e2;
  }
  static is(e2) {
    return "object" == typeof e2 && null !== e2 && true === e2[y];
  }
  static isErrorOfKind(e2, t2) {
    return M.is(e2) && e2.kind === t2;
  }
}
var I, b, w, C, S;
function N(t2) {
  const n2 = c(t2, h) ?? g();
  if (!(function(t3) {
    const n3 = c(t3, m);
    return void 0 !== n3 && 0 !== n3;
  })(t2)) return (function(e2, t3) {
    const n3 = [];
    if (t3.length < e2.length) throw new M(I.missingInjectionDecorator, `Found unexpected missing metadata on type "${e2.name}". "${e2.name}" constructor requires at least ${e2.length.toString()} arguments, found ${t3.length.toString()} instead.
Are you using @inject, @multiInject or @unmanaged decorators in every non optional constructor argument?

If you're using typescript and want to rely on auto injection, set "emitDecoratorMetadata" compiler option to true`);
    for (let e3 = 0; e3 < t3.length; ++e3) void 0 === t3[e3] && n3.push(e3);
    if (n3.length > 0) throw new M(I.missingInjectionDecorator, `Found unexpected missing metadata on type "${e2.name}" at constructor indexes "${n3.join('", "')}".

Are you using @inject, @multiInject or @unmanaged decorators at those indexes?

If you're using typescript and want to rely on auto injection, set "emitDecoratorMetadata" compiler option to true`);
  })(t2, n2.constructorArguments), n2;
  !(function(e2, t3) {
    const n3 = [];
    for (let i2 = 0; i2 < t3.constructorArguments.length; ++i2) {
      const o2 = t3.constructorArguments[i2];
      void 0 !== o2 && o2.kind !== b.unknown || n3.push(`  - Missing or incomplete metadata for type "${e2.name}" at constructor argument with index ${i2.toString()}.
Every constructor parameter must be decorated either with @inject, @multiInject or @unmanaged decorator.`);
    }
    for (const [i2, o2] of t3.properties) o2.kind === b.unknown && n3.push(`  - Missing or incomplete metadata for type "${e2.name}" at property "${i2.toString()}".
This property must be decorated either with @inject or @multiInject decorator.`);
    if (0 === n3.length) throw new M(I.unknown, `Unexpected class metadata for type "${e2.name}" with uncompletion traces.
This might be caused by one of the following reasons:

1. A third party library is targeting inversify reflection metadata.
2. A bug is causing the issue. Consider submiting an issue to fix it.`);
    throw new M(I.missingInjectionDecorator, `Invalid class metadata at type ${e2.name}:

${n3.join("\n\n")}`);
  })(t2, n2);
}
!(function(e2) {
  e2[e2.injectionDecoratorConflict = 0] = "injectionDecoratorConflict", e2[e2.missingInjectionDecorator = 1] = "missingInjectionDecorator", e2[e2.planning = 2] = "planning", e2[e2.resolution = 3] = "resolution", e2[e2.unknown = 4] = "unknown";
})(I || (I = {})), (function(e2) {
  e2[e2.unknown = 32] = "unknown";
})(b || (b = {})), (function(e2) {
  e2.id = "id", e2.moduleId = "moduleId", e2.serviceId = "serviceId";
})(w || (w = {}));
!(function(e2) {
  e2.moduleId = "moduleId", e2.serviceId = "serviceId";
})(C || (C = {}));
function F() {
  return 0;
}
function k(e2) {
  return (t2) => {
    void 0 !== t2 && t2.kind === b.unknown && i(e2, m, F, (e3) => e3 - 1);
  };
}
function $(e2, t2) {
  return (...n2) => (i2) => {
    if (void 0 === i2) return e2(...n2);
    if (i2.kind === S.unmanaged) throw new M(I.injectionDecoratorConflict, "Unexpected injection found. Multiple @inject, @multiInject or @unmanaged decorators found");
    return t2(i2, ...n2);
  };
}
function D(e2) {
  if (e2.kind !== b.unknown && true !== e2.isFromTypescriptParamType) throw new M(I.injectionDecoratorConflict, "Unexpected injection found. Multiple @inject, @multiInject or @unmanaged decorators found");
}
!(function(e2) {
  e2[e2.multipleInjection = 0] = "multipleInjection", e2[e2.singleInjection = 1] = "singleInjection", e2[e2.unmanaged = 2] = "unmanaged";
})(S || (S = {}));
const V = $(function(e2, t2, n2) {
  return e2 === S.multipleInjection ? { chained: n2?.chained ?? false, kind: e2, name: void 0, optional: false, tags: /* @__PURE__ */ new Map(), value: t2 } : { kind: e2, name: void 0, optional: false, tags: /* @__PURE__ */ new Map(), value: t2 };
}, function(e2, t2, n2, i2) {
  return D(e2), t2 === S.multipleInjection ? { ...e2, chained: i2?.chained ?? false, kind: t2, value: n2 } : { ...e2, kind: t2, value: n2 };
});
function O$1(e2, t2) {
  return (n2) => {
    const i2 = n2.properties.get(t2);
    return n2.properties.set(t2, e2(i2)), n2;
  };
}
var E;
function _(e2, t2, n2, i2) {
  if (M.isErrorOfKind(i2, I.injectionDecoratorConflict)) {
    const o2 = (function(e3, t3, n3) {
      if (void 0 === n3) {
        if (void 0 === t3) throw new M(I.unknown, "Unexpected undefined property and index values");
        return { kind: E.property, property: t3, targetClass: e3.constructor };
      }
      return "number" == typeof n3 ? { index: n3, kind: E.parameter, targetClass: e3 } : { kind: E.method, method: t3, targetClass: e3 };
    })(e2, t2, n2);
    throw new M(I.injectionDecoratorConflict, `Unexpected injection error.

Cause:

${i2.message}

Details

${(function(e3) {
      switch (e3.kind) {
        case E.method:
          return `[class: "${e3.targetClass.name}", method: "${e3.method.toString()}"]`;
        case E.parameter:
          return `[class: "${e3.targetClass.name}", index: "${e3.index.toString()}"]`;
        case E.property:
          return `[class: "${e3.targetClass.name}", property: "${e3.property.toString()}"]`;
      }
    })(o2)}`, { cause: i2 });
  }
  throw i2;
}
function z(e2, t2) {
  return (i$12, o2, r2) => {
    try {
      void 0 === r2 ? (function(e3, t3) {
        const i$13 = L(e3, t3);
        return (e4, t4) => {
          i(e4.constructor, h, g, O$1(i$13(e4), t4));
        };
      })(e2, t2)(i$12, o2) : "number" == typeof r2 ? (function(e3, t3) {
        const i$13 = L(e3, t3);
        return (e4, t4, o3) => {
          if (!/* @__PURE__ */ (function(e5, t5) {
            return "function" == typeof e5 && void 0 === t5;
          })(e4, t4)) throw new M(I.injectionDecoratorConflict, `Found an @inject decorator in a non constructor parameter.
Found @inject decorator at method "${t4?.toString() ?? ""}" at class "${e4.constructor.name}"`);
          i(e4, h, g, /* @__PURE__ */ (function(e5, t5) {
            return (n2) => {
              const i2 = n2.constructorArguments[t5];
              return n2.constructorArguments[t5] = e5(i2), n2;
            };
          })(i$13(e4), o3));
        };
      })(e2, t2)(i$12, o2, r2) : (function(e3, t3) {
        const i$13 = L(e3, t3);
        return (e4, t4, o3) => {
          if (!(function(e5) {
            return void 0 !== e5.set;
          })(o3)) throw new M(I.injectionDecoratorConflict, `Found an @inject decorator in a non setter property method.
Found @inject decorator at method "${t4.toString()}" at class "${e4.constructor.name}"`);
          i(e4.constructor, h, g, O$1(i$13(e4), t4));
        };
      })(e2, t2)(i$12, o2, r2);
    } catch (e3) {
      _(i$12, o2, r2, e3);
    }
  };
}
function L(e2, t2) {
  return (n2) => {
    const i2 = t2(n2);
    return (t3) => (i2(t3), e2(t3));
  };
}
function U(e2) {
  return z(V(S.singleInjection, e2), k);
}
!(function(e2) {
  e2[e2.method = 0] = "method", e2[e2.parameter = 1] = "parameter", e2[e2.property = 2] = "property";
})(E || (E = {}));
const K = "@inversifyjs/core/classIsInjectableFlagReflectKey";
const q = [Array, BigInt, Boolean, Function, Number, Object, String];
function G(t2) {
  const i$12 = c(t2, "design:paramtypes");
  void 0 !== i$12 && i(t2, h, g, /* @__PURE__ */ (function(e2) {
    return (t3) => (e2.forEach((e3, n2) => {
      var i2;
      void 0 !== t3.constructorArguments[n2] || (i2 = e3, q.includes(i2)) || (t3.constructorArguments[n2] = (function(e4) {
        return { isFromTypescriptParamType: true, kind: S.singleInjection, name: void 0, optional: false, tags: /* @__PURE__ */ new Map(), value: e4 };
      })(e3));
    }), t3);
  })(i$12));
}
function W(i$12) {
  return (o2) => {
    !(function(n2) {
      if (void 0 !== c(n2, K)) throw new M(I.injectionDecoratorConflict, `Cannot apply @injectable decorator multiple times at class "${n2.name}"`);
      a(n2, K, true);
    })(o2), G(o2);
  };
}
function X(e2, t2, n2) {
  let i2;
  return e2.extendConstructorArguments ?? true ? (i2 = [...t2.constructorArguments], n2.constructorArguments.map((e3, t3) => {
    i2[t3] = e3;
  })) : i2 = n2.constructorArguments, i2;
}
function H(e2, t2, n2) {
  return e2 ? /* @__PURE__ */ new Set([...t2, ...n2]) : n2;
}
function J(e2, t2, n2) {
  const i2 = e2.lifecycle?.extendPostConstructMethods ?? true, o2 = H(e2.lifecycle?.extendPreDestroyMethods ?? true, t2.lifecycle.preDestroyMethodNames, n2.lifecycle.preDestroyMethodNames);
  return { postConstructMethodNames: H(i2, t2.lifecycle.postConstructMethodNames, n2.lifecycle.postConstructMethodNames), preDestroyMethodNames: o2 };
}
function Q(e2, t2, n2) {
  let i2;
  return i2 = e2.extendProperties ?? true ? new Map(l(t2.properties, n2.properties)) : n2.properties, i2;
}
function Y(e2) {
  return (t2) => {
    const i$12 = N(e2.type);
    i(t2, h, g, /* @__PURE__ */ (function(e3, t3) {
      const n2 = (n3) => ({ constructorArguments: X(e3, t3, n3), lifecycle: J(e3, t3, n3), properties: Q(e3, t3, n3), scope: n3.scope });
      return n2;
    })(e2, i$12));
  };
}
function Z(e2) {
  return (t$12) => {
    const n2 = t(t$12);
    if (void 0 === n2) throw new M(I.injectionDecoratorConflict, `Expected base type for type "${t$12.name}", none found.`);
    Y({ ...e2, type: n2 })(t$12);
  };
}
var fe;
!(function(e2) {
  e2[e2.multipleInjection = 0] = "multipleInjection", e2[e2.singleInjection = 1] = "singleInjection";
})(fe || (fe = {}));
var We;
!(function(e2) {
  e2.bindingAdded = "bindingAdded", e2.bindingRemoved = "bindingRemoved";
})(We || (We = {}));
var O;
!(function(e2) {
  e2[e2.invalidOperation = 0] = "invalidOperation";
})(O || (O = {}));
var re = { exports: {} };
var constants;
var hasRequiredConstants;
function requireConstants() {
  if (hasRequiredConstants) return constants;
  hasRequiredConstants = 1;
  const SEMVER_SPEC_VERSION = "2.0.0";
  const MAX_LENGTH = 256;
  const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
  9007199254740991;
  const MAX_SAFE_COMPONENT_LENGTH = 16;
  const MAX_SAFE_BUILD_LENGTH = MAX_LENGTH - 6;
  const RELEASE_TYPES = [
    "major",
    "premajor",
    "minor",
    "preminor",
    "patch",
    "prepatch",
    "prerelease"
  ];
  constants = {
    MAX_LENGTH,
    MAX_SAFE_COMPONENT_LENGTH,
    MAX_SAFE_BUILD_LENGTH,
    MAX_SAFE_INTEGER,
    RELEASE_TYPES,
    SEMVER_SPEC_VERSION,
    FLAG_INCLUDE_PRERELEASE: 1,
    FLAG_LOOSE: 2
  };
  return constants;
}
var debug_1;
var hasRequiredDebug;
function requireDebug() {
  if (hasRequiredDebug) return debug_1;
  hasRequiredDebug = 1;
  var define_process_env_default = {};
  const debug2 = typeof process === "object" && define_process_env_default && define_process_env_default.NODE_DEBUG && /\bsemver\b/i.test(define_process_env_default.NODE_DEBUG) ? (...args) => console.error("SEMVER", ...args) : () => {
  };
  debug_1 = debug2;
  return debug_1;
}
var hasRequiredRe;
function requireRe() {
  if (hasRequiredRe) return re.exports;
  hasRequiredRe = 1;
  (function(module, exports$1) {
    const {
      MAX_SAFE_COMPONENT_LENGTH,
      MAX_SAFE_BUILD_LENGTH,
      MAX_LENGTH
    } = requireConstants();
    const debug2 = requireDebug();
    exports$1 = module.exports = {};
    const re2 = exports$1.re = [];
    const safeRe = exports$1.safeRe = [];
    const src = exports$1.src = [];
    const safeSrc = exports$1.safeSrc = [];
    const t2 = exports$1.t = {};
    let R = 0;
    const LETTERDASHNUMBER = "[a-zA-Z0-9-]";
    const safeRegexReplacements = [
      ["\\s", 1],
      ["\\d", MAX_LENGTH],
      [LETTERDASHNUMBER, MAX_SAFE_BUILD_LENGTH]
    ];
    const makeSafeRegex = (value) => {
      for (const [token, max] of safeRegexReplacements) {
        value = value.split(`${token}*`).join(`${token}{0,${max}}`).split(`${token}+`).join(`${token}{1,${max}}`);
      }
      return value;
    };
    const createToken = (name, value, isGlobal) => {
      const safe = makeSafeRegex(value);
      const index = R++;
      debug2(name, index, value);
      t2[name] = index;
      src[index] = value;
      safeSrc[index] = safe;
      re2[index] = new RegExp(value, isGlobal ? "g" : void 0);
      safeRe[index] = new RegExp(safe, isGlobal ? "g" : void 0);
    };
    createToken("NUMERICIDENTIFIER", "0|[1-9]\\d*");
    createToken("NUMERICIDENTIFIERLOOSE", "\\d+");
    createToken("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${LETTERDASHNUMBER}*`);
    createToken("MAINVERSION", `(${src[t2.NUMERICIDENTIFIER]})\\.(${src[t2.NUMERICIDENTIFIER]})\\.(${src[t2.NUMERICIDENTIFIER]})`);
    createToken("MAINVERSIONLOOSE", `(${src[t2.NUMERICIDENTIFIERLOOSE]})\\.(${src[t2.NUMERICIDENTIFIERLOOSE]})\\.(${src[t2.NUMERICIDENTIFIERLOOSE]})`);
    createToken("PRERELEASEIDENTIFIER", `(?:${src[t2.NONNUMERICIDENTIFIER]}|${src[t2.NUMERICIDENTIFIER]})`);
    createToken("PRERELEASEIDENTIFIERLOOSE", `(?:${src[t2.NONNUMERICIDENTIFIER]}|${src[t2.NUMERICIDENTIFIERLOOSE]})`);
    createToken("PRERELEASE", `(?:-(${src[t2.PRERELEASEIDENTIFIER]}(?:\\.${src[t2.PRERELEASEIDENTIFIER]})*))`);
    createToken("PRERELEASELOOSE", `(?:-?(${src[t2.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${src[t2.PRERELEASEIDENTIFIERLOOSE]})*))`);
    createToken("BUILDIDENTIFIER", `${LETTERDASHNUMBER}+`);
    createToken("BUILD", `(?:\\+(${src[t2.BUILDIDENTIFIER]}(?:\\.${src[t2.BUILDIDENTIFIER]})*))`);
    createToken("FULLPLAIN", `v?${src[t2.MAINVERSION]}${src[t2.PRERELEASE]}?${src[t2.BUILD]}?`);
    createToken("FULL", `^${src[t2.FULLPLAIN]}$`);
    createToken("LOOSEPLAIN", `[v=\\s]*${src[t2.MAINVERSIONLOOSE]}${src[t2.PRERELEASELOOSE]}?${src[t2.BUILD]}?`);
    createToken("LOOSE", `^${src[t2.LOOSEPLAIN]}$`);
    createToken("GTLT", "((?:<|>)?=?)");
    createToken("XRANGEIDENTIFIERLOOSE", `${src[t2.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
    createToken("XRANGEIDENTIFIER", `${src[t2.NUMERICIDENTIFIER]}|x|X|\\*`);
    createToken("XRANGEPLAIN", `[v=\\s]*(${src[t2.XRANGEIDENTIFIER]})(?:\\.(${src[t2.XRANGEIDENTIFIER]})(?:\\.(${src[t2.XRANGEIDENTIFIER]})(?:${src[t2.PRERELEASE]})?${src[t2.BUILD]}?)?)?`);
    createToken("XRANGEPLAINLOOSE", `[v=\\s]*(${src[t2.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t2.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t2.XRANGEIDENTIFIERLOOSE]})(?:${src[t2.PRERELEASELOOSE]})?${src[t2.BUILD]}?)?)?`);
    createToken("XRANGE", `^${src[t2.GTLT]}\\s*${src[t2.XRANGEPLAIN]}$`);
    createToken("XRANGELOOSE", `^${src[t2.GTLT]}\\s*${src[t2.XRANGEPLAINLOOSE]}$`);
    createToken("COERCEPLAIN", `${"(^|[^\\d])(\\d{1,"}${MAX_SAFE_COMPONENT_LENGTH}})(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?`);
    createToken("COERCE", `${src[t2.COERCEPLAIN]}(?:$|[^\\d])`);
    createToken("COERCEFULL", src[t2.COERCEPLAIN] + `(?:${src[t2.PRERELEASE]})?(?:${src[t2.BUILD]})?(?:$|[^\\d])`);
    createToken("COERCERTL", src[t2.COERCE], true);
    createToken("COERCERTLFULL", src[t2.COERCEFULL], true);
    createToken("LONETILDE", "(?:~>?)");
    createToken("TILDETRIM", `(\\s*)${src[t2.LONETILDE]}\\s+`, true);
    exports$1.tildeTrimReplace = "$1~";
    createToken("TILDE", `^${src[t2.LONETILDE]}${src[t2.XRANGEPLAIN]}$`);
    createToken("TILDELOOSE", `^${src[t2.LONETILDE]}${src[t2.XRANGEPLAINLOOSE]}$`);
    createToken("LONECARET", "(?:\\^)");
    createToken("CARETTRIM", `(\\s*)${src[t2.LONECARET]}\\s+`, true);
    exports$1.caretTrimReplace = "$1^";
    createToken("CARET", `^${src[t2.LONECARET]}${src[t2.XRANGEPLAIN]}$`);
    createToken("CARETLOOSE", `^${src[t2.LONECARET]}${src[t2.XRANGEPLAINLOOSE]}$`);
    createToken("COMPARATORLOOSE", `^${src[t2.GTLT]}\\s*(${src[t2.LOOSEPLAIN]})$|^$`);
    createToken("COMPARATOR", `^${src[t2.GTLT]}\\s*(${src[t2.FULLPLAIN]})$|^$`);
    createToken("COMPARATORTRIM", `(\\s*)${src[t2.GTLT]}\\s*(${src[t2.LOOSEPLAIN]}|${src[t2.XRANGEPLAIN]})`, true);
    exports$1.comparatorTrimReplace = "$1$2$3";
    createToken("HYPHENRANGE", `^\\s*(${src[t2.XRANGEPLAIN]})\\s+-\\s+(${src[t2.XRANGEPLAIN]})\\s*$`);
    createToken("HYPHENRANGELOOSE", `^\\s*(${src[t2.XRANGEPLAINLOOSE]})\\s+-\\s+(${src[t2.XRANGEPLAINLOOSE]})\\s*$`);
    createToken("STAR", "(<|>)?=?\\s*\\*");
    createToken("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
    createToken("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  })(re, re.exports);
  return re.exports;
}
var parseOptions_1;
var hasRequiredParseOptions;
function requireParseOptions() {
  if (hasRequiredParseOptions) return parseOptions_1;
  hasRequiredParseOptions = 1;
  const looseOption = Object.freeze({ loose: true });
  const emptyOpts = Object.freeze({});
  const parseOptions = (options) => {
    if (!options) {
      return emptyOpts;
    }
    if (typeof options !== "object") {
      return looseOption;
    }
    return options;
  };
  parseOptions_1 = parseOptions;
  return parseOptions_1;
}
var identifiers;
var hasRequiredIdentifiers;
function requireIdentifiers() {
  if (hasRequiredIdentifiers) return identifiers;
  hasRequiredIdentifiers = 1;
  const numeric = /^[0-9]+$/;
  const compareIdentifiers = (a2, b2) => {
    if (typeof a2 === "number" && typeof b2 === "number") {
      return a2 === b2 ? 0 : a2 < b2 ? -1 : 1;
    }
    const anum = numeric.test(a2);
    const bnum = numeric.test(b2);
    if (anum && bnum) {
      a2 = +a2;
      b2 = +b2;
    }
    return a2 === b2 ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a2 < b2 ? -1 : 1;
  };
  const rcompareIdentifiers = (a2, b2) => compareIdentifiers(b2, a2);
  identifiers = {
    compareIdentifiers,
    rcompareIdentifiers
  };
  return identifiers;
}
var semver$1;
var hasRequiredSemver$1;
function requireSemver$1() {
  if (hasRequiredSemver$1) return semver$1;
  hasRequiredSemver$1 = 1;
  const debug2 = requireDebug();
  const { MAX_LENGTH, MAX_SAFE_INTEGER } = requireConstants();
  const { safeRe: re2, t: t2 } = requireRe();
  const parseOptions = requireParseOptions();
  const { compareIdentifiers } = requireIdentifiers();
  class SemVer {
    constructor(version, options) {
      options = parseOptions(options);
      if (version instanceof SemVer) {
        if (version.loose === !!options.loose && version.includePrerelease === !!options.includePrerelease) {
          return version;
        } else {
          version = version.version;
        }
      } else if (typeof version !== "string") {
        throw new TypeError(`Invalid version. Must be a string. Got type "${typeof version}".`);
      }
      if (version.length > MAX_LENGTH) {
        throw new TypeError(
          `version is longer than ${MAX_LENGTH} characters`
        );
      }
      debug2("SemVer", version, options);
      this.options = options;
      this.loose = !!options.loose;
      this.includePrerelease = !!options.includePrerelease;
      const m2 = version.trim().match(options.loose ? re2[t2.LOOSE] : re2[t2.FULL]);
      if (!m2) {
        throw new TypeError(`Invalid Version: ${version}`);
      }
      this.raw = version;
      this.major = +m2[1];
      this.minor = +m2[2];
      this.patch = +m2[3];
      if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
        throw new TypeError("Invalid major version");
      }
      if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
        throw new TypeError("Invalid minor version");
      }
      if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
        throw new TypeError("Invalid patch version");
      }
      if (!m2[4]) {
        this.prerelease = [];
      } else {
        this.prerelease = m2[4].split(".").map((id) => {
          if (/^[0-9]+$/.test(id)) {
            const num = +id;
            if (num >= 0 && num < MAX_SAFE_INTEGER) {
              return num;
            }
          }
          return id;
        });
      }
      this.build = m2[5] ? m2[5].split(".") : [];
      this.format();
    }
    format() {
      this.version = `${this.major}.${this.minor}.${this.patch}`;
      if (this.prerelease.length) {
        this.version += `-${this.prerelease.join(".")}`;
      }
      return this.version;
    }
    toString() {
      return this.version;
    }
    compare(other) {
      debug2("SemVer.compare", this.version, this.options, other);
      if (!(other instanceof SemVer)) {
        if (typeof other === "string" && other === this.version) {
          return 0;
        }
        other = new SemVer(other, this.options);
      }
      if (other.version === this.version) {
        return 0;
      }
      return this.compareMain(other) || this.comparePre(other);
    }
    compareMain(other) {
      if (!(other instanceof SemVer)) {
        other = new SemVer(other, this.options);
      }
      if (this.major < other.major) {
        return -1;
      }
      if (this.major > other.major) {
        return 1;
      }
      if (this.minor < other.minor) {
        return -1;
      }
      if (this.minor > other.minor) {
        return 1;
      }
      if (this.patch < other.patch) {
        return -1;
      }
      if (this.patch > other.patch) {
        return 1;
      }
      return 0;
    }
    comparePre(other) {
      if (!(other instanceof SemVer)) {
        other = new SemVer(other, this.options);
      }
      if (this.prerelease.length && !other.prerelease.length) {
        return -1;
      } else if (!this.prerelease.length && other.prerelease.length) {
        return 1;
      } else if (!this.prerelease.length && !other.prerelease.length) {
        return 0;
      }
      let i2 = 0;
      do {
        const a2 = this.prerelease[i2];
        const b2 = other.prerelease[i2];
        debug2("prerelease compare", i2, a2, b2);
        if (a2 === void 0 && b2 === void 0) {
          return 0;
        } else if (b2 === void 0) {
          return 1;
        } else if (a2 === void 0) {
          return -1;
        } else if (a2 === b2) {
          continue;
        } else {
          return compareIdentifiers(a2, b2);
        }
      } while (++i2);
    }
    compareBuild(other) {
      if (!(other instanceof SemVer)) {
        other = new SemVer(other, this.options);
      }
      let i2 = 0;
      do {
        const a2 = this.build[i2];
        const b2 = other.build[i2];
        debug2("build compare", i2, a2, b2);
        if (a2 === void 0 && b2 === void 0) {
          return 0;
        } else if (b2 === void 0) {
          return 1;
        } else if (a2 === void 0) {
          return -1;
        } else if (a2 === b2) {
          continue;
        } else {
          return compareIdentifiers(a2, b2);
        }
      } while (++i2);
    }
    // preminor will bump the version up to the next minor release, and immediately
    // down to pre-release. premajor and prepatch work the same way.
    inc(release, identifier2, identifierBase) {
      if (release.startsWith("pre")) {
        if (!identifier2 && identifierBase === false) {
          throw new Error("invalid increment argument: identifier is empty");
        }
        if (identifier2) {
          const match = `-${identifier2}`.match(this.options.loose ? re2[t2.PRERELEASELOOSE] : re2[t2.PRERELEASE]);
          if (!match || match[1] !== identifier2) {
            throw new Error(`invalid identifier: ${identifier2}`);
          }
        }
      }
      switch (release) {
        case "premajor":
          this.prerelease.length = 0;
          this.patch = 0;
          this.minor = 0;
          this.major++;
          this.inc("pre", identifier2, identifierBase);
          break;
        case "preminor":
          this.prerelease.length = 0;
          this.patch = 0;
          this.minor++;
          this.inc("pre", identifier2, identifierBase);
          break;
        case "prepatch":
          this.prerelease.length = 0;
          this.inc("patch", identifier2, identifierBase);
          this.inc("pre", identifier2, identifierBase);
          break;
        // If the input is a non-prerelease version, this acts the same as
        // prepatch.
        case "prerelease":
          if (this.prerelease.length === 0) {
            this.inc("patch", identifier2, identifierBase);
          }
          this.inc("pre", identifier2, identifierBase);
          break;
        case "release":
          if (this.prerelease.length === 0) {
            throw new Error(`version ${this.raw} is not a prerelease`);
          }
          this.prerelease.length = 0;
          break;
        case "major":
          if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
            this.major++;
          }
          this.minor = 0;
          this.patch = 0;
          this.prerelease = [];
          break;
        case "minor":
          if (this.patch !== 0 || this.prerelease.length === 0) {
            this.minor++;
          }
          this.patch = 0;
          this.prerelease = [];
          break;
        case "patch":
          if (this.prerelease.length === 0) {
            this.patch++;
          }
          this.prerelease = [];
          break;
        // This probably shouldn't be used publicly.
        // 1.0.0 'pre' would become 1.0.0-0 which is the wrong direction.
        case "pre": {
          const base = Number(identifierBase) ? 1 : 0;
          if (this.prerelease.length === 0) {
            this.prerelease = [base];
          } else {
            let i2 = this.prerelease.length;
            while (--i2 >= 0) {
              if (typeof this.prerelease[i2] === "number") {
                this.prerelease[i2]++;
                i2 = -2;
              }
            }
            if (i2 === -1) {
              if (identifier2 === this.prerelease.join(".") && identifierBase === false) {
                throw new Error("invalid increment argument: identifier already exists");
              }
              this.prerelease.push(base);
            }
          }
          if (identifier2) {
            let prerelease = [identifier2, base];
            if (identifierBase === false) {
              prerelease = [identifier2];
            }
            if (compareIdentifiers(this.prerelease[0], identifier2) === 0) {
              if (isNaN(this.prerelease[1])) {
                this.prerelease = prerelease;
              }
            } else {
              this.prerelease = prerelease;
            }
          }
          break;
        }
        default:
          throw new Error(`invalid increment argument: ${release}`);
      }
      this.raw = this.format();
      if (this.build.length) {
        this.raw += `+${this.build.join(".")}`;
      }
      return this;
    }
  }
  semver$1 = SemVer;
  return semver$1;
}
var parse_1;
var hasRequiredParse;
function requireParse() {
  if (hasRequiredParse) return parse_1;
  hasRequiredParse = 1;
  const SemVer = requireSemver$1();
  const parse = (version, options, throwErrors = false) => {
    if (version instanceof SemVer) {
      return version;
    }
    try {
      return new SemVer(version, options);
    } catch (er) {
      if (!throwErrors) {
        return null;
      }
      throw er;
    }
  };
  parse_1 = parse;
  return parse_1;
}
var valid_1;
var hasRequiredValid$1;
function requireValid$1() {
  if (hasRequiredValid$1) return valid_1;
  hasRequiredValid$1 = 1;
  const parse = requireParse();
  const valid2 = (version, options) => {
    const v2 = parse(version, options);
    return v2 ? v2.version : null;
  };
  valid_1 = valid2;
  return valid_1;
}
var clean_1;
var hasRequiredClean;
function requireClean() {
  if (hasRequiredClean) return clean_1;
  hasRequiredClean = 1;
  const parse = requireParse();
  const clean = (version, options) => {
    const s2 = parse(version.trim().replace(/^[=v]+/, ""), options);
    return s2 ? s2.version : null;
  };
  clean_1 = clean;
  return clean_1;
}
var inc_1;
var hasRequiredInc;
function requireInc() {
  if (hasRequiredInc) return inc_1;
  hasRequiredInc = 1;
  const SemVer = requireSemver$1();
  const inc = (version, release, options, identifier2, identifierBase) => {
    if (typeof options === "string") {
      identifierBase = identifier2;
      identifier2 = options;
      options = void 0;
    }
    try {
      return new SemVer(
        version instanceof SemVer ? version.version : version,
        options
      ).inc(release, identifier2, identifierBase).version;
    } catch (er) {
      return null;
    }
  };
  inc_1 = inc;
  return inc_1;
}
var diff_1;
var hasRequiredDiff;
function requireDiff() {
  if (hasRequiredDiff) return diff_1;
  hasRequiredDiff = 1;
  const parse = requireParse();
  const diff = (version1, version2) => {
    const v1 = parse(version1, null, true);
    const v2 = parse(version2, null, true);
    const comparison = v1.compare(v2);
    if (comparison === 0) {
      return null;
    }
    const v1Higher = comparison > 0;
    const highVersion = v1Higher ? v1 : v2;
    const lowVersion = v1Higher ? v2 : v1;
    const highHasPre = !!highVersion.prerelease.length;
    const lowHasPre = !!lowVersion.prerelease.length;
    if (lowHasPre && !highHasPre) {
      if (!lowVersion.patch && !lowVersion.minor) {
        return "major";
      }
      if (lowVersion.compareMain(highVersion) === 0) {
        if (lowVersion.minor && !lowVersion.patch) {
          return "minor";
        }
        return "patch";
      }
    }
    const prefix = highHasPre ? "pre" : "";
    if (v1.major !== v2.major) {
      return prefix + "major";
    }
    if (v1.minor !== v2.minor) {
      return prefix + "minor";
    }
    if (v1.patch !== v2.patch) {
      return prefix + "patch";
    }
    return "prerelease";
  };
  diff_1 = diff;
  return diff_1;
}
var major_1;
var hasRequiredMajor;
function requireMajor() {
  if (hasRequiredMajor) return major_1;
  hasRequiredMajor = 1;
  const SemVer = requireSemver$1();
  const major = (a2, loose) => new SemVer(a2, loose).major;
  major_1 = major;
  return major_1;
}
var minor_1;
var hasRequiredMinor;
function requireMinor() {
  if (hasRequiredMinor) return minor_1;
  hasRequiredMinor = 1;
  const SemVer = requireSemver$1();
  const minor = (a2, loose) => new SemVer(a2, loose).minor;
  minor_1 = minor;
  return minor_1;
}
var patch_1;
var hasRequiredPatch;
function requirePatch() {
  if (hasRequiredPatch) return patch_1;
  hasRequiredPatch = 1;
  const SemVer = requireSemver$1();
  const patch = (a2, loose) => new SemVer(a2, loose).patch;
  patch_1 = patch;
  return patch_1;
}
var prerelease_1;
var hasRequiredPrerelease;
function requirePrerelease() {
  if (hasRequiredPrerelease) return prerelease_1;
  hasRequiredPrerelease = 1;
  const parse = requireParse();
  const prerelease = (version, options) => {
    const parsed = parse(version, options);
    return parsed && parsed.prerelease.length ? parsed.prerelease : null;
  };
  prerelease_1 = prerelease;
  return prerelease_1;
}
var compare_1;
var hasRequiredCompare;
function requireCompare() {
  if (hasRequiredCompare) return compare_1;
  hasRequiredCompare = 1;
  const SemVer = requireSemver$1();
  const compare = (a2, b2, loose) => new SemVer(a2, loose).compare(new SemVer(b2, loose));
  compare_1 = compare;
  return compare_1;
}
var rcompare_1;
var hasRequiredRcompare;
function requireRcompare() {
  if (hasRequiredRcompare) return rcompare_1;
  hasRequiredRcompare = 1;
  const compare = requireCompare();
  const rcompare = (a2, b2, loose) => compare(b2, a2, loose);
  rcompare_1 = rcompare;
  return rcompare_1;
}
var compareLoose_1;
var hasRequiredCompareLoose;
function requireCompareLoose() {
  if (hasRequiredCompareLoose) return compareLoose_1;
  hasRequiredCompareLoose = 1;
  const compare = requireCompare();
  const compareLoose = (a2, b2) => compare(a2, b2, true);
  compareLoose_1 = compareLoose;
  return compareLoose_1;
}
var compareBuild_1;
var hasRequiredCompareBuild;
function requireCompareBuild() {
  if (hasRequiredCompareBuild) return compareBuild_1;
  hasRequiredCompareBuild = 1;
  const SemVer = requireSemver$1();
  const compareBuild = (a2, b2, loose) => {
    const versionA = new SemVer(a2, loose);
    const versionB = new SemVer(b2, loose);
    return versionA.compare(versionB) || versionA.compareBuild(versionB);
  };
  compareBuild_1 = compareBuild;
  return compareBuild_1;
}
var sort_1;
var hasRequiredSort;
function requireSort() {
  if (hasRequiredSort) return sort_1;
  hasRequiredSort = 1;
  const compareBuild = requireCompareBuild();
  const sort = (list, loose) => list.sort((a2, b2) => compareBuild(a2, b2, loose));
  sort_1 = sort;
  return sort_1;
}
var rsort_1;
var hasRequiredRsort;
function requireRsort() {
  if (hasRequiredRsort) return rsort_1;
  hasRequiredRsort = 1;
  const compareBuild = requireCompareBuild();
  const rsort = (list, loose) => list.sort((a2, b2) => compareBuild(b2, a2, loose));
  rsort_1 = rsort;
  return rsort_1;
}
var gt_1;
var hasRequiredGt;
function requireGt() {
  if (hasRequiredGt) return gt_1;
  hasRequiredGt = 1;
  const compare = requireCompare();
  const gt = (a2, b2, loose) => compare(a2, b2, loose) > 0;
  gt_1 = gt;
  return gt_1;
}
var lt_1;
var hasRequiredLt;
function requireLt() {
  if (hasRequiredLt) return lt_1;
  hasRequiredLt = 1;
  const compare = requireCompare();
  const lt = (a2, b2, loose) => compare(a2, b2, loose) < 0;
  lt_1 = lt;
  return lt_1;
}
var eq_1;
var hasRequiredEq;
function requireEq() {
  if (hasRequiredEq) return eq_1;
  hasRequiredEq = 1;
  const compare = requireCompare();
  const eq = (a2, b2, loose) => compare(a2, b2, loose) === 0;
  eq_1 = eq;
  return eq_1;
}
var neq_1;
var hasRequiredNeq;
function requireNeq() {
  if (hasRequiredNeq) return neq_1;
  hasRequiredNeq = 1;
  const compare = requireCompare();
  const neq = (a2, b2, loose) => compare(a2, b2, loose) !== 0;
  neq_1 = neq;
  return neq_1;
}
var gte_1;
var hasRequiredGte;
function requireGte() {
  if (hasRequiredGte) return gte_1;
  hasRequiredGte = 1;
  const compare = requireCompare();
  const gte = (a2, b2, loose) => compare(a2, b2, loose) >= 0;
  gte_1 = gte;
  return gte_1;
}
var lte_1;
var hasRequiredLte;
function requireLte() {
  if (hasRequiredLte) return lte_1;
  hasRequiredLte = 1;
  const compare = requireCompare();
  const lte = (a2, b2, loose) => compare(a2, b2, loose) <= 0;
  lte_1 = lte;
  return lte_1;
}
var cmp_1;
var hasRequiredCmp;
function requireCmp() {
  if (hasRequiredCmp) return cmp_1;
  hasRequiredCmp = 1;
  const eq = requireEq();
  const neq = requireNeq();
  const gt = requireGt();
  const gte = requireGte();
  const lt = requireLt();
  const lte = requireLte();
  const cmp = (a2, op, b2, loose) => {
    switch (op) {
      case "===":
        if (typeof a2 === "object") {
          a2 = a2.version;
        }
        if (typeof b2 === "object") {
          b2 = b2.version;
        }
        return a2 === b2;
      case "!==":
        if (typeof a2 === "object") {
          a2 = a2.version;
        }
        if (typeof b2 === "object") {
          b2 = b2.version;
        }
        return a2 !== b2;
      case "":
      case "=":
      case "==":
        return eq(a2, b2, loose);
      case "!=":
        return neq(a2, b2, loose);
      case ">":
        return gt(a2, b2, loose);
      case ">=":
        return gte(a2, b2, loose);
      case "<":
        return lt(a2, b2, loose);
      case "<=":
        return lte(a2, b2, loose);
      default:
        throw new TypeError(`Invalid operator: ${op}`);
    }
  };
  cmp_1 = cmp;
  return cmp_1;
}
var coerce_1;
var hasRequiredCoerce;
function requireCoerce() {
  if (hasRequiredCoerce) return coerce_1;
  hasRequiredCoerce = 1;
  const SemVer = requireSemver$1();
  const parse = requireParse();
  const { safeRe: re2, t: t2 } = requireRe();
  const coerce = (version, options) => {
    if (version instanceof SemVer) {
      return version;
    }
    if (typeof version === "number") {
      version = String(version);
    }
    if (typeof version !== "string") {
      return null;
    }
    options = options || {};
    let match = null;
    if (!options.rtl) {
      match = version.match(options.includePrerelease ? re2[t2.COERCEFULL] : re2[t2.COERCE]);
    } else {
      const coerceRtlRegex = options.includePrerelease ? re2[t2.COERCERTLFULL] : re2[t2.COERCERTL];
      let next;
      while ((next = coerceRtlRegex.exec(version)) && (!match || match.index + match[0].length !== version.length)) {
        if (!match || next.index + next[0].length !== match.index + match[0].length) {
          match = next;
        }
        coerceRtlRegex.lastIndex = next.index + next[1].length + next[2].length;
      }
      coerceRtlRegex.lastIndex = -1;
    }
    if (match === null) {
      return null;
    }
    const major = match[2];
    const minor = match[3] || "0";
    const patch = match[4] || "0";
    const prerelease = options.includePrerelease && match[5] ? `-${match[5]}` : "";
    const build = options.includePrerelease && match[6] ? `+${match[6]}` : "";
    return parse(`${major}.${minor}.${patch}${prerelease}${build}`, options);
  };
  coerce_1 = coerce;
  return coerce_1;
}
var lrucache;
var hasRequiredLrucache;
function requireLrucache() {
  if (hasRequiredLrucache) return lrucache;
  hasRequiredLrucache = 1;
  class LRUCache {
    constructor() {
      this.max = 1e3;
      this.map = /* @__PURE__ */ new Map();
    }
    get(key) {
      const value = this.map.get(key);
      if (value === void 0) {
        return void 0;
      } else {
        this.map.delete(key);
        this.map.set(key, value);
        return value;
      }
    }
    delete(key) {
      return this.map.delete(key);
    }
    set(key, value) {
      const deleted = this.delete(key);
      if (!deleted && value !== void 0) {
        if (this.map.size >= this.max) {
          const firstKey = this.map.keys().next().value;
          this.delete(firstKey);
        }
        this.map.set(key, value);
      }
      return this;
    }
  }
  lrucache = LRUCache;
  return lrucache;
}
var range;
var hasRequiredRange;
function requireRange() {
  if (hasRequiredRange) return range;
  hasRequiredRange = 1;
  const SPACE_CHARACTERS = /\s+/g;
  class Range {
    constructor(range2, options) {
      options = parseOptions(options);
      if (range2 instanceof Range) {
        if (range2.loose === !!options.loose && range2.includePrerelease === !!options.includePrerelease) {
          return range2;
        } else {
          return new Range(range2.raw, options);
        }
      }
      if (range2 instanceof Comparator) {
        this.raw = range2.value;
        this.set = [[range2]];
        this.formatted = void 0;
        return this;
      }
      this.options = options;
      this.loose = !!options.loose;
      this.includePrerelease = !!options.includePrerelease;
      this.raw = range2.trim().replace(SPACE_CHARACTERS, " ");
      this.set = this.raw.split("||").map((r2) => this.parseRange(r2.trim())).filter((c2) => c2.length);
      if (!this.set.length) {
        throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
      }
      if (this.set.length > 1) {
        const first = this.set[0];
        this.set = this.set.filter((c2) => !isNullSet(c2[0]));
        if (this.set.length === 0) {
          this.set = [first];
        } else if (this.set.length > 1) {
          for (const c2 of this.set) {
            if (c2.length === 1 && isAny(c2[0])) {
              this.set = [c2];
              break;
            }
          }
        }
      }
      this.formatted = void 0;
    }
    get range() {
      if (this.formatted === void 0) {
        this.formatted = "";
        for (let i2 = 0; i2 < this.set.length; i2++) {
          if (i2 > 0) {
            this.formatted += "||";
          }
          const comps = this.set[i2];
          for (let k2 = 0; k2 < comps.length; k2++) {
            if (k2 > 0) {
              this.formatted += " ";
            }
            this.formatted += comps[k2].toString().trim();
          }
        }
      }
      return this.formatted;
    }
    format() {
      return this.range;
    }
    toString() {
      return this.range;
    }
    parseRange(range2) {
      const memoOpts = (this.options.includePrerelease && FLAG_INCLUDE_PRERELEASE) | (this.options.loose && FLAG_LOOSE);
      const memoKey = memoOpts + ":" + range2;
      const cached = cache.get(memoKey);
      if (cached) {
        return cached;
      }
      const loose = this.options.loose;
      const hr = loose ? re2[t2.HYPHENRANGELOOSE] : re2[t2.HYPHENRANGE];
      range2 = range2.replace(hr, hyphenReplace(this.options.includePrerelease));
      debug2("hyphen replace", range2);
      range2 = range2.replace(re2[t2.COMPARATORTRIM], comparatorTrimReplace);
      debug2("comparator trim", range2);
      range2 = range2.replace(re2[t2.TILDETRIM], tildeTrimReplace);
      debug2("tilde trim", range2);
      range2 = range2.replace(re2[t2.CARETTRIM], caretTrimReplace);
      debug2("caret trim", range2);
      let rangeList = range2.split(" ").map((comp) => parseComparator(comp, this.options)).join(" ").split(/\s+/).map((comp) => replaceGTE0(comp, this.options));
      if (loose) {
        rangeList = rangeList.filter((comp) => {
          debug2("loose invalid filter", comp, this.options);
          return !!comp.match(re2[t2.COMPARATORLOOSE]);
        });
      }
      debug2("range list", rangeList);
      const rangeMap = /* @__PURE__ */ new Map();
      const comparators = rangeList.map((comp) => new Comparator(comp, this.options));
      for (const comp of comparators) {
        if (isNullSet(comp)) {
          return [comp];
        }
        rangeMap.set(comp.value, comp);
      }
      if (rangeMap.size > 1 && rangeMap.has("")) {
        rangeMap.delete("");
      }
      const result = [...rangeMap.values()];
      cache.set(memoKey, result);
      return result;
    }
    intersects(range2, options) {
      if (!(range2 instanceof Range)) {
        throw new TypeError("a Range is required");
      }
      return this.set.some((thisComparators) => {
        return isSatisfiable(thisComparators, options) && range2.set.some((rangeComparators) => {
          return isSatisfiable(rangeComparators, options) && thisComparators.every((thisComparator) => {
            return rangeComparators.every((rangeComparator) => {
              return thisComparator.intersects(rangeComparator, options);
            });
          });
        });
      });
    }
    // if ANY of the sets match ALL of its comparators, then pass
    test(version) {
      if (!version) {
        return false;
      }
      if (typeof version === "string") {
        try {
          version = new SemVer(version, this.options);
        } catch (er) {
          return false;
        }
      }
      for (let i2 = 0; i2 < this.set.length; i2++) {
        if (testSet(this.set[i2], version, this.options)) {
          return true;
        }
      }
      return false;
    }
  }
  range = Range;
  const LRU = requireLrucache();
  const cache = new LRU();
  const parseOptions = requireParseOptions();
  const Comparator = requireComparator();
  const debug2 = requireDebug();
  const SemVer = requireSemver$1();
  const {
    safeRe: re2,
    t: t2,
    comparatorTrimReplace,
    tildeTrimReplace,
    caretTrimReplace
  } = requireRe();
  const { FLAG_INCLUDE_PRERELEASE, FLAG_LOOSE } = requireConstants();
  const isNullSet = (c2) => c2.value === "<0.0.0-0";
  const isAny = (c2) => c2.value === "";
  const isSatisfiable = (comparators, options) => {
    let result = true;
    const remainingComparators = comparators.slice();
    let testComparator = remainingComparators.pop();
    while (result && remainingComparators.length) {
      result = remainingComparators.every((otherComparator) => {
        return testComparator.intersects(otherComparator, options);
      });
      testComparator = remainingComparators.pop();
    }
    return result;
  };
  const parseComparator = (comp, options) => {
    comp = comp.replace(re2[t2.BUILD], "");
    debug2("comp", comp, options);
    comp = replaceCarets(comp, options);
    debug2("caret", comp);
    comp = replaceTildes(comp, options);
    debug2("tildes", comp);
    comp = replaceXRanges(comp, options);
    debug2("xrange", comp);
    comp = replaceStars(comp, options);
    debug2("stars", comp);
    return comp;
  };
  const isX = (id) => !id || id.toLowerCase() === "x" || id === "*";
  const replaceTildes = (comp, options) => {
    return comp.trim().split(/\s+/).map((c2) => replaceTilde(c2, options)).join(" ");
  };
  const replaceTilde = (comp, options) => {
    const r2 = options.loose ? re2[t2.TILDELOOSE] : re2[t2.TILDE];
    return comp.replace(r2, (_2, M2, m2, p2, pr) => {
      debug2("tilde", comp, _2, M2, m2, p2, pr);
      let ret;
      if (isX(M2)) {
        ret = "";
      } else if (isX(m2)) {
        ret = `>=${M2}.0.0 <${+M2 + 1}.0.0-0`;
      } else if (isX(p2)) {
        ret = `>=${M2}.${m2}.0 <${M2}.${+m2 + 1}.0-0`;
      } else if (pr) {
        debug2("replaceTilde pr", pr);
        ret = `>=${M2}.${m2}.${p2}-${pr} <${M2}.${+m2 + 1}.0-0`;
      } else {
        ret = `>=${M2}.${m2}.${p2} <${M2}.${+m2 + 1}.0-0`;
      }
      debug2("tilde return", ret);
      return ret;
    });
  };
  const replaceCarets = (comp, options) => {
    return comp.trim().split(/\s+/).map((c2) => replaceCaret(c2, options)).join(" ");
  };
  const replaceCaret = (comp, options) => {
    debug2("caret", comp, options);
    const r2 = options.loose ? re2[t2.CARETLOOSE] : re2[t2.CARET];
    const z2 = options.includePrerelease ? "-0" : "";
    return comp.replace(r2, (_2, M2, m2, p2, pr) => {
      debug2("caret", comp, _2, M2, m2, p2, pr);
      let ret;
      if (isX(M2)) {
        ret = "";
      } else if (isX(m2)) {
        ret = `>=${M2}.0.0${z2} <${+M2 + 1}.0.0-0`;
      } else if (isX(p2)) {
        if (M2 === "0") {
          ret = `>=${M2}.${m2}.0${z2} <${M2}.${+m2 + 1}.0-0`;
        } else {
          ret = `>=${M2}.${m2}.0${z2} <${+M2 + 1}.0.0-0`;
        }
      } else if (pr) {
        debug2("replaceCaret pr", pr);
        if (M2 === "0") {
          if (m2 === "0") {
            ret = `>=${M2}.${m2}.${p2}-${pr} <${M2}.${m2}.${+p2 + 1}-0`;
          } else {
            ret = `>=${M2}.${m2}.${p2}-${pr} <${M2}.${+m2 + 1}.0-0`;
          }
        } else {
          ret = `>=${M2}.${m2}.${p2}-${pr} <${+M2 + 1}.0.0-0`;
        }
      } else {
        debug2("no pr");
        if (M2 === "0") {
          if (m2 === "0") {
            ret = `>=${M2}.${m2}.${p2}${z2} <${M2}.${m2}.${+p2 + 1}-0`;
          } else {
            ret = `>=${M2}.${m2}.${p2}${z2} <${M2}.${+m2 + 1}.0-0`;
          }
        } else {
          ret = `>=${M2}.${m2}.${p2} <${+M2 + 1}.0.0-0`;
        }
      }
      debug2("caret return", ret);
      return ret;
    });
  };
  const replaceXRanges = (comp, options) => {
    debug2("replaceXRanges", comp, options);
    return comp.split(/\s+/).map((c2) => replaceXRange(c2, options)).join(" ");
  };
  const replaceXRange = (comp, options) => {
    comp = comp.trim();
    const r2 = options.loose ? re2[t2.XRANGELOOSE] : re2[t2.XRANGE];
    return comp.replace(r2, (ret, gtlt, M2, m2, p2, pr) => {
      debug2("xRange", comp, ret, gtlt, M2, m2, p2, pr);
      const xM = isX(M2);
      const xm = xM || isX(m2);
      const xp = xm || isX(p2);
      const anyX = xp;
      if (gtlt === "=" && anyX) {
        gtlt = "";
      }
      pr = options.includePrerelease ? "-0" : "";
      if (xM) {
        if (gtlt === ">" || gtlt === "<") {
          ret = "<0.0.0-0";
        } else {
          ret = "*";
        }
      } else if (gtlt && anyX) {
        if (xm) {
          m2 = 0;
        }
        p2 = 0;
        if (gtlt === ">") {
          gtlt = ">=";
          if (xm) {
            M2 = +M2 + 1;
            m2 = 0;
            p2 = 0;
          } else {
            m2 = +m2 + 1;
            p2 = 0;
          }
        } else if (gtlt === "<=") {
          gtlt = "<";
          if (xm) {
            M2 = +M2 + 1;
          } else {
            m2 = +m2 + 1;
          }
        }
        if (gtlt === "<") {
          pr = "-0";
        }
        ret = `${gtlt + M2}.${m2}.${p2}${pr}`;
      } else if (xm) {
        ret = `>=${M2}.0.0${pr} <${+M2 + 1}.0.0-0`;
      } else if (xp) {
        ret = `>=${M2}.${m2}.0${pr} <${M2}.${+m2 + 1}.0-0`;
      }
      debug2("xRange return", ret);
      return ret;
    });
  };
  const replaceStars = (comp, options) => {
    debug2("replaceStars", comp, options);
    return comp.trim().replace(re2[t2.STAR], "");
  };
  const replaceGTE0 = (comp, options) => {
    debug2("replaceGTE0", comp, options);
    return comp.trim().replace(re2[options.includePrerelease ? t2.GTE0PRE : t2.GTE0], "");
  };
  const hyphenReplace = (incPr) => ($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr) => {
    if (isX(fM)) {
      from = "";
    } else if (isX(fm)) {
      from = `>=${fM}.0.0${incPr ? "-0" : ""}`;
    } else if (isX(fp)) {
      from = `>=${fM}.${fm}.0${incPr ? "-0" : ""}`;
    } else if (fpr) {
      from = `>=${from}`;
    } else {
      from = `>=${from}${incPr ? "-0" : ""}`;
    }
    if (isX(tM)) {
      to = "";
    } else if (isX(tm)) {
      to = `<${+tM + 1}.0.0-0`;
    } else if (isX(tp)) {
      to = `<${tM}.${+tm + 1}.0-0`;
    } else if (tpr) {
      to = `<=${tM}.${tm}.${tp}-${tpr}`;
    } else if (incPr) {
      to = `<${tM}.${tm}.${+tp + 1}-0`;
    } else {
      to = `<=${to}`;
    }
    return `${from} ${to}`.trim();
  };
  const testSet = (set, version, options) => {
    for (let i2 = 0; i2 < set.length; i2++) {
      if (!set[i2].test(version)) {
        return false;
      }
    }
    if (version.prerelease.length && !options.includePrerelease) {
      for (let i2 = 0; i2 < set.length; i2++) {
        debug2(set[i2].semver);
        if (set[i2].semver === Comparator.ANY) {
          continue;
        }
        if (set[i2].semver.prerelease.length > 0) {
          const allowed = set[i2].semver;
          if (allowed.major === version.major && allowed.minor === version.minor && allowed.patch === version.patch) {
            return true;
          }
        }
      }
      return false;
    }
    return true;
  };
  return range;
}
var comparator;
var hasRequiredComparator;
function requireComparator() {
  if (hasRequiredComparator) return comparator;
  hasRequiredComparator = 1;
  const ANY = Symbol("SemVer ANY");
  class Comparator {
    static get ANY() {
      return ANY;
    }
    constructor(comp, options) {
      options = parseOptions(options);
      if (comp instanceof Comparator) {
        if (comp.loose === !!options.loose) {
          return comp;
        } else {
          comp = comp.value;
        }
      }
      comp = comp.trim().split(/\s+/).join(" ");
      debug2("comparator", comp, options);
      this.options = options;
      this.loose = !!options.loose;
      this.parse(comp);
      if (this.semver === ANY) {
        this.value = "";
      } else {
        this.value = this.operator + this.semver.version;
      }
      debug2("comp", this);
    }
    parse(comp) {
      const r2 = this.options.loose ? re2[t2.COMPARATORLOOSE] : re2[t2.COMPARATOR];
      const m2 = comp.match(r2);
      if (!m2) {
        throw new TypeError(`Invalid comparator: ${comp}`);
      }
      this.operator = m2[1] !== void 0 ? m2[1] : "";
      if (this.operator === "=") {
        this.operator = "";
      }
      if (!m2[2]) {
        this.semver = ANY;
      } else {
        this.semver = new SemVer(m2[2], this.options.loose);
      }
    }
    toString() {
      return this.value;
    }
    test(version) {
      debug2("Comparator.test", version, this.options.loose);
      if (this.semver === ANY || version === ANY) {
        return true;
      }
      if (typeof version === "string") {
        try {
          version = new SemVer(version, this.options);
        } catch (er) {
          return false;
        }
      }
      return cmp(version, this.operator, this.semver, this.options);
    }
    intersects(comp, options) {
      if (!(comp instanceof Comparator)) {
        throw new TypeError("a Comparator is required");
      }
      if (this.operator === "") {
        if (this.value === "") {
          return true;
        }
        return new Range(comp.value, options).test(this.value);
      } else if (comp.operator === "") {
        if (comp.value === "") {
          return true;
        }
        return new Range(this.value, options).test(comp.semver);
      }
      options = parseOptions(options);
      if (options.includePrerelease && (this.value === "<0.0.0-0" || comp.value === "<0.0.0-0")) {
        return false;
      }
      if (!options.includePrerelease && (this.value.startsWith("<0.0.0") || comp.value.startsWith("<0.0.0"))) {
        return false;
      }
      if (this.operator.startsWith(">") && comp.operator.startsWith(">")) {
        return true;
      }
      if (this.operator.startsWith("<") && comp.operator.startsWith("<")) {
        return true;
      }
      if (this.semver.version === comp.semver.version && this.operator.includes("=") && comp.operator.includes("=")) {
        return true;
      }
      if (cmp(this.semver, "<", comp.semver, options) && this.operator.startsWith(">") && comp.operator.startsWith("<")) {
        return true;
      }
      if (cmp(this.semver, ">", comp.semver, options) && this.operator.startsWith("<") && comp.operator.startsWith(">")) {
        return true;
      }
      return false;
    }
  }
  comparator = Comparator;
  const parseOptions = requireParseOptions();
  const { safeRe: re2, t: t2 } = requireRe();
  const cmp = requireCmp();
  const debug2 = requireDebug();
  const SemVer = requireSemver$1();
  const Range = requireRange();
  return comparator;
}
var satisfies_1;
var hasRequiredSatisfies;
function requireSatisfies() {
  if (hasRequiredSatisfies) return satisfies_1;
  hasRequiredSatisfies = 1;
  const Range = requireRange();
  const satisfies = (version, range2, options) => {
    try {
      range2 = new Range(range2, options);
    } catch (er) {
      return false;
    }
    return range2.test(version);
  };
  satisfies_1 = satisfies;
  return satisfies_1;
}
var toComparators_1;
var hasRequiredToComparators;
function requireToComparators() {
  if (hasRequiredToComparators) return toComparators_1;
  hasRequiredToComparators = 1;
  const Range = requireRange();
  const toComparators = (range2, options) => new Range(range2, options).set.map((comp) => comp.map((c2) => c2.value).join(" ").trim().split(" "));
  toComparators_1 = toComparators;
  return toComparators_1;
}
var maxSatisfying_1;
var hasRequiredMaxSatisfying;
function requireMaxSatisfying() {
  if (hasRequiredMaxSatisfying) return maxSatisfying_1;
  hasRequiredMaxSatisfying = 1;
  const SemVer = requireSemver$1();
  const Range = requireRange();
  const maxSatisfying = (versions, range2, options) => {
    let max = null;
    let maxSV = null;
    let rangeObj = null;
    try {
      rangeObj = new Range(range2, options);
    } catch (er) {
      return null;
    }
    versions.forEach((v2) => {
      if (rangeObj.test(v2)) {
        if (!max || maxSV.compare(v2) === -1) {
          max = v2;
          maxSV = new SemVer(max, options);
        }
      }
    });
    return max;
  };
  maxSatisfying_1 = maxSatisfying;
  return maxSatisfying_1;
}
var minSatisfying_1;
var hasRequiredMinSatisfying;
function requireMinSatisfying() {
  if (hasRequiredMinSatisfying) return minSatisfying_1;
  hasRequiredMinSatisfying = 1;
  const SemVer = requireSemver$1();
  const Range = requireRange();
  const minSatisfying = (versions, range2, options) => {
    let min = null;
    let minSV = null;
    let rangeObj = null;
    try {
      rangeObj = new Range(range2, options);
    } catch (er) {
      return null;
    }
    versions.forEach((v2) => {
      if (rangeObj.test(v2)) {
        if (!min || minSV.compare(v2) === 1) {
          min = v2;
          minSV = new SemVer(min, options);
        }
      }
    });
    return min;
  };
  minSatisfying_1 = minSatisfying;
  return minSatisfying_1;
}
var minVersion_1;
var hasRequiredMinVersion;
function requireMinVersion() {
  if (hasRequiredMinVersion) return minVersion_1;
  hasRequiredMinVersion = 1;
  const SemVer = requireSemver$1();
  const Range = requireRange();
  const gt = requireGt();
  const minVersion = (range2, loose) => {
    range2 = new Range(range2, loose);
    let minver = new SemVer("0.0.0");
    if (range2.test(minver)) {
      return minver;
    }
    minver = new SemVer("0.0.0-0");
    if (range2.test(minver)) {
      return minver;
    }
    minver = null;
    for (let i2 = 0; i2 < range2.set.length; ++i2) {
      const comparators = range2.set[i2];
      let setMin = null;
      comparators.forEach((comparator2) => {
        const compver = new SemVer(comparator2.semver.version);
        switch (comparator2.operator) {
          case ">":
            if (compver.prerelease.length === 0) {
              compver.patch++;
            } else {
              compver.prerelease.push(0);
            }
            compver.raw = compver.format();
          /* fallthrough */
          case "":
          case ">=":
            if (!setMin || gt(compver, setMin)) {
              setMin = compver;
            }
            break;
          case "<":
          case "<=":
            break;
          /* istanbul ignore next */
          default:
            throw new Error(`Unexpected operation: ${comparator2.operator}`);
        }
      });
      if (setMin && (!minver || gt(minver, setMin))) {
        minver = setMin;
      }
    }
    if (minver && range2.test(minver)) {
      return minver;
    }
    return null;
  };
  minVersion_1 = minVersion;
  return minVersion_1;
}
var valid;
var hasRequiredValid;
function requireValid() {
  if (hasRequiredValid) return valid;
  hasRequiredValid = 1;
  const Range = requireRange();
  const validRange = (range2, options) => {
    try {
      return new Range(range2, options).range || "*";
    } catch (er) {
      return null;
    }
  };
  valid = validRange;
  return valid;
}
var outside_1;
var hasRequiredOutside;
function requireOutside() {
  if (hasRequiredOutside) return outside_1;
  hasRequiredOutside = 1;
  const SemVer = requireSemver$1();
  const Comparator = requireComparator();
  const { ANY } = Comparator;
  const Range = requireRange();
  const satisfies = requireSatisfies();
  const gt = requireGt();
  const lt = requireLt();
  const lte = requireLte();
  const gte = requireGte();
  const outside = (version, range2, hilo, options) => {
    version = new SemVer(version, options);
    range2 = new Range(range2, options);
    let gtfn, ltefn, ltfn, comp, ecomp;
    switch (hilo) {
      case ">":
        gtfn = gt;
        ltefn = lte;
        ltfn = lt;
        comp = ">";
        ecomp = ">=";
        break;
      case "<":
        gtfn = lt;
        ltefn = gte;
        ltfn = gt;
        comp = "<";
        ecomp = "<=";
        break;
      default:
        throw new TypeError('Must provide a hilo val of "<" or ">"');
    }
    if (satisfies(version, range2, options)) {
      return false;
    }
    for (let i2 = 0; i2 < range2.set.length; ++i2) {
      const comparators = range2.set[i2];
      let high = null;
      let low = null;
      comparators.forEach((comparator2) => {
        if (comparator2.semver === ANY) {
          comparator2 = new Comparator(">=0.0.0");
        }
        high = high || comparator2;
        low = low || comparator2;
        if (gtfn(comparator2.semver, high.semver, options)) {
          high = comparator2;
        } else if (ltfn(comparator2.semver, low.semver, options)) {
          low = comparator2;
        }
      });
      if (high.operator === comp || high.operator === ecomp) {
        return false;
      }
      if ((!low.operator || low.operator === comp) && ltefn(version, low.semver)) {
        return false;
      } else if (low.operator === ecomp && ltfn(version, low.semver)) {
        return false;
      }
    }
    return true;
  };
  outside_1 = outside;
  return outside_1;
}
var gtr_1;
var hasRequiredGtr;
function requireGtr() {
  if (hasRequiredGtr) return gtr_1;
  hasRequiredGtr = 1;
  const outside = requireOutside();
  const gtr = (version, range2, options) => outside(version, range2, ">", options);
  gtr_1 = gtr;
  return gtr_1;
}
var ltr_1;
var hasRequiredLtr;
function requireLtr() {
  if (hasRequiredLtr) return ltr_1;
  hasRequiredLtr = 1;
  const outside = requireOutside();
  const ltr = (version, range2, options) => outside(version, range2, "<", options);
  ltr_1 = ltr;
  return ltr_1;
}
var intersects_1;
var hasRequiredIntersects;
function requireIntersects() {
  if (hasRequiredIntersects) return intersects_1;
  hasRequiredIntersects = 1;
  const Range = requireRange();
  const intersects = (r1, r2, options) => {
    r1 = new Range(r1, options);
    r2 = new Range(r2, options);
    return r1.intersects(r2, options);
  };
  intersects_1 = intersects;
  return intersects_1;
}
var simplify;
var hasRequiredSimplify;
function requireSimplify() {
  if (hasRequiredSimplify) return simplify;
  hasRequiredSimplify = 1;
  const satisfies = requireSatisfies();
  const compare = requireCompare();
  simplify = (versions, range2, options) => {
    const set = [];
    let first = null;
    let prev = null;
    const v2 = versions.sort((a2, b2) => compare(a2, b2, options));
    for (const version of v2) {
      const included = satisfies(version, range2, options);
      if (included) {
        prev = version;
        if (!first) {
          first = version;
        }
      } else {
        if (prev) {
          set.push([first, prev]);
        }
        prev = null;
        first = null;
      }
    }
    if (first) {
      set.push([first, null]);
    }
    const ranges = [];
    for (const [min, max] of set) {
      if (min === max) {
        ranges.push(min);
      } else if (!max && min === v2[0]) {
        ranges.push("*");
      } else if (!max) {
        ranges.push(`>=${min}`);
      } else if (min === v2[0]) {
        ranges.push(`<=${max}`);
      } else {
        ranges.push(`${min} - ${max}`);
      }
    }
    const simplified = ranges.join(" || ");
    const original = typeof range2.raw === "string" ? range2.raw : String(range2);
    return simplified.length < original.length ? simplified : range2;
  };
  return simplify;
}
var subset_1;
var hasRequiredSubset;
function requireSubset() {
  if (hasRequiredSubset) return subset_1;
  hasRequiredSubset = 1;
  const Range = requireRange();
  const Comparator = requireComparator();
  const { ANY } = Comparator;
  const satisfies = requireSatisfies();
  const compare = requireCompare();
  const subset = (sub, dom, options = {}) => {
    if (sub === dom) {
      return true;
    }
    sub = new Range(sub, options);
    dom = new Range(dom, options);
    let sawNonNull = false;
    OUTER: for (const simpleSub of sub.set) {
      for (const simpleDom of dom.set) {
        const isSub = simpleSubset(simpleSub, simpleDom, options);
        sawNonNull = sawNonNull || isSub !== null;
        if (isSub) {
          continue OUTER;
        }
      }
      if (sawNonNull) {
        return false;
      }
    }
    return true;
  };
  const minimumVersionWithPreRelease = [new Comparator(">=0.0.0-0")];
  const minimumVersion = [new Comparator(">=0.0.0")];
  const simpleSubset = (sub, dom, options) => {
    if (sub === dom) {
      return true;
    }
    if (sub.length === 1 && sub[0].semver === ANY) {
      if (dom.length === 1 && dom[0].semver === ANY) {
        return true;
      } else if (options.includePrerelease) {
        sub = minimumVersionWithPreRelease;
      } else {
        sub = minimumVersion;
      }
    }
    if (dom.length === 1 && dom[0].semver === ANY) {
      if (options.includePrerelease) {
        return true;
      } else {
        dom = minimumVersion;
      }
    }
    const eqSet = /* @__PURE__ */ new Set();
    let gt, lt;
    for (const c2 of sub) {
      if (c2.operator === ">" || c2.operator === ">=") {
        gt = higherGT(gt, c2, options);
      } else if (c2.operator === "<" || c2.operator === "<=") {
        lt = lowerLT(lt, c2, options);
      } else {
        eqSet.add(c2.semver);
      }
    }
    if (eqSet.size > 1) {
      return null;
    }
    let gtltComp;
    if (gt && lt) {
      gtltComp = compare(gt.semver, lt.semver, options);
      if (gtltComp > 0) {
        return null;
      } else if (gtltComp === 0 && (gt.operator !== ">=" || lt.operator !== "<=")) {
        return null;
      }
    }
    for (const eq of eqSet) {
      if (gt && !satisfies(eq, String(gt), options)) {
        return null;
      }
      if (lt && !satisfies(eq, String(lt), options)) {
        return null;
      }
      for (const c2 of dom) {
        if (!satisfies(eq, String(c2), options)) {
          return false;
        }
      }
      return true;
    }
    let higher, lower;
    let hasDomLT, hasDomGT;
    let needDomLTPre = lt && !options.includePrerelease && lt.semver.prerelease.length ? lt.semver : false;
    let needDomGTPre = gt && !options.includePrerelease && gt.semver.prerelease.length ? gt.semver : false;
    if (needDomLTPre && needDomLTPre.prerelease.length === 1 && lt.operator === "<" && needDomLTPre.prerelease[0] === 0) {
      needDomLTPre = false;
    }
    for (const c2 of dom) {
      hasDomGT = hasDomGT || c2.operator === ">" || c2.operator === ">=";
      hasDomLT = hasDomLT || c2.operator === "<" || c2.operator === "<=";
      if (gt) {
        if (needDomGTPre) {
          if (c2.semver.prerelease && c2.semver.prerelease.length && c2.semver.major === needDomGTPre.major && c2.semver.minor === needDomGTPre.minor && c2.semver.patch === needDomGTPre.patch) {
            needDomGTPre = false;
          }
        }
        if (c2.operator === ">" || c2.operator === ">=") {
          higher = higherGT(gt, c2, options);
          if (higher === c2 && higher !== gt) {
            return false;
          }
        } else if (gt.operator === ">=" && !satisfies(gt.semver, String(c2), options)) {
          return false;
        }
      }
      if (lt) {
        if (needDomLTPre) {
          if (c2.semver.prerelease && c2.semver.prerelease.length && c2.semver.major === needDomLTPre.major && c2.semver.minor === needDomLTPre.minor && c2.semver.patch === needDomLTPre.patch) {
            needDomLTPre = false;
          }
        }
        if (c2.operator === "<" || c2.operator === "<=") {
          lower = lowerLT(lt, c2, options);
          if (lower === c2 && lower !== lt) {
            return false;
          }
        } else if (lt.operator === "<=" && !satisfies(lt.semver, String(c2), options)) {
          return false;
        }
      }
      if (!c2.operator && (lt || gt) && gtltComp !== 0) {
        return false;
      }
    }
    if (gt && hasDomLT && !lt && gtltComp !== 0) {
      return false;
    }
    if (lt && hasDomGT && !gt && gtltComp !== 0) {
      return false;
    }
    if (needDomGTPre || needDomLTPre) {
      return false;
    }
    return true;
  };
  const higherGT = (a2, b2, options) => {
    if (!a2) {
      return b2;
    }
    const comp = compare(a2.semver, b2.semver, options);
    return comp > 0 ? a2 : comp < 0 ? b2 : b2.operator === ">" && a2.operator === ">=" ? b2 : a2;
  };
  const lowerLT = (a2, b2, options) => {
    if (!a2) {
      return b2;
    }
    const comp = compare(a2.semver, b2.semver, options);
    return comp < 0 ? a2 : comp > 0 ? b2 : b2.operator === "<" && a2.operator === "<=" ? b2 : a2;
  };
  subset_1 = subset;
  return subset_1;
}
var semver;
var hasRequiredSemver;
function requireSemver() {
  if (hasRequiredSemver) return semver;
  hasRequiredSemver = 1;
  const internalRe = requireRe();
  const constants2 = requireConstants();
  const SemVer = requireSemver$1();
  const identifiers2 = requireIdentifiers();
  const parse = requireParse();
  const valid2 = requireValid$1();
  const clean = requireClean();
  const inc = requireInc();
  const diff = requireDiff();
  const major = requireMajor();
  const minor = requireMinor();
  const patch = requirePatch();
  const prerelease = requirePrerelease();
  const compare = requireCompare();
  const rcompare = requireRcompare();
  const compareLoose = requireCompareLoose();
  const compareBuild = requireCompareBuild();
  const sort = requireSort();
  const rsort = requireRsort();
  const gt = requireGt();
  const lt = requireLt();
  const eq = requireEq();
  const neq = requireNeq();
  const gte = requireGte();
  const lte = requireLte();
  const cmp = requireCmp();
  const coerce = requireCoerce();
  const Comparator = requireComparator();
  const Range = requireRange();
  const satisfies = requireSatisfies();
  const toComparators = requireToComparators();
  const maxSatisfying = requireMaxSatisfying();
  const minSatisfying = requireMinSatisfying();
  const minVersion = requireMinVersion();
  const validRange = requireValid();
  const outside = requireOutside();
  const gtr = requireGtr();
  const ltr = requireLtr();
  const intersects = requireIntersects();
  const simplifyRange = requireSimplify();
  const subset = requireSubset();
  semver = {
    parse,
    valid: valid2,
    clean,
    inc,
    diff,
    major,
    minor,
    patch,
    prerelease,
    compare,
    rcompare,
    compareLoose,
    compareBuild,
    sort,
    rsort,
    gt,
    lt,
    eq,
    neq,
    gte,
    lte,
    cmp,
    coerce,
    Comparator,
    Range,
    satisfies,
    toComparators,
    maxSatisfying,
    minSatisfying,
    minVersion,
    validRange,
    outside,
    gtr,
    ltr,
    intersects,
    simplifyRange,
    subset,
    SemVer,
    re: internalRe.re,
    src: internalRe.src,
    tokens: internalRe.t,
    SEMVER_SPEC_VERSION: constants2.SEMVER_SPEC_VERSION,
    RELEASE_TYPES: constants2.RELEASE_TYPES,
    compareIdentifiers: identifiers2.compareIdentifiers,
    rcompareIdentifiers: identifiers2.rcompareIdentifiers
  };
  return semver;
}
requireSemver();
var _Reflect$1 = {};
/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
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
var hasRequired_Reflect$1;
function require_Reflect$1() {
  if (hasRequired_Reflect$1) return _Reflect$1;
  hasRequired_Reflect$1 = 1;
  var Reflect2;
  (function(Reflect3) {
    (function(factory) {
      var root = typeof globalThis === "object" ? globalThis : typeof commonjsGlobal === "object" ? commonjsGlobal : typeof self === "object" ? self : typeof this === "object" ? this : sloppyModeThis();
      var exporter = makeExporter(Reflect3);
      if (typeof root.Reflect !== "undefined") {
        exporter = makeExporter(root.Reflect, exporter);
      }
      factory(exporter, root);
      if (typeof root.Reflect === "undefined") {
        root.Reflect = Reflect3;
      }
      function makeExporter(target, previous) {
        return function(key, value) {
          Object.defineProperty(target, key, { configurable: true, writable: true, value });
          if (previous)
            previous(key, value);
        };
      }
      function functionThis() {
        try {
          return Function("return this;")();
        } catch (_2) {
        }
      }
      function indirectEvalThis() {
        try {
          return (void 0, eval)("(function() { return this; })()");
        } catch (_2) {
        }
      }
      function sloppyModeThis() {
        return functionThis() || indirectEvalThis();
      }
    })(function(exporter, root) {
      var hasOwn = Object.prototype.hasOwnProperty;
      var supportsSymbol = typeof Symbol === "function";
      var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive";
      var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator";
      var supportsCreate = typeof Object.create === "function";
      var supportsProto = { __proto__: [] } instanceof Array;
      var downLevel = !supportsCreate && !supportsProto;
      var HashMap = {
        // create an object in dictionary mode (a.k.a. "slow" mode in v8)
        create: supportsCreate ? function() {
          return MakeDictionary(/* @__PURE__ */ Object.create(null));
        } : supportsProto ? function() {
          return MakeDictionary({ __proto__: null });
        } : function() {
          return MakeDictionary({});
        },
        has: downLevel ? function(map, key) {
          return hasOwn.call(map, key);
        } : function(map, key) {
          return key in map;
        },
        get: downLevel ? function(map, key) {
          return hasOwn.call(map, key) ? map[key] : void 0;
        } : function(map, key) {
          return map[key];
        }
      };
      var functionPrototype = Object.getPrototypeOf(Function);
      var _Map = typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : CreateMapPolyfill();
      var _Set = typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : CreateSetPolyfill();
      var _WeakMap = typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
      var registrySymbol = supportsSymbol ? Symbol.for("@reflect-metadata:registry") : void 0;
      var metadataRegistry = GetOrCreateMetadataRegistry();
      var metadataProvider = CreateMetadataProvider(metadataRegistry);
      function decorate(decorators, target, propertyKey, attributes) {
        if (!IsUndefined(propertyKey)) {
          if (!IsArray(decorators))
            throw new TypeError();
          if (!IsObject(target))
            throw new TypeError();
          if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes))
            throw new TypeError();
          if (IsNull(attributes))
            attributes = void 0;
          propertyKey = ToPropertyKey(propertyKey);
          return DecorateProperty(decorators, target, propertyKey, attributes);
        } else {
          if (!IsArray(decorators))
            throw new TypeError();
          if (!IsConstructor(target))
            throw new TypeError();
          return DecorateConstructor(decorators, target);
        }
      }
      exporter("decorate", decorate);
      function metadata(metadataKey, metadataValue) {
        function decorator(target, propertyKey) {
          if (!IsObject(target))
            throw new TypeError();
          if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey))
            throw new TypeError();
          OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
        }
        return decorator;
      }
      exporter("metadata", metadata);
      function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
        if (!IsObject(target))
          throw new TypeError();
        if (!IsUndefined(propertyKey))
          propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
      }
      exporter("defineMetadata", defineMetadata);
      function hasMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target))
          throw new TypeError();
        if (!IsUndefined(propertyKey))
          propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryHasMetadata(metadataKey, target, propertyKey);
      }
      exporter("hasMetadata", hasMetadata);
      function hasOwnMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target))
          throw new TypeError();
        if (!IsUndefined(propertyKey))
          propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
      }
      exporter("hasOwnMetadata", hasOwnMetadata);
      function getMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target))
          throw new TypeError();
        if (!IsUndefined(propertyKey))
          propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryGetMetadata(metadataKey, target, propertyKey);
      }
      exporter("getMetadata", getMetadata);
      function getOwnMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target))
          throw new TypeError();
        if (!IsUndefined(propertyKey))
          propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
      }
      exporter("getOwnMetadata", getOwnMetadata);
      function getMetadataKeys(target, propertyKey) {
        if (!IsObject(target))
          throw new TypeError();
        if (!IsUndefined(propertyKey))
          propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryMetadataKeys(target, propertyKey);
      }
      exporter("getMetadataKeys", getMetadataKeys);
      function getOwnMetadataKeys(target, propertyKey) {
        if (!IsObject(target))
          throw new TypeError();
        if (!IsUndefined(propertyKey))
          propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryOwnMetadataKeys(target, propertyKey);
      }
      exporter("getOwnMetadataKeys", getOwnMetadataKeys);
      function deleteMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target))
          throw new TypeError();
        if (!IsUndefined(propertyKey))
          propertyKey = ToPropertyKey(propertyKey);
        if (!IsObject(target))
          throw new TypeError();
        if (!IsUndefined(propertyKey))
          propertyKey = ToPropertyKey(propertyKey);
        var provider = GetMetadataProvider(
          target,
          propertyKey,
          /*Create*/
          false
        );
        if (IsUndefined(provider))
          return false;
        return provider.OrdinaryDeleteMetadata(metadataKey, target, propertyKey);
      }
      exporter("deleteMetadata", deleteMetadata);
      function DecorateConstructor(decorators, target) {
        for (var i2 = decorators.length - 1; i2 >= 0; --i2) {
          var decorator = decorators[i2];
          var decorated = decorator(target);
          if (!IsUndefined(decorated) && !IsNull(decorated)) {
            if (!IsConstructor(decorated))
              throw new TypeError();
            target = decorated;
          }
        }
        return target;
      }
      function DecorateProperty(decorators, target, propertyKey, descriptor) {
        for (var i2 = decorators.length - 1; i2 >= 0; --i2) {
          var decorator = decorators[i2];
          var decorated = decorator(target, propertyKey, descriptor);
          if (!IsUndefined(decorated) && !IsNull(decorated)) {
            if (!IsObject(decorated))
              throw new TypeError();
            descriptor = decorated;
          }
        }
        return descriptor;
      }
      function OrdinaryHasMetadata(MetadataKey, O2, P2) {
        var hasOwn2 = OrdinaryHasOwnMetadata(MetadataKey, O2, P2);
        if (hasOwn2)
          return true;
        var parent = OrdinaryGetPrototypeOf(O2);
        if (!IsNull(parent))
          return OrdinaryHasMetadata(MetadataKey, parent, P2);
        return false;
      }
      function OrdinaryHasOwnMetadata(MetadataKey, O2, P2) {
        var provider = GetMetadataProvider(
          O2,
          P2,
          /*Create*/
          false
        );
        if (IsUndefined(provider))
          return false;
        return ToBoolean(provider.OrdinaryHasOwnMetadata(MetadataKey, O2, P2));
      }
      function OrdinaryGetMetadata(MetadataKey, O2, P2) {
        var hasOwn2 = OrdinaryHasOwnMetadata(MetadataKey, O2, P2);
        if (hasOwn2)
          return OrdinaryGetOwnMetadata(MetadataKey, O2, P2);
        var parent = OrdinaryGetPrototypeOf(O2);
        if (!IsNull(parent))
          return OrdinaryGetMetadata(MetadataKey, parent, P2);
        return void 0;
      }
      function OrdinaryGetOwnMetadata(MetadataKey, O2, P2) {
        var provider = GetMetadataProvider(
          O2,
          P2,
          /*Create*/
          false
        );
        if (IsUndefined(provider))
          return;
        return provider.OrdinaryGetOwnMetadata(MetadataKey, O2, P2);
      }
      function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O2, P2) {
        var provider = GetMetadataProvider(
          O2,
          P2,
          /*Create*/
          true
        );
        provider.OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O2, P2);
      }
      function OrdinaryMetadataKeys(O2, P2) {
        var ownKeys = OrdinaryOwnMetadataKeys(O2, P2);
        var parent = OrdinaryGetPrototypeOf(O2);
        if (parent === null)
          return ownKeys;
        var parentKeys = OrdinaryMetadataKeys(parent, P2);
        if (parentKeys.length <= 0)
          return ownKeys;
        if (ownKeys.length <= 0)
          return parentKeys;
        var set = new _Set();
        var keys = [];
        for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
          var key = ownKeys_1[_i];
          var hasKey = set.has(key);
          if (!hasKey) {
            set.add(key);
            keys.push(key);
          }
        }
        for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
          var key = parentKeys_1[_a];
          var hasKey = set.has(key);
          if (!hasKey) {
            set.add(key);
            keys.push(key);
          }
        }
        return keys;
      }
      function OrdinaryOwnMetadataKeys(O2, P2) {
        var provider = GetMetadataProvider(
          O2,
          P2,
          /*create*/
          false
        );
        if (!provider) {
          return [];
        }
        return provider.OrdinaryOwnMetadataKeys(O2, P2);
      }
      function Type(x2) {
        if (x2 === null)
          return 1;
        switch (typeof x2) {
          case "undefined":
            return 0;
          case "boolean":
            return 2;
          case "string":
            return 3;
          case "symbol":
            return 4;
          case "number":
            return 5;
          case "object":
            return x2 === null ? 1 : 6;
          default:
            return 6;
        }
      }
      function IsUndefined(x2) {
        return x2 === void 0;
      }
      function IsNull(x2) {
        return x2 === null;
      }
      function IsSymbol(x2) {
        return typeof x2 === "symbol";
      }
      function IsObject(x2) {
        return typeof x2 === "object" ? x2 !== null : typeof x2 === "function";
      }
      function ToPrimitive(input, PreferredType) {
        switch (Type(input)) {
          case 0:
            return input;
          case 1:
            return input;
          case 2:
            return input;
          case 3:
            return input;
          case 4:
            return input;
          case 5:
            return input;
        }
        var hint = "string";
        var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
        if (exoticToPrim !== void 0) {
          var result = exoticToPrim.call(input, hint);
          if (IsObject(result))
            throw new TypeError();
          return result;
        }
        return OrdinaryToPrimitive(input);
      }
      function OrdinaryToPrimitive(O2, hint) {
        var valueOf, result, toString_2;
        {
          var toString_1 = O2.toString;
          if (IsCallable(toString_1)) {
            var result = toString_1.call(O2);
            if (!IsObject(result))
              return result;
          }
          var valueOf = O2.valueOf;
          if (IsCallable(valueOf)) {
            var result = valueOf.call(O2);
            if (!IsObject(result))
              return result;
          }
        }
        throw new TypeError();
      }
      function ToBoolean(argument) {
        return !!argument;
      }
      function ToString(argument) {
        return "" + argument;
      }
      function ToPropertyKey(argument) {
        var key = ToPrimitive(argument);
        if (IsSymbol(key))
          return key;
        return ToString(key);
      }
      function IsArray(argument) {
        return Array.isArray ? Array.isArray(argument) : argument instanceof Object ? argument instanceof Array : Object.prototype.toString.call(argument) === "[object Array]";
      }
      function IsCallable(argument) {
        return typeof argument === "function";
      }
      function IsConstructor(argument) {
        return typeof argument === "function";
      }
      function IsPropertyKey(argument) {
        switch (Type(argument)) {
          case 3:
            return true;
          case 4:
            return true;
          default:
            return false;
        }
      }
      function SameValueZero(x2, y2) {
        return x2 === y2 || x2 !== x2 && y2 !== y2;
      }
      function GetMethod(V2, P2) {
        var func = V2[P2];
        if (func === void 0 || func === null)
          return void 0;
        if (!IsCallable(func))
          throw new TypeError();
        return func;
      }
      function GetIterator(obj) {
        var method = GetMethod(obj, iteratorSymbol);
        if (!IsCallable(method))
          throw new TypeError();
        var iterator = method.call(obj);
        if (!IsObject(iterator))
          throw new TypeError();
        return iterator;
      }
      function IteratorValue(iterResult) {
        return iterResult.value;
      }
      function IteratorStep(iterator) {
        var result = iterator.next();
        return result.done ? false : result;
      }
      function IteratorClose(iterator) {
        var f2 = iterator["return"];
        if (f2)
          f2.call(iterator);
      }
      function OrdinaryGetPrototypeOf(O2) {
        var proto = Object.getPrototypeOf(O2);
        if (typeof O2 !== "function" || O2 === functionPrototype)
          return proto;
        if (proto !== functionPrototype)
          return proto;
        var prototype = O2.prototype;
        var prototypeProto = prototype && Object.getPrototypeOf(prototype);
        if (prototypeProto == null || prototypeProto === Object.prototype)
          return proto;
        var constructor = prototypeProto.constructor;
        if (typeof constructor !== "function")
          return proto;
        if (constructor === O2)
          return proto;
        return constructor;
      }
      function CreateMetadataRegistry() {
        var fallback;
        if (!IsUndefined(registrySymbol) && typeof root.Reflect !== "undefined" && !(registrySymbol in root.Reflect) && typeof root.Reflect.defineMetadata === "function") {
          fallback = CreateFallbackProvider(root.Reflect);
        }
        var first;
        var second;
        var rest;
        var targetProviderMap = new _WeakMap();
        var registry = {
          registerProvider,
          getProvider,
          setProvider
        };
        return registry;
        function registerProvider(provider) {
          if (!Object.isExtensible(registry)) {
            throw new Error("Cannot add provider to a frozen registry.");
          }
          switch (true) {
            case fallback === provider:
              break;
            case IsUndefined(first):
              first = provider;
              break;
            case first === provider:
              break;
            case IsUndefined(second):
              second = provider;
              break;
            case second === provider:
              break;
            default:
              if (rest === void 0)
                rest = new _Set();
              rest.add(provider);
              break;
          }
        }
        function getProviderNoCache(O2, P2) {
          if (!IsUndefined(first)) {
            if (first.isProviderFor(O2, P2))
              return first;
            if (!IsUndefined(second)) {
              if (second.isProviderFor(O2, P2))
                return first;
              if (!IsUndefined(rest)) {
                var iterator = GetIterator(rest);
                while (true) {
                  var next = IteratorStep(iterator);
                  if (!next) {
                    return void 0;
                  }
                  var provider = IteratorValue(next);
                  if (provider.isProviderFor(O2, P2)) {
                    IteratorClose(iterator);
                    return provider;
                  }
                }
              }
            }
          }
          if (!IsUndefined(fallback) && fallback.isProviderFor(O2, P2)) {
            return fallback;
          }
          return void 0;
        }
        function getProvider(O2, P2) {
          var providerMap = targetProviderMap.get(O2);
          var provider;
          if (!IsUndefined(providerMap)) {
            provider = providerMap.get(P2);
          }
          if (!IsUndefined(provider)) {
            return provider;
          }
          provider = getProviderNoCache(O2, P2);
          if (!IsUndefined(provider)) {
            if (IsUndefined(providerMap)) {
              providerMap = new _Map();
              targetProviderMap.set(O2, providerMap);
            }
            providerMap.set(P2, provider);
          }
          return provider;
        }
        function hasProvider(provider) {
          if (IsUndefined(provider))
            throw new TypeError();
          return first === provider || second === provider || !IsUndefined(rest) && rest.has(provider);
        }
        function setProvider(O2, P2, provider) {
          if (!hasProvider(provider)) {
            throw new Error("Metadata provider not registered.");
          }
          var existingProvider = getProvider(O2, P2);
          if (existingProvider !== provider) {
            if (!IsUndefined(existingProvider)) {
              return false;
            }
            var providerMap = targetProviderMap.get(O2);
            if (IsUndefined(providerMap)) {
              providerMap = new _Map();
              targetProviderMap.set(O2, providerMap);
            }
            providerMap.set(P2, provider);
          }
          return true;
        }
      }
      function GetOrCreateMetadataRegistry() {
        var metadataRegistry2;
        if (!IsUndefined(registrySymbol) && IsObject(root.Reflect) && Object.isExtensible(root.Reflect)) {
          metadataRegistry2 = root.Reflect[registrySymbol];
        }
        if (IsUndefined(metadataRegistry2)) {
          metadataRegistry2 = CreateMetadataRegistry();
        }
        if (!IsUndefined(registrySymbol) && IsObject(root.Reflect) && Object.isExtensible(root.Reflect)) {
          Object.defineProperty(root.Reflect, registrySymbol, {
            enumerable: false,
            configurable: false,
            writable: false,
            value: metadataRegistry2
          });
        }
        return metadataRegistry2;
      }
      function CreateMetadataProvider(registry) {
        var metadata2 = new _WeakMap();
        var provider = {
          isProviderFor: function(O2, P2) {
            var targetMetadata = metadata2.get(O2);
            if (IsUndefined(targetMetadata))
              return false;
            return targetMetadata.has(P2);
          },
          OrdinaryDefineOwnMetadata: OrdinaryDefineOwnMetadata2,
          OrdinaryHasOwnMetadata: OrdinaryHasOwnMetadata2,
          OrdinaryGetOwnMetadata: OrdinaryGetOwnMetadata2,
          OrdinaryOwnMetadataKeys: OrdinaryOwnMetadataKeys2,
          OrdinaryDeleteMetadata
        };
        metadataRegistry.registerProvider(provider);
        return provider;
        function GetOrCreateMetadataMap(O2, P2, Create) {
          var targetMetadata = metadata2.get(O2);
          var createdTargetMetadata = false;
          if (IsUndefined(targetMetadata)) {
            if (!Create)
              return void 0;
            targetMetadata = new _Map();
            metadata2.set(O2, targetMetadata);
            createdTargetMetadata = true;
          }
          var metadataMap = targetMetadata.get(P2);
          if (IsUndefined(metadataMap)) {
            if (!Create)
              return void 0;
            metadataMap = new _Map();
            targetMetadata.set(P2, metadataMap);
            if (!registry.setProvider(O2, P2, provider)) {
              targetMetadata.delete(P2);
              if (createdTargetMetadata) {
                metadata2.delete(O2);
              }
              throw new Error("Wrong provider for target.");
            }
          }
          return metadataMap;
        }
        function OrdinaryHasOwnMetadata2(MetadataKey, O2, P2) {
          var metadataMap = GetOrCreateMetadataMap(
            O2,
            P2,
            /*Create*/
            false
          );
          if (IsUndefined(metadataMap))
            return false;
          return ToBoolean(metadataMap.has(MetadataKey));
        }
        function OrdinaryGetOwnMetadata2(MetadataKey, O2, P2) {
          var metadataMap = GetOrCreateMetadataMap(
            O2,
            P2,
            /*Create*/
            false
          );
          if (IsUndefined(metadataMap))
            return void 0;
          return metadataMap.get(MetadataKey);
        }
        function OrdinaryDefineOwnMetadata2(MetadataKey, MetadataValue, O2, P2) {
          var metadataMap = GetOrCreateMetadataMap(
            O2,
            P2,
            /*Create*/
            true
          );
          metadataMap.set(MetadataKey, MetadataValue);
        }
        function OrdinaryOwnMetadataKeys2(O2, P2) {
          var keys = [];
          var metadataMap = GetOrCreateMetadataMap(
            O2,
            P2,
            /*Create*/
            false
          );
          if (IsUndefined(metadataMap))
            return keys;
          var keysObj = metadataMap.keys();
          var iterator = GetIterator(keysObj);
          var k2 = 0;
          while (true) {
            var next = IteratorStep(iterator);
            if (!next) {
              keys.length = k2;
              return keys;
            }
            var nextValue = IteratorValue(next);
            try {
              keys[k2] = nextValue;
            } catch (e2) {
              try {
                IteratorClose(iterator);
              } finally {
                throw e2;
              }
            }
            k2++;
          }
        }
        function OrdinaryDeleteMetadata(MetadataKey, O2, P2) {
          var metadataMap = GetOrCreateMetadataMap(
            O2,
            P2,
            /*Create*/
            false
          );
          if (IsUndefined(metadataMap))
            return false;
          if (!metadataMap.delete(MetadataKey))
            return false;
          if (metadataMap.size === 0) {
            var targetMetadata = metadata2.get(O2);
            if (!IsUndefined(targetMetadata)) {
              targetMetadata.delete(P2);
              if (targetMetadata.size === 0) {
                metadata2.delete(targetMetadata);
              }
            }
          }
          return true;
        }
      }
      function CreateFallbackProvider(reflect) {
        var defineMetadata2 = reflect.defineMetadata, hasOwnMetadata2 = reflect.hasOwnMetadata, getOwnMetadata2 = reflect.getOwnMetadata, getOwnMetadataKeys2 = reflect.getOwnMetadataKeys, deleteMetadata2 = reflect.deleteMetadata;
        var metadataOwner = new _WeakMap();
        var provider = {
          isProviderFor: function(O2, P2) {
            var metadataPropertySet = metadataOwner.get(O2);
            if (!IsUndefined(metadataPropertySet) && metadataPropertySet.has(P2)) {
              return true;
            }
            if (getOwnMetadataKeys2(O2, P2).length) {
              if (IsUndefined(metadataPropertySet)) {
                metadataPropertySet = new _Set();
                metadataOwner.set(O2, metadataPropertySet);
              }
              metadataPropertySet.add(P2);
              return true;
            }
            return false;
          },
          OrdinaryDefineOwnMetadata: defineMetadata2,
          OrdinaryHasOwnMetadata: hasOwnMetadata2,
          OrdinaryGetOwnMetadata: getOwnMetadata2,
          OrdinaryOwnMetadataKeys: getOwnMetadataKeys2,
          OrdinaryDeleteMetadata: deleteMetadata2
        };
        return provider;
      }
      function GetMetadataProvider(O2, P2, Create) {
        var registeredProvider = metadataRegistry.getProvider(O2, P2);
        if (!IsUndefined(registeredProvider)) {
          return registeredProvider;
        }
        if (Create) {
          if (metadataRegistry.setProvider(O2, P2, metadataProvider)) {
            return metadataProvider;
          }
          throw new Error("Illegal state.");
        }
        return void 0;
      }
      function CreateMapPolyfill() {
        var cacheSentinel = {};
        var arraySentinel = [];
        var MapIterator = (
          /** @class */
          (function() {
            function MapIterator2(keys, values, selector) {
              this._index = 0;
              this._keys = keys;
              this._values = values;
              this._selector = selector;
            }
            MapIterator2.prototype["@@iterator"] = function() {
              return this;
            };
            MapIterator2.prototype[iteratorSymbol] = function() {
              return this;
            };
            MapIterator2.prototype.next = function() {
              var index = this._index;
              if (index >= 0 && index < this._keys.length) {
                var result = this._selector(this._keys[index], this._values[index]);
                if (index + 1 >= this._keys.length) {
                  this._index = -1;
                  this._keys = arraySentinel;
                  this._values = arraySentinel;
                } else {
                  this._index++;
                }
                return { value: result, done: false };
              }
              return { value: void 0, done: true };
            };
            MapIterator2.prototype.throw = function(error) {
              if (this._index >= 0) {
                this._index = -1;
                this._keys = arraySentinel;
                this._values = arraySentinel;
              }
              throw error;
            };
            MapIterator2.prototype.return = function(value) {
              if (this._index >= 0) {
                this._index = -1;
                this._keys = arraySentinel;
                this._values = arraySentinel;
              }
              return { value, done: true };
            };
            return MapIterator2;
          })()
        );
        var Map2 = (
          /** @class */
          (function() {
            function Map3() {
              this._keys = [];
              this._values = [];
              this._cacheKey = cacheSentinel;
              this._cacheIndex = -2;
            }
            Object.defineProperty(Map3.prototype, "size", {
              get: function() {
                return this._keys.length;
              },
              enumerable: true,
              configurable: true
            });
            Map3.prototype.has = function(key) {
              return this._find(
                key,
                /*insert*/
                false
              ) >= 0;
            };
            Map3.prototype.get = function(key) {
              var index = this._find(
                key,
                /*insert*/
                false
              );
              return index >= 0 ? this._values[index] : void 0;
            };
            Map3.prototype.set = function(key, value) {
              var index = this._find(
                key,
                /*insert*/
                true
              );
              this._values[index] = value;
              return this;
            };
            Map3.prototype.delete = function(key) {
              var index = this._find(
                key,
                /*insert*/
                false
              );
              if (index >= 0) {
                var size = this._keys.length;
                for (var i2 = index + 1; i2 < size; i2++) {
                  this._keys[i2 - 1] = this._keys[i2];
                  this._values[i2 - 1] = this._values[i2];
                }
                this._keys.length--;
                this._values.length--;
                if (SameValueZero(key, this._cacheKey)) {
                  this._cacheKey = cacheSentinel;
                  this._cacheIndex = -2;
                }
                return true;
              }
              return false;
            };
            Map3.prototype.clear = function() {
              this._keys.length = 0;
              this._values.length = 0;
              this._cacheKey = cacheSentinel;
              this._cacheIndex = -2;
            };
            Map3.prototype.keys = function() {
              return new MapIterator(this._keys, this._values, getKey);
            };
            Map3.prototype.values = function() {
              return new MapIterator(this._keys, this._values, getValue);
            };
            Map3.prototype.entries = function() {
              return new MapIterator(this._keys, this._values, getEntry);
            };
            Map3.prototype["@@iterator"] = function() {
              return this.entries();
            };
            Map3.prototype[iteratorSymbol] = function() {
              return this.entries();
            };
            Map3.prototype._find = function(key, insert) {
              if (!SameValueZero(this._cacheKey, key)) {
                this._cacheIndex = -1;
                for (var i2 = 0; i2 < this._keys.length; i2++) {
                  if (SameValueZero(this._keys[i2], key)) {
                    this._cacheIndex = i2;
                    break;
                  }
                }
              }
              if (this._cacheIndex < 0 && insert) {
                this._cacheIndex = this._keys.length;
                this._keys.push(key);
                this._values.push(void 0);
              }
              return this._cacheIndex;
            };
            return Map3;
          })()
        );
        return Map2;
        function getKey(key, _2) {
          return key;
        }
        function getValue(_2, value) {
          return value;
        }
        function getEntry(key, value) {
          return [key, value];
        }
      }
      function CreateSetPolyfill() {
        var Set2 = (
          /** @class */
          (function() {
            function Set3() {
              this._map = new _Map();
            }
            Object.defineProperty(Set3.prototype, "size", {
              get: function() {
                return this._map.size;
              },
              enumerable: true,
              configurable: true
            });
            Set3.prototype.has = function(value) {
              return this._map.has(value);
            };
            Set3.prototype.add = function(value) {
              return this._map.set(value, value), this;
            };
            Set3.prototype.delete = function(value) {
              return this._map.delete(value);
            };
            Set3.prototype.clear = function() {
              this._map.clear();
            };
            Set3.prototype.keys = function() {
              return this._map.keys();
            };
            Set3.prototype.values = function() {
              return this._map.keys();
            };
            Set3.prototype.entries = function() {
              return this._map.entries();
            };
            Set3.prototype["@@iterator"] = function() {
              return this.keys();
            };
            Set3.prototype[iteratorSymbol] = function() {
              return this.keys();
            };
            return Set3;
          })()
        );
        return Set2;
      }
      function CreateWeakMapPolyfill() {
        var UUID_SIZE = 16;
        var keys = HashMap.create();
        var rootKey = CreateUniqueKey();
        return (
          /** @class */
          (function() {
            function WeakMap2() {
              this._key = CreateUniqueKey();
            }
            WeakMap2.prototype.has = function(target) {
              var table = GetOrCreateWeakMapTable(
                target,
                /*create*/
                false
              );
              return table !== void 0 ? HashMap.has(table, this._key) : false;
            };
            WeakMap2.prototype.get = function(target) {
              var table = GetOrCreateWeakMapTable(
                target,
                /*create*/
                false
              );
              return table !== void 0 ? HashMap.get(table, this._key) : void 0;
            };
            WeakMap2.prototype.set = function(target, value) {
              var table = GetOrCreateWeakMapTable(
                target,
                /*create*/
                true
              );
              table[this._key] = value;
              return this;
            };
            WeakMap2.prototype.delete = function(target) {
              var table = GetOrCreateWeakMapTable(
                target,
                /*create*/
                false
              );
              return table !== void 0 ? delete table[this._key] : false;
            };
            WeakMap2.prototype.clear = function() {
              this._key = CreateUniqueKey();
            };
            return WeakMap2;
          })()
        );
        function CreateUniqueKey() {
          var key;
          do
            key = "@@WeakMap@@" + CreateUUID();
          while (HashMap.has(keys, key));
          keys[key] = true;
          return key;
        }
        function GetOrCreateWeakMapTable(target, create) {
          if (!hasOwn.call(target, rootKey)) {
            if (!create)
              return void 0;
            Object.defineProperty(target, rootKey, { value: HashMap.create() });
          }
          return target[rootKey];
        }
        function FillRandomBytes(buffer2, size) {
          for (var i2 = 0; i2 < size; ++i2)
            buffer2[i2] = Math.random() * 255 | 0;
          return buffer2;
        }
        function GenRandomBytes(size) {
          if (typeof Uint8Array === "function") {
            var array = new Uint8Array(size);
            if (typeof crypto !== "undefined") {
              crypto.getRandomValues(array);
            } else if (typeof msCrypto !== "undefined") {
              msCrypto.getRandomValues(array);
            } else {
              FillRandomBytes(array, size);
            }
            return array;
          }
          return FillRandomBytes(new Array(size), size);
        }
        function CreateUUID() {
          var data = GenRandomBytes(UUID_SIZE);
          data[6] = data[6] & 79 | 64;
          data[8] = data[8] & 191 | 128;
          var result = "";
          for (var offset = 0; offset < UUID_SIZE; ++offset) {
            var byte = data[offset];
            if (offset === 4 || offset === 6 || offset === 8)
              result += "-";
            if (byte < 16)
              result += "0";
            result += byte.toString(16).toLowerCase();
          }
          return result;
        }
      }
      function MakeDictionary(obj) {
        obj.__ = void 0;
        delete obj.__;
        return obj;
      }
    });
  })(Reflect2 || (Reflect2 = {}));
  return _Reflect$1;
}
require_Reflect$1();
const INJECTABLE_KEY = Symbol.for("tsm:injectable");
const INJECT_KEY = Symbol.for("tsm:inject");
const INJECT_PROPERTY_KEY = Symbol.for("tsm:inject:property");
function injectable() {
  return (target) => {
    Reflect.defineMetadata(INJECTABLE_KEY, true, target);
  };
}
function inject(serviceId, options) {
  return (target, propertyKey, parameterIndex) => {
    if (parameterIndex !== void 0) {
      const existing = Reflect.getOwnMetadata(INJECT_KEY, target) ?? [];
      existing.push({
        index: parameterIndex,
        serviceId,
        optional: false
      });
      Reflect.defineMetadata(INJECT_KEY, existing, target);
    } else {
      const ctor = target.constructor;
      const existing = Reflect.getOwnMetadata(INJECT_PROPERTY_KEY, ctor) ?? [];
      existing.push({
        propertyKey,
        serviceId,
        optional: false
      });
      Reflect.defineMetadata(INJECT_PROPERTY_KEY, existing, ctor);
    }
  };
}
var _Reflect = {};
/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
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
var hasRequired_Reflect;
function require_Reflect() {
  if (hasRequired_Reflect) return _Reflect;
  hasRequired_Reflect = 1;
  var Reflect2;
  (function(Reflect3) {
    (function(factory) {
      var root = typeof globalThis === "object" ? globalThis : typeof commonjsGlobal === "object" ? commonjsGlobal : typeof self === "object" ? self : typeof this === "object" ? this : sloppyModeThis();
      var exporter = makeExporter(Reflect3);
      if (typeof root.Reflect !== "undefined") {
        exporter = makeExporter(root.Reflect, exporter);
      }
      factory(exporter, root);
      if (typeof root.Reflect === "undefined") {
        root.Reflect = Reflect3;
      }
      function makeExporter(target, previous) {
        return function(key, value) {
          Object.defineProperty(target, key, { configurable: true, writable: true, value });
          if (previous)
            previous(key, value);
        };
      }
      function functionThis() {
        try {
          return Function("return this;")();
        } catch (_2) {
        }
      }
      function indirectEvalThis() {
        try {
          return (void 0, eval)("(function() { return this; })()");
        } catch (_2) {
        }
      }
      function sloppyModeThis() {
        return functionThis() || indirectEvalThis();
      }
    })(function(exporter, root) {
      var hasOwn = Object.prototype.hasOwnProperty;
      var supportsSymbol = typeof Symbol === "function";
      var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive";
      var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator";
      var supportsCreate = typeof Object.create === "function";
      var supportsProto = { __proto__: [] } instanceof Array;
      var downLevel = !supportsCreate && !supportsProto;
      var HashMap = {
        // create an object in dictionary mode (a.k.a. "slow" mode in v8)
        create: supportsCreate ? function() {
          return MakeDictionary(/* @__PURE__ */ Object.create(null));
        } : supportsProto ? function() {
          return MakeDictionary({ __proto__: null });
        } : function() {
          return MakeDictionary({});
        },
        has: downLevel ? function(map, key) {
          return hasOwn.call(map, key);
        } : function(map, key) {
          return key in map;
        },
        get: downLevel ? function(map, key) {
          return hasOwn.call(map, key) ? map[key] : void 0;
        } : function(map, key) {
          return map[key];
        }
      };
      var functionPrototype = Object.getPrototypeOf(Function);
      var _Map = typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : CreateMapPolyfill();
      var _Set = typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : CreateSetPolyfill();
      var _WeakMap = typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
      var registrySymbol = supportsSymbol ? Symbol.for("@reflect-metadata:registry") : void 0;
      var metadataRegistry = GetOrCreateMetadataRegistry();
      var metadataProvider = CreateMetadataProvider(metadataRegistry);
      function decorate(decorators, target, propertyKey, attributes) {
        if (!IsUndefined(propertyKey)) {
          if (!IsArray(decorators))
            throw new TypeError();
          if (!IsObject(target))
            throw new TypeError();
          if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes))
            throw new TypeError();
          if (IsNull(attributes))
            attributes = void 0;
          propertyKey = ToPropertyKey(propertyKey);
          return DecorateProperty(decorators, target, propertyKey, attributes);
        } else {
          if (!IsArray(decorators))
            throw new TypeError();
          if (!IsConstructor(target))
            throw new TypeError();
          return DecorateConstructor(decorators, target);
        }
      }
      exporter("decorate", decorate);
      function metadata(metadataKey, metadataValue) {
        function decorator(target, propertyKey) {
          if (!IsObject(target))
            throw new TypeError();
          if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey))
            throw new TypeError();
          OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
        }
        return decorator;
      }
      exporter("metadata", metadata);
      function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
        if (!IsObject(target))
          throw new TypeError();
        if (!IsUndefined(propertyKey))
          propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
      }
      exporter("defineMetadata", defineMetadata);
      function hasMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target))
          throw new TypeError();
        if (!IsUndefined(propertyKey))
          propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryHasMetadata(metadataKey, target, propertyKey);
      }
      exporter("hasMetadata", hasMetadata);
      function hasOwnMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target))
          throw new TypeError();
        if (!IsUndefined(propertyKey))
          propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
      }
      exporter("hasOwnMetadata", hasOwnMetadata);
      function getMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target))
          throw new TypeError();
        if (!IsUndefined(propertyKey))
          propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryGetMetadata(metadataKey, target, propertyKey);
      }
      exporter("getMetadata", getMetadata);
      function getOwnMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target))
          throw new TypeError();
        if (!IsUndefined(propertyKey))
          propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
      }
      exporter("getOwnMetadata", getOwnMetadata);
      function getMetadataKeys(target, propertyKey) {
        if (!IsObject(target))
          throw new TypeError();
        if (!IsUndefined(propertyKey))
          propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryMetadataKeys(target, propertyKey);
      }
      exporter("getMetadataKeys", getMetadataKeys);
      function getOwnMetadataKeys(target, propertyKey) {
        if (!IsObject(target))
          throw new TypeError();
        if (!IsUndefined(propertyKey))
          propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryOwnMetadataKeys(target, propertyKey);
      }
      exporter("getOwnMetadataKeys", getOwnMetadataKeys);
      function deleteMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target))
          throw new TypeError();
        if (!IsUndefined(propertyKey))
          propertyKey = ToPropertyKey(propertyKey);
        if (!IsObject(target))
          throw new TypeError();
        if (!IsUndefined(propertyKey))
          propertyKey = ToPropertyKey(propertyKey);
        var provider = GetMetadataProvider(
          target,
          propertyKey,
          /*Create*/
          false
        );
        if (IsUndefined(provider))
          return false;
        return provider.OrdinaryDeleteMetadata(metadataKey, target, propertyKey);
      }
      exporter("deleteMetadata", deleteMetadata);
      function DecorateConstructor(decorators, target) {
        for (var i2 = decorators.length - 1; i2 >= 0; --i2) {
          var decorator = decorators[i2];
          var decorated = decorator(target);
          if (!IsUndefined(decorated) && !IsNull(decorated)) {
            if (!IsConstructor(decorated))
              throw new TypeError();
            target = decorated;
          }
        }
        return target;
      }
      function DecorateProperty(decorators, target, propertyKey, descriptor) {
        for (var i2 = decorators.length - 1; i2 >= 0; --i2) {
          var decorator = decorators[i2];
          var decorated = decorator(target, propertyKey, descriptor);
          if (!IsUndefined(decorated) && !IsNull(decorated)) {
            if (!IsObject(decorated))
              throw new TypeError();
            descriptor = decorated;
          }
        }
        return descriptor;
      }
      function OrdinaryHasMetadata(MetadataKey, O2, P2) {
        var hasOwn2 = OrdinaryHasOwnMetadata(MetadataKey, O2, P2);
        if (hasOwn2)
          return true;
        var parent = OrdinaryGetPrototypeOf(O2);
        if (!IsNull(parent))
          return OrdinaryHasMetadata(MetadataKey, parent, P2);
        return false;
      }
      function OrdinaryHasOwnMetadata(MetadataKey, O2, P2) {
        var provider = GetMetadataProvider(
          O2,
          P2,
          /*Create*/
          false
        );
        if (IsUndefined(provider))
          return false;
        return ToBoolean(provider.OrdinaryHasOwnMetadata(MetadataKey, O2, P2));
      }
      function OrdinaryGetMetadata(MetadataKey, O2, P2) {
        var hasOwn2 = OrdinaryHasOwnMetadata(MetadataKey, O2, P2);
        if (hasOwn2)
          return OrdinaryGetOwnMetadata(MetadataKey, O2, P2);
        var parent = OrdinaryGetPrototypeOf(O2);
        if (!IsNull(parent))
          return OrdinaryGetMetadata(MetadataKey, parent, P2);
        return void 0;
      }
      function OrdinaryGetOwnMetadata(MetadataKey, O2, P2) {
        var provider = GetMetadataProvider(
          O2,
          P2,
          /*Create*/
          false
        );
        if (IsUndefined(provider))
          return;
        return provider.OrdinaryGetOwnMetadata(MetadataKey, O2, P2);
      }
      function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O2, P2) {
        var provider = GetMetadataProvider(
          O2,
          P2,
          /*Create*/
          true
        );
        provider.OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O2, P2);
      }
      function OrdinaryMetadataKeys(O2, P2) {
        var ownKeys = OrdinaryOwnMetadataKeys(O2, P2);
        var parent = OrdinaryGetPrototypeOf(O2);
        if (parent === null)
          return ownKeys;
        var parentKeys = OrdinaryMetadataKeys(parent, P2);
        if (parentKeys.length <= 0)
          return ownKeys;
        if (ownKeys.length <= 0)
          return parentKeys;
        var set = new _Set();
        var keys = [];
        for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
          var key = ownKeys_1[_i];
          var hasKey = set.has(key);
          if (!hasKey) {
            set.add(key);
            keys.push(key);
          }
        }
        for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
          var key = parentKeys_1[_a];
          var hasKey = set.has(key);
          if (!hasKey) {
            set.add(key);
            keys.push(key);
          }
        }
        return keys;
      }
      function OrdinaryOwnMetadataKeys(O2, P2) {
        var provider = GetMetadataProvider(
          O2,
          P2,
          /*create*/
          false
        );
        if (!provider) {
          return [];
        }
        return provider.OrdinaryOwnMetadataKeys(O2, P2);
      }
      function Type(x2) {
        if (x2 === null)
          return 1;
        switch (typeof x2) {
          case "undefined":
            return 0;
          case "boolean":
            return 2;
          case "string":
            return 3;
          case "symbol":
            return 4;
          case "number":
            return 5;
          case "object":
            return x2 === null ? 1 : 6;
          default:
            return 6;
        }
      }
      function IsUndefined(x2) {
        return x2 === void 0;
      }
      function IsNull(x2) {
        return x2 === null;
      }
      function IsSymbol(x2) {
        return typeof x2 === "symbol";
      }
      function IsObject(x2) {
        return typeof x2 === "object" ? x2 !== null : typeof x2 === "function";
      }
      function ToPrimitive(input, PreferredType) {
        switch (Type(input)) {
          case 0:
            return input;
          case 1:
            return input;
          case 2:
            return input;
          case 3:
            return input;
          case 4:
            return input;
          case 5:
            return input;
        }
        var hint = "string";
        var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
        if (exoticToPrim !== void 0) {
          var result = exoticToPrim.call(input, hint);
          if (IsObject(result))
            throw new TypeError();
          return result;
        }
        return OrdinaryToPrimitive(input);
      }
      function OrdinaryToPrimitive(O2, hint) {
        var valueOf, result, toString_2;
        {
          var toString_1 = O2.toString;
          if (IsCallable(toString_1)) {
            var result = toString_1.call(O2);
            if (!IsObject(result))
              return result;
          }
          var valueOf = O2.valueOf;
          if (IsCallable(valueOf)) {
            var result = valueOf.call(O2);
            if (!IsObject(result))
              return result;
          }
        }
        throw new TypeError();
      }
      function ToBoolean(argument) {
        return !!argument;
      }
      function ToString(argument) {
        return "" + argument;
      }
      function ToPropertyKey(argument) {
        var key = ToPrimitive(argument);
        if (IsSymbol(key))
          return key;
        return ToString(key);
      }
      function IsArray(argument) {
        return Array.isArray ? Array.isArray(argument) : argument instanceof Object ? argument instanceof Array : Object.prototype.toString.call(argument) === "[object Array]";
      }
      function IsCallable(argument) {
        return typeof argument === "function";
      }
      function IsConstructor(argument) {
        return typeof argument === "function";
      }
      function IsPropertyKey(argument) {
        switch (Type(argument)) {
          case 3:
            return true;
          case 4:
            return true;
          default:
            return false;
        }
      }
      function SameValueZero(x2, y2) {
        return x2 === y2 || x2 !== x2 && y2 !== y2;
      }
      function GetMethod(V2, P2) {
        var func = V2[P2];
        if (func === void 0 || func === null)
          return void 0;
        if (!IsCallable(func))
          throw new TypeError();
        return func;
      }
      function GetIterator(obj) {
        var method = GetMethod(obj, iteratorSymbol);
        if (!IsCallable(method))
          throw new TypeError();
        var iterator = method.call(obj);
        if (!IsObject(iterator))
          throw new TypeError();
        return iterator;
      }
      function IteratorValue(iterResult) {
        return iterResult.value;
      }
      function IteratorStep(iterator) {
        var result = iterator.next();
        return result.done ? false : result;
      }
      function IteratorClose(iterator) {
        var f2 = iterator["return"];
        if (f2)
          f2.call(iterator);
      }
      function OrdinaryGetPrototypeOf(O2) {
        var proto = Object.getPrototypeOf(O2);
        if (typeof O2 !== "function" || O2 === functionPrototype)
          return proto;
        if (proto !== functionPrototype)
          return proto;
        var prototype = O2.prototype;
        var prototypeProto = prototype && Object.getPrototypeOf(prototype);
        if (prototypeProto == null || prototypeProto === Object.prototype)
          return proto;
        var constructor = prototypeProto.constructor;
        if (typeof constructor !== "function")
          return proto;
        if (constructor === O2)
          return proto;
        return constructor;
      }
      function CreateMetadataRegistry() {
        var fallback;
        if (!IsUndefined(registrySymbol) && typeof root.Reflect !== "undefined" && !(registrySymbol in root.Reflect) && typeof root.Reflect.defineMetadata === "function") {
          fallback = CreateFallbackProvider(root.Reflect);
        }
        var first;
        var second;
        var rest;
        var targetProviderMap = new _WeakMap();
        var registry = {
          registerProvider,
          getProvider,
          setProvider
        };
        return registry;
        function registerProvider(provider) {
          if (!Object.isExtensible(registry)) {
            throw new Error("Cannot add provider to a frozen registry.");
          }
          switch (true) {
            case fallback === provider:
              break;
            case IsUndefined(first):
              first = provider;
              break;
            case first === provider:
              break;
            case IsUndefined(second):
              second = provider;
              break;
            case second === provider:
              break;
            default:
              if (rest === void 0)
                rest = new _Set();
              rest.add(provider);
              break;
          }
        }
        function getProviderNoCache(O2, P2) {
          if (!IsUndefined(first)) {
            if (first.isProviderFor(O2, P2))
              return first;
            if (!IsUndefined(second)) {
              if (second.isProviderFor(O2, P2))
                return first;
              if (!IsUndefined(rest)) {
                var iterator = GetIterator(rest);
                while (true) {
                  var next = IteratorStep(iterator);
                  if (!next) {
                    return void 0;
                  }
                  var provider = IteratorValue(next);
                  if (provider.isProviderFor(O2, P2)) {
                    IteratorClose(iterator);
                    return provider;
                  }
                }
              }
            }
          }
          if (!IsUndefined(fallback) && fallback.isProviderFor(O2, P2)) {
            return fallback;
          }
          return void 0;
        }
        function getProvider(O2, P2) {
          var providerMap = targetProviderMap.get(O2);
          var provider;
          if (!IsUndefined(providerMap)) {
            provider = providerMap.get(P2);
          }
          if (!IsUndefined(provider)) {
            return provider;
          }
          provider = getProviderNoCache(O2, P2);
          if (!IsUndefined(provider)) {
            if (IsUndefined(providerMap)) {
              providerMap = new _Map();
              targetProviderMap.set(O2, providerMap);
            }
            providerMap.set(P2, provider);
          }
          return provider;
        }
        function hasProvider(provider) {
          if (IsUndefined(provider))
            throw new TypeError();
          return first === provider || second === provider || !IsUndefined(rest) && rest.has(provider);
        }
        function setProvider(O2, P2, provider) {
          if (!hasProvider(provider)) {
            throw new Error("Metadata provider not registered.");
          }
          var existingProvider = getProvider(O2, P2);
          if (existingProvider !== provider) {
            if (!IsUndefined(existingProvider)) {
              return false;
            }
            var providerMap = targetProviderMap.get(O2);
            if (IsUndefined(providerMap)) {
              providerMap = new _Map();
              targetProviderMap.set(O2, providerMap);
            }
            providerMap.set(P2, provider);
          }
          return true;
        }
      }
      function GetOrCreateMetadataRegistry() {
        var metadataRegistry2;
        if (!IsUndefined(registrySymbol) && IsObject(root.Reflect) && Object.isExtensible(root.Reflect)) {
          metadataRegistry2 = root.Reflect[registrySymbol];
        }
        if (IsUndefined(metadataRegistry2)) {
          metadataRegistry2 = CreateMetadataRegistry();
        }
        if (!IsUndefined(registrySymbol) && IsObject(root.Reflect) && Object.isExtensible(root.Reflect)) {
          Object.defineProperty(root.Reflect, registrySymbol, {
            enumerable: false,
            configurable: false,
            writable: false,
            value: metadataRegistry2
          });
        }
        return metadataRegistry2;
      }
      function CreateMetadataProvider(registry) {
        var metadata2 = new _WeakMap();
        var provider = {
          isProviderFor: function(O2, P2) {
            var targetMetadata = metadata2.get(O2);
            if (IsUndefined(targetMetadata))
              return false;
            return targetMetadata.has(P2);
          },
          OrdinaryDefineOwnMetadata: OrdinaryDefineOwnMetadata2,
          OrdinaryHasOwnMetadata: OrdinaryHasOwnMetadata2,
          OrdinaryGetOwnMetadata: OrdinaryGetOwnMetadata2,
          OrdinaryOwnMetadataKeys: OrdinaryOwnMetadataKeys2,
          OrdinaryDeleteMetadata
        };
        metadataRegistry.registerProvider(provider);
        return provider;
        function GetOrCreateMetadataMap(O2, P2, Create) {
          var targetMetadata = metadata2.get(O2);
          var createdTargetMetadata = false;
          if (IsUndefined(targetMetadata)) {
            if (!Create)
              return void 0;
            targetMetadata = new _Map();
            metadata2.set(O2, targetMetadata);
            createdTargetMetadata = true;
          }
          var metadataMap = targetMetadata.get(P2);
          if (IsUndefined(metadataMap)) {
            if (!Create)
              return void 0;
            metadataMap = new _Map();
            targetMetadata.set(P2, metadataMap);
            if (!registry.setProvider(O2, P2, provider)) {
              targetMetadata.delete(P2);
              if (createdTargetMetadata) {
                metadata2.delete(O2);
              }
              throw new Error("Wrong provider for target.");
            }
          }
          return metadataMap;
        }
        function OrdinaryHasOwnMetadata2(MetadataKey, O2, P2) {
          var metadataMap = GetOrCreateMetadataMap(
            O2,
            P2,
            /*Create*/
            false
          );
          if (IsUndefined(metadataMap))
            return false;
          return ToBoolean(metadataMap.has(MetadataKey));
        }
        function OrdinaryGetOwnMetadata2(MetadataKey, O2, P2) {
          var metadataMap = GetOrCreateMetadataMap(
            O2,
            P2,
            /*Create*/
            false
          );
          if (IsUndefined(metadataMap))
            return void 0;
          return metadataMap.get(MetadataKey);
        }
        function OrdinaryDefineOwnMetadata2(MetadataKey, MetadataValue, O2, P2) {
          var metadataMap = GetOrCreateMetadataMap(
            O2,
            P2,
            /*Create*/
            true
          );
          metadataMap.set(MetadataKey, MetadataValue);
        }
        function OrdinaryOwnMetadataKeys2(O2, P2) {
          var keys = [];
          var metadataMap = GetOrCreateMetadataMap(
            O2,
            P2,
            /*Create*/
            false
          );
          if (IsUndefined(metadataMap))
            return keys;
          var keysObj = metadataMap.keys();
          var iterator = GetIterator(keysObj);
          var k2 = 0;
          while (true) {
            var next = IteratorStep(iterator);
            if (!next) {
              keys.length = k2;
              return keys;
            }
            var nextValue = IteratorValue(next);
            try {
              keys[k2] = nextValue;
            } catch (e2) {
              try {
                IteratorClose(iterator);
              } finally {
                throw e2;
              }
            }
            k2++;
          }
        }
        function OrdinaryDeleteMetadata(MetadataKey, O2, P2) {
          var metadataMap = GetOrCreateMetadataMap(
            O2,
            P2,
            /*Create*/
            false
          );
          if (IsUndefined(metadataMap))
            return false;
          if (!metadataMap.delete(MetadataKey))
            return false;
          if (metadataMap.size === 0) {
            var targetMetadata = metadata2.get(O2);
            if (!IsUndefined(targetMetadata)) {
              targetMetadata.delete(P2);
              if (targetMetadata.size === 0) {
                metadata2.delete(targetMetadata);
              }
            }
          }
          return true;
        }
      }
      function CreateFallbackProvider(reflect) {
        var defineMetadata2 = reflect.defineMetadata, hasOwnMetadata2 = reflect.hasOwnMetadata, getOwnMetadata2 = reflect.getOwnMetadata, getOwnMetadataKeys2 = reflect.getOwnMetadataKeys, deleteMetadata2 = reflect.deleteMetadata;
        var metadataOwner = new _WeakMap();
        var provider = {
          isProviderFor: function(O2, P2) {
            var metadataPropertySet = metadataOwner.get(O2);
            if (!IsUndefined(metadataPropertySet) && metadataPropertySet.has(P2)) {
              return true;
            }
            if (getOwnMetadataKeys2(O2, P2).length) {
              if (IsUndefined(metadataPropertySet)) {
                metadataPropertySet = new _Set();
                metadataOwner.set(O2, metadataPropertySet);
              }
              metadataPropertySet.add(P2);
              return true;
            }
            return false;
          },
          OrdinaryDefineOwnMetadata: defineMetadata2,
          OrdinaryHasOwnMetadata: hasOwnMetadata2,
          OrdinaryGetOwnMetadata: getOwnMetadata2,
          OrdinaryOwnMetadataKeys: getOwnMetadataKeys2,
          OrdinaryDeleteMetadata: deleteMetadata2
        };
        return provider;
      }
      function GetMetadataProvider(O2, P2, Create) {
        var registeredProvider = metadataRegistry.getProvider(O2, P2);
        if (!IsUndefined(registeredProvider)) {
          return registeredProvider;
        }
        if (Create) {
          if (metadataRegistry.setProvider(O2, P2, metadataProvider)) {
            return metadataProvider;
          }
          throw new Error("Illegal state.");
        }
        return void 0;
      }
      function CreateMapPolyfill() {
        var cacheSentinel = {};
        var arraySentinel = [];
        var MapIterator = (
          /** @class */
          (function() {
            function MapIterator2(keys, values, selector) {
              this._index = 0;
              this._keys = keys;
              this._values = values;
              this._selector = selector;
            }
            MapIterator2.prototype["@@iterator"] = function() {
              return this;
            };
            MapIterator2.prototype[iteratorSymbol] = function() {
              return this;
            };
            MapIterator2.prototype.next = function() {
              var index = this._index;
              if (index >= 0 && index < this._keys.length) {
                var result = this._selector(this._keys[index], this._values[index]);
                if (index + 1 >= this._keys.length) {
                  this._index = -1;
                  this._keys = arraySentinel;
                  this._values = arraySentinel;
                } else {
                  this._index++;
                }
                return { value: result, done: false };
              }
              return { value: void 0, done: true };
            };
            MapIterator2.prototype.throw = function(error) {
              if (this._index >= 0) {
                this._index = -1;
                this._keys = arraySentinel;
                this._values = arraySentinel;
              }
              throw error;
            };
            MapIterator2.prototype.return = function(value) {
              if (this._index >= 0) {
                this._index = -1;
                this._keys = arraySentinel;
                this._values = arraySentinel;
              }
              return { value, done: true };
            };
            return MapIterator2;
          })()
        );
        var Map2 = (
          /** @class */
          (function() {
            function Map3() {
              this._keys = [];
              this._values = [];
              this._cacheKey = cacheSentinel;
              this._cacheIndex = -2;
            }
            Object.defineProperty(Map3.prototype, "size", {
              get: function() {
                return this._keys.length;
              },
              enumerable: true,
              configurable: true
            });
            Map3.prototype.has = function(key) {
              return this._find(
                key,
                /*insert*/
                false
              ) >= 0;
            };
            Map3.prototype.get = function(key) {
              var index = this._find(
                key,
                /*insert*/
                false
              );
              return index >= 0 ? this._values[index] : void 0;
            };
            Map3.prototype.set = function(key, value) {
              var index = this._find(
                key,
                /*insert*/
                true
              );
              this._values[index] = value;
              return this;
            };
            Map3.prototype.delete = function(key) {
              var index = this._find(
                key,
                /*insert*/
                false
              );
              if (index >= 0) {
                var size = this._keys.length;
                for (var i2 = index + 1; i2 < size; i2++) {
                  this._keys[i2 - 1] = this._keys[i2];
                  this._values[i2 - 1] = this._values[i2];
                }
                this._keys.length--;
                this._values.length--;
                if (SameValueZero(key, this._cacheKey)) {
                  this._cacheKey = cacheSentinel;
                  this._cacheIndex = -2;
                }
                return true;
              }
              return false;
            };
            Map3.prototype.clear = function() {
              this._keys.length = 0;
              this._values.length = 0;
              this._cacheKey = cacheSentinel;
              this._cacheIndex = -2;
            };
            Map3.prototype.keys = function() {
              return new MapIterator(this._keys, this._values, getKey);
            };
            Map3.prototype.values = function() {
              return new MapIterator(this._keys, this._values, getValue);
            };
            Map3.prototype.entries = function() {
              return new MapIterator(this._keys, this._values, getEntry);
            };
            Map3.prototype["@@iterator"] = function() {
              return this.entries();
            };
            Map3.prototype[iteratorSymbol] = function() {
              return this.entries();
            };
            Map3.prototype._find = function(key, insert) {
              if (!SameValueZero(this._cacheKey, key)) {
                this._cacheIndex = -1;
                for (var i2 = 0; i2 < this._keys.length; i2++) {
                  if (SameValueZero(this._keys[i2], key)) {
                    this._cacheIndex = i2;
                    break;
                  }
                }
              }
              if (this._cacheIndex < 0 && insert) {
                this._cacheIndex = this._keys.length;
                this._keys.push(key);
                this._values.push(void 0);
              }
              return this._cacheIndex;
            };
            return Map3;
          })()
        );
        return Map2;
        function getKey(key, _2) {
          return key;
        }
        function getValue(_2, value) {
          return value;
        }
        function getEntry(key, value) {
          return [key, value];
        }
      }
      function CreateSetPolyfill() {
        var Set2 = (
          /** @class */
          (function() {
            function Set3() {
              this._map = new _Map();
            }
            Object.defineProperty(Set3.prototype, "size", {
              get: function() {
                return this._map.size;
              },
              enumerable: true,
              configurable: true
            });
            Set3.prototype.has = function(value) {
              return this._map.has(value);
            };
            Set3.prototype.add = function(value) {
              return this._map.set(value, value), this;
            };
            Set3.prototype.delete = function(value) {
              return this._map.delete(value);
            };
            Set3.prototype.clear = function() {
              this._map.clear();
            };
            Set3.prototype.keys = function() {
              return this._map.keys();
            };
            Set3.prototype.values = function() {
              return this._map.keys();
            };
            Set3.prototype.entries = function() {
              return this._map.entries();
            };
            Set3.prototype["@@iterator"] = function() {
              return this.keys();
            };
            Set3.prototype[iteratorSymbol] = function() {
              return this.keys();
            };
            return Set3;
          })()
        );
        return Set2;
      }
      function CreateWeakMapPolyfill() {
        var UUID_SIZE = 16;
        var keys = HashMap.create();
        var rootKey = CreateUniqueKey();
        return (
          /** @class */
          (function() {
            function WeakMap2() {
              this._key = CreateUniqueKey();
            }
            WeakMap2.prototype.has = function(target) {
              var table = GetOrCreateWeakMapTable(
                target,
                /*create*/
                false
              );
              return table !== void 0 ? HashMap.has(table, this._key) : false;
            };
            WeakMap2.prototype.get = function(target) {
              var table = GetOrCreateWeakMapTable(
                target,
                /*create*/
                false
              );
              return table !== void 0 ? HashMap.get(table, this._key) : void 0;
            };
            WeakMap2.prototype.set = function(target, value) {
              var table = GetOrCreateWeakMapTable(
                target,
                /*create*/
                true
              );
              table[this._key] = value;
              return this;
            };
            WeakMap2.prototype.delete = function(target) {
              var table = GetOrCreateWeakMapTable(
                target,
                /*create*/
                false
              );
              return table !== void 0 ? delete table[this._key] : false;
            };
            WeakMap2.prototype.clear = function() {
              this._key = CreateUniqueKey();
            };
            return WeakMap2;
          })()
        );
        function CreateUniqueKey() {
          var key;
          do
            key = "@@WeakMap@@" + CreateUUID();
          while (HashMap.has(keys, key));
          keys[key] = true;
          return key;
        }
        function GetOrCreateWeakMapTable(target, create) {
          if (!hasOwn.call(target, rootKey)) {
            if (!create)
              return void 0;
            Object.defineProperty(target, rootKey, { value: HashMap.create() });
          }
          return target[rootKey];
        }
        function FillRandomBytes(buffer2, size) {
          for (var i2 = 0; i2 < size; ++i2)
            buffer2[i2] = Math.random() * 255 | 0;
          return buffer2;
        }
        function GenRandomBytes(size) {
          if (typeof Uint8Array === "function") {
            var array = new Uint8Array(size);
            if (typeof crypto !== "undefined") {
              crypto.getRandomValues(array);
            } else if (typeof msCrypto !== "undefined") {
              msCrypto.getRandomValues(array);
            } else {
              FillRandomBytes(array, size);
            }
            return array;
          }
          return FillRandomBytes(new Array(size), size);
        }
        function CreateUUID() {
          var data = GenRandomBytes(UUID_SIZE);
          data[6] = data[6] & 79 | 64;
          data[8] = data[8] & 191 | 128;
          var result = "";
          for (var offset = 0; offset < UUID_SIZE; ++offset) {
            var byte = data[offset];
            if (offset === 4 || offset === 6 || offset === 8)
              result += "-";
            if (byte < 16)
              result += "0";
            result += byte.toString(16).toLowerCase();
          }
          return result;
        }
      }
      function MakeDictionary(obj) {
        obj.__ = void 0;
        delete obj.__;
        return obj;
      }
    });
  })(Reflect2 || (Reflect2 = {}));
  return _Reflect;
}
require_Reflect();
function Attribute() {
  return function(target, propertyKey) {
    Reflect.defineMetadata("Attribute", true, target, propertyKey);
  };
}
function ModelClass(attr) {
  return function(target) {
    Reflect.defineMetadata("ModelClass", attr, target, "modelClass");
  };
}
function Documentation(type) {
  return function(target, propertyKey) {
    Reflect.defineMetadata("Documentation", type, target, propertyKey);
  };
}
var browser = { exports: {} };
var ms;
var hasRequiredMs;
function requireMs() {
  if (hasRequiredMs) return ms;
  hasRequiredMs = 1;
  var s2 = 1e3;
  var m2 = s2 * 60;
  var h2 = m2 * 60;
  var d2 = h2 * 24;
  var w2 = d2 * 7;
  var y2 = d2 * 365.25;
  ms = function(val, options) {
    options = options || {};
    var type = typeof val;
    if (type === "string" && val.length > 0) {
      return parse(val);
    } else if (type === "number" && isFinite(val)) {
      return options.long ? fmtLong(val) : fmtShort(val);
    }
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(val)
    );
  };
  function parse(str) {
    str = String(str);
    if (str.length > 100) {
      return;
    }
    var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
      str
    );
    if (!match) {
      return;
    }
    var n2 = parseFloat(match[1]);
    var type = (match[2] || "ms").toLowerCase();
    switch (type) {
      case "years":
      case "year":
      case "yrs":
      case "yr":
      case "y":
        return n2 * y2;
      case "weeks":
      case "week":
      case "w":
        return n2 * w2;
      case "days":
      case "day":
      case "d":
        return n2 * d2;
      case "hours":
      case "hour":
      case "hrs":
      case "hr":
      case "h":
        return n2 * h2;
      case "minutes":
      case "minute":
      case "mins":
      case "min":
      case "m":
        return n2 * m2;
      case "seconds":
      case "second":
      case "secs":
      case "sec":
      case "s":
        return n2 * s2;
      case "milliseconds":
      case "millisecond":
      case "msecs":
      case "msec":
      case "ms":
        return n2;
      default:
        return void 0;
    }
  }
  function fmtShort(ms2) {
    var msAbs = Math.abs(ms2);
    if (msAbs >= d2) {
      return Math.round(ms2 / d2) + "d";
    }
    if (msAbs >= h2) {
      return Math.round(ms2 / h2) + "h";
    }
    if (msAbs >= m2) {
      return Math.round(ms2 / m2) + "m";
    }
    if (msAbs >= s2) {
      return Math.round(ms2 / s2) + "s";
    }
    return ms2 + "ms";
  }
  function fmtLong(ms2) {
    var msAbs = Math.abs(ms2);
    if (msAbs >= d2) {
      return plural(ms2, msAbs, d2, "day");
    }
    if (msAbs >= h2) {
      return plural(ms2, msAbs, h2, "hour");
    }
    if (msAbs >= m2) {
      return plural(ms2, msAbs, m2, "minute");
    }
    if (msAbs >= s2) {
      return plural(ms2, msAbs, s2, "second");
    }
    return ms2 + " ms";
  }
  function plural(ms2, msAbs, n2, name) {
    var isPlural = msAbs >= n2 * 1.5;
    return Math.round(ms2 / n2) + " " + name + (isPlural ? "s" : "");
  }
  return ms;
}
var common;
var hasRequiredCommon;
function requireCommon() {
  if (hasRequiredCommon) return common;
  hasRequiredCommon = 1;
  function setup(env) {
    createDebug.debug = createDebug;
    createDebug.default = createDebug;
    createDebug.coerce = coerce;
    createDebug.disable = disable;
    createDebug.enable = enable;
    createDebug.enabled = enabled;
    createDebug.humanize = requireMs();
    createDebug.destroy = destroy;
    Object.keys(env).forEach((key) => {
      createDebug[key] = env[key];
    });
    createDebug.names = [];
    createDebug.skips = [];
    createDebug.formatters = {};
    function selectColor(namespace) {
      let hash = 0;
      for (let i2 = 0; i2 < namespace.length; i2++) {
        hash = (hash << 5) - hash + namespace.charCodeAt(i2);
        hash |= 0;
      }
      return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
    }
    createDebug.selectColor = selectColor;
    function createDebug(namespace) {
      let prevTime;
      let enableOverride = null;
      let namespacesCache;
      let enabledCache;
      function debug2(...args) {
        if (!debug2.enabled) {
          return;
        }
        const self2 = debug2;
        const curr = Number(/* @__PURE__ */ new Date());
        const ms2 = curr - (prevTime || curr);
        self2.diff = ms2;
        self2.prev = prevTime;
        self2.curr = curr;
        prevTime = curr;
        args[0] = createDebug.coerce(args[0]);
        if (typeof args[0] !== "string") {
          args.unshift("%O");
        }
        let index = 0;
        args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
          if (match === "%%") {
            return "%";
          }
          index++;
          const formatter = createDebug.formatters[format];
          if (typeof formatter === "function") {
            const val = args[index];
            match = formatter.call(self2, val);
            args.splice(index, 1);
            index--;
          }
          return match;
        });
        createDebug.formatArgs.call(self2, args);
        const logFn = self2.log || createDebug.log;
        logFn.apply(self2, args);
      }
      debug2.namespace = namespace;
      debug2.useColors = createDebug.useColors();
      debug2.color = createDebug.selectColor(namespace);
      debug2.extend = extend;
      debug2.destroy = createDebug.destroy;
      Object.defineProperty(debug2, "enabled", {
        enumerable: true,
        configurable: false,
        get: () => {
          if (enableOverride !== null) {
            return enableOverride;
          }
          if (namespacesCache !== createDebug.namespaces) {
            namespacesCache = createDebug.namespaces;
            enabledCache = createDebug.enabled(namespace);
          }
          return enabledCache;
        },
        set: (v2) => {
          enableOverride = v2;
        }
      });
      if (typeof createDebug.init === "function") {
        createDebug.init(debug2);
      }
      return debug2;
    }
    function extend(namespace, delimiter) {
      const newDebug = createDebug(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace);
      newDebug.log = this.log;
      return newDebug;
    }
    function enable(namespaces) {
      createDebug.save(namespaces);
      createDebug.namespaces = namespaces;
      createDebug.names = [];
      createDebug.skips = [];
      const split = (typeof namespaces === "string" ? namespaces : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
      for (const ns of split) {
        if (ns[0] === "-") {
          createDebug.skips.push(ns.slice(1));
        } else {
          createDebug.names.push(ns);
        }
      }
    }
    function matchesTemplate(search, template) {
      let searchIndex = 0;
      let templateIndex = 0;
      let starIndex = -1;
      let matchIndex = 0;
      while (searchIndex < search.length) {
        if (templateIndex < template.length && (template[templateIndex] === search[searchIndex] || template[templateIndex] === "*")) {
          if (template[templateIndex] === "*") {
            starIndex = templateIndex;
            matchIndex = searchIndex;
            templateIndex++;
          } else {
            searchIndex++;
            templateIndex++;
          }
        } else if (starIndex !== -1) {
          templateIndex = starIndex + 1;
          matchIndex++;
          searchIndex = matchIndex;
        } else {
          return false;
        }
      }
      while (templateIndex < template.length && template[templateIndex] === "*") {
        templateIndex++;
      }
      return templateIndex === template.length;
    }
    function disable() {
      const namespaces = [
        ...createDebug.names,
        ...createDebug.skips.map((namespace) => "-" + namespace)
      ].join(",");
      createDebug.enable("");
      return namespaces;
    }
    function enabled(name) {
      for (const skip of createDebug.skips) {
        if (matchesTemplate(name, skip)) {
          return false;
        }
      }
      for (const ns of createDebug.names) {
        if (matchesTemplate(name, ns)) {
          return true;
        }
      }
      return false;
    }
    function coerce(val) {
      if (val instanceof Error) {
        return val.stack || val.message;
      }
      return val;
    }
    function destroy() {
      console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }
    createDebug.enable(createDebug.load());
    return createDebug;
  }
  common = setup;
  return common;
}
var hasRequiredBrowser;
function requireBrowser() {
  if (hasRequiredBrowser) return browser.exports;
  hasRequiredBrowser = 1;
  (function(module, exports$1) {
    var define_process_env_default = {};
    exports$1.formatArgs = formatArgs;
    exports$1.save = save;
    exports$1.load = load;
    exports$1.useColors = useColors;
    exports$1.storage = localstorage();
    exports$1.destroy = /* @__PURE__ */ (() => {
      let warned = false;
      return () => {
        if (!warned) {
          warned = true;
          console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }
      };
    })();
    exports$1.colors = [
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
    function useColors() {
      if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) {
        return true;
      }
      if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
      }
      let m2;
      return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
      typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator !== "undefined" && navigator.userAgent && (m2 = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(m2[1], 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
      typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    function formatArgs(args) {
      args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module.exports.humanize(this.diff);
      if (!this.useColors) {
        return;
      }
      const c2 = "color: " + this.color;
      args.splice(1, 0, c2, "color: inherit");
      let index = 0;
      let lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, (match) => {
        if (match === "%%") {
          return;
        }
        index++;
        if (match === "%c") {
          lastC = index;
        }
      });
      args.splice(lastC, 0, c2);
    }
    exports$1.log = console.debug || console.log || (() => {
    });
    function save(namespaces) {
      try {
        if (namespaces) {
          exports$1.storage.setItem("debug", namespaces);
        } else {
          exports$1.storage.removeItem("debug");
        }
      } catch (error) {
      }
    }
    function load() {
      let r2;
      try {
        r2 = exports$1.storage.getItem("debug") || exports$1.storage.getItem("DEBUG");
      } catch (error) {
      }
      if (!r2 && typeof process !== "undefined" && "env" in process) {
        r2 = define_process_env_default.DEBUG;
      }
      return r2;
    }
    function localstorage() {
      try {
        return localStorage;
      } catch (error) {
      }
    }
    module.exports = requireCommon()(exports$1);
    const { formatters } = module.exports;
    formatters.j = function(v2) {
      try {
        return JSON.stringify(v2);
      } catch (error) {
        return "[UnexpectedJSONParseError]: " + error.message;
      }
    };
  })(browser, browser.exports);
  return browser.exports;
}
var browserExports = requireBrowser();
const debug = /* @__PURE__ */ getDefaultExportFromCjs(browserExports);
debug.log = console.log.bind(console);
if (typeof localStorage !== "undefined") {
  const debugConfig = localStorage.getItem("debug");
  if (debugConfig) {
    debug.enable(debugConfig);
  }
}
class LoggerFactory {
  /**
   * Create a namespaced logger
   * @param namespace The namespace for the logger (e.g., 'daanse:ogcsta:mqtt')
   */
  createLogger(namespace) {
    return debug(namespace);
  }
  /**
   * Enable specific debug namespaces
   * @param namespaces Comma-separated list of namespaces (e.g., 'daanse:*,express:*')
   */
  enable(namespaces) {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("debug", namespaces);
    }
    debug.enable(namespaces);
  }
  /**
   * Disable all debug logging
   */
  disable() {
    if (typeof localStorage !== "undefined") {
      localStorage.removeItem("debug");
    }
    debug.disable();
  }
  /**
   * Check if a namespace is enabled
   * @param namespace The namespace to check
   */
  isEnabled(namespace) {
    const logger = debug(namespace);
    return logger.enabled;
  }
}
const loggerFactory = new LoggerFactory();
if (typeof window !== "undefined") {
  window.__daanseLoggerFactory = loggerFactory;
  window.__daanseDebug = debug;
}
function isInternalEObject(obj) {
  return obj && typeof obj.eProxyURI === "function" && typeof obj.eSetProxyURI === "function";
}
const NotificationType = {
  /** A feature has been set */
  SET: 1,
  /** A feature has been unset */
  UNSET: 2,
  /** A value has been added to a list */
  ADD: 3,
  /** A value has been removed from a list */
  REMOVE: 4,
  /** Multiple values have been added to a list */
  ADD_MANY: 5,
  /** Multiple values have been removed from a list */
  REMOVE_MANY: 6,
  /** A value has been moved within a list */
  MOVE: 7,
  /** An adapter is being removed */
  REMOVING_ADAPTER: 8,
  /** A proxy has been resolved */
  RESOLVE: 9
};
const NO_INDEX = -1;
const NO_FEATURE_ID = -1;
class NotificationImpl {
  constructor(notifier, eventType, feature, oldValue, newValue, position = NO_INDEX, wasSet = true) {
    this.notifier = notifier;
    this.eventType = eventType;
    this.feature = feature;
    this.featureID = NO_FEATURE_ID;
    this.oldValue = oldValue;
    this.newValue = newValue;
    this.position = position;
    this.wasSetFlag = wasSet;
  }
  getNotifier() {
    return this.notifier;
  }
  getEventType() {
    return this.eventType;
  }
  getFeature() {
    return this.feature;
  }
  getFeatureID() {
    return this.featureID;
  }
  getOldValue() {
    return this.oldValue;
  }
  getNewValue() {
    return this.newValue;
  }
  wasSet() {
    return this.wasSetFlag;
  }
  isTouch() {
    switch (this.eventType) {
      case NotificationType.RESOLVE:
      case NotificationType.REMOVING_ADAPTER:
        return true;
      case NotificationType.ADD:
      case NotificationType.ADD_MANY:
      case NotificationType.REMOVE:
      case NotificationType.REMOVE_MANY:
      case NotificationType.MOVE:
        return false;
      case NotificationType.SET:
      case NotificationType.UNSET:
        if (this.oldValue === this.newValue) {
          return true;
        }
        if (this.oldValue === null || this.newValue === null) {
          return false;
        }
        return this.oldValue === this.newValue;
      default:
        return false;
    }
  }
  isReset() {
    if (this.feature) {
      const defaultValue = this.feature.getDefaultValue();
      return this.newValue === defaultValue;
    }
    return false;
  }
  getPosition() {
    return this.position;
  }
  merge(notification) {
    return false;
  }
  toString() {
    const eventNames = {
      [NotificationType.SET]: "SET",
      [NotificationType.UNSET]: "UNSET",
      [NotificationType.ADD]: "ADD",
      [NotificationType.REMOVE]: "REMOVE",
      [NotificationType.ADD_MANY]: "ADD_MANY",
      [NotificationType.REMOVE_MANY]: "REMOVE_MANY",
      [NotificationType.MOVE]: "MOVE",
      [NotificationType.REMOVING_ADAPTER]: "REMOVING_ADAPTER",
      [NotificationType.RESOLVE]: "RESOLVE"
    };
    const featureName = this.feature?.getName() || "unknown";
    return `Notification(${eventNames[this.eventType]}, feature=${featureName}, old=${this.oldValue}, new=${this.newValue})`;
  }
}
const INDEX_KEY = /^(?:0|[1-9]\d*)$/;
const IS_INDEXED = Symbol.for("emfts.indexedList");
const INDEX_ACCESS_HANDLER = {
  get(target, prop, receiver) {
    if (prop === IS_INDEXED) {
      return true;
    }
    if (typeof prop === "string" && INDEX_KEY.test(prop)) {
      const index = Number(prop);
      const data = target.data;
      if (data !== void 0) {
        return data[index];
      }
      return index < target.size() ? target.get(index) : void 0;
    }
    return Reflect.get(target, prop, receiver);
  },
  set(target, prop, value, receiver) {
    if (prop === "length") {
      const newLength = typeof value === "number" ? value : parseInt(value, 10);
      if (isNaN(newLength) || newLength < 0) {
        throw new RangeError(`Invalid list length: ${String(value)}`);
      }
      if (newLength === 0) {
        target.clear();
      } else {
        while (target.size() > newLength) {
          target.removeAt(target.size() - 1);
        }
      }
      return true;
    }
    if (typeof prop === "string" && INDEX_KEY.test(prop)) {
      const index = Number(prop);
      const size = target.size();
      if (index < size) {
        target.set(index, value);
      } else if (index === size) {
        target.add(value);
      } else {
        throw new RangeError(`Index ${index} out of bounds for list of size ${size}. ELists do not support sparse assignment - use add() or push().`);
      }
      return true;
    }
    return Reflect.set(target, prop, value, receiver);
  },
  has(target, prop) {
    if (typeof prop === "string" && INDEX_KEY.test(prop)) {
      return Number(prop) < target.size();
    }
    return Reflect.has(target, prop);
  }
};
class BasicEList {
  constructor(owner = null, feature = null) {
    this.data = [];
    this.owner = owner;
    this.feature = feature;
    return new Proxy(this, INDEX_ACCESS_HANDLER);
  }
  // ===== Array-compatible properties and methods =====
  /**
   * Array-compatible length property.
   */
  get length() {
    return this.data.length;
  }
  /**
   * Array-compatible push method. Adds elements to the end of the list.
   * Sends ADD or ADD_MANY notification.
   */
  push(...items) {
    if (items.length === 0) {
      return this.data.length;
    }
    if (items.length === 1) {
      this.add(items[0]);
    } else {
      this.addAll(items);
    }
    return this.data.length;
  }
  /**
   * Array-compatible pop method. Removes and returns the last element.
   * Sends REMOVE notification.
   */
  pop() {
    if (this.data.length === 0) {
      return void 0;
    }
    return this.removeAt(this.data.length - 1);
  }
  /**
   * Array-compatible shift method. Removes and returns the first element.
   * Sends REMOVE notification.
   */
  shift() {
    if (this.data.length === 0) {
      return void 0;
    }
    return this.removeAt(0);
  }
  /**
   * Array-compatible unshift method. Adds elements to the beginning of the list.
   * Sends ADD or ADD_MANY notification.
   */
  unshift(...items) {
    if (items.length === 0) {
      return this.data.length;
    }
    if (items.length === 1) {
      this.addAt(0, items[0]);
    } else {
      this.addAllAt(0, items);
    }
    return this.data.length;
  }
  /**
   * Array-compatible splice method.
   * Removes elements and/or inserts new elements.
   * Sends appropriate notifications.
   */
  splice(start, deleteCount, ...items) {
    const actualStart = start < 0 ? Math.max(this.data.length + start, 0) : Math.min(start, this.data.length);
    const actualDeleteCount = deleteCount === void 0 ? this.data.length - actualStart : Math.min(Math.max(deleteCount, 0), this.data.length - actualStart);
    const removed = [];
    for (let i2 = 0; i2 < actualDeleteCount; i2++) {
      if (actualStart < this.data.length) {
        removed.push(this.removeAt(actualStart));
      }
    }
    for (let i2 = 0; i2 < items.length; i2++) {
      this.addAt(actualStart + i2, items[i2]);
    }
    return removed;
  }
  /**
   * Array-compatible forEach method.
   */
  forEach(callback, thisArg) {
    this.data.forEach((value, index) => callback.call(thisArg, value, index, this.data));
  }
  /**
   * Array-compatible map method.
   */
  map(callback, thisArg) {
    return this.data.map((value, index) => callback.call(thisArg, value, index, this.data));
  }
  /**
   * Array-compatible filter method.
   */
  filter(callback, thisArg) {
    return this.data.filter((value, index) => callback.call(thisArg, value, index, this.data));
  }
  /**
   * Array-compatible find method.
   */
  find(callback, thisArg) {
    return this.data.find((value, index) => callback.call(thisArg, value, index, this.data));
  }
  /**
   * Array-compatible findIndex method.
   */
  findIndex(callback, thisArg) {
    return this.data.findIndex((value, index) => callback.call(thisArg, value, index, this.data));
  }
  /**
   * Array-compatible some method.
   */
  some(callback, thisArg) {
    return this.data.some((value, index) => callback.call(thisArg, value, index, this.data));
  }
  /**
   * Array-compatible every method.
   */
  every(callback, thisArg) {
    return this.data.every((value, index) => callback.call(thisArg, value, index, this.data));
  }
  /**
   * Array-compatible reduce method.
   */
  reduce(callback, initialValue) {
    return this.data.reduce((prev, curr, idx) => callback(prev, curr, idx, this.data), initialValue);
  }
  /**
   * Array-compatible includes method.
   */
  includes(element) {
    return this.contains(element);
  }
  /**
   * Array-compatible slice method. Returns a shallow copy.
   */
  slice(start, end) {
    return this.data.slice(start, end);
  }
  /**
   * Array-compatible concat method. Returns a new array, list is unchanged.
   * Accepts single values, arrays and other ELists as arguments.
   */
  concat(...items) {
    const result = [...this.data];
    for (const item of items) {
      if (Array.isArray(item)) {
        result.push(...item);
      } else if (item instanceof BasicEList) {
        result.push(...item.data);
      } else {
        result.push(item);
      }
    }
    return result;
  }
  /**
   * Array-compatible sort method. Sorts in place and returns the list.
   *
   * The reordering is applied through move(), so each relocated element emits a
   * MOVE notification. This mirrors ECollections.sort() in Java EMF rather than
   * silently rewriting the backing array.
   */
  sort(compareFn) {
    this.reorderTo([...this.data].sort(compareFn));
    return this;
  }
  /**
   * Array-compatible reverse method. Reverses in place and returns the list.
   * Emits MOVE notifications, see {@link sort}.
   */
  reverse() {
    this.reorderTo([...this.data].reverse());
    return this;
  }
  /**
   * Rearranges the list to match the given order using move(), so that every
   * relocation is observable. The order must be a permutation of the list.
   */
  reorderTo(order) {
    for (let i2 = 0; i2 < order.length; i2++) {
      if (this.data[i2] === order[i2]) {
        continue;
      }
      const from = this.data.indexOf(order[i2], i2);
      if (from > i2) {
        this.move(i2, from);
      }
    }
  }
  /**
   * Array-compatible join method.
   */
  join(separator) {
    return this.data.join(separator);
  }
  /**
   * Array-compatible at method. Negative indices count from the end.
   * Implemented directly rather than via Array.prototype.at, which the ES2020
   * target of this project does not provide.
   */
  at(index) {
    const resolved = index < 0 ? this.data.length + index : index;
    return resolved >= 0 && resolved < this.data.length ? this.data[resolved] : void 0;
  }
  /**
   * Array-compatible lastIndexOf method.
   */
  lastIndexOf(element) {
    return this.data.lastIndexOf(element);
  }
  /**
   * Array-compatible flatMap method.
   */
  flatMap(callback, thisArg) {
    return this.data.flatMap((value, index) => callback.call(thisArg, value, index, this.data));
  }
  /**
   * Makes JSON.stringify(list) produce a plain array. Without this the internal
   * fields would be serialized, and `owner` would drag the whole model along.
   */
  toJSON() {
    return [...this.data];
  }
  // ===== End Array-compatible methods =====
  getOwner() {
    return this.owner;
  }
  getFeature() {
    return this.feature;
  }
  size() {
    return this.data.length;
  }
  isEmpty() {
    return this.data.length === 0;
  }
  contains(element) {
    return this.data.indexOf(element) !== -1;
  }
  indexOf(element) {
    return this.data.indexOf(element);
  }
  get(index) {
    if (index < 0 || index >= this.data.length) {
      throw new RangeError(`Index ${index} out of bounds for list of size ${this.data.length}`);
    }
    return this.data[index];
  }
  set(index, element) {
    if (index < 0 || index >= this.data.length) {
      throw new RangeError(`Index ${index} out of bounds for list of size ${this.data.length}`);
    }
    const oldElement = this.data[index];
    if (oldElement === element) {
      return oldElement;
    }
    this.data[index] = element;
    this.didSet(index, element, oldElement);
    return oldElement;
  }
  add(element) {
    const index = this.data.length;
    this.data.push(element);
    this.didAdd(index, element);
    return true;
  }
  addAt(index, element) {
    if (index < 0 || index > this.data.length) {
      throw new RangeError(`Index ${index} out of bounds for list of size ${this.data.length}`);
    }
    this.data.splice(index, 0, element);
    this.didAdd(index, element);
  }
  addAll(elements) {
    if (elements.length === 0) {
      return false;
    }
    const index = this.data.length;
    this.data.push(...elements);
    this.didAddMany(index, elements);
    return true;
  }
  addAllAt(index, elements) {
    if (elements.length === 0) {
      return false;
    }
    if (index < 0 || index > this.data.length) {
      throw new RangeError(`Index ${index} out of bounds for list of size ${this.data.length}`);
    }
    this.data.splice(index, 0, ...elements);
    this.didAddMany(index, elements);
    return true;
  }
  remove(element) {
    const index = this.data.indexOf(element);
    if (index === -1) {
      return false;
    }
    this.removeAt(index);
    return true;
  }
  removeAt(index) {
    if (index < 0 || index >= this.data.length) {
      throw new RangeError(`Index ${index} out of bounds for list of size ${this.data.length}`);
    }
    const removed = this.data.splice(index, 1)[0];
    this.didRemove(index, removed);
    return removed;
  }
  clear() {
    if (this.data.length === 0) {
      return;
    }
    const oldData = [...this.data];
    this.data.length = 0;
    this.didClear(oldData);
  }
  move(toIndex, fromIndex) {
    if (fromIndex < 0 || fromIndex >= this.data.length) {
      throw new RangeError(`fromIndex ${fromIndex} out of bounds for list of size ${this.data.length}`);
    }
    if (toIndex < 0 || toIndex >= this.data.length) {
      throw new RangeError(`toIndex ${toIndex} out of bounds for list of size ${this.data.length}`);
    }
    const element = this.data[fromIndex];
    if (fromIndex === toIndex) {
      return element;
    }
    this.data.splice(fromIndex, 1);
    this.data.splice(toIndex, 0, element);
    this.didMove(toIndex, element, fromIndex);
    return element;
  }
  toArray() {
    return [...this.data];
  }
  [Symbol.iterator]() {
    return this.data[Symbol.iterator]();
  }
  // ===== Notification hooks =====
  didAdd(index, element) {
    this.dispatchNotification(NotificationType.ADD, null, element, index);
  }
  didAddMany(index, elements) {
    this.dispatchNotification(NotificationType.ADD_MANY, null, elements, index);
  }
  didRemove(index, element) {
    this.dispatchNotification(NotificationType.REMOVE, element, null, index);
  }
  didClear(oldData) {
    if (oldData.length === 1) {
      this.dispatchNotification(NotificationType.REMOVE, oldData[0], null, 0);
    } else {
      this.dispatchNotification(NotificationType.REMOVE_MANY, oldData, null, NO_INDEX);
    }
  }
  didSet(index, newElement, oldElement) {
    this.dispatchNotification(NotificationType.SET, oldElement, newElement, index);
  }
  didMove(toIndex, element, fromIndex) {
    this.dispatchNotification(NotificationType.MOVE, fromIndex, element, toIndex);
  }
  dispatchNotification(eventType, oldValue, newValue, position) {
    const feature = this.getFeature();
    if (!this.owner || !feature) {
      return;
    }
    if ("eDeliver" in this.owner && !this.owner.eDeliver()) {
      return;
    }
    if ("eAdapters" in this.owner) {
      const adapters = this.owner.eAdapters();
      if (!adapters || adapters.length === 0) {
        return;
      }
    } else {
      return;
    }
    const notification = new NotificationImpl(this.owner, eventType, feature, oldValue, newValue, position);
    if ("eNotify" in this.owner) {
      this.owner.eNotify(notification);
    }
  }
}
class EObjectContainmentEList extends BasicEList {
  constructor(owner, feature) {
    super(owner, feature);
  }
  didAdd(index, element) {
    this.setContainer(element);
    super.didAdd(index, element);
  }
  didAddMany(index, elements) {
    for (const element of elements) {
      this.setContainer(element);
    }
    super.didAddMany(index, elements);
  }
  didRemove(index, element) {
    this.unsetContainer(element);
    super.didRemove(index, element);
  }
  didClear(oldData) {
    for (const element of oldData) {
      this.unsetContainer(element);
    }
    super.didClear(oldData);
  }
  didSet(index, newElement, oldElement) {
    this.unsetContainer(oldElement);
    this.setContainer(newElement);
    super.didSet(index, newElement, oldElement);
  }
  add(element) {
    this.removeFromOldContainer(element);
    return super.add(element);
  }
  addAt(index, element) {
    this.removeFromOldContainer(element);
    super.addAt(index, element);
  }
  addAll(elements) {
    for (const element of elements) {
      this.removeFromOldContainer(element);
    }
    return super.addAll(elements);
  }
  addAllAt(index, elements) {
    for (const element of elements) {
      this.removeFromOldContainer(element);
    }
    return super.addAllAt(index, elements);
  }
  set(index, element) {
    this.removeFromOldContainer(element);
    return super.set(index, element);
  }
  setContainer(element) {
    const feature = this.getFeature();
    if (element && "eSetContainer" in element && this.owner) {
      element.eSetContainer(this.owner, feature);
    }
  }
  unsetContainer(element) {
    if (element && "eSetContainer" in element) {
      element.eSetContainer(null, null);
    }
  }
  removeFromOldContainer(element) {
    const oldContainer = element.eContainer();
    if (oldContainer && oldContainer !== this.owner) {
      const oldFeature = element.eContainmentFeature();
      if (oldFeature && oldFeature.isMany()) {
        const oldList = oldContainer.eGet(oldFeature);
        if (oldList && "remove" in oldList) {
          oldList.remove(element);
        } else if (Array.isArray(oldList)) {
          const idx = oldList.indexOf(element);
          if (idx >= 0) {
            oldList.splice(idx, 1);
          }
        }
      }
    }
  }
}
class EObjectContainmentWithInverseEListLazy extends EObjectContainmentEList {
  constructor(owner, featureResolver, inverseSetter) {
    super(owner, null);
    this.resolvedFeature = void 0;
    this.featureResolver = featureResolver;
    this.inverseSetter = inverseSetter;
  }
  getFeature() {
    if (this.resolvedFeature === void 0) {
      this.resolvedFeature = this.featureResolver();
    }
    return this.resolvedFeature;
  }
  didAdd(index, element) {
    this.inverseSetter(element, this.owner);
    super.didAdd(index, element);
  }
  didAddMany(index, elements) {
    for (const element of elements) {
      this.inverseSetter(element, this.owner);
    }
    super.didAddMany(index, elements);
  }
  didRemove(index, element) {
    this.inverseSetter(element, null);
    super.didRemove(index, element);
  }
  didClear(oldData) {
    for (const element of oldData) {
      this.inverseSetter(element, null);
    }
    super.didClear(oldData);
  }
  didSet(index, newElement, oldElement) {
    this.inverseSetter(oldElement, null);
    this.inverseSetter(newElement, this.owner);
    super.didSet(index, newElement, oldElement);
  }
  /**
   * This list holds EClass.eStructuralFeatures, which every derived feature list
   * is assembled from, so each change has to invalidate those caches.
   */
  dispatchNotification(eventType, oldValue, newValue, position) {
    bumpMetamodelRevision();
    super.dispatchNotification(eventType, oldValue, newValue, position);
  }
}
class EObjectEList extends BasicEList {
  constructor(owner, feature) {
    super(owner, feature);
  }
  get(index) {
    if (index < 0 || index >= this.data.length) {
      throw new RangeError(`Index ${index} out of bounds for list of size ${this.data.length}`);
    }
    let element = this.data[index];
    if (element && isInternalEObject(element) && element.eIsProxy()) {
      if (this.owner && "eResolveProxy" in this.owner) {
        const resolved = this.owner.eResolveProxy(element);
        if (resolved !== element) {
          this.data[index] = resolved;
          element = resolved;
        }
      }
    }
    return element;
  }
  [Symbol.iterator]() {
    const self2 = this;
    let index = 0;
    return {
      next() {
        if (index >= self2.data.length) {
          return { done: true, value: void 0 };
        }
        const value = self2.get(index++);
        return { done: false, value };
      }
    };
  }
}
function isEList(obj) {
  return obj && typeof obj.add === "function" && typeof obj.size === "function" && typeof obj.get === "function";
}
function replaceListContents(list, value) {
  let items;
  if (Array.isArray(value)) {
    items = value;
  } else if (isEList(value)) {
    items = value.toArray();
  } else if (value !== null && typeof value === "object" && typeof value[Symbol.iterator] === "function") {
    items = [...value];
  } else {
    return false;
  }
  const snapshot = [...items];
  list.clear();
  list.addAll(snapshot);
  return true;
}
class UnmodifiableEList extends BasicEList {
  /**
   * @param data the computed contents; used as backing store, not copied
   * @param accessorName name of the accessor, used in the error message
   */
  constructor(data, accessorName) {
    super(null, null);
    this.data = data;
    this.accessorName = accessorName;
  }
  /**
   * Raises the error every mutating method funnels through.
   */
  refuse(operation) {
    throw new Error(`Cannot call ${operation}() on the result of ${this.accessorName}: it is a derived list and cannot be modified. Modify the owning list instead (e.g. getEStructuralFeatures()).`);
  }
  set(_index, _element) {
    this.refuse("set");
  }
  add(_element) {
    this.refuse("add");
  }
  addAt(_index, _element) {
    this.refuse("addAt");
  }
  addAll(_elements) {
    this.refuse("addAll");
  }
  addAllAt(_index, _elements) {
    this.refuse("addAllAt");
  }
  remove(_element) {
    this.refuse("remove");
  }
  removeAt(_index) {
    this.refuse("removeAt");
  }
  clear() {
    this.refuse("clear");
  }
  move(_toIndex, _fromIndex) {
    this.refuse("move");
  }
  push(..._items) {
    this.refuse("push");
  }
  pop() {
    this.refuse("pop");
  }
  shift() {
    this.refuse("shift");
  }
  unshift(..._items) {
    this.refuse("unshift");
  }
  splice(_start, _deleteCount, ..._items) {
    this.refuse("splice");
  }
  sort(_compareFn) {
    this.refuse("sort");
  }
  reverse() {
    this.refuse("reverse");
  }
}
function createUnmodifiableEList(data, accessorName) {
  return createIndexedProxy(new UnmodifiableEList(data, accessorName));
}
let metamodelRevision = 0;
function bumpMetamodelRevision() {
  metamodelRevision++;
}
function currentMetamodelRevision() {
  return metamodelRevision;
}
function cachedDerivedList(cache, accessorName, compute) {
  const revision = currentMetamodelRevision();
  if (cache.value !== null && cache.value.revision === revision) {
    return cache.value.list;
  }
  const list = createUnmodifiableEList(compute(), accessorName);
  cache.value = { revision, list };
  return list;
}
class MetamodelEList extends BasicEList {
  constructor(owner, featureResolver) {
    super(owner, null);
    this.featureResolver = featureResolver ?? null;
  }
  getFeature() {
    if (this.feature === null && this.featureResolver !== null) {
      this.feature = this.featureResolver();
    }
    return this.feature;
  }
  dispatchNotification(eventType, oldValue, newValue, position) {
    bumpMetamodelRevision();
    super.dispatchNotification(eventType, oldValue, newValue, position);
  }
}
function createMetamodelEList(owner, featureResolver) {
  return createIndexedProxy(new MetamodelEList(owner, featureResolver));
}
function createIndexedProxy(list) {
  if (list[IS_INDEXED]) {
    return list;
  }
  return new Proxy(list, INDEX_ACCESS_HANDLER);
}
function createContainmentEList(owner, feature) {
  return createIndexedProxy(new EObjectContainmentEList(owner, feature));
}
function createEObjectEList(owner, feature) {
  return createIndexedProxy(new EObjectEList(owner, feature));
}
function createBasicEList(owner, feature) {
  return createIndexedProxy(new BasicEList(owner, feature));
}
class ResourceContentsEList extends BasicEList {
  constructor(resource) {
    super(null, null);
    this.resource = resource;
  }
  didAdd(index, element) {
    this.setResource(element);
    this.dispatchResourceNotification(NotificationType.ADD, null, element, index);
  }
  didAddMany(index, elements) {
    for (const element of elements) {
      this.setResource(element);
    }
    this.dispatchResourceNotification(NotificationType.ADD_MANY, null, elements, index);
  }
  didRemove(index, element) {
    this.unsetResource(element);
    this.dispatchResourceNotification(NotificationType.REMOVE, element, null, index);
  }
  didClear(oldData) {
    for (const element of oldData) {
      this.unsetResource(element);
    }
    if (oldData.length === 1) {
      this.dispatchResourceNotification(NotificationType.REMOVE, oldData[0], null, 0);
    } else if (oldData.length > 1) {
      this.dispatchResourceNotification(NotificationType.REMOVE_MANY, oldData, null, NO_INDEX);
    }
  }
  didSet(index, newElement, oldElement) {
    this.unsetResource(oldElement);
    this.setResource(newElement);
    this.dispatchResourceNotification(NotificationType.SET, oldElement, newElement, index);
  }
  setResource(element) {
    if (element && "eSetResource" in element) {
      element.eSetResource(this.resource);
    }
  }
  unsetResource(element) {
    if (element && "eSetResource" in element) {
      element.eSetResource(null);
    }
  }
  /**
   * Dispatch notification to the Resource (which is a Notifier).
   * Uses a synthetic 'contents' feature for the notification.
   */
  dispatchResourceNotification(eventType, oldValue, newValue, position) {
    if (!this.resource)
      return;
    if ("eDeliver" in this.resource && !this.resource.eDeliver()) {
      return;
    }
    if ("eAdapters" in this.resource) {
      const adapters = this.resource.eAdapters();
      if (!adapters || adapters.length === 0) {
        return;
      }
    } else {
      return;
    }
    const contentsFeature = { getName: () => "contents" };
    const notification = new NotificationImpl(this.resource, eventType, contentsFeature, oldValue, newValue, position);
    if ("eNotify" in this.resource) {
      this.resource.eNotify(notification);
    }
  }
}
function createResourceContentsEList(resource) {
  return createIndexedProxy(new ResourceContentsEList(resource));
}
var EPackageRegistry;
(function(EPackageRegistry2) {
  EPackageRegistry2.INSTANCE = createGlobalRegistry();
})(EPackageRegistry || (EPackageRegistry = {}));
function registerSubpackages(map, pkg) {
  for (const subPkg of pkg.getESubpackages()) {
    const subNsURI = subPkg.getNsURI();
    if (subNsURI) {
      map.set(subNsURI, subPkg);
    }
    registerSubpackages(map, subPkg);
  }
}
function requireNsURI(ePackage) {
  const nsURI = ePackage.getNsURI();
  if (!nsURI) {
    throw new Error(`Cannot register package '${ePackage.getName() ?? "<unnamed>"}': it has no nsURI.`);
  }
  return nsURI;
}
function createGlobalRegistry() {
  const map = /* @__PURE__ */ new Map();
  return {
    getEPackage(nsURI) {
      const value = map.get(nsURI);
      if (!value)
        return null;
      if ("getEPackage" in value) {
        return value.getEPackage();
      }
      return value;
    },
    getEFactory(nsURI) {
      const value = map.get(nsURI);
      if (!value)
        return null;
      if ("getEFactory" in value) {
        return value.getEFactory();
      }
      return value.getEFactoryInstance();
    },
    get(nsURI) {
      return map.get(nsURI) || null;
    },
    set(nsURI, value) {
      map.set(nsURI, value);
      if (!("getEPackage" in value)) {
        registerSubpackages(map, value);
      }
    },
    registerPackage(ePackage) {
      this.set(requireNsURI(ePackage), ePackage);
    },
    delete(nsURI) {
      return map.delete(nsURI);
    },
    has(nsURI) {
      return map.has(nsURI);
    },
    keys() {
      return map.keys();
    },
    values() {
      return map.values();
    }
  };
}
class URI {
  constructor(_scheme, _authority, _path, _query, _fragment) {
    this._scheme = _scheme;
    this._authority = _authority;
    this._path = _path;
    this._query = _query;
    this._fragment = _fragment;
  }
  /**
   * Creates a URI from a string.
   */
  static createURI(uriString) {
    if (!uriString) {
      return new URI(null, null, "", null, null);
    }
    let scheme = null;
    let authority = null;
    let path = null;
    let query = null;
    let fragment = null;
    let i2 = 0;
    uriString.length;
    const hashIndex = uriString.indexOf("#");
    if (hashIndex >= 0) {
      fragment = uriString.substring(hashIndex + 1);
      uriString = uriString.substring(0, hashIndex);
    }
    const questionIndex = uriString.indexOf("?");
    if (questionIndex >= 0) {
      query = uriString.substring(questionIndex + 1);
      uriString = uriString.substring(0, questionIndex);
    }
    const colonIndex = uriString.indexOf(":");
    if (colonIndex > 0) {
      let isScheme = true;
      for (let j2 = 0; j2 < colonIndex; j2++) {
        const c2 = uriString.charAt(j2);
        if (c2 === "/") {
          isScheme = false;
          break;
        }
      }
      if (isScheme) {
        scheme = uriString.substring(0, colonIndex);
        i2 = colonIndex + 1;
      }
    }
    if (uriString.startsWith("//", i2)) {
      const authorityStart = i2 + 2;
      let authorityEnd = authorityStart;
      while (authorityEnd < uriString.length && uriString.charAt(authorityEnd) !== "/") {
        authorityEnd++;
      }
      authority = uriString.substring(authorityStart, authorityEnd);
      i2 = authorityEnd;
    }
    if (i2 < uriString.length) {
      path = uriString.substring(i2);
    } else if (authority !== null) {
      path = "";
    }
    return new URI(scheme, authority, path, query, fragment);
  }
  /**
   * Creates a file URI.
   */
  static createFileURI(path) {
    return new URI("file", null, path, null, null);
  }
  /**
   * Creates a platform resource URI.
   */
  static createPlatformResourceURI(path, encode = true) {
    return new URI("platform", null, "/resource" + path, null, null);
  }
  /**
   * Returns the scheme, or null.
   */
  scheme() {
    return this._scheme;
  }
  /**
   * Returns the authority, or null.
   */
  authority() {
    return this._authority;
  }
  /**
   * Returns the path, or null.
   */
  path() {
    return this._path;
  }
  /**
   * Returns the query, or null.
   */
  query() {
    return this._query;
  }
  /**
   * Returns the fragment, or null.
   */
  fragment() {
    return this._fragment;
  }
  /**
   * Returns the host part of the authority, or null.
   */
  host() {
    if (!this._authority)
      return null;
    let auth = this._authority;
    const atIndex = auth.indexOf("@");
    if (atIndex >= 0) {
      auth = auth.substring(atIndex + 1);
    }
    const colonIndex = auth.lastIndexOf(":");
    if (colonIndex >= 0) {
      auth = auth.substring(0, colonIndex);
    }
    return auth;
  }
  /**
   * Returns the port part of the authority, or null.
   */
  port() {
    if (!this._authority)
      return null;
    let auth = this._authority;
    const atIndex = auth.indexOf("@");
    if (atIndex >= 0) {
      auth = auth.substring(atIndex + 1);
    }
    const colonIndex = auth.lastIndexOf(":");
    if (colonIndex >= 0) {
      return auth.substring(colonIndex + 1);
    }
    return null;
  }
  /**
   * Returns the userinfo part of the authority, or null.
   */
  userInfo() {
    if (!this._authority)
      return null;
    const atIndex = this._authority.indexOf("@");
    if (atIndex >= 0) {
      return this._authority.substring(0, atIndex);
    }
    return null;
  }
  /**
   * Returns the file extension, or null.
   */
  fileExtension() {
    if (!this._path)
      return null;
    const lastDot = this._path.lastIndexOf(".");
    const lastSlash = this._path.lastIndexOf("/");
    if (lastDot > lastSlash && lastDot > 0) {
      return this._path.substring(lastDot + 1);
    }
    return null;
  }
  /**
   * Returns a new URI with the given fragment.
   */
  appendFragment(fragment) {
    return new URI(this._scheme, this._authority, this._path, this._query, fragment);
  }
  /**
   * Returns a new URI with the given path segment appended.
   */
  appendSegment(segment) {
    let newPath = this._path || "";
    if (!newPath && this._authority) {
      newPath = "/";
    }
    if (newPath && !newPath.endsWith("/")) {
      newPath += "/";
    }
    newPath += segment;
    return new URI(this._scheme, this._authority, newPath, this._query, this._fragment);
  }
  /**
   * Returns a new URI with the specified number of segments trimmed from the end.
   */
  trimSegments(count) {
    if (!this._path || count <= 0)
      return this;
    const segments = this._path.split("/").filter((s2) => s2.length > 0);
    const newSegments = segments.slice(0, Math.max(0, segments.length - count));
    let newPath = this._path.startsWith("/") ? "/" : "";
    newPath += newSegments.join("/");
    if (this._path.endsWith("/") && newPath.length > 0) {
      newPath += "/";
    }
    return new URI(this._scheme, this._authority, newPath, this._query, this._fragment);
  }
  /**
   * Returns a new URI with the query removed.
   */
  trimQuery() {
    return new URI(this._scheme, this._authority, this._path, null, this._fragment);
  }
  /**
   * Returns a new URI with the fragment removed.
   */
  trimFragment() {
    return new URI(this._scheme, this._authority, this._path, this._query, null);
  }
  /**
   * Resolves this URI against a base URI (RFC 3986 with EMF modifications).
   */
  resolve(base) {
    if (this._scheme !== null) {
      return this;
    }
    let scheme = base._scheme;
    let authority = this._authority;
    let path = this._path;
    let query = this._query;
    if (authority !== null) {
      path = this.removeDotSegments(path || "");
    } else {
      authority = base._authority;
      if (!path || path === "") {
        if (this._query !== null) {
          path = base._path;
          if (path) {
            const lastSlash = path.lastIndexOf("/");
            if (lastSlash >= 0) {
              path = path.substring(0, lastSlash + 1);
            }
          }
        } else {
          path = base._path;
        }
        query = this._query !== null ? this._query : base._query;
      } else {
        if (path.startsWith("/")) ;
        else {
          path = this.mergePaths(base._path, path);
          path = this.removeDotSegments(path);
        }
      }
    }
    return new URI(scheme, authority, path, query, this._fragment);
  }
  /**
   * Deresolves this URI against a base URI.
   */
  deresolve(base) {
    if (this._scheme !== base._scheme) {
      return this;
    }
    if (this._authority === null !== (base._authority === null)) {
      return this;
    }
    if (this._authority !== null && base._authority !== null && this._authority !== base._authority) {
      return new URI(null, this._authority, this._path, this._query, this._fragment);
    }
    const thisPath = this._path || "";
    const basePath = base._path || "";
    if (thisPath === basePath) {
      if (this._query === base._query) {
        return new URI(null, null, null, null, this._fragment);
      }
      return new URI(null, null, "", this._query, this._fragment);
    }
    const thisSegments = thisPath.split("/");
    const baseSegments = basePath.split("/");
    let commonLength = 0;
    const minLength = Math.min(thisSegments.length, baseSegments.length);
    for (let i2 = 0; i2 < minLength - 1; i2++) {
      if (thisSegments[i2] === baseSegments[i2]) {
        commonLength++;
      } else {
        break;
      }
    }
    const upCount = baseSegments.length - commonLength - 1;
    const containsDots = thisPath.includes("/./") || thisPath.includes("/../") || thisPath.endsWith("/.") || thisPath.endsWith("/..");
    if (thisPath.startsWith("/") && (upCount >= 3 || containsDots && upCount > 0)) {
      return new URI(null, null, thisPath, this._query, this._fragment);
    }
    const relativeSegments = [];
    for (let i2 = 0; i2 < upCount; i2++) {
      relativeSegments.push("..");
    }
    for (let i2 = commonLength; i2 < thisSegments.length; i2++) {
      relativeSegments.push(thisSegments[i2]);
    }
    let relativePath = relativeSegments.join("/");
    if (relativePath === "" && thisPath.endsWith("/")) {
      relativePath = "./";
    }
    return new URI(null, null, relativePath, this._query, this._fragment);
  }
  /**
   * Merges a relative path with a base path.
   */
  mergePaths(basePath, relativePath) {
    if (!basePath) {
      return "/" + relativePath;
    }
    const lastSlash = basePath.lastIndexOf("/");
    if (lastSlash >= 0) {
      return basePath.substring(0, lastSlash + 1) + relativePath;
    }
    return relativePath;
  }
  /**
   * Removes dot segments from a path (RFC 3986).
   */
  removeDotSegments(path) {
    const output = [];
    const segments = path.split("/");
    const hasTrailingDot = segments.length > 0 && (segments[segments.length - 1] === "." || segments[segments.length - 1] === "..");
    for (let i2 = 0; i2 < segments.length; i2++) {
      const segment = segments[i2];
      if (segment === "..") {
        if (output.length > 0 && output[output.length - 1] !== "") {
          output.pop();
        }
      } else if (segment !== "." && !(segment === "" && i2 > 0 && i2 < segments.length - 1)) {
        output.push(segment);
      }
    }
    if (hasTrailingDot && output.length > 0) {
      output.push("");
    }
    return output.join("/");
  }
  /**
   * Returns the string representation.
   */
  toString() {
    let result = "";
    if (this._scheme)
      result += this._scheme + ":";
    if (this._authority)
      result += "//" + this._authority;
    if (this._path)
      result += this._path;
    if (this._query)
      result += "?" + this._query;
    if (this._fragment)
      result += "#" + this._fragment;
    return result;
  }
  /**
   * Returns whether this URI is hierarchical.
   */
  isHierarchical() {
    return this._authority !== null || this._path !== null && this._path.startsWith("/");
  }
  /**
   * Returns whether this URI is a file URI.
   */
  isFile() {
    return this._scheme === "file";
  }
  /**
   * Returns whether this URI is a platform resource URI.
   */
  isPlatformResource() {
    return this._scheme === "platform" && this._path !== null && this._path.startsWith("/resource");
  }
  /**
   * Returns whether this URI is a platform plugin URI.
   */
  isPlatformPlugin() {
    return this._scheme === "platform" && this._path !== null && this._path.startsWith("/plugin");
  }
  /**
   * Returns whether this URI is an archive URI.
   */
  isArchive() {
    return this._scheme === "archive" || this._scheme === "jar" || this._scheme === "zip";
  }
  /**
   * Returns whether this URI is relative (no scheme).
   */
  isRelative() {
    return this._scheme === null;
  }
}
function isAdapterInternal(adapter) {
  return "unsetTarget" in adapter && typeof adapter.unsetTarget === "function";
}
class BasicEObject {
  constructor() {
    this._eResource = null;
    this._eContainer = null;
    this._eContainerFeature = null;
    this._eProxyURI = null;
    this._eAdapters = [];
    this._eDeliver = true;
    this.eSettings = /* @__PURE__ */ new Map();
  }
  /**
   * Returns the containing resource
   */
  eResource() {
    return this._eContainer ? this._eContainer.eResource() : this._eResource;
  }
  /**
   * Sets the resource (internal use)
   */
  eSetResource(resource) {
    this._eResource = resource;
  }
  /**
   * Returns the containing object
   */
  eContainer() {
    return this._eContainer;
  }
  /**
   * Sets the container (internal use)
   */
  eSetContainer(container2, feature) {
    this._eContainer = container2;
    this._eContainerFeature = feature;
  }
  /**
   * Returns the containing feature
   */
  eContainingFeature() {
    return this._eContainerFeature;
  }
  /**
   * Returns the containment feature
   */
  eContainmentFeature() {
    return this._eContainerFeature;
  }
  /**
   * Returns all direct contents
   */
  eContents() {
    const contents = [];
    const eClass = this.eClass();
    const features = eClass.getEAllContainments();
    for (const feature of features) {
      const value = this.eGet(feature);
      if (value) {
        if (Array.isArray(value) || isEList(value)) {
          for (const item of value) {
            contents.push(item);
          }
        } else {
          contents.push(value);
        }
      }
    }
    return contents;
  }
  /**
   * Returns an iterator over all contents
   */
  eAllContents() {
    const contents = this.eContents();
    const allContents = [...contents];
    for (const content of contents) {
      const iterator = content.eAllContents();
      let result = iterator.next();
      while (!result.done) {
        allContents.push(result.value);
        result = iterator.next();
      }
    }
    return allContents[Symbol.iterator]();
  }
  /**
   * Returns whether this object is a proxy
   */
  eIsProxy() {
    return this._eProxyURI !== null;
  }
  /**
   * Returns the proxy URI if this object is a proxy
   */
  eProxyURI() {
    return this._eProxyURI;
  }
  /**
   * Sets the proxy URI
   */
  eSetProxyURI(uri) {
    this._eProxyURI = uri;
  }
  /**
   * Resolves a proxy to the actual object
   */
  eResolveProxy(proxy) {
    const proxyURI = proxy.eProxyURI();
    if (!proxyURI) {
      return proxy;
    }
    const resource = this.eResource();
    if (!resource) {
      return proxy;
    }
    const resourceSet = resource.getResourceSet();
    if (!resourceSet) {
      return proxy;
    }
    const uriStr = proxyURI.toString();
    const hashIndex = uriStr.indexOf("#");
    if (hashIndex > 0) {
      const resourceURIStr = uriStr.substring(0, hashIndex);
      const fragment = uriStr.substring(hashIndex + 1);
      let resourceURI;
      const currentURI = resource.getURI();
      if (currentURI && !resourceURIStr.includes("://")) {
        resourceURI = currentURI.resolve(URI.createURI(resourceURIStr));
      } else {
        resourceURI = URI.createURI(resourceURIStr);
      }
      const targetResource = resourceSet.getResource(resourceURI, true);
      if (targetResource) {
        const resolved2 = targetResource.getEObject(fragment);
        if (resolved2) {
          return resolved2;
        }
      }
      const packageRegistry = resourceSet.getPackageRegistry();
      const resolved = this.resolveFragmentViaPackageRegistry(packageRegistry, resourceURIStr, fragment, resourceSet);
      if (resolved) {
        return resolved;
      }
    } else if (hashIndex === 0) {
      const fragment = uriStr.substring(1);
      const resolved = resource.getEObject(fragment);
      if (resolved) {
        return resolved;
      }
    } else {
      const resolved = resource.getEObject(uriStr);
      if (resolved) {
        return resolved;
      }
    }
    return proxy;
  }
  /**
   * Resolve a fragment via the package registry.
   * When a proxy like foaf.ecore#//Agent can't be resolved through the resource
   * (e.g., because the resource is empty after package registration), try to
   * find the correct package in the registry.
   */
  resolveFragmentViaPackageRegistry(packageRegistry, resourceURIStr, fragment, resourceSet) {
    const directPkg = packageRegistry.getEPackage(resourceURIStr);
    if (directPkg) {
      const resolved = this.resolveFragmentInPackage(directPkg, fragment);
      if (resolved)
        return resolved;
    }
    let baseName = resourceURIStr;
    const lastSlash = baseName.lastIndexOf("/");
    if (lastSlash >= 0)
      baseName = baseName.substring(lastSlash + 1);
    const dotIndex = baseName.indexOf(".");
    if (dotIndex > 0)
      baseName = baseName.substring(0, dotIndex);
    if (baseName) {
      for (const nsKey of packageRegistry.keys()) {
        const pkg = packageRegistry.getEPackage(nsKey);
        if (pkg && pkg.getName() === baseName) {
          const resolved = this.resolveFragmentInPackage(pkg, fragment);
          if (resolved)
            return resolved;
        }
      }
    }
    return null;
  }
  /**
   * Resolve a fragment path (e.g., //Agent or //sub/Agent) within an EPackage.
   */
  resolveFragmentInPackage(pkg, fragment) {
    let path = fragment;
    while (path.startsWith("/"))
      path = path.substring(1);
    if (!path)
      return null;
    const segments = path.split("/");
    let currentPkg = pkg;
    for (let i2 = 0; i2 < segments.length - 1; i2++) {
      const subPackages = currentPkg.getESubpackages();
      let found = null;
      for (let j2 = 0; j2 < subPackages.length; j2++) {
        if (subPackages.get(j2).getName() === segments[i2]) {
          found = subPackages.get(j2);
          break;
        }
      }
      if (!found)
        return null;
      currentPkg = found;
    }
    const classifierName = segments[segments.length - 1];
    const classifier = currentPkg.getEClassifier(classifierName);
    return classifier ?? null;
  }
  /**
   * Returns the internal resource (bypassing container navigation)
   */
  eInternalResource() {
    return this._eResource;
  }
  /**
   * Returns the internal container
   */
  eInternalContainer() {
    return this._eContainer;
  }
  /**
   * Sets the container without notification
   */
  eBasicSetContainer(container2, containerFeatureID) {
    this._eContainer = container2;
  }
  // ===== Notifier interface implementation =====
  /**
   * Returns list of the adapters associated with this notifier.
   */
  eAdapters() {
    return this._eAdapters;
  }
  /**
   * Returns whether this notifier will deliver notifications to the adapters.
   */
  eDeliver() {
    return this._eDeliver;
  }
  /**
   * Sets whether this notifier will deliver notifications to the adapters.
   */
  eSetDeliver(deliver) {
    this._eDeliver = deliver;
  }
  /**
   * Notifies a change to a feature of this notifier as described by the notification.
   */
  eNotify(notification) {
    if (this._eDeliver && this._eAdapters.length > 0) {
      for (const adapter of this._eAdapters) {
        adapter.notifyChanged(notification);
      }
    }
  }
  /**
   * Adds an adapter to this notifier.
   */
  eAdapterAdd(adapter) {
    this._eAdapters.push(adapter);
    adapter.setTarget(this);
  }
  /**
   * Removes an adapter from this notifier.
   */
  eAdapterRemove(adapter) {
    const index = this._eAdapters.indexOf(adapter);
    if (index !== -1) {
      if (this._eDeliver) {
        const notification = new NotificationImpl(this, NotificationType.REMOVING_ADAPTER, null, adapter, null);
        adapter.notifyChanged(notification);
      }
      this._eAdapters.splice(index, 1);
      if (isAdapterInternal(adapter)) {
        adapter.unsetTarget(this);
      } else {
        adapter.setTarget(null);
      }
      return true;
    }
    return false;
  }
  // ===== End Notifier interface =====
  /**
   * Returns all cross references
   */
  eCrossReferences() {
    const refs = [];
    const eClass = this.eClass();
    const references = eClass.getEAllReferences();
    for (const ref2 of references) {
      if (!ref2.isContainment()) {
        const value = this.eGet(ref2);
        if (value) {
          if (Array.isArray(value) || isEList(value)) {
            for (const item of value) {
              refs.push(item);
            }
          } else {
            refs.push(value);
          }
        }
      }
    }
    return refs;
  }
  /**
   * Reflective get (default implementation)
   */
  eGet(feature) {
    const featureName = feature.getName() || "";
    return this.eSettings.get(featureName);
  }
  /**
   * Reflective set (default implementation)
   */
  eSet(feature, newValue) {
    const featureName = feature.getName() || "";
    const oldValue = this.eSettings.get(featureName);
    this.eSettings.set(featureName, newValue);
    if (feature instanceof Object && "isContainment" in feature) {
      const ref2 = feature;
      if (ref2.isContainment()) {
        if (oldValue && typeof oldValue === "object" && "eSetContainer" in oldValue) {
          oldValue.eSetContainer(null, null);
        }
        if (newValue && typeof newValue === "object" && "eSetContainer" in newValue) {
          if (Array.isArray(newValue)) {
            for (const obj of newValue) {
              if (obj && "eSetContainer" in obj) {
                obj.eSetContainer(this, ref2);
              }
            }
          } else {
            newValue.eSetContainer(this, ref2);
          }
        }
      }
    }
    if (this._eDeliver && this._eAdapters.length > 0) {
      const notification = new NotificationImpl(this, NotificationType.SET, feature, oldValue, newValue);
      this.eNotify(notification);
    }
  }
  /**
   * Reflective isSet
   */
  eIsSet(feature) {
    const featureName = feature.getName() || "";
    return this.eSettings.has(featureName);
  }
  /**
   * Reflective unset
   */
  eUnset(feature) {
    const featureName = feature.getName() || "";
    const oldValue = this.eSettings.get(featureName);
    this.eSettings.delete(featureName);
    if (feature instanceof Object && "isContainment" in feature) {
      const ref2 = feature;
      if (ref2.isContainment() && oldValue) {
        if (Array.isArray(oldValue)) {
          for (const obj of oldValue) {
            if (obj && "eSetContainer" in obj) {
              obj.eSetContainer(null, null);
            }
          }
        } else if (typeof oldValue === "object" && "eSetContainer" in oldValue) {
          oldValue.eSetContainer(null, null);
        }
      }
    }
    if (this._eDeliver && this._eAdapters.length > 0) {
      const notification = new NotificationImpl(this, NotificationType.UNSET, feature, oldValue, feature.getDefaultValue());
      this.eNotify(notification);
    }
  }
  /**
   * Invoke operation
   */
  eInvoke(operation, arguments_) {
    throw new Error(`Operation ${operation.getName()} not implemented`);
  }
  /**
   * Get direct class (for generated code)
   */
  eStaticClass() {
    return this.eClass();
  }
  /**
   * Get feature by ID
   */
  eFeature(featureID) {
    const eClass = this.eClass();
    return eClass.getEStructuralFeature(featureID);
  }
  /**
   * String representation
   */
  toString() {
    const eClass = this.eClass();
    const className = eClass?.getName() || "UnknownClass";
    return `${className}@${this.hashCode()}`;
  }
  /**
   * Simple hash code
   */
  hashCode() {
    return Math.random().toString(36).substring(7);
  }
}
class DynamicEObject extends BasicEObject {
  constructor(_eClass) {
    super();
    this._eClass = _eClass;
  }
  eClass() {
    return this._eClass;
  }
  /**
   * Override eGet to handle dynamic features and proxy resolution.
   * Returns EList for multi-valued features.
   */
  eGet(feature) {
    const featureName = feature.getName() || "";
    if (this.eSettings.has(featureName)) {
      let value = this.eSettings.get(featureName);
      if (!feature.isMany() && value && isInternalEObject(value) && value.eIsProxy()) {
        const resolved = this.eResolveProxy(value);
        if (resolved !== value) {
          this.eSettings.set(featureName, resolved);
          return resolved;
        }
      }
      return value;
    }
    if (feature.isMany()) {
      let list;
      if ("isContainment" in feature) {
        const ref2 = feature;
        if (ref2.isContainment()) {
          list = createContainmentEList(this, ref2);
        } else {
          list = createEObjectEList(this, ref2);
        }
      } else {
        list = createBasicEList(this, feature);
      }
      this.eSettings.set(featureName, list);
      return list;
    }
    const defaultValue = feature.getDefaultValue();
    return defaultValue !== void 0 ? defaultValue : null;
  }
}
class EMapContainmentEList extends EObjectContainmentEList {
  constructor(owner, feature, eMap) {
    super(owner, feature);
    this.eMap = eMap;
  }
  didAdd(index, element) {
    super.didAdd(index, element);
    this.eMap.entryAdded(element);
  }
  didAddMany(index, elements) {
    super.didAddMany(index, elements);
    for (const element of elements) {
      this.eMap.entryAdded(element);
    }
  }
  didRemove(index, element) {
    super.didRemove(index, element);
    this.eMap.entryRemoved(element);
  }
  didClear(oldData) {
    super.didClear(oldData);
    this.eMap.entriesCleared();
  }
  didSet(index, newElement, oldElement) {
    super.didSet(index, newElement, oldElement);
    this.eMap.entryRemoved(oldElement);
    this.eMap.entryAdded(newElement);
  }
}
class BasicEMap {
  constructor(owner, feature, entryEClass) {
    this.mapIndex = null;
    this._owner = owner;
    this.entryEClass = entryEClass;
    this.delegateList = new EMapContainmentEList(owner, feature, this);
    const keyF = entryEClass.getEStructuralFeature("key");
    const valueF = entryEClass.getEStructuralFeature("value");
    if (!keyF || !valueF) {
      throw new Error(`Entry EClass '${entryEClass.getName()}' must have 'key' and 'value' features`);
    }
    this.keyFeature = keyF;
    this.valueFeature = valueF;
    return createIndexedProxy(this);
  }
  /**
   * Rebuild map index from the delegate list contents.
   * Entries may have been added before their key/value were set (e.g. by XMI loader),
   * so we rebuild on every map-method access.
   */
  ensureIndex() {
    if (this.mapIndex === null) {
      this.mapIndex = /* @__PURE__ */ new Map();
    }
    this.mapIndex.clear();
    for (let i2 = 0; i2 < this.delegateList.size(); i2++) {
      const entry = this.delegateList.get(i2);
      const key = entry.eGet(this.keyFeature);
      if (key != null) {
        this.mapIndex.set(key, entry);
      }
    }
    return this.mapIndex;
  }
  // ===== Map methods =====
  getByKey(key) {
    const index = this.ensureIndex();
    const entry = index.get(key);
    if (!entry)
      return void 0;
    return entry.eGet(this.valueFeature);
  }
  putByKey(key, value) {
    const index = this.ensureIndex();
    const existing = index.get(key);
    if (existing) {
      const oldValue = existing.eGet(this.valueFeature);
      existing.eSet(this.valueFeature, value);
      return oldValue;
    }
    const pkg = this.entryEClass.getEPackage();
    let entry;
    if (pkg && pkg.getEFactoryInstance()) {
      entry = pkg.getEFactoryInstance().create(this.entryEClass);
    } else {
      entry = new DynamicEObject(this.entryEClass);
    }
    entry.eSet(this.keyFeature, key);
    entry.eSet(this.valueFeature, value);
    this.delegateList.add(entry);
    return void 0;
  }
  removeByKey(key) {
    const index = this.ensureIndex();
    const entry = index.get(key);
    if (!entry)
      return void 0;
    const oldValue = entry.eGet(this.valueFeature);
    this.delegateList.remove(entry);
    return oldValue;
  }
  containsKey(key) {
    return this.ensureIndex().has(key);
  }
  containsValue(value) {
    for (const entry of this.ensureIndex().values()) {
      if (entry.eGet(this.valueFeature) === value) {
        return true;
      }
    }
    return false;
  }
  keys() {
    return Array.from(this.ensureIndex().keys());
  }
  mapValues() {
    const result = [];
    for (const entry of this.ensureIndex().values()) {
      result.push(entry.eGet(this.valueFeature));
    }
    return result;
  }
  toMap() {
    const result = /* @__PURE__ */ new Map();
    for (const [key, entry] of this.ensureIndex()) {
      result.set(key, entry.eGet(this.valueFeature));
    }
    return result;
  }
  // ===== Index management callbacks (called by EMapContainmentEList) =====
  entryAdded(entry) {
    this.mapIndex = null;
  }
  entryRemoved(entry) {
    this.mapIndex = null;
  }
  entriesCleared() {
    this.mapIndex = null;
  }
  // ===== EList delegation =====
  size() {
    return this.delegateList.size();
  }
  get length() {
    return this.delegateList.length;
  }
  isEmpty() {
    return this.delegateList.isEmpty();
  }
  contains(element) {
    return this.delegateList.contains(element);
  }
  indexOf(element) {
    return this.delegateList.indexOf(element);
  }
  get(index) {
    return this.delegateList.get(index);
  }
  set(index, element) {
    return this.delegateList.set(index, element);
  }
  add(element) {
    return this.delegateList.add(element);
  }
  addAt(index, element) {
    this.delegateList.addAt(index, element);
  }
  addAll(elements) {
    return this.delegateList.addAll(elements);
  }
  addAllAt(index, elements) {
    return this.delegateList.addAllAt(index, elements);
  }
  remove(element) {
    return this.delegateList.remove(element);
  }
  removeAt(index) {
    return this.delegateList.removeAt(index);
  }
  clear() {
    this.delegateList.clear();
  }
  move(toIndex, fromIndex) {
    return this.delegateList.move(toIndex, fromIndex);
  }
  toArray() {
    return this.delegateList.toArray();
  }
  [Symbol.iterator]() {
    return this.delegateList[Symbol.iterator]();
  }
  push(...items) {
    return this.delegateList.push(...items);
  }
  filter(callback, thisArg) {
    return this.delegateList.filter(callback, thisArg);
  }
  map(callback, thisArg) {
    return this.delegateList.map(callback, thisArg);
  }
  forEach(callback, thisArg) {
    this.delegateList.forEach(callback, thisArg);
  }
  find(callback, thisArg) {
    return this.delegateList.find(callback, thisArg);
  }
  findIndex(callback, thisArg) {
    return this.delegateList.findIndex(callback, thisArg);
  }
  some(callback, thisArg) {
    return this.delegateList.some(callback, thisArg);
  }
  every(callback, thisArg) {
    return this.delegateList.every(callback, thisArg);
  }
  includes(element) {
    return this.delegateList.includes(element);
  }
  slice(start, end) {
    return this.delegateList.slice(start, end);
  }
  concat(...items) {
    return this.delegateList.concat(...items);
  }
  sort(compareFn) {
    this.delegateList.sort(compareFn);
    return this;
  }
  reverse() {
    this.delegateList.reverse();
    return this;
  }
  join(separator) {
    return this.delegateList.join(separator);
  }
  at(index) {
    return this.delegateList.at(index);
  }
  lastIndexOf(element) {
    return this.delegateList.lastIndexOf(element);
  }
  flatMap(callback, thisArg) {
    return this.delegateList.flatMap(callback, thisArg);
  }
  toJSON() {
    return this.delegateList.toJSON();
  }
}
function createEMap(owner, feature, entryEClass) {
  return new BasicEMap(owner, feature, entryEClass);
}
var Resource;
(function(Resource2) {
  Resource2.INSTANCE_FACTORY_REGISTRY = createGlobalFactoryRegistry();
})(Resource || (Resource = {}));
function createGlobalFactoryRegistry() {
  const extensionMap2 = /* @__PURE__ */ new Map();
  const protocolMap = /* @__PURE__ */ new Map();
  const contentTypeMap = /* @__PURE__ */ new Map();
  return {
    getFactory(uri) {
      const protocol = uri.scheme();
      if (protocol && protocolMap.has(protocol)) {
        return protocolMap.get(protocol);
      }
      const extension = uri.fileExtension();
      if (extension && extensionMap2.has(extension)) {
        return extensionMap2.get(extension);
      }
      return null;
    },
    getExtensionToFactoryMap() {
      return extensionMap2;
    },
    getProtocolToFactoryMap() {
      return protocolMap;
    },
    getContentTypeToFactoryMap() {
      return contentTypeMap;
    }
  };
}
class BasicResource {
  constructor(uri) {
    this.resourceSet = null;
    this.loaded = false;
    this.modified = false;
    this.errors = [];
    this.warnings = [];
    this._eAdapters = [];
    this._eDeliver = true;
    this.uri = uri || null;
    this.contents = createResourceContentsEList(this);
  }
  // ===== Notifier interface implementation =====
  /**
   * Returns the list of adapters associated with this resource.
   */
  eAdapters() {
    return this._eAdapters;
  }
  /**
   * Returns whether this resource will deliver notifications to adapters.
   */
  eDeliver() {
    return this._eDeliver;
  }
  /**
   * Sets whether this resource will deliver notifications to adapters.
   */
  eSetDeliver(deliver) {
    this._eDeliver = deliver;
  }
  /**
   * Notifies all adapters of a change.
   */
  eNotify(notification) {
    if (this._eDeliver && this._eAdapters.length > 0) {
      for (const adapter of this._eAdapters) {
        adapter.notifyChanged(notification);
      }
    }
  }
  getResourceSet() {
    return this.resourceSet;
  }
  setResourceSet(resourceSet) {
    this.resourceSet = resourceSet;
  }
  getURI() {
    return this.uri;
  }
  setURI(uri) {
    this.uri = uri;
  }
  getContents() {
    return this.contents;
  }
  getAllContents() {
    const allContents = [...this.contents];
    for (const root of this.contents) {
      const iterator = root.eAllContents();
      let result = iterator.next();
      while (!result.done) {
        allContents.push(result.value);
        result = iterator.next();
      }
    }
    return allContents[Symbol.iterator]();
  }
  getEObject(uriFragment) {
    if (uriFragment.startsWith("/")) {
      const allParts = uriFragment.split("/");
      const isDoubleSlash = allParts.length >= 2 && allParts[0] === "" && allParts[1] === "";
      const parts = allParts.filter((p2) => p2.length > 0);
      if (parts.length === 0) {
        return this.contents.size() > 0 ? this.contents.get(0) : null;
      }
      let current = null;
      let startIndex = 0;
      if (isDoubleSlash) {
        current = this.contents.size() > 0 ? this.contents.get(0) : null;
        if (!current) {
          return null;
        }
        if (parts[0].startsWith("@")) {
          current = this.eObjectForURIFragmentSegment(current, parts[0]);
        } else {
          current = this.findByNameInContents(current, parts[0]);
        }
        startIndex = 1;
        if (!current) {
          return null;
        }
      }
      for (let i2 = startIndex; i2 < parts.length; i2++) {
        const part = parts[i2];
        const index = parseInt(part, 10);
        if (current === null) {
          if (!isNaN(index)) {
            current = index < this.contents.size() ? this.contents.get(index) : null;
          } else {
            current = this.findByName(this.contents.toArray(), part);
            if (!current && this.contents.size() > 0) {
              current = this.findByNameInContents(this.contents.get(0), part);
            }
          }
        } else {
          if (!isNaN(index)) {
            const children = current.eContents();
            current = children[index] || null;
          } else {
            current = this.navigateByNameOrFeature(current, part);
          }
        }
        if (!current) {
          return null;
        }
      }
      return current;
    }
    return this.getEObjectByID(uriFragment);
  }
  /**
   * Find a named element in an object's eContents().
   * This is used for EMF-style fragment navigation like //SortOrder
   * which searches for named elements within a container (e.g., EPackage's eClassifiers).
   */
  findByNameInContents(container2, name) {
    const contents = container2.eContents();
    return this.findByName(contents, name);
  }
  /**
   * Find an object by name in a list of objects.
   * Looks for 'name' via:
   * 1. getName() method (for static typed objects)
   * 2. eGet(nameFeature) (for dynamic objects loaded from XMI)
   * 3. Direct name property
   */
  findByName(objects, name) {
    for (const obj of objects) {
      if ("getName" in obj && typeof obj.getName === "function") {
        if (obj.getName() === name) {
          return obj;
        }
      }
      try {
        const eClass = obj.eClass();
        if (eClass) {
          const nameFeature = eClass.getEStructuralFeature("name");
          if (nameFeature) {
            const nameValue = obj.eGet(nameFeature);
            if (nameValue === name) {
              return obj;
            }
          }
        }
      } catch {
      }
      if ("name" in obj && obj.name === name) {
        return obj;
      }
    }
    return null;
  }
  /**
   * Navigate from an object to a child by name or feature.
   */
  navigateByNameOrFeature(obj, nameOrFeature) {
    if (nameOrFeature.startsWith("@")) {
      return this.eObjectForURIFragmentSegment(obj, nameOrFeature);
    }
    const contents = obj.eContents();
    const byName = this.findByName(contents, nameOrFeature);
    if (byName) {
      return byName;
    }
    const eClass = obj.eClass();
    const feature = eClass.getEStructuralFeature(nameOrFeature);
    if (feature) {
      const value = obj.eGet(feature);
      if (value && typeof value === "object" && "eClass" in value) {
        return value;
      }
      if (Array.isArray(value) && value.length > 0) {
        return value[0];
      }
    }
    return null;
  }
  /**
   * Resolve a @feature.index URI fragment segment (Java EMF format).
   * Formats:
   * - @featureName.index → eGet(feature)[index] (multi-valued)
   * - @featureName → eGet(feature) (single-valued)
   */
  eObjectForURIFragmentSegment(obj, segment) {
    const body = segment.substring(1);
    const eClass = obj.eClass();
    const lastChar = body.charAt(body.length - 1);
    let featureName;
    let index = -1;
    if (lastChar >= "0" && lastChar <= "9") {
      const dotIndex = body.lastIndexOf(".");
      if (dotIndex > 0) {
        const possibleIndex = parseInt(body.substring(dotIndex + 1), 10);
        if (!isNaN(possibleIndex)) {
          featureName = body.substring(0, dotIndex);
          index = possibleIndex;
        } else {
          featureName = body;
        }
      } else {
        featureName = body;
      }
    } else {
      featureName = body;
    }
    const feature = eClass.getEStructuralFeature(featureName);
    if (!feature)
      return null;
    const value = obj.eGet(feature);
    if (value === null || value === void 0)
      return null;
    if (index >= 0) {
      if (Array.isArray(value)) {
        return value[index] ?? null;
      }
      if (typeof value === "object" && "get" in value && typeof value.get === "function") {
        return value.get(index) ?? null;
      }
      return null;
    }
    if (typeof value === "object" && "eClass" in value) {
      return value;
    }
    return null;
  }
  getURIFragment(eObject) {
    const path = [];
    let current = eObject;
    while (current) {
      const container2 = current.eContainer();
      if (!container2) {
        const index2 = this.contents.indexOf(current);
        if (index2 >= 0) {
          path.unshift(index2);
        }
        break;
      }
      const siblings = container2.eContents();
      const index = siblings.indexOf(current);
      if (index >= 0) {
        path.unshift(index);
      }
      current = container2;
    }
    return "/" + path.join("/");
  }
  async save(options) {
    this.errors = [];
    this.warnings = [];
    try {
      const data = this.serialize();
      this.modified = false;
    } catch (err) {
      this.errors.push({
        message: err instanceof Error ? err.message : String(err)
      });
      throw err;
    }
  }
  async load(options) {
    this.errors = [];
    this.warnings = [];
    try {
      this.loaded = true;
    } catch (err) {
      this.errors.push({
        message: err instanceof Error ? err.message : String(err)
      });
      throw err;
    }
  }
  isLoaded() {
    return this.loaded;
  }
  unload() {
    this.contents.clear();
    this.loaded = false;
    this.modified = false;
    this.errors = [];
    this.warnings = [];
  }
  isModified() {
    return this.modified;
  }
  setModified(isModified) {
    this.modified = isModified;
  }
  getErrors() {
    return this.errors;
  }
  getWarnings() {
    return this.warnings;
  }
  /**
   * Helper to find object by ID attribute
   */
  getEObjectByID(id) {
    const iterator = this.getAllContents();
    let result = iterator.next();
    while (!result.done) {
      const obj = result.value;
      const eClass = obj.eClass();
      const idAttr = eClass.getEIDAttribute();
      if (idAttr) {
        const value = obj.eGet(idAttr);
        if (value === id) {
          return obj;
        }
      }
      result = iterator.next();
    }
    return null;
  }
  /**
   * Simple JSON serialization
   */
  serialize() {
    return {
      uri: this.uri?.toString(),
      contents: this.contents.toArray().map((obj) => this.serializeObject(obj))
    };
  }
  serializeObject(obj) {
    const eClass = obj.eClass();
    const data = {
      eClass: eClass.getName()
    };
    for (const feature of eClass.getEAllStructuralFeatures()) {
      if (feature.isTransient())
        continue;
      const value = obj.eGet(feature);
      if (value !== null && value !== void 0) {
        if (feature.isMany() && Array.isArray(value)) {
          data[feature.getName()] = value.map((v2) => typeof v2 === "object" && "eClass" in v2 ? this.serializeObject(v2) : v2);
        } else {
          data[feature.getName()] = typeof value === "object" && "eClass" in value ? this.serializeObject(value) : value;
        }
      }
    }
    return data;
  }
}
var sax$1 = {};
const __viteBrowserExternal = {};
const __viteBrowserExternal$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __viteBrowserExternal
}, Symbol.toStringTag, { value: "Module" }));
const require$$0 = /* @__PURE__ */ getAugmentedNamespace(__viteBrowserExternal$1);
var string_decoder = {};
var safeBuffer = { exports: {} };
var buffer = {};
var base64Js = {};
var hasRequiredBase64Js;
function requireBase64Js() {
  if (hasRequiredBase64Js) return base64Js;
  hasRequiredBase64Js = 1;
  base64Js.byteLength = byteLength;
  base64Js.toByteArray = toByteArray;
  base64Js.fromByteArray = fromByteArray;
  var lookup = [];
  var revLookup = [];
  var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
  var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  for (var i2 = 0, len = code.length; i2 < len; ++i2) {
    lookup[i2] = code[i2];
    revLookup[code.charCodeAt(i2)] = i2;
  }
  revLookup["-".charCodeAt(0)] = 62;
  revLookup["_".charCodeAt(0)] = 63;
  function getLens(b64) {
    var len2 = b64.length;
    if (len2 % 4 > 0) {
      throw new Error("Invalid string. Length must be a multiple of 4");
    }
    var validLen = b64.indexOf("=");
    if (validLen === -1) validLen = len2;
    var placeHoldersLen = validLen === len2 ? 0 : 4 - validLen % 4;
    return [validLen, placeHoldersLen];
  }
  function byteLength(b64) {
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
  }
  function _byteLength(b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
  }
  function toByteArray(b64) {
    var tmp;
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0;
    var len2 = placeHoldersLen > 0 ? validLen - 4 : validLen;
    var i3;
    for (i3 = 0; i3 < len2; i3 += 4) {
      tmp = revLookup[b64.charCodeAt(i3)] << 18 | revLookup[b64.charCodeAt(i3 + 1)] << 12 | revLookup[b64.charCodeAt(i3 + 2)] << 6 | revLookup[b64.charCodeAt(i3 + 3)];
      arr[curByte++] = tmp >> 16 & 255;
      arr[curByte++] = tmp >> 8 & 255;
      arr[curByte++] = tmp & 255;
    }
    if (placeHoldersLen === 2) {
      tmp = revLookup[b64.charCodeAt(i3)] << 2 | revLookup[b64.charCodeAt(i3 + 1)] >> 4;
      arr[curByte++] = tmp & 255;
    }
    if (placeHoldersLen === 1) {
      tmp = revLookup[b64.charCodeAt(i3)] << 10 | revLookup[b64.charCodeAt(i3 + 1)] << 4 | revLookup[b64.charCodeAt(i3 + 2)] >> 2;
      arr[curByte++] = tmp >> 8 & 255;
      arr[curByte++] = tmp & 255;
    }
    return arr;
  }
  function tripletToBase64(num) {
    return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
  }
  function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for (var i3 = start; i3 < end; i3 += 3) {
      tmp = (uint8[i3] << 16 & 16711680) + (uint8[i3 + 1] << 8 & 65280) + (uint8[i3 + 2] & 255);
      output.push(tripletToBase64(tmp));
    }
    return output.join("");
  }
  function fromByteArray(uint8) {
    var tmp;
    var len2 = uint8.length;
    var extraBytes = len2 % 3;
    var parts = [];
    var maxChunkLength = 16383;
    for (var i3 = 0, len22 = len2 - extraBytes; i3 < len22; i3 += maxChunkLength) {
      parts.push(encodeChunk(uint8, i3, i3 + maxChunkLength > len22 ? len22 : i3 + maxChunkLength));
    }
    if (extraBytes === 1) {
      tmp = uint8[len2 - 1];
      parts.push(
        lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "=="
      );
    } else if (extraBytes === 2) {
      tmp = (uint8[len2 - 2] << 8) + uint8[len2 - 1];
      parts.push(
        lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "="
      );
    }
    return parts.join("");
  }
  return base64Js;
}
var ieee754 = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
var hasRequiredIeee754;
function requireIeee754() {
  if (hasRequiredIeee754) return ieee754;
  hasRequiredIeee754 = 1;
  ieee754.read = function(buffer2, offset, isLE, mLen, nBytes) {
    var e2, m2;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i2 = isLE ? nBytes - 1 : 0;
    var d2 = isLE ? -1 : 1;
    var s2 = buffer2[offset + i2];
    i2 += d2;
    e2 = s2 & (1 << -nBits) - 1;
    s2 >>= -nBits;
    nBits += eLen;
    for (; nBits > 0; e2 = e2 * 256 + buffer2[offset + i2], i2 += d2, nBits -= 8) {
    }
    m2 = e2 & (1 << -nBits) - 1;
    e2 >>= -nBits;
    nBits += mLen;
    for (; nBits > 0; m2 = m2 * 256 + buffer2[offset + i2], i2 += d2, nBits -= 8) {
    }
    if (e2 === 0) {
      e2 = 1 - eBias;
    } else if (e2 === eMax) {
      return m2 ? NaN : (s2 ? -1 : 1) * Infinity;
    } else {
      m2 = m2 + Math.pow(2, mLen);
      e2 = e2 - eBias;
    }
    return (s2 ? -1 : 1) * m2 * Math.pow(2, e2 - mLen);
  };
  ieee754.write = function(buffer2, value, offset, isLE, mLen, nBytes) {
    var e2, m2, c2;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i2 = isLE ? 0 : nBytes - 1;
    var d2 = isLE ? 1 : -1;
    var s2 = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
      m2 = isNaN(value) ? 1 : 0;
      e2 = eMax;
    } else {
      e2 = Math.floor(Math.log(value) / Math.LN2);
      if (value * (c2 = Math.pow(2, -e2)) < 1) {
        e2--;
        c2 *= 2;
      }
      if (e2 + eBias >= 1) {
        value += rt / c2;
      } else {
        value += rt * Math.pow(2, 1 - eBias);
      }
      if (value * c2 >= 2) {
        e2++;
        c2 /= 2;
      }
      if (e2 + eBias >= eMax) {
        m2 = 0;
        e2 = eMax;
      } else if (e2 + eBias >= 1) {
        m2 = (value * c2 - 1) * Math.pow(2, mLen);
        e2 = e2 + eBias;
      } else {
        m2 = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
        e2 = 0;
      }
    }
    for (; mLen >= 8; buffer2[offset + i2] = m2 & 255, i2 += d2, m2 /= 256, mLen -= 8) {
    }
    e2 = e2 << mLen | m2;
    eLen += mLen;
    for (; eLen > 0; buffer2[offset + i2] = e2 & 255, i2 += d2, e2 /= 256, eLen -= 8) {
    }
    buffer2[offset + i2 - d2] |= s2 * 128;
  };
  return ieee754;
}
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
var hasRequiredBuffer;
function requireBuffer() {
  if (hasRequiredBuffer) return buffer;
  hasRequiredBuffer = 1;
  (function(exports$1) {
    const base64 = requireBase64Js();
    const ieee7542 = requireIeee754();
    const customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" ? Symbol["for"]("nodejs.util.inspect.custom") : null;
    exports$1.Buffer = Buffer2;
    exports$1.SlowBuffer = SlowBuffer;
    exports$1.INSPECT_MAX_BYTES = 50;
    const K_MAX_LENGTH = 2147483647;
    exports$1.kMaxLength = K_MAX_LENGTH;
    Buffer2.TYPED_ARRAY_SUPPORT = typedArraySupport();
    if (!Buffer2.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") {
      console.error(
        "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
      );
    }
    function typedArraySupport() {
      try {
        const arr = new Uint8Array(1);
        const proto = { foo: function() {
          return 42;
        } };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
      } catch (e2) {
        return false;
      }
    }
    Object.defineProperty(Buffer2.prototype, "parent", {
      enumerable: true,
      get: function() {
        if (!Buffer2.isBuffer(this)) return void 0;
        return this.buffer;
      }
    });
    Object.defineProperty(Buffer2.prototype, "offset", {
      enumerable: true,
      get: function() {
        if (!Buffer2.isBuffer(this)) return void 0;
        return this.byteOffset;
      }
    });
    function createBuffer(length) {
      if (length > K_MAX_LENGTH) {
        throw new RangeError('The value "' + length + '" is invalid for option "size"');
      }
      const buf = new Uint8Array(length);
      Object.setPrototypeOf(buf, Buffer2.prototype);
      return buf;
    }
    function Buffer2(arg, encodingOrOffset, length) {
      if (typeof arg === "number") {
        if (typeof encodingOrOffset === "string") {
          throw new TypeError(
            'The "string" argument must be of type string. Received type number'
          );
        }
        return allocUnsafe(arg);
      }
      return from(arg, encodingOrOffset, length);
    }
    Buffer2.poolSize = 8192;
    function from(value, encodingOrOffset, length) {
      if (typeof value === "string") {
        return fromString(value, encodingOrOffset);
      }
      if (ArrayBuffer.isView(value)) {
        return fromArrayView(value);
      }
      if (value == null) {
        throw new TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value
        );
      }
      if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) {
        return fromArrayBuffer(value, encodingOrOffset, length);
      }
      if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) {
        return fromArrayBuffer(value, encodingOrOffset, length);
      }
      if (typeof value === "number") {
        throw new TypeError(
          'The "value" argument must not be of type number. Received type number'
        );
      }
      const valueOf = value.valueOf && value.valueOf();
      if (valueOf != null && valueOf !== value) {
        return Buffer2.from(valueOf, encodingOrOffset, length);
      }
      const b2 = fromObject(value);
      if (b2) return b2;
      if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") {
        return Buffer2.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
      }
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value
      );
    }
    Buffer2.from = function(value, encodingOrOffset, length) {
      return from(value, encodingOrOffset, length);
    };
    Object.setPrototypeOf(Buffer2.prototype, Uint8Array.prototype);
    Object.setPrototypeOf(Buffer2, Uint8Array);
    function assertSize(size) {
      if (typeof size !== "number") {
        throw new TypeError('"size" argument must be of type number');
      } else if (size < 0) {
        throw new RangeError('The value "' + size + '" is invalid for option "size"');
      }
    }
    function alloc(size, fill, encoding) {
      assertSize(size);
      if (size <= 0) {
        return createBuffer(size);
      }
      if (fill !== void 0) {
        return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
      }
      return createBuffer(size);
    }
    Buffer2.alloc = function(size, fill, encoding) {
      return alloc(size, fill, encoding);
    };
    function allocUnsafe(size) {
      assertSize(size);
      return createBuffer(size < 0 ? 0 : checked(size) | 0);
    }
    Buffer2.allocUnsafe = function(size) {
      return allocUnsafe(size);
    };
    Buffer2.allocUnsafeSlow = function(size) {
      return allocUnsafe(size);
    };
    function fromString(string, encoding) {
      if (typeof encoding !== "string" || encoding === "") {
        encoding = "utf8";
      }
      if (!Buffer2.isEncoding(encoding)) {
        throw new TypeError("Unknown encoding: " + encoding);
      }
      const length = byteLength(string, encoding) | 0;
      let buf = createBuffer(length);
      const actual = buf.write(string, encoding);
      if (actual !== length) {
        buf = buf.slice(0, actual);
      }
      return buf;
    }
    function fromArrayLike(array) {
      const length = array.length < 0 ? 0 : checked(array.length) | 0;
      const buf = createBuffer(length);
      for (let i2 = 0; i2 < length; i2 += 1) {
        buf[i2] = array[i2] & 255;
      }
      return buf;
    }
    function fromArrayView(arrayView) {
      if (isInstance(arrayView, Uint8Array)) {
        const copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
      }
      return fromArrayLike(arrayView);
    }
    function fromArrayBuffer(array, byteOffset, length) {
      if (byteOffset < 0 || array.byteLength < byteOffset) {
        throw new RangeError('"offset" is outside of buffer bounds');
      }
      if (array.byteLength < byteOffset + (length || 0)) {
        throw new RangeError('"length" is outside of buffer bounds');
      }
      let buf;
      if (byteOffset === void 0 && length === void 0) {
        buf = new Uint8Array(array);
      } else if (length === void 0) {
        buf = new Uint8Array(array, byteOffset);
      } else {
        buf = new Uint8Array(array, byteOffset, length);
      }
      Object.setPrototypeOf(buf, Buffer2.prototype);
      return buf;
    }
    function fromObject(obj) {
      if (Buffer2.isBuffer(obj)) {
        const len = checked(obj.length) | 0;
        const buf = createBuffer(len);
        if (buf.length === 0) {
          return buf;
        }
        obj.copy(buf, 0, 0, len);
        return buf;
      }
      if (obj.length !== void 0) {
        if (typeof obj.length !== "number" || numberIsNaN(obj.length)) {
          return createBuffer(0);
        }
        return fromArrayLike(obj);
      }
      if (obj.type === "Buffer" && Array.isArray(obj.data)) {
        return fromArrayLike(obj.data);
      }
    }
    function checked(length) {
      if (length >= K_MAX_LENGTH) {
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
      }
      return length | 0;
    }
    function SlowBuffer(length) {
      if (+length != length) {
        length = 0;
      }
      return Buffer2.alloc(+length);
    }
    Buffer2.isBuffer = function isBuffer(b2) {
      return b2 != null && b2._isBuffer === true && b2 !== Buffer2.prototype;
    };
    Buffer2.compare = function compare(a2, b2) {
      if (isInstance(a2, Uint8Array)) a2 = Buffer2.from(a2, a2.offset, a2.byteLength);
      if (isInstance(b2, Uint8Array)) b2 = Buffer2.from(b2, b2.offset, b2.byteLength);
      if (!Buffer2.isBuffer(a2) || !Buffer2.isBuffer(b2)) {
        throw new TypeError(
          'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
        );
      }
      if (a2 === b2) return 0;
      let x2 = a2.length;
      let y2 = b2.length;
      for (let i2 = 0, len = Math.min(x2, y2); i2 < len; ++i2) {
        if (a2[i2] !== b2[i2]) {
          x2 = a2[i2];
          y2 = b2[i2];
          break;
        }
      }
      if (x2 < y2) return -1;
      if (y2 < x2) return 1;
      return 0;
    };
    Buffer2.isEncoding = function isEncoding(encoding) {
      switch (String(encoding).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return true;
        default:
          return false;
      }
    };
    Buffer2.concat = function concat(list, length) {
      if (!Array.isArray(list)) {
        throw new TypeError('"list" argument must be an Array of Buffers');
      }
      if (list.length === 0) {
        return Buffer2.alloc(0);
      }
      let i2;
      if (length === void 0) {
        length = 0;
        for (i2 = 0; i2 < list.length; ++i2) {
          length += list[i2].length;
        }
      }
      const buffer2 = Buffer2.allocUnsafe(length);
      let pos = 0;
      for (i2 = 0; i2 < list.length; ++i2) {
        let buf = list[i2];
        if (isInstance(buf, Uint8Array)) {
          if (pos + buf.length > buffer2.length) {
            if (!Buffer2.isBuffer(buf)) buf = Buffer2.from(buf);
            buf.copy(buffer2, pos);
          } else {
            Uint8Array.prototype.set.call(
              buffer2,
              buf,
              pos
            );
          }
        } else if (!Buffer2.isBuffer(buf)) {
          throw new TypeError('"list" argument must be an Array of Buffers');
        } else {
          buf.copy(buffer2, pos);
        }
        pos += buf.length;
      }
      return buffer2;
    };
    function byteLength(string, encoding) {
      if (Buffer2.isBuffer(string)) {
        return string.length;
      }
      if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
        return string.byteLength;
      }
      if (typeof string !== "string") {
        throw new TypeError(
          'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string
        );
      }
      const len = string.length;
      const mustMatch = arguments.length > 2 && arguments[2] === true;
      if (!mustMatch && len === 0) return 0;
      let loweredCase = false;
      for (; ; ) {
        switch (encoding) {
          case "ascii":
          case "latin1":
          case "binary":
            return len;
          case "utf8":
          case "utf-8":
            return utf8ToBytes(string).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return len * 2;
          case "hex":
            return len >>> 1;
          case "base64":
            return base64ToBytes(string).length;
          default:
            if (loweredCase) {
              return mustMatch ? -1 : utf8ToBytes(string).length;
            }
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    }
    Buffer2.byteLength = byteLength;
    function slowToString(encoding, start, end) {
      let loweredCase = false;
      if (start === void 0 || start < 0) {
        start = 0;
      }
      if (start > this.length) {
        return "";
      }
      if (end === void 0 || end > this.length) {
        end = this.length;
      }
      if (end <= 0) {
        return "";
      }
      end >>>= 0;
      start >>>= 0;
      if (end <= start) {
        return "";
      }
      if (!encoding) encoding = "utf8";
      while (true) {
        switch (encoding) {
          case "hex":
            return hexSlice(this, start, end);
          case "utf8":
          case "utf-8":
            return utf8Slice(this, start, end);
          case "ascii":
            return asciiSlice(this, start, end);
          case "latin1":
          case "binary":
            return latin1Slice(this, start, end);
          case "base64":
            return base64Slice(this, start, end);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return utf16leSlice(this, start, end);
          default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = (encoding + "").toLowerCase();
            loweredCase = true;
        }
      }
    }
    Buffer2.prototype._isBuffer = true;
    function swap(b2, n2, m2) {
      const i2 = b2[n2];
      b2[n2] = b2[m2];
      b2[m2] = i2;
    }
    Buffer2.prototype.swap16 = function swap16() {
      const len = this.length;
      if (len % 2 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      }
      for (let i2 = 0; i2 < len; i2 += 2) {
        swap(this, i2, i2 + 1);
      }
      return this;
    };
    Buffer2.prototype.swap32 = function swap32() {
      const len = this.length;
      if (len % 4 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      }
      for (let i2 = 0; i2 < len; i2 += 4) {
        swap(this, i2, i2 + 3);
        swap(this, i2 + 1, i2 + 2);
      }
      return this;
    };
    Buffer2.prototype.swap64 = function swap64() {
      const len = this.length;
      if (len % 8 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      }
      for (let i2 = 0; i2 < len; i2 += 8) {
        swap(this, i2, i2 + 7);
        swap(this, i2 + 1, i2 + 6);
        swap(this, i2 + 2, i2 + 5);
        swap(this, i2 + 3, i2 + 4);
      }
      return this;
    };
    Buffer2.prototype.toString = function toString() {
      const length = this.length;
      if (length === 0) return "";
      if (arguments.length === 0) return utf8Slice(this, 0, length);
      return slowToString.apply(this, arguments);
    };
    Buffer2.prototype.toLocaleString = Buffer2.prototype.toString;
    Buffer2.prototype.equals = function equals(b2) {
      if (!Buffer2.isBuffer(b2)) throw new TypeError("Argument must be a Buffer");
      if (this === b2) return true;
      return Buffer2.compare(this, b2) === 0;
    };
    Buffer2.prototype.inspect = function inspect() {
      let str = "";
      const max = exports$1.INSPECT_MAX_BYTES;
      str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
      if (this.length > max) str += " ... ";
      return "<Buffer " + str + ">";
    };
    if (customInspectSymbol) {
      Buffer2.prototype[customInspectSymbol] = Buffer2.prototype.inspect;
    }
    Buffer2.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
      if (isInstance(target, Uint8Array)) {
        target = Buffer2.from(target, target.offset, target.byteLength);
      }
      if (!Buffer2.isBuffer(target)) {
        throw new TypeError(
          'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target
        );
      }
      if (start === void 0) {
        start = 0;
      }
      if (end === void 0) {
        end = target ? target.length : 0;
      }
      if (thisStart === void 0) {
        thisStart = 0;
      }
      if (thisEnd === void 0) {
        thisEnd = this.length;
      }
      if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
        throw new RangeError("out of range index");
      }
      if (thisStart >= thisEnd && start >= end) {
        return 0;
      }
      if (thisStart >= thisEnd) {
        return -1;
      }
      if (start >= end) {
        return 1;
      }
      start >>>= 0;
      end >>>= 0;
      thisStart >>>= 0;
      thisEnd >>>= 0;
      if (this === target) return 0;
      let x2 = thisEnd - thisStart;
      let y2 = end - start;
      const len = Math.min(x2, y2);
      const thisCopy = this.slice(thisStart, thisEnd);
      const targetCopy = target.slice(start, end);
      for (let i2 = 0; i2 < len; ++i2) {
        if (thisCopy[i2] !== targetCopy[i2]) {
          x2 = thisCopy[i2];
          y2 = targetCopy[i2];
          break;
        }
      }
      if (x2 < y2) return -1;
      if (y2 < x2) return 1;
      return 0;
    };
    function bidirectionalIndexOf(buffer2, val, byteOffset, encoding, dir) {
      if (buffer2.length === 0) return -1;
      if (typeof byteOffset === "string") {
        encoding = byteOffset;
        byteOffset = 0;
      } else if (byteOffset > 2147483647) {
        byteOffset = 2147483647;
      } else if (byteOffset < -2147483648) {
        byteOffset = -2147483648;
      }
      byteOffset = +byteOffset;
      if (numberIsNaN(byteOffset)) {
        byteOffset = dir ? 0 : buffer2.length - 1;
      }
      if (byteOffset < 0) byteOffset = buffer2.length + byteOffset;
      if (byteOffset >= buffer2.length) {
        if (dir) return -1;
        else byteOffset = buffer2.length - 1;
      } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1;
      }
      if (typeof val === "string") {
        val = Buffer2.from(val, encoding);
      }
      if (Buffer2.isBuffer(val)) {
        if (val.length === 0) {
          return -1;
        }
        return arrayIndexOf(buffer2, val, byteOffset, encoding, dir);
      } else if (typeof val === "number") {
        val = val & 255;
        if (typeof Uint8Array.prototype.indexOf === "function") {
          if (dir) {
            return Uint8Array.prototype.indexOf.call(buffer2, val, byteOffset);
          } else {
            return Uint8Array.prototype.lastIndexOf.call(buffer2, val, byteOffset);
          }
        }
        return arrayIndexOf(buffer2, [val], byteOffset, encoding, dir);
      }
      throw new TypeError("val must be string, number or Buffer");
    }
    function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
      let indexSize = 1;
      let arrLength = arr.length;
      let valLength = val.length;
      if (encoding !== void 0) {
        encoding = String(encoding).toLowerCase();
        if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
          if (arr.length < 2 || val.length < 2) {
            return -1;
          }
          indexSize = 2;
          arrLength /= 2;
          valLength /= 2;
          byteOffset /= 2;
        }
      }
      function read(buf, i3) {
        if (indexSize === 1) {
          return buf[i3];
        } else {
          return buf.readUInt16BE(i3 * indexSize);
        }
      }
      let i2;
      if (dir) {
        let foundIndex = -1;
        for (i2 = byteOffset; i2 < arrLength; i2++) {
          if (read(arr, i2) === read(val, foundIndex === -1 ? 0 : i2 - foundIndex)) {
            if (foundIndex === -1) foundIndex = i2;
            if (i2 - foundIndex + 1 === valLength) return foundIndex * indexSize;
          } else {
            if (foundIndex !== -1) i2 -= i2 - foundIndex;
            foundIndex = -1;
          }
        }
      } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for (i2 = byteOffset; i2 >= 0; i2--) {
          let found = true;
          for (let j2 = 0; j2 < valLength; j2++) {
            if (read(arr, i2 + j2) !== read(val, j2)) {
              found = false;
              break;
            }
          }
          if (found) return i2;
        }
      }
      return -1;
    }
    Buffer2.prototype.includes = function includes(val, byteOffset, encoding) {
      return this.indexOf(val, byteOffset, encoding) !== -1;
    };
    Buffer2.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
    };
    Buffer2.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
    };
    function hexWrite(buf, string, offset, length) {
      offset = Number(offset) || 0;
      const remaining = buf.length - offset;
      if (!length) {
        length = remaining;
      } else {
        length = Number(length);
        if (length > remaining) {
          length = remaining;
        }
      }
      const strLen = string.length;
      if (length > strLen / 2) {
        length = strLen / 2;
      }
      let i2;
      for (i2 = 0; i2 < length; ++i2) {
        const parsed = parseInt(string.substr(i2 * 2, 2), 16);
        if (numberIsNaN(parsed)) return i2;
        buf[offset + i2] = parsed;
      }
      return i2;
    }
    function utf8Write(buf, string, offset, length) {
      return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
    }
    function asciiWrite(buf, string, offset, length) {
      return blitBuffer(asciiToBytes(string), buf, offset, length);
    }
    function base64Write(buf, string, offset, length) {
      return blitBuffer(base64ToBytes(string), buf, offset, length);
    }
    function ucs2Write(buf, string, offset, length) {
      return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
    }
    Buffer2.prototype.write = function write(string, offset, length, encoding) {
      if (offset === void 0) {
        encoding = "utf8";
        length = this.length;
        offset = 0;
      } else if (length === void 0 && typeof offset === "string") {
        encoding = offset;
        length = this.length;
        offset = 0;
      } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
          length = length >>> 0;
          if (encoding === void 0) encoding = "utf8";
        } else {
          encoding = length;
          length = void 0;
        }
      } else {
        throw new Error(
          "Buffer.write(string, encoding, offset[, length]) is no longer supported"
        );
      }
      const remaining = this.length - offset;
      if (length === void 0 || length > remaining) length = remaining;
      if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
        throw new RangeError("Attempt to write outside buffer bounds");
      }
      if (!encoding) encoding = "utf8";
      let loweredCase = false;
      for (; ; ) {
        switch (encoding) {
          case "hex":
            return hexWrite(this, string, offset, length);
          case "utf8":
          case "utf-8":
            return utf8Write(this, string, offset, length);
          case "ascii":
          case "latin1":
          case "binary":
            return asciiWrite(this, string, offset, length);
          case "base64":
            return base64Write(this, string, offset, length);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return ucs2Write(this, string, offset, length);
          default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    };
    Buffer2.prototype.toJSON = function toJSON() {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    function base64Slice(buf, start, end) {
      if (start === 0 && end === buf.length) {
        return base64.fromByteArray(buf);
      } else {
        return base64.fromByteArray(buf.slice(start, end));
      }
    }
    function utf8Slice(buf, start, end) {
      end = Math.min(buf.length, end);
      const res = [];
      let i2 = start;
      while (i2 < end) {
        const firstByte = buf[i2];
        let codePoint = null;
        let bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
        if (i2 + bytesPerSequence <= end) {
          let secondByte, thirdByte, fourthByte, tempCodePoint;
          switch (bytesPerSequence) {
            case 1:
              if (firstByte < 128) {
                codePoint = firstByte;
              }
              break;
            case 2:
              secondByte = buf[i2 + 1];
              if ((secondByte & 192) === 128) {
                tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                if (tempCodePoint > 127) {
                  codePoint = tempCodePoint;
                }
              }
              break;
            case 3:
              secondByte = buf[i2 + 1];
              thirdByte = buf[i2 + 2];
              if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
                  codePoint = tempCodePoint;
                }
              }
              break;
            case 4:
              secondByte = buf[i2 + 1];
              thirdByte = buf[i2 + 2];
              fourthByte = buf[i2 + 3];
              if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
                  codePoint = tempCodePoint;
                }
              }
          }
        }
        if (codePoint === null) {
          codePoint = 65533;
          bytesPerSequence = 1;
        } else if (codePoint > 65535) {
          codePoint -= 65536;
          res.push(codePoint >>> 10 & 1023 | 55296);
          codePoint = 56320 | codePoint & 1023;
        }
        res.push(codePoint);
        i2 += bytesPerSequence;
      }
      return decodeCodePointsArray(res);
    }
    const MAX_ARGUMENTS_LENGTH = 4096;
    function decodeCodePointsArray(codePoints) {
      const len = codePoints.length;
      if (len <= MAX_ARGUMENTS_LENGTH) {
        return String.fromCharCode.apply(String, codePoints);
      }
      let res = "";
      let i2 = 0;
      while (i2 < len) {
        res += String.fromCharCode.apply(
          String,
          codePoints.slice(i2, i2 += MAX_ARGUMENTS_LENGTH)
        );
      }
      return res;
    }
    function asciiSlice(buf, start, end) {
      let ret = "";
      end = Math.min(buf.length, end);
      for (let i2 = start; i2 < end; ++i2) {
        ret += String.fromCharCode(buf[i2] & 127);
      }
      return ret;
    }
    function latin1Slice(buf, start, end) {
      let ret = "";
      end = Math.min(buf.length, end);
      for (let i2 = start; i2 < end; ++i2) {
        ret += String.fromCharCode(buf[i2]);
      }
      return ret;
    }
    function hexSlice(buf, start, end) {
      const len = buf.length;
      if (!start || start < 0) start = 0;
      if (!end || end < 0 || end > len) end = len;
      let out = "";
      for (let i2 = start; i2 < end; ++i2) {
        out += hexSliceLookupTable[buf[i2]];
      }
      return out;
    }
    function utf16leSlice(buf, start, end) {
      const bytes = buf.slice(start, end);
      let res = "";
      for (let i2 = 0; i2 < bytes.length - 1; i2 += 2) {
        res += String.fromCharCode(bytes[i2] + bytes[i2 + 1] * 256);
      }
      return res;
    }
    Buffer2.prototype.slice = function slice(start, end) {
      const len = this.length;
      start = ~~start;
      end = end === void 0 ? len : ~~end;
      if (start < 0) {
        start += len;
        if (start < 0) start = 0;
      } else if (start > len) {
        start = len;
      }
      if (end < 0) {
        end += len;
        if (end < 0) end = 0;
      } else if (end > len) {
        end = len;
      }
      if (end < start) end = start;
      const newBuf = this.subarray(start, end);
      Object.setPrototypeOf(newBuf, Buffer2.prototype);
      return newBuf;
    };
    function checkOffset(offset, ext, length) {
      if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
      if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length");
    }
    Buffer2.prototype.readUintLE = Buffer2.prototype.readUIntLE = function readUIntLE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) checkOffset(offset, byteLength2, this.length);
      let val = this[offset];
      let mul = 1;
      let i2 = 0;
      while (++i2 < byteLength2 && (mul *= 256)) {
        val += this[offset + i2] * mul;
      }
      return val;
    };
    Buffer2.prototype.readUintBE = Buffer2.prototype.readUIntBE = function readUIntBE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        checkOffset(offset, byteLength2, this.length);
      }
      let val = this[offset + --byteLength2];
      let mul = 1;
      while (byteLength2 > 0 && (mul *= 256)) {
        val += this[offset + --byteLength2] * mul;
      }
      return val;
    };
    Buffer2.prototype.readUint8 = Buffer2.prototype.readUInt8 = function readUInt8(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 1, this.length);
      return this[offset];
    };
    Buffer2.prototype.readUint16LE = Buffer2.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 2, this.length);
      return this[offset] | this[offset + 1] << 8;
    };
    Buffer2.prototype.readUint16BE = Buffer2.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 2, this.length);
      return this[offset] << 8 | this[offset + 1];
    };
    Buffer2.prototype.readUint32LE = Buffer2.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
    };
    Buffer2.prototype.readUint32BE = Buffer2.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
    };
    Buffer2.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }
      const lo = first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
      const hi = this[++offset] + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + last * 2 ** 24;
      return BigInt(lo) + (BigInt(hi) << BigInt(32));
    });
    Buffer2.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }
      const hi = first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
      const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last;
      return (BigInt(hi) << BigInt(32)) + BigInt(lo);
    });
    Buffer2.prototype.readIntLE = function readIntLE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) checkOffset(offset, byteLength2, this.length);
      let val = this[offset];
      let mul = 1;
      let i2 = 0;
      while (++i2 < byteLength2 && (mul *= 256)) {
        val += this[offset + i2] * mul;
      }
      mul *= 128;
      if (val >= mul) val -= Math.pow(2, 8 * byteLength2);
      return val;
    };
    Buffer2.prototype.readIntBE = function readIntBE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) checkOffset(offset, byteLength2, this.length);
      let i2 = byteLength2;
      let mul = 1;
      let val = this[offset + --i2];
      while (i2 > 0 && (mul *= 256)) {
        val += this[offset + --i2] * mul;
      }
      mul *= 128;
      if (val >= mul) val -= Math.pow(2, 8 * byteLength2);
      return val;
    };
    Buffer2.prototype.readInt8 = function readInt8(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 1, this.length);
      if (!(this[offset] & 128)) return this[offset];
      return (255 - this[offset] + 1) * -1;
    };
    Buffer2.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 2, this.length);
      const val = this[offset] | this[offset + 1] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };
    Buffer2.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 2, this.length);
      const val = this[offset + 1] | this[offset] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };
    Buffer2.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
    };
    Buffer2.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
    };
    Buffer2.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }
      const val = this[offset + 4] + this[offset + 5] * 2 ** 8 + this[offset + 6] * 2 ** 16 + (last << 24);
      return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
    });
    Buffer2.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }
      const val = (first << 24) + // Overflow
      this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
      return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last);
    });
    Buffer2.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return ieee7542.read(this, offset, true, 23, 4);
    };
    Buffer2.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return ieee7542.read(this, offset, false, 23, 4);
    };
    Buffer2.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 8, this.length);
      return ieee7542.read(this, offset, true, 52, 8);
    };
    Buffer2.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 8, this.length);
      return ieee7542.read(this, offset, false, 52, 8);
    };
    function checkInt(buf, value, offset, ext, max, min) {
      if (!Buffer2.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
      if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
      if (offset + ext > buf.length) throw new RangeError("Index out of range");
    }
    Buffer2.prototype.writeUintLE = Buffer2.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength2) - 1;
        checkInt(this, value, offset, byteLength2, maxBytes, 0);
      }
      let mul = 1;
      let i2 = 0;
      this[offset] = value & 255;
      while (++i2 < byteLength2 && (mul *= 256)) {
        this[offset + i2] = value / mul & 255;
      }
      return offset + byteLength2;
    };
    Buffer2.prototype.writeUintBE = Buffer2.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength2) - 1;
        checkInt(this, value, offset, byteLength2, maxBytes, 0);
      }
      let i2 = byteLength2 - 1;
      let mul = 1;
      this[offset + i2] = value & 255;
      while (--i2 >= 0 && (mul *= 256)) {
        this[offset + i2] = value / mul & 255;
      }
      return offset + byteLength2;
    };
    Buffer2.prototype.writeUint8 = Buffer2.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 1, 255, 0);
      this[offset] = value & 255;
      return offset + 1;
    };
    Buffer2.prototype.writeUint16LE = Buffer2.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      return offset + 2;
    };
    Buffer2.prototype.writeUint16BE = Buffer2.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
      this[offset] = value >>> 8;
      this[offset + 1] = value & 255;
      return offset + 2;
    };
    Buffer2.prototype.writeUint32LE = Buffer2.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
      this[offset + 3] = value >>> 24;
      this[offset + 2] = value >>> 16;
      this[offset + 1] = value >>> 8;
      this[offset] = value & 255;
      return offset + 4;
    };
    Buffer2.prototype.writeUint32BE = Buffer2.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
      this[offset] = value >>> 24;
      this[offset + 1] = value >>> 16;
      this[offset + 2] = value >>> 8;
      this[offset + 3] = value & 255;
      return offset + 4;
    };
    function wrtBigUInt64LE(buf, value, offset, min, max) {
      checkIntBI(value, min, max, buf, offset, 7);
      let lo = Number(value & BigInt(4294967295));
      buf[offset++] = lo;
      lo = lo >> 8;
      buf[offset++] = lo;
      lo = lo >> 8;
      buf[offset++] = lo;
      lo = lo >> 8;
      buf[offset++] = lo;
      let hi = Number(value >> BigInt(32) & BigInt(4294967295));
      buf[offset++] = hi;
      hi = hi >> 8;
      buf[offset++] = hi;
      hi = hi >> 8;
      buf[offset++] = hi;
      hi = hi >> 8;
      buf[offset++] = hi;
      return offset;
    }
    function wrtBigUInt64BE(buf, value, offset, min, max) {
      checkIntBI(value, min, max, buf, offset, 7);
      let lo = Number(value & BigInt(4294967295));
      buf[offset + 7] = lo;
      lo = lo >> 8;
      buf[offset + 6] = lo;
      lo = lo >> 8;
      buf[offset + 5] = lo;
      lo = lo >> 8;
      buf[offset + 4] = lo;
      let hi = Number(value >> BigInt(32) & BigInt(4294967295));
      buf[offset + 3] = hi;
      hi = hi >> 8;
      buf[offset + 2] = hi;
      hi = hi >> 8;
      buf[offset + 1] = hi;
      hi = hi >> 8;
      buf[offset] = hi;
      return offset + 8;
    }
    Buffer2.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
      return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    Buffer2.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
      return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    Buffer2.prototype.writeIntLE = function writeIntLE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength2 - 1);
        checkInt(this, value, offset, byteLength2, limit - 1, -limit);
      }
      let i2 = 0;
      let mul = 1;
      let sub = 0;
      this[offset] = value & 255;
      while (++i2 < byteLength2 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset + i2 - 1] !== 0) {
          sub = 1;
        }
        this[offset + i2] = (value / mul >> 0) - sub & 255;
      }
      return offset + byteLength2;
    };
    Buffer2.prototype.writeIntBE = function writeIntBE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength2 - 1);
        checkInt(this, value, offset, byteLength2, limit - 1, -limit);
      }
      let i2 = byteLength2 - 1;
      let mul = 1;
      let sub = 0;
      this[offset + i2] = value & 255;
      while (--i2 >= 0 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset + i2 + 1] !== 0) {
          sub = 1;
        }
        this[offset + i2] = (value / mul >> 0) - sub & 255;
      }
      return offset + byteLength2;
    };
    Buffer2.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 1, 127, -128);
      if (value < 0) value = 255 + value + 1;
      this[offset] = value & 255;
      return offset + 1;
    };
    Buffer2.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      return offset + 2;
    };
    Buffer2.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
      this[offset] = value >>> 8;
      this[offset + 1] = value & 255;
      return offset + 2;
    };
    Buffer2.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      this[offset + 2] = value >>> 16;
      this[offset + 3] = value >>> 24;
      return offset + 4;
    };
    Buffer2.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
      if (value < 0) value = 4294967295 + value + 1;
      this[offset] = value >>> 24;
      this[offset + 1] = value >>> 16;
      this[offset + 2] = value >>> 8;
      this[offset + 3] = value & 255;
      return offset + 4;
    };
    Buffer2.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
      return wrtBigUInt64LE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    Buffer2.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
      return wrtBigUInt64BE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    function checkIEEE754(buf, value, offset, ext, max, min) {
      if (offset + ext > buf.length) throw new RangeError("Index out of range");
      if (offset < 0) throw new RangeError("Index out of range");
    }
    function writeFloat(buf, value, offset, littleEndian, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 4);
      }
      ieee7542.write(buf, value, offset, littleEndian, 23, 4);
      return offset + 4;
    }
    Buffer2.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
      return writeFloat(this, value, offset, true, noAssert);
    };
    Buffer2.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
      return writeFloat(this, value, offset, false, noAssert);
    };
    function writeDouble(buf, value, offset, littleEndian, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 8);
      }
      ieee7542.write(buf, value, offset, littleEndian, 52, 8);
      return offset + 8;
    }
    Buffer2.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
      return writeDouble(this, value, offset, true, noAssert);
    };
    Buffer2.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
      return writeDouble(this, value, offset, false, noAssert);
    };
    Buffer2.prototype.copy = function copy(target, targetStart, start, end) {
      if (!Buffer2.isBuffer(target)) throw new TypeError("argument should be a Buffer");
      if (!start) start = 0;
      if (!end && end !== 0) end = this.length;
      if (targetStart >= target.length) targetStart = target.length;
      if (!targetStart) targetStart = 0;
      if (end > 0 && end < start) end = start;
      if (end === start) return 0;
      if (target.length === 0 || this.length === 0) return 0;
      if (targetStart < 0) {
        throw new RangeError("targetStart out of bounds");
      }
      if (start < 0 || start >= this.length) throw new RangeError("Index out of range");
      if (end < 0) throw new RangeError("sourceEnd out of bounds");
      if (end > this.length) end = this.length;
      if (target.length - targetStart < end - start) {
        end = target.length - targetStart + start;
      }
      const len = end - start;
      if (this === target && typeof Uint8Array.prototype.copyWithin === "function") {
        this.copyWithin(targetStart, start, end);
      } else {
        Uint8Array.prototype.set.call(
          target,
          this.subarray(start, end),
          targetStart
        );
      }
      return len;
    };
    Buffer2.prototype.fill = function fill(val, start, end, encoding) {
      if (typeof val === "string") {
        if (typeof start === "string") {
          encoding = start;
          start = 0;
          end = this.length;
        } else if (typeof end === "string") {
          encoding = end;
          end = this.length;
        }
        if (encoding !== void 0 && typeof encoding !== "string") {
          throw new TypeError("encoding must be a string");
        }
        if (typeof encoding === "string" && !Buffer2.isEncoding(encoding)) {
          throw new TypeError("Unknown encoding: " + encoding);
        }
        if (val.length === 1) {
          const code = val.charCodeAt(0);
          if (encoding === "utf8" && code < 128 || encoding === "latin1") {
            val = code;
          }
        }
      } else if (typeof val === "number") {
        val = val & 255;
      } else if (typeof val === "boolean") {
        val = Number(val);
      }
      if (start < 0 || this.length < start || this.length < end) {
        throw new RangeError("Out of range index");
      }
      if (end <= start) {
        return this;
      }
      start = start >>> 0;
      end = end === void 0 ? this.length : end >>> 0;
      if (!val) val = 0;
      let i2;
      if (typeof val === "number") {
        for (i2 = start; i2 < end; ++i2) {
          this[i2] = val;
        }
      } else {
        const bytes = Buffer2.isBuffer(val) ? val : Buffer2.from(val, encoding);
        const len = bytes.length;
        if (len === 0) {
          throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        }
        for (i2 = 0; i2 < end - start; ++i2) {
          this[i2 + start] = bytes[i2 % len];
        }
      }
      return this;
    };
    const errors = {};
    function E2(sym, getMessage, Base) {
      errors[sym] = class NodeError extends Base {
        constructor() {
          super();
          Object.defineProperty(this, "message", {
            value: getMessage.apply(this, arguments),
            writable: true,
            configurable: true
          });
          this.name = `${this.name} [${sym}]`;
          this.stack;
          delete this.name;
        }
        get code() {
          return sym;
        }
        set code(value) {
          Object.defineProperty(this, "code", {
            configurable: true,
            enumerable: true,
            value,
            writable: true
          });
        }
        toString() {
          return `${this.name} [${sym}]: ${this.message}`;
        }
      };
    }
    E2(
      "ERR_BUFFER_OUT_OF_BOUNDS",
      function(name) {
        if (name) {
          return `${name} is outside of buffer bounds`;
        }
        return "Attempt to access memory outside buffer bounds";
      },
      RangeError
    );
    E2(
      "ERR_INVALID_ARG_TYPE",
      function(name, actual) {
        return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
      },
      TypeError
    );
    E2(
      "ERR_OUT_OF_RANGE",
      function(str, range2, input) {
        let msg = `The value of "${str}" is out of range.`;
        let received = input;
        if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) {
          received = addNumericalSeparator(String(input));
        } else if (typeof input === "bigint") {
          received = String(input);
          if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) {
            received = addNumericalSeparator(received);
          }
          received += "n";
        }
        msg += ` It must be ${range2}. Received ${received}`;
        return msg;
      },
      RangeError
    );
    function addNumericalSeparator(val) {
      let res = "";
      let i2 = val.length;
      const start = val[0] === "-" ? 1 : 0;
      for (; i2 >= start + 4; i2 -= 3) {
        res = `_${val.slice(i2 - 3, i2)}${res}`;
      }
      return `${val.slice(0, i2)}${res}`;
    }
    function checkBounds(buf, offset, byteLength2) {
      validateNumber(offset, "offset");
      if (buf[offset] === void 0 || buf[offset + byteLength2] === void 0) {
        boundsError(offset, buf.length - (byteLength2 + 1));
      }
    }
    function checkIntBI(value, min, max, buf, offset, byteLength2) {
      if (value > max || value < min) {
        const n2 = typeof min === "bigint" ? "n" : "";
        let range2;
        {
          if (min === 0 || min === BigInt(0)) {
            range2 = `>= 0${n2} and < 2${n2} ** ${(byteLength2 + 1) * 8}${n2}`;
          } else {
            range2 = `>= -(2${n2} ** ${(byteLength2 + 1) * 8 - 1}${n2}) and < 2 ** ${(byteLength2 + 1) * 8 - 1}${n2}`;
          }
        }
        throw new errors.ERR_OUT_OF_RANGE("value", range2, value);
      }
      checkBounds(buf, offset, byteLength2);
    }
    function validateNumber(value, name) {
      if (typeof value !== "number") {
        throw new errors.ERR_INVALID_ARG_TYPE(name, "number", value);
      }
    }
    function boundsError(value, length, type) {
      if (Math.floor(value) !== value) {
        validateNumber(value, type);
        throw new errors.ERR_OUT_OF_RANGE("offset", "an integer", value);
      }
      if (length < 0) {
        throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
      }
      throw new errors.ERR_OUT_OF_RANGE(
        "offset",
        `>= ${0} and <= ${length}`,
        value
      );
    }
    const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
    function base64clean(str) {
      str = str.split("=")[0];
      str = str.trim().replace(INVALID_BASE64_RE, "");
      if (str.length < 2) return "";
      while (str.length % 4 !== 0) {
        str = str + "=";
      }
      return str;
    }
    function utf8ToBytes(string, units) {
      units = units || Infinity;
      let codePoint;
      const length = string.length;
      let leadSurrogate = null;
      const bytes = [];
      for (let i2 = 0; i2 < length; ++i2) {
        codePoint = string.charCodeAt(i2);
        if (codePoint > 55295 && codePoint < 57344) {
          if (!leadSurrogate) {
            if (codePoint > 56319) {
              if ((units -= 3) > -1) bytes.push(239, 191, 189);
              continue;
            } else if (i2 + 1 === length) {
              if ((units -= 3) > -1) bytes.push(239, 191, 189);
              continue;
            }
            leadSurrogate = codePoint;
            continue;
          }
          if (codePoint < 56320) {
            if ((units -= 3) > -1) bytes.push(239, 191, 189);
            leadSurrogate = codePoint;
            continue;
          }
          codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
        } else if (leadSurrogate) {
          if ((units -= 3) > -1) bytes.push(239, 191, 189);
        }
        leadSurrogate = null;
        if (codePoint < 128) {
          if ((units -= 1) < 0) break;
          bytes.push(codePoint);
        } else if (codePoint < 2048) {
          if ((units -= 2) < 0) break;
          bytes.push(
            codePoint >> 6 | 192,
            codePoint & 63 | 128
          );
        } else if (codePoint < 65536) {
          if ((units -= 3) < 0) break;
          bytes.push(
            codePoint >> 12 | 224,
            codePoint >> 6 & 63 | 128,
            codePoint & 63 | 128
          );
        } else if (codePoint < 1114112) {
          if ((units -= 4) < 0) break;
          bytes.push(
            codePoint >> 18 | 240,
            codePoint >> 12 & 63 | 128,
            codePoint >> 6 & 63 | 128,
            codePoint & 63 | 128
          );
        } else {
          throw new Error("Invalid code point");
        }
      }
      return bytes;
    }
    function asciiToBytes(str) {
      const byteArray = [];
      for (let i2 = 0; i2 < str.length; ++i2) {
        byteArray.push(str.charCodeAt(i2) & 255);
      }
      return byteArray;
    }
    function utf16leToBytes(str, units) {
      let c2, hi, lo;
      const byteArray = [];
      for (let i2 = 0; i2 < str.length; ++i2) {
        if ((units -= 2) < 0) break;
        c2 = str.charCodeAt(i2);
        hi = c2 >> 8;
        lo = c2 % 256;
        byteArray.push(lo);
        byteArray.push(hi);
      }
      return byteArray;
    }
    function base64ToBytes(str) {
      return base64.toByteArray(base64clean(str));
    }
    function blitBuffer(src, dst, offset, length) {
      let i2;
      for (i2 = 0; i2 < length; ++i2) {
        if (i2 + offset >= dst.length || i2 >= src.length) break;
        dst[i2 + offset] = src[i2];
      }
      return i2;
    }
    function isInstance(obj, type) {
      return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
    }
    function numberIsNaN(obj) {
      return obj !== obj;
    }
    const hexSliceLookupTable = (function() {
      const alphabet = "0123456789abcdef";
      const table = new Array(256);
      for (let i2 = 0; i2 < 16; ++i2) {
        const i16 = i2 * 16;
        for (let j2 = 0; j2 < 16; ++j2) {
          table[i16 + j2] = alphabet[i2] + alphabet[j2];
        }
      }
      return table;
    })();
    function defineBigIntMethod(fn) {
      return typeof BigInt === "undefined" ? BufferBigIntNotDefined : fn;
    }
    function BufferBigIntNotDefined() {
      throw new Error("BigInt not supported");
    }
  })(buffer);
  return buffer;
}
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
var hasRequiredSafeBuffer;
function requireSafeBuffer() {
  if (hasRequiredSafeBuffer) return safeBuffer.exports;
  hasRequiredSafeBuffer = 1;
  (function(module, exports$1) {
    var buffer2 = requireBuffer();
    var Buffer2 = buffer2.Buffer;
    function copyProps(src, dst) {
      for (var key in src) {
        dst[key] = src[key];
      }
    }
    if (Buffer2.from && Buffer2.alloc && Buffer2.allocUnsafe && Buffer2.allocUnsafeSlow) {
      module.exports = buffer2;
    } else {
      copyProps(buffer2, exports$1);
      exports$1.Buffer = SafeBuffer;
    }
    function SafeBuffer(arg, encodingOrOffset, length) {
      return Buffer2(arg, encodingOrOffset, length);
    }
    SafeBuffer.prototype = Object.create(Buffer2.prototype);
    copyProps(Buffer2, SafeBuffer);
    SafeBuffer.from = function(arg, encodingOrOffset, length) {
      if (typeof arg === "number") {
        throw new TypeError("Argument must not be a number");
      }
      return Buffer2(arg, encodingOrOffset, length);
    };
    SafeBuffer.alloc = function(size, fill, encoding) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      var buf = Buffer2(size);
      if (fill !== void 0) {
        if (typeof encoding === "string") {
          buf.fill(fill, encoding);
        } else {
          buf.fill(fill);
        }
      } else {
        buf.fill(0);
      }
      return buf;
    };
    SafeBuffer.allocUnsafe = function(size) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return Buffer2(size);
    };
    SafeBuffer.allocUnsafeSlow = function(size) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return buffer2.SlowBuffer(size);
    };
  })(safeBuffer, safeBuffer.exports);
  return safeBuffer.exports;
}
var hasRequiredString_decoder;
function requireString_decoder() {
  if (hasRequiredString_decoder) return string_decoder;
  hasRequiredString_decoder = 1;
  var Buffer2 = requireSafeBuffer().Buffer;
  var isEncoding = Buffer2.isEncoding || function(encoding) {
    encoding = "" + encoding;
    switch (encoding && encoding.toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
      case "raw":
        return true;
      default:
        return false;
    }
  };
  function _normalizeEncoding(enc) {
    if (!enc) return "utf8";
    var retried;
    while (true) {
      switch (enc) {
        case "utf8":
        case "utf-8":
          return "utf8";
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return "utf16le";
        case "latin1":
        case "binary":
          return "latin1";
        case "base64":
        case "ascii":
        case "hex":
          return enc;
        default:
          if (retried) return;
          enc = ("" + enc).toLowerCase();
          retried = true;
      }
    }
  }
  function normalizeEncoding(enc) {
    var nenc = _normalizeEncoding(enc);
    if (typeof nenc !== "string" && (Buffer2.isEncoding === isEncoding || !isEncoding(enc))) throw new Error("Unknown encoding: " + enc);
    return nenc || enc;
  }
  string_decoder.StringDecoder = StringDecoder;
  function StringDecoder(encoding) {
    this.encoding = normalizeEncoding(encoding);
    var nb;
    switch (this.encoding) {
      case "utf16le":
        this.text = utf16Text;
        this.end = utf16End;
        nb = 4;
        break;
      case "utf8":
        this.fillLast = utf8FillLast;
        nb = 4;
        break;
      case "base64":
        this.text = base64Text;
        this.end = base64End;
        nb = 3;
        break;
      default:
        this.write = simpleWrite;
        this.end = simpleEnd;
        return;
    }
    this.lastNeed = 0;
    this.lastTotal = 0;
    this.lastChar = Buffer2.allocUnsafe(nb);
  }
  StringDecoder.prototype.write = function(buf) {
    if (buf.length === 0) return "";
    var r2;
    var i2;
    if (this.lastNeed) {
      r2 = this.fillLast(buf);
      if (r2 === void 0) return "";
      i2 = this.lastNeed;
      this.lastNeed = 0;
    } else {
      i2 = 0;
    }
    if (i2 < buf.length) return r2 ? r2 + this.text(buf, i2) : this.text(buf, i2);
    return r2 || "";
  };
  StringDecoder.prototype.end = utf8End;
  StringDecoder.prototype.text = utf8Text;
  StringDecoder.prototype.fillLast = function(buf) {
    if (this.lastNeed <= buf.length) {
      buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
      return this.lastChar.toString(this.encoding, 0, this.lastTotal);
    }
    buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
    this.lastNeed -= buf.length;
  };
  function utf8CheckByte(byte) {
    if (byte <= 127) return 0;
    else if (byte >> 5 === 6) return 2;
    else if (byte >> 4 === 14) return 3;
    else if (byte >> 3 === 30) return 4;
    return byte >> 6 === 2 ? -1 : -2;
  }
  function utf8CheckIncomplete(self2, buf, i2) {
    var j2 = buf.length - 1;
    if (j2 < i2) return 0;
    var nb = utf8CheckByte(buf[j2]);
    if (nb >= 0) {
      if (nb > 0) self2.lastNeed = nb - 1;
      return nb;
    }
    if (--j2 < i2 || nb === -2) return 0;
    nb = utf8CheckByte(buf[j2]);
    if (nb >= 0) {
      if (nb > 0) self2.lastNeed = nb - 2;
      return nb;
    }
    if (--j2 < i2 || nb === -2) return 0;
    nb = utf8CheckByte(buf[j2]);
    if (nb >= 0) {
      if (nb > 0) {
        if (nb === 2) nb = 0;
        else self2.lastNeed = nb - 3;
      }
      return nb;
    }
    return 0;
  }
  function utf8CheckExtraBytes(self2, buf, p2) {
    if ((buf[0] & 192) !== 128) {
      self2.lastNeed = 0;
      return "�";
    }
    if (self2.lastNeed > 1 && buf.length > 1) {
      if ((buf[1] & 192) !== 128) {
        self2.lastNeed = 1;
        return "�";
      }
      if (self2.lastNeed > 2 && buf.length > 2) {
        if ((buf[2] & 192) !== 128) {
          self2.lastNeed = 2;
          return "�";
        }
      }
    }
  }
  function utf8FillLast(buf) {
    var p2 = this.lastTotal - this.lastNeed;
    var r2 = utf8CheckExtraBytes(this, buf);
    if (r2 !== void 0) return r2;
    if (this.lastNeed <= buf.length) {
      buf.copy(this.lastChar, p2, 0, this.lastNeed);
      return this.lastChar.toString(this.encoding, 0, this.lastTotal);
    }
    buf.copy(this.lastChar, p2, 0, buf.length);
    this.lastNeed -= buf.length;
  }
  function utf8Text(buf, i2) {
    var total = utf8CheckIncomplete(this, buf, i2);
    if (!this.lastNeed) return buf.toString("utf8", i2);
    this.lastTotal = total;
    var end = buf.length - (total - this.lastNeed);
    buf.copy(this.lastChar, 0, end);
    return buf.toString("utf8", i2, end);
  }
  function utf8End(buf) {
    var r2 = buf && buf.length ? this.write(buf) : "";
    if (this.lastNeed) return r2 + "�";
    return r2;
  }
  function utf16Text(buf, i2) {
    if ((buf.length - i2) % 2 === 0) {
      var r2 = buf.toString("utf16le", i2);
      if (r2) {
        var c2 = r2.charCodeAt(r2.length - 1);
        if (c2 >= 55296 && c2 <= 56319) {
          this.lastNeed = 2;
          this.lastTotal = 4;
          this.lastChar[0] = buf[buf.length - 2];
          this.lastChar[1] = buf[buf.length - 1];
          return r2.slice(0, -1);
        }
      }
      return r2;
    }
    this.lastNeed = 1;
    this.lastTotal = 2;
    this.lastChar[0] = buf[buf.length - 1];
    return buf.toString("utf16le", i2, buf.length - 1);
  }
  function utf16End(buf) {
    var r2 = buf && buf.length ? this.write(buf) : "";
    if (this.lastNeed) {
      var end = this.lastTotal - this.lastNeed;
      return r2 + this.lastChar.toString("utf16le", 0, end);
    }
    return r2;
  }
  function base64Text(buf, i2) {
    var n2 = (buf.length - i2) % 3;
    if (n2 === 0) return buf.toString("base64", i2);
    this.lastNeed = 3 - n2;
    this.lastTotal = 3;
    if (n2 === 1) {
      this.lastChar[0] = buf[buf.length - 1];
    } else {
      this.lastChar[0] = buf[buf.length - 2];
      this.lastChar[1] = buf[buf.length - 1];
    }
    return buf.toString("base64", i2, buf.length - n2);
  }
  function base64End(buf) {
    var r2 = buf && buf.length ? this.write(buf) : "";
    if (this.lastNeed) return r2 + this.lastChar.toString("base64", 0, 3 - this.lastNeed);
    return r2;
  }
  function simpleWrite(buf) {
    return buf.toString(this.encoding);
  }
  function simpleEnd(buf) {
    return buf && buf.length ? this.write(buf) : "";
  }
  return string_decoder;
}
var hasRequiredSax;
function requireSax() {
  if (hasRequiredSax) return sax$1;
  hasRequiredSax = 1;
  (function(exports$1) {
    (function(sax2) {
      sax2.parser = function(strict, opt) {
        return new SAXParser(strict, opt);
      };
      sax2.SAXParser = SAXParser;
      sax2.SAXStream = SAXStream;
      sax2.createStream = createStream;
      sax2.MAX_BUFFER_LENGTH = 64 * 1024;
      var buffers = [
        "comment",
        "sgmlDecl",
        "textNode",
        "tagName",
        "doctype",
        "procInstName",
        "procInstBody",
        "entity",
        "attribName",
        "attribValue",
        "cdata",
        "script"
      ];
      sax2.EVENTS = [
        "text",
        "processinginstruction",
        "sgmldeclaration",
        "doctype",
        "comment",
        "opentagstart",
        "attribute",
        "opentag",
        "closetag",
        "opencdata",
        "cdata",
        "closecdata",
        "error",
        "end",
        "ready",
        "script",
        "opennamespace",
        "closenamespace"
      ];
      function SAXParser(strict, opt) {
        if (!(this instanceof SAXParser)) {
          return new SAXParser(strict, opt);
        }
        var parser = this;
        clearBuffers(parser);
        parser.q = parser.c = "";
        parser.bufferCheckPosition = sax2.MAX_BUFFER_LENGTH;
        parser.opt = opt || {};
        parser.opt.lowercase = parser.opt.lowercase || parser.opt.lowercasetags;
        parser.looseCase = parser.opt.lowercase ? "toLowerCase" : "toUpperCase";
        parser.tags = [];
        parser.closed = parser.closedRoot = parser.sawRoot = false;
        parser.tag = parser.error = null;
        parser.strict = !!strict;
        parser.noscript = !!(strict || parser.opt.noscript);
        parser.state = S2.BEGIN;
        parser.strictEntities = parser.opt.strictEntities;
        parser.ENTITIES = parser.strictEntities ? Object.create(sax2.XML_ENTITIES) : Object.create(sax2.ENTITIES);
        parser.attribList = [];
        if (parser.opt.xmlns) {
          parser.ns = Object.create(rootNS);
        }
        if (parser.opt.unquotedAttributeValues === void 0) {
          parser.opt.unquotedAttributeValues = !strict;
        }
        parser.trackPosition = parser.opt.position !== false;
        if (parser.trackPosition) {
          parser.position = parser.line = parser.column = 0;
        }
        emit(parser, "onready");
      }
      if (!Object.create) {
        Object.create = function(o2) {
          function F2() {
          }
          F2.prototype = o2;
          var newf = new F2();
          return newf;
        };
      }
      if (!Object.keys) {
        Object.keys = function(o2) {
          var a2 = [];
          for (var i2 in o2) if (o2.hasOwnProperty(i2)) a2.push(i2);
          return a2;
        };
      }
      function checkBufferLength(parser) {
        var maxAllowed = Math.max(sax2.MAX_BUFFER_LENGTH, 10);
        var maxActual = 0;
        for (var i2 = 0, l2 = buffers.length; i2 < l2; i2++) {
          var len = parser[buffers[i2]].length;
          if (len > maxAllowed) {
            switch (buffers[i2]) {
              case "textNode":
                closeText(parser);
                break;
              case "cdata":
                emitNode(parser, "oncdata", parser.cdata);
                parser.cdata = "";
                break;
              case "script":
                emitNode(parser, "onscript", parser.script);
                parser.script = "";
                break;
              default:
                error(parser, "Max buffer length exceeded: " + buffers[i2]);
            }
          }
          maxActual = Math.max(maxActual, len);
        }
        var m2 = sax2.MAX_BUFFER_LENGTH - maxActual;
        parser.bufferCheckPosition = m2 + parser.position;
      }
      function clearBuffers(parser) {
        for (var i2 = 0, l2 = buffers.length; i2 < l2; i2++) {
          parser[buffers[i2]] = "";
        }
      }
      function flushBuffers(parser) {
        closeText(parser);
        if (parser.cdata !== "") {
          emitNode(parser, "oncdata", parser.cdata);
          parser.cdata = "";
        }
        if (parser.script !== "") {
          emitNode(parser, "onscript", parser.script);
          parser.script = "";
        }
      }
      SAXParser.prototype = {
        end: function() {
          end(this);
        },
        write,
        resume: function() {
          this.error = null;
          return this;
        },
        close: function() {
          return this.write(null);
        },
        flush: function() {
          flushBuffers(this);
        }
      };
      var Stream;
      try {
        Stream = require$$0.Stream;
      } catch (ex) {
        Stream = function() {
        };
      }
      if (!Stream) Stream = function() {
      };
      var streamWraps = sax2.EVENTS.filter(function(ev) {
        return ev !== "error" && ev !== "end";
      });
      function createStream(strict, opt) {
        return new SAXStream(strict, opt);
      }
      function SAXStream(strict, opt) {
        if (!(this instanceof SAXStream)) {
          return new SAXStream(strict, opt);
        }
        Stream.apply(this);
        this._parser = new SAXParser(strict, opt);
        this.writable = true;
        this.readable = true;
        var me = this;
        this._parser.onend = function() {
          me.emit("end");
        };
        this._parser.onerror = function(er) {
          me.emit("error", er);
          me._parser.error = null;
        };
        this._decoder = null;
        streamWraps.forEach(function(ev) {
          Object.defineProperty(me, "on" + ev, {
            get: function() {
              return me._parser["on" + ev];
            },
            set: function(h2) {
              if (!h2) {
                me.removeAllListeners(ev);
                me._parser["on" + ev] = h2;
                return h2;
              }
              me.on(ev, h2);
            },
            enumerable: true,
            configurable: false
          });
        });
      }
      SAXStream.prototype = Object.create(Stream.prototype, {
        constructor: {
          value: SAXStream
        }
      });
      SAXStream.prototype.write = function(data) {
        if (typeof Buffer === "function" && typeof Buffer.isBuffer === "function" && Buffer.isBuffer(data)) {
          if (!this._decoder) {
            var SD = requireString_decoder().StringDecoder;
            this._decoder = new SD("utf8");
          }
          data = this._decoder.write(data);
        }
        this._parser.write(data.toString());
        this.emit("data", data);
        return true;
      };
      SAXStream.prototype.end = function(chunk) {
        if (chunk && chunk.length) {
          this.write(chunk);
        }
        this._parser.end();
        return true;
      };
      SAXStream.prototype.on = function(ev, handler) {
        var me = this;
        if (!me._parser["on" + ev] && streamWraps.indexOf(ev) !== -1) {
          me._parser["on" + ev] = function() {
            var args = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
            args.splice(0, 0, ev);
            me.emit.apply(me, args);
          };
        }
        return Stream.prototype.on.call(me, ev, handler);
      };
      var CDATA = "[CDATA[";
      var DOCTYPE = "DOCTYPE";
      var XML_NAMESPACE = "http://www.w3.org/XML/1998/namespace";
      var XMLNS_NAMESPACE = "http://www.w3.org/2000/xmlns/";
      var rootNS = { xml: XML_NAMESPACE, xmlns: XMLNS_NAMESPACE };
      var nameStart = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
      var nameBody = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
      var entityStart = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
      var entityBody = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
      function isWhitespace(c2) {
        return c2 === " " || c2 === "\n" || c2 === "\r" || c2 === "	";
      }
      function isQuote(c2) {
        return c2 === '"' || c2 === "'";
      }
      function isAttribEnd(c2) {
        return c2 === ">" || isWhitespace(c2);
      }
      function isMatch(regex, c2) {
        return regex.test(c2);
      }
      function notMatch(regex, c2) {
        return !isMatch(regex, c2);
      }
      var S2 = 0;
      sax2.STATE = {
        BEGIN: S2++,
        // leading byte order mark or whitespace
        BEGIN_WHITESPACE: S2++,
        // leading whitespace
        TEXT: S2++,
        // general stuff
        TEXT_ENTITY: S2++,
        // &amp and such.
        OPEN_WAKA: S2++,
        // <
        SGML_DECL: S2++,
        // <!BLARG
        SGML_DECL_QUOTED: S2++,
        // <!BLARG foo "bar
        DOCTYPE: S2++,
        // <!DOCTYPE
        DOCTYPE_QUOTED: S2++,
        // <!DOCTYPE "//blah
        DOCTYPE_DTD: S2++,
        // <!DOCTYPE "//blah" [ ...
        DOCTYPE_DTD_QUOTED: S2++,
        // <!DOCTYPE "//blah" [ "foo
        COMMENT_STARTING: S2++,
        // <!-
        COMMENT: S2++,
        // <!--
        COMMENT_ENDING: S2++,
        // <!-- blah -
        COMMENT_ENDED: S2++,
        // <!-- blah --
        CDATA: S2++,
        // <![CDATA[ something
        CDATA_ENDING: S2++,
        // ]
        CDATA_ENDING_2: S2++,
        // ]]
        PROC_INST: S2++,
        // <?hi
        PROC_INST_BODY: S2++,
        // <?hi there
        PROC_INST_ENDING: S2++,
        // <?hi "there" ?
        OPEN_TAG: S2++,
        // <strong
        OPEN_TAG_SLASH: S2++,
        // <strong /
        ATTRIB: S2++,
        // <a
        ATTRIB_NAME: S2++,
        // <a foo
        ATTRIB_NAME_SAW_WHITE: S2++,
        // <a foo _
        ATTRIB_VALUE: S2++,
        // <a foo=
        ATTRIB_VALUE_QUOTED: S2++,
        // <a foo="bar
        ATTRIB_VALUE_CLOSED: S2++,
        // <a foo="bar"
        ATTRIB_VALUE_UNQUOTED: S2++,
        // <a foo=bar
        ATTRIB_VALUE_ENTITY_Q: S2++,
        // <foo bar="&quot;"
        ATTRIB_VALUE_ENTITY_U: S2++,
        // <foo bar=&quot
        CLOSE_TAG: S2++,
        // </a
        CLOSE_TAG_SAW_WHITE: S2++,
        // </a   >
        SCRIPT: S2++,
        // <script> ...
        SCRIPT_ENDING: S2++
        // <script> ... <
      };
      sax2.XML_ENTITIES = {
        amp: "&",
        gt: ">",
        lt: "<",
        quot: '"',
        apos: "'"
      };
      sax2.ENTITIES = {
        amp: "&",
        gt: ">",
        lt: "<",
        quot: '"',
        apos: "'",
        AElig: 198,
        Aacute: 193,
        Acirc: 194,
        Agrave: 192,
        Aring: 197,
        Atilde: 195,
        Auml: 196,
        Ccedil: 199,
        ETH: 208,
        Eacute: 201,
        Ecirc: 202,
        Egrave: 200,
        Euml: 203,
        Iacute: 205,
        Icirc: 206,
        Igrave: 204,
        Iuml: 207,
        Ntilde: 209,
        Oacute: 211,
        Ocirc: 212,
        Ograve: 210,
        Oslash: 216,
        Otilde: 213,
        Ouml: 214,
        THORN: 222,
        Uacute: 218,
        Ucirc: 219,
        Ugrave: 217,
        Uuml: 220,
        Yacute: 221,
        aacute: 225,
        acirc: 226,
        aelig: 230,
        agrave: 224,
        aring: 229,
        atilde: 227,
        auml: 228,
        ccedil: 231,
        eacute: 233,
        ecirc: 234,
        egrave: 232,
        eth: 240,
        euml: 235,
        iacute: 237,
        icirc: 238,
        igrave: 236,
        iuml: 239,
        ntilde: 241,
        oacute: 243,
        ocirc: 244,
        ograve: 242,
        oslash: 248,
        otilde: 245,
        ouml: 246,
        szlig: 223,
        thorn: 254,
        uacute: 250,
        ucirc: 251,
        ugrave: 249,
        uuml: 252,
        yacute: 253,
        yuml: 255,
        copy: 169,
        reg: 174,
        nbsp: 160,
        iexcl: 161,
        cent: 162,
        pound: 163,
        curren: 164,
        yen: 165,
        brvbar: 166,
        sect: 167,
        uml: 168,
        ordf: 170,
        laquo: 171,
        not: 172,
        shy: 173,
        macr: 175,
        deg: 176,
        plusmn: 177,
        sup1: 185,
        sup2: 178,
        sup3: 179,
        acute: 180,
        micro: 181,
        para: 182,
        middot: 183,
        cedil: 184,
        ordm: 186,
        raquo: 187,
        frac14: 188,
        frac12: 189,
        frac34: 190,
        iquest: 191,
        times: 215,
        divide: 247,
        OElig: 338,
        oelig: 339,
        Scaron: 352,
        scaron: 353,
        Yuml: 376,
        fnof: 402,
        circ: 710,
        tilde: 732,
        Alpha: 913,
        Beta: 914,
        Gamma: 915,
        Delta: 916,
        Epsilon: 917,
        Zeta: 918,
        Eta: 919,
        Theta: 920,
        Iota: 921,
        Kappa: 922,
        Lambda: 923,
        Mu: 924,
        Nu: 925,
        Xi: 926,
        Omicron: 927,
        Pi: 928,
        Rho: 929,
        Sigma: 931,
        Tau: 932,
        Upsilon: 933,
        Phi: 934,
        Chi: 935,
        Psi: 936,
        Omega: 937,
        alpha: 945,
        beta: 946,
        gamma: 947,
        delta: 948,
        epsilon: 949,
        zeta: 950,
        eta: 951,
        theta: 952,
        iota: 953,
        kappa: 954,
        lambda: 955,
        mu: 956,
        nu: 957,
        xi: 958,
        omicron: 959,
        pi: 960,
        rho: 961,
        sigmaf: 962,
        sigma: 963,
        tau: 964,
        upsilon: 965,
        phi: 966,
        chi: 967,
        psi: 968,
        omega: 969,
        thetasym: 977,
        upsih: 978,
        piv: 982,
        ensp: 8194,
        emsp: 8195,
        thinsp: 8201,
        zwnj: 8204,
        zwj: 8205,
        lrm: 8206,
        rlm: 8207,
        ndash: 8211,
        mdash: 8212,
        lsquo: 8216,
        rsquo: 8217,
        sbquo: 8218,
        ldquo: 8220,
        rdquo: 8221,
        bdquo: 8222,
        dagger: 8224,
        Dagger: 8225,
        bull: 8226,
        hellip: 8230,
        permil: 8240,
        prime: 8242,
        Prime: 8243,
        lsaquo: 8249,
        rsaquo: 8250,
        oline: 8254,
        frasl: 8260,
        euro: 8364,
        image: 8465,
        weierp: 8472,
        real: 8476,
        trade: 8482,
        alefsym: 8501,
        larr: 8592,
        uarr: 8593,
        rarr: 8594,
        darr: 8595,
        harr: 8596,
        crarr: 8629,
        lArr: 8656,
        uArr: 8657,
        rArr: 8658,
        dArr: 8659,
        hArr: 8660,
        forall: 8704,
        part: 8706,
        exist: 8707,
        empty: 8709,
        nabla: 8711,
        isin: 8712,
        notin: 8713,
        ni: 8715,
        prod: 8719,
        sum: 8721,
        minus: 8722,
        lowast: 8727,
        radic: 8730,
        prop: 8733,
        infin: 8734,
        ang: 8736,
        and: 8743,
        or: 8744,
        cap: 8745,
        cup: 8746,
        int: 8747,
        there4: 8756,
        sim: 8764,
        cong: 8773,
        asymp: 8776,
        ne: 8800,
        equiv: 8801,
        le: 8804,
        ge: 8805,
        sub: 8834,
        sup: 8835,
        nsub: 8836,
        sube: 8838,
        supe: 8839,
        oplus: 8853,
        otimes: 8855,
        perp: 8869,
        sdot: 8901,
        lceil: 8968,
        rceil: 8969,
        lfloor: 8970,
        rfloor: 8971,
        lang: 9001,
        rang: 9002,
        loz: 9674,
        spades: 9824,
        clubs: 9827,
        hearts: 9829,
        diams: 9830
      };
      Object.keys(sax2.ENTITIES).forEach(function(key) {
        var e2 = sax2.ENTITIES[key];
        var s3 = typeof e2 === "number" ? String.fromCharCode(e2) : e2;
        sax2.ENTITIES[key] = s3;
      });
      for (var s2 in sax2.STATE) {
        sax2.STATE[sax2.STATE[s2]] = s2;
      }
      S2 = sax2.STATE;
      function emit(parser, event, data) {
        parser[event] && parser[event](data);
      }
      function emitNode(parser, nodeType, data) {
        if (parser.textNode) closeText(parser);
        emit(parser, nodeType, data);
      }
      function closeText(parser) {
        parser.textNode = textopts(parser.opt, parser.textNode);
        if (parser.textNode) emit(parser, "ontext", parser.textNode);
        parser.textNode = "";
      }
      function textopts(opt, text) {
        if (opt.trim) text = text.trim();
        if (opt.normalize) text = text.replace(/\s+/g, " ");
        return text;
      }
      function error(parser, er) {
        closeText(parser);
        if (parser.trackPosition) {
          er += "\nLine: " + parser.line + "\nColumn: " + parser.column + "\nChar: " + parser.c;
        }
        er = new Error(er);
        parser.error = er;
        emit(parser, "onerror", er);
        return parser;
      }
      function end(parser) {
        if (parser.sawRoot && !parser.closedRoot)
          strictFail(parser, "Unclosed root tag");
        if (parser.state !== S2.BEGIN && parser.state !== S2.BEGIN_WHITESPACE && parser.state !== S2.TEXT) {
          error(parser, "Unexpected end");
        }
        closeText(parser);
        parser.c = "";
        parser.closed = true;
        emit(parser, "onend");
        SAXParser.call(parser, parser.strict, parser.opt);
        return parser;
      }
      function strictFail(parser, message) {
        if (typeof parser !== "object" || !(parser instanceof SAXParser)) {
          throw new Error("bad call to strictFail");
        }
        if (parser.strict) {
          error(parser, message);
        }
      }
      function newTag(parser) {
        if (!parser.strict) parser.tagName = parser.tagName[parser.looseCase]();
        var parent = parser.tags[parser.tags.length - 1] || parser;
        var tag = parser.tag = { name: parser.tagName, attributes: {} };
        if (parser.opt.xmlns) {
          tag.ns = parent.ns;
        }
        parser.attribList.length = 0;
        emitNode(parser, "onopentagstart", tag);
      }
      function qname(name, attribute) {
        var i2 = name.indexOf(":");
        var qualName = i2 < 0 ? ["", name] : name.split(":");
        var prefix = qualName[0];
        var local = qualName[1];
        if (attribute && name === "xmlns") {
          prefix = "xmlns";
          local = "";
        }
        return { prefix, local };
      }
      function attrib(parser) {
        if (!parser.strict) {
          parser.attribName = parser.attribName[parser.looseCase]();
        }
        if (parser.attribList.indexOf(parser.attribName) !== -1 || parser.tag.attributes.hasOwnProperty(parser.attribName)) {
          parser.attribName = parser.attribValue = "";
          return;
        }
        if (parser.opt.xmlns) {
          var qn = qname(parser.attribName, true);
          var prefix = qn.prefix;
          var local = qn.local;
          if (prefix === "xmlns") {
            if (local === "xml" && parser.attribValue !== XML_NAMESPACE) {
              strictFail(
                parser,
                "xml: prefix must be bound to " + XML_NAMESPACE + "\nActual: " + parser.attribValue
              );
            } else if (local === "xmlns" && parser.attribValue !== XMLNS_NAMESPACE) {
              strictFail(
                parser,
                "xmlns: prefix must be bound to " + XMLNS_NAMESPACE + "\nActual: " + parser.attribValue
              );
            } else {
              var tag = parser.tag;
              var parent = parser.tags[parser.tags.length - 1] || parser;
              if (tag.ns === parent.ns) {
                tag.ns = Object.create(parent.ns);
              }
              tag.ns[local] = parser.attribValue;
            }
          }
          parser.attribList.push([parser.attribName, parser.attribValue]);
        } else {
          parser.tag.attributes[parser.attribName] = parser.attribValue;
          emitNode(parser, "onattribute", {
            name: parser.attribName,
            value: parser.attribValue
          });
        }
        parser.attribName = parser.attribValue = "";
      }
      function openTag(parser, selfClosing) {
        if (parser.opt.xmlns) {
          var tag = parser.tag;
          var qn = qname(parser.tagName);
          tag.prefix = qn.prefix;
          tag.local = qn.local;
          tag.uri = tag.ns[qn.prefix] || "";
          if (tag.prefix && !tag.uri) {
            strictFail(
              parser,
              "Unbound namespace prefix: " + JSON.stringify(parser.tagName)
            );
            tag.uri = qn.prefix;
          }
          var parent = parser.tags[parser.tags.length - 1] || parser;
          if (tag.ns && parent.ns !== tag.ns) {
            Object.keys(tag.ns).forEach(function(p2) {
              emitNode(parser, "onopennamespace", {
                prefix: p2,
                uri: tag.ns[p2]
              });
            });
          }
          for (var i2 = 0, l2 = parser.attribList.length; i2 < l2; i2++) {
            var nv = parser.attribList[i2];
            var name = nv[0];
            var value = nv[1];
            var qualName = qname(name, true);
            var prefix = qualName.prefix;
            var local = qualName.local;
            var uri = prefix === "" ? "" : tag.ns[prefix] || "";
            var a2 = {
              name,
              value,
              prefix,
              local,
              uri
            };
            if (prefix && prefix !== "xmlns" && !uri) {
              strictFail(
                parser,
                "Unbound namespace prefix: " + JSON.stringify(prefix)
              );
              a2.uri = prefix;
            }
            parser.tag.attributes[name] = a2;
            emitNode(parser, "onattribute", a2);
          }
          parser.attribList.length = 0;
        }
        parser.tag.isSelfClosing = !!selfClosing;
        parser.sawRoot = true;
        parser.tags.push(parser.tag);
        emitNode(parser, "onopentag", parser.tag);
        if (!selfClosing) {
          if (!parser.noscript && parser.tagName.toLowerCase() === "script") {
            parser.state = S2.SCRIPT;
          } else {
            parser.state = S2.TEXT;
          }
          parser.tag = null;
          parser.tagName = "";
        }
        parser.attribName = parser.attribValue = "";
        parser.attribList.length = 0;
      }
      function closeTag(parser) {
        if (!parser.tagName) {
          strictFail(parser, "Weird empty close tag.");
          parser.textNode += "</>";
          parser.state = S2.TEXT;
          return;
        }
        if (parser.script) {
          if (parser.tagName !== "script") {
            parser.script += "</" + parser.tagName + ">";
            parser.tagName = "";
            parser.state = S2.SCRIPT;
            return;
          }
          emitNode(parser, "onscript", parser.script);
          parser.script = "";
        }
        var t2 = parser.tags.length;
        var tagName = parser.tagName;
        if (!parser.strict) {
          tagName = tagName[parser.looseCase]();
        }
        var closeTo = tagName;
        while (t2--) {
          var close = parser.tags[t2];
          if (close.name !== closeTo) {
            strictFail(parser, "Unexpected close tag");
          } else {
            break;
          }
        }
        if (t2 < 0) {
          strictFail(parser, "Unmatched closing tag: " + parser.tagName);
          parser.textNode += "</" + parser.tagName + ">";
          parser.state = S2.TEXT;
          return;
        }
        parser.tagName = tagName;
        var s3 = parser.tags.length;
        while (s3-- > t2) {
          var tag = parser.tag = parser.tags.pop();
          parser.tagName = parser.tag.name;
          emitNode(parser, "onclosetag", parser.tagName);
          var x2 = {};
          for (var i2 in tag.ns) {
            x2[i2] = tag.ns[i2];
          }
          var parent = parser.tags[parser.tags.length - 1] || parser;
          if (parser.opt.xmlns && tag.ns !== parent.ns) {
            Object.keys(tag.ns).forEach(function(p2) {
              var n2 = tag.ns[p2];
              emitNode(parser, "onclosenamespace", { prefix: p2, uri: n2 });
            });
          }
        }
        if (t2 === 0) parser.closedRoot = true;
        parser.tagName = parser.attribValue = parser.attribName = "";
        parser.attribList.length = 0;
        parser.state = S2.TEXT;
      }
      function parseEntity(parser) {
        var entity = parser.entity;
        var entityLC = entity.toLowerCase();
        var num;
        var numStr = "";
        if (parser.ENTITIES[entity]) {
          return parser.ENTITIES[entity];
        }
        if (parser.ENTITIES[entityLC]) {
          return parser.ENTITIES[entityLC];
        }
        entity = entityLC;
        if (entity.charAt(0) === "#") {
          if (entity.charAt(1) === "x") {
            entity = entity.slice(2);
            num = parseInt(entity, 16);
            numStr = num.toString(16);
          } else {
            entity = entity.slice(1);
            num = parseInt(entity, 10);
            numStr = num.toString(10);
          }
        }
        entity = entity.replace(/^0+/, "");
        if (isNaN(num) || numStr.toLowerCase() !== entity || num < 0 || num > 1114111) {
          strictFail(parser, "Invalid character entity");
          return "&" + parser.entity + ";";
        }
        return String.fromCodePoint(num);
      }
      function beginWhiteSpace(parser, c2) {
        if (c2 === "<") {
          parser.state = S2.OPEN_WAKA;
          parser.startTagPosition = parser.position;
        } else if (!isWhitespace(c2)) {
          strictFail(parser, "Non-whitespace before first tag.");
          parser.textNode = c2;
          parser.state = S2.TEXT;
        }
      }
      function charAt(chunk, i2) {
        var result = "";
        if (i2 < chunk.length) {
          result = chunk.charAt(i2);
        }
        return result;
      }
      function write(chunk) {
        var parser = this;
        if (this.error) {
          throw this.error;
        }
        if (parser.closed) {
          return error(
            parser,
            "Cannot write after close. Assign an onready handler."
          );
        }
        if (chunk === null) {
          return end(parser);
        }
        if (typeof chunk === "object") {
          chunk = chunk.toString();
        }
        var i2 = 0;
        var c2 = "";
        while (true) {
          c2 = charAt(chunk, i2++);
          parser.c = c2;
          if (!c2) {
            break;
          }
          if (parser.trackPosition) {
            parser.position++;
            if (c2 === "\n") {
              parser.line++;
              parser.column = 0;
            } else {
              parser.column++;
            }
          }
          switch (parser.state) {
            case S2.BEGIN:
              parser.state = S2.BEGIN_WHITESPACE;
              if (c2 === "\uFEFF") {
                continue;
              }
              beginWhiteSpace(parser, c2);
              continue;
            case S2.BEGIN_WHITESPACE:
              beginWhiteSpace(parser, c2);
              continue;
            case S2.TEXT:
              if (parser.sawRoot && !parser.closedRoot) {
                var starti = i2 - 1;
                while (c2 && c2 !== "<" && c2 !== "&") {
                  c2 = charAt(chunk, i2++);
                  if (c2 && parser.trackPosition) {
                    parser.position++;
                    if (c2 === "\n") {
                      parser.line++;
                      parser.column = 0;
                    } else {
                      parser.column++;
                    }
                  }
                }
                parser.textNode += chunk.substring(starti, i2 - 1);
              }
              if (c2 === "<" && !(parser.sawRoot && parser.closedRoot && !parser.strict)) {
                parser.state = S2.OPEN_WAKA;
                parser.startTagPosition = parser.position;
              } else {
                if (!isWhitespace(c2) && (!parser.sawRoot || parser.closedRoot)) {
                  strictFail(parser, "Text data outside of root node.");
                }
                if (c2 === "&") {
                  parser.state = S2.TEXT_ENTITY;
                } else {
                  parser.textNode += c2;
                }
              }
              continue;
            case S2.SCRIPT:
              if (c2 === "<") {
                parser.state = S2.SCRIPT_ENDING;
              } else {
                parser.script += c2;
              }
              continue;
            case S2.SCRIPT_ENDING:
              if (c2 === "/") {
                parser.state = S2.CLOSE_TAG;
              } else {
                parser.script += "<" + c2;
                parser.state = S2.SCRIPT;
              }
              continue;
            case S2.OPEN_WAKA:
              if (c2 === "!") {
                parser.state = S2.SGML_DECL;
                parser.sgmlDecl = "";
              } else if (isWhitespace(c2)) ;
              else if (isMatch(nameStart, c2)) {
                parser.state = S2.OPEN_TAG;
                parser.tagName = c2;
              } else if (c2 === "/") {
                parser.state = S2.CLOSE_TAG;
                parser.tagName = "";
              } else if (c2 === "?") {
                parser.state = S2.PROC_INST;
                parser.procInstName = parser.procInstBody = "";
              } else {
                strictFail(parser, "Unencoded <");
                if (parser.startTagPosition + 1 < parser.position) {
                  var pad = parser.position - parser.startTagPosition;
                  c2 = new Array(pad).join(" ") + c2;
                }
                parser.textNode += "<" + c2;
                parser.state = S2.TEXT;
              }
              continue;
            case S2.SGML_DECL:
              if (parser.sgmlDecl + c2 === "--") {
                parser.state = S2.COMMENT;
                parser.comment = "";
                parser.sgmlDecl = "";
                continue;
              }
              if (parser.doctype && parser.doctype !== true && parser.sgmlDecl) {
                parser.state = S2.DOCTYPE_DTD;
                parser.doctype += "<!" + parser.sgmlDecl + c2;
                parser.sgmlDecl = "";
              } else if ((parser.sgmlDecl + c2).toUpperCase() === CDATA) {
                emitNode(parser, "onopencdata");
                parser.state = S2.CDATA;
                parser.sgmlDecl = "";
                parser.cdata = "";
              } else if ((parser.sgmlDecl + c2).toUpperCase() === DOCTYPE) {
                parser.state = S2.DOCTYPE;
                if (parser.doctype || parser.sawRoot) {
                  strictFail(
                    parser,
                    "Inappropriately located doctype declaration"
                  );
                }
                parser.doctype = "";
                parser.sgmlDecl = "";
              } else if (c2 === ">") {
                emitNode(parser, "onsgmldeclaration", parser.sgmlDecl);
                parser.sgmlDecl = "";
                parser.state = S2.TEXT;
              } else if (isQuote(c2)) {
                parser.state = S2.SGML_DECL_QUOTED;
                parser.sgmlDecl += c2;
              } else {
                parser.sgmlDecl += c2;
              }
              continue;
            case S2.SGML_DECL_QUOTED:
              if (c2 === parser.q) {
                parser.state = S2.SGML_DECL;
                parser.q = "";
              }
              parser.sgmlDecl += c2;
              continue;
            case S2.DOCTYPE:
              if (c2 === ">") {
                parser.state = S2.TEXT;
                emitNode(parser, "ondoctype", parser.doctype);
                parser.doctype = true;
              } else {
                parser.doctype += c2;
                if (c2 === "[") {
                  parser.state = S2.DOCTYPE_DTD;
                } else if (isQuote(c2)) {
                  parser.state = S2.DOCTYPE_QUOTED;
                  parser.q = c2;
                }
              }
              continue;
            case S2.DOCTYPE_QUOTED:
              parser.doctype += c2;
              if (c2 === parser.q) {
                parser.q = "";
                parser.state = S2.DOCTYPE;
              }
              continue;
            case S2.DOCTYPE_DTD:
              if (c2 === "]") {
                parser.doctype += c2;
                parser.state = S2.DOCTYPE;
              } else if (c2 === "<") {
                parser.state = S2.OPEN_WAKA;
                parser.startTagPosition = parser.position;
              } else if (isQuote(c2)) {
                parser.doctype += c2;
                parser.state = S2.DOCTYPE_DTD_QUOTED;
                parser.q = c2;
              } else {
                parser.doctype += c2;
              }
              continue;
            case S2.DOCTYPE_DTD_QUOTED:
              parser.doctype += c2;
              if (c2 === parser.q) {
                parser.state = S2.DOCTYPE_DTD;
                parser.q = "";
              }
              continue;
            case S2.COMMENT:
              if (c2 === "-") {
                parser.state = S2.COMMENT_ENDING;
              } else {
                parser.comment += c2;
              }
              continue;
            case S2.COMMENT_ENDING:
              if (c2 === "-") {
                parser.state = S2.COMMENT_ENDED;
                parser.comment = textopts(parser.opt, parser.comment);
                if (parser.comment) {
                  emitNode(parser, "oncomment", parser.comment);
                }
                parser.comment = "";
              } else {
                parser.comment += "-" + c2;
                parser.state = S2.COMMENT;
              }
              continue;
            case S2.COMMENT_ENDED:
              if (c2 !== ">") {
                strictFail(parser, "Malformed comment");
                parser.comment += "--" + c2;
                parser.state = S2.COMMENT;
              } else if (parser.doctype && parser.doctype !== true) {
                parser.state = S2.DOCTYPE_DTD;
              } else {
                parser.state = S2.TEXT;
              }
              continue;
            case S2.CDATA:
              var starti = i2 - 1;
              while (c2 && c2 !== "]") {
                c2 = charAt(chunk, i2++);
                if (c2 && parser.trackPosition) {
                  parser.position++;
                  if (c2 === "\n") {
                    parser.line++;
                    parser.column = 0;
                  } else {
                    parser.column++;
                  }
                }
              }
              parser.cdata += chunk.substring(starti, i2 - 1);
              if (c2 === "]") {
                parser.state = S2.CDATA_ENDING;
              }
              continue;
            case S2.CDATA_ENDING:
              if (c2 === "]") {
                parser.state = S2.CDATA_ENDING_2;
              } else {
                parser.cdata += "]" + c2;
                parser.state = S2.CDATA;
              }
              continue;
            case S2.CDATA_ENDING_2:
              if (c2 === ">") {
                if (parser.cdata) {
                  emitNode(parser, "oncdata", parser.cdata);
                }
                emitNode(parser, "onclosecdata");
                parser.cdata = "";
                parser.state = S2.TEXT;
              } else if (c2 === "]") {
                parser.cdata += "]";
              } else {
                parser.cdata += "]]" + c2;
                parser.state = S2.CDATA;
              }
              continue;
            case S2.PROC_INST:
              if (c2 === "?") {
                parser.state = S2.PROC_INST_ENDING;
              } else if (isWhitespace(c2)) {
                parser.state = S2.PROC_INST_BODY;
              } else {
                parser.procInstName += c2;
              }
              continue;
            case S2.PROC_INST_BODY:
              if (!parser.procInstBody && isWhitespace(c2)) {
                continue;
              } else if (c2 === "?") {
                parser.state = S2.PROC_INST_ENDING;
              } else {
                parser.procInstBody += c2;
              }
              continue;
            case S2.PROC_INST_ENDING:
              if (c2 === ">") {
                emitNode(parser, "onprocessinginstruction", {
                  name: parser.procInstName,
                  body: parser.procInstBody
                });
                parser.procInstName = parser.procInstBody = "";
                parser.state = S2.TEXT;
              } else {
                parser.procInstBody += "?" + c2;
                parser.state = S2.PROC_INST_BODY;
              }
              continue;
            case S2.OPEN_TAG:
              if (isMatch(nameBody, c2)) {
                parser.tagName += c2;
              } else {
                newTag(parser);
                if (c2 === ">") {
                  openTag(parser);
                } else if (c2 === "/") {
                  parser.state = S2.OPEN_TAG_SLASH;
                } else {
                  if (!isWhitespace(c2)) {
                    strictFail(parser, "Invalid character in tag name");
                  }
                  parser.state = S2.ATTRIB;
                }
              }
              continue;
            case S2.OPEN_TAG_SLASH:
              if (c2 === ">") {
                openTag(parser, true);
                closeTag(parser);
              } else {
                strictFail(
                  parser,
                  "Forward-slash in opening tag not followed by >"
                );
                parser.state = S2.ATTRIB;
              }
              continue;
            case S2.ATTRIB:
              if (isWhitespace(c2)) {
                continue;
              } else if (c2 === ">") {
                openTag(parser);
              } else if (c2 === "/") {
                parser.state = S2.OPEN_TAG_SLASH;
              } else if (isMatch(nameStart, c2)) {
                parser.attribName = c2;
                parser.attribValue = "";
                parser.state = S2.ATTRIB_NAME;
              } else {
                strictFail(parser, "Invalid attribute name");
              }
              continue;
            case S2.ATTRIB_NAME:
              if (c2 === "=") {
                parser.state = S2.ATTRIB_VALUE;
              } else if (c2 === ">") {
                strictFail(parser, "Attribute without value");
                parser.attribValue = parser.attribName;
                attrib(parser);
                openTag(parser);
              } else if (isWhitespace(c2)) {
                parser.state = S2.ATTRIB_NAME_SAW_WHITE;
              } else if (isMatch(nameBody, c2)) {
                parser.attribName += c2;
              } else {
                strictFail(parser, "Invalid attribute name");
              }
              continue;
            case S2.ATTRIB_NAME_SAW_WHITE:
              if (c2 === "=") {
                parser.state = S2.ATTRIB_VALUE;
              } else if (isWhitespace(c2)) {
                continue;
              } else {
                strictFail(parser, "Attribute without value");
                parser.tag.attributes[parser.attribName] = "";
                parser.attribValue = "";
                emitNode(parser, "onattribute", {
                  name: parser.attribName,
                  value: ""
                });
                parser.attribName = "";
                if (c2 === ">") {
                  openTag(parser);
                } else if (isMatch(nameStart, c2)) {
                  parser.attribName = c2;
                  parser.state = S2.ATTRIB_NAME;
                } else {
                  strictFail(parser, "Invalid attribute name");
                  parser.state = S2.ATTRIB;
                }
              }
              continue;
            case S2.ATTRIB_VALUE:
              if (isWhitespace(c2)) {
                continue;
              } else if (isQuote(c2)) {
                parser.q = c2;
                parser.state = S2.ATTRIB_VALUE_QUOTED;
              } else {
                if (!parser.opt.unquotedAttributeValues) {
                  error(parser, "Unquoted attribute value");
                }
                parser.state = S2.ATTRIB_VALUE_UNQUOTED;
                parser.attribValue = c2;
              }
              continue;
            case S2.ATTRIB_VALUE_QUOTED:
              if (c2 !== parser.q) {
                if (c2 === "&") {
                  parser.state = S2.ATTRIB_VALUE_ENTITY_Q;
                } else {
                  parser.attribValue += c2;
                }
                continue;
              }
              attrib(parser);
              parser.q = "";
              parser.state = S2.ATTRIB_VALUE_CLOSED;
              continue;
            case S2.ATTRIB_VALUE_CLOSED:
              if (isWhitespace(c2)) {
                parser.state = S2.ATTRIB;
              } else if (c2 === ">") {
                openTag(parser);
              } else if (c2 === "/") {
                parser.state = S2.OPEN_TAG_SLASH;
              } else if (isMatch(nameStart, c2)) {
                strictFail(parser, "No whitespace between attributes");
                parser.attribName = c2;
                parser.attribValue = "";
                parser.state = S2.ATTRIB_NAME;
              } else {
                strictFail(parser, "Invalid attribute name");
              }
              continue;
            case S2.ATTRIB_VALUE_UNQUOTED:
              if (!isAttribEnd(c2)) {
                if (c2 === "&") {
                  parser.state = S2.ATTRIB_VALUE_ENTITY_U;
                } else {
                  parser.attribValue += c2;
                }
                continue;
              }
              attrib(parser);
              if (c2 === ">") {
                openTag(parser);
              } else {
                parser.state = S2.ATTRIB;
              }
              continue;
            case S2.CLOSE_TAG:
              if (!parser.tagName) {
                if (isWhitespace(c2)) {
                  continue;
                } else if (notMatch(nameStart, c2)) {
                  if (parser.script) {
                    parser.script += "</" + c2;
                    parser.state = S2.SCRIPT;
                  } else {
                    strictFail(parser, "Invalid tagname in closing tag.");
                  }
                } else {
                  parser.tagName = c2;
                }
              } else if (c2 === ">") {
                closeTag(parser);
              } else if (isMatch(nameBody, c2)) {
                parser.tagName += c2;
              } else if (parser.script) {
                parser.script += "</" + parser.tagName;
                parser.tagName = "";
                parser.state = S2.SCRIPT;
              } else {
                if (!isWhitespace(c2)) {
                  strictFail(parser, "Invalid tagname in closing tag");
                }
                parser.state = S2.CLOSE_TAG_SAW_WHITE;
              }
              continue;
            case S2.CLOSE_TAG_SAW_WHITE:
              if (isWhitespace(c2)) {
                continue;
              }
              if (c2 === ">") {
                closeTag(parser);
              } else {
                strictFail(parser, "Invalid characters in closing tag");
              }
              continue;
            case S2.TEXT_ENTITY:
            case S2.ATTRIB_VALUE_ENTITY_Q:
            case S2.ATTRIB_VALUE_ENTITY_U:
              var returnState;
              var buffer2;
              switch (parser.state) {
                case S2.TEXT_ENTITY:
                  returnState = S2.TEXT;
                  buffer2 = "textNode";
                  break;
                case S2.ATTRIB_VALUE_ENTITY_Q:
                  returnState = S2.ATTRIB_VALUE_QUOTED;
                  buffer2 = "attribValue";
                  break;
                case S2.ATTRIB_VALUE_ENTITY_U:
                  returnState = S2.ATTRIB_VALUE_UNQUOTED;
                  buffer2 = "attribValue";
                  break;
              }
              if (c2 === ";") {
                var parsedEntity = parseEntity(parser);
                if (parser.opt.unparsedEntities && !Object.values(sax2.XML_ENTITIES).includes(parsedEntity)) {
                  parser.entity = "";
                  parser.state = returnState;
                  parser.write(parsedEntity);
                } else {
                  parser[buffer2] += parsedEntity;
                  parser.entity = "";
                  parser.state = returnState;
                }
              } else if (isMatch(parser.entity.length ? entityBody : entityStart, c2)) {
                parser.entity += c2;
              } else {
                strictFail(parser, "Invalid character in entity name");
                parser[buffer2] += "&" + parser.entity + c2;
                parser.entity = "";
                parser.state = returnState;
              }
              continue;
            default: {
              throw new Error(parser, "Unknown state: " + parser.state);
            }
          }
        }
        if (parser.position >= parser.bufferCheckPosition) {
          checkBufferLength(parser);
        }
        return parser;
      }
      /*! http://mths.be/fromcodepoint v0.1.0 by @mathias */
      if (!String.fromCodePoint) {
        (function() {
          var stringFromCharCode = String.fromCharCode;
          var floor = Math.floor;
          var fromCodePoint = function() {
            var MAX_SIZE = 16384;
            var codeUnits = [];
            var highSurrogate;
            var lowSurrogate;
            var index = -1;
            var length = arguments.length;
            if (!length) {
              return "";
            }
            var result = "";
            while (++index < length) {
              var codePoint = Number(arguments[index]);
              if (!isFinite(codePoint) || // `NaN`, `+Infinity`, or `-Infinity`
              codePoint < 0 || // not a valid Unicode code point
              codePoint > 1114111 || // not a valid Unicode code point
              floor(codePoint) !== codePoint) {
                throw RangeError("Invalid code point: " + codePoint);
              }
              if (codePoint <= 65535) {
                codeUnits.push(codePoint);
              } else {
                codePoint -= 65536;
                highSurrogate = (codePoint >> 10) + 55296;
                lowSurrogate = codePoint % 1024 + 56320;
                codeUnits.push(highSurrogate, lowSurrogate);
              }
              if (index + 1 === length || codeUnits.length > MAX_SIZE) {
                result += stringFromCharCode.apply(null, codeUnits);
                codeUnits.length = 0;
              }
            }
            return result;
          };
          if (Object.defineProperty) {
            Object.defineProperty(String, "fromCodePoint", {
              value: fromCodePoint,
              configurable: true,
              writable: true
            });
          } else {
            String.fromCodePoint = fromCodePoint;
          }
        })();
      }
    })(exports$1);
  })(sax$1);
  return sax$1;
}
var saxExports = requireSax();
const sax = /* @__PURE__ */ getDefaultExportFromCjs(saxExports);
const ANNOTATION_URI = "http:///org/eclipse/emf/ecore/util/ExtendedMetaData";
const UNSPECIFIED_CONTENT = 0;
const EMPTY_CONTENT = 1;
const SIMPLE_CONTENT = 2;
const MIXED_CONTENT = 3;
const ELEMENT_ONLY_CONTENT = 4;
const UNSPECIFIED_FEATURE = 0;
const SIMPLE_FEATURE = 1;
const ELEMENT_FEATURE = 2;
const ATTRIBUTE_FEATURE = 3;
const ELEMENT_WILDCARD_FEATURE = 4;
const ATTRIBUTE_WILDCARD_FEATURE = 5;
const GROUP_FEATURE = 6;
class ExtendedMetaData {
  constructor() {
    this.contentKindCache = /* @__PURE__ */ new Map();
    this.featureKindCache = /* @__PURE__ */ new Map();
    this.nameCache = /* @__PURE__ */ new Map();
    this.namespaceCache = /* @__PURE__ */ new Map();
    this.simpleContentFeatureCache = /* @__PURE__ */ new Map();
  }
  /**
   * Get the content kind for a class (class-level annotation).
   */
  getContentKind(eClass) {
    let kind = this.contentKindCache.get(eClass);
    if (kind !== void 0)
      return kind;
    kind = UNSPECIFIED_CONTENT;
    const kindStr = this.getAnnotationDetail(eClass, "kind");
    if (kindStr) {
      switch (kindStr) {
        case "simple":
          kind = SIMPLE_CONTENT;
          break;
        case "mixed":
          kind = MIXED_CONTENT;
          break;
        case "empty":
          kind = EMPTY_CONTENT;
          break;
        case "elementOnly":
          kind = ELEMENT_ONLY_CONTENT;
          break;
      }
    }
    this.contentKindCache.set(eClass, kind);
    return kind;
  }
  /**
   * Get the feature kind (element, attribute, simple, etc.)
   */
  getFeatureKind(feature) {
    let kind = this.featureKindCache.get(feature);
    if (kind !== void 0)
      return kind;
    kind = UNSPECIFIED_FEATURE;
    const kindStr = this.getAnnotationDetail(feature, "kind");
    if (kindStr) {
      switch (kindStr) {
        case "simple":
          kind = SIMPLE_FEATURE;
          break;
        case "element":
          kind = ELEMENT_FEATURE;
          break;
        case "attribute":
          kind = ATTRIBUTE_FEATURE;
          break;
        case "elementWildcard":
          kind = ELEMENT_WILDCARD_FEATURE;
          break;
        case "attributeWildcard":
          kind = ATTRIBUTE_WILDCARD_FEATURE;
          break;
        case "group":
          kind = GROUP_FEATURE;
          break;
      }
    }
    this.featureKindCache.set(feature, kind);
    return kind;
  }
  /**
   * Get the XML name for a feature from its EMD annotation.
   * Returns null if no annotation is present.
   */
  getName(feature) {
    if (this.nameCache.has(feature))
      return this.nameCache.get(feature);
    const name = this.getAnnotationDetail(feature, "name") ?? null;
    this.nameCache.set(feature, name);
    return name;
  }
  /**
   * Get the namespace URI for a feature from its EMD annotation.
   * Resolves special values:
   * - `##targetNamespace` → owning EPackage's nsURI
   * - `##local` → null (no namespace)
   */
  getNamespace(feature) {
    if (this.namespaceCache.has(feature))
      return this.namespaceCache.get(feature);
    const rawNs = this.getAnnotationDetail(feature, "namespace") ?? null;
    let ns = rawNs;
    if (ns === "##targetNamespace") {
      const eClass = feature.getEContainingClass?.();
      const pkg = eClass?.getEPackage?.();
      ns = pkg?.getNsURI?.() ?? null;
      if (ns === null)
        return null;
    } else if (ns === "##local") {
      ns = null;
    }
    this.namespaceCache.set(feature, ns);
    return ns;
  }
  /**
   * Find the feature that represents simple text content (name=":0", kind="simple").
   */
  getSimpleContentFeature(eClass) {
    if (this.simpleContentFeatureCache.has(eClass)) {
      return this.simpleContentFeatureCache.get(eClass);
    }
    let result = null;
    for (const feature of eClass.getEAllStructuralFeatures()) {
      const name = this.getName(feature);
      if (name === ":0") {
        result = feature;
        break;
      }
    }
    this.simpleContentFeatureCache.set(eClass, result);
    return result;
  }
  /**
   * Find a feature by its EMD namespace and name, where the feature kind is "element".
   */
  getElementFeature(eClass, namespace, name) {
    for (const feature of eClass.getEAllStructuralFeatures()) {
      const fKind = this.getFeatureKind(feature);
      if (fKind !== ELEMENT_FEATURE)
        continue;
      const fName = this.getName(feature) ?? feature.getName();
      if (fName !== name)
        continue;
      const fNs = this.getNamespace(feature);
      if (namespace && fNs && fNs === namespace)
        return feature;
      if (!namespace && !fNs)
        return feature;
      if (!fNs && fName === name)
        return feature;
    }
    return null;
  }
  /**
   * Find a feature by its EMD namespace and name, where the feature kind is "attribute".
   */
  getAttributeFeature(eClass, namespace, name) {
    for (const feature of eClass.getEAllStructuralFeatures()) {
      const fKind = this.getFeatureKind(feature);
      if (fKind !== ATTRIBUTE_FEATURE)
        continue;
      const fName = this.getName(feature) ?? feature.getName();
      if (fName !== name)
        continue;
      const fNs = this.getNamespace(feature);
      if (namespace && fNs && fNs === namespace)
        return feature;
      if (!namespace && !fNs)
        return feature;
      if (!fNs && fName === name)
        return feature;
    }
    return null;
  }
  /**
   * Find any feature by EMD namespace and name (element or attribute).
   */
  getFeature(eClass, namespace, name, isElement) {
    if (isElement) {
      return this.getElementFeature(eClass, namespace, name);
    }
    return this.getAttributeFeature(eClass, namespace, name);
  }
  /**
   * Read a detail value from the ExtendedMetaData annotation on a model element.
   */
  getAnnotationDetail(element, key) {
    if (!element || typeof element.getEAnnotation !== "function")
      return void 0;
    const annotation = element.getEAnnotation(ANNOTATION_URI);
    if (!annotation)
      return void 0;
    const details = annotation.getDetails();
    if (!details || typeof details.getByKey !== "function")
      return void 0;
    return details.getByKey(key);
  }
  /**
   * Read the ExtendedMetaData annotation details as a Map.
   */
  getAnnotation(element) {
    if (!element || typeof element.getEAnnotation !== "function")
      return null;
    const annotation = element.getEAnnotation(ANNOTATION_URI);
    if (!annotation)
      return null;
    const details = annotation.getDetails();
    if (!details)
      return null;
    if (typeof details.getByKey === "function") {
      return details.toMap();
    }
    return null;
  }
}
const OPTION_FEATURE_NAME_MAP = "FEATURE_NAME_MAP";
const OPTION_EXTENDED_META_DATA = "EXTENDED_META_DATA";
const DATATYPE_SINGLE = 1;
const DATATYPE_IS_MANY = 2;
const IS_MANY_ADD = 3;
const IS_MANY_MOVE = 4;
const OTHER = 5;
class NamespaceSupport {
  constructor() {
    this.contexts = [];
    this.currentContext = /* @__PURE__ */ new Map();
  }
  pushContext() {
    this.contexts.push(new Map(this.currentContext));
  }
  popContext() {
    const previous = this.contexts.pop();
    const popped = /* @__PURE__ */ new Map();
    if (previous) {
      for (const [prefix, uri] of this.currentContext) {
        if (!previous.has(prefix) || previous.get(prefix) !== uri) {
          popped.set(prefix, uri);
        }
      }
      this.currentContext = previous;
    }
    return popped;
  }
  declarePrefix(prefix, uri) {
    this.currentContext.set(prefix, uri);
  }
  getURI(prefix) {
    return this.currentContext.get(prefix) ?? null;
  }
  getPrefix(uri) {
    for (const [prefix, nsUri] of this.currentContext) {
      if (nsUri === uri) {
        return prefix;
      }
    }
    return null;
  }
}
class XMLHelperImpl {
  constructor(resource) {
    this.noNamespacePackage = null;
    this.resource = null;
    this.xmlResource = null;
    this.resourceURI = null;
    this.packageRegistry = EPackageRegistry.INSTANCE;
    this.packages = /* @__PURE__ */ new Map();
    this.featuresToKinds = /* @__PURE__ */ new Map();
    this.prefixesToURIs = /* @__PURE__ */ new Map();
    this.urisToPrefixes = /* @__PURE__ */ new Map();
    this.namespaceSupport = new NamespaceSupport();
    this.allPrefixToURI = [];
    this.featureNameMap = /* @__PURE__ */ new Map();
    this.reverseFeatureNameMap = /* @__PURE__ */ new Map();
    this.extendedMetaData = null;
    if (resource) {
      this.setResource(resource);
    }
  }
  setResource(resource) {
    this.resource = resource;
    this.xmlResource = resource && "getID" in resource ? resource : null;
    if (resource) {
      this.resourceURI = resource.getURI();
      const resourceSet = resource.getResourceSet();
      if (resourceSet) {
        this.packageRegistry = resourceSet.getPackageRegistry();
      } else {
        this.packageRegistry = EPackageRegistry.INSTANCE;
      }
    }
  }
  setOptions(options) {
    const nameMap = options.get(OPTION_FEATURE_NAME_MAP);
    if (nameMap) {
      this.featureNameMap = new Map(nameMap);
      this.reverseFeatureNameMap = /* @__PURE__ */ new Map();
      for (const [featureName, xmlName] of nameMap) {
        this.reverseFeatureNameMap.set(xmlName, featureName);
      }
    }
    const emd = options.get(OPTION_EXTENDED_META_DATA);
    if (emd instanceof ExtendedMetaData) {
      this.extendedMetaData = emd;
    } else if (emd === true) {
      this.extendedMetaData = new ExtendedMetaData();
    }
  }
  getExtendedMetaData() {
    return this.extendedMetaData;
  }
  setNoNamespacePackage(pkg) {
    this.noNamespacePackage = pkg;
  }
  getNoNamespacePackage() {
    return this.noNamespacePackage;
  }
  getResource() {
    return this.resource;
  }
  getName(element) {
    return element.getName() || "";
  }
  getQName(classifier) {
    const ePackage = classifier.getEPackage();
    if (ePackage) {
      const prefix = this.getPrefixForPackage(ePackage);
      if (prefix && prefix.length > 0) {
        return prefix + ":" + classifier.getName();
      }
    }
    return classifier.getName() || "";
  }
  getPrefix(namespaceURI) {
    if (namespaceURI === null) {
      return null;
    }
    const prefixes = this.urisToPrefixes.get(namespaceURI);
    return prefixes && prefixes.length > 0 ? prefixes[0] : null;
  }
  getPrefixForPackage(ePackage) {
    let prefix = this.packages.get(ePackage);
    if (prefix === void 0) {
      const nsURI = ePackage.getNsURI();
      if (nsURI) {
        const foundPrefix = this.getPrefix(nsURI);
        prefix = foundPrefix !== null ? foundPrefix : ePackage.getNsPrefix() || "";
      } else {
        prefix = ePackage.getNsPrefix() || "";
      }
      this.packages.set(ePackage, prefix || "");
    }
    return prefix || null;
  }
  getNamespaceURI(prefix) {
    return this.prefixesToURIs.get(prefix) ?? null;
  }
  getURI(prefix) {
    return this.namespaceSupport.getURI(prefix);
  }
  addPrefix(prefix, uri) {
    this.namespaceSupport.declarePrefix(prefix, uri);
    this.prefixesToURIs.set(prefix, uri);
    let prefixes = this.urisToPrefixes.get(uri);
    if (!prefixes) {
      prefixes = [];
      this.urisToPrefixes.set(uri, prefixes);
    }
    if (!prefixes.includes(prefix)) {
      prefixes.push(prefix);
    }
    this.allPrefixToURI.push(prefix, uri);
  }
  pushContext() {
    this.namespaceSupport.pushContext();
  }
  popContext() {
    this.namespaceSupport.popContext();
  }
  popContextWithFactories(prefixesToFactories) {
    const popped = this.namespaceSupport.popContext();
    for (const [prefix] of popped) {
      prefixesToFactories.delete(prefix);
    }
  }
  recordPrefixToURIMapping() {
  }
  getPrefixToNamespaceMap() {
    return new Map(this.prefixesToURIs);
  }
  createObject(eFactory, type) {
    if (type && "getESuperTypes" in type) {
      return eFactory.create(type);
    }
    return null;
  }
  getType(eFactory, typeName) {
    const ePackage = eFactory.getEPackage();
    if (ePackage) {
      return ePackage.getEClassifier(typeName);
    }
    return null;
  }
  getFeature(eClass, namespaceURI, name) {
    if (this.extendedMetaData) {
      const emdFeature = this.extendedMetaData.getAttributeFeature(eClass, namespaceURI, name);
      if (emdFeature) {
        this.computeFeatureKind(emdFeature);
        return emdFeature;
      }
    }
    let feature = eClass.getEStructuralFeature(name);
    if (!feature && this.reverseFeatureNameMap.size > 0) {
      const featureName = this.reverseFeatureNameMap.get(name);
      if (featureName) {
        feature = eClass.getEStructuralFeature(featureName);
      }
    }
    if (feature) {
      this.computeFeatureKind(feature);
    }
    return feature;
  }
  getFeatureWithElement(eClass, namespaceURI, name, isElement) {
    if (this.extendedMetaData) {
      const emdFeature = this.extendedMetaData.getFeature(eClass, namespaceURI, name, isElement);
      if (emdFeature) {
        this.computeFeatureKind(emdFeature);
        return emdFeature;
      }
    }
    return this.getFeature(eClass, namespaceURI, name);
  }
  getSerializedFeatureName(feature) {
    if (this.extendedMetaData) {
      const emdName = this.extendedMetaData.getName(feature);
      if (emdName && !emdName.startsWith(":")) {
        return emdName;
      }
    }
    const name = feature.getName() || "";
    if (this.featureNameMap.size > 0) {
      const mapped = this.featureNameMap.get(name);
      if (mapped !== void 0) {
        return mapped;
      }
    }
    return name;
  }
  getFeatureKind(feature) {
    let kind = this.featuresToKinds.get(feature);
    if (kind === void 0) {
      this.computeFeatureKind(feature);
      kind = this.featuresToKinds.get(feature);
    }
    return kind ?? OTHER;
  }
  computeFeatureKind(feature) {
    const eClassifier = feature.getEType();
    const isReference = "isContainment" in feature && typeof feature.isContainment === "function";
    if (!isReference && (!eClassifier || !("getESuperTypes" in eClassifier))) {
      if (feature.isMany()) {
        this.featuresToKinds.set(feature, DATATYPE_IS_MANY);
      } else {
        this.featuresToKinds.set(feature, DATATYPE_SINGLE);
      }
    } else {
      if (feature.isMany()) {
        if ("getEOpposite" in feature && typeof feature.getEOpposite === "function") {
          const reference = feature;
          const opposite = reference.getEOpposite();
          if (!opposite || typeof opposite.isTransient !== "function" || opposite.isTransient() || !opposite.isMany()) {
            this.featuresToKinds.set(feature, IS_MANY_ADD);
          } else {
            this.featuresToKinds.set(feature, IS_MANY_MOVE);
          }
        } else {
          this.featuresToKinds.set(feature, IS_MANY_ADD);
        }
      } else {
        this.featuresToKinds.set(feature, OTHER);
      }
    }
  }
  setValue(eObject, feature, value, position) {
    if (feature.isMany()) {
      let list = eObject.eGet(feature);
      if (!list) {
        list = [];
        eObject.eSet(feature, list);
      }
      if (position === -1) {
        list.push(value);
      } else if (position === -2) {
        list.unshift(value);
      } else {
        list.splice(position, 0, value);
      }
    } else {
      eObject.eSet(feature, value);
    }
    if (value && typeof value === "object") {
      const featureName = feature.getName();
      if (featureName === "eClassifiers" && "setEPackage" in value) {
        value.setEPackage(eObject);
      }
      if (featureName === "eStructuralFeatures" && "setEContainingClass" in value) {
        value.setEContainingClass(eObject);
      }
      if (featureName === "eOperations" && "setEContainingClass" in value) {
        value.setEContainingClass(eObject);
      }
    }
  }
  setManyReference(reference, location) {
    const errors = [];
    const eObject = reference.getObject();
    const feature = reference.getFeature();
    const values = reference.getValues();
    const positions = reference.getPositions();
    for (let i2 = 0; i2 < values.length; i2++) {
      const value = values[i2];
      const position = positions[i2];
      try {
        this.setValue(eObject, feature, value, position);
      } catch (e2) {
        errors.push(e2 instanceof Error ? e2 : new Error(String(e2)));
      }
    }
    return errors;
  }
  deresolve(uri) {
    if (this.resourceURI && !uri.isRelative()) {
      return uri.deresolve(this.resourceURI);
    }
    return uri;
  }
  resolve(relative, base) {
    return relative.resolve(base);
  }
  getID(obj) {
    return this.xmlResource ? this.xmlResource.getID(obj) : null;
  }
  convertToString(factory, dataType, data) {
    return factory.convertToString(dataType, data);
  }
}
class EProxyImpl {
  constructor(proxyURI, eClass) {
    this._proxyURI = null;
    this._eClass = null;
    this._resource = null;
    this._proxyURI = proxyURI;
    this._eClass = eClass || null;
  }
  // --- Proxy-specific methods ---
  eProxyURI() {
    return this._proxyURI;
  }
  eSetProxyURI(uri) {
    this._proxyURI = uri;
  }
  eIsProxy() {
    return this._proxyURI !== null;
  }
  eResolveProxy(proxy) {
    const resource = this._resource || this.eResource();
    if (resource) {
      const resourceSet = resource.getResourceSet();
      if (resourceSet && proxy.eProxyURI()) {
        const proxyURI = proxy.eProxyURI();
        const uriStr = proxyURI.toString();
        const hashIndex = uriStr.indexOf("#");
        if (hashIndex > 0) {
          const resourceURI = URI.createURI(uriStr.substring(0, hashIndex));
          const fragment = uriStr.substring(hashIndex + 1);
          const targetResource = resourceSet.getResource(resourceURI, true);
          if (targetResource) {
            const resolved = targetResource.getEObject(fragment);
            if (resolved) {
              return resolved;
            }
          }
        } else if (hashIndex === 0) {
          const fragment = uriStr.substring(1);
          const resolved = resource.getEObject(fragment);
          if (resolved) {
            return resolved;
          }
        }
      }
    }
    return proxy;
  }
  // --- InternalEObject methods ---
  eInternalResource() {
    return this._resource;
  }
  eSetResource(resource) {
    this._resource = resource;
  }
  eInternalContainer() {
    return null;
  }
  eBasicSetContainer(container2, containerFeatureID) {
  }
  // --- EObject interface (minimal implementation) ---
  eClass() {
    if (this._eClass) {
      return this._eClass;
    }
    throw new Error("Proxy has no EClass - must be resolved first");
  }
  eResource() {
    return this._resource;
  }
  eContainer() {
    return null;
  }
  eContainingFeature() {
    return null;
  }
  eContainmentFeature() {
    return null;
  }
  eContents() {
    return [];
  }
  eAllContents() {
    return [][Symbol.iterator]();
  }
  eCrossReferences() {
    return [];
  }
  eGet(feature) {
    throw new Error(`Cannot get feature '${feature.getName()}' on unresolved proxy: ${this._proxyURI?.toString()}`);
  }
  eSet(feature, newValue) {
    throw new Error(`Cannot set feature '${feature.getName()}' on unresolved proxy: ${this._proxyURI?.toString()}`);
  }
  eIsSet(feature) {
    return false;
  }
  eUnset(feature) {
    throw new Error(`Cannot unset feature '${feature.getName()}' on unresolved proxy: ${this._proxyURI?.toString()}`);
  }
  eInvoke(operation, arguments_) {
    throw new Error(`Cannot invoke operation '${operation.getName()}' on unresolved proxy: ${this._proxyURI?.toString()}`);
  }
  toString() {
    return `EProxy(${this._proxyURI?.toString() || "null"})`;
  }
}
function resolveClassifierInPackage(pkg, fragment) {
  let path = fragment;
  while (path.startsWith("/")) {
    path = path.substring(1);
  }
  if (!path)
    return null;
  const segments = path.split("/");
  if (segments.length === 1) {
    return pkg.getEClassifier(segments[0]);
  }
  const classifierName = segments[segments.length - 1];
  let currentPkg = pkg;
  for (let i2 = 0; i2 < segments.length - 1; i2++) {
    const subPkgName = segments[i2];
    const subPackages = currentPkg.getESubpackages();
    currentPkg = null;
    for (let j2 = 0; j2 < subPackages.length; j2++) {
      const sp = subPackages.get(j2);
      if (sp.getName() === subPkgName) {
        currentPkg = sp;
        break;
      }
    }
    if (!currentPkg)
      return null;
  }
  return currentPkg.getEClassifier(classifierName);
}
const ERROR_TYPE = "error";
const OBJECT_TYPE = "object";
const REFERENCE_TYPE = "reference";
const XMI_WRAPPER_TYPE = "xmiWrapper";
const DEFERRED_TYPE = "deferredType";
class AttributesImpl {
  constructor() {
    this.attrs = [];
  }
  add(qName, localName, uri, value) {
    this.attrs.push({ qName, localName, uri, value });
  }
  clear() {
    this.attrs = [];
  }
  getLength() {
    return this.attrs.length;
  }
  getQName(index) {
    return this.attrs[index]?.qName || "";
  }
  getValue(index) {
    return this.attrs[index]?.value || "";
  }
  getLocalName(index) {
    return this.attrs[index]?.localName || "";
  }
  getURI(index) {
    return this.attrs[index]?.uri || "";
  }
  getValueByQName(qName) {
    const attr = this.attrs.find((a2) => a2.qName === qName);
    return attr?.value ?? null;
  }
  getValueByName(uri, localName) {
    const attr = this.attrs.find((a2) => a2.uri === uri && a2.localName === localName);
    return attr?.value ?? null;
  }
}
const XSI_URI = "http://www.w3.org/2001/XMLSchema-instance";
const XMI_URI = "http://www.omg.org/XMI";
const XML_NS = "xmlns";
const TYPE_ATTRIB = "type";
const NIL_ATTRIB = "nil";
const SCHEMA_LOCATION_ATTRIB = "schemaLocation";
const HREF_ATTRIB = "href";
const ID_ATTRIB = "id";
class XMLHandler {
  constructor(resource, helper, options) {
    this.elements = [];
    this.objects = [];
    this.types = [];
    this.prefixesToFactories = /* @__PURE__ */ new Map();
    this.urisToLocations = /* @__PURE__ */ new Map();
    this.forwardSingleReferences = [];
    this.sameDocumentProxies = [];
    this.attribs = null;
    this.text = null;
    this.isRoot = true;
    this.isNamespaceAware = false;
    this.needsPushContext = false;
    this.deferredFeature = null;
    this.deferredParent = null;
    this.deferredExtent = null;
    this.resolve = true;
    this.useNewMethods = true;
    this.errors = [];
    this.lineNumber = 0;
    this.columnNumber = 0;
    this.resource = resource;
    this.helper = helper;
    this.packageRegistry = resource.getResourceSet()?.getPackageRegistry() || EPackageRegistry.INSTANCE;
    this.extent = resource.getContents();
    if (options) {
      this.processOptions(options);
    }
  }
  processOptions(options) {
    this.helper.setOptions(options);
  }
  /**
   * Set attributes for current element
   */
  setAttributes(attribs) {
    this.attribs = attribs;
  }
  /**
   * Handle start of element
   */
  startElement(uri, localName, qName, attributes) {
    this.setAttributes(attributes);
    this.startElementInternal(uri, localName, qName);
  }
  startElementInternal(uri, localName, qName) {
    if (this.needsPushContext) {
      this.helper.pushContext();
    }
    this.needsPushContext = true;
    this.elements.push(qName);
    let prefix = "";
    if (this.useNewMethods) {
      if (this.isRoot) {
        this.handleSchemaLocation();
      }
      prefix = this.helper.getPrefix(uri.length === 0 ? null : uri) || "";
    } else {
      this.handleNamespaceAttribs();
      const index = qName.indexOf(":");
      if (index !== -1) {
        prefix = qName.substring(0, index);
        localName = qName.substring(index + 1);
      }
    }
    this.processElement(qName, prefix, localName);
  }
  processElement(name, prefix, localName) {
    if (this.isRoot) {
      this.isRoot = false;
      this.recordHeaderInformation();
    }
    if (prefix === "xmi" && localName === "XMI") {
      this.objects.push(null);
      this.types.push(XMI_WRAPPER_TYPE);
      return;
    }
    const isTopLevel = this.objects.length === 0 || this.objects.length === 1 && this.types[0] === XMI_WRAPPER_TYPE;
    if (isTopLevel) {
      this.createTopObject(prefix, localName);
    } else {
      this.handleFeature(prefix, localName);
    }
  }
  /**
   * Handle end of element
   */
  endElement(uri, localName, qName) {
    this.elements.pop();
    const type = this.types.pop();
    if (type === OBJECT_TYPE) {
      const object = this.objects.pop();
      if (this.text !== null && this.text.length > 0 && object) {
        const trimmed = this.text.trim();
        if (trimmed.length > 0) {
          const emd = this.helper.getExtendedMetaData();
          if (emd) {
            const eClass = object.eClass();
            if (emd.getContentKind(eClass) === SIMPLE_CONTENT) {
              const simpleFeature = emd.getSimpleContentFeature(eClass);
              if (simpleFeature) {
                this.setFeatureValue(object, simpleFeature, trimmed);
              }
            }
          }
          this.handleProxy(object, trimmed);
        }
      }
      this.text = null;
    } else if (type === ERROR_TYPE) {
      this.objects.pop();
      this.text = null;
    } else if (type === REFERENCE_TYPE) {
      this.objects.pop();
      this.text = null;
    } else if (type === DEFERRED_TYPE) {
      this.objects.pop();
      this.deferredParent = null;
      this.deferredFeature = null;
      this.text = null;
    } else if (type === XMI_WRAPPER_TYPE) {
      this.objects.pop();
    } else if (type !== void 0) {
      const eObject = this.objects.pop() || this.objects[this.objects.length - 1];
      if (eObject && type) {
        this.setFeatureValue(eObject, type, this.text);
      }
      this.text = null;
    }
    this.helper.popContextWithFactories(this.prefixesToFactories);
  }
  /**
   * Handle character data
   */
  characters(ch) {
    if (this.text === null) {
      this.text = ch;
    } else {
      this.text += ch;
    }
  }
  /**
   * Handle start of prefix mapping
   */
  startPrefixMapping(prefix, uri) {
    this.isNamespaceAware = true;
    if (this.needsPushContext) {
      this.helper.pushContext();
      this.needsPushContext = false;
    }
    this.helper.addPrefix(prefix, uri);
    this.prefixesToFactories.delete(prefix);
  }
  /**
   * Handle end of document
   */
  endDocument() {
    if (this.deferredExtent !== null) {
      this.extent.push(...this.deferredExtent);
    }
    this.helper.recordPrefixToURIMapping();
    this.helper.popContext();
    this.handleForwardReferences();
  }
  /**
   * Handle namespace attributes
   */
  handleNamespaceAttribs() {
    if (this.attribs) {
      for (let i2 = 0; i2 < this.attribs.getLength(); i2++) {
        const qName = this.attribs.getQName(i2);
        if (qName.startsWith(XML_NS)) {
          const prefix = qName.length > 5 ? qName.substring(6) : "";
          const value = this.attribs.getValue(i2);
          this.startPrefixMapping(prefix, value);
        }
      }
    }
  }
  /**
   * Handle schema location
   */
  handleSchemaLocation() {
    if (!this.attribs)
      return;
    const schemaLocation = this.attribs.getValueByName(XSI_URI, SCHEMA_LOCATION_ATTRIB);
    if (schemaLocation) {
      this.handleXSISchemaLocation(schemaLocation);
    }
  }
  handleXSISchemaLocation(schemaLocation) {
    const tokens = schemaLocation.trim().split(/\s+/);
    for (let i2 = 0; i2 + 1 < tokens.length; i2 += 2) {
      const nsURI = tokens[i2];
      const location = tokens[i2 + 1];
      this.urisToLocations.set(nsURI, URI.createURI(location));
    }
  }
  /**
   * Record header information
   */
  recordHeaderInformation() {
  }
  /**
   * Create top-level object
   */
  createTopObject(prefix, localName) {
    const eFactory = this.getFactoryForPrefix(prefix);
    if (!eFactory) {
      this.error(`Package not found for prefix '${prefix}'`);
      this.processObject(null);
      return;
    }
    const eType = this.getXSIType();
    let eObject = null;
    if (eType) {
      eObject = this.createObjectByType(prefix, eType, true);
    } else {
      const type = this.helper.getType(eFactory, localName);
      if (type) {
        eObject = this.helper.createObject(eFactory, type);
      }
    }
    if (eObject) {
      this.processTopObject(eObject);
      this.handleObjectAttribs(eObject);
    } else {
      this.error(`Cannot create object for '${localName}'`);
      this.processObject(null);
    }
  }
  /**
   * Get xsi:type attribute value
   */
  getXSIType() {
    if (!this.attribs)
      return null;
    return this.attribs.getValueByName(XSI_URI, TYPE_ATTRIB);
  }
  /**
   * Create object based on xsi:type
   */
  createObjectByType(prefix, typeName, isTopObject) {
    let typePrefix = prefix;
    let localType = typeName;
    const colonIndex = typeName.indexOf(":");
    if (colonIndex !== -1) {
      typePrefix = typeName.substring(0, colonIndex);
      localType = typeName.substring(colonIndex + 1);
    }
    const eFactory = this.getFactoryForPrefix(typePrefix);
    if (!eFactory) {
      this.error(`Factory not found for type '${typeName}'`);
      return null;
    }
    const type = this.helper.getType(eFactory, localType);
    if (!type) {
      this.error(`Type '${localType}' not found`);
      return null;
    }
    return this.helper.createObject(eFactory, type);
  }
  /**
   * Process top-level object
   */
  processTopObject(object) {
    if (object) {
      if (this.deferredExtent !== null) {
        this.deferredExtent.push(object);
      } else {
        this.extent.push(object);
      }
    }
    this.processObject(object);
  }
  /**
   * Push object onto stack
   */
  processObject(object) {
    this.objects.push(object);
    this.types.push(object ? OBJECT_TYPE : ERROR_TYPE);
  }
  /**
   * Handle object attributes
   */
  handleObjectAttribs(obj) {
    if (!this.attribs)
      return;
    for (let i2 = 0; i2 < this.attribs.getLength(); i2++) {
      const qName = this.attribs.getQName(i2);
      const value = this.attribs.getValue(i2);
      const uri = this.attribs.getURI(i2);
      const localName = this.attribs.getLocalName(i2);
      if (qName.startsWith(XML_NS))
        continue;
      if (uri === XSI_URI)
        continue;
      if (uri === XMI_URI) {
        if (localName === ID_ATTRIB) {
          this.handleId(obj, value);
        }
        continue;
      }
      this.setAttribValue(obj, localName || qName, value, uri || null);
    }
  }
  /**
   * Handle ID attribute
   */
  handleId(obj, id) {
  }
  /**
   * Set attribute value on object
   */
  setAttribValue(obj, name, value, namespaceURI) {
    const eClass = obj.eClass();
    const feature = this.helper.getFeature(eClass, namespaceURI ?? null, name);
    if (feature) {
      this.setFeatureValue(obj, feature, value, -2);
    }
  }
  /**
   * Handle feature (nested element)
   */
  handleFeature(prefix, localName) {
    const peekObject = this.objects[this.objects.length - 1];
    if (!peekObject) {
      if (this.deferredParent && this.deferredFeature) {
        this.handleDeferredType(prefix, localName);
        return;
      }
      this.objects.push(null);
      this.types.push(ERROR_TYPE);
      this.error(`Feature '${localName}' has no parent object`);
      return;
    }
    const eClass = peekObject.eClass();
    const namespaceURI = prefix ? this.helper.getURI(prefix) || null : null;
    const feature = this.helper.getFeatureWithElement(eClass, namespaceURI, localName, true);
    if (feature) {
      const kind = this.helper.getFeatureKind(feature);
      if (kind === DATATYPE_SINGLE || kind === DATATYPE_IS_MANY) {
        this.objects.push(null);
        this.types.push(feature);
        if (!this.isNull()) {
          this.text = "";
        }
      } else {
        this.createObject(peekObject, feature);
      }
    } else {
      this.handleUnknownFeature(prefix, localName, peekObject);
    }
  }
  /**
   * Check if xsi:nil="true"
   */
  isNull() {
    if (!this.attribs)
      return false;
    const nil = this.attribs.getValueByName(XSI_URI, NIL_ATTRIB);
    return nil === "true";
  }
  /**
   * Create child object for reference
   */
  createObject(parent, feature) {
    const href = this.attribs?.getValueByQName(HREF_ATTRIB) || this.attribs?.getValueByName("", HREF_ATTRIB);
    if (href) {
      this.setValueFromId(parent, feature, href, -1);
      this.objects.push(null);
      this.types.push(REFERENCE_TYPE);
      return;
    }
    const xsiType = this.getXSIType();
    let eObject = null;
    if (xsiType) {
      eObject = this.createObjectByType("", xsiType, false);
    } else {
      let eType = feature.getEType();
      if (eType && !("getESuperTypes" in eType) && typeof eType.eIsProxy === "function" && eType.eIsProxy()) {
        const proxyURI = eType.eProxyURI();
        if (proxyURI) {
          const uriStr = proxyURI.toString();
          const hashIndex = uriStr.indexOf("#");
          if (hashIndex > 0) {
            const nsURI = uriStr.substring(0, hashIndex);
            const fragment = uriStr.substring(hashIndex + 1);
            const pkg = this.packageRegistry.getEPackage(nsURI);
            if (pkg) {
              const resolved = resolveClassifierInPackage(pkg, fragment);
              if (resolved) {
                eType = resolved;
                if (typeof feature.setEType === "function") {
                  feature.setEType(resolved);
                }
              }
            }
          }
        }
      }
      if (eType && "getESuperTypes" in eType) {
        const eClass = eType;
        if (!eClass.isAbstract()) {
          const eFactory = eClass.getEPackage()?.getEFactoryInstance();
          if (eFactory) {
            eObject = eFactory.create(eClass);
          }
        } else {
          this.deferredParent = parent;
          this.deferredFeature = feature;
          this.objects.push(null);
          this.types.push(DEFERRED_TYPE);
          return;
        }
      }
    }
    if (eObject) {
      this.helper.setValue(parent, feature, eObject, -1);
      this.handleObjectAttribs(eObject);
    }
    this.processObject(eObject);
  }
  /**
   * Handle unknown feature.
   * Priority:
   * 1. EMD feature lookup with owner package namespace (wrapper pattern)
   * 2. EClassifier match for type replacement (#53)
   * 3. Error
   */
  handleUnknownFeature(prefix, name, parent) {
    const nsURI = prefix ? this.helper.getURI(prefix) || null : null;
    const emd = this.helper.getExtendedMetaData();
    if (emd && nsURI) {
      const eClass = parent.eClass();
      const feature = emd.getElementFeature(eClass, nsURI, name);
      if (feature) {
        const kind = this.helper.getFeatureKind(feature);
        if (kind === DATATYPE_SINGLE || kind === DATATYPE_IS_MANY) {
          this.objects.push(null);
          this.types.push(feature);
          if (!this.isNull()) {
            this.text = "";
          }
        } else {
          this.createObject(parent, feature);
        }
        return;
      }
    }
    if (nsURI) {
      const pkg = this.packageRegistry.getEPackage(nsURI);
      if (pkg) {
        const classifier = pkg.getEClassifier(name);
        if (classifier && "getESuperTypes" in classifier) {
          const eClass = classifier;
          const parentClass = parent.eClass();
          if (eClass === parentClass) {
            this.handleObjectAttribs(parent);
            this.objects.push(parent);
            this.types.push(OBJECT_TYPE);
            return;
          }
          if (parentClass.isSuperTypeOf(eClass) && !eClass.isAbstract()) {
            const eFactory = eClass.getEPackage()?.getEFactoryInstance();
            if (eFactory) {
              const concreteObject = eFactory.create(eClass);
              for (const f2 of parentClass.getEAllStructuralFeatures()) {
                if (f2.isTransient() || f2.isDerived())
                  continue;
                const v2 = parent.eGet(f2);
                if (v2 !== null && v2 !== void 0) {
                  try {
                    concreteObject.eSet(f2, v2);
                  } catch {
                  }
                }
              }
              this.replaceInParentContainment(parent, concreteObject);
              const parentIndex = this.objects.length - 1;
              this.objects[parentIndex] = concreteObject;
              this.handleObjectAttribs(concreteObject);
              this.objects.push(concreteObject);
              this.types.push(OBJECT_TYPE);
              return;
            }
          }
        }
      }
    }
    this.objects.push(null);
    this.types.push(ERROR_TYPE);
    this.error(`Unknown feature '${name}' for type '${parent.eClass().getName()}'`);
  }
  /**
   * Replace an object in the grandparent's containment reference.
   */
  replaceInParentContainment(oldObj, newObj) {
    const parentIndex = this.objects.length - 1;
    if (parentIndex < 1)
      return;
    const grandParent = this.objects[parentIndex - 1];
    if (!grandParent)
      return;
    const gpClass = grandParent.eClass();
    for (const feature of gpClass.getEAllStructuralFeatures()) {
      if (!("isContainment" in feature))
        continue;
      const ref2 = feature;
      if (!ref2.isContainment())
        continue;
      if (ref2.isMany()) {
        const list = grandParent.eGet(ref2);
        if (list) {
          for (let i2 = list.length - 1; i2 >= 0; i2--) {
            if (list[i2] === oldObj) {
              list[i2] = newObj;
              return;
            }
          }
        }
      } else {
        if (grandParent.eGet(ref2) === oldObj) {
          grandParent.eSet(ref2, newObj);
          return;
        }
      }
    }
  }
  /**
   * Handle deferred type resolution (RDF/XML wrapping pattern).
   * When a containment feature has an abstract type, the inner element
   * specifies the concrete type to instantiate.
   */
  handleDeferredType(prefix, localName) {
    const parent = this.deferredParent;
    const feature = this.deferredFeature;
    this.deferredParent = null;
    this.deferredFeature = null;
    const nsURI = prefix ? this.helper.getURI(prefix) || null : null;
    let eObject = null;
    if (nsURI) {
      const pkg = this.packageRegistry.getEPackage(nsURI);
      if (pkg) {
        const classifier = pkg.getEClassifier(localName);
        if (classifier && "getESuperTypes" in classifier) {
          const eClass = classifier;
          if (!eClass.isAbstract()) {
            const eFactory = eClass.getEPackage()?.getEFactoryInstance();
            if (eFactory) {
              eObject = eFactory.create(eClass);
            }
          }
        }
      }
    }
    if (eObject) {
      this.helper.setValue(parent, feature, eObject, -1);
      this.handleObjectAttribs(eObject);
      this.objects[this.objects.length - 1] = eObject;
      this.types[this.types.length - 1] = OBJECT_TYPE;
      this.objects.push(eObject);
      this.types.push(OBJECT_TYPE);
    } else {
      this.objects.push(null);
      this.types.push(ERROR_TYPE);
      this.error(`Cannot resolve type '${localName}' for deferred containment`);
    }
  }
  /**
   * Set feature value
   */
  setFeatureValue(eObject, feature, value, position = -1) {
    if (value === null || value === void 0)
      return;
    const isReference = "isContainment" in feature;
    if (!isReference) {
      const eType = feature.getEType();
      const dataType = eType;
      let eFactory = null;
      if (dataType && typeof dataType.getEPackage === "function") {
        eFactory = dataType.getEPackage()?.getEFactoryInstance() ?? null;
      } else if (dataType && typeof dataType.eGet === "function" && typeof dataType.eClass === "function") {
        const dtClass = dataType.eClass();
        if (dtClass) {
          const pkgFeature = dtClass.getEStructuralFeature?.("ePackage");
          if (pkgFeature) {
            const pkg = dataType.eGet(pkgFeature);
            if (pkg?.getEFactoryInstance) {
              eFactory = pkg.getEFactoryInstance();
            }
          }
        }
      }
      try {
        if (eFactory && dataType) {
          const convertedValue = eFactory.createFromString(dataType, value);
          this.helper.setValue(eObject, feature, convertedValue, position);
        } else {
          this.helper.setValue(eObject, feature, value, position);
        }
      } catch (e2) {
        const reason = e2 instanceof Error ? e2.message : String(e2);
        this.error(`Invalid value for feature '${feature.getName()}': ${reason}`);
      }
    } else {
      if (feature.isMany()) {
        const ids = value.trim().split(/\s+/);
        for (const id of ids) {
          if (id) {
            this.setValueFromId(eObject, feature, id, -1);
          }
        }
      } else {
        this.setValueFromId(eObject, feature, value, position);
      }
    }
  }
  /**
   * Set reference value from ID
   */
  setValueFromId(eObject, feature, idValue, position = -1) {
    this.forwardSingleReferences.push({
      object: eObject,
      feature,
      value: idValue,
      position,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber
    });
  }
  /**
   * Handle forward references
   */
  handleForwardReferences() {
    for (const ref2 of this.forwardSingleReferences) {
      const resolved = this.resolveReference(ref2.value);
      if (resolved) {
        this.helper.setValue(ref2.object, ref2.feature, resolved, ref2.position);
      } else {
        console.warn(`[XMLHandler] Forward ref UNRESOLVED: '${ref2.value}' on feature '${ref2.feature?.getName?.()}'`);
        const proxy = this.createProxy(ref2.feature, ref2.value);
        if (proxy) {
          this.helper.setValue(ref2.object, ref2.feature, proxy, ref2.position);
        } else {
          this.error(`Unresolved reference '${ref2.value}'`);
        }
      }
    }
    this.forwardSingleReferences = [];
  }
  /**
   * Creates a proxy for an unresolved reference.
   * The proxy will be resolved when accessed.
   */
  createProxy(feature, uriValue) {
    let proxyURI;
    const resourceURI = this.resource.getURI();
    const spaceIndex = uriValue.indexOf(" ");
    if (spaceIndex > 0) {
      uriValue = uriValue.substring(spaceIndex + 1);
    }
    const hashIndex = uriValue.indexOf("#");
    if (hashIndex > 0) {
      const baseUriStr = uriValue.substring(0, hashIndex);
      const fragment = uriValue.substring(hashIndex + 1);
      if (resourceURI && !baseUriStr.includes("://")) {
        const currentStr = resourceURI.toString();
        if (baseUriStr === currentStr || currentStr.endsWith(baseUriStr) || currentStr.endsWith("/" + baseUriStr)) {
          proxyURI = URI.createURI(currentStr + "#" + fragment);
        } else {
          const resolved = URI.createURI(baseUriStr).resolve(resourceURI);
          proxyURI = URI.createURI(resolved.toString() + "#" + fragment);
        }
      } else {
        proxyURI = URI.createURI(uriValue);
      }
    } else if (hashIndex === 0) {
      if (resourceURI) {
        proxyURI = URI.createURI(resourceURI.toString() + uriValue);
      } else {
        proxyURI = URI.createURI(uriValue);
      }
    } else if (uriValue.startsWith("/")) {
      if (resourceURI) {
        proxyURI = URI.createURI(resourceURI.toString() + "#" + uriValue);
      } else {
        proxyURI = URI.createURI("#" + uriValue);
      }
    } else {
      if (resourceURI) {
        proxyURI = URI.createURI(resourceURI.toString() + "#" + uriValue);
      } else {
        proxyURI = URI.createURI("#" + uriValue);
      }
    }
    const eType = feature.getEType();
    const eClass = eType && "getESuperTypes" in eType ? eType : null;
    const proxy = new EProxyImpl(proxyURI, eClass || void 0);
    proxy.eSetResource(this.resource);
    return proxy;
  }
  /**
   * Resolve a reference string.
   * Supports:
   * - Fragment references: #//EString or //EString
   * - External URIs: http://www.eclipse.org/emf/2002/Ecore#//EString
   * - Typed references: ecore:EClass audiogram.ecore#//HIMSAAudiometricStandardType
   * - Local IDs: someId
   */
  resolveReference(ref2) {
    const spaceIndex = ref2.indexOf(" ");
    if (spaceIndex > 0) {
      ref2 = ref2.substring(spaceIndex + 1);
    }
    const hashIndex = ref2.indexOf("#");
    if (hashIndex > 0) {
      const baseURI = ref2.substring(0, hashIndex);
      const fragment = ref2.substring(hashIndex + 1);
      const currentURI = this.resource.getURI();
      const currentStr = currentURI?.toString();
      if (currentStr && (currentStr === baseURI || currentStr.endsWith(baseURI) || currentStr.endsWith("/" + baseURI) || baseURI.endsWith(currentStr))) {
        return this.resource.getEObject(fragment);
      }
      const ePackage = this.packageRegistry.getEPackage(baseURI);
      if (ePackage) {
        return this.resolveFragmentInPackage(ePackage, fragment);
      }
      const contents = this.resource.getContents();
      for (let i2 = 0; i2 < contents.length; i2++) {
        const root = contents.get(i2);
        if (root && typeof root.getNsURI === "function") {
          const rootPkg = root;
          if (rootPkg.getNsURI() === baseURI) {
            return this.resolveFragmentInPackage(rootPkg, fragment);
          }
        }
      }
      const resourceSet = this.resource.getResourceSet();
      if (resourceSet) {
        const uri = URI.createURI(baseURI);
        const externalResource = resourceSet.getResource(uri, true);
        if (externalResource) {
          return externalResource.getEObject(fragment);
        }
      }
      return null;
    }
    if (ref2.startsWith("#")) {
      return this.resource.getEObject(ref2.substring(1));
    }
    if (ref2.startsWith("/")) {
      return this.resource.getEObject(ref2);
    }
    return this.resource.getEObject(ref2);
  }
  /**
   * Resolve a fragment path within an EPackage.
   * Handles paths like //EString, //EClass, etc.
   */
  resolveFragmentInPackage(ePackage, fragment) {
    let path = fragment;
    while (path.startsWith("/")) {
      path = path.substring(1);
    }
    if (!path) {
      return ePackage;
    }
    const segments = path.split("/");
    const classifier = resolveClassifierInPackage(ePackage, path);
    if (classifier) {
      return classifier;
    }
    if (segments.length >= 2) {
      let currentPkg = ePackage;
      for (let i2 = 0; i2 < segments.length - 2; i2++) {
        const subPackages = currentPkg.getESubpackages();
        let found = null;
        for (let j2 = 0; j2 < subPackages.length; j2++) {
          if (subPackages.get(j2).getName() === segments[i2]) {
            found = subPackages.get(j2);
            break;
          }
        }
        if (!found)
          return null;
        currentPkg = found;
      }
      const classifierName = segments[segments.length - 2];
      const eClassifier = currentPkg.getEClassifier(classifierName);
      if (eClassifier && "getEStructuralFeature" in eClassifier) {
        const feature = eClassifier.getEStructuralFeature(segments[segments.length - 1]);
        if (feature) {
          return feature;
        }
      }
    }
    return null;
  }
  /**
   * Handle proxy reference
   */
  handleProxy(object, text) {
  }
  /**
   * Get factory for prefix
   */
  getFactoryForPrefix(prefix) {
    let factory = this.prefixesToFactories.get(prefix);
    if (factory) {
      return factory;
    }
    const nsURI = this.helper.getURI(prefix);
    if (nsURI) {
      const ePackage = this.packageRegistry.getEPackage(nsURI);
      if (ePackage) {
        factory = ePackage.getEFactoryInstance();
        if (factory) {
          this.prefixesToFactories.set(prefix, factory);
          return factory;
        }
      }
    }
    return null;
  }
  /**
   * Report error
   */
  error(message) {
    const error = new Error(`[Line ${this.lineNumber}, Col ${this.columnNumber}] ${message}`);
    this.errors.push(error);
    console.error(error.message);
  }
  /**
   * Get errors
   */
  getErrors() {
    return this.errors;
  }
}
class XMLLoad {
  constructor(helper) {
    this.helper = helper || new XMLHelperImpl();
  }
  /**
   * Load resource from string
   */
  load(resource, xmlString, options) {
    const opts = options || /* @__PURE__ */ new Map();
    const handler = this.makeDefaultHandler(resource, opts);
    const parser = sax.parser(true, {
      xmlns: true,
      position: true,
      trim: false
    });
    const attribs = new AttributesImpl();
    parser.onprocessinginstruction = (node) => {
      if (node.name === "xml") ;
    };
    parser.onopentag = (tag) => {
      attribs.clear();
      const qualifiedTag = tag;
      for (const [key, attr] of Object.entries(qualifiedTag.attributes)) {
        const qualifiedAttr = attr;
        const qName = qualifiedAttr.prefix ? `${qualifiedAttr.prefix}:${qualifiedAttr.local}` : qualifiedAttr.local;
        if (qualifiedAttr.prefix === "xmlns" || qualifiedAttr.name === "xmlns") {
          const prefix = qualifiedAttr.prefix === "xmlns" ? qualifiedAttr.local : "";
          handler.startPrefixMapping(prefix, qualifiedAttr.value);
        }
        attribs.add(qName, qualifiedAttr.local, qualifiedAttr.uri, qualifiedAttr.value);
      }
      handler.lineNumber = parser.line;
      handler.columnNumber = parser.column;
      handler.startElement(qualifiedTag.uri, qualifiedTag.local, qualifiedTag.name, attribs);
    };
    parser.onclosetag = (tagName) => {
      const colonIndex = tagName.indexOf(":");
      const localName = colonIndex >= 0 ? tagName.substring(colonIndex + 1) : tagName;
      handler.endElement("", localName, tagName);
    };
    parser.ontext = (text) => {
      if (text.trim()) {
        handler.characters(text);
      }
    };
    parser.oncdata = (cdata) => {
      handler.characters(cdata);
    };
    parser.onerror = (err) => {
      console.error("XML Parse Error:", err.message);
      handler.error(err.message);
    };
    parser.write(xmlString).close();
    handler.endDocument();
    const handlerErrors = handler.getErrors();
    if (handlerErrors.length > 0 && resource.getErrors) {
      const resourceErrors = resource.getErrors();
      for (const err of handlerErrors) {
        const match = err.message.match(/\[Line\s*(\d+),?\s*Col\s*(\d+)\]\s*(.*)/i);
        if (match) {
          resourceErrors.push({
            message: match[3] || err.message,
            line: parseInt(match[1], 10),
            column: parseInt(match[2], 10)
          });
        } else {
          resourceErrors.push({ message: err.message });
        }
      }
    }
  }
  /**
   * Create the default handler for loading
   */
  makeDefaultHandler(resource, options) {
    return new XMLHandler(resource, this.helper, options);
  }
}
class XMILoad extends XMLLoad {
  constructor(helper) {
    super(helper || new XMIHelperImpl());
  }
  makeDefaultHandler(resource, options) {
    return new XMIHandler(resource, this.helper, options);
  }
}
class XMIHelperImpl extends XMLHelperImpl {
}
class XMIHandler extends XMLHandler {
  constructor(resource, helper, options) {
    super(resource, helper, options);
    this.xmiVersion = "2.0";
  }
  recordHeaderInformation() {
    if (this.attribs) {
      const version = this.attribs.getValueByQName("xmi:version");
      if (version) {
        this.xmiVersion = version;
      }
    }
  }
  getXSIType() {
    let type = super.getXSIType();
    if (!type && this.attribs) {
      type = this.attribs.getValueByQName("xmi:type");
    }
    return type;
  }
  handleId(obj, id) {
    if (this.resource && "setID" in this.resource) {
      this.resource.setID(obj, id);
    }
  }
}
function isEClass(classifier) {
  return classifier !== null && classifier !== void 0 && typeof classifier.getESuperTypes === "function" && typeof classifier.getEAllStructuralFeatures === "function";
}
function isEEnum(classifier) {
  return classifier !== null && classifier !== void 0 && typeof classifier.getELiterals === "function" && typeof classifier.getEEnumLiteral === "function";
}
class XMLSave {
  constructor(helper) {
    this.declaredNamespaces = /* @__PURE__ */ new Map();
    this.output = [];
    this.indent = 0;
    this.indentString = "  ";
    this.idAttributeName = "id";
    this.helper = helper || new XMLHelperImpl();
    this.resource = null;
  }
  /**
   * Save resource to string
   */
  save(resource, options) {
    return this.saveObjects(resource, resource.getContents(), options);
  }
  /**
   * Save a specific set of objects using the given resource for reference resolution.
   */
  saveObjects(resource, objects, options) {
    this.resource = resource;
    this.output = [];
    this.declaredNamespaces.clear();
    this.indent = 0;
    if (options) {
      this.helper.setOptions(options);
    }
    this.output.push('<?xml version="1.0" encoding="UTF-8"?>\n');
    const objectArray = Array.isArray(objects) ? objects : [...objects];
    if (objectArray.length > 1) {
      this.saveMultipleRoots(objectArray);
    } else {
      for (const root of objectArray) {
        this.saveObject(root, true);
      }
    }
    return this.output.join("");
  }
  /**
   * Save multiple root objects wrapped in an <xmi:XMI> container element
   */
  saveMultipleRoots(contents) {
    const allPackages = /* @__PURE__ */ new Set();
    for (const root of contents) {
      for (const pkg of this.collectPackages(root)) {
        allPackages.add(pkg);
      }
    }
    this.output.push(`<xmi:XMI`);
    this.output.push(` xmlns:xmi="${XMI_URI}"`);
    this.output.push(` xmi:version="2.0"`);
    this.output.push(` xmlns:xsi="${XSI_URI}"`);
    const writtenPrefixes = /* @__PURE__ */ new Set();
    for (const pkg of allPackages) {
      const nsURI = pkg.getNsURI();
      const prefix = this.getPrefix(pkg);
      if (nsURI && prefix && !writtenPrefixes.has(prefix)) {
        this.output.push(` xmlns:${prefix}="${nsURI}"`);
        this.declaredNamespaces.set(nsURI, prefix);
        writtenPrefixes.add(prefix);
      }
    }
    this.output.push(">\n");
    this.indent++;
    for (const root of contents) {
      this.saveObject(root, false);
    }
    this.indent--;
    this.output.push("</xmi:XMI>\n");
  }
  /**
   * Save a single object
   */
  saveObject(obj, isRoot) {
    const eClass = obj.eClass();
    const ePackage = eClass.getEPackage();
    const prefix = ePackage ? this.getPrefix(ePackage) : "";
    const localName = eClass.getName() || "Object";
    const qName = prefix ? `${prefix}:${localName}` : localName;
    this.writeIndent();
    this.output.push(`<${qName}`);
    if (isRoot) {
      this.writeNamespaces(obj);
    }
    if (!isRoot) {
      this.writeTypeAttribute(obj);
    }
    this.saveID(obj);
    this.writeAttributes(obj);
    const emd = this.helper.getExtendedMetaData();
    const simpleText = this.getSimpleContentText(obj, emd);
    const hasContent = this.hasElementContent(obj);
    if (simpleText !== null) {
      this.output.push(`>${this.escapeXml(simpleText)}`);
      if (hasContent) {
        this.output.push("\n");
        this.indent++;
        this.writeElements(obj);
        this.indent--;
        this.writeIndent();
      }
      this.output.push(`</${qName}>
`);
    } else if (hasContent) {
      this.output.push(">\n");
      this.indent++;
      this.writeElements(obj);
      this.indent--;
      this.writeIndent();
      this.output.push(`</${qName}>
`);
    } else {
      this.output.push("/>\n");
    }
  }
  /**
   * Write xmi:id attribute if the resource tracks an ID for this object
   */
  saveID(obj) {
    const id = this.helper.getID(obj);
    if (id) {
      this.output.push(` ${this.idAttributeName}="${this.escapeXml(id)}"`);
    }
  }
  /**
   * Write namespace declarations
   */
  writeNamespaces(obj) {
    const packages = this.collectPackages(obj);
    this.output.push(` xmlns:xmi="${XMI_URI}"`);
    this.output.push(` xmi:version="2.0"`);
    this.output.push(` xmlns:xsi="${XSI_URI}"`);
    const writtenPrefixes = /* @__PURE__ */ new Set();
    for (const pkg of packages) {
      const nsURI = pkg.getNsURI();
      const prefix = this.getPrefix(pkg);
      if (nsURI && prefix && !writtenPrefixes.has(prefix)) {
        this.output.push(` xmlns:${prefix}="${nsURI}"`);
        this.declaredNamespaces.set(nsURI, prefix);
        writtenPrefixes.add(prefix);
      }
    }
    const emd = this.helper.getExtendedMetaData();
    if (emd) {
      this.collectEMDNamespaces(obj, emd, writtenPrefixes);
    }
  }
  /**
   * Collect and declare additional namespaces from EMD annotations.
   */
  collectEMDNamespaces(obj, emd, writtenPrefixes) {
    const collectFromObject = (o2) => {
      const eClass = o2.eClass();
      for (const feature of eClass.getEAllStructuralFeatures()) {
        const ns = emd.getNamespace(feature);
        if (ns && !this.declaredNamespaces.has(ns) && ns !== "http://www.w3.org/XML/1998/namespace") {
          const prefix = this.generatePrefix(ns, writtenPrefixes);
          if (prefix) {
            this.output.push(` xmlns:${prefix}="${ns}"`);
            this.declaredNamespaces.set(ns, prefix);
            writtenPrefixes.add(prefix);
          }
        }
      }
      for (const content of o2.eContents()) {
        collectFromObject(content);
      }
    };
    collectFromObject(obj);
  }
  /**
   * Generate a namespace prefix for a URI.
   */
  generatePrefix(nsURI, usedPrefixes) {
    const lastSlash = nsURI.lastIndexOf("/");
    let candidate = lastSlash >= 0 ? nsURI.substring(lastSlash + 1) : nsURI;
    candidate = candidate.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    if (!candidate)
      candidate = "ns";
    if (candidate.length > 10)
      candidate = candidate.substring(0, 10);
    if (!usedPrefixes.has(candidate))
      return candidate;
    for (let i2 = 1; i2 < 100; i2++) {
      const prefixed = `${candidate}${i2}`;
      if (!usedPrefixes.has(prefixed))
        return prefixed;
    }
    return null;
  }
  /**
   * Collect all packages used by object tree
   */
  collectPackages(obj) {
    const packages = /* @__PURE__ */ new Set();
    const collectFromObject = (o2) => {
      const eClass = o2.eClass();
      const pkg = eClass.getEPackage();
      if (pkg) {
        packages.add(pkg);
      }
      for (const content of o2.eContents()) {
        collectFromObject(content);
      }
    };
    collectFromObject(obj);
    return packages;
  }
  /**
   * Get prefix for package
   */
  getPrefix(pkg) {
    return pkg.getNsPrefix() || pkg.getName() || "ns";
  }
  /**
   * Write xsi:type attribute if needed
   */
  writeTypeAttribute(obj) {
  }
  /**
   * Write attribute values and non-containment references
   */
  writeAttributes(obj) {
    const eClass = obj.eClass();
    const emd = this.helper.getExtendedMetaData();
    for (const feature of eClass.getEAllStructuralFeatures()) {
      if (feature.isTransient() || feature.isDerived())
        continue;
      if (emd) {
        const emdName = emd.getName(feature);
        if (emdName === ":0")
          continue;
      }
      if (this.isAttribute(feature)) {
        if (emd && emd.getFeatureKind(feature) === ELEMENT_FEATURE)
          continue;
        const attr = feature;
        let value = obj.eGet(attr);
        if (value !== null && value !== void 0) {
          value = this.resolveValue(value, obj);
          if (value !== null && value !== void 0) {
            let defaultValue = null;
            try {
              defaultValue = attr.getDefaultValue();
            } catch {
            }
            if (value !== defaultValue) {
              const stringValue = this.convertToString(attr, value);
              const attrName = this.getSerializedAttributeName(attr, emd);
              this.output.push(` ${attrName}="${this.escapeXml(stringValue)}"`);
            }
          }
        }
      } else if ("isContainment" in feature) {
        const ref2 = feature;
        if (!ref2.isContainment()) {
          let value = obj.eGet(ref2);
          if (value !== null && value !== void 0) {
            const serializedRefName = this.helper.getSerializedFeatureName(ref2);
            if (!feature.isMany()) {
              value = this.resolveValue(value, obj);
              if (value !== null && value !== void 0) {
                if (typeof value === "string") {
                  this.output.push(` ${serializedRefName}="${this.escapeXml(value)}"`);
                } else if (typeof value === "boolean") {
                  this.output.push(` ${serializedRefName}="${value ? "true" : "false"}"`);
                } else if (typeof value === "number") {
                  this.output.push(` ${serializedRefName}="${String(value)}"`);
                } else {
                  const href = this.getTypePrefixedHref(ref2, value);
                  if (href) {
                    this.output.push(` ${serializedRefName}="${this.escapeXml(href)}"`);
                  }
                }
              }
            } else if (Array.isArray(value) || isEList(value)) {
              const sameDocHrefs = [];
              for (const refObj of value) {
                const resolved = this.resolveValue(refObj, obj);
                if (resolved === null || resolved === void 0)
                  continue;
                if (typeof resolved === "string")
                  continue;
                const refResource = resolved.eResource?.();
                if (refResource && refResource === this.resource) {
                  const href = this.getHref(resolved);
                  if (href)
                    sameDocHrefs.push(href);
                }
              }
              if (sameDocHrefs.length > 0) {
                this.output.push(` ${serializedRefName}="${this.escapeXml(sameDocHrefs.join(" "))}"`);
              }
            }
          }
        }
      }
    }
  }
  /**
   * Get href for cross-reference
   */
  getHref(obj) {
    if (isInternalEObject(obj) && obj.eIsProxy()) {
      const proxyURI = obj.eProxyURI();
      if (!proxyURI)
        return null;
      return this.helper.deresolve(proxyURI).toString();
    }
    const intraFragment = this.getIntraResourceFragment(obj);
    if (intraFragment) {
      return intraFragment;
    }
    const resource = obj.eResource?.();
    if (resource) {
      const fragment = resource.getURIFragment(obj);
      if (fragment) {
        if (resource === this.resource) {
          return fragment;
        }
        const uri = resource.getURI();
        if (uri) {
          return `${uri.toString()}#${fragment}`;
        }
        return `#${fragment}`;
      }
    }
    if ("getEContainingClass" in obj && typeof obj.getEContainingClass === "function") {
      const containingClass = obj.getEContainingClass();
      if (containingClass) {
        const pkg = containingClass.getEPackage?.();
        const className = containingClass.getName?.();
        const featureName = obj.getName?.();
        if (pkg && className && featureName) {
          const nsURI = pkg.getNsURI?.();
          if (nsURI) {
            return `${nsURI}#//${className}/${featureName}`;
          }
        }
      }
    }
    if ("getEPackage" in obj && typeof obj.getEPackage === "function") {
      const pkg = obj.getEPackage();
      if (pkg) {
        const nsURI = pkg.getNsURI?.();
        const name = obj.getName?.();
        if (nsURI && name) {
          return `${nsURI}#//${name}`;
        }
      }
    }
    if ("getName" in obj) {
      const name = obj.getName?.();
      if (name) {
        return `//${name}`;
      }
    }
    return null;
  }
  /**
   * For Ecore objects (EClassifier, EStructuralFeature) that lack eResource()
   * because the eContainer chain is not set, walk up the Ecore-specific
   * hierarchy (ePackage/eSuperPackage) to find the root package. If that root
   * is in this.resource, build a hierarchical fragment path like
   * "//service/base/Service" or "//service/base/Service/id".
   */
  getIntraResourceFragment(obj) {
    if (!this.resource)
      return null;
    const pathSegments = [];
    let pkg = null;
    if ("getEContainingClass" in obj && typeof obj.getEContainingClass === "function") {
      const containingClass = obj.getEContainingClass();
      if (!containingClass)
        return null;
      const featureName = obj.getName?.();
      const className = containingClass.getName?.();
      if (!featureName || !className)
        return null;
      pathSegments.push(className, featureName);
      pkg = containingClass.getEPackage?.() ?? null;
    } else if ("getEPackage" in obj && typeof obj.getEPackage === "function") {
      const name = obj.getName?.();
      if (!name)
        return null;
      pathSegments.push(name);
      pkg = obj.getEPackage();
    }
    if (!pkg)
      return null;
    while (pkg) {
      const superPkg = typeof pkg.getESuperPackage === "function" ? pkg.getESuperPackage() : null;
      if (!superPkg)
        break;
      const pkgName = pkg.getName?.();
      if (pkgName)
        pathSegments.unshift(pkgName);
      pkg = superPkg;
    }
    const contents = this.resource.getContents();
    for (const root of contents) {
      if (root === pkg) {
        return "#//" + pathSegments.join("/");
      }
    }
    return null;
  }
  /**
   * Get href with type prefix for cross-document references when the declared
   * type is abstract and differs from the actual type.
   * Java EMF format: "prefix:TypeName URI#fragment"
   */
  getTypePrefixedHref(ref2, value) {
    const href = this.getHref(value);
    if (!href)
      return null;
    const valueResource = value.eResource?.();
    if (valueResource && valueResource === this.resource)
      return href;
    if (href.startsWith("/") || href.startsWith("#"))
      return href;
    const declaredType = ref2.getEType();
    const actualType = value.eClass();
    if (declaredType && actualType && actualType !== declaredType && "isAbstract" in declaredType && declaredType.isAbstract()) {
      const actualPkg = actualType.getEPackage();
      if (actualPkg) {
        const prefix = this.getPrefix(actualPkg);
        const typeName = actualType.getName();
        if (prefix && typeName) {
          return `${prefix}:${typeName} ${href}`;
        }
      }
    }
    return href;
  }
  /**
   * Check if feature is an attribute (not a reference)
   */
  isAttribute(feature) {
    return !("isContainment" in feature);
  }
  /**
   * Check if object has element content (containments, multi-valued non-containment refs, or EMD element features)
   */
  hasElementContent(obj) {
    const eClass = obj.eClass();
    const features = eClass.getEAllStructuralFeatures();
    const emd = this.helper.getExtendedMetaData();
    if (emd) {
      for (const feature of features) {
        if (feature.isTransient() || feature.isDerived())
          continue;
        if (!this.isAttribute(feature))
          continue;
        if (emd.getFeatureKind(feature) !== ELEMENT_FEATURE)
          continue;
        const value = obj.eGet(feature);
        if (value !== null && value !== void 0)
          return true;
      }
    }
    for (const feature of features) {
      if ("isContainment" in feature) {
        const ref2 = feature;
        if (feature.isTransient())
          continue;
        const value = obj.eGet(ref2);
        if (value === null || value === void 0)
          continue;
        if (ref2.isContainment()) {
          if ((Array.isArray(value) || isEList(value)) && value.length > 0)
            return true;
          if (!Array.isArray(value) && !isEList(value))
            return true;
        } else if (feature.isMany() && (Array.isArray(value) || isEList(value)) && value.length > 0) {
          for (const refObj of value) {
            const refResource = refObj.eResource?.();
            if (!refResource || refResource !== this.resource) {
              return true;
            }
          }
        }
      }
    }
    return false;
  }
  /**
   * Write element content (containments and multi-valued non-containment references)
   */
  writeElements(obj) {
    const eClass = obj.eClass();
    const emd = this.helper.getExtendedMetaData();
    if (emd) {
      for (const feature of eClass.getEAllStructuralFeatures()) {
        if (feature.isTransient() || feature.isDerived())
          continue;
        if (!this.isAttribute(feature))
          continue;
        const fKind = emd.getFeatureKind(feature);
        if (fKind !== ELEMENT_FEATURE)
          continue;
        const value = obj.eGet(feature);
        if (value === null || value === void 0)
          continue;
        const elemName = this.getSerializedElementName(feature, emd);
        const attr = feature;
        if (feature.isMany() && (Array.isArray(value) || isEList(value))) {
          for (const item of value) {
            if (item !== null && item !== void 0) {
              this.writeIndent();
              const strVal = this.convertSingleValueToString(attr, item);
              this.output.push(`<${elemName}>${this.escapeXml(strVal)}</${elemName}>
`);
            }
          }
        } else {
          this.writeIndent();
          const strVal = this.convertToString(attr, value);
          this.output.push(`<${elemName}>${this.escapeXml(strVal)}</${elemName}>
`);
        }
      }
    }
    for (const feature of eClass.getEAllStructuralFeatures()) {
      if ("isContainment" in feature) {
        const ref2 = feature;
        if (feature.isTransient())
          continue;
        const value = obj.eGet(ref2);
        if (value === null || value === void 0)
          continue;
        if (ref2.isContainment()) {
          if (Array.isArray(value) || isEList(value)) {
            for (const child of value) {
              this.writeElement(ref2, child);
            }
          } else {
            this.writeElement(ref2, value);
          }
        } else if (feature.isMany() && (Array.isArray(value) || isEList(value)) && value.length > 0) {
          for (const refObj of value) {
            const resolved = this.resolveValue(refObj, obj);
            if (resolved === null || resolved === void 0)
              continue;
            const refResource = typeof resolved !== "string" ? resolved.eResource?.() : null;
            if (refResource && refResource === this.resource)
              continue;
            const href = typeof resolved === "string" ? resolved : this.getHref(resolved);
            if (href) {
              this.writeIndent();
              this.output.push(`<${this.helper.getSerializedFeatureName(ref2)} href="${this.escapeXml(href)}"/>
`);
            }
          }
        }
      }
    }
  }
  /**
   * Write a single element
   */
  writeElement(feature, value) {
    const emd = this.helper.getExtendedMetaData();
    const featureName = this.getSerializedElementName(feature, emd) || "element";
    this.writeIndent();
    this.output.push(`<${featureName}`);
    const declaredType = feature.getEType();
    const actualType = value.eClass();
    if (declaredType && actualType && actualType !== declaredType) {
      const pkg = actualType.getEPackage();
      const prefix = pkg ? this.getPrefix(pkg) : "";
      const typeName = prefix ? `${prefix}:${actualType.getName()}` : actualType.getName();
      this.output.push(` xsi:type="${typeName}"`);
    }
    this.saveID(value);
    this.writeAttributes(value);
    const simpleText = this.getSimpleContentText(value, emd);
    const hasContent = this.hasElementContent(value);
    if (simpleText !== null) {
      this.output.push(`>${this.escapeXml(simpleText)}`);
      if (hasContent) {
        this.output.push("\n");
        this.indent++;
        this.writeElements(value);
        this.indent--;
        this.writeIndent();
      }
      this.output.push(`</${featureName}>
`);
    } else if (hasContent) {
      this.output.push(">\n");
      this.indent++;
      this.writeElements(value);
      this.indent--;
      this.writeIndent();
      this.output.push(`</${featureName}>
`);
    } else {
      this.output.push("/>\n");
    }
  }
  /**
   * Resolve a value if it's a proxy.
   * Returns the resolved value or the original value if not a proxy or cannot be resolved.
   */
  resolveValue(value, owner) {
    if (value === null || value === void 0) {
      return value;
    }
    if (isInternalEObject(value) && value.eIsProxy()) {
      if ("eResolveProxy" in owner && typeof owner.eResolveProxy === "function") {
        const resolved = owner.eResolveProxy(value);
        if (resolved !== value && !(isInternalEObject(resolved) && resolved.eIsProxy())) {
          return resolved;
        }
      }
      const proxyURI = value.eProxyURI();
      if (proxyURI && this.resource) {
        const resourceSet = this.resource.getResourceSet();
        if (resourceSet) {
          const uriStr = proxyURI.toString();
          const hashIndex = uriStr.indexOf("#");
          if (hashIndex >= 0) {
            const fragment = uriStr.substring(hashIndex + 1);
            let targetResource = this.resource;
            if (hashIndex > 0) {
              const resourceURI = URI.createURI(uriStr.substring(0, hashIndex));
              targetResource = resourceSet.getResource(resourceURI, true) || this.resource;
            }
            if (targetResource) {
              const resolved = targetResource.getEObject(fragment);
              if (resolved) {
                return resolved;
              }
            }
          }
        }
      }
      return proxyURI?.toString() || null;
    }
    return value;
  }
  /**
   * Convert value to string
   */
  convertToString(attr, value) {
    if (value === null || value === void 0)
      return "";
    if (Array.isArray(value) || isEList(value)) {
      const items = [];
      for (const item of value) {
        if (item !== null && item !== void 0) {
          items.push(this.convertSingleValueToString(attr, item));
        }
      }
      return items.join(" ");
    }
    if (isEEnum(attr.getEType())) {
      return this.convertSingleValueToString(attr, value);
    }
    if (typeof value === "string") {
      return value;
    }
    if (typeof value === "boolean") {
      return value ? "true" : "false";
    }
    if (typeof value === "number") {
      return String(value);
    }
    if (value && typeof value === "object" && "eClass" in value) {
      if ("getName" in value && typeof value.getName === "function") {
        return value.getName() || "";
      }
      return "";
    }
    const eType = attr.getEType();
    if (eType && "getEPackage" in eType) {
      const pkg = eType.getEPackage();
      if (pkg) {
        const factory = pkg.getEFactoryInstance();
        if (factory) {
          return factory.convertToString(eType, value);
        }
      }
    }
    return String(value);
  }
  /**
   * Convert a single value to string (helper for arrays)
   */
  convertSingleValueToString(attr, value) {
    if (value === null || value === void 0)
      return "";
    const isEnum = isEEnum(attr.getEType());
    if (!isEnum) {
      if (typeof value === "string")
        return value;
      if (typeof value === "boolean")
        return value ? "true" : "false";
      if (typeof value === "number")
        return String(value);
    }
    const eType = attr.getEType();
    if (eType && "getEPackage" in eType) {
      const pkg = eType.getEPackage();
      if (pkg) {
        const factory = pkg.getEFactoryInstance();
        if (factory) {
          return factory.convertToString(eType, value);
        }
      }
    }
    return String(value);
  }
  /**
   * Get the text content for a simple-content class, or null if not applicable.
   */
  getSimpleContentText(obj, emd) {
    if (!emd)
      return null;
    const eClass = obj.eClass();
    if (emd.getContentKind(eClass) !== SIMPLE_CONTENT)
      return null;
    const simpleFeature = emd.getSimpleContentFeature(eClass);
    if (!simpleFeature)
      return null;
    const value = obj.eGet(simpleFeature);
    if (value === null || value === void 0)
      return null;
    if (typeof value === "string")
      return value;
    if (typeof value === "boolean")
      return value ? "true" : "false";
    if (typeof value === "number")
      return String(value);
    return String(value);
  }
  /**
   * Get the serialized attribute name, including namespace prefix if EMD specifies one.
   */
  getSerializedAttributeName(feature, emd) {
    if (emd) {
      const ns = emd.getNamespace(feature);
      const name = emd.getName(feature) ?? feature.getName() ?? "";
      if (ns) {
        const prefix = this.getNamespacePrefix(ns);
        if (prefix) {
          return `${prefix}:${name}`;
        }
      }
      if (name && !name.startsWith(":")) {
        return name;
      }
    }
    return this.helper.getSerializedFeatureName(feature);
  }
  /**
   * Get the serialized element name, including namespace prefix if EMD specifies one.
   */
  getSerializedElementName(feature, emd) {
    if (emd) {
      const ns = emd.getNamespace(feature);
      const name = emd.getName(feature) ?? feature.getName() ?? "";
      if (ns) {
        const prefix = this.getNamespacePrefix(ns);
        if (prefix) {
          return `${prefix}:${name}`;
        }
      }
      if (name && !name.startsWith(":")) {
        return name;
      }
    }
    return this.helper.getSerializedFeatureName(feature);
  }
  /**
   * Get or create a namespace prefix for the given URI.
   */
  getNamespacePrefix(nsURI) {
    const existing = this.declaredNamespaces.get(nsURI);
    if (existing)
      return existing;
    if (nsURI === "http://www.w3.org/XML/1998/namespace")
      return "xml";
    return null;
  }
  /**
   * Escape XML special characters
   */
  escapeXml(str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
  }
  /**
   * Write indentation
   */
  writeIndent() {
    for (let i2 = 0; i2 < this.indent; i2++) {
      this.output.push(this.indentString);
    }
  }
}
class XMISave extends XMLSave {
  constructor(helper) {
    super(helper);
    this.idAttributeName = "xmi:id";
  }
  writeNamespaces(obj) {
    super.writeNamespaces(obj);
  }
}
class XMLResource extends BasicResource {
  constructor(uri) {
    super(uri);
    this.idToEObjectMap = /* @__PURE__ */ new Map();
    this.eObjectToIDMap = /* @__PURE__ */ new Map();
    this.xmlHelper = this.createXMLHelper();
  }
  createXMLHelper() {
    return new XMLHelperImpl(this);
  }
  /**
   * Get EObject by ID
   */
  getEObject(uriFragment) {
    const byId = this.idToEObjectMap.get(uriFragment);
    if (byId) {
      return byId;
    }
    return super.getEObject(uriFragment);
  }
  /**
   * Get URI fragment for an object
   */
  getURIFragment(eObject) {
    const id = this.eObjectToIDMap.get(eObject);
    if (id) {
      return id;
    }
    return super.getURIFragment(eObject);
  }
  /**
   * Set ID for an object
   */
  setID(eObject, id) {
    if (id) {
      this.idToEObjectMap.set(id, eObject);
      this.eObjectToIDMap.set(eObject, id);
    }
  }
  /**
   * Get ID for an object
   */
  getID(eObject) {
    return this.eObjectToIDMap.get(eObject) ?? null;
  }
  /**
   * Clear ID maps
   */
  clearIdMaps() {
    this.idToEObjectMap.clear();
    this.eObjectToIDMap.clear();
  }
  /**
   * Load resource using URIConverter if available, otherwise no-op.
   * For direct string loading, use loadFromString().
   */
  async load(options) {
    const rs = this.getResourceSet();
    const converter = rs?.getURIConverter();
    const uri = this.getURI();
    if (converter && uri) {
      try {
        const stream = await converter.createInputStream(uri);
        const content = await streamToString(stream);
        this.loadFromString(content, options);
      } catch (err) {
        this.loaded = true;
      }
    } else {
      this.loaded = true;
    }
  }
  /**
   * Load from XML string
   */
  loadFromString(xmlString, options) {
    this.clearIdMaps();
    const opts = options || /* @__PURE__ */ new Map();
    const loader = this.createXMLLoad();
    loader.load(this, xmlString, opts);
    this.loaded = true;
  }
  /**
   * Create the XML loader
   */
  createXMLLoad() {
    return new XMLLoad(this.xmlHelper);
  }
  /**
   * Create the XML saver
   */
  createXMLSave() {
    return new XMLSave(this.xmlHelper);
  }
  /**
   * Save to XML string
   */
  saveToString(options) {
    const opts = options || /* @__PURE__ */ new Map();
    const saver = this.createXMLSave();
    return saver.save(this, opts);
  }
  /**
   * Save a subset of objects to XML string.
   * Uses this resource's context (IDs, reference resolution) but only
   * serializes the given objects as root elements.
   */
  saveContents(objects, options) {
    const opts = options || /* @__PURE__ */ new Map();
    const saver = this.createXMLSave();
    return saver.saveObjects(this, objects, opts);
  }
  /**
   * Unload resource
   */
  unload() {
    super.unload();
    this.clearIdMaps();
  }
}
class XMIResource extends XMLResource {
  createXMLLoad() {
    return new XMILoad(this.xmlHelper);
  }
  createXMLSave() {
    return new XMISave(this.xmlHelper);
  }
}
async function streamToString(stream) {
  const reader = stream.getReader();
  const decoder = new TextDecoder();
  let result = "";
  while (true) {
    const { done, value } = await reader.read();
    if (done)
      break;
    result += decoder.decode(value, { stream: true });
  }
  result += decoder.decode();
  return result;
}
class XMLResourceFactory {
  createResource(uri) {
    return new XMLResource(uri);
  }
}
class XMIResourceFactory {
  createResource(uri) {
    return new XMIResource(uri);
  }
}
const extensionMap$1 = Resource.INSTANCE_FACTORY_REGISTRY.getExtensionToFactoryMap();
if (!extensionMap$1.has("xml")) {
  extensionMap$1.set("xml", new XMLResourceFactory());
}
if (!extensionMap$1.has("xmi")) {
  extensionMap$1.set("xmi", new XMIResourceFactory());
}
if (!extensionMap$1.has("ecore")) {
  extensionMap$1.set("ecore", new XMIResourceFactory());
}
class JSONLoad {
  constructor() {
    this.forwardReferences = [];
    this.errors = [];
  }
  /**
   * Load a JSON string into the resource.
   */
  load(resource, jsonString, options) {
    this.resource = resource;
    this.packageRegistry = resource.getResourceSet()?.getPackageRegistry() || EPackageRegistry.INSTANCE;
    this.forwardReferences = [];
    this.errors = [];
    let json;
    try {
      json = JSON.parse(jsonString);
    } catch (e2) {
      this.error(`Invalid JSON: ${e2 instanceof Error ? e2.message : String(e2)}`);
      return;
    }
    if (Array.isArray(json)) {
      for (const item of json) {
        const obj = this.loadObject(item);
        if (obj) {
          resource.getContents().push(obj);
        }
      }
    } else if (json && typeof json === "object") {
      const obj = this.loadObject(json);
      if (obj) {
        resource.getContents().push(obj);
      }
    }
    this.handleForwardReferences();
  }
  /**
   * Load a single JSON object into an EObject.
   */
  loadObject(json, expectedType) {
    const eClass = this.resolveEClass(json, expectedType);
    if (!eClass) {
      this.error(`Cannot determine type for object: ${JSON.stringify(json).substring(0, 100)}`);
      return null;
    }
    const pkg = eClass.getEPackage();
    if (!pkg) {
      this.error(`No package for class '${eClass.getName()}'`);
      return null;
    }
    const factory = pkg.getEFactoryInstance();
    const obj = factory.create(eClass);
    for (const [key, value] of Object.entries(json)) {
      if (key === "eClass")
        continue;
      if (value === null || value === void 0)
        continue;
      const feature = eClass.getEStructuralFeature(key);
      if (!feature) {
        this.error(`Unknown feature '${key}' for type '${eClass.getName()}'`);
        continue;
      }
      if (this.isAttribute(feature)) {
        this.loadAttribute(obj, feature, value);
      } else {
        const ref2 = feature;
        if (ref2.isContainment()) {
          this.loadContainment(obj, ref2, value);
        } else {
          this.loadCrossReference(obj, ref2, value);
        }
      }
    }
    return obj;
  }
  /**
   * Resolve the EClass for a JSON object.
   * Uses `eClass` property if present, otherwise falls back to expectedType.
   */
  resolveEClass(json, expectedType) {
    const eClassURI = json["eClass"];
    if (eClassURI) {
      return this.resolveType(eClassURI);
    }
    return expectedType || null;
  }
  /**
   * Resolve an eClass type URI (`nsURI#//ClassName`) to an EClass.
   */
  resolveType(eClassURI) {
    const hashIndex = eClassURI.indexOf("#");
    if (hashIndex < 0) {
      this.error(`Invalid eClass URI (no '#'): ${eClassURI}`);
      return null;
    }
    const nsURI = eClassURI.substring(0, hashIndex);
    let fragment = eClassURI.substring(hashIndex + 1);
    while (fragment.startsWith("/")) {
      fragment = fragment.substring(1);
    }
    const pkg = this.packageRegistry.getEPackage(nsURI);
    if (!pkg) {
      this.error(`Package not found for nsURI: ${nsURI}`);
      return null;
    }
    const classifier = pkg.getEClassifier(fragment);
    if (!classifier) {
      this.error(`Classifier '${fragment}' not found in package '${nsURI}'`);
      return null;
    }
    if (!("getESuperTypes" in classifier)) {
      this.error(`'${fragment}' is not an EClass`);
      return null;
    }
    return classifier;
  }
  /**
   * Load an attribute value.
   */
  loadAttribute(obj, attr, value) {
    if (attr.isMany()) {
      const items = Array.isArray(value) ? value : [value];
      const list = obj.eGet(attr);
      if (list && (Array.isArray(list) || isEList(list))) {
        for (const item of items) {
          list.push(this.convertAttributeValue(attr, item));
        }
      } else {
        obj.eSet(attr, items.map((v2) => this.convertAttributeValue(attr, v2)));
      }
    } else {
      obj.eSet(attr, this.convertAttributeValue(attr, value));
    }
  }
  /**
   * Convert a JSON value to the appropriate attribute type using EFactory.createFromString.
   */
  convertAttributeValue(attr, value) {
    if (value === null || value === void 0)
      return null;
    if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
      if (typeof value === "string") {
        const eType = attr.getEType();
        if (eType && "getEPackage" in eType) {
          const pkg = eType.getEPackage();
          if (pkg) {
            const factory = pkg.getEFactoryInstance();
            if (factory) {
              try {
                return factory.createFromString(eType, value);
              } catch {
              }
            }
          }
        }
      }
      return value;
    }
    return value;
  }
  /**
   * Load a containment reference value (nested objects).
   */
  loadContainment(obj, ref2, value) {
    const expectedType = ref2.getEType() && "getESuperTypes" in ref2.getEType() ? ref2.getEType() : void 0;
    if (ref2.isMany()) {
      const items = Array.isArray(value) ? value : [value];
      const list = obj.eGet(ref2);
      for (const item of items) {
        if (item && typeof item === "object") {
          const child = this.loadObject(item, expectedType);
          if (child) {
            if (list && (Array.isArray(list) || isEList(list))) {
              list.push(child);
            }
          }
        }
      }
    } else {
      if (value && typeof value === "object" && !Array.isArray(value)) {
        const child = this.loadObject(value, expectedType);
        if (child) {
          obj.eSet(ref2, child);
        }
      }
    }
  }
  /**
   * Load a cross-reference value (`{ "$ref": "uri#fragment" }`).
   */
  loadCrossReference(obj, ref2, value) {
    if (ref2.isMany()) {
      const items = Array.isArray(value) ? value : [value];
      for (const item of items) {
        if (item && typeof item === "object" && "$ref" in item) {
          this.forwardReferences.push({
            object: obj,
            feature: ref2,
            value: item["$ref"]
          });
        }
      }
    } else {
      if (value && typeof value === "object" && "$ref" in value) {
        this.forwardReferences.push({
          object: obj,
          feature: ref2,
          value: value["$ref"]
        });
      }
    }
  }
  /**
   * Resolve all forward references collected during loading.
   */
  handleForwardReferences() {
    for (const fwdRef of this.forwardReferences) {
      const resolved = this.resolveReference(fwdRef.value);
      if (resolved) {
        this.setReferenceValue(fwdRef.object, fwdRef.feature, resolved);
      } else {
        const proxy = this.createProxy(fwdRef.feature, fwdRef.value);
        if (proxy) {
          this.setReferenceValue(fwdRef.object, fwdRef.feature, proxy);
        } else {
          this.error(`Unresolved reference: ${fwdRef.value}`);
        }
      }
    }
    this.forwardReferences = [];
  }
  /**
   * Set a reference value on an object (handles single and multi-valued).
   */
  setReferenceValue(obj, feature, value) {
    if (feature.isMany()) {
      const list = obj.eGet(feature);
      if (list && (Array.isArray(list) || isEList(list))) {
        list.push(value);
      }
    } else {
      obj.eSet(feature, value);
    }
  }
  /**
   * Resolve a $ref URI to an EObject.
   */
  resolveReference(ref2) {
    const hashIndex = ref2.indexOf("#");
    if (hashIndex > 0) {
      const baseURI = ref2.substring(0, hashIndex);
      const fragment = ref2.substring(hashIndex + 1);
      const currentURI = this.resource.getURI();
      if (currentURI && currentURI.toString() === baseURI) {
        return this.resource.getEObject(fragment);
      }
      const ePackage = this.packageRegistry.getEPackage(baseURI);
      if (ePackage) {
        return this.resolveFragmentInPackage(ePackage, fragment);
      }
      const resourceSet = this.resource.getResourceSet();
      if (resourceSet) {
        const uri = URI.createURI(baseURI);
        const externalResource = resourceSet.getResource(uri, true);
        if (externalResource) {
          return externalResource.getEObject(fragment);
        }
      }
      return null;
    }
    if (ref2.startsWith("#")) {
      return this.resource.getEObject(ref2.substring(1));
    }
    if (ref2.startsWith("/")) {
      return this.resource.getEObject(ref2);
    }
    return this.resource.getEObject(ref2);
  }
  /**
   * Resolve a fragment path within an EPackage.
   */
  resolveFragmentInPackage(ePackage, fragment) {
    let path = fragment;
    while (path.startsWith("/")) {
      path = path.substring(1);
    }
    if (!path) {
      return ePackage;
    }
    const segments = path.split("/");
    const classifier = resolveClassifierInPackage(ePackage, path);
    if (classifier) {
      return classifier;
    }
    if (segments.length >= 2) {
      let currentPkg = ePackage;
      for (let i2 = 0; i2 < segments.length - 2; i2++) {
        const subPackages = currentPkg.getESubpackages();
        let found = null;
        for (let j2 = 0; j2 < subPackages.length; j2++) {
          if (subPackages.get(j2).getName() === segments[i2]) {
            found = subPackages.get(j2);
            break;
          }
        }
        if (!found)
          return null;
        currentPkg = found;
      }
      const classifierName = segments[segments.length - 2];
      const eClassifier = currentPkg.getEClassifier(classifierName);
      if (eClassifier && "getEStructuralFeature" in eClassifier) {
        const feature = eClassifier.getEStructuralFeature(segments[segments.length - 1]);
        if (feature) {
          return feature;
        }
      }
    }
    return null;
  }
  /**
   * Create a proxy for an unresolved reference.
   */
  createProxy(feature, uriValue) {
    let proxyURI;
    const hashIndex = uriValue.indexOf("#");
    if (hashIndex > 0) {
      proxyURI = URI.createURI(uriValue);
    } else if (hashIndex === 0) {
      const resourceURI = this.resource.getURI();
      if (resourceURI) {
        proxyURI = URI.createURI(resourceURI.toString() + uriValue);
      } else {
        proxyURI = URI.createURI(uriValue);
      }
    } else {
      const resourceURI = this.resource.getURI();
      if (resourceURI) {
        proxyURI = URI.createURI(resourceURI.toString() + "#" + uriValue);
      } else {
        proxyURI = URI.createURI("#" + uriValue);
      }
    }
    const eType = feature.getEType();
    const eClass = eType && "getESuperTypes" in eType ? eType : null;
    const proxy = new EProxyImpl(proxyURI, eClass || void 0);
    proxy.eSetResource(this.resource);
    return proxy;
  }
  /**
   * Check if a feature is an EAttribute (not an EReference).
   */
  isAttribute(feature) {
    return !("isContainment" in feature);
  }
  /**
   * Report an error.
   */
  error(message) {
    this.errors.push(new Error(message));
  }
  /**
   * Get accumulated errors.
   */
  getErrors() {
    return this.errors;
  }
}
const OPTION_SERIALIZE_TYPE = "SERIALIZE_TYPE";
const OPTION_INDENT = "INDENT";
const SERIALIZE_TYPE_ALWAYS = "always";
const SERIALIZE_TYPE_POLYMORPHIC = "polymorphic";
class JSONSave {
  constructor() {
    this.serializeType = SERIALIZE_TYPE_POLYMORPHIC;
    this.indent = 2;
  }
  /**
   * Serialize resource contents to JSON string.
   */
  save(resource, options) {
    this.resource = resource;
    if (options) {
      if (options.has(OPTION_SERIALIZE_TYPE)) {
        this.serializeType = options.get(OPTION_SERIALIZE_TYPE);
      }
      if (options.has(OPTION_INDENT)) {
        this.indent = options.get(OPTION_INDENT);
      }
    }
    const contents = resource.getContents();
    if (contents.size() === 0) {
      return "{}";
    }
    if (contents.size() === 1) {
      const obj = this.saveObject(contents.get(0), void 0, true);
      return JSON.stringify(obj, null, this.indent);
    }
    const arr = [];
    for (const root of contents) {
      arr.push(this.saveObject(root, void 0, true));
    }
    return JSON.stringify(arr, null, this.indent);
  }
  /**
   * Convert an EObject to a plain JS object for JSON serialization.
   */
  saveObject(obj, feature, isRoot = false) {
    const result = {};
    const eClass = obj.eClass();
    if (this.shouldSaveType(obj, feature, isRoot)) {
      result["eClass"] = this.getEClassURI(eClass);
    }
    for (const feat of eClass.getEAllStructuralFeatures()) {
      if (feat.isTransient() || feat.isDerived())
        continue;
      const value = obj.eGet(feat);
      if (value === null || value === void 0)
        continue;
      if (this.isAttribute(feat)) {
        this.saveAttribute(result, obj, feat, value);
      } else {
        const ref2 = feat;
        if (ref2.isContainment()) {
          this.saveContainment(result, obj, ref2, value);
        } else {
          this.saveCrossReference(result, obj, ref2, value);
        }
      }
    }
    return result;
  }
  /**
   * Serialize an attribute value.
   */
  saveAttribute(result, obj, attr, value) {
    try {
      const defaultValue = attr.getDefaultValue();
      if (value === defaultValue)
        return;
    } catch {
    }
    const name = attr.getName();
    if (attr.isMany()) {
      const items = Array.isArray(value) || isEList(value) ? [...value] : [value];
      if (items.length === 0)
        return;
      result[name] = items.map((v2) => this.convertAttributeValue(attr, v2));
    } else {
      result[name] = this.convertAttributeValue(attr, value);
    }
  }
  /**
   * Convert a single attribute value to a JSON-compatible value.
   */
  convertAttributeValue(attr, value) {
    if (value === null || value === void 0)
      return null;
    if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
      return value;
    }
    const eType = attr.getEType();
    if (eType && "getEPackage" in eType) {
      const pkg = eType.getEPackage();
      if (pkg) {
        const factory = pkg.getEFactoryInstance();
        if (factory) {
          return factory.convertToString(eType, value);
        }
      }
    }
    return String(value);
  }
  /**
   * Serialize a containment reference.
   * Proxies inside containment are serialized as `{ "$ref": "uri" }` (emfjson-jackson convention).
   */
  saveContainment(result, obj, ref2, value) {
    const name = ref2.getName();
    if (ref2.isMany()) {
      const items = Array.isArray(value) || isEList(value) ? [...value] : [value];
      if (items.length === 0)
        return;
      result[name] = items.map((child) => this.saveContainedChild(child, ref2));
    } else {
      result[name] = this.saveContainedChild(value, ref2);
    }
  }
  /**
   * Serialize a single contained child. Proxies become `{ "$ref": "..." }`.
   */
  saveContainedChild(child, ref2) {
    if (isInternalEObject(child) && child.eIsProxy()) {
      const href = child.eProxyURI()?.toString();
      if (href) {
        return { "$ref": href };
      }
    }
    return this.saveObject(child, ref2);
  }
  /**
   * Serialize a cross-reference (non-containment) as `{ "$ref": "uri#fragment" }`.
   */
  saveCrossReference(result, obj, ref2, value) {
    const name = ref2.getName();
    if (ref2.isMany()) {
      const items = Array.isArray(value) || isEList(value) ? [...value] : [value];
      if (items.length === 0)
        return;
      const refs = [];
      for (const item of items) {
        const href = this.getHref(item);
        if (href) {
          refs.push({ "$ref": href });
        }
      }
      if (refs.length > 0) {
        result[name] = refs;
      }
    } else {
      const href = this.getHref(value);
      if (href) {
        result[name] = { "$ref": href };
      }
    }
  }
  /**
   * Determine whether the eClass type URI should be written.
   */
  shouldSaveType(obj, feature, isRoot = false) {
    if (this.serializeType === SERIALIZE_TYPE_ALWAYS) {
      return true;
    }
    if (isRoot) {
      return true;
    }
    if (feature && "isContainment" in feature) {
      const ref2 = feature;
      const declaredType = ref2.getEType();
      const actualType = obj.eClass();
      if (declaredType && actualType && declaredType !== actualType) {
        return true;
      }
      return false;
    }
    return false;
  }
  /**
   * Get the emfjson-style type URI for an EClass: `nsURI#//ClassName`
   */
  getEClassURI(eClass) {
    const pkg = eClass.getEPackage();
    const nsURI = pkg?.getNsURI();
    const name = eClass.getName();
    if (nsURI && name) {
      return `${nsURI}#//${name}`;
    }
    return name || "Unknown";
  }
  /**
   * Get href for a cross-referenced object.
   * Reuses the pattern from XMLSave.getHref().
   */
  getHref(obj) {
    if (isInternalEObject(obj) && obj.eIsProxy()) {
      const proxyURI = obj.eProxyURI();
      return proxyURI?.toString() || null;
    }
    const resource = obj.eResource?.();
    if (resource) {
      const fragment = resource.getURIFragment(obj);
      const uri = resource.getURI();
      if (uri && fragment) {
        return `${uri.toString()}#${fragment}`;
      }
      if (fragment) {
        return `#${fragment}`;
      }
    }
    if ("getEContainingClass" in obj && typeof obj.getEContainingClass === "function") {
      const containingClass = obj.getEContainingClass();
      if (containingClass) {
        const pkg = containingClass.getEPackage?.();
        const className = containingClass.getName?.();
        const featureName = obj.getName?.();
        if (pkg && className && featureName) {
          const nsURI = pkg.getNsURI?.();
          if (nsURI) {
            return `${nsURI}#//${className}/${featureName}`;
          }
        }
      }
    }
    if ("getEPackage" in obj && typeof obj.getEPackage === "function") {
      const pkg = obj.getEPackage();
      if (pkg) {
        const nsURI = pkg.getNsURI?.();
        const name = obj.getName?.();
        if (nsURI && name) {
          return `${nsURI}#//${name}`;
        }
      }
    }
    if ("getName" in obj) {
      const name = obj.getName?.();
      if (name) {
        return `//${name}`;
      }
    }
    return null;
  }
  /**
   * Check if a feature is an EAttribute (not an EReference).
   */
  isAttribute(feature) {
    return !("isContainment" in feature);
  }
}
class JSONResource extends BasicResource {
  constructor(uri) {
    super(uri);
    this.idToEObjectMap = /* @__PURE__ */ new Map();
    this.eObjectToIDMap = /* @__PURE__ */ new Map();
  }
  /**
   * Get EObject by ID or path fragment.
   */
  getEObject(uriFragment) {
    const byId = this.idToEObjectMap.get(uriFragment);
    if (byId) {
      return byId;
    }
    return super.getEObject(uriFragment);
  }
  /**
   * Get URI fragment for an object.
   */
  getURIFragment(eObject) {
    const id = this.eObjectToIDMap.get(eObject);
    if (id) {
      return id;
    }
    return super.getURIFragment(eObject);
  }
  /**
   * Set ID for an object.
   */
  setID(eObject, id) {
    if (id) {
      this.idToEObjectMap.set(id, eObject);
      this.eObjectToIDMap.set(eObject, id);
    }
  }
  /**
   * Get ID for an object.
   */
  getID(eObject) {
    return this.eObjectToIDMap.get(eObject) ?? null;
  }
  clearIdMaps() {
    this.idToEObjectMap.clear();
    this.eObjectToIDMap.clear();
  }
  /**
   * Load from a JSON string.
   */
  loadFromString(jsonString, options) {
    this.clearIdMaps();
    const opts = options || /* @__PURE__ */ new Map();
    const loader = this.createJSONLoad();
    loader.load(this, jsonString, opts);
    const loaderErrors = loader.getErrors();
    if (loaderErrors.length > 0) {
      const resourceErrors = this.getErrors();
      for (const err of loaderErrors) {
        resourceErrors.push({ message: err.message });
      }
    }
    this.loaded = true;
  }
  /**
   * Save to a JSON string.
   */
  saveToString(options) {
    const opts = options || /* @__PURE__ */ new Map();
    const saver = this.createJSONSave();
    return saver.save(this, opts);
  }
  /**
   * Create the JSON loader.
   */
  createJSONLoad() {
    return new JSONLoad();
  }
  /**
   * Create the JSON saver.
   */
  createJSONSave() {
    return new JSONSave();
  }
  /**
   * Unload resource.
   */
  unload() {
    super.unload();
    this.clearIdMaps();
  }
}
class JSONResourceFactory {
  createResource(uri) {
    return new JSONResource(uri);
  }
}
const extensionMap = Resource.INSTANCE_FACTORY_REGISTRY.getExtensionToFactoryMap();
if (!extensionMap.has("json")) {
  extensionMap.set("json", new JSONResourceFactory());
}
class EcoreClassRegistry {
  constructor() {
    this._getEcorePackage = null;
  }
  /**
   * Register the getEcorePackage function
   */
  register(getEcorePackage2) {
    this._getEcorePackage = getEcorePackage2;
  }
  /**
   * Get the EClass for EObject
   */
  getEObjectClass() {
    if (!this._getEcorePackage) {
      throw new Error("EcorePackage not registered. Import EcorePackage first.");
    }
    return this._getEcorePackage().getEObjectClass();
  }
  /**
   * Get the EClass for EClass
   */
  getEClassClass() {
    if (!this._getEcorePackage) {
      throw new Error("EcorePackage not registered. Import EcorePackage first.");
    }
    return this._getEcorePackage().getEClassClass();
  }
  /**
   * Get the EClass for EPackage
   */
  getEPackageClass() {
    if (!this._getEcorePackage) {
      throw new Error("EcorePackage not registered. Import EcorePackage first.");
    }
    return this._getEcorePackage().getEPackageClass();
  }
  /**
   * Get the EClass for EFactory
   */
  getEFactoryClass() {
    if (!this._getEcorePackage) {
      throw new Error("EcorePackage not registered. Import EcorePackage first.");
    }
    return this._getEcorePackage().getEFactoryClass();
  }
  /**
   * Get the EClass for EAttribute
   */
  getEAttributeClass() {
    if (!this._getEcorePackage) {
      throw new Error("EcorePackage not registered. Import EcorePackage first.");
    }
    return this._getEcorePackage().getEAttributeClass();
  }
  /**
   * Get the EClass for EReference
   */
  getEReferenceClass() {
    if (!this._getEcorePackage) {
      throw new Error("EcorePackage not registered. Import EcorePackage first.");
    }
    return this._getEcorePackage().getEReferenceClass();
  }
  /**
   * Get the EClass for EStructuralFeature
   */
  getEStructuralFeatureClass() {
    if (!this._getEcorePackage) {
      throw new Error("EcorePackage not registered. Import EcorePackage first.");
    }
    return this._getEcorePackage().getEStructuralFeatureClass();
  }
  /**
   * Get the EClass for EDataType
   */
  getEDataTypeClass() {
    if (!this._getEcorePackage) {
      throw new Error("EcorePackage not registered. Import EcorePackage first.");
    }
    return this._getEcorePackage().getEDataTypeClass();
  }
  /**
   * Get the EClass for EOperation
   */
  getEOperationClass() {
    if (!this._getEcorePackage) {
      throw new Error("EcorePackage not registered. Import EcorePackage first.");
    }
    return this._getEcorePackage().getEOperationClass();
  }
  /**
   * Get the EClass for EParameter
   */
  getEParameterClass() {
    if (!this._getEcorePackage) {
      throw new Error("EcorePackage not registered. Import EcorePackage first.");
    }
    return this._getEcorePackage().getEParameterClass();
  }
  /**
   * Get the EClass for EGenericType
   */
  getEGenericTypeClass() {
    if (!this._getEcorePackage) {
      throw new Error("EcorePackage not registered. Import EcorePackage first.");
    }
    return this._getEcorePackage().getEGenericTypeClass();
  }
  /**
   * Get the EClass for ETypeParameter
   */
  getETypeParameterClass() {
    if (!this._getEcorePackage) {
      throw new Error("EcorePackage not registered. Import EcorePackage first.");
    }
    return this._getEcorePackage().getETypeParameterClass();
  }
  /**
   * Get the EClass for EAnnotation
   */
  getEAnnotationClass() {
    if (!this._getEcorePackage) {
      throw new Error("EcorePackage not registered. Import EcorePackage first.");
    }
    return this._getEcorePackage().getEAnnotationClass();
  }
  /**
   * Get the EClass for EStringToStringMapEntry
   */
  getEStringToStringMapEntryClass() {
    if (!this._getEcorePackage) {
      throw new Error("EcorePackage not registered. Import EcorePackage first.");
    }
    return this._getEcorePackage().getEStringToStringMapEntryClass();
  }
  /**
   * Get the EClass for EEnum
   */
  getEEnumClass() {
    if (!this._getEcorePackage) {
      throw new Error("EcorePackage not registered. Import EcorePackage first.");
    }
    return this._getEcorePackage().getEEnumClass();
  }
  /**
   * Get the EClass for EEnumLiteral
   */
  getEEnumLiteralClass() {
    if (!this._getEcorePackage) {
      throw new Error("EcorePackage not registered. Import EcorePackage first.");
    }
    return this._getEcorePackage().getEEnumLiteralClass();
  }
  /**
   * Check if registry is initialized
   */
  isRegistered() {
    return this._getEcorePackage !== null;
  }
}
const ecoreRegistry = new EcoreClassRegistry();
class BasicEClass extends BasicEObject {
  constructor() {
    super(...arguments);
    this._name = null;
    this.abstract_ = false;
    this.interface_ = false;
    this._eSuperTypes = null;
    this._eStructuralFeatures = null;
    this._eOperations = null;
    this.ePackage = null;
    this.instanceClassName = null;
    this.instanceClass = null;
    this.featureID = 0;
    this.eTypeParameters = createMetamodelEList(this);
    this.eGenericSuperTypes = createMetamodelEList(this);
    this.eAnnotations = createMetamodelEList(this);
    this.xmlNameToFeature = /* @__PURE__ */ new Map();
    this.allSuperTypesCache = { value: null };
    this.allFeaturesCache = { value: null };
    this.attributesCache = { value: null };
    this.allAttributesCache = { value: null };
    this.referencesCache = { value: null };
    this.allReferencesCache = { value: null };
    this.allContainmentsCache = { value: null };
    this.allOperationsCache = { value: null };
  }
  // Public getter for PrimeVue compatibility (optionLabel="name")
  get name() {
    return this._name;
  }
  getName() {
    return this._name;
  }
  setName(value) {
    this._name = value;
  }
  isAbstract() {
    return this.abstract_;
  }
  setAbstract(value) {
    this.abstract_ = value;
  }
  isInterface() {
    return this.interface_;
  }
  setInterface(value) {
    this.interface_ = value;
  }
  getESuperTypes() {
    if (this._eSuperTypes === null) {
      this._eSuperTypes = createMetamodelEList(this, () => this.resolveOwnFeature("eSuperTypes"));
    }
    return this._eSuperTypes;
  }
  getEAllSuperTypes() {
    return cachedDerivedList(this.allSuperTypesCache, "getEAllSuperTypes", () => {
      const all = [];
      const visited = /* @__PURE__ */ new Set();
      const collect = (eClass) => {
        for (const superType of eClass.getESuperTypes()) {
          if (!visited.has(superType)) {
            visited.add(superType);
            collect(superType);
            all.push(superType);
          }
        }
      };
      collect(this);
      return all;
    });
  }
  getEIDAttribute() {
    for (const attr of this.getEAllAttributes()) {
      if (attr.isID()) {
        return attr;
      }
    }
    return null;
  }
  getEStructuralFeatures() {
    if (this._eStructuralFeatures === null) {
      const self2 = this;
      const list = new EObjectContainmentWithInverseEListLazy(this, () => {
        if (ecoreRegistry.isRegistered()) {
          try {
            const eClassClass = ecoreRegistry.getEClassClass();
            if (eClassClass !== self2 && eClassClass instanceof BasicEClass && eClassClass._eStructuralFeatures !== null) {
              return eClassClass.getEStructuralFeature("eStructuralFeatures");
            }
          } catch {
          }
        }
        return null;
      }, (element, owner) => {
        if ("setEContainingClass" in element) {
          element.setEContainingClass(owner);
        }
        if (owner && "setFeatureID" in element) {
          element.setFeatureID(this.featureID++);
        }
      });
      this._eStructuralFeatures = createIndexedProxy(list);
    }
    return this._eStructuralFeatures;
  }
  getEAllStructuralFeatures() {
    return cachedDerivedList(this.allFeaturesCache, "getEAllStructuralFeatures", () => {
      const all = [];
      for (const superType of this.getEAllSuperTypes()) {
        all.push(...superType.getEStructuralFeatures());
      }
      all.push(...this.getEStructuralFeatures());
      return all;
    });
  }
  getEAttributes() {
    return cachedDerivedList(this.attributesCache, "getEAttributes", () => this.getEStructuralFeatures().filter((f2) => this.isAttribute(f2)));
  }
  getEAllAttributes() {
    return cachedDerivedList(this.allAttributesCache, "getEAllAttributes", () => this.getEAllStructuralFeatures().filter((f2) => this.isAttribute(f2)));
  }
  getEReferences() {
    return cachedDerivedList(this.referencesCache, "getEReferences", () => this.getEStructuralFeatures().filter((f2) => this.isReference(f2)));
  }
  getEAllReferences() {
    return cachedDerivedList(this.allReferencesCache, "getEAllReferences", () => this.getEAllStructuralFeatures().filter((f2) => this.isReference(f2)));
  }
  getEAllContainments() {
    return cachedDerivedList(this.allContainmentsCache, "getEAllContainments", () => this.getEAllReferences().filter((ref2) => ref2.isContainment()));
  }
  getEOperations() {
    if (this._eOperations === null) {
      this._eOperations = createMetamodelEList(this, () => this.resolveOwnFeature("eOperations"));
    }
    return this._eOperations;
  }
  getEAllOperations() {
    return cachedDerivedList(this.allOperationsCache, "getEAllOperations", () => {
      const all = [...this.getEOperations()];
      for (const superType of this.getEAllSuperTypes()) {
        all.push(...superType.getEOperations());
      }
      return all;
    });
  }
  /**
   * Resolves one of this class's own metamodel features (eSuperTypes,
   * eOperations, ...) on the Ecore EClass descriptor, for notifications.
   *
   * Returns null while the Ecore package is still bootstrapping, which is why
   * the lists resolve their feature lazily rather than in the constructor.
   */
  resolveOwnFeature(name) {
    if (!ecoreRegistry.isRegistered()) {
      return null;
    }
    try {
      const eClassClass = ecoreRegistry.getEClassClass();
      if (eClassClass !== this && eClassClass instanceof BasicEClass && eClassClass._eStructuralFeatures !== null) {
        return eClassClass.getEStructuralFeature(name);
      }
    } catch {
    }
    return null;
  }
  getEStructuralFeature(featureNameOrID) {
    if (typeof featureNameOrID === "string") {
      const byName = this.getEAllStructuralFeatures().find((f2) => f2.getName() === featureNameOrID);
      if (byName)
        return byName;
      const byXmlName = this.xmlNameToFeature.get(featureNameOrID);
      if (byXmlName)
        return byXmlName;
      for (const superType of this.getEAllSuperTypes()) {
        if (superType instanceof BasicEClass) {
          const fromSuper = superType.xmlNameToFeature.get(featureNameOrID);
          if (fromSuper)
            return fromSuper;
        }
      }
      return null;
    } else {
      return this.getEAllStructuralFeatures()[featureNameOrID] || null;
    }
  }
  /**
   * Register an XML serialization name for a feature (from ExtendedMetaData annotations)
   */
  registerXmlName(xmlName, feature) {
    this.xmlNameToFeature.set(xmlName, feature);
  }
  isSuperTypeOf(someClass) {
    return someClass.getEAllSuperTypes().includes(this);
  }
  getFeatureCount() {
    return this.getEAllStructuralFeatures().length;
  }
  getFeatureID(feature) {
    const features = this.getEAllStructuralFeatures();
    return features.indexOf(feature);
  }
  getEOperation(operationID) {
    return this.getEAllOperations()[operationID] || null;
  }
  getOperationCount() {
    return this.getEAllOperations().length;
  }
  getOperationID(operation) {
    return this.getEAllOperations().indexOf(operation);
  }
  // EClassifier methods
  getInstanceClassName() {
    return this.instanceClassName;
  }
  setInstanceClassName(value) {
    this.instanceClassName = value;
  }
  getInstanceClass() {
    return this.instanceClass;
  }
  setInstanceClass(value) {
    this.instanceClass = value;
  }
  getDefaultValue() {
    return null;
  }
  getInstanceTypeName() {
    return this.instanceClassName;
  }
  setInstanceTypeName(value) {
    this.instanceClassName = value;
  }
  getEPackage() {
    return this.ePackage;
  }
  setEPackage(pkg) {
    this.ePackage = pkg;
  }
  getETypeParameters() {
    return this.eTypeParameters;
  }
  isInstance(object) {
    if (!object || typeof object !== "object")
      return false;
    if (!("eClass" in object))
      return false;
    const objectClass = object.eClass();
    return objectClass === this || this.isSuperTypeOf(objectClass);
  }
  getClassifierID() {
    if (!this.ePackage)
      return -1;
    return this.ePackage.getEClassifiers().indexOf(this);
  }
  // Helpers
  isAttribute(feature) {
    return "getEAttributeType" in feature;
  }
  isReference(feature) {
    return "getEReferenceType" in feature;
  }
  /**
   * Add feature to this class.
   * Uses the EList's add() method which automatically:
   * - Sets the container (eSetContainer)
   * - Sets the inverse reference (eContainingClass)
   * - Fires notifications for adapters
   * - Assigns a featureID
   */
  addFeature(feature) {
    this.getEStructuralFeatures().add(feature);
  }
  /**
   * Add operation to this class
   */
  addOperation(operation) {
    this.getEOperations().add(operation);
  }
  /**
   * Add super type
   */
  addSuperType(superType) {
    this.getESuperTypes().add(superType);
  }
  // EObject methods
  getEAnnotations() {
    return this.eAnnotations;
  }
  getEAnnotation(source) {
    return this.eAnnotations.find((a2) => a2.getSource() === source) || null;
  }
  eClass() {
    return ecoreRegistry.getEClassClass();
  }
  /**
   * Override eGet to handle class-specific features
   */
  eGet(feature) {
    const featureName = feature.getName();
    switch (featureName) {
      case "name":
        return this.name;
      case "abstract":
        return this.abstract_;
      case "interface":
        return this.interface_;
      case "eSuperTypes":
        return this.getESuperTypes();
      case "eStructuralFeatures":
        return this.getEStructuralFeatures();
      case "eOperations":
        return this.getEOperations();
      case "eTypeParameters":
        return this.eTypeParameters;
      case "eGenericSuperTypes":
        return this.eGenericSuperTypes;
      case "eAnnotations":
        return this.eAnnotations;
      case "instanceClassName":
        return this.instanceClassName;
      default:
        return super.eGet(feature);
    }
  }
  /**
   * Override eSet to handle class-specific features
   */
  eSet(feature, newValue) {
    const featureName = feature.getName();
    switch (featureName) {
      case "name":
        this._name = newValue;
        super.eSet(feature, newValue);
        break;
      case "abstract":
        this.abstract_ = newValue === true || newValue === "true";
        super.eSet(feature, newValue);
        break;
      case "interface":
        this.interface_ = newValue === true || newValue === "true";
        super.eSet(feature, newValue);
        break;
      case "eSuperTypes":
        replaceListContents(this.getESuperTypes(), newValue);
        break;
      case "eStructuralFeatures":
        replaceListContents(this.getEStructuralFeatures(), newValue);
        break;
      case "eOperations":
        replaceListContents(this.getEOperations(), newValue);
        break;
      case "eTypeParameters":
        replaceListContents(this.eTypeParameters, newValue);
        break;
      case "eGenericSuperTypes":
        replaceListContents(this.eGenericSuperTypes, newValue);
        break;
      case "eAnnotations":
        replaceListContents(this.eAnnotations, newValue);
        break;
      case "instanceClassName":
        this.instanceClassName = newValue;
        super.eSet(feature, newValue);
        break;
      default:
        super.eSet(feature, newValue);
    }
  }
}
class DataTypeRegistryImpl {
  constructor() {
    this.convertersByClassName = /* @__PURE__ */ new Map();
    this.convertersByName = /* @__PURE__ */ new Map();
    this.registerDefaultConverters();
  }
  /**
   * Register default converters for standard EMF types
   */
  registerDefaultConverters() {
    const booleanConverter = {
      fromString: (s2) => s2.toLowerCase() === "true",
      toString: (v2) => String(v2)
    };
    this.registerByClassName("boolean", booleanConverter);
    this.registerByClassName("java.lang.Boolean", booleanConverter);
    this.registerByName("EBoolean", booleanConverter);
    this.registerByName("EBooleanObject", booleanConverter);
    const intConverter = {
      fromString: (s2) => parseInt(s2, 10),
      toString: (v2) => String(v2)
    };
    this.registerByClassName("int", intConverter);
    this.registerByClassName("java.lang.Integer", intConverter);
    this.registerByClassName("short", intConverter);
    this.registerByClassName("java.lang.Short", intConverter);
    this.registerByClassName("byte", intConverter);
    this.registerByClassName("java.lang.Byte", intConverter);
    this.registerByName("EInt", intConverter);
    this.registerByName("EIntegerObject", intConverter);
    this.registerByName("EShort", intConverter);
    this.registerByName("EShortObject", intConverter);
    this.registerByName("EByte", intConverter);
    this.registerByName("EByteObject", intConverter);
    const longConverter = {
      fromString: (s2) => {
        const n2 = parseInt(s2, 10);
        if (Math.abs(n2) > Number.MAX_SAFE_INTEGER) {
          return BigInt(s2);
        }
        return n2;
      },
      toString: (v2) => String(v2)
    };
    this.registerByClassName("long", longConverter);
    this.registerByClassName("java.lang.Long", longConverter);
    this.registerByName("ELong", longConverter);
    this.registerByName("ELongObject", longConverter);
    const floatConverter = {
      fromString: (s2) => parseFloat(s2),
      toString: (v2) => String(v2)
    };
    this.registerByClassName("float", floatConverter);
    this.registerByClassName("java.lang.Float", floatConverter);
    this.registerByClassName("double", floatConverter);
    this.registerByClassName("java.lang.Double", floatConverter);
    this.registerByName("EFloat", floatConverter);
    this.registerByName("EFloatObject", floatConverter);
    this.registerByName("EDouble", floatConverter);
    this.registerByName("EDoubleObject", floatConverter);
    const stringConverter = {
      fromString: (s2) => s2,
      toString: (v2) => v2 ?? ""
    };
    this.registerByClassName("java.lang.String", stringConverter);
    this.registerByClassName("java.lang.Object", stringConverter);
    this.registerByName("EString", stringConverter);
    const charConverter = {
      fromString: (s2) => s2.charAt(0) || "",
      toString: (v2) => v2 ?? ""
    };
    this.registerByClassName("char", charConverter);
    this.registerByClassName("java.lang.Character", charConverter);
    this.registerByName("EChar", charConverter);
    this.registerByName("ECharacterObject", charConverter);
    const dateConverter = {
      fromString: (s2) => new Date(s2),
      toString: (v2) => v2?.toISOString() ?? ""
    };
    this.registerByClassName("java.util.Date", dateConverter);
    this.registerByName("EDate", dateConverter);
    const bigDecimalConverter = {
      fromString: (s2) => s2,
      // Keep as string to preserve precision
      toString: (v2) => v2 ?? "0"
    };
    this.registerByClassName("java.math.BigDecimal", bigDecimalConverter);
    this.registerByClassName("java.math.BigInteger", bigDecimalConverter);
    this.registerByName("EBigDecimal", bigDecimalConverter);
    this.registerByName("EBigInteger", bigDecimalConverter);
    const byteArrayConverter = {
      fromString: (s2) => {
        if (typeof atob === "function") {
          const binary = atob(s2);
          const bytes = new Uint8Array(binary.length);
          for (let i2 = 0; i2 < binary.length; i2++) {
            bytes[i2] = binary.charCodeAt(i2);
          }
          return bytes;
        }
        return new Uint8Array(Buffer.from(s2, "base64"));
      },
      toString: (v2) => {
        if (typeof btoa === "function") {
          return btoa(String.fromCharCode(...v2));
        }
        return Buffer.from(v2).toString("base64");
      }
    };
    this.registerByClassName("byte[]", byteArrayConverter);
    this.registerByName("EByteArray", byteArrayConverter);
    const featureMapConverter = {
      fromString: (s2) => s2,
      toString: (v2) => String(v2 ?? "")
    };
    this.registerByName("EFeatureMapEntry", featureMapConverter);
  }
  /**
   * Register a converter by instanceClassName
   */
  registerByClassName(className, converter) {
    this.convertersByClassName.set(className, converter);
  }
  /**
   * Register a converter by DataType name
   */
  registerByName(name, converter) {
    this.convertersByName.set(name, converter);
  }
  /**
   * Get converter for a DataType
   */
  getConverter(dataType) {
    const className = dataType.getInstanceClassName();
    if (className) {
      const converter = this.convertersByClassName.get(className);
      if (converter) {
        return converter;
      }
    }
    const name = dataType.getName();
    if (name) {
      const converter = this.convertersByName.get(name);
      if (converter) {
        return converter;
      }
    }
    return null;
  }
  /**
   * Convert a string literal to a value using the DataType's converter.
   *
   * For an EEnum the string is resolved to the matching EEnumLiteral, and an
   * invalid value throws - same as EFactoryImpl.createFromString in Java EMF.
   * The XMI loader turns that throw into a resource error, so a single bad
   * attribute does not abort the document (see XMLHandler.setFeatureValue).
   */
  createFromString(dataType, literal) {
    if (isEEnum(dataType)) {
      if (literal === null || literal === void 0) {
        return null;
      }
      const eEnumLiteral = this.resolveEEnumLiteral(dataType, literal);
      if (!eEnumLiteral) {
        throw new Error(`The value '${literal}' is not a valid enumerator of '${dataType.getName()}'`);
      }
      return eEnumLiteral.getInstance() ?? eEnumLiteral;
    }
    const converter = this.getConverter(dataType);
    if (converter) {
      return converter.fromString(literal);
    }
    return literal;
  }
  /**
   * Convert a value to a string literal using the DataType's converter.
   *
   * For an EEnum the literal string is written, not the name - Java EMF
   * serializes enum values via EEnumLiteralImpl.toString(), which is getLiteral().
   */
  convertToString(dataType, value) {
    if (value === null || value === void 0) {
      return "";
    }
    if (isEEnum(dataType)) {
      const eEnumLiteral = this.findEEnumLiteral(dataType, value);
      if (eEnumLiteral) {
        return eEnumLiteral.getLiteral() ?? "";
      }
    }
    const converter = this.getConverter(dataType);
    if (converter) {
      return converter.toString(value);
    }
    return String(value);
  }
  /**
   * Resolve a serialized enum value to its EEnumLiteral.
   *
   * Java EMF only ever looks up by literal. We additionally accept the name
   * and the ordinal, because both are unambiguous and both occur in files
   * written by non-conforming serializers - rejecting them would make those
   * models unloadable for no gain. Saving always writes the literal back, so
   * a load/save cycle normalizes the file.
   */
  resolveEEnumLiteral(eEnum, literal) {
    const byLiteral = eEnum.getEEnumLiteralByLiteral(literal);
    if (byLiteral) {
      return byLiteral;
    }
    const byName = eEnum.getEEnumLiteral(literal);
    if (byName) {
      return byName;
    }
    const trimmed = literal.trim();
    if (/^-?\d+$/.test(trimmed)) {
      return eEnum.getEEnumLiteral(Number(trimmed));
    }
    return null;
  }
  /**
   * Resolve an enum value to its EEnumLiteral. Accepts the literal itself as
   * well as the `instance` a generated enum carries.
   */
  findEEnumLiteral(eEnum, value) {
    if (value && typeof value === "object" && typeof value.getLiteral === "function") {
      return value;
    }
    for (const eEnumLiteral of eEnum.getELiterals()) {
      if (eEnumLiteral.getInstance() === value) {
        return eEnumLiteral;
      }
    }
    return null;
  }
  /**
   * Check if a converter is registered for a DataType
   */
  hasConverter(dataType) {
    return this.getConverter(dataType) !== null;
  }
  /**
   * Get all registered classNames
   */
  getRegisteredClassNames() {
    return Array.from(this.convertersByClassName.keys());
  }
  /**
   * Get all registered names
   */
  getRegisteredNames() {
    return Array.from(this.convertersByName.keys());
  }
}
const dataTypeRegistry = new DataTypeRegistryImpl();
class BasicEFactory {
  constructor() {
    this.ePackage = null;
    this.creators = /* @__PURE__ */ new Map();
    this.eAnnotations = createMetamodelEList(this);
  }
  getEPackage() {
    if (!this.ePackage) {
      throw new Error("EPackage not set on factory");
    }
    return this.ePackage;
  }
  setEPackage(value) {
    this.ePackage = value;
    if (value && typeof value.setEFactoryInstance === "function") {
      value.setEFactoryInstance(this);
    }
  }
  create(eClass) {
    const creator = this.creators.get(eClass);
    if (creator) {
      return creator();
    }
    return this.createDynamic(eClass);
  }
  /**
   * Create a dynamic EObject instance
   */
  createDynamic(eClass) {
    if (eClass.isAbstract()) {
      throw new Error(`Cannot instantiate abstract class: ${eClass.getName()}`);
    }
    if (eClass.isInterface()) {
      throw new Error(`Cannot instantiate interface: ${eClass.getName()}`);
    }
    return new DynamicEObject(eClass);
  }
  createFromString(eDataType, literalValue) {
    return dataTypeRegistry.createFromString(eDataType, literalValue);
  }
  convertToString(eDataType, instanceValue) {
    return dataTypeRegistry.convertToString(eDataType, instanceValue);
  }
  /**
   * Register a creator function for a specific EClass
   */
  registerCreator(eClass, creator) {
    this.creators.set(eClass, creator);
  }
  getEAnnotations() {
    return this.eAnnotations;
  }
  getEAnnotation(source) {
    return null;
  }
  // EObject methods
  eClass() {
    return ecoreRegistry.getEFactoryClass();
  }
  eResource() {
    return null;
  }
  eContainer() {
    return null;
  }
  eContainingFeature() {
    return null;
  }
  eContainmentFeature() {
    return null;
  }
  eContents() {
    return [];
  }
  eAllContents() {
    return [][Symbol.iterator]();
  }
  eIsProxy() {
    return false;
  }
  eCrossReferences() {
    return [];
  }
  eGet(feature) {
    return null;
  }
  eSet(feature, newValue) {
  }
  eIsSet(feature) {
    return false;
  }
  eUnset(feature) {
  }
  eInvoke(operation, arguments_) {
    return null;
  }
}
class EClassifiersEList extends BasicEList {
  constructor(pkg) {
    super(pkg, null);
    this.pkg = pkg;
  }
  /**
   * Lazily resolve the eClassifiers feature from EcorePackage.
   * This avoids circular dependency issues during initialization.
   */
  getFeature() {
    if (!this.feature) {
      const isReg = ecoreRegistry.isRegistered();
      if (isReg) {
        const ePackageClass = ecoreRegistry.getEPackageClass();
        this.feature = ePackageClass.getEStructuralFeature("eClassifiers");
      }
    }
    return this.feature;
  }
  didAdd(index, element) {
    if ("setEPackage" in element && typeof element.setEPackage === "function") {
      element.setEPackage(this.pkg);
    }
    super.didAdd(index, element);
  }
  didAddMany(index, elements) {
    for (const element of elements) {
      if ("setEPackage" in element && typeof element.setEPackage === "function") {
        element.setEPackage(this.pkg);
      }
    }
    super.didAddMany(index, elements);
  }
  didRemove(index, element) {
    if ("setEPackage" in element && typeof element.setEPackage === "function") {
      element.setEPackage(null);
    }
    super.didRemove(index, element);
  }
  didClear(oldData) {
    for (const element of oldData) {
      if ("setEPackage" in element && typeof element.setEPackage === "function") {
        element.setEPackage(null);
      }
    }
    super.didClear(oldData);
  }
  didSet(index, newElement, oldElement) {
    if ("setEPackage" in oldElement && typeof oldElement.setEPackage === "function") {
      oldElement.setEPackage(null);
    }
    if ("setEPackage" in newElement && typeof newElement.setEPackage === "function") {
      newElement.setEPackage(this.pkg);
    }
    super.didSet(index, newElement, oldElement);
  }
}
class ESubpackagesEList extends BasicEList {
  constructor(pkg) {
    super(pkg, null);
    this.pkg = pkg;
  }
  /**
   * Lazily resolve the eSubpackages feature from EcorePackage.
   * This avoids circular dependency issues during initialization.
   */
  getFeature() {
    if (!this.feature && ecoreRegistry.isRegistered()) {
      const ePackageClass = ecoreRegistry.getEPackageClass();
      this.feature = ePackageClass.getEStructuralFeature("eSubpackages");
    }
    return this.feature;
  }
  didAdd(index, element) {
    if (element instanceof BasicEPackage) {
      element.eSuperPackage = this.pkg;
    }
    super.didAdd(index, element);
  }
  didAddMany(index, elements) {
    for (const element of elements) {
      if (element instanceof BasicEPackage) {
        element.eSuperPackage = this.pkg;
      }
    }
    super.didAddMany(index, elements);
  }
  didRemove(index, element) {
    if (element instanceof BasicEPackage) {
      element.eSuperPackage = null;
    }
    super.didRemove(index, element);
  }
  didClear(oldData) {
    for (const element of oldData) {
      if (element instanceof BasicEPackage) {
        element.eSuperPackage = null;
      }
    }
    super.didClear(oldData);
  }
  didSet(index, newElement, oldElement) {
    if (oldElement instanceof BasicEPackage) {
      oldElement.eSuperPackage = null;
    }
    if (newElement instanceof BasicEPackage) {
      newElement.eSuperPackage = this.pkg;
    }
    super.didSet(index, newElement, oldElement);
  }
}
class BasicEPackage extends BasicEObject {
  /**
   * Constructor
   */
  constructor(nsURI, eFactoryInstance) {
    super();
    this.name = null;
    this.nsURI = null;
    this.nsPrefix = null;
    this.eFactoryInstance = null;
    this._eClassifiers = null;
    this._eSubpackages = null;
    this.eSuperPackage = null;
    this.eAnnotations = createMetamodelEList(this);
    if (nsURI)
      this.nsURI = nsURI;
    if (eFactoryInstance)
      this.eFactoryInstance = eFactoryInstance;
  }
  getName() {
    return this.name;
  }
  setName(value) {
    this.name = value;
  }
  getNsURI() {
    return this.nsURI;
  }
  setNsURI(value) {
    this.nsURI = value;
  }
  getNsPrefix() {
    return this.nsPrefix;
  }
  setNsPrefix(value) {
    this.nsPrefix = value;
  }
  getEFactoryInstance() {
    if (!this.eFactoryInstance) {
      const factory = new BasicEFactory();
      factory.setEPackage(this);
      this.eFactoryInstance = factory;
    }
    return this.eFactoryInstance;
  }
  setEFactoryInstance(value) {
    this.eFactoryInstance = value;
  }
  getEClassifiers() {
    if (!this._eClassifiers) {
      this._eClassifiers = createIndexedProxy(new EClassifiersEList(this));
    }
    return this._eClassifiers;
  }
  getESubpackages() {
    if (!this._eSubpackages) {
      this._eSubpackages = createIndexedProxy(new ESubpackagesEList(this));
    }
    return this._eSubpackages;
  }
  getESuperPackage() {
    return this.eSuperPackage;
  }
  getEClassifier(name) {
    const classifiers = this.getEClassifiers();
    for (const c2 of classifiers) {
      if (typeof c2.getName === "function") {
        if (c2.getName() === name)
          return c2;
      } else if (typeof c2.eGet === "function" && typeof c2.eClass === "function") {
        const eClass = c2.eClass();
        if (eClass) {
          const nameFeature = eClass.getEStructuralFeature?.("name");
          if (nameFeature && c2.eGet(nameFeature) === name) {
            return c2;
          }
        }
      }
    }
    return null;
  }
  /**
   * Add classifier to this package
   */
  addClassifier(classifier) {
    this.getEClassifiers().add(classifier);
  }
  /**
   * Add subpackage
   */
  addSubpackage(pkg) {
    this.getESubpackages().add(pkg);
  }
  getEAnnotations() {
    return this.eAnnotations;
  }
  getEAnnotation(source) {
    return null;
  }
  eClass() {
    return ecoreRegistry.getEPackageClass();
  }
  /**
   * Override eGet to handle package-specific features
   */
  eGet(feature) {
    const featureName = feature.getName();
    switch (featureName) {
      case "name":
        return this.name;
      case "nsURI":
        return this.nsURI;
      case "nsPrefix":
        return this.nsPrefix;
      case "eClassifiers":
        return this.getEClassifiers();
      case "eSubpackages":
        return this.getESubpackages();
      case "eSuperPackage":
        return this.eSuperPackage;
      case "eFactoryInstance":
        return this.eFactoryInstance;
      default:
        return super.eGet(feature);
    }
  }
  /**
   * Override eSet to handle package-specific features
   */
  eSet(feature, newValue) {
    const featureName = feature.getName();
    switch (featureName) {
      case "name":
        this.name = newValue;
        super.eSet(feature, newValue);
        break;
      case "nsURI":
        this.nsURI = newValue;
        super.eSet(feature, newValue);
        break;
      case "nsPrefix":
        this.nsPrefix = newValue;
        super.eSet(feature, newValue);
        break;
      case "eClassifiers":
        if (Array.isArray(newValue) || newValue && typeof newValue[Symbol.iterator] === "function") {
          const list = this.getEClassifiers();
          list.clear();
          for (const item of newValue) {
            list.add(item);
          }
        }
        break;
      case "eSubpackages":
        if (Array.isArray(newValue) || newValue && typeof newValue[Symbol.iterator] === "function") {
          const list = this.getESubpackages();
          list.clear();
          for (const item of newValue) {
            list.add(item);
          }
        }
        break;
      case "eSuperPackage":
        this.eSuperPackage = newValue;
        super.eSet(feature, newValue);
        break;
      case "eFactoryInstance":
        this.eFactoryInstance = newValue;
        super.eSet(feature, newValue);
        break;
      default:
        super.eSet(feature, newValue);
    }
  }
}
class BasicEStructuralFeature extends BasicEObject {
  constructor() {
    super(...arguments);
    this.name = null;
    this.changeable = true;
    this.volatile = false;
    this.transient = false;
    this.defaultValueLiteral = null;
    this.unsettable = false;
    this.derived = false;
    this.eType = null;
    this.eGenericType = null;
    this.eContainingClass = null;
    this.lowerBound = 0;
    this.upperBound = 1;
    this.featureID = -1;
    this.eAnnotations = createMetamodelEList(this);
  }
  getName() {
    return this.name;
  }
  setName(value) {
    this.name = value;
  }
  isChangeable() {
    return this.changeable;
  }
  setChangeable(value) {
    this.changeable = value;
  }
  isVolatile() {
    return this.volatile;
  }
  setVolatile(value) {
    this.volatile = value;
  }
  isTransient() {
    return this.transient;
  }
  setTransient(value) {
    this.transient = value;
  }
  getDefaultValueLiteral() {
    return this.defaultValueLiteral;
  }
  setDefaultValueLiteral(value) {
    this.defaultValueLiteral = value;
  }
  isUnsettable() {
    return this.unsettable;
  }
  setUnsettable(value) {
    this.unsettable = value;
  }
  isDerived() {
    return this.derived;
  }
  setDerived(value) {
    this.derived = value;
  }
  getEType() {
    if (this.eType && isInternalEObject(this.eType) && this.eType.eIsProxy()) {
      const proxy = this.eType;
      const proxyURI = proxy.eProxyURI();
      if (proxyURI) {
        const resolved = this.eResolveProxy(proxy);
        if (resolved !== proxy) {
          this.eType = resolved;
          return this.eType;
        }
        const uriStr = proxyURI.toString();
        const hashIndex = uriStr.indexOf("#");
        if (hashIndex > 0) {
          const baseURI = uriStr.substring(0, hashIndex);
          const fragment = uriStr.substring(hashIndex + 1);
          const registries = [EPackageRegistry.INSTANCE];
          let rs = this.eResource()?.getResourceSet();
          if (!rs) {
            let container2 = this.eContainingClass;
            while (container2) {
              if (typeof container2.eResource === "function") {
                const res = container2.eResource();
                if (res) {
                  rs = res.getResourceSet();
                  break;
                }
              }
              container2 = container2.getEPackage?.() ?? container2.getESuperPackage?.() ?? container2.eContainer?.();
            }
          }
          if (rs)
            registries.push(rs.getPackageRegistry());
          for (const registry of registries) {
            const pkg = registry.getEPackage(baseURI);
            if (pkg) {
              const classifier = resolveClassifierInPackage(pkg, fragment);
              if (classifier) {
                this.eType = classifier;
                return this.eType;
              }
            }
            let baseName = baseURI;
            const lastSlash = baseName.lastIndexOf("/");
            if (lastSlash >= 0)
              baseName = baseName.substring(lastSlash + 1);
            const dotIndex = baseName.indexOf(".");
            if (dotIndex > 0)
              baseName = baseName.substring(0, dotIndex);
            if (baseName) {
              for (const nsKey of registry.keys()) {
                const regPkg = registry.getEPackage(nsKey);
                if (regPkg && regPkg.getName() === baseName) {
                  const classifier = resolveClassifierInPackage(regPkg, fragment);
                  if (classifier) {
                    this.eType = classifier;
                    return this.eType;
                  }
                }
              }
            }
          }
        }
      }
    }
    if (!this.eType && this.eGenericType) {
      return this.eGenericType.getERawType();
    }
    return this.eType;
  }
  setEType(value) {
    this.eType = value;
  }
  getEGenericType() {
    return this.eGenericType;
  }
  setEGenericType(value) {
    this.eGenericType = value;
  }
  getEContainingClass() {
    return this.eContainingClass;
  }
  setEContainingClass(value) {
    this.eContainingClass = value;
  }
  isMany() {
    return this.upperBound < 0 || this.upperBound > 1;
  }
  isRequired() {
    return this.lowerBound >= 1;
  }
  getLowerBound() {
    return this.lowerBound;
  }
  setLowerBound(value) {
    this.lowerBound = value;
  }
  getUpperBound() {
    return this.upperBound;
  }
  setUpperBound(value) {
    this.upperBound = value;
  }
  getFeatureID() {
    return this.featureID;
  }
  setFeatureID(value) {
    this.featureID = value;
  }
  // EObject methods
  getEAnnotations() {
    return this.eAnnotations;
  }
  getEAnnotation(source) {
    return this.eAnnotations.find((a2) => a2.getSource() === source) || null;
  }
  eClass() {
    return ecoreRegistry.getEStructuralFeatureClass();
  }
  /**
   * Override eGet to handle feature-specific properties
   */
  eGet(feature) {
    const featureName = feature.getName();
    switch (featureName) {
      case "name":
        return this.name;
      case "changeable":
        return this.changeable;
      case "volatile":
        return this.volatile;
      case "transient":
        return this.transient;
      case "defaultValueLiteral":
        return this.defaultValueLiteral;
      case "unsettable":
        return this.unsettable;
      case "derived":
        return this.derived;
      case "eType":
        return this.eType;
      case "eGenericType":
        return this.eGenericType;
      case "lowerBound":
        return this.lowerBound;
      case "upperBound":
        return this.upperBound;
      case "eAnnotations":
        return this.eAnnotations;
      default:
        return super.eGet(feature);
    }
  }
  /**
   * Override eSet to handle feature-specific properties
   */
  eSet(feature, newValue) {
    const featureName = feature.getName();
    switch (featureName) {
      case "name":
        this.name = newValue;
        super.eSet(feature, newValue);
        break;
      case "changeable":
        this.changeable = newValue === true || newValue === "true";
        super.eSet(feature, newValue);
        break;
      case "volatile":
        this.volatile = newValue === true || newValue === "true";
        super.eSet(feature, newValue);
        break;
      case "transient":
        this.transient = newValue === true || newValue === "true";
        super.eSet(feature, newValue);
        break;
      case "defaultValueLiteral":
        this.defaultValueLiteral = newValue;
        super.eSet(feature, newValue);
        break;
      case "unsettable":
        this.unsettable = newValue === true || newValue === "true";
        super.eSet(feature, newValue);
        break;
      case "derived":
        this.derived = newValue === true || newValue === "true";
        super.eSet(feature, newValue);
        break;
      case "eType":
        this.eType = newValue;
        super.eSet(feature, newValue);
        break;
      case "eGenericType":
        this.eGenericType = newValue;
        super.eSet(feature, newValue);
        break;
      case "lowerBound":
        this.lowerBound = typeof newValue === "number" ? newValue : parseInt(newValue, 10);
        super.eSet(feature, newValue);
        break;
      case "upperBound":
        this.upperBound = typeof newValue === "number" ? newValue : parseInt(newValue, 10);
        super.eSet(feature, newValue);
        break;
      case "eAnnotations":
        replaceListContents(this.eAnnotations, newValue);
        break;
      default:
        super.eSet(feature, newValue);
    }
  }
}
class BasicEAttribute extends BasicEStructuralFeature {
  constructor() {
    super(...arguments);
    this.id = false;
  }
  isID() {
    return this.id;
  }
  setID(value) {
    this.id = value;
  }
  getEAttributeType() {
    const type = this.getEType();
    if (!type) {
      return null;
    }
    if (!("isSerializable" in type)) {
      return null;
    }
    return type;
  }
  getDefaultValue() {
    const literal = this.getDefaultValueLiteral();
    const dataType = this.getEAttributeType();
    if (!dataType) {
      return null;
    }
    if (literal === null) {
      return dataType.getDefaultValue();
    }
    const factory = dataType.getEPackage()?.getEFactoryInstance();
    if (!factory) {
      return literal;
    }
    return factory.createFromString(dataType, literal);
  }
  eClass() {
    return ecoreRegistry.getEAttributeClass();
  }
  /**
   * Override eGet to handle attribute-specific features
   */
  eGet(feature) {
    const featureName = feature.getName();
    switch (featureName) {
      case "iD":
        return this.id;
      default:
        return super.eGet(feature);
    }
  }
  /**
   * Override eSet to handle attribute-specific features
   */
  eSet(feature, newValue) {
    const featureName = feature.getName();
    switch (featureName) {
      case "iD":
        this.id = newValue === true || newValue === "true";
        super.eSet(feature, newValue);
        break;
      default:
        super.eSet(feature, newValue);
    }
  }
}
class BasicEReference extends BasicEStructuralFeature {
  constructor() {
    super(...arguments);
    this.containment = false;
    this.resolveProxies = true;
    this.eOpposite = null;
    this.eKeys = createMetamodelEList(this);
  }
  isContainment() {
    return this.containment;
  }
  setContainment(value) {
    this.containment = value;
  }
  isContainer() {
    if (this.eOpposite) {
      return this.eOpposite.isContainment();
    }
    return false;
  }
  isResolveProxies() {
    return this.resolveProxies;
  }
  setResolveProxies(value) {
    this.resolveProxies = value;
  }
  getEOpposite() {
    return this.eOpposite;
  }
  setEOpposite(value) {
    if (this.eOpposite === value) {
      return;
    }
    if (this.eOpposite && this.eOpposite.getEOpposite() === this) {
      this.eOpposite.eOpposite = null;
    }
    this.eOpposite = value;
    if (value && value.getEOpposite() !== this) {
      value.setEOpposite(this);
    }
  }
  getEReferenceType() {
    const type = this.getEType();
    if (!type) {
      throw new Error("Reference type not set");
    }
    if (!("getEStructuralFeatures" in type)) {
      throw new Error("Reference type must be EClass");
    }
    return type;
  }
  getEKeys() {
    return this.eKeys;
  }
  addEKey(key) {
    this.eKeys.add(key);
  }
  getDefaultValue() {
    return null;
  }
  eClass() {
    return ecoreRegistry.getEReferenceClass();
  }
  /**
   * Override eGet to handle reference-specific features
   */
  eGet(feature) {
    const featureName = feature.getName();
    switch (featureName) {
      case "containment":
        return this.containment;
      case "resolveProxies":
        return this.resolveProxies;
      case "eOpposite":
        return this.eOpposite;
      case "eKeys":
        return this.eKeys;
      default:
        return super.eGet(feature);
    }
  }
  /**
   * Override eSet to handle reference-specific features
   */
  eSet(feature, newValue) {
    const featureName = feature.getName();
    switch (featureName) {
      case "containment":
        this.containment = newValue === true || newValue === "true";
        super.eSet(feature, newValue);
        break;
      case "resolveProxies":
        this.resolveProxies = newValue === true || newValue === "true";
        super.eSet(feature, newValue);
        break;
      case "eOpposite":
        this.eOpposite = newValue;
        super.eSet(feature, newValue);
        break;
      case "eKeys":
        replaceListContents(this.eKeys, newValue);
        break;
      default:
        super.eSet(feature, newValue);
    }
  }
}
class BasicEDataType extends BasicEObject {
  constructor() {
    super(...arguments);
    this.name = null;
    this.instanceClassName = null;
    this.instanceClass = null;
    this.ePackage = null;
    this.serializable = true;
    this.eAnnotations = createMetamodelEList(this);
    this.eTypeParameters = createMetamodelEList(this);
  }
  getName() {
    return this.name;
  }
  setName(value) {
    this.name = value;
  }
  getInstanceClassName() {
    return this.instanceClassName;
  }
  setInstanceClassName(value) {
    this.instanceClassName = value;
  }
  getInstanceClass() {
    return this.instanceClass;
  }
  setInstanceClass(value) {
    this.instanceClass = value;
  }
  getDefaultValue() {
    switch (this.instanceClassName) {
      case "boolean":
      case "java.lang.Boolean":
        return false;
      case "int":
      case "java.lang.Integer":
      case "long":
      case "java.lang.Long":
      case "short":
      case "java.lang.Short":
      case "byte":
      case "java.lang.Byte":
        return 0;
      case "float":
      case "java.lang.Float":
      case "double":
      case "java.lang.Double":
        return 0;
      case "java.lang.String":
        return null;
      default:
        return null;
    }
  }
  getInstanceTypeName() {
    return this.instanceClassName;
  }
  setInstanceTypeName(value) {
    this.instanceClassName = value;
  }
  getEPackage() {
    return this.ePackage;
  }
  setEPackage(pkg) {
    this.ePackage = pkg;
  }
  getETypeParameters() {
    return this.eTypeParameters;
  }
  isInstance(object) {
    const type = typeof object;
    switch (this.instanceClassName) {
      case "boolean":
      case "java.lang.Boolean":
        return type === "boolean";
      case "int":
      case "java.lang.Integer":
      case "long":
      case "java.lang.Long":
      case "short":
      case "java.lang.Short":
      case "byte":
      case "java.lang.Byte":
      case "float":
      case "java.lang.Float":
      case "double":
      case "java.lang.Double":
        return type === "number";
      case "java.lang.String":
        return type === "string";
      default:
        return false;
    }
  }
  getClassifierID() {
    if (!this.ePackage)
      return -1;
    return this.ePackage.getEClassifiers().indexOf(this);
  }
  isSerializable() {
    return this.serializable;
  }
  setSerializable(value) {
    this.serializable = value;
  }
  // EObject methods
  getEAnnotations() {
    return this.eAnnotations;
  }
  getEAnnotation(source) {
    return this.eAnnotations.find((a2) => a2.getSource() === source) || null;
  }
  eClass() {
    return ecoreRegistry.getEDataTypeClass();
  }
  /**
   * Override eGet to handle datatype-specific features
   */
  eGet(feature) {
    const featureName = feature.getName();
    switch (featureName) {
      case "name":
        return this.name;
      case "instanceClassName":
        return this.instanceClassName;
      case "serializable":
        return this.serializable;
      case "eAnnotations":
        return this.eAnnotations;
      case "eTypeParameters":
        return this.eTypeParameters;
      default:
        return super.eGet(feature);
    }
  }
  /**
   * Override eSet to handle datatype-specific features
   */
  eSet(feature, newValue) {
    const featureName = feature.getName();
    switch (featureName) {
      case "name":
        this.name = newValue;
        super.eSet(feature, newValue);
        break;
      case "instanceClassName":
        this.instanceClassName = newValue;
        super.eSet(feature, newValue);
        break;
      case "serializable":
        this.serializable = newValue === true || newValue === "true";
        super.eSet(feature, newValue);
        break;
      case "eAnnotations":
        replaceListContents(this.eAnnotations, newValue);
        break;
      case "eTypeParameters":
        replaceListContents(this.eTypeParameters, newValue);
        break;
      default:
        super.eSet(feature, newValue);
    }
  }
}
(() => {
  const dt = new BasicEDataType();
  dt.setName("EString");
  dt.setInstanceClassName("java.lang.String");
  return dt;
})();
(() => {
  const dt = new BasicEDataType();
  dt.setName("EInt");
  dt.setInstanceClassName("int");
  return dt;
})();
(() => {
  const dt = new BasicEDataType();
  dt.setName("EBoolean");
  dt.setInstanceClassName("boolean");
  return dt;
})();
(() => {
  const dt = new BasicEDataType();
  dt.setName("EFloat");
  dt.setInstanceClassName("float");
  return dt;
})();
(() => {
  const dt = new BasicEDataType();
  dt.setName("EDouble");
  dt.setInstanceClassName("double");
  return dt;
})();
(() => {
  const dt = new BasicEDataType();
  dt.setName("ELong");
  dt.setInstanceClassName("long");
  return dt;
})();
(() => {
  const dt = new BasicEDataType();
  dt.setName("EDate");
  dt.setInstanceClassName("java.util.Date");
  return dt;
})();
class BasicResourceSet {
  constructor(packageRegistry, factoryRegistry) {
    this.resources = new BasicEList();
    this.packageRegistry = packageRegistry || this.createDefaultPackageRegistry();
    this.resourceFactoryRegistry = factoryRegistry || Resource.INSTANCE_FACTORY_REGISTRY;
    this.uriConverter = this.createDefaultURIConverter();
  }
  getResources() {
    return this.resources;
  }
  getResource(uri, loadOnDemand) {
    const existing = this.resources.find((r2) => {
      const resUri = r2.getURI();
      return resUri && resUri.toString() === uri.toString();
    });
    if (existing) {
      return existing;
    }
    const delegated = this.delegatedGetResource(uri, loadOnDemand);
    if (delegated) {
      return delegated;
    }
    if (!loadOnDemand) {
      return null;
    }
    const resource = this.createResource(uri);
    if (resource) {
      resource.load().catch((err) => {
        console.error(`Failed to load resource ${uri}:`, err);
      });
    }
    return resource;
  }
  /**
   * Returns a resolved resource available outside of the resource set.
   * Looks up the URI in the package registry.
   * This is called by getResource when the URI cannot be resolved
   * based on the existing contents of the resource set.
   */
  delegatedGetResource(uri, loadOnDemand) {
    const uriString = uri.toString();
    const ePackage = this.packageRegistry.getEPackage(uriString);
    if (ePackage) {
      if ("eResource" in ePackage && typeof ePackage.eResource === "function") {
        const existingResource = ePackage.eResource();
        if (existingResource) {
          return existingResource;
        }
      }
      return this.createSyntheticResourceForPackage(ePackage, uri);
    }
    return null;
  }
  /**
   * Creates a synthetic resource for a package that doesn't have one.
   * This allows resolving fragment references like //EString within the package.
   */
  createSyntheticResourceForPackage(ePackage, uri) {
    const existing = this.resources.find((r2) => {
      if ("_syntheticPackage" in r2) {
        return r2._syntheticPackage === ePackage;
      }
      return false;
    });
    if (existing) {
      return existing;
    }
    const resource = new SyntheticPackageResource(uri, ePackage);
    resource.setResourceSet(this);
    this.resources.push(resource);
    return resource;
  }
  /**
   * Async version of getResource that awaits resource.load().
   * Uses URIConverter.createInputStream() for loading.
   */
  async getResourceAsync(uri, loadOnDemand) {
    const existing = this.resources.find((r2) => {
      const resUri = r2.getURI();
      return resUri && resUri.toString() === uri.toString();
    });
    if (existing)
      return existing;
    const delegated = this.delegatedGetResource(uri, loadOnDemand);
    if (delegated)
      return delegated;
    if (!loadOnDemand)
      return null;
    const resource = this.createResource(uri);
    if (resource) {
      await resource.load();
    }
    return resource;
  }
  createResource(uri) {
    const factory = this.resourceFactoryRegistry.getFactory(uri);
    let resource;
    if (factory) {
      resource = factory.createResource(uri);
    } else {
      resource = new BasicResource(uri);
    }
    if ("setResourceSet" in resource) {
      resource.setResourceSet(this);
    }
    this.resources.push(resource);
    return resource;
  }
  getEObject(uri, loadOnDemand) {
    const fragment = uri.fragment();
    if (!fragment) {
      return null;
    }
    const resourceURI = URI.createURI(uri.toString().split("#")[0]);
    const resource = this.getResource(resourceURI, loadOnDemand);
    if (!resource) {
      return null;
    }
    return resource.getEObject(fragment);
  }
  getPackageRegistry() {
    return this.packageRegistry;
  }
  setPackageRegistry(registry) {
    this.packageRegistry = registry;
  }
  getResourceFactoryRegistry() {
    return this.resourceFactoryRegistry;
  }
  setResourceFactoryRegistry(registry) {
    this.resourceFactoryRegistry = registry;
  }
  getURIConverter() {
    return this.uriConverter;
  }
  setURIConverter(converter) {
    this.uriConverter = converter;
  }
  /**
   * Iteratively resolves proxy references by loading packages via getResourceAsync.
   * Loops until no more progress is made or maxDepth is reached.
   */
  async resolveProxiesAsync(maxDepth = -1) {
    let totalResolved = 0;
    let progress = true;
    let depth = 0;
    while (progress) {
      if (maxDepth >= 0 && depth >= maxDepth)
        break;
      progress = false;
      const proxyNsURIs = this.collectUnresolvedNsURIs();
      if (proxyNsURIs.size === 0)
        break;
      for (const nsURI of proxyNsURIs) {
        try {
          const uri = URI.createURI(nsURI);
          const resource = await this.getResourceAsync(uri, true);
          if (resource?.isLoaded()) {
            totalResolved++;
            progress = true;
          }
        } catch (err) {
          console.warn(`[resolveProxiesAsync] Failed to resolve ${nsURI}:`, err);
        }
      }
      depth++;
    }
    return totalResolved;
  }
  /**
   * Collects nsURIs from unresolved proxy references across all resources.
   */
  collectUnresolvedNsURIs() {
    const nsURIs = /* @__PURE__ */ new Set();
    for (const resource of this.resources) {
      for (const content of resource.getContents()) {
        this.collectProxyURIs(content, nsURIs);
      }
    }
    return nsURIs;
  }
  /**
   * Recursively walks EObject tree and collects nsURIs from proxy references.
   */
  collectProxyURIs(obj, nsURIs) {
    const eClass = obj.eClass();
    if (!eClass)
      return;
    for (const ref2 of eClass.getEAllReferences()) {
      try {
        const value = obj.eGet(ref2);
        if (!value)
          continue;
        if (ref2.isMany() && Array.isArray(value)) {
          for (const item of value) {
            this.checkProxy(item, nsURIs);
          }
        } else if (typeof value === "object" && "eClass" in value) {
          this.checkProxy(value, nsURIs);
        }
      } catch {
      }
    }
    for (const child of obj.eContents()) {
      this.collectProxyURIs(child, nsURIs);
    }
  }
  /**
   * Checks if an EObject is a proxy and extracts the nsURI.
   */
  checkProxy(obj, nsURIs) {
    if (typeof obj.eIsProxy === "function" && obj.eIsProxy()) {
      const proxyURI = obj.eProxyURI?.();
      if (proxyURI) {
        const uriStr = typeof proxyURI === "string" ? proxyURI : proxyURI.toString();
        const baseUri = uriStr.split("#")[0];
        if (baseUri && !this.packageRegistry.has(baseUri)) {
          nsURIs.add(baseUri);
        }
      }
    }
  }
  /**
   * Create default package registry that delegates to global EPackageRegistry.INSTANCE
   */
  createDefaultPackageRegistry() {
    const map = /* @__PURE__ */ new Map();
    function registerSubpackages2(pkg) {
      for (const subPkg of pkg.getESubpackages()) {
        const subNsURI = subPkg.getNsURI();
        if (subNsURI) {
          map.set(subNsURI, subPkg);
        }
        registerSubpackages2(subPkg);
      }
    }
    return {
      getEPackage(nsURI) {
        const value = map.get(nsURI);
        if (value) {
          if ("getEPackage" in value)
            return value.getEPackage();
          return value;
        }
        return EPackageRegistry.INSTANCE.getEPackage(nsURI);
      },
      getEFactory(nsURI) {
        const pkg = this.getEPackage(nsURI);
        return pkg ? pkg.getEFactoryInstance() : null;
      },
      get(nsURI) {
        return map.get(nsURI) || EPackageRegistry.INSTANCE.get(nsURI);
      },
      set(nsURI, value) {
        map.set(nsURI, value);
        if (value && !("getEPackage" in value) && typeof value.getESubpackages === "function") {
          registerSubpackages2(value);
        }
      },
      registerPackage(ePackage) {
        this.set(requireNsURI(ePackage), ePackage);
      },
      delete(nsURI) {
        return map.delete(nsURI);
      },
      has(nsURI) {
        return map.has(nsURI) || EPackageRegistry.INSTANCE.has(nsURI);
      },
      keys() {
        return map.keys();
      },
      values() {
        return map.values();
      }
    };
  }
  /**
   * Create default URI converter
   */
  createDefaultURIConverter() {
    const uriMap = /* @__PURE__ */ new Map();
    return {
      normalize(uri) {
        for (const [source, target] of uriMap.entries()) {
          const sourceStr = source.toString();
          const uriStr = uri.toString();
          if (uriStr.startsWith(sourceStr)) {
            const remainder = uriStr.substring(sourceStr.length);
            return URI.createURI(target.toString() + remainder);
          }
        }
        return uri;
      },
      async createInputStream(uri) {
        throw new Error("createInputStream not implemented");
      },
      async createOutputStream(uri) {
        throw new Error("createOutputStream not implemented");
      },
      async exists(uri) {
        return false;
      },
      async delete(uri) {
        throw new Error("delete not implemented");
      },
      getURIMap() {
        return uriMap;
      }
    };
  }
}
class SyntheticPackageResource {
  constructor(uri, ePackage) {
    this.resourceSet = null;
    this.uri = uri;
    this._syntheticPackage = ePackage;
    const list = new BasicEList(null, null);
    list.add(ePackage);
    this._contents = createIndexedProxy(list);
  }
  getResourceSet() {
    return this.resourceSet;
  }
  setResourceSet(resourceSet) {
    this.resourceSet = resourceSet;
  }
  getURI() {
    return this.uri;
  }
  setURI(uri) {
    if (uri)
      this.uri = uri;
  }
  getContents() {
    return this._contents;
  }
  getAllContents() {
    const contents = this._contents.toArray();
    return contents[Symbol.iterator]();
  }
  getEObject(uriFragment) {
    let path = uriFragment;
    while (path.startsWith("/")) {
      path = path.substring(1);
    }
    if (!path) {
      return this._syntheticPackage;
    }
    const segments = path.split("/");
    const classifier = resolveClassifierInPackage(this._syntheticPackage, path);
    if (classifier) {
      return classifier;
    }
    if (segments.length >= 2) {
      let currentPkg = this._syntheticPackage;
      for (let i2 = 0; i2 < segments.length - 2; i2++) {
        const subPackages = currentPkg.getESubpackages();
        let found = null;
        for (let j2 = 0; j2 < subPackages.length; j2++) {
          if (subPackages.get(j2).getName() === segments[i2]) {
            found = subPackages.get(j2);
            break;
          }
        }
        if (!found)
          return null;
        currentPkg = found;
      }
      const classifierName = segments[segments.length - 2];
      const eClassifier = currentPkg.getEClassifier(classifierName);
      if (eClassifier && "getEStructuralFeature" in eClassifier) {
        const feature = eClassifier.getEStructuralFeature(segments[segments.length - 1]);
        if (feature) {
          return feature;
        }
      }
    }
    return null;
  }
  getURIFragment(eObject) {
    if (eObject === this._syntheticPackage) {
      return "/";
    }
    for (const classifier of this._syntheticPackage.getEClassifiers()) {
      if (classifier === eObject) {
        return "//" + classifier.getName();
      }
    }
    return "";
  }
  async save(options) {
  }
  async load(options) {
  }
  isLoaded() {
    return true;
  }
  unload() {
  }
  isModified() {
    return false;
  }
  setModified(isModified) {
  }
  getErrors() {
    return [];
  }
  getWarnings() {
    return [];
  }
}
class BasicEAnnotation extends BasicEObject {
  constructor() {
    super(...arguments);
    this.source = null;
    this._detailsMap = null;
    this.eModelElement = null;
    this.contents = createMetamodelEList(this);
    this.references = createMetamodelEList(this);
    this.eAnnotations = createMetamodelEList(this);
  }
  getOrCreateDetailsMap() {
    if (!this._detailsMap) {
      const eAnnotationClass = ecoreRegistry.getEAnnotationClass();
      const detailsFeature = eAnnotationClass.getEStructuralFeature("details");
      const entryEClass = ecoreRegistry.getEStringToStringMapEntryClass();
      this._detailsMap = createEMap(this, detailsFeature, entryEClass);
    }
    return this._detailsMap;
  }
  getSource() {
    return this.source;
  }
  setSource(value) {
    this.source = value;
  }
  getDetails() {
    return this.getOrCreateDetailsMap();
  }
  getEModelElement() {
    return this.eModelElement;
  }
  setEModelElement(value) {
    this.eModelElement = value;
  }
  getContents() {
    return this.contents;
  }
  getReferences() {
    return this.references;
  }
  getEAnnotations() {
    return this.eAnnotations;
  }
  getEAnnotation(source) {
    return this.eAnnotations.find((a2) => a2.getSource() === source) || null;
  }
  eClass() {
    return ecoreRegistry.getEAnnotationClass();
  }
  eGet(feature) {
    const featureName = feature.getName();
    switch (featureName) {
      case "source":
        return this.source;
      case "details":
        return this.getOrCreateDetailsMap();
      case "eModelElement":
        return this.eModelElement;
      case "contents":
        return this.contents;
      case "references":
        return this.references;
      default:
        return super.eGet(feature);
    }
  }
  eSet(feature, newValue) {
    const featureName = feature.getName();
    switch (featureName) {
      case "source":
        this.source = newValue;
        super.eSet(feature, newValue);
        break;
      case "details":
        if (newValue instanceof Map) {
          const map = this.getOrCreateDetailsMap();
          map.clear();
          for (const [k2, v2] of newValue) {
            map.putByKey(k2, v2);
          }
        }
        super.eSet(feature, newValue);
        break;
      case "eModelElement":
        this.eModelElement = newValue;
        super.eSet(feature, newValue);
        break;
      case "contents":
        replaceListContents(this.contents, newValue);
        break;
      case "references":
        replaceListContents(this.references, newValue);
        break;
      default:
        super.eSet(feature, newValue);
    }
  }
}
class BasicEEnumLiteral extends BasicEObject {
  constructor() {
    super(...arguments);
    this._name = null;
    this._value = 0;
    this.instance = null;
    this.literal = null;
    this.eEnum = null;
    this.eAnnotations = createMetamodelEList(this);
  }
  getName() {
    return this._name;
  }
  setName(value) {
    this._name = value;
  }
  getValue() {
    return this._value;
  }
  setValue(value) {
    this._value = value;
  }
  getInstance() {
    return this.instance;
  }
  setInstance(value) {
    this.instance = value;
  }
  /**
   * Returns the literal string, falling back to the name when no explicit
   * literal is set. In .ecore files the `literal` attribute is usually
   * omitted, so without this fallback lookups by literal would never match.
   */
  getLiteral() {
    return this.literal ?? this._name;
  }
  setLiteral(value) {
    this.literal = value;
  }
  getEEnum() {
    return this.eEnum;
  }
  setEEnum(value) {
    this.eEnum = value;
  }
  // EModelElement methods
  getEAnnotations() {
    return this.eAnnotations;
  }
  getEAnnotation(source) {
    return this.eAnnotations.find((a2) => a2.getSource() === source) || null;
  }
  eClass() {
    return ecoreRegistry.getEEnumLiteralClass();
  }
  eGet(feature) {
    const featureName = feature.getName();
    switch (featureName) {
      case "name":
        return this._name;
      case "value":
        return this._value;
      case "instance":
        return this.instance;
      case "literal":
        return this.literal;
      case "eEnum":
        return this.eEnum;
      case "eAnnotations":
        return this.eAnnotations;
      default:
        return super.eGet(feature);
    }
  }
  eSet(feature, newValue) {
    const featureName = feature.getName();
    switch (featureName) {
      case "name":
        this._name = newValue;
        super.eSet(feature, newValue);
        break;
      case "value":
        this._value = typeof newValue === "number" ? newValue : parseInt(newValue, 10);
        super.eSet(feature, newValue);
        break;
      case "instance":
        this.instance = newValue;
        super.eSet(feature, newValue);
        break;
      case "literal":
        this.literal = newValue;
        super.eSet(feature, newValue);
        break;
      case "eEnum":
        this.eEnum = newValue;
        super.eSet(feature, newValue);
        break;
      case "eAnnotations":
        replaceListContents(this.eAnnotations, newValue);
        break;
      default:
        super.eSet(feature, newValue);
    }
  }
}
class BasicEEnum extends BasicEDataType {
  constructor() {
    super(...arguments);
    this.eLiterals = createMetamodelEList(this);
  }
  getELiterals() {
    return this.eLiterals;
  }
  /**
   * Returns the literal with the given name or ordinal value.
   */
  getEEnumLiteral(nameOrValue) {
    if (typeof nameOrValue === "string") {
      return this.eLiterals.find((l2) => l2.getName() === nameOrValue) || null;
    } else {
      return this.eLiterals.find((l2) => l2.getValue() === nameOrValue) || null;
    }
  }
  /**
   * Returns the literal with the given literal string.
   */
  getEEnumLiteralByLiteral(literal) {
    return this.eLiterals.find((l2) => l2.getLiteral() === literal) || null;
  }
  /**
   * Add a literal to this enum.
   */
  addLiteral(literal) {
    literal.setEEnum(this);
    this.eLiterals.push(literal);
  }
  eClass() {
    return ecoreRegistry.getEEnumClass();
  }
  eGet(feature) {
    const featureName = feature.getName();
    switch (featureName) {
      case "eLiterals":
        return this.eLiterals;
      default:
        return super.eGet(feature);
    }
  }
  eSet(feature, newValue) {
    const featureName = feature.getName();
    switch (featureName) {
      case "eLiterals":
        if (replaceListContents(this.eLiterals, newValue)) {
          for (const lit of this.eLiterals) {
            if (lit instanceof BasicEEnumLiteral) {
              lit.setEEnum(this);
            }
          }
        }
        super.eSet(feature, newValue);
        break;
      default:
        super.eSet(feature, newValue);
    }
  }
}
class BasicEOperation extends BasicEObject {
  constructor() {
    super(...arguments);
    this.name = null;
    this.eContainingClass = null;
    this.eType = null;
    this.eParameters = createMetamodelEList(this);
    this.eExceptions = createMetamodelEList(this);
    this.eAnnotations = createMetamodelEList(this);
    this.eGenericType = null;
    this.eTypeParameters = createMetamodelEList(this);
    this.ordered = true;
    this.unique = true;
    this.lowerBound = 0;
    this.upperBound = 1;
  }
  getName() {
    return this.name;
  }
  setName(value) {
    this.name = value;
  }
  getEContainingClass() {
    return this.eContainingClass;
  }
  setEContainingClass(value) {
    this.eContainingClass = value;
  }
  getEType() {
    if (!this.eType && this.eGenericType) {
      return this.eGenericType.getERawType();
    }
    return this.eType;
  }
  getEGenericType() {
    return this.eGenericType;
  }
  setEGenericType(value) {
    this.eGenericType = value;
  }
  getETypeParameters() {
    return this.eTypeParameters;
  }
  setEType(value) {
    this.eType = value;
  }
  getEParameters() {
    return this.eParameters;
  }
  addParameter(parameter) {
    this.eParameters.add(parameter);
  }
  getEExceptions() {
    return this.eExceptions;
  }
  addException(exception) {
    this.eExceptions.add(exception);
  }
  isMany() {
    return this.upperBound < 0 || this.upperBound > 1;
  }
  isRequired() {
    return this.lowerBound >= 1;
  }
  getLowerBound() {
    return this.lowerBound;
  }
  setLowerBound(value) {
    this.lowerBound = value;
  }
  getUpperBound() {
    return this.upperBound;
  }
  setUpperBound(value) {
    this.upperBound = value;
  }
  getOperationID() {
    if (!this.eContainingClass)
      return -1;
    return this.eContainingClass.getOperationID(this);
  }
  isOverrideOf(someOperation) {
    if (this.name !== someOperation.getName()) {
      return false;
    }
    const myParams = this.eParameters;
    const otherParams = someOperation.getEParameters();
    if (myParams.length !== otherParams.length) {
      return false;
    }
    for (let i2 = 0; i2 < myParams.length; i2++) {
      const myParamType = myParams[i2].getEType();
      const otherParamType = otherParams[i2].getEType();
      if (myParamType !== otherParamType) {
        return false;
      }
    }
    if (!this.eContainingClass || !someOperation.getEContainingClass()) {
      return false;
    }
    return this.eContainingClass.getEAllSuperTypes().includes(someOperation.getEContainingClass());
  }
  isOrdered() {
    return this.ordered;
  }
  setOrdered(value) {
    this.ordered = value;
  }
  isUnique() {
    return this.unique;
  }
  setUnique(value) {
    this.unique = value;
  }
  // EObject methods
  getEAnnotations() {
    return this.eAnnotations;
  }
  getEAnnotation(source) {
    return this.eAnnotations.find((a2) => a2.getSource() === source) || null;
  }
  eClass() {
    return ecoreRegistry.getEOperationClass();
  }
  /**
   * Reflective get - binds the declared fields to the reflective API, so the
   * XMI loader and typed accessors see the same state.
   */
  eGet(feature) {
    switch (feature.getName()) {
      case "name":
        return this.name;
      case "eType":
        return this.eType;
      case "eGenericType":
        return this.eGenericType;
      case "eTypeParameters":
        return this.eTypeParameters;
      case "eParameters":
        return this.eParameters;
      case "eExceptions":
        return this.eExceptions;
      case "eAnnotations":
        return this.eAnnotations;
      case "ordered":
        return this.ordered;
      case "unique":
        return this.unique;
      case "lowerBound":
        return this.lowerBound;
      case "upperBound":
        return this.upperBound;
      default:
        return super.eGet(feature);
    }
  }
  eSet(feature, newValue) {
    switch (feature.getName()) {
      case "name":
        this.name = newValue;
        break;
      case "eType":
        this.eType = newValue;
        break;
      case "eGenericType":
        this.eGenericType = newValue;
        break;
      case "eTypeParameters":
        replaceListContents(this.eTypeParameters, newValue);
        break;
      case "eParameters":
        replaceListContents(this.eParameters, newValue);
        break;
      case "eExceptions":
        replaceListContents(this.eExceptions, newValue);
        break;
      case "eAnnotations":
        replaceListContents(this.eAnnotations, newValue);
        break;
      case "ordered":
        this.ordered = newValue === true || newValue === "true";
        break;
      case "unique":
        this.unique = newValue === true || newValue === "true";
        break;
      case "lowerBound":
        this.lowerBound = Number(newValue);
        break;
      case "upperBound":
        this.upperBound = Number(newValue);
        break;
    }
    super.eSet(feature, newValue);
  }
}
class BasicEParameter extends BasicEObject {
  constructor() {
    super(...arguments);
    this.name = null;
    this.eType = null;
    this.eOperation = null;
    this.eAnnotations = createMetamodelEList(this);
    this.eGenericType = null;
    this.ordered = true;
    this.unique = true;
    this.lowerBound = 0;
    this.upperBound = 1;
  }
  getName() {
    return this.name;
  }
  setName(value) {
    this.name = value;
  }
  getEType() {
    if (!this.eType && this.eGenericType) {
      return this.eGenericType.getERawType();
    }
    return this.eType;
  }
  getEGenericType() {
    return this.eGenericType;
  }
  setEGenericType(value) {
    this.eGenericType = value;
  }
  setEType(value) {
    this.eType = value;
  }
  getEOperation() {
    return this.eOperation;
  }
  setEOperation(value) {
    this.eOperation = value;
  }
  isOrdered() {
    return this.ordered;
  }
  setOrdered(value) {
    this.ordered = value;
  }
  isUnique() {
    return this.unique;
  }
  setUnique(value) {
    this.unique = value;
  }
  isMany() {
    return this.upperBound < 0 || this.upperBound > 1;
  }
  isRequired() {
    return this.lowerBound >= 1;
  }
  getLowerBound() {
    return this.lowerBound;
  }
  setLowerBound(value) {
    this.lowerBound = value;
  }
  getUpperBound() {
    return this.upperBound;
  }
  setUpperBound(value) {
    this.upperBound = value;
  }
  getEAnnotations() {
    return this.eAnnotations;
  }
  getEAnnotation(source) {
    return this.eAnnotations.find((a2) => a2.getSource() === source) || null;
  }
  eClass() {
    return ecoreRegistry.getEParameterClass();
  }
  /**
   * Reflective get - binds the declared fields to the reflective API, so the
   * XMI loader and typed accessors see the same state.
   */
  eGet(feature) {
    switch (feature.getName()) {
      case "name":
        return this.name;
      case "eType":
        return this.eType;
      case "eGenericType":
        return this.eGenericType;
      case "eAnnotations":
        return this.eAnnotations;
      case "ordered":
        return this.ordered;
      case "unique":
        return this.unique;
      case "lowerBound":
        return this.lowerBound;
      case "upperBound":
        return this.upperBound;
      default:
        return super.eGet(feature);
    }
  }
  eSet(feature, newValue) {
    switch (feature.getName()) {
      case "name":
        this.name = newValue;
        break;
      case "eType":
        this.eType = newValue;
        break;
      case "eGenericType":
        this.eGenericType = newValue;
        break;
      case "eAnnotations":
        replaceListContents(this.eAnnotations, newValue);
        break;
      case "ordered":
        this.ordered = newValue === true || newValue === "true";
        break;
      case "unique":
        this.unique = newValue === true || newValue === "true";
        break;
      case "lowerBound":
        this.lowerBound = Number(newValue);
        break;
      case "upperBound":
        this.upperBound = Number(newValue);
        break;
    }
    super.eSet(feature, newValue);
  }
}
class BasicEGenericType extends BasicEObject {
  constructor() {
    super(...arguments);
    this.eClassifier = null;
    this.eTypeParameter = null;
    this.eTypeArguments = createMetamodelEList(this);
    this.eUpperBound = null;
    this.eLowerBound = null;
  }
  getEClassifier() {
    return this.eClassifier;
  }
  setEClassifier(value) {
    this.eClassifier = value;
  }
  getETypeParameter() {
    return this.eTypeParameter;
  }
  setETypeParameter(value) {
    this.eTypeParameter = value;
  }
  getETypeArguments() {
    return this.eTypeArguments;
  }
  getEUpperBound() {
    return this.eUpperBound;
  }
  setEUpperBound(value) {
    this.eUpperBound = value;
  }
  getELowerBound() {
    return this.eLowerBound;
  }
  setELowerBound(value) {
    this.eLowerBound = value;
  }
  /**
   * The erasure of this generic type. For a classifier reference that is the
   * classifier itself; for a type parameter it is the erasure of its first
   * bound, mirroring Java EMF's EGenericTypeImpl.getERawType().
   */
  getERawType() {
    if (this.eClassifier) {
      return this.eClassifier;
    }
    if (this.eTypeParameter) {
      const bounds = this.eTypeParameter.getEBounds();
      if (bounds.length > 0) {
        return bounds[0].getERawType();
      }
    }
    if (this.eUpperBound) {
      return this.eUpperBound.getERawType();
    }
    return ecoreRegistry.getEObjectClass();
  }
  eClass() {
    return ecoreRegistry.getEGenericTypeClass();
  }
  eGet(feature) {
    switch (feature.getName()) {
      case "eClassifier":
        return this.eClassifier;
      case "eTypeParameter":
        return this.eTypeParameter;
      case "eTypeArguments":
        return this.eTypeArguments;
      case "eUpperBound":
        return this.eUpperBound;
      case "eLowerBound":
        return this.eLowerBound;
      default:
        return super.eGet(feature);
    }
  }
  eSet(feature, newValue) {
    switch (feature.getName()) {
      case "eClassifier":
        this.eClassifier = newValue;
        break;
      case "eTypeParameter":
        this.eTypeParameter = newValue;
        break;
      case "eTypeArguments":
        replaceListContents(this.eTypeArguments, newValue);
        break;
      case "eUpperBound":
        this.eUpperBound = newValue;
        break;
      case "eLowerBound":
        this.eLowerBound = newValue;
        break;
    }
    super.eSet(feature, newValue);
  }
}
class BasicETypeParameter extends BasicEObject {
  constructor() {
    super(...arguments);
    this.name = null;
    this.eBounds = createMetamodelEList(this);
    this.eAnnotations = createMetamodelEList(this);
  }
  getName() {
    return this.name;
  }
  setName(value) {
    this.name = value;
  }
  getEBounds() {
    return this.eBounds;
  }
  getEAnnotations() {
    return this.eAnnotations;
  }
  getEAnnotation(source) {
    return this.eAnnotations.find((a2) => a2.getSource() === source) || null;
  }
  eClass() {
    return ecoreRegistry.getETypeParameterClass();
  }
  eGet(feature) {
    switch (feature.getName()) {
      case "name":
        return this.name;
      case "eBounds":
        return this.eBounds;
      case "eAnnotations":
        return this.eAnnotations;
      default:
        return super.eGet(feature);
    }
  }
  eSet(feature, newValue) {
    switch (feature.getName()) {
      case "name":
        this.name = newValue;
        break;
      case "eBounds":
        replaceListContents(this.eBounds, newValue);
        break;
      case "eAnnotations":
        replaceListContents(this.eAnnotations, newValue);
        break;
    }
    super.eSet(feature, newValue);
  }
}
const XML_TYPE_NS_PREFIX = "ecore.xml.type";
let xmlTypePackageInstance = null;
function getXMLTypePackage() {
  if (!xmlTypePackageInstance) {
    xmlTypePackageInstance = new XMLTypePackageImpl();
    xmlTypePackageInstance.initialize();
    EPackageRegistry.INSTANCE.set(XML_TYPE_NS_URI, xmlTypePackageInstance);
  }
  return xmlTypePackageInstance;
}
const DATA_TYPE_DEFS = [
  // Commonly used
  ["AnySimpleType", "java.lang.Object"],
  ["AnyURI", "java.lang.String"],
  ["Base64Binary", "byte[]"],
  ["Boolean", "boolean"],
  ["BooleanObject", "java.lang.Boolean"],
  ["Byte", "byte"],
  ["ByteObject", "java.lang.Byte"],
  ["Date", "javax.xml.datatype.XMLGregorianCalendar"],
  ["DateTime", "javax.xml.datatype.XMLGregorianCalendar"],
  ["Decimal", "java.math.BigDecimal"],
  ["Double", "double"],
  ["DoubleObject", "java.lang.Double"],
  ["Duration", "javax.xml.datatype.Duration"],
  ["ENTITIES", "java.util.List"],
  ["ENTITIESBase", "java.util.List"],
  ["ENTITY", "java.lang.String"],
  ["Float", "float"],
  ["FloatObject", "java.lang.Float"],
  ["GDay", "javax.xml.datatype.XMLGregorianCalendar"],
  ["GMonth", "javax.xml.datatype.XMLGregorianCalendar"],
  ["GMonthDay", "javax.xml.datatype.XMLGregorianCalendar"],
  ["GYear", "javax.xml.datatype.XMLGregorianCalendar"],
  ["GYearMonth", "javax.xml.datatype.XMLGregorianCalendar"],
  ["HexBinary", "byte[]"],
  ["ID", "java.lang.String"],
  ["IDREF", "java.lang.String"],
  ["IDREFS", "java.util.List"],
  ["IDREFSBase", "java.util.List"],
  ["Int", "int"],
  ["Integer", "java.math.BigInteger"],
  ["IntObject", "java.lang.Integer"],
  ["Language", "java.lang.String"],
  ["Long", "long"],
  ["LongObject", "java.lang.Long"],
  ["Name", "java.lang.String"],
  ["NCName", "java.lang.String"],
  ["NegativeInteger", "java.math.BigInteger"],
  ["NMTOKEN", "java.lang.String"],
  ["NMTOKENS", "java.util.List"],
  ["NMTOKENSBase", "java.util.List"],
  ["NonNegativeInteger", "java.math.BigInteger"],
  ["NonPositiveInteger", "java.math.BigInteger"],
  ["NormalizedString", "java.lang.String"],
  ["NOTATION", "javax.xml.namespace.QName"],
  ["PositiveInteger", "java.math.BigInteger"],
  ["QName", "javax.xml.namespace.QName"],
  ["Short", "short"],
  ["ShortObject", "java.lang.Short"],
  ["String", "java.lang.String"],
  ["Time", "javax.xml.datatype.XMLGregorianCalendar"],
  ["Token", "java.lang.String"],
  ["UnsignedByte", "short"],
  ["UnsignedByteObject", "java.lang.Short"],
  ["UnsignedInt", "long"],
  ["UnsignedIntObject", "java.lang.Long"],
  ["UnsignedLong", "java.math.BigInteger"],
  ["UnsignedShort", "int"],
  ["UnsignedShortObject", "java.lang.Integer"]
];
class XMLTypePackageImpl extends BasicEPackage {
  constructor() {
    super();
    this._dataTypes = /* @__PURE__ */ new Map();
    this._initialized = false;
    this.setName("type");
    this.setNsURI(XML_TYPE_NS_URI);
    this.setNsPrefix(XML_TYPE_NS_PREFIX);
  }
  initialize() {
    if (this._initialized)
      return;
    this._initialized = true;
    for (const [name, instanceClassName] of DATA_TYPE_DEFS) {
      const dt = new BasicEDataType();
      dt.setName(name);
      dt.setInstanceClassName(instanceClassName);
      this.getEClassifiers().push(dt);
      this._dataTypes.set(name, dt);
    }
    for (const classifier of this.getEClassifiers()) {
      if ("setEPackage" in classifier) {
        classifier.setEPackage(this);
      }
    }
    const factory = new XMLTypeFactory(this);
    this.setEFactoryInstance(factory);
    this.registerConverters();
  }
  registerConverters() {
    const boolConv = { fromString: (s2) => s2.toLowerCase() === "true" || s2 === "1", toString: (v2) => String(v2) };
    dataTypeRegistry.registerByName("Boolean", boolConv);
    dataTypeRegistry.registerByName("BooleanObject", boolConv);
    const intConv = { fromString: (s2) => parseInt(s2, 10), toString: (v2) => String(v2) };
    dataTypeRegistry.registerByName("Int", intConv);
    dataTypeRegistry.registerByName("IntObject", intConv);
    dataTypeRegistry.registerByName("Short", intConv);
    dataTypeRegistry.registerByName("ShortObject", intConv);
    dataTypeRegistry.registerByName("Byte", intConv);
    dataTypeRegistry.registerByName("ByteObject", intConv);
    dataTypeRegistry.registerByName("UnsignedByte", intConv);
    dataTypeRegistry.registerByName("UnsignedByteObject", intConv);
    dataTypeRegistry.registerByName("UnsignedShort", intConv);
    dataTypeRegistry.registerByName("UnsignedShortObject", intConv);
    dataTypeRegistry.registerByName("UnsignedInt", intConv);
    dataTypeRegistry.registerByName("UnsignedIntObject", intConv);
    const longConv = {
      fromString: (s2) => {
        const n2 = parseInt(s2, 10);
        return Math.abs(n2) > Number.MAX_SAFE_INTEGER ? BigInt(s2) : n2;
      },
      toString: (v2) => String(v2)
    };
    dataTypeRegistry.registerByName("Long", longConv);
    dataTypeRegistry.registerByName("LongObject", longConv);
    const floatConv = { fromString: (s2) => parseFloat(s2), toString: (v2) => String(v2) };
    dataTypeRegistry.registerByName("Float", floatConv);
    dataTypeRegistry.registerByName("FloatObject", floatConv);
    dataTypeRegistry.registerByName("Double", floatConv);
    dataTypeRegistry.registerByName("DoubleObject", floatConv);
    const bigConv = { fromString: (s2) => s2, toString: (v2) => v2 ?? "0" };
    dataTypeRegistry.registerByName("Decimal", bigConv);
    dataTypeRegistry.registerByName("Integer", bigConv);
    dataTypeRegistry.registerByName("NonNegativeInteger", bigConv);
    dataTypeRegistry.registerByName("NonPositiveInteger", bigConv);
    dataTypeRegistry.registerByName("NegativeInteger", bigConv);
    dataTypeRegistry.registerByName("PositiveInteger", bigConv);
    dataTypeRegistry.registerByName("UnsignedLong", bigConv);
    const strConv = { fromString: (s2) => s2, toString: (v2) => v2 ?? "" };
    dataTypeRegistry.registerByName("String", strConv);
    dataTypeRegistry.registerByName("AnySimpleType", strConv);
    dataTypeRegistry.registerByName("AnyURI", strConv);
    dataTypeRegistry.registerByName("NormalizedString", strConv);
    dataTypeRegistry.registerByName("Token", strConv);
    dataTypeRegistry.registerByName("Name", strConv);
    dataTypeRegistry.registerByName("NCName", strConv);
    dataTypeRegistry.registerByName("Language", strConv);
    dataTypeRegistry.registerByName("ID", strConv);
    dataTypeRegistry.registerByName("IDREF", strConv);
    dataTypeRegistry.registerByName("ENTITY", strConv);
    dataTypeRegistry.registerByName("NMTOKEN", strConv);
    dataTypeRegistry.registerByName("Date", strConv);
    dataTypeRegistry.registerByName("DateTime", strConv);
    dataTypeRegistry.registerByName("Time", strConv);
    dataTypeRegistry.registerByName("Duration", strConv);
    dataTypeRegistry.registerByName("GDay", strConv);
    dataTypeRegistry.registerByName("GMonth", strConv);
    dataTypeRegistry.registerByName("GMonthDay", strConv);
    dataTypeRegistry.registerByName("GYear", strConv);
    dataTypeRegistry.registerByName("GYearMonth", strConv);
    dataTypeRegistry.registerByName("QName", strConv);
    dataTypeRegistry.registerByName("NOTATION", strConv);
  }
  getDataType(name) {
    return this._dataTypes.get(name) ?? null;
  }
}
class XMLTypeFactory extends BasicEFactory {
  constructor(ePackage) {
    super();
    this._ePackage = ePackage;
  }
  getEPackage() {
    return this._ePackage;
  }
  create(eClass) {
    return super.create(eClass);
  }
}
const ECORE_NS_URI = "http://www.eclipse.org/emf/2002/Ecore";
const ECORE_NS_PREFIX = "ecore";
const XML_TYPE_NS_URI = "http://www.eclipse.org/emf/2003/XMLType";
let ecorePackageInstance = null;
function getEcorePackage() {
  if (!ecorePackageInstance) {
    ecorePackageInstance = new EcorePackageImpl();
    ecorePackageInstance.initialize();
    registerEcorePackage();
    ecoreRegistry.register(getEcorePackage);
  }
  return ecorePackageInstance;
}
function registerEcorePackage() {
  if (ecorePackageInstance) {
    EPackageRegistry.INSTANCE.set(ECORE_NS_URI, ecorePackageInstance);
    getXMLTypePackage();
  }
}
class EcorePackageImpl extends BasicEPackage {
  constructor() {
    super();
    this._initialized = false;
    this.setName("ecore");
    this.setNsURI(ECORE_NS_URI);
    this.setNsPrefix(ECORE_NS_PREFIX);
  }
  /**
   * Initialize the package (called once)
   */
  initialize() {
    if (this._initialized)
      return;
    this._initialized = true;
    this.createDataTypes();
    this.createClasses();
    this.createAttributes();
    this.createReferences();
    this.initializeClassifierPackages();
    const factory = new EcoreFactory(this);
    this.setEFactoryInstance(factory);
  }
  /**
   * Set the ePackage reference on all classifiers
   */
  initializeClassifierPackages() {
    for (const classifier of this.getEClassifiers()) {
      if ("setEPackage" in classifier) {
        classifier.setEPackage(this);
      }
    }
  }
  createDataTypes() {
    this._eBooleanDataType = new BasicEDataType();
    this._eBooleanDataType.setName("EBoolean");
    this._eBooleanDataType.setInstanceClassName("boolean");
    this.getEClassifiers().push(this._eBooleanDataType);
    this._eIntDataType = new BasicEDataType();
    this._eIntDataType.setName("EInt");
    this._eIntDataType.setInstanceClassName("int");
    this.getEClassifiers().push(this._eIntDataType);
    this._eStringDataType = new BasicEDataType();
    this._eStringDataType.setName("EString");
    this._eStringDataType.setInstanceClassName("java.lang.String");
    this.getEClassifiers().push(this._eStringDataType);
    this._eDoubleDataType = new BasicEDataType();
    this._eDoubleDataType.setName("EDouble");
    this._eDoubleDataType.setInstanceClassName("double");
    this.getEClassifiers().push(this._eDoubleDataType);
    this._eFloatDataType = new BasicEDataType();
    this._eFloatDataType.setName("EFloat");
    this._eFloatDataType.setInstanceClassName("float");
    this.getEClassifiers().push(this._eFloatDataType);
    this._eLongDataType = new BasicEDataType();
    this._eLongDataType.setName("ELong");
    this._eLongDataType.setInstanceClassName("long");
    this.getEClassifiers().push(this._eLongDataType);
    this._eShortDataType = new BasicEDataType();
    this._eShortDataType.setName("EShort");
    this._eShortDataType.setInstanceClassName("short");
    this.getEClassifiers().push(this._eShortDataType);
    this._eByteDataType = new BasicEDataType();
    this._eByteDataType.setName("EByte");
    this._eByteDataType.setInstanceClassName("byte");
    this.getEClassifiers().push(this._eByteDataType);
    this._eCharDataType = new BasicEDataType();
    this._eCharDataType.setName("EChar");
    this._eCharDataType.setInstanceClassName("char");
    this.getEClassifiers().push(this._eCharDataType);
    this._eDateDataType = new BasicEDataType();
    this._eDateDataType.setName("EDate");
    this._eDateDataType.setInstanceClassName("java.util.Date");
    this.getEClassifiers().push(this._eDateDataType);
    this._eBigIntegerDataType = new BasicEDataType();
    this._eBigIntegerDataType.setName("EBigInteger");
    this._eBigIntegerDataType.setInstanceClassName("java.math.BigInteger");
    this.getEClassifiers().push(this._eBigIntegerDataType);
    this._eBigDecimalDataType = new BasicEDataType();
    this._eBigDecimalDataType.setName("EBigDecimal");
    this._eBigDecimalDataType.setInstanceClassName("java.math.BigDecimal");
    this.getEClassifiers().push(this._eBigDecimalDataType);
    this._eFeatureMapEntryDataType = new BasicEDataType();
    this._eFeatureMapEntryDataType.setName("EFeatureMapEntry");
    this._eFeatureMapEntryDataType.setInstanceClassName("org.eclipse.emf.ecore.util.FeatureMap.Entry");
    this.getEClassifiers().push(this._eFeatureMapEntryDataType);
    this._eJavaObjectDataType = new BasicEDataType();
    this._eJavaObjectDataType.setName("EJavaObject");
    this._eJavaObjectDataType.setInstanceClassName("java.lang.Object");
    this.getEClassifiers().push(this._eJavaObjectDataType);
    this._eJavaClassDataType = new BasicEDataType();
    this._eJavaClassDataType.setName("EJavaClass");
    this._eJavaClassDataType.setInstanceClassName("java.lang.Class");
    this.getEClassifiers().push(this._eJavaClassDataType);
  }
  createClasses() {
    this._eObjectClass = new BasicEClass();
    this._eObjectClass.setName("EObject");
    this.getEClassifiers().push(this._eObjectClass);
    this._eModelElementClass = new BasicEClass();
    this._eModelElementClass.setName("EModelElement");
    this._eModelElementClass.setAbstract(true);
    this._eModelElementClass.getESuperTypes().push(this._eObjectClass);
    this.getEClassifiers().push(this._eModelElementClass);
    this._eNamedElementClass = new BasicEClass();
    this._eNamedElementClass.setName("ENamedElement");
    this._eNamedElementClass.setAbstract(true);
    this._eNamedElementClass.getESuperTypes().push(this._eModelElementClass);
    this.getEClassifiers().push(this._eNamedElementClass);
    this._eTypedElementClass = new BasicEClass();
    this._eTypedElementClass.setName("ETypedElement");
    this._eTypedElementClass.setAbstract(true);
    this._eTypedElementClass.getESuperTypes().push(this._eNamedElementClass);
    this.getEClassifiers().push(this._eTypedElementClass);
    this._eClassifierClass = new BasicEClass();
    this._eClassifierClass.setName("EClassifier");
    this._eClassifierClass.setAbstract(true);
    this._eClassifierClass.getESuperTypes().push(this._eNamedElementClass);
    this.getEClassifiers().push(this._eClassifierClass);
    this._eClassClass = new BasicEClass();
    this._eClassClass.setName("EClass");
    this._eClassClass.getESuperTypes().push(this._eClassifierClass);
    this.getEClassifiers().push(this._eClassClass);
    this._eDataTypeClass = new BasicEClass();
    this._eDataTypeClass.setName("EDataType");
    this._eDataTypeClass.getESuperTypes().push(this._eClassifierClass);
    this.getEClassifiers().push(this._eDataTypeClass);
    this._eEnumClass = new BasicEClass();
    this._eEnumClass.setName("EEnum");
    this._eEnumClass.getESuperTypes().push(this._eDataTypeClass);
    this.getEClassifiers().push(this._eEnumClass);
    this._eEnumLiteralClass = new BasicEClass();
    this._eEnumLiteralClass.setName("EEnumLiteral");
    this._eEnumLiteralClass.getESuperTypes().push(this._eNamedElementClass);
    this.getEClassifiers().push(this._eEnumLiteralClass);
    this._ePackageClass = new BasicEClass();
    this._ePackageClass.setName("EPackage");
    this._ePackageClass.getESuperTypes().push(this._eNamedElementClass);
    this.getEClassifiers().push(this._ePackageClass);
    this._eFactoryClass = new BasicEClass();
    this._eFactoryClass.setName("EFactory");
    this._eFactoryClass.getESuperTypes().push(this._eModelElementClass);
    this.getEClassifiers().push(this._eFactoryClass);
    this._eStructuralFeatureClass = new BasicEClass();
    this._eStructuralFeatureClass.setName("EStructuralFeature");
    this._eStructuralFeatureClass.setAbstract(true);
    this._eStructuralFeatureClass.getESuperTypes().push(this._eTypedElementClass);
    this.getEClassifiers().push(this._eStructuralFeatureClass);
    this._eAttributeClass = new BasicEClass();
    this._eAttributeClass.setName("EAttribute");
    this._eAttributeClass.getESuperTypes().push(this._eStructuralFeatureClass);
    this.getEClassifiers().push(this._eAttributeClass);
    this._eReferenceClass = new BasicEClass();
    this._eReferenceClass.setName("EReference");
    this._eReferenceClass.getESuperTypes().push(this._eStructuralFeatureClass);
    this.getEClassifiers().push(this._eReferenceClass);
    this._eOperationClass = new BasicEClass();
    this._eOperationClass.setName("EOperation");
    this._eOperationClass.getESuperTypes().push(this._eTypedElementClass);
    this.getEClassifiers().push(this._eOperationClass);
    this._eParameterClass = new BasicEClass();
    this._eParameterClass.setName("EParameter");
    this._eParameterClass.getESuperTypes().push(this._eTypedElementClass);
    this.getEClassifiers().push(this._eParameterClass);
    this._eAnnotationClass = new BasicEClass();
    this._eAnnotationClass.setName("EAnnotation");
    this._eAnnotationClass.getESuperTypes().push(this._eModelElementClass);
    this.getEClassifiers().push(this._eAnnotationClass);
    this._eTypeParameterClass = new BasicEClass();
    this._eTypeParameterClass.setName("ETypeParameter");
    this._eTypeParameterClass.getESuperTypes().push(this._eNamedElementClass);
    this.getEClassifiers().push(this._eTypeParameterClass);
    this._eGenericTypeClass = new BasicEClass();
    this._eGenericTypeClass.setName("EGenericType");
    this._eGenericTypeClass.getESuperTypes().push(this._eObjectClass);
    this.getEClassifiers().push(this._eGenericTypeClass);
    this._eStringToStringMapEntryClass = new BasicEClass();
    this._eStringToStringMapEntryClass.setName("EStringToStringMapEntry");
    this._eStringToStringMapEntryClass.getESuperTypes().push(this._eObjectClass);
    this.getEClassifiers().push(this._eStringToStringMapEntryClass);
  }
  createAttributes() {
    const nameAttr = new BasicEAttribute();
    nameAttr.setName("name");
    nameAttr.setEType(this._eStringDataType);
    this._eNamedElementClass.getEStructuralFeatures().push(nameAttr);
    const orderedAttr = new BasicEAttribute();
    orderedAttr.setName("ordered");
    orderedAttr.setEType(this._eBooleanDataType);
    orderedAttr.setDefaultValueLiteral("true");
    this._eTypedElementClass.getEStructuralFeatures().push(orderedAttr);
    const uniqueAttr = new BasicEAttribute();
    uniqueAttr.setName("unique");
    uniqueAttr.setEType(this._eBooleanDataType);
    uniqueAttr.setDefaultValueLiteral("true");
    this._eTypedElementClass.getEStructuralFeatures().push(uniqueAttr);
    const lowerBoundAttr = new BasicEAttribute();
    lowerBoundAttr.setName("lowerBound");
    lowerBoundAttr.setEType(this._eIntDataType);
    lowerBoundAttr.setDefaultValueLiteral("0");
    this._eTypedElementClass.getEStructuralFeatures().push(lowerBoundAttr);
    const upperBoundAttr = new BasicEAttribute();
    upperBoundAttr.setName("upperBound");
    upperBoundAttr.setEType(this._eIntDataType);
    upperBoundAttr.setDefaultValueLiteral("1");
    this._eTypedElementClass.getEStructuralFeatures().push(upperBoundAttr);
    const instanceClassNameAttr = new BasicEAttribute();
    instanceClassNameAttr.setName("instanceClassName");
    instanceClassNameAttr.setEType(this._eStringDataType);
    this._eClassifierClass.getEStructuralFeatures().push(instanceClassNameAttr);
    const abstractAttr = new BasicEAttribute();
    abstractAttr.setName("abstract");
    abstractAttr.setEType(this._eBooleanDataType);
    abstractAttr.setDefaultValueLiteral("false");
    this._eClassClass.getEStructuralFeatures().push(abstractAttr);
    const interfaceAttr = new BasicEAttribute();
    interfaceAttr.setName("interface");
    interfaceAttr.setEType(this._eBooleanDataType);
    interfaceAttr.setDefaultValueLiteral("false");
    this._eClassClass.getEStructuralFeatures().push(interfaceAttr);
    const nsURIAttr = new BasicEAttribute();
    nsURIAttr.setName("nsURI");
    nsURIAttr.setEType(this._eStringDataType);
    this._ePackageClass.getEStructuralFeatures().push(nsURIAttr);
    const nsPrefixAttr = new BasicEAttribute();
    nsPrefixAttr.setName("nsPrefix");
    nsPrefixAttr.setEType(this._eStringDataType);
    this._ePackageClass.getEStructuralFeatures().push(nsPrefixAttr);
    const changeableAttr = new BasicEAttribute();
    changeableAttr.setName("changeable");
    changeableAttr.setEType(this._eBooleanDataType);
    changeableAttr.setDefaultValueLiteral("true");
    this._eStructuralFeatureClass.getEStructuralFeatures().push(changeableAttr);
    const volatileAttr = new BasicEAttribute();
    volatileAttr.setName("volatile");
    volatileAttr.setEType(this._eBooleanDataType);
    volatileAttr.setDefaultValueLiteral("false");
    this._eStructuralFeatureClass.getEStructuralFeatures().push(volatileAttr);
    const transientAttr = new BasicEAttribute();
    transientAttr.setName("transient");
    transientAttr.setEType(this._eBooleanDataType);
    transientAttr.setDefaultValueLiteral("false");
    this._eStructuralFeatureClass.getEStructuralFeatures().push(transientAttr);
    const defaultValueLiteralAttr = new BasicEAttribute();
    defaultValueLiteralAttr.setName("defaultValueLiteral");
    defaultValueLiteralAttr.setEType(this._eStringDataType);
    this._eStructuralFeatureClass.getEStructuralFeatures().push(defaultValueLiteralAttr);
    const unsettableAttr = new BasicEAttribute();
    unsettableAttr.setName("unsettable");
    unsettableAttr.setEType(this._eBooleanDataType);
    unsettableAttr.setDefaultValueLiteral("false");
    this._eStructuralFeatureClass.getEStructuralFeatures().push(unsettableAttr);
    const derivedAttr = new BasicEAttribute();
    derivedAttr.setName("derived");
    derivedAttr.setEType(this._eBooleanDataType);
    derivedAttr.setDefaultValueLiteral("false");
    this._eStructuralFeatureClass.getEStructuralFeatures().push(derivedAttr);
    const idAttr = new BasicEAttribute();
    idAttr.setName("iD");
    idAttr.setEType(this._eBooleanDataType);
    idAttr.setDefaultValueLiteral("false");
    this._eAttributeClass.getEStructuralFeatures().push(idAttr);
    const containmentAttr = new BasicEAttribute();
    containmentAttr.setName("containment");
    containmentAttr.setEType(this._eBooleanDataType);
    containmentAttr.setDefaultValueLiteral("false");
    this._eReferenceClass.getEStructuralFeatures().push(containmentAttr);
    const resolveProxiesAttr = new BasicEAttribute();
    resolveProxiesAttr.setName("resolveProxies");
    resolveProxiesAttr.setEType(this._eBooleanDataType);
    resolveProxiesAttr.setDefaultValueLiteral("true");
    this._eReferenceClass.getEStructuralFeatures().push(resolveProxiesAttr);
    const valueAttr = new BasicEAttribute();
    valueAttr.setName("value");
    valueAttr.setEType(this._eIntDataType);
    valueAttr.setDefaultValueLiteral("0");
    this._eEnumLiteralClass.getEStructuralFeatures().push(valueAttr);
    const literalAttr = new BasicEAttribute();
    literalAttr.setName("literal");
    literalAttr.setEType(this._eStringDataType);
    this._eEnumLiteralClass.getEStructuralFeatures().push(literalAttr);
    const sourceAttr = new BasicEAttribute();
    sourceAttr.setName("source");
    sourceAttr.setEType(this._eStringDataType);
    this._eAnnotationClass.getEStructuralFeatures().push(sourceAttr);
    const keyAttr = new BasicEAttribute();
    keyAttr.setName("key");
    keyAttr.setEType(this._eStringDataType);
    this._eStringToStringMapEntryClass.getEStructuralFeatures().push(keyAttr);
    const mapValueAttr = new BasicEAttribute();
    mapValueAttr.setName("value");
    mapValueAttr.setEType(this._eStringDataType);
    this._eStringToStringMapEntryClass.getEStructuralFeatures().push(mapValueAttr);
    const serializableAttr = new BasicEAttribute();
    serializableAttr.setName("serializable");
    serializableAttr.setEType(this._eBooleanDataType);
    serializableAttr.setDefaultValueLiteral("true");
    this._eDataTypeClass.getEStructuralFeatures().push(serializableAttr);
  }
  createReferences() {
    const eAnnotationsRef = new BasicEReference();
    eAnnotationsRef.setName("eAnnotations");
    eAnnotationsRef.setEType(this._eAnnotationClass);
    eAnnotationsRef.setContainment(true);
    eAnnotationsRef.setUpperBound(-1);
    this._eModelElementClass.getEStructuralFeatures().push(eAnnotationsRef);
    const eTypeRef = new BasicEReference();
    eTypeRef.setName("eType");
    eTypeRef.setEType(this._eClassifierClass);
    this._eTypedElementClass.getEStructuralFeatures().push(eTypeRef);
    const eSuperTypesRef = new BasicEReference();
    eSuperTypesRef.setName("eSuperTypes");
    eSuperTypesRef.setEType(this._eClassClass);
    eSuperTypesRef.setUpperBound(-1);
    this._eClassClass.getEStructuralFeatures().push(eSuperTypesRef);
    const eStructuralFeaturesRef = new BasicEReference();
    eStructuralFeaturesRef.setName("eStructuralFeatures");
    eStructuralFeaturesRef.setEType(this._eStructuralFeatureClass);
    eStructuralFeaturesRef.setContainment(true);
    eStructuralFeaturesRef.setUpperBound(-1);
    this._eClassClass.getEStructuralFeatures().push(eStructuralFeaturesRef);
    const eOperationsRef = new BasicEReference();
    eOperationsRef.setName("eOperations");
    eOperationsRef.setEType(this._eOperationClass);
    eOperationsRef.setContainment(true);
    eOperationsRef.setUpperBound(-1);
    this._eClassClass.getEStructuralFeatures().push(eOperationsRef);
    const eClassifiersRef = new BasicEReference();
    eClassifiersRef.setName("eClassifiers");
    eClassifiersRef.setEType(this._eClassifierClass);
    eClassifiersRef.setContainment(true);
    eClassifiersRef.setUpperBound(-1);
    this._ePackageClass.getEStructuralFeatures().push(eClassifiersRef);
    const eSubpackagesRef = new BasicEReference();
    eSubpackagesRef.setName("eSubpackages");
    eSubpackagesRef.setEType(this._ePackageClass);
    eSubpackagesRef.setContainment(true);
    eSubpackagesRef.setUpperBound(-1);
    this._ePackageClass.getEStructuralFeatures().push(eSubpackagesRef);
    const eFactoryInstanceRef = new BasicEReference();
    eFactoryInstanceRef.setName("eFactoryInstance");
    eFactoryInstanceRef.setEType(this._eFactoryClass);
    this._ePackageClass.getEStructuralFeatures().push(eFactoryInstanceRef);
    const eLiteralsRef = new BasicEReference();
    eLiteralsRef.setName("eLiterals");
    eLiteralsRef.setEType(this._eEnumLiteralClass);
    eLiteralsRef.setContainment(true);
    eLiteralsRef.setUpperBound(-1);
    this._eEnumClass.getEStructuralFeatures().push(eLiteralsRef);
    const eOppositeRef = new BasicEReference();
    eOppositeRef.setName("eOpposite");
    eOppositeRef.setEType(this._eReferenceClass);
    this._eReferenceClass.getEStructuralFeatures().push(eOppositeRef);
    const eParametersRef = new BasicEReference();
    eParametersRef.setName("eParameters");
    eParametersRef.setEType(this._eParameterClass);
    eParametersRef.setContainment(true);
    eParametersRef.setUpperBound(-1);
    this._eOperationClass.getEStructuralFeatures().push(eParametersRef);
    const detailsRef = new BasicEReference();
    detailsRef.setName("details");
    detailsRef.setEType(this._eStringToStringMapEntryClass);
    detailsRef.setContainment(true);
    detailsRef.setUpperBound(-1);
    this._eAnnotationClass.getEStructuralFeatures().push(detailsRef);
    const eGenericTypeRef = new BasicEReference();
    eGenericTypeRef.setName("eGenericType");
    eGenericTypeRef.setEType(this._eGenericTypeClass);
    eGenericTypeRef.setContainment(true);
    this._eTypedElementClass.getEStructuralFeatures().push(eGenericTypeRef);
    const eTypeParametersRef = new BasicEReference();
    eTypeParametersRef.setName("eTypeParameters");
    eTypeParametersRef.setEType(this._eTypeParameterClass);
    eTypeParametersRef.setContainment(true);
    eTypeParametersRef.setUpperBound(-1);
    this._eClassifierClass.getEStructuralFeatures().push(eTypeParametersRef);
    const eGenericSuperTypesRef = new BasicEReference();
    eGenericSuperTypesRef.setName("eGenericSuperTypes");
    eGenericSuperTypesRef.setEType(this._eGenericTypeClass);
    eGenericSuperTypesRef.setContainment(true);
    eGenericSuperTypesRef.setUpperBound(-1);
    this._eClassClass.getEStructuralFeatures().push(eGenericSuperTypesRef);
    const eOperationTypeParametersRef = new BasicEReference();
    eOperationTypeParametersRef.setName("eTypeParameters");
    eOperationTypeParametersRef.setEType(this._eTypeParameterClass);
    eOperationTypeParametersRef.setContainment(true);
    eOperationTypeParametersRef.setUpperBound(-1);
    this._eOperationClass.getEStructuralFeatures().push(eOperationTypeParametersRef);
    const eBoundsRef = new BasicEReference();
    eBoundsRef.setName("eBounds");
    eBoundsRef.setEType(this._eGenericTypeClass);
    eBoundsRef.setContainment(true);
    eBoundsRef.setUpperBound(-1);
    this._eTypeParameterClass.getEStructuralFeatures().push(eBoundsRef);
    const eClassifierRef = new BasicEReference();
    eClassifierRef.setName("eClassifier");
    eClassifierRef.setEType(this._eClassifierClass);
    this._eGenericTypeClass.getEStructuralFeatures().push(eClassifierRef);
    const eTypeParameterRef = new BasicEReference();
    eTypeParameterRef.setName("eTypeParameter");
    eTypeParameterRef.setEType(this._eTypeParameterClass);
    this._eGenericTypeClass.getEStructuralFeatures().push(eTypeParameterRef);
    const eTypeArgumentsRef = new BasicEReference();
    eTypeArgumentsRef.setName("eTypeArguments");
    eTypeArgumentsRef.setEType(this._eGenericTypeClass);
    eTypeArgumentsRef.setContainment(true);
    eTypeArgumentsRef.setUpperBound(-1);
    this._eGenericTypeClass.getEStructuralFeatures().push(eTypeArgumentsRef);
    const eUpperBoundRef = new BasicEReference();
    eUpperBoundRef.setName("eUpperBound");
    eUpperBoundRef.setEType(this._eGenericTypeClass);
    eUpperBoundRef.setContainment(true);
    this._eGenericTypeClass.getEStructuralFeatures().push(eUpperBoundRef);
    const eLowerBoundRef = new BasicEReference();
    eLowerBoundRef.setName("eLowerBound");
    eLowerBoundRef.setEType(this._eGenericTypeClass);
    eLowerBoundRef.setContainment(true);
    this._eGenericTypeClass.getEStructuralFeatures().push(eLowerBoundRef);
  }
  // Getters for EClasses
  getEObjectClass() {
    return this._eObjectClass;
  }
  getEModelElementClass() {
    return this._eModelElementClass;
  }
  getENamedElementClass() {
    return this._eNamedElementClass;
  }
  getEClassifierClass() {
    return this._eClassifierClass;
  }
  getEClassClass() {
    return this._eClassClass;
  }
  getEDataTypeClass() {
    return this._eDataTypeClass;
  }
  getEEnumClass() {
    return this._eEnumClass;
  }
  getEEnumLiteralClass() {
    return this._eEnumLiteralClass;
  }
  getEPackageClass() {
    return this._ePackageClass;
  }
  getEFactoryClass() {
    return this._eFactoryClass;
  }
  getEStructuralFeatureClass() {
    return this._eStructuralFeatureClass;
  }
  getEAttributeClass() {
    return this._eAttributeClass;
  }
  getEReferenceClass() {
    return this._eReferenceClass;
  }
  getEOperationClass() {
    return this._eOperationClass;
  }
  getEParameterClass() {
    return this._eParameterClass;
  }
  getEAnnotationClass() {
    return this._eAnnotationClass;
  }
  getEGenericTypeClass() {
    return this._eGenericTypeClass;
  }
  getETypeParameterClass() {
    return this._eTypeParameterClass;
  }
  getEStringToStringMapEntryClass() {
    return this._eStringToStringMapEntryClass;
  }
  // Getters for EDataTypes
  getEBoolean() {
    return this._eBooleanDataType;
  }
  getEInt() {
    return this._eIntDataType;
  }
  getEString() {
    return this._eStringDataType;
  }
  getEDouble() {
    return this._eDoubleDataType;
  }
  getEFloat() {
    return this._eFloatDataType;
  }
  getELong() {
    return this._eLongDataType;
  }
  getEDate() {
    return this._eDateDataType;
  }
  getEShort() {
    return this._eShortDataType;
  }
  getEByte() {
    return this._eByteDataType;
  }
  getEChar() {
    return this._eCharDataType;
  }
  getEBigInteger() {
    return this._eBigIntegerDataType;
  }
  getEBigDecimal() {
    return this._eBigDecimalDataType;
  }
  getEJavaObject() {
    return this._eJavaObjectDataType;
  }
}
class EcoreFactory extends BasicEFactory {
  constructor(ePackage) {
    super();
    this._ePackage = ePackage;
  }
  getEPackage() {
    return this._ePackage;
  }
  create(eClass) {
    const className = eClass.getName();
    switch (className) {
      case "EClass":
        return new BasicEClass();
      case "EAttribute":
        return new BasicEAttribute();
      case "EReference":
        return new BasicEReference();
      case "EDataType":
        return new BasicEDataType();
      case "EEnum":
        return new BasicEEnum();
      case "EEnumLiteral":
        return new BasicEEnumLiteral();
      case "EAnnotation":
        return new BasicEAnnotation();
      case "EPackage":
        return new BasicEPackage();
      case "EOperation":
        return new BasicEOperation();
      case "EParameter":
        return new BasicEParameter();
      case "EGenericType":
        return new BasicEGenericType();
      case "ETypeParameter":
        return new BasicETypeParameter();
      default:
        return super.create(eClass);
    }
  }
}
getEcorePackage();
class EResourceSetImpl extends BasicResourceSet {
  constructor() {
    super();
    this.getResourceFactoryRegistry().getExtensionToFactoryMap().set("ecore", new XMIResourceFactory());
    this.getResourceFactoryRegistry().getExtensionToFactoryMap().set("xmi", new XMIResourceFactory());
    this.getPackageRegistry().set(ECORE_NS_URI, getEcorePackage());
  }
  /**
   * Create resource and return with loadFromString support
   */
  createResource(uri) {
    const resource = super.createResource(uri);
    return resource;
  }
}
var __defProp$3 = Object.defineProperty;
var __getOwnPropDesc$8 = Object.getOwnPropertyDescriptor;
var __decorateClass$8 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$8(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$3(target, key, result);
  return result;
};
let Payload = class {
};
__decorateClass$8([
  Documentation("Type of the event (e.g., 'click_on_thing', 'click_on_datastream')."),
  Attribute()
], Payload.prototype, "eventType", 2);
__decorateClass$8([
  Documentation("ID of the widget that emitted this event."),
  Attribute()
], Payload.prototype, "widgetId", 2);
__decorateClass$8([
  Documentation("Unix timestamp when the event was emitted."),
  Attribute()
], Payload.prototype, "timestamp", 2);
__decorateClass$8([
  Documentation("Optional metadata object for additional context."),
  Attribute()
], Payload.prototype, "metadata", 2);
Payload = __decorateClass$8([
  ModelClass({ type: "http://org.eclipse.daanse.board.app.lib.events#//Payload" })
], Payload);
var __getOwnPropDesc$7 = Object.getOwnPropertyDescriptor;
var __decorateClass$7 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$7(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = decorator(result) || result;
  return result;
};
let WidgetActionInterface = class {
};
WidgetActionInterface = __decorateClass$7([
  ModelClass({ type: "http://org.eclipse.daanse.board.app.lib.events#//WidgetActionInterface" })
], WidgetActionInterface);
var __getOwnPropDesc$6 = Object.getOwnPropertyDescriptor;
var __decorateClass$6$1 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$6(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = decorator(result) || result;
  return result;
};
let SystemActionInterface = class extends WidgetActionInterface {
};
SystemActionInterface = __decorateClass$6$1([
  ModelClass({ type: "http://org.eclipse.daanse.board.app.lib.events#//SystemActionInterface" })
], SystemActionInterface);
var __getOwnPropDesc$5 = Object.getOwnPropertyDescriptor;
var __decorateClass$5$1 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$5(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = decorator(result) || result;
  return result;
};
let PageActionInterface = class extends WidgetActionInterface {
};
PageActionInterface = __decorateClass$5$1([
  ModelClass({ type: "http://org.eclipse.daanse.board.app.lib.events#//PageActionInterface" })
], PageActionInterface);
var Comperator = /* @__PURE__ */ ((Comperator2) => {
  Comperator2["eq"] = "eq";
  Comperator2["lt"] = "lt";
  Comperator2["gt"] = "gt";
  Comperator2["lte"] = "lte";
  Comperator2["gte"] = "gte";
  Comperator2["neq"] = "neq";
  return Comperator2;
})(Comperator || {});
var __getOwnPropDesc$4$1 = Object.getOwnPropertyDescriptor;
var __decorateClass$4$1 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$4$1(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = decorator(result) || result;
  return result;
};
let EventRegistry = class {
  constructor() {
    this.events = /* @__PURE__ */ new Map();
    this.widgetTypeMap = /* @__PURE__ */ new Map();
  }
  // EcoreMetadataService instance
  /**
   * Set EcoreMetadataService instance for Ecore-based metadata extraction
   */
  setEcoreMetadataService(service) {
    this.ecoreMetadataService = service;
  }
  /**
   * Registriert alle Events eines Widgets
   */
  registerWidget(widgetType, events) {
    for (const event of events) {
      const key = `${widgetType}:${event.type}`;
      this.widgetTypeMap.set(key, widgetType);
      this.events.set(key, {
        ...event,
        type: key
        // z.B. "MapWidget:click_on_datastream"
      });
    }
  }
  /**
   * Gibt alle registrierten Events zurück (mit vollständigem widgetType:eventType)
   */
  getAllEvents() {
    return Array.from(this.events.values());
  }
  /**
   * Gibt ein Event zurück
   */
  getEvent(widgetType, eventType) {
    return this.events.get(`${widgetType}:${eventType}`);
  }
  /**
   * Gibt alle Events für einen Widget-Typ zurück
   */
  getWidgetEvents(widgetType) {
    return Array.from(this.events.entries()).filter(([key]) => key.startsWith(`${widgetType}:`)).map(([, event]) => event);
  }
  /**
   * Extrahiert alle Metadaten aus einem Payload-Typ
   */
  extractPayloadMetadata(target) {
    const proto = target.prototype ?? target;
    const result = {};
    const ownKeys = Reflect.getMetadataKeys(proto);
    result["__class"] = ownKeys.map((key) => ({
      key,
      value: Reflect.getMetadata(key, proto)
    }));
    const protoPropertyNames = Object.getOwnPropertyNames(proto);
    const propertyNamesSet = new Set(protoPropertyNames);
    try {
      const instance = new target();
      Object.keys(instance).forEach((key) => propertyNamesSet.add(key));
    } catch (e2) {
    }
    for (const property of propertyNamesSet) {
      if (property === "constructor") continue;
      const metaKeys = Reflect.getMetadataKeys(proto, property);
      if (metaKeys.length === 0) continue;
      result[property] = metaKeys.map((key) => ({
        key,
        value: Reflect.getMetadata(key, proto, property)
      }));
    }
    return result;
  }
  /**
   * Extract payload properties with type information from Ecore model
   * Falls back to decorator-based extraction if Ecore model is not available
   */
  extractPayloadPropertiesForEvent(eventType) {
    const widgetType = this.widgetTypeMap.get(eventType);
    if (!widgetType || !this.ecoreMetadataService) {
      console.warn(`No widget type or EcoreMetadataService for event: ${eventType}`);
      return [];
    }
    const event = this.events.get(eventType);
    if (!event || !event.payloadType) {
      console.warn(`No event or payload type found for: ${eventType}`);
      return [];
    }
    const payloadClassName = event.payloadType.name;
    const ecoreMetadata = this.ecoreMetadataService.extractPayloadMetadata(widgetType, payloadClassName);
    if (ecoreMetadata && ecoreMetadata.properties) {
      console.log(`✅ Extracted ${ecoreMetadata.properties.length} properties from Ecore model for ${payloadClassName}`);
      return ecoreMetadata.properties;
    }
    console.warn(`No Ecore metadata found for ${payloadClassName}, returning empty array`);
    return [];
  }
  /**
   * Extract payload properties with type information (legacy method for backward compatibility)
   * @deprecated Use extractPayloadPropertiesForEvent instead
   */
  extractPayloadProperties(target) {
    console.warn("extractPayloadProperties() called - this method is deprecated, use extractPayloadPropertiesForEvent() instead");
    return [];
  }
  /**
   * Löscht alle registrierten Events
   */
  clear() {
    this.events.clear();
  }
  /**
   * Entfernt alle Events eines Widget-Typs
   */
  unregisterWidget(widgetType) {
    const keysToDelete = [];
    for (const key of this.events.keys()) {
      if (key.startsWith(`${widgetType}:`)) {
        keysToDelete.push(key);
      }
    }
    for (const key of keysToDelete) {
      this.events.delete(key);
    }
  }
};
EventRegistry = __decorateClass$4$1([
  W()
], EventRegistry);
const log$2 = loggerFactory.createLogger("daanse:events:decorator");
const WIDGET_ACTION_METADATA_KEY = Symbol.for("daanse:widgetAction");
const ACTION_PARAMETER_METADATA_KEY = Symbol.for("daanse:actionParameter");
function getWidgetActions(target) {
  const constructor = typeof target === "function" ? target : target.constructor;
  log$2("getWidgetActions called with target: %o", target);
  log$2("  constructor: %o", constructor);
  log$2("  constructor.name: %s", constructor == null ? void 0 : constructor.name);
  const allKeys = Reflect.getMetadataKeys(constructor);
  log$2("  All metadata keys: %o", allKeys);
  let actions = Reflect.getMetadata(WIDGET_ACTION_METADATA_KEY, constructor) || [];
  actions = actions.map((action) => {
    const paramMetadata = Reflect.getMetadata(ACTION_PARAMETER_METADATA_KEY, constructor.prototype, action.methodName) || [];
    if (paramMetadata.length > 0 && !action.parameters) {
      const sortedParams = [...paramMetadata].sort((a2, b2) => a2.index - b2.index);
      action.parameters = sortedParams.map(
        (p2) => `${p2.name}${p2.optional ? "?" : ""}: ${p2.type}`
      );
    }
    return action;
  });
  log$2("  Actions found: %o", actions);
  return actions;
}
var __getOwnPropDesc$3$1 = Object.getOwnPropertyDescriptor;
var __decorateClass$3$1 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$3$1(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = decorator(result) || result;
  return result;
};
let EventActionsRegistry = class {
  constructor() {
    this.actions = /* @__PURE__ */ new Map();
    this.widgetTypes = /* @__PURE__ */ new Map();
    this.widgetInstances = /* @__PURE__ */ new Map();
    this.instanceTypes = /* @__PURE__ */ new Map();
    this.instancePages = /* @__PURE__ */ new Map();
  }
  /**
   * Erstellt einen eindeutigen Key für die Registry
   */
  createKey(context, eventType, contextId) {
    if (contextId) {
      return `${context}:${contextId}:${eventType}`;
    }
    return `${context}:${eventType}`;
  }
  /**
   * Registriert eine Aktion für ein Event in einem Kontext
   */
  register(context, eventType, action, contextId) {
    const key = this.createKey(context, eventType, contextId);
    if (!this.actions.has(key)) {
      this.actions.set(key, []);
    }
    this.actions.get(key).push({
      context,
      contextId,
      eventType,
      action
    });
  }
  /**
   * Entfernt alle Aktionen für einen bestimmten Kontext
   */
  unregister(context, eventType, contextId) {
    const key = this.createKey(context, eventType, contextId);
    this.actions.delete(key);
  }
  /**
   * Führt alle registrierten Aktionen für ein Event aus
   */
  async execute(context, eventType, ...args) {
    const key = this.createKey(context, eventType);
    const actions = this.actions.get(key) || [];
    for (const action of actions) {
      try {
        await action.action(...args);
      } catch (error) {
        console.error(`Error executing action for ${key}:`, error);
      }
    }
  }
  /**
   * Gibt alle Aktionen für einen Kontext zurück
   */
  getActions(context, eventType, contextId) {
    if (eventType) {
      const key = this.createKey(context, eventType, contextId);
      return this.actions.get(key) || [];
    }
    const result = [];
    const prefix = contextId ? `${context}:${contextId}:` : `${context}:`;
    for (const [key, actions] of this.actions.entries()) {
      if (key.startsWith(prefix)) {
        result.push(...actions);
      }
    }
    return result;
  }
  /**
   * Löscht alle registrierten Aktionen
   */
  clear() {
    this.actions.clear();
  }
  /**
   * Entfernt alle Aktionen für einen bestimmten Context-ID (z.B. beim Unmount eines Widgets)
   */
  clearContext(context, contextId) {
    const keysToDelete = [];
    const prefix = `${context}:${contextId}:`;
    for (const key of this.actions.keys()) {
      if (key.startsWith(prefix)) {
        keysToDelete.push(key);
      }
    }
    for (const key of keysToDelete) {
      this.actions.delete(key);
    }
    if (context === "widget") {
      this.widgetInstances.delete(contextId);
    }
  }
  /**
   * Set the EcoreMetadataService (injected manually to avoid circular dependency)
   */
  setEcoreMetadataService(service) {
    this.ecoreMetadataService = service;
  }
  /**
   * Registriert einen Widget-Typ mit seinen Actions (aus @WidgetAction Decorators)
   * Wird beim Package-Import aufgerufen
   * @param widgetType - Widget type identifier
   * @param baseClass - Die abstrakte Basis-Klasse mit @WidgetAction Decorators
   * @param context - Optional: Kontext für diese Actions (default: 'widget')
   */
  registerWidgetType(widgetType, baseClass, context) {
    const actions = getWidgetActions(baseClass);
    this.widgetTypes.set(widgetType, {
      widgetType,
      baseClass,
      actions,
      context: context || "widget"
    });
    console.log(`📝 Registered widget type "${widgetType}" (context: ${context || "widget"}) with ${actions.length} actions:`);
    actions.forEach((action) => {
      var _a;
      console.log(`  - ${action.methodName}(${((_a = action.parameters) == null ? void 0 : _a.join(", ")) || ""})`, action);
    });
  }
  /**
   * Nimmt die Registrierung eines Widget-Typs zurück.
   *
   * Gegenstück zu registerWidgetType, damit ein Widget-Modul seine
   * Registrierung in deactivate() wieder aufheben kann.
   *
   * @param widgetType - Widget type identifier
   * @returns ob der Typ registriert war
   */
  unregisterWidgetType(widgetType) {
    return this.widgetTypes.delete(widgetType);
  }
  /**
   * Registriert Actions aus einem Ecore-Modell
   * @param name - Action type identifier (z.B. "MapWidget", "OGCSTAToChartComposer")
   * @param ecoreUri - URI zum Ecore-Model (z.B. "model/model.ecore")
   * @param context - Kontext für diese Actions (default: 'widget')
   */
  async registerActionsFromEcore(name, ecoreUri, context) {
    if (!this.ecoreMetadataService) {
      console.error("EcoreMetadataService not set. Cannot register actions from Ecore.");
      return;
    }
    try {
      await this.ecoreMetadataService.loadModel(name, ecoreUri);
      const ecoreActions = this.ecoreMetadataService.extractActions(name);
      const actions = ecoreActions.map((ecoreAction) => ({
        methodName: ecoreAction.methodName,
        eventType: ecoreAction.eventType,
        parameters: ecoreAction.parameters.map(
          (p2) => `${p2.name}${p2.optional ? "?" : ""}: ${p2.type}`
        )
      }));
      this.widgetTypes.set(name, {
        widgetType: name,
        baseClass: null,
        // No base class for Ecore-based actions
        actions,
        context: context || "widget"
      });
      console.log(`📝 Registered actions "${name}" (context: ${context || "widget"}) from Ecore with ${actions.length} actions:`);
      actions.forEach((action) => {
        var _a;
        console.log(`  - ${action.methodName}(${((_a = action.parameters) == null ? void 0 : _a.join(", ")) || ""})`, action);
      });
    } catch (error) {
      console.error(`Failed to register actions "${name}" from Ecore:`, error);
      throw error;
    }
  }
  /**
   * @deprecated Use registerActionsFromEcore instead
   */
  async registerWidgetTypeFromEcore(widgetType, ecoreUri) {
    console.warn("registerWidgetTypeFromEcore is deprecated. Use registerActionsFromEcore instead.");
    return this.registerActionsFromEcore(widgetType, ecoreUri, "widget");
  }
  /**
   * Registriert Actions aus einem Ecore-Modell-String
   * @param name - Action type identifier (z.B. "MapWidget", "OGCSTAToChartComposer")
   * @param ecoreContent - Ecore model as string
   * @param context - Kontext für diese Actions (default: 'widget')
   * @param uri - Optional URI for the model
   */
  async registerActionsFromEcoreString(name, ecoreContent, context, uri) {
    if (!this.ecoreMetadataService) {
      console.error("EcoreMetadataService not set. Cannot register actions from Ecore.");
      return;
    }
    try {
      await this.ecoreMetadataService.loadModelFromString(name, ecoreContent, uri);
      const ecoreActions = this.ecoreMetadataService.extractActions(name);
      const actions = ecoreActions.map((ecoreAction) => ({
        methodName: ecoreAction.methodName,
        eventType: ecoreAction.eventType,
        parameters: ecoreAction.parameters.map(
          (p2) => `${p2.name}${p2.optional ? "?" : ""}: ${p2.type}`
        )
      }));
      this.widgetTypes.set(name, {
        widgetType: name,
        baseClass: null,
        // No base class for Ecore-based actions
        actions,
        context: context || "widget"
      });
      console.log(`📝 Registered actions "${name}" (context: ${context || "widget"}) from Ecore string with ${actions.length} actions:`);
      actions.forEach((action) => {
        var _a;
        console.log(`  - ${action.methodName}(${((_a = action.parameters) == null ? void 0 : _a.join(", ")) || ""})`, action);
      });
    } catch (error) {
      console.error(`Failed to register actions "${name}" from Ecore string:`, error);
      throw error;
    }
  }
  /**
   * @deprecated Use registerActionsFromEcoreString instead
   */
  async registerWidgetTypeFromEcoreString(widgetType, ecoreContent, uri) {
    console.warn("registerWidgetTypeFromEcoreString is deprecated. Use registerActionsFromEcoreString instead.");
    return this.registerActionsFromEcoreString(widgetType, ecoreContent, "widget", uri);
  }
  /**
   * Registriert eine Instanz (Widget, Composer, Datasource, etc.)
   * Wird beim Mount/Init aufgerufen
   * @param instanceId - Eindeutige ID der Instanz
   * @param instanceRef - Referenz auf die Instanz mit den Action-Methoden
   * @param widgetType - Optional: Widget-Typ für die Instanz (z.B. "OGCSTAToChartComposer")
   * @param pageId - Optional: Page ID auf der die Instanz lebt
   */
  registerInstance(instanceId, instanceRef, widgetType, pageId) {
    this.widgetInstances.set(instanceId, instanceRef);
    if (widgetType) {
      this.instanceTypes.set(instanceId, widgetType);
    }
    if (pageId) {
      this.instancePages.set(instanceId, pageId);
    }
    console.log(`Registered instance "${instanceId}"${widgetType ? ` (type: ${widgetType})` : ""}${pageId ? ` (page: ${pageId})` : ""}`);
  }
  /**
   * Gibt die pageId für eine Instanz zurück
   * Prüft zuerst die manuelle Registrierung, dann die Lookup-Funktion
   */
  getInstancePageId(instanceId) {
    const manualPageId = this.instancePages.get(instanceId);
    if (manualPageId) return manualPageId;
    if (this.pageIdLookupFn) {
      return this.pageIdLookupFn(instanceId);
    }
    return void 0;
  }
  /**
   * Setzt eine Funktion die pageId von widgetId ableiten kann
   * Diese Funktion wird von der Vue-App gesetzt um Zugriff auf die Pinia Stores zu haben
   */
  setPageIdLookup(fn) {
    this.pageIdLookupFn = fn;
    console.log("📝 PageId lookup function registered");
  }
  /**
   * @deprecated Use registerInstance instead
   */
  registerWidgetInstance(widgetInstanceId, widgetRef) {
    this.registerInstance(widgetInstanceId, widgetRef);
  }
  /**
   * Entfernt eine Instanz
   * Wird beim Unmount/Dispose aufgerufen
   * @param instanceId - ID der Instanz
   */
  unregisterInstance(instanceId) {
    this.widgetInstances.delete(instanceId);
    this.instanceTypes.delete(instanceId);
    this.instancePages.delete(instanceId);
    console.log(`Unregistered instance "${instanceId}"`);
  }
  /**
   * Gibt alle registrierten Instanzen zurück
   * @param widgetType - Optional: Filter nach Widget-Typ
   */
  getRegisteredInstances(widgetType) {
    const result = [];
    for (const [instanceId, instanceRef] of this.widgetInstances.entries()) {
      const type = this.instanceTypes.get(instanceId) || "unknown";
      if (!widgetType || type === widgetType) {
        result.push({
          instanceId,
          widgetType: type,
          instanceRef
        });
      }
    }
    return result;
  }
  /**
   * Gibt alle Instanz-IDs zurück
   */
  getInstanceIds() {
    return Array.from(this.widgetInstances.keys());
  }
  /**
   * @deprecated Use unregisterInstance instead
   */
  unregisterWidgetInstance(widgetInstanceId) {
    this.unregisterInstance(widgetInstanceId);
  }
  /**
   * Führt eine Action auf einer Instanz aus
   * @param instanceId - ID der Instanz
   * @param actionName - Name der Action-Methode (z.B. 'zoomToThing', 'switchThingByName')
   * @param args - Argumente für die Action
   */
  async executeInstanceAction(instanceId, actionName, ...args) {
    const instanceRef = this.widgetInstances.get(instanceId);
    if (!instanceRef) {
      console.warn(`Instance "${instanceId}" not found.`);
      return;
    }
    if (typeof instanceRef[actionName] !== "function") {
      console.warn(`Action "${actionName}" not found on instance "${instanceId}".`);
      return;
    }
    try {
      await instanceRef[actionName](...args);
    } catch (error) {
      console.error(`Error executing action "${actionName}" on "${instanceId}":`, error);
    }
  }
  /**
   * @deprecated Use executeInstanceAction instead
   */
  async executeWidgetAction(widgetInstanceId, actionName, ...args) {
    return this.executeInstanceAction(widgetInstanceId, actionName, ...args);
  }
  /**
   * Führt eine Action auf allen registrierten Instanzen aus
   * @param actionName - Name der Action-Methode (z.B. 'zoomToThing')
   * @param args - Argumente für die Action
   */
  async executeActionOnAll(actionName, ...args) {
    console.log(`🎯 executeActionOnAll: "${actionName}" with args:`, args);
    console.log(`🎯 Registered instances: ${this.widgetInstances.size}`);
    if (this.widgetInstances.size === 0) {
      console.warn(`❌ No instances registered to execute action "${actionName}".`);
      return;
    }
    let executedCount = 0;
    for (const [instanceId, instanceRef] of this.widgetInstances.entries()) {
      const instanceType = this.instanceTypes.get(instanceId);
      console.log(`🎯 Checking instance "${instanceId}" (type: ${instanceType}), has ${actionName}: ${typeof instanceRef[actionName]}`);
      if (typeof instanceRef[actionName] === "function") {
        try {
          console.log(`🎯 Calling ${actionName} on "${instanceId}"...`);
          await instanceRef[actionName](...args);
          executedCount++;
          console.log(`✅ Executed action "${actionName}" on instance "${instanceId}"`);
        } catch (error) {
          console.error(`❌ Error executing action "${actionName}" on "${instanceId}":`, error);
        }
      }
    }
    if (executedCount === 0) {
      console.warn(`❌ Action "${actionName}" not found on any instances.`);
    } else {
      console.log(`✅ Executed action "${actionName}" on ${executedCount} instance(s)`);
    }
  }
  /**
   * @deprecated Use executeActionOnAll instead
   */
  async executeWidgetActionOnAll(actionName, ...args) {
    return this.executeActionOnAll(actionName, ...args);
  }
  /**
   * Gibt alle registrierten Widget-Typen zurück
   */
  getWidgetTypes() {
    return Array.from(this.widgetTypes.values());
  }
  /**
   * Gibt die Registrierung für einen Widget-Typ zurück
   */
  getWidgetType(widgetType) {
    return this.widgetTypes.get(widgetType);
  }
};
EventActionsRegistry = __decorateClass$3$1([
  W()
], EventActionsRegistry);
var __getOwnPropDesc$2$1 = Object.getOwnPropertyDescriptor;
var __decorateClass$2$1 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$2$1(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = decorator(result) || result;
  return result;
};
var __decorateParam$1 = (index, decorator) => (target, key) => decorator(target, key, index);
const log$1 = loggerFactory.createLogger("daanse:events:manager");
let EventManager = class {
  constructor(actionsRegistry) {
    this.actionsRegistry = actionsRegistry;
    this.mappings = /* @__PURE__ */ new Map();
  }
  /**
   * Erstellt einen Key für die Mapping-Registry
   */
  createMappingKey(context, eventType, contextId) {
    if (contextId) {
      return `${context}:${contextId}:${eventType}`;
    }
    return `${context}:${eventType}`;
  }
  /**
   * Registriert ein Event-Action-Mapping
   */
  registerMapping(mapping) {
    const key = this.createMappingKey(mapping.context, mapping.eventType, mapping.contextId);
    if (!this.mappings.has(key)) {
      this.mappings.set(key, []);
    }
    this.mappings.get(key).push(mapping);
    log$1("Registered event-action mapping: %s -> %s", key, mapping.actionName);
    if (this.onMappingsChangedCallback) {
      this.onMappingsChangedCallback();
    }
  }
  /**
   * Entfernt ein Event-Action-Mapping
   */
  unregisterMapping(mappingId) {
    for (const [key, mappings] of this.mappings.entries()) {
      const index = mappings.findIndex((m2) => m2.id === mappingId);
      if (index !== -1) {
        mappings.splice(index, 1);
        if (mappings.length === 0) {
          this.mappings.delete(key);
        }
        log$1("Unregistered event-action mapping: %s", mappingId);
        return;
      }
    }
  }
  /**
   * Registriert einen Callback der aufgerufen wird wenn Mappings geändert werden
   */
  onMappingsChanged(callback) {
    this.onMappingsChangedCallback = callback;
  }
  /**
   * Setzt alle Mappings (z.B. nach Laden aus Storage)
   */
  setAllMappings(mappings) {
    this.mappings.clear();
    for (const mapping of mappings) {
      const key = this.createMappingKey(mapping.context, mapping.eventType, mapping.contextId);
      if (!this.mappings.has(key)) {
        this.mappings.set(key, []);
      }
      this.mappings.get(key).push(mapping);
    }
    if (this.onMappingsChangedCallback) {
      this.onMappingsChangedCallback();
      log$1("Notified listeners about %d loaded mappings", mappings.length);
    }
  }
  /**
   * Wertet Conditions gegen ein Payload aus
   */
  evaluateConditions(conditions, payload) {
    if (!conditions || conditions.length === 0) {
      return true;
    }
    return conditions.every((condition) => {
      if (!condition.prop) {
        return true;
      }
      const payloadValue = this.getNestedProperty(payload, condition.prop);
      const conditionValue = condition.value;
      return this.evaluateComparison(payloadValue, condition.comperator, conditionValue);
    });
  }
  /**
   * Hilfsfunktion zum Zugriff auf verschachtelte Properties (z.B. "location.coordinates.lat")
   */
  getNestedProperty(obj, path) {
    return path.split(".").reduce((current, prop) => {
      return current == null ? void 0 : current[prop];
    }, obj);
  }
  /**
   * Wertet einen Vergleich aus
   */
  evaluateComparison(payloadValue, comperator, conditionValue) {
    const numPayload = Number(payloadValue);
    const numCondition = Number(conditionValue);
    const isNumeric = !isNaN(numPayload) && !isNaN(numCondition);
    switch (comperator) {
      case Comperator.eq:
        return isNumeric ? numPayload === numCondition : payloadValue == conditionValue;
      case Comperator.neq:
        return isNumeric ? numPayload !== numCondition : payloadValue != conditionValue;
      case Comperator.lt:
        return isNumeric ? numPayload < numCondition : payloadValue < conditionValue;
      case Comperator.lte:
        return isNumeric ? numPayload <= numCondition : payloadValue <= conditionValue;
      case Comperator.gt:
        return isNumeric ? numPayload > numCondition : payloadValue > conditionValue;
      case Comperator.gte:
        return isNumeric ? numPayload >= numCondition : payloadValue >= conditionValue;
      default:
        console.warn(`Unknown comperator: ${comperator}`);
        return false;
    }
  }
  /**
   * Baut die Action Arguments basierend auf statischen Args und Payload-Mapping
   */
  buildActionArgs(action, payload) {
    const args = [...action.actionArgs || []];
    if (action.payloadMapping && action.payloadMapping.length > 0) {
      for (const pm of action.payloadMapping) {
        const value = this.getNestedProperty(payload, pm.payloadPath);
        args[pm.argIndex] = value;
        log$1("  Mapped payload.%s -> arg[%d] = %o", pm.payloadPath, pm.argIndex, value);
      }
    }
    return args;
  }
  /**
   * Führt eine einzelne Action aus
   */
  async executeAction(action, payload) {
    const args = this.buildActionArgs(action, payload);
    if (!action.targetContextId) {
      log$1("No targetContextId specified, executing action on all instances");
      await this.actionsRegistry.executeActionOnAll(
        action.actionName,
        ...args
      );
    } else {
      await this.actionsRegistry.executeInstanceAction(
        action.targetContextId,
        action.actionName,
        ...args
      );
    }
  }
  /**
   * Konvertiert ein legacy Mapping (mit actionName) zu ActionDefinition Array
   */
  getActionsFromMapping(mapping) {
    if (mapping.actions && mapping.actions.length > 0) {
      return mapping.actions;
    }
    if (mapping.actionName) {
      return [{
        targetContext: mapping.targetContext,
        targetContextId: mapping.targetContextId,
        actionName: mapping.actionName,
        actionArgs: mapping.actionArgs,
        payloadMapping: mapping.payloadMapping
      }];
    }
    return [];
  }
  /**
   * Verarbeitet ein Event und führt alle passenden Actions aus
   */
  async handleEvent(context, eventType, payload, contextId) {
    const keyWithContext = this.createMappingKey(context, eventType, contextId);
    let mappings = this.mappings.get(keyWithContext) || [];
    if (mappings.length === 0 && contextId) {
      const keyWithoutContext = this.createMappingKey(context, eventType);
      mappings = this.mappings.get(keyWithoutContext) || [];
      log$1("📨 Handling event: %s, no specific mappings, using general mappings: %d", keyWithContext, mappings.length);
    } else {
      log$1("📨 Handling event: %s, found %d mapping(s)", keyWithContext, mappings.length);
    }
    log$1("  Payload: %o", payload);
    for (const mapping of mappings) {
      try {
        if (!this.evaluateConditions(mapping.conditions || [], payload)) {
          log$1("⏭️  Conditions not met for mapping %s, skipping", mapping.id);
          continue;
        }
        const actions = this.getActionsFromMapping(mapping);
        if (actions.length === 0) {
          log$1("⚠️  No actions defined for mapping %s", mapping.id);
          continue;
        }
        log$1("▶️  Executing %d action(s) for mapping %s", actions.length, mapping.id);
        for (const action of actions) {
          log$1("  → Action: %s on %s", action.actionName, action.targetContextId || "all instances");
          await this.executeAction(action, payload);
        }
      } catch (error) {
        log$1("❌ Error executing actions for mapping %s: %o", mapping.id, error);
      }
    }
  }
  /**
   * Gibt alle Mappings zurück
   */
  getAllMappings() {
    const result = [];
    for (const mappings of this.mappings.values()) {
      result.push(...mappings);
    }
    return result;
  }
  /**
   * Gibt Mappings für einen bestimmten Context zurück
   */
  getMappings(context, eventType, contextId) {
    if (eventType) {
      const key = this.createMappingKey(context, eventType, contextId);
      return this.mappings.get(key) || [];
    }
    const result = [];
    const prefix = contextId ? `${context}:${contextId}:` : `${context}:`;
    for (const [key, mappings] of this.mappings.entries()) {
      if (key.startsWith(prefix)) {
        result.push(...mappings);
      }
    }
    return result;
  }
  /**
   * Löscht alle Mappings für einen Context
   */
  clearContext(context, contextId) {
    const keysToDelete = [];
    const prefix = `${context}:${contextId}:`;
    for (const key of this.mappings.keys()) {
      if (key.startsWith(prefix)) {
        keysToDelete.push(key);
      }
    }
    for (const key of keysToDelete) {
      this.mappings.delete(key);
    }
    console.log(`Cleared event mappings for context ${context}:${contextId}`);
  }
  /**
   * Löscht alle Mappings
   */
  clear() {
    this.mappings.clear();
  }
};
EventManager = __decorateClass$2$1([
  injectable(),
  __decorateParam$1(0, inject("EventActionsRegistry"))
], EventManager);
var __getOwnPropDesc$1$1 = Object.getOwnPropertyDescriptor;
var __decorateClass$1$1 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$1$1(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = decorator(result) || result;
  return result;
};
var __decorateParam = (index, decorator) => (target, key) => decorator(target, key, index);
const log = loggerFactory.createLogger("daanse:events:bridge");
let EventBusBridge = class {
  constructor(eventManager, eventRegistry, actionsRegistry) {
    this.eventManager = eventManager;
    this.eventRegistry = eventRegistry;
    this.actionsRegistry = actionsRegistry;
    this.isSetup = false;
    this.registeredListeners = /* @__PURE__ */ new Set();
  }
  /**
   * Richtet die Bridge ein (muss nach Container-Initialisierung aufgerufen werden)
   */
  /**
   * Verbindet die Bruecke mit dem Ereignisbus.
   *
   * Nimmt die ServiceRegistry statt des Inversify-Containers: gebraucht wird
   * daraus nur der Emitter, und ueber die Registry ist er unter seiner
   * String-ID erreichbar.
   */
  setup(services) {
    if (this.isSetup) {
      log("Bridge already setup, skipping");
      return;
    }
    try {
      this.eventBus = services.getRequired("TINY_EMITTER");
      this.eventManager.onMappingsChanged(() => {
        log("📢 EventManager notified about mapping changes, refreshing listeners");
        this.refreshListeners();
      });
      this.setupListeners();
      this.isSetup = true;
      log("✅ EventBus Bridge setup complete");
    } catch (error) {
      log("❌ Failed to setup EventBus Bridge:", error);
    }
  }
  /**
   * Richtet Listener für alle Events ein die Mappings haben (widget, page, system)
   */
  setupListeners() {
    const mappings = this.eventManager.getAllMappings();
    const eventTypes = /* @__PURE__ */ new Set();
    for (const mapping of mappings) {
      if (mapping.context === "widget") {
        const fullEventType = `widget:${mapping.eventType}`;
        eventTypes.add(fullEventType);
      } else if (mapping.context === "page") {
        const fullEventType = `widget:${mapping.eventType}`;
        eventTypes.add(fullEventType);
      } else if (mapping.context === "system") {
        const fullEventType = `system:${mapping.eventType}`;
        eventTypes.add(fullEventType);
      }
    }
    for (const fullEventType of eventTypes) {
      if (this.registeredListeners.has(fullEventType)) {
        continue;
      }
      this.eventBus.on(fullEventType, (data) => {
        log("📨 Received event via EventBus: %s", fullEventType);
        this.handleEvent(fullEventType, data);
      });
      this.registeredListeners.add(fullEventType);
      log("Registered listener for: %s", fullEventType);
    }
    log("✅ Bridge listening to %d event types", this.registeredListeners.size);
  }
  /**
   * Aktualisiert die Listener basierend auf aktuellen Mappings
   * Wird aufgerufen wenn neue Mappings hinzugefügt werden
   */
  refreshListeners() {
    if (!this.isSetup) return;
    this.setupListeners();
  }
  /**
   * Verarbeitet ein Event und leitet es an den EventManager weiter
   * Unterstützt widget, page und system Events
   */
  async handleEvent(fullEventType, data) {
    try {
      const parts = fullEventType.split(":");
      if (parts.length < 2) {
        log("Invalid event format: %s", fullEventType);
        return;
      }
      const context = parts[0];
      if (context === "widget") {
        if (parts.length < 3) {
          log("Invalid widget event format: %s", fullEventType);
          return;
        }
        const widgetType = parts[1];
        const eventType = parts[2];
        const widgetId = data.widgetId;
        const payload = data.payload;
        log("📨 Widget event received: %s from widget %s", fullEventType, widgetId);
        log("  Payload: %o", payload);
        await this.eventManager.handleEvent(
          "widget",
          `${widgetType}:${eventType}`,
          payload,
          widgetId
        );
        const widgetPageId = this.actionsRegistry.getInstancePageId(widgetId);
        if (widgetPageId) {
          log("📨 Also handling as page event for page: %s", widgetPageId);
          await this.eventManager.handleEvent(
            "page",
            `${widgetType}:${eventType}`,
            payload,
            widgetPageId
          );
        }
      } else if (context === "system") {
        const eventType = parts.slice(1).join(":");
        const payload = data.payload || data;
        log("📨 System event received: %s", fullEventType);
        log("  Payload: %o", payload);
        await this.eventManager.handleEvent(
          "system",
          eventType,
          payload
        );
      } else {
        log("Unknown event context: %s", context);
      }
    } catch (error) {
      log("❌ Error handling event:", error);
    }
  }
};
EventBusBridge = __decorateClass$1$1([
  injectable(),
  __decorateParam(0, inject("EventManager")),
  __decorateParam(1, inject("EventRegistry")),
  __decorateParam(2, inject("EventActionsRegistry"))
], EventBusBridge);
const eventModelContent = `<?xml version="1.0" encoding="UTF-8"?>
<!--
/*********************************************************************
* Copyright (c) 2024 Contributors to the Eclipse Foundation.
*
* This program and the accompanying materials are made
* available under the terms of the Eclipse Public License 2.0
* which is available at https://www.eclipse.org/legal/epl-2.0/
*
* SPDX-License-Identifier: EPL-2.0
**********************************************************************/
-->
<ecore:EPackage xmi:version="2.0"
                xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                xmlns:ecore="http://www.eclipse.org/emf/2002/Ecore" name="Events"
                nsURI="http://org.eclipse.daanse.board.app.lib.events" nsPrefix="Events">

    <!-- Abstract Base Payload -->
    <eClassifiers xsi:type="ecore:EClass" name="Payload" abstract="true">
        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
            <details key="documentation" value="Abstract base class for all event payloads."/>
        </eAnnotations>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="eventType" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Type of the event (e.g., 'click_on_thing', 'click_on_datastream')."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="widgetId" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="ID of the widget that emitted this event."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="timestamp" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//ELong">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Unix timestamp when the event was emitted."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="metadata" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EJavaObject" lowerBound="0">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Optional metadata object for additional context."/>
            </eAnnotations>
        </eStructuralFeatures>
    </eClassifiers>

    <!-- Abstract Widget Action Interface -->
    <eClassifiers xsi:type="ecore:EClass" name="WidgetActionInterface" abstract="true">
        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
            <details key="documentation" value="Abstract base class for all widget action interfaces. Widget-specific action interfaces should extend this class."/>
        </eAnnotations>
    </eClassifiers>

    <!-- Abstract System Action Interface -->
    <eClassifiers xsi:type="ecore:EClass" name="SystemActionInterface" abstract="true" eSuperTypes="#//WidgetActionInterface">
        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
            <details key="documentation" value="Abstract base class for all system-level action interfaces. System-specific action interfaces should extend this class."/>
        </eAnnotations>
    </eClassifiers>

    <!-- Abstract Page Action Interface -->
    <eClassifiers xsi:type="ecore:EClass" name="PageActionInterface" abstract="true" eSuperTypes="#//WidgetActionInterface">
        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
            <details key="documentation" value="Abstract base class for all page-level action interfaces. Page-specific action interfaces should extend this class."/>
        </eAnnotations>
    </eClassifiers>

</ecore:EPackage>`;
var __getOwnPropDesc$9 = Object.getOwnPropertyDescriptor;
var __decorateClass$9 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$9(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = decorator(result) || result;
  return result;
};
const EVENTS_NS_URI = "http://org.eclipse.daanse.board.app.lib.events";
let EcoreMetadataService = class {
  constructor() {
    this.modelCache = /* @__PURE__ */ new Map();
    this.resourceSet = this.createResourceSet();
    this.loadEventsModelSync();
  }
  /**
   * Creates a ResourceSet with registered Ecore package
   *
   * EResourceSetImpl registers the Ecore package and the XMI resource
   * factory for the `.ecore` extension in its constructor.
   */
  createResourceSet() {
    return new EResourceSetImpl();
  }
  /**
   * Load the Events model synchronously and register it in the PackageRegistry
   */
  loadEventsModelSync() {
    try {
      const resource = this.createLoadedResource(
        `${EVENTS_NS_URI}/EventModel.ecore`,
        eventModelContent
      );
      const contents = resource.getContents();
      if (contents.size() > 0) {
        const eventsPackage = contents.get(0);
        this.registerPackage(eventsPackage);
        console.log("✅ Loaded and registered Events model package with nsURI:", eventsPackage.getNsURI());
      }
    } catch (error) {
      console.error("❌ Failed to load Events model:", error);
    }
  }
  /**
   * Create a resource for the given URI and load the XMI content into it.
   *
   * `loadFromString` is optional on the Resource interface — only the XMI
   * resource implementation provides it. The resource factory registered for
   * `.ecore` returns one, so a missing method means the URI did not resolve to
   * an XMI resource and the caller needs to know.
   */
  createLoadedResource(uri, content) {
    const resource = this.resourceSet.createResource(URI.createURI(uri));
    if (typeof resource.loadFromString !== "function") {
      throw new Error(
        `Resource for "${uri}" does not support loading from a string; expected an XMI resource.`
      );
    }
    resource.loadFromString(content);
    return resource;
  }
  /**
   * Register an EPackage in the ResourceSet's package registry under its nsURI
   */
  registerPackage(pkg) {
    const nsURI = pkg.getNsURI();
    if (nsURI) {
      this.resourceSet.getPackageRegistry().set(nsURI, pkg);
    }
  }
  /**
   * Get the ResourceSet instance
   */
  getResourceSet() {
    return this.resourceSet;
  }
  /**
   * Load an Ecore model from a URI string
   */
  async loadModel(widgetType, ecoreUri) {
    try {
      const data = await fetch(ecoreUri);
      const dataAsText = await data.text();
      await this.loadModelFromString(widgetType, dataAsText, ecoreUri);
    } catch (error) {
      console.error(`Failed to load Ecore model from ${ecoreUri}:`, error);
      throw error;
    }
  }
  /**
   * Load an Ecore model from a string
   */
  async loadModelFromString(widgetType, ecoreContent, uri = "model.ecore") {
    try {
      const resource = this.createLoadedResource(uri, ecoreContent);
      const contents = resource.getContents();
      if (contents.size() > 0) {
        const pkg = contents.get(0);
        this.modelCache.set(widgetType, pkg);
        console.log(`✅ Loaded Ecore model for widget type "${widgetType}" from ${uri}`);
      }
    } catch (error) {
      console.error(`Failed to parse Ecore model for ${widgetType}:`, error);
      throw error;
    }
  }
  /**
   * Register an already loaded EPackage for a widget type
   */
  registerModel(widgetType, ecorePackage) {
    this.modelCache.set(widgetType, ecorePackage);
  }
  /**
   * Extract action metadata from an Ecore model
   */
  extractActions(widgetType) {
    const pkg = this.modelCache.get(widgetType);
    if (!pkg) {
      console.warn(`No Ecore model registered for widget type "${widgetType}"`);
      return [];
    }
    const actions = [];
    const classifiers = pkg.getEClassifiers();
    for (let i2 = 0; i2 < classifiers.size(); i2++) {
      const classifier = classifiers.get(i2);
      if (isEClass(classifier)) {
        const eClass = classifier;
        const isWidgetActionInterface = this.extendsWidgetActionInterface(eClass);
        if (!isWidgetActionInterface) {
          continue;
        }
        const operations = eClass.getEOperations();
        for (let j2 = 0; j2 < operations.length; j2++) {
          const operation = operations[j2];
          const operationName = operation.getName();
          const widgetActionAnnotation = operation.getEAnnotation(
            "org.eclipse.daanse.board.app.lib.events/WidgetAction"
          );
          if (widgetActionAnnotation) {
            const eventType = this.getAnnotationDetail(widgetActionAnnotation, "eventType");
            const parameters = [];
            const eParameters = operation.getEParameters();
            for (let k2 = 0; k2 < eParameters.length; k2++) {
              const param = eParameters[k2];
              const paramType = param.getEType();
              const tsType = this.mapEcoreTypeToTS(paramType);
              const actionParamAnnotation = param.getEAnnotation(
                "org.eclipse.daanse.board.app.lib.events/ActionParameter"
              );
              const lowerBound = param.getLowerBound();
              let optional = lowerBound === 0;
              if (actionParamAnnotation) {
                const optionalDetail = this.getAnnotationDetail(actionParamAnnotation, "optional");
                if (optionalDetail === "true") {
                  optional = true;
                }
              }
              parameters.push({
                name: param.getName() || `arg${k2}`,
                type: tsType,
                optional,
                index: k2
              });
            }
            actions.push({
              methodName: operationName || `action${j2}`,
              eventType: eventType || `${widgetType}.${operationName}`,
              parameters
            });
          }
        }
      }
    }
    console.log(`📝 Extracted ${actions.length} actions from Ecore model for "${widgetType}":`, actions);
    return actions;
  }
  /**
   * Get annotation detail value by key
   */
  getAnnotationDetail(annotation, key) {
    return annotation.getDetails().getByKey(key) || void 0;
  }
  /**
   * Extract payload metadata from an Ecore model by class name
   */
  extractPayloadMetadata(widgetType, payloadClassName) {
    const pkg = this.modelCache.get(widgetType);
    if (!pkg) {
      console.warn(`No Ecore model registered for widget type "${widgetType}"`);
      return null;
    }
    const classifiers = pkg.getEClassifiers();
    for (let i2 = 0; i2 < classifiers.size(); i2++) {
      const classifier = classifiers.get(i2);
      if (isEClass(classifier)) {
        const eClass = classifier;
        if (eClass.getName() === payloadClassName) {
          const properties = [];
          const features = eClass.getEAllStructuralFeatures();
          for (let j2 = 0; j2 < features.length; j2++) {
            const feature = features[j2];
            const featureName = feature.getName();
            const featureType = feature.getEType();
            const lowerBound = feature.getLowerBound();
            const upperBound = feature.getUpperBound();
            let tsType = this.mapEcoreTypeToTS(featureType);
            if (upperBound > 1 || upperBound === -1) {
              tsType += "[]";
            }
            const optional = lowerBound === 0;
            properties.push({
              name: featureName,
              type: tsType,
              optional
            });
          }
          return {
            className: payloadClassName,
            properties
          };
        }
      }
    }
    console.warn(`Payload class "${payloadClassName}" not found in Ecore model for "${widgetType}"`);
    return null;
  }
  /**
   * Check if an EClass extends WidgetActionInterface
   */
  extendsWidgetActionInterface(eClass) {
    var _a;
    const superTypes = eClass.getESuperTypes();
    for (let i2 = 0; i2 < superTypes.length; i2++) {
      const superType = superTypes[i2];
      const superTypeName = superType.getName();
      const superTypeNsURI = ((_a = superType.getEPackage()) == null ? void 0 : _a.getNsURI()) ?? null;
      if (superTypeName === "WidgetActionInterface" && superTypeNsURI === EVENTS_NS_URI) {
        return true;
      }
      if (this.extendsWidgetActionInterface(superType)) {
        return true;
      }
    }
    return false;
  }
  /**
   * Map Ecore data types to TypeScript types
   */
  mapEcoreTypeToTS(eType) {
    if (!eType) return "any";
    const name = eType.getName();
    const typeName = name ? name : String(eType);
    const typeMap = {
      "EString": "string",
      "EInt": "number",
      "EDouble": "number",
      "EFloat": "number",
      "EBoolean": "boolean",
      "EDate": "Date",
      "EBigInteger": "number",
      "EBigDecimal": "number",
      "ELong": "number",
      "EShort": "number",
      "EByte": "number",
      "EChar": "string",
      "EByteArray": "Uint8Array",
      "EJavaObject": "any"
    };
    return typeMap[typeName] || typeName;
  }
  /**
   * Clear all cached models
   */
  clear() {
    this.modelCache.clear();
  }
};
EcoreMetadataService = __decorateClass$9([
  W()
], EcoreMetadataService);
loggerFactory.createLogger("daanse:events:registry");
var __defProp$2 = Object.defineProperty;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$2 = (obj, key, value) => __defNormalProp$2(obj, typeof key !== "symbol" ? key + "" : key, value);
var __defProp2$1 = Object.defineProperty;
var __getOwnPropDesc$4 = Object.getOwnPropertyDescriptor;
var __decorateClass$6 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$4(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp2$1(target, key, result);
  return result;
};
let VariableRepository = class {
  constructor() {
    __publicField$2(this, "availableVariables", /* @__PURE__ */ new Map());
    __publicField$2(this, "availableVariablesByScope", /* @__PURE__ */ new Map());
    __publicField$2(this, "availableVariablesTypes", /* @__PURE__ */ new Map());
    __publicField$2(this, "tinyEmitter");
  }
  registerVariableType(type, identifiers2) {
    if (this.availableVariablesTypes.has(type)) {
      throw Error("Multiple registration of the same variable type");
    }
    this.availableVariablesTypes.set(type, identifiers2);
  }
  /**
   * Nimmt die Registrierung eines Variablentyps zurück.
   *
   * Gegenstück zu registerVariableType, damit ein Modul seine Registrierung
   * in deactivate() wieder aufheben kann. Betrifft nur den Typ; angelegte
   * Variablen werden über removeVariable entfernt.
   *
   * @returns ob der Typ registriert war
   */
  unregisterVariableType(type) {
    return this.availableVariablesTypes.delete(type);
  }
  getRegisteredVariableTypes() {
    return Array.from(this.availableVariablesTypes.keys());
  }
  getVariableIdentifiers(type) {
    return this.availableVariablesTypes.get(type);
  }
  registerVariable(name, type, config) {
    const identifiers2 = this.availableVariablesTypes.get(type);
    if (identifiers2) {
      const variableFactory = container.get(identifiers2.Variable);
      const variable = variableFactory(name, config);
      const scope = config.scope || "global";
      const scopeKey = config.pageId && scope === "page" ? `${scope}-${config.pageId}` : scope;
      if (!this.availableVariablesByScope.has(scopeKey)) {
        this.availableVariablesByScope.set(scopeKey, /* @__PURE__ */ new Map());
      }
      this.availableVariablesByScope.get(scopeKey).set(name, variable);
      if (!config.scope || config.scope === "global") {
        this.availableVariables.set(name, variable);
      }
    }
  }
  getVariable(name) {
    for (const [scopeKey, scopeMap] of this.availableVariablesByScope.entries()) {
      if (scopeMap.has(name)) {
        return scopeMap.get(name);
      }
    }
    if (this.availableVariables.has(name)) {
      return this.availableVariables.get(name);
    }
    return void 0;
  }
  getVariableWithContext(name, pageId) {
    if (pageId) {
      const pageScopeKey = `page-${pageId}`;
      const pageScope = this.availableVariablesByScope.get(pageScopeKey);
      if (pageScope && pageScope.has(name)) {
        return pageScope.get(name);
      }
    }
    const globalScope = this.availableVariablesByScope.get("global");
    if (globalScope && globalScope.has(name)) {
      return globalScope.get(name);
    }
    return this.availableVariables.get(name);
  }
  getVariableById(id) {
    for (const scopeMap of this.availableVariablesByScope.values()) {
      for (const variable of scopeMap.values()) {
        if (variable.id === id) {
          return variable;
        }
      }
    }
    for (const variable of this.availableVariables.values()) {
      if (variable.id === id) {
        return variable;
      }
    }
    return void 0;
  }
  removeVariable(nameOrId) {
    let variableToRemove = this.getVariableById(nameOrId);
    let nameToRemove = nameOrId;
    if (variableToRemove) {
      nameToRemove = variableToRemove.name;
      const scope = variableToRemove.scope || "global";
      const scopeKey = variableToRemove.pageId && scope === "page" ? `page-${variableToRemove.pageId}` : scope;
      const scopeMap = this.availableVariablesByScope.get(scopeKey);
      if (scopeMap) {
        scopeMap.delete(nameToRemove);
      }
    }
    if (this.availableVariables.has(nameToRemove)) {
      this.availableVariables.delete(nameToRemove);
    }
  }
  getAllVariables() {
    const allVariables = /* @__PURE__ */ new Map();
    for (const [scopeKey, scopeMap] of this.availableVariablesByScope.entries()) {
      for (const [name, variable] of scopeMap) {
        allVariables.set(variable.id, [variable.name, variable]);
      }
    }
    for (const [name, variable] of this.availableVariables) {
      if (variable.id && !allVariables.has(variable.id)) {
        allVariables.set(variable.id, [name, variable]);
      }
    }
    return Array.from(allVariables.values());
  }
  renameVariable(newname, oldname) {
    let avar = null;
    let foundScopeKey = null;
    for (const [scopeKey, scopeMap] of this.availableVariablesByScope.entries()) {
      if (scopeMap.has(oldname)) {
        avar = scopeMap.get(oldname);
        foundScopeKey = scopeKey;
        break;
      }
    }
    if (!avar) {
      avar = this.availableVariables.get(oldname);
      if (avar) {
        foundScopeKey = "old-system";
      }
    }
    if (avar && foundScopeKey) {
      if (foundScopeKey !== "old-system") {
        const scopeMap = this.availableVariablesByScope.get(foundScopeKey);
        if (scopeMap) {
          scopeMap.set(newname, avar);
          scopeMap.delete(oldname);
        }
      }
      if (this.availableVariables.has(oldname)) {
        this.availableVariables.set(newname, avar);
        this.availableVariables.delete(oldname);
      }
    }
  }
  renameVariableById(id, newname) {
    let avar = null;
    let foundScopeKey = null;
    let oldname = null;
    for (const [scopeKey, scopeMap] of this.availableVariablesByScope.entries()) {
      for (const [name, variable] of scopeMap) {
        if (variable.id === id) {
          avar = variable;
          foundScopeKey = scopeKey;
          oldname = name;
          break;
        }
      }
      if (avar) break;
    }
    if (!avar) {
      for (const [name, variable] of this.availableVariables) {
        if (variable.id === id) {
          avar = variable;
          foundScopeKey = "old-system";
          oldname = name;
          break;
        }
      }
    }
    if (avar && foundScopeKey && oldname) {
      if (foundScopeKey !== "old-system") {
        const scopeMap = this.availableVariablesByScope.get(foundScopeKey);
        if (scopeMap) {
          scopeMap.set(newname, avar);
          scopeMap.delete(oldname);
        }
      }
      if (this.availableVariables.has(oldname)) {
        this.availableVariables.set(newname, avar);
        this.availableVariables.delete(oldname);
      }
    }
  }
  getVariablesByScope(scope, pageId) {
    const allVars = Array.from(this.availableVariables);
    return allVars.filter(([name, variable]) => {
      if (scope === "global") {
        return variable.scope === "global";
      } else {
        return variable.scope === "page" && variable.pageId === pageId;
      }
    });
  }
  getVariableWithPageContext(pageId, name) {
    const pageVar = this.getVariablesByScope("page", pageId).find(([varName]) => varName === name);
    if (pageVar) {
      return pageVar[1];
    }
    return this.getVariable(name);
  }
  /**
   * Sets or updates a global variable (Action method)
   */
  setGlobalVariable(variableName, value) {
    const existingVar = this.getVariable(variableName);
    if (existingVar) {
      existingVar.value = value;
    } else {
      this.registerVariable(variableName, "constant", {
        value,
        scope: "global"
      });
    }
  }
  /**
   * Sets or updates a page-scoped variable (Action method)
   */
  setPageVariable(variableName, value, pageId) {
    const existingVar = this.getVariableWithContext(variableName, pageId);
    if (existingVar && typeof existingVar.set === "function") {
      existingVar.set(value);
    } else if (existingVar) {
      existingVar.value = value;
    } else {
      this.registerVariable(variableName, "constant", {
        value,
        scope: "page",
        pageId
      });
    }
  }
};
__decorateClass$6([
  inject("TINY_EMITTER")
], VariableRepository.prototype, "tinyEmitter", 2);
VariableRepository = __decorateClass$6([
  injectable()
], VariableRepository);
loggerFactory.createLogger("daanse:variable:actions");
const VARIABLE_REPOSITORY = "VariableRepository";
const identifier$1 = Symbol.for(VARIABLE_REPOSITORY);
const PAGE_CONTEXT = "PageContext";
const identifier = Symbol.for(PAGE_CONTEXT);
const byteToHex = [];
for (let i2 = 0; i2 < 256; ++i2) {
  byteToHex.push((i2 + 256).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}
const rnds8 = new Uint8Array(16);
function rng() {
  return crypto.getRandomValues(rnds8);
}
function v4(options, buf, offset) {
  if (crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return _v4(options);
}
function _v4(options, buf, offset) {
  options = options || {};
  const rnds = options.random ?? options.rng?.() ?? rng();
  if (rnds.length < 16) {
    throw new Error("Random bytes length must be >= 16");
  }
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  return unsafeStringify(rnds);
}
var __defProp$1 = Object.defineProperty;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$1 = (obj, key, value) => __defNormalProp$1(obj, typeof key !== "symbol" ? key + "" : key, value);
class AccessError extends Error {
  constructor(name) {
    super();
    __publicField$1(this, "name");
    __publicField$1(this, "message", "Access Error on Variable Scope");
    this.name = name;
  }
}
var __defProp$1$1 = Object.defineProperty;
var __decorateClass$5 = (decorators, target, key, kind) => {
  var result = void 0;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = decorator(target, key, result) || result;
  if (result) __defProp$1$1(target, key, result);
  return result;
};
class Variable {
  constructor() {
    __publicField$1(this, "subscribers", []);
    __publicField$1(this, "innerValue");
    __publicField$1(this, "intervalFn", () => {
    });
    __publicField$1(this, "description", "");
    __publicField$1(this, "refreshInterval", 0);
    __publicField$1(this, "refreshType", RefreshType.None);
    __publicField$1(this, "refreshIntervalId", 0);
    __publicField$1(this, "refreshTrigger", null);
    __publicField$1(this, "id", v4());
    __publicField$1(this, "type", null);
    __publicField$1(this, "name", null);
    __publicField$1(this, "scope", "global");
    __publicField$1(this, "accessMode", "external-writable");
    __publicField$1(this, "pageId");
    __publicField$1(this, "eventBus");
    __publicField$1(this, "pageContextService");
    __publicField$1(this, "storage");
  }
  init(name, config) {
    this.name = name;
    this.scope = config.scope || "global";
    this.accessMode = config.accessMode || "external-writable";
    this.pageId = config.pageId;
    this.update(config);
  }
  rename(newName) {
    this.name = newName;
  }
  update(config) {
    var _a, _b;
    this.description = config.description;
    this.refreshInterval = config.refreshInterval || 0;
    this.refreshInterval = Math.max(this.refreshInterval, 300);
    this.refreshType = config.refreshType || RefreshType.None;
    this.refreshTrigger = config.refreshTrigger || null;
    if (this.refreshType === RefreshType.Interval) {
      if (this.refreshInterval) {
        this.refreshIntervalId = setInterval(() => {
          this.intervalFn();
        }, this.refreshInterval);
      }
    } else if (this.refreshType === RefreshType.Trigger) {
      if (this.refreshTrigger) {
        (_a = this.eventBus) == null ? void 0 : _a.on(this.refreshTrigger, () => {
          this.intervalFn();
        });
      }
    }
    (_b = this.eventBus) == null ? void 0 : _b.emit(VariableEvents.VariableUpdated);
  }
  set onInterval(onInterval) {
    this.intervalFn = onInterval;
  }
  get value() {
    var _a;
    const currentPageId = (_a = this.pageContextService) == null ? void 0 : _a.getCurrentPageId();
    if (this.scope == "page" && currentPageId != this.pageId && this.accessMode == "page-only") {
      throw new AccessError(this.name);
    }
    return this.innerValue;
  }
  set value(value) {
    var _a;
    const currentPageId = (_a = this.pageContextService) == null ? void 0 : _a.getCurrentPageId();
    if (this.scope == "page" && currentPageId != this.pageId && this.accessMode == "page-only") {
      throw new AccessError(this.name);
    }
    if (this.accessMode == "readonly") {
      throw new AccessError(this.name);
    }
    console.log("Setting value, current page:", currentPageId);
    this.innerValue = value;
    console.log("Value changed");
    console.log(this.subscribers[0]);
    this.subscribers.forEach((subscriber) => subscriber());
  }
  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }
  unsubscribe(subscriber) {
    this.subscribers = this.subscribers.filter((sub) => sub !== subscriber);
  }
  getSubscriptions() {
    return this.subscribers;
  }
  notyfy() {
    var _a;
    (_a = this.eventBus) == null ? void 0 : _a.emit(VariableEvents.VariableUpdated);
    this.subscribers.forEach((subscriber) => subscriber());
  }
  forceUpdate() {
  }
  clearInterval() {
    clearInterval(this.refreshIntervalId);
  }
  clearTrigger() {
    var _a;
    if (this.refreshTrigger) {
      (_a = this.eventBus) == null ? void 0 : _a.off(this.refreshTrigger);
    }
  }
  canWriteFromPage() {
    return this.accessMode === "page-only" || this.accessMode === "external-writable";
  }
  canWriteFromExternal() {
    return this.accessMode === "external-writable";
  }
  serialize() {
    const ret = {
      id: this.id,
      name: this.name,
      description: this.description,
      refreshType: this.refreshType,
      refreshInterval: this.refreshInterval ?? void 0,
      type: this.type,
      scope: this.scope,
      accessMode: this.accessMode,
      pageId: this.pageId
    };
    return ret;
  }
}
__decorateClass$5([
  U(identifiers$1.TINY_EMITTER)
], Variable.prototype, "eventBus");
__decorateClass$5([
  U(identifier)
], Variable.prototype, "pageContextService");
var __getOwnPropDesc$3 = Object.getOwnPropertyDescriptor;
var __decorateClass$4 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$3(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = decorator(result) || result;
  return result;
};
const TYPE$3 = "ComputedVariable";
const symbol$5 = Symbol.for(TYPE$3);
let ComputedVariable = class extends Variable {
  constructor() {
    super(...arguments);
    __publicField$1(this, "innerExpression", "");
    __publicField$1(this, "type", TYPE$3);
  }
  init(name, config) {
    super.init(name, config);
    this.innerExpression = config.expression;
    this.initSubscriptions();
  }
  update(config) {
    super.update(config);
    this.expression = config.expression;
    this.initSubscriptions();
  }
  get expression() {
    return this.innerExpression;
  }
  set expression(expression) {
    this.innerExpression = expression;
    this.initSubscriptions();
  }
  // TODO: Think if the inner value is necessary
  get value() {
    try {
      return this.computeValue();
    } catch (e2) {
      return `Incorrect expression: ${this.innerExpression}`;
    }
  }
  getDependencies() {
    const regexp = /\$(\S+)*/gm;
    const dependencies = [];
    let m2;
    while ((m2 = regexp.exec(this.innerExpression)) !== null) {
      if (m2.index === regexp.lastIndex) {
        regexp.lastIndex++;
      }
      dependencies.push(m2[1]);
    }
    return dependencies;
  }
  computeValue() {
    const dependencies = this.getDependencies();
    let result = this.innerExpression;
    dependencies.forEach((dep) => {
      var _a, _b, _c, _d, _e, _f;
      result = result.replace(
        `$${dep}`,
        typeof ((_b = (_a = this.storage) == null ? void 0 : _a.getVariable(dep)) == null ? void 0 : _b.value) === "number" ? (_d = (_c = this.storage) == null ? void 0 : _c.getVariable(dep)) == null ? void 0 : _d.value : `'${(_f = (_e = this.storage) == null ? void 0 : _e.getVariable(dep)) == null ? void 0 : _f.value}'`
      );
    });
    const execFn = new Function(`return ${result}`);
    return execFn();
  }
  initSubscriptions() {
    const dependencies = this.getDependencies();
    dependencies.forEach((dep) => {
      var _a;
      console.log(dep);
      const depencencyVariable = (_a = this.storage) == null ? void 0 : _a.getVariable(dep);
      if (depencencyVariable) {
        depencencyVariable.subscribe(() => {
          console.log("dep changed", dep);
          this.notyfy();
          console.log("Variable changed");
        });
      } else {
        console.log("dep pending:", dep);
      }
    });
  }
  serialize() {
    const ret = super.serialize();
    ret.value = this.value;
    ret.expression = this.innerExpression;
    ret.type = this.type;
    return ret;
  }
};
ComputedVariable = __decorateClass$4([
  Z({
    extendProperties: true
  })
], ComputedVariable);
if (!container.isBound(ComputedVariable)) {
  container.bind(ComputedVariable).toSelf().inTransientScope();
}
if (!container.isBound(symbol$5)) {
  container.bind(symbol$5).toFactory(() => {
    return (name, config) => {
      const variable = container.get(ComputedVariable);
      variable.init(name, config);
      return variable;
    };
  });
}
const TYPE$2 = "ConstantVariable";
const symbol$4 = Symbol.for(TYPE$2);
class ConstantVariable extends Variable {
  constructor() {
    super(...arguments);
    __publicField$1(this, "type", TYPE$2);
  }
  init(name, config) {
    super.init(name, config);
    this.value = config.value;
  }
  update(config) {
    super.update(config);
    this.value = config.value;
  }
  get value() {
    return super.value;
  }
  set value(value) {
    super.value = value;
  }
  serialize() {
    const ret = super.serialize();
    ret.value = this.value;
    ret.type = this.type;
    return ret;
  }
}
if (!container.isBound(ConstantVariable)) {
  container.bind(ConstantVariable).toSelf().inTransientScope();
}
if (!container.isBound(symbol$4)) {
  container.bind(symbol$4).toFactory(() => {
    return (name, config) => {
      const variable = container.get(ConstantVariable);
      variable.init(name, config);
      return variable;
    };
  });
}
var __getOwnPropDesc$2 = Object.getOwnPropertyDescriptor;
var __decorateClass$3 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$2(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = decorator(result) || result;
  return result;
};
const symbol$3 = Symbol.for("QueryVariable");
let QueryVariable = class extends Variable {
  constructor() {
    super(...arguments);
    __publicField$1(this, "innerQueryParam", "");
    __publicField$1(this, "type", "query");
  }
  init(name, config) {
    super.init(name, config);
    this.parameter = config.queryParam;
  }
  get parameter() {
    return this.innerQueryParam;
  }
  set parameter(parameter) {
    this.innerQueryParam = parameter;
    const paramValue = new URLSearchParams(window.location.search).get(
      this.innerQueryParam
    );
    super.value = paramValue;
  }
  get value() {
    return super.value;
  }
};
QueryVariable = __decorateClass$3([
  Z({
    extendProperties: true
  })
], QueryVariable);
if (!container.isBound(QueryVariable)) {
  container.bind(QueryVariable).toSelf().inTransientScope();
}
if (!container.isBound(symbol$3)) {
  container.bind(symbol$3).toFactory(() => {
    return (name, config) => {
      const variable = container.get(QueryVariable);
      variable.init(name, config);
      return variable;
    };
  });
}
var __getOwnPropDesc$1 = Object.getOwnPropertyDescriptor;
var __decorateClass$2 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$1(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = decorator(result) || result;
  return result;
};
const symbol$2 = Symbol.for("RequestVariable");
let RequestVariable = class extends Variable {
  constructor() {
    super(...arguments);
    __publicField$1(this, "innerRequest", "");
    __publicField$1(this, "type", "request");
    __publicField$1(this, "time", 0);
  }
  init(name, config) {
    super.init(name, config);
    this.request = config.request;
    super.onInterval = () => {
      this.request = config.request;
    };
  }
  get request() {
    return this.innerRequest;
  }
  set request(request) {
    this.innerRequest = request;
    fetch(this.innerRequest).then((response) => response.json()).then((data) => {
      super.value = data;
    });
  }
  get value() {
    return JSON.stringify(super.value);
  }
  set value(value) {
  }
};
RequestVariable = __decorateClass$2([
  Z({
    extendProperties: true
  })
], RequestVariable);
if (!container.isBound(RequestVariable)) {
  container.bind(RequestVariable).toSelf().inTransientScope();
}
if (!container.isBound(symbol$2)) {
  container.bind(symbol$2).toFactory(() => {
    return (name, config) => {
      const variable = container.get(RequestVariable);
      variable.init(name, config);
      return variable;
    };
  });
}
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass$1 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = decorator(result) || result;
  return result;
};
const symbol$1 = Symbol.for("TimeVariable");
let TimeVariable = class extends Variable {
  constructor() {
    super(...arguments);
    __publicField$1(this, "type", "time");
  }
  init(name, config) {
    super.init(name, config);
    super.value = Date.now();
    super.onInterval = () => {
      super.value = Date.now();
    };
  }
  get value() {
    return super.value;
  }
  set value(value) {
  }
};
TimeVariable = __decorateClass$1([
  Z({
    extendProperties: true
  })
], TimeVariable);
if (!container.isBound(TimeVariable)) {
  container.bind(TimeVariable).toSelf().inTransientScope();
}
if (!container.isBound(symbol$1)) {
  container.bind(symbol$1).toFactory(() => {
    return (name, config) => {
      const variable = container.get(TimeVariable);
      variable.init(name, config);
      return variable;
    };
  });
}
const TYPE$1 = "DateTimePickerVariable";
const symbol = Symbol.for(TYPE$1);
class DateTimePickerVariable extends Variable {
  constructor() {
    super(...arguments);
    __publicField$1(this, "type", TYPE$1);
    __publicField$1(this, "innerDatetime", "");
  }
  init(name, config) {
    super.init(name, config);
    this.innerDatetime = config.datetime || "";
  }
  update(config) {
    super.update(config);
    this.innerDatetime = config.datetime || "";
  }
  get datetime() {
    return this.innerDatetime;
  }
  set datetime(value) {
    this.innerDatetime = value;
    this.notyfy();
  }
  get value() {
    return this.innerDatetime;
  }
  set value(value) {
    this.innerDatetime = value;
    this.notyfy();
  }
  serialize() {
    const ret = super.serialize();
    ret.datetime = this.innerDatetime;
    ret.type = this.type;
    return ret;
  }
}
if (!container.isBound(DateTimePickerVariable)) {
  container.bind(DateTimePickerVariable).toSelf().inTransientScope();
}
if (!container.isBound(symbol)) {
  container.bind(symbol).toFactory(() => {
    return (name, config) => {
      const variable = container.get(DateTimePickerVariable);
      variable.init(name, config);
      return variable;
    };
  });
}
var __defProp2 = Object.defineProperty;
var __decorateClass = (decorators, target, key, kind) => {
  var result = void 0;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = decorator(target, key, result) || result;
  if (result) __defProp2(target, key, result);
  return result;
};
class ComputedStoreParameter {
  constructor() {
    __publicField$1(this, "innerExpression", "");
    __publicField$1(this, "currentSubscriptions", /* @__PURE__ */ new Map());
    __publicField$1(this, "refreshCb", () => {
    });
    __publicField$1(this, "eventBus");
    __publicField$1(this, "storage");
  }
  init(expression, refreshCb) {
    var _a, _b, _c, _d, _e;
    this.innerExpression = expression;
    this.refreshCb = refreshCb;
    (_a = this.eventBus) == null ? void 0 : _a.on(VariableEvents.VariableCreated, () => {
      refreshCb();
    });
    (_b = this.eventBus) == null ? void 0 : _b.on(VariableEvents.VariableRemoved, () => {
      refreshCb();
    });
    (_c = this.eventBus) == null ? void 0 : _c.on(VariableEvents.VariableUpdated, () => {
      console.log("Variable updated");
      refreshCb();
    });
    (_d = this.eventBus) == null ? void 0 : _d.on(VariableEvents.VariablesCleared, () => {
      refreshCb();
    });
    (_e = this.eventBus) == null ? void 0 : _e.on(VariableEvents.VariableRemoved, () => {
      refreshCb();
    });
  }
  // Case 1: Static string
  // Case 2: Computed string with variables
  //      - updated when variables change
  //      - updated when variables are added or removed
  getDependencies() {
    const regexp = /\$([a-zA-Z_][\w]*)/g;
    const dependencies = [];
    let m2;
    while ((m2 = regexp.exec(this.innerExpression)) !== null) {
      if (m2.index === regexp.lastIndex) {
        regexp.lastIndex++;
      }
      dependencies.push(m2[1]);
    }
    return dependencies;
  }
  computeValue() {
    const dependencies = this.getDependencies();
    let result = this.innerExpression;
    if (dependencies.length === 0) {
      return result;
    }
    this.currentSubscriptions.forEach((subFn, key) => {
      var _a;
      const variable = (_a = this.storage) == null ? void 0 : _a.getVariable(key);
      if (variable) {
        variable.unsubscribe(subFn);
      }
    });
    this.currentSubscriptions.clear();
    dependencies.forEach((dep) => {
      var _a;
      const variable = (_a = this.storage) == null ? void 0 : _a.getVariable(dep);
      if (variable) {
        const subFn = () => {
          this.refreshCb();
        };
        this.currentSubscriptions.set(dep, subFn);
        variable.subscribe(subFn);
      }
    });
    dependencies.forEach((dep) => {
      var _a;
      const variable = (_a = this.storage) == null ? void 0 : _a.getVariable(dep);
      if (variable && variable.value !== void 0) {
        result = result.replace(
          `$${dep}`,
          typeof variable.value === "number" ? variable.value.toString() : `${variable.value}`
        );
      }
    });
    return result;
  }
  get value() {
    return this.computeValue();
  }
}
__decorateClass([
  U(identifiers$1.TINY_EMITTER)
], ComputedStoreParameter.prototype, "eventBus");
__decorateClass([
  U(identifier$1)
], ComputedStoreParameter.prototype, "storage");
if (!container.isBound(ComputedStoreParameter)) {
  container.bind(ComputedStoreParameter).toSelf().inTransientScope();
}
class UsesComputedVariable {
  constructor() {
    __publicField$1(this, "updateCb", () => {
    });
  }
  setUpdateCb(cb) {
    this.updateCb = cb;
  }
  initVariable(expression) {
    const computedStoreParameter = container.get(
      ComputedStoreParameter
    );
    computedStoreParameter.init(expression, () => {
      this.updateCb();
    });
    return computedStoreParameter;
  }
}
var VariableEvents = /* @__PURE__ */ ((VariableEvents2) => {
  VariableEvents2["VariableUpdated"] = "VariableUpdated";
  VariableEvents2["VariableDeleted"] = "VariableDeleted";
  VariableEvents2["VariableCreated"] = "VariableCreated";
  VariableEvents2["VariablesCleared"] = "VariablesCleared";
  VariableEvents2["VariableRemoved"] = "VariableRemoved";
  return VariableEvents2;
})(VariableEvents || {});
var RefreshType = /* @__PURE__ */ ((RefreshType2) => {
  RefreshType2["None"] = "None";
  RefreshType2["Reactive"] = "Reactive";
  RefreshType2["Interval"] = "Interval";
  RefreshType2["Trigger"] = "Trigger";
  return RefreshType2;
})(RefreshType || {});
class BaseDatasource extends UsesComputedVariable {
  constructor() {
    super(...arguments);
    this.subscribers = [];
    this.pollingInterval = 5e3;
    this.pollingActive = false;
    this.pollingIntervalId = null;
    this.name = "";
    this.type = "";
    this.uid = "";
  }
  init(configuration) {
    this.type = configuration.type;
    this.name = configuration.name;
    this.uid = configuration.uid;
    this.setUpdateCb(() => {
      console.log("Test notify");
      this.notify();
    });
    this.pollingEnabled = configuration.pollingEnabled ?? false;
  }
  subscribe(subscriber) {
    this.subscribers.push(subscriber);
    return () => {
      this.unsubscribe(subscriber);
    };
  }
  unsubscribe(subscriber) {
    this.subscribers = this.subscribers.filter((sub) => sub !== subscriber);
  }
  notify() {
    this.subscribers.forEach((subscriber) => {
      subscriber();
    });
  }
  startPolling(interval) {
    this.stopPolling();
    if (this.pollingActive) return;
    this.pollingActive = true;
    this.pollingInterval = interval;
    this.pollingIntervalId = window.setInterval(async () => {
      if (!this.pollingActive) return;
      try {
        const resp = await this.getOriginalData();
        console.log(resp);
        this.notify();
      } catch (error) {
        console.warn("Polling error", error);
      }
    }, this.pollingInterval);
    console.log("Started polling", this.pollingIntervalId);
  }
  stopPolling() {
    console.log("Stopping polling", this.pollingIntervalId);
    this.pollingActive = false;
    if (this.pollingIntervalId !== null) {
      window.clearInterval(this.pollingIntervalId);
      this.pollingIntervalId = null;
    }
  }
  static validateConfiguration(config) {
    return true;
  }
}
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
class OgcFeatureComposer extends BaseDatasource {
  constructor() {
    super(...arguments);
    __publicField(this, "connectedDatasources", []);
    __publicField(this, "xField", "");
    __publicField(this, "yField", "");
    __publicField(this, "geometryType", "Point");
    __publicField(this, "composeBy", "");
    __publicField(this, "useGeometryFromData", false);
    __publicField(this, "useGeometryFromProps", false);
    __publicField(this, "geometryField", "");
    __publicField(this, "geometryPropsField", "");
  }
  init(configuration) {
    var _a;
    super.init(configuration);
    this.connectedDatasources = configuration.connectedDatasources;
    this.composeBy = configuration.composeBy;
    this.useGeometryFromProps = configuration.useGeometryFromProps ?? false;
    this.useGeometryFromData = configuration.useGeometryFromData ?? false;
    console.log(configuration);
    if (configuration.geometryPropsField) {
      this.geometryPropsField = ((_a = configuration.geometryPropsField) == null ? void 0 : _a.trim()) || "";
    } else if (configuration.geometryField) {
      this.geometryField = configuration.geometryField.trim();
    } else {
      this.xField = configuration.xField.trim();
      this.yField = configuration.yField.trim();
      this.geometryType = configuration.geometryType.trim();
    }
  }
  static validateConfiguration(config) {
    return Array.isArray(config.connectedDatasources);
  }
  async createFeatureCollection() {
    var _a, _b;
    const repo = container.get(identifier$2);
    const datasourcesData = await Promise.all(
      this.connectedDatasources.filter((id) => id).map(async (id) => {
        const datasource = repo.getDatasource(id);
        if (!datasource) return null;
        return await datasource.getData("DataTable");
      })
    );
    const features = [];
    console.log("Datasources data:", datasourcesData);
    if (this.useGeometryFromProps && this.geometryPropsField) {
      for (const data of datasourcesData) {
        if (!data || !Array.isArray(data.items)) continue;
        for (const row of data.items) {
          let geometry = null;
          const caption = row.Caption;
          let property = (_b = (_a = data.rowProperties) == null ? void 0 : _a[caption]) == null ? void 0 : _b[this.geometryPropsField];
          if (Array.isArray(property)) property = property[0];
          if (property) {
            try {
              geometry = JSON.parse(property);
            } catch (e2) {
              console.warn(`Failed to parse geometry from properties field ${this.geometryPropsField}:`, e2);
            }
          }
          features.push({
            type: "Feature",
            geometry,
            properties: { ...row }
          });
        }
      }
      return {
        type: "FeatureCollection",
        features
      };
    }
    if (this.useGeometryFromData && this.geometryField) {
      for (const data of datasourcesData) {
        if (!data || !Array.isArray(data.items)) continue;
        for (const row of data.items) {
          let geometry = null;
          if (row[this.geometryField]) {
            geometry = JSON.parse(row[this.geometryField]);
          }
          features.push({
            type: "Feature",
            geometry,
            properties: { ...row }
          });
        }
      }
      return {
        type: "FeatureCollection",
        features
      };
    }
    for (const data of datasourcesData) {
      if (!data || !Array.isArray(data.items)) continue;
      for (const row of data.items) {
        let geometry = null;
        console.log("Processing row:", row);
        console.log("xField:", this.xField, "yField:", this.yField);
        console.log("row[xField]:", row[this.xField], "row[yField]:", row[this.yField]);
        if (this.xField && this.yField && row[this.xField] != null && row[this.yField] != null) {
          geometry = {
            type: "Point",
            coordinates: [Number(row[this.xField]), Number(row[this.yField])]
          };
        } else if (row.geometry) {
          geometry = row.geometry;
        }
        features.push({
          type: "Feature",
          geometry,
          properties: { ...row }
        });
      }
    }
    return {
      type: "FeatureCollection",
      features
    };
  }
  static async getHeaders(connectedDatasources, datasourceRepository) {
    console.log("Composing headers from", connectedDatasources);
    const data = await Promise.all(
      connectedDatasources.filter((datasourceId) => datasourceId).map(async (datasourceId) => {
        if (!datasourceRepository) {
          throw new Error("DatasourceRepository is not provided to DataSource Classes");
        }
        const datasourceInstance = datasourceRepository.getDatasource(datasourceId);
        return await datasourceInstance.getData("DataTable");
      })
    );
    return data.reduce((acc, table) => {
      table.headers.forEach((header) => {
        if (!acc.includes(header)) {
          acc.push(header);
        }
      });
      return acc;
    }, []);
  }
  static async getProperties(connectedDatasources, datasourceRepository) {
    console.log("Composing properties from", connectedDatasources);
    const data = await Promise.all(
      connectedDatasources.filter((datasourceId) => datasourceId).map(async (datasourceId) => {
        if (!datasourceRepository) {
          throw new Error("DatasourceRepository is not provided to DataSource Classes");
        }
        const datasourceInstance = datasourceRepository.getDatasource(datasourceId);
        return await datasourceInstance.getData("DataTable");
      })
    );
    return data.reduce((acc, table) => {
      if (!table || !table.rowProperties) return acc;
      const rows = Object.keys(table.rowProperties);
      if (rows.length === 0) return acc;
      console.log(rows);
      const keys = Object.keys(table.rowProperties[rows[1]] || table.rowProperties[rows[0]] || {});
      keys.forEach((key) => {
        if (!acc.includes(key)) {
          acc.push(key);
        }
      });
      return acc;
    }, []);
  }
  async getData(type) {
    return this.createFeatureCollection();
  }
  getOriginalData() {
    return null;
  }
  callEvent(event, params) {
    console.warn(`Event '${event}' not supported in OgcFeatureComposer`, params);
  }
  destroy() {
    console.log("Destroying OgcFeatureComposer");
  }
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Settings",
  props: {
    config: {},
    dataSources: {},
    connections: {}
  },
  setup(__props) {
    const datasourcesFiltered = computed(() => {
      return __props.dataSources.filter((ds) => ds.type === "csv" || ds.type === "xmla");
    });
    const headers = ref([]);
    const properties = ref([]);
    const geometryTypes = ["Point"];
    watch(() => __props.config.connectedDatasources, async (newValue) => {
      headers.value = await OgcFeatureComposer.getHeaders(
        newValue,
        container.get(identifier$2)
      );
      properties.value = await OgcFeatureComposer.getProperties(
        newValue,
        container.get(identifier$2)
      );
    });
    return (_ctx, _cache) => {
      const _component_VaSelect = resolveComponent("VaSelect");
      const _component_VaCheckbox = resolveComponent("VaCheckbox");
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_component_VaSelect, {
          modelValue: __props.config.connectedDatasources,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => __props.config.connectedDatasources = $event),
          label: "Sources",
          options: datasourcesFiltered.value,
          multiple: "",
          "text-by": "name",
          "value-by": "uid"
        }, null, 8, ["modelValue", "options"]),
        createVNode(_component_VaCheckbox, {
          modelValue: __props.config.useGeometryFromData,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => __props.config.useGeometryFromData = $event),
          label: "Use geometry from data",
          style: { "margin": "0.5rem 0" }
        }, null, 8, ["modelValue"]),
        __props.config.useGeometryFromData ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createVNode(_component_VaCheckbox, {
            modelValue: __props.config.useGeometryFromProps,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => __props.config.useGeometryFromProps = $event),
            label: "Use geometry from properties",
            style: { "margin": "0.5rem 0" }
          }, null, 8, ["modelValue"]),
          __props.config.useGeometryFromProps ? (openBlock(), createBlock(_component_VaSelect, {
            key: 0,
            modelValue: __props.config.geometryPropsField,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => __props.config.geometryPropsField = $event),
            label: "Geometry properties field",
            options: properties.value
          }, null, 8, ["modelValue", "options"])) : (openBlock(), createBlock(_component_VaSelect, {
            key: 1,
            modelValue: __props.config.geometryField,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => __props.config.geometryField = $event),
            label: "Geometry field",
            options: headers.value
          }, null, 8, ["modelValue", "options"]))
        ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          createVNode(_component_VaSelect, {
            modelValue: __props.config.xField,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => __props.config.xField = $event),
            label: "X Coordinate field",
            options: headers.value
          }, null, 8, ["modelValue", "options"]),
          createVNode(_component_VaSelect, {
            modelValue: __props.config.yField,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => __props.config.yField = $event),
            label: "Y Coordinate field",
            options: headers.value
          }, null, 8, ["modelValue", "options"]),
          createVNode(_component_VaSelect, {
            modelValue: __props.config.geometryType,
            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => __props.config.geometryType = $event),
            label: "Geometry type",
            options: geometryTypes
          }, null, 8, ["modelValue"])
        ], 64))
      ], 64);
    };
  }
});
const OgcComposerIdentifier = Symbol.for("OgcFeatureComposer");
const previewSymbol = Symbol.for("OgcComposerPreview");
const settingsSymbol = Symbol.for("OgcComposerSettings");
function activate({ services }) {
  services.register("OgcComposerPreview", _sfc_main$1);
  services.register("OgcComposerSettings", _sfc_main);
  services.getRequired(DATASOURCE_REPOSITORY).registerDatasourceType("OGC Composer", {
    Store: OgcComposerIdentifier,
    Preview: previewSymbol,
    Settings: settingsSymbol
  });
}
function deactivate({ services }) {
  services.getRequired(DATASOURCE_REPOSITORY).unregisterDatasourceType("OGC Composer");
  services.unregister("OgcComposerPreview");
  services.unregister("OgcComposerSettings");
}
export {
  activate,
  deactivate
};
