import { identifier as V } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { ref as T, computed as p, inject as d, onMounted as b, onUnmounted as M, watch as X, onBeforeUnmount as x } from "vue";
import { identifier as m } from "org.eclipse.daanse.board.app.lib.api.variable";
import { identifier as j } from "org.eclipse.daanse.board.app.lib.api.pagecontext";
import { VariableWrapper as F, VARIABLEWRAPPER as J } from "org.eclipse.daanse.board.app.lib.variables";
import { VARIABLEWRAPPER as Ee, VariableWrapper as he } from "org.eclipse.daanse.board.app.lib.variables";
import { BasicEObject as C, BasicEFactory as $, BasicEPackage as z, EPackageRegistry as O, BasicEClass as B, BasicEAttribute as P, getEcorePackage as L } from "@emfts/core";
const y = T(0);
function U() {
  return {
    isLoading: p(() => y.value > 0),
    activeLoadingCount: y,
    startLoading: () => {
      y.value++;
    },
    stopLoading: () => {
      y.value > 0 && y.value--;
    }
  };
}
function Z(r, e, t, u = [], h) {
  const l = d(V);
  if (!l)
    throw new Error("DatasourceRepository not provided");
  const { startLoading: A, stopLoading: a } = U(), E = async () => {
    if (!r.value) {
      t.value = null;
      return;
    }
    console.log("getData", r.value), console.log("type", e), A();
    try {
      const o = await l.getDatasource(r.value).getData(e, h?.value || {});
      e === "PivotTable" ? t.value = JSON.parse(JSON.stringify(o)) : t.value = structuredClone(o);
    } catch (s) {
      t.value = null, console.warn(s);
    } finally {
      a();
    }
  }, _ = async (s, o, c = !0) => {
    if (r.value)
      try {
        const v = l.getDatasource(
          r.value
        ), w = v.callEvent(s, o, c);
        if (!c && w instanceof Promise) {
          await w;
          const G = await v.getData(e);
          t.value = structuredClone(G);
        }
      } catch (v) {
        console.warn(v);
      }
  }, g = async (s) => {
    if (!r.value) {
      t.value = null;
      return;
    }
    console.log("getDataWithOptions", r.value, s), console.log("type", e), A();
    try {
      const c = await l.getDatasource(r.value).getData(e, s);
      t.value = structuredClone(c);
    } catch (o) {
      t.value = null, console.warn(o);
    } finally {
      a();
    }
  }, f = (s, o) => {
    try {
      E();
    } catch (c) {
      console.warn(c);
    }
    if (!(!s || !o || s === o)) {
      try {
        const c = l.getDatasource(o);
        c.unsubscribe(E), u.forEach((v) => {
          c.unsubscribe(v);
        });
      } catch (c) {
        console.warn(c);
      }
      try {
        const c = l.getDatasource(s);
        c.subscribe(() => E()), u.forEach((v) => {
          c.subscribe(v);
        });
      } catch (c) {
        console.warn(c);
      }
    }
  }, S = () => {
    try {
      return l.getDatasource(r.value);
    } catch (s) {
      return console.warn(s), null;
    }
  };
  return b(() => {
    E();
    try {
      const s = l.getDatasource(r.value);
      s.subscribe(E), u.forEach((o) => {
        s.subscribe(o);
      });
    } catch (s) {
      console.warn(s);
    }
  }), M(() => {
    try {
      const s = l.getDatasource(r.value);
      s.unsubscribe(E), u.forEach((o) => {
        s.unsubscribe(o);
      });
    } catch (s) {
      console.warn(s);
    }
  }), {
    data: t,
    callEvent: _,
    update: f,
    getDataWithOptions: g,
    getDatasourceInstance: S
  };
}
function q(r, e, t) {
  const u = d(V);
  if (!u)
    throw new Error("DatasourceRepository not provided");
  const h = u.getDatasourceIdentifiers(r);
  console.log("Identifiers for datasource type", r, h), b(async () => {
    console.log(
      "Creating temporary store for type",
      r,
      "with settings",
      e.value
    );
    const A = u.resolveIdentifier(h.Store);
    t.value = A({ ...e.value.config, _isTemporaryPreview: !0 });
  });
  const l = async () => {
    t.value?.destroy(), t.value = null;
    const a = u.resolveIdentifier(h.Store)({ ...e.value.config, _isTemporaryPreview: !0 });
    return a.initPromise ? (await a.initPromise, t.value = a, a) : (t.value = a, a);
  };
  return X(
    () => e,
    async () => {
    },
    { deep: !0 }
  ), x(() => {
    console.log("Destroying temporary store"), t.value?.destroy();
  }), {
    update: l
  };
}
function H(r, e = () => {
}) {
  const t = T(!1);
  let u = (a) => {
  }, h = new Promise((a) => {
    u = a;
  });
  return { isOpened: t, run: (a) => (t.value = !0, e(a), h), close: (a) => {
    u(a), h = new Promise((E) => {
      u = E;
    }), t.value = !1, r();
  } };
}
function I() {
  const r = T(Date.now()), e = [], t = d(m);
  if (!t)
    throw new Error("VariableRepository not provided");
  let u = null;
  try {
    u = d(j);
  } catch {
    console.warn("PageContextService not available for variable resolution");
  }
  const h = () => {
    r.value = Date.now();
  }, l = (a, E = () => {
  }) => {
    const _ = /\{\s*([a-zA-Z0-9_]+)\s*\}/g;
    for (const s of e)
      s.unsubscribe(h), s.unsubscribe(E);
    e.length = 0;
    const f = [...a.matchAll(_)].map((s) => s[1]);
    let S = a;
    for (const s of f)
      try {
        let o;
        try {
          const c = u?.getCurrentPageId();
          o = t.getVariableWithContext ? t.getVariableWithContext(s, c) : t.getVariable(s);
        } catch (c) {
          console.error(c);
        }
        if (o) {
          o.subscribe(h), o.subscribe(E), e.push(o);
          const c = o.value, v = new RegExp(
            `\\{\\s*${s}\\s*\\}`,
            "g"
          );
          S = S.replace(v, String(c));
        }
      } catch (o) {
        console.warn(`Error resolving variable ${s}:`, o);
      }
    return S;
  };
  return {
    calculateValue: l,
    wrapParameters: (a) => {
      const E = {};
      for (const [_, g] of Object.entries(a))
        try {
          const f = p(() => (r.value, g && l(g.value + "")));
          E[_] = f;
        } catch (f) {
          console.log(f);
        }
      return E;
    }
  };
}
function K(r) {
  if (!r || typeof r != "object") return {};
  const e = r;
  return typeof e.toJSON == "function" ? e.toJSON() : r;
}
const W = "VARIABLECOMPLEXSTRINGWRAPPER";
class Y {
  type = W;
  _value = void 0;
  _computedValue = null;
  constructor(e = "") {
    this._value = e;
  }
  get original() {
    return this._value || "";
  }
  updateFn() {
    const { calculateValue: e } = I();
    this._computedValue = e(this._value || "");
  }
  get value() {
    const { calculateValue: e } = I();
    return this._computedValue = e(this._value || "", this.updateFn.bind(this)), this._computedValue;
  }
  set value(e) {
    this._value = e;
  }
}
class i extends C {
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
    return n.Literals.VARIABLE_WRAPPER;
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
      getFeature: () => this.eClass().getEStructuralFeature(i.VALUE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => i.VALUE,
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
      getFeature: () => this.eClass().getEStructuralFeature(i.VARIABLE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => i.VARIABLE,
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
      getFeature: () => this.eClass().getEStructuralFeature(i.IS_SET),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => i.IS_SET,
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
      getFeature: () => this.eClass().getEStructuralFeature(i.TYPE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => i.TYPE,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case i.VALUE:
        return this.value;
      case i.VARIABLE:
        return this.variable;
      case i.IS_SET:
        return this.isSet;
      case i.TYPE:
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
      case i.VALUE:
        this.value = t, super.eSet(e, t);
        break;
      case i.VARIABLE:
        this.variable = t, super.eSet(e, t);
        break;
      case i.IS_SET:
        this.isSet = t, super.eSet(e, t);
        break;
      case i.TYPE:
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
      case i.VALUE:
        return this._value !== void 0;
      case i.VARIABLE:
        return this._variable !== void 0;
      case i.IS_SET:
        return this._isSet !== !1;
      case i.TYPE:
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
      case i.VALUE:
        this._value = void 0;
        return;
      case i.VARIABLE:
        this._variable = void 0;
        return;
      case i.IS_SET:
        this._isSet = !1;
        return;
      case i.TYPE:
        this._type = "VARIABLEWRAPPER";
        return;
      default:
        super.eUnset(e);
    }
  }
  /**
   * What this object is when it is stored.
   *
   * The plain names, not the private fields the getters sit in: those
   * are this class's business, and a stored board is read by things
   * that only know the model.
   */
  toJSON() {
    return {
      value: this.value,
      variable: this.variable,
      isSet: this.isSet,
      type: this.type
    };
  }
}
class R extends C {
  // Feature ID Constants (eLiterals)
  static VALUE = 0;
  static TYPE = 1;
  // Private fields
  _value;
  _type = "VARIABLECOMPLEXSTRINGWRAPPER";
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return n.Literals.VARIABLE_COMPLEX_STRING_WRAPPER;
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
      getFeature: () => this.eClass().getEStructuralFeature(R.VALUE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => R.VALUE,
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
      getFeature: () => this.eClass().getEStructuralFeature(R.TYPE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => R.TYPE,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case R.VALUE:
        return this.value;
      case R.TYPE:
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
      case R.VALUE:
        this.value = t, super.eSet(e, t);
        break;
      case R.TYPE:
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
      case R.VALUE:
        return this._value !== void 0;
      case R.TYPE:
        return this._type !== "VARIABLECOMPLEXSTRINGWRAPPER";
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case R.VALUE:
        this._value = void 0;
        return;
      case R.TYPE:
        this._type = "VARIABLECOMPLEXSTRINGWRAPPER";
        return;
      default:
        super.eUnset(e);
    }
  }
  /**
   * What this object is when it is stored.
   *
   * The plain names, not the private fields the getters sit in: those
   * are this class's business, and a stored board is read by things
   * that only know the model.
   */
  toJSON() {
    return {
      value: this.value,
      type: this.type
    };
  }
}
class N extends $ {
  // Lazy singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new N()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(n.eINSTANCE);
  }
  /**
   * Create a new VariableWrapper instance
   */
  createVariableWrapper() {
    return new i();
  }
  /**
   * Create a new VariableComplexStringWrapper instance
   */
  createVariableComplexStringWrapper() {
    return new R();
  }
  /**
   * Create an instance of the given class
   */
  create(e) {
    switch (e.getName()) {
      case "VariableWrapper":
        return this.createVariableWrapper();
      case "VariableComplexStringWrapper":
        return this.createVariableComplexStringWrapper();
      default:
        throw new Error(`Unknown class: ${e.getName()}`);
    }
  }
}
class n extends z {
  static eNAME = "composables";
  static eNS_URI = "org.eclipse.daanse.board.app.ui.vue.composables";
  static eNS_PREFIX = "composables";
  // Singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new n(), this._instance.init()), this._instance;
  }
  /**
   * Literals for quick access to metaclasses and features
   */
  static Literals = {
    VARIABLE_WRAPPER: null,
    VARIABLE_WRAPPER__VALUE: null,
    VARIABLE_WRAPPER__VARIABLE: null,
    VARIABLE_WRAPPER__IS_SET: null,
    VARIABLE_WRAPPER__TYPE: null,
    VARIABLE_COMPLEX_STRING_WRAPPER: null,
    VARIABLE_COMPLEX_STRING_WRAPPER__VALUE: null,
    VARIABLE_COMPLEX_STRING_WRAPPER__TYPE: null
  };
  constructor() {
    super(), this.setName(n.eNAME), this.setNsURI(n.eNS_URI), this.setNsPrefix(n.eNS_PREFIX);
  }
  /**
   * Initialize package contents
   */
  init() {
    O.INSTANCE.set(n.eNS_URI, this), this.setEFactoryInstance(N.eINSTANCE);
    const e = new B();
    e.setName("VariableWrapper"), e.setAbstract(!1), e.setInterface(!1), this.getEClassifiers().push(e), e.setEPackage(this), n.Literals.VARIABLE_WRAPPER = e;
    const t = new P();
    t.setName("value"), t.setLowerBound(0), t.setUpperBound(1), e.getEStructuralFeatures().push(t), n.Literals.VARIABLE_WRAPPER__VALUE = t;
    const u = new P();
    u.setName("variable"), u.setLowerBound(0), u.setUpperBound(1), e.getEStructuralFeatures().push(u), n.Literals.VARIABLE_WRAPPER__VARIABLE = u;
    const h = new P();
    h.setName("isSet"), h.setLowerBound(0), h.setUpperBound(1), e.getEStructuralFeatures().push(h), n.Literals.VARIABLE_WRAPPER__IS_SET = h;
    const l = new P();
    l.setName("type"), l.setLowerBound(0), l.setUpperBound(1), e.getEStructuralFeatures().push(l), n.Literals.VARIABLE_WRAPPER__TYPE = l;
    const A = new B();
    A.setName("VariableComplexStringWrapper"), A.setAbstract(!1), A.setInterface(!1), this.getEClassifiers().push(A), A.setEPackage(this), n.Literals.VARIABLE_COMPLEX_STRING_WRAPPER = A;
    const a = new P();
    a.setName("value"), a.setLowerBound(0), a.setUpperBound(1), A.getEStructuralFeatures().push(a), n.Literals.VARIABLE_COMPLEX_STRING_WRAPPER__VALUE = a;
    const E = new P();
    E.setName("type"), E.setLowerBound(0), E.setUpperBound(1), A.getEStructuralFeatures().push(E), n.Literals.VARIABLE_COMPLEX_STRING_WRAPPER__TYPE = E, n.Literals.VARIABLE_WRAPPER__VALUE.setEType(L().getEClassifier("EObject")), n.Literals.VARIABLE_WRAPPER__VARIABLE.setEType(L().getEClassifier("EString")), n.Literals.VARIABLE_WRAPPER__IS_SET.setEType(L().getEClassifier("EBoolean")), n.Literals.VARIABLE_WRAPPER__TYPE.setEType(L().getEClassifier("EString")), n.Literals.VARIABLE_COMPLEX_STRING_WRAPPER__VALUE.setEType(L().getEClassifier("EObject")), n.Literals.VARIABLE_COMPLEX_STRING_WRAPPER__TYPE.setEType(L().getEClassifier("EString"));
  }
}
const Q = {
  VariableWrapper: F,
  VariableComplexStringWrapper: Y
};
O.INSTANCE.registerPackage(n.eINSTANCE);
const k = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ComposablesPackage: n,
  VARIABLECOMPLEXSTRINGWRAPPER: W,
  VARIABLEWRAPPER: J,
  VariableComplexStringWrapper: Y,
  VariableWrapper: F,
  WrapperTypes: Q,
  plainSettings: K,
  useDatasourceRepository: Z,
  useGlobalLoading: U,
  usePromisifiedModal: H,
  useTemporaryStore: q,
  useVariableRepository: I
}, Symbol.toStringTag, { value: "Module" })), D = "org.eclipse.daanse.board.app.ui.vue.composables", ee = "0.0.1-next.1";
async function ue(r) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${D}: tsm runtime is not initialized`);
  e.register(D, k, ee, "ui.vue.composables"), await void 0;
}
async function oe(r) {
  await void 0;
}
export {
  n as ComposablesPackage,
  W as VARIABLECOMPLEXSTRINGWRAPPER,
  Ee as VARIABLEWRAPPER,
  Y as VariableComplexStringWrapper,
  he as VariableWrapper,
  Q as WrapperTypes,
  ue as activate,
  oe as deactivate,
  K as plainSettings,
  Z as useDatasourceRepository,
  U as useGlobalLoading,
  H as usePromisifiedModal,
  q as useTemporaryStore,
  I as useVariableRepository
};
