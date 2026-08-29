import { identifier as I } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { ref as L, computed as N, inject as y, onMounted as D, onUnmounted as C, watch as U, onBeforeUnmount as O } from "vue";
import { identifier as x } from "org.eclipse.daanse.board.app.lib.api.variable";
import { identifier as W } from "org.eclipse.daanse.board.app.lib.api.pagecontext";
import { VariableWrapper as T, VARIABLEWRAPPER as Y } from "org.eclipse.daanse.board.app.lib.variables";
import { VARIABLEWRAPPER as ue, VariableWrapper as ce } from "org.eclipse.daanse.board.app.lib.variables";
import { BasicEObject as M, BasicEFactory as G, BasicEPackage as $, BasicEClass as j, BasicEAttribute as P, EPackageRegistry as X } from "@emfts/core";
const S = L(0);
function B() {
  return {
    isLoading: N(() => S.value > 0),
    activeLoadingCount: S,
    startLoading: () => {
      S.value++;
    },
    stopLoading: () => {
      S.value > 0 && S.value--;
    }
  };
}
function k(a, e, t, o = [], l) {
  const c = y(I);
  if (!c)
    throw new Error("DatasourceRepository not provided");
  const { startLoading: g, stopLoading: n } = B(), E = async () => {
    if (!a.value) {
      t.value = null;
      return;
    }
    console.log("getData", a.value), console.log("type", e), g();
    try {
      const i = await c.getDatasource(a.value).getData(e, l?.value || {});
      e === "PivotTable" ? t.value = JSON.parse(JSON.stringify(i)) : t.value = structuredClone(i);
    } catch (s) {
      t.value = null, console.warn(s);
    } finally {
      n();
    }
  }, R = async (s, i, u = !0) => {
    if (a.value)
      try {
        const v = c.getDatasource(
          a.value
        ), b = v.callEvent(s, i, u);
        if (!u && b instanceof Promise) {
          await b;
          const F = await v.getData(e);
          t.value = structuredClone(F);
        }
      } catch (v) {
        console.warn(v);
      }
  }, A = async (s) => {
    if (!a.value) {
      t.value = null;
      return;
    }
    console.log("getDataWithOptions", a.value, s), console.log("type", e), g();
    try {
      const u = await c.getDatasource(a.value).getData(e, s);
      t.value = structuredClone(u);
    } catch (i) {
      t.value = null, console.warn(i);
    } finally {
      n();
    }
  }, f = (s, i) => {
    try {
      E();
    } catch (u) {
      console.warn(u);
    }
    if (!(!s || !i || s === i)) {
      try {
        const u = c.getDatasource(i);
        u.unsubscribe(E), o.forEach((v) => {
          u.unsubscribe(v);
        });
      } catch (u) {
        console.warn(u);
      }
      try {
        const u = c.getDatasource(s);
        u.subscribe(() => E()), o.forEach((v) => {
          u.subscribe(v);
        });
      } catch (u) {
        console.warn(u);
      }
    }
  }, d = () => {
    try {
      return c.getDatasource(a.value);
    } catch (s) {
      return console.warn(s), null;
    }
  };
  return D(() => {
    E();
    try {
      const s = c.getDatasource(a.value);
      s.subscribe(E), o.forEach((i) => {
        s.subscribe(i);
      });
    } catch (s) {
      console.warn(s);
    }
  }), C(() => {
    try {
      const s = c.getDatasource(a.value);
      s.unsubscribe(E), o.forEach((i) => {
        s.unsubscribe(i);
      });
    } catch (s) {
      console.warn(s);
    }
  }), {
    data: t,
    callEvent: R,
    update: f,
    getDataWithOptions: A,
    getDatasourceInstance: d
  };
}
function z(a, e, t) {
  const o = y(I);
  if (!o)
    throw new Error("DatasourceRepository not provided");
  const l = o.getDatasourceIdentifiers(a);
  console.log("Identifiers for datasource type", a, l), D(async () => {
    console.log(
      "Creating temporary store for type",
      a,
      "with settings",
      e.value
    );
    const g = o.resolveIdentifier(l.Store);
    t.value = g({ ...e.value.config, _isTemporaryPreview: !0 });
  });
  const c = async () => {
    t.value?.destroy(), t.value = null;
    const n = o.resolveIdentifier(l.Store)({ ...e.value.config, _isTemporaryPreview: !0 });
    return n.initPromise ? (await n.initPromise, t.value = n, n) : (t.value = n, n);
  };
  return U(
    () => e,
    async () => {
    },
    { deep: !0 }
  ), O(() => {
    console.log("Destroying temporary store"), t.value?.destroy();
  }), {
    update: c
  };
}
function J(a, e = () => {
}) {
  const t = L(!1);
  let o = (n) => {
  }, l = new Promise((n) => {
    o = n;
  });
  return { isOpened: t, run: (n) => (t.value = !0, e(n), l), close: (n) => {
    o(n), l = new Promise((E) => {
      o = E;
    }), t.value = !1, a();
  } };
}
function _() {
  const a = L(Date.now()), e = [], t = y(x);
  if (!t)
    throw new Error("VariableRepository not provided");
  let o = null;
  try {
    o = y(W);
  } catch {
    console.warn("PageContextService not available for variable resolution");
  }
  const l = () => {
    a.value = Date.now();
  }, c = (n, E = () => {
  }) => {
    const R = /\{\s*([a-zA-Z0-9_]+)\s*\}/g;
    for (const s of e)
      s.unsubscribe(l), s.unsubscribe(E);
    e.length = 0;
    const f = [...n.matchAll(R)].map((s) => s[1]);
    let d = n;
    for (const s of f)
      try {
        let i;
        try {
          const u = o?.getCurrentPageId();
          i = t.getVariableWithContext ? t.getVariableWithContext(s, u) : t.getVariable(s);
        } catch (u) {
          console.error(u);
        }
        if (i) {
          i.subscribe(l), i.subscribe(E), e.push(i);
          const u = i.value, v = new RegExp(
            `\\{\\s*${s}\\s*\\}`,
            "g"
          );
          d = d.replace(v, String(u));
        }
      } catch (i) {
        console.warn(`Error resolving variable ${s}:`, i);
      }
    return d;
  };
  return {
    calculateValue: c,
    wrapParameters: (n) => {
      const E = {};
      for (const [R, A] of Object.entries(n))
        try {
          const f = N(() => (a.value, A && c(A.value + "")));
          E[R] = f;
        } catch (f) {
          console.log(f);
        }
      return E;
    }
  };
}
const V = "VARIABLECOMPLEXSTRINGWRAPPER";
class m {
  type = V;
  _value = void 0;
  _computedValue = null;
  constructor(e = "") {
    this._value = e;
  }
  get original() {
    return this._value || "";
  }
  updateFn() {
    const { calculateValue: e } = _();
    this._computedValue = e(this._value || "");
  }
  get value() {
    const { calculateValue: e } = _();
    return this._computedValue = e(this._value || "", this.updateFn.bind(this)), this._computedValue;
  }
  set value(e) {
    this._value = e;
  }
}
class r extends M {
  // Feature ID Constants (eLiterals)
  static VALUE = 0;
  static VARIABLE = 1;
  static IS_SET = 2;
  static TYPE = 3;
  // Private fields
  _value;
  _variable;
  _isSet = !1;
  _type = "VARIABLEWRAPPER";
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return h.Literals.VARIABLE_WRAPPER;
  }
  // Getters and Setters
  get value() {
    return this._value;
  }
  set value(e) {
    const t = this._value;
    this._value = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(r.VALUE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => r.VALUE,
      merge: () => !1
    });
  }
  get variable() {
    return this._variable;
  }
  set variable(e) {
    const t = this._variable;
    this._variable = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(r.VARIABLE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => r.VARIABLE,
      merge: () => !1
    });
  }
  get isSet() {
    return this._isSet;
  }
  set isSet(e) {
    const t = this._isSet;
    this._isSet = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(r.IS_SET),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => r.IS_SET,
      merge: () => !1
    });
  }
  get type() {
    return this._type;
  }
  set type(e) {
    const t = this._type;
    this._type = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(r.TYPE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => r.TYPE,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case r.VALUE:
        return this.value;
      case r.VARIABLE:
        return this.variable;
      case r.IS_SET:
        return this.isSet;
      case r.TYPE:
        return this.type;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case r.VALUE:
        this.value = t, super.eSet(e, t);
        break;
      case r.VARIABLE:
        this.variable = t, super.eSet(e, t);
        break;
      case r.IS_SET:
        this.isSet = t, super.eSet(e, t);
        break;
      case r.TYPE:
        this.type = t, super.eSet(e, t);
        break;
      default:
        super.eSet(e, t);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case r.VALUE:
        return this._value !== void 0;
      case r.VARIABLE:
        return this._variable !== void 0;
      case r.IS_SET:
        return this._isSet !== !1;
      case r.TYPE:
        return this._type !== "VARIABLEWRAPPER";
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case r.VALUE:
        this._value = void 0;
        return;
      case r.VARIABLE:
        this._variable = void 0;
        return;
      case r.IS_SET:
        this._isSet = !1;
        return;
      case r.TYPE:
        this._type = "VARIABLEWRAPPER";
        return;
      default:
        super.eUnset(e);
    }
  }
}
class w extends G {
  // Lazy singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new w()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(h.eINSTANCE);
  }
  /**
   * Create a new VariableWrapper instance
   */
  createVariableWrapper() {
    return new r();
  }
  /**
   * Create an instance of the given class
   */
  create(e) {
    switch (e.getName()) {
      case "VariableWrapper":
        return this.createVariableWrapper();
      default:
        throw new Error(`Unknown class: ${e.getName()}`);
    }
  }
}
class h extends $ {
  static eNAME = "composables";
  static eNS_URI = "org.eclipse.daanse.board.app.ui.vue.composables";
  static eNS_PREFIX = "composables";
  // Singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new h(), this._instance.init()), this._instance;
  }
  /**
   * Literals for quick access to metaclasses and features
   */
  static Literals = {
    VARIABLE_WRAPPER: null,
    VARIABLE_WRAPPER__VALUE: null,
    VARIABLE_WRAPPER__VARIABLE: null,
    VARIABLE_WRAPPER__IS_SET: null,
    VARIABLE_WRAPPER__TYPE: null
  };
  constructor() {
    super(), this.setName(h.eNAME), this.setNsURI(h.eNS_URI), this.setNsPrefix(h.eNS_PREFIX);
  }
  /**
   * Initialize package contents
   */
  init() {
    this.setEFactoryInstance(w.eINSTANCE);
    const e = new j();
    e.setName("VariableWrapper"), e.setAbstract(!1), e.setInterface(!1), this.getEClassifiers().push(e), e.setEPackage(this), h.Literals.VARIABLE_WRAPPER = e;
    const t = new P();
    t.setName("value"), t.setLowerBound(0), t.setUpperBound(1), e.getEStructuralFeatures().push(t), h.Literals.VARIABLE_WRAPPER__VALUE = t;
    const o = new P();
    o.setName("variable"), o.setLowerBound(0), o.setUpperBound(1), e.getEStructuralFeatures().push(o), h.Literals.VARIABLE_WRAPPER__VARIABLE = o;
    const l = new P();
    l.setName("isSet"), l.setLowerBound(0), l.setUpperBound(1), e.getEStructuralFeatures().push(l), h.Literals.VARIABLE_WRAPPER__IS_SET = l;
    const c = new P();
    c.setName("type"), c.setLowerBound(0), c.setUpperBound(1), e.getEStructuralFeatures().push(c), h.Literals.VARIABLE_WRAPPER__TYPE = c;
  }
}
const Z = {
  VariableWrapper: T,
  VariableComplexStringWrapper: m
};
X.INSTANCE.registerPackage(h.eINSTANCE);
const q = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ComposablesPackage: h,
  VARIABLECOMPLEXSTRINGWRAPPER: V,
  VARIABLEWRAPPER: Y,
  VariableComplexStringWrapper: m,
  VariableWrapper: T,
  WrapperTypes: Z,
  useDatasourceRepository: k,
  useGlobalLoading: B,
  usePromisifiedModal: J,
  useTemporaryStore: z,
  useVariableRepository: _
}, Symbol.toStringTag, { value: "Module" })), p = "org.eclipse.daanse.board.app.ui.vue.composables", H = "0.0.1-next.1";
async function re(a) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${p}: tsm runtime is not initialized`);
  e.register(p, q, H, "ui.vue.composables"), await void 0;
}
async function ie(a) {
  await void 0;
}
export {
  h as ComposablesPackage,
  V as VARIABLECOMPLEXSTRINGWRAPPER,
  ue as VARIABLEWRAPPER,
  m as VariableComplexStringWrapper,
  ce as VariableWrapper,
  Z as WrapperTypes,
  re as activate,
  ie as deactivate,
  k as useDatasourceRepository,
  B as useGlobalLoading,
  J as usePromisifiedModal,
  z as useTemporaryStore,
  _ as useVariableRepository
};
