import { identifier as Q } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { ref as B, computed as I, inject as M, onMounted as G, onUnmounted as ve, watch as Y, onBeforeUnmount as he, shallowRef as W, toValue as F, triggerRef as Ae, getCurrentScope as X, onScopeDispose as $, getCurrentInstance as ee } from "vue";
import { identifier as Re } from "org.eclipse.daanse.board.app.lib.api.variable";
import { identifier as ye } from "org.eclipse.daanse.board.app.lib.api.pagecontext";
import { EContentAdapter as te, NotificationType as R, BasicEObject as se, BasicEFactory as pe, BasicEPackage as Pe, EPackageRegistry as ne, BasicEClass as H, BasicEAttribute as D, getEcorePackage as m } from "@emfts/core";
import { identifier as Se } from "org.eclipse.daanse.board.app.lib.api.page";
import { VariableWrapper as re, VARIABLEWRAPPER as Le } from "org.eclipse.daanse.board.app.lib.variables";
import { VARIABLEWRAPPER as ot, VariableWrapper as ut } from "org.eclipse.daanse.board.app.lib.variables";
const O = B(0);
function ae() {
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
function _e(s, e, t, n = [], r) {
  const i = M(Q);
  if (!i)
    throw new Error("DatasourceRepository not provided");
  const { startLoading: o, stopLoading: a } = ae(), l = async () => {
    if (!s.value) {
      t.value = null;
      return;
    }
    console.log("getData", s.value), console.log("type", e), o();
    try {
      const f = await i.getDatasource(s.value).getData(e, r?.value || {});
      e === "PivotTable" ? t.value = JSON.parse(JSON.stringify(f)) : t.value = structuredClone(f);
    } catch (u) {
      t.value = null, console.warn(u);
    } finally {
      a();
    }
  }, d = async (u, f, E = !0) => {
    if (s.value)
      try {
        const p = i.getDatasource(
          s.value
        ), c = p.callEvent(u, f, E);
        if (!E && c instanceof Promise) {
          await c;
          const g = await p.getData(e);
          t.value = structuredClone(g);
        }
      } catch (p) {
        console.warn(p);
      }
  }, y = async (u) => {
    if (!s.value) {
      t.value = null;
      return;
    }
    console.log("getDataWithOptions", s.value, u), console.log("type", e), o();
    try {
      const E = await i.getDatasource(s.value).getData(e, u);
      t.value = structuredClone(E);
    } catch (f) {
      t.value = null, console.warn(f);
    } finally {
      a();
    }
  }, A = (u, f) => {
    try {
      l();
    } catch (E) {
      console.warn(E);
    }
    if (!(!u || !f || u === f)) {
      try {
        const E = i.getDatasource(f);
        E.unsubscribe(l), n.forEach((p) => {
          E.unsubscribe(p);
        });
      } catch (E) {
        console.warn(E);
      }
      try {
        const E = i.getDatasource(u);
        E.subscribe(() => l()), n.forEach((p) => {
          E.subscribe(p);
        });
      } catch (E) {
        console.warn(E);
      }
    }
  }, L = () => {
    try {
      return i.getDatasource(s.value);
    } catch (u) {
      return console.warn(u), null;
    }
  };
  return G(() => {
    l();
    try {
      const u = i.getDatasource(s.value);
      u.subscribe(l), n.forEach((f) => {
        u.subscribe(f);
      });
    } catch (u) {
      console.warn(u);
    }
  }), ve(() => {
    try {
      const u = i.getDatasource(s.value);
      u.unsubscribe(l), n.forEach((f) => {
        u.unsubscribe(f);
      });
    } catch (u) {
      console.warn(u);
    }
  }), {
    data: t,
    callEvent: d,
    update: A,
    getDataWithOptions: y,
    getDatasourceInstance: L
  };
}
function Te(s, e, t) {
  const n = M(Q);
  if (!n)
    throw new Error("DatasourceRepository not provided");
  const r = n.getDatasourceIdentifiers(s);
  console.log("Identifiers for datasource type", s, r), G(async () => {
    console.log(
      "Creating temporary store for type",
      s,
      "with settings",
      e.value
    );
    const o = n.resolveIdentifier(r.Store);
    t.value = o({ ...e.value.config, _isTemporaryPreview: !0 });
  });
  const i = async () => {
    t.value?.destroy(), t.value = null;
    const a = n.resolveIdentifier(r.Store)({ ...e.value.config, _isTemporaryPreview: !0 });
    return a.initPromise ? (await a.initPromise, t.value = a, a) : (t.value = a, a);
  };
  return Y(
    () => e,
    async () => {
    },
    { deep: !0 }
  ), he(() => {
    console.log("Destroying temporary store"), t.value?.destroy();
  }), {
    update: i
  };
}
function Ie(s, e = () => {
}) {
  const t = B(!1);
  let n = (a) => {
  }, r = new Promise((a) => {
    n = a;
  });
  return { isOpened: t, run: (a) => (t.value = !0, e(a), r), close: (a) => {
    n(a), r = new Promise((l) => {
      n = l;
    }), t.value = !1, s();
  } };
}
function ie() {
  const s = B(Date.now()), e = [], t = M(Re);
  if (!t)
    throw new Error("VariableRepository not provided");
  let n = null;
  try {
    n = M(ye);
  } catch {
    console.warn("PageContextService not available for variable resolution");
  }
  const r = () => {
    s.value = Date.now();
  }, i = (a, l = () => {
  }) => {
    const d = /\{\s*([a-zA-Z0-9_]+)\s*\}/g;
    for (const u of e)
      u.unsubscribe(r), u.unsubscribe(l);
    e.length = 0;
    const A = [...a.matchAll(d)].map((u) => u[1]);
    let L = a;
    for (const u of A)
      try {
        let f;
        try {
          const E = n?.getCurrentPageId();
          f = t.getVariableWithContext ? t.getVariableWithContext(u, E) : t.getVariable(u);
        } catch (E) {
          console.error(E);
        }
        if (f) {
          f.subscribe(r), f.subscribe(l), e.push(f);
          const E = f.value, p = new RegExp(
            `\\{\\s*${u}\\s*\\}`,
            "g"
          );
          L = L.replace(p, String(E));
        }
      } catch (f) {
        console.warn(`Error resolving variable ${u}:`, f);
      }
    return L;
  };
  return {
    calculateValue: i,
    wrapParameters: (a) => {
      const l = {};
      for (const [d, y] of Object.entries(a))
        try {
          const A = I(() => (s.value, y && i(y.value + "")));
          l[d] = A;
        } catch (A) {
          console.log(A);
        }
      return l;
    }
  };
}
function we(s) {
  if (!s || typeof s != "object") return {};
  const e = s;
  return typeof e.toJSON == "function" ? e.toJSON() : s;
}
function be(s) {
  return typeof s?.eAdapterAdd == "function" && typeof s?.eAdapterRemove == "function";
}
function j(s) {
  const e = B(0);
  class t extends te {
    notifyChanged(l) {
      super.notifyChanged(l), !l.isTouch() && l.getEventType() !== R.REMOVING_ADAPTER && (e.value += 1);
    }
  }
  let n, r;
  const i = () => {
    r && n && r.eAdapterRemove(n), r = void 0, n = void 0;
  };
  return Y(s, (a) => {
    i(), be(a) && (n = new t(), a.eAdapterAdd(n), r = a);
  }, { immediate: !0 }), X() && $(i), e;
}
function oe(s) {
  const e = () => F(s), t = W(e()), n = j(e);
  return Y(
    [n, e],
    ([, r]) => {
      t.value === r ? Ae(t) : t.value = r;
    }
  ), t;
}
function x(s, e) {
  const t = () => F(s), n = j(t);
  return I(() => {
    n.value;
    const r = t();
    return r ? e(r)?.toArray() ?? [] : [];
  });
}
function Ne(s, e) {
  const t = () => F(s), n = j(t);
  return I({
    get: () => (n.value, t()?.[e]),
    set: (r) => {
      const i = t();
      i && (i[e] = r);
    }
  });
}
function Ve(s) {
  const e = M(Se), t = () => F(s) ?? "", n = oe(() => t() ? e.getPage(t()) : void 0), r = I(() => n.value), i = x(r, (a) => a.widgets), o = x(r, (a) => a.layout);
  return {
    page: r,
    widgets: i,
    layout: o,
    addWidget(a, l) {
      const d = a.uid || "li_" + Math.random().toString(36).substring(7);
      return e.addWidget(t(), { ...a, uid: d }, l), d;
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
const ue = "VARIABLECOMPLEXSTRINGWRAPPER";
class ce {
  type = ue;
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
      const { calculateValue: n } = ie();
      return t ? n(e, t) : n(e);
    } catch {
      return null;
    }
  }
  set value(e) {
    this._value = e;
  }
}
class v extends se {
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
class S extends se {
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
      getFeature: () => this.eClass().getEStructuralFeature(S.VALUE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => S.VALUE,
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
      getFeature: () => this.eClass().getEStructuralFeature(S.TYPE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => S.TYPE,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case S.VALUE:
        return this.value;
      case S.TYPE:
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
      case S.VALUE:
        this.value = t, super.eSet(e, t);
        break;
      case S.TYPE:
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
      case S.VALUE:
        return this._value !== void 0;
      case S.TYPE:
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
      case S.VALUE:
        this._value = void 0;
        return;
      case S.TYPE:
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
class J extends pe {
  // Lazy singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new J()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(h.eINSTANCE);
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
    return new S();
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
class h extends Pe {
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
    ne.INSTANCE.set(h.eNS_URI, this), this.setEFactoryInstance(J.eINSTANCE);
    const e = new H();
    e.setName("VariableWrapper"), e.setAbstract(!1), e.setInterface(!1), this.getEClassifiers().push(e), e.setEPackage(this), h.Literals.VARIABLE_WRAPPER = e;
    const t = new D();
    t.setName("value"), t.setLowerBound(0), t.setUpperBound(1), e.getEStructuralFeatures().push(t), h.Literals.VARIABLE_WRAPPER__VALUE = t;
    const n = new D();
    n.setName("variable"), n.setLowerBound(0), n.setUpperBound(1), e.getEStructuralFeatures().push(n), h.Literals.VARIABLE_WRAPPER__VARIABLE = n;
    const r = new D();
    r.setName("isSet"), r.setLowerBound(0), r.setUpperBound(1), e.getEStructuralFeatures().push(r), h.Literals.VARIABLE_WRAPPER__IS_SET = r;
    const i = new D();
    i.setName("type"), i.setLowerBound(0), i.setUpperBound(1), e.getEStructuralFeatures().push(i), h.Literals.VARIABLE_WRAPPER__TYPE = i;
    const o = new H();
    o.setName("VariableComplexStringWrapper"), o.setAbstract(!1), o.setInterface(!1), this.getEClassifiers().push(o), o.setEPackage(this), h.Literals.VARIABLE_COMPLEX_STRING_WRAPPER = o;
    const a = new D();
    a.setName("value"), a.setLowerBound(0), a.setUpperBound(1), o.getEStructuralFeatures().push(a), h.Literals.VARIABLE_COMPLEX_STRING_WRAPPER__VALUE = a;
    const l = new D();
    l.setName("type"), l.setLowerBound(0), l.setUpperBound(1), o.getEStructuralFeatures().push(l), h.Literals.VARIABLE_COMPLEX_STRING_WRAPPER__TYPE = l, h.Literals.VARIABLE_WRAPPER__VALUE.setEType(m().getEClassifier("EObject")), h.Literals.VARIABLE_WRAPPER__VARIABLE.setEType(m().getEClassifier("EString")), h.Literals.VARIABLE_WRAPPER__IS_SET.setEType(m().getEClassifier("EBoolean")), h.Literals.VARIABLE_WRAPPER__TYPE.setEType(m().getEClassifier("EString")), h.Literals.VARIABLE_COMPLEX_STRING_WRAPPER__VALUE.setEType(m().getEClassifier("EObject")), h.Literals.VARIABLE_COMPLEX_STRING_WRAPPER__TYPE.setEType(m().getEClassifier("EString"));
  }
}
function De(s) {
  const e = s;
  return typeof e?.eAdapterAdd == "function" ? e : void 0;
}
const q = 50, U = W();
function me() {
  return U;
}
function Be(s) {
  const e = W([]), t = W([]);
  let n = !0, r, i = !1, o = !1;
  function a(c) {
    if (!c.changes.length) return;
    const g = [...e.value, c];
    e.value = g.length > q ? g.slice(g.length - q) : g, t.value = [];
  }
  function l(c) {
    if (!n || c.isTouch() || c.getEventType() === R.REMOVING_ADAPTER) return;
    const g = {
      notifier: c.getNotifier(),
      feature: c.getFeature(),
      eventType: c.getEventType(),
      oldValue: c.getOldValue(),
      newValue: c.getNewValue(),
      position: c.getPosition()
    };
    if (r || (r = { label: "Änderung", changes: [] }, !i && !o && (o = !0, queueMicrotask(() => {
      o = !1, !i && r && (a(r), r = void 0);
    }))), g.eventType === R.SET) {
      const P = r.changes.find(
        (w) => w.eventType === R.SET && w.notifier === g.notifier && w.feature === g.feature
      );
      if (P) {
        P.newValue = g.newValue;
        return;
      }
    }
    r.changes.push(g);
  }
  class d extends te {
    notifyChanged(g) {
      super.notifyChanged(g), l(g);
    }
  }
  const y = new d();
  let A;
  Y(
    () => F(s),
    (c) => {
      A?.eAdapterRemove(y), A = De(c), A?.eAdapterAdd(y), e.value = [], t.value = [], r = void 0;
    },
    { immediate: !0 }
  ), X() && $(() => {
    A?.eAdapterRemove(y), U.value === p && (U.value = void 0);
  });
  function L(c) {
    const { notifier: g, feature: P, eventType: w, oldValue: b, newValue: C, position: V } = c;
    if (P)
      switch (w) {
        case R.SET:
        case R.UNSET:
          return g.eSet(P, b), { ...c, oldValue: C, newValue: b };
        case R.ADD: {
          const _ = g.eGet(P), T = V >= 0 ? V : _.indexOf(C);
          return T >= 0 && _.removeAt(T), { ...c, eventType: R.REMOVE, oldValue: C, position: T };
        }
        case R.REMOVE: {
          const _ = g.eGet(P), T = V >= 0 ? Math.min(V, _.size()) : _.size();
          return _.addAt(T, b), { ...c, eventType: R.ADD, newValue: b, position: T };
        }
        case R.ADD_MANY: {
          const _ = g.eGet(P);
          for (const T of C ?? []) {
            const z = _.indexOf(T);
            z >= 0 && _.removeAt(z);
          }
          return { ...c, eventType: R.REMOVE_MANY, oldValue: C };
        }
        case R.REMOVE_MANY: {
          const _ = g.eGet(P);
          for (const T of b ?? []) _.add(T);
          return { ...c, eventType: R.ADD_MANY, newValue: b };
        }
        case R.MOVE:
          return g.eGet(P).move(b, V), { ...c, oldValue: V, position: b };
        default:
          return;
      }
  }
  function u(c) {
    n = !1;
    const g = [];
    try {
      for (let P = c.changes.length - 1; P >= 0; P -= 1) {
        const w = L(c.changes[P]);
        w && g.push(w);
      }
    } finally {
      n = !0;
    }
    return { label: c.label, changes: g };
  }
  function f(c) {
    i || (i = !0, r = { label: c, changes: [] });
  }
  function E() {
    i && (i = !1, r && a(r), r = void 0);
  }
  const p = {
    canUndo: I(() => e.value.length > 0),
    canRedo: I(() => t.value.length > 0),
    undoLabel: I(() => e.value[e.value.length - 1]?.label),
    redoLabel: I(() => t.value[t.value.length - 1]?.label),
    undo() {
      const c = e.value[e.value.length - 1];
      c && (e.value = e.value.slice(0, -1), t.value = [...t.value, u(c)]);
    },
    redo() {
      const c = t.value[t.value.length - 1];
      c && (t.value = t.value.slice(0, -1), e.value = [...e.value, u(c)]);
    },
    begin: f,
    end: E,
    /* Free functions, not methods: a caller that pulls `record` out of the
       object still gets a working one. */
    record(c, g) {
      f(c);
      try {
        return g();
      } finally {
        E();
      }
    },
    clear() {
      e.value = [], t.value = [], r = void 0, i = !1;
    }
  };
  return U.value = p, p;
}
const Ce = "http://www.eclipse.org/emf/2002/GenModel", Oe = {
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
function le(s) {
  for (const e of Array.from(s.children))
    if (e.tagName === "eAnnotations" && e.getAttribute("source") === Ce)
      for (const t of Array.from(e.children)) {
        if (t.getAttribute("key") !== "documentation") continue;
        const n = t.getAttribute("value");
        if (n) return n.split(/\s+/).filter(Boolean).join(" ");
      }
}
function Me(s) {
  const e = s.getAttribute("eType") ?? "", t = e.split("#//").pop() ?? e;
  return Oe[t] ?? t;
}
function Fe(s) {
  const e = s.indexOf("#//");
  if (!(e < 0))
    return { nsURI: s.slice(0, e), name: s.slice(e + 3) };
}
function fe(s) {
  let e;
  try {
    e = new DOMParser().parseFromString(s, "application/xml");
  } catch {
    return;
  }
  const t = e.documentElement;
  if (!t || t.getElementsByTagName("parsererror").length) return;
  const n = t.getAttribute("nsURI");
  if (!n) return;
  if (N.has(n)) return n;
  const r = /* @__PURE__ */ new Map();
  for (const i of Array.from(t.children)) {
    if (i.tagName !== "eClassifiers") continue;
    const o = i.getAttribute("name");
    o && r.set(o, i);
  }
  return N.set(n, { nsURI: n, classes: r }), n;
}
function Ue(s) {
  return N.has(s);
}
function Z(s, e) {
  const t = [];
  for (const n of Array.from(s.children)) {
    if (n.tagName !== "eStructuralFeatures") continue;
    const r = n.getAttribute("name");
    if (!r) continue;
    const i = n.getAttribute("upperBound");
    t.push({
      name: r,
      documentation: le(n),
      type: Me(n),
      /* Ecore's default lowerBound is 0; a field is required only when the
         model says so. */
      optional: (n.getAttribute("lowerBound") ?? "0") === "0",
      many: i === "-1" || Number(i ?? "1") > 1,
      declaredBy: e
    });
  }
  return t;
}
function de(s, e) {
  const t = N.get(s), n = t?.classes.get(e);
  if (!t || !n) return;
  const r = [], i = /* @__PURE__ */ new Set([`${s}#//${e}`]), o = (d, y) => {
    const A = N.get(d)?.classes.get(y);
    if (A)
      for (const L of Array.from(A.children)) {
        if (L.tagName !== "eSuperTypes") continue;
        const u = L.getAttribute("href"), f = u ? Fe(u) : void 0;
        if (!f || i.has(u)) continue;
        i.add(u), o(f.nsURI, f.name);
        const E = N.get(f.nsURI)?.classes.get(f.name);
        E && r.push(...Z(E, f.name));
      }
  };
  o(s, e);
  const a = Z(n, e), l = /* @__PURE__ */ new Map();
  for (const d of [...r, ...a]) l.set(d.name, d);
  return {
    name: e,
    documentation: le(n),
    features: [...l.values()]
  };
}
function Ee(s) {
  const e = N.get(s);
  if (!e) return;
  const t = [...e.classes.keys()], n = t.filter((i) => /config(uration)?$/i.test(i)), r = n.length === 1 || n.length > 1 ? n[0] : t.length === 1 ? t[0] : void 0;
  return r ? de(s, r) : void 0;
}
function We(s) {
  if (!s) return;
  const e = fe(s);
  return e ? Ee(e) : void 0;
}
function Ge() {
  N.clear();
}
const Ye = "i18n", xe = "I18next";
function ge(s) {
  const e = ee(), t = () => {
    const d = e?.appContext?.provides;
    return d?.[Ye] ?? d?.[xe];
  }, n = B(0), r = B(t()?.language), i = () => {
    n.value += 1, r.value = t()?.language;
  };
  let o;
  const a = () => {
    const d = t();
    !d || o === d || (o = d, d.on?.("languageChanged", i), d.store?.on?.("added", i), d.store?.on?.("removed", i), i());
  };
  return a(), e && G(a), X() && $(() => {
    o?.off?.("languageChanged", i), o?.store?.off?.("added", i), o?.store?.off?.("removed", i), o = void 0;
  }), { t: (d, y) => {
    n.value;
    const A = t();
    if (!A) return d;
    const L = s && !d.includes(":") ? `${s}:${d}` : d;
    return A.t(L, y);
  }, language: r, revision: n, available: !!t() };
}
const Xe = "i18n", $e = "I18next", k = "daanse.board.language";
function je(s) {
  try {
    const t = new Intl.DisplayNames([s], { type: "language" }).of(s);
    if (t && t !== s) return t.charAt(0).toUpperCase() + t.slice(1);
  } catch {
  }
  return s.toUpperCase();
}
function Je() {
  const s = ee(), e = () => {
    const o = s?.appContext?.provides;
    return o?.[Xe] ?? o?.[$e];
  }, { language: t, revision: n } = ge(), r = I(() => (n.value, Object.keys(e()?.store?.data ?? {}).sort().map((a) => ({ tag: a, label: je(a) }))));
  function i(o) {
    try {
      localStorage.setItem(k, o);
    } catch {
    }
    e()?.changeLanguage?.(o);
  }
  return G(() => {
    let o = null;
    try {
      o = localStorage.getItem(k);
    } catch {
      o = null;
    }
    const a = e();
    o && a && o !== a.language && a.changeLanguage?.(o);
  }), { available: r, current: t, choose: i };
}
const ze = {
  VariableWrapper: re,
  VariableComplexStringWrapper: ce
};
ne.INSTANCE.registerPackage(h.eINSTANCE);
const He = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ComposablesPackage: h,
  VARIABLECOMPLEXSTRINGWRAPPER: ue,
  VARIABLEWRAPPER: Le,
  VariableComplexStringWrapper: ce,
  VariableWrapper: re,
  WrapperTypes: ze,
  describeClass: de,
  describeConfiguration: Ee,
  describeModel: We,
  hasModelDocs: Ue,
  plainSettings: we,
  registerModelDocs: fe,
  resetModelDocs: Ge,
  useBoard: Ve,
  useCurrentHistory: me,
  useDatasourceRepository: _e,
  useEList: x,
  useEObject: oe,
  useFeature: Ne,
  useGlobalLoading: ae,
  useHistory: Be,
  useLanguage: Je,
  usePromisifiedModal: Ie,
  useTemporaryStore: Te,
  useTranslation: ge,
  useVariableRepository: ie
}, Symbol.toStringTag, { value: "Module" })), K = "org.eclipse.daanse.board.app.ui.vue.composables", qe = "0.0.1-next.1";
async function nt(s) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${K}: tsm runtime is not initialized`);
  e.register(K, He, qe, "ui.vue.composables"), await void 0;
}
async function rt(s) {
  await void 0;
}
export {
  h as ComposablesPackage,
  ue as VARIABLECOMPLEXSTRINGWRAPPER,
  ot as VARIABLEWRAPPER,
  ce as VariableComplexStringWrapper,
  ut as VariableWrapper,
  ze as WrapperTypes,
  nt as activate,
  rt as deactivate,
  de as describeClass,
  Ee as describeConfiguration,
  We as describeModel,
  Ue as hasModelDocs,
  we as plainSettings,
  fe as registerModelDocs,
  Ge as resetModelDocs,
  Ve as useBoard,
  me as useCurrentHistory,
  _e as useDatasourceRepository,
  x as useEList,
  oe as useEObject,
  Ne as useFeature,
  ae as useGlobalLoading,
  Be as useHistory,
  Je as useLanguage,
  Ie as usePromisifiedModal,
  Te as useTemporaryStore,
  ge as useTranslation,
  ie as useVariableRepository
};
