import { identifier as b } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { ref as I, computed as T, inject as y, onMounted as C, onUnmounted as m, watch as N, onBeforeUnmount as x, shallowRef as J, triggerRef as $, getCurrentScope as j, onScopeDispose as z } from "vue";
import { identifier as Z } from "org.eclipse.daanse.board.app.lib.api.variable";
import { identifier as q } from "org.eclipse.daanse.board.app.lib.api.pagecontext";
import { EContentAdapter as H, NotificationType as K, BasicEObject as F, BasicEFactory as Q, BasicEPackage as k, EPackageRegistry as O, BasicEClass as D, BasicEAttribute as d, getEcorePackage as P } from "@emfts/core";
import { VariableWrapper as U, VARIABLEWRAPPER as ee } from "org.eclipse.daanse.board.app.lib.variables";
import { VARIABLEWRAPPER as Se, VariableWrapper as ye } from "org.eclipse.daanse.board.app.lib.variables";
const S = I(0);
function W() {
  return {
    isLoading: T(() => S.value > 0),
    activeLoadingCount: S,
    startLoading: () => {
      S.value++;
    },
    stopLoading: () => {
      S.value > 0 && S.value--;
    }
  };
}
function te(s, e, t, r = [], n) {
  const u = y(b);
  if (!u)
    throw new Error("DatasourceRepository not provided");
  const { startLoading: A, stopLoading: i } = W(), l = async () => {
    if (!s.value) {
      t.value = null;
      return;
    }
    console.log("getData", s.value), console.log("type", e), A();
    try {
      const E = await u.getDatasource(s.value).getData(e, n?.value || {});
      e === "PivotTable" ? t.value = JSON.parse(JSON.stringify(E)) : t.value = structuredClone(E);
    } catch (a) {
      t.value = null, console.warn(a);
    } finally {
      i();
    }
  }, L = async (a, E, h = !0) => {
    if (s.value)
      try {
        const R = u.getDatasource(
          s.value
        ), B = R.callEvent(a, E, h);
        if (!h && B instanceof Promise) {
          await B;
          const X = await R.getData(e);
          t.value = structuredClone(X);
        }
      } catch (R) {
        console.warn(R);
      }
  }, g = async (a) => {
    if (!s.value) {
      t.value = null;
      return;
    }
    console.log("getDataWithOptions", s.value, a), console.log("type", e), A();
    try {
      const h = await u.getDatasource(s.value).getData(e, a);
      t.value = structuredClone(h);
    } catch (E) {
      t.value = null, console.warn(E);
    } finally {
      i();
    }
  }, v = (a, E) => {
    try {
      l();
    } catch (h) {
      console.warn(h);
    }
    if (!(!a || !E || a === E)) {
      try {
        const h = u.getDatasource(E);
        h.unsubscribe(l), r.forEach((R) => {
          h.unsubscribe(R);
        });
      } catch (h) {
        console.warn(h);
      }
      try {
        const h = u.getDatasource(a);
        h.subscribe(() => l()), r.forEach((R) => {
          h.subscribe(R);
        });
      } catch (h) {
        console.warn(h);
      }
    }
  }, _ = () => {
    try {
      return u.getDatasource(s.value);
    } catch (a) {
      return console.warn(a), null;
    }
  };
  return C(() => {
    l();
    try {
      const a = u.getDatasource(s.value);
      a.subscribe(l), r.forEach((E) => {
        a.subscribe(E);
      });
    } catch (a) {
      console.warn(a);
    }
  }), m(() => {
    try {
      const a = u.getDatasource(s.value);
      a.unsubscribe(l), r.forEach((E) => {
        a.unsubscribe(E);
      });
    } catch (a) {
      console.warn(a);
    }
  }), {
    data: t,
    callEvent: L,
    update: v,
    getDataWithOptions: g,
    getDatasourceInstance: _
  };
}
function se(s, e, t) {
  const r = y(b);
  if (!r)
    throw new Error("DatasourceRepository not provided");
  const n = r.getDatasourceIdentifiers(s);
  console.log("Identifiers for datasource type", s, n), C(async () => {
    console.log(
      "Creating temporary store for type",
      s,
      "with settings",
      e.value
    );
    const A = r.resolveIdentifier(n.Store);
    t.value = A({ ...e.value.config, _isTemporaryPreview: !0 });
  });
  const u = async () => {
    t.value?.destroy(), t.value = null;
    const i = r.resolveIdentifier(n.Store)({ ...e.value.config, _isTemporaryPreview: !0 });
    return i.initPromise ? (await i.initPromise, t.value = i, i) : (t.value = i, i);
  };
  return N(
    () => e,
    async () => {
    },
    { deep: !0 }
  ), x(() => {
    console.log("Destroying temporary store"), t.value?.destroy();
  }), {
    update: u
  };
}
function re(s, e = () => {
}) {
  const t = I(!1);
  let r = (i) => {
  }, n = new Promise((i) => {
    r = i;
  });
  return { isOpened: t, run: (i) => (t.value = !0, e(i), n), close: (i) => {
    r(i), n = new Promise((l) => {
      r = l;
    }), t.value = !1, s();
  } };
}
function Y() {
  const s = I(Date.now()), e = [], t = y(Z);
  if (!t)
    throw new Error("VariableRepository not provided");
  let r = null;
  try {
    r = y(q);
  } catch {
    console.warn("PageContextService not available for variable resolution");
  }
  const n = () => {
    s.value = Date.now();
  }, u = (i, l = () => {
  }) => {
    const L = /\{\s*([a-zA-Z0-9_]+)\s*\}/g;
    for (const a of e)
      a.unsubscribe(n), a.unsubscribe(l);
    e.length = 0;
    const v = [...i.matchAll(L)].map((a) => a[1]);
    let _ = i;
    for (const a of v)
      try {
        let E;
        try {
          const h = r?.getCurrentPageId();
          E = t.getVariableWithContext ? t.getVariableWithContext(a, h) : t.getVariable(a);
        } catch (h) {
          console.error(h);
        }
        if (E) {
          E.subscribe(n), E.subscribe(l), e.push(E);
          const h = E.value, R = new RegExp(
            `\\{\\s*${a}\\s*\\}`,
            "g"
          );
          _ = _.replace(R, String(h));
        }
      } catch (E) {
        console.warn(`Error resolving variable ${a}:`, E);
      }
    return _;
  };
  return {
    calculateValue: u,
    wrapParameters: (i) => {
      const l = {};
      for (const [L, g] of Object.entries(i))
        try {
          const v = T(() => (s.value, g && u(g.value + "")));
          l[L] = v;
        } catch (v) {
          console.log(v);
        }
      return l;
    }
  };
}
function ae(s) {
  if (!s || typeof s != "object") return {};
  const e = s;
  return typeof e.toJSON == "function" ? e.toJSON() : s;
}
function ie(s) {
  return typeof s?.eAdapterAdd == "function" && typeof s?.eAdapterRemove == "function";
}
function p(s) {
  const e = I(0);
  class t extends H {
    notifyChanged(l) {
      super.notifyChanged(l), !l.isTouch() && l.getEventType() !== K.REMOVING_ADAPTER && (e.value += 1);
    }
  }
  let r, n;
  const u = () => {
    n && r && n.eAdapterRemove(r), n = void 0, r = void 0;
  };
  return N(s, (i) => {
    u(), ie(i) && (r = new t(), i.eAdapterAdd(r), n = i);
  }, { immediate: !0 }), j() && z(u), e;
}
function ne(s) {
  const e = typeof s == "function" ? s : () => s, t = J(e()), r = p(e);
  return N(
    [r, e],
    ([, n]) => {
      t.value === n ? $(t) : t.value = n;
    }
  ), t;
}
function ue(s, e) {
  const t = typeof s == "function" ? s : () => s, r = p(t);
  return T(() => {
    r.value;
    const n = t();
    return n ? e(n)?.toArray() ?? [] : [];
  });
}
function oe(s, e) {
  const t = typeof s == "function" ? s : () => s, r = p(t);
  return T({
    get: () => (r.value, t()?.[e]),
    set: (n) => {
      const u = t();
      u && (u[e] = n);
    }
  });
}
const G = "VARIABLECOMPLEXSTRINGWRAPPER";
class M {
  type = G;
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
      const { calculateValue: r } = Y();
      return t ? r(e, t) : r(e);
    } catch {
      return null;
    }
  }
  set value(e) {
    this._value = e;
  }
}
class o extends F {
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
    return c.Literals.VARIABLE_WRAPPER;
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
      getFeature: () => this.eClass().getEStructuralFeature(o.VALUE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => o.VALUE,
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
      getFeature: () => this.eClass().getEStructuralFeature(o.VARIABLE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => o.VARIABLE,
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
      getFeature: () => this.eClass().getEStructuralFeature(o.IS_SET),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => o.IS_SET,
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
      getFeature: () => this.eClass().getEStructuralFeature(o.TYPE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => o.TYPE,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case o.VALUE:
        return this.value;
      case o.VARIABLE:
        return this.variable;
      case o.IS_SET:
        return this.isSet;
      case o.TYPE:
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
      case o.VALUE:
        this.value = t, super.eSet(e, t);
        break;
      case o.VARIABLE:
        this.variable = t, super.eSet(e, t);
        break;
      case o.IS_SET:
        this.isSet = t, super.eSet(e, t);
        break;
      case o.TYPE:
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
      case o.VALUE:
        return this._value !== void 0;
      case o.VARIABLE:
        return this._variable !== void 0;
      case o.IS_SET:
        return this._isSet !== !1;
      case o.TYPE:
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
      case o.VALUE:
        this._value = void 0;
        return;
      case o.VARIABLE:
        this._variable = void 0;
        return;
      case o.IS_SET:
        this._isSet = !1;
        return;
      case o.TYPE:
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
class f extends F {
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
    return c.Literals.VARIABLE_COMPLEX_STRING_WRAPPER;
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
      getFeature: () => this.eClass().getEStructuralFeature(f.VALUE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => f.VALUE,
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
      getFeature: () => this.eClass().getEStructuralFeature(f.TYPE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => f.TYPE,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case f.VALUE:
        return this.value;
      case f.TYPE:
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
      case f.VALUE:
        this.value = t, super.eSet(e, t);
        break;
      case f.TYPE:
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
      case f.VALUE:
        return this._value !== void 0;
      case f.TYPE:
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
      case f.VALUE:
        this._value = void 0;
        return;
      case f.TYPE:
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
class w extends Q {
  // Lazy singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new w()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(c.eINSTANCE);
  }
  /**
   * Create a new VariableWrapper instance
   */
  createVariableWrapper() {
    return new o();
  }
  /**
   * Create a new VariableComplexStringWrapper instance
   */
  createVariableComplexStringWrapper() {
    return new f();
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
class c extends k {
  static eNAME = "composables";
  static eNS_URI = "org.eclipse.daanse.board.app.ui.vue.composables";
  static eNS_PREFIX = "composables";
  // Singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new c(), this._instance.init()), this._instance;
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
    super(), this.setName(c.eNAME), this.setNsURI(c.eNS_URI), this.setNsPrefix(c.eNS_PREFIX);
  }
  /**
   * Initialize package contents
   */
  init() {
    O.INSTANCE.set(c.eNS_URI, this), this.setEFactoryInstance(w.eINSTANCE);
    const e = new D();
    e.setName("VariableWrapper"), e.setAbstract(!1), e.setInterface(!1), this.getEClassifiers().push(e), e.setEPackage(this), c.Literals.VARIABLE_WRAPPER = e;
    const t = new d();
    t.setName("value"), t.setLowerBound(0), t.setUpperBound(1), e.getEStructuralFeatures().push(t), c.Literals.VARIABLE_WRAPPER__VALUE = t;
    const r = new d();
    r.setName("variable"), r.setLowerBound(0), r.setUpperBound(1), e.getEStructuralFeatures().push(r), c.Literals.VARIABLE_WRAPPER__VARIABLE = r;
    const n = new d();
    n.setName("isSet"), n.setLowerBound(0), n.setUpperBound(1), e.getEStructuralFeatures().push(n), c.Literals.VARIABLE_WRAPPER__IS_SET = n;
    const u = new d();
    u.setName("type"), u.setLowerBound(0), u.setUpperBound(1), e.getEStructuralFeatures().push(u), c.Literals.VARIABLE_WRAPPER__TYPE = u;
    const A = new D();
    A.setName("VariableComplexStringWrapper"), A.setAbstract(!1), A.setInterface(!1), this.getEClassifiers().push(A), A.setEPackage(this), c.Literals.VARIABLE_COMPLEX_STRING_WRAPPER = A;
    const i = new d();
    i.setName("value"), i.setLowerBound(0), i.setUpperBound(1), A.getEStructuralFeatures().push(i), c.Literals.VARIABLE_COMPLEX_STRING_WRAPPER__VALUE = i;
    const l = new d();
    l.setName("type"), l.setLowerBound(0), l.setUpperBound(1), A.getEStructuralFeatures().push(l), c.Literals.VARIABLE_COMPLEX_STRING_WRAPPER__TYPE = l, c.Literals.VARIABLE_WRAPPER__VALUE.setEType(P().getEClassifier("EObject")), c.Literals.VARIABLE_WRAPPER__VARIABLE.setEType(P().getEClassifier("EString")), c.Literals.VARIABLE_WRAPPER__IS_SET.setEType(P().getEClassifier("EBoolean")), c.Literals.VARIABLE_WRAPPER__TYPE.setEType(P().getEClassifier("EString")), c.Literals.VARIABLE_COMPLEX_STRING_WRAPPER__VALUE.setEType(P().getEClassifier("EObject")), c.Literals.VARIABLE_COMPLEX_STRING_WRAPPER__TYPE.setEType(P().getEClassifier("EString"));
  }
}
const ce = {
  VariableWrapper: U,
  VariableComplexStringWrapper: M
};
O.INSTANCE.registerPackage(c.eINSTANCE);
const le = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ComposablesPackage: c,
  VARIABLECOMPLEXSTRINGWRAPPER: G,
  VARIABLEWRAPPER: ee,
  VariableComplexStringWrapper: M,
  VariableWrapper: U,
  WrapperTypes: ce,
  plainSettings: ae,
  useDatasourceRepository: te,
  useEList: ue,
  useEObject: ne,
  useFeature: oe,
  useGlobalLoading: W,
  usePromisifiedModal: re,
  useTemporaryStore: se,
  useVariableRepository: Y
}, Symbol.toStringTag, { value: "Module" })), V = "org.eclipse.daanse.board.app.ui.vue.composables", Ee = "0.0.1-next.1";
async function de(s) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${V}: tsm runtime is not initialized`);
  e.register(V, le, Ee, "ui.vue.composables"), await void 0;
}
async function Pe(s) {
  await void 0;
}
export {
  c as ComposablesPackage,
  G as VARIABLECOMPLEXSTRINGWRAPPER,
  Se as VARIABLEWRAPPER,
  M as VariableComplexStringWrapper,
  ye as VariableWrapper,
  ce as WrapperTypes,
  de as activate,
  Pe as deactivate,
  ae as plainSettings,
  te as useDatasourceRepository,
  ue as useEList,
  ne as useEObject,
  oe as useFeature,
  W as useGlobalLoading,
  re as usePromisifiedModal,
  se as useTemporaryStore,
  Y as useVariableRepository
};
