import { identifier as z } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { ref as W, computed as p, inject as C, onMounted as H, onUnmounted as ie, watch as m, onBeforeUnmount as ue, shallowRef as M, toValue as F, triggerRef as oe, getCurrentScope as q, onScopeDispose as Z } from "vue";
import { identifier as ce } from "org.eclipse.daanse.board.app.lib.api.variable";
import { identifier as le } from "org.eclipse.daanse.board.app.lib.api.pagecontext";
import { EContentAdapter as K, NotificationType as A, BasicEObject as Q, BasicEFactory as Ee, BasicEPackage as fe, EPackageRegistry as k, BasicEClass as $, BasicEAttribute as D, getEcorePackage as B } from "@emfts/core";
import { identifier as ve } from "org.eclipse.daanse.board.app.lib.api.page";
import { VariableWrapper as ee, VARIABLEWRAPPER as he } from "org.eclipse.daanse.board.app.lib.variables";
import { VARIABLEWRAPPER as me, VariableWrapper as Ge } from "org.eclipse.daanse.board.app.lib.variables";
const O = W(0);
function te() {
  return {
    isLoading: p(() => O.value > 0),
    activeLoadingCount: O,
    startLoading: () => {
      O.value++;
    },
    stopLoading: () => {
      O.value > 0 && O.value--;
    }
  };
}
function de(r, e, t, n = [], a) {
  const u = C(z);
  if (!u)
    throw new Error("DatasourceRepository not provided");
  const { startLoading: d, stopLoading: s } = te(), c = async () => {
    if (!r.value) {
      t.value = null;
      return;
    }
    console.log("getData", r.value), console.log("type", e), d();
    try {
      const l = await u.getDatasource(r.value).getData(e, a?.value || {});
      e === "PivotTable" ? t.value = JSON.parse(JSON.stringify(l)) : t.value = structuredClone(l);
    } catch (o) {
      t.value = null, console.warn(o);
    } finally {
      s();
    }
  }, L = async (o, l, v = !0) => {
    if (r.value)
      try {
        const g = u.getDatasource(
          r.value
        ), i = g.callEvent(o, l, v);
        if (!v && i instanceof Promise) {
          await i;
          const E = await g.getData(e);
          t.value = structuredClone(E);
        }
      } catch (g) {
        console.warn(g);
      }
  }, S = async (o) => {
    if (!r.value) {
      t.value = null;
      return;
    }
    console.log("getDataWithOptions", r.value, o), console.log("type", e), d();
    try {
      const v = await u.getDatasource(r.value).getData(e, o);
      t.value = structuredClone(v);
    } catch (l) {
      t.value = null, console.warn(l);
    } finally {
      s();
    }
  }, P = (o, l) => {
    try {
      c();
    } catch (v) {
      console.warn(v);
    }
    if (!(!o || !l || o === l)) {
      try {
        const v = u.getDatasource(l);
        v.unsubscribe(c), n.forEach((g) => {
          v.unsubscribe(g);
        });
      } catch (v) {
        console.warn(v);
      }
      try {
        const v = u.getDatasource(o);
        v.subscribe(() => c()), n.forEach((g) => {
          v.subscribe(g);
        });
      } catch (v) {
        console.warn(v);
      }
    }
  }, w = () => {
    try {
      return u.getDatasource(r.value);
    } catch (o) {
      return console.warn(o), null;
    }
  };
  return H(() => {
    c();
    try {
      const o = u.getDatasource(r.value);
      o.subscribe(c), n.forEach((l) => {
        o.subscribe(l);
      });
    } catch (o) {
      console.warn(o);
    }
  }), ie(() => {
    try {
      const o = u.getDatasource(r.value);
      o.unsubscribe(c), n.forEach((l) => {
        o.unsubscribe(l);
      });
    } catch (o) {
      console.warn(o);
    }
  }), {
    data: t,
    callEvent: L,
    update: P,
    getDataWithOptions: S,
    getDatasourceInstance: w
  };
}
function Ae(r, e, t) {
  const n = C(z);
  if (!n)
    throw new Error("DatasourceRepository not provided");
  const a = n.getDatasourceIdentifiers(r);
  console.log("Identifiers for datasource type", r, a), H(async () => {
    console.log(
      "Creating temporary store for type",
      r,
      "with settings",
      e.value
    );
    const d = n.resolveIdentifier(a.Store);
    t.value = d({ ...e.value.config, _isTemporaryPreview: !0 });
  });
  const u = async () => {
    t.value?.destroy(), t.value = null;
    const s = n.resolveIdentifier(a.Store)({ ...e.value.config, _isTemporaryPreview: !0 });
    return s.initPromise ? (await s.initPromise, t.value = s, s) : (t.value = s, s);
  };
  return m(
    () => e,
    async () => {
    },
    { deep: !0 }
  ), ue(() => {
    console.log("Destroying temporary store"), t.value?.destroy();
  }), {
    update: u
  };
}
function ge(r, e = () => {
}) {
  const t = W(!1);
  let n = (s) => {
  }, a = new Promise((s) => {
    n = s;
  });
  return { isOpened: t, run: (s) => (t.value = !0, e(s), a), close: (s) => {
    n(s), a = new Promise((c) => {
      n = c;
    }), t.value = !1, r();
  } };
}
function se() {
  const r = W(Date.now()), e = [], t = C(ce);
  if (!t)
    throw new Error("VariableRepository not provided");
  let n = null;
  try {
    n = C(le);
  } catch {
    console.warn("PageContextService not available for variable resolution");
  }
  const a = () => {
    r.value = Date.now();
  }, u = (s, c = () => {
  }) => {
    const L = /\{\s*([a-zA-Z0-9_]+)\s*\}/g;
    for (const o of e)
      o.unsubscribe(a), o.unsubscribe(c);
    e.length = 0;
    const P = [...s.matchAll(L)].map((o) => o[1]);
    let w = s;
    for (const o of P)
      try {
        let l;
        try {
          const v = n?.getCurrentPageId();
          l = t.getVariableWithContext ? t.getVariableWithContext(o, v) : t.getVariable(o);
        } catch (v) {
          console.error(v);
        }
        if (l) {
          l.subscribe(a), l.subscribe(c), e.push(l);
          const v = l.value, g = new RegExp(
            `\\{\\s*${o}\\s*\\}`,
            "g"
          );
          w = w.replace(g, String(v));
        }
      } catch (l) {
        console.warn(`Error resolving variable ${o}:`, l);
      }
    return w;
  };
  return {
    calculateValue: u,
    wrapParameters: (s) => {
      const c = {};
      for (const [L, S] of Object.entries(s))
        try {
          const P = p(() => (r.value, S && u(S.value + "")));
          c[L] = P;
        } catch (P) {
          console.log(P);
        }
      return c;
    }
  };
}
function Re(r) {
  if (!r || typeof r != "object") return {};
  const e = r;
  return typeof e.toJSON == "function" ? e.toJSON() : r;
}
function ye(r) {
  return typeof r?.eAdapterAdd == "function" && typeof r?.eAdapterRemove == "function";
}
function Y(r) {
  const e = W(0);
  class t extends K {
    notifyChanged(c) {
      super.notifyChanged(c), !c.isTouch() && c.getEventType() !== A.REMOVING_ADAPTER && (e.value += 1);
    }
  }
  let n, a;
  const u = () => {
    a && n && a.eAdapterRemove(n), a = void 0, n = void 0;
  };
  return m(r, (s) => {
    u(), ye(s) && (n = new t(), s.eAdapterAdd(n), a = s);
  }, { immediate: !0 }), q() && Z(u), e;
}
function re(r) {
  const e = () => F(r), t = M(e()), n = Y(e);
  return m(
    [n, e],
    ([, a]) => {
      t.value === a ? oe(t) : t.value = a;
    }
  ), t;
}
function G(r, e) {
  const t = () => F(r), n = Y(t);
  return p(() => {
    n.value;
    const a = t();
    return a ? e(a)?.toArray() ?? [] : [];
  });
}
function Pe(r, e) {
  const t = () => F(r), n = Y(t);
  return p({
    get: () => (n.value, t()?.[e]),
    set: (a) => {
      const u = t();
      u && (u[e] = a);
    }
  });
}
function _e(r) {
  const e = C(ve), t = () => F(r) ?? "", n = re(() => t() ? e.getPage(t()) : void 0), a = p(() => n.value), u = G(a, (s) => s.widgets), d = G(a, (s) => s.layout);
  return {
    page: a,
    widgets: u,
    layout: d,
    addWidget(s, c) {
      const L = s.uid || "li_" + Math.random().toString(36).substring(7);
      return e.addWidget(t(), { ...s, uid: L }, c), L;
    },
    removeWidget(s) {
      e.removeWidget(t(), s);
    },
    saveWidget(s) {
      e.saveWidget(t(), s);
    },
    setBoard(s, c) {
      e.setBoard(t(), s, c);
    },
    clear() {
      e.setBoard(t(), [], []);
    }
  };
}
const ae = "VARIABLECOMPLEXSTRINGWRAPPER";
class ne {
  type = ae;
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
      const { calculateValue: n } = se();
      return t ? n(e, t) : n(e);
    } catch {
      return null;
    }
  }
  set value(e) {
    this._value = e;
  }
}
class f extends Q {
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
  get variable() {
    return this._variable;
  }
  set variable(e) {
    const t = this._variable;
    this._variable = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(f.VARIABLE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => f.VARIABLE,
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
      getFeature: () => this.eClass().getEStructuralFeature(f.IS_SET),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => f.IS_SET,
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
      case f.VARIABLE:
        return this.variable;
      case f.IS_SET:
        return this.isSet;
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
      case f.VARIABLE:
        this.variable = t, super.eSet(e, t);
        break;
      case f.IS_SET:
        this.isSet = t, super.eSet(e, t);
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
      case f.VARIABLE:
        return this._variable !== void 0;
      case f.IS_SET:
        return this._isSet !== !1;
      case f.TYPE:
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
      case f.VALUE:
        this._value = void 0;
        return;
      case f.VARIABLE:
        this._variable = void 0;
        return;
      case f.IS_SET:
        this._isSet = !1;
        return;
      case f.TYPE:
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
class y extends Q {
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
    return h.Literals.VARIABLE_COMPLEX_STRING_WRAPPER;
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
      getFeature: () => this.eClass().getEStructuralFeature(y.VALUE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => y.VALUE,
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
      getFeature: () => this.eClass().getEStructuralFeature(y.TYPE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => y.TYPE,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case y.VALUE:
        return this.value;
      case y.TYPE:
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
      case y.VALUE:
        this.value = t, super.eSet(e, t);
        break;
      case y.TYPE:
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
      case y.VALUE:
        return this._value !== void 0;
      case y.TYPE:
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
      case y.VALUE:
        this._value = void 0;
        return;
      case y.TYPE:
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
class x extends Ee {
  // Lazy singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new x()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(h.eINSTANCE);
  }
  /**
   * Create a new VariableWrapper instance
   */
  createVariableWrapper() {
    return new f();
  }
  /**
   * Create a new VariableComplexStringWrapper instance
   */
  createVariableComplexStringWrapper() {
    return new y();
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
class h extends fe {
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
    VARIABLE_WRAPPER__TYPE: null,
    VARIABLE_COMPLEX_STRING_WRAPPER: null,
    VARIABLE_COMPLEX_STRING_WRAPPER__VALUE: null,
    VARIABLE_COMPLEX_STRING_WRAPPER__TYPE: null
  };
  constructor() {
    super(), this.setName(h.eNAME), this.setNsURI(h.eNS_URI), this.setNsPrefix(h.eNS_PREFIX);
  }
  /**
   * Initialize package contents
   */
  init() {
    k.INSTANCE.set(h.eNS_URI, this), this.setEFactoryInstance(x.eINSTANCE);
    const e = new $();
    e.setName("VariableWrapper"), e.setAbstract(!1), e.setInterface(!1), this.getEClassifiers().push(e), e.setEPackage(this), h.Literals.VARIABLE_WRAPPER = e;
    const t = new D();
    t.setName("value"), t.setLowerBound(0), t.setUpperBound(1), e.getEStructuralFeatures().push(t), h.Literals.VARIABLE_WRAPPER__VALUE = t;
    const n = new D();
    n.setName("variable"), n.setLowerBound(0), n.setUpperBound(1), e.getEStructuralFeatures().push(n), h.Literals.VARIABLE_WRAPPER__VARIABLE = n;
    const a = new D();
    a.setName("isSet"), a.setLowerBound(0), a.setUpperBound(1), e.getEStructuralFeatures().push(a), h.Literals.VARIABLE_WRAPPER__IS_SET = a;
    const u = new D();
    u.setName("type"), u.setLowerBound(0), u.setUpperBound(1), e.getEStructuralFeatures().push(u), h.Literals.VARIABLE_WRAPPER__TYPE = u;
    const d = new $();
    d.setName("VariableComplexStringWrapper"), d.setAbstract(!1), d.setInterface(!1), this.getEClassifiers().push(d), d.setEPackage(this), h.Literals.VARIABLE_COMPLEX_STRING_WRAPPER = d;
    const s = new D();
    s.setName("value"), s.setLowerBound(0), s.setUpperBound(1), d.getEStructuralFeatures().push(s), h.Literals.VARIABLE_COMPLEX_STRING_WRAPPER__VALUE = s;
    const c = new D();
    c.setName("type"), c.setLowerBound(0), c.setUpperBound(1), d.getEStructuralFeatures().push(c), h.Literals.VARIABLE_COMPLEX_STRING_WRAPPER__TYPE = c, h.Literals.VARIABLE_WRAPPER__VALUE.setEType(B().getEClassifier("EObject")), h.Literals.VARIABLE_WRAPPER__VARIABLE.setEType(B().getEClassifier("EString")), h.Literals.VARIABLE_WRAPPER__IS_SET.setEType(B().getEClassifier("EBoolean")), h.Literals.VARIABLE_WRAPPER__TYPE.setEType(B().getEClassifier("EString")), h.Literals.VARIABLE_COMPLEX_STRING_WRAPPER__VALUE.setEType(B().getEClassifier("EObject")), h.Literals.VARIABLE_COMPLEX_STRING_WRAPPER__TYPE.setEType(B().getEClassifier("EString"));
  }
}
function Le(r) {
  const e = r;
  return typeof e?.eAdapterAdd == "function" ? e : void 0;
}
const j = 50, U = M();
function Se() {
  return U;
}
function Te(r) {
  const e = M([]), t = M([]);
  let n = !0, a, u = !1, d = !1;
  function s(i) {
    if (!i.changes.length) return;
    const E = [...e.value, i];
    e.value = E.length > j ? E.slice(E.length - j) : E, t.value = [];
  }
  function c(i) {
    if (!n || i.isTouch() || i.getEventType() === A.REMOVING_ADAPTER) return;
    const E = {
      notifier: i.getNotifier(),
      feature: i.getFeature(),
      eventType: i.getEventType(),
      oldValue: i.getOldValue(),
      newValue: i.getNewValue(),
      position: i.getPosition()
    };
    if (a || (a = { label: "Änderung", changes: [] }, !u && !d && (d = !0, queueMicrotask(() => {
      d = !1, !u && a && (s(a), a = void 0);
    }))), E.eventType === A.SET) {
      const R = a.changes.find(
        (I) => I.eventType === A.SET && I.notifier === E.notifier && I.feature === E.feature
      );
      if (R) {
        R.newValue = E.newValue;
        return;
      }
    }
    a.changes.push(E);
  }
  class L extends K {
    notifyChanged(E) {
      super.notifyChanged(E), c(E);
    }
  }
  const S = new L();
  let P;
  m(
    () => F(r),
    (i) => {
      P?.eAdapterRemove(S), P = Le(i), P?.eAdapterAdd(S), e.value = [], t.value = [], a = void 0;
    },
    { immediate: !0 }
  ), q() && Z(() => {
    P?.eAdapterRemove(S), U.value === g && (U.value = void 0);
  });
  function w(i) {
    const { notifier: E, feature: R, eventType: I, oldValue: N, newValue: b, position: V } = i;
    if (R)
      switch (I) {
        case A.SET:
        case A.UNSET:
          return E.eSet(R, N), { ...i, oldValue: b, newValue: N };
        case A.ADD: {
          const _ = E.eGet(R), T = V >= 0 ? V : _.indexOf(b);
          return T >= 0 && _.removeAt(T), { ...i, eventType: A.REMOVE, oldValue: b, position: T };
        }
        case A.REMOVE: {
          const _ = E.eGet(R), T = V >= 0 ? Math.min(V, _.size()) : _.size();
          return _.addAt(T, N), { ...i, eventType: A.ADD, newValue: N, position: T };
        }
        case A.ADD_MANY: {
          const _ = E.eGet(R);
          for (const T of b ?? []) {
            const X = _.indexOf(T);
            X >= 0 && _.removeAt(X);
          }
          return { ...i, eventType: A.REMOVE_MANY, oldValue: b };
        }
        case A.REMOVE_MANY: {
          const _ = E.eGet(R);
          for (const T of N ?? []) _.add(T);
          return { ...i, eventType: A.ADD_MANY, newValue: N };
        }
        case A.MOVE:
          return E.eGet(R).move(N, V), { ...i, oldValue: V, position: N };
        default:
          return;
      }
  }
  function o(i) {
    n = !1;
    const E = [];
    try {
      for (let R = i.changes.length - 1; R >= 0; R -= 1) {
        const I = w(i.changes[R]);
        I && E.push(I);
      }
    } finally {
      n = !0;
    }
    return { label: i.label, changes: E };
  }
  function l(i) {
    u || (u = !0, a = { label: i, changes: [] });
  }
  function v() {
    u && (u = !1, a && s(a), a = void 0);
  }
  const g = {
    canUndo: p(() => e.value.length > 0),
    canRedo: p(() => t.value.length > 0),
    undoLabel: p(() => e.value[e.value.length - 1]?.label),
    redoLabel: p(() => t.value[t.value.length - 1]?.label),
    undo() {
      const i = e.value[e.value.length - 1];
      i && (e.value = e.value.slice(0, -1), t.value = [...t.value, o(i)]);
    },
    redo() {
      const i = t.value[t.value.length - 1];
      i && (t.value = t.value.slice(0, -1), e.value = [...e.value, o(i)]);
    },
    begin: l,
    end: v,
    /* Free functions, not methods: a caller that pulls `record` out of the
       object still gets a working one. */
    record(i, E) {
      l(i);
      try {
        return E();
      } finally {
        v();
      }
    },
    clear() {
      e.value = [], t.value = [], a = void 0, u = !1;
    }
  };
  return U.value = g, g;
}
const pe = {
  VariableWrapper: ee,
  VariableComplexStringWrapper: ne
};
k.INSTANCE.registerPackage(h.eINSTANCE);
const Ie = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ComposablesPackage: h,
  VARIABLECOMPLEXSTRINGWRAPPER: ae,
  VARIABLEWRAPPER: he,
  VariableComplexStringWrapper: ne,
  VariableWrapper: ee,
  WrapperTypes: pe,
  plainSettings: Re,
  useBoard: _e,
  useCurrentHistory: Se,
  useDatasourceRepository: de,
  useEList: G,
  useEObject: re,
  useFeature: Pe,
  useGlobalLoading: te,
  useHistory: Te,
  usePromisifiedModal: ge,
  useTemporaryStore: Ae,
  useVariableRepository: se
}, Symbol.toStringTag, { value: "Module" })), J = "org.eclipse.daanse.board.app.ui.vue.composables", Ne = "0.0.1-next.1";
async function Fe(r) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${J}: tsm runtime is not initialized`);
  e.register(J, Ie, Ne, "ui.vue.composables"), await void 0;
}
async function Ue(r) {
  await void 0;
}
export {
  h as ComposablesPackage,
  ae as VARIABLECOMPLEXSTRINGWRAPPER,
  me as VARIABLEWRAPPER,
  ne as VariableComplexStringWrapper,
  Ge as VariableWrapper,
  pe as WrapperTypes,
  Fe as activate,
  Ue as deactivate,
  Re as plainSettings,
  _e as useBoard,
  Se as useCurrentHistory,
  de as useDatasourceRepository,
  G as useEList,
  re as useEObject,
  Pe as useFeature,
  te as useGlobalLoading,
  Te as useHistory,
  ge as usePromisifiedModal,
  Ae as useTemporaryStore,
  se as useVariableRepository
};
