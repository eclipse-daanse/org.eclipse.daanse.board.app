import { identifier as ne } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { ref as B, computed as m, inject as F, onMounted as G, onUnmounted as Pe, watch as Y, onBeforeUnmount as Se, shallowRef as W, toValue as M, triggerRef as Le, getCurrentScope as X, onScopeDispose as j, getCurrentInstance as re } from "vue";
import { identifier as _e } from "org.eclipse.daanse.board.app.lib.api.variable";
import { identifier as me } from "org.eclipse.daanse.board.app.lib.api.pagecontext";
import { EContentAdapter as ae, NotificationType as R, BasicEObject as oe, BasicEFactory as Te, BasicEPackage as Ie, EPackageRegistry as ie, BasicEClass as k, BasicEAttribute as N, getEcorePackage as V } from "@emfts/core";
import { identifier as we } from "org.eclipse.daanse.board.app.lib.api.page";
import { VariableWrapper as ue, VARIABLEWRAPPER as be } from "org.eclipse.daanse.board.app.lib.variables";
import { VARIABLEWRAPPER as bt, VariableWrapper as Dt } from "org.eclipse.daanse.board.app.lib.variables";
import { component as De } from "@eclipse-daanse/tsm";
const O = B(0);
function ce() {
  return {
    isLoading: m(() => O.value > 0),
    activeLoadingCount: O,
    startLoading: () => {
      O.value++;
    },
    stopLoading: () => {
      O.value > 0 && O.value--;
    }
  };
}
function Ne(s, e, t, n = [], r) {
  const a = F(ne);
  if (!a)
    throw new Error("DatasourceRepository not provided");
  const { startLoading: i, stopLoading: o } = ce(), l = async () => {
    if (!s.value) {
      t.value = null;
      return;
    }
    console.log("getData", s.value), console.log("type", e), i();
    try {
      const f = await a.getDatasource(s.value).getData(e, r?.value || {});
      e === "PivotTable" ? t.value = JSON.parse(JSON.stringify(f)) : t.value = structuredClone(f);
    } catch (u) {
      t.value = null, console.warn(u);
    } finally {
      o();
    }
  }, d = async (u, f, g = !0) => {
    if (s.value)
      try {
        const p = a.getDatasource(
          s.value
        ), c = p.callEvent(u, f, g);
        if (!g && c instanceof Promise) {
          await c;
          const E = await p.getData(e);
          t.value = structuredClone(E);
        }
      } catch (p) {
        console.warn(p);
      }
  }, y = async (u) => {
    if (!s.value) {
      t.value = null;
      return;
    }
    console.log("getDataWithOptions", s.value, u), console.log("type", e), i();
    try {
      const g = await a.getDatasource(s.value).getData(e, u);
      t.value = structuredClone(g);
    } catch (f) {
      t.value = null, console.warn(f);
    } finally {
      o();
    }
  }, A = (u, f) => {
    try {
      l();
    } catch (g) {
      console.warn(g);
    }
    if (!(!u || !f || u === f)) {
      try {
        const g = a.getDatasource(f);
        g.unsubscribe(l), n.forEach((p) => {
          g.unsubscribe(p);
        });
      } catch (g) {
        console.warn(g);
      }
      try {
        const g = a.getDatasource(u);
        g.subscribe(() => l()), n.forEach((p) => {
          g.subscribe(p);
        });
      } catch (g) {
        console.warn(g);
      }
    }
  }, L = () => {
    try {
      return a.getDatasource(s.value);
    } catch (u) {
      return console.warn(u), null;
    }
  };
  return G(() => {
    l();
    try {
      const u = a.getDatasource(s.value);
      u.subscribe(l), n.forEach((f) => {
        u.subscribe(f);
      });
    } catch (u) {
      console.warn(u);
    }
  }), Pe(() => {
    try {
      const u = a.getDatasource(s.value);
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
function Ve(s, e, t) {
  const n = F(ne);
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
    const i = n.resolveIdentifier(r.Store);
    t.value = i({ ...e.value.config, _isTemporaryPreview: !0 });
  });
  const a = async () => {
    t.value?.destroy(), t.value = null;
    const o = n.resolveIdentifier(r.Store)({ ...e.value.config, _isTemporaryPreview: !0 });
    return o.initPromise ? (await o.initPromise, t.value = o, o) : (t.value = o, o);
  };
  return Y(
    () => e,
    async () => {
    },
    { deep: !0 }
  ), Se(() => {
    console.log("Destroying temporary store"), t.value?.destroy();
  }), {
    update: a
  };
}
function Be(s, e = () => {
}) {
  const t = B(!1);
  let n = (o) => {
  }, r = new Promise((o) => {
    n = o;
  });
  return { isOpened: t, run: (o) => (t.value = !0, e(o), r), close: (o) => {
    n(o), r = new Promise((l) => {
      n = l;
    }), t.value = !1, s();
  } };
}
function le() {
  const s = B(Date.now()), e = [], t = F(_e);
  if (!t)
    throw new Error("VariableRepository not provided");
  let n = null;
  try {
    n = F(me);
  } catch {
    console.warn("PageContextService not available for variable resolution");
  }
  const r = () => {
    s.value = Date.now();
  }, a = (o, l = () => {
  }) => {
    const d = /\{\s*([a-zA-Z0-9_]+)\s*\}/g;
    for (const u of e)
      u.unsubscribe(r), u.unsubscribe(l);
    e.length = 0;
    const A = [...o.matchAll(d)].map((u) => u[1]);
    let L = o;
    for (const u of A)
      try {
        let f;
        try {
          const g = n?.getCurrentPageId();
          f = t.getVariableWithContext ? t.getVariableWithContext(u, g) : t.getVariable(u);
        } catch (g) {
          console.error(g);
        }
        if (f) {
          f.subscribe(r), f.subscribe(l), e.push(f);
          const g = f.value, p = new RegExp(
            `\\{\\s*${u}\\s*\\}`,
            "g"
          );
          L = L.replace(p, String(g));
        }
      } catch (f) {
        console.warn(`Error resolving variable ${u}:`, f);
      }
    return L;
  };
  return {
    calculateValue: a,
    wrapParameters: (o) => {
      const l = {};
      for (const [d, y] of Object.entries(o))
        try {
          const A = m(() => (s.value, y && a(y.value + "")));
          l[d] = A;
        } catch (A) {
          console.log(A);
        }
      return l;
    }
  };
}
function Ce(s) {
  if (!s || typeof s != "object") return {};
  const e = s;
  return typeof e.toJSON == "function" ? e.toJSON() : s;
}
function Oe(s) {
  return typeof s?.eAdapterAdd == "function" && typeof s?.eAdapterRemove == "function";
}
function H(s) {
  const e = B(0);
  class t extends ae {
    notifyChanged(l) {
      super.notifyChanged(l), !l.isTouch() && l.getEventType() !== R.REMOVING_ADAPTER && (e.value += 1);
    }
  }
  let n, r;
  const a = () => {
    r && n && r.eAdapterRemove(n), r = void 0, n = void 0;
  };
  return Y(s, (o) => {
    a(), Oe(o) && (n = new t(), o.eAdapterAdd(n), r = o);
  }, { immediate: !0 }), X() && j(a), e;
}
function fe(s) {
  const e = () => M(s), t = W(e()), n = H(e);
  return Y(
    [n, e],
    ([, r]) => {
      t.value === r ? Le(t) : t.value = r;
    }
  ), t;
}
function x(s, e) {
  const t = () => M(s), n = H(t);
  return m(() => {
    n.value;
    const r = t();
    return r ? e(r)?.toArray() ?? [] : [];
  });
}
function Fe(s, e) {
  const t = () => M(s), n = H(t);
  return m({
    get: () => (n.value, t()?.[e]),
    set: (r) => {
      const a = t();
      a && (a[e] = r);
    }
  });
}
function Me(s) {
  const e = F(we), t = () => M(s) ?? "", n = fe(() => t() ? e.getPage(t()) : void 0), r = m(() => n.value), a = x(r, (o) => o.widgets), i = x(r, (o) => o.layout);
  return {
    page: r,
    widgets: a,
    layout: i,
    addWidget(o, l) {
      const d = o.uid || "li_" + Math.random().toString(36).substring(7);
      return e.addWidget(t(), { ...o, uid: d }, l), d;
    },
    removeWidget(o) {
      e.removeWidget(t(), o);
    },
    saveWidget(o) {
      e.saveWidget(t(), o);
    },
    setBoard(o, l) {
      e.setBoard(t(), o, l);
    },
    clear() {
      e.setBoard(t(), [], []);
    }
  };
}
const de = "VARIABLECOMPLEXSTRINGWRAPPER";
class ge {
  type = de;
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
      const { calculateValue: n } = le();
      return t ? n(e, t) : n(e);
    } catch {
      return null;
    }
  }
  set value(e) {
    this._value = e;
  }
}
class v extends oe {
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
class S extends oe {
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
class J extends Te {
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
class h extends Ie {
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
    ie.INSTANCE.set(h.eNS_URI, this), this.setEFactoryInstance(J.eINSTANCE);
    const e = new k();
    e.setName("VariableWrapper"), e.setAbstract(!1), e.setInterface(!1), this.getEClassifiers().push(e), e.setEPackage(this), h.Literals.VARIABLE_WRAPPER = e;
    const t = new N();
    t.setName("value"), t.setLowerBound(0), t.setUpperBound(1), e.getEStructuralFeatures().push(t), h.Literals.VARIABLE_WRAPPER__VALUE = t;
    const n = new N();
    n.setName("variable"), n.setLowerBound(0), n.setUpperBound(1), e.getEStructuralFeatures().push(n), h.Literals.VARIABLE_WRAPPER__VARIABLE = n;
    const r = new N();
    r.setName("isSet"), r.setLowerBound(0), r.setUpperBound(1), e.getEStructuralFeatures().push(r), h.Literals.VARIABLE_WRAPPER__IS_SET = r;
    const a = new N();
    a.setName("type"), a.setLowerBound(0), a.setUpperBound(1), e.getEStructuralFeatures().push(a), h.Literals.VARIABLE_WRAPPER__TYPE = a;
    const i = new k();
    i.setName("VariableComplexStringWrapper"), i.setAbstract(!1), i.setInterface(!1), this.getEClassifiers().push(i), i.setEPackage(this), h.Literals.VARIABLE_COMPLEX_STRING_WRAPPER = i;
    const o = new N();
    o.setName("value"), o.setLowerBound(0), o.setUpperBound(1), i.getEStructuralFeatures().push(o), h.Literals.VARIABLE_COMPLEX_STRING_WRAPPER__VALUE = o;
    const l = new N();
    l.setName("type"), l.setLowerBound(0), l.setUpperBound(1), i.getEStructuralFeatures().push(l), h.Literals.VARIABLE_COMPLEX_STRING_WRAPPER__TYPE = l, h.Literals.VARIABLE_WRAPPER__VALUE.setEType(V().getEClassifier("EObject")), h.Literals.VARIABLE_WRAPPER__VARIABLE.setEType(V().getEClassifier("EString")), h.Literals.VARIABLE_WRAPPER__IS_SET.setEType(V().getEClassifier("EBoolean")), h.Literals.VARIABLE_WRAPPER__TYPE.setEType(V().getEClassifier("EString")), h.Literals.VARIABLE_COMPLEX_STRING_WRAPPER__VALUE.setEType(V().getEClassifier("EObject")), h.Literals.VARIABLE_COMPLEX_STRING_WRAPPER__TYPE.setEType(V().getEClassifier("EString"));
  }
}
function Ue(s) {
  const e = s;
  return typeof e?.eAdapterAdd == "function" ? e : void 0;
}
const Q = 50, U = W();
function We() {
  return U;
}
function Ge(s) {
  const e = W([]), t = W([]);
  let n = !0, r, a = !1, i = !1;
  function o(c) {
    if (!c.changes.length) return;
    const E = [...e.value, c];
    e.value = E.length > Q ? E.slice(E.length - Q) : E, t.value = [];
  }
  function l(c) {
    if (!n || c.isTouch() || c.getEventType() === R.REMOVING_ADAPTER) return;
    const E = {
      notifier: c.getNotifier(),
      feature: c.getFeature(),
      eventType: c.getEventType(),
      oldValue: c.getOldValue(),
      newValue: c.getNewValue(),
      position: c.getPosition()
    };
    if (r || (r = { label: "common:History.change", changes: [] }, !a && !i && (i = !0, queueMicrotask(() => {
      i = !1, !a && r && (o(r), r = void 0);
    }))), E.eventType === R.SET) {
      const P = r.changes.find(
        (I) => I.eventType === R.SET && I.notifier === E.notifier && I.feature === E.feature
      );
      if (P) {
        P.newValue = E.newValue;
        return;
      }
    }
    r.changes.push(E);
  }
  class d extends ae {
    notifyChanged(E) {
      super.notifyChanged(E), l(E);
    }
  }
  const y = new d();
  let A;
  Y(
    () => M(s),
    (c) => {
      A?.eAdapterRemove(y), A = Ue(c), A?.eAdapterAdd(y), e.value = [], t.value = [], r = void 0;
    },
    { immediate: !0 }
  ), X() && j(() => {
    A?.eAdapterRemove(y), U.value === p && (U.value = void 0);
  });
  function L(c) {
    const { notifier: E, feature: P, eventType: I, oldValue: w, newValue: C, position: D } = c;
    if (P)
      switch (I) {
        case R.SET:
        case R.UNSET:
          return E.eSet(P, w), { ...c, oldValue: C, newValue: w };
        case R.ADD: {
          const _ = E.eGet(P), T = D >= 0 ? D : _.indexOf(C);
          return T >= 0 && _.removeAt(T), { ...c, eventType: R.REMOVE, oldValue: C, position: T };
        }
        case R.REMOVE: {
          const _ = E.eGet(P), T = D >= 0 ? Math.min(D, _.size()) : _.size();
          return _.addAt(T, w), { ...c, eventType: R.ADD, newValue: w, position: T };
        }
        case R.ADD_MANY: {
          const _ = E.eGet(P);
          for (const T of C ?? []) {
            const Z = _.indexOf(T);
            Z >= 0 && _.removeAt(Z);
          }
          return { ...c, eventType: R.REMOVE_MANY, oldValue: C };
        }
        case R.REMOVE_MANY: {
          const _ = E.eGet(P);
          for (const T of w ?? []) _.add(T);
          return { ...c, eventType: R.ADD_MANY, newValue: w };
        }
        case R.MOVE:
          return E.eGet(P).move(w, D), { ...c, oldValue: D, position: w };
        default:
          return;
      }
  }
  function u(c) {
    n = !1;
    const E = [];
    try {
      for (let P = c.changes.length - 1; P >= 0; P -= 1) {
        const I = L(c.changes[P]);
        I && E.push(I);
      }
    } finally {
      n = !0;
    }
    return { label: c.label, changes: E };
  }
  function f(c) {
    a || (a = !0, r = { label: c, changes: [] });
  }
  function g() {
    a && (a = !1, r && o(r), r = void 0);
  }
  const p = {
    canUndo: m(() => e.value.length > 0),
    canRedo: m(() => t.value.length > 0),
    undoLabel: m(() => e.value[e.value.length - 1]?.label),
    redoLabel: m(() => t.value[t.value.length - 1]?.label),
    undo() {
      const c = e.value[e.value.length - 1];
      c && (e.value = e.value.slice(0, -1), t.value = [...t.value, u(c)]);
    },
    redo() {
      const c = t.value[t.value.length - 1];
      c && (t.value = t.value.slice(0, -1), e.value = [...e.value, u(c)]);
    },
    begin: f,
    end: g,
    /* Free functions, not methods: a caller that pulls `record` out of the
       object still gets a working one. */
    record(c, E) {
      f(c);
      try {
        return E();
      } finally {
        g();
      }
    },
    clear() {
      e.value = [], t.value = [], r = void 0, a = !1;
    }
  };
  return U.value = p, p;
}
const Ye = "http://www.eclipse.org/emf/2002/GenModel", xe = {
  EString: "string",
  EInt: "number",
  EIntegerObject: "number",
  ELong: "number",
  EFloat: "number",
  EDouble: "number",
  EBoolean: "boolean",
  EBooleanObject: "boolean",
  EDate: "string"
}, b = /* @__PURE__ */ new Map();
function Ee(s) {
  for (const e of Array.from(s.children))
    if (e.tagName === "eAnnotations" && e.getAttribute("source") === Ye)
      for (const t of Array.from(e.children)) {
        if (t.getAttribute("key") !== "documentation") continue;
        const n = t.getAttribute("value");
        if (n) return n.split(/\s+/).filter(Boolean).join(" ");
      }
}
function $e(s) {
  const e = s.getAttribute("eType") ?? "", t = e.split("#//").pop() ?? e;
  return xe[t] ?? t;
}
function Xe(s) {
  const e = s.indexOf("#//");
  if (!(e < 0))
    return { nsURI: s.slice(0, e), name: s.slice(e + 3) };
}
function ve(s) {
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
  if (b.has(n)) return n;
  const r = /* @__PURE__ */ new Map();
  for (const a of Array.from(t.children)) {
    if (a.tagName !== "eClassifiers") continue;
    const i = a.getAttribute("name");
    i && r.set(i, a);
  }
  return b.set(n, { nsURI: n, classes: r }), n;
}
function je(s) {
  return b.has(s);
}
function ee(s, e) {
  const t = [];
  for (const n of Array.from(s.children)) {
    if (n.tagName !== "eStructuralFeatures") continue;
    const r = n.getAttribute("name");
    if (!r) continue;
    const a = n.getAttribute("upperBound");
    t.push({
      name: r,
      documentation: Ee(n),
      type: $e(n),
      /* Ecore's default lowerBound is 0; a field is required only when the
         model says so. */
      optional: (n.getAttribute("lowerBound") ?? "0") === "0",
      many: a === "-1" || Number(a ?? "1") > 1,
      declaredBy: e
    });
  }
  return t;
}
function he(s, e) {
  const t = b.get(s), n = t?.classes.get(e);
  if (!t || !n) return;
  const r = [], a = /* @__PURE__ */ new Set([`${s}#//${e}`]), i = (d, y) => {
    const A = b.get(d)?.classes.get(y);
    if (A)
      for (const L of Array.from(A.children)) {
        if (L.tagName !== "eSuperTypes") continue;
        const u = L.getAttribute("href"), f = u ? Xe(u) : void 0;
        if (!f || a.has(u)) continue;
        a.add(u), i(f.nsURI, f.name);
        const g = b.get(f.nsURI)?.classes.get(f.name);
        g && r.push(...ee(g, f.name));
      }
  };
  i(s, e);
  const o = ee(n, e), l = /* @__PURE__ */ new Map();
  for (const d of [...r, ...o]) l.set(d.name, d);
  return {
    name: e,
    documentation: Ee(n),
    features: [...l.values()]
  };
}
function Ae(s) {
  const e = b.get(s);
  if (!e) return;
  const t = [...e.classes.keys()], n = t.filter((a) => /config(uration)?$/i.test(a)), r = n.length === 1 || n.length > 1 ? n[0] : t.length === 1 ? t[0] : void 0;
  return r ? he(s, r) : void 0;
}
function He(s) {
  if (!s) return;
  const e = ve(s);
  return e ? Ae(e) : void 0;
}
function Je() {
  b.clear();
}
const ze = "i18n", qe = "I18next";
function z(s) {
  const e = re(), t = () => {
    const d = e?.appContext?.provides;
    return d?.[ze] ?? d?.[qe];
  }, n = B(0), r = B(t()?.language), a = () => {
    n.value += 1, r.value = t()?.language;
  };
  let i;
  const o = () => {
    const d = t();
    !d || i === d || (i = d, d.on?.("languageChanged", a), d.store?.on?.("added", a), d.store?.on?.("removed", a), a());
  };
  return o(), e && G(o), X() && j(() => {
    i?.off?.("languageChanged", a), i?.store?.off?.("added", a), i?.store?.off?.("removed", a), i = void 0;
  }), { t: (d, y) => {
    n.value;
    const A = t();
    if (!A) return d;
    const L = s && !d.includes(":") ? `${s}:${d}` : d;
    return A.t(L, y);
  }, language: r, revision: n, available: !!t() };
}
const Ke = "i18n", Ze = "I18next", te = "daanse.board.language";
function ke(s) {
  try {
    const t = new Intl.DisplayNames([s], { type: "language" }).of(s);
    if (t && t !== s) return t.charAt(0).toUpperCase() + t.slice(1);
  } catch {
  }
  return s.toUpperCase();
}
function Qe() {
  const s = re(), e = () => {
    const i = s?.appContext?.provides;
    return i?.[Ke] ?? i?.[Ze];
  }, { language: t, revision: n } = z(), r = m(() => (n.value, Object.keys(e()?.store?.data ?? {}).sort().map((o) => ({ tag: o, label: ke(o) }))));
  function a(i) {
    try {
      localStorage.setItem(te, i);
    } catch {
    }
    e()?.changeLanguage?.(i);
  }
  return G(() => {
    let i = null;
    try {
      i = localStorage.getItem(te);
    } catch {
      i = null;
    }
    const o = e();
    i && o && i !== o.language && o.changeLanguage?.(i);
  }), { available: r, current: t, choose: a };
}
const et = "en", tt = /* @__PURE__ */ new Map(), st = /* @__PURE__ */ new Map(), nt = /* @__PURE__ */ new Map();
function q(s, e, t, n) {
  const r = `${e}|${JSON.stringify(t ?? {})}`;
  let a = s.get(r);
  return a || (a = n(), s.set(r, a)), a;
}
function Re(s, e) {
  return q(tt, s, e, () => new Intl.NumberFormat(s, e));
}
function K(s, e) {
  return q(st, s, e, () => new Intl.DateTimeFormat(s, e));
}
const rt = 1440 * 60 * 1e3;
function ye(s, e, t = Date.now()) {
  const n = typeof e == "number" ? e : e.getTime(), r = Math.floor((t - n) / rt);
  return r < 31 ? q(nt, s, { numeric: "auto" }, () => new Intl.RelativeTimeFormat(s, { numeric: "auto" })).format(-Math.max(r, 0), "day") : K(s, { day: "numeric", month: "short", year: "numeric" }).format(n);
}
function at() {
  const { language: s } = z(), e = m(() => s.value || et);
  return {
    locale: e,
    number: (t, n) => Re(e.value, n).format(t),
    date: (t, n) => K(e.value, n).format(typeof t == "string" ? new Date(t) : t),
    relativeDays: (t) => ye(e.value, t)
  };
}
const ot = { cancel: "Abbrechen", delete: "Löschen", close: "Schließen", save: "Speichern", done: "Fertig", create: "Anlegen" }, it = { change: "Änderung" }, ut = {
  Action: ot,
  History: it
}, ct = { cancel: "Cancel", delete: "Delete", close: "Close", save: "Save", done: "Done", create: "Create" }, lt = { change: "Change" }, ft = {
  Action: ct,
  History: lt
};
var dt = Object.getOwnPropertyDescriptor, gt = (s, e, t, n) => {
  for (var r = n > 1 ? void 0 : n ? dt(e, t) : e, a = s.length - 1, i; a >= 0; a--)
    (i = s[a]) && (r = i(r) || r);
  return r;
};
const pe = "common";
let $ = class {
  namespace = pe;
  resources = {
    de: ut,
    en: ft
  };
};
$ = gt([
  De({
    service: ["Translations"],
    properties: { "i18n.namespace": pe }
  })
], $);
const Et = {
  VariableWrapper: ue,
  VariableComplexStringWrapper: ge
};
ie.INSTANCE.registerPackage(h.eINSTANCE);
const vt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get CommonTranslations() {
    return $;
  },
  ComposablesPackage: h,
  VARIABLECOMPLEXSTRINGWRAPPER: de,
  VARIABLEWRAPPER: be,
  VariableComplexStringWrapper: ge,
  VariableWrapper: ue,
  WrapperTypes: Et,
  dateFormat: K,
  describeClass: he,
  describeConfiguration: Ae,
  describeModel: He,
  hasModelDocs: je,
  numberFormat: Re,
  plainSettings: Ce,
  registerModelDocs: ve,
  relativeDays: ye,
  resetModelDocs: Je,
  useBoard: Me,
  useCurrentHistory: We,
  useDatasourceRepository: Ne,
  useEList: x,
  useEObject: fe,
  useFeature: Fe,
  useFormat: at,
  useGlobalLoading: ce,
  useHistory: Ge,
  useLanguage: Qe,
  usePromisifiedModal: Be,
  useTemporaryStore: Ve,
  useTranslation: z,
  useVariableRepository: le
}, Symbol.toStringTag, { value: "Module" })), se = "org.eclipse.daanse.board.app.ui.vue.composables", ht = "0.0.1-next.1";
async function mt(s) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${se}: tsm runtime is not initialized`);
  e.register(se, vt, ht, "ui.vue.composables"), await void 0;
}
async function Tt(s) {
  await void 0;
}
export {
  $ as CommonTranslations,
  h as ComposablesPackage,
  de as VARIABLECOMPLEXSTRINGWRAPPER,
  bt as VARIABLEWRAPPER,
  ge as VariableComplexStringWrapper,
  Dt as VariableWrapper,
  Et as WrapperTypes,
  mt as activate,
  K as dateFormat,
  Tt as deactivate,
  he as describeClass,
  Ae as describeConfiguration,
  He as describeModel,
  je as hasModelDocs,
  Re as numberFormat,
  Ce as plainSettings,
  ve as registerModelDocs,
  ye as relativeDays,
  Je as resetModelDocs,
  Me as useBoard,
  We as useCurrentHistory,
  Ne as useDatasourceRepository,
  x as useEList,
  fe as useEObject,
  Fe as useFeature,
  at as useFormat,
  ce as useGlobalLoading,
  Ge as useHistory,
  Qe as useLanguage,
  Be as usePromisifiedModal,
  Ve as useTemporaryStore,
  z as useTranslation,
  le as useVariableRepository
};
