import { inject as d, injectable as p } from "@eclipse-daanse/tsm";
import { BaseDatasource as C, IBaseConnectionConfigurationImpl as L } from "org.eclipse.daanse.board.app.lib.datasource.base";
import { CONNECTION_REPOSITORY as U } from "org.eclipse.daanse.board.app.lib.api.connection";
import f from "org.eclipse.daanse.board.app.lib.utils.helpers";
import { BasicEFactory as v, BasicEPackage as A, EPackageRegistry as S, BasicEClass as y, BasicEAttribute as u, getEcorePackage as _ } from "@emfts/core";
const { serviceId: R } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
var V = Object.defineProperty, w = Object.getOwnPropertyDescriptor, T = (s, e, t, a) => {
  for (var i = a > 1 ? void 0 : a ? w(e, t) : e, o = s.length - 1, c; o >= 0; o--)
    (c = s[o]) && (i = (a ? c(e, t, i) : c(i)) || i);
  return a && i && V(e, t, i), i;
};
let E = class extends C {
  connection;
  resourceUrl = null;
  selectedJSONValue;
  connectionRepository;
  init(s) {
    super.init(s), this.connection = s.connection, this.resourceUrl = super.initVariable(s.resourceUrl ?? ""), this.selectedJSONValue = s.selectedJSONValue, this.pollingInterval = s.pollingInterval ?? 5e3, this.pollingEnabled && this.startPolling(this.pollingInterval);
  }
  //   async getData<T extends keyof DataMap>(type: T): Promise<DataMap[T]> {
  async getData(s) {
    let e = null;
    if (!this.connectionRepository)
      throw new Error("ConnectionRepository is not provided to Store Classes");
    try {
      const i = await (await this.connectionRepository.getConnection(
        this.connection
      ).fetch({ url: this.resourceUrl?.value || "" })).json();
      return e = i, this.selectedJSONValue && (e = f.extractDataByPath(i, this.selectedJSONValue)), s === "DataTable" ? e = this.parseToDataTable(e) : s === "object" || s === "string" && (e = JSON.stringify(e)), e;
    } catch (t) {
      console.log(t), console.warn("Invalid resource URL", t.name);
    }
    return e;
  }
  async getOriginalData() {
    if (!this.connectionRepository)
      throw new Error("ConnectionRepository is not provided to Store Classes");
    try {
      return await (await this.connectionRepository.getConnection(
        this.connection
      ).fetch({ url: this.resourceUrl?.value || "" })).json();
    } catch (s) {
      console.warn("Invalid resource URL", s.name);
    }
  }
  // TODO: Add proper typing and imports for interfaces
  // parseToDataTable(data: any): IDataTable {
  parseToDataTable(s) {
    if (!Array.isArray(s)) return { items: [], headers: [], rows: [] };
    const e = ["index"], t = [], a = s.map((i, o) => {
      if (typeof i != "object") return {};
      const c = {
        index: o
      };
      for (const l in i)
        typeof i[l] == "object" || Array.isArray(i[l]) || (e.includes(l) || e.push(l), c[l] = i[l]);
      return c;
    });
    return a.forEach((i, o) => {
      t[o] = [], e.forEach((c) => {
        t[o].push(i[c]);
      });
    }), { items: a, headers: e, rows: t };
  }
  callEvent(s, e) {
    console.warn(
      `Event "${s}" is not available for this type of store`,
      e
    );
  }
  destroy() {
    this.stopPolling();
  }
  static validateConfiguration(s) {
    return !(!s.connection || !s.resourceUrl);
  }
};
T([
  d(U)
], E.prototype, "connectionRepository", 2);
E = T([
  p()
], E);
class r extends L {
  // Feature ID Constants (eLiterals)
  static RESOURCE_URL = 3;
  static CONNECTION = 4;
  static SELECTED_J_S_O_N_VALUE = 5;
  static POLLING_INTERVAL = 6;
  // Private fields
  _resourceUrl;
  _connection;
  _selectedJSONValue;
  _pollingInterval;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return n.Literals.I_REST_STORE_CONFIGURATION;
  }
  // Getters and Setters
  get resourceUrl() {
    return this._resourceUrl;
  }
  set resourceUrl(e) {
    const t = this._resourceUrl;
    this._resourceUrl = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(r.RESOURCE_URL),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => r.RESOURCE_URL,
      merge: () => !1
    });
  }
  get connection() {
    return this._connection;
  }
  set connection(e) {
    const t = this._connection;
    this._connection = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(r.CONNECTION),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => r.CONNECTION,
      merge: () => !1
    });
  }
  get selectedJSONValue() {
    return this._selectedJSONValue;
  }
  set selectedJSONValue(e) {
    const t = this._selectedJSONValue;
    this._selectedJSONValue = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(r.SELECTED_J_S_O_N_VALUE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => r.SELECTED_J_S_O_N_VALUE,
      merge: () => !1
    });
  }
  get pollingInterval() {
    return this._pollingInterval;
  }
  set pollingInterval(e) {
    const t = this._pollingInterval;
    this._pollingInterval = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(r.POLLING_INTERVAL),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => r.POLLING_INTERVAL,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case r.RESOURCE_URL:
        return this.resourceUrl;
      case r.CONNECTION:
        return this.connection;
      case r.SELECTED_J_S_O_N_VALUE:
        return this.selectedJSONValue;
      case r.POLLING_INTERVAL:
        return this.pollingInterval;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case r.RESOURCE_URL:
        this.resourceUrl = t, super.eSet(e, t);
        break;
      case r.CONNECTION:
        this.connection = t, super.eSet(e, t);
        break;
      case r.SELECTED_J_S_O_N_VALUE:
        this.selectedJSONValue = t, super.eSet(e, t);
        break;
      case r.POLLING_INTERVAL:
        this.pollingInterval = t, super.eSet(e, t);
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
      case r.RESOURCE_URL:
        return this._resourceUrl !== void 0;
      case r.CONNECTION:
        return this._connection !== void 0;
      case r.SELECTED_J_S_O_N_VALUE:
        return this._selectedJSONValue !== void 0;
      case r.POLLING_INTERVAL:
        return this._pollingInterval !== void 0;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case r.RESOURCE_URL:
        this._resourceUrl = void 0;
        return;
      case r.CONNECTION:
        this._connection = void 0;
        return;
      case r.SELECTED_J_S_O_N_VALUE:
        this._selectedJSONValue = void 0;
        return;
      case r.POLLING_INTERVAL:
        this._pollingInterval = void 0;
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
      resourceUrl: this.resourceUrl,
      connection: this.connection,
      selectedJSONValue: this.selectedJSONValue,
      pollingInterval: this.pollingInterval
    };
  }
}
class N extends v {
  // Lazy singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new N()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(n.eINSTANCE);
  }
  /**
   * Create a new IRestStoreConfiguration instance
   */
  createIRestStoreConfiguration() {
    return new r();
  }
  /**
   * Create an instance of the given class
   */
  create(e) {
    switch (e.getName()) {
      case "IRestStoreConfiguration":
        return this.createIRestStoreConfiguration();
      default:
        throw new Error(`Unknown class: ${e.getName()}`);
    }
  }
}
function F(s) {
  const e = S.INSTANCE.getEPackage(s);
  if (!e)
    throw new Error(`EPackage '${s}' is not registered. Access the eINSTANCE of that model's generated package (or register it via EPackageRegistry.INSTANCE.registerPackage) before initializing ReststorePackage.`);
  return e;
}
class n extends A {
  static eNAME = "reststore";
  static eNS_URI = "http://org.eclipse.daanse.board.app.lib.datasource.rest";
  static eNS_PREFIX = "reststore";
  // Singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new n(), this._instance.init()), this._instance;
  }
  /**
   * Literals for quick access to metaclasses and features
   */
  static Literals = {
    I_REST_STORE_CONFIGURATION: null,
    I_REST_STORE_CONFIGURATION__RESOURCE_URL: null,
    I_REST_STORE_CONFIGURATION__CONNECTION: null,
    I_REST_STORE_CONFIGURATION__SELECTED_J_S_O_N_VALUE: null,
    I_REST_STORE_CONFIGURATION__POLLING_INTERVAL: null
  };
  constructor() {
    super(), this.setName(n.eNAME), this.setNsURI(n.eNS_URI), this.setNsPrefix(n.eNS_PREFIX);
  }
  /**
   * Initialize package contents
   */
  init() {
    S.INSTANCE.set(n.eNS_URI, this), this.setEFactoryInstance(N.eINSTANCE);
    const e = new y();
    e.setName("IRestStoreConfiguration"), e.setAbstract(!1), e.setInterface(!1), this.getEClassifiers().push(e), e.setEPackage(this), n.Literals.I_REST_STORE_CONFIGURATION = e;
    const t = new u();
    t.setName("resourceUrl"), t.setLowerBound(0), t.setUpperBound(1), e.getEStructuralFeatures().push(t), n.Literals.I_REST_STORE_CONFIGURATION__RESOURCE_URL = t;
    const a = new u();
    a.setName("connection"), a.setLowerBound(0), a.setUpperBound(1), e.getEStructuralFeatures().push(a), n.Literals.I_REST_STORE_CONFIGURATION__CONNECTION = a;
    const i = new u();
    i.setName("selectedJSONValue"), i.setLowerBound(0), i.setUpperBound(1), e.getEStructuralFeatures().push(i), n.Literals.I_REST_STORE_CONFIGURATION__SELECTED_J_S_O_N_VALUE = i;
    const o = new u();
    o.setName("pollingInterval"), o.setLowerBound(0), o.setUpperBound(1), e.getEStructuralFeatures().push(o), n.Literals.I_REST_STORE_CONFIGURATION__POLLING_INTERVAL = o, n.Literals.I_REST_STORE_CONFIGURATION.getESuperTypes().push(F("http://org.eclipse.daanse.board.app.lib.datasource.base").getEClassifier("IBaseConnectionConfiguration")), n.Literals.I_REST_STORE_CONFIGURATION__RESOURCE_URL.setEType(_().getEClassifier("EString")), n.Literals.I_REST_STORE_CONFIGURATION__CONNECTION.setEType(_().getEClassifier("EString")), n.Literals.I_REST_STORE_CONFIGURATION__SELECTED_J_S_O_N_VALUE.setEType(_().getEClassifier("EString")), n.Literals.I_REST_STORE_CONFIGURATION__POLLING_INTERVAL.setEType(_().getEClassifier("EInt"));
  }
}
n.eINSTANCE;
const O = R("RestStoreFactory"), D = Symbol.for(O);
function I({ services: s }) {
  s.register(O, (e) => {
    if (!E.validateConfiguration(e))
      throw new Error(
        "Invalid RestStore configuration. Please provide a valid configuration."
      );
    const t = s.construct(E);
    return t.init(e), t;
  });
}
function g({ services: s }) {
  s.unregister(O);
}
const b = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  IRestStoreConfigurationImpl: r,
  REST_STORE_FACTORY: O,
  ReststoreFactory: N,
  ReststorePackage: n,
  activate: I,
  deactivate: g,
  factorySymbol: D
}, Symbol.toStringTag, { value: "Module" })), h = "org.eclipse.daanse.board.app.lib.datasource.rest", J = "0.0.1-next.1";
async function x(s) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${h}: tsm runtime is not initialized`);
  e.register(h, b, J, "lib.datasource.rest"), await I?.(s);
}
async function q(s) {
  await g?.(s);
}
export {
  r as IRestStoreConfigurationImpl,
  O as REST_STORE_FACTORY,
  N as ReststoreFactory,
  n as ReststorePackage,
  x as activate,
  q as deactivate,
  D as factorySymbol
};
