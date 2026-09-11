import { BaseDatasource as f, IBaseConnectionConfigurationImpl as g } from "org.eclipse.daanse.board.app.lib.datasource.base";
import { CONNECTION_REPOSITORY as I } from "org.eclipse.daanse.board.app.lib.api.connection";
import { inject as S } from "@eclipse-daanse/tsm";
import { BasicEFactory as m, BasicEPackage as R, EPackageRegistry as O, BasicEClass as w, BasicEAttribute as C, getEcorePackage as _ } from "@emfts/core";
const { serviceId: A } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
var U = Object.defineProperty, b = (r, e, t, c) => {
  for (var i = void 0, n = r.length - 1, o; n >= 0; n--)
    (o = r[n]) && (i = o(e, t, i) || i);
  return i && U(e, t, i), i;
};
class h extends f {
  connection;
  accumulatedData = [];
  lastMessage = null;
  accumulate = !1;
  topic = "";
  /* Held so a second init can take it off again - see below. */
  listener;
  connectionRepository;
  init(e) {
    super.init(e), this.detach(), this.connection = e.connection, this.accumulate = e.accumulate ?? !1;
    const t = this.connectionRepository.getConnection(
      this.connection
    );
    e.topic && t.hasTopics() && (this.topic = e.topic, t.connectStore(this, e.topic)), this.listener = (c, i, n) => {
      switch (c) {
        case "connect":
          this.onConnect();
          break;
        case "message":
          this.onMessage(i, n);
          break;
        case "close":
          this.onClose();
          break;
        case "error":
          this.onError(i);
          break;
      }
    }, t.subscribe(this.listener);
  }
  /** Takes this store off the connection it is currently attached to. */
  detach() {
    if (!this.connection) return;
    const e = this.connectionRepository.getConnection(
      this.connection
    );
    e && (this.listener && (e.unsubscribe(this.listener), this.listener = void 0), this.topic && e.hasTopics() && (e.disconnectStore(this), this.topic = ""));
  }
  onError(e) {
  }
  onClose() {
  }
  onMessage(e, t) {
    this.topic && t !== this.topic || (this.accumulate ? this.accumulatedData.push({
      message: e,
      timestamp: new Date(Date.now()).toTimeString(),
      topic: t || "default"
    }) : this.lastMessage = {
      message: e,
      timestamp: new Date(Date.now()).toTimeString(),
      topic: t || "default"
    }, this.notify());
  }
  onConnect() {
  }
  parseToDataTable() {
    let e = [this.lastMessage];
    if (this.accumulate && (e = this.accumulatedData), !Array.isArray(e)) return { items: [], headers: [], rows: [] };
    const t = ["index"], c = [], i = e.map((n, o) => {
      if (typeof n != "object") return {};
      const l = {
        index: o
      };
      for (const u in n)
        typeof n[u] == "object" || Array.isArray(n[u]) || (t.includes(u) || t.push(u), l[u] = n[u]);
      return l;
    });
    return i.forEach((n, o) => {
      c[o] = [], t.forEach((l) => {
        c[o].push(n[l]);
      });
    }), { items: i, headers: t, rows: c };
  }
  destroy() {
    this.detach();
  }
  getData(e) {
    let t = this.lastMessage;
    if (this.accumulate && (t = this.accumulatedData), e === "DataTable")
      return this.parseToDataTable();
    if (e === "object" || e === "string")
      return JSON.stringify(t);
    throw new Error("Method not implemented.");
  }
  getOriginalData() {
    throw new Error("Method not implemented.");
  }
  callEvent(e, t) {
    throw new Error("Method not implemented.");
  }
  static validateConfiguration(e) {
    return !!e?.connection;
  }
}
b([
  S(I)
], h.prototype, "connectionRepository");
class s extends g {
  // Feature ID Constants (eLiterals)
  static CONNECTION = 4;
  static TOPIC = 5;
  static ACCUMULATE = 6;
  // Private fields
  _connection;
  _topic;
  _accumulate;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return a.Literals.I_W_S_STORE_CONFIGURATION;
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
  get topic() {
    return this._topic;
  }
  set topic(e) {
    const t = this._topic;
    this._topic = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(s.TOPIC),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => s.TOPIC,
      merge: () => !1
    });
  }
  get accumulate() {
    return this._accumulate;
  }
  set accumulate(e) {
    const t = this._accumulate;
    this._accumulate = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(s.ACCUMULATE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => s.ACCUMULATE,
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
      case s.TOPIC:
        return this.topic;
      case s.ACCUMULATE:
        return this.accumulate;
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
      case s.TOPIC:
        this.topic = t, super.eSet(e, t);
        break;
      case s.ACCUMULATE:
        this.accumulate = t, super.eSet(e, t);
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
      case s.TOPIC:
        return this._topic !== void 0;
      case s.ACCUMULATE:
        return this._accumulate !== void 0;
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
      case s.TOPIC:
        this._topic = void 0;
        return;
      case s.ACCUMULATE:
        this._accumulate = void 0;
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
      topic: this.topic,
      accumulate: this.accumulate
    };
  }
}
class N extends m {
  // Lazy singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new N()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(a.eINSTANCE);
  }
  /**
   * Create a new IWSStoreConfiguration instance
   */
  createIWSStoreConfiguration() {
    return new s();
  }
  /**
   * Create an instance of the given class
   */
  create(e) {
    switch (e.getName()) {
      case "IWSStoreConfiguration":
        return this.createIWSStoreConfiguration();
      default:
        throw new Error(`Unknown class: ${e.getName()}`);
    }
  }
}
function y(r) {
  const e = O.INSTANCE.getEPackage(r);
  if (!e)
    throw new Error(`EPackage '${r}' is not registered. Access the eINSTANCE of that model's generated package (or register it via EPackageRegistry.INSTANCE.registerPackage) before initializing WsstorePackage.`);
  return e;
}
class a extends R {
  static eNAME = "wsstore";
  static eNS_URI = "http://org.eclipse.daanse.board.app.lib.datasource.websocket";
  static eNS_PREFIX = "wsstore";
  // Singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new a(), this._instance.init()), this._instance;
  }
  /**
   * Literals for quick access to metaclasses and features
   */
  static Literals = {
    I_W_S_STORE_CONFIGURATION: null,
    I_W_S_STORE_CONFIGURATION__CONNECTION: null,
    I_W_S_STORE_CONFIGURATION__TOPIC: null,
    I_W_S_STORE_CONFIGURATION__ACCUMULATE: null
  };
  constructor() {
    super(), this.setName(a.eNAME), this.setNsURI(a.eNS_URI), this.setNsPrefix(a.eNS_PREFIX);
  }
  /**
   * Initialize package contents
   */
  init() {
    O.INSTANCE.set(a.eNS_URI, this), this.setEFactoryInstance(N.eINSTANCE);
    const e = new w();
    e.setName("IWSStoreConfiguration"), e.setAbstract(!1), e.setInterface(!1), this.getEClassifiers().push(e), e.setEPackage(this), a.Literals.I_W_S_STORE_CONFIGURATION = e;
    const t = new C();
    t.setName("connection"), t.setLowerBound(0), t.setUpperBound(1), e.getEStructuralFeatures().push(t), a.Literals.I_W_S_STORE_CONFIGURATION__CONNECTION = t;
    const c = new C();
    c.setName("topic"), c.setLowerBound(0), c.setUpperBound(1), e.getEStructuralFeatures().push(c), a.Literals.I_W_S_STORE_CONFIGURATION__TOPIC = c;
    const i = new C();
    i.setName("accumulate"), i.setLowerBound(0), i.setUpperBound(1), e.getEStructuralFeatures().push(i), a.Literals.I_W_S_STORE_CONFIGURATION__ACCUMULATE = i, a.Literals.I_W_S_STORE_CONFIGURATION.getESuperTypes().push(y("http://org.eclipse.daanse.board.app.lib.datasource.base").getEClassifier("IBaseConnectionConfiguration")), a.Literals.I_W_S_STORE_CONFIGURATION__CONNECTION.setEType(_().getEClassifier("EString")), a.Literals.I_W_S_STORE_CONFIGURATION__TOPIC.setEType(_().getEClassifier("EString")), a.Literals.I_W_S_STORE_CONFIGURATION__ACCUMULATE.setEType(_().getEClassifier("EBoolean"));
  }
}
a.eINSTANCE;
const E = A("WSStoreFactory"), F = Symbol.for(E);
function p({ services: r }) {
  r.register(E, (e) => {
    if (!h.validateConfiguration(e))
      throw new Error(
        "Invalid WSStore configuration. Please provide a valid configuration."
      );
    const t = r.construct(h);
    return t.init(e), t;
  });
}
function d({ services: r }) {
  r.unregister(E);
}
const D = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  IWSStoreConfigurationImpl: s,
  WSStore: h,
  WS_STORE_FACTORY: E,
  WsstoreFactory: N,
  WsstorePackage: a,
  activate: p,
  deactivate: d,
  factorySymbol: F
}, Symbol.toStringTag, { value: "Module" })), T = "org.eclipse.daanse.board.app.lib.datasource.websocket", v = "0.0.1-next.1";
async function G(r) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${T}: tsm runtime is not initialized`);
  e.register(T, D, v, "lib.datasource.websocket"), await p?.(r);
}
async function k(r) {
  await d?.(r);
}
export {
  s as IWSStoreConfigurationImpl,
  h as WSStore,
  E as WS_STORE_FACTORY,
  N as WsstoreFactory,
  a as WsstorePackage,
  G as activate,
  k as deactivate,
  F as factorySymbol
};
