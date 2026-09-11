import { UsesComputedVariable as d } from "org.eclipse.daanse.board.app.lib.variables";
import { BasicEFactory as I, BasicEPackage as g, EPackageRegistry as _, BasicEClass as O, BasicEAttribute as u, getEcorePackage as E, BasicEObject as c } from "@emfts/core";
class h extends I {
  static get eINSTANCE() {
    return this._instance || (this._instance = new h()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(i.eINSTANCE);
  }
  /**
   * Create an instance of the given class
   */
  create(t) {
    switch (t.getName()) {
      default:
        throw new Error(`Unknown class: ${t.getName()}`);
    }
  }
}
class i extends g {
  static {
    this.eNAME = "baseconnection";
  }
  static {
    this.eNS_URI = "http://org.eclipse.daanse.board.app.lib.datasource.base";
  }
  static {
    this.eNS_PREFIX = "baseconn";
  }
  static get eINSTANCE() {
    return this._instance || (this._instance = new i(), this._instance.init()), this._instance;
  }
  static {
    this.Literals = {
      I_BASE_CONNECTION_CONFIGURATION: null,
      I_BASE_CONNECTION_CONFIGURATION__NAME: null,
      I_BASE_CONNECTION_CONFIGURATION__TYPE: null,
      I_BASE_CONNECTION_CONFIGURATION__UID: null,
      I_BASE_CONNECTION_CONFIGURATION__POLLING_ENABLED: null
    };
  }
  constructor() {
    super(), this.setName(i.eNAME), this.setNsURI(i.eNS_URI), this.setNsPrefix(i.eNS_PREFIX);
  }
  /**
   * Initialize package contents
   */
  init() {
    _.INSTANCE.set(i.eNS_URI, this), this.setEFactoryInstance(h.eINSTANCE);
    const t = new O();
    t.setName("IBaseConnectionConfiguration"), t.setAbstract(!0), t.setInterface(!1), this.getEClassifiers().push(t), t.setEPackage(this), i.Literals.I_BASE_CONNECTION_CONFIGURATION = t;
    const e = new u();
    e.setName("name"), e.setLowerBound(0), e.setUpperBound(1), t.getEStructuralFeatures().push(e), i.Literals.I_BASE_CONNECTION_CONFIGURATION__NAME = e;
    const r = new u();
    r.setName("type"), r.setLowerBound(0), r.setUpperBound(1), t.getEStructuralFeatures().push(r), i.Literals.I_BASE_CONNECTION_CONFIGURATION__TYPE = r;
    const l = new u();
    l.setName("uid"), l.setLowerBound(0), l.setUpperBound(1), t.getEStructuralFeatures().push(l), i.Literals.I_BASE_CONNECTION_CONFIGURATION__UID = l;
    const a = new u();
    a.setName("pollingEnabled"), a.setLowerBound(0), a.setUpperBound(1), t.getEStructuralFeatures().push(a), i.Literals.I_BASE_CONNECTION_CONFIGURATION__POLLING_ENABLED = a, i.Literals.I_BASE_CONNECTION_CONFIGURATION__NAME.setEType(E().getEClassifier("EString")), i.Literals.I_BASE_CONNECTION_CONFIGURATION__TYPE.setEType(E().getEClassifier("EString")), i.Literals.I_BASE_CONNECTION_CONFIGURATION__UID.setEType(E().getEClassifier("EString")), i.Literals.I_BASE_CONNECTION_CONFIGURATION__POLLING_ENABLED.setEType(E().getEClassifier("EBoolean"));
  }
}
class s extends c {
  static {
    this.NAME = 0;
  }
  static {
    this.TYPE = 1;
  }
  static {
    this.UID = 2;
  }
  static {
    this.POLLING_ENABLED = 3;
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return i.Literals.I_BASE_CONNECTION_CONFIGURATION;
  }
  // Getters and Setters
  get name() {
    return this._name;
  }
  set name(t) {
    const e = this._name;
    this._name = t, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(s.NAME),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => s.NAME,
      merge: () => !1
    });
  }
  get type() {
    return this._type;
  }
  set type(t) {
    const e = this._type;
    this._type = t, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(s.TYPE),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => s.TYPE,
      merge: () => !1
    });
  }
  get uid() {
    return this._uid;
  }
  set uid(t) {
    const e = this._uid;
    this._uid = t, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(s.UID),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => s.UID,
      merge: () => !1
    });
  }
  get pollingEnabled() {
    return this._pollingEnabled;
  }
  set pollingEnabled(t) {
    const e = this._pollingEnabled;
    this._pollingEnabled = t, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(s.POLLING_ENABLED),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => s.POLLING_ENABLED,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(t) {
    switch (this.eClass().getFeatureID(t)) {
      case s.NAME:
        return this.name;
      case s.TYPE:
        return this.type;
      case s.UID:
        return this.uid;
      case s.POLLING_ENABLED:
        return this.pollingEnabled;
      default:
        return super.eGet(t);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(t, e) {
    switch (this.eClass().getFeatureID(t)) {
      case s.NAME:
        this.name = e, super.eSet(t, e);
        break;
      case s.TYPE:
        this.type = e, super.eSet(t, e);
        break;
      case s.UID:
        this.uid = e, super.eSet(t, e);
        break;
      case s.POLLING_ENABLED:
        this.pollingEnabled = e, super.eSet(t, e);
        break;
      default:
        super.eSet(t, e);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(t) {
    switch (this.eClass().getFeatureID(t)) {
      case s.NAME:
        return this._name !== void 0;
      case s.TYPE:
        return this._type !== void 0;
      case s.UID:
        return this._uid !== void 0;
      case s.POLLING_ENABLED:
        return this._pollingEnabled !== void 0;
      default:
        return super.eIsSet(t);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(t) {
    switch (this.eClass().getFeatureID(t)) {
      case s.NAME:
        this._name = void 0;
        return;
      case s.TYPE:
        this._type = void 0;
        return;
      case s.UID:
        this._uid = void 0;
        return;
      case s.POLLING_ENABLED:
        this._pollingEnabled = void 0;
        return;
      default:
        super.eUnset(t);
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
      name: this.name,
      type: this.type,
      uid: this.uid,
      pollingEnabled: this.pollingEnabled
    };
  }
}
i.eINSTANCE;
class p extends d {
  constructor() {
    super(...arguments), this.subscribers = [], this.pollingInterval = 5e3, this.pollingActive = !1, this.pollingIntervalId = null, this.name = "", this.type = "", this.uid = "";
  }
  init(t) {
    this.type = t.type ?? "", this.name = t.name ?? "", this.uid = t.uid ?? "", this.setUpdateCb(() => {
      console.log("Test notify"), this.notify();
    }), this.pollingEnabled = t.pollingEnabled ?? !1;
  }
  subscribe(t) {
    return this.subscribers.push(t), () => {
      this.unsubscribe(t);
    };
  }
  unsubscribe(t) {
    this.subscribers = this.subscribers.filter((e) => e !== t);
  }
  notify() {
    this.subscribers.forEach((t) => {
      t();
    });
  }
  startPolling(t) {
    this.stopPolling(), !this.pollingActive && (this.pollingActive = !0, this.pollingInterval = t, this.pollingIntervalId = window.setInterval(async () => {
      if (this.pollingActive)
        try {
          const e = await this.getOriginalData();
          console.log(e), this.notify();
        } catch (e) {
          console.warn("Polling error", e);
        }
    }, this.pollingInterval), console.log("Started polling", this.pollingIntervalId));
  }
  stopPolling() {
    console.log("Stopping polling", this.pollingIntervalId), this.pollingActive = !1, this.pollingIntervalId !== null && (window.clearInterval(this.pollingIntervalId), this.pollingIntervalId = null);
  }
  static validateConfiguration(t) {
    return !0;
  }
}
const o = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BaseDatasource: p,
  BaseconnectionFactory: h,
  BaseconnectionPackage: i,
  IBaseConnectionConfigurationImpl: s
}, Symbol.toStringTag, { value: "Module" })), n = "org.eclipse.daanse.board.app.lib.datasource.base", A = "0.0.1-next.1";
async function b(N) {
  const t = globalThis.__tsm__;
  if (!t)
    throw new Error(`${n}: tsm runtime is not initialized`);
  t.register(n, o, A, "lib.datasource.base"), await void 0;
}
async function L(N) {
  await void 0;
}
export {
  p as BaseDatasource,
  h as BaseconnectionFactory,
  i as BaseconnectionPackage,
  s as IBaseConnectionConfigurationImpl,
  b as activate,
  L as deactivate
};
