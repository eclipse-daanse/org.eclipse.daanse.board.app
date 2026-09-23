(function(){var i="ui.vue.widget.routing",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".routing-widget{display:flex;flex-direction:column;height:100%;padding:.75rem;gap:.75rem;overflow-y:auto;font-family:inherit;font-size:.875rem}.routing-header{display:flex;align-items:center;justify-content:space-between;gap:.5rem}.routing-title{font-weight:600;font-size:1rem;color:#c45e00}.costing-select{padding:.25rem .5rem;border:1px solid #ddd;border-radius:4px;font-size:.8rem;background:#fff}.waypoints-list{display:flex;flex-direction:column;gap:.5rem}.waypoint-row{display:flex;align-items:flex-start;gap:.5rem}.waypoint-dot{width:12px;height:12px;border-radius:50%;margin-top:1.4rem;flex-shrink:0}.waypoint-input-wrapper{flex:1;position:relative}.waypoint-label{display:block;font-size:.7rem;color:#888;margin-bottom:2px}.waypoint-input{width:100%;padding:.35rem .5rem;border:1px solid #ddd;border-radius:4px;font-size:.8rem;box-sizing:border-box}.waypoint-input:focus{outline:none;border-color:#c45e00}.suggestions-dropdown{position:absolute;top:100%;left:0;right:0;background:#fff;border:1px solid #ddd;border-radius:0 0 4px 4px;z-index:100;max-height:200px;overflow-y:auto;box-shadow:0 4px 8px #0000001a}.suggestion-item{padding:.4rem .5rem;cursor:pointer;font-size:.75rem;border-bottom:1px solid #f0f0f0}.suggestion-item:hover{background:#fff3e0}.remove-btn{background:none;border:none;color:#999;font-size:1.2rem;cursor:pointer;padding:.2rem;margin-top:1.2rem;line-height:1}.remove-btn:hover{color:#f44336}.routing-actions{display:flex;gap:.5rem;flex-wrap:wrap}.btn-primary{padding:.4rem .75rem;background:#c45e00;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:.8rem;font-weight:500}.btn-primary:hover{background:#a04e00}.btn-primary:disabled{background:#ccc;cursor:not-allowed}.btn-secondary{padding:.4rem .75rem;background:#fff;color:#555;border:1px solid #ddd;border-radius:4px;cursor:pointer;font-size:.8rem}.btn-secondary:hover{background:#f5f5f5}.btn-clear{padding:.4rem .75rem;background:#fff;color:#f44336;border:1px solid #ffcdd2;border-radius:4px;cursor:pointer;font-size:.8rem}.btn-clear:hover{background:#ffebee}.route-result{border-top:1px solid #e0e0e0;padding-top:.75rem}.result-summary{display:flex;gap:1rem;flex-wrap:wrap}.summary-item{display:flex;flex-direction:column}.summary-value{font-weight:600;font-size:1rem;color:#333}.summary-label{font-size:.7rem;color:#888}.maneuvers-section{margin-top:.75rem}.maneuvers-toggle{background:none;border:none;cursor:pointer;font-size:.8rem;color:#555;padding:.25rem 0;font-weight:500}.maneuvers-toggle:hover{color:#c45e00}.maneuvers-list{margin-top:.5rem;display:flex;flex-direction:column;gap:.25rem}.maneuver-item{display:flex;justify-content:space-between;align-items:flex-start;gap:.5rem;padding:.3rem 0;border-bottom:1px solid #f5f5f5;font-size:.75rem}.maneuver-instruction{flex:1;color:#333}.maneuver-distance{color:#888;white-space:nowrap}\n";})();
import { PayloadImpl as fu, WidgetActionInterfaceImpl as Up, EVENT_ACTIONS_REGISTRY as Wp, EventsPackage as bp, EVENT_REGISTRY_ID as Gp } from "org.eclipse.daanse.board.app.lib.api.events";
import { component as Xa, activate as Pp, deactivate as Mp, inject as Bp } from "@eclipse-daanse/tsm";
import { defineComponent as Yp, toRefs as $p, inject as au, ref as mt, watch as Dn, computed as Cr, onMounted as Hp, onUnmounted as Kp, createElementBlock as Ne, openBlock as Le, createElementVNode as Q, createCommentVNode as Rn, withDirectives as Ha, toDisplayString as ge, unref as nt, Fragment as yr, renderList as Nr, vModelSelect as qp, normalizeStyle as Xp, vModelText as Jp, withModifiers as zp } from "vue";
import { useRoute as Zp } from "vue-router";
import { useDatasourceRepository as Vp, useTranslation as Qp } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { BasicEObject as jp, BasicEFactory as ed, BasicEPackage as td, EPackageRegistry as Ja, BasicEClass as Lr, BasicEAttribute as Je, getEcorePackage as ze } from "@emfts/core";
import { SET_WAYPOINTS as nd } from "org.eclipse.daanse.board.app.lib.datasource.valhalla";
import { WIDGET_SERVICE_ID as rd } from "org.eclipse.daanse.board.app.lib.api.widget";
const { identifiers: kp } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), id = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3ccircle%20cx='6'%20cy='19'%20r='3'/%3e%3ccircle%20cx='18'%20cy='5'%20r='3'/%3e%3cpath%20d='M12%2019h4.5a3.5%203.5%200%200%200%200-7h-9a3.5%203.5%200%200%201%200-7H12'/%3e%3c/svg%3e";
class se extends jp {
  // Feature ID Constants (eLiterals)
  static DEFAULT_COSTING = 0;
  static COSTING = 1;
  static WAYPOINTS = 2;
  // Private fields
  _defaultCosting = "auto";
  _costing = "auto";
  _waypoints;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return N.Literals.ROUTING_WIDGET_SETTINGS;
  }
  // Getters and Setters
  get defaultCosting() {
    return this._defaultCosting;
  }
  set defaultCosting(g) {
    const s = this._defaultCosting;
    this._defaultCosting = g, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(se.DEFAULT_COSTING),
      getOldValue: () => s,
      getNewValue: () => g,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => se.DEFAULT_COSTING,
      merge: () => !1
    });
  }
  get costing() {
    return this._costing;
  }
  set costing(g) {
    const s = this._costing;
    this._costing = g, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(se.COSTING),
      getOldValue: () => s,
      getNewValue: () => g,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => se.COSTING,
      merge: () => !1
    });
  }
  get waypoints() {
    return this._waypoints;
  }
  set waypoints(g) {
    const s = this._waypoints;
    this._waypoints = g, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(se.WAYPOINTS),
      getOldValue: () => s,
      getNewValue: () => g,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => se.WAYPOINTS,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(g) {
    switch (this.eClass().getFeatureID(g)) {
      case se.DEFAULT_COSTING:
        return this.defaultCosting;
      case se.COSTING:
        return this.costing;
      case se.WAYPOINTS:
        return this.waypoints;
      default:
        return super.eGet(g);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(g, s) {
    switch (this.eClass().getFeatureID(g)) {
      case se.DEFAULT_COSTING:
        this.defaultCosting = s, super.eSet(g, s);
        break;
      case se.COSTING:
        this.costing = s, super.eSet(g, s);
        break;
      case se.WAYPOINTS:
        this.waypoints = s, super.eSet(g, s);
        break;
      default:
        super.eSet(g, s);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(g) {
    switch (this.eClass().getFeatureID(g)) {
      case se.DEFAULT_COSTING:
        return this._defaultCosting !== "auto";
      case se.COSTING:
        return this._costing !== "auto";
      case se.WAYPOINTS:
        return this._waypoints !== void 0;
      default:
        return super.eIsSet(g);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(g) {
    switch (this.eClass().getFeatureID(g)) {
      case se.DEFAULT_COSTING:
        this._defaultCosting = "auto";
        return;
      case se.COSTING:
        this._costing = "auto";
        return;
      case se.WAYPOINTS:
        this._waypoints = void 0;
        return;
      default:
        super.eUnset(g);
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
      defaultCosting: this.defaultCosting,
      costing: this.costing,
      waypoints: this.waypoints
    };
  }
}
class P extends fu {
  // Feature ID Constants (eLiterals)
  static GEOJSON = 4;
  static DISTANCE_KM = 5;
  static DURATION_MIN = 6;
  static WAYPOINTS = 7;
  static COSTING = 8;
  // Private fields
  _geojson;
  _distance_km;
  _duration_min;
  _waypoints;
  _costing;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return N.Literals.ROUTE_CALCULATED_PAYLOAD;
  }
  // Getters and Setters
  get geojson() {
    return this._geojson;
  }
  set geojson(g) {
    const s = this._geojson;
    this._geojson = g, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(P.GEOJSON),
      getOldValue: () => s,
      getNewValue: () => g,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => P.GEOJSON,
      merge: () => !1
    });
  }
  get distance_km() {
    return this._distance_km;
  }
  set distance_km(g) {
    const s = this._distance_km;
    this._distance_km = g, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(P.DISTANCE_KM),
      getOldValue: () => s,
      getNewValue: () => g,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => P.DISTANCE_KM,
      merge: () => !1
    });
  }
  get duration_min() {
    return this._duration_min;
  }
  set duration_min(g) {
    const s = this._duration_min;
    this._duration_min = g, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(P.DURATION_MIN),
      getOldValue: () => s,
      getNewValue: () => g,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => P.DURATION_MIN,
      merge: () => !1
    });
  }
  get waypoints() {
    return this._waypoints;
  }
  set waypoints(g) {
    const s = this._waypoints;
    this._waypoints = g, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(P.WAYPOINTS),
      getOldValue: () => s,
      getNewValue: () => g,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => P.WAYPOINTS,
      merge: () => !1
    });
  }
  get costing() {
    return this._costing;
  }
  set costing(g) {
    const s = this._costing;
    this._costing = g, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(P.COSTING),
      getOldValue: () => s,
      getNewValue: () => g,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => P.COSTING,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(g) {
    switch (this.eClass().getFeatureID(g)) {
      case P.GEOJSON:
        return this.geojson;
      case P.DISTANCE_KM:
        return this.distance_km;
      case P.DURATION_MIN:
        return this.duration_min;
      case P.WAYPOINTS:
        return this.waypoints;
      case P.COSTING:
        return this.costing;
      default:
        return super.eGet(g);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(g, s) {
    switch (this.eClass().getFeatureID(g)) {
      case P.GEOJSON:
        this.geojson = s, super.eSet(g, s);
        break;
      case P.DISTANCE_KM:
        this.distance_km = s, super.eSet(g, s);
        break;
      case P.DURATION_MIN:
        this.duration_min = s, super.eSet(g, s);
        break;
      case P.WAYPOINTS:
        this.waypoints = s, super.eSet(g, s);
        break;
      case P.COSTING:
        this.costing = s, super.eSet(g, s);
        break;
      default:
        super.eSet(g, s);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(g) {
    switch (this.eClass().getFeatureID(g)) {
      case P.GEOJSON:
        return this._geojson !== void 0;
      case P.DISTANCE_KM:
        return this._distance_km !== void 0;
      case P.DURATION_MIN:
        return this._duration_min !== void 0;
      case P.WAYPOINTS:
        return this._waypoints !== void 0;
      case P.COSTING:
        return this._costing !== void 0;
      default:
        return super.eIsSet(g);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(g) {
    switch (this.eClass().getFeatureID(g)) {
      case P.GEOJSON:
        this._geojson = void 0;
        return;
      case P.DISTANCE_KM:
        this._distance_km = void 0;
        return;
      case P.DURATION_MIN:
        this._duration_min = void 0;
        return;
      case P.WAYPOINTS:
        this._waypoints = void 0;
        return;
      case P.COSTING:
        this._costing = void 0;
        return;
      default:
        super.eUnset(g);
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
      geojson: this.geojson,
      distance_km: this.distance_km,
      duration_min: this.duration_min,
      waypoints: this.waypoints,
      costing: this.costing
    };
  }
}
class Y extends fu {
  // Feature ID Constants (eLiterals)
  static LAT = 4;
  static LON = 5;
  static NAME = 6;
  static INDEX = 7;
  // Private fields
  _lat;
  _lon;
  _name;
  _index;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return N.Literals.WAYPOINT_PAYLOAD;
  }
  // Getters and Setters
  get lat() {
    return this._lat;
  }
  set lat(g) {
    const s = this._lat;
    this._lat = g, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Y.LAT),
      getOldValue: () => s,
      getNewValue: () => g,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Y.LAT,
      merge: () => !1
    });
  }
  get lon() {
    return this._lon;
  }
  set lon(g) {
    const s = this._lon;
    this._lon = g, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Y.LON),
      getOldValue: () => s,
      getNewValue: () => g,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Y.LON,
      merge: () => !1
    });
  }
  get name() {
    return this._name;
  }
  set name(g) {
    const s = this._name;
    this._name = g, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Y.NAME),
      getOldValue: () => s,
      getNewValue: () => g,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Y.NAME,
      merge: () => !1
    });
  }
  get index() {
    return this._index;
  }
  set index(g) {
    const s = this._index;
    this._index = g, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Y.INDEX),
      getOldValue: () => s,
      getNewValue: () => g,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Y.INDEX,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(g) {
    switch (this.eClass().getFeatureID(g)) {
      case Y.LAT:
        return this.lat;
      case Y.LON:
        return this.lon;
      case Y.NAME:
        return this.name;
      case Y.INDEX:
        return this.index;
      default:
        return super.eGet(g);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(g, s) {
    switch (this.eClass().getFeatureID(g)) {
      case Y.LAT:
        this.lat = s, super.eSet(g, s);
        break;
      case Y.LON:
        this.lon = s, super.eSet(g, s);
        break;
      case Y.NAME:
        this.name = s, super.eSet(g, s);
        break;
      case Y.INDEX:
        this.index = s, super.eSet(g, s);
        break;
      default:
        super.eSet(g, s);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(g) {
    switch (this.eClass().getFeatureID(g)) {
      case Y.LAT:
        return this._lat !== void 0;
      case Y.LON:
        return this._lon !== void 0;
      case Y.NAME:
        return this._name !== void 0;
      case Y.INDEX:
        return this._index !== void 0;
      default:
        return super.eIsSet(g);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(g) {
    switch (this.eClass().getFeatureID(g)) {
      case Y.LAT:
        this._lat = void 0;
        return;
      case Y.LON:
        this._lon = void 0;
        return;
      case Y.NAME:
        this._name = void 0;
        return;
      case Y.INDEX:
        this._index = void 0;
        return;
      default:
        super.eUnset(g);
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
      lat: this.lat,
      lon: this.lon,
      name: this.name,
      index: this.index
    };
  }
}
class lu extends ed {
  // Lazy singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new lu()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(N.eINSTANCE);
  }
  /**
   * Create a new RoutingWidgetSettings instance
   */
  createRoutingWidgetSettings() {
    return new se();
  }
  /**
   * Create a new RouteCalculatedPayload instance
   */
  createRouteCalculatedPayload() {
    return new P();
  }
  /**
   * Create a new WaypointPayload instance
   */
  createWaypointPayload() {
    return new Y();
  }
  /**
   * Create an instance of the given class
   */
  create(g) {
    switch (g.getName()) {
      case "RoutingWidgetSettings":
        return this.createRoutingWidgetSettings();
      case "RouteCalculatedPayload":
        return this.createRouteCalculatedPayload();
      case "WaypointPayload":
        return this.createWaypointPayload();
      default:
        throw new Error(`Unknown class: ${g.getName()}`);
    }
  }
}
function ou(ae) {
  const g = Ja.INSTANCE.getEPackage(ae);
  if (!g)
    throw new Error(`EPackage '${ae}' is not registered. Access the eINSTANCE of that model's generated package (or register it via EPackageRegistry.INSTANCE.registerPackage) before initializing RoutingSettingsPackage.`);
  return g;
}
class N extends td {
  static eNAME = "RoutingSettings";
  static eNS_URI = "http://org.eclipse.daanse.board.app.ui.vue.widget.routing";
  static eNS_PREFIX = "RoutingSettings";
  // Singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new N(), this._instance.init()), this._instance;
  }
  /**
   * Literals for quick access to metaclasses and features
   */
  static Literals = {
    ROUTING_WIDGET_INTERFACE: null,
    ROUTING_WIDGET_SETTINGS: null,
    ROUTING_WIDGET_SETTINGS__DEFAULT_COSTING: null,
    ROUTING_WIDGET_SETTINGS__COSTING: null,
    ROUTING_WIDGET_SETTINGS__WAYPOINTS: null,
    ROUTE_CALCULATED_PAYLOAD: null,
    ROUTE_CALCULATED_PAYLOAD__GEOJSON: null,
    ROUTE_CALCULATED_PAYLOAD__DISTANCE_KM: null,
    ROUTE_CALCULATED_PAYLOAD__DURATION_MIN: null,
    ROUTE_CALCULATED_PAYLOAD__WAYPOINTS: null,
    ROUTE_CALCULATED_PAYLOAD__COSTING: null,
    WAYPOINT_PAYLOAD: null,
    WAYPOINT_PAYLOAD__LAT: null,
    WAYPOINT_PAYLOAD__LON: null,
    WAYPOINT_PAYLOAD__NAME: null,
    WAYPOINT_PAYLOAD__INDEX: null
  };
  constructor() {
    super(), this.setName(N.eNAME), this.setNsURI(N.eNS_URI), this.setNsPrefix(N.eNS_PREFIX);
  }
  /**
   * Initialize package contents
   */
  init() {
    Ja.INSTANCE.set(N.eNS_URI, this), this.setEFactoryInstance(lu.eINSTANCE);
    const g = new Lr();
    g.setName("RoutingWidgetInterface"), g.setAbstract(!0), g.setInterface(!1), this.getEClassifiers().push(g), g.setEPackage(this), N.Literals.ROUTING_WIDGET_INTERFACE = g;
    const s = new Lr();
    s.setName("RoutingWidgetSettings"), s.setAbstract(!1), s.setInterface(!1), this.getEClassifiers().push(s), s.setEPackage(this), N.Literals.ROUTING_WIDGET_SETTINGS = s;
    const X = new Je();
    X.setName("defaultCosting"), X.setLowerBound(0), X.setUpperBound(1), s.getEStructuralFeatures().push(X), N.Literals.ROUTING_WIDGET_SETTINGS__DEFAULT_COSTING = X;
    const $ = new Je();
    $.setName("costing"), $.setLowerBound(0), $.setUpperBound(1), s.getEStructuralFeatures().push($), N.Literals.ROUTING_WIDGET_SETTINGS__COSTING = $;
    const H = new Je();
    H.setName("waypoints"), H.setLowerBound(0), H.setUpperBound(1), s.getEStructuralFeatures().push(H), N.Literals.ROUTING_WIDGET_SETTINGS__WAYPOINTS = H;
    const U = new Lr();
    U.setName("RouteCalculatedPayload"), U.setAbstract(!1), U.setInterface(!1), this.getEClassifiers().push(U), U.setEPackage(this), N.Literals.ROUTE_CALCULATED_PAYLOAD = U;
    const rt = new Je();
    rt.setName("geojson"), rt.setLowerBound(0), rt.setUpperBound(1), U.getEStructuralFeatures().push(rt), N.Literals.ROUTE_CALCULATED_PAYLOAD__GEOJSON = rt;
    const it = new Je();
    it.setName("distance_km"), it.setLowerBound(0), it.setUpperBound(1), U.getEStructuralFeatures().push(it), N.Literals.ROUTE_CALCULATED_PAYLOAD__DISTANCE_KM = it;
    const ft = new Je();
    ft.setName("duration_min"), ft.setLowerBound(0), ft.setUpperBound(1), U.getEStructuralFeatures().push(ft), N.Literals.ROUTE_CALCULATED_PAYLOAD__DURATION_MIN = ft;
    const oe = new Je();
    oe.setName("waypoints"), oe.setLowerBound(0), oe.setUpperBound(1), U.getEStructuralFeatures().push(oe), N.Literals.ROUTE_CALCULATED_PAYLOAD__WAYPOINTS = oe;
    const W = new Je();
    W.setName("costing"), W.setLowerBound(0), W.setUpperBound(1), U.getEStructuralFeatures().push(W), N.Literals.ROUTE_CALCULATED_PAYLOAD__COSTING = W;
    const j = new Lr();
    j.setName("WaypointPayload"), j.setAbstract(!1), j.setInterface(!1), this.getEClassifiers().push(j), j.setEPackage(this), N.Literals.WAYPOINT_PAYLOAD = j;
    const ee = new Je();
    ee.setName("lat"), ee.setLowerBound(0), ee.setUpperBound(1), j.getEStructuralFeatures().push(ee), N.Literals.WAYPOINT_PAYLOAD__LAT = ee;
    const _e = new Je();
    _e.setName("lon"), _e.setLowerBound(0), _e.setUpperBound(1), j.getEStructuralFeatures().push(_e), N.Literals.WAYPOINT_PAYLOAD__LON = _e;
    const Te = new Je();
    Te.setName("name"), Te.setLowerBound(0), Te.setUpperBound(1), j.getEStructuralFeatures().push(Te), N.Literals.WAYPOINT_PAYLOAD__NAME = Te;
    const z = new Je();
    z.setName("index"), z.setLowerBound(0), z.setUpperBound(1), j.getEStructuralFeatures().push(z), N.Literals.WAYPOINT_PAYLOAD__INDEX = z, N.Literals.ROUTING_WIDGET_INTERFACE.getESuperTypes().push(ou("http://org.eclipse.daanse.board.app.lib.events").getEClassifier("WidgetActionInterface")), N.Literals.ROUTE_CALCULATED_PAYLOAD.getESuperTypes().push(ou("http://org.eclipse.daanse.board.app.lib.events").getEClassifier("Payload")), N.Literals.WAYPOINT_PAYLOAD.getESuperTypes().push(ou("http://org.eclipse.daanse.board.app.lib.events").getEClassifier("Payload")), N.Literals.ROUTING_WIDGET_SETTINGS__DEFAULT_COSTING.setEType(ze().getEClassifier("EString")), N.Literals.ROUTING_WIDGET_SETTINGS__COSTING.setEType(ze().getEClassifier("EString")), N.Literals.ROUTING_WIDGET_SETTINGS__WAYPOINTS.setEType(ze().getEClassifier("EJavaObject")), N.Literals.ROUTE_CALCULATED_PAYLOAD__GEOJSON.setEType(ze().getEClassifier("EJavaObject")), N.Literals.ROUTE_CALCULATED_PAYLOAD__DISTANCE_KM.setEType(ze().getEClassifier("EDouble")), N.Literals.ROUTE_CALCULATED_PAYLOAD__DURATION_MIN.setEType(ze().getEClassifier("EDouble")), N.Literals.ROUTE_CALCULATED_PAYLOAD__WAYPOINTS.setEType(ze().getEClassifier("EJavaObject")), N.Literals.ROUTE_CALCULATED_PAYLOAD__COSTING.setEType(ze().getEClassifier("EString")), N.Literals.WAYPOINT_PAYLOAD__LAT.setEType(ze().getEClassifier("EDouble")), N.Literals.WAYPOINT_PAYLOAD__LON.setEType(ze().getEClassifier("EDouble")), N.Literals.WAYPOINT_PAYLOAD__NAME.setEType(ze().getEClassifier("EString")), N.Literals.WAYPOINT_PAYLOAD__INDEX.setEType(ze().getEClassifier("EInt"));
  }
}
class ud extends Up {
  // Feature ID Constants (eLiterals)
  // Private fields
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return N.Literals.ROUTING_WIDGET_INTERFACE;
  }
  // Getters and Setters
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(g) {
    const s = this.eClass().getFeatureID(g);
    return super.eGet(g);
  }
  /**
   * Sets the value of the given feature
   */
  eSet(g, s) {
    const X = this.eClass().getFeatureID(g);
    super.eSet(g, s);
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(g) {
    const s = this.eClass().getFeatureID(g);
    return super.eIsSet(g);
  }
  /**
   * Unsets the given feature
   */
  eUnset(g) {
    const s = this.eClass().getFeatureID(g);
    super.eUnset(g);
  }
  addWaypoint(g, s, X) {
    throw new Error("addWaypoint not implemented");
  }
  removeWaypoint(g) {
    throw new Error("removeWaypoint not implemented");
  }
  clearWaypoints() {
    throw new Error("clearWaypoints not implemented");
  }
  setCosting(g) {
    throw new Error("setCosting not implemented");
  }
  calculateRoute() {
    throw new Error("calculateRoute not implemented");
  }
}
var xr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Fn = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var sd = Fn.exports, Ka;
function ad() {
  return Ka || (Ka = 1, (function(ae, g) {
    (function() {
      var s, X = "4.17.21", $ = 200, H = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", U = "Expected a function", rt = "Invalid `variable` option passed into `_.template`", it = "__lodash_hash_undefined__", ft = 500, oe = "__lodash_placeholder__", W = 1, j = 2, ee = 4, _e = 1, Te = 2, z = 1, ce = 2, Ft = 4, xe = 8, It = 16, Ze = 32, re = 64, Pe = 128, Ut = 256, on = 512, Un = 30, Fr = "...", Ur = 800, Wr = 16, Wn = 1, br = 2, bn = 3, lt = 1 / 0, ut = 9007199254740991, fn = 17976931348623157e292, Wt = NaN, De = 4294967295, Gr = De - 1, Pr = De >>> 1, Mr = [
        ["ary", Pe],
        ["bind", z],
        ["bindKey", ce],
        ["curry", xe],
        ["curryRight", It],
        ["flip", on],
        ["partial", Ze],
        ["partialRight", re],
        ["rearg", Ut]
      ], ct = "[object Arguments]", w = "[object Array]", m = "[object AsyncFunction]", C = "[object Boolean]", q = "[object Date]", ve = "[object DOMException]", qt = "[object Error]", ln = "[object Function]", hu = "[object GeneratorFunction]", Ve = "[object Map]", cn = "[object Number]", Za = "[object Null]", ht = "[object Object]", gu = "[object Promise]", Va = "[object Proxy]", hn = "[object RegExp]", Qe = "[object Set]", gn = "[object String]", Gn = "[object Symbol]", Qa = "[object Undefined]", _n = "[object WeakMap]", ka = "[object WeakSet]", pn = "[object ArrayBuffer]", Xt = "[object DataView]", Br = "[object Float32Array]", Yr = "[object Float64Array]", $r = "[object Int8Array]", Hr = "[object Int16Array]", Kr = "[object Int32Array]", qr = "[object Uint8Array]", Xr = "[object Uint8ClampedArray]", Jr = "[object Uint16Array]", zr = "[object Uint32Array]", ja = /\b__p \+= '';/g, eo = /\b(__p \+=) '' \+/g, to = /(__e\(.*?\)|\b__t\)) \+\n'';/g, _u = /&(?:amp|lt|gt|quot|#39);/g, pu = /[&<>"']/g, no = RegExp(_u.source), ro = RegExp(pu.source), io = /<%-([\s\S]+?)%>/g, uo = /<%([\s\S]+?)%>/g, du = /<%=([\s\S]+?)%>/g, so = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ao = /^\w*$/, oo = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Zr = /[\\^$.*+?()[\]{}|]/g, fo = RegExp(Zr.source), Vr = /^\s+/, lo = /\s/, co = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, ho = /\{\n\/\* \[wrapped with (.+)\] \*/, go = /,? & /, _o = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, po = /[()=,{}\[\]\/\s]/, vo = /\\(\\)?/g, wo = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, vu = /\w*$/, Ao = /^[-+]0x[0-9a-f]+$/i, To = /^0b[01]+$/i, Eo = /^\[object .+?Constructor\]$/, mo = /^0o[0-7]+$/i, Io = /^(?:0|[1-9]\d*)$/, Oo = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Pn = /($^)/, So = /['\n\r\u2028\u2029\\]/g, Mn = "\\ud800-\\udfff", Co = "\\u0300-\\u036f", yo = "\\ufe20-\\ufe2f", No = "\\u20d0-\\u20ff", wu = Co + yo + No, Au = "\\u2700-\\u27bf", Tu = "a-z\\xdf-\\xf6\\xf8-\\xff", Lo = "\\xac\\xb1\\xd7\\xf7", xo = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Do = "\\u2000-\\u206f", Ro = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Eu = "A-Z\\xc0-\\xd6\\xd8-\\xde", mu = "\\ufe0e\\ufe0f", Iu = Lo + xo + Do + Ro, Qr = "['’]", Fo = "[" + Mn + "]", Ou = "[" + Iu + "]", Bn = "[" + wu + "]", Su = "\\d+", Uo = "[" + Au + "]", Cu = "[" + Tu + "]", yu = "[^" + Mn + Iu + Su + Au + Tu + Eu + "]", kr = "\\ud83c[\\udffb-\\udfff]", Wo = "(?:" + Bn + "|" + kr + ")", Nu = "[^" + Mn + "]", jr = "(?:\\ud83c[\\udde6-\\uddff]){2}", ei = "[\\ud800-\\udbff][\\udc00-\\udfff]", Jt = "[" + Eu + "]", Lu = "\\u200d", xu = "(?:" + Cu + "|" + yu + ")", bo = "(?:" + Jt + "|" + yu + ")", Du = "(?:" + Qr + "(?:d|ll|m|re|s|t|ve))?", Ru = "(?:" + Qr + "(?:D|LL|M|RE|S|T|VE))?", Fu = Wo + "?", Uu = "[" + mu + "]?", Go = "(?:" + Lu + "(?:" + [Nu, jr, ei].join("|") + ")" + Uu + Fu + ")*", Po = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Mo = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Wu = Uu + Fu + Go, Bo = "(?:" + [Uo, jr, ei].join("|") + ")" + Wu, Yo = "(?:" + [Nu + Bn + "?", Bn, jr, ei, Fo].join("|") + ")", $o = RegExp(Qr, "g"), Ho = RegExp(Bn, "g"), ti = RegExp(kr + "(?=" + kr + ")|" + Yo + Wu, "g"), Ko = RegExp([
        Jt + "?" + Cu + "+" + Du + "(?=" + [Ou, Jt, "$"].join("|") + ")",
        bo + "+" + Ru + "(?=" + [Ou, Jt + xu, "$"].join("|") + ")",
        Jt + "?" + xu + "+" + Du,
        Jt + "+" + Ru,
        Mo,
        Po,
        Su,
        Bo
      ].join("|"), "g"), qo = RegExp("[" + Lu + Mn + wu + mu + "]"), Xo = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Jo = [
        "Array",
        "Buffer",
        "DataView",
        "Date",
        "Error",
        "Float32Array",
        "Float64Array",
        "Function",
        "Int8Array",
        "Int16Array",
        "Int32Array",
        "Map",
        "Math",
        "Object",
        "Promise",
        "RegExp",
        "Set",
        "String",
        "Symbol",
        "TypeError",
        "Uint8Array",
        "Uint8ClampedArray",
        "Uint16Array",
        "Uint32Array",
        "WeakMap",
        "_",
        "clearTimeout",
        "isFinite",
        "parseInt",
        "setTimeout"
      ], zo = -1, V = {};
      V[Br] = V[Yr] = V[$r] = V[Hr] = V[Kr] = V[qr] = V[Xr] = V[Jr] = V[zr] = !0, V[ct] = V[w] = V[pn] = V[C] = V[Xt] = V[q] = V[qt] = V[ln] = V[Ve] = V[cn] = V[ht] = V[hn] = V[Qe] = V[gn] = V[_n] = !1;
      var Z = {};
      Z[ct] = Z[w] = Z[pn] = Z[Xt] = Z[C] = Z[q] = Z[Br] = Z[Yr] = Z[$r] = Z[Hr] = Z[Kr] = Z[Ve] = Z[cn] = Z[ht] = Z[hn] = Z[Qe] = Z[gn] = Z[Gn] = Z[qr] = Z[Xr] = Z[Jr] = Z[zr] = !0, Z[qt] = Z[ln] = Z[_n] = !1;
      var Zo = {
        // Latin-1 Supplement block.
        À: "A",
        Á: "A",
        Â: "A",
        Ã: "A",
        Ä: "A",
        Å: "A",
        à: "a",
        á: "a",
        â: "a",
        ã: "a",
        ä: "a",
        å: "a",
        Ç: "C",
        ç: "c",
        Ð: "D",
        ð: "d",
        È: "E",
        É: "E",
        Ê: "E",
        Ë: "E",
        è: "e",
        é: "e",
        ê: "e",
        ë: "e",
        Ì: "I",
        Í: "I",
        Î: "I",
        Ï: "I",
        ì: "i",
        í: "i",
        î: "i",
        ï: "i",
        Ñ: "N",
        ñ: "n",
        Ò: "O",
        Ó: "O",
        Ô: "O",
        Õ: "O",
        Ö: "O",
        Ø: "O",
        ò: "o",
        ó: "o",
        ô: "o",
        õ: "o",
        ö: "o",
        ø: "o",
        Ù: "U",
        Ú: "U",
        Û: "U",
        Ü: "U",
        ù: "u",
        ú: "u",
        û: "u",
        ü: "u",
        Ý: "Y",
        ý: "y",
        ÿ: "y",
        Æ: "Ae",
        æ: "ae",
        Þ: "Th",
        þ: "th",
        ß: "ss",
        // Latin Extended-A block.
        Ā: "A",
        Ă: "A",
        Ą: "A",
        ā: "a",
        ă: "a",
        ą: "a",
        Ć: "C",
        Ĉ: "C",
        Ċ: "C",
        Č: "C",
        ć: "c",
        ĉ: "c",
        ċ: "c",
        č: "c",
        Ď: "D",
        Đ: "D",
        ď: "d",
        đ: "d",
        Ē: "E",
        Ĕ: "E",
        Ė: "E",
        Ę: "E",
        Ě: "E",
        ē: "e",
        ĕ: "e",
        ė: "e",
        ę: "e",
        ě: "e",
        Ĝ: "G",
        Ğ: "G",
        Ġ: "G",
        Ģ: "G",
        ĝ: "g",
        ğ: "g",
        ġ: "g",
        ģ: "g",
        Ĥ: "H",
        Ħ: "H",
        ĥ: "h",
        ħ: "h",
        Ĩ: "I",
        Ī: "I",
        Ĭ: "I",
        Į: "I",
        İ: "I",
        ĩ: "i",
        ī: "i",
        ĭ: "i",
        į: "i",
        ı: "i",
        Ĵ: "J",
        ĵ: "j",
        Ķ: "K",
        ķ: "k",
        ĸ: "k",
        Ĺ: "L",
        Ļ: "L",
        Ľ: "L",
        Ŀ: "L",
        Ł: "L",
        ĺ: "l",
        ļ: "l",
        ľ: "l",
        ŀ: "l",
        ł: "l",
        Ń: "N",
        Ņ: "N",
        Ň: "N",
        Ŋ: "N",
        ń: "n",
        ņ: "n",
        ň: "n",
        ŋ: "n",
        Ō: "O",
        Ŏ: "O",
        Ő: "O",
        ō: "o",
        ŏ: "o",
        ő: "o",
        Ŕ: "R",
        Ŗ: "R",
        Ř: "R",
        ŕ: "r",
        ŗ: "r",
        ř: "r",
        Ś: "S",
        Ŝ: "S",
        Ş: "S",
        Š: "S",
        ś: "s",
        ŝ: "s",
        ş: "s",
        š: "s",
        Ţ: "T",
        Ť: "T",
        Ŧ: "T",
        ţ: "t",
        ť: "t",
        ŧ: "t",
        Ũ: "U",
        Ū: "U",
        Ŭ: "U",
        Ů: "U",
        Ű: "U",
        Ų: "U",
        ũ: "u",
        ū: "u",
        ŭ: "u",
        ů: "u",
        ű: "u",
        ų: "u",
        Ŵ: "W",
        ŵ: "w",
        Ŷ: "Y",
        ŷ: "y",
        Ÿ: "Y",
        Ź: "Z",
        Ż: "Z",
        Ž: "Z",
        ź: "z",
        ż: "z",
        ž: "z",
        Ĳ: "IJ",
        ĳ: "ij",
        Œ: "Oe",
        œ: "oe",
        ŉ: "'n",
        ſ: "s"
      }, Vo = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }, Qo = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      }, ko = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      }, jo = parseFloat, ef = parseInt, bu = typeof xr == "object" && xr && xr.Object === Object && xr, tf = typeof self == "object" && self && self.Object === Object && self, pe = bu || tf || Function("return this")(), ni = g && !g.nodeType && g, bt = ni && !0 && ae && !ae.nodeType && ae, Gu = bt && bt.exports === ni, ri = Gu && bu.process, Me = (function() {
        try {
          var l = bt && bt.require && bt.require("util").types;
          return l || ri && ri.binding && ri.binding("util");
        } catch {
        }
      })(), Pu = Me && Me.isArrayBuffer, Mu = Me && Me.isDate, Bu = Me && Me.isMap, Yu = Me && Me.isRegExp, $u = Me && Me.isSet, Hu = Me && Me.isTypedArray;
      function Re(l, _, h) {
        switch (h.length) {
          case 0:
            return l.call(_);
          case 1:
            return l.call(_, h[0]);
          case 2:
            return l.call(_, h[0], h[1]);
          case 3:
            return l.call(_, h[0], h[1], h[2]);
        }
        return l.apply(_, h);
      }
      function nf(l, _, h, T) {
        for (var y = -1, M = l == null ? 0 : l.length; ++y < M; ) {
          var fe = l[y];
          _(T, fe, h(fe), l);
        }
        return T;
      }
      function Be(l, _) {
        for (var h = -1, T = l == null ? 0 : l.length; ++h < T && _(l[h], h, l) !== !1; )
          ;
        return l;
      }
      function rf(l, _) {
        for (var h = l == null ? 0 : l.length; h-- && _(l[h], h, l) !== !1; )
          ;
        return l;
      }
      function Ku(l, _) {
        for (var h = -1, T = l == null ? 0 : l.length; ++h < T; )
          if (!_(l[h], h, l))
            return !1;
        return !0;
      }
      function Ot(l, _) {
        for (var h = -1, T = l == null ? 0 : l.length, y = 0, M = []; ++h < T; ) {
          var fe = l[h];
          _(fe, h, l) && (M[y++] = fe);
        }
        return M;
      }
      function Yn(l, _) {
        var h = l == null ? 0 : l.length;
        return !!h && zt(l, _, 0) > -1;
      }
      function ii(l, _, h) {
        for (var T = -1, y = l == null ? 0 : l.length; ++T < y; )
          if (h(_, l[T]))
            return !0;
        return !1;
      }
      function k(l, _) {
        for (var h = -1, T = l == null ? 0 : l.length, y = Array(T); ++h < T; )
          y[h] = _(l[h], h, l);
        return y;
      }
      function St(l, _) {
        for (var h = -1, T = _.length, y = l.length; ++h < T; )
          l[y + h] = _[h];
        return l;
      }
      function ui(l, _, h, T) {
        var y = -1, M = l == null ? 0 : l.length;
        for (T && M && (h = l[++y]); ++y < M; )
          h = _(h, l[y], y, l);
        return h;
      }
      function uf(l, _, h, T) {
        var y = l == null ? 0 : l.length;
        for (T && y && (h = l[--y]); y--; )
          h = _(h, l[y], y, l);
        return h;
      }
      function si(l, _) {
        for (var h = -1, T = l == null ? 0 : l.length; ++h < T; )
          if (_(l[h], h, l))
            return !0;
        return !1;
      }
      var sf = ai("length");
      function af(l) {
        return l.split("");
      }
      function of(l) {
        return l.match(_o) || [];
      }
      function qu(l, _, h) {
        var T;
        return h(l, function(y, M, fe) {
          if (_(y, M, fe))
            return T = M, !1;
        }), T;
      }
      function $n(l, _, h, T) {
        for (var y = l.length, M = h + (T ? 1 : -1); T ? M-- : ++M < y; )
          if (_(l[M], M, l))
            return M;
        return -1;
      }
      function zt(l, _, h) {
        return _ === _ ? Tf(l, _, h) : $n(l, Xu, h);
      }
      function ff(l, _, h, T) {
        for (var y = h - 1, M = l.length; ++y < M; )
          if (T(l[y], _))
            return y;
        return -1;
      }
      function Xu(l) {
        return l !== l;
      }
      function Ju(l, _) {
        var h = l == null ? 0 : l.length;
        return h ? fi(l, _) / h : Wt;
      }
      function ai(l) {
        return function(_) {
          return _ == null ? s : _[l];
        };
      }
      function oi(l) {
        return function(_) {
          return l == null ? s : l[_];
        };
      }
      function zu(l, _, h, T, y) {
        return y(l, function(M, fe, J) {
          h = T ? (T = !1, M) : _(h, M, fe, J);
        }), h;
      }
      function lf(l, _) {
        var h = l.length;
        for (l.sort(_); h--; )
          l[h] = l[h].value;
        return l;
      }
      function fi(l, _) {
        for (var h, T = -1, y = l.length; ++T < y; ) {
          var M = _(l[T]);
          M !== s && (h = h === s ? M : h + M);
        }
        return h;
      }
      function li(l, _) {
        for (var h = -1, T = Array(l); ++h < l; )
          T[h] = _(h);
        return T;
      }
      function cf(l, _) {
        return k(_, function(h) {
          return [h, l[h]];
        });
      }
      function Zu(l) {
        return l && l.slice(0, ju(l) + 1).replace(Vr, "");
      }
      function Fe(l) {
        return function(_) {
          return l(_);
        };
      }
      function ci(l, _) {
        return k(_, function(h) {
          return l[h];
        });
      }
      function dn(l, _) {
        return l.has(_);
      }
      function Vu(l, _) {
        for (var h = -1, T = l.length; ++h < T && zt(_, l[h], 0) > -1; )
          ;
        return h;
      }
      function Qu(l, _) {
        for (var h = l.length; h-- && zt(_, l[h], 0) > -1; )
          ;
        return h;
      }
      function hf(l, _) {
        for (var h = l.length, T = 0; h--; )
          l[h] === _ && ++T;
        return T;
      }
      var gf = oi(Zo), _f = oi(Vo);
      function pf(l) {
        return "\\" + ko[l];
      }
      function df(l, _) {
        return l == null ? s : l[_];
      }
      function Zt(l) {
        return qo.test(l);
      }
      function vf(l) {
        return Xo.test(l);
      }
      function wf(l) {
        for (var _, h = []; !(_ = l.next()).done; )
          h.push(_.value);
        return h;
      }
      function hi(l) {
        var _ = -1, h = Array(l.size);
        return l.forEach(function(T, y) {
          h[++_] = [y, T];
        }), h;
      }
      function ku(l, _) {
        return function(h) {
          return l(_(h));
        };
      }
      function Ct(l, _) {
        for (var h = -1, T = l.length, y = 0, M = []; ++h < T; ) {
          var fe = l[h];
          (fe === _ || fe === oe) && (l[h] = oe, M[y++] = h);
        }
        return M;
      }
      function Hn(l) {
        var _ = -1, h = Array(l.size);
        return l.forEach(function(T) {
          h[++_] = T;
        }), h;
      }
      function Af(l) {
        var _ = -1, h = Array(l.size);
        return l.forEach(function(T) {
          h[++_] = [T, T];
        }), h;
      }
      function Tf(l, _, h) {
        for (var T = h - 1, y = l.length; ++T < y; )
          if (l[T] === _)
            return T;
        return -1;
      }
      function Ef(l, _, h) {
        for (var T = h + 1; T--; )
          if (l[T] === _)
            return T;
        return T;
      }
      function Vt(l) {
        return Zt(l) ? If(l) : sf(l);
      }
      function ke(l) {
        return Zt(l) ? Of(l) : af(l);
      }
      function ju(l) {
        for (var _ = l.length; _-- && lo.test(l.charAt(_)); )
          ;
        return _;
      }
      var mf = oi(Qo);
      function If(l) {
        for (var _ = ti.lastIndex = 0; ti.test(l); )
          ++_;
        return _;
      }
      function Of(l) {
        return l.match(ti) || [];
      }
      function Sf(l) {
        return l.match(Ko) || [];
      }
      var Cf = (function l(_) {
        _ = _ == null ? pe : Qt.defaults(pe.Object(), _, Qt.pick(pe, Jo));
        var h = _.Array, T = _.Date, y = _.Error, M = _.Function, fe = _.Math, J = _.Object, gi = _.RegExp, yf = _.String, Ye = _.TypeError, Kn = h.prototype, Nf = M.prototype, kt = J.prototype, qn = _["__core-js_shared__"], Xn = Nf.toString, K = kt.hasOwnProperty, Lf = 0, es = (function() {
          var e = /[^.]+$/.exec(qn && qn.keys && qn.keys.IE_PROTO || "");
          return e ? "Symbol(src)_1." + e : "";
        })(), Jn = kt.toString, xf = Xn.call(J), Df = pe._, Rf = gi(
          "^" + Xn.call(K).replace(Zr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        ), zn = Gu ? _.Buffer : s, yt = _.Symbol, Zn = _.Uint8Array, ts = zn ? zn.allocUnsafe : s, Vn = ku(J.getPrototypeOf, J), ns = J.create, rs = kt.propertyIsEnumerable, Qn = Kn.splice, is = yt ? yt.isConcatSpreadable : s, vn = yt ? yt.iterator : s, Gt = yt ? yt.toStringTag : s, kn = (function() {
          try {
            var e = $t(J, "defineProperty");
            return e({}, "", {}), e;
          } catch {
          }
        })(), Ff = _.clearTimeout !== pe.clearTimeout && _.clearTimeout, Uf = T && T.now !== pe.Date.now && T.now, Wf = _.setTimeout !== pe.setTimeout && _.setTimeout, jn = fe.ceil, er = fe.floor, _i = J.getOwnPropertySymbols, bf = zn ? zn.isBuffer : s, us = _.isFinite, Gf = Kn.join, Pf = ku(J.keys, J), le = fe.max, we = fe.min, Mf = T.now, Bf = _.parseInt, ss = fe.random, Yf = Kn.reverse, pi = $t(_, "DataView"), wn = $t(_, "Map"), di = $t(_, "Promise"), jt = $t(_, "Set"), An = $t(_, "WeakMap"), Tn = $t(J, "create"), tr = An && new An(), en = {}, $f = Ht(pi), Hf = Ht(wn), Kf = Ht(di), qf = Ht(jt), Xf = Ht(An), nr = yt ? yt.prototype : s, En = nr ? nr.valueOf : s, as = nr ? nr.toString : s;
        function u(e) {
          if (ne(e) && !L(e) && !(e instanceof b)) {
            if (e instanceof $e)
              return e;
            if (K.call(e, "__wrapped__"))
              return oa(e);
          }
          return new $e(e);
        }
        var tn = /* @__PURE__ */ (function() {
          function e() {
          }
          return function(t) {
            if (!te(t))
              return {};
            if (ns)
              return ns(t);
            e.prototype = t;
            var n = new e();
            return e.prototype = s, n;
          };
        })();
        function rr() {
        }
        function $e(e, t) {
          this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = s;
        }
        u.templateSettings = {
          /**
           * Used to detect `data` property values to be HTML-escaped.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          escape: io,
          /**
           * Used to detect code to be evaluated.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          evaluate: uo,
          /**
           * Used to detect `data` property values to inject.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          interpolate: du,
          /**
           * Used to reference the data object in the template text.
           *
           * @memberOf _.templateSettings
           * @type {string}
           */
          variable: "",
          /**
           * Used to import variables into the compiled template.
           *
           * @memberOf _.templateSettings
           * @type {Object}
           */
          imports: {
            /**
             * A reference to the `lodash` function.
             *
             * @memberOf _.templateSettings.imports
             * @type {Function}
             */
            _: u
          }
        }, u.prototype = rr.prototype, u.prototype.constructor = u, $e.prototype = tn(rr.prototype), $e.prototype.constructor = $e;
        function b(e) {
          this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = De, this.__views__ = [];
        }
        function Jf() {
          var e = new b(this.__wrapped__);
          return e.__actions__ = Oe(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = Oe(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = Oe(this.__views__), e;
        }
        function zf() {
          if (this.__filtered__) {
            var e = new b(this);
            e.__dir__ = -1, e.__filtered__ = !0;
          } else
            e = this.clone(), e.__dir__ *= -1;
          return e;
        }
        function Zf() {
          var e = this.__wrapped__.value(), t = this.__dir__, n = L(e), r = t < 0, i = n ? e.length : 0, a = ac(0, i, this.__views__), o = a.start, f = a.end, c = f - o, p = r ? f : o - 1, d = this.__iteratees__, v = d.length, A = 0, E = we(c, this.__takeCount__);
          if (!n || !r && i == c && E == c)
            return Ds(e, this.__actions__);
          var O = [];
          e:
            for (; c-- && A < E; ) {
              p += t;
              for (var D = -1, S = e[p]; ++D < v; ) {
                var F = d[D], G = F.iteratee, be = F.type, Ie = G(S);
                if (be == br)
                  S = Ie;
                else if (!Ie) {
                  if (be == Wn)
                    continue e;
                  break e;
                }
              }
              O[A++] = S;
            }
          return O;
        }
        b.prototype = tn(rr.prototype), b.prototype.constructor = b;
        function Pt(e) {
          var t = -1, n = e == null ? 0 : e.length;
          for (this.clear(); ++t < n; ) {
            var r = e[t];
            this.set(r[0], r[1]);
          }
        }
        function Vf() {
          this.__data__ = Tn ? Tn(null) : {}, this.size = 0;
        }
        function Qf(e) {
          var t = this.has(e) && delete this.__data__[e];
          return this.size -= t ? 1 : 0, t;
        }
        function kf(e) {
          var t = this.__data__;
          if (Tn) {
            var n = t[e];
            return n === it ? s : n;
          }
          return K.call(t, e) ? t[e] : s;
        }
        function jf(e) {
          var t = this.__data__;
          return Tn ? t[e] !== s : K.call(t, e);
        }
        function el(e, t) {
          var n = this.__data__;
          return this.size += this.has(e) ? 0 : 1, n[e] = Tn && t === s ? it : t, this;
        }
        Pt.prototype.clear = Vf, Pt.prototype.delete = Qf, Pt.prototype.get = kf, Pt.prototype.has = jf, Pt.prototype.set = el;
        function gt(e) {
          var t = -1, n = e == null ? 0 : e.length;
          for (this.clear(); ++t < n; ) {
            var r = e[t];
            this.set(r[0], r[1]);
          }
        }
        function tl() {
          this.__data__ = [], this.size = 0;
        }
        function nl(e) {
          var t = this.__data__, n = ir(t, e);
          if (n < 0)
            return !1;
          var r = t.length - 1;
          return n == r ? t.pop() : Qn.call(t, n, 1), --this.size, !0;
        }
        function rl(e) {
          var t = this.__data__, n = ir(t, e);
          return n < 0 ? s : t[n][1];
        }
        function il(e) {
          return ir(this.__data__, e) > -1;
        }
        function ul(e, t) {
          var n = this.__data__, r = ir(n, e);
          return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
        }
        gt.prototype.clear = tl, gt.prototype.delete = nl, gt.prototype.get = rl, gt.prototype.has = il, gt.prototype.set = ul;
        function _t(e) {
          var t = -1, n = e == null ? 0 : e.length;
          for (this.clear(); ++t < n; ) {
            var r = e[t];
            this.set(r[0], r[1]);
          }
        }
        function sl() {
          this.size = 0, this.__data__ = {
            hash: new Pt(),
            map: new (wn || gt)(),
            string: new Pt()
          };
        }
        function al(e) {
          var t = dr(this, e).delete(e);
          return this.size -= t ? 1 : 0, t;
        }
        function ol(e) {
          return dr(this, e).get(e);
        }
        function fl(e) {
          return dr(this, e).has(e);
        }
        function ll(e, t) {
          var n = dr(this, e), r = n.size;
          return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
        }
        _t.prototype.clear = sl, _t.prototype.delete = al, _t.prototype.get = ol, _t.prototype.has = fl, _t.prototype.set = ll;
        function Mt(e) {
          var t = -1, n = e == null ? 0 : e.length;
          for (this.__data__ = new _t(); ++t < n; )
            this.add(e[t]);
        }
        function cl(e) {
          return this.__data__.set(e, it), this;
        }
        function hl(e) {
          return this.__data__.has(e);
        }
        Mt.prototype.add = Mt.prototype.push = cl, Mt.prototype.has = hl;
        function je(e) {
          var t = this.__data__ = new gt(e);
          this.size = t.size;
        }
        function gl() {
          this.__data__ = new gt(), this.size = 0;
        }
        function _l(e) {
          var t = this.__data__, n = t.delete(e);
          return this.size = t.size, n;
        }
        function pl(e) {
          return this.__data__.get(e);
        }
        function dl(e) {
          return this.__data__.has(e);
        }
        function vl(e, t) {
          var n = this.__data__;
          if (n instanceof gt) {
            var r = n.__data__;
            if (!wn || r.length < $ - 1)
              return r.push([e, t]), this.size = ++n.size, this;
            n = this.__data__ = new _t(r);
          }
          return n.set(e, t), this.size = n.size, this;
        }
        je.prototype.clear = gl, je.prototype.delete = _l, je.prototype.get = pl, je.prototype.has = dl, je.prototype.set = vl;
        function os(e, t) {
          var n = L(e), r = !n && Kt(e), i = !n && !r && Rt(e), a = !n && !r && !i && sn(e), o = n || r || i || a, f = o ? li(e.length, yf) : [], c = f.length;
          for (var p in e)
            (t || K.call(e, p)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
            (p == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            i && (p == "offset" || p == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            a && (p == "buffer" || p == "byteLength" || p == "byteOffset") || // Skip index properties.
            wt(p, c))) && f.push(p);
          return f;
        }
        function fs(e) {
          var t = e.length;
          return t ? e[yi(0, t - 1)] : s;
        }
        function wl(e, t) {
          return vr(Oe(e), Bt(t, 0, e.length));
        }
        function Al(e) {
          return vr(Oe(e));
        }
        function vi(e, t, n) {
          (n !== s && !et(e[t], n) || n === s && !(t in e)) && pt(e, t, n);
        }
        function mn(e, t, n) {
          var r = e[t];
          (!(K.call(e, t) && et(r, n)) || n === s && !(t in e)) && pt(e, t, n);
        }
        function ir(e, t) {
          for (var n = e.length; n--; )
            if (et(e[n][0], t))
              return n;
          return -1;
        }
        function Tl(e, t, n, r) {
          return Nt(e, function(i, a, o) {
            t(r, i, n(i), o);
          }), r;
        }
        function ls(e, t) {
          return e && at(t, he(t), e);
        }
        function El(e, t) {
          return e && at(t, Ce(t), e);
        }
        function pt(e, t, n) {
          t == "__proto__" && kn ? kn(e, t, {
            configurable: !0,
            enumerable: !0,
            value: n,
            writable: !0
          }) : e[t] = n;
        }
        function wi(e, t) {
          for (var n = -1, r = t.length, i = h(r), a = e == null; ++n < r; )
            i[n] = a ? s : ki(e, t[n]);
          return i;
        }
        function Bt(e, t, n) {
          return e === e && (n !== s && (e = e <= n ? e : n), t !== s && (e = e >= t ? e : t)), e;
        }
        function He(e, t, n, r, i, a) {
          var o, f = t & W, c = t & j, p = t & ee;
          if (n && (o = i ? n(e, r, i, a) : n(e)), o !== s)
            return o;
          if (!te(e))
            return e;
          var d = L(e);
          if (d) {
            if (o = fc(e), !f)
              return Oe(e, o);
          } else {
            var v = Ae(e), A = v == ln || v == hu;
            if (Rt(e))
              return Us(e, f);
            if (v == ht || v == ct || A && !i) {
              if (o = c || A ? {} : js(e), !f)
                return c ? kl(e, El(o, e)) : Ql(e, ls(o, e));
            } else {
              if (!Z[v])
                return i ? e : {};
              o = lc(e, v, f);
            }
          }
          a || (a = new je());
          var E = a.get(e);
          if (E)
            return E;
          a.set(e, o), Na(e) ? e.forEach(function(S) {
            o.add(He(S, t, n, S, e, a));
          }) : Ca(e) && e.forEach(function(S, F) {
            o.set(F, He(S, t, n, F, e, a));
          });
          var O = p ? c ? Pi : Gi : c ? Ce : he, D = d ? s : O(e);
          return Be(D || e, function(S, F) {
            D && (F = S, S = e[F]), mn(o, F, He(S, t, n, F, e, a));
          }), o;
        }
        function ml(e) {
          var t = he(e);
          return function(n) {
            return cs(n, e, t);
          };
        }
        function cs(e, t, n) {
          var r = n.length;
          if (e == null)
            return !r;
          for (e = J(e); r--; ) {
            var i = n[r], a = t[i], o = e[i];
            if (o === s && !(i in e) || !a(o))
              return !1;
          }
          return !0;
        }
        function hs(e, t, n) {
          if (typeof e != "function")
            throw new Ye(U);
          return Ln(function() {
            e.apply(s, n);
          }, t);
        }
        function In(e, t, n, r) {
          var i = -1, a = Yn, o = !0, f = e.length, c = [], p = t.length;
          if (!f)
            return c;
          n && (t = k(t, Fe(n))), r ? (a = ii, o = !1) : t.length >= $ && (a = dn, o = !1, t = new Mt(t));
          e:
            for (; ++i < f; ) {
              var d = e[i], v = n == null ? d : n(d);
              if (d = r || d !== 0 ? d : 0, o && v === v) {
                for (var A = p; A--; )
                  if (t[A] === v)
                    continue e;
                c.push(d);
              } else a(t, v, r) || c.push(d);
            }
          return c;
        }
        var Nt = Ms(st), gs = Ms(Ti, !0);
        function Il(e, t) {
          var n = !0;
          return Nt(e, function(r, i, a) {
            return n = !!t(r, i, a), n;
          }), n;
        }
        function ur(e, t, n) {
          for (var r = -1, i = e.length; ++r < i; ) {
            var a = e[r], o = t(a);
            if (o != null && (f === s ? o === o && !We(o) : n(o, f)))
              var f = o, c = a;
          }
          return c;
        }
        function Ol(e, t, n, r) {
          var i = e.length;
          for (n = x(n), n < 0 && (n = -n > i ? 0 : i + n), r = r === s || r > i ? i : x(r), r < 0 && (r += i), r = n > r ? 0 : xa(r); n < r; )
            e[n++] = t;
          return e;
        }
        function _s(e, t) {
          var n = [];
          return Nt(e, function(r, i, a) {
            t(r, i, a) && n.push(r);
          }), n;
        }
        function de(e, t, n, r, i) {
          var a = -1, o = e.length;
          for (n || (n = hc), i || (i = []); ++a < o; ) {
            var f = e[a];
            t > 0 && n(f) ? t > 1 ? de(f, t - 1, n, r, i) : St(i, f) : r || (i[i.length] = f);
          }
          return i;
        }
        var Ai = Bs(), ps = Bs(!0);
        function st(e, t) {
          return e && Ai(e, t, he);
        }
        function Ti(e, t) {
          return e && ps(e, t, he);
        }
        function sr(e, t) {
          return Ot(t, function(n) {
            return At(e[n]);
          });
        }
        function Yt(e, t) {
          t = xt(t, e);
          for (var n = 0, r = t.length; e != null && n < r; )
            e = e[ot(t[n++])];
          return n && n == r ? e : s;
        }
        function ds(e, t, n) {
          var r = t(e);
          return L(e) ? r : St(r, n(e));
        }
        function Ee(e) {
          return e == null ? e === s ? Qa : Za : Gt && Gt in J(e) ? sc(e) : Ac(e);
        }
        function Ei(e, t) {
          return e > t;
        }
        function Sl(e, t) {
          return e != null && K.call(e, t);
        }
        function Cl(e, t) {
          return e != null && t in J(e);
        }
        function yl(e, t, n) {
          return e >= we(t, n) && e < le(t, n);
        }
        function mi(e, t, n) {
          for (var r = n ? ii : Yn, i = e[0].length, a = e.length, o = a, f = h(a), c = 1 / 0, p = []; o--; ) {
            var d = e[o];
            o && t && (d = k(d, Fe(t))), c = we(d.length, c), f[o] = !n && (t || i >= 120 && d.length >= 120) ? new Mt(o && d) : s;
          }
          d = e[0];
          var v = -1, A = f[0];
          e:
            for (; ++v < i && p.length < c; ) {
              var E = d[v], O = t ? t(E) : E;
              if (E = n || E !== 0 ? E : 0, !(A ? dn(A, O) : r(p, O, n))) {
                for (o = a; --o; ) {
                  var D = f[o];
                  if (!(D ? dn(D, O) : r(e[o], O, n)))
                    continue e;
                }
                A && A.push(O), p.push(E);
              }
            }
          return p;
        }
        function Nl(e, t, n, r) {
          return st(e, function(i, a, o) {
            t(r, n(i), a, o);
          }), r;
        }
        function On(e, t, n) {
          t = xt(t, e), e = ra(e, t);
          var r = e == null ? e : e[ot(qe(t))];
          return r == null ? s : Re(r, e, n);
        }
        function vs(e) {
          return ne(e) && Ee(e) == ct;
        }
        function Ll(e) {
          return ne(e) && Ee(e) == pn;
        }
        function xl(e) {
          return ne(e) && Ee(e) == q;
        }
        function Sn(e, t, n, r, i) {
          return e === t ? !0 : e == null || t == null || !ne(e) && !ne(t) ? e !== e && t !== t : Dl(e, t, n, r, Sn, i);
        }
        function Dl(e, t, n, r, i, a) {
          var o = L(e), f = L(t), c = o ? w : Ae(e), p = f ? w : Ae(t);
          c = c == ct ? ht : c, p = p == ct ? ht : p;
          var d = c == ht, v = p == ht, A = c == p;
          if (A && Rt(e)) {
            if (!Rt(t))
              return !1;
            o = !0, d = !1;
          }
          if (A && !d)
            return a || (a = new je()), o || sn(e) ? Vs(e, t, n, r, i, a) : ic(e, t, c, n, r, i, a);
          if (!(n & _e)) {
            var E = d && K.call(e, "__wrapped__"), O = v && K.call(t, "__wrapped__");
            if (E || O) {
              var D = E ? e.value() : e, S = O ? t.value() : t;
              return a || (a = new je()), i(D, S, n, r, a);
            }
          }
          return A ? (a || (a = new je()), uc(e, t, n, r, i, a)) : !1;
        }
        function Rl(e) {
          return ne(e) && Ae(e) == Ve;
        }
        function Ii(e, t, n, r) {
          var i = n.length, a = i, o = !r;
          if (e == null)
            return !a;
          for (e = J(e); i--; ) {
            var f = n[i];
            if (o && f[2] ? f[1] !== e[f[0]] : !(f[0] in e))
              return !1;
          }
          for (; ++i < a; ) {
            f = n[i];
            var c = f[0], p = e[c], d = f[1];
            if (o && f[2]) {
              if (p === s && !(c in e))
                return !1;
            } else {
              var v = new je();
              if (r)
                var A = r(p, d, c, e, t, v);
              if (!(A === s ? Sn(d, p, _e | Te, r, v) : A))
                return !1;
            }
          }
          return !0;
        }
        function ws(e) {
          if (!te(e) || _c(e))
            return !1;
          var t = At(e) ? Rf : Eo;
          return t.test(Ht(e));
        }
        function Fl(e) {
          return ne(e) && Ee(e) == hn;
        }
        function Ul(e) {
          return ne(e) && Ae(e) == Qe;
        }
        function Wl(e) {
          return ne(e) && Ir(e.length) && !!V[Ee(e)];
        }
        function As(e) {
          return typeof e == "function" ? e : e == null ? ye : typeof e == "object" ? L(e) ? ms(e[0], e[1]) : Es(e) : Ya(e);
        }
        function Oi(e) {
          if (!Nn(e))
            return Pf(e);
          var t = [];
          for (var n in J(e))
            K.call(e, n) && n != "constructor" && t.push(n);
          return t;
        }
        function bl(e) {
          if (!te(e))
            return wc(e);
          var t = Nn(e), n = [];
          for (var r in e)
            r == "constructor" && (t || !K.call(e, r)) || n.push(r);
          return n;
        }
        function Si(e, t) {
          return e < t;
        }
        function Ts(e, t) {
          var n = -1, r = Se(e) ? h(e.length) : [];
          return Nt(e, function(i, a, o) {
            r[++n] = t(i, a, o);
          }), r;
        }
        function Es(e) {
          var t = Bi(e);
          return t.length == 1 && t[0][2] ? ta(t[0][0], t[0][1]) : function(n) {
            return n === e || Ii(n, e, t);
          };
        }
        function ms(e, t) {
          return $i(e) && ea(t) ? ta(ot(e), t) : function(n) {
            var r = ki(n, e);
            return r === s && r === t ? ji(n, e) : Sn(t, r, _e | Te);
          };
        }
        function ar(e, t, n, r, i) {
          e !== t && Ai(t, function(a, o) {
            if (i || (i = new je()), te(a))
              Gl(e, t, o, n, ar, r, i);
            else {
              var f = r ? r(Ki(e, o), a, o + "", e, t, i) : s;
              f === s && (f = a), vi(e, o, f);
            }
          }, Ce);
        }
        function Gl(e, t, n, r, i, a, o) {
          var f = Ki(e, n), c = Ki(t, n), p = o.get(c);
          if (p) {
            vi(e, n, p);
            return;
          }
          var d = a ? a(f, c, n + "", e, t, o) : s, v = d === s;
          if (v) {
            var A = L(c), E = !A && Rt(c), O = !A && !E && sn(c);
            d = c, A || E || O ? L(f) ? d = f : ie(f) ? d = Oe(f) : E ? (v = !1, d = Us(c, !0)) : O ? (v = !1, d = Ws(c, !0)) : d = [] : xn(c) || Kt(c) ? (d = f, Kt(f) ? d = Da(f) : (!te(f) || At(f)) && (d = js(c))) : v = !1;
          }
          v && (o.set(c, d), i(d, c, r, a, o), o.delete(c)), vi(e, n, d);
        }
        function Is(e, t) {
          var n = e.length;
          if (n)
            return t += t < 0 ? n : 0, wt(t, n) ? e[t] : s;
        }
        function Os(e, t, n) {
          t.length ? t = k(t, function(a) {
            return L(a) ? function(o) {
              return Yt(o, a.length === 1 ? a[0] : a);
            } : a;
          }) : t = [ye];
          var r = -1;
          t = k(t, Fe(I()));
          var i = Ts(e, function(a, o, f) {
            var c = k(t, function(p) {
              return p(a);
            });
            return { criteria: c, index: ++r, value: a };
          });
          return lf(i, function(a, o) {
            return Vl(a, o, n);
          });
        }
        function Pl(e, t) {
          return Ss(e, t, function(n, r) {
            return ji(e, r);
          });
        }
        function Ss(e, t, n) {
          for (var r = -1, i = t.length, a = {}; ++r < i; ) {
            var o = t[r], f = Yt(e, o);
            n(f, o) && Cn(a, xt(o, e), f);
          }
          return a;
        }
        function Ml(e) {
          return function(t) {
            return Yt(t, e);
          };
        }
        function Ci(e, t, n, r) {
          var i = r ? ff : zt, a = -1, o = t.length, f = e;
          for (e === t && (t = Oe(t)), n && (f = k(e, Fe(n))); ++a < o; )
            for (var c = 0, p = t[a], d = n ? n(p) : p; (c = i(f, d, c, r)) > -1; )
              f !== e && Qn.call(f, c, 1), Qn.call(e, c, 1);
          return e;
        }
        function Cs(e, t) {
          for (var n = e ? t.length : 0, r = n - 1; n--; ) {
            var i = t[n];
            if (n == r || i !== a) {
              var a = i;
              wt(i) ? Qn.call(e, i, 1) : xi(e, i);
            }
          }
          return e;
        }
        function yi(e, t) {
          return e + er(ss() * (t - e + 1));
        }
        function Bl(e, t, n, r) {
          for (var i = -1, a = le(jn((t - e) / (n || 1)), 0), o = h(a); a--; )
            o[r ? a : ++i] = e, e += n;
          return o;
        }
        function Ni(e, t) {
          var n = "";
          if (!e || t < 1 || t > ut)
            return n;
          do
            t % 2 && (n += e), t = er(t / 2), t && (e += e);
          while (t);
          return n;
        }
        function R(e, t) {
          return qi(na(e, t, ye), e + "");
        }
        function Yl(e) {
          return fs(an(e));
        }
        function $l(e, t) {
          var n = an(e);
          return vr(n, Bt(t, 0, n.length));
        }
        function Cn(e, t, n, r) {
          if (!te(e))
            return e;
          t = xt(t, e);
          for (var i = -1, a = t.length, o = a - 1, f = e; f != null && ++i < a; ) {
            var c = ot(t[i]), p = n;
            if (c === "__proto__" || c === "constructor" || c === "prototype")
              return e;
            if (i != o) {
              var d = f[c];
              p = r ? r(d, c, f) : s, p === s && (p = te(d) ? d : wt(t[i + 1]) ? [] : {});
            }
            mn(f, c, p), f = f[c];
          }
          return e;
        }
        var ys = tr ? function(e, t) {
          return tr.set(e, t), e;
        } : ye, Hl = kn ? function(e, t) {
          return kn(e, "toString", {
            configurable: !0,
            enumerable: !1,
            value: tu(t),
            writable: !0
          });
        } : ye;
        function Kl(e) {
          return vr(an(e));
        }
        function Ke(e, t, n) {
          var r = -1, i = e.length;
          t < 0 && (t = -t > i ? 0 : i + t), n = n > i ? i : n, n < 0 && (n += i), i = t > n ? 0 : n - t >>> 0, t >>>= 0;
          for (var a = h(i); ++r < i; )
            a[r] = e[r + t];
          return a;
        }
        function ql(e, t) {
          var n;
          return Nt(e, function(r, i, a) {
            return n = t(r, i, a), !n;
          }), !!n;
        }
        function or(e, t, n) {
          var r = 0, i = e == null ? r : e.length;
          if (typeof t == "number" && t === t && i <= Pr) {
            for (; r < i; ) {
              var a = r + i >>> 1, o = e[a];
              o !== null && !We(o) && (n ? o <= t : o < t) ? r = a + 1 : i = a;
            }
            return i;
          }
          return Li(e, t, ye, n);
        }
        function Li(e, t, n, r) {
          var i = 0, a = e == null ? 0 : e.length;
          if (a === 0)
            return 0;
          t = n(t);
          for (var o = t !== t, f = t === null, c = We(t), p = t === s; i < a; ) {
            var d = er((i + a) / 2), v = n(e[d]), A = v !== s, E = v === null, O = v === v, D = We(v);
            if (o)
              var S = r || O;
            else p ? S = O && (r || A) : f ? S = O && A && (r || !E) : c ? S = O && A && !E && (r || !D) : E || D ? S = !1 : S = r ? v <= t : v < t;
            S ? i = d + 1 : a = d;
          }
          return we(a, Gr);
        }
        function Ns(e, t) {
          for (var n = -1, r = e.length, i = 0, a = []; ++n < r; ) {
            var o = e[n], f = t ? t(o) : o;
            if (!n || !et(f, c)) {
              var c = f;
              a[i++] = o === 0 ? 0 : o;
            }
          }
          return a;
        }
        function Ls(e) {
          return typeof e == "number" ? e : We(e) ? Wt : +e;
        }
        function Ue(e) {
          if (typeof e == "string")
            return e;
          if (L(e))
            return k(e, Ue) + "";
          if (We(e))
            return as ? as.call(e) : "";
          var t = e + "";
          return t == "0" && 1 / e == -lt ? "-0" : t;
        }
        function Lt(e, t, n) {
          var r = -1, i = Yn, a = e.length, o = !0, f = [], c = f;
          if (n)
            o = !1, i = ii;
          else if (a >= $) {
            var p = t ? null : nc(e);
            if (p)
              return Hn(p);
            o = !1, i = dn, c = new Mt();
          } else
            c = t ? [] : f;
          e:
            for (; ++r < a; ) {
              var d = e[r], v = t ? t(d) : d;
              if (d = n || d !== 0 ? d : 0, o && v === v) {
                for (var A = c.length; A--; )
                  if (c[A] === v)
                    continue e;
                t && c.push(v), f.push(d);
              } else i(c, v, n) || (c !== f && c.push(v), f.push(d));
            }
          return f;
        }
        function xi(e, t) {
          return t = xt(t, e), e = ra(e, t), e == null || delete e[ot(qe(t))];
        }
        function xs(e, t, n, r) {
          return Cn(e, t, n(Yt(e, t)), r);
        }
        function fr(e, t, n, r) {
          for (var i = e.length, a = r ? i : -1; (r ? a-- : ++a < i) && t(e[a], a, e); )
            ;
          return n ? Ke(e, r ? 0 : a, r ? a + 1 : i) : Ke(e, r ? a + 1 : 0, r ? i : a);
        }
        function Ds(e, t) {
          var n = e;
          return n instanceof b && (n = n.value()), ui(t, function(r, i) {
            return i.func.apply(i.thisArg, St([r], i.args));
          }, n);
        }
        function Di(e, t, n) {
          var r = e.length;
          if (r < 2)
            return r ? Lt(e[0]) : [];
          for (var i = -1, a = h(r); ++i < r; )
            for (var o = e[i], f = -1; ++f < r; )
              f != i && (a[i] = In(a[i] || o, e[f], t, n));
          return Lt(de(a, 1), t, n);
        }
        function Rs(e, t, n) {
          for (var r = -1, i = e.length, a = t.length, o = {}; ++r < i; ) {
            var f = r < a ? t[r] : s;
            n(o, e[r], f);
          }
          return o;
        }
        function Ri(e) {
          return ie(e) ? e : [];
        }
        function Fi(e) {
          return typeof e == "function" ? e : ye;
        }
        function xt(e, t) {
          return L(e) ? e : $i(e, t) ? [e] : aa(B(e));
        }
        var Xl = R;
        function Dt(e, t, n) {
          var r = e.length;
          return n = n === s ? r : n, !t && n >= r ? e : Ke(e, t, n);
        }
        var Fs = Ff || function(e) {
          return pe.clearTimeout(e);
        };
        function Us(e, t) {
          if (t)
            return e.slice();
          var n = e.length, r = ts ? ts(n) : new e.constructor(n);
          return e.copy(r), r;
        }
        function Ui(e) {
          var t = new e.constructor(e.byteLength);
          return new Zn(t).set(new Zn(e)), t;
        }
        function Jl(e, t) {
          var n = t ? Ui(e.buffer) : e.buffer;
          return new e.constructor(n, e.byteOffset, e.byteLength);
        }
        function zl(e) {
          var t = new e.constructor(e.source, vu.exec(e));
          return t.lastIndex = e.lastIndex, t;
        }
        function Zl(e) {
          return En ? J(En.call(e)) : {};
        }
        function Ws(e, t) {
          var n = t ? Ui(e.buffer) : e.buffer;
          return new e.constructor(n, e.byteOffset, e.length);
        }
        function bs(e, t) {
          if (e !== t) {
            var n = e !== s, r = e === null, i = e === e, a = We(e), o = t !== s, f = t === null, c = t === t, p = We(t);
            if (!f && !p && !a && e > t || a && o && c && !f && !p || r && o && c || !n && c || !i)
              return 1;
            if (!r && !a && !p && e < t || p && n && i && !r && !a || f && n && i || !o && i || !c)
              return -1;
          }
          return 0;
        }
        function Vl(e, t, n) {
          for (var r = -1, i = e.criteria, a = t.criteria, o = i.length, f = n.length; ++r < o; ) {
            var c = bs(i[r], a[r]);
            if (c) {
              if (r >= f)
                return c;
              var p = n[r];
              return c * (p == "desc" ? -1 : 1);
            }
          }
          return e.index - t.index;
        }
        function Gs(e, t, n, r) {
          for (var i = -1, a = e.length, o = n.length, f = -1, c = t.length, p = le(a - o, 0), d = h(c + p), v = !r; ++f < c; )
            d[f] = t[f];
          for (; ++i < o; )
            (v || i < a) && (d[n[i]] = e[i]);
          for (; p--; )
            d[f++] = e[i++];
          return d;
        }
        function Ps(e, t, n, r) {
          for (var i = -1, a = e.length, o = -1, f = n.length, c = -1, p = t.length, d = le(a - f, 0), v = h(d + p), A = !r; ++i < d; )
            v[i] = e[i];
          for (var E = i; ++c < p; )
            v[E + c] = t[c];
          for (; ++o < f; )
            (A || i < a) && (v[E + n[o]] = e[i++]);
          return v;
        }
        function Oe(e, t) {
          var n = -1, r = e.length;
          for (t || (t = h(r)); ++n < r; )
            t[n] = e[n];
          return t;
        }
        function at(e, t, n, r) {
          var i = !n;
          n || (n = {});
          for (var a = -1, o = t.length; ++a < o; ) {
            var f = t[a], c = r ? r(n[f], e[f], f, n, e) : s;
            c === s && (c = e[f]), i ? pt(n, f, c) : mn(n, f, c);
          }
          return n;
        }
        function Ql(e, t) {
          return at(e, Yi(e), t);
        }
        function kl(e, t) {
          return at(e, Qs(e), t);
        }
        function lr(e, t) {
          return function(n, r) {
            var i = L(n) ? nf : Tl, a = t ? t() : {};
            return i(n, e, I(r, 2), a);
          };
        }
        function nn(e) {
          return R(function(t, n) {
            var r = -1, i = n.length, a = i > 1 ? n[i - 1] : s, o = i > 2 ? n[2] : s;
            for (a = e.length > 3 && typeof a == "function" ? (i--, a) : s, o && me(n[0], n[1], o) && (a = i < 3 ? s : a, i = 1), t = J(t); ++r < i; ) {
              var f = n[r];
              f && e(t, f, r, a);
            }
            return t;
          });
        }
        function Ms(e, t) {
          return function(n, r) {
            if (n == null)
              return n;
            if (!Se(n))
              return e(n, r);
            for (var i = n.length, a = t ? i : -1, o = J(n); (t ? a-- : ++a < i) && r(o[a], a, o) !== !1; )
              ;
            return n;
          };
        }
        function Bs(e) {
          return function(t, n, r) {
            for (var i = -1, a = J(t), o = r(t), f = o.length; f--; ) {
              var c = o[e ? f : ++i];
              if (n(a[c], c, a) === !1)
                break;
            }
            return t;
          };
        }
        function jl(e, t, n) {
          var r = t & z, i = yn(e);
          function a() {
            var o = this && this !== pe && this instanceof a ? i : e;
            return o.apply(r ? n : this, arguments);
          }
          return a;
        }
        function Ys(e) {
          return function(t) {
            t = B(t);
            var n = Zt(t) ? ke(t) : s, r = n ? n[0] : t.charAt(0), i = n ? Dt(n, 1).join("") : t.slice(1);
            return r[e]() + i;
          };
        }
        function rn(e) {
          return function(t) {
            return ui(Ma(Pa(t).replace($o, "")), e, "");
          };
        }
        function yn(e) {
          return function() {
            var t = arguments;
            switch (t.length) {
              case 0:
                return new e();
              case 1:
                return new e(t[0]);
              case 2:
                return new e(t[0], t[1]);
              case 3:
                return new e(t[0], t[1], t[2]);
              case 4:
                return new e(t[0], t[1], t[2], t[3]);
              case 5:
                return new e(t[0], t[1], t[2], t[3], t[4]);
              case 6:
                return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
              case 7:
                return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
            }
            var n = tn(e.prototype), r = e.apply(n, t);
            return te(r) ? r : n;
          };
        }
        function ec(e, t, n) {
          var r = yn(e);
          function i() {
            for (var a = arguments.length, o = h(a), f = a, c = un(i); f--; )
              o[f] = arguments[f];
            var p = a < 3 && o[0] !== c && o[a - 1] !== c ? [] : Ct(o, c);
            if (a -= p.length, a < n)
              return Xs(
                e,
                t,
                cr,
                i.placeholder,
                s,
                o,
                p,
                s,
                s,
                n - a
              );
            var d = this && this !== pe && this instanceof i ? r : e;
            return Re(d, this, o);
          }
          return i;
        }
        function $s(e) {
          return function(t, n, r) {
            var i = J(t);
            if (!Se(t)) {
              var a = I(n, 3);
              t = he(t), n = function(f) {
                return a(i[f], f, i);
              };
            }
            var o = e(t, n, r);
            return o > -1 ? i[a ? t[o] : o] : s;
          };
        }
        function Hs(e) {
          return vt(function(t) {
            var n = t.length, r = n, i = $e.prototype.thru;
            for (e && t.reverse(); r--; ) {
              var a = t[r];
              if (typeof a != "function")
                throw new Ye(U);
              if (i && !o && pr(a) == "wrapper")
                var o = new $e([], !0);
            }
            for (r = o ? r : n; ++r < n; ) {
              a = t[r];
              var f = pr(a), c = f == "wrapper" ? Mi(a) : s;
              c && Hi(c[0]) && c[1] == (Pe | xe | Ze | Ut) && !c[4].length && c[9] == 1 ? o = o[pr(c[0])].apply(o, c[3]) : o = a.length == 1 && Hi(a) ? o[f]() : o.thru(a);
            }
            return function() {
              var p = arguments, d = p[0];
              if (o && p.length == 1 && L(d))
                return o.plant(d).value();
              for (var v = 0, A = n ? t[v].apply(this, p) : d; ++v < n; )
                A = t[v].call(this, A);
              return A;
            };
          });
        }
        function cr(e, t, n, r, i, a, o, f, c, p) {
          var d = t & Pe, v = t & z, A = t & ce, E = t & (xe | It), O = t & on, D = A ? s : yn(e);
          function S() {
            for (var F = arguments.length, G = h(F), be = F; be--; )
              G[be] = arguments[be];
            if (E)
              var Ie = un(S), Ge = hf(G, Ie);
            if (r && (G = Gs(G, r, i, E)), a && (G = Ps(G, a, o, E)), F -= Ge, E && F < p) {
              var ue = Ct(G, Ie);
              return Xs(
                e,
                t,
                cr,
                S.placeholder,
                n,
                G,
                ue,
                f,
                c,
                p - F
              );
            }
            var tt = v ? n : this, Et = A ? tt[e] : e;
            return F = G.length, f ? G = Tc(G, f) : O && F > 1 && G.reverse(), d && c < F && (G.length = c), this && this !== pe && this instanceof S && (Et = D || yn(Et)), Et.apply(tt, G);
          }
          return S;
        }
        function Ks(e, t) {
          return function(n, r) {
            return Nl(n, e, t(r), {});
          };
        }
        function hr(e, t) {
          return function(n, r) {
            var i;
            if (n === s && r === s)
              return t;
            if (n !== s && (i = n), r !== s) {
              if (i === s)
                return r;
              typeof n == "string" || typeof r == "string" ? (n = Ue(n), r = Ue(r)) : (n = Ls(n), r = Ls(r)), i = e(n, r);
            }
            return i;
          };
        }
        function Wi(e) {
          return vt(function(t) {
            return t = k(t, Fe(I())), R(function(n) {
              var r = this;
              return e(t, function(i) {
                return Re(i, r, n);
              });
            });
          });
        }
        function gr(e, t) {
          t = t === s ? " " : Ue(t);
          var n = t.length;
          if (n < 2)
            return n ? Ni(t, e) : t;
          var r = Ni(t, jn(e / Vt(t)));
          return Zt(t) ? Dt(ke(r), 0, e).join("") : r.slice(0, e);
        }
        function tc(e, t, n, r) {
          var i = t & z, a = yn(e);
          function o() {
            for (var f = -1, c = arguments.length, p = -1, d = r.length, v = h(d + c), A = this && this !== pe && this instanceof o ? a : e; ++p < d; )
              v[p] = r[p];
            for (; c--; )
              v[p++] = arguments[++f];
            return Re(A, i ? n : this, v);
          }
          return o;
        }
        function qs(e) {
          return function(t, n, r) {
            return r && typeof r != "number" && me(t, n, r) && (n = r = s), t = Tt(t), n === s ? (n = t, t = 0) : n = Tt(n), r = r === s ? t < n ? 1 : -1 : Tt(r), Bl(t, n, r, e);
          };
        }
        function _r(e) {
          return function(t, n) {
            return typeof t == "string" && typeof n == "string" || (t = Xe(t), n = Xe(n)), e(t, n);
          };
        }
        function Xs(e, t, n, r, i, a, o, f, c, p) {
          var d = t & xe, v = d ? o : s, A = d ? s : o, E = d ? a : s, O = d ? s : a;
          t |= d ? Ze : re, t &= ~(d ? re : Ze), t & Ft || (t &= -4);
          var D = [
            e,
            t,
            i,
            E,
            v,
            O,
            A,
            f,
            c,
            p
          ], S = n.apply(s, D);
          return Hi(e) && ia(S, D), S.placeholder = r, ua(S, e, t);
        }
        function bi(e) {
          var t = fe[e];
          return function(n, r) {
            if (n = Xe(n), r = r == null ? 0 : we(x(r), 292), r && us(n)) {
              var i = (B(n) + "e").split("e"), a = t(i[0] + "e" + (+i[1] + r));
              return i = (B(a) + "e").split("e"), +(i[0] + "e" + (+i[1] - r));
            }
            return t(n);
          };
        }
        var nc = jt && 1 / Hn(new jt([, -0]))[1] == lt ? function(e) {
          return new jt(e);
        } : iu;
        function Js(e) {
          return function(t) {
            var n = Ae(t);
            return n == Ve ? hi(t) : n == Qe ? Af(t) : cf(t, e(t));
          };
        }
        function dt(e, t, n, r, i, a, o, f) {
          var c = t & ce;
          if (!c && typeof e != "function")
            throw new Ye(U);
          var p = r ? r.length : 0;
          if (p || (t &= -97, r = i = s), o = o === s ? o : le(x(o), 0), f = f === s ? f : x(f), p -= i ? i.length : 0, t & re) {
            var d = r, v = i;
            r = i = s;
          }
          var A = c ? s : Mi(e), E = [
            e,
            t,
            n,
            r,
            i,
            d,
            v,
            a,
            o,
            f
          ];
          if (A && vc(E, A), e = E[0], t = E[1], n = E[2], r = E[3], i = E[4], f = E[9] = E[9] === s ? c ? 0 : e.length : le(E[9] - p, 0), !f && t & (xe | It) && (t &= -25), !t || t == z)
            var O = jl(e, t, n);
          else t == xe || t == It ? O = ec(e, t, f) : (t == Ze || t == (z | Ze)) && !i.length ? O = tc(e, t, n, r) : O = cr.apply(s, E);
          var D = A ? ys : ia;
          return ua(D(O, E), e, t);
        }
        function zs(e, t, n, r) {
          return e === s || et(e, kt[n]) && !K.call(r, n) ? t : e;
        }
        function Zs(e, t, n, r, i, a) {
          return te(e) && te(t) && (a.set(t, e), ar(e, t, s, Zs, a), a.delete(t)), e;
        }
        function rc(e) {
          return xn(e) ? s : e;
        }
        function Vs(e, t, n, r, i, a) {
          var o = n & _e, f = e.length, c = t.length;
          if (f != c && !(o && c > f))
            return !1;
          var p = a.get(e), d = a.get(t);
          if (p && d)
            return p == t && d == e;
          var v = -1, A = !0, E = n & Te ? new Mt() : s;
          for (a.set(e, t), a.set(t, e); ++v < f; ) {
            var O = e[v], D = t[v];
            if (r)
              var S = o ? r(D, O, v, t, e, a) : r(O, D, v, e, t, a);
            if (S !== s) {
              if (S)
                continue;
              A = !1;
              break;
            }
            if (E) {
              if (!si(t, function(F, G) {
                if (!dn(E, G) && (O === F || i(O, F, n, r, a)))
                  return E.push(G);
              })) {
                A = !1;
                break;
              }
            } else if (!(O === D || i(O, D, n, r, a))) {
              A = !1;
              break;
            }
          }
          return a.delete(e), a.delete(t), A;
        }
        function ic(e, t, n, r, i, a, o) {
          switch (n) {
            case Xt:
              if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
                return !1;
              e = e.buffer, t = t.buffer;
            case pn:
              return !(e.byteLength != t.byteLength || !a(new Zn(e), new Zn(t)));
            case C:
            case q:
            case cn:
              return et(+e, +t);
            case qt:
              return e.name == t.name && e.message == t.message;
            case hn:
            case gn:
              return e == t + "";
            case Ve:
              var f = hi;
            case Qe:
              var c = r & _e;
              if (f || (f = Hn), e.size != t.size && !c)
                return !1;
              var p = o.get(e);
              if (p)
                return p == t;
              r |= Te, o.set(e, t);
              var d = Vs(f(e), f(t), r, i, a, o);
              return o.delete(e), d;
            case Gn:
              if (En)
                return En.call(e) == En.call(t);
          }
          return !1;
        }
        function uc(e, t, n, r, i, a) {
          var o = n & _e, f = Gi(e), c = f.length, p = Gi(t), d = p.length;
          if (c != d && !o)
            return !1;
          for (var v = c; v--; ) {
            var A = f[v];
            if (!(o ? A in t : K.call(t, A)))
              return !1;
          }
          var E = a.get(e), O = a.get(t);
          if (E && O)
            return E == t && O == e;
          var D = !0;
          a.set(e, t), a.set(t, e);
          for (var S = o; ++v < c; ) {
            A = f[v];
            var F = e[A], G = t[A];
            if (r)
              var be = o ? r(G, F, A, t, e, a) : r(F, G, A, e, t, a);
            if (!(be === s ? F === G || i(F, G, n, r, a) : be)) {
              D = !1;
              break;
            }
            S || (S = A == "constructor");
          }
          if (D && !S) {
            var Ie = e.constructor, Ge = t.constructor;
            Ie != Ge && "constructor" in e && "constructor" in t && !(typeof Ie == "function" && Ie instanceof Ie && typeof Ge == "function" && Ge instanceof Ge) && (D = !1);
          }
          return a.delete(e), a.delete(t), D;
        }
        function vt(e) {
          return qi(na(e, s, ca), e + "");
        }
        function Gi(e) {
          return ds(e, he, Yi);
        }
        function Pi(e) {
          return ds(e, Ce, Qs);
        }
        var Mi = tr ? function(e) {
          return tr.get(e);
        } : iu;
        function pr(e) {
          for (var t = e.name + "", n = en[t], r = K.call(en, t) ? n.length : 0; r--; ) {
            var i = n[r], a = i.func;
            if (a == null || a == e)
              return i.name;
          }
          return t;
        }
        function un(e) {
          var t = K.call(u, "placeholder") ? u : e;
          return t.placeholder;
        }
        function I() {
          var e = u.iteratee || nu;
          return e = e === nu ? As : e, arguments.length ? e(arguments[0], arguments[1]) : e;
        }
        function dr(e, t) {
          var n = e.__data__;
          return gc(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
        }
        function Bi(e) {
          for (var t = he(e), n = t.length; n--; ) {
            var r = t[n], i = e[r];
            t[n] = [r, i, ea(i)];
          }
          return t;
        }
        function $t(e, t) {
          var n = df(e, t);
          return ws(n) ? n : s;
        }
        function sc(e) {
          var t = K.call(e, Gt), n = e[Gt];
          try {
            e[Gt] = s;
            var r = !0;
          } catch {
          }
          var i = Jn.call(e);
          return r && (t ? e[Gt] = n : delete e[Gt]), i;
        }
        var Yi = _i ? function(e) {
          return e == null ? [] : (e = J(e), Ot(_i(e), function(t) {
            return rs.call(e, t);
          }));
        } : uu, Qs = _i ? function(e) {
          for (var t = []; e; )
            St(t, Yi(e)), e = Vn(e);
          return t;
        } : uu, Ae = Ee;
        (pi && Ae(new pi(new ArrayBuffer(1))) != Xt || wn && Ae(new wn()) != Ve || di && Ae(di.resolve()) != gu || jt && Ae(new jt()) != Qe || An && Ae(new An()) != _n) && (Ae = function(e) {
          var t = Ee(e), n = t == ht ? e.constructor : s, r = n ? Ht(n) : "";
          if (r)
            switch (r) {
              case $f:
                return Xt;
              case Hf:
                return Ve;
              case Kf:
                return gu;
              case qf:
                return Qe;
              case Xf:
                return _n;
            }
          return t;
        });
        function ac(e, t, n) {
          for (var r = -1, i = n.length; ++r < i; ) {
            var a = n[r], o = a.size;
            switch (a.type) {
              case "drop":
                e += o;
                break;
              case "dropRight":
                t -= o;
                break;
              case "take":
                t = we(t, e + o);
                break;
              case "takeRight":
                e = le(e, t - o);
                break;
            }
          }
          return { start: e, end: t };
        }
        function oc(e) {
          var t = e.match(ho);
          return t ? t[1].split(go) : [];
        }
        function ks(e, t, n) {
          t = xt(t, e);
          for (var r = -1, i = t.length, a = !1; ++r < i; ) {
            var o = ot(t[r]);
            if (!(a = e != null && n(e, o)))
              break;
            e = e[o];
          }
          return a || ++r != i ? a : (i = e == null ? 0 : e.length, !!i && Ir(i) && wt(o, i) && (L(e) || Kt(e)));
        }
        function fc(e) {
          var t = e.length, n = new e.constructor(t);
          return t && typeof e[0] == "string" && K.call(e, "index") && (n.index = e.index, n.input = e.input), n;
        }
        function js(e) {
          return typeof e.constructor == "function" && !Nn(e) ? tn(Vn(e)) : {};
        }
        function lc(e, t, n) {
          var r = e.constructor;
          switch (t) {
            case pn:
              return Ui(e);
            case C:
            case q:
              return new r(+e);
            case Xt:
              return Jl(e, n);
            case Br:
            case Yr:
            case $r:
            case Hr:
            case Kr:
            case qr:
            case Xr:
            case Jr:
            case zr:
              return Ws(e, n);
            case Ve:
              return new r();
            case cn:
            case gn:
              return new r(e);
            case hn:
              return zl(e);
            case Qe:
              return new r();
            case Gn:
              return Zl(e);
          }
        }
        function cc(e, t) {
          var n = t.length;
          if (!n)
            return e;
          var r = n - 1;
          return t[r] = (n > 1 ? "& " : "") + t[r], t = t.join(n > 2 ? ", " : " "), e.replace(co, `{
/* [wrapped with ` + t + `] */
`);
        }
        function hc(e) {
          return L(e) || Kt(e) || !!(is && e && e[is]);
        }
        function wt(e, t) {
          var n = typeof e;
          return t = t ?? ut, !!t && (n == "number" || n != "symbol" && Io.test(e)) && e > -1 && e % 1 == 0 && e < t;
        }
        function me(e, t, n) {
          if (!te(n))
            return !1;
          var r = typeof t;
          return (r == "number" ? Se(n) && wt(t, n.length) : r == "string" && t in n) ? et(n[t], e) : !1;
        }
        function $i(e, t) {
          if (L(e))
            return !1;
          var n = typeof e;
          return n == "number" || n == "symbol" || n == "boolean" || e == null || We(e) ? !0 : ao.test(e) || !so.test(e) || t != null && e in J(t);
        }
        function gc(e) {
          var t = typeof e;
          return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
        }
        function Hi(e) {
          var t = pr(e), n = u[t];
          if (typeof n != "function" || !(t in b.prototype))
            return !1;
          if (e === n)
            return !0;
          var r = Mi(n);
          return !!r && e === r[0];
        }
        function _c(e) {
          return !!es && es in e;
        }
        var pc = qn ? At : su;
        function Nn(e) {
          var t = e && e.constructor, n = typeof t == "function" && t.prototype || kt;
          return e === n;
        }
        function ea(e) {
          return e === e && !te(e);
        }
        function ta(e, t) {
          return function(n) {
            return n == null ? !1 : n[e] === t && (t !== s || e in J(n));
          };
        }
        function dc(e) {
          var t = Er(e, function(r) {
            return n.size === ft && n.clear(), r;
          }), n = t.cache;
          return t;
        }
        function vc(e, t) {
          var n = e[1], r = t[1], i = n | r, a = i < (z | ce | Pe), o = r == Pe && n == xe || r == Pe && n == Ut && e[7].length <= t[8] || r == (Pe | Ut) && t[7].length <= t[8] && n == xe;
          if (!(a || o))
            return e;
          r & z && (e[2] = t[2], i |= n & z ? 0 : Ft);
          var f = t[3];
          if (f) {
            var c = e[3];
            e[3] = c ? Gs(c, f, t[4]) : f, e[4] = c ? Ct(e[3], oe) : t[4];
          }
          return f = t[5], f && (c = e[5], e[5] = c ? Ps(c, f, t[6]) : f, e[6] = c ? Ct(e[5], oe) : t[6]), f = t[7], f && (e[7] = f), r & Pe && (e[8] = e[8] == null ? t[8] : we(e[8], t[8])), e[9] == null && (e[9] = t[9]), e[0] = t[0], e[1] = i, e;
        }
        function wc(e) {
          var t = [];
          if (e != null)
            for (var n in J(e))
              t.push(n);
          return t;
        }
        function Ac(e) {
          return Jn.call(e);
        }
        function na(e, t, n) {
          return t = le(t === s ? e.length - 1 : t, 0), function() {
            for (var r = arguments, i = -1, a = le(r.length - t, 0), o = h(a); ++i < a; )
              o[i] = r[t + i];
            i = -1;
            for (var f = h(t + 1); ++i < t; )
              f[i] = r[i];
            return f[t] = n(o), Re(e, this, f);
          };
        }
        function ra(e, t) {
          return t.length < 2 ? e : Yt(e, Ke(t, 0, -1));
        }
        function Tc(e, t) {
          for (var n = e.length, r = we(t.length, n), i = Oe(e); r--; ) {
            var a = t[r];
            e[r] = wt(a, n) ? i[a] : s;
          }
          return e;
        }
        function Ki(e, t) {
          if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
            return e[t];
        }
        var ia = sa(ys), Ln = Wf || function(e, t) {
          return pe.setTimeout(e, t);
        }, qi = sa(Hl);
        function ua(e, t, n) {
          var r = t + "";
          return qi(e, cc(r, Ec(oc(r), n)));
        }
        function sa(e) {
          var t = 0, n = 0;
          return function() {
            var r = Mf(), i = Wr - (r - n);
            if (n = r, i > 0) {
              if (++t >= Ur)
                return arguments[0];
            } else
              t = 0;
            return e.apply(s, arguments);
          };
        }
        function vr(e, t) {
          var n = -1, r = e.length, i = r - 1;
          for (t = t === s ? r : t; ++n < t; ) {
            var a = yi(n, i), o = e[a];
            e[a] = e[n], e[n] = o;
          }
          return e.length = t, e;
        }
        var aa = dc(function(e) {
          var t = [];
          return e.charCodeAt(0) === 46 && t.push(""), e.replace(oo, function(n, r, i, a) {
            t.push(i ? a.replace(vo, "$1") : r || n);
          }), t;
        });
        function ot(e) {
          if (typeof e == "string" || We(e))
            return e;
          var t = e + "";
          return t == "0" && 1 / e == -lt ? "-0" : t;
        }
        function Ht(e) {
          if (e != null) {
            try {
              return Xn.call(e);
            } catch {
            }
            try {
              return e + "";
            } catch {
            }
          }
          return "";
        }
        function Ec(e, t) {
          return Be(Mr, function(n) {
            var r = "_." + n[0];
            t & n[1] && !Yn(e, r) && e.push(r);
          }), e.sort();
        }
        function oa(e) {
          if (e instanceof b)
            return e.clone();
          var t = new $e(e.__wrapped__, e.__chain__);
          return t.__actions__ = Oe(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t;
        }
        function mc(e, t, n) {
          (n ? me(e, t, n) : t === s) ? t = 1 : t = le(x(t), 0);
          var r = e == null ? 0 : e.length;
          if (!r || t < 1)
            return [];
          for (var i = 0, a = 0, o = h(jn(r / t)); i < r; )
            o[a++] = Ke(e, i, i += t);
          return o;
        }
        function Ic(e) {
          for (var t = -1, n = e == null ? 0 : e.length, r = 0, i = []; ++t < n; ) {
            var a = e[t];
            a && (i[r++] = a);
          }
          return i;
        }
        function Oc() {
          var e = arguments.length;
          if (!e)
            return [];
          for (var t = h(e - 1), n = arguments[0], r = e; r--; )
            t[r - 1] = arguments[r];
          return St(L(n) ? Oe(n) : [n], de(t, 1));
        }
        var Sc = R(function(e, t) {
          return ie(e) ? In(e, de(t, 1, ie, !0)) : [];
        }), Cc = R(function(e, t) {
          var n = qe(t);
          return ie(n) && (n = s), ie(e) ? In(e, de(t, 1, ie, !0), I(n, 2)) : [];
        }), yc = R(function(e, t) {
          var n = qe(t);
          return ie(n) && (n = s), ie(e) ? In(e, de(t, 1, ie, !0), s, n) : [];
        });
        function Nc(e, t, n) {
          var r = e == null ? 0 : e.length;
          return r ? (t = n || t === s ? 1 : x(t), Ke(e, t < 0 ? 0 : t, r)) : [];
        }
        function Lc(e, t, n) {
          var r = e == null ? 0 : e.length;
          return r ? (t = n || t === s ? 1 : x(t), t = r - t, Ke(e, 0, t < 0 ? 0 : t)) : [];
        }
        function xc(e, t) {
          return e && e.length ? fr(e, I(t, 3), !0, !0) : [];
        }
        function Dc(e, t) {
          return e && e.length ? fr(e, I(t, 3), !0) : [];
        }
        function Rc(e, t, n, r) {
          var i = e == null ? 0 : e.length;
          return i ? (n && typeof n != "number" && me(e, t, n) && (n = 0, r = i), Ol(e, t, n, r)) : [];
        }
        function fa(e, t, n) {
          var r = e == null ? 0 : e.length;
          if (!r)
            return -1;
          var i = n == null ? 0 : x(n);
          return i < 0 && (i = le(r + i, 0)), $n(e, I(t, 3), i);
        }
        function la(e, t, n) {
          var r = e == null ? 0 : e.length;
          if (!r)
            return -1;
          var i = r - 1;
          return n !== s && (i = x(n), i = n < 0 ? le(r + i, 0) : we(i, r - 1)), $n(e, I(t, 3), i, !0);
        }
        function ca(e) {
          var t = e == null ? 0 : e.length;
          return t ? de(e, 1) : [];
        }
        function Fc(e) {
          var t = e == null ? 0 : e.length;
          return t ? de(e, lt) : [];
        }
        function Uc(e, t) {
          var n = e == null ? 0 : e.length;
          return n ? (t = t === s ? 1 : x(t), de(e, t)) : [];
        }
        function Wc(e) {
          for (var t = -1, n = e == null ? 0 : e.length, r = {}; ++t < n; ) {
            var i = e[t];
            r[i[0]] = i[1];
          }
          return r;
        }
        function ha(e) {
          return e && e.length ? e[0] : s;
        }
        function bc(e, t, n) {
          var r = e == null ? 0 : e.length;
          if (!r)
            return -1;
          var i = n == null ? 0 : x(n);
          return i < 0 && (i = le(r + i, 0)), zt(e, t, i);
        }
        function Gc(e) {
          var t = e == null ? 0 : e.length;
          return t ? Ke(e, 0, -1) : [];
        }
        var Pc = R(function(e) {
          var t = k(e, Ri);
          return t.length && t[0] === e[0] ? mi(t) : [];
        }), Mc = R(function(e) {
          var t = qe(e), n = k(e, Ri);
          return t === qe(n) ? t = s : n.pop(), n.length && n[0] === e[0] ? mi(n, I(t, 2)) : [];
        }), Bc = R(function(e) {
          var t = qe(e), n = k(e, Ri);
          return t = typeof t == "function" ? t : s, t && n.pop(), n.length && n[0] === e[0] ? mi(n, s, t) : [];
        });
        function Yc(e, t) {
          return e == null ? "" : Gf.call(e, t);
        }
        function qe(e) {
          var t = e == null ? 0 : e.length;
          return t ? e[t - 1] : s;
        }
        function $c(e, t, n) {
          var r = e == null ? 0 : e.length;
          if (!r)
            return -1;
          var i = r;
          return n !== s && (i = x(n), i = i < 0 ? le(r + i, 0) : we(i, r - 1)), t === t ? Ef(e, t, i) : $n(e, Xu, i, !0);
        }
        function Hc(e, t) {
          return e && e.length ? Is(e, x(t)) : s;
        }
        var Kc = R(ga);
        function ga(e, t) {
          return e && e.length && t && t.length ? Ci(e, t) : e;
        }
        function qc(e, t, n) {
          return e && e.length && t && t.length ? Ci(e, t, I(n, 2)) : e;
        }
        function Xc(e, t, n) {
          return e && e.length && t && t.length ? Ci(e, t, s, n) : e;
        }
        var Jc = vt(function(e, t) {
          var n = e == null ? 0 : e.length, r = wi(e, t);
          return Cs(e, k(t, function(i) {
            return wt(i, n) ? +i : i;
          }).sort(bs)), r;
        });
        function zc(e, t) {
          var n = [];
          if (!(e && e.length))
            return n;
          var r = -1, i = [], a = e.length;
          for (t = I(t, 3); ++r < a; ) {
            var o = e[r];
            t(o, r, e) && (n.push(o), i.push(r));
          }
          return Cs(e, i), n;
        }
        function Xi(e) {
          return e == null ? e : Yf.call(e);
        }
        function Zc(e, t, n) {
          var r = e == null ? 0 : e.length;
          return r ? (n && typeof n != "number" && me(e, t, n) ? (t = 0, n = r) : (t = t == null ? 0 : x(t), n = n === s ? r : x(n)), Ke(e, t, n)) : [];
        }
        function Vc(e, t) {
          return or(e, t);
        }
        function Qc(e, t, n) {
          return Li(e, t, I(n, 2));
        }
        function kc(e, t) {
          var n = e == null ? 0 : e.length;
          if (n) {
            var r = or(e, t);
            if (r < n && et(e[r], t))
              return r;
          }
          return -1;
        }
        function jc(e, t) {
          return or(e, t, !0);
        }
        function eh(e, t, n) {
          return Li(e, t, I(n, 2), !0);
        }
        function th(e, t) {
          var n = e == null ? 0 : e.length;
          if (n) {
            var r = or(e, t, !0) - 1;
            if (et(e[r], t))
              return r;
          }
          return -1;
        }
        function nh(e) {
          return e && e.length ? Ns(e) : [];
        }
        function rh(e, t) {
          return e && e.length ? Ns(e, I(t, 2)) : [];
        }
        function ih(e) {
          var t = e == null ? 0 : e.length;
          return t ? Ke(e, 1, t) : [];
        }
        function uh(e, t, n) {
          return e && e.length ? (t = n || t === s ? 1 : x(t), Ke(e, 0, t < 0 ? 0 : t)) : [];
        }
        function sh(e, t, n) {
          var r = e == null ? 0 : e.length;
          return r ? (t = n || t === s ? 1 : x(t), t = r - t, Ke(e, t < 0 ? 0 : t, r)) : [];
        }
        function ah(e, t) {
          return e && e.length ? fr(e, I(t, 3), !1, !0) : [];
        }
        function oh(e, t) {
          return e && e.length ? fr(e, I(t, 3)) : [];
        }
        var fh = R(function(e) {
          return Lt(de(e, 1, ie, !0));
        }), lh = R(function(e) {
          var t = qe(e);
          return ie(t) && (t = s), Lt(de(e, 1, ie, !0), I(t, 2));
        }), ch = R(function(e) {
          var t = qe(e);
          return t = typeof t == "function" ? t : s, Lt(de(e, 1, ie, !0), s, t);
        });
        function hh(e) {
          return e && e.length ? Lt(e) : [];
        }
        function gh(e, t) {
          return e && e.length ? Lt(e, I(t, 2)) : [];
        }
        function _h(e, t) {
          return t = typeof t == "function" ? t : s, e && e.length ? Lt(e, s, t) : [];
        }
        function Ji(e) {
          if (!(e && e.length))
            return [];
          var t = 0;
          return e = Ot(e, function(n) {
            if (ie(n))
              return t = le(n.length, t), !0;
          }), li(t, function(n) {
            return k(e, ai(n));
          });
        }
        function _a(e, t) {
          if (!(e && e.length))
            return [];
          var n = Ji(e);
          return t == null ? n : k(n, function(r) {
            return Re(t, s, r);
          });
        }
        var ph = R(function(e, t) {
          return ie(e) ? In(e, t) : [];
        }), dh = R(function(e) {
          return Di(Ot(e, ie));
        }), vh = R(function(e) {
          var t = qe(e);
          return ie(t) && (t = s), Di(Ot(e, ie), I(t, 2));
        }), wh = R(function(e) {
          var t = qe(e);
          return t = typeof t == "function" ? t : s, Di(Ot(e, ie), s, t);
        }), Ah = R(Ji);
        function Th(e, t) {
          return Rs(e || [], t || [], mn);
        }
        function Eh(e, t) {
          return Rs(e || [], t || [], Cn);
        }
        var mh = R(function(e) {
          var t = e.length, n = t > 1 ? e[t - 1] : s;
          return n = typeof n == "function" ? (e.pop(), n) : s, _a(e, n);
        });
        function pa(e) {
          var t = u(e);
          return t.__chain__ = !0, t;
        }
        function Ih(e, t) {
          return t(e), e;
        }
        function wr(e, t) {
          return t(e);
        }
        var Oh = vt(function(e) {
          var t = e.length, n = t ? e[0] : 0, r = this.__wrapped__, i = function(a) {
            return wi(a, e);
          };
          return t > 1 || this.__actions__.length || !(r instanceof b) || !wt(n) ? this.thru(i) : (r = r.slice(n, +n + (t ? 1 : 0)), r.__actions__.push({
            func: wr,
            args: [i],
            thisArg: s
          }), new $e(r, this.__chain__).thru(function(a) {
            return t && !a.length && a.push(s), a;
          }));
        });
        function Sh() {
          return pa(this);
        }
        function Ch() {
          return new $e(this.value(), this.__chain__);
        }
        function yh() {
          this.__values__ === s && (this.__values__ = La(this.value()));
          var e = this.__index__ >= this.__values__.length, t = e ? s : this.__values__[this.__index__++];
          return { done: e, value: t };
        }
        function Nh() {
          return this;
        }
        function Lh(e) {
          for (var t, n = this; n instanceof rr; ) {
            var r = oa(n);
            r.__index__ = 0, r.__values__ = s, t ? i.__wrapped__ = r : t = r;
            var i = r;
            n = n.__wrapped__;
          }
          return i.__wrapped__ = e, t;
        }
        function xh() {
          var e = this.__wrapped__;
          if (e instanceof b) {
            var t = e;
            return this.__actions__.length && (t = new b(this)), t = t.reverse(), t.__actions__.push({
              func: wr,
              args: [Xi],
              thisArg: s
            }), new $e(t, this.__chain__);
          }
          return this.thru(Xi);
        }
        function Dh() {
          return Ds(this.__wrapped__, this.__actions__);
        }
        var Rh = lr(function(e, t, n) {
          K.call(e, n) ? ++e[n] : pt(e, n, 1);
        });
        function Fh(e, t, n) {
          var r = L(e) ? Ku : Il;
          return n && me(e, t, n) && (t = s), r(e, I(t, 3));
        }
        function Uh(e, t) {
          var n = L(e) ? Ot : _s;
          return n(e, I(t, 3));
        }
        var Wh = $s(fa), bh = $s(la);
        function Gh(e, t) {
          return de(Ar(e, t), 1);
        }
        function Ph(e, t) {
          return de(Ar(e, t), lt);
        }
        function Mh(e, t, n) {
          return n = n === s ? 1 : x(n), de(Ar(e, t), n);
        }
        function da(e, t) {
          var n = L(e) ? Be : Nt;
          return n(e, I(t, 3));
        }
        function va(e, t) {
          var n = L(e) ? rf : gs;
          return n(e, I(t, 3));
        }
        var Bh = lr(function(e, t, n) {
          K.call(e, n) ? e[n].push(t) : pt(e, n, [t]);
        });
        function Yh(e, t, n, r) {
          e = Se(e) ? e : an(e), n = n && !r ? x(n) : 0;
          var i = e.length;
          return n < 0 && (n = le(i + n, 0)), Or(e) ? n <= i && e.indexOf(t, n) > -1 : !!i && zt(e, t, n) > -1;
        }
        var $h = R(function(e, t, n) {
          var r = -1, i = typeof t == "function", a = Se(e) ? h(e.length) : [];
          return Nt(e, function(o) {
            a[++r] = i ? Re(t, o, n) : On(o, t, n);
          }), a;
        }), Hh = lr(function(e, t, n) {
          pt(e, n, t);
        });
        function Ar(e, t) {
          var n = L(e) ? k : Ts;
          return n(e, I(t, 3));
        }
        function Kh(e, t, n, r) {
          return e == null ? [] : (L(t) || (t = t == null ? [] : [t]), n = r ? s : n, L(n) || (n = n == null ? [] : [n]), Os(e, t, n));
        }
        var qh = lr(function(e, t, n) {
          e[n ? 0 : 1].push(t);
        }, function() {
          return [[], []];
        });
        function Xh(e, t, n) {
          var r = L(e) ? ui : zu, i = arguments.length < 3;
          return r(e, I(t, 4), n, i, Nt);
        }
        function Jh(e, t, n) {
          var r = L(e) ? uf : zu, i = arguments.length < 3;
          return r(e, I(t, 4), n, i, gs);
        }
        function zh(e, t) {
          var n = L(e) ? Ot : _s;
          return n(e, mr(I(t, 3)));
        }
        function Zh(e) {
          var t = L(e) ? fs : Yl;
          return t(e);
        }
        function Vh(e, t, n) {
          (n ? me(e, t, n) : t === s) ? t = 1 : t = x(t);
          var r = L(e) ? wl : $l;
          return r(e, t);
        }
        function Qh(e) {
          var t = L(e) ? Al : Kl;
          return t(e);
        }
        function kh(e) {
          if (e == null)
            return 0;
          if (Se(e))
            return Or(e) ? Vt(e) : e.length;
          var t = Ae(e);
          return t == Ve || t == Qe ? e.size : Oi(e).length;
        }
        function jh(e, t, n) {
          var r = L(e) ? si : ql;
          return n && me(e, t, n) && (t = s), r(e, I(t, 3));
        }
        var eg = R(function(e, t) {
          if (e == null)
            return [];
          var n = t.length;
          return n > 1 && me(e, t[0], t[1]) ? t = [] : n > 2 && me(t[0], t[1], t[2]) && (t = [t[0]]), Os(e, de(t, 1), []);
        }), Tr = Uf || function() {
          return pe.Date.now();
        };
        function tg(e, t) {
          if (typeof t != "function")
            throw new Ye(U);
          return e = x(e), function() {
            if (--e < 1)
              return t.apply(this, arguments);
          };
        }
        function wa(e, t, n) {
          return t = n ? s : t, t = e && t == null ? e.length : t, dt(e, Pe, s, s, s, s, t);
        }
        function Aa(e, t) {
          var n;
          if (typeof t != "function")
            throw new Ye(U);
          return e = x(e), function() {
            return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = s), n;
          };
        }
        var zi = R(function(e, t, n) {
          var r = z;
          if (n.length) {
            var i = Ct(n, un(zi));
            r |= Ze;
          }
          return dt(e, r, t, n, i);
        }), Ta = R(function(e, t, n) {
          var r = z | ce;
          if (n.length) {
            var i = Ct(n, un(Ta));
            r |= Ze;
          }
          return dt(t, r, e, n, i);
        });
        function Ea(e, t, n) {
          t = n ? s : t;
          var r = dt(e, xe, s, s, s, s, s, t);
          return r.placeholder = Ea.placeholder, r;
        }
        function ma(e, t, n) {
          t = n ? s : t;
          var r = dt(e, It, s, s, s, s, s, t);
          return r.placeholder = ma.placeholder, r;
        }
        function Ia(e, t, n) {
          var r, i, a, o, f, c, p = 0, d = !1, v = !1, A = !0;
          if (typeof e != "function")
            throw new Ye(U);
          t = Xe(t) || 0, te(n) && (d = !!n.leading, v = "maxWait" in n, a = v ? le(Xe(n.maxWait) || 0, t) : a, A = "trailing" in n ? !!n.trailing : A);
          function E(ue) {
            var tt = r, Et = i;
            return r = i = s, p = ue, o = e.apply(Et, tt), o;
          }
          function O(ue) {
            return p = ue, f = Ln(F, t), d ? E(ue) : o;
          }
          function D(ue) {
            var tt = ue - c, Et = ue - p, $a = t - tt;
            return v ? we($a, a - Et) : $a;
          }
          function S(ue) {
            var tt = ue - c, Et = ue - p;
            return c === s || tt >= t || tt < 0 || v && Et >= a;
          }
          function F() {
            var ue = Tr();
            if (S(ue))
              return G(ue);
            f = Ln(F, D(ue));
          }
          function G(ue) {
            return f = s, A && r ? E(ue) : (r = i = s, o);
          }
          function be() {
            f !== s && Fs(f), p = 0, r = c = i = f = s;
          }
          function Ie() {
            return f === s ? o : G(Tr());
          }
          function Ge() {
            var ue = Tr(), tt = S(ue);
            if (r = arguments, i = this, c = ue, tt) {
              if (f === s)
                return O(c);
              if (v)
                return Fs(f), f = Ln(F, t), E(c);
            }
            return f === s && (f = Ln(F, t)), o;
          }
          return Ge.cancel = be, Ge.flush = Ie, Ge;
        }
        var ng = R(function(e, t) {
          return hs(e, 1, t);
        }), rg = R(function(e, t, n) {
          return hs(e, Xe(t) || 0, n);
        });
        function ig(e) {
          return dt(e, on);
        }
        function Er(e, t) {
          if (typeof e != "function" || t != null && typeof t != "function")
            throw new Ye(U);
          var n = function() {
            var r = arguments, i = t ? t.apply(this, r) : r[0], a = n.cache;
            if (a.has(i))
              return a.get(i);
            var o = e.apply(this, r);
            return n.cache = a.set(i, o) || a, o;
          };
          return n.cache = new (Er.Cache || _t)(), n;
        }
        Er.Cache = _t;
        function mr(e) {
          if (typeof e != "function")
            throw new Ye(U);
          return function() {
            var t = arguments;
            switch (t.length) {
              case 0:
                return !e.call(this);
              case 1:
                return !e.call(this, t[0]);
              case 2:
                return !e.call(this, t[0], t[1]);
              case 3:
                return !e.call(this, t[0], t[1], t[2]);
            }
            return !e.apply(this, t);
          };
        }
        function ug(e) {
          return Aa(2, e);
        }
        var sg = Xl(function(e, t) {
          t = t.length == 1 && L(t[0]) ? k(t[0], Fe(I())) : k(de(t, 1), Fe(I()));
          var n = t.length;
          return R(function(r) {
            for (var i = -1, a = we(r.length, n); ++i < a; )
              r[i] = t[i].call(this, r[i]);
            return Re(e, this, r);
          });
        }), Zi = R(function(e, t) {
          var n = Ct(t, un(Zi));
          return dt(e, Ze, s, t, n);
        }), Oa = R(function(e, t) {
          var n = Ct(t, un(Oa));
          return dt(e, re, s, t, n);
        }), ag = vt(function(e, t) {
          return dt(e, Ut, s, s, s, t);
        });
        function og(e, t) {
          if (typeof e != "function")
            throw new Ye(U);
          return t = t === s ? t : x(t), R(e, t);
        }
        function fg(e, t) {
          if (typeof e != "function")
            throw new Ye(U);
          return t = t == null ? 0 : le(x(t), 0), R(function(n) {
            var r = n[t], i = Dt(n, 0, t);
            return r && St(i, r), Re(e, this, i);
          });
        }
        function lg(e, t, n) {
          var r = !0, i = !0;
          if (typeof e != "function")
            throw new Ye(U);
          return te(n) && (r = "leading" in n ? !!n.leading : r, i = "trailing" in n ? !!n.trailing : i), Ia(e, t, {
            leading: r,
            maxWait: t,
            trailing: i
          });
        }
        function cg(e) {
          return wa(e, 1);
        }
        function hg(e, t) {
          return Zi(Fi(t), e);
        }
        function gg() {
          if (!arguments.length)
            return [];
          var e = arguments[0];
          return L(e) ? e : [e];
        }
        function _g(e) {
          return He(e, ee);
        }
        function pg(e, t) {
          return t = typeof t == "function" ? t : s, He(e, ee, t);
        }
        function dg(e) {
          return He(e, W | ee);
        }
        function vg(e, t) {
          return t = typeof t == "function" ? t : s, He(e, W | ee, t);
        }
        function wg(e, t) {
          return t == null || cs(e, t, he(t));
        }
        function et(e, t) {
          return e === t || e !== e && t !== t;
        }
        var Ag = _r(Ei), Tg = _r(function(e, t) {
          return e >= t;
        }), Kt = vs(/* @__PURE__ */ (function() {
          return arguments;
        })()) ? vs : function(e) {
          return ne(e) && K.call(e, "callee") && !rs.call(e, "callee");
        }, L = h.isArray, Eg = Pu ? Fe(Pu) : Ll;
        function Se(e) {
          return e != null && Ir(e.length) && !At(e);
        }
        function ie(e) {
          return ne(e) && Se(e);
        }
        function mg(e) {
          return e === !0 || e === !1 || ne(e) && Ee(e) == C;
        }
        var Rt = bf || su, Ig = Mu ? Fe(Mu) : xl;
        function Og(e) {
          return ne(e) && e.nodeType === 1 && !xn(e);
        }
        function Sg(e) {
          if (e == null)
            return !0;
          if (Se(e) && (L(e) || typeof e == "string" || typeof e.splice == "function" || Rt(e) || sn(e) || Kt(e)))
            return !e.length;
          var t = Ae(e);
          if (t == Ve || t == Qe)
            return !e.size;
          if (Nn(e))
            return !Oi(e).length;
          for (var n in e)
            if (K.call(e, n))
              return !1;
          return !0;
        }
        function Cg(e, t) {
          return Sn(e, t);
        }
        function yg(e, t, n) {
          n = typeof n == "function" ? n : s;
          var r = n ? n(e, t) : s;
          return r === s ? Sn(e, t, s, n) : !!r;
        }
        function Vi(e) {
          if (!ne(e))
            return !1;
          var t = Ee(e);
          return t == qt || t == ve || typeof e.message == "string" && typeof e.name == "string" && !xn(e);
        }
        function Ng(e) {
          return typeof e == "number" && us(e);
        }
        function At(e) {
          if (!te(e))
            return !1;
          var t = Ee(e);
          return t == ln || t == hu || t == m || t == Va;
        }
        function Sa(e) {
          return typeof e == "number" && e == x(e);
        }
        function Ir(e) {
          return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ut;
        }
        function te(e) {
          var t = typeof e;
          return e != null && (t == "object" || t == "function");
        }
        function ne(e) {
          return e != null && typeof e == "object";
        }
        var Ca = Bu ? Fe(Bu) : Rl;
        function Lg(e, t) {
          return e === t || Ii(e, t, Bi(t));
        }
        function xg(e, t, n) {
          return n = typeof n == "function" ? n : s, Ii(e, t, Bi(t), n);
        }
        function Dg(e) {
          return ya(e) && e != +e;
        }
        function Rg(e) {
          if (pc(e))
            throw new y(H);
          return ws(e);
        }
        function Fg(e) {
          return e === null;
        }
        function Ug(e) {
          return e == null;
        }
        function ya(e) {
          return typeof e == "number" || ne(e) && Ee(e) == cn;
        }
        function xn(e) {
          if (!ne(e) || Ee(e) != ht)
            return !1;
          var t = Vn(e);
          if (t === null)
            return !0;
          var n = K.call(t, "constructor") && t.constructor;
          return typeof n == "function" && n instanceof n && Xn.call(n) == xf;
        }
        var Qi = Yu ? Fe(Yu) : Fl;
        function Wg(e) {
          return Sa(e) && e >= -ut && e <= ut;
        }
        var Na = $u ? Fe($u) : Ul;
        function Or(e) {
          return typeof e == "string" || !L(e) && ne(e) && Ee(e) == gn;
        }
        function We(e) {
          return typeof e == "symbol" || ne(e) && Ee(e) == Gn;
        }
        var sn = Hu ? Fe(Hu) : Wl;
        function bg(e) {
          return e === s;
        }
        function Gg(e) {
          return ne(e) && Ae(e) == _n;
        }
        function Pg(e) {
          return ne(e) && Ee(e) == ka;
        }
        var Mg = _r(Si), Bg = _r(function(e, t) {
          return e <= t;
        });
        function La(e) {
          if (!e)
            return [];
          if (Se(e))
            return Or(e) ? ke(e) : Oe(e);
          if (vn && e[vn])
            return wf(e[vn]());
          var t = Ae(e), n = t == Ve ? hi : t == Qe ? Hn : an;
          return n(e);
        }
        function Tt(e) {
          if (!e)
            return e === 0 ? e : 0;
          if (e = Xe(e), e === lt || e === -lt) {
            var t = e < 0 ? -1 : 1;
            return t * fn;
          }
          return e === e ? e : 0;
        }
        function x(e) {
          var t = Tt(e), n = t % 1;
          return t === t ? n ? t - n : t : 0;
        }
        function xa(e) {
          return e ? Bt(x(e), 0, De) : 0;
        }
        function Xe(e) {
          if (typeof e == "number")
            return e;
          if (We(e))
            return Wt;
          if (te(e)) {
            var t = typeof e.valueOf == "function" ? e.valueOf() : e;
            e = te(t) ? t + "" : t;
          }
          if (typeof e != "string")
            return e === 0 ? e : +e;
          e = Zu(e);
          var n = To.test(e);
          return n || mo.test(e) ? ef(e.slice(2), n ? 2 : 8) : Ao.test(e) ? Wt : +e;
        }
        function Da(e) {
          return at(e, Ce(e));
        }
        function Yg(e) {
          return e ? Bt(x(e), -ut, ut) : e === 0 ? e : 0;
        }
        function B(e) {
          return e == null ? "" : Ue(e);
        }
        var $g = nn(function(e, t) {
          if (Nn(t) || Se(t)) {
            at(t, he(t), e);
            return;
          }
          for (var n in t)
            K.call(t, n) && mn(e, n, t[n]);
        }), Ra = nn(function(e, t) {
          at(t, Ce(t), e);
        }), Sr = nn(function(e, t, n, r) {
          at(t, Ce(t), e, r);
        }), Hg = nn(function(e, t, n, r) {
          at(t, he(t), e, r);
        }), Kg = vt(wi);
        function qg(e, t) {
          var n = tn(e);
          return t == null ? n : ls(n, t);
        }
        var Xg = R(function(e, t) {
          e = J(e);
          var n = -1, r = t.length, i = r > 2 ? t[2] : s;
          for (i && me(t[0], t[1], i) && (r = 1); ++n < r; )
            for (var a = t[n], o = Ce(a), f = -1, c = o.length; ++f < c; ) {
              var p = o[f], d = e[p];
              (d === s || et(d, kt[p]) && !K.call(e, p)) && (e[p] = a[p]);
            }
          return e;
        }), Jg = R(function(e) {
          return e.push(s, Zs), Re(Fa, s, e);
        });
        function zg(e, t) {
          return qu(e, I(t, 3), st);
        }
        function Zg(e, t) {
          return qu(e, I(t, 3), Ti);
        }
        function Vg(e, t) {
          return e == null ? e : Ai(e, I(t, 3), Ce);
        }
        function Qg(e, t) {
          return e == null ? e : ps(e, I(t, 3), Ce);
        }
        function kg(e, t) {
          return e && st(e, I(t, 3));
        }
        function jg(e, t) {
          return e && Ti(e, I(t, 3));
        }
        function e_(e) {
          return e == null ? [] : sr(e, he(e));
        }
        function t_(e) {
          return e == null ? [] : sr(e, Ce(e));
        }
        function ki(e, t, n) {
          var r = e == null ? s : Yt(e, t);
          return r === s ? n : r;
        }
        function n_(e, t) {
          return e != null && ks(e, t, Sl);
        }
        function ji(e, t) {
          return e != null && ks(e, t, Cl);
        }
        var r_ = Ks(function(e, t, n) {
          t != null && typeof t.toString != "function" && (t = Jn.call(t)), e[t] = n;
        }, tu(ye)), i_ = Ks(function(e, t, n) {
          t != null && typeof t.toString != "function" && (t = Jn.call(t)), K.call(e, t) ? e[t].push(n) : e[t] = [n];
        }, I), u_ = R(On);
        function he(e) {
          return Se(e) ? os(e) : Oi(e);
        }
        function Ce(e) {
          return Se(e) ? os(e, !0) : bl(e);
        }
        function s_(e, t) {
          var n = {};
          return t = I(t, 3), st(e, function(r, i, a) {
            pt(n, t(r, i, a), r);
          }), n;
        }
        function a_(e, t) {
          var n = {};
          return t = I(t, 3), st(e, function(r, i, a) {
            pt(n, i, t(r, i, a));
          }), n;
        }
        var o_ = nn(function(e, t, n) {
          ar(e, t, n);
        }), Fa = nn(function(e, t, n, r) {
          ar(e, t, n, r);
        }), f_ = vt(function(e, t) {
          var n = {};
          if (e == null)
            return n;
          var r = !1;
          t = k(t, function(a) {
            return a = xt(a, e), r || (r = a.length > 1), a;
          }), at(e, Pi(e), n), r && (n = He(n, W | j | ee, rc));
          for (var i = t.length; i--; )
            xi(n, t[i]);
          return n;
        });
        function l_(e, t) {
          return Ua(e, mr(I(t)));
        }
        var c_ = vt(function(e, t) {
          return e == null ? {} : Pl(e, t);
        });
        function Ua(e, t) {
          if (e == null)
            return {};
          var n = k(Pi(e), function(r) {
            return [r];
          });
          return t = I(t), Ss(e, n, function(r, i) {
            return t(r, i[0]);
          });
        }
        function h_(e, t, n) {
          t = xt(t, e);
          var r = -1, i = t.length;
          for (i || (i = 1, e = s); ++r < i; ) {
            var a = e == null ? s : e[ot(t[r])];
            a === s && (r = i, a = n), e = At(a) ? a.call(e) : a;
          }
          return e;
        }
        function g_(e, t, n) {
          return e == null ? e : Cn(e, t, n);
        }
        function __(e, t, n, r) {
          return r = typeof r == "function" ? r : s, e == null ? e : Cn(e, t, n, r);
        }
        var Wa = Js(he), ba = Js(Ce);
        function p_(e, t, n) {
          var r = L(e), i = r || Rt(e) || sn(e);
          if (t = I(t, 4), n == null) {
            var a = e && e.constructor;
            i ? n = r ? new a() : [] : te(e) ? n = At(a) ? tn(Vn(e)) : {} : n = {};
          }
          return (i ? Be : st)(e, function(o, f, c) {
            return t(n, o, f, c);
          }), n;
        }
        function d_(e, t) {
          return e == null ? !0 : xi(e, t);
        }
        function v_(e, t, n) {
          return e == null ? e : xs(e, t, Fi(n));
        }
        function w_(e, t, n, r) {
          return r = typeof r == "function" ? r : s, e == null ? e : xs(e, t, Fi(n), r);
        }
        function an(e) {
          return e == null ? [] : ci(e, he(e));
        }
        function A_(e) {
          return e == null ? [] : ci(e, Ce(e));
        }
        function T_(e, t, n) {
          return n === s && (n = t, t = s), n !== s && (n = Xe(n), n = n === n ? n : 0), t !== s && (t = Xe(t), t = t === t ? t : 0), Bt(Xe(e), t, n);
        }
        function E_(e, t, n) {
          return t = Tt(t), n === s ? (n = t, t = 0) : n = Tt(n), e = Xe(e), yl(e, t, n);
        }
        function m_(e, t, n) {
          if (n && typeof n != "boolean" && me(e, t, n) && (t = n = s), n === s && (typeof t == "boolean" ? (n = t, t = s) : typeof e == "boolean" && (n = e, e = s)), e === s && t === s ? (e = 0, t = 1) : (e = Tt(e), t === s ? (t = e, e = 0) : t = Tt(t)), e > t) {
            var r = e;
            e = t, t = r;
          }
          if (n || e % 1 || t % 1) {
            var i = ss();
            return we(e + i * (t - e + jo("1e-" + ((i + "").length - 1))), t);
          }
          return yi(e, t);
        }
        var I_ = rn(function(e, t, n) {
          return t = t.toLowerCase(), e + (n ? Ga(t) : t);
        });
        function Ga(e) {
          return eu(B(e).toLowerCase());
        }
        function Pa(e) {
          return e = B(e), e && e.replace(Oo, gf).replace(Ho, "");
        }
        function O_(e, t, n) {
          e = B(e), t = Ue(t);
          var r = e.length;
          n = n === s ? r : Bt(x(n), 0, r);
          var i = n;
          return n -= t.length, n >= 0 && e.slice(n, i) == t;
        }
        function S_(e) {
          return e = B(e), e && ro.test(e) ? e.replace(pu, _f) : e;
        }
        function C_(e) {
          return e = B(e), e && fo.test(e) ? e.replace(Zr, "\\$&") : e;
        }
        var y_ = rn(function(e, t, n) {
          return e + (n ? "-" : "") + t.toLowerCase();
        }), N_ = rn(function(e, t, n) {
          return e + (n ? " " : "") + t.toLowerCase();
        }), L_ = Ys("toLowerCase");
        function x_(e, t, n) {
          e = B(e), t = x(t);
          var r = t ? Vt(e) : 0;
          if (!t || r >= t)
            return e;
          var i = (t - r) / 2;
          return gr(er(i), n) + e + gr(jn(i), n);
        }
        function D_(e, t, n) {
          e = B(e), t = x(t);
          var r = t ? Vt(e) : 0;
          return t && r < t ? e + gr(t - r, n) : e;
        }
        function R_(e, t, n) {
          e = B(e), t = x(t);
          var r = t ? Vt(e) : 0;
          return t && r < t ? gr(t - r, n) + e : e;
        }
        function F_(e, t, n) {
          return n || t == null ? t = 0 : t && (t = +t), Bf(B(e).replace(Vr, ""), t || 0);
        }
        function U_(e, t, n) {
          return (n ? me(e, t, n) : t === s) ? t = 1 : t = x(t), Ni(B(e), t);
        }
        function W_() {
          var e = arguments, t = B(e[0]);
          return e.length < 3 ? t : t.replace(e[1], e[2]);
        }
        var b_ = rn(function(e, t, n) {
          return e + (n ? "_" : "") + t.toLowerCase();
        });
        function G_(e, t, n) {
          return n && typeof n != "number" && me(e, t, n) && (t = n = s), n = n === s ? De : n >>> 0, n ? (e = B(e), e && (typeof t == "string" || t != null && !Qi(t)) && (t = Ue(t), !t && Zt(e)) ? Dt(ke(e), 0, n) : e.split(t, n)) : [];
        }
        var P_ = rn(function(e, t, n) {
          return e + (n ? " " : "") + eu(t);
        });
        function M_(e, t, n) {
          return e = B(e), n = n == null ? 0 : Bt(x(n), 0, e.length), t = Ue(t), e.slice(n, n + t.length) == t;
        }
        function B_(e, t, n) {
          var r = u.templateSettings;
          n && me(e, t, n) && (t = s), e = B(e), t = Sr({}, t, r, zs);
          var i = Sr({}, t.imports, r.imports, zs), a = he(i), o = ci(i, a), f, c, p = 0, d = t.interpolate || Pn, v = "__p += '", A = gi(
            (t.escape || Pn).source + "|" + d.source + "|" + (d === du ? wo : Pn).source + "|" + (t.evaluate || Pn).source + "|$",
            "g"
          ), E = "//# sourceURL=" + (K.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++zo + "]") + `
`;
          e.replace(A, function(S, F, G, be, Ie, Ge) {
            return G || (G = be), v += e.slice(p, Ge).replace(So, pf), F && (f = !0, v += `' +
__e(` + F + `) +
'`), Ie && (c = !0, v += `';
` + Ie + `;
__p += '`), G && (v += `' +
((__t = (` + G + `)) == null ? '' : __t) +
'`), p = Ge + S.length, S;
          }), v += `';
`;
          var O = K.call(t, "variable") && t.variable;
          if (!O)
            v = `with (obj) {
` + v + `
}
`;
          else if (po.test(O))
            throw new y(rt);
          v = (c ? v.replace(ja, "") : v).replace(eo, "$1").replace(to, "$1;"), v = "function(" + (O || "obj") + `) {
` + (O ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (f ? ", __e = _.escape" : "") + (c ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + v + `return __p
}`;
          var D = Ba(function() {
            return M(a, E + "return " + v).apply(s, o);
          });
          if (D.source = v, Vi(D))
            throw D;
          return D;
        }
        function Y_(e) {
          return B(e).toLowerCase();
        }
        function $_(e) {
          return B(e).toUpperCase();
        }
        function H_(e, t, n) {
          if (e = B(e), e && (n || t === s))
            return Zu(e);
          if (!e || !(t = Ue(t)))
            return e;
          var r = ke(e), i = ke(t), a = Vu(r, i), o = Qu(r, i) + 1;
          return Dt(r, a, o).join("");
        }
        function K_(e, t, n) {
          if (e = B(e), e && (n || t === s))
            return e.slice(0, ju(e) + 1);
          if (!e || !(t = Ue(t)))
            return e;
          var r = ke(e), i = Qu(r, ke(t)) + 1;
          return Dt(r, 0, i).join("");
        }
        function q_(e, t, n) {
          if (e = B(e), e && (n || t === s))
            return e.replace(Vr, "");
          if (!e || !(t = Ue(t)))
            return e;
          var r = ke(e), i = Vu(r, ke(t));
          return Dt(r, i).join("");
        }
        function X_(e, t) {
          var n = Un, r = Fr;
          if (te(t)) {
            var i = "separator" in t ? t.separator : i;
            n = "length" in t ? x(t.length) : n, r = "omission" in t ? Ue(t.omission) : r;
          }
          e = B(e);
          var a = e.length;
          if (Zt(e)) {
            var o = ke(e);
            a = o.length;
          }
          if (n >= a)
            return e;
          var f = n - Vt(r);
          if (f < 1)
            return r;
          var c = o ? Dt(o, 0, f).join("") : e.slice(0, f);
          if (i === s)
            return c + r;
          if (o && (f += c.length - f), Qi(i)) {
            if (e.slice(f).search(i)) {
              var p, d = c;
              for (i.global || (i = gi(i.source, B(vu.exec(i)) + "g")), i.lastIndex = 0; p = i.exec(d); )
                var v = p.index;
              c = c.slice(0, v === s ? f : v);
            }
          } else if (e.indexOf(Ue(i), f) != f) {
            var A = c.lastIndexOf(i);
            A > -1 && (c = c.slice(0, A));
          }
          return c + r;
        }
        function J_(e) {
          return e = B(e), e && no.test(e) ? e.replace(_u, mf) : e;
        }
        var z_ = rn(function(e, t, n) {
          return e + (n ? " " : "") + t.toUpperCase();
        }), eu = Ys("toUpperCase");
        function Ma(e, t, n) {
          return e = B(e), t = n ? s : t, t === s ? vf(e) ? Sf(e) : of(e) : e.match(t) || [];
        }
        var Ba = R(function(e, t) {
          try {
            return Re(e, s, t);
          } catch (n) {
            return Vi(n) ? n : new y(n);
          }
        }), Z_ = vt(function(e, t) {
          return Be(t, function(n) {
            n = ot(n), pt(e, n, zi(e[n], e));
          }), e;
        });
        function V_(e) {
          var t = e == null ? 0 : e.length, n = I();
          return e = t ? k(e, function(r) {
            if (typeof r[1] != "function")
              throw new Ye(U);
            return [n(r[0]), r[1]];
          }) : [], R(function(r) {
            for (var i = -1; ++i < t; ) {
              var a = e[i];
              if (Re(a[0], this, r))
                return Re(a[1], this, r);
            }
          });
        }
        function Q_(e) {
          return ml(He(e, W));
        }
        function tu(e) {
          return function() {
            return e;
          };
        }
        function k_(e, t) {
          return e == null || e !== e ? t : e;
        }
        var j_ = Hs(), ep = Hs(!0);
        function ye(e) {
          return e;
        }
        function nu(e) {
          return As(typeof e == "function" ? e : He(e, W));
        }
        function tp(e) {
          return Es(He(e, W));
        }
        function np(e, t) {
          return ms(e, He(t, W));
        }
        var rp = R(function(e, t) {
          return function(n) {
            return On(n, e, t);
          };
        }), ip = R(function(e, t) {
          return function(n) {
            return On(e, n, t);
          };
        });
        function ru(e, t, n) {
          var r = he(t), i = sr(t, r);
          n == null && !(te(t) && (i.length || !r.length)) && (n = t, t = e, e = this, i = sr(t, he(t)));
          var a = !(te(n) && "chain" in n) || !!n.chain, o = At(e);
          return Be(i, function(f) {
            var c = t[f];
            e[f] = c, o && (e.prototype[f] = function() {
              var p = this.__chain__;
              if (a || p) {
                var d = e(this.__wrapped__), v = d.__actions__ = Oe(this.__actions__);
                return v.push({ func: c, args: arguments, thisArg: e }), d.__chain__ = p, d;
              }
              return c.apply(e, St([this.value()], arguments));
            });
          }), e;
        }
        function up() {
          return pe._ === this && (pe._ = Df), this;
        }
        function iu() {
        }
        function sp(e) {
          return e = x(e), R(function(t) {
            return Is(t, e);
          });
        }
        var ap = Wi(k), op = Wi(Ku), fp = Wi(si);
        function Ya(e) {
          return $i(e) ? ai(ot(e)) : Ml(e);
        }
        function lp(e) {
          return function(t) {
            return e == null ? s : Yt(e, t);
          };
        }
        var cp = qs(), hp = qs(!0);
        function uu() {
          return [];
        }
        function su() {
          return !1;
        }
        function gp() {
          return {};
        }
        function _p() {
          return "";
        }
        function pp() {
          return !0;
        }
        function dp(e, t) {
          if (e = x(e), e < 1 || e > ut)
            return [];
          var n = De, r = we(e, De);
          t = I(t), e -= De;
          for (var i = li(r, t); ++n < e; )
            t(n);
          return i;
        }
        function vp(e) {
          return L(e) ? k(e, ot) : We(e) ? [e] : Oe(aa(B(e)));
        }
        function wp(e) {
          var t = ++Lf;
          return B(e) + t;
        }
        var Ap = hr(function(e, t) {
          return e + t;
        }, 0), Tp = bi("ceil"), Ep = hr(function(e, t) {
          return e / t;
        }, 1), mp = bi("floor");
        function Ip(e) {
          return e && e.length ? ur(e, ye, Ei) : s;
        }
        function Op(e, t) {
          return e && e.length ? ur(e, I(t, 2), Ei) : s;
        }
        function Sp(e) {
          return Ju(e, ye);
        }
        function Cp(e, t) {
          return Ju(e, I(t, 2));
        }
        function yp(e) {
          return e && e.length ? ur(e, ye, Si) : s;
        }
        function Np(e, t) {
          return e && e.length ? ur(e, I(t, 2), Si) : s;
        }
        var Lp = hr(function(e, t) {
          return e * t;
        }, 1), xp = bi("round"), Dp = hr(function(e, t) {
          return e - t;
        }, 0);
        function Rp(e) {
          return e && e.length ? fi(e, ye) : 0;
        }
        function Fp(e, t) {
          return e && e.length ? fi(e, I(t, 2)) : 0;
        }
        return u.after = tg, u.ary = wa, u.assign = $g, u.assignIn = Ra, u.assignInWith = Sr, u.assignWith = Hg, u.at = Kg, u.before = Aa, u.bind = zi, u.bindAll = Z_, u.bindKey = Ta, u.castArray = gg, u.chain = pa, u.chunk = mc, u.compact = Ic, u.concat = Oc, u.cond = V_, u.conforms = Q_, u.constant = tu, u.countBy = Rh, u.create = qg, u.curry = Ea, u.curryRight = ma, u.debounce = Ia, u.defaults = Xg, u.defaultsDeep = Jg, u.defer = ng, u.delay = rg, u.difference = Sc, u.differenceBy = Cc, u.differenceWith = yc, u.drop = Nc, u.dropRight = Lc, u.dropRightWhile = xc, u.dropWhile = Dc, u.fill = Rc, u.filter = Uh, u.flatMap = Gh, u.flatMapDeep = Ph, u.flatMapDepth = Mh, u.flatten = ca, u.flattenDeep = Fc, u.flattenDepth = Uc, u.flip = ig, u.flow = j_, u.flowRight = ep, u.fromPairs = Wc, u.functions = e_, u.functionsIn = t_, u.groupBy = Bh, u.initial = Gc, u.intersection = Pc, u.intersectionBy = Mc, u.intersectionWith = Bc, u.invert = r_, u.invertBy = i_, u.invokeMap = $h, u.iteratee = nu, u.keyBy = Hh, u.keys = he, u.keysIn = Ce, u.map = Ar, u.mapKeys = s_, u.mapValues = a_, u.matches = tp, u.matchesProperty = np, u.memoize = Er, u.merge = o_, u.mergeWith = Fa, u.method = rp, u.methodOf = ip, u.mixin = ru, u.negate = mr, u.nthArg = sp, u.omit = f_, u.omitBy = l_, u.once = ug, u.orderBy = Kh, u.over = ap, u.overArgs = sg, u.overEvery = op, u.overSome = fp, u.partial = Zi, u.partialRight = Oa, u.partition = qh, u.pick = c_, u.pickBy = Ua, u.property = Ya, u.propertyOf = lp, u.pull = Kc, u.pullAll = ga, u.pullAllBy = qc, u.pullAllWith = Xc, u.pullAt = Jc, u.range = cp, u.rangeRight = hp, u.rearg = ag, u.reject = zh, u.remove = zc, u.rest = og, u.reverse = Xi, u.sampleSize = Vh, u.set = g_, u.setWith = __, u.shuffle = Qh, u.slice = Zc, u.sortBy = eg, u.sortedUniq = nh, u.sortedUniqBy = rh, u.split = G_, u.spread = fg, u.tail = ih, u.take = uh, u.takeRight = sh, u.takeRightWhile = ah, u.takeWhile = oh, u.tap = Ih, u.throttle = lg, u.thru = wr, u.toArray = La, u.toPairs = Wa, u.toPairsIn = ba, u.toPath = vp, u.toPlainObject = Da, u.transform = p_, u.unary = cg, u.union = fh, u.unionBy = lh, u.unionWith = ch, u.uniq = hh, u.uniqBy = gh, u.uniqWith = _h, u.unset = d_, u.unzip = Ji, u.unzipWith = _a, u.update = v_, u.updateWith = w_, u.values = an, u.valuesIn = A_, u.without = ph, u.words = Ma, u.wrap = hg, u.xor = dh, u.xorBy = vh, u.xorWith = wh, u.zip = Ah, u.zipObject = Th, u.zipObjectDeep = Eh, u.zipWith = mh, u.entries = Wa, u.entriesIn = ba, u.extend = Ra, u.extendWith = Sr, ru(u, u), u.add = Ap, u.attempt = Ba, u.camelCase = I_, u.capitalize = Ga, u.ceil = Tp, u.clamp = T_, u.clone = _g, u.cloneDeep = dg, u.cloneDeepWith = vg, u.cloneWith = pg, u.conformsTo = wg, u.deburr = Pa, u.defaultTo = k_, u.divide = Ep, u.endsWith = O_, u.eq = et, u.escape = S_, u.escapeRegExp = C_, u.every = Fh, u.find = Wh, u.findIndex = fa, u.findKey = zg, u.findLast = bh, u.findLastIndex = la, u.findLastKey = Zg, u.floor = mp, u.forEach = da, u.forEachRight = va, u.forIn = Vg, u.forInRight = Qg, u.forOwn = kg, u.forOwnRight = jg, u.get = ki, u.gt = Ag, u.gte = Tg, u.has = n_, u.hasIn = ji, u.head = ha, u.identity = ye, u.includes = Yh, u.indexOf = bc, u.inRange = E_, u.invoke = u_, u.isArguments = Kt, u.isArray = L, u.isArrayBuffer = Eg, u.isArrayLike = Se, u.isArrayLikeObject = ie, u.isBoolean = mg, u.isBuffer = Rt, u.isDate = Ig, u.isElement = Og, u.isEmpty = Sg, u.isEqual = Cg, u.isEqualWith = yg, u.isError = Vi, u.isFinite = Ng, u.isFunction = At, u.isInteger = Sa, u.isLength = Ir, u.isMap = Ca, u.isMatch = Lg, u.isMatchWith = xg, u.isNaN = Dg, u.isNative = Rg, u.isNil = Ug, u.isNull = Fg, u.isNumber = ya, u.isObject = te, u.isObjectLike = ne, u.isPlainObject = xn, u.isRegExp = Qi, u.isSafeInteger = Wg, u.isSet = Na, u.isString = Or, u.isSymbol = We, u.isTypedArray = sn, u.isUndefined = bg, u.isWeakMap = Gg, u.isWeakSet = Pg, u.join = Yc, u.kebabCase = y_, u.last = qe, u.lastIndexOf = $c, u.lowerCase = N_, u.lowerFirst = L_, u.lt = Mg, u.lte = Bg, u.max = Ip, u.maxBy = Op, u.mean = Sp, u.meanBy = Cp, u.min = yp, u.minBy = Np, u.stubArray = uu, u.stubFalse = su, u.stubObject = gp, u.stubString = _p, u.stubTrue = pp, u.multiply = Lp, u.nth = Hc, u.noConflict = up, u.noop = iu, u.now = Tr, u.pad = x_, u.padEnd = D_, u.padStart = R_, u.parseInt = F_, u.random = m_, u.reduce = Xh, u.reduceRight = Jh, u.repeat = U_, u.replace = W_, u.result = h_, u.round = xp, u.runInContext = l, u.sample = Zh, u.size = kh, u.snakeCase = b_, u.some = jh, u.sortedIndex = Vc, u.sortedIndexBy = Qc, u.sortedIndexOf = kc, u.sortedLastIndex = jc, u.sortedLastIndexBy = eh, u.sortedLastIndexOf = th, u.startCase = P_, u.startsWith = M_, u.subtract = Dp, u.sum = Rp, u.sumBy = Fp, u.template = B_, u.times = dp, u.toFinite = Tt, u.toInteger = x, u.toLength = xa, u.toLower = Y_, u.toNumber = Xe, u.toSafeInteger = Yg, u.toString = B, u.toUpper = $_, u.trim = H_, u.trimEnd = K_, u.trimStart = q_, u.truncate = X_, u.unescape = J_, u.uniqueId = wp, u.upperCase = z_, u.upperFirst = eu, u.each = da, u.eachRight = va, u.first = ha, ru(u, (function() {
          var e = {};
          return st(u, function(t, n) {
            K.call(u.prototype, n) || (e[n] = t);
          }), e;
        })(), { chain: !1 }), u.VERSION = X, Be(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
          u[e].placeholder = u;
        }), Be(["drop", "take"], function(e, t) {
          b.prototype[e] = function(n) {
            n = n === s ? 1 : le(x(n), 0);
            var r = this.__filtered__ && !t ? new b(this) : this.clone();
            return r.__filtered__ ? r.__takeCount__ = we(n, r.__takeCount__) : r.__views__.push({
              size: we(n, De),
              type: e + (r.__dir__ < 0 ? "Right" : "")
            }), r;
          }, b.prototype[e + "Right"] = function(n) {
            return this.reverse()[e](n).reverse();
          };
        }), Be(["filter", "map", "takeWhile"], function(e, t) {
          var n = t + 1, r = n == Wn || n == bn;
          b.prototype[e] = function(i) {
            var a = this.clone();
            return a.__iteratees__.push({
              iteratee: I(i, 3),
              type: n
            }), a.__filtered__ = a.__filtered__ || r, a;
          };
        }), Be(["head", "last"], function(e, t) {
          var n = "take" + (t ? "Right" : "");
          b.prototype[e] = function() {
            return this[n](1).value()[0];
          };
        }), Be(["initial", "tail"], function(e, t) {
          var n = "drop" + (t ? "" : "Right");
          b.prototype[e] = function() {
            return this.__filtered__ ? new b(this) : this[n](1);
          };
        }), b.prototype.compact = function() {
          return this.filter(ye);
        }, b.prototype.find = function(e) {
          return this.filter(e).head();
        }, b.prototype.findLast = function(e) {
          return this.reverse().find(e);
        }, b.prototype.invokeMap = R(function(e, t) {
          return typeof e == "function" ? new b(this) : this.map(function(n) {
            return On(n, e, t);
          });
        }), b.prototype.reject = function(e) {
          return this.filter(mr(I(e)));
        }, b.prototype.slice = function(e, t) {
          e = x(e);
          var n = this;
          return n.__filtered__ && (e > 0 || t < 0) ? new b(n) : (e < 0 ? n = n.takeRight(-e) : e && (n = n.drop(e)), t !== s && (t = x(t), n = t < 0 ? n.dropRight(-t) : n.take(t - e)), n);
        }, b.prototype.takeRightWhile = function(e) {
          return this.reverse().takeWhile(e).reverse();
        }, b.prototype.toArray = function() {
          return this.take(De);
        }, st(b.prototype, function(e, t) {
          var n = /^(?:filter|find|map|reject)|While$/.test(t), r = /^(?:head|last)$/.test(t), i = u[r ? "take" + (t == "last" ? "Right" : "") : t], a = r || /^find/.test(t);
          i && (u.prototype[t] = function() {
            var o = this.__wrapped__, f = r ? [1] : arguments, c = o instanceof b, p = f[0], d = c || L(o), v = function(F) {
              var G = i.apply(u, St([F], f));
              return r && A ? G[0] : G;
            };
            d && n && typeof p == "function" && p.length != 1 && (c = d = !1);
            var A = this.__chain__, E = !!this.__actions__.length, O = a && !A, D = c && !E;
            if (!a && d) {
              o = D ? o : new b(this);
              var S = e.apply(o, f);
              return S.__actions__.push({ func: wr, args: [v], thisArg: s }), new $e(S, A);
            }
            return O && D ? e.apply(this, f) : (S = this.thru(v), O ? r ? S.value()[0] : S.value() : S);
          });
        }), Be(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
          var t = Kn[e], n = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", r = /^(?:pop|shift)$/.test(e);
          u.prototype[e] = function() {
            var i = arguments;
            if (r && !this.__chain__) {
              var a = this.value();
              return t.apply(L(a) ? a : [], i);
            }
            return this[n](function(o) {
              return t.apply(L(o) ? o : [], i);
            });
          };
        }), st(b.prototype, function(e, t) {
          var n = u[t];
          if (n) {
            var r = n.name + "";
            K.call(en, r) || (en[r] = []), en[r].push({ name: t, func: n });
          }
        }), en[cr(s, ce).name] = [{
          name: "wrapper",
          func: s
        }], b.prototype.clone = Jf, b.prototype.reverse = zf, b.prototype.value = Zf, u.prototype.at = Oh, u.prototype.chain = Sh, u.prototype.commit = Ch, u.prototype.next = yh, u.prototype.plant = Lh, u.prototype.reverse = xh, u.prototype.toJSON = u.prototype.valueOf = u.prototype.value = Dh, u.prototype.first = u.prototype.head, vn && (u.prototype[vn] = Nh), u;
      }), Qt = Cf();
      bt ? ((bt.exports = Qt)._ = Qt, ni._ = Qt) : pe._ = Qt;
    }).call(sd);
  })(Fn, Fn.exports)), Fn.exports;
}
var od = ad();
const fd = { class: "routing-widget" }, ld = { class: "routing-header" }, cd = { class: "routing-title" }, hd = ["value"], gd = { class: "waypoints-list" }, _d = { class: "waypoint-input-wrapper" }, pd = { class: "waypoint-label" }, dd = ["onUpdate:modelValue", "placeholder", "onInput", "onFocus"], vd = {
  key: 0,
  class: "suggestions-dropdown"
}, wd = ["onMousedown"], Ad = ["title", "onClick"], Td = { class: "routing-actions" }, Ed = ["disabled"], md = {
  key: 0,
  class: "route-result"
}, Id = { class: "result-summary" }, Od = { class: "summary-item" }, Sd = { class: "summary-value" }, Cd = { class: "summary-label" }, yd = { class: "summary-item" }, Nd = { class: "summary-value" }, Ld = { class: "summary-label" }, xd = { class: "summary-item" }, Dd = { class: "summary-value" }, Rd = { class: "summary-label" }, Fd = { class: "maneuvers-section" }, Ud = {
  key: 0,
  class: "maneuvers-list"
}, Wd = { class: "maneuver-instruction" }, bd = { class: "maneuver-distance" }, Gd = /* @__PURE__ */ Yp({
  __name: "RoutingWidget",
  props: {
    datasourceId: {},
    config: {},
    id: {}
  },
  setup(ae, { expose: g }) {
    const s = ae, { datasourceId: X, config: $, id: H } = $p(s), U = au(kp.TINY_EMITTER), rt = au(Wp), ft = Zp().params.pageid || "", oe = $.value?.waypoints, W = mt(
      Array.isArray(oe) ? [...oe] : []
    ), j = mt(
      $.value?.costing || $.value?.defaultCosting || "auto"
    ), ee = mt(null), _e = mt(!1), Te = mt(!1), z = mt(
      Array.isArray(oe) && oe.length > 0 ? oe.map((w) => w.name || `${w.lat.toFixed(4)}, ${w.lon.toFixed(4)}`) : ["", ""]
    ), ce = mt(
      Array.isArray(oe) && oe.length > 0 ? oe.map(() => []) : [[], []]
    ), Ft = mt(-1);
    function xe() {
      if (!$.value) return;
      const w = W.value.filter((m) => m.lat !== 0 || m.lon !== 0);
      $.value.waypoints = w.length > 0 ? [...w] : void 0, $.value.costing = j.value;
    }
    Dn(W, xe, { deep: !0 }), Dn(j, xe);
    const It = mt(null), { update: Ze } = Vp(
      X,
      "object",
      It
    );
    Dn(X, (w, m) => {
      Ze(w, m);
    }), Dn(It, (w) => {
      w && (ee.value = w);
    });
    const { t: re } = Qp("routing"), Pe = Cr(
      () => [
        { value: "auto", icon: "🚗" },
        { value: "bicycle", icon: "🚲" },
        { value: "pedestrian", icon: "🚶" },
        { value: "truck", icon: "🚛" },
        { value: "bus", icon: "🚌" },
        { value: "motor_scooter", icon: "🛵" },
        { value: "motorcycle", icon: "🏍️" }
      ].map((w) => ({ ...w, text: re(`Costing.${w.value}`) }))
    ), Ut = Cr(() => {
      const w = Pe.value.find((m) => m.value === j.value);
      return w ? `${w.icon} ${w.text}` : j.value;
    }), on = Cr(() => {
      if (!ee.value) return "";
      const w = ee.value.summary.duration_min;
      if (w < 60) return `${w} min`;
      const m = Math.floor(w / 60), C = w % 60;
      return C > 0 ? `${m} h ${C} min` : `${m} h`;
    }), Un = Cr(() => ee.value?.legs ? ee.value.legs.flatMap(
      (w, m) => w.maneuvers.map((C) => ({ ...C, legIndex: m }))
    ) : []);
    async function Fr(w, m) {
      if (!w || w.length < 3) {
        ce.value[m] = [];
        return;
      }
      try {
        const C = "https://nominatim.openstreetmap.org/search?" + new URLSearchParams({
          q: w,
          format: "json",
          limit: "5",
          addressdetails: "1"
        }), q = await fetch(C, {
          headers: { "User-Agent": "DaanseBoard/1.0" }
        });
        ce.value[m] = await q.json();
      } catch {
        ce.value[m] = [];
      }
    }
    const Ur = od.debounce(Fr, 400);
    function Wr(w) {
      Ft.value = w, Ur(z.value[w], w);
    }
    function Wn(w, m) {
      const C = {
        lat: parseFloat(m.lat),
        lon: parseFloat(m.lon),
        name: m.display_name?.split(",")[0] || ""
      };
      z.value[w] = C.name || m.display_name, ce.value[w] = [], Ft.value = -1, w < W.value.length ? W.value[w] = C : W.value.push(C), De(C, w);
    }
    function br() {
      const w = W.value.length > 0 ? W.value.length - 1 : W.value.length;
      W.value.splice(w, 0, {
        lat: 0,
        lon: 0,
        name: ""
      }), z.value.splice(w, 0, ""), ce.value.splice(w, 0, []);
    }
    function bn(w) {
      const m = W.value.splice(w, 1)[0];
      z.value.splice(w, 1), ce.value.splice(w, 1), m && Gr(m, w);
    }
    function lt(w) {
      return w === 0 ? re("Waypoint.start") : w === W.value.length - 1 && W.value.length > 1 ? re("Waypoint.end") : re("Waypoint.stop", { n: w });
    }
    function ut(w) {
      return w === 0 ? "#4caf50" : w === W.value.length - 1 && W.value.length > 1 ? "#f44336" : "#2196f3";
    }
    async function fn() {
      const w = W.value.filter(
        (m) => m.lat !== 0 || m.lon !== 0
      );
      if (!(w.length < 2)) {
        _e.value = !0;
        try {
          const {
            DatasourceRepository: m,
            identifier: C
          } = await import("org.eclipse.daanse.board.app.lib.repository.datasource"), ve = au(C).getDatasource(X.value);
          ve && typeof ve.callEvent == "function" && await ve.callEvent(nd, {
            waypoints: w,
            costing: j.value
          });
        } catch (m) {
          console.warn("Route calculation failed:", m);
        } finally {
          _e.value = !1;
        }
      }
    }
    function Wt() {
      W.value = [], z.value = ["", ""], ce.value = [[], []], ee.value = null, xe(), H?.value && U.emit("widget:RoutingWidget:route_cleared", {
        type: "widget:RoutingWidget:route_cleared",
        widgetId: H.value,
        payload: { widgetId: H.value, timestamp: Date.now() }
      });
    }
    function De(w, m) {
      if (!H?.value) return;
      const C = new Y();
      C.lat = w.lat, C.lon = w.lon, C.name = w.name ?? "", C.index = m, U.emit("widget:RoutingWidget:waypoint_added", {
        type: "widget:RoutingWidget:waypoint_added",
        widgetId: H.value,
        payload: C,
        timestamp: Date.now()
      });
    }
    function Gr(w, m) {
      if (!H?.value) return;
      const C = new Y();
      C.lat = w.lat, C.lon = w.lon, C.name = w.name ?? "", C.index = m, U.emit("widget:RoutingWidget:waypoint_removed", {
        type: "widget:RoutingWidget:waypoint_removed",
        widgetId: H.value,
        payload: C,
        timestamp: Date.now()
      });
    }
    function Pr(w) {
      if (!H?.value) return;
      const m = new P();
      m.geojson = w.geojson, m.distance_km = w.summary.distance_km, m.duration_min = w.summary.duration_min, m.waypoints = w.waypoints, m.costing = j.value, U.emit("widget:RoutingWidget:route_calculated", {
        type: "widget:RoutingWidget:route_calculated",
        widgetId: H.value,
        payload: m,
        timestamp: Date.now()
      });
    }
    Dn(ee, (w) => {
      w && Pr(w);
    });
    class Mr extends ud {
      addWaypoint(m, C, q) {
        const ve = { lat: m, lon: C, name: q };
        W.value.push(ve), z.value.push(q || `${m.toFixed(4)}, ${C.toFixed(4)}`), ce.value.push([]), De(ve, W.value.length - 1);
      }
      removeWaypoint(m) {
        bn(m);
      }
      clearWaypoints() {
        Wt();
      }
      setCosting(m) {
        j.value = m;
      }
      calculateRoute() {
        fn();
      }
    }
    const ct = new Mr();
    return g(ct), Hp(() => {
      H?.value && rt.registerInstance(
        H.value,
        ct,
        "RoutingWidget",
        ft
      ), W.value.filter((m) => m.lat !== 0 || m.lon !== 0).length >= 2 && fn();
    }), Kp(() => {
      H?.value && rt.unregisterInstance(H.value);
    }), (w, m) => (Le(), Ne("div", fd, [
      Q("div", ld, [
        Q("span", cd, ge(nt(re)("Widget.name")), 1),
        Ha(Q("select", {
          "onUpdate:modelValue": m[0] || (m[0] = (C) => j.value = C),
          class: "costing-select"
        }, [
          (Le(!0), Ne(yr, null, Nr(Pe.value, (C) => (Le(), Ne("option", {
            key: C.value,
            value: C.value
          }, ge(C.icon) + " " + ge(C.text), 9, hd))), 128))
        ], 512), [
          [qp, j.value]
        ])
      ]),
      Q("div", gd, [
        (Le(!0), Ne(yr, null, Nr(Math.max(2, W.value.length), (C, q) => (Le(), Ne("div", {
          key: q,
          class: "waypoint-row"
        }, [
          Q("div", {
            class: "waypoint-dot",
            style: Xp({ backgroundColor: ut(q) })
          }, null, 4),
          Q("div", _d, [
            Q("label", pd, ge(lt(q)), 1),
            Ha(Q("input", {
              "onUpdate:modelValue": (ve) => z.value[q] = ve,
              class: "waypoint-input",
              placeholder: nt(re)("Waypoint.placeholder"),
              onInput: (ve) => Wr(q),
              onFocus: (ve) => Ft.value = q
            }, null, 40, dd), [
              [Jp, z.value[q]]
            ]),
            Ft.value === q && ce.value[q] && ce.value[q].length > 0 ? (Le(), Ne("div", vd, [
              (Le(!0), Ne(yr, null, Nr(ce.value[q], (ve, qt) => (Le(), Ne("div", {
                key: qt,
                class: "suggestion-item",
                onMousedown: zp((ln) => Wn(q, ve), ["prevent"])
              }, ge(ve.display_name), 41, wd))), 128))
            ])) : Rn("", !0)
          ]),
          q >= 2 ? (Le(), Ne("button", {
            key: 0,
            class: "remove-btn",
            title: nt(re)("Waypoint.remove"),
            onClick: (ve) => bn(q)
          }, " × ", 8, Ad)) : Rn("", !0)
        ]))), 128))
      ]),
      Q("div", Td, [
        Q("button", {
          class: "btn-secondary",
          onClick: br
        }, ge(nt(re)("Actions.addStop")), 1),
        Q("button", {
          class: "btn-primary",
          disabled: _e.value,
          onClick: fn
        }, ge(_e.value ? nt(re)("Actions.calculating") : nt(re)("Actions.calculate")), 9, Ed),
        ee.value || W.value.length > 0 ? (Le(), Ne("button", {
          key: 0,
          class: "btn-clear",
          onClick: Wt
        }, ge(nt(re)("Actions.clear")), 1)) : Rn("", !0)
      ]),
      ee.value ? (Le(), Ne("div", md, [
        Q("div", Id, [
          Q("div", Od, [
            Q("span", Sd, ge(ee.value.summary.distance_km.toFixed(1)) + " km ", 1),
            Q("span", Cd, ge(nt(re)("Summary.distance")), 1)
          ]),
          Q("div", yd, [
            Q("span", Nd, ge(on.value), 1),
            Q("span", Ld, ge(nt(re)("Summary.duration")), 1)
          ]),
          Q("div", xd, [
            Q("span", Dd, ge(Ut.value), 1),
            Q("span", Rd, ge(nt(re)("Summary.costing")), 1)
          ])
        ]),
        Q("div", Fd, [
          Q("button", {
            class: "maneuvers-toggle",
            onClick: m[1] || (m[1] = (C) => Te.value = !Te.value)
          }, ge(Te.value ? "▾" : "▸") + " " + ge(nt(re)("Summary.maneuvers", { count: Un.value.length })), 1),
          Te.value ? (Le(), Ne("div", Ud, [
            (Le(!0), Ne(yr, null, Nr(Un.value, (C, q) => (Le(), Ne("div", {
              key: q,
              class: "maneuver-item"
            }, [
              Q("span", Wd, ge(C.instruction), 1),
              Q("span", bd, ge(C.length.toFixed(1)) + " km ", 1)
            ]))), 128))
          ])) : Rn("", !0)
        ])
      ])) : Rn("", !0)
    ]));
  }
}), Pd = [
  {
    name: "Route Calculated",
    type: "route_calculated",
    description: "Triggered when a route has been calculated",
    payloadType: P
  },
  {
    name: "Waypoint Added",
    type: "waypoint_added",
    description: "Triggered when a waypoint is added",
    payloadType: Y
  },
  {
    name: "Waypoint Removed",
    type: "waypoint_removed",
    description: "Triggered when a waypoint is removed",
    payloadType: Y
  },
  {
    name: "Route Cleared",
    type: "route_cleared",
    description: "Triggered when all waypoints and the route are cleared",
    payloadType: fu
  }
], Md = `<?xml version="1.0" encoding="UTF-8"?>
<!--
/*********************************************************************
* Copyright (c) 2026 Contributors to the Eclipse Foundation.
*
* This program and the accompanying materials are made
* available under the terms of the Eclipse Public License 2.0
* which is available at https://www.eclipse.org/legal/epl-2.0/
*
* SPDX-License-Identifier: EPL-2.0
**********************************************************************/

The form for the routing widget.

One decision: how a route is calculated when nothing else says otherwise.
The rest of the class - the current mode, the waypoints, the geometry and
the two totals - is what the widget works out while it runs, not something
anyone sets here.

The values are the routing service's own names, because they are what gets
sent and stored; optionLabel gives them the words a reader picks from.
-->
<uimodel:UIModel
    xmlns:xmi="http://www.omg.org/XMI"
    xmi:version="2.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:uimodel="http://uimodel/1.0"
    name="RoutingWidgetSettingsForm">

  <targetClasses href="http://org.eclipse.daanse.board.app.ui.vue.widget.routing#//RoutingWidgetSettings"/>

  <components xsi:type="uimodel:FormView" name="RoutingWidgetSettingsFormView">
    <fields xsi:type="uimodel:SelectWidget"
        name="defaultCosting"
        feature="http://org.eclipse.daanse.board.app.ui.vue.widget.routing#//RoutingWidgetSettings/defaultCosting"
        label="routing:Form.defaultCosting">
      <values>auto</values>
      <values>bicycle</values>
      <values>pedestrian</values>
      <values>truck</values>
      <values>bus</values>
      <values>motor_scooter</values>
      <values>motorcycle</values>
      <optionLabel language="JS" body="({ auto: 'routing:Costing.auto', bicycle: 'routing:Costing.bicycle', pedestrian: 'routing:Costing.pedestrian', truck: 'routing:Costing.truck', bus: 'routing:Costing.bus', motor_scooter: 'routing:Costing.motor_scooter', motorcycle: 'routing:Costing.motorcycle' })[option] ?? option"/>
    </fields>
  </components>
</uimodel:UIModel>
`, Bd = { name: "Routing" }, Yd = { auto: "Auto", bicycle: "Fahrrad", pedestrian: "Zu Fuß", truck: "LKW", bus: "Bus", motor_scooter: "Roller", motorcycle: "Motorrad" }, $d = { start: "Start", end: "Ziel", stop: "Halt {{n}}", remove: "Entfernen", placeholder: "Adresse eingeben…" }, Hd = { calculating: "Berechne…", calculate: "Route berechnen", addStop: "+ Zwischenhalt", clear: "Löschen" }, Kd = { distance: "Distanz", duration: "Dauer", costing: "Verkehrsart", maneuvers: "Manöver ({{count}})" }, qd = { defaultCosting: "Verkehrsart" }, Xd = {
  Widget: Bd,
  Costing: Yd,
  Waypoint: $d,
  Actions: Hd,
  Summary: Kd,
  Form: qd
}, Jd = { name: "Routing" }, zd = { auto: "Car", bicycle: "Bicycle", pedestrian: "On foot", truck: "Truck", bus: "Bus", motor_scooter: "Scooter", motorcycle: "Motorcycle" }, Zd = { start: "Start", end: "Destination", stop: "Stop {{n}}", remove: "Remove", placeholder: "Enter address…" }, Vd = { calculating: "Calculating…", calculate: "Calculate route", addStop: "+ Intermediate stop", clear: "Clear" }, Qd = { distance: "Distance", duration: "Duration", costing: "Mode of travel", maneuvers: "Manoeuvres ({{count}})" }, kd = { defaultCosting: "Mode of travel" }, jd = {
  Widget: Jd,
  Costing: zd,
  Waypoint: Zd,
  Actions: Vd,
  Summary: Qd,
  Form: kd
};
var ev = Object.getOwnPropertyDescriptor, tv = (ae, g, s, X) => {
  for (var $ = X > 1 ? void 0 : X ? ev(g, s) : g, H = ae.length - 1, U; H >= 0; H--)
    (U = ae[H]) && ($ = U($) || $);
  return $;
};
const za = "routing";
let qa = class {
  namespace = za;
  resources = {
    de: Xd,
    en: jd
  };
};
qa = tv([
  Xa({
    service: ["Translations"],
    properties: { "i18n.namespace": za }
  })
], qa);
var nv = Object.defineProperty, rv = Object.getOwnPropertyDescriptor, cu = (ae, g, s, X) => {
  for (var $ = X > 1 ? void 0 : X ? rv(g, s) : g, H = ae.length - 1, U; H >= 0; H--)
    (U = ae[H]) && ($ = (X ? U(g, s, $) : U($)) || $);
  return X && $ && nv(g, s, $), $;
}, iv = (ae, g) => (s, X) => g(s, X, ae);
bp.eINSTANCE;
N.eINSTANCE;
const Dr = "RoutingWidget";
let Rr = class {
  constructor(ae) {
    this.events = ae;
  }
  type = Dr;
  component = Gd;
  supportedDSTypes = ["valhalla"];
  icon = id;
  name = "Routing";
  nameKey = "routing:Widget.name";
  /*
   * The settings form, as a model. Carried on the registration like the
   * icon, so whoever shows the settings does not have to know this widget
   * exists - and the shell needs no dependency on this bundle.
   */
  settingsForm = {
    xmi: Md,
    uri: "/routing-settings.ui.xmi",
    ePackage: () => N.eINSTANCE,
    create: () => new se()
  };
  register() {
    this.events.registerWidget(Dr, Pd);
  }
  unregister() {
    this.events.unregisterWidget(Dr);
  }
};
cu([
  Pp()
], Rr.prototype, "register", 1);
cu([
  Mp()
], Rr.prototype, "unregister", 1);
Rr = cu([
  Xa({
    service: [rd],
    properties: { "widget.type": Dr }
  }),
  iv(0, Bp(Gp))
], Rr);
export {
  N as RoutingSettingsPackage,
  qa as RoutingTranslations,
  Gd as RoutingWidget,
  Rr as RoutingWidgetProvider,
  se as RoutingWidgetSettingsImpl,
  Md as routingSettingsFormXmi
};
