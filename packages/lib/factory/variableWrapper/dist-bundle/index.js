import { injectable as _, inject as b } from "@eclipse-daanse/tsm";
import { VARIABLEWRAPPER as P, VariableWrapper as d } from "org.eclipse.daanse.board.app.lib.variables";
import { VARIABLE_REPOSITORY as g } from "org.eclipse.daanse.board.app.lib.api.variable";
const { serviceId: y } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
var V = Object.getOwnPropertyDescriptor, A = (e, o, s, t) => {
  for (var r = t > 1 ? void 0 : t ? V(o, s) : o, i = e.length - 1, a; i >= 0; i--)
    (a = e[i]) && (r = a(r) || r);
  return r;
}, m = (e, o) => (s, t) => o(s, t, e);
let f = class {
  constructor(e) {
    this.variables = e, this.wrapperTypes = /* @__PURE__ */ new Map();
  }
  /**
   * Registriert einen zusaetzlichen Wrapper-Typ. Eine erneute Registrierung
   * desselben Typs ersetzt die vorherige.
   */
  registerWrapperType(e) {
    this.wrapperTypes.set(e.type, e);
  }
  initilazeVariableWrappers(e) {
    const o = this.findPropertyWithValue(e, "type", P);
    if (o)
      for (const s of o) {
        const t = s.path.split(".");
        t.pop();
        const r = t.join("."), i = this.getValueAtPath(e, t.join("."));
        if (i._value !== void 0 && i._value !== null) {
          const a = new d(i._value);
          if (i.reference && i.reference.name) {
            const n = this.variables.getVariable(i.reference.name);
            a.setTo(n);
          }
          this.setValueAtPath(e, r, a);
        }
      }
    for (const s of this.wrapperTypes.values()) {
      const t = this.findPropertyWithValue(e, "type", s.type);
      if (t)
        for (const r of t) {
          const i = r.path.split(".");
          i.pop();
          const a = i.join("."), n = this.getValueAtPath(e, i.join("."));
          n._value !== void 0 && n._value !== null && this.setValueAtPath(e, a, s.create(n._value));
        }
    }
    return e;
  }
  findPropertyWithValue(e, o, s) {
    const t = [], r = /* @__PURE__ */ new WeakSet();
    function i(a, n) {
      if (Array.isArray(a))
        a.forEach((l, p) => i(l, `${n}[${p}]`));
      else if (typeof a == "object" && a !== null) {
        if (r.has(a))
          return;
        r.add(a);
        for (const l in a) {
          const p = n ? `${n}.${l}` : l;
          l === o && a[l] === s && t.push({ path: p, value: a[l] }), i(a[l], p);
        }
      }
    }
    return i(e, ""), t;
  }
  setValueAtPath(e, o, s) {
    const t = o.replace(/\[(\w+)\]/g, ".$1").replace(/^\./, "").split(".");
    let r = e;
    for (let a = 0; a < t.length - 1; a++) {
      const n = t[a];
      if (!(n in r) || (r = r[n], typeof r != "object" || r === null))
        return !1;
    }
    const i = t[t.length - 1];
    return i in r ? (r[i] = s, !0) : !1;
  }
  getValueAtPath(e, o) {
    const s = o.replace(/\[(\w+)\]/g, ".$1").replace(/^\./, "").split(".");
    let t = e;
    for (const r of s) {
      if (t == null || !(r in t))
        return;
      t = t[r];
    }
    return t;
  }
};
f = A([
  _(),
  m(0, b(g))
], f);
const c = y("VariableWrapperFactory"), w = Symbol.for(c);
function h({ services: e }) {
  e.register(c, e.construct(f));
}
function v({ services: e }) {
  e.unregister(c);
}
const R = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  VARIABLE_WRAPPER_FACTORY: c,
  activate: h,
  deactivate: v,
  identifier: w
}, Symbol.toStringTag, { value: "Module" })), u = "org.eclipse.daanse.board.app.lib.factory.variableWrapper", W = "0.0.1-next.1";
async function $(e) {
  const o = globalThis.__tsm__;
  if (!o)
    throw new Error(`${u}: tsm runtime is not initialized`);
  o.register(u, R, W, "lib.factory.variableWrapper"), await h?.(e);
}
async function I(e) {
  await v?.(e);
}
export {
  c as VARIABLE_WRAPPER_FACTORY,
  $ as activate,
  I as deactivate,
  w as identifier
};
