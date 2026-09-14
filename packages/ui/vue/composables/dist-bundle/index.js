import { identifier as j } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { ref as F, computed as T, inject as O, onMounted as J, onUnmounted as ae, watch as U, onBeforeUnmount as ne, shallowRef as M, toValue as C, triggerRef as ie, getCurrentScope as z, onScopeDispose as H } from "vue";
import { identifier as ue } from "org.eclipse.daanse.board.app.lib.api.variable";
import { identifier as oe } from "org.eclipse.daanse.board.app.lib.api.pagecontext";
import { EContentAdapter as q, NotificationType as g, BasicEObject as Z, BasicEFactory as ce, BasicEPackage as le, EPackageRegistry as K, BasicEClass as x, BasicEAttribute as V, getEcorePackage as D } from "@emfts/core";
import { identifier as Ee } from "org.eclipse.daanse.board.app.lib.api.page";
import { VariableWrapper as Q, VARIABLEWRAPPER as fe } from "org.eclipse.daanse.board.app.lib.variables";
import { VARIABLEWRAPPER as Ue, VariableWrapper as Me } from "org.eclipse.daanse.board.app.lib.variables";
const b = F(0);
function k() {
  return {
    isLoading: T(() => b.value > 0),
    activeLoadingCount: b,
    startLoading: () => {
      b.value++;
    },
    stopLoading: () => {
      b.value > 0 && b.value--;
    }
  };
}
function ve(r, e, t, i = [], a) {
  const u = O(j);
  if (!u)
    throw new Error("DatasourceRepository not provided");
  const { startLoading: d, stopLoading: s } = k(), c = async () => {
    if (!r.value) {
      t.value = null;
      return;
    }
    console.log("getData", r.value), console.log("type", e), d();
    try {
      const E = await u.getDatasource(r.value).getData(e, a?.value || {});
      e === "PivotTable" ? t.value = JSON.parse(JSON.stringify(E)) : t.value = structuredClone(E);
    } catch (o) {
      t.value = null, console.warn(o);
    } finally {
      s();
    }
  }, _ = async (o, E, v = !0) => {
    if (r.value)
      try {
        const n = u.getDatasource(
          r.value
        ), l = n.callEvent(o, E, v);
        if (!v && l instanceof Promise) {
          await l;
          const A = await n.getData(e);
          t.value = structuredClone(A);
        }
      } catch (n) {
        console.warn(n);
      }
  }, L = async (o) => {
    if (!r.value) {
      t.value = null;
      return;
    }
    console.log("getDataWithOptions", r.value, o), console.log("type", e), d();
    try {
      const v = await u.getDatasource(r.value).getData(e, o);
      t.value = structuredClone(v);
    } catch (E) {
      t.value = null, console.warn(E);
    } finally {
      s();
    }
  }, P = (o, E) => {
    try {
      c();
    } catch (v) {
      console.warn(v);
    }
    if (!(!o || !E || o === E)) {
      try {
        const v = u.getDatasource(E);
        v.unsubscribe(c), i.forEach((n) => {
          v.unsubscribe(n);
        });
      } catch (v) {
        console.warn(v);
      }
      try {
        const v = u.getDatasource(o);
        v.subscribe(() => c()), i.forEach((n) => {
          v.subscribe(n);
        });
      } catch (v) {
        console.warn(v);
      }
    }
  }, N = () => {
    try {
      return u.getDatasource(r.value);
    } catch (o) {
      return console.warn(o), null;
    }
  };
  return J(() => {
    c();
    try {
      const o = u.getDatasource(r.value);
      o.subscribe(c), i.forEach((E) => {
        o.subscribe(E);
      });
    } catch (o) {
      console.warn(o);
    }
  }), ae(() => {
    try {
      const o = u.getDatasource(r.value);
      o.unsubscribe(c), i.forEach((E) => {
        o.unsubscribe(E);
      });
    } catch (o) {
      console.warn(o);
    }
  }), {
    data: t,
    callEvent: _,
    update: P,
    getDataWithOptions: L,
    getDatasourceInstance: N
  };
}
function he(r, e, t) {
  const i = O(j);
  if (!i)
    throw new Error("DatasourceRepository not provided");
  const a = i.getDatasourceIdentifiers(r);
  console.log("Identifiers for datasource type", r, a), J(async () => {
    console.log(
      "Creating temporary store for type",
      r,
      "with settings",
      e.value
    );
    const d = i.resolveIdentifier(a.Store);
    t.value = d({ ...e.value.config, _isTemporaryPreview: !0 });
  });
  const u = async () => {
    t.value?.destroy(), t.value = null;
    const s = i.resolveIdentifier(a.Store)({ ...e.value.config, _isTemporaryPreview: !0 });
    return s.initPromise ? (await s.initPromise, t.value = s, s) : (t.value = s, s);
  };
  return U(
    () => e,
    async () => {
    },
    { deep: !0 }
  ), ne(() => {
    console.log("Destroying temporary store"), t.value?.destroy();
  }), {
    update: u
  };
}
function de(r, e = () => {
}) {
  const t = F(!1);
  let i = (s) => {
  }, a = new Promise((s) => {
    i = s;
  });
  return { isOpened: t, run: (s) => (t.value = !0, e(s), a), close: (s) => {
    i(s), a = new Promise((c) => {
      i = c;
    }), t.value = !1, r();
  } };
}
function ee() {
  const r = F(Date.now()), e = [], t = O(ue);
  if (!t)
    throw new Error("VariableRepository not provided");
  let i = null;
  try {
    i = O(oe);
  } catch {
    console.warn("PageContextService not available for variable resolution");
  }
  const a = () => {
    r.value = Date.now();
  }, u = (s, c = () => {
  }) => {
    const _ = /\{\s*([a-zA-Z0-9_]+)\s*\}/g;
    for (const o of e)
      o.unsubscribe(a), o.unsubscribe(c);
    e.length = 0;
    const P = [...s.matchAll(_)].map((o) => o[1]);
    let N = s;
    for (const o of P)
      try {
        let E;
        try {
          const v = i?.getCurrentPageId();
          E = t.getVariableWithContext ? t.getVariableWithContext(o, v) : t.getVariable(o);
        } catch (v) {
          console.error(v);
        }
        if (E) {
          E.subscribe(a), E.subscribe(c), e.push(E);
          const v = E.value, n = new RegExp(
            `\\{\\s*${o}\\s*\\}`,
            "g"
          );
          N = N.replace(n, String(v));
        }
      } catch (E) {
        console.warn(`Error resolving variable ${o}:`, E);
      }
    return N;
  };
  return {
    calculateValue: u,
    wrapParameters: (s) => {
      const c = {};
      for (const [_, L] of Object.entries(s))
        try {
          const P = T(() => (r.value, L && u(L.value + "")));
          c[_] = P;
        } catch (P) {
          console.log(P);
        }
      return c;
    }
  };
}
function Ae(r) {
  if (!r || typeof r != "object") return {};
  const e = r;
  return typeof e.toJSON == "function" ? e.toJSON() : r;
}
function ge(r) {
  return typeof r?.eAdapterAdd == "function" && typeof r?.eAdapterRemove == "function";
}
function m(r) {
  const e = F(0);
  class t extends q {
    notifyChanged(c) {
      super.notifyChanged(c), !c.isTouch() && c.getEventType() !== g.REMOVING_ADAPTER && (e.value += 1);
    }
  }
  let i, a;
  const u = () => {
    a && i && a.eAdapterRemove(i), a = void 0, i = void 0;
  };
  return U(r, (s) => {
    u(), ge(s) && (i = new t(), s.eAdapterAdd(i), a = s);
  }, { immediate: !0 }), z() && H(u), e;
}
function te(r) {
  const e = () => C(r), t = M(e()), i = m(e);
  return U(
    [i, e],
    ([, a]) => {
      t.value === a ? ie(t) : t.value = a;
    }
  ), t;
}
function W(r, e) {
  const t = () => C(r), i = m(t);
  return T(() => {
    i.value;
    const a = t();
    return a ? e(a)?.toArray() ?? [] : [];
  });
}
function Re(r, e) {
  const t = () => C(r), i = m(t);
  return T({
    get: () => (i.value, t()?.[e]),
    set: (a) => {
      const u = t();
      u && (u[e] = a);
    }
  });
}
function Pe(r) {
  const e = O(Ee), t = () => C(r) ?? "", i = te(() => t() ? e.getPage(t()) : void 0), a = T(() => i.value), u = W(a, (s) => s.widgets), d = W(a, (s) => s.layout);
  return {
    page: a,
    widgets: u,
    layout: d,
    addWidget(s, c) {
      const _ = s.uid || "li_" + Math.random().toString(36).substring(7);
      return e.addWidget(t(), { ...s, uid: _ }, c), _;
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
const se = "VARIABLECOMPLEXSTRINGWRAPPER";
class re {
  type = se;
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
      const { calculateValue: i } = ee();
      return t ? i(e, t) : i(e);
    } catch {
      return null;
    }
  }
  set value(e) {
    this._value = e;
  }
}
class f extends Z {
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
class R extends Z {
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
class G extends ce {
  // Lazy singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new G()), this._instance;
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
class h extends le {
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
    K.INSTANCE.set(h.eNS_URI, this), this.setEFactoryInstance(G.eINSTANCE);
    const e = new x();
    e.setName("VariableWrapper"), e.setAbstract(!1), e.setInterface(!1), this.getEClassifiers().push(e), e.setEPackage(this), h.Literals.VARIABLE_WRAPPER = e;
    const t = new V();
    t.setName("value"), t.setLowerBound(0), t.setUpperBound(1), e.getEStructuralFeatures().push(t), h.Literals.VARIABLE_WRAPPER__VALUE = t;
    const i = new V();
    i.setName("variable"), i.setLowerBound(0), i.setUpperBound(1), e.getEStructuralFeatures().push(i), h.Literals.VARIABLE_WRAPPER__VARIABLE = i;
    const a = new V();
    a.setName("isSet"), a.setLowerBound(0), a.setUpperBound(1), e.getEStructuralFeatures().push(a), h.Literals.VARIABLE_WRAPPER__IS_SET = a;
    const u = new V();
    u.setName("type"), u.setLowerBound(0), u.setUpperBound(1), e.getEStructuralFeatures().push(u), h.Literals.VARIABLE_WRAPPER__TYPE = u;
    const d = new x();
    d.setName("VariableComplexStringWrapper"), d.setAbstract(!1), d.setInterface(!1), this.getEClassifiers().push(d), d.setEPackage(this), h.Literals.VARIABLE_COMPLEX_STRING_WRAPPER = d;
    const s = new V();
    s.setName("value"), s.setLowerBound(0), s.setUpperBound(1), d.getEStructuralFeatures().push(s), h.Literals.VARIABLE_COMPLEX_STRING_WRAPPER__VALUE = s;
    const c = new V();
    c.setName("type"), c.setLowerBound(0), c.setUpperBound(1), d.getEStructuralFeatures().push(c), h.Literals.VARIABLE_COMPLEX_STRING_WRAPPER__TYPE = c, h.Literals.VARIABLE_WRAPPER__VALUE.setEType(D().getEClassifier("EObject")), h.Literals.VARIABLE_WRAPPER__VARIABLE.setEType(D().getEClassifier("EString")), h.Literals.VARIABLE_WRAPPER__IS_SET.setEType(D().getEClassifier("EBoolean")), h.Literals.VARIABLE_WRAPPER__TYPE.setEType(D().getEClassifier("EString")), h.Literals.VARIABLE_COMPLEX_STRING_WRAPPER__VALUE.setEType(D().getEClassifier("EObject")), h.Literals.VARIABLE_COMPLEX_STRING_WRAPPER__TYPE.setEType(D().getEClassifier("EString"));
  }
}
function ye(r) {
  const e = r;
  return typeof e?.eAdapterAdd == "function" ? e : void 0;
}
const X = 50;
function _e(r) {
  const e = M([]), t = M([]);
  let i = !0, a, u = !1, d = !1;
  function s(n) {
    if (!n.changes.length) return;
    const l = [...e.value, n];
    e.value = l.length > X ? l.slice(l.length - X) : l, t.value = [];
  }
  function c(n) {
    if (!i || n.isTouch() || n.getEventType() === g.REMOVING_ADAPTER) return;
    const l = {
      notifier: n.getNotifier(),
      feature: n.getFeature(),
      eventType: n.getEventType(),
      oldValue: n.getOldValue(),
      newValue: n.getNewValue(),
      position: n.getPosition()
    };
    if (a || (a = { label: "Änderung", changes: [] }, !u && !d && (d = !0, queueMicrotask(() => {
      d = !1, !u && a && (s(a), a = void 0);
    }))), l.eventType === g.SET) {
      const A = a.changes.find(
        (p) => p.eventType === g.SET && p.notifier === l.notifier && p.feature === l.feature
      );
      if (A) {
        A.newValue = l.newValue;
        return;
      }
    }
    a.changes.push(l);
  }
  class _ extends q {
    notifyChanged(l) {
      super.notifyChanged(l), c(l);
    }
  }
  const L = new _();
  let P;
  U(
    () => C(r),
    (n) => {
      P?.eAdapterRemove(L), P = ye(n), P?.eAdapterAdd(L), e.value = [], t.value = [], a = void 0;
    },
    { immediate: !0 }
  ), z() && H(() => P?.eAdapterRemove(L));
  function N(n) {
    const { notifier: l, feature: A, eventType: p, oldValue: I, newValue: B, position: w } = n;
    if (A)
      switch (p) {
        case g.SET:
        case g.UNSET:
          return l.eSet(A, I), { ...n, oldValue: B, newValue: I };
        case g.ADD: {
          const y = l.eGet(A), S = w >= 0 ? w : y.indexOf(B);
          return S >= 0 && y.removeAt(S), { ...n, eventType: g.REMOVE, oldValue: B, position: S };
        }
        case g.REMOVE: {
          const y = l.eGet(A), S = w >= 0 ? Math.min(w, y.size()) : y.size();
          return y.addAt(S, I), { ...n, eventType: g.ADD, newValue: I, position: S };
        }
        case g.ADD_MANY: {
          const y = l.eGet(A);
          for (const S of B ?? []) {
            const Y = y.indexOf(S);
            Y >= 0 && y.removeAt(Y);
          }
          return { ...n, eventType: g.REMOVE_MANY, oldValue: B };
        }
        case g.REMOVE_MANY: {
          const y = l.eGet(A);
          for (const S of I ?? []) y.add(S);
          return { ...n, eventType: g.ADD_MANY, newValue: I };
        }
        case g.MOVE:
          return l.eGet(A).move(I, w), { ...n, oldValue: w, position: I };
        default:
          return;
      }
  }
  function o(n) {
    i = !1;
    const l = [];
    try {
      for (let A = n.changes.length - 1; A >= 0; A -= 1) {
        const p = N(n.changes[A]);
        p && l.push(p);
      }
    } finally {
      i = !0;
    }
    return { label: n.label, changes: l };
  }
  function E(n) {
    u || (u = !0, a = { label: n, changes: [] });
  }
  function v() {
    u && (u = !1, a && s(a), a = void 0);
  }
  return {
    canUndo: T(() => e.value.length > 0),
    canRedo: T(() => t.value.length > 0),
    undoLabel: T(() => e.value[e.value.length - 1]?.label),
    redoLabel: T(() => t.value[t.value.length - 1]?.label),
    undo() {
      const n = e.value[e.value.length - 1];
      n && (e.value = e.value.slice(0, -1), t.value = [...t.value, o(n)]);
    },
    redo() {
      const n = t.value[t.value.length - 1];
      n && (t.value = t.value.slice(0, -1), e.value = [...e.value, o(n)]);
    },
    begin: E,
    end: v,
    /* Free functions, not methods: a caller that pulls `record` out of the
       object still gets a working one. */
    record(n, l) {
      E(n);
      try {
        return l();
      } finally {
        v();
      }
    },
    clear() {
      e.value = [], t.value = [], a = void 0, u = !1;
    }
  };
}
const Le = {
  VariableWrapper: Q,
  VariableComplexStringWrapper: re
};
K.INSTANCE.registerPackage(h.eINSTANCE);
const Se = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ComposablesPackage: h,
  VARIABLECOMPLEXSTRINGWRAPPER: se,
  VARIABLEWRAPPER: fe,
  VariableComplexStringWrapper: re,
  VariableWrapper: Q,
  WrapperTypes: Le,
  plainSettings: Ae,
  useBoard: Pe,
  useDatasourceRepository: ve,
  useEList: W,
  useEObject: te,
  useFeature: Re,
  useGlobalLoading: k,
  useHistory: _e,
  usePromisifiedModal: de,
  useTemporaryStore: he,
  useVariableRepository: ee
}, Symbol.toStringTag, { value: "Module" })), $ = "org.eclipse.daanse.board.app.ui.vue.composables", Te = "0.0.1-next.1";
async function be(r) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${$}: tsm runtime is not initialized`);
  e.register($, Se, Te, "ui.vue.composables"), await void 0;
}
async function Oe(r) {
  await void 0;
}
export {
  h as ComposablesPackage,
  se as VARIABLECOMPLEXSTRINGWRAPPER,
  Ue as VARIABLEWRAPPER,
  re as VariableComplexStringWrapper,
  Me as VariableWrapper,
  Le as WrapperTypes,
  be as activate,
  Oe as deactivate,
  Ae as plainSettings,
  Pe as useBoard,
  ve as useDatasourceRepository,
  W as useEList,
  te as useEObject,
  Re as useFeature,
  k as useGlobalLoading,
  _e as useHistory,
  de as usePromisifiedModal,
  he as useTemporaryStore,
  ee as useVariableRepository
};
