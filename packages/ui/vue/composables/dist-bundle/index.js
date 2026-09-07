import { identifier as b } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { ref as w, computed as B, inject as y, onMounted as p, onUnmounted as O, watch as W, onBeforeUnmount as x } from "vue";
import { identifier as Y } from "org.eclipse.daanse.board.app.lib.api.variable";
import { identifier as M } from "org.eclipse.daanse.board.app.lib.api.pagecontext";
import { VariableWrapper as D, VARIABLEWRAPPER as j } from "org.eclipse.daanse.board.app.lib.variables";
import { VARIABLEWRAPPER as ce, VariableWrapper as le } from "org.eclipse.daanse.board.app.lib.variables";
import { BasicEObject as G, BasicEFactory as $, BasicEPackage as X, EPackageRegistry as V, BasicEClass as z, BasicEAttribute as P, getEcorePackage as _ } from "@emfts/core";
const S = w(0);
function F() {
  return {
    isLoading: B(() => S.value > 0),
    activeLoadingCount: S,
    startLoading: () => {
      S.value++;
    },
    stopLoading: () => {
      S.value > 0 && S.value--;
    }
  };
}
function J(r, e, t, n = [], E) {
  const c = y(b);
  if (!c)
    throw new Error("DatasourceRepository not provided");
  const { startLoading: v, stopLoading: o } = F(), h = async () => {
    if (!r.value) {
      t.value = null;
      return;
    }
    console.log("getData", r.value), console.log("type", e), v();
    try {
      const i = await c.getDatasource(r.value).getData(e, E?.value || {});
      e === "PivotTable" ? t.value = JSON.parse(JSON.stringify(i)) : t.value = structuredClone(i);
    } catch (s) {
      t.value = null, console.warn(s);
    } finally {
      o();
    }
  }, R = async (s, i, u = !0) => {
    if (r.value)
      try {
        const g = c.getDatasource(
          r.value
        ), T = g.callEvent(s, i, u);
        if (!u && T instanceof Promise) {
          await T;
          const U = await g.getData(e);
          t.value = structuredClone(U);
        }
      } catch (g) {
        console.warn(g);
      }
  }, A = async (s) => {
    if (!r.value) {
      t.value = null;
      return;
    }
    console.log("getDataWithOptions", r.value, s), console.log("type", e), v();
    try {
      const u = await c.getDatasource(r.value).getData(e, s);
      t.value = structuredClone(u);
    } catch (i) {
      t.value = null, console.warn(i);
    } finally {
      o();
    }
  }, f = (s, i) => {
    try {
      h();
    } catch (u) {
      console.warn(u);
    }
    if (!(!s || !i || s === i)) {
      try {
        const u = c.getDatasource(i);
        u.unsubscribe(h), n.forEach((g) => {
          u.unsubscribe(g);
        });
      } catch (u) {
        console.warn(u);
      }
      try {
        const u = c.getDatasource(s);
        u.subscribe(() => h()), n.forEach((g) => {
          u.subscribe(g);
        });
      } catch (u) {
        console.warn(u);
      }
    }
  }, d = () => {
    try {
      return c.getDatasource(r.value);
    } catch (s) {
      return console.warn(s), null;
    }
  };
  return p(() => {
    h();
    try {
      const s = c.getDatasource(r.value);
      s.subscribe(h), n.forEach((i) => {
        s.subscribe(i);
      });
    } catch (s) {
      console.warn(s);
    }
  }), O(() => {
    try {
      const s = c.getDatasource(r.value);
      s.unsubscribe(h), n.forEach((i) => {
        s.unsubscribe(i);
      });
    } catch (s) {
      console.warn(s);
    }
  }), {
    data: t,
    callEvent: R,
    update: f,
    getDataWithOptions: A,
    getDatasourceInstance: d
  };
}
function Z(r, e, t) {
  const n = y(b);
  if (!n)
    throw new Error("DatasourceRepository not provided");
  const E = n.getDatasourceIdentifiers(r);
  console.log("Identifiers for datasource type", r, E), p(async () => {
    console.log(
      "Creating temporary store for type",
      r,
      "with settings",
      e.value
    );
    const v = n.resolveIdentifier(E.Store);
    t.value = v({ ...e.value.config, _isTemporaryPreview: !0 });
  });
  const c = async () => {
    t.value?.destroy(), t.value = null;
    const o = n.resolveIdentifier(E.Store)({ ...e.value.config, _isTemporaryPreview: !0 });
    return o.initPromise ? (await o.initPromise, t.value = o, o) : (t.value = o, o);
  };
  return W(
    () => e,
    async () => {
    },
    { deep: !0 }
  ), x(() => {
    console.log("Destroying temporary store"), t.value?.destroy();
  }), {
    update: c
  };
}
function q(r, e = () => {
}) {
  const t = w(!1);
  let n = (o) => {
  }, E = new Promise((o) => {
    n = o;
  });
  return { isOpened: t, run: (o) => (t.value = !0, e(o), E), close: (o) => {
    n(o), E = new Promise((h) => {
      n = h;
    }), t.value = !1, r();
  } };
}
function L() {
  const r = w(Date.now()), e = [], t = y(Y);
  if (!t)
    throw new Error("VariableRepository not provided");
  let n = null;
  try {
    n = y(M);
  } catch {
    console.warn("PageContextService not available for variable resolution");
  }
  const E = () => {
    r.value = Date.now();
  }, c = (o, h = () => {
  }) => {
    const R = /\{\s*([a-zA-Z0-9_]+)\s*\}/g;
    for (const s of e)
      s.unsubscribe(E), s.unsubscribe(h);
    e.length = 0;
    const f = [...o.matchAll(R)].map((s) => s[1]);
    let d = o;
    for (const s of f)
      try {
        let i;
        try {
          const u = n?.getCurrentPageId();
          i = t.getVariableWithContext ? t.getVariableWithContext(s, u) : t.getVariable(s);
        } catch (u) {
          console.error(u);
        }
        if (i) {
          i.subscribe(E), i.subscribe(h), e.push(i);
          const u = i.value, g = new RegExp(
            `\\{\\s*${s}\\s*\\}`,
            "g"
          );
          d = d.replace(g, String(u));
        }
      } catch (i) {
        console.warn(`Error resolving variable ${s}:`, i);
      }
    return d;
  };
  return {
    calculateValue: c,
    wrapParameters: (o) => {
      const h = {};
      for (const [R, A] of Object.entries(o))
        try {
          const f = B(() => (r.value, A && c(A.value + "")));
          h[R] = f;
        } catch (f) {
          console.log(f);
        }
      return h;
    }
  };
}
const m = "VARIABLECOMPLEXSTRINGWRAPPER";
class C {
  type = m;
  _value = void 0;
  _computedValue = null;
  constructor(e = "") {
    this._value = e;
  }
  get original() {
    return this._value || "";
  }
  updateFn() {
    const { calculateValue: e } = L();
    this._computedValue = e(this._value || "");
  }
  get value() {
    const { calculateValue: e } = L();
    return this._computedValue = e(this._value || "", this.updateFn.bind(this)), this._computedValue;
  }
  set value(e) {
    this._value = e;
  }
}
class a extends G {
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
      getFeature: () => this.eClass().getEStructuralFeature(a.VALUE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => a.VALUE,
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
      getFeature: () => this.eClass().getEStructuralFeature(a.VARIABLE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => a.VARIABLE,
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
      getFeature: () => this.eClass().getEStructuralFeature(a.IS_SET),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => a.IS_SET,
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
      getFeature: () => this.eClass().getEStructuralFeature(a.TYPE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => a.TYPE,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case a.VALUE:
        return this.value;
      case a.VARIABLE:
        return this.variable;
      case a.IS_SET:
        return this.isSet;
      case a.TYPE:
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
      case a.VALUE:
        this.value = t, super.eSet(e, t);
        break;
      case a.VARIABLE:
        this.variable = t, super.eSet(e, t);
        break;
      case a.IS_SET:
        this.isSet = t, super.eSet(e, t);
        break;
      case a.TYPE:
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
      case a.VALUE:
        return this._value !== void 0;
      case a.VARIABLE:
        return this._variable !== void 0;
      case a.IS_SET:
        return this._isSet !== !1;
      case a.TYPE:
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
      case a.VALUE:
        this._value = void 0;
        return;
      case a.VARIABLE:
        this._variable = void 0;
        return;
      case a.IS_SET:
        this._isSet = !1;
        return;
      case a.TYPE:
        this._type = "VARIABLEWRAPPER";
        return;
      default:
        super.eUnset(e);
    }
  }
}
class I extends $ {
  // Lazy singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new I()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(l.eINSTANCE);
  }
  /**
   * Create a new VariableWrapper instance
   */
  createVariableWrapper() {
    return new a();
  }
  /**
   * Create an instance of the given class
   */
  create(e) {
    switch (e.getName()) {
      case "VariableWrapper":
        return this.createVariableWrapper();
      default:
        throw new Error(`Unknown class: ${e.getName()}`);
    }
  }
}
class l extends X {
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
    VARIABLE_WRAPPER__TYPE: null
  };
  constructor() {
    super(), this.setName(l.eNAME), this.setNsURI(l.eNS_URI), this.setNsPrefix(l.eNS_PREFIX);
  }
  /**
   * Initialize package contents
   */
  init() {
    V.INSTANCE.set(l.eNS_URI, this), this.setEFactoryInstance(I.eINSTANCE);
    const e = new z();
    e.setName("VariableWrapper"), e.setAbstract(!1), e.setInterface(!1), this.getEClassifiers().push(e), e.setEPackage(this), l.Literals.VARIABLE_WRAPPER = e;
    const t = new P();
    t.setName("value"), t.setLowerBound(0), t.setUpperBound(1), e.getEStructuralFeatures().push(t), l.Literals.VARIABLE_WRAPPER__VALUE = t;
    const n = new P();
    n.setName("variable"), n.setLowerBound(0), n.setUpperBound(1), e.getEStructuralFeatures().push(n), l.Literals.VARIABLE_WRAPPER__VARIABLE = n;
    const E = new P();
    E.setName("isSet"), E.setLowerBound(0), E.setUpperBound(1), e.getEStructuralFeatures().push(E), l.Literals.VARIABLE_WRAPPER__IS_SET = E;
    const c = new P();
    c.setName("type"), c.setLowerBound(0), c.setUpperBound(1), e.getEStructuralFeatures().push(c), l.Literals.VARIABLE_WRAPPER__TYPE = c, l.Literals.VARIABLE_WRAPPER__VALUE.setEType(_().getEClassifier("EObject")), l.Literals.VARIABLE_WRAPPER__VARIABLE.setEType(_().getEClassifier("EString")), l.Literals.VARIABLE_WRAPPER__IS_SET.setEType(_().getEClassifier("EBoolean")), l.Literals.VARIABLE_WRAPPER__TYPE.setEType(_().getEClassifier("EString"));
  }
}
const H = {
  VariableWrapper: D,
  VariableComplexStringWrapper: C
};
V.INSTANCE.registerPackage(l.eINSTANCE);
const K = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ComposablesPackage: l,
  VARIABLECOMPLEXSTRINGWRAPPER: m,
  VARIABLEWRAPPER: j,
  VariableComplexStringWrapper: C,
  VariableWrapper: D,
  WrapperTypes: H,
  useDatasourceRepository: J,
  useGlobalLoading: F,
  usePromisifiedModal: q,
  useTemporaryStore: Z,
  useVariableRepository: L
}, Symbol.toStringTag, { value: "Module" })), N = "org.eclipse.daanse.board.app.ui.vue.composables", Q = "0.0.1-next.1";
async function ie(r) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${N}: tsm runtime is not initialized`);
  e.register(N, K, Q, "ui.vue.composables"), await void 0;
}
async function ne(r) {
  await void 0;
}
export {
  l as ComposablesPackage,
  m as VARIABLECOMPLEXSTRINGWRAPPER,
  ce as VARIABLEWRAPPER,
  C as VariableComplexStringWrapper,
  le as VariableWrapper,
  H as WrapperTypes,
  ie as activate,
  ne as deactivate,
  J as useDatasourceRepository,
  F as useGlobalLoading,
  q as usePromisifiedModal,
  Z as useTemporaryStore,
  L as useVariableRepository
};
