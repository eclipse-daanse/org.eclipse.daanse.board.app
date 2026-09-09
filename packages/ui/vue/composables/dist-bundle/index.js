import { identifier as D } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { ref as I, computed as V, inject as d, onMounted as p, onUnmounted as M, watch as X, onBeforeUnmount as x } from "vue";
import { identifier as m } from "org.eclipse.daanse.board.app.lib.api.variable";
import { identifier as j } from "org.eclipse.daanse.board.app.lib.api.pagecontext";
import { VariableWrapper as b, VARIABLEWRAPPER as J } from "org.eclipse.daanse.board.app.lib.variables";
import { VARIABLEWRAPPER as Ee, VariableWrapper as he } from "org.eclipse.daanse.board.app.lib.variables";
import { BasicEObject as F, BasicEFactory as $, BasicEPackage as z, EPackageRegistry as C, BasicEClass as w, BasicEAttribute as P, getEcorePackage as L } from "@emfts/core";
const y = I(0);
function O() {
  return {
    isLoading: V(() => y.value > 0),
    activeLoadingCount: y,
    startLoading: () => {
      y.value++;
    },
    stopLoading: () => {
      y.value > 0 && y.value--;
    }
  };
}
function Z(r, e, t, i = [], h) {
  const l = d(D);
  if (!l)
    throw new Error("DatasourceRepository not provided");
  const { startLoading: A, stopLoading: a } = O(), E = async () => {
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
        const f = l.getDatasource(
          r.value
        ), N = f.callEvent(s, o, c);
        if (!c && N instanceof Promise) {
          await N;
          const G = await f.getData(e);
          t.value = structuredClone(G);
        }
      } catch (f) {
        console.warn(f);
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
  }, v = (s, o) => {
    try {
      E();
    } catch (c) {
      console.warn(c);
    }
    if (!(!s || !o || s === o)) {
      try {
        const c = l.getDatasource(o);
        c.unsubscribe(E), i.forEach((f) => {
          c.unsubscribe(f);
        });
      } catch (c) {
        console.warn(c);
      }
      try {
        const c = l.getDatasource(s);
        c.subscribe(() => E()), i.forEach((f) => {
          c.subscribe(f);
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
  return p(() => {
    E();
    try {
      const s = l.getDatasource(r.value);
      s.subscribe(E), i.forEach((o) => {
        s.subscribe(o);
      });
    } catch (s) {
      console.warn(s);
    }
  }), M(() => {
    try {
      const s = l.getDatasource(r.value);
      s.unsubscribe(E), i.forEach((o) => {
        s.unsubscribe(o);
      });
    } catch (s) {
      console.warn(s);
    }
  }), {
    data: t,
    callEvent: _,
    update: v,
    getDataWithOptions: g,
    getDatasourceInstance: S
  };
}
function q(r, e, t) {
  const i = d(D);
  if (!i)
    throw new Error("DatasourceRepository not provided");
  const h = i.getDatasourceIdentifiers(r);
  console.log("Identifiers for datasource type", r, h), p(async () => {
    console.log(
      "Creating temporary store for type",
      r,
      "with settings",
      e.value
    );
    const A = i.resolveIdentifier(h.Store);
    t.value = A({ ...e.value.config, _isTemporaryPreview: !0 });
  });
  const l = async () => {
    t.value?.destroy(), t.value = null;
    const a = i.resolveIdentifier(h.Store)({ ...e.value.config, _isTemporaryPreview: !0 });
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
  const t = I(!1);
  let i = (a) => {
  }, h = new Promise((a) => {
    i = a;
  });
  return { isOpened: t, run: (a) => (t.value = !0, e(a), h), close: (a) => {
    i(a), h = new Promise((E) => {
      i = E;
    }), t.value = !1, r();
  } };
}
function U() {
  const r = I(Date.now()), e = [], t = d(m);
  if (!t)
    throw new Error("VariableRepository not provided");
  let i = null;
  try {
    i = d(j);
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
    const v = [...a.matchAll(_)].map((s) => s[1]);
    let S = a;
    for (const s of v)
      try {
        let o;
        try {
          const c = i?.getCurrentPageId();
          o = t.getVariableWithContext ? t.getVariableWithContext(s, c) : t.getVariable(s);
        } catch (c) {
          console.error(c);
        }
        if (o) {
          o.subscribe(h), o.subscribe(E), e.push(o);
          const c = o.value, f = new RegExp(
            `\\{\\s*${s}\\s*\\}`,
            "g"
          );
          S = S.replace(f, String(c));
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
          const v = V(() => (r.value, g && l(g.value + "")));
          E[_] = v;
        } catch (v) {
          console.log(v);
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
    const e = this.substitute(this._value || "");
    e !== null && (this._computedValue = e);
  }
  /**
   * The text with the variables it names filled in.
   *
   * Falls back to the text as written when the variables cannot be reached.
   * Resolving them goes through inject, which only answers inside a
   * component - and this is read from outside one more often than it looks:
   * Vue reads a property before writing it, so assigning to this threw from
   * inside the reactivity and the new text was never stored at all.
   *
   * Showing the text unsubstituted is the right failure: it is what was
   * written, and it is what gets stored either way. The last substitution
   * is not reused for it - that one was made from an older text, and
   * handing it back would show the previous value as if it were current.
   */
  get value() {
    const e = this.substitute(this._value || "", this.updateFn.bind(this));
    return e === null ? this._value ?? "" : (this._computedValue = e, e);
  }
  /** The substituted text, or null when the variables are out of reach. */
  substitute(e, t) {
    try {
      const { calculateValue: i } = U();
      return t ? i(e, t) : i(e);
    } catch {
      return null;
    }
  }
  set value(e) {
    this._value = e;
  }
}
class u extends F {
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
      getFeature: () => this.eClass().getEStructuralFeature(u.VALUE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => u.VALUE,
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
      getFeature: () => this.eClass().getEStructuralFeature(u.VARIABLE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => u.VARIABLE,
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
      getFeature: () => this.eClass().getEStructuralFeature(u.IS_SET),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => u.IS_SET,
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
      getFeature: () => this.eClass().getEStructuralFeature(u.TYPE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => u.TYPE,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case u.VALUE:
        return this.value;
      case u.VARIABLE:
        return this.variable;
      case u.IS_SET:
        return this.isSet;
      case u.TYPE:
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
      case u.VALUE:
        this.value = t, super.eSet(e, t);
        break;
      case u.VARIABLE:
        this.variable = t, super.eSet(e, t);
        break;
      case u.IS_SET:
        this.isSet = t, super.eSet(e, t);
        break;
      case u.TYPE:
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
      case u.VALUE:
        return this._value !== void 0;
      case u.VARIABLE:
        return this._variable !== void 0;
      case u.IS_SET:
        return this._isSet !== !1;
      case u.TYPE:
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
      case u.VALUE:
        this._value = void 0;
        return;
      case u.VARIABLE:
        this._variable = void 0;
        return;
      case u.IS_SET:
        this._isSet = !1;
        return;
      case u.TYPE:
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
class R extends F {
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
class T extends $ {
  // Lazy singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new T()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(n.eINSTANCE);
  }
  /**
   * Create a new VariableWrapper instance
   */
  createVariableWrapper() {
    return new u();
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
    C.INSTANCE.set(n.eNS_URI, this), this.setEFactoryInstance(T.eINSTANCE);
    const e = new w();
    e.setName("VariableWrapper"), e.setAbstract(!1), e.setInterface(!1), this.getEClassifiers().push(e), e.setEPackage(this), n.Literals.VARIABLE_WRAPPER = e;
    const t = new P();
    t.setName("value"), t.setLowerBound(0), t.setUpperBound(1), e.getEStructuralFeatures().push(t), n.Literals.VARIABLE_WRAPPER__VALUE = t;
    const i = new P();
    i.setName("variable"), i.setLowerBound(0), i.setUpperBound(1), e.getEStructuralFeatures().push(i), n.Literals.VARIABLE_WRAPPER__VARIABLE = i;
    const h = new P();
    h.setName("isSet"), h.setLowerBound(0), h.setUpperBound(1), e.getEStructuralFeatures().push(h), n.Literals.VARIABLE_WRAPPER__IS_SET = h;
    const l = new P();
    l.setName("type"), l.setLowerBound(0), l.setUpperBound(1), e.getEStructuralFeatures().push(l), n.Literals.VARIABLE_WRAPPER__TYPE = l;
    const A = new w();
    A.setName("VariableComplexStringWrapper"), A.setAbstract(!1), A.setInterface(!1), this.getEClassifiers().push(A), A.setEPackage(this), n.Literals.VARIABLE_COMPLEX_STRING_WRAPPER = A;
    const a = new P();
    a.setName("value"), a.setLowerBound(0), a.setUpperBound(1), A.getEStructuralFeatures().push(a), n.Literals.VARIABLE_COMPLEX_STRING_WRAPPER__VALUE = a;
    const E = new P();
    E.setName("type"), E.setLowerBound(0), E.setUpperBound(1), A.getEStructuralFeatures().push(E), n.Literals.VARIABLE_COMPLEX_STRING_WRAPPER__TYPE = E, n.Literals.VARIABLE_WRAPPER__VALUE.setEType(L().getEClassifier("EObject")), n.Literals.VARIABLE_WRAPPER__VARIABLE.setEType(L().getEClassifier("EString")), n.Literals.VARIABLE_WRAPPER__IS_SET.setEType(L().getEClassifier("EBoolean")), n.Literals.VARIABLE_WRAPPER__TYPE.setEType(L().getEClassifier("EString")), n.Literals.VARIABLE_COMPLEX_STRING_WRAPPER__VALUE.setEType(L().getEClassifier("EObject")), n.Literals.VARIABLE_COMPLEX_STRING_WRAPPER__TYPE.setEType(L().getEClassifier("EString"));
  }
}
const Q = {
  VariableWrapper: b,
  VariableComplexStringWrapper: Y
};
C.INSTANCE.registerPackage(n.eINSTANCE);
const k = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ComposablesPackage: n,
  VARIABLECOMPLEXSTRINGWRAPPER: W,
  VARIABLEWRAPPER: J,
  VariableComplexStringWrapper: Y,
  VariableWrapper: b,
  WrapperTypes: Q,
  plainSettings: K,
  useDatasourceRepository: Z,
  useGlobalLoading: O,
  usePromisifiedModal: H,
  useTemporaryStore: q,
  useVariableRepository: U
}, Symbol.toStringTag, { value: "Module" })), B = "org.eclipse.daanse.board.app.ui.vue.composables", ee = "0.0.1-next.1";
async function ne(r) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${B}: tsm runtime is not initialized`);
  e.register(B, k, ee, "ui.vue.composables"), await void 0;
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
  ne as activate,
  oe as deactivate,
  K as plainSettings,
  Z as useDatasourceRepository,
  O as useGlobalLoading,
  H as usePromisifiedModal,
  q as useTemporaryStore,
  U as useVariableRepository
};
