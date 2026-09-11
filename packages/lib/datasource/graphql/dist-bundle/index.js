import { inject as T, injectable as f } from "@eclipse-daanse/tsm";
import { BaseDatasource as v, IBaseConnectionConfigurationImpl as d } from "org.eclipse.daanse.board.app.lib.datasource.base";
import { CONNECTION_REPOSITORY as y } from "org.eclipse.daanse.board.app.lib.api.connection";
import { BasicEFactory as S, BasicEPackage as p, EPackageRegistry as h, BasicEClass as C, BasicEAttribute as _, getEcorePackage as N } from "@emfts/core";
const { serviceId: L } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
var b = Object.defineProperty, F = Object.getOwnPropertyDescriptor, g = (s, e, t, a) => {
  for (var r = a > 1 ? void 0 : a ? F(e, t) : e, o = s.length - 1, c; o >= 0; o--)
    (c = s[o]) && (r = (a ? c(e, t, r) : c(r)) || r);
  return a && r && b(e, t, r), r;
};
let u = class extends v {
  connection;
  query = "";
  connectionRepository;
  init(s) {
    super.init(s), this.connection = s.connection, this.query = s.query ?? "", this.pollingInterval = s.pollingInterval ?? 5e3, this.pollingEnabled && this.startPolling(this.pollingInterval);
  }
  get fetcher() {
    if (!this.connectionRepository)
      throw new Error("ConnectionRepository is not provided to Store Classes");
    return this.connectionRepository.getConnection(
      this.connection
    ).fetcher;
  }
  async getData(s) {
    return this.query ? (await (await this.fetcher({ query: this.query })).next()).value.data : (console.warn("Query is not provided for GraphQLStore"), null);
  }
  async getOriginalData() {
    throw new Error("Not Implemented");
  }
  parseToDataTable(s) {
    if (!Array.isArray(s)) return { items: [], headers: [], rows: [] };
    const e = ["index"], t = [], a = s.map((r, o) => {
      if (typeof r != "object") return {};
      const c = {
        index: o
      };
      for (const l in r)
        typeof r[l] == "object" || Array.isArray(r[l]) || (e.includes(l) || e.push(l), c[l] = r[l]);
      return c;
    });
    return a.forEach((r, o) => {
      t[o] = [], e.forEach((c) => {
        t[o].push(r[c]);
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
    return !!s.connection;
  }
};
g([
  T(y)
], u.prototype, "connectionRepository", 2);
u = g([
  f()
], u);
class i extends d {
  // Feature ID Constants (eLiterals)
  static CONNECTION = 4;
  static QUERY = 5;
  static VARIABLES = 6;
  static POLLING_INTERVAL = 7;
  // Private fields
  _connection;
  _query;
  _variables;
  _pollingInterval;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return n.Literals.I_GRAPH_Q_L_STORE_CONFIGURATION;
  }
  // Getters and Setters
  get connection() {
    return this._connection;
  }
  set connection(e) {
    const t = this._connection;
    this._connection = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(i.CONNECTION),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => i.CONNECTION,
      merge: () => !1
    });
  }
  get query() {
    return this._query;
  }
  set query(e) {
    const t = this._query;
    this._query = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(i.QUERY),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => i.QUERY,
      merge: () => !1
    });
  }
  get variables() {
    return this._variables;
  }
  set variables(e) {
    const t = this._variables;
    this._variables = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(i.VARIABLES),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => i.VARIABLES,
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
      getFeature: () => this.eClass().getEStructuralFeature(i.POLLING_INTERVAL),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => i.POLLING_INTERVAL,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case i.CONNECTION:
        return this.connection;
      case i.QUERY:
        return this.query;
      case i.VARIABLES:
        return this.variables;
      case i.POLLING_INTERVAL:
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
      case i.CONNECTION:
        this.connection = t, super.eSet(e, t);
        break;
      case i.QUERY:
        this.query = t, super.eSet(e, t);
        break;
      case i.VARIABLES:
        this.variables = t, super.eSet(e, t);
        break;
      case i.POLLING_INTERVAL:
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
      case i.CONNECTION:
        return this._connection !== void 0;
      case i.QUERY:
        return this._query !== void 0;
      case i.VARIABLES:
        return this._variables !== void 0;
      case i.POLLING_INTERVAL:
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
      case i.CONNECTION:
        this._connection = void 0;
        return;
      case i.QUERY:
        this._query = void 0;
        return;
      case i.VARIABLES:
        this._variables = void 0;
        return;
      case i.POLLING_INTERVAL:
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
      connection: this.connection,
      query: this.query,
      variables: this.variables,
      pollingInterval: this.pollingInterval
    };
  }
}
class E extends S {
  // Lazy singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new E()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(n.eINSTANCE);
  }
  /**
   * Create a new IGraphQLStoreConfiguration instance
   */
  createIGraphQLStoreConfiguration() {
    return new i();
  }
  /**
   * Create an instance of the given class
   */
  create(e) {
    switch (e.getName()) {
      case "IGraphQLStoreConfiguration":
        return this.createIGraphQLStoreConfiguration();
      default:
        throw new Error(`Unknown class: ${e.getName()}`);
    }
  }
}
function w(s) {
  const e = h.INSTANCE.getEPackage(s);
  if (!e)
    throw new Error(`EPackage '${s}' is not registered. Access the eINSTANCE of that model's generated package (or register it via EPackageRegistry.INSTANCE.registerPackage) before initializing GraphqlstorePackage.`);
  return e;
}
class n extends p {
  static eNAME = "graphqlstore";
  static eNS_URI = "http://org.eclipse.daanse.board.app.lib.datasource.graphql";
  static eNS_PREFIX = "graphqlstore";
  // Singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new n(), this._instance.init()), this._instance;
  }
  /**
   * Literals for quick access to metaclasses and features
   */
  static Literals = {
    I_GRAPH_Q_L_STORE_CONFIGURATION: null,
    I_GRAPH_Q_L_STORE_CONFIGURATION__CONNECTION: null,
    I_GRAPH_Q_L_STORE_CONFIGURATION__QUERY: null,
    I_GRAPH_Q_L_STORE_CONFIGURATION__VARIABLES: null,
    I_GRAPH_Q_L_STORE_CONFIGURATION__POLLING_INTERVAL: null
  };
  constructor() {
    super(), this.setName(n.eNAME), this.setNsURI(n.eNS_URI), this.setNsPrefix(n.eNS_PREFIX);
  }
  /**
   * Initialize package contents
   */
  init() {
    h.INSTANCE.set(n.eNS_URI, this), this.setEFactoryInstance(E.eINSTANCE);
    const e = new C();
    e.setName("IGraphQLStoreConfiguration"), e.setAbstract(!1), e.setInterface(!1), this.getEClassifiers().push(e), e.setEPackage(this), n.Literals.I_GRAPH_Q_L_STORE_CONFIGURATION = e;
    const t = new _();
    t.setName("connection"), t.setLowerBound(0), t.setUpperBound(1), e.getEStructuralFeatures().push(t), n.Literals.I_GRAPH_Q_L_STORE_CONFIGURATION__CONNECTION = t;
    const a = new _();
    a.setName("query"), a.setLowerBound(0), a.setUpperBound(1), e.getEStructuralFeatures().push(a), n.Literals.I_GRAPH_Q_L_STORE_CONFIGURATION__QUERY = a;
    const r = new _();
    r.setName("variables"), r.setLowerBound(0), r.setUpperBound(1), e.getEStructuralFeatures().push(r), n.Literals.I_GRAPH_Q_L_STORE_CONFIGURATION__VARIABLES = r;
    const o = new _();
    o.setName("pollingInterval"), o.setLowerBound(0), o.setUpperBound(1), e.getEStructuralFeatures().push(o), n.Literals.I_GRAPH_Q_L_STORE_CONFIGURATION__POLLING_INTERVAL = o, n.Literals.I_GRAPH_Q_L_STORE_CONFIGURATION.getESuperTypes().push(w("http://org.eclipse.daanse.board.app.lib.datasource.base").getEClassifier("IBaseConnectionConfiguration")), n.Literals.I_GRAPH_Q_L_STORE_CONFIGURATION__CONNECTION.setEType(N().getEClassifier("EString")), n.Literals.I_GRAPH_Q_L_STORE_CONFIGURATION__QUERY.setEType(N().getEClassifier("EString")), n.Literals.I_GRAPH_Q_L_STORE_CONFIGURATION__VARIABLES.setEType(N().getEClassifier("EJavaObject")), n.Literals.I_GRAPH_Q_L_STORE_CONFIGURATION__POLLING_INTERVAL.setEType(N().getEClassifier("EInt"));
  }
}
n.eINSTANCE;
const I = L("GraphQLStoreFactory"), P = Symbol.for(I);
function O({ services: s }) {
  s.register(I, (e) => {
    if (!u.validateConfiguration(e))
      throw new Error(
        "Invalid GraphQLStore configuration. Please provide a valid configuration."
      );
    const t = s.construct(u);
    return t.init(e), t;
  });
}
function A({ services: s }) {
  s.unregister(I);
}
const U = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GRAPHQL_STORE_FACTORY: I,
  get GraphQLStore() {
    return u;
  },
  GraphqlstoreFactory: E,
  GraphqlstorePackage: n,
  IGraphQLStoreConfigurationImpl: i,
  activate: O,
  deactivate: A,
  factorySymbol: P
}, Symbol.toStringTag, { value: "Module" })), R = "org.eclipse.daanse.board.app.lib.datasource.graphql", D = "0.0.1-next.1";
async function H(s) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${R}: tsm runtime is not initialized`);
  e.register(R, U, D, "lib.datasource.graphql"), await O?.(s);
}
async function q(s) {
  await A?.(s);
}
export {
  I as GRAPHQL_STORE_FACTORY,
  u as GraphQLStore,
  E as GraphqlstoreFactory,
  n as GraphqlstorePackage,
  i as IGraphQLStoreConfigurationImpl,
  H as activate,
  q as deactivate,
  P as factorySymbol
};
