import { inject as g } from "@eclipse-daanse/tsm";
import { BaseDatasource as I, IBaseConnectionConfigurationImpl as d } from "org.eclipse.daanse.board.app.lib.datasource.base";
import { CONNECTION_REPOSITORY as p } from "org.eclipse.daanse.board.app.lib.api.connection";
import { BasicEFactory as U, BasicEPackage as y, EPackageRegistry as R, BasicEClass as w, BasicEAttribute as S, getEcorePackage as _ } from "@emfts/core";
const { serviceId: T } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
var v = Object.defineProperty, b = (r, e, t, i) => {
  for (var o = void 0, a = r.length - 1, c; a >= 0; a--)
    (c = r[a]) && (o = c(e, t, o) || o);
  return o && v(e, t, o), o;
};
class E extends I {
  connection;
  connectionRepository;
  init(e) {
    super.init(e), this.connection = e.connection;
  }
  async getOriginalData() {
    if (!this.connectionRepository)
      throw new Error("ConnectionRepository is not provided to Store Classes");
    return await this.connectionRepository.getConnection(
      this.connection
    ).fetch({});
  }
  async getData(e) {
    if (!this.connectionRepository)
      throw new Error("ConnectionRepository is not provided to Store Classes");
    const i = await this.connectionRepository.getConnection(
      this.connection
    ).fetch({});
    if (e === "object")
      return i;
    if (e === "string")
      return JSON.stringify(i);
    if (e === "DataTable") {
      const o = i.items;
      return this.parseToDataTable(o);
    } else
      return console.warn("Invalid data type"), null;
  }
  parseToDataTable(e) {
    if (!Array.isArray(e)) return { items: [], headers: [], rows: [] };
    const t = ["index"], i = [], o = e.map((a, c) => {
      if (typeof a != "object") return {};
      const l = {
        index: c
      };
      for (const u in a)
        typeof a[u] == "object" || Array.isArray(a[u]) || (t.includes(u) || t.push(u), l[u] = a[u]);
      return l;
    });
    return o.forEach((a, c) => {
      i[c] = [], t.forEach((l) => {
        i[c].push(a[l]);
      });
    }), { items: o, headers: t, rows: i };
  }
  callEvent(e, t) {
    console.warn(
      `Event "${e}" is not available for this type of store`,
      t
    );
  }
  destroy() {
  }
  static validateConfiguration(e) {
    return !!e.connection;
  }
}
b([
  g(p)
], E.prototype, "connectionRepository");
class n extends d {
  // Feature ID Constants (eLiterals)
  static RESOURCE_URL = 3;
  static CONNECTION = 4;
  // Private fields
  _resourceUrl;
  _connection;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return s.Literals.I_RSS_STORE_CONFIGURATION;
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
      getFeature: () => this.eClass().getEStructuralFeature(n.RESOURCE_URL),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => n.RESOURCE_URL,
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
      getFeature: () => this.eClass().getEStructuralFeature(n.CONNECTION),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => n.CONNECTION,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case n.RESOURCE_URL:
        return this.resourceUrl;
      case n.CONNECTION:
        return this.connection;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case n.RESOURCE_URL:
        this.resourceUrl = t, super.eSet(e, t);
        break;
      case n.CONNECTION:
        this.connection = t, super.eSet(e, t);
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
      case n.RESOURCE_URL:
        return this._resourceUrl !== void 0;
      case n.CONNECTION:
        return this._connection !== void 0;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case n.RESOURCE_URL:
        this._resourceUrl = void 0;
        return;
      case n.CONNECTION:
        this._connection = void 0;
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
      connection: this.connection
    };
  }
}
class N extends U {
  // Lazy singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new N()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(s.eINSTANCE);
  }
  /**
   * Create a new IRssStoreConfiguration instance
   */
  createIRssStoreConfiguration() {
    return new n();
  }
  /**
   * Create an instance of the given class
   */
  create(e) {
    switch (e.getName()) {
      case "IRssStoreConfiguration":
        return this.createIRssStoreConfiguration();
      default:
        throw new Error(`Unknown class: ${e.getName()}`);
    }
  }
}
function A(r) {
  const e = R.INSTANCE.getEPackage(r);
  if (!e)
    throw new Error(`EPackage '${r}' is not registered. Access the eINSTANCE of that model's generated package (or register it via EPackageRegistry.INSTANCE.registerPackage) before initializing RssstorePackage.`);
  return e;
}
class s extends y {
  static eNAME = "rssstore";
  static eNS_URI = "http://org.eclipse.daanse.board.app.lib.datasource.rss";
  static eNS_PREFIX = "rssstore";
  // Singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new s(), this._instance.init()), this._instance;
  }
  /**
   * Literals for quick access to metaclasses and features
   */
  static Literals = {
    I_RSS_STORE_CONFIGURATION: null,
    I_RSS_STORE_CONFIGURATION__RESOURCE_URL: null,
    I_RSS_STORE_CONFIGURATION__CONNECTION: null
  };
  constructor() {
    super(), this.setName(s.eNAME), this.setNsURI(s.eNS_URI), this.setNsPrefix(s.eNS_PREFIX);
  }
  /**
   * Initialize package contents
   */
  init() {
    R.INSTANCE.set(s.eNS_URI, this), this.setEFactoryInstance(N.eINSTANCE);
    const e = new w();
    e.setName("IRssStoreConfiguration"), e.setAbstract(!1), e.setInterface(!1), this.getEClassifiers().push(e), e.setEPackage(this), s.Literals.I_RSS_STORE_CONFIGURATION = e;
    const t = new S();
    t.setName("resourceUrl"), t.setLowerBound(0), t.setUpperBound(1), e.getEStructuralFeatures().push(t), s.Literals.I_RSS_STORE_CONFIGURATION__RESOURCE_URL = t;
    const i = new S();
    i.setName("connection"), i.setLowerBound(0), i.setUpperBound(1), e.getEStructuralFeatures().push(i), s.Literals.I_RSS_STORE_CONFIGURATION__CONNECTION = i, s.Literals.I_RSS_STORE_CONFIGURATION.getESuperTypes().push(A("http://org.eclipse.daanse.board.app.lib.datasource.base").getEClassifier("IBaseConnectionConfiguration")), s.Literals.I_RSS_STORE_CONFIGURATION__RESOURCE_URL.setEType(_().getEClassifier("EString")), s.Literals.I_RSS_STORE_CONFIGURATION__CONNECTION.setEType(_().getEClassifier("EString"));
  }
}
s.eINSTANCE;
const h = T("RssStoreFactory"), F = Symbol.for(h);
function f({ services: r }) {
  r.register(h, (e) => {
    if (!E.validateConfiguration(e))
      throw new Error(
        "Invalid RssStore configuration. Please provide a valid configuration."
      );
    const t = r.construct(E);
    return t.init(e), t;
  });
}
function C({ services: r }) {
  r.unregister(h);
}
const D = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  IRssStoreConfigurationImpl: n,
  RSS_STORE_FACTORY: h,
  RssStore: E,
  RssstoreFactory: N,
  RssstorePackage: s,
  activate: f,
  deactivate: C,
  factorySymbol: F
}, Symbol.toStringTag, { value: "Module" })), O = "org.eclipse.daanse.board.app.lib.datasource.rss", L = "0.0.1-next.1";
async function j(r) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${O}: tsm runtime is not initialized`);
  e.register(O, D, L, "lib.datasource.rss"), await f?.(r);
}
async function k(r) {
  await C?.(r);
}
export {
  n as IRssStoreConfigurationImpl,
  h as RSS_STORE_FACTORY,
  E as RssStore,
  N as RssstoreFactory,
  s as RssstorePackage,
  j as activate,
  k as deactivate,
  F as factorySymbol
};
