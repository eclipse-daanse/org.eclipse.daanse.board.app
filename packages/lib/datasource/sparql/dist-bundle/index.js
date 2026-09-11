import { BaseDatasource as _, IBaseConnectionConfigurationImpl as R } from "org.eclipse.daanse.board.app.lib.datasource.base";
import { inject as p, injectable as C } from "@eclipse-daanse/tsm";
import { CONNECTION_REPOSITORY as T } from "org.eclipse.daanse.board.app.lib.api.connection";
import { BasicEFactory as y, BasicEPackage as w, EPackageRegistry as d, BasicEClass as A, BasicEAttribute as l, getEcorePackage as N } from "@emfts/core";
const { serviceId: S } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), v = "Query", U = Symbol.for("SparqlStore");
var b = Object.defineProperty, m = Object.getOwnPropertyDescriptor, g = (s, e, t, n) => {
  for (var a = n > 1 ? void 0 : n ? m(e, t) : e, o = s.length - 1, u; o >= 0; o--)
    (u = s[o]) && (a = (n ? u(e, t, a) : u(a)) || a);
  return n && a && b(e, t, a), a;
};
let c = class extends _ {
  constructor() {
    super(...arguments), this.query = "", this.datasourceId = null;
  }
  init(s) {
    super.init(s), this.connection = s.connection, this.query = s.query ?? "";
  }
  callEvent(s, e) {
    s == v && (this.query = e), this.notify();
  }
  getOriginalData() {
    throw new Error("not implemented");
  }
  destroy() {
  }
  static validateConfiguration(s) {
    return !!s.connection;
  }
  async getData(s) {
    try {
      if (!this.connectionRepository)
        throw new Error("ConnectionRepository is not provided to Store Classes");
      const e = this.connectionRepository.getConnection(
        this.connection
      );
      let t = "query=" + encodeURIComponent(this.query);
      const a = await (await e.fetch(
        { url: "" },
        {
          method: "POST",
          body: t,
          headers: {
            "User-Agent": "org.eclipse.daanse.datafinder.sparql/1.0",
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }
      )).json();
      this.data = a;
    } catch {
      this.data = void 0;
    }
    if (s == "DataTable") {
      if (this.data) {
        const e = this.data.head.vars, t = this.data.results.bindings.map((a) => {
          const o = {};
          for (const u of e)
            o[u] = a[u]?.value ?? null;
          return o;
        }), n = t.map((a) => e.map((o) => a[o]));
        return { headers: e, items: t, rows: n };
      }
      return { heders: [], items: [], rows: [] };
    }
    return s == "string" ? JSON.stringify(this.data) : this.data;
  }
};
c.TYPE = "sparql";
g([
  p(T)
], c.prototype, "connectionRepository", 2);
c = g([
  C()
], c);
class r extends R {
  static {
    this.QUERY = 3;
  }
  static {
    this.CONNECTION = 4;
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return i.Literals.I_SPARQL_STORE_CONFIGURATION;
  }
  // Getters and Setters
  get query() {
    return this._query;
  }
  set query(e) {
    const t = this._query;
    this._query = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(r.QUERY),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => r.QUERY,
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
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case r.QUERY:
        return this.query;
      case r.CONNECTION:
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
      case r.QUERY:
        this.query = t, super.eSet(e, t);
        break;
      case r.CONNECTION:
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
      case r.QUERY:
        return this._query !== void 0;
      case r.CONNECTION:
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
      case r.QUERY:
        this._query = void 0;
        return;
      case r.CONNECTION:
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
      query: this.query,
      connection: this.connection
    };
  }
}
class h extends y {
  static get eINSTANCE() {
    return this._instance || (this._instance = new h()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(i.eINSTANCE);
  }
  /**
   * Create a new ISparqlStoreConfiguration instance
   */
  createISparqlStoreConfiguration() {
    return new r();
  }
  /**
   * Create an instance of the given class
   */
  create(e) {
    switch (e.getName()) {
      case "ISparqlStoreConfiguration":
        return this.createISparqlStoreConfiguration();
      default:
        throw new Error(`Unknown class: ${e.getName()}`);
    }
  }
}
function F(s) {
  const e = d.INSTANCE.getEPackage(s);
  if (!e)
    throw new Error(`EPackage '${s}' is not registered. Access the eINSTANCE of that model's generated package (or register it via EPackageRegistry.INSTANCE.registerPackage) before initializing SparqlstorePackage.`);
  return e;
}
class i extends w {
  static {
    this.eNAME = "sparqlstore";
  }
  static {
    this.eNS_URI = "http://org.eclipse.daanse.board.app.lib.datasource.sparql";
  }
  static {
    this.eNS_PREFIX = "sparqlstore";
  }
  static get eINSTANCE() {
    return this._instance || (this._instance = new i(), this._instance.init()), this._instance;
  }
  static {
    this.Literals = {
      I_SPARQL_STORE_CONFIGURATION: null,
      I_SPARQL_STORE_CONFIGURATION__QUERY: null,
      I_SPARQL_STORE_CONFIGURATION__CONNECTION: null
    };
  }
  constructor() {
    super(), this.setName(i.eNAME), this.setNsURI(i.eNS_URI), this.setNsPrefix(i.eNS_PREFIX);
  }
  /**
   * Initialize package contents
   */
  init() {
    d.INSTANCE.set(i.eNS_URI, this), this.setEFactoryInstance(h.eINSTANCE);
    const e = new A();
    e.setName("ISparqlStoreConfiguration"), e.setAbstract(!1), e.setInterface(!1), this.getEClassifiers().push(e), e.setEPackage(this), i.Literals.I_SPARQL_STORE_CONFIGURATION = e;
    const t = new l();
    t.setName("query"), t.setLowerBound(0), t.setUpperBound(1), e.getEStructuralFeatures().push(t), i.Literals.I_SPARQL_STORE_CONFIGURATION__QUERY = t;
    const n = new l();
    n.setName("connection"), n.setLowerBound(0), n.setUpperBound(1), e.getEStructuralFeatures().push(n), i.Literals.I_SPARQL_STORE_CONFIGURATION__CONNECTION = n, i.Literals.I_SPARQL_STORE_CONFIGURATION.getESuperTypes().push(F("http://org.eclipse.daanse.board.app.lib.datasource.base").getEClassifier("IBaseConnectionConfiguration")), i.Literals.I_SPARQL_STORE_CONFIGURATION__QUERY.setEType(N().getEClassifier("EString")), i.Literals.I_SPARQL_STORE_CONFIGURATION__CONNECTION.setEType(N().getEClassifier("EString"));
  }
}
i.eINSTANCE;
const O = S("SparqlStore");
function I({ services: s }) {
  s.register(O, (e) => {
    if (!c.validateConfiguration(e))
      throw new Error(
        "Invalid SparqlStore configuration. Please provide a valid configuration."
      );
    const t = s.construct(c);
    return t.init(e), t;
  });
}
function f({ services: s }) {
  s.unregister(O);
}
const P = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ISparqlStoreConfigurationImpl: r,
  get SparqlStore() {
    return c;
  },
  SparqlstoreFactory: h,
  SparqlstorePackage: i,
  activate: I,
  deactivate: f,
  symbol: U
}, Symbol.toStringTag, { value: "Module" })), E = "org.eclipse.daanse.board.app.lib.datasource.sparql", D = "0.0.1-next.1";
async function B(s) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${E}: tsm runtime is not initialized`);
  e.register(E, P, D, "lib.datasource.sparql"), await I?.(s);
}
async function G(s) {
  await f?.(s);
}
export {
  r as ISparqlStoreConfigurationImpl,
  c as SparqlStore,
  h as SparqlstoreFactory,
  i as SparqlstorePackage,
  B as activate,
  G as deactivate,
  U as symbol
};
