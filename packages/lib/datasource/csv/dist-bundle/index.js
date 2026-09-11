import { inject as g } from "@eclipse-daanse/tsm";
import { BaseDatasource as w, IBaseConnectionConfigurationImpl as A } from "org.eclipse.daanse.board.app.lib.datasource.base";
import { CONNECTION_REPOSITORY as U } from "org.eclipse.daanse.board.app.lib.api.connection";
import p from "org.eclipse.daanse.board.app.lib.utils.helpers";
import { createBasicEList as L, BasicEFactory as m, BasicEPackage as C, EPackageRegistry as T, BasicEClass as y, BasicEAttribute as l, getEcorePackage as _ } from "@emfts/core";
const { serviceId: f } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
var P = Object.defineProperty, k = (n, t, e, R) => {
  for (var o = void 0, i = n.length - 1, a; i >= 0; i--)
    (a = n[i]) && (o = a(t, e, o) || o);
  return o && P(t, e, o), o;
};
class N extends w {
  connection;
  resourceUrl = null;
  parseOptions = null;
  skipRowsFromStart = 0;
  skipRowsFromEnd = 0;
  connectionRepository;
  init(t) {
    super.init(t), this.connection = t.connection, this.parseOptions = {
      /*
       * Left out entirely when the configuration names none: the parser
       * falls back to a comma through a default parameter, and a default
       * parameter only fires on undefined. An empty list would be taken as
       * "split on nothing" and put every line in one column.
       *
       * A many-valued feature is an EList on the model and a plain array in
       * a stored board; both are iterable.
       */
      separators: t.separators ? Array.from(t.separators) : void 0
    }, this.skipRowsFromStart = t.skipRowsFromStart ?? 0, this.skipRowsFromEnd = t.skipRowsFromEnd ?? 0, this.resourceUrl = super.initVariable(t.resourceUrl ?? ""), this.pollingInterval = t.pollingInterval ?? 5e3, this.pollingEnabled && this.startPolling(this.pollingInterval);
  }
  async getOriginalData() {
    const e = await this.connectionRepository.getConnection(
      this.connection
    ).fetch({ url: this.resourceUrl?.value || "" });
    if (!e.ok) return [];
    const R = await e.text();
    return p.csv.parse(R, this.parseOptions || {});
  }
  async getData(t) {
    const R = await this.connectionRepository.getConnection(
      this.connection
    ).fetch({ url: this.resourceUrl?.value || "" });
    if (!R.ok) return null;
    let o = await R.text();
    if (this.skipRowsFromStart > 0 || this.skipRowsFromEnd > 0) {
      const a = o.split(`
`), c = this.skipRowsFromStart, E = this.skipRowsFromEnd > 0 ? a.length - this.skipRowsFromEnd : a.length;
      o = a.slice(c, E).join(`
`);
    }
    const i = p.csv.parse(
      o,
      this.parseOptions || {}
    );
    return i.header = i.header.map((a) => typeof a == "string" ? a.trim() : a), i.rows = i.rows.map(
      (a) => a.map((c) => typeof c == "string" ? c.trim() : c)
    ), i.mappedRows = i.mappedRows.map((a) => {
      const c = {};
      for (const [E, S] of Object.entries(a)) {
        const F = typeof E == "string" ? E.trim() : E;
        c[F] = typeof S == "string" ? S.trim() : S;
      }
      return c;
    }), console.log(i), t === "DataTable" ? {
      headers: i.header,
      items: i.mappedRows,
      rows: i.rows
    } : t == "string" ? JSON.stringify(i) : (console.warn("Invalid data type"), null);
  }
  callEvent(t, e) {
    console.warn(
      `Event "${t}" is not available for this type of store`,
      e
    );
  }
  destroy() {
    this.stopPolling();
  }
  static validateConfiguration(t) {
    return !(!t.connection || !t.resourceUrl);
  }
}
k([
  g(U)
], N.prototype, "connectionRepository");
class s extends A {
  // Feature ID Constants (eLiterals)
  static RESOURCE_URL = 4;
  static CONNECTION = 5;
  static POLLING_INTERVAL = 6;
  static SEPARATORS = 7;
  static SKIP_ROWS_FROM_START = 8;
  static SKIP_ROWS_FROM_END = 9;
  // Private fields
  _resourceUrl;
  _connection;
  _pollingInterval;
  _separators;
  _skipRowsFromStart;
  _skipRowsFromEnd;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return r.Literals.I_CSV_STORE_CONFIGURATION;
  }
  // Getters and Setters
  get resourceUrl() {
    return this._resourceUrl;
  }
  set resourceUrl(t) {
    const e = this._resourceUrl;
    this._resourceUrl = t, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(s.RESOURCE_URL),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => s.RESOURCE_URL,
      merge: () => !1
    });
  }
  get connection() {
    return this._connection;
  }
  set connection(t) {
    const e = this._connection;
    this._connection = t, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(s.CONNECTION),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => s.CONNECTION,
      merge: () => !1
    });
  }
  get pollingInterval() {
    return this._pollingInterval;
  }
  set pollingInterval(t) {
    const e = this._pollingInterval;
    this._pollingInterval = t, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(s.POLLING_INTERVAL),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => s.POLLING_INTERVAL,
      merge: () => !1
    });
  }
  get separators() {
    return this._separators || (this._separators = L(this, this.eClass().getEStructuralFeature("separators"))), this._separators;
  }
  get skipRowsFromStart() {
    return this._skipRowsFromStart;
  }
  set skipRowsFromStart(t) {
    const e = this._skipRowsFromStart;
    this._skipRowsFromStart = t, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(s.SKIP_ROWS_FROM_START),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => s.SKIP_ROWS_FROM_START,
      merge: () => !1
    });
  }
  get skipRowsFromEnd() {
    return this._skipRowsFromEnd;
  }
  set skipRowsFromEnd(t) {
    const e = this._skipRowsFromEnd;
    this._skipRowsFromEnd = t, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(s.SKIP_ROWS_FROM_END),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => s.SKIP_ROWS_FROM_END,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(t) {
    switch (this.eClass().getFeatureID(t)) {
      case s.RESOURCE_URL:
        return this.resourceUrl;
      case s.CONNECTION:
        return this.connection;
      case s.POLLING_INTERVAL:
        return this.pollingInterval;
      case s.SEPARATORS:
        return this.separators;
      case s.SKIP_ROWS_FROM_START:
        return this.skipRowsFromStart;
      case s.SKIP_ROWS_FROM_END:
        return this.skipRowsFromEnd;
      default:
        return super.eGet(t);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(t, e) {
    switch (this.eClass().getFeatureID(t)) {
      case s.RESOURCE_URL:
        this.resourceUrl = e, super.eSet(t, e);
        break;
      case s.CONNECTION:
        this.connection = e, super.eSet(t, e);
        break;
      case s.POLLING_INTERVAL:
        this.pollingInterval = e, super.eSet(t, e);
        break;
      case s.SEPARATORS:
        this.separators.clear(), this.separators.addAll(e), super.eSet(t, e);
        break;
      case s.SKIP_ROWS_FROM_START:
        this.skipRowsFromStart = e, super.eSet(t, e);
        break;
      case s.SKIP_ROWS_FROM_END:
        this.skipRowsFromEnd = e, super.eSet(t, e);
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
      case s.RESOURCE_URL:
        return this._resourceUrl !== void 0;
      case s.CONNECTION:
        return this._connection !== void 0;
      case s.POLLING_INTERVAL:
        return this._pollingInterval !== void 0;
      case s.SEPARATORS:
        return this._separators !== void 0 && !this._separators.isEmpty();
      case s.SKIP_ROWS_FROM_START:
        return this._skipRowsFromStart !== void 0;
      case s.SKIP_ROWS_FROM_END:
        return this._skipRowsFromEnd !== void 0;
      default:
        return super.eIsSet(t);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(t) {
    switch (this.eClass().getFeatureID(t)) {
      case s.RESOURCE_URL:
        this._resourceUrl = void 0;
        return;
      case s.CONNECTION:
        this._connection = void 0;
        return;
      case s.POLLING_INTERVAL:
        this._pollingInterval = void 0;
        return;
      case s.SEPARATORS:
        this._separators && this._separators.clear();
        return;
      case s.SKIP_ROWS_FROM_START:
        this._skipRowsFromStart = void 0;
        return;
      case s.SKIP_ROWS_FROM_END:
        this._skipRowsFromEnd = void 0;
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
      resourceUrl: this.resourceUrl,
      connection: this.connection,
      pollingInterval: this.pollingInterval,
      separators: this.separators?.toArray?.() ?? this.separators,
      skipRowsFromStart: this.skipRowsFromStart,
      skipRowsFromEnd: this.skipRowsFromEnd
    };
  }
}
class O extends m {
  // Lazy singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new O()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(r.eINSTANCE);
  }
  /**
   * Create a new ICsvStoreConfiguration instance
   */
  createICsvStoreConfiguration() {
    return new s();
  }
  /**
   * Create an instance of the given class
   */
  create(t) {
    switch (t.getName()) {
      case "ICsvStoreConfiguration":
        return this.createICsvStoreConfiguration();
      default:
        throw new Error(`Unknown class: ${t.getName()}`);
    }
  }
}
function V(n) {
  const t = T.INSTANCE.getEPackage(n);
  if (!t)
    throw new Error(`EPackage '${n}' is not registered. Access the eINSTANCE of that model's generated package (or register it via EPackageRegistry.INSTANCE.registerPackage) before initializing CsvstorePackage.`);
  return t;
}
class r extends C {
  static eNAME = "csvstore";
  static eNS_URI = "http://org.eclipse.daanse.board.app.lib.datasource.csv";
  static eNS_PREFIX = "csvstore";
  // Singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new r(), this._instance.init()), this._instance;
  }
  /**
   * Literals for quick access to metaclasses and features
   */
  static Literals = {
    I_CSV_STORE_CONFIGURATION: null,
    I_CSV_STORE_CONFIGURATION__RESOURCE_URL: null,
    I_CSV_STORE_CONFIGURATION__CONNECTION: null,
    I_CSV_STORE_CONFIGURATION__POLLING_INTERVAL: null,
    I_CSV_STORE_CONFIGURATION__SEPARATORS: null,
    I_CSV_STORE_CONFIGURATION__SKIP_ROWS_FROM_START: null,
    I_CSV_STORE_CONFIGURATION__SKIP_ROWS_FROM_END: null
  };
  constructor() {
    super(), this.setName(r.eNAME), this.setNsURI(r.eNS_URI), this.setNsPrefix(r.eNS_PREFIX);
  }
  /**
   * Initialize package contents
   */
  init() {
    T.INSTANCE.set(r.eNS_URI, this), this.setEFactoryInstance(O.eINSTANCE);
    const t = new y();
    t.setName("ICsvStoreConfiguration"), t.setAbstract(!1), t.setInterface(!1), this.getEClassifiers().push(t), t.setEPackage(this), r.Literals.I_CSV_STORE_CONFIGURATION = t;
    const e = new l();
    e.setName("resourceUrl"), e.setLowerBound(0), e.setUpperBound(1), t.getEStructuralFeatures().push(e), r.Literals.I_CSV_STORE_CONFIGURATION__RESOURCE_URL = e;
    const R = new l();
    R.setName("connection"), R.setLowerBound(0), R.setUpperBound(1), t.getEStructuralFeatures().push(R), r.Literals.I_CSV_STORE_CONFIGURATION__CONNECTION = R;
    const o = new l();
    o.setName("pollingInterval"), o.setLowerBound(0), o.setUpperBound(1), t.getEStructuralFeatures().push(o), r.Literals.I_CSV_STORE_CONFIGURATION__POLLING_INTERVAL = o;
    const i = new l();
    i.setName("separators"), i.setLowerBound(0), i.setUpperBound(-1), t.getEStructuralFeatures().push(i), r.Literals.I_CSV_STORE_CONFIGURATION__SEPARATORS = i;
    const a = new l();
    a.setName("skipRowsFromStart"), a.setLowerBound(0), a.setUpperBound(1), t.getEStructuralFeatures().push(a), r.Literals.I_CSV_STORE_CONFIGURATION__SKIP_ROWS_FROM_START = a;
    const c = new l();
    c.setName("skipRowsFromEnd"), c.setLowerBound(0), c.setUpperBound(1), t.getEStructuralFeatures().push(c), r.Literals.I_CSV_STORE_CONFIGURATION__SKIP_ROWS_FROM_END = c, r.Literals.I_CSV_STORE_CONFIGURATION.getESuperTypes().push(V("http://org.eclipse.daanse.board.app.lib.datasource.base").getEClassifier("IBaseConnectionConfiguration")), r.Literals.I_CSV_STORE_CONFIGURATION__RESOURCE_URL.setEType(_().getEClassifier("EString")), r.Literals.I_CSV_STORE_CONFIGURATION__CONNECTION.setEType(_().getEClassifier("EString")), r.Literals.I_CSV_STORE_CONFIGURATION__POLLING_INTERVAL.setEType(_().getEClassifier("EInt")), r.Literals.I_CSV_STORE_CONFIGURATION__SEPARATORS.setEType(_().getEClassifier("EString")), r.Literals.I_CSV_STORE_CONFIGURATION__SKIP_ROWS_FROM_START.setEType(_().getEClassifier("EInt")), r.Literals.I_CSV_STORE_CONFIGURATION__SKIP_ROWS_FROM_END.setEType(_().getEClassifier("EInt"));
  }
}
r.eINSTANCE;
const u = f("CsvStoreFactory"), D = Symbol.for(u);
function I({ services: n }) {
  n.register(u, (t) => {
    if (!N.validateConfiguration(t))
      throw new Error(
        "Invalid CsvStore configuration. Please provide a valid configuration."
      );
    const e = n.construct(N);
    return e.init(t), e;
  });
}
function d({ services: n }) {
  n.unregister(u);
}
const G = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CSV_STORE_FACTORY: u,
  CsvstoreFactory: O,
  CsvstorePackage: r,
  ICsvStoreConfigurationImpl: s,
  activate: I,
  deactivate: d,
  factorySymbol: D
}, Symbol.toStringTag, { value: "Module" })), h = "org.eclipse.daanse.board.app.lib.datasource.csv", b = "0.0.1-next.1";
async function x(n) {
  const t = globalThis.__tsm__;
  if (!t)
    throw new Error(`${h}: tsm runtime is not initialized`);
  t.register(h, G, b, "lib.datasource.csv"), await I?.(n);
}
async function j(n) {
  await d?.(n);
}
export {
  u as CSV_STORE_FACTORY,
  O as CsvstoreFactory,
  r as CsvstorePackage,
  s as ICsvStoreConfigurationImpl,
  x as activate,
  j as deactivate,
  D as factorySymbol
};
