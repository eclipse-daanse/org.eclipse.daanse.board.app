import { identifier as K } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { ref as m, computed as I, inject as O, onMounted as Q, onUnmounted as Ee, watch as G, onBeforeUnmount as de, shallowRef as W, toValue as M, triggerRef as ge, getCurrentScope as x, onScopeDispose as X } from "vue";
import { identifier as ve } from "org.eclipse.daanse.board.app.lib.api.variable";
import { identifier as he } from "org.eclipse.daanse.board.app.lib.api.pagecontext";
import { EContentAdapter as k, NotificationType as R, BasicEObject as ee, BasicEFactory as Ae, BasicEPackage as Re, EPackageRegistry as te, BasicEClass as z, BasicEAttribute as D, getEcorePackage as B } from "@emfts/core";
import { identifier as ye } from "org.eclipse.daanse.board.app.lib.api.page";
import { VariableWrapper as se, VARIABLEWRAPPER as pe } from "org.eclipse.daanse.board.app.lib.variables";
import { VARIABLEWRAPPER as et, VariableWrapper as tt } from "org.eclipse.daanse.board.app.lib.variables";
const F = m(0);
function re() {
  return {
    isLoading: I(() => F.value > 0),
    activeLoadingCount: F,
    startLoading: () => {
      F.value++;
    },
    stopLoading: () => {
      F.value > 0 && F.value--;
    }
  };
}
function Pe(s, e, t, r = [], n) {
  const i = O(K);
  if (!i)
    throw new Error("DatasourceRepository not provided");
  const { startLoading: l, stopLoading: a } = re(), c = async () => {
    if (!s.value) {
      t.value = null;
      return;
    }
    console.log("getData", s.value), console.log("type", e), l();
    try {
      const f = await i.getDatasource(s.value).getData(e, n?.value || {});
      e === "PivotTable" ? t.value = JSON.parse(JSON.stringify(f)) : t.value = structuredClone(f);
    } catch (o) {
      t.value = null, console.warn(o);
    } finally {
      a();
    }
  }, h = async (o, f, E = !0) => {
    if (s.value)
      try {
        const y = i.getDatasource(
          s.value
        ), u = y.callEvent(o, f, E);
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
    console.log("getDataWithOptions", s.value, o), console.log("type", e), l();
    try {
      const E = await i.getDatasource(s.value).getData(e, o);
      t.value = structuredClone(E);
    } catch (f) {
      t.value = null, console.warn(f);
    } finally {
      a();
    }
  }, A = (o, f) => {
    try {
      c();
    } catch (E) {
      console.warn(E);
    }
    if (!(!o || !f || o === f)) {
      try {
        const E = i.getDatasource(f);
        E.unsubscribe(c), r.forEach((y) => {
          E.unsubscribe(y);
        });
      } catch (E) {
        console.warn(E);
      }
      try {
        const E = i.getDatasource(o);
        E.subscribe(() => c()), r.forEach((y) => {
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
  return Q(() => {
    c();
    try {
      const o = i.getDatasource(s.value);
      o.subscribe(c), r.forEach((f) => {
        o.subscribe(f);
      });
    } catch (o) {
      console.warn(o);
    }
  }), Ee(() => {
    try {
      const o = i.getDatasource(s.value);
      o.unsubscribe(c), r.forEach((f) => {
        o.unsubscribe(f);
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
  const r = O(K);
  if (!r)
    throw new Error("DatasourceRepository not provided");
  const n = r.getDatasourceIdentifiers(s);
  console.log("Identifiers for datasource type", s, n), Q(async () => {
    console.log(
      "Creating temporary store for type",
      s,
      "with settings",
      e.value
    );
    const l = r.resolveIdentifier(n.Store);
    t.value = l({ ...e.value.config, _isTemporaryPreview: !0 });
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
  const t = m(!1);
  let r = (a) => {
  }, n = new Promise((a) => {
    r = a;
  });
  return { isOpened: t, run: (a) => (t.value = !0, e(a), n), close: (a) => {
    r(a), n = new Promise((c) => {
      r = c;
    }), t.value = !1, s();
  } };
}
function ne() {
  const s = m(Date.now()), e = [], t = O(ve);
  if (!t)
    throw new Error("VariableRepository not provided");
  let r = null;
  try {
    r = O(he);
  } catch {
    console.warn("PageContextService not available for variable resolution");
  }
  const n = () => {
    s.value = Date.now();
  }, i = (a, c = () => {
  }) => {
    const h = /\{\s*([a-zA-Z0-9_]+)\s*\}/g;
    for (const o of e)
      o.unsubscribe(n), o.unsubscribe(c);
    e.length = 0;
    const A = [...a.matchAll(h)].map((o) => o[1]);
    let _ = a;
    for (const o of A)
      try {
        let f;
        try {
          const E = r?.getCurrentPageId();
          f = t.getVariableWithContext ? t.getVariableWithContext(o, E) : t.getVariable(o);
        } catch (E) {
          console.error(E);
        }
        if (f) {
          f.subscribe(n), f.subscribe(c), e.push(f);
          const E = f.value, y = new RegExp(
            `\\{\\s*${o}\\s*\\}`,
            "g"
          );
          _ = _.replace(y, String(E));
        }
      } catch (f) {
        console.warn(`Error resolving variable ${o}:`, f);
      }
    return _;
  };
  return {
    calculateValue: i,
    wrapParameters: (a) => {
      const c = {};
      for (const [h, S] of Object.entries(a))
        try {
          const A = I(() => (s.value, S && i(S.value + "")));
          c[h] = A;
        } catch (A) {
          console.log(A);
        }
      return c;
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
function $(s) {
  const e = m(0);
  class t extends k {
    notifyChanged(c) {
      super.notifyChanged(c), !c.isTouch() && c.getEventType() !== R.REMOVING_ADAPTER && (e.value += 1);
    }
  }
  let r, n;
  const i = () => {
    n && r && n.eAdapterRemove(r), n = void 0, r = void 0;
  };
  return G(s, (a) => {
    i(), Te(a) && (r = new t(), a.eAdapterAdd(r), n = a);
  }, { immediate: !0 }), x() && X(i), e;
}
function ae(s) {
  const e = () => M(s), t = W(e()), r = $(e);
  return G(
    [r, e],
    ([, n]) => {
      t.value === n ? ge(t) : t.value = n;
    }
  ), t;
}
function Y(s, e) {
  const t = () => M(s), r = $(t);
  return I(() => {
    r.value;
    const n = t();
    return n ? e(n)?.toArray() ?? [] : [];
  });
}
function Ie(s, e) {
  const t = () => M(s), r = $(t);
  return I({
    get: () => (r.value, t()?.[e]),
    set: (n) => {
      const i = t();
      i && (i[e] = n);
    }
  });
}
function we(s) {
  const e = O(ye), t = () => M(s) ?? "", r = ae(() => t() ? e.getPage(t()) : void 0), n = I(() => r.value), i = Y(n, (a) => a.widgets), l = Y(n, (a) => a.layout);
  return {
    page: n,
    widgets: i,
    layout: l,
    addWidget(a, c) {
      const h = a.uid || "li_" + Math.random().toString(36).substring(7);
      return e.addWidget(t(), { ...a, uid: h }, c), h;
    },
    removeWidget(a) {
      e.removeWidget(t(), a);
    },
    saveWidget(a) {
      e.saveWidget(t(), a);
    },
    setBoard(a, c) {
      e.setBoard(t(), a, c);
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
class g extends ee {
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
    return v.Literals.VARIABLE_WRAPPER;
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
      getFeature: () => this.eClass().getEStructuralFeature(g.VALUE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => g.VALUE,
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
      getFeature: () => this.eClass().getEStructuralFeature(g.VARIABLE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => g.VARIABLE,
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
      getFeature: () => this.eClass().getEStructuralFeature(g.IS_SET),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => g.IS_SET,
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
      getFeature: () => this.eClass().getEStructuralFeature(g.TYPE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => g.TYPE,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case g.VALUE:
        return this.value;
      case g.VARIABLE:
        return this.variable;
      case g.IS_SET:
        return this.isSet;
      case g.TYPE:
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
      case g.VALUE:
        this.value = t, super.eSet(e, t);
        break;
      case g.VARIABLE:
        this.variable = t, super.eSet(e, t);
        break;
      case g.IS_SET:
        this.isSet = t, super.eSet(e, t);
        break;
      case g.TYPE:
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
      case g.VALUE:
        return this._value !== void 0;
      case g.VARIABLE:
        return this._variable !== void 0;
      case g.IS_SET:
        return this._isSet !== !1;
      case g.TYPE:
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
      case g.VALUE:
        this._value = void 0;
        return;
      case g.VARIABLE:
        this._variable = void 0;
        return;
      case g.IS_SET:
        this._isSet = !1;
        return;
      case g.TYPE:
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
    return v.Literals.VARIABLE_COMPLEX_STRING_WRAPPER;
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
class j extends Ae {
  // Lazy singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new j()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(v.eINSTANCE);
  }
  /**
   * Create a new VariableWrapper instance
   */
  createVariableWrapper() {
    return new g();
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
class v extends Re {
  static eNAME = "composables";
  static eNS_URI = "org.eclipse.daanse.board.app.ui.vue.composables";
  static eNS_PREFIX = "composables";
  // Singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new v(), this._instance.init()), this._instance;
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
    super(), this.setName(v.eNAME), this.setNsURI(v.eNS_URI), this.setNsPrefix(v.eNS_PREFIX);
  }
  /**
   * Initialize package contents
   */
  init() {
    te.INSTANCE.set(v.eNS_URI, this), this.setEFactoryInstance(j.eINSTANCE);
    const e = new z();
    e.setName("VariableWrapper"), e.setAbstract(!1), e.setInterface(!1), this.getEClassifiers().push(e), e.setEPackage(this), v.Literals.VARIABLE_WRAPPER = e;
    const t = new D();
    t.setName("value"), t.setLowerBound(0), t.setUpperBound(1), e.getEStructuralFeatures().push(t), v.Literals.VARIABLE_WRAPPER__VALUE = t;
    const r = new D();
    r.setName("variable"), r.setLowerBound(0), r.setUpperBound(1), e.getEStructuralFeatures().push(r), v.Literals.VARIABLE_WRAPPER__VARIABLE = r;
    const n = new D();
    n.setName("isSet"), n.setLowerBound(0), n.setUpperBound(1), e.getEStructuralFeatures().push(n), v.Literals.VARIABLE_WRAPPER__IS_SET = n;
    const i = new D();
    i.setName("type"), i.setLowerBound(0), i.setUpperBound(1), e.getEStructuralFeatures().push(i), v.Literals.VARIABLE_WRAPPER__TYPE = i;
    const l = new z();
    l.setName("VariableComplexStringWrapper"), l.setAbstract(!1), l.setInterface(!1), this.getEClassifiers().push(l), l.setEPackage(this), v.Literals.VARIABLE_COMPLEX_STRING_WRAPPER = l;
    const a = new D();
    a.setName("value"), a.setLowerBound(0), a.setUpperBound(1), l.getEStructuralFeatures().push(a), v.Literals.VARIABLE_COMPLEX_STRING_WRAPPER__VALUE = a;
    const c = new D();
    c.setName("type"), c.setLowerBound(0), c.setUpperBound(1), l.getEStructuralFeatures().push(c), v.Literals.VARIABLE_COMPLEX_STRING_WRAPPER__TYPE = c, v.Literals.VARIABLE_WRAPPER__VALUE.setEType(B().getEClassifier("EObject")), v.Literals.VARIABLE_WRAPPER__VARIABLE.setEType(B().getEClassifier("EString")), v.Literals.VARIABLE_WRAPPER__IS_SET.setEType(B().getEClassifier("EBoolean")), v.Literals.VARIABLE_WRAPPER__TYPE.setEType(B().getEClassifier("EString")), v.Literals.VARIABLE_COMPLEX_STRING_WRAPPER__VALUE.setEType(B().getEClassifier("EObject")), v.Literals.VARIABLE_COMPLEX_STRING_WRAPPER__TYPE.setEType(B().getEClassifier("EString"));
  }
}
function be(s) {
  const e = s;
  return typeof e?.eAdapterAdd == "function" ? e : void 0;
}
const H = 50, U = W();
function Ne() {
  return U;
}
function Ve(s) {
  const e = W([]), t = W([]);
  let r = !0, n, i = !1, l = !1;
  function a(u) {
    if (!u.changes.length) return;
    const d = [...e.value, u];
    e.value = d.length > H ? d.slice(d.length - H) : d, t.value = [];
  }
  function c(u) {
    if (!r || u.isTouch() || u.getEventType() === R.REMOVING_ADAPTER) return;
    const d = {
      notifier: u.getNotifier(),
      feature: u.getFeature(),
      eventType: u.getEventType(),
      oldValue: u.getOldValue(),
      newValue: u.getNewValue(),
      position: u.getPosition()
    };
    if (n || (n = { label: "Änderung", changes: [] }, !i && !l && (l = !0, queueMicrotask(() => {
      l = !1, !i && n && (a(n), n = void 0);
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
  class h extends k {
    notifyChanged(d) {
      super.notifyChanged(d), c(d);
    }
  }
  const S = new h();
  let A;
  G(
    () => M(s),
    (u) => {
      A?.eAdapterRemove(S), A = be(u), A?.eAdapterAdd(S), e.value = [], t.value = [], n = void 0;
    },
    { immediate: !0 }
  ), x() && X(() => {
    A?.eAdapterRemove(S), U.value === y && (U.value = void 0);
  });
  function _(u) {
    const { notifier: d, feature: p, eventType: w, oldValue: b, newValue: C, position: V } = u;
    if (p)
      switch (w) {
        case R.SET:
        case R.UNSET:
          return d.eSet(p, b), { ...u, oldValue: C, newValue: b };
        case R.ADD: {
          const L = d.eGet(p), T = V >= 0 ? V : L.indexOf(C);
          return T >= 0 && L.removeAt(T), { ...u, eventType: R.REMOVE, oldValue: C, position: T };
        }
        case R.REMOVE: {
          const L = d.eGet(p), T = V >= 0 ? Math.min(V, L.size()) : L.size();
          return L.addAt(T, b), { ...u, eventType: R.ADD, newValue: b, position: T };
        }
        case R.ADD_MANY: {
          const L = d.eGet(p);
          for (const T of C ?? []) {
            const J = L.indexOf(T);
            J >= 0 && L.removeAt(J);
          }
          return { ...u, eventType: R.REMOVE_MANY, oldValue: C };
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
  function f(u) {
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
    begin: f,
    end: E,
    /* Free functions, not methods: a caller that pulls `record` out of the
       object still gets a working one. */
    record(u, d) {
      f(u);
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
  return U.value = y, y;
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
    const l = i.getAttribute("name");
    l && n.set(l, i);
  }
  return N.set(r, { nsURI: r, classes: n }), r;
}
function Ce(s) {
  return N.has(s);
}
function q(s, e) {
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
  const n = [], i = /* @__PURE__ */ new Set([`${s}#//${e}`]), l = (h, S) => {
    const A = N.get(h)?.classes.get(S);
    if (A)
      for (const _ of Array.from(A.children)) {
        if (_.tagName !== "eSuperTypes") continue;
        const o = _.getAttribute("href"), f = o ? Oe(o) : void 0;
        if (!f || i.has(o)) continue;
        i.add(o), l(f.nsURI, f.name);
        const E = N.get(f.nsURI)?.classes.get(f.name);
        E && n.push(...q(E, f.name));
      }
  };
  l(s, e);
  const a = q(r, e), c = /* @__PURE__ */ new Map();
  for (const h of [...n, ...a]) c.set(h.name, h);
  return {
    name: e,
    documentation: ue(r),
    features: [...c.values()]
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
const Ue = "i18n";
function We(s) {
  const e = O(Ue, void 0), t = m(0), r = m(e?.language), n = () => {
    t.value += 1, r.value = e?.language;
  };
  return e?.on?.("languageChanged", n), e?.store?.on?.("added", n), e?.store?.on?.("removed", n), x() && X(() => {
    e?.off?.("languageChanged", n), e?.store?.off?.("added", n), e?.store?.off?.("removed", n);
  }), { t: (l, a) => {
    if (t.value, !e) return l;
    const c = s && !l.includes(":") ? `${s}:${l}` : l;
    return e.t(c, a);
  }, language: r, available: !!e };
}
const Ge = {
  VariableWrapper: se,
  VariableComplexStringWrapper: oe
};
te.INSTANCE.registerPackage(v.eINSTANCE);
const Ye = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ComposablesPackage: v,
  VARIABLECOMPLEXSTRINGWRAPPER: ie,
  VARIABLEWRAPPER: pe,
  VariableComplexStringWrapper: oe,
  VariableWrapper: se,
  WrapperTypes: Ge,
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
  useTranslation: We,
  useVariableRepository: ne
}, Symbol.toStringTag, { value: "Module" })), Z = "org.eclipse.daanse.board.app.ui.vue.composables", xe = "0.0.1-next.1";
async function Ze(s) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${Z}: tsm runtime is not initialized`);
  e.register(Z, Ye, xe, "ui.vue.composables"), await void 0;
}
async function Ke(s) {
  await void 0;
}
export {
  v as ComposablesPackage,
  ie as VARIABLECOMPLEXSTRINGWRAPPER,
  et as VARIABLEWRAPPER,
  oe as VariableComplexStringWrapper,
  tt as VariableWrapper,
  Ge as WrapperTypes,
  Ze as activate,
  Ke as deactivate,
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
  We as useTranslation,
  ne as useVariableRepository
};
