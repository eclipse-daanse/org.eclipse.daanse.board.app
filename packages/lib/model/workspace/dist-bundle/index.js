import { BasicEObject as F, createContainmentEList as y, BasicEFactory as p, BasicEPackage as v, EPackageRegistry as b, BasicEClass as _, BasicEReference as D, BasicEAttribute as o, getEcorePackage as N } from "@emfts/core";
const { serviceId: L } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
class n extends F {
  // Feature ID Constants (eLiterals)
  static CONNECTIONS = 0;
  static DATASOURCES = 1;
  // Private fields
  _connections;
  _datasources;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return s.Literals.WORKSPACE;
  }
  // Getters and Setters
  get connections() {
    return this._connections || (this._connections = y(this, this.eClass().getEStructuralFeature("connections"))), this._connections;
  }
  get datasources() {
    return this._datasources || (this._datasources = y(this, this.eClass().getEStructuralFeature("datasources"))), this._datasources;
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case n.CONNECTIONS:
        return this.connections;
      case n.DATASOURCES:
        return this.datasources;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case n.CONNECTIONS:
        this.connections.clear(), this.connections.addAll(t), super.eSet(e, t);
        break;
      case n.DATASOURCES:
        this.datasources.clear(), this.datasources.addAll(t), super.eSet(e, t);
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
      case n.CONNECTIONS:
        return this._connections !== void 0 && !this._connections.isEmpty();
      case n.DATASOURCES:
        return this._datasources !== void 0 && !this._datasources.isEmpty();
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case n.CONNECTIONS:
        this._connections && this._connections.clear();
        return;
      case n.DATASOURCES:
        this._datasources && this._datasources.clear();
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
      connections: this.connections?.toArray?.() ?? this.connections,
      datasources: this.datasources?.toArray?.() ?? this.datasources
    };
  }
}
class i extends F {
  // Feature ID Constants (eLiterals)
  static UID = 0;
  static NAME = 1;
  static TYPE = 2;
  static CONNECTION = 3;
  static CONFIG = 4;
  // Private fields
  _uid;
  _name;
  _type;
  _connection;
  _config;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return s.Literals.DATASOURCE;
  }
  // Getters and Setters
  get uid() {
    return this._uid;
  }
  set uid(e) {
    const t = this._uid;
    this._uid = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(i.UID),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => i.UID,
      merge: () => !1
    });
  }
  get name() {
    return this._name;
  }
  set name(e) {
    const t = this._name;
    this._name = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(i.NAME),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => i.NAME,
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
      getFeature: () => this.eClass().getEStructuralFeature(i.TYPE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => i.TYPE,
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
  get config() {
    return this._config;
  }
  set config(e) {
    const t = this._config;
    this._config = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(i.CONFIG),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => i.CONFIG,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case i.UID:
        return this.uid;
      case i.NAME:
        return this.name;
      case i.TYPE:
        return this.type;
      case i.CONNECTION:
        return this.connection;
      case i.CONFIG:
        return this.config;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case i.UID:
        this.uid = t, super.eSet(e, t);
        break;
      case i.NAME:
        this.name = t, super.eSet(e, t);
        break;
      case i.TYPE:
        this.type = t, super.eSet(e, t);
        break;
      case i.CONNECTION:
        this.connection = t, super.eSet(e, t);
        break;
      case i.CONFIG:
        this.config = t, super.eSet(e, t);
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
      case i.UID:
        return this._uid !== void 0;
      case i.NAME:
        return this._name !== void 0;
      case i.TYPE:
        return this._type !== void 0;
      case i.CONNECTION:
        return this._connection !== void 0;
      case i.CONFIG:
        return this._config !== void 0;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case i.UID:
        this._uid = void 0;
        return;
      case i.NAME:
        this._name = void 0;
        return;
      case i.TYPE:
        this._type = void 0;
        return;
      case i.CONNECTION:
        this._connection = void 0;
        return;
      case i.CONFIG:
        this._config = void 0;
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
      uid: this.uid,
      name: this.name,
      type: this.type,
      connection: this.connection,
      config: this.config
    };
  }
}
class r extends F {
  // Feature ID Constants (eLiterals)
  static UID = 0;
  static NAME = 1;
  static TYPE = 2;
  static CONFIG = 3;
  // Private fields
  _uid;
  _name;
  _type;
  _config;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return s.Literals.CONNECTION;
  }
  // Getters and Setters
  get uid() {
    return this._uid;
  }
  set uid(e) {
    const t = this._uid;
    this._uid = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(r.UID),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => r.UID,
      merge: () => !1
    });
  }
  get name() {
    return this._name;
  }
  set name(e) {
    const t = this._name;
    this._name = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(r.NAME),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => r.NAME,
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
      getFeature: () => this.eClass().getEStructuralFeature(r.TYPE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => r.TYPE,
      merge: () => !1
    });
  }
  get config() {
    return this._config;
  }
  set config(e) {
    const t = this._config;
    this._config = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(r.CONFIG),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => r.CONFIG,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case r.UID:
        return this.uid;
      case r.NAME:
        return this.name;
      case r.TYPE:
        return this.type;
      case r.CONFIG:
        return this.config;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case r.UID:
        this.uid = t, super.eSet(e, t);
        break;
      case r.NAME:
        this.name = t, super.eSet(e, t);
        break;
      case r.TYPE:
        this.type = t, super.eSet(e, t);
        break;
      case r.CONFIG:
        this.config = t, super.eSet(e, t);
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
      case r.UID:
        return this._uid !== void 0;
      case r.NAME:
        return this._name !== void 0;
      case r.TYPE:
        return this._type !== void 0;
      case r.CONFIG:
        return this._config !== void 0;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case r.UID:
        this._uid = void 0;
        return;
      case r.NAME:
        this._name = void 0;
        return;
      case r.TYPE:
        this._type = void 0;
        return;
      case r.CONFIG:
        this._config = void 0;
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
      uid: this.uid,
      name: this.name,
      type: this.type,
      config: this.config
    };
  }
}
class A extends p {
  // Lazy singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new A()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(s.eINSTANCE);
  }
  /**
   * Create a new Workspace instance
   */
  createWorkspace() {
    return new n();
  }
  /**
   * Create a new Datasource instance
   */
  createDatasource() {
    return new i();
  }
  /**
   * Create a new Connection instance
   */
  createConnection() {
    return new r();
  }
  /**
   * Create an instance of the given class
   */
  create(e) {
    switch (e.getName()) {
      case "Workspace":
        return this.createWorkspace();
      case "Datasource":
        return this.createDatasource();
      case "Connection":
        return this.createConnection();
      default:
        throw new Error(`Unknown class: ${e.getName()}`);
    }
  }
}
class s extends v {
  static eNAME = "workspace";
  static eNS_URI = "http://org.eclipse.daanse.board.app.lib.model.workspace";
  static eNS_PREFIX = "workspace";
  // Singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new s(), this._instance.init()), this._instance;
  }
  /**
   * Literals for quick access to metaclasses and features
   */
  static Literals = {
    WORKSPACE: null,
    WORKSPACE__CONNECTIONS: null,
    WORKSPACE__DATASOURCES: null,
    DATASOURCE: null,
    DATASOURCE__UID: null,
    DATASOURCE__NAME: null,
    DATASOURCE__TYPE: null,
    DATASOURCE__CONNECTION: null,
    DATASOURCE__CONFIG: null,
    CONNECTION: null,
    CONNECTION__UID: null,
    CONNECTION__NAME: null,
    CONNECTION__TYPE: null,
    CONNECTION__CONFIG: null
  };
  constructor() {
    super(), this.setName(s.eNAME), this.setNsURI(s.eNS_URI), this.setNsPrefix(s.eNS_PREFIX);
  }
  /**
   * Initialize package contents
   */
  init() {
    b.INSTANCE.set(s.eNS_URI, this), this.setEFactoryInstance(A.eINSTANCE);
    const e = new _();
    e.setName("Workspace"), e.setAbstract(!1), e.setInterface(!1), this.getEClassifiers().push(e), e.setEPackage(this), s.Literals.WORKSPACE = e;
    const t = new D();
    t.setContainment(!0), t.setName("connections"), t.setLowerBound(0), t.setUpperBound(-1), e.getEStructuralFeatures().push(t), s.Literals.WORKSPACE__CONNECTIONS = t;
    const c = new D();
    c.setContainment(!0), c.setName("datasources"), c.setLowerBound(0), c.setUpperBound(-1), e.getEStructuralFeatures().push(c), s.Literals.WORKSPACE__DATASOURCES = c;
    const a = new _();
    a.setName("Datasource"), a.setAbstract(!1), a.setInterface(!1), this.getEClassifiers().push(a), a.setEPackage(this), s.Literals.DATASOURCE = a;
    const l = new o();
    l.setName("uid"), l.setLowerBound(0), l.setUpperBound(1), a.getEStructuralFeatures().push(l), s.Literals.DATASOURCE__UID = l;
    const C = new o();
    C.setName("name"), C.setLowerBound(0), C.setUpperBound(1), a.getEStructuralFeatures().push(C), s.Literals.DATASOURCE__NAME = C;
    const d = new o();
    d.setName("type"), d.setLowerBound(0), d.setUpperBound(1), a.getEStructuralFeatures().push(d), s.Literals.DATASOURCE__TYPE = d;
    const E = new D();
    E.setContainment(!1), E.setName("connection"), E.setLowerBound(0), E.setUpperBound(1), a.getEStructuralFeatures().push(E), s.Literals.DATASOURCE__CONNECTION = E;
    const g = new o();
    g.setName("config"), g.setLowerBound(0), g.setUpperBound(1), a.getEStructuralFeatures().push(g), s.Literals.DATASOURCE__CONFIG = g;
    const u = new _();
    u.setName("Connection"), u.setAbstract(!1), u.setInterface(!1), this.getEClassifiers().push(u), u.setEPackage(this), s.Literals.CONNECTION = u;
    const O = new o();
    O.setName("uid"), O.setLowerBound(0), O.setUpperBound(1), u.getEStructuralFeatures().push(O), s.Literals.CONNECTION__UID = O;
    const f = new o();
    f.setName("name"), f.setLowerBound(0), f.setUpperBound(1), u.getEStructuralFeatures().push(f), s.Literals.CONNECTION__NAME = f;
    const S = new o();
    S.setName("type"), S.setLowerBound(0), S.setUpperBound(1), u.getEStructuralFeatures().push(S), s.Literals.CONNECTION__TYPE = S;
    const T = new o();
    T.setName("config"), T.setLowerBound(0), T.setUpperBound(1), u.getEStructuralFeatures().push(T), s.Literals.CONNECTION__CONFIG = T, s.Literals.WORKSPACE__CONNECTIONS.setEType(s.Literals.CONNECTION), s.Literals.WORKSPACE__DATASOURCES.setEType(s.Literals.DATASOURCE), s.Literals.DATASOURCE__UID.setEType(N().getEClassifier("EString")), s.Literals.DATASOURCE__NAME.setEType(N().getEClassifier("EString")), s.Literals.DATASOURCE__TYPE.setEType(N().getEClassifier("EString")), s.Literals.DATASOURCE__CONNECTION.setEType(s.Literals.CONNECTION), s.Literals.DATASOURCE__CONFIG.setEType(N().getEClassifier("EJavaObject")), s.Literals.CONNECTION__UID.setEType(N().getEClassifier("EString")), s.Literals.CONNECTION__NAME.setEType(N().getEClassifier("EString")), s.Literals.CONNECTION__TYPE.setEType(N().getEClassifier("EString")), s.Literals.CONNECTION__CONFIG.setEType(N().getEClassifier("EJavaObject"));
  }
}
s.eINSTANCE;
const I = L("Workspace"), B = Symbol.for(I);
function R({ services: h }) {
  h.register(I, new n());
}
function w({ services: h }) {
  h.unregister(I);
}
const G = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ConnectionImpl: r,
  DatasourceImpl: i,
  WORKSPACE: I,
  WorkspaceFactory: A,
  WorkspaceImpl: n,
  WorkspacePackage: s,
  activate: R,
  deactivate: w,
  identifier: B
}, Symbol.toStringTag, { value: "Module" })), U = "org.eclipse.daanse.board.app.lib.model.workspace", M = "0.0.1-next.1";
async function P(h) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${U}: tsm runtime is not initialized`);
  e.register(U, G, M, "lib.model.workspace"), await R?.(h);
}
async function m(h) {
  await w?.(h);
}
export {
  r as ConnectionImpl,
  i as DatasourceImpl,
  I as WORKSPACE,
  A as WorkspaceFactory,
  n as WorkspaceImpl,
  s as WorkspacePackage,
  P as activate,
  m as deactivate,
  B as identifier
};
