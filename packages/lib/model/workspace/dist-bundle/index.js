import { BasicEObject as O, createContainmentEList as T, BasicEFactory as _, BasicEPackage as D, EPackageRegistry as F, BasicEClass as f, BasicEReference as w, BasicEAttribute as h, getEcorePackage as E } from "@emfts/core";
const { serviceId: S } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
class a extends O {
  // Feature ID Constants (eLiterals)
  static CONNECTIONS = 0;
  // Private fields
  _connections;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return i.Literals.WORKSPACE;
  }
  // Getters and Setters
  get connections() {
    return this._connections || (this._connections = T(this, this.eClass().getEStructuralFeature("connections"))), this._connections;
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case a.CONNECTIONS:
        return this.connections;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case a.CONNECTIONS:
        this.connections.clear(), this.connections.addAll(t), super.eSet(e, t);
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
      case a.CONNECTIONS:
        return this._connections !== void 0 && !this._connections.isEmpty();
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case a.CONNECTIONS:
        this._connections && this._connections.clear();
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
      connections: this.connections?.toArray?.() ?? this.connections
    };
  }
}
class s extends O {
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
    return i.Literals.CONNECTION;
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
      getFeature: () => this.eClass().getEStructuralFeature(s.UID),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => s.UID,
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
      getFeature: () => this.eClass().getEStructuralFeature(s.NAME),
      getOldValue: () => t,
      getNewValue: () => e,
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
  set type(e) {
    const t = this._type;
    this._type = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(s.TYPE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => s.TYPE,
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
      getFeature: () => this.eClass().getEStructuralFeature(s.CONFIG),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => s.CONFIG,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case s.UID:
        return this.uid;
      case s.NAME:
        return this.name;
      case s.TYPE:
        return this.type;
      case s.CONFIG:
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
      case s.UID:
        this.uid = t, super.eSet(e, t);
        break;
      case s.NAME:
        this.name = t, super.eSet(e, t);
        break;
      case s.TYPE:
        this.type = t, super.eSet(e, t);
        break;
      case s.CONFIG:
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
      case s.UID:
        return this._uid !== void 0;
      case s.NAME:
        return this._name !== void 0;
      case s.TYPE:
        return this._type !== void 0;
      case s.CONFIG:
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
      case s.UID:
        this._uid = void 0;
        return;
      case s.NAME:
        this._name = void 0;
        return;
      case s.TYPE:
        this._type = void 0;
        return;
      case s.CONFIG:
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
class l extends _ {
  // Lazy singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new l()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(i.eINSTANCE);
  }
  /**
   * Create a new Workspace instance
   */
  createWorkspace() {
    return new a();
  }
  /**
   * Create a new Connection instance
   */
  createConnection() {
    return new s();
  }
  /**
   * Create an instance of the given class
   */
  create(e) {
    switch (e.getName()) {
      case "Workspace":
        return this.createWorkspace();
      case "Connection":
        return this.createConnection();
      default:
        throw new Error(`Unknown class: ${e.getName()}`);
    }
  }
}
class i extends D {
  static eNAME = "workspace";
  static eNS_URI = "http://org.eclipse.daanse.board.app.lib.model.workspace";
  static eNS_PREFIX = "workspace";
  // Singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new i(), this._instance.init()), this._instance;
  }
  /**
   * Literals for quick access to metaclasses and features
   */
  static Literals = {
    WORKSPACE: null,
    WORKSPACE__CONNECTIONS: null,
    CONNECTION: null,
    CONNECTION__UID: null,
    CONNECTION__NAME: null,
    CONNECTION__TYPE: null,
    CONNECTION__CONFIG: null
  };
  constructor() {
    super(), this.setName(i.eNAME), this.setNsURI(i.eNS_URI), this.setNsPrefix(i.eNS_PREFIX);
  }
  /**
   * Initialize package contents
   */
  init() {
    F.INSTANCE.set(i.eNS_URI, this), this.setEFactoryInstance(l.eINSTANCE);
    const e = new f();
    e.setName("Workspace"), e.setAbstract(!1), e.setInterface(!1), this.getEClassifiers().push(e), e.setEPackage(this), i.Literals.WORKSPACE = e;
    const t = new w();
    t.setContainment(!0), t.setName("connections"), t.setLowerBound(0), t.setUpperBound(-1), e.getEStructuralFeatures().push(t), i.Literals.WORKSPACE__CONNECTIONS = t;
    const r = new f();
    r.setName("Connection"), r.setAbstract(!1), r.setInterface(!1), this.getEClassifiers().push(r), r.setEPackage(this), i.Literals.CONNECTION = r;
    const c = new h();
    c.setName("uid"), c.setLowerBound(0), c.setUpperBound(1), r.getEStructuralFeatures().push(c), i.Literals.CONNECTION__UID = c;
    const u = new h();
    u.setName("name"), u.setLowerBound(0), u.setUpperBound(1), r.getEStructuralFeatures().push(u), i.Literals.CONNECTION__NAME = u;
    const N = new h();
    N.setName("type"), N.setLowerBound(0), N.setUpperBound(1), r.getEStructuralFeatures().push(N), i.Literals.CONNECTION__TYPE = N;
    const o = new h();
    o.setName("config"), o.setLowerBound(0), o.setUpperBound(1), r.getEStructuralFeatures().push(o), i.Literals.CONNECTION__CONFIG = o, i.Literals.WORKSPACE__CONNECTIONS.setEType(i.Literals.CONNECTION), i.Literals.CONNECTION__UID.setEType(E().getEClassifier("EString")), i.Literals.CONNECTION__NAME.setEType(E().getEClassifier("EString")), i.Literals.CONNECTION__TYPE.setEType(E().getEClassifier("EString")), i.Literals.CONNECTION__CONFIG.setEType(E().getEClassifier("EJavaObject"));
  }
}
i.eINSTANCE;
const g = S("Workspace"), y = Symbol.for(g);
function d({ services: n }) {
  n.register(g, new a());
}
function I({ services: n }) {
  n.unregister(g);
}
const p = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ConnectionImpl: s,
  WORKSPACE: g,
  WorkspaceFactory: l,
  WorkspaceImpl: a,
  WorkspacePackage: i,
  activate: d,
  deactivate: I,
  identifier: y
}, Symbol.toStringTag, { value: "Module" })), C = "org.eclipse.daanse.board.app.lib.model.workspace", A = "0.0.1-next.1";
async function b(n) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${C}: tsm runtime is not initialized`);
  e.register(C, p, A, "lib.model.workspace"), await d?.(n);
}
async function v(n) {
  await I?.(n);
}
export {
  s as ConnectionImpl,
  g as WORKSPACE,
  l as WorkspaceFactory,
  a as WorkspaceImpl,
  i as WorkspacePackage,
  b as activate,
  v as deactivate,
  y as identifier
};
