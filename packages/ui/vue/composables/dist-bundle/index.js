import { identifier as F } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { ref as T, computed as I, inject as y, onMounted as O, onUnmounted as j, watch as p, onBeforeUnmount as J, shallowRef as z, toValue as N, triggerRef as Z, getCurrentScope as q, onScopeDispose as H } from "vue";
import { identifier as K } from "org.eclipse.daanse.board.app.lib.api.variable";
import { identifier as Q } from "org.eclipse.daanse.board.app.lib.api.pagecontext";
import { EContentAdapter as k, NotificationType as ee, BasicEObject as U, BasicEFactory as te, BasicEPackage as se, EPackageRegistry as W, BasicEClass as b, BasicEAttribute as P, getEcorePackage as L } from "@emfts/core";
import { identifier as re } from "org.eclipse.daanse.board.app.lib.api.page";
import { VariableWrapper as M, VARIABLEWRAPPER as ae } from "org.eclipse.daanse.board.app.lib.variables";
import { VARIABLEWRAPPER as Ne, VariableWrapper as we } from "org.eclipse.daanse.board.app.lib.variables";
const S = T(0);
function Y() {
  return {
    isLoading: I(() => S.value > 0),
    activeLoadingCount: S,
    startLoading: () => {
      S.value++;
    },
    stopLoading: () => {
      S.value > 0 && S.value--;
    }
  };
}
function ie(r, e, t, a = [], i) {
  const u = y(F);
  if (!u)
    throw new Error("DatasourceRepository not provided");
  const { startLoading: A, stopLoading: s } = Y(), o = async () => {
    if (!r.value) {
      t.value = null;
      return;
    }
    console.log("getData", r.value), console.log("type", e), A();
    try {
      const E = await u.getDatasource(r.value).getData(e, i?.value || {});
      e === "PivotTable" ? t.value = JSON.parse(JSON.stringify(E)) : t.value = structuredClone(E);
    } catch (n) {
      t.value = null, console.warn(n);
    } finally {
      s();
    }
  }, g = async (n, E, h = !0) => {
    if (r.value)
      try {
        const R = u.getDatasource(
          r.value
        ), V = R.callEvent(n, E, h);
        if (!h && V instanceof Promise) {
          await V;
          const $ = await R.getData(e);
          t.value = structuredClone($);
        }
      } catch (R) {
        console.warn(R);
      }
  }, d = async (n) => {
    if (!r.value) {
      t.value = null;
      return;
    }
    console.log("getDataWithOptions", r.value, n), console.log("type", e), A();
    try {
      const h = await u.getDatasource(r.value).getData(e, n);
      t.value = structuredClone(h);
    } catch (E) {
      t.value = null, console.warn(E);
    } finally {
      s();
    }
  }, v = (n, E) => {
    try {
      o();
    } catch (h) {
      console.warn(h);
    }
    if (!(!n || !E || n === E)) {
      try {
        const h = u.getDatasource(E);
        h.unsubscribe(o), a.forEach((R) => {
          h.unsubscribe(R);
        });
      } catch (h) {
        console.warn(h);
      }
      try {
        const h = u.getDatasource(n);
        h.subscribe(() => o()), a.forEach((R) => {
          h.subscribe(R);
        });
      } catch (h) {
        console.warn(h);
      }
    }
  }, _ = () => {
    try {
      return u.getDatasource(r.value);
    } catch (n) {
      return console.warn(n), null;
    }
  };
  return O(() => {
    o();
    try {
      const n = u.getDatasource(r.value);
      n.subscribe(o), a.forEach((E) => {
        n.subscribe(E);
      });
    } catch (n) {
      console.warn(n);
    }
  }), j(() => {
    try {
      const n = u.getDatasource(r.value);
      n.unsubscribe(o), a.forEach((E) => {
        n.unsubscribe(E);
      });
    } catch (n) {
      console.warn(n);
    }
  }), {
    data: t,
    callEvent: g,
    update: v,
    getDataWithOptions: d,
    getDatasourceInstance: _
  };
}
function ne(r, e, t) {
  const a = y(F);
  if (!a)
    throw new Error("DatasourceRepository not provided");
  const i = a.getDatasourceIdentifiers(r);
  console.log("Identifiers for datasource type", r, i), O(async () => {
    console.log(
      "Creating temporary store for type",
      r,
      "with settings",
      e.value
    );
    const A = a.resolveIdentifier(i.Store);
    t.value = A({ ...e.value.config, _isTemporaryPreview: !0 });
  });
  const u = async () => {
    t.value?.destroy(), t.value = null;
    const s = a.resolveIdentifier(i.Store)({ ...e.value.config, _isTemporaryPreview: !0 });
    return s.initPromise ? (await s.initPromise, t.value = s, s) : (t.value = s, s);
  };
  return p(
    () => e,
    async () => {
    },
    { deep: !0 }
  ), J(() => {
    console.log("Destroying temporary store"), t.value?.destroy();
  }), {
    update: u
  };
}
function ue(r, e = () => {
}) {
  const t = T(!1);
  let a = (s) => {
  }, i = new Promise((s) => {
    a = s;
  });
  return { isOpened: t, run: (s) => (t.value = !0, e(s), i), close: (s) => {
    a(s), i = new Promise((o) => {
      a = o;
    }), t.value = !1, r();
  } };
}
function G() {
  const r = T(Date.now()), e = [], t = y(K);
  if (!t)
    throw new Error("VariableRepository not provided");
  let a = null;
  try {
    a = y(Q);
  } catch {
    console.warn("PageContextService not available for variable resolution");
  }
  const i = () => {
    r.value = Date.now();
  }, u = (s, o = () => {
  }) => {
    const g = /\{\s*([a-zA-Z0-9_]+)\s*\}/g;
    for (const n of e)
      n.unsubscribe(i), n.unsubscribe(o);
    e.length = 0;
    const v = [...s.matchAll(g)].map((n) => n[1]);
    let _ = s;
    for (const n of v)
      try {
        let E;
        try {
          const h = a?.getCurrentPageId();
          E = t.getVariableWithContext ? t.getVariableWithContext(n, h) : t.getVariable(n);
        } catch (h) {
          console.error(h);
        }
        if (E) {
          E.subscribe(i), E.subscribe(o), e.push(E);
          const h = E.value, R = new RegExp(
            `\\{\\s*${n}\\s*\\}`,
            "g"
          );
          _ = _.replace(R, String(h));
        }
      } catch (E) {
        console.warn(`Error resolving variable ${n}:`, E);
      }
    return _;
  };
  return {
    calculateValue: u,
    wrapParameters: (s) => {
      const o = {};
      for (const [g, d] of Object.entries(s))
        try {
          const v = I(() => (r.value, d && u(d.value + "")));
          o[g] = v;
        } catch (v) {
          console.log(v);
        }
      return o;
    }
  };
}
function oe(r) {
  if (!r || typeof r != "object") return {};
  const e = r;
  return typeof e.toJSON == "function" ? e.toJSON() : r;
}
function ce(r) {
  return typeof r?.eAdapterAdd == "function" && typeof r?.eAdapterRemove == "function";
}
function B(r) {
  const e = T(0);
  class t extends k {
    notifyChanged(o) {
      super.notifyChanged(o), !o.isTouch() && o.getEventType() !== ee.REMOVING_ADAPTER && (e.value += 1);
    }
  }
  let a, i;
  const u = () => {
    i && a && i.eAdapterRemove(a), i = void 0, a = void 0;
  };
  return p(r, (s) => {
    u(), ce(s) && (a = new t(), s.eAdapterAdd(a), i = s);
  }, { immediate: !0 }), q() && H(u), e;
}
function m(r) {
  const e = () => N(r), t = z(e()), a = B(e);
  return p(
    [a, e],
    ([, i]) => {
      t.value === i ? Z(t) : t.value = i;
    }
  ), t;
}
function w(r, e) {
  const t = () => N(r), a = B(t);
  return I(() => {
    a.value;
    const i = t();
    return i ? e(i)?.toArray() ?? [] : [];
  });
}
function le(r, e) {
  const t = () => N(r), a = B(t);
  return I({
    get: () => (a.value, t()?.[e]),
    set: (i) => {
      const u = t();
      u && (u[e] = i);
    }
  });
}
function Ee(r) {
  const e = y(re), t = () => N(r) ?? "", a = m(() => t() ? e.getPage(t()) : void 0), i = I(() => a.value), u = w(i, (s) => s.widgets), A = w(i, (s) => s.layout);
  return {
    page: i,
    widgets: u,
    layout: A,
    addWidget(s, o) {
      const g = s.uid || "li_" + Math.random().toString(36).substring(7);
      return e.addWidget(t(), { ...s, uid: g }, o), g;
    },
    removeWidget(s) {
      e.removeWidget(t(), s);
    },
    saveWidget(s) {
      e.saveWidget(t(), s);
    },
    setBoard(s, o) {
      e.setBoard(t(), s, o);
    },
    clear() {
      e.setBoard(t(), [], []);
    }
  };
}
const X = "VARIABLECOMPLEXSTRINGWRAPPER";
class x {
  type = X;
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
      const { calculateValue: a } = G();
      return t ? a(e, t) : a(e);
    } catch {
      return null;
    }
  }
  set value(e) {
    this._value = e;
  }
}
class c extends U {
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
    return l.Literals.VARIABLE_WRAPPER;
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
      getFeature: () => this.eClass().getEStructuralFeature(c.VALUE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => c.VALUE,
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
      getFeature: () => this.eClass().getEStructuralFeature(c.VARIABLE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => c.VARIABLE,
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
      getFeature: () => this.eClass().getEStructuralFeature(c.IS_SET),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => c.IS_SET,
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
      getFeature: () => this.eClass().getEStructuralFeature(c.TYPE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => c.TYPE,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case c.VALUE:
        return this.value;
      case c.VARIABLE:
        return this.variable;
      case c.IS_SET:
        return this.isSet;
      case c.TYPE:
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
      case c.VALUE:
        this.value = t, super.eSet(e, t);
        break;
      case c.VARIABLE:
        this.variable = t, super.eSet(e, t);
        break;
      case c.IS_SET:
        this.isSet = t, super.eSet(e, t);
        break;
      case c.TYPE:
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
      case c.VALUE:
        return this._value !== void 0;
      case c.VARIABLE:
        return this._variable !== void 0;
      case c.IS_SET:
        return this._isSet !== !1;
      case c.TYPE:
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
      case c.VALUE:
        this._value = void 0;
        return;
      case c.VARIABLE:
        this._variable = void 0;
        return;
      case c.IS_SET:
        this._isSet = !1;
        return;
      case c.TYPE:
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
class f extends U {
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
    return l.Literals.VARIABLE_COMPLEX_STRING_WRAPPER;
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
class D extends te {
  // Lazy singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new D()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(l.eINSTANCE);
  }
  /**
   * Create a new VariableWrapper instance
   */
  createVariableWrapper() {
    return new c();
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
class l extends se {
  static eNAME = "composables";
  static eNS_URI = "org.eclipse.daanse.board.app.ui.vue.composables";
  static eNS_PREFIX = "composables";
  // Singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new l(), this._instance.init()), this._instance;
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
    super(), this.setName(l.eNAME), this.setNsURI(l.eNS_URI), this.setNsPrefix(l.eNS_PREFIX);
  }
  /**
   * Initialize package contents
   */
  init() {
    W.INSTANCE.set(l.eNS_URI, this), this.setEFactoryInstance(D.eINSTANCE);
    const e = new b();
    e.setName("VariableWrapper"), e.setAbstract(!1), e.setInterface(!1), this.getEClassifiers().push(e), e.setEPackage(this), l.Literals.VARIABLE_WRAPPER = e;
    const t = new P();
    t.setName("value"), t.setLowerBound(0), t.setUpperBound(1), e.getEStructuralFeatures().push(t), l.Literals.VARIABLE_WRAPPER__VALUE = t;
    const a = new P();
    a.setName("variable"), a.setLowerBound(0), a.setUpperBound(1), e.getEStructuralFeatures().push(a), l.Literals.VARIABLE_WRAPPER__VARIABLE = a;
    const i = new P();
    i.setName("isSet"), i.setLowerBound(0), i.setUpperBound(1), e.getEStructuralFeatures().push(i), l.Literals.VARIABLE_WRAPPER__IS_SET = i;
    const u = new P();
    u.setName("type"), u.setLowerBound(0), u.setUpperBound(1), e.getEStructuralFeatures().push(u), l.Literals.VARIABLE_WRAPPER__TYPE = u;
    const A = new b();
    A.setName("VariableComplexStringWrapper"), A.setAbstract(!1), A.setInterface(!1), this.getEClassifiers().push(A), A.setEPackage(this), l.Literals.VARIABLE_COMPLEX_STRING_WRAPPER = A;
    const s = new P();
    s.setName("value"), s.setLowerBound(0), s.setUpperBound(1), A.getEStructuralFeatures().push(s), l.Literals.VARIABLE_COMPLEX_STRING_WRAPPER__VALUE = s;
    const o = new P();
    o.setName("type"), o.setLowerBound(0), o.setUpperBound(1), A.getEStructuralFeatures().push(o), l.Literals.VARIABLE_COMPLEX_STRING_WRAPPER__TYPE = o, l.Literals.VARIABLE_WRAPPER__VALUE.setEType(L().getEClassifier("EObject")), l.Literals.VARIABLE_WRAPPER__VARIABLE.setEType(L().getEClassifier("EString")), l.Literals.VARIABLE_WRAPPER__IS_SET.setEType(L().getEClassifier("EBoolean")), l.Literals.VARIABLE_WRAPPER__TYPE.setEType(L().getEClassifier("EString")), l.Literals.VARIABLE_COMPLEX_STRING_WRAPPER__VALUE.setEType(L().getEClassifier("EObject")), l.Literals.VARIABLE_COMPLEX_STRING_WRAPPER__TYPE.setEType(L().getEClassifier("EString"));
  }
}
const he = {
  VariableWrapper: M,
  VariableComplexStringWrapper: x
};
W.INSTANCE.registerPackage(l.eINSTANCE);
const Ae = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ComposablesPackage: l,
  VARIABLECOMPLEXSTRINGWRAPPER: X,
  VARIABLEWRAPPER: ae,
  VariableComplexStringWrapper: x,
  VariableWrapper: M,
  WrapperTypes: he,
  plainSettings: oe,
  useBoard: Ee,
  useDatasourceRepository: ie,
  useEList: w,
  useEObject: m,
  useFeature: le,
  useGlobalLoading: Y,
  usePromisifiedModal: ue,
  useTemporaryStore: ne,
  useVariableRepository: G
}, Symbol.toStringTag, { value: "Module" })), C = "org.eclipse.daanse.board.app.ui.vue.composables", fe = "0.0.1-next.1";
async function Se(r) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${C}: tsm runtime is not initialized`);
  e.register(C, Ae, fe, "ui.vue.composables"), await void 0;
}
async function ye(r) {
  await void 0;
}
export {
  l as ComposablesPackage,
  X as VARIABLECOMPLEXSTRINGWRAPPER,
  Ne as VARIABLEWRAPPER,
  x as VariableComplexStringWrapper,
  we as VariableWrapper,
  he as WrapperTypes,
  Se as activate,
  ye as deactivate,
  oe as plainSettings,
  Ee as useBoard,
  ie as useDatasourceRepository,
  w as useEList,
  m as useEObject,
  le as useFeature,
  Y as useGlobalLoading,
  ue as usePromisifiedModal,
  ne as useTemporaryStore,
  G as useVariableRepository
};
