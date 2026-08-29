import { PAGE_CONTEXT as B } from "org.eclipse.daanse.board.app.lib.api.pagecontext";
import { VARIABLE_REPOSITORY as A } from "org.eclipse.daanse.board.app.lib.api.variable";
const { serviceId: u, TINY_EMITTER: w } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
class v extends Error {
  name;
  message = "Access Error on Variable Scope";
  constructor(e) {
    super(), this.name = e;
  }
}
const s = [];
for (let t = 0; t < 256; ++t)
  s.push((t + 256).toString(16).slice(1));
function _(t, e = 0) {
  return (s[t[e + 0]] + s[t[e + 1]] + s[t[e + 2]] + s[t[e + 3]] + "-" + s[t[e + 4]] + s[t[e + 5]] + "-" + s[t[e + 6]] + s[t[e + 7]] + "-" + s[t[e + 8]] + s[t[e + 9]] + "-" + s[t[e + 10]] + s[t[e + 11]] + s[t[e + 12]] + s[t[e + 13]] + s[t[e + 14]] + s[t[e + 15]]).toLowerCase();
}
const D = new Uint8Array(16);
function $() {
  return crypto.getRandomValues(D);
}
function q(t, e, r) {
  return crypto.randomUUID ? crypto.randomUUID() : F(t);
}
function F(t, e, r) {
  t = t || {};
  const i = t.random ?? t.rng?.() ?? $();
  if (i.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return i[6] = i[6] & 15 | 64, i[8] = i[8] & 63 | 128, _(i);
}
var g = /* @__PURE__ */ ((t) => (t.Global = "global", t.Page = "page", t))(g || {}), y = /* @__PURE__ */ ((t) => (t.ReadOnly = "readonly", t.PageOnly = "page-only", t.ExternalWritable = "external-writable", t))(y || {});
class l {
  subscribers = [];
  innerValue;
  intervalFn = () => {
  };
  description = "";
  refreshInterval = 0;
  refreshType = o.None;
  refreshIntervalId = 0;
  refreshTrigger = null;
  id = q();
  type = null;
  name = null;
  scope = "global";
  accessMode = "external-writable";
  pageId;
  /*
   * Set by the factory right after construction (see this package's
   * activate) - plain properties, no container involved. Optional: a
   * variable works without an event bus or page context, with fewer
   * features.
   */
  eventBus;
  pageContextService;
  // Removed injection to break circular dependency
  storage;
  init(e, r) {
    this.name = e, this.scope = r.scope || "global", this.accessMode = r.accessMode || "external-writable", this.pageId = r.pageId, this.update(r);
  }
  rename(e) {
    this.name = e;
  }
  update(e) {
    this.description = e.description, this.refreshInterval = e.refreshInterval || 0, this.refreshInterval = Math.max(this.refreshInterval, 300), this.refreshType = e.refreshType || o.None, this.refreshTrigger = e.refreshTrigger || null, this.refreshType === o.Interval ? this.refreshInterval && (this.refreshIntervalId = setInterval(() => {
      this.intervalFn();
    }, this.refreshInterval)) : this.refreshType === o.Trigger && this.refreshTrigger && this.eventBus?.on(this.refreshTrigger, () => {
      this.intervalFn();
    }), this.eventBus?.emit(n.VariableUpdated);
  }
  set onInterval(e) {
    this.intervalFn = e;
  }
  get value() {
    const e = this.pageContextService?.getCurrentPageId();
    if (this.scope == "page" && e != this.pageId && this.accessMode == "page-only")
      throw new v(this.name);
    return this.innerValue;
  }
  set value(e) {
    const r = this.pageContextService?.getCurrentPageId();
    if (this.scope == "page" && r != this.pageId && this.accessMode == "page-only")
      throw new v(this.name);
    if (this.accessMode == "readonly")
      throw new v(this.name);
    console.log("Setting value, current page:", r), this.innerValue = e, console.log("Value changed"), console.log(this.subscribers[0]), this.subscribers.forEach((i) => i());
  }
  subscribe(e) {
    this.subscribers.push(e);
  }
  unsubscribe(e) {
    this.subscribers = this.subscribers.filter((r) => r !== e);
  }
  getSubscriptions() {
    return this.subscribers;
  }
  notyfy() {
    this.eventBus?.emit(n.VariableUpdated), this.subscribers.forEach((e) => e());
  }
  forceUpdate() {
  }
  clearInterval() {
    clearInterval(this.refreshIntervalId);
  }
  clearTrigger() {
    this.refreshTrigger && this.eventBus?.off(this.refreshTrigger);
  }
  canWriteFromPage() {
    return this.accessMode === "page-only" || this.accessMode === "external-writable";
  }
  canWriteFromExternal() {
    return this.accessMode === "external-writable";
  }
  serialize() {
    return {
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
  }
}
const h = u("ComputedVariable"), M = Symbol.for(h);
class V extends l {
  innerExpression = "";
  type = h;
  init(e, r) {
    super.init(e, r), this.innerExpression = r.expression, this.initSubscriptions();
  }
  update(e) {
    super.update(e), this.expression = e.expression, this.initSubscriptions();
  }
  get expression() {
    return this.innerExpression;
  }
  set expression(e) {
    this.innerExpression = e, this.initSubscriptions();
  }
  // TODO: Think if the inner value is necessary
  get value() {
    try {
      return this.computeValue();
    } catch {
      return `Incorrect expression: ${this.innerExpression}`;
    }
  }
  getDependencies() {
    const e = /\$(\S+)*/gm, r = [];
    let i;
    for (; (i = e.exec(this.innerExpression)) !== null; )
      i.index === e.lastIndex && e.lastIndex++, r.push(i[1]);
    return r;
  }
  computeValue() {
    const e = this.getDependencies();
    let r = this.innerExpression;
    return e.forEach((a) => {
      r = r.replace(
        `$${a}`,
        typeof this.storage?.getVariable(a)?.value == "number" ? this.storage?.getVariable(a)?.value : `'${this.storage?.getVariable(a)?.value}'`
      );
    }), new Function(`return ${r}`)();
  }
  initSubscriptions() {
    this.getDependencies().forEach((r) => {
      console.log(r);
      const i = this.storage?.getVariable(r);
      i ? i.subscribe(() => {
        console.log("dep changed", r), this.notyfy(), console.log("Variable changed");
      }) : console.log("dep pending:", r);
    });
  }
  serialize() {
    const e = super.serialize();
    return e.value = this.value, e.expression = this.innerExpression, e.type = this.type, e;
  }
}
function U(t) {
  return (e, r) => {
    const i = new V();
    return i.eventBus = t.eventBus, i.pageContextService = t.pageContextService, i.init(e, r), i;
  };
}
const p = u("ConstantVariable"), L = Symbol.for(p);
class x extends l {
  type = p;
  init(e, r) {
    super.init(e, r), this.value = r.value;
  }
  update(e) {
    super.update(e), this.value = e.value;
  }
  get value() {
    return super.value;
  }
  set value(e) {
    super.value = e;
  }
  serialize() {
    const e = super.serialize();
    return e.value = this.value, e.type = this.type, e;
  }
}
function O(t) {
  return (e, r) => {
    const i = new x();
    return i.eventBus = t.eventBus, i.pageContextService = t.pageContextService, i.init(e, r), i;
  };
}
const N = Symbol.for("QueryVariable");
class I extends l {
  innerQueryParam = "";
  type = "query";
  init(e, r) {
    super.init(e, r), this.parameter = r.queryParam;
  }
  get parameter() {
    return this.innerQueryParam;
  }
  set parameter(e) {
    this.innerQueryParam = e;
    const r = new URLSearchParams(window.location.search).get(
      this.innerQueryParam
    );
    super.value = r;
  }
  get value() {
    return super.value;
  }
}
function Q(t) {
  return (e, r) => {
    const i = new I();
    return i.eventBus = t.eventBus, i.pageContextService = t.pageContextService, i.init(e, r), i;
  };
}
const z = u("QueryVariable"), Y = Symbol.for("RequestVariable");
class f extends l {
  innerRequest = "";
  type = "request";
  time = 0;
  init(e, r) {
    super.init(e, r), this.request = r.request, super.onInterval = () => {
      this.request = r.request;
    };
  }
  get request() {
    return this.innerRequest;
  }
  set request(e) {
    this.innerRequest = e, fetch(this.innerRequest).then((r) => r.json()).then((r) => {
      super.value = r;
    });
  }
  get value() {
    return JSON.stringify(super.value);
  }
  set value(e) {
  }
}
function W(t) {
  return (e, r) => {
    const i = new f();
    return i.eventBus = t.eventBus, i.pageContextService = t.pageContextService, i.init(e, r), i;
  };
}
const k = u("RequestVariable"), j = Symbol.for("TimeVariable");
class E extends l {
  type = "time";
  init(e, r) {
    super.init(e, r), super.value = Date.now(), super.onInterval = () => {
      super.value = Date.now();
    };
  }
  get value() {
    return super.value;
  }
  set value(e) {
  }
}
function G(t) {
  return (e, r) => {
    const i = new E();
    return i.eventBus = t.eventBus, i.pageContextService = t.pageContextService, i.init(e, r), i;
  };
}
const K = u("TimeVariable"), b = u("DateTimePickerVariable"), H = Symbol.for(b);
class S extends l {
  type = b;
  innerDatetime = "";
  init(e, r) {
    super.init(e, r), this.innerDatetime = r.datetime || "";
  }
  update(e) {
    super.update(e), this.innerDatetime = e.datetime || "";
  }
  get datetime() {
    return this.innerDatetime;
  }
  set datetime(e) {
    this.innerDatetime = e, this.notyfy();
  }
  get value() {
    return this.innerDatetime;
  }
  set value(e) {
    this.innerDatetime = e, this.notyfy();
  }
  serialize() {
    const e = super.serialize();
    return e.datetime = this.innerDatetime, e.type = this.type, e;
  }
}
function J(t) {
  return (e, r) => {
    const i = new S();
    return i.eventBus = t.eventBus, i.pageContextService = t.pageContextService, i.init(e, r), i;
  };
}
let d;
function X(t) {
  d = t;
}
function Z() {
  if (!d)
    throw new Error("ComputedStoreParameter factory not provided - is lib.variables active?");
  return d;
}
class ee {
  updateCb = () => {
  };
  constructor() {
  }
  setUpdateCb(e) {
    this.updateCb = e;
  }
  initVariable(e) {
    const r = Z()();
    return r.init(e, () => {
      this.updateCb();
    }), r;
  }
}
class C {
  innerExpression = "";
  currentSubscriptions = /* @__PURE__ */ new Map();
  refreshCb = () => {
  };
  /* Set by the provided factory (see UsesComputedVariable) - plain
   * properties, no container involved. */
  eventBus;
  storage;
  init(e, r) {
    this.innerExpression = e, this.refreshCb = r, this.eventBus?.on(n.VariableCreated, () => {
      r();
    }), this.eventBus?.on(n.VariableRemoved, () => {
      r();
    }), this.eventBus?.on(n.VariableUpdated, () => {
      console.log("Variable updated"), r();
    }), this.eventBus?.on(n.VariablesCleared, () => {
      r();
    }), this.eventBus?.on(n.VariableRemoved, () => {
      r();
    });
  }
  // Case 1: Static string
  // Case 2: Computed string with variables
  //      - updated when variables change
  //      - updated when variables are added or removed
  getDependencies() {
    const e = /\$([a-zA-Z_][\w]*)/g, r = [];
    let i;
    for (; (i = e.exec(this.innerExpression)) !== null; )
      i.index === e.lastIndex && e.lastIndex++, r.push(i[1]);
    return r;
  }
  computeValue() {
    const e = this.getDependencies();
    let r = this.innerExpression;
    return e.length === 0 || (this.currentSubscriptions.forEach((i, a) => {
      const c = this.storage?.getVariable(a);
      c && c.unsubscribe(i);
    }), this.currentSubscriptions.clear(), e.forEach((i) => {
      const a = this.storage?.getVariable(i);
      if (a) {
        const c = () => {
          this.refreshCb();
        };
        this.currentSubscriptions.set(i, c), a.subscribe(c);
      }
    }), e.forEach((i) => {
      const a = this.storage?.getVariable(i);
      a && a.value !== void 0 && (r = r.replace(
        `$${i}`,
        typeof a.value == "number" ? a.value.toString() : `${a.value}`
      ));
    })), r;
  }
  get value() {
    return this.computeValue();
  }
}
const P = "VARIABLEWRAPPER";
class te {
  type = P;
  _value = void 0;
  isSet = !1;
  reference;
  variable = null;
  constructor(e = void 0) {
    this._value = e;
  }
  setTo(e) {
    this.reference = e, e.subscribe(() => {
      console.log("change value"), this.reference && (this._value = this.reference.value);
    }), this._value = this.reference.value, this.variable = this.reference.name, this.isSet = !0;
  }
  get value() {
    return this._value;
  }
  // TODO: Memory leak
  set value(e) {
    this.reference = void 0, this.isSet = !1, this.variable = null, this._value = e;
  }
}
var T = /* @__PURE__ */ ((t) => (t.Constant = "Constant", t.QueryParameter = "Query parameter", t.SystemProperties = "System properties", t.EnvironmentVariables = "Environment variables", t.BrowserProperties = "Browser properties", t.Time = "Time", t.Expression = "Expression", t.AsyncParameters = "Async parameters", t.ComputedString = "Computed String", t))(T || {}), n = /* @__PURE__ */ ((t) => (t.VariableUpdated = "VariableUpdated", t.VariableDeleted = "VariableDeleted", t.VariableCreated = "VariableCreated", t.VariablesCleared = "VariablesCleared", t.VariableRemoved = "VariableRemoved", t))(n || {}), o = /* @__PURE__ */ ((t) => (t.None = "None", t.Reactive = "Reactive", t.Interval = "Interval", t.Trigger = "Trigger", t))(o || {});
function R({ services: t }) {
  const e = {
    eventBus: t.get(w),
    pageContextService: t.get(B)
  };
  t.register(p, O(e)), t.register(h, U(e)), t.register(z, Q(e)), t.register(k, W(e)), t.register(K, G(e)), t.register(b, J(e)), X(() => {
    const r = new C();
    return r.eventBus = e.eventBus, r.storage = t.get(A), r;
  });
}
const re = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  COMPUTED_VARIABLE: h,
  CONSTANT_VARIABLE: p,
  ComputedStoreParameter: C,
  ComputedVariable: V,
  ComputedVariableSymbol: M,
  ConstantVariable: x,
  ConstantVariableSymbol: L,
  DATETIME_PICKER_VARIABLE: b,
  DateTimePickerVariable: S,
  DateTimePickerVariableSymbol: H,
  QueryVariable: I,
  QueryVariableSymbol: N,
  RefreshType: o,
  RequestVariable: f,
  RequestVariableSymbol: Y,
  SourceType: T,
  TimeVariable: E,
  TimeVariableSymbol: j,
  UsesComputedVariable: ee,
  VARIABLEWRAPPER: P,
  Variable: l,
  VariableAccessMode: y,
  VariableEvents: n,
  VariableScope: g,
  VariableWrapper: te,
  activate: R
}, Symbol.toStringTag, { value: "Module" })), m = "org.eclipse.daanse.board.app.lib.variables", ie = "0.0.1-next.1";
async function ne(t) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${m}: tsm runtime is not initialized`);
  e.register(m, re, ie, "lib.variables"), await R?.(t);
}
async function le(t) {
  await void 0;
}
export {
  h as COMPUTED_VARIABLE,
  p as CONSTANT_VARIABLE,
  C as ComputedStoreParameter,
  V as ComputedVariable,
  M as ComputedVariableSymbol,
  x as ConstantVariable,
  L as ConstantVariableSymbol,
  b as DATETIME_PICKER_VARIABLE,
  S as DateTimePickerVariable,
  H as DateTimePickerVariableSymbol,
  I as QueryVariable,
  N as QueryVariableSymbol,
  o as RefreshType,
  f as RequestVariable,
  Y as RequestVariableSymbol,
  T as SourceType,
  E as TimeVariable,
  j as TimeVariableSymbol,
  ee as UsesComputedVariable,
  P as VARIABLEWRAPPER,
  l as Variable,
  y as VariableAccessMode,
  n as VariableEvents,
  g as VariableScope,
  te as VariableWrapper,
  ne as activate,
  le as deactivate
};
