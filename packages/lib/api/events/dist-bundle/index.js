import { BasicEFactory as _, BasicEPackage as S, EPackageRegistry as N, BasicEClass as T, BasicEAttribute as A, getEcorePackage as h, BasicEObject as g } from "@emfts/core";
const { serviceId: E } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), C = `<?xml version="1.0" encoding="UTF-8"?>
<!--
/*********************************************************************
* Copyright (c) 2024 Contributors to the Eclipse Foundation.
*
* This program and the accompanying materials are made
* available under the terms of the Eclipse Public License 2.0
* which is available at https://www.eclipse.org/legal/epl-2.0/
*
* SPDX-License-Identifier: EPL-2.0
**********************************************************************/
-->
<ecore:EPackage xmi:version="2.0"
                xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                xmlns:ecore="http://www.eclipse.org/emf/2002/Ecore" name="Events"
                nsURI="http://org.eclipse.daanse.board.app.lib.events" nsPrefix="Events">

    <!-- Abstract Base Payload -->
    <eClassifiers xsi:type="ecore:EClass" name="Payload" abstract="true">
        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
            <details key="documentation" value="Abstract base class for all event payloads."/>
        </eAnnotations>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="eventType" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Type of the event (e.g., 'click_on_thing', 'click_on_datastream')."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="widgetId" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="ID of the widget that emitted this event."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="timestamp" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//ELong">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Unix timestamp when the event was emitted."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="metadata" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EJavaObject" lowerBound="0">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Optional metadata object for additional context."/>
            </eAnnotations>
        </eStructuralFeatures>
    </eClassifiers>

    <!-- Abstract Widget Action Interface -->
    <eClassifiers xsi:type="ecore:EClass" name="WidgetActionInterface" abstract="true">
        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
            <details key="documentation" value="Abstract base class for all widget action interfaces. Widget-specific action interfaces should extend this class."/>
        </eAnnotations>
    </eClassifiers>

    <!-- Abstract System Action Interface -->
    <eClassifiers xsi:type="ecore:EClass" name="SystemActionInterface" abstract="true" eSuperTypes="#//WidgetActionInterface">
        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
            <details key="documentation" value="Abstract base class for all system-level action interfaces. System-specific action interfaces should extend this class."/>
        </eAnnotations>
    </eClassifiers>

    <!-- Abstract Page Action Interface -->
    <eClassifiers xsi:type="ecore:EClass" name="PageActionInterface" abstract="true" eSuperTypes="#//WidgetActionInterface">
        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
            <details key="documentation" value="Abstract base class for all page-level action interfaces. Page-specific action interfaces should extend this class."/>
        </eAnnotations>
    </eClassifiers>

</ecore:EPackage>`;
class I extends _ {
  // Lazy singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new I()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(s.eINSTANCE);
  }
  /**
   * Create an instance of the given class
   */
  create(e) {
    switch (e.getName()) {
      default:
        throw new Error(`Unknown class: ${e.getName()}`);
    }
  }
}
class s extends S {
  static eNAME = "Events";
  static eNS_URI = "http://org.eclipse.daanse.board.app.lib.events";
  static eNS_PREFIX = "Events";
  // Singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new s(), this._instance.init()), this._instance;
  }
  /**
   * Literals for quick access to metaclasses and features
   */
  static Literals = {
    PAYLOAD: null,
    PAYLOAD__EVENT_TYPE: null,
    PAYLOAD__WIDGET_ID: null,
    PAYLOAD__TIMESTAMP: null,
    PAYLOAD__METADATA: null,
    WIDGET_ACTION_INTERFACE: null,
    SYSTEM_ACTION_INTERFACE: null,
    PAGE_ACTION_INTERFACE: null
  };
  constructor() {
    super(), this.setName(s.eNAME), this.setNsURI(s.eNS_URI), this.setNsPrefix(s.eNS_PREFIX);
  }
  /**
   * Initialize package contents
   */
  init() {
    N.INSTANCE.set(s.eNS_URI, this), this.setEFactoryInstance(I.eINSTANCE);
    const e = new T();
    e.setName("Payload"), e.setAbstract(!0), e.setInterface(!1), this.getEClassifiers().push(e), e.setEPackage(this), s.Literals.PAYLOAD = e;
    const t = new A();
    t.setName("eventType"), t.setLowerBound(0), t.setUpperBound(1), e.getEStructuralFeatures().push(t), s.Literals.PAYLOAD__EVENT_TYPE = t;
    const a = new A();
    a.setName("widgetId"), a.setLowerBound(0), a.setUpperBound(1), e.getEStructuralFeatures().push(a), s.Literals.PAYLOAD__WIDGET_ID = a;
    const u = new A();
    u.setName("timestamp"), u.setLowerBound(0), u.setUpperBound(1), e.getEStructuralFeatures().push(u), s.Literals.PAYLOAD__TIMESTAMP = u;
    const l = new A();
    l.setName("metadata"), l.setLowerBound(0), l.setUpperBound(1), e.getEStructuralFeatures().push(l), s.Literals.PAYLOAD__METADATA = l;
    const r = new T();
    r.setName("WidgetActionInterface"), r.setAbstract(!0), r.setInterface(!1), this.getEClassifiers().push(r), r.setEPackage(this), s.Literals.WIDGET_ACTION_INTERFACE = r;
    const c = new T();
    c.setName("SystemActionInterface"), c.setAbstract(!0), c.setInterface(!1), this.getEClassifiers().push(c), c.setEPackage(this), s.Literals.SYSTEM_ACTION_INTERFACE = c;
    const o = new T();
    o.setName("PageActionInterface"), o.setAbstract(!0), o.setInterface(!1), this.getEClassifiers().push(o), o.setEPackage(this), s.Literals.PAGE_ACTION_INTERFACE = o, s.Literals.SYSTEM_ACTION_INTERFACE.getESuperTypes().push(s.Literals.WIDGET_ACTION_INTERFACE), s.Literals.PAGE_ACTION_INTERFACE.getESuperTypes().push(s.Literals.WIDGET_ACTION_INTERFACE), s.Literals.PAYLOAD__EVENT_TYPE.setEType(h().getEClassifier("EString")), s.Literals.PAYLOAD__WIDGET_ID.setEType(h().getEClassifier("EString")), s.Literals.PAYLOAD__TIMESTAMP.setEType(h().getEClassifier("ELong")), s.Literals.PAYLOAD__METADATA.setEType(h().getEClassifier("EJavaObject"));
  }
}
class i extends g {
  // Feature ID Constants (eLiterals)
  static EVENT_TYPE = 0;
  static WIDGET_ID = 1;
  static TIMESTAMP = 2;
  static METADATA = 3;
  // Private fields
  _eventType;
  _widgetId;
  _timestamp;
  _metadata;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return s.Literals.PAYLOAD;
  }
  // Getters and Setters
  get eventType() {
    return this._eventType;
  }
  set eventType(e) {
    const t = this._eventType;
    this._eventType = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(i.EVENT_TYPE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => i.EVENT_TYPE,
      merge: () => !1
    });
  }
  get widgetId() {
    return this._widgetId;
  }
  set widgetId(e) {
    const t = this._widgetId;
    this._widgetId = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(i.WIDGET_ID),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => i.WIDGET_ID,
      merge: () => !1
    });
  }
  get timestamp() {
    return this._timestamp;
  }
  set timestamp(e) {
    const t = this._timestamp;
    this._timestamp = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(i.TIMESTAMP),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => i.TIMESTAMP,
      merge: () => !1
    });
  }
  get metadata() {
    return this._metadata;
  }
  set metadata(e) {
    const t = this._metadata;
    this._metadata = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(i.METADATA),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => i.METADATA,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case i.EVENT_TYPE:
        return this.eventType;
      case i.WIDGET_ID:
        return this.widgetId;
      case i.TIMESTAMP:
        return this.timestamp;
      case i.METADATA:
        return this.metadata;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case i.EVENT_TYPE:
        this.eventType = t, super.eSet(e, t);
        break;
      case i.WIDGET_ID:
        this.widgetId = t, super.eSet(e, t);
        break;
      case i.TIMESTAMP:
        this.timestamp = t, super.eSet(e, t);
        break;
      case i.METADATA:
        this.metadata = t, super.eSet(e, t);
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
      case i.EVENT_TYPE:
        return this._eventType !== void 0;
      case i.WIDGET_ID:
        return this._widgetId !== void 0;
      case i.TIMESTAMP:
        return this._timestamp !== void 0;
      case i.METADATA:
        return this._metadata !== void 0;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case i.EVENT_TYPE:
        this._eventType = void 0;
        return;
      case i.WIDGET_ID:
        this._widgetId = void 0;
        return;
      case i.TIMESTAMP:
        this._timestamp = void 0;
        return;
      case i.METADATA:
        this._metadata = void 0;
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
      eventType: this.eventType,
      widgetId: this.widgetId,
      timestamp: this.timestamp,
      metadata: this.metadata
    };
  }
}
class p extends g {
  // Feature ID Constants (eLiterals)
  // Private fields
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return s.Literals.WIDGET_ACTION_INTERFACE;
  }
  // Getters and Setters
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    const t = this.eClass().getFeatureID(e);
    return super.eGet(e);
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    const a = this.eClass().getFeatureID(e);
    super.eSet(e, t);
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(e) {
    const t = this.eClass().getFeatureID(e);
    return super.eIsSet(e);
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    const t = this.eClass().getFeatureID(e);
    super.eUnset(e);
  }
}
class y extends p {
  // Feature ID Constants (eLiterals)
  // Private fields
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return s.Literals.SYSTEM_ACTION_INTERFACE;
  }
  // Getters and Setters
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    const t = this.eClass().getFeatureID(e);
    return super.eGet(e);
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    const a = this.eClass().getFeatureID(e);
    super.eSet(e, t);
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(e) {
    const t = this.eClass().getFeatureID(e);
    return super.eIsSet(e);
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    const t = this.eClass().getFeatureID(e);
    super.eUnset(e);
  }
}
class F extends p {
  // Feature ID Constants (eLiterals)
  // Private fields
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return s.Literals.PAGE_ACTION_INTERFACE;
  }
  // Getters and Setters
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    const t = this.eClass().getFeatureID(e);
    return super.eGet(e);
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    const a = this.eClass().getFeatureID(e);
    super.eSet(e, t);
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(e) {
    const t = this.eClass().getFeatureID(e);
    return super.eIsSet(e);
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    const t = this.eClass().getFeatureID(e);
    super.eUnset(e);
  }
}
const f = E("EventRegistry"), b = Symbol.for(f), D = E("EventActionsRegistry"), M = Symbol.for(D), w = E("EventManager"), L = Symbol.for(w), m = E("EventBusBridge"), O = Symbol.for(m), R = E("EcoreMetadataService"), v = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ECORE_METADATA_SERVICE_ID: R,
  EVENT_ACTIONS_REGISTRY: M,
  EVENT_ACTIONS_REGISTRY_ID: D,
  EVENT_BUS_BRIDGE: O,
  EVENT_BUS_BRIDGE_ID: m,
  EVENT_MANAGER: L,
  EVENT_MANAGER_ID: w,
  EVENT_MODEL_ECORE: C,
  EVENT_REGISTRY: b,
  EVENT_REGISTRY_ID: f,
  EventsFactory: I,
  EventsPackage: s,
  PageActionInterfaceImpl: F,
  PayloadImpl: i,
  SystemActionInterfaceImpl: y,
  WidgetActionInterfaceImpl: p
}, Symbol.toStringTag, { value: "Module" })), d = "org.eclipse.daanse.board.app.lib.api.events", G = "0.0.1-next.1";
async function x(n) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${d}: tsm runtime is not initialized`);
  e.register(d, v, G, "lib.api.events"), await void 0;
}
async function P(n) {
  await void 0;
}
export {
  R as ECORE_METADATA_SERVICE_ID,
  M as EVENT_ACTIONS_REGISTRY,
  D as EVENT_ACTIONS_REGISTRY_ID,
  O as EVENT_BUS_BRIDGE,
  m as EVENT_BUS_BRIDGE_ID,
  L as EVENT_MANAGER,
  w as EVENT_MANAGER_ID,
  C as EVENT_MODEL_ECORE,
  b as EVENT_REGISTRY,
  f as EVENT_REGISTRY_ID,
  I as EventsFactory,
  s as EventsPackage,
  F as PageActionInterfaceImpl,
  i as PayloadImpl,
  y as SystemActionInterfaceImpl,
  p as WidgetActionInterfaceImpl,
  x as activate,
  P as deactivate
};
