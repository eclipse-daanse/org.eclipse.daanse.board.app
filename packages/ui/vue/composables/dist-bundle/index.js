import { identifier as k } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { ref as W, computed as I, inject as C, onMounted as q, onUnmounted as Ee, watch as G, onBeforeUnmount as de, shallowRef as U, toValue as F, triggerRef as ve, getCurrentScope as Z, onScopeDispose as K } from "vue";
import { identifier as ge } from "org.eclipse.daanse.board.app.lib.api.variable";
import { identifier as he } from "org.eclipse.daanse.board.app.lib.api.pagecontext";
import { EContentAdapter as Q, NotificationType as R, BasicEObject as ee, BasicEFactory as Ae, BasicEPackage as Re, EPackageRegistry as te, BasicEClass as j, BasicEAttribute as D, getEcorePackage as B } from "@emfts/core";
import { identifier as ye } from "org.eclipse.daanse.board.app.lib.api.page";
import { VariableWrapper as se, VARIABLEWRAPPER as pe } from "org.eclipse.daanse.board.app.lib.variables";
import { VARIABLEWRAPPER as Ke, VariableWrapper as Qe } from "org.eclipse.daanse.board.app.lib.variables";
const O = W(0);
function re() {
  return {
    isLoading: I(() => O.value > 0),
    activeLoadingCount: O,
    startLoading: () => {
      O.value++;
    },
    stopLoading: () => {
      O.value > 0 && O.value--;
    }
  };
}
function Pe(s, e, t, r = [], n) {
  const i = C(k);
  if (!i)
    throw new Error("DatasourceRepository not provided");
  const { startLoading: f, stopLoading: a } = re(), l = async () => {
    if (!s.value) {
      t.value = null;
      return;
    }
    console.log("getData", s.value), console.log("type", e), f();
    try {
      const c = await i.getDatasource(s.value).getData(e, n?.value || {});
      e === "PivotTable" ? t.value = JSON.parse(JSON.stringify(c)) : t.value = structuredClone(c);
    } catch (o) {
      t.value = null, console.warn(o);
    } finally {
      a();
    }
  }, h = async (o, c, E = !0) => {
    if (s.value)
      try {
        const y = i.getDatasource(
          s.value
        ), u = y.callEvent(o, c, E);
        if (!E && u instanceof Promise) {
          await u;
          const d = await y.getData(e);
          t.value = structuredClone(d);
        }
      } catch (y) {
        console.warn(y);
      }
  }, S = async (o) => {
    if (!s.value) {
      t.value = null;
      return;
    }
    console.log("getDataWithOptions", s.value, o), console.log("type", e), f();
    try {
      const E = await i.getDatasource(s.value).getData(e, o);
      t.value = structuredClone(E);
    } catch (c) {
      t.value = null, console.warn(c);
    } finally {
      a();
    }
  }, A = (o, c) => {
    try {
      l();
    } catch (E) {
      console.warn(E);
    }
    if (!(!o || !c || o === c)) {
      try {
        const E = i.getDatasource(c);
        E.unsubscribe(l), r.forEach((y) => {
          E.unsubscribe(y);
        });
      } catch (E) {
        console.warn(E);
      }
      try {
        const E = i.getDatasource(o);
        E.subscribe(() => l()), r.forEach((y) => {
          E.subscribe(y);
        });
      } catch (E) {
        console.warn(E);
      }
    }
  }, _ = () => {
    try {
      return i.getDatasource(s.value);
    } catch (o) {
      return console.warn(o), null;
    }
  };
  return q(() => {
    l();
    try {
      const o = i.getDatasource(s.value);
      o.subscribe(l), r.forEach((c) => {
        o.subscribe(c);
      });
    } catch (o) {
      console.warn(o);
    }
  }), Ee(() => {
    try {
      const o = i.getDatasource(s.value);
      o.unsubscribe(l), r.forEach((c) => {
        o.unsubscribe(c);
      });
    } catch (o) {
      console.warn(o);
    }
  }), {
    data: t,
    callEvent: h,
    update: A,
    getDataWithOptions: S,
    getDatasourceInstance: _
  };
}
function Se(s, e, t) {
  const r = C(k);
  if (!r)
    throw new Error("DatasourceRepository not provided");
  const n = r.getDatasourceIdentifiers(s);
  console.log("Identifiers for datasource type", s, n), q(async () => {
    console.log(
      "Creating temporary store for type",
      s,
      "with settings",
      e.value
    );
    const f = r.resolveIdentifier(n.Store);
    t.value = f({ ...e.value.config, _isTemporaryPreview: !0 });
  });
  const i = async () => {
    t.value?.destroy(), t.value = null;
    const a = r.resolveIdentifier(n.Store)({ ...e.value.config, _isTemporaryPreview: !0 });
    return a.initPromise ? (await a.initPromise, t.value = a, a) : (t.value = a, a);
  };
  return G(
    () => e,
    async () => {
    },
    { deep: !0 }
  ), de(() => {
    console.log("Destroying temporary store"), t.value?.destroy();
  }), {
    update: i
  };
}
function Le(s, e = () => {
}) {
  const t = W(!1);
  let r = (a) => {
  }, n = new Promise((a) => {
    r = a;
  });
  return { isOpened: t, run: (a) => (t.value = !0, e(a), n), close: (a) => {
    r(a), n = new Promise((l) => {
      r = l;
    }), t.value = !1, s();
  } };
}
function ne() {
  const s = W(Date.now()), e = [], t = C(ge);
  if (!t)
    throw new Error("VariableRepository not provided");
  let r = null;
  try {
    r = C(he);
  } catch {
    console.warn("PageContextService not available for variable resolution");
  }
  const n = () => {
    s.value = Date.now();
  }, i = (a, l = () => {
  }) => {
    const h = /\{\s*([a-zA-Z0-9_]+)\s*\}/g;
    for (const o of e)
      o.unsubscribe(n), o.unsubscribe(l);
    e.length = 0;
    const A = [...a.matchAll(h)].map((o) => o[1]);
    let _ = a;
    for (const o of A)
      try {
        let c;
        try {
          const E = r?.getCurrentPageId();
          c = t.getVariableWithContext ? t.getVariableWithContext(o, E) : t.getVariable(o);
        } catch (E) {
          console.error(E);
        }
        if (c) {
          c.subscribe(n), c.subscribe(l), e.push(c);
          const E = c.value, y = new RegExp(
            `\\{\\s*${o}\\s*\\}`,
            "g"
          );
          _ = _.replace(y, String(E));
        }
      } catch (c) {
        console.warn(`Error resolving variable ${o}:`, c);
      }
    return _;
  };
  return {
    calculateValue: i,
    wrapParameters: (a) => {
      const l = {};
      for (const [h, S] of Object.entries(a))
        try {
          const A = I(() => (s.value, S && i(S.value + "")));
          l[h] = A;
        } catch (A) {
          console.log(A);
        }
      return l;
    }
  };
}
function _e(s) {
  if (!s || typeof s != "object") return {};
  const e = s;
  return typeof e.toJSON == "function" ? e.toJSON() : s;
}
function Te(s) {
  return typeof s?.eAdapterAdd == "function" && typeof s?.eAdapterRemove == "function";
}
function x(s) {
  const e = W(0);
  class t extends Q {
    notifyChanged(l) {
      super.notifyChanged(l), !l.isTouch() && l.getEventType() !== R.REMOVING_ADAPTER && (e.value += 1);
    }
  }
  let r, n;
  const i = () => {
    n && r && n.eAdapterRemove(r), n = void 0, r = void 0;
  };
  return G(s, (a) => {
    i(), Te(a) && (r = new t(), a.eAdapterAdd(r), n = a);
  }, { immediate: !0 }), Z() && K(i), e;
}
function ae(s) {
  const e = () => F(s), t = U(e()), r = x(e);
  return G(
    [r, e],
    ([, n]) => {
      t.value === n ? ve(t) : t.value = n;
    }
  ), t;
}
function Y(s, e) {
  const t = () => F(s), r = x(t);
  return I(() => {
    r.value;
    const n = t();
    return n ? e(n)?.toArray() ?? [] : [];
  });
}
function Ie(s, e) {
  const t = () => F(s), r = x(t);
  return I({
    get: () => (r.value, t()?.[e]),
    set: (n) => {
      const i = t();
      i && (i[e] = n);
    }
  });
}
function we(s) {
  const e = C(ye), t = () => F(s) ?? "", r = ae(() => t() ? e.getPage(t()) : void 0), n = I(() => r.value), i = Y(n, (a) => a.widgets), f = Y(n, (a) => a.layout);
  return {
    page: n,
    widgets: i,
    layout: f,
    addWidget(a, l) {
      const h = a.uid || "li_" + Math.random().toString(36).substring(7);
      return e.addWidget(t(), { ...a, uid: h }, l), h;
    },
    removeWidget(a) {
      e.removeWidget(t(), a);
    },
    saveWidget(a) {
      e.saveWidget(t(), a);
    },
    setBoard(a, l) {
      e.setBoard(t(), a, l);
    },
    clear() {
      e.setBoard(t(), [], []);
    }
  };
}
const ie = "VARIABLECOMPLEXSTRINGWRAPPER";
class oe {
  type = ie;
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
      const { calculateValue: r } = ne();
      return t ? r(e, t) : r(e);
    } catch {
      return null;
    }
  }
  set value(e) {
    this._value = e;
  }
}
class v extends ee {
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
    return g.Literals.VARIABLE_WRAPPER;
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
      getFeature: () => this.eClass().getEStructuralFeature(v.VALUE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => v.VALUE,
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
      getFeature: () => this.eClass().getEStructuralFeature(v.VARIABLE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => v.VARIABLE,
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
      getFeature: () => this.eClass().getEStructuralFeature(v.IS_SET),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => v.IS_SET,
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
      getFeature: () => this.eClass().getEStructuralFeature(v.TYPE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => v.TYPE,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case v.VALUE:
        return this.value;
      case v.VARIABLE:
        return this.variable;
      case v.IS_SET:
        return this.isSet;
      case v.TYPE:
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
      case v.VALUE:
        this.value = t, super.eSet(e, t);
        break;
      case v.VARIABLE:
        this.variable = t, super.eSet(e, t);
        break;
      case v.IS_SET:
        this.isSet = t, super.eSet(e, t);
        break;
      case v.TYPE:
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
      case v.VALUE:
        return this._value !== void 0;
      case v.VARIABLE:
        return this._variable !== void 0;
      case v.IS_SET:
        return this._isSet !== !1;
      case v.TYPE:
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
      case v.VALUE:
        this._value = void 0;
        return;
      case v.VARIABLE:
        this._variable = void 0;
        return;
      case v.IS_SET:
        this._isSet = !1;
        return;
      case v.TYPE:
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
class P extends ee {
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
    return g.Literals.VARIABLE_COMPLEX_STRING_WRAPPER;
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
      getFeature: () => this.eClass().getEStructuralFeature(P.VALUE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => P.VALUE,
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
      getFeature: () => this.eClass().getEStructuralFeature(P.TYPE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => P.TYPE,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case P.VALUE:
        return this.value;
      case P.TYPE:
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
      case P.VALUE:
        this.value = t, super.eSet(e, t);
        break;
      case P.TYPE:
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
      case P.VALUE:
        return this._value !== void 0;
      case P.TYPE:
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
      case P.VALUE:
        this._value = void 0;
        return;
      case P.TYPE:
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
class X extends Ae {
  // Lazy singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new X()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(g.eINSTANCE);
  }
  /**
   * Create a new VariableWrapper instance
   */
  createVariableWrapper() {
    return new v();
  }
  /**
   * Create a new VariableComplexStringWrapper instance
   */
  createVariableComplexStringWrapper() {
    return new P();
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
class g extends Re {
  static eNAME = "composables";
  static eNS_URI = "org.eclipse.daanse.board.app.ui.vue.composables";
  static eNS_PREFIX = "composables";
  // Singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new g(), this._instance.init()), this._instance;
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
    super(), this.setName(g.eNAME), this.setNsURI(g.eNS_URI), this.setNsPrefix(g.eNS_PREFIX);
  }
  /**
   * Initialize package contents
   */
  init() {
    te.INSTANCE.set(g.eNS_URI, this), this.setEFactoryInstance(X.eINSTANCE);
    const e = new j();
    e.setName("VariableWrapper"), e.setAbstract(!1), e.setInterface(!1), this.getEClassifiers().push(e), e.setEPackage(this), g.Literals.VARIABLE_WRAPPER = e;
    const t = new D();
    t.setName("value"), t.setLowerBound(0), t.setUpperBound(1), e.getEStructuralFeatures().push(t), g.Literals.VARIABLE_WRAPPER__VALUE = t;
    const r = new D();
    r.setName("variable"), r.setLowerBound(0), r.setUpperBound(1), e.getEStructuralFeatures().push(r), g.Literals.VARIABLE_WRAPPER__VARIABLE = r;
    const n = new D();
    n.setName("isSet"), n.setLowerBound(0), n.setUpperBound(1), e.getEStructuralFeatures().push(n), g.Literals.VARIABLE_WRAPPER__IS_SET = n;
    const i = new D();
    i.setName("type"), i.setLowerBound(0), i.setUpperBound(1), e.getEStructuralFeatures().push(i), g.Literals.VARIABLE_WRAPPER__TYPE = i;
    const f = new j();
    f.setName("VariableComplexStringWrapper"), f.setAbstract(!1), f.setInterface(!1), this.getEClassifiers().push(f), f.setEPackage(this), g.Literals.VARIABLE_COMPLEX_STRING_WRAPPER = f;
    const a = new D();
    a.setName("value"), a.setLowerBound(0), a.setUpperBound(1), f.getEStructuralFeatures().push(a), g.Literals.VARIABLE_COMPLEX_STRING_WRAPPER__VALUE = a;
    const l = new D();
    l.setName("type"), l.setLowerBound(0), l.setUpperBound(1), f.getEStructuralFeatures().push(l), g.Literals.VARIABLE_COMPLEX_STRING_WRAPPER__TYPE = l, g.Literals.VARIABLE_WRAPPER__VALUE.setEType(B().getEClassifier("EObject")), g.Literals.VARIABLE_WRAPPER__VARIABLE.setEType(B().getEClassifier("EString")), g.Literals.VARIABLE_WRAPPER__IS_SET.setEType(B().getEClassifier("EBoolean")), g.Literals.VARIABLE_WRAPPER__TYPE.setEType(B().getEClassifier("EString")), g.Literals.VARIABLE_COMPLEX_STRING_WRAPPER__VALUE.setEType(B().getEClassifier("EObject")), g.Literals.VARIABLE_COMPLEX_STRING_WRAPPER__TYPE.setEType(B().getEClassifier("EString"));
  }
}
function be(s) {
  const e = s;
  return typeof e?.eAdapterAdd == "function" ? e : void 0;
}
const J = 50, M = U();
function Ne() {
  return M;
}
function Ve(s) {
  const e = U([]), t = U([]);
  let r = !0, n, i = !1, f = !1;
  function a(u) {
    if (!u.changes.length) return;
    const d = [...e.value, u];
    e.value = d.length > J ? d.slice(d.length - J) : d, t.value = [];
  }
  function l(u) {
    if (!r || u.isTouch() || u.getEventType() === R.REMOVING_ADAPTER) return;
    const d = {
      notifier: u.getNotifier(),
      feature: u.getFeature(),
      eventType: u.getEventType(),
      oldValue: u.getOldValue(),
      newValue: u.getNewValue(),
      position: u.getPosition()
    };
    if (n || (n = { label: "Änderung", changes: [] }, !i && !f && (f = !0, queueMicrotask(() => {
      f = !1, !i && n && (a(n), n = void 0);
    }))), d.eventType === R.SET) {
      const p = n.changes.find(
        (w) => w.eventType === R.SET && w.notifier === d.notifier && w.feature === d.feature
      );
      if (p) {
        p.newValue = d.newValue;
        return;
      }
    }
    n.changes.push(d);
  }
  class h extends Q {
    notifyChanged(d) {
      super.notifyChanged(d), l(d);
    }
  }
  const S = new h();
  let A;
  G(
    () => F(s),
    (u) => {
      A?.eAdapterRemove(S), A = be(u), A?.eAdapterAdd(S), e.value = [], t.value = [], n = void 0;
    },
    { immediate: !0 }
  ), Z() && K(() => {
    A?.eAdapterRemove(S), M.value === y && (M.value = void 0);
  });
  function _(u) {
    const { notifier: d, feature: p, eventType: w, oldValue: b, newValue: m, position: V } = u;
    if (p)
      switch (w) {
        case R.SET:
        case R.UNSET:
          return d.eSet(p, b), { ...u, oldValue: m, newValue: b };
        case R.ADD: {
          const L = d.eGet(p), T = V >= 0 ? V : L.indexOf(m);
          return T >= 0 && L.removeAt(T), { ...u, eventType: R.REMOVE, oldValue: m, position: T };
        }
        case R.REMOVE: {
          const L = d.eGet(p), T = V >= 0 ? Math.min(V, L.size()) : L.size();
          return L.addAt(T, b), { ...u, eventType: R.ADD, newValue: b, position: T };
        }
        case R.ADD_MANY: {
          const L = d.eGet(p);
          for (const T of m ?? []) {
            const $ = L.indexOf(T);
            $ >= 0 && L.removeAt($);
          }
          return { ...u, eventType: R.REMOVE_MANY, oldValue: m };
        }
        case R.REMOVE_MANY: {
          const L = d.eGet(p);
          for (const T of b ?? []) L.add(T);
          return { ...u, eventType: R.ADD_MANY, newValue: b };
        }
        case R.MOVE:
          return d.eGet(p).move(b, V), { ...u, oldValue: V, position: b };
        default:
          return;
      }
  }
  function o(u) {
    r = !1;
    const d = [];
    try {
      for (let p = u.changes.length - 1; p >= 0; p -= 1) {
        const w = _(u.changes[p]);
        w && d.push(w);
      }
    } finally {
      r = !0;
    }
    return { label: u.label, changes: d };
  }
  function c(u) {
    i || (i = !0, n = { label: u, changes: [] });
  }
  function E() {
    i && (i = !1, n && a(n), n = void 0);
  }
  const y = {
    canUndo: I(() => e.value.length > 0),
    canRedo: I(() => t.value.length > 0),
    undoLabel: I(() => e.value[e.value.length - 1]?.label),
    redoLabel: I(() => t.value[t.value.length - 1]?.label),
    undo() {
      const u = e.value[e.value.length - 1];
      u && (e.value = e.value.slice(0, -1), t.value = [...t.value, o(u)]);
    },
    redo() {
      const u = t.value[t.value.length - 1];
      u && (t.value = t.value.slice(0, -1), e.value = [...e.value, o(u)]);
    },
    begin: c,
    end: E,
    /* Free functions, not methods: a caller that pulls `record` out of the
       object still gets a working one. */
    record(u, d) {
      c(u);
      try {
        return d();
      } finally {
        E();
      }
    },
    clear() {
      e.value = [], t.value = [], n = void 0, i = !1;
    }
  };
  return M.value = y, y;
}
const De = "http://www.eclipse.org/emf/2002/GenModel", Be = {
  EString: "string",
  EInt: "number",
  EIntegerObject: "number",
  ELong: "number",
  EFloat: "number",
  EDouble: "number",
  EBoolean: "boolean",
  EBooleanObject: "boolean",
  EDate: "string"
}, N = /* @__PURE__ */ new Map();
function ue(s) {
  for (const e of Array.from(s.children))
    if (e.tagName === "eAnnotations" && e.getAttribute("source") === De)
      for (const t of Array.from(e.children)) {
        if (t.getAttribute("key") !== "documentation") continue;
        const r = t.getAttribute("value");
        if (r) return r.split(/\s+/).filter(Boolean).join(" ");
      }
}
function me(s) {
  const e = s.getAttribute("eType") ?? "", t = e.split("#//").pop() ?? e;
  return Be[t] ?? t;
}
function Oe(s) {
  const e = s.indexOf("#//");
  if (!(e < 0))
    return { nsURI: s.slice(0, e), name: s.slice(e + 3) };
}
function ce(s) {
  let e;
  try {
    e = new DOMParser().parseFromString(s, "application/xml");
  } catch {
    return;
  }
  const t = e.documentElement;
  if (!t || t.getElementsByTagName("parsererror").length) return;
  const r = t.getAttribute("nsURI");
  if (!r) return;
  if (N.has(r)) return r;
  const n = /* @__PURE__ */ new Map();
  for (const i of Array.from(t.children)) {
    if (i.tagName !== "eClassifiers") continue;
    const f = i.getAttribute("name");
    f && n.set(f, i);
  }
  return N.set(r, { nsURI: r, classes: n }), r;
}
function Ce(s) {
  return N.has(s);
}
function z(s, e) {
  const t = [];
  for (const r of Array.from(s.children)) {
    if (r.tagName !== "eStructuralFeatures") continue;
    const n = r.getAttribute("name");
    if (!n) continue;
    const i = r.getAttribute("upperBound");
    t.push({
      name: n,
      documentation: ue(r),
      type: me(r),
      /* Ecore's default lowerBound is 0; a field is required only when the
         model says so. */
      optional: (r.getAttribute("lowerBound") ?? "0") === "0",
      many: i === "-1" || Number(i ?? "1") > 1,
      declaredBy: e
    });
  }
  return t;
}
function le(s, e) {
  const t = N.get(s), r = t?.classes.get(e);
  if (!t || !r) return;
  const n = [], i = /* @__PURE__ */ new Set([`${s}#//${e}`]), f = (h, S) => {
    const A = N.get(h)?.classes.get(S);
    if (A)
      for (const _ of Array.from(A.children)) {
        if (_.tagName !== "eSuperTypes") continue;
        const o = _.getAttribute("href"), c = o ? Oe(o) : void 0;
        if (!c || i.has(o)) continue;
        i.add(o), f(c.nsURI, c.name);
        const E = N.get(c.nsURI)?.classes.get(c.name);
        E && n.push(...z(E, c.name));
      }
  };
  f(s, e);
  const a = z(r, e), l = /* @__PURE__ */ new Map();
  for (const h of [...n, ...a]) l.set(h.name, h);
  return {
    name: e,
    documentation: ue(r),
    features: [...l.values()]
  };
}
function fe(s) {
  const e = N.get(s);
  if (!e) return;
  const t = [...e.classes.keys()], r = t.filter((i) => /config(uration)?$/i.test(i)), n = r.length === 1 || r.length > 1 ? r[0] : t.length === 1 ? t[0] : void 0;
  return n ? le(s, n) : void 0;
}
function Fe(s) {
  if (!s) return;
  const e = ce(s);
  return e ? fe(e) : void 0;
}
function Me() {
  N.clear();
}
const Ue = {
  VariableWrapper: se,
  VariableComplexStringWrapper: oe
};
te.INSTANCE.registerPackage(g.eINSTANCE);
const We = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ComposablesPackage: g,
  VARIABLECOMPLEXSTRINGWRAPPER: ie,
  VARIABLEWRAPPER: pe,
  VariableComplexStringWrapper: oe,
  VariableWrapper: se,
  WrapperTypes: Ue,
  describeClass: le,
  describeConfiguration: fe,
  describeModel: Fe,
  hasModelDocs: Ce,
  plainSettings: _e,
  registerModelDocs: ce,
  resetModelDocs: Me,
  useBoard: we,
  useCurrentHistory: Ne,
  useDatasourceRepository: Pe,
  useEList: Y,
  useEObject: ae,
  useFeature: Ie,
  useGlobalLoading: re,
  useHistory: Ve,
  usePromisifiedModal: Le,
  useTemporaryStore: Se,
  useVariableRepository: ne
}, Symbol.toStringTag, { value: "Module" })), H = "org.eclipse.daanse.board.app.ui.vue.composables", Ge = "0.0.1-next.1";
async function He(s) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${H}: tsm runtime is not initialized`);
  e.register(H, We, Ge, "ui.vue.composables"), await void 0;
}
async function ke(s) {
  await void 0;
}
export {
  g as ComposablesPackage,
  ie as VARIABLECOMPLEXSTRINGWRAPPER,
  Ke as VARIABLEWRAPPER,
  oe as VariableComplexStringWrapper,
  Qe as VariableWrapper,
  Ue as WrapperTypes,
  He as activate,
  ke as deactivate,
  le as describeClass,
  fe as describeConfiguration,
  Fe as describeModel,
  Ce as hasModelDocs,
  _e as plainSettings,
  ce as registerModelDocs,
  Me as resetModelDocs,
  we as useBoard,
  Ne as useCurrentHistory,
  Pe as useDatasourceRepository,
  Y as useEList,
  ae as useEObject,
  Ie as useFeature,
  re as useGlobalLoading,
  Ve as useHistory,
  Le as usePromisifiedModal,
  Se as useTemporaryStore,
  ne as useVariableRepository
};
