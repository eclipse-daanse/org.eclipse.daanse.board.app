import { BaseDatasource as T, IBaseConnectionConfigurationImpl as d } from "org.eclipse.daanse.board.app.lib.datasource.base";
import { CONNECTION_REPOSITORY as f } from "org.eclipse.daanse.board.app.lib.api.connection";
import { inject as C } from "@eclipse-daanse/tsm";
import { BasicEFactory as A, BasicEPackage as S, EPackageRegistry as p, BasicEClass as y, BasicEAttribute as g, getEcorePackage as I } from "@emfts/core";
const { serviceId: R } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
var v = Object.defineProperty, w = (a, e, t, n) => {
  for (var i = void 0, r = a.length - 1, c; r >= 0; r--)
    (c = a[r]) && (i = c(e, t, i) || i);
  return i && v(e, t, i), i;
};
class N extends T {
  connection;
  sql = "";
  connectionRepository;
  // private computedUrl: ComputedVariable;
  init(e) {
    super.init(e), this.connection = e.connection, this.sql = e.sql ?? "";
  }
  async getData(e) {
    let t = null;
    if (!this.connectionRepository)
      throw new Error("ConnectionRepository is not provided to Store Classes");
    try {
      const i = await this.connectionRepository.getConnection(
        this.connection
      ).fetch({
        data: {
          mdx: this.sql
        }
      });
      let r = i.Body?.DiscoverResponse?.return?.[0]?.root?.row;
      if (r || (r = i.Body?.ExecuteResponse?.return?.root?.row), !r) return null;
      let c = null;
      return e === "DataTable" ? c = this.parseToDataTable(r) : e === "object" || e === "string" && (c = JSON.stringify(c)), c;
    } catch (n) {
      console.log(n), console.warn("Invalid resource URL", n.name);
    }
    return t;
  }
  async getTables() {
    if (!this.connectionRepository)
      throw new Error("ConnectionRepository is not provided to Store Classes");
    try {
      const t = await this.connectionRepository.getConnection(
        this.connection
      ).getApi();
      return console.log("API:", t), await t.getTables();
    } catch (e) {
      console.log(e), console.warn("Invalid resource URL", e.name);
    }
  }
  async getCatalogs() {
    if (!this.connectionRepository)
      throw new Error("ConnectionRepository is not provided to Store Classes");
    const t = await this.connectionRepository.getConnection(
      this.connection
    ).getApi(), { catalogs: n } = await t.getCatalogs();
    return n;
  }
  async getColumns() {
    if (!this.connectionRepository)
      throw new Error("ConnectionRepository is not provided to Store Classes");
    const t = await this.connectionRepository.getConnection(
      this.connection
    ).getApi(), { columns: n } = await t.getColumns();
    return n;
  }
  async getOriginalData() {
  }
  parseToDataTable(e) {
    if (!Array.isArray(e)) return { items: [], headers: [], rows: [] };
    const t = ["index"], n = [], i = e.map((r, c) => {
      if (typeof r != "object") return {};
      const u = {
        index: c
      };
      for (const l in r)
        typeof r[l] == "object" || Array.isArray(r[l]) || (t.includes(l) || t.push(l), u[l] = r[l]);
      return u;
    });
    return i.forEach((r, c) => {
      n[c] = [], t.forEach((u) => {
        n[c].push(r[u]);
      });
    }), { items: i, headers: t, rows: n };
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
w([
  C(f)
], N.prototype, "connectionRepository");
class s extends d {
  // Feature ID Constants (eLiterals)
  static CONNECTION = 3;
  static SQL = 4;
  static POLLING_INTERVAL = 5;
  // Private fields
  _connection;
  _sql;
  _pollingInterval;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return o.Literals.I_SQL_XMLA_STORE_CONFIGURATION;
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
      getFeature: () => this.eClass().getEStructuralFeature(s.CONNECTION),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => s.CONNECTION,
      merge: () => !1
    });
  }
  get sql() {
    return this._sql;
  }
  set sql(e) {
    const t = this._sql;
    this._sql = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(s.SQL),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => s.SQL,
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
      getFeature: () => this.eClass().getEStructuralFeature(s.POLLING_INTERVAL),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => s.POLLING_INTERVAL,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case s.CONNECTION:
        return this.connection;
      case s.SQL:
        return this.sql;
      case s.POLLING_INTERVAL:
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
      case s.CONNECTION:
        this.connection = t, super.eSet(e, t);
        break;
      case s.SQL:
        this.sql = t, super.eSet(e, t);
        break;
      case s.POLLING_INTERVAL:
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
      case s.CONNECTION:
        return this._connection !== void 0;
      case s.SQL:
        return this._sql !== void 0;
      case s.POLLING_INTERVAL:
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
      case s.CONNECTION:
        this._connection = void 0;
        return;
      case s.SQL:
        this._sql = void 0;
        return;
      case s.POLLING_INTERVAL:
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
      sql: this.sql,
      pollingInterval: this.pollingInterval
    };
  }
}
class h extends A {
  // Lazy singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new h()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(o.eINSTANCE);
  }
  /**
   * Create a new ISqlXmlaStoreConfiguration instance
   */
  createISqlXmlaStoreConfiguration() {
    return new s();
  }
  /**
   * Create an instance of the given class
   */
  create(e) {
    switch (e.getName()) {
      case "ISqlXmlaStoreConfiguration":
        return this.createISqlXmlaStoreConfiguration();
      default:
        throw new Error(`Unknown class: ${e.getName()}`);
    }
  }
}
function b(a) {
  const e = p.INSTANCE.getEPackage(a);
  if (!e)
    throw new Error(`EPackage '${a}' is not registered. Access the eINSTANCE of that model's generated package (or register it via EPackageRegistry.INSTANCE.registerPackage) before initializing SqlxmlastorePackage.`);
  return e;
}
class o extends S {
  static eNAME = "sqlxmlastore";
  static eNS_URI = "http://org.eclipse.daanse.board.app.lib.datasource.sql_xmla";
  static eNS_PREFIX = "sqlxmlastore";
  // Singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new o(), this._instance.init()), this._instance;
  }
  /**
   * Literals for quick access to metaclasses and features
   */
  static Literals = {
    I_SQL_XMLA_STORE_CONFIGURATION: null,
    I_SQL_XMLA_STORE_CONFIGURATION__CONNECTION: null,
    I_SQL_XMLA_STORE_CONFIGURATION__SQL: null,
    I_SQL_XMLA_STORE_CONFIGURATION__POLLING_INTERVAL: null
  };
  constructor() {
    super(), this.setName(o.eNAME), this.setNsURI(o.eNS_URI), this.setNsPrefix(o.eNS_PREFIX);
  }
  /**
   * Initialize package contents
   */
  init() {
    p.INSTANCE.set(o.eNS_URI, this), this.setEFactoryInstance(h.eINSTANCE);
    const e = new y();
    e.setName("ISqlXmlaStoreConfiguration"), e.setAbstract(!1), e.setInterface(!1), this.getEClassifiers().push(e), e.setEPackage(this), o.Literals.I_SQL_XMLA_STORE_CONFIGURATION = e;
    const t = new g();
    t.setName("connection"), t.setLowerBound(0), t.setUpperBound(1), e.getEStructuralFeatures().push(t), o.Literals.I_SQL_XMLA_STORE_CONFIGURATION__CONNECTION = t;
    const n = new g();
    n.setName("sql"), n.setLowerBound(0), n.setUpperBound(1), e.getEStructuralFeatures().push(n), o.Literals.I_SQL_XMLA_STORE_CONFIGURATION__SQL = n;
    const i = new g();
    i.setName("pollingInterval"), i.setLowerBound(0), i.setUpperBound(1), e.getEStructuralFeatures().push(i), o.Literals.I_SQL_XMLA_STORE_CONFIGURATION__POLLING_INTERVAL = i, o.Literals.I_SQL_XMLA_STORE_CONFIGURATION.getESuperTypes().push(b("http://org.eclipse.daanse.board.app.lib.datasource.base").getEClassifier("IBaseConnectionConfiguration")), o.Literals.I_SQL_XMLA_STORE_CONFIGURATION__CONNECTION.setEType(I().getEClassifier("EString")), o.Literals.I_SQL_XMLA_STORE_CONFIGURATION__SQL.setEType(I().getEClassifier("EString")), o.Literals.I_SQL_XMLA_STORE_CONFIGURATION__POLLING_INTERVAL.setEType(I().getEClassifier("EInt"));
  }
}
o.eINSTANCE;
const _ = R("SqlXmlaStoreFactory"), F = Symbol.for(_);
function O({ services: a }) {
  a.register(_, (e) => {
    if (!N.validateConfiguration(e))
      throw new Error(
        "Invalid SqlXmlaStore configuration. Please provide a valid configuration."
      );
    const t = a.construct(N);
    return t.init(e), t;
  });
}
function L({ services: a }) {
  a.unregister(_);
}
const D = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ISqlXmlaStoreConfigurationImpl: s,
  SQL_XMLA_STORE_FACTORY: _,
  SqlXmlaStore: N,
  SqlxmlastoreFactory: h,
  SqlxmlastorePackage: o,
  activate: O,
  deactivate: L,
  factorySymbol: F
}, Symbol.toStringTag, { value: "Module" })), E = "org.eclipse.daanse.board.app.lib.datasource.sql_xmla", G = "0.0.1-next.1";
async function B(a) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${E}: tsm runtime is not initialized`);
  e.register(E, D, G, "lib.datasource.sql_xmla"), await O?.(a);
}
async function V(a) {
  await L?.(a);
}
export {
  s as ISqlXmlaStoreConfigurationImpl,
  _ as SQL_XMLA_STORE_FACTORY,
  N as SqlXmlaStore,
  h as SqlxmlastoreFactory,
  o as SqlxmlastorePackage,
  B as activate,
  V as deactivate,
  F as factorySymbol
};
