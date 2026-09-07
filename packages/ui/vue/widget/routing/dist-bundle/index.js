(function(){var i="ui.vue.widget.routing",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".routing-widget{display:flex;flex-direction:column;height:100%;padding:.75rem;gap:.75rem;overflow-y:auto;font-family:inherit;font-size:.875rem}.routing-header{display:flex;align-items:center;justify-content:space-between;gap:.5rem}.routing-title{font-weight:600;font-size:1rem;color:#c45e00}.costing-select{padding:.25rem .5rem;border:1px solid #ddd;border-radius:4px;font-size:.8rem;background:#fff}.waypoints-list{display:flex;flex-direction:column;gap:.5rem}.waypoint-row{display:flex;align-items:flex-start;gap:.5rem}.waypoint-dot{width:12px;height:12px;border-radius:50%;margin-top:1.4rem;flex-shrink:0}.waypoint-input-wrapper{flex:1;position:relative}.waypoint-label{display:block;font-size:.7rem;color:#888;margin-bottom:2px}.waypoint-input{width:100%;padding:.35rem .5rem;border:1px solid #ddd;border-radius:4px;font-size:.8rem;box-sizing:border-box}.waypoint-input:focus{outline:none;border-color:#c45e00}.suggestions-dropdown{position:absolute;top:100%;left:0;right:0;background:#fff;border:1px solid #ddd;border-radius:0 0 4px 4px;z-index:100;max-height:200px;overflow-y:auto;box-shadow:0 4px 8px #0000001a}.suggestion-item{padding:.4rem .5rem;cursor:pointer;font-size:.75rem;border-bottom:1px solid #f0f0f0}.suggestion-item:hover{background:#fff3e0}.remove-btn{background:none;border:none;color:#999;font-size:1.2rem;cursor:pointer;padding:.2rem;margin-top:1.2rem;line-height:1}.remove-btn:hover{color:#f44336}.routing-actions{display:flex;gap:.5rem;flex-wrap:wrap}.btn-primary{padding:.4rem .75rem;background:#c45e00;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:.8rem;font-weight:500}.btn-primary:hover{background:#a04e00}.btn-primary:disabled{background:#ccc;cursor:not-allowed}.btn-secondary{padding:.4rem .75rem;background:#fff;color:#555;border:1px solid #ddd;border-radius:4px;cursor:pointer;font-size:.8rem}.btn-secondary:hover{background:#f5f5f5}.btn-clear{padding:.4rem .75rem;background:#fff;color:#f44336;border:1px solid #ffcdd2;border-radius:4px;cursor:pointer;font-size:.8rem}.btn-clear:hover{background:#ffebee}.route-result{border-top:1px solid #e0e0e0;padding-top:.75rem}.result-summary{display:flex;gap:1rem;flex-wrap:wrap}.summary-item{display:flex;flex-direction:column}.summary-value{font-weight:600;font-size:1rem;color:#333}.summary-label{font-size:.7rem;color:#888}.maneuvers-section{margin-top:.75rem}.maneuvers-toggle{background:none;border:none;cursor:pointer;font-size:.8rem;color:#555;padding:.25rem 0;font-weight:500}.maneuvers-toggle:hover{color:#c45e00}.maneuvers-list{margin-top:.5rem;display:flex;flex-direction:column;gap:.25rem}.maneuver-item{display:flex;justify-content:space-between;align-items:flex-start;gap:.5rem;padding:.3rem 0;border-bottom:1px solid #f5f5f5;font-size:.75rem}.maneuver-instruction{flex:1;color:#333}.maneuver-distance{color:#888;white-space:nowrap}.routing-settings[data-v-79a5860e]{display:flex;flex-direction:column;gap:.75rem;padding:.5rem}\n";})();
import { PayloadImpl as fu, WidgetActionInterfaceImpl as Fp, EVENT_ACTIONS_REGISTRY as Up, EventsPackage as Wp, EVENT_REGISTRY_ID as bp } from "org.eclipse.daanse.board.app.lib.api.events";
import { activate as Gp, deactivate as Pp, component as Mp, inject as Bp } from "@eclipse-daanse/tsm";
import { defineComponent as qa, toRefs as Xa, inject as uu, ref as At, watch as Ln, computed as su, onMounted as Yp, onUnmounted as $p, createElementBlock as Ne, openBlock as Ce, createElementVNode as V, createCommentVNode as sn, withDirectives as Ha, Fragment as Or, renderList as Sr, toDisplayString as Xe, vModelSelect as Hp, normalizeStyle as Kp, vModelText as qp, withModifiers as Xp, resolveComponent as zp, unref as au, createVNode as Zp } from "vue";
import { useRoute as Jp } from "vue-router";
import { useDatasourceRepository as Vp } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { BasicEObject as kp, BasicEFactory as jp, BasicEPackage as ed, EPackageRegistry as za, BasicEClass as Nr, BasicEAttribute as ze, getEcorePackage as Ze } from "@emfts/core";
import { SET_WAYPOINTS as td } from "org.eclipse.daanse.board.app.lib.datasource.valhalla";
import { WIDGET_SERVICE_ID as nd } from "org.eclipse.daanse.board.app.lib.api.widget";
const { identifiers: Qp } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), rd = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3ccircle%20cx='6'%20cy='19'%20r='3'/%3e%3ccircle%20cx='18'%20cy='5'%20r='3'/%3e%3cpath%20d='M12%2019h4.5a3.5%203.5%200%200%200%200-7h-9a3.5%203.5%200%200%201%200-7H12'/%3e%3c/svg%3e";
class se extends kp {
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
    return C.Literals.ROUTING_WIDGET_SETTINGS;
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
    return C.Literals.ROUTE_CALCULATED_PAYLOAD;
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
    return C.Literals.WAYPOINT_PAYLOAD;
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
}
class lu extends jp {
  // Lazy singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new lu()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(C.eINSTANCE);
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
function ou(re) {
  const g = za.INSTANCE.getEPackage(re);
  if (!g)
    throw new Error(`EPackage '${re}' is not registered. Access the eINSTANCE of that model's generated package (or register it via EPackageRegistry.INSTANCE.registerPackage) before initializing RoutingSettingsPackage.`);
  return g;
}
class C extends ed {
  static eNAME = "RoutingSettings";
  static eNS_URI = "http://org.eclipse.daanse.board.app.ui.vue.widget.routing";
  static eNS_PREFIX = "RoutingSettings";
  // Singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new C(), this._instance.init()), this._instance;
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
    super(), this.setName(C.eNAME), this.setNsURI(C.eNS_URI), this.setNsPrefix(C.eNS_PREFIX);
  }
  /**
   * Initialize package contents
   */
  init() {
    za.INSTANCE.set(C.eNS_URI, this), this.setEFactoryInstance(lu.eINSTANCE);
    const g = new Nr();
    g.setName("RoutingWidgetInterface"), g.setAbstract(!0), g.setInterface(!1), this.getEClassifiers().push(g), g.setEPackage(this), C.Literals.ROUTING_WIDGET_INTERFACE = g;
    const s = new Nr();
    s.setName("RoutingWidgetSettings"), s.setAbstract(!1), s.setInterface(!1), this.getEClassifiers().push(s), s.setEPackage(this), C.Literals.ROUTING_WIDGET_SETTINGS = s;
    const H = new ze();
    H.setName("defaultCosting"), H.setLowerBound(0), H.setUpperBound(1), s.getEStructuralFeatures().push(H), C.Literals.ROUTING_WIDGET_SETTINGS__DEFAULT_COSTING = H;
    const X = new ze();
    X.setName("costing"), X.setLowerBound(0), X.setUpperBound(1), s.getEStructuralFeatures().push(X), C.Literals.ROUTING_WIDGET_SETTINGS__COSTING = X;
    const K = new ze();
    K.setName("waypoints"), K.setLowerBound(0), K.setUpperBound(1), s.getEStructuralFeatures().push(K), C.Literals.ROUTING_WIDGET_SETTINGS__WAYPOINTS = K;
    const b = new Nr();
    b.setName("RouteCalculatedPayload"), b.setAbstract(!1), b.setInterface(!1), this.getEClassifiers().push(b), b.setEPackage(this), C.Literals.ROUTE_CALCULATED_PAYLOAD = b;
    const We = new ze();
    We.setName("geojson"), We.setLowerBound(0), We.setUpperBound(1), b.getEStructuralFeatures().push(We), C.Literals.ROUTE_CALCULATED_PAYLOAD__GEOJSON = We;
    const rt = new ze();
    rt.setName("distance_km"), rt.setLowerBound(0), rt.setUpperBound(1), b.getEStructuralFeatures().push(rt), C.Literals.ROUTE_CALCULATED_PAYLOAD__DISTANCE_KM = rt;
    const at = new ze();
    at.setName("duration_min"), at.setLowerBound(0), at.setUpperBound(1), b.getEStructuralFeatures().push(at), C.Literals.ROUTE_CALCULATED_PAYLOAD__DURATION_MIN = at;
    const oe = new ze();
    oe.setName("waypoints"), oe.setLowerBound(0), oe.setUpperBound(1), b.getEStructuralFeatures().push(oe), C.Literals.ROUTE_CALCULATED_PAYLOAD__WAYPOINTS = oe;
    const U = new ze();
    U.setName("costing"), U.setLowerBound(0), U.setUpperBound(1), b.getEStructuralFeatures().push(U), C.Literals.ROUTE_CALCULATED_PAYLOAD__COSTING = U;
    const j = new Nr();
    j.setName("WaypointPayload"), j.setAbstract(!1), j.setInterface(!1), this.getEClassifiers().push(j), j.setEPackage(this), C.Literals.WAYPOINT_PAYLOAD = j;
    const ee = new ze();
    ee.setName("lat"), ee.setLowerBound(0), ee.setUpperBound(1), j.getEStructuralFeatures().push(ee), C.Literals.WAYPOINT_PAYLOAD__LAT = ee;
    const ge = new ze();
    ge.setName("lon"), ge.setLowerBound(0), ge.setUpperBound(1), j.getEStructuralFeatures().push(ge), C.Literals.WAYPOINT_PAYLOAD__LON = ge;
    const we = new ze();
    we.setName("name"), we.setLowerBound(0), we.setUpperBound(1), j.getEStructuralFeatures().push(we), C.Literals.WAYPOINT_PAYLOAD__NAME = we;
    const Z = new ze();
    Z.setName("index"), Z.setLowerBound(0), Z.setUpperBound(1), j.getEStructuralFeatures().push(Z), C.Literals.WAYPOINT_PAYLOAD__INDEX = Z, C.Literals.ROUTING_WIDGET_INTERFACE.getESuperTypes().push(ou("http://org.eclipse.daanse.board.app.lib.events").getEClassifier("WidgetActionInterface")), C.Literals.ROUTE_CALCULATED_PAYLOAD.getESuperTypes().push(ou("http://org.eclipse.daanse.board.app.lib.events").getEClassifier("Payload")), C.Literals.WAYPOINT_PAYLOAD.getESuperTypes().push(ou("http://org.eclipse.daanse.board.app.lib.events").getEClassifier("Payload")), C.Literals.ROUTING_WIDGET_SETTINGS__DEFAULT_COSTING.setEType(Ze().getEClassifier("EString")), C.Literals.ROUTING_WIDGET_SETTINGS__COSTING.setEType(Ze().getEClassifier("EString")), C.Literals.ROUTING_WIDGET_SETTINGS__WAYPOINTS.setEType(Ze().getEClassifier("EJavaObject")), C.Literals.ROUTE_CALCULATED_PAYLOAD__GEOJSON.setEType(Ze().getEClassifier("EJavaObject")), C.Literals.ROUTE_CALCULATED_PAYLOAD__DISTANCE_KM.setEType(Ze().getEClassifier("EDouble")), C.Literals.ROUTE_CALCULATED_PAYLOAD__DURATION_MIN.setEType(Ze().getEClassifier("EDouble")), C.Literals.ROUTE_CALCULATED_PAYLOAD__WAYPOINTS.setEType(Ze().getEClassifier("EJavaObject")), C.Literals.ROUTE_CALCULATED_PAYLOAD__COSTING.setEType(Ze().getEClassifier("EString")), C.Literals.WAYPOINT_PAYLOAD__LAT.setEType(Ze().getEClassifier("EDouble")), C.Literals.WAYPOINT_PAYLOAD__LON.setEType(Ze().getEClassifier("EDouble")), C.Literals.WAYPOINT_PAYLOAD__NAME.setEType(Ze().getEClassifier("EString")), C.Literals.WAYPOINT_PAYLOAD__INDEX.setEType(Ze().getEClassifier("EInt"));
  }
}
class id extends Fp {
  // Feature ID Constants (eLiterals)
  // Private fields
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return C.Literals.ROUTING_WIDGET_INTERFACE;
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
    const H = this.eClass().getFeatureID(g);
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
  addWaypoint(g, s, H) {
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
var Cr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, xn = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var ud = xn.exports, Ka;
function sd() {
  return Ka || (Ka = 1, (function(re, g) {
    (function() {
      var s, H = "4.17.21", X = 200, K = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", b = "Expected a function", We = "Invalid `variable` option passed into `_.template`", rt = "__lodash_hash_undefined__", at = 500, oe = "__lodash_placeholder__", U = 1, j = 2, ee = 4, ge = 1, we = 2, Z = 1, ce = 2, Dt = 4, Le = 8, Tt = 16, Je = 32, Et = 64, Ve = 128, Rt = 256, Ht = 512, yr = 30, Dr = "...", Rr = 800, Fr = 16, yn = 1, Dn = 2, Ur = 3, ot = 1 / 0, be = 9007199254740991, Rn = 17976931348623157e292, Ft = NaN, Ge = 4294967295, Wr = Ge - 1, br = Ge >>> 1, Fn = [
        ["ary", Ve],
        ["bind", Z],
        ["bindKey", ce],
        ["curry", Le],
        ["curryRight", Tt],
        ["flip", Ht],
        ["partial", Je],
        ["partialRight", Et],
        ["rearg", Rt]
      ], w = "[object Arguments]", T = "[object Array]", x = "[object AsyncFunction]", q = "[object Boolean]", ae = "[object Date]", Gr = "[object DOMException]", an = "[object Error]", Un = "[object Function]", hu = "[object GeneratorFunction]", Qe = "[object Map]", on = "[object Number]", Za = "[object Null]", ft = "[object Object]", gu = "[object Promise]", Ja = "[object Proxy]", fn = "[object RegExp]", ke = "[object Set]", ln = "[object String]", Wn = "[object Symbol]", Va = "[object Undefined]", cn = "[object WeakMap]", Qa = "[object WeakSet]", hn = "[object ArrayBuffer]", Kt = "[object DataView]", Pr = "[object Float32Array]", Mr = "[object Float64Array]", Br = "[object Int8Array]", Yr = "[object Int16Array]", $r = "[object Int32Array]", Hr = "[object Uint8Array]", Kr = "[object Uint8ClampedArray]", qr = "[object Uint16Array]", Xr = "[object Uint32Array]", ka = /\b__p \+= '';/g, ja = /\b(__p \+=) '' \+/g, eo = /(__e\(.*?\)|\b__t\)) \+\n'';/g, _u = /&(?:amp|lt|gt|quot|#39);/g, pu = /[&<>"']/g, to = RegExp(_u.source), no = RegExp(pu.source), ro = /<%-([\s\S]+?)%>/g, io = /<%([\s\S]+?)%>/g, du = /<%=([\s\S]+?)%>/g, uo = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, so = /^\w*$/, ao = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, zr = /[\\^$.*+?()[\]{}|]/g, oo = RegExp(zr.source), Zr = /^\s+/, fo = /\s/, lo = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, co = /\{\n\/\* \[wrapped with (.+)\] \*/, ho = /,? & /, go = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, _o = /[()=,{}\[\]\/\s]/, po = /\\(\\)?/g, vo = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, vu = /\w*$/, wo = /^[-+]0x[0-9a-f]+$/i, Ao = /^0b[01]+$/i, To = /^\[object .+?Constructor\]$/, Eo = /^0o[0-7]+$/i, Io = /^(?:0|[1-9]\d*)$/, mo = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, bn = /($^)/, Oo = /['\n\r\u2028\u2029\\]/g, Gn = "\\ud800-\\udfff", So = "\\u0300-\\u036f", No = "\\ufe20-\\ufe2f", Co = "\\u20d0-\\u20ff", wu = So + No + Co, Au = "\\u2700-\\u27bf", Tu = "a-z\\xdf-\\xf6\\xf8-\\xff", Lo = "\\xac\\xb1\\xd7\\xf7", xo = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", yo = "\\u2000-\\u206f", Do = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Eu = "A-Z\\xc0-\\xd6\\xd8-\\xde", Iu = "\\ufe0e\\ufe0f", mu = Lo + xo + yo + Do, Jr = "['’]", Ro = "[" + Gn + "]", Ou = "[" + mu + "]", Pn = "[" + wu + "]", Su = "\\d+", Fo = "[" + Au + "]", Nu = "[" + Tu + "]", Cu = "[^" + Gn + mu + Su + Au + Tu + Eu + "]", Vr = "\\ud83c[\\udffb-\\udfff]", Uo = "(?:" + Pn + "|" + Vr + ")", Lu = "[^" + Gn + "]", Qr = "(?:\\ud83c[\\udde6-\\uddff]){2}", kr = "[\\ud800-\\udbff][\\udc00-\\udfff]", qt = "[" + Eu + "]", xu = "\\u200d", yu = "(?:" + Nu + "|" + Cu + ")", Wo = "(?:" + qt + "|" + Cu + ")", Du = "(?:" + Jr + "(?:d|ll|m|re|s|t|ve))?", Ru = "(?:" + Jr + "(?:D|LL|M|RE|S|T|VE))?", Fu = Uo + "?", Uu = "[" + Iu + "]?", bo = "(?:" + xu + "(?:" + [Lu, Qr, kr].join("|") + ")" + Uu + Fu + ")*", Go = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Po = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Wu = Uu + Fu + bo, Mo = "(?:" + [Fo, Qr, kr].join("|") + ")" + Wu, Bo = "(?:" + [Lu + Pn + "?", Pn, Qr, kr, Ro].join("|") + ")", Yo = RegExp(Jr, "g"), $o = RegExp(Pn, "g"), jr = RegExp(Vr + "(?=" + Vr + ")|" + Bo + Wu, "g"), Ho = RegExp([
        qt + "?" + Nu + "+" + Du + "(?=" + [Ou, qt, "$"].join("|") + ")",
        Wo + "+" + Ru + "(?=" + [Ou, qt + yu, "$"].join("|") + ")",
        qt + "?" + yu + "+" + Du,
        qt + "+" + Ru,
        Po,
        Go,
        Su,
        Mo
      ].join("|"), "g"), Ko = RegExp("[" + xu + Gn + wu + Iu + "]"), qo = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Xo = [
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
      ], zo = -1, Q = {};
      Q[Pr] = Q[Mr] = Q[Br] = Q[Yr] = Q[$r] = Q[Hr] = Q[Kr] = Q[qr] = Q[Xr] = !0, Q[w] = Q[T] = Q[hn] = Q[q] = Q[Kt] = Q[ae] = Q[an] = Q[Un] = Q[Qe] = Q[on] = Q[ft] = Q[fn] = Q[ke] = Q[ln] = Q[cn] = !1;
      var J = {};
      J[w] = J[T] = J[hn] = J[Kt] = J[q] = J[ae] = J[Pr] = J[Mr] = J[Br] = J[Yr] = J[$r] = J[Qe] = J[on] = J[ft] = J[fn] = J[ke] = J[ln] = J[Wn] = J[Hr] = J[Kr] = J[qr] = J[Xr] = !0, J[an] = J[Un] = J[cn] = !1;
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
      }, Jo = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }, Vo = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      }, Qo = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      }, ko = parseFloat, jo = parseInt, bu = typeof Cr == "object" && Cr && Cr.Object === Object && Cr, ef = typeof self == "object" && self && self.Object === Object && self, _e = bu || ef || Function("return this")(), ei = g && !g.nodeType && g, Ut = ei && !0 && re && !re.nodeType && re, Gu = Ut && Ut.exports === ei, ti = Gu && bu.process, Pe = (function() {
        try {
          var l = Ut && Ut.require && Ut.require("util").types;
          return l || ti && ti.binding && ti.binding("util");
        } catch {
        }
      })(), Pu = Pe && Pe.isArrayBuffer, Mu = Pe && Pe.isDate, Bu = Pe && Pe.isMap, Yu = Pe && Pe.isRegExp, $u = Pe && Pe.isSet, Hu = Pe && Pe.isTypedArray;
      function xe(l, _, h) {
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
      function tf(l, _, h, E) {
        for (var N = -1, M = l == null ? 0 : l.length; ++N < M; ) {
          var fe = l[N];
          _(E, fe, h(fe), l);
        }
        return E;
      }
      function Me(l, _) {
        for (var h = -1, E = l == null ? 0 : l.length; ++h < E && _(l[h], h, l) !== !1; )
          ;
        return l;
      }
      function nf(l, _) {
        for (var h = l == null ? 0 : l.length; h-- && _(l[h], h, l) !== !1; )
          ;
        return l;
      }
      function Ku(l, _) {
        for (var h = -1, E = l == null ? 0 : l.length; ++h < E; )
          if (!_(l[h], h, l))
            return !1;
        return !0;
      }
      function It(l, _) {
        for (var h = -1, E = l == null ? 0 : l.length, N = 0, M = []; ++h < E; ) {
          var fe = l[h];
          _(fe, h, l) && (M[N++] = fe);
        }
        return M;
      }
      function Mn(l, _) {
        var h = l == null ? 0 : l.length;
        return !!h && Xt(l, _, 0) > -1;
      }
      function ni(l, _, h) {
        for (var E = -1, N = l == null ? 0 : l.length; ++E < N; )
          if (h(_, l[E]))
            return !0;
        return !1;
      }
      function k(l, _) {
        for (var h = -1, E = l == null ? 0 : l.length, N = Array(E); ++h < E; )
          N[h] = _(l[h], h, l);
        return N;
      }
      function mt(l, _) {
        for (var h = -1, E = _.length, N = l.length; ++h < E; )
          l[N + h] = _[h];
        return l;
      }
      function ri(l, _, h, E) {
        var N = -1, M = l == null ? 0 : l.length;
        for (E && M && (h = l[++N]); ++N < M; )
          h = _(h, l[N], N, l);
        return h;
      }
      function rf(l, _, h, E) {
        var N = l == null ? 0 : l.length;
        for (E && N && (h = l[--N]); N--; )
          h = _(h, l[N], N, l);
        return h;
      }
      function ii(l, _) {
        for (var h = -1, E = l == null ? 0 : l.length; ++h < E; )
          if (_(l[h], h, l))
            return !0;
        return !1;
      }
      var uf = ui("length");
      function sf(l) {
        return l.split("");
      }
      function af(l) {
        return l.match(go) || [];
      }
      function qu(l, _, h) {
        var E;
        return h(l, function(N, M, fe) {
          if (_(N, M, fe))
            return E = M, !1;
        }), E;
      }
      function Bn(l, _, h, E) {
        for (var N = l.length, M = h + (E ? 1 : -1); E ? M-- : ++M < N; )
          if (_(l[M], M, l))
            return M;
        return -1;
      }
      function Xt(l, _, h) {
        return _ === _ ? Af(l, _, h) : Bn(l, Xu, h);
      }
      function of(l, _, h, E) {
        for (var N = h - 1, M = l.length; ++N < M; )
          if (E(l[N], _))
            return N;
        return -1;
      }
      function Xu(l) {
        return l !== l;
      }
      function zu(l, _) {
        var h = l == null ? 0 : l.length;
        return h ? ai(l, _) / h : Ft;
      }
      function ui(l) {
        return function(_) {
          return _ == null ? s : _[l];
        };
      }
      function si(l) {
        return function(_) {
          return l == null ? s : l[_];
        };
      }
      function Zu(l, _, h, E, N) {
        return N(l, function(M, fe, z) {
          h = E ? (E = !1, M) : _(h, M, fe, z);
        }), h;
      }
      function ff(l, _) {
        var h = l.length;
        for (l.sort(_); h--; )
          l[h] = l[h].value;
        return l;
      }
      function ai(l, _) {
        for (var h, E = -1, N = l.length; ++E < N; ) {
          var M = _(l[E]);
          M !== s && (h = h === s ? M : h + M);
        }
        return h;
      }
      function oi(l, _) {
        for (var h = -1, E = Array(l); ++h < l; )
          E[h] = _(h);
        return E;
      }
      function lf(l, _) {
        return k(_, function(h) {
          return [h, l[h]];
        });
      }
      function Ju(l) {
        return l && l.slice(0, ju(l) + 1).replace(Zr, "");
      }
      function ye(l) {
        return function(_) {
          return l(_);
        };
      }
      function fi(l, _) {
        return k(_, function(h) {
          return l[h];
        });
      }
      function gn(l, _) {
        return l.has(_);
      }
      function Vu(l, _) {
        for (var h = -1, E = l.length; ++h < E && Xt(_, l[h], 0) > -1; )
          ;
        return h;
      }
      function Qu(l, _) {
        for (var h = l.length; h-- && Xt(_, l[h], 0) > -1; )
          ;
        return h;
      }
      function cf(l, _) {
        for (var h = l.length, E = 0; h--; )
          l[h] === _ && ++E;
        return E;
      }
      var hf = si(Zo), gf = si(Jo);
      function _f(l) {
        return "\\" + Qo[l];
      }
      function pf(l, _) {
        return l == null ? s : l[_];
      }
      function zt(l) {
        return Ko.test(l);
      }
      function df(l) {
        return qo.test(l);
      }
      function vf(l) {
        for (var _, h = []; !(_ = l.next()).done; )
          h.push(_.value);
        return h;
      }
      function li(l) {
        var _ = -1, h = Array(l.size);
        return l.forEach(function(E, N) {
          h[++_] = [N, E];
        }), h;
      }
      function ku(l, _) {
        return function(h) {
          return l(_(h));
        };
      }
      function Ot(l, _) {
        for (var h = -1, E = l.length, N = 0, M = []; ++h < E; ) {
          var fe = l[h];
          (fe === _ || fe === oe) && (l[h] = oe, M[N++] = h);
        }
        return M;
      }
      function Yn(l) {
        var _ = -1, h = Array(l.size);
        return l.forEach(function(E) {
          h[++_] = E;
        }), h;
      }
      function wf(l) {
        var _ = -1, h = Array(l.size);
        return l.forEach(function(E) {
          h[++_] = [E, E];
        }), h;
      }
      function Af(l, _, h) {
        for (var E = h - 1, N = l.length; ++E < N; )
          if (l[E] === _)
            return E;
        return -1;
      }
      function Tf(l, _, h) {
        for (var E = h + 1; E--; )
          if (l[E] === _)
            return E;
        return E;
      }
      function Zt(l) {
        return zt(l) ? If(l) : uf(l);
      }
      function je(l) {
        return zt(l) ? mf(l) : sf(l);
      }
      function ju(l) {
        for (var _ = l.length; _-- && fo.test(l.charAt(_)); )
          ;
        return _;
      }
      var Ef = si(Vo);
      function If(l) {
        for (var _ = jr.lastIndex = 0; jr.test(l); )
          ++_;
        return _;
      }
      function mf(l) {
        return l.match(jr) || [];
      }
      function Of(l) {
        return l.match(Ho) || [];
      }
      var Sf = (function l(_) {
        _ = _ == null ? _e : Jt.defaults(_e.Object(), _, Jt.pick(_e, Xo));
        var h = _.Array, E = _.Date, N = _.Error, M = _.Function, fe = _.Math, z = _.Object, ci = _.RegExp, Nf = _.String, Be = _.TypeError, $n = h.prototype, Cf = M.prototype, Vt = z.prototype, Hn = _["__core-js_shared__"], Kn = Cf.toString, $ = Vt.hasOwnProperty, Lf = 0, es = (function() {
          var e = /[^.]+$/.exec(Hn && Hn.keys && Hn.keys.IE_PROTO || "");
          return e ? "Symbol(src)_1." + e : "";
        })(), qn = Vt.toString, xf = Kn.call(z), yf = _e._, Df = ci(
          "^" + Kn.call($).replace(zr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        ), Xn = Gu ? _.Buffer : s, St = _.Symbol, zn = _.Uint8Array, ts = Xn ? Xn.allocUnsafe : s, Zn = ku(z.getPrototypeOf, z), ns = z.create, rs = Vt.propertyIsEnumerable, Jn = $n.splice, is = St ? St.isConcatSpreadable : s, _n = St ? St.iterator : s, Wt = St ? St.toStringTag : s, Vn = (function() {
          try {
            var e = Bt(z, "defineProperty");
            return e({}, "", {}), e;
          } catch {
          }
        })(), Rf = _.clearTimeout !== _e.clearTimeout && _.clearTimeout, Ff = E && E.now !== _e.Date.now && E.now, Uf = _.setTimeout !== _e.setTimeout && _.setTimeout, Qn = fe.ceil, kn = fe.floor, hi = z.getOwnPropertySymbols, Wf = Xn ? Xn.isBuffer : s, us = _.isFinite, bf = $n.join, Gf = ku(z.keys, z), le = fe.max, de = fe.min, Pf = E.now, Mf = _.parseInt, ss = fe.random, Bf = $n.reverse, gi = Bt(_, "DataView"), pn = Bt(_, "Map"), _i = Bt(_, "Promise"), Qt = Bt(_, "Set"), dn = Bt(_, "WeakMap"), vn = Bt(z, "create"), jn = dn && new dn(), kt = {}, Yf = Yt(gi), $f = Yt(pn), Hf = Yt(_i), Kf = Yt(Qt), qf = Yt(dn), er = St ? St.prototype : s, wn = er ? er.valueOf : s, as = er ? er.toString : s;
        function u(e) {
          if (ne(e) && !L(e) && !(e instanceof W)) {
            if (e instanceof Ye)
              return e;
            if ($.call(e, "__wrapped__"))
              return oa(e);
          }
          return new Ye(e);
        }
        var jt = /* @__PURE__ */ (function() {
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
        function tr() {
        }
        function Ye(e, t) {
          this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = s;
        }
        u.templateSettings = {
          /**
           * Used to detect `data` property values to be HTML-escaped.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          escape: ro,
          /**
           * Used to detect code to be evaluated.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          evaluate: io,
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
        }, u.prototype = tr.prototype, u.prototype.constructor = u, Ye.prototype = jt(tr.prototype), Ye.prototype.constructor = Ye;
        function W(e) {
          this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Ge, this.__views__ = [];
        }
        function Xf() {
          var e = new W(this.__wrapped__);
          return e.__actions__ = Ie(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = Ie(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = Ie(this.__views__), e;
        }
        function zf() {
          if (this.__filtered__) {
            var e = new W(this);
            e.__dir__ = -1, e.__filtered__ = !0;
          } else
            e = this.clone(), e.__dir__ *= -1;
          return e;
        }
        function Zf() {
          var e = this.__wrapped__.value(), t = this.__dir__, n = L(e), r = t < 0, i = n ? e.length : 0, a = sc(0, i, this.__views__), o = a.start, f = a.end, c = f - o, p = r ? f : o - 1, d = this.__iteratees__, v = d.length, A = 0, I = de(c, this.__takeCount__);
          if (!n || !r && i == c && I == c)
            return Ds(e, this.__actions__);
          var O = [];
          e:
            for (; c-- && A < I; ) {
              p += t;
              for (var D = -1, S = e[p]; ++D < v; ) {
                var F = d[D], G = F.iteratee, Fe = F.type, Ee = G(S);
                if (Fe == Dn)
                  S = Ee;
                else if (!Ee) {
                  if (Fe == yn)
                    continue e;
                  break e;
                }
              }
              O[A++] = S;
            }
          return O;
        }
        W.prototype = jt(tr.prototype), W.prototype.constructor = W;
        function bt(e) {
          var t = -1, n = e == null ? 0 : e.length;
          for (this.clear(); ++t < n; ) {
            var r = e[t];
            this.set(r[0], r[1]);
          }
        }
        function Jf() {
          this.__data__ = vn ? vn(null) : {}, this.size = 0;
        }
        function Vf(e) {
          var t = this.has(e) && delete this.__data__[e];
          return this.size -= t ? 1 : 0, t;
        }
        function Qf(e) {
          var t = this.__data__;
          if (vn) {
            var n = t[e];
            return n === rt ? s : n;
          }
          return $.call(t, e) ? t[e] : s;
        }
        function kf(e) {
          var t = this.__data__;
          return vn ? t[e] !== s : $.call(t, e);
        }
        function jf(e, t) {
          var n = this.__data__;
          return this.size += this.has(e) ? 0 : 1, n[e] = vn && t === s ? rt : t, this;
        }
        bt.prototype.clear = Jf, bt.prototype.delete = Vf, bt.prototype.get = Qf, bt.prototype.has = kf, bt.prototype.set = jf;
        function lt(e) {
          var t = -1, n = e == null ? 0 : e.length;
          for (this.clear(); ++t < n; ) {
            var r = e[t];
            this.set(r[0], r[1]);
          }
        }
        function el() {
          this.__data__ = [], this.size = 0;
        }
        function tl(e) {
          var t = this.__data__, n = nr(t, e);
          if (n < 0)
            return !1;
          var r = t.length - 1;
          return n == r ? t.pop() : Jn.call(t, n, 1), --this.size, !0;
        }
        function nl(e) {
          var t = this.__data__, n = nr(t, e);
          return n < 0 ? s : t[n][1];
        }
        function rl(e) {
          return nr(this.__data__, e) > -1;
        }
        function il(e, t) {
          var n = this.__data__, r = nr(n, e);
          return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
        }
        lt.prototype.clear = el, lt.prototype.delete = tl, lt.prototype.get = nl, lt.prototype.has = rl, lt.prototype.set = il;
        function ct(e) {
          var t = -1, n = e == null ? 0 : e.length;
          for (this.clear(); ++t < n; ) {
            var r = e[t];
            this.set(r[0], r[1]);
          }
        }
        function ul() {
          this.size = 0, this.__data__ = {
            hash: new bt(),
            map: new (pn || lt)(),
            string: new bt()
          };
        }
        function sl(e) {
          var t = _r(this, e).delete(e);
          return this.size -= t ? 1 : 0, t;
        }
        function al(e) {
          return _r(this, e).get(e);
        }
        function ol(e) {
          return _r(this, e).has(e);
        }
        function fl(e, t) {
          var n = _r(this, e), r = n.size;
          return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
        }
        ct.prototype.clear = ul, ct.prototype.delete = sl, ct.prototype.get = al, ct.prototype.has = ol, ct.prototype.set = fl;
        function Gt(e) {
          var t = -1, n = e == null ? 0 : e.length;
          for (this.__data__ = new ct(); ++t < n; )
            this.add(e[t]);
        }
        function ll(e) {
          return this.__data__.set(e, rt), this;
        }
        function cl(e) {
          return this.__data__.has(e);
        }
        Gt.prototype.add = Gt.prototype.push = ll, Gt.prototype.has = cl;
        function et(e) {
          var t = this.__data__ = new lt(e);
          this.size = t.size;
        }
        function hl() {
          this.__data__ = new lt(), this.size = 0;
        }
        function gl(e) {
          var t = this.__data__, n = t.delete(e);
          return this.size = t.size, n;
        }
        function _l(e) {
          return this.__data__.get(e);
        }
        function pl(e) {
          return this.__data__.has(e);
        }
        function dl(e, t) {
          var n = this.__data__;
          if (n instanceof lt) {
            var r = n.__data__;
            if (!pn || r.length < X - 1)
              return r.push([e, t]), this.size = ++n.size, this;
            n = this.__data__ = new ct(r);
          }
          return n.set(e, t), this.size = n.size, this;
        }
        et.prototype.clear = hl, et.prototype.delete = gl, et.prototype.get = _l, et.prototype.has = pl, et.prototype.set = dl;
        function os(e, t) {
          var n = L(e), r = !n && $t(e), i = !n && !r && yt(e), a = !n && !r && !i && rn(e), o = n || r || i || a, f = o ? oi(e.length, Nf) : [], c = f.length;
          for (var p in e)
            (t || $.call(e, p)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
            (p == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            i && (p == "offset" || p == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            a && (p == "buffer" || p == "byteLength" || p == "byteOffset") || // Skip index properties.
            pt(p, c))) && f.push(p);
          return f;
        }
        function fs(e) {
          var t = e.length;
          return t ? e[Si(0, t - 1)] : s;
        }
        function vl(e, t) {
          return pr(Ie(e), Pt(t, 0, e.length));
        }
        function wl(e) {
          return pr(Ie(e));
        }
        function pi(e, t, n) {
          (n !== s && !tt(e[t], n) || n === s && !(t in e)) && ht(e, t, n);
        }
        function An(e, t, n) {
          var r = e[t];
          (!($.call(e, t) && tt(r, n)) || n === s && !(t in e)) && ht(e, t, n);
        }
        function nr(e, t) {
          for (var n = e.length; n--; )
            if (tt(e[n][0], t))
              return n;
          return -1;
        }
        function Al(e, t, n, r) {
          return Nt(e, function(i, a, o) {
            t(r, i, n(i), o);
          }), r;
        }
        function ls(e, t) {
          return e && ut(t, he(t), e);
        }
        function Tl(e, t) {
          return e && ut(t, Oe(t), e);
        }
        function ht(e, t, n) {
          t == "__proto__" && Vn ? Vn(e, t, {
            configurable: !0,
            enumerable: !0,
            value: n,
            writable: !0
          }) : e[t] = n;
        }
        function di(e, t) {
          for (var n = -1, r = t.length, i = h(r), a = e == null; ++n < r; )
            i[n] = a ? s : Vi(e, t[n]);
          return i;
        }
        function Pt(e, t, n) {
          return e === e && (n !== s && (e = e <= n ? e : n), t !== s && (e = e >= t ? e : t)), e;
        }
        function $e(e, t, n, r, i, a) {
          var o, f = t & U, c = t & j, p = t & ee;
          if (n && (o = i ? n(e, r, i, a) : n(e)), o !== s)
            return o;
          if (!te(e))
            return e;
          var d = L(e);
          if (d) {
            if (o = oc(e), !f)
              return Ie(e, o);
          } else {
            var v = ve(e), A = v == Un || v == hu;
            if (yt(e))
              return Us(e, f);
            if (v == ft || v == w || A && !i) {
              if (o = c || A ? {} : js(e), !f)
                return c ? Ql(e, Tl(o, e)) : Vl(e, ls(o, e));
            } else {
              if (!J[v])
                return i ? e : {};
              o = fc(e, v, f);
            }
          }
          a || (a = new et());
          var I = a.get(e);
          if (I)
            return I;
          a.set(e, o), La(e) ? e.forEach(function(S) {
            o.add($e(S, t, n, S, e, a));
          }) : Na(e) && e.forEach(function(S, F) {
            o.set(F, $e(S, t, n, F, e, a));
          });
          var O = p ? c ? bi : Wi : c ? Oe : he, D = d ? s : O(e);
          return Me(D || e, function(S, F) {
            D && (F = S, S = e[F]), An(o, F, $e(S, t, n, F, e, a));
          }), o;
        }
        function El(e) {
          var t = he(e);
          return function(n) {
            return cs(n, e, t);
          };
        }
        function cs(e, t, n) {
          var r = n.length;
          if (e == null)
            return !r;
          for (e = z(e); r--; ) {
            var i = n[r], a = t[i], o = e[i];
            if (o === s && !(i in e) || !a(o))
              return !1;
          }
          return !0;
        }
        function hs(e, t, n) {
          if (typeof e != "function")
            throw new Be(b);
          return Nn(function() {
            e.apply(s, n);
          }, t);
        }
        function Tn(e, t, n, r) {
          var i = -1, a = Mn, o = !0, f = e.length, c = [], p = t.length;
          if (!f)
            return c;
          n && (t = k(t, ye(n))), r ? (a = ni, o = !1) : t.length >= X && (a = gn, o = !1, t = new Gt(t));
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
        var Nt = Ms(it), gs = Ms(wi, !0);
        function Il(e, t) {
          var n = !0;
          return Nt(e, function(r, i, a) {
            return n = !!t(r, i, a), n;
          }), n;
        }
        function rr(e, t, n) {
          for (var r = -1, i = e.length; ++r < i; ) {
            var a = e[r], o = t(a);
            if (o != null && (f === s ? o === o && !Re(o) : n(o, f)))
              var f = o, c = a;
          }
          return c;
        }
        function ml(e, t, n, r) {
          var i = e.length;
          for (n = y(n), n < 0 && (n = -n > i ? 0 : i + n), r = r === s || r > i ? i : y(r), r < 0 && (r += i), r = n > r ? 0 : ya(r); n < r; )
            e[n++] = t;
          return e;
        }
        function _s(e, t) {
          var n = [];
          return Nt(e, function(r, i, a) {
            t(r, i, a) && n.push(r);
          }), n;
        }
        function pe(e, t, n, r, i) {
          var a = -1, o = e.length;
          for (n || (n = cc), i || (i = []); ++a < o; ) {
            var f = e[a];
            t > 0 && n(f) ? t > 1 ? pe(f, t - 1, n, r, i) : mt(i, f) : r || (i[i.length] = f);
          }
          return i;
        }
        var vi = Bs(), ps = Bs(!0);
        function it(e, t) {
          return e && vi(e, t, he);
        }
        function wi(e, t) {
          return e && ps(e, t, he);
        }
        function ir(e, t) {
          return It(t, function(n) {
            return dt(e[n]);
          });
        }
        function Mt(e, t) {
          t = Lt(t, e);
          for (var n = 0, r = t.length; e != null && n < r; )
            e = e[st(t[n++])];
          return n && n == r ? e : s;
        }
        function ds(e, t, n) {
          var r = t(e);
          return L(e) ? r : mt(r, n(e));
        }
        function Ae(e) {
          return e == null ? e === s ? Va : Za : Wt && Wt in z(e) ? uc(e) : wc(e);
        }
        function Ai(e, t) {
          return e > t;
        }
        function Ol(e, t) {
          return e != null && $.call(e, t);
        }
        function Sl(e, t) {
          return e != null && t in z(e);
        }
        function Nl(e, t, n) {
          return e >= de(t, n) && e < le(t, n);
        }
        function Ti(e, t, n) {
          for (var r = n ? ni : Mn, i = e[0].length, a = e.length, o = a, f = h(a), c = 1 / 0, p = []; o--; ) {
            var d = e[o];
            o && t && (d = k(d, ye(t))), c = de(d.length, c), f[o] = !n && (t || i >= 120 && d.length >= 120) ? new Gt(o && d) : s;
          }
          d = e[0];
          var v = -1, A = f[0];
          e:
            for (; ++v < i && p.length < c; ) {
              var I = d[v], O = t ? t(I) : I;
              if (I = n || I !== 0 ? I : 0, !(A ? gn(A, O) : r(p, O, n))) {
                for (o = a; --o; ) {
                  var D = f[o];
                  if (!(D ? gn(D, O) : r(e[o], O, n)))
                    continue e;
                }
                A && A.push(O), p.push(I);
              }
            }
          return p;
        }
        function Cl(e, t, n, r) {
          return it(e, function(i, a, o) {
            t(r, n(i), a, o);
          }), r;
        }
        function En(e, t, n) {
          t = Lt(t, e), e = ra(e, t);
          var r = e == null ? e : e[st(Ke(t))];
          return r == null ? s : xe(r, e, n);
        }
        function vs(e) {
          return ne(e) && Ae(e) == w;
        }
        function Ll(e) {
          return ne(e) && Ae(e) == hn;
        }
        function xl(e) {
          return ne(e) && Ae(e) == ae;
        }
        function In(e, t, n, r, i) {
          return e === t ? !0 : e == null || t == null || !ne(e) && !ne(t) ? e !== e && t !== t : yl(e, t, n, r, In, i);
        }
        function yl(e, t, n, r, i, a) {
          var o = L(e), f = L(t), c = o ? T : ve(e), p = f ? T : ve(t);
          c = c == w ? ft : c, p = p == w ? ft : p;
          var d = c == ft, v = p == ft, A = c == p;
          if (A && yt(e)) {
            if (!yt(t))
              return !1;
            o = !0, d = !1;
          }
          if (A && !d)
            return a || (a = new et()), o || rn(e) ? Vs(e, t, n, r, i, a) : rc(e, t, c, n, r, i, a);
          if (!(n & ge)) {
            var I = d && $.call(e, "__wrapped__"), O = v && $.call(t, "__wrapped__");
            if (I || O) {
              var D = I ? e.value() : e, S = O ? t.value() : t;
              return a || (a = new et()), i(D, S, n, r, a);
            }
          }
          return A ? (a || (a = new et()), ic(e, t, n, r, i, a)) : !1;
        }
        function Dl(e) {
          return ne(e) && ve(e) == Qe;
        }
        function Ei(e, t, n, r) {
          var i = n.length, a = i, o = !r;
          if (e == null)
            return !a;
          for (e = z(e); i--; ) {
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
              var v = new et();
              if (r)
                var A = r(p, d, c, e, t, v);
              if (!(A === s ? In(d, p, ge | we, r, v) : A))
                return !1;
            }
          }
          return !0;
        }
        function ws(e) {
          if (!te(e) || gc(e))
            return !1;
          var t = dt(e) ? Df : To;
          return t.test(Yt(e));
        }
        function Rl(e) {
          return ne(e) && Ae(e) == fn;
        }
        function Fl(e) {
          return ne(e) && ve(e) == ke;
        }
        function Ul(e) {
          return ne(e) && Er(e.length) && !!Q[Ae(e)];
        }
        function As(e) {
          return typeof e == "function" ? e : e == null ? Se : typeof e == "object" ? L(e) ? Is(e[0], e[1]) : Es(e) : Ya(e);
        }
        function Ii(e) {
          if (!Sn(e))
            return Gf(e);
          var t = [];
          for (var n in z(e))
            $.call(e, n) && n != "constructor" && t.push(n);
          return t;
        }
        function Wl(e) {
          if (!te(e))
            return vc(e);
          var t = Sn(e), n = [];
          for (var r in e)
            r == "constructor" && (t || !$.call(e, r)) || n.push(r);
          return n;
        }
        function mi(e, t) {
          return e < t;
        }
        function Ts(e, t) {
          var n = -1, r = me(e) ? h(e.length) : [];
          return Nt(e, function(i, a, o) {
            r[++n] = t(i, a, o);
          }), r;
        }
        function Es(e) {
          var t = Pi(e);
          return t.length == 1 && t[0][2] ? ta(t[0][0], t[0][1]) : function(n) {
            return n === e || Ei(n, e, t);
          };
        }
        function Is(e, t) {
          return Bi(e) && ea(t) ? ta(st(e), t) : function(n) {
            var r = Vi(n, e);
            return r === s && r === t ? Qi(n, e) : In(t, r, ge | we);
          };
        }
        function ur(e, t, n, r, i) {
          e !== t && vi(t, function(a, o) {
            if (i || (i = new et()), te(a))
              bl(e, t, o, n, ur, r, i);
            else {
              var f = r ? r($i(e, o), a, o + "", e, t, i) : s;
              f === s && (f = a), pi(e, o, f);
            }
          }, Oe);
        }
        function bl(e, t, n, r, i, a, o) {
          var f = $i(e, n), c = $i(t, n), p = o.get(c);
          if (p) {
            pi(e, n, p);
            return;
          }
          var d = a ? a(f, c, n + "", e, t, o) : s, v = d === s;
          if (v) {
            var A = L(c), I = !A && yt(c), O = !A && !I && rn(c);
            d = c, A || I || O ? L(f) ? d = f : ie(f) ? d = Ie(f) : I ? (v = !1, d = Us(c, !0)) : O ? (v = !1, d = Ws(c, !0)) : d = [] : Cn(c) || $t(c) ? (d = f, $t(f) ? d = Da(f) : (!te(f) || dt(f)) && (d = js(c))) : v = !1;
          }
          v && (o.set(c, d), i(d, c, r, a, o), o.delete(c)), pi(e, n, d);
        }
        function ms(e, t) {
          var n = e.length;
          if (n)
            return t += t < 0 ? n : 0, pt(t, n) ? e[t] : s;
        }
        function Os(e, t, n) {
          t.length ? t = k(t, function(a) {
            return L(a) ? function(o) {
              return Mt(o, a.length === 1 ? a[0] : a);
            } : a;
          }) : t = [Se];
          var r = -1;
          t = k(t, ye(m()));
          var i = Ts(e, function(a, o, f) {
            var c = k(t, function(p) {
              return p(a);
            });
            return { criteria: c, index: ++r, value: a };
          });
          return ff(i, function(a, o) {
            return Jl(a, o, n);
          });
        }
        function Gl(e, t) {
          return Ss(e, t, function(n, r) {
            return Qi(e, r);
          });
        }
        function Ss(e, t, n) {
          for (var r = -1, i = t.length, a = {}; ++r < i; ) {
            var o = t[r], f = Mt(e, o);
            n(f, o) && mn(a, Lt(o, e), f);
          }
          return a;
        }
        function Pl(e) {
          return function(t) {
            return Mt(t, e);
          };
        }
        function Oi(e, t, n, r) {
          var i = r ? of : Xt, a = -1, o = t.length, f = e;
          for (e === t && (t = Ie(t)), n && (f = k(e, ye(n))); ++a < o; )
            for (var c = 0, p = t[a], d = n ? n(p) : p; (c = i(f, d, c, r)) > -1; )
              f !== e && Jn.call(f, c, 1), Jn.call(e, c, 1);
          return e;
        }
        function Ns(e, t) {
          for (var n = e ? t.length : 0, r = n - 1; n--; ) {
            var i = t[n];
            if (n == r || i !== a) {
              var a = i;
              pt(i) ? Jn.call(e, i, 1) : Li(e, i);
            }
          }
          return e;
        }
        function Si(e, t) {
          return e + kn(ss() * (t - e + 1));
        }
        function Ml(e, t, n, r) {
          for (var i = -1, a = le(Qn((t - e) / (n || 1)), 0), o = h(a); a--; )
            o[r ? a : ++i] = e, e += n;
          return o;
        }
        function Ni(e, t) {
          var n = "";
          if (!e || t < 1 || t > be)
            return n;
          do
            t % 2 && (n += e), t = kn(t / 2), t && (e += e);
          while (t);
          return n;
        }
        function R(e, t) {
          return Hi(na(e, t, Se), e + "");
        }
        function Bl(e) {
          return fs(un(e));
        }
        function Yl(e, t) {
          var n = un(e);
          return pr(n, Pt(t, 0, n.length));
        }
        function mn(e, t, n, r) {
          if (!te(e))
            return e;
          t = Lt(t, e);
          for (var i = -1, a = t.length, o = a - 1, f = e; f != null && ++i < a; ) {
            var c = st(t[i]), p = n;
            if (c === "__proto__" || c === "constructor" || c === "prototype")
              return e;
            if (i != o) {
              var d = f[c];
              p = r ? r(d, c, f) : s, p === s && (p = te(d) ? d : pt(t[i + 1]) ? [] : {});
            }
            An(f, c, p), f = f[c];
          }
          return e;
        }
        var Cs = jn ? function(e, t) {
          return jn.set(e, t), e;
        } : Se, $l = Vn ? function(e, t) {
          return Vn(e, "toString", {
            configurable: !0,
            enumerable: !1,
            value: ji(t),
            writable: !0
          });
        } : Se;
        function Hl(e) {
          return pr(un(e));
        }
        function He(e, t, n) {
          var r = -1, i = e.length;
          t < 0 && (t = -t > i ? 0 : i + t), n = n > i ? i : n, n < 0 && (n += i), i = t > n ? 0 : n - t >>> 0, t >>>= 0;
          for (var a = h(i); ++r < i; )
            a[r] = e[r + t];
          return a;
        }
        function Kl(e, t) {
          var n;
          return Nt(e, function(r, i, a) {
            return n = t(r, i, a), !n;
          }), !!n;
        }
        function sr(e, t, n) {
          var r = 0, i = e == null ? r : e.length;
          if (typeof t == "number" && t === t && i <= br) {
            for (; r < i; ) {
              var a = r + i >>> 1, o = e[a];
              o !== null && !Re(o) && (n ? o <= t : o < t) ? r = a + 1 : i = a;
            }
            return i;
          }
          return Ci(e, t, Se, n);
        }
        function Ci(e, t, n, r) {
          var i = 0, a = e == null ? 0 : e.length;
          if (a === 0)
            return 0;
          t = n(t);
          for (var o = t !== t, f = t === null, c = Re(t), p = t === s; i < a; ) {
            var d = kn((i + a) / 2), v = n(e[d]), A = v !== s, I = v === null, O = v === v, D = Re(v);
            if (o)
              var S = r || O;
            else p ? S = O && (r || A) : f ? S = O && A && (r || !I) : c ? S = O && A && !I && (r || !D) : I || D ? S = !1 : S = r ? v <= t : v < t;
            S ? i = d + 1 : a = d;
          }
          return de(a, Wr);
        }
        function Ls(e, t) {
          for (var n = -1, r = e.length, i = 0, a = []; ++n < r; ) {
            var o = e[n], f = t ? t(o) : o;
            if (!n || !tt(f, c)) {
              var c = f;
              a[i++] = o === 0 ? 0 : o;
            }
          }
          return a;
        }
        function xs(e) {
          return typeof e == "number" ? e : Re(e) ? Ft : +e;
        }
        function De(e) {
          if (typeof e == "string")
            return e;
          if (L(e))
            return k(e, De) + "";
          if (Re(e))
            return as ? as.call(e) : "";
          var t = e + "";
          return t == "0" && 1 / e == -ot ? "-0" : t;
        }
        function Ct(e, t, n) {
          var r = -1, i = Mn, a = e.length, o = !0, f = [], c = f;
          if (n)
            o = !1, i = ni;
          else if (a >= X) {
            var p = t ? null : tc(e);
            if (p)
              return Yn(p);
            o = !1, i = gn, c = new Gt();
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
        function Li(e, t) {
          return t = Lt(t, e), e = ra(e, t), e == null || delete e[st(Ke(t))];
        }
        function ys(e, t, n, r) {
          return mn(e, t, n(Mt(e, t)), r);
        }
        function ar(e, t, n, r) {
          for (var i = e.length, a = r ? i : -1; (r ? a-- : ++a < i) && t(e[a], a, e); )
            ;
          return n ? He(e, r ? 0 : a, r ? a + 1 : i) : He(e, r ? a + 1 : 0, r ? i : a);
        }
        function Ds(e, t) {
          var n = e;
          return n instanceof W && (n = n.value()), ri(t, function(r, i) {
            return i.func.apply(i.thisArg, mt([r], i.args));
          }, n);
        }
        function xi(e, t, n) {
          var r = e.length;
          if (r < 2)
            return r ? Ct(e[0]) : [];
          for (var i = -1, a = h(r); ++i < r; )
            for (var o = e[i], f = -1; ++f < r; )
              f != i && (a[i] = Tn(a[i] || o, e[f], t, n));
          return Ct(pe(a, 1), t, n);
        }
        function Rs(e, t, n) {
          for (var r = -1, i = e.length, a = t.length, o = {}; ++r < i; ) {
            var f = r < a ? t[r] : s;
            n(o, e[r], f);
          }
          return o;
        }
        function yi(e) {
          return ie(e) ? e : [];
        }
        function Di(e) {
          return typeof e == "function" ? e : Se;
        }
        function Lt(e, t) {
          return L(e) ? e : Bi(e, t) ? [e] : aa(B(e));
        }
        var ql = R;
        function xt(e, t, n) {
          var r = e.length;
          return n = n === s ? r : n, !t && n >= r ? e : He(e, t, n);
        }
        var Fs = Rf || function(e) {
          return _e.clearTimeout(e);
        };
        function Us(e, t) {
          if (t)
            return e.slice();
          var n = e.length, r = ts ? ts(n) : new e.constructor(n);
          return e.copy(r), r;
        }
        function Ri(e) {
          var t = new e.constructor(e.byteLength);
          return new zn(t).set(new zn(e)), t;
        }
        function Xl(e, t) {
          var n = t ? Ri(e.buffer) : e.buffer;
          return new e.constructor(n, e.byteOffset, e.byteLength);
        }
        function zl(e) {
          var t = new e.constructor(e.source, vu.exec(e));
          return t.lastIndex = e.lastIndex, t;
        }
        function Zl(e) {
          return wn ? z(wn.call(e)) : {};
        }
        function Ws(e, t) {
          var n = t ? Ri(e.buffer) : e.buffer;
          return new e.constructor(n, e.byteOffset, e.length);
        }
        function bs(e, t) {
          if (e !== t) {
            var n = e !== s, r = e === null, i = e === e, a = Re(e), o = t !== s, f = t === null, c = t === t, p = Re(t);
            if (!f && !p && !a && e > t || a && o && c && !f && !p || r && o && c || !n && c || !i)
              return 1;
            if (!r && !a && !p && e < t || p && n && i && !r && !a || f && n && i || !o && i || !c)
              return -1;
          }
          return 0;
        }
        function Jl(e, t, n) {
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
          for (var I = i; ++c < p; )
            v[I + c] = t[c];
          for (; ++o < f; )
            (A || i < a) && (v[I + n[o]] = e[i++]);
          return v;
        }
        function Ie(e, t) {
          var n = -1, r = e.length;
          for (t || (t = h(r)); ++n < r; )
            t[n] = e[n];
          return t;
        }
        function ut(e, t, n, r) {
          var i = !n;
          n || (n = {});
          for (var a = -1, o = t.length; ++a < o; ) {
            var f = t[a], c = r ? r(n[f], e[f], f, n, e) : s;
            c === s && (c = e[f]), i ? ht(n, f, c) : An(n, f, c);
          }
          return n;
        }
        function Vl(e, t) {
          return ut(e, Mi(e), t);
        }
        function Ql(e, t) {
          return ut(e, Qs(e), t);
        }
        function or(e, t) {
          return function(n, r) {
            var i = L(n) ? tf : Al, a = t ? t() : {};
            return i(n, e, m(r, 2), a);
          };
        }
        function en(e) {
          return R(function(t, n) {
            var r = -1, i = n.length, a = i > 1 ? n[i - 1] : s, o = i > 2 ? n[2] : s;
            for (a = e.length > 3 && typeof a == "function" ? (i--, a) : s, o && Te(n[0], n[1], o) && (a = i < 3 ? s : a, i = 1), t = z(t); ++r < i; ) {
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
            if (!me(n))
              return e(n, r);
            for (var i = n.length, a = t ? i : -1, o = z(n); (t ? a-- : ++a < i) && r(o[a], a, o) !== !1; )
              ;
            return n;
          };
        }
        function Bs(e) {
          return function(t, n, r) {
            for (var i = -1, a = z(t), o = r(t), f = o.length; f--; ) {
              var c = o[e ? f : ++i];
              if (n(a[c], c, a) === !1)
                break;
            }
            return t;
          };
        }
        function kl(e, t, n) {
          var r = t & Z, i = On(e);
          function a() {
            var o = this && this !== _e && this instanceof a ? i : e;
            return o.apply(r ? n : this, arguments);
          }
          return a;
        }
        function Ys(e) {
          return function(t) {
            t = B(t);
            var n = zt(t) ? je(t) : s, r = n ? n[0] : t.charAt(0), i = n ? xt(n, 1).join("") : t.slice(1);
            return r[e]() + i;
          };
        }
        function tn(e) {
          return function(t) {
            return ri(Ma(Pa(t).replace(Yo, "")), e, "");
          };
        }
        function On(e) {
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
            var n = jt(e.prototype), r = e.apply(n, t);
            return te(r) ? r : n;
          };
        }
        function jl(e, t, n) {
          var r = On(e);
          function i() {
            for (var a = arguments.length, o = h(a), f = a, c = nn(i); f--; )
              o[f] = arguments[f];
            var p = a < 3 && o[0] !== c && o[a - 1] !== c ? [] : Ot(o, c);
            if (a -= p.length, a < n)
              return Xs(
                e,
                t,
                fr,
                i.placeholder,
                s,
                o,
                p,
                s,
                s,
                n - a
              );
            var d = this && this !== _e && this instanceof i ? r : e;
            return xe(d, this, o);
          }
          return i;
        }
        function $s(e) {
          return function(t, n, r) {
            var i = z(t);
            if (!me(t)) {
              var a = m(n, 3);
              t = he(t), n = function(f) {
                return a(i[f], f, i);
              };
            }
            var o = e(t, n, r);
            return o > -1 ? i[a ? t[o] : o] : s;
          };
        }
        function Hs(e) {
          return _t(function(t) {
            var n = t.length, r = n, i = Ye.prototype.thru;
            for (e && t.reverse(); r--; ) {
              var a = t[r];
              if (typeof a != "function")
                throw new Be(b);
              if (i && !o && gr(a) == "wrapper")
                var o = new Ye([], !0);
            }
            for (r = o ? r : n; ++r < n; ) {
              a = t[r];
              var f = gr(a), c = f == "wrapper" ? Gi(a) : s;
              c && Yi(c[0]) && c[1] == (Ve | Le | Je | Rt) && !c[4].length && c[9] == 1 ? o = o[gr(c[0])].apply(o, c[3]) : o = a.length == 1 && Yi(a) ? o[f]() : o.thru(a);
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
        function fr(e, t, n, r, i, a, o, f, c, p) {
          var d = t & Ve, v = t & Z, A = t & ce, I = t & (Le | Tt), O = t & Ht, D = A ? s : On(e);
          function S() {
            for (var F = arguments.length, G = h(F), Fe = F; Fe--; )
              G[Fe] = arguments[Fe];
            if (I)
              var Ee = nn(S), Ue = cf(G, Ee);
            if (r && (G = Gs(G, r, i, I)), a && (G = Ps(G, a, o, I)), F -= Ue, I && F < p) {
              var ue = Ot(G, Ee);
              return Xs(
                e,
                t,
                fr,
                S.placeholder,
                n,
                G,
                ue,
                f,
                c,
                p - F
              );
            }
            var nt = v ? n : this, wt = A ? nt[e] : e;
            return F = G.length, f ? G = Ac(G, f) : O && F > 1 && G.reverse(), d && c < F && (G.length = c), this && this !== _e && this instanceof S && (wt = D || On(wt)), wt.apply(nt, G);
          }
          return S;
        }
        function Ks(e, t) {
          return function(n, r) {
            return Cl(n, e, t(r), {});
          };
        }
        function lr(e, t) {
          return function(n, r) {
            var i;
            if (n === s && r === s)
              return t;
            if (n !== s && (i = n), r !== s) {
              if (i === s)
                return r;
              typeof n == "string" || typeof r == "string" ? (n = De(n), r = De(r)) : (n = xs(n), r = xs(r)), i = e(n, r);
            }
            return i;
          };
        }
        function Fi(e) {
          return _t(function(t) {
            return t = k(t, ye(m())), R(function(n) {
              var r = this;
              return e(t, function(i) {
                return xe(i, r, n);
              });
            });
          });
        }
        function cr(e, t) {
          t = t === s ? " " : De(t);
          var n = t.length;
          if (n < 2)
            return n ? Ni(t, e) : t;
          var r = Ni(t, Qn(e / Zt(t)));
          return zt(t) ? xt(je(r), 0, e).join("") : r.slice(0, e);
        }
        function ec(e, t, n, r) {
          var i = t & Z, a = On(e);
          function o() {
            for (var f = -1, c = arguments.length, p = -1, d = r.length, v = h(d + c), A = this && this !== _e && this instanceof o ? a : e; ++p < d; )
              v[p] = r[p];
            for (; c--; )
              v[p++] = arguments[++f];
            return xe(A, i ? n : this, v);
          }
          return o;
        }
        function qs(e) {
          return function(t, n, r) {
            return r && typeof r != "number" && Te(t, n, r) && (n = r = s), t = vt(t), n === s ? (n = t, t = 0) : n = vt(n), r = r === s ? t < n ? 1 : -1 : vt(r), Ml(t, n, r, e);
          };
        }
        function hr(e) {
          return function(t, n) {
            return typeof t == "string" && typeof n == "string" || (t = qe(t), n = qe(n)), e(t, n);
          };
        }
        function Xs(e, t, n, r, i, a, o, f, c, p) {
          var d = t & Le, v = d ? o : s, A = d ? s : o, I = d ? a : s, O = d ? s : a;
          t |= d ? Je : Et, t &= ~(d ? Et : Je), t & Dt || (t &= -4);
          var D = [
            e,
            t,
            i,
            I,
            v,
            O,
            A,
            f,
            c,
            p
          ], S = n.apply(s, D);
          return Yi(e) && ia(S, D), S.placeholder = r, ua(S, e, t);
        }
        function Ui(e) {
          var t = fe[e];
          return function(n, r) {
            if (n = qe(n), r = r == null ? 0 : de(y(r), 292), r && us(n)) {
              var i = (B(n) + "e").split("e"), a = t(i[0] + "e" + (+i[1] + r));
              return i = (B(a) + "e").split("e"), +(i[0] + "e" + (+i[1] - r));
            }
            return t(n);
          };
        }
        var tc = Qt && 1 / Yn(new Qt([, -0]))[1] == ot ? function(e) {
          return new Qt(e);
        } : nu;
        function zs(e) {
          return function(t) {
            var n = ve(t);
            return n == Qe ? li(t) : n == ke ? wf(t) : lf(t, e(t));
          };
        }
        function gt(e, t, n, r, i, a, o, f) {
          var c = t & ce;
          if (!c && typeof e != "function")
            throw new Be(b);
          var p = r ? r.length : 0;
          if (p || (t &= -97, r = i = s), o = o === s ? o : le(y(o), 0), f = f === s ? f : y(f), p -= i ? i.length : 0, t & Et) {
            var d = r, v = i;
            r = i = s;
          }
          var A = c ? s : Gi(e), I = [
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
          if (A && dc(I, A), e = I[0], t = I[1], n = I[2], r = I[3], i = I[4], f = I[9] = I[9] === s ? c ? 0 : e.length : le(I[9] - p, 0), !f && t & (Le | Tt) && (t &= -25), !t || t == Z)
            var O = kl(e, t, n);
          else t == Le || t == Tt ? O = jl(e, t, f) : (t == Je || t == (Z | Je)) && !i.length ? O = ec(e, t, n, r) : O = fr.apply(s, I);
          var D = A ? Cs : ia;
          return ua(D(O, I), e, t);
        }
        function Zs(e, t, n, r) {
          return e === s || tt(e, Vt[n]) && !$.call(r, n) ? t : e;
        }
        function Js(e, t, n, r, i, a) {
          return te(e) && te(t) && (a.set(t, e), ur(e, t, s, Js, a), a.delete(t)), e;
        }
        function nc(e) {
          return Cn(e) ? s : e;
        }
        function Vs(e, t, n, r, i, a) {
          var o = n & ge, f = e.length, c = t.length;
          if (f != c && !(o && c > f))
            return !1;
          var p = a.get(e), d = a.get(t);
          if (p && d)
            return p == t && d == e;
          var v = -1, A = !0, I = n & we ? new Gt() : s;
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
            if (I) {
              if (!ii(t, function(F, G) {
                if (!gn(I, G) && (O === F || i(O, F, n, r, a)))
                  return I.push(G);
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
        function rc(e, t, n, r, i, a, o) {
          switch (n) {
            case Kt:
              if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
                return !1;
              e = e.buffer, t = t.buffer;
            case hn:
              return !(e.byteLength != t.byteLength || !a(new zn(e), new zn(t)));
            case q:
            case ae:
            case on:
              return tt(+e, +t);
            case an:
              return e.name == t.name && e.message == t.message;
            case fn:
            case ln:
              return e == t + "";
            case Qe:
              var f = li;
            case ke:
              var c = r & ge;
              if (f || (f = Yn), e.size != t.size && !c)
                return !1;
              var p = o.get(e);
              if (p)
                return p == t;
              r |= we, o.set(e, t);
              var d = Vs(f(e), f(t), r, i, a, o);
              return o.delete(e), d;
            case Wn:
              if (wn)
                return wn.call(e) == wn.call(t);
          }
          return !1;
        }
        function ic(e, t, n, r, i, a) {
          var o = n & ge, f = Wi(e), c = f.length, p = Wi(t), d = p.length;
          if (c != d && !o)
            return !1;
          for (var v = c; v--; ) {
            var A = f[v];
            if (!(o ? A in t : $.call(t, A)))
              return !1;
          }
          var I = a.get(e), O = a.get(t);
          if (I && O)
            return I == t && O == e;
          var D = !0;
          a.set(e, t), a.set(t, e);
          for (var S = o; ++v < c; ) {
            A = f[v];
            var F = e[A], G = t[A];
            if (r)
              var Fe = o ? r(G, F, A, t, e, a) : r(F, G, A, e, t, a);
            if (!(Fe === s ? F === G || i(F, G, n, r, a) : Fe)) {
              D = !1;
              break;
            }
            S || (S = A == "constructor");
          }
          if (D && !S) {
            var Ee = e.constructor, Ue = t.constructor;
            Ee != Ue && "constructor" in e && "constructor" in t && !(typeof Ee == "function" && Ee instanceof Ee && typeof Ue == "function" && Ue instanceof Ue) && (D = !1);
          }
          return a.delete(e), a.delete(t), D;
        }
        function _t(e) {
          return Hi(na(e, s, ca), e + "");
        }
        function Wi(e) {
          return ds(e, he, Mi);
        }
        function bi(e) {
          return ds(e, Oe, Qs);
        }
        var Gi = jn ? function(e) {
          return jn.get(e);
        } : nu;
        function gr(e) {
          for (var t = e.name + "", n = kt[t], r = $.call(kt, t) ? n.length : 0; r--; ) {
            var i = n[r], a = i.func;
            if (a == null || a == e)
              return i.name;
          }
          return t;
        }
        function nn(e) {
          var t = $.call(u, "placeholder") ? u : e;
          return t.placeholder;
        }
        function m() {
          var e = u.iteratee || eu;
          return e = e === eu ? As : e, arguments.length ? e(arguments[0], arguments[1]) : e;
        }
        function _r(e, t) {
          var n = e.__data__;
          return hc(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
        }
        function Pi(e) {
          for (var t = he(e), n = t.length; n--; ) {
            var r = t[n], i = e[r];
            t[n] = [r, i, ea(i)];
          }
          return t;
        }
        function Bt(e, t) {
          var n = pf(e, t);
          return ws(n) ? n : s;
        }
        function uc(e) {
          var t = $.call(e, Wt), n = e[Wt];
          try {
            e[Wt] = s;
            var r = !0;
          } catch {
          }
          var i = qn.call(e);
          return r && (t ? e[Wt] = n : delete e[Wt]), i;
        }
        var Mi = hi ? function(e) {
          return e == null ? [] : (e = z(e), It(hi(e), function(t) {
            return rs.call(e, t);
          }));
        } : ru, Qs = hi ? function(e) {
          for (var t = []; e; )
            mt(t, Mi(e)), e = Zn(e);
          return t;
        } : ru, ve = Ae;
        (gi && ve(new gi(new ArrayBuffer(1))) != Kt || pn && ve(new pn()) != Qe || _i && ve(_i.resolve()) != gu || Qt && ve(new Qt()) != ke || dn && ve(new dn()) != cn) && (ve = function(e) {
          var t = Ae(e), n = t == ft ? e.constructor : s, r = n ? Yt(n) : "";
          if (r)
            switch (r) {
              case Yf:
                return Kt;
              case $f:
                return Qe;
              case Hf:
                return gu;
              case Kf:
                return ke;
              case qf:
                return cn;
            }
          return t;
        });
        function sc(e, t, n) {
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
                t = de(t, e + o);
                break;
              case "takeRight":
                e = le(e, t - o);
                break;
            }
          }
          return { start: e, end: t };
        }
        function ac(e) {
          var t = e.match(co);
          return t ? t[1].split(ho) : [];
        }
        function ks(e, t, n) {
          t = Lt(t, e);
          for (var r = -1, i = t.length, a = !1; ++r < i; ) {
            var o = st(t[r]);
            if (!(a = e != null && n(e, o)))
              break;
            e = e[o];
          }
          return a || ++r != i ? a : (i = e == null ? 0 : e.length, !!i && Er(i) && pt(o, i) && (L(e) || $t(e)));
        }
        function oc(e) {
          var t = e.length, n = new e.constructor(t);
          return t && typeof e[0] == "string" && $.call(e, "index") && (n.index = e.index, n.input = e.input), n;
        }
        function js(e) {
          return typeof e.constructor == "function" && !Sn(e) ? jt(Zn(e)) : {};
        }
        function fc(e, t, n) {
          var r = e.constructor;
          switch (t) {
            case hn:
              return Ri(e);
            case q:
            case ae:
              return new r(+e);
            case Kt:
              return Xl(e, n);
            case Pr:
            case Mr:
            case Br:
            case Yr:
            case $r:
            case Hr:
            case Kr:
            case qr:
            case Xr:
              return Ws(e, n);
            case Qe:
              return new r();
            case on:
            case ln:
              return new r(e);
            case fn:
              return zl(e);
            case ke:
              return new r();
            case Wn:
              return Zl(e);
          }
        }
        function lc(e, t) {
          var n = t.length;
          if (!n)
            return e;
          var r = n - 1;
          return t[r] = (n > 1 ? "& " : "") + t[r], t = t.join(n > 2 ? ", " : " "), e.replace(lo, `{
/* [wrapped with ` + t + `] */
`);
        }
        function cc(e) {
          return L(e) || $t(e) || !!(is && e && e[is]);
        }
        function pt(e, t) {
          var n = typeof e;
          return t = t ?? be, !!t && (n == "number" || n != "symbol" && Io.test(e)) && e > -1 && e % 1 == 0 && e < t;
        }
        function Te(e, t, n) {
          if (!te(n))
            return !1;
          var r = typeof t;
          return (r == "number" ? me(n) && pt(t, n.length) : r == "string" && t in n) ? tt(n[t], e) : !1;
        }
        function Bi(e, t) {
          if (L(e))
            return !1;
          var n = typeof e;
          return n == "number" || n == "symbol" || n == "boolean" || e == null || Re(e) ? !0 : so.test(e) || !uo.test(e) || t != null && e in z(t);
        }
        function hc(e) {
          var t = typeof e;
          return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
        }
        function Yi(e) {
          var t = gr(e), n = u[t];
          if (typeof n != "function" || !(t in W.prototype))
            return !1;
          if (e === n)
            return !0;
          var r = Gi(n);
          return !!r && e === r[0];
        }
        function gc(e) {
          return !!es && es in e;
        }
        var _c = Hn ? dt : iu;
        function Sn(e) {
          var t = e && e.constructor, n = typeof t == "function" && t.prototype || Vt;
          return e === n;
        }
        function ea(e) {
          return e === e && !te(e);
        }
        function ta(e, t) {
          return function(n) {
            return n == null ? !1 : n[e] === t && (t !== s || e in z(n));
          };
        }
        function pc(e) {
          var t = Ar(e, function(r) {
            return n.size === at && n.clear(), r;
          }), n = t.cache;
          return t;
        }
        function dc(e, t) {
          var n = e[1], r = t[1], i = n | r, a = i < (Z | ce | Ve), o = r == Ve && n == Le || r == Ve && n == Rt && e[7].length <= t[8] || r == (Ve | Rt) && t[7].length <= t[8] && n == Le;
          if (!(a || o))
            return e;
          r & Z && (e[2] = t[2], i |= n & Z ? 0 : Dt);
          var f = t[3];
          if (f) {
            var c = e[3];
            e[3] = c ? Gs(c, f, t[4]) : f, e[4] = c ? Ot(e[3], oe) : t[4];
          }
          return f = t[5], f && (c = e[5], e[5] = c ? Ps(c, f, t[6]) : f, e[6] = c ? Ot(e[5], oe) : t[6]), f = t[7], f && (e[7] = f), r & Ve && (e[8] = e[8] == null ? t[8] : de(e[8], t[8])), e[9] == null && (e[9] = t[9]), e[0] = t[0], e[1] = i, e;
        }
        function vc(e) {
          var t = [];
          if (e != null)
            for (var n in z(e))
              t.push(n);
          return t;
        }
        function wc(e) {
          return qn.call(e);
        }
        function na(e, t, n) {
          return t = le(t === s ? e.length - 1 : t, 0), function() {
            for (var r = arguments, i = -1, a = le(r.length - t, 0), o = h(a); ++i < a; )
              o[i] = r[t + i];
            i = -1;
            for (var f = h(t + 1); ++i < t; )
              f[i] = r[i];
            return f[t] = n(o), xe(e, this, f);
          };
        }
        function ra(e, t) {
          return t.length < 2 ? e : Mt(e, He(t, 0, -1));
        }
        function Ac(e, t) {
          for (var n = e.length, r = de(t.length, n), i = Ie(e); r--; ) {
            var a = t[r];
            e[r] = pt(a, n) ? i[a] : s;
          }
          return e;
        }
        function $i(e, t) {
          if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
            return e[t];
        }
        var ia = sa(Cs), Nn = Uf || function(e, t) {
          return _e.setTimeout(e, t);
        }, Hi = sa($l);
        function ua(e, t, n) {
          var r = t + "";
          return Hi(e, lc(r, Tc(ac(r), n)));
        }
        function sa(e) {
          var t = 0, n = 0;
          return function() {
            var r = Pf(), i = Fr - (r - n);
            if (n = r, i > 0) {
              if (++t >= Rr)
                return arguments[0];
            } else
              t = 0;
            return e.apply(s, arguments);
          };
        }
        function pr(e, t) {
          var n = -1, r = e.length, i = r - 1;
          for (t = t === s ? r : t; ++n < t; ) {
            var a = Si(n, i), o = e[a];
            e[a] = e[n], e[n] = o;
          }
          return e.length = t, e;
        }
        var aa = pc(function(e) {
          var t = [];
          return e.charCodeAt(0) === 46 && t.push(""), e.replace(ao, function(n, r, i, a) {
            t.push(i ? a.replace(po, "$1") : r || n);
          }), t;
        });
        function st(e) {
          if (typeof e == "string" || Re(e))
            return e;
          var t = e + "";
          return t == "0" && 1 / e == -ot ? "-0" : t;
        }
        function Yt(e) {
          if (e != null) {
            try {
              return Kn.call(e);
            } catch {
            }
            try {
              return e + "";
            } catch {
            }
          }
          return "";
        }
        function Tc(e, t) {
          return Me(Fn, function(n) {
            var r = "_." + n[0];
            t & n[1] && !Mn(e, r) && e.push(r);
          }), e.sort();
        }
        function oa(e) {
          if (e instanceof W)
            return e.clone();
          var t = new Ye(e.__wrapped__, e.__chain__);
          return t.__actions__ = Ie(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t;
        }
        function Ec(e, t, n) {
          (n ? Te(e, t, n) : t === s) ? t = 1 : t = le(y(t), 0);
          var r = e == null ? 0 : e.length;
          if (!r || t < 1)
            return [];
          for (var i = 0, a = 0, o = h(Qn(r / t)); i < r; )
            o[a++] = He(e, i, i += t);
          return o;
        }
        function Ic(e) {
          for (var t = -1, n = e == null ? 0 : e.length, r = 0, i = []; ++t < n; ) {
            var a = e[t];
            a && (i[r++] = a);
          }
          return i;
        }
        function mc() {
          var e = arguments.length;
          if (!e)
            return [];
          for (var t = h(e - 1), n = arguments[0], r = e; r--; )
            t[r - 1] = arguments[r];
          return mt(L(n) ? Ie(n) : [n], pe(t, 1));
        }
        var Oc = R(function(e, t) {
          return ie(e) ? Tn(e, pe(t, 1, ie, !0)) : [];
        }), Sc = R(function(e, t) {
          var n = Ke(t);
          return ie(n) && (n = s), ie(e) ? Tn(e, pe(t, 1, ie, !0), m(n, 2)) : [];
        }), Nc = R(function(e, t) {
          var n = Ke(t);
          return ie(n) && (n = s), ie(e) ? Tn(e, pe(t, 1, ie, !0), s, n) : [];
        });
        function Cc(e, t, n) {
          var r = e == null ? 0 : e.length;
          return r ? (t = n || t === s ? 1 : y(t), He(e, t < 0 ? 0 : t, r)) : [];
        }
        function Lc(e, t, n) {
          var r = e == null ? 0 : e.length;
          return r ? (t = n || t === s ? 1 : y(t), t = r - t, He(e, 0, t < 0 ? 0 : t)) : [];
        }
        function xc(e, t) {
          return e && e.length ? ar(e, m(t, 3), !0, !0) : [];
        }
        function yc(e, t) {
          return e && e.length ? ar(e, m(t, 3), !0) : [];
        }
        function Dc(e, t, n, r) {
          var i = e == null ? 0 : e.length;
          return i ? (n && typeof n != "number" && Te(e, t, n) && (n = 0, r = i), ml(e, t, n, r)) : [];
        }
        function fa(e, t, n) {
          var r = e == null ? 0 : e.length;
          if (!r)
            return -1;
          var i = n == null ? 0 : y(n);
          return i < 0 && (i = le(r + i, 0)), Bn(e, m(t, 3), i);
        }
        function la(e, t, n) {
          var r = e == null ? 0 : e.length;
          if (!r)
            return -1;
          var i = r - 1;
          return n !== s && (i = y(n), i = n < 0 ? le(r + i, 0) : de(i, r - 1)), Bn(e, m(t, 3), i, !0);
        }
        function ca(e) {
          var t = e == null ? 0 : e.length;
          return t ? pe(e, 1) : [];
        }
        function Rc(e) {
          var t = e == null ? 0 : e.length;
          return t ? pe(e, ot) : [];
        }
        function Fc(e, t) {
          var n = e == null ? 0 : e.length;
          return n ? (t = t === s ? 1 : y(t), pe(e, t)) : [];
        }
        function Uc(e) {
          for (var t = -1, n = e == null ? 0 : e.length, r = {}; ++t < n; ) {
            var i = e[t];
            r[i[0]] = i[1];
          }
          return r;
        }
        function ha(e) {
          return e && e.length ? e[0] : s;
        }
        function Wc(e, t, n) {
          var r = e == null ? 0 : e.length;
          if (!r)
            return -1;
          var i = n == null ? 0 : y(n);
          return i < 0 && (i = le(r + i, 0)), Xt(e, t, i);
        }
        function bc(e) {
          var t = e == null ? 0 : e.length;
          return t ? He(e, 0, -1) : [];
        }
        var Gc = R(function(e) {
          var t = k(e, yi);
          return t.length && t[0] === e[0] ? Ti(t) : [];
        }), Pc = R(function(e) {
          var t = Ke(e), n = k(e, yi);
          return t === Ke(n) ? t = s : n.pop(), n.length && n[0] === e[0] ? Ti(n, m(t, 2)) : [];
        }), Mc = R(function(e) {
          var t = Ke(e), n = k(e, yi);
          return t = typeof t == "function" ? t : s, t && n.pop(), n.length && n[0] === e[0] ? Ti(n, s, t) : [];
        });
        function Bc(e, t) {
          return e == null ? "" : bf.call(e, t);
        }
        function Ke(e) {
          var t = e == null ? 0 : e.length;
          return t ? e[t - 1] : s;
        }
        function Yc(e, t, n) {
          var r = e == null ? 0 : e.length;
          if (!r)
            return -1;
          var i = r;
          return n !== s && (i = y(n), i = i < 0 ? le(r + i, 0) : de(i, r - 1)), t === t ? Tf(e, t, i) : Bn(e, Xu, i, !0);
        }
        function $c(e, t) {
          return e && e.length ? ms(e, y(t)) : s;
        }
        var Hc = R(ga);
        function ga(e, t) {
          return e && e.length && t && t.length ? Oi(e, t) : e;
        }
        function Kc(e, t, n) {
          return e && e.length && t && t.length ? Oi(e, t, m(n, 2)) : e;
        }
        function qc(e, t, n) {
          return e && e.length && t && t.length ? Oi(e, t, s, n) : e;
        }
        var Xc = _t(function(e, t) {
          var n = e == null ? 0 : e.length, r = di(e, t);
          return Ns(e, k(t, function(i) {
            return pt(i, n) ? +i : i;
          }).sort(bs)), r;
        });
        function zc(e, t) {
          var n = [];
          if (!(e && e.length))
            return n;
          var r = -1, i = [], a = e.length;
          for (t = m(t, 3); ++r < a; ) {
            var o = e[r];
            t(o, r, e) && (n.push(o), i.push(r));
          }
          return Ns(e, i), n;
        }
        function Ki(e) {
          return e == null ? e : Bf.call(e);
        }
        function Zc(e, t, n) {
          var r = e == null ? 0 : e.length;
          return r ? (n && typeof n != "number" && Te(e, t, n) ? (t = 0, n = r) : (t = t == null ? 0 : y(t), n = n === s ? r : y(n)), He(e, t, n)) : [];
        }
        function Jc(e, t) {
          return sr(e, t);
        }
        function Vc(e, t, n) {
          return Ci(e, t, m(n, 2));
        }
        function Qc(e, t) {
          var n = e == null ? 0 : e.length;
          if (n) {
            var r = sr(e, t);
            if (r < n && tt(e[r], t))
              return r;
          }
          return -1;
        }
        function kc(e, t) {
          return sr(e, t, !0);
        }
        function jc(e, t, n) {
          return Ci(e, t, m(n, 2), !0);
        }
        function eh(e, t) {
          var n = e == null ? 0 : e.length;
          if (n) {
            var r = sr(e, t, !0) - 1;
            if (tt(e[r], t))
              return r;
          }
          return -1;
        }
        function th(e) {
          return e && e.length ? Ls(e) : [];
        }
        function nh(e, t) {
          return e && e.length ? Ls(e, m(t, 2)) : [];
        }
        function rh(e) {
          var t = e == null ? 0 : e.length;
          return t ? He(e, 1, t) : [];
        }
        function ih(e, t, n) {
          return e && e.length ? (t = n || t === s ? 1 : y(t), He(e, 0, t < 0 ? 0 : t)) : [];
        }
        function uh(e, t, n) {
          var r = e == null ? 0 : e.length;
          return r ? (t = n || t === s ? 1 : y(t), t = r - t, He(e, t < 0 ? 0 : t, r)) : [];
        }
        function sh(e, t) {
          return e && e.length ? ar(e, m(t, 3), !1, !0) : [];
        }
        function ah(e, t) {
          return e && e.length ? ar(e, m(t, 3)) : [];
        }
        var oh = R(function(e) {
          return Ct(pe(e, 1, ie, !0));
        }), fh = R(function(e) {
          var t = Ke(e);
          return ie(t) && (t = s), Ct(pe(e, 1, ie, !0), m(t, 2));
        }), lh = R(function(e) {
          var t = Ke(e);
          return t = typeof t == "function" ? t : s, Ct(pe(e, 1, ie, !0), s, t);
        });
        function ch(e) {
          return e && e.length ? Ct(e) : [];
        }
        function hh(e, t) {
          return e && e.length ? Ct(e, m(t, 2)) : [];
        }
        function gh(e, t) {
          return t = typeof t == "function" ? t : s, e && e.length ? Ct(e, s, t) : [];
        }
        function qi(e) {
          if (!(e && e.length))
            return [];
          var t = 0;
          return e = It(e, function(n) {
            if (ie(n))
              return t = le(n.length, t), !0;
          }), oi(t, function(n) {
            return k(e, ui(n));
          });
        }
        function _a(e, t) {
          if (!(e && e.length))
            return [];
          var n = qi(e);
          return t == null ? n : k(n, function(r) {
            return xe(t, s, r);
          });
        }
        var _h = R(function(e, t) {
          return ie(e) ? Tn(e, t) : [];
        }), ph = R(function(e) {
          return xi(It(e, ie));
        }), dh = R(function(e) {
          var t = Ke(e);
          return ie(t) && (t = s), xi(It(e, ie), m(t, 2));
        }), vh = R(function(e) {
          var t = Ke(e);
          return t = typeof t == "function" ? t : s, xi(It(e, ie), s, t);
        }), wh = R(qi);
        function Ah(e, t) {
          return Rs(e || [], t || [], An);
        }
        function Th(e, t) {
          return Rs(e || [], t || [], mn);
        }
        var Eh = R(function(e) {
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
        function dr(e, t) {
          return t(e);
        }
        var mh = _t(function(e) {
          var t = e.length, n = t ? e[0] : 0, r = this.__wrapped__, i = function(a) {
            return di(a, e);
          };
          return t > 1 || this.__actions__.length || !(r instanceof W) || !pt(n) ? this.thru(i) : (r = r.slice(n, +n + (t ? 1 : 0)), r.__actions__.push({
            func: dr,
            args: [i],
            thisArg: s
          }), new Ye(r, this.__chain__).thru(function(a) {
            return t && !a.length && a.push(s), a;
          }));
        });
        function Oh() {
          return pa(this);
        }
        function Sh() {
          return new Ye(this.value(), this.__chain__);
        }
        function Nh() {
          this.__values__ === s && (this.__values__ = xa(this.value()));
          var e = this.__index__ >= this.__values__.length, t = e ? s : this.__values__[this.__index__++];
          return { done: e, value: t };
        }
        function Ch() {
          return this;
        }
        function Lh(e) {
          for (var t, n = this; n instanceof tr; ) {
            var r = oa(n);
            r.__index__ = 0, r.__values__ = s, t ? i.__wrapped__ = r : t = r;
            var i = r;
            n = n.__wrapped__;
          }
          return i.__wrapped__ = e, t;
        }
        function xh() {
          var e = this.__wrapped__;
          if (e instanceof W) {
            var t = e;
            return this.__actions__.length && (t = new W(this)), t = t.reverse(), t.__actions__.push({
              func: dr,
              args: [Ki],
              thisArg: s
            }), new Ye(t, this.__chain__);
          }
          return this.thru(Ki);
        }
        function yh() {
          return Ds(this.__wrapped__, this.__actions__);
        }
        var Dh = or(function(e, t, n) {
          $.call(e, n) ? ++e[n] : ht(e, n, 1);
        });
        function Rh(e, t, n) {
          var r = L(e) ? Ku : Il;
          return n && Te(e, t, n) && (t = s), r(e, m(t, 3));
        }
        function Fh(e, t) {
          var n = L(e) ? It : _s;
          return n(e, m(t, 3));
        }
        var Uh = $s(fa), Wh = $s(la);
        function bh(e, t) {
          return pe(vr(e, t), 1);
        }
        function Gh(e, t) {
          return pe(vr(e, t), ot);
        }
        function Ph(e, t, n) {
          return n = n === s ? 1 : y(n), pe(vr(e, t), n);
        }
        function da(e, t) {
          var n = L(e) ? Me : Nt;
          return n(e, m(t, 3));
        }
        function va(e, t) {
          var n = L(e) ? nf : gs;
          return n(e, m(t, 3));
        }
        var Mh = or(function(e, t, n) {
          $.call(e, n) ? e[n].push(t) : ht(e, n, [t]);
        });
        function Bh(e, t, n, r) {
          e = me(e) ? e : un(e), n = n && !r ? y(n) : 0;
          var i = e.length;
          return n < 0 && (n = le(i + n, 0)), Ir(e) ? n <= i && e.indexOf(t, n) > -1 : !!i && Xt(e, t, n) > -1;
        }
        var Yh = R(function(e, t, n) {
          var r = -1, i = typeof t == "function", a = me(e) ? h(e.length) : [];
          return Nt(e, function(o) {
            a[++r] = i ? xe(t, o, n) : En(o, t, n);
          }), a;
        }), $h = or(function(e, t, n) {
          ht(e, n, t);
        });
        function vr(e, t) {
          var n = L(e) ? k : Ts;
          return n(e, m(t, 3));
        }
        function Hh(e, t, n, r) {
          return e == null ? [] : (L(t) || (t = t == null ? [] : [t]), n = r ? s : n, L(n) || (n = n == null ? [] : [n]), Os(e, t, n));
        }
        var Kh = or(function(e, t, n) {
          e[n ? 0 : 1].push(t);
        }, function() {
          return [[], []];
        });
        function qh(e, t, n) {
          var r = L(e) ? ri : Zu, i = arguments.length < 3;
          return r(e, m(t, 4), n, i, Nt);
        }
        function Xh(e, t, n) {
          var r = L(e) ? rf : Zu, i = arguments.length < 3;
          return r(e, m(t, 4), n, i, gs);
        }
        function zh(e, t) {
          var n = L(e) ? It : _s;
          return n(e, Tr(m(t, 3)));
        }
        function Zh(e) {
          var t = L(e) ? fs : Bl;
          return t(e);
        }
        function Jh(e, t, n) {
          (n ? Te(e, t, n) : t === s) ? t = 1 : t = y(t);
          var r = L(e) ? vl : Yl;
          return r(e, t);
        }
        function Vh(e) {
          var t = L(e) ? wl : Hl;
          return t(e);
        }
        function Qh(e) {
          if (e == null)
            return 0;
          if (me(e))
            return Ir(e) ? Zt(e) : e.length;
          var t = ve(e);
          return t == Qe || t == ke ? e.size : Ii(e).length;
        }
        function kh(e, t, n) {
          var r = L(e) ? ii : Kl;
          return n && Te(e, t, n) && (t = s), r(e, m(t, 3));
        }
        var jh = R(function(e, t) {
          if (e == null)
            return [];
          var n = t.length;
          return n > 1 && Te(e, t[0], t[1]) ? t = [] : n > 2 && Te(t[0], t[1], t[2]) && (t = [t[0]]), Os(e, pe(t, 1), []);
        }), wr = Ff || function() {
          return _e.Date.now();
        };
        function eg(e, t) {
          if (typeof t != "function")
            throw new Be(b);
          return e = y(e), function() {
            if (--e < 1)
              return t.apply(this, arguments);
          };
        }
        function wa(e, t, n) {
          return t = n ? s : t, t = e && t == null ? e.length : t, gt(e, Ve, s, s, s, s, t);
        }
        function Aa(e, t) {
          var n;
          if (typeof t != "function")
            throw new Be(b);
          return e = y(e), function() {
            return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = s), n;
          };
        }
        var Xi = R(function(e, t, n) {
          var r = Z;
          if (n.length) {
            var i = Ot(n, nn(Xi));
            r |= Je;
          }
          return gt(e, r, t, n, i);
        }), Ta = R(function(e, t, n) {
          var r = Z | ce;
          if (n.length) {
            var i = Ot(n, nn(Ta));
            r |= Je;
          }
          return gt(t, r, e, n, i);
        });
        function Ea(e, t, n) {
          t = n ? s : t;
          var r = gt(e, Le, s, s, s, s, s, t);
          return r.placeholder = Ea.placeholder, r;
        }
        function Ia(e, t, n) {
          t = n ? s : t;
          var r = gt(e, Tt, s, s, s, s, s, t);
          return r.placeholder = Ia.placeholder, r;
        }
        function ma(e, t, n) {
          var r, i, a, o, f, c, p = 0, d = !1, v = !1, A = !0;
          if (typeof e != "function")
            throw new Be(b);
          t = qe(t) || 0, te(n) && (d = !!n.leading, v = "maxWait" in n, a = v ? le(qe(n.maxWait) || 0, t) : a, A = "trailing" in n ? !!n.trailing : A);
          function I(ue) {
            var nt = r, wt = i;
            return r = i = s, p = ue, o = e.apply(wt, nt), o;
          }
          function O(ue) {
            return p = ue, f = Nn(F, t), d ? I(ue) : o;
          }
          function D(ue) {
            var nt = ue - c, wt = ue - p, $a = t - nt;
            return v ? de($a, a - wt) : $a;
          }
          function S(ue) {
            var nt = ue - c, wt = ue - p;
            return c === s || nt >= t || nt < 0 || v && wt >= a;
          }
          function F() {
            var ue = wr();
            if (S(ue))
              return G(ue);
            f = Nn(F, D(ue));
          }
          function G(ue) {
            return f = s, A && r ? I(ue) : (r = i = s, o);
          }
          function Fe() {
            f !== s && Fs(f), p = 0, r = c = i = f = s;
          }
          function Ee() {
            return f === s ? o : G(wr());
          }
          function Ue() {
            var ue = wr(), nt = S(ue);
            if (r = arguments, i = this, c = ue, nt) {
              if (f === s)
                return O(c);
              if (v)
                return Fs(f), f = Nn(F, t), I(c);
            }
            return f === s && (f = Nn(F, t)), o;
          }
          return Ue.cancel = Fe, Ue.flush = Ee, Ue;
        }
        var tg = R(function(e, t) {
          return hs(e, 1, t);
        }), ng = R(function(e, t, n) {
          return hs(e, qe(t) || 0, n);
        });
        function rg(e) {
          return gt(e, Ht);
        }
        function Ar(e, t) {
          if (typeof e != "function" || t != null && typeof t != "function")
            throw new Be(b);
          var n = function() {
            var r = arguments, i = t ? t.apply(this, r) : r[0], a = n.cache;
            if (a.has(i))
              return a.get(i);
            var o = e.apply(this, r);
            return n.cache = a.set(i, o) || a, o;
          };
          return n.cache = new (Ar.Cache || ct)(), n;
        }
        Ar.Cache = ct;
        function Tr(e) {
          if (typeof e != "function")
            throw new Be(b);
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
        function ig(e) {
          return Aa(2, e);
        }
        var ug = ql(function(e, t) {
          t = t.length == 1 && L(t[0]) ? k(t[0], ye(m())) : k(pe(t, 1), ye(m()));
          var n = t.length;
          return R(function(r) {
            for (var i = -1, a = de(r.length, n); ++i < a; )
              r[i] = t[i].call(this, r[i]);
            return xe(e, this, r);
          });
        }), zi = R(function(e, t) {
          var n = Ot(t, nn(zi));
          return gt(e, Je, s, t, n);
        }), Oa = R(function(e, t) {
          var n = Ot(t, nn(Oa));
          return gt(e, Et, s, t, n);
        }), sg = _t(function(e, t) {
          return gt(e, Rt, s, s, s, t);
        });
        function ag(e, t) {
          if (typeof e != "function")
            throw new Be(b);
          return t = t === s ? t : y(t), R(e, t);
        }
        function og(e, t) {
          if (typeof e != "function")
            throw new Be(b);
          return t = t == null ? 0 : le(y(t), 0), R(function(n) {
            var r = n[t], i = xt(n, 0, t);
            return r && mt(i, r), xe(e, this, i);
          });
        }
        function fg(e, t, n) {
          var r = !0, i = !0;
          if (typeof e != "function")
            throw new Be(b);
          return te(n) && (r = "leading" in n ? !!n.leading : r, i = "trailing" in n ? !!n.trailing : i), ma(e, t, {
            leading: r,
            maxWait: t,
            trailing: i
          });
        }
        function lg(e) {
          return wa(e, 1);
        }
        function cg(e, t) {
          return zi(Di(t), e);
        }
        function hg() {
          if (!arguments.length)
            return [];
          var e = arguments[0];
          return L(e) ? e : [e];
        }
        function gg(e) {
          return $e(e, ee);
        }
        function _g(e, t) {
          return t = typeof t == "function" ? t : s, $e(e, ee, t);
        }
        function pg(e) {
          return $e(e, U | ee);
        }
        function dg(e, t) {
          return t = typeof t == "function" ? t : s, $e(e, U | ee, t);
        }
        function vg(e, t) {
          return t == null || cs(e, t, he(t));
        }
        function tt(e, t) {
          return e === t || e !== e && t !== t;
        }
        var wg = hr(Ai), Ag = hr(function(e, t) {
          return e >= t;
        }), $t = vs(/* @__PURE__ */ (function() {
          return arguments;
        })()) ? vs : function(e) {
          return ne(e) && $.call(e, "callee") && !rs.call(e, "callee");
        }, L = h.isArray, Tg = Pu ? ye(Pu) : Ll;
        function me(e) {
          return e != null && Er(e.length) && !dt(e);
        }
        function ie(e) {
          return ne(e) && me(e);
        }
        function Eg(e) {
          return e === !0 || e === !1 || ne(e) && Ae(e) == q;
        }
        var yt = Wf || iu, Ig = Mu ? ye(Mu) : xl;
        function mg(e) {
          return ne(e) && e.nodeType === 1 && !Cn(e);
        }
        function Og(e) {
          if (e == null)
            return !0;
          if (me(e) && (L(e) || typeof e == "string" || typeof e.splice == "function" || yt(e) || rn(e) || $t(e)))
            return !e.length;
          var t = ve(e);
          if (t == Qe || t == ke)
            return !e.size;
          if (Sn(e))
            return !Ii(e).length;
          for (var n in e)
            if ($.call(e, n))
              return !1;
          return !0;
        }
        function Sg(e, t) {
          return In(e, t);
        }
        function Ng(e, t, n) {
          n = typeof n == "function" ? n : s;
          var r = n ? n(e, t) : s;
          return r === s ? In(e, t, s, n) : !!r;
        }
        function Zi(e) {
          if (!ne(e))
            return !1;
          var t = Ae(e);
          return t == an || t == Gr || typeof e.message == "string" && typeof e.name == "string" && !Cn(e);
        }
        function Cg(e) {
          return typeof e == "number" && us(e);
        }
        function dt(e) {
          if (!te(e))
            return !1;
          var t = Ae(e);
          return t == Un || t == hu || t == x || t == Ja;
        }
        function Sa(e) {
          return typeof e == "number" && e == y(e);
        }
        function Er(e) {
          return typeof e == "number" && e > -1 && e % 1 == 0 && e <= be;
        }
        function te(e) {
          var t = typeof e;
          return e != null && (t == "object" || t == "function");
        }
        function ne(e) {
          return e != null && typeof e == "object";
        }
        var Na = Bu ? ye(Bu) : Dl;
        function Lg(e, t) {
          return e === t || Ei(e, t, Pi(t));
        }
        function xg(e, t, n) {
          return n = typeof n == "function" ? n : s, Ei(e, t, Pi(t), n);
        }
        function yg(e) {
          return Ca(e) && e != +e;
        }
        function Dg(e) {
          if (_c(e))
            throw new N(K);
          return ws(e);
        }
        function Rg(e) {
          return e === null;
        }
        function Fg(e) {
          return e == null;
        }
        function Ca(e) {
          return typeof e == "number" || ne(e) && Ae(e) == on;
        }
        function Cn(e) {
          if (!ne(e) || Ae(e) != ft)
            return !1;
          var t = Zn(e);
          if (t === null)
            return !0;
          var n = $.call(t, "constructor") && t.constructor;
          return typeof n == "function" && n instanceof n && Kn.call(n) == xf;
        }
        var Ji = Yu ? ye(Yu) : Rl;
        function Ug(e) {
          return Sa(e) && e >= -be && e <= be;
        }
        var La = $u ? ye($u) : Fl;
        function Ir(e) {
          return typeof e == "string" || !L(e) && ne(e) && Ae(e) == ln;
        }
        function Re(e) {
          return typeof e == "symbol" || ne(e) && Ae(e) == Wn;
        }
        var rn = Hu ? ye(Hu) : Ul;
        function Wg(e) {
          return e === s;
        }
        function bg(e) {
          return ne(e) && ve(e) == cn;
        }
        function Gg(e) {
          return ne(e) && Ae(e) == Qa;
        }
        var Pg = hr(mi), Mg = hr(function(e, t) {
          return e <= t;
        });
        function xa(e) {
          if (!e)
            return [];
          if (me(e))
            return Ir(e) ? je(e) : Ie(e);
          if (_n && e[_n])
            return vf(e[_n]());
          var t = ve(e), n = t == Qe ? li : t == ke ? Yn : un;
          return n(e);
        }
        function vt(e) {
          if (!e)
            return e === 0 ? e : 0;
          if (e = qe(e), e === ot || e === -ot) {
            var t = e < 0 ? -1 : 1;
            return t * Rn;
          }
          return e === e ? e : 0;
        }
        function y(e) {
          var t = vt(e), n = t % 1;
          return t === t ? n ? t - n : t : 0;
        }
        function ya(e) {
          return e ? Pt(y(e), 0, Ge) : 0;
        }
        function qe(e) {
          if (typeof e == "number")
            return e;
          if (Re(e))
            return Ft;
          if (te(e)) {
            var t = typeof e.valueOf == "function" ? e.valueOf() : e;
            e = te(t) ? t + "" : t;
          }
          if (typeof e != "string")
            return e === 0 ? e : +e;
          e = Ju(e);
          var n = Ao.test(e);
          return n || Eo.test(e) ? jo(e.slice(2), n ? 2 : 8) : wo.test(e) ? Ft : +e;
        }
        function Da(e) {
          return ut(e, Oe(e));
        }
        function Bg(e) {
          return e ? Pt(y(e), -be, be) : e === 0 ? e : 0;
        }
        function B(e) {
          return e == null ? "" : De(e);
        }
        var Yg = en(function(e, t) {
          if (Sn(t) || me(t)) {
            ut(t, he(t), e);
            return;
          }
          for (var n in t)
            $.call(t, n) && An(e, n, t[n]);
        }), Ra = en(function(e, t) {
          ut(t, Oe(t), e);
        }), mr = en(function(e, t, n, r) {
          ut(t, Oe(t), e, r);
        }), $g = en(function(e, t, n, r) {
          ut(t, he(t), e, r);
        }), Hg = _t(di);
        function Kg(e, t) {
          var n = jt(e);
          return t == null ? n : ls(n, t);
        }
        var qg = R(function(e, t) {
          e = z(e);
          var n = -1, r = t.length, i = r > 2 ? t[2] : s;
          for (i && Te(t[0], t[1], i) && (r = 1); ++n < r; )
            for (var a = t[n], o = Oe(a), f = -1, c = o.length; ++f < c; ) {
              var p = o[f], d = e[p];
              (d === s || tt(d, Vt[p]) && !$.call(e, p)) && (e[p] = a[p]);
            }
          return e;
        }), Xg = R(function(e) {
          return e.push(s, Js), xe(Fa, s, e);
        });
        function zg(e, t) {
          return qu(e, m(t, 3), it);
        }
        function Zg(e, t) {
          return qu(e, m(t, 3), wi);
        }
        function Jg(e, t) {
          return e == null ? e : vi(e, m(t, 3), Oe);
        }
        function Vg(e, t) {
          return e == null ? e : ps(e, m(t, 3), Oe);
        }
        function Qg(e, t) {
          return e && it(e, m(t, 3));
        }
        function kg(e, t) {
          return e && wi(e, m(t, 3));
        }
        function jg(e) {
          return e == null ? [] : ir(e, he(e));
        }
        function e_(e) {
          return e == null ? [] : ir(e, Oe(e));
        }
        function Vi(e, t, n) {
          var r = e == null ? s : Mt(e, t);
          return r === s ? n : r;
        }
        function t_(e, t) {
          return e != null && ks(e, t, Ol);
        }
        function Qi(e, t) {
          return e != null && ks(e, t, Sl);
        }
        var n_ = Ks(function(e, t, n) {
          t != null && typeof t.toString != "function" && (t = qn.call(t)), e[t] = n;
        }, ji(Se)), r_ = Ks(function(e, t, n) {
          t != null && typeof t.toString != "function" && (t = qn.call(t)), $.call(e, t) ? e[t].push(n) : e[t] = [n];
        }, m), i_ = R(En);
        function he(e) {
          return me(e) ? os(e) : Ii(e);
        }
        function Oe(e) {
          return me(e) ? os(e, !0) : Wl(e);
        }
        function u_(e, t) {
          var n = {};
          return t = m(t, 3), it(e, function(r, i, a) {
            ht(n, t(r, i, a), r);
          }), n;
        }
        function s_(e, t) {
          var n = {};
          return t = m(t, 3), it(e, function(r, i, a) {
            ht(n, i, t(r, i, a));
          }), n;
        }
        var a_ = en(function(e, t, n) {
          ur(e, t, n);
        }), Fa = en(function(e, t, n, r) {
          ur(e, t, n, r);
        }), o_ = _t(function(e, t) {
          var n = {};
          if (e == null)
            return n;
          var r = !1;
          t = k(t, function(a) {
            return a = Lt(a, e), r || (r = a.length > 1), a;
          }), ut(e, bi(e), n), r && (n = $e(n, U | j | ee, nc));
          for (var i = t.length; i--; )
            Li(n, t[i]);
          return n;
        });
        function f_(e, t) {
          return Ua(e, Tr(m(t)));
        }
        var l_ = _t(function(e, t) {
          return e == null ? {} : Gl(e, t);
        });
        function Ua(e, t) {
          if (e == null)
            return {};
          var n = k(bi(e), function(r) {
            return [r];
          });
          return t = m(t), Ss(e, n, function(r, i) {
            return t(r, i[0]);
          });
        }
        function c_(e, t, n) {
          t = Lt(t, e);
          var r = -1, i = t.length;
          for (i || (i = 1, e = s); ++r < i; ) {
            var a = e == null ? s : e[st(t[r])];
            a === s && (r = i, a = n), e = dt(a) ? a.call(e) : a;
          }
          return e;
        }
        function h_(e, t, n) {
          return e == null ? e : mn(e, t, n);
        }
        function g_(e, t, n, r) {
          return r = typeof r == "function" ? r : s, e == null ? e : mn(e, t, n, r);
        }
        var Wa = zs(he), ba = zs(Oe);
        function __(e, t, n) {
          var r = L(e), i = r || yt(e) || rn(e);
          if (t = m(t, 4), n == null) {
            var a = e && e.constructor;
            i ? n = r ? new a() : [] : te(e) ? n = dt(a) ? jt(Zn(e)) : {} : n = {};
          }
          return (i ? Me : it)(e, function(o, f, c) {
            return t(n, o, f, c);
          }), n;
        }
        function p_(e, t) {
          return e == null ? !0 : Li(e, t);
        }
        function d_(e, t, n) {
          return e == null ? e : ys(e, t, Di(n));
        }
        function v_(e, t, n, r) {
          return r = typeof r == "function" ? r : s, e == null ? e : ys(e, t, Di(n), r);
        }
        function un(e) {
          return e == null ? [] : fi(e, he(e));
        }
        function w_(e) {
          return e == null ? [] : fi(e, Oe(e));
        }
        function A_(e, t, n) {
          return n === s && (n = t, t = s), n !== s && (n = qe(n), n = n === n ? n : 0), t !== s && (t = qe(t), t = t === t ? t : 0), Pt(qe(e), t, n);
        }
        function T_(e, t, n) {
          return t = vt(t), n === s ? (n = t, t = 0) : n = vt(n), e = qe(e), Nl(e, t, n);
        }
        function E_(e, t, n) {
          if (n && typeof n != "boolean" && Te(e, t, n) && (t = n = s), n === s && (typeof t == "boolean" ? (n = t, t = s) : typeof e == "boolean" && (n = e, e = s)), e === s && t === s ? (e = 0, t = 1) : (e = vt(e), t === s ? (t = e, e = 0) : t = vt(t)), e > t) {
            var r = e;
            e = t, t = r;
          }
          if (n || e % 1 || t % 1) {
            var i = ss();
            return de(e + i * (t - e + ko("1e-" + ((i + "").length - 1))), t);
          }
          return Si(e, t);
        }
        var I_ = tn(function(e, t, n) {
          return t = t.toLowerCase(), e + (n ? Ga(t) : t);
        });
        function Ga(e) {
          return ki(B(e).toLowerCase());
        }
        function Pa(e) {
          return e = B(e), e && e.replace(mo, hf).replace($o, "");
        }
        function m_(e, t, n) {
          e = B(e), t = De(t);
          var r = e.length;
          n = n === s ? r : Pt(y(n), 0, r);
          var i = n;
          return n -= t.length, n >= 0 && e.slice(n, i) == t;
        }
        function O_(e) {
          return e = B(e), e && no.test(e) ? e.replace(pu, gf) : e;
        }
        function S_(e) {
          return e = B(e), e && oo.test(e) ? e.replace(zr, "\\$&") : e;
        }
        var N_ = tn(function(e, t, n) {
          return e + (n ? "-" : "") + t.toLowerCase();
        }), C_ = tn(function(e, t, n) {
          return e + (n ? " " : "") + t.toLowerCase();
        }), L_ = Ys("toLowerCase");
        function x_(e, t, n) {
          e = B(e), t = y(t);
          var r = t ? Zt(e) : 0;
          if (!t || r >= t)
            return e;
          var i = (t - r) / 2;
          return cr(kn(i), n) + e + cr(Qn(i), n);
        }
        function y_(e, t, n) {
          e = B(e), t = y(t);
          var r = t ? Zt(e) : 0;
          return t && r < t ? e + cr(t - r, n) : e;
        }
        function D_(e, t, n) {
          e = B(e), t = y(t);
          var r = t ? Zt(e) : 0;
          return t && r < t ? cr(t - r, n) + e : e;
        }
        function R_(e, t, n) {
          return n || t == null ? t = 0 : t && (t = +t), Mf(B(e).replace(Zr, ""), t || 0);
        }
        function F_(e, t, n) {
          return (n ? Te(e, t, n) : t === s) ? t = 1 : t = y(t), Ni(B(e), t);
        }
        function U_() {
          var e = arguments, t = B(e[0]);
          return e.length < 3 ? t : t.replace(e[1], e[2]);
        }
        var W_ = tn(function(e, t, n) {
          return e + (n ? "_" : "") + t.toLowerCase();
        });
        function b_(e, t, n) {
          return n && typeof n != "number" && Te(e, t, n) && (t = n = s), n = n === s ? Ge : n >>> 0, n ? (e = B(e), e && (typeof t == "string" || t != null && !Ji(t)) && (t = De(t), !t && zt(e)) ? xt(je(e), 0, n) : e.split(t, n)) : [];
        }
        var G_ = tn(function(e, t, n) {
          return e + (n ? " " : "") + ki(t);
        });
        function P_(e, t, n) {
          return e = B(e), n = n == null ? 0 : Pt(y(n), 0, e.length), t = De(t), e.slice(n, n + t.length) == t;
        }
        function M_(e, t, n) {
          var r = u.templateSettings;
          n && Te(e, t, n) && (t = s), e = B(e), t = mr({}, t, r, Zs);
          var i = mr({}, t.imports, r.imports, Zs), a = he(i), o = fi(i, a), f, c, p = 0, d = t.interpolate || bn, v = "__p += '", A = ci(
            (t.escape || bn).source + "|" + d.source + "|" + (d === du ? vo : bn).source + "|" + (t.evaluate || bn).source + "|$",
            "g"
          ), I = "//# sourceURL=" + ($.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++zo + "]") + `
`;
          e.replace(A, function(S, F, G, Fe, Ee, Ue) {
            return G || (G = Fe), v += e.slice(p, Ue).replace(Oo, _f), F && (f = !0, v += `' +
__e(` + F + `) +
'`), Ee && (c = !0, v += `';
` + Ee + `;
__p += '`), G && (v += `' +
((__t = (` + G + `)) == null ? '' : __t) +
'`), p = Ue + S.length, S;
          }), v += `';
`;
          var O = $.call(t, "variable") && t.variable;
          if (!O)
            v = `with (obj) {
` + v + `
}
`;
          else if (_o.test(O))
            throw new N(We);
          v = (c ? v.replace(ka, "") : v).replace(ja, "$1").replace(eo, "$1;"), v = "function(" + (O || "obj") + `) {
` + (O ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (f ? ", __e = _.escape" : "") + (c ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + v + `return __p
}`;
          var D = Ba(function() {
            return M(a, I + "return " + v).apply(s, o);
          });
          if (D.source = v, Zi(D))
            throw D;
          return D;
        }
        function B_(e) {
          return B(e).toLowerCase();
        }
        function Y_(e) {
          return B(e).toUpperCase();
        }
        function $_(e, t, n) {
          if (e = B(e), e && (n || t === s))
            return Ju(e);
          if (!e || !(t = De(t)))
            return e;
          var r = je(e), i = je(t), a = Vu(r, i), o = Qu(r, i) + 1;
          return xt(r, a, o).join("");
        }
        function H_(e, t, n) {
          if (e = B(e), e && (n || t === s))
            return e.slice(0, ju(e) + 1);
          if (!e || !(t = De(t)))
            return e;
          var r = je(e), i = Qu(r, je(t)) + 1;
          return xt(r, 0, i).join("");
        }
        function K_(e, t, n) {
          if (e = B(e), e && (n || t === s))
            return e.replace(Zr, "");
          if (!e || !(t = De(t)))
            return e;
          var r = je(e), i = Vu(r, je(t));
          return xt(r, i).join("");
        }
        function q_(e, t) {
          var n = yr, r = Dr;
          if (te(t)) {
            var i = "separator" in t ? t.separator : i;
            n = "length" in t ? y(t.length) : n, r = "omission" in t ? De(t.omission) : r;
          }
          e = B(e);
          var a = e.length;
          if (zt(e)) {
            var o = je(e);
            a = o.length;
          }
          if (n >= a)
            return e;
          var f = n - Zt(r);
          if (f < 1)
            return r;
          var c = o ? xt(o, 0, f).join("") : e.slice(0, f);
          if (i === s)
            return c + r;
          if (o && (f += c.length - f), Ji(i)) {
            if (e.slice(f).search(i)) {
              var p, d = c;
              for (i.global || (i = ci(i.source, B(vu.exec(i)) + "g")), i.lastIndex = 0; p = i.exec(d); )
                var v = p.index;
              c = c.slice(0, v === s ? f : v);
            }
          } else if (e.indexOf(De(i), f) != f) {
            var A = c.lastIndexOf(i);
            A > -1 && (c = c.slice(0, A));
          }
          return c + r;
        }
        function X_(e) {
          return e = B(e), e && to.test(e) ? e.replace(_u, Ef) : e;
        }
        var z_ = tn(function(e, t, n) {
          return e + (n ? " " : "") + t.toUpperCase();
        }), ki = Ys("toUpperCase");
        function Ma(e, t, n) {
          return e = B(e), t = n ? s : t, t === s ? df(e) ? Of(e) : af(e) : e.match(t) || [];
        }
        var Ba = R(function(e, t) {
          try {
            return xe(e, s, t);
          } catch (n) {
            return Zi(n) ? n : new N(n);
          }
        }), Z_ = _t(function(e, t) {
          return Me(t, function(n) {
            n = st(n), ht(e, n, Xi(e[n], e));
          }), e;
        });
        function J_(e) {
          var t = e == null ? 0 : e.length, n = m();
          return e = t ? k(e, function(r) {
            if (typeof r[1] != "function")
              throw new Be(b);
            return [n(r[0]), r[1]];
          }) : [], R(function(r) {
            for (var i = -1; ++i < t; ) {
              var a = e[i];
              if (xe(a[0], this, r))
                return xe(a[1], this, r);
            }
          });
        }
        function V_(e) {
          return El($e(e, U));
        }
        function ji(e) {
          return function() {
            return e;
          };
        }
        function Q_(e, t) {
          return e == null || e !== e ? t : e;
        }
        var k_ = Hs(), j_ = Hs(!0);
        function Se(e) {
          return e;
        }
        function eu(e) {
          return As(typeof e == "function" ? e : $e(e, U));
        }
        function ep(e) {
          return Es($e(e, U));
        }
        function tp(e, t) {
          return Is(e, $e(t, U));
        }
        var np = R(function(e, t) {
          return function(n) {
            return En(n, e, t);
          };
        }), rp = R(function(e, t) {
          return function(n) {
            return En(e, n, t);
          };
        });
        function tu(e, t, n) {
          var r = he(t), i = ir(t, r);
          n == null && !(te(t) && (i.length || !r.length)) && (n = t, t = e, e = this, i = ir(t, he(t)));
          var a = !(te(n) && "chain" in n) || !!n.chain, o = dt(e);
          return Me(i, function(f) {
            var c = t[f];
            e[f] = c, o && (e.prototype[f] = function() {
              var p = this.__chain__;
              if (a || p) {
                var d = e(this.__wrapped__), v = d.__actions__ = Ie(this.__actions__);
                return v.push({ func: c, args: arguments, thisArg: e }), d.__chain__ = p, d;
              }
              return c.apply(e, mt([this.value()], arguments));
            });
          }), e;
        }
        function ip() {
          return _e._ === this && (_e._ = yf), this;
        }
        function nu() {
        }
        function up(e) {
          return e = y(e), R(function(t) {
            return ms(t, e);
          });
        }
        var sp = Fi(k), ap = Fi(Ku), op = Fi(ii);
        function Ya(e) {
          return Bi(e) ? ui(st(e)) : Pl(e);
        }
        function fp(e) {
          return function(t) {
            return e == null ? s : Mt(e, t);
          };
        }
        var lp = qs(), cp = qs(!0);
        function ru() {
          return [];
        }
        function iu() {
          return !1;
        }
        function hp() {
          return {};
        }
        function gp() {
          return "";
        }
        function _p() {
          return !0;
        }
        function pp(e, t) {
          if (e = y(e), e < 1 || e > be)
            return [];
          var n = Ge, r = de(e, Ge);
          t = m(t), e -= Ge;
          for (var i = oi(r, t); ++n < e; )
            t(n);
          return i;
        }
        function dp(e) {
          return L(e) ? k(e, st) : Re(e) ? [e] : Ie(aa(B(e)));
        }
        function vp(e) {
          var t = ++Lf;
          return B(e) + t;
        }
        var wp = lr(function(e, t) {
          return e + t;
        }, 0), Ap = Ui("ceil"), Tp = lr(function(e, t) {
          return e / t;
        }, 1), Ep = Ui("floor");
        function Ip(e) {
          return e && e.length ? rr(e, Se, Ai) : s;
        }
        function mp(e, t) {
          return e && e.length ? rr(e, m(t, 2), Ai) : s;
        }
        function Op(e) {
          return zu(e, Se);
        }
        function Sp(e, t) {
          return zu(e, m(t, 2));
        }
        function Np(e) {
          return e && e.length ? rr(e, Se, mi) : s;
        }
        function Cp(e, t) {
          return e && e.length ? rr(e, m(t, 2), mi) : s;
        }
        var Lp = lr(function(e, t) {
          return e * t;
        }, 1), xp = Ui("round"), yp = lr(function(e, t) {
          return e - t;
        }, 0);
        function Dp(e) {
          return e && e.length ? ai(e, Se) : 0;
        }
        function Rp(e, t) {
          return e && e.length ? ai(e, m(t, 2)) : 0;
        }
        return u.after = eg, u.ary = wa, u.assign = Yg, u.assignIn = Ra, u.assignInWith = mr, u.assignWith = $g, u.at = Hg, u.before = Aa, u.bind = Xi, u.bindAll = Z_, u.bindKey = Ta, u.castArray = hg, u.chain = pa, u.chunk = Ec, u.compact = Ic, u.concat = mc, u.cond = J_, u.conforms = V_, u.constant = ji, u.countBy = Dh, u.create = Kg, u.curry = Ea, u.curryRight = Ia, u.debounce = ma, u.defaults = qg, u.defaultsDeep = Xg, u.defer = tg, u.delay = ng, u.difference = Oc, u.differenceBy = Sc, u.differenceWith = Nc, u.drop = Cc, u.dropRight = Lc, u.dropRightWhile = xc, u.dropWhile = yc, u.fill = Dc, u.filter = Fh, u.flatMap = bh, u.flatMapDeep = Gh, u.flatMapDepth = Ph, u.flatten = ca, u.flattenDeep = Rc, u.flattenDepth = Fc, u.flip = rg, u.flow = k_, u.flowRight = j_, u.fromPairs = Uc, u.functions = jg, u.functionsIn = e_, u.groupBy = Mh, u.initial = bc, u.intersection = Gc, u.intersectionBy = Pc, u.intersectionWith = Mc, u.invert = n_, u.invertBy = r_, u.invokeMap = Yh, u.iteratee = eu, u.keyBy = $h, u.keys = he, u.keysIn = Oe, u.map = vr, u.mapKeys = u_, u.mapValues = s_, u.matches = ep, u.matchesProperty = tp, u.memoize = Ar, u.merge = a_, u.mergeWith = Fa, u.method = np, u.methodOf = rp, u.mixin = tu, u.negate = Tr, u.nthArg = up, u.omit = o_, u.omitBy = f_, u.once = ig, u.orderBy = Hh, u.over = sp, u.overArgs = ug, u.overEvery = ap, u.overSome = op, u.partial = zi, u.partialRight = Oa, u.partition = Kh, u.pick = l_, u.pickBy = Ua, u.property = Ya, u.propertyOf = fp, u.pull = Hc, u.pullAll = ga, u.pullAllBy = Kc, u.pullAllWith = qc, u.pullAt = Xc, u.range = lp, u.rangeRight = cp, u.rearg = sg, u.reject = zh, u.remove = zc, u.rest = ag, u.reverse = Ki, u.sampleSize = Jh, u.set = h_, u.setWith = g_, u.shuffle = Vh, u.slice = Zc, u.sortBy = jh, u.sortedUniq = th, u.sortedUniqBy = nh, u.split = b_, u.spread = og, u.tail = rh, u.take = ih, u.takeRight = uh, u.takeRightWhile = sh, u.takeWhile = ah, u.tap = Ih, u.throttle = fg, u.thru = dr, u.toArray = xa, u.toPairs = Wa, u.toPairsIn = ba, u.toPath = dp, u.toPlainObject = Da, u.transform = __, u.unary = lg, u.union = oh, u.unionBy = fh, u.unionWith = lh, u.uniq = ch, u.uniqBy = hh, u.uniqWith = gh, u.unset = p_, u.unzip = qi, u.unzipWith = _a, u.update = d_, u.updateWith = v_, u.values = un, u.valuesIn = w_, u.without = _h, u.words = Ma, u.wrap = cg, u.xor = ph, u.xorBy = dh, u.xorWith = vh, u.zip = wh, u.zipObject = Ah, u.zipObjectDeep = Th, u.zipWith = Eh, u.entries = Wa, u.entriesIn = ba, u.extend = Ra, u.extendWith = mr, tu(u, u), u.add = wp, u.attempt = Ba, u.camelCase = I_, u.capitalize = Ga, u.ceil = Ap, u.clamp = A_, u.clone = gg, u.cloneDeep = pg, u.cloneDeepWith = dg, u.cloneWith = _g, u.conformsTo = vg, u.deburr = Pa, u.defaultTo = Q_, u.divide = Tp, u.endsWith = m_, u.eq = tt, u.escape = O_, u.escapeRegExp = S_, u.every = Rh, u.find = Uh, u.findIndex = fa, u.findKey = zg, u.findLast = Wh, u.findLastIndex = la, u.findLastKey = Zg, u.floor = Ep, u.forEach = da, u.forEachRight = va, u.forIn = Jg, u.forInRight = Vg, u.forOwn = Qg, u.forOwnRight = kg, u.get = Vi, u.gt = wg, u.gte = Ag, u.has = t_, u.hasIn = Qi, u.head = ha, u.identity = Se, u.includes = Bh, u.indexOf = Wc, u.inRange = T_, u.invoke = i_, u.isArguments = $t, u.isArray = L, u.isArrayBuffer = Tg, u.isArrayLike = me, u.isArrayLikeObject = ie, u.isBoolean = Eg, u.isBuffer = yt, u.isDate = Ig, u.isElement = mg, u.isEmpty = Og, u.isEqual = Sg, u.isEqualWith = Ng, u.isError = Zi, u.isFinite = Cg, u.isFunction = dt, u.isInteger = Sa, u.isLength = Er, u.isMap = Na, u.isMatch = Lg, u.isMatchWith = xg, u.isNaN = yg, u.isNative = Dg, u.isNil = Fg, u.isNull = Rg, u.isNumber = Ca, u.isObject = te, u.isObjectLike = ne, u.isPlainObject = Cn, u.isRegExp = Ji, u.isSafeInteger = Ug, u.isSet = La, u.isString = Ir, u.isSymbol = Re, u.isTypedArray = rn, u.isUndefined = Wg, u.isWeakMap = bg, u.isWeakSet = Gg, u.join = Bc, u.kebabCase = N_, u.last = Ke, u.lastIndexOf = Yc, u.lowerCase = C_, u.lowerFirst = L_, u.lt = Pg, u.lte = Mg, u.max = Ip, u.maxBy = mp, u.mean = Op, u.meanBy = Sp, u.min = Np, u.minBy = Cp, u.stubArray = ru, u.stubFalse = iu, u.stubObject = hp, u.stubString = gp, u.stubTrue = _p, u.multiply = Lp, u.nth = $c, u.noConflict = ip, u.noop = nu, u.now = wr, u.pad = x_, u.padEnd = y_, u.padStart = D_, u.parseInt = R_, u.random = E_, u.reduce = qh, u.reduceRight = Xh, u.repeat = F_, u.replace = U_, u.result = c_, u.round = xp, u.runInContext = l, u.sample = Zh, u.size = Qh, u.snakeCase = W_, u.some = kh, u.sortedIndex = Jc, u.sortedIndexBy = Vc, u.sortedIndexOf = Qc, u.sortedLastIndex = kc, u.sortedLastIndexBy = jc, u.sortedLastIndexOf = eh, u.startCase = G_, u.startsWith = P_, u.subtract = yp, u.sum = Dp, u.sumBy = Rp, u.template = M_, u.times = pp, u.toFinite = vt, u.toInteger = y, u.toLength = ya, u.toLower = B_, u.toNumber = qe, u.toSafeInteger = Bg, u.toString = B, u.toUpper = Y_, u.trim = $_, u.trimEnd = H_, u.trimStart = K_, u.truncate = q_, u.unescape = X_, u.uniqueId = vp, u.upperCase = z_, u.upperFirst = ki, u.each = da, u.eachRight = va, u.first = ha, tu(u, (function() {
          var e = {};
          return it(u, function(t, n) {
            $.call(u.prototype, n) || (e[n] = t);
          }), e;
        })(), { chain: !1 }), u.VERSION = H, Me(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
          u[e].placeholder = u;
        }), Me(["drop", "take"], function(e, t) {
          W.prototype[e] = function(n) {
            n = n === s ? 1 : le(y(n), 0);
            var r = this.__filtered__ && !t ? new W(this) : this.clone();
            return r.__filtered__ ? r.__takeCount__ = de(n, r.__takeCount__) : r.__views__.push({
              size: de(n, Ge),
              type: e + (r.__dir__ < 0 ? "Right" : "")
            }), r;
          }, W.prototype[e + "Right"] = function(n) {
            return this.reverse()[e](n).reverse();
          };
        }), Me(["filter", "map", "takeWhile"], function(e, t) {
          var n = t + 1, r = n == yn || n == Ur;
          W.prototype[e] = function(i) {
            var a = this.clone();
            return a.__iteratees__.push({
              iteratee: m(i, 3),
              type: n
            }), a.__filtered__ = a.__filtered__ || r, a;
          };
        }), Me(["head", "last"], function(e, t) {
          var n = "take" + (t ? "Right" : "");
          W.prototype[e] = function() {
            return this[n](1).value()[0];
          };
        }), Me(["initial", "tail"], function(e, t) {
          var n = "drop" + (t ? "" : "Right");
          W.prototype[e] = function() {
            return this.__filtered__ ? new W(this) : this[n](1);
          };
        }), W.prototype.compact = function() {
          return this.filter(Se);
        }, W.prototype.find = function(e) {
          return this.filter(e).head();
        }, W.prototype.findLast = function(e) {
          return this.reverse().find(e);
        }, W.prototype.invokeMap = R(function(e, t) {
          return typeof e == "function" ? new W(this) : this.map(function(n) {
            return En(n, e, t);
          });
        }), W.prototype.reject = function(e) {
          return this.filter(Tr(m(e)));
        }, W.prototype.slice = function(e, t) {
          e = y(e);
          var n = this;
          return n.__filtered__ && (e > 0 || t < 0) ? new W(n) : (e < 0 ? n = n.takeRight(-e) : e && (n = n.drop(e)), t !== s && (t = y(t), n = t < 0 ? n.dropRight(-t) : n.take(t - e)), n);
        }, W.prototype.takeRightWhile = function(e) {
          return this.reverse().takeWhile(e).reverse();
        }, W.prototype.toArray = function() {
          return this.take(Ge);
        }, it(W.prototype, function(e, t) {
          var n = /^(?:filter|find|map|reject)|While$/.test(t), r = /^(?:head|last)$/.test(t), i = u[r ? "take" + (t == "last" ? "Right" : "") : t], a = r || /^find/.test(t);
          i && (u.prototype[t] = function() {
            var o = this.__wrapped__, f = r ? [1] : arguments, c = o instanceof W, p = f[0], d = c || L(o), v = function(F) {
              var G = i.apply(u, mt([F], f));
              return r && A ? G[0] : G;
            };
            d && n && typeof p == "function" && p.length != 1 && (c = d = !1);
            var A = this.__chain__, I = !!this.__actions__.length, O = a && !A, D = c && !I;
            if (!a && d) {
              o = D ? o : new W(this);
              var S = e.apply(o, f);
              return S.__actions__.push({ func: dr, args: [v], thisArg: s }), new Ye(S, A);
            }
            return O && D ? e.apply(this, f) : (S = this.thru(v), O ? r ? S.value()[0] : S.value() : S);
          });
        }), Me(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
          var t = $n[e], n = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", r = /^(?:pop|shift)$/.test(e);
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
        }), it(W.prototype, function(e, t) {
          var n = u[t];
          if (n) {
            var r = n.name + "";
            $.call(kt, r) || (kt[r] = []), kt[r].push({ name: t, func: n });
          }
        }), kt[fr(s, ce).name] = [{
          name: "wrapper",
          func: s
        }], W.prototype.clone = Xf, W.prototype.reverse = zf, W.prototype.value = Zf, u.prototype.at = mh, u.prototype.chain = Oh, u.prototype.commit = Sh, u.prototype.next = Nh, u.prototype.plant = Lh, u.prototype.reverse = xh, u.prototype.toJSON = u.prototype.valueOf = u.prototype.value = yh, u.prototype.first = u.prototype.head, _n && (u.prototype[_n] = Ch), u;
      }), Jt = Sf();
      Ut ? ((Ut.exports = Jt)._ = Jt, ei._ = Jt) : _e._ = Jt;
    }).call(ud);
  })(xn, xn.exports)), xn.exports;
}
var ad = sd();
const od = { class: "routing-widget" }, fd = { class: "routing-header" }, ld = ["value"], cd = { class: "waypoints-list" }, hd = { class: "waypoint-input-wrapper" }, gd = { class: "waypoint-label" }, _d = ["onUpdate:modelValue", "onInput", "onFocus"], pd = {
  key: 0,
  class: "suggestions-dropdown"
}, dd = ["onMousedown"], vd = ["onClick"], wd = { class: "routing-actions" }, Ad = ["disabled"], Td = {
  key: 0,
  class: "route-result"
}, Ed = { class: "result-summary" }, Id = { class: "summary-item" }, md = { class: "summary-value" }, Od = { class: "summary-item" }, Sd = { class: "summary-value" }, Nd = { class: "summary-item" }, Cd = { class: "summary-value" }, Ld = { class: "maneuvers-section" }, xd = {
  key: 0,
  class: "maneuvers-list"
}, yd = { class: "maneuver-instruction" }, Dd = { class: "maneuver-distance" }, Rd = /* @__PURE__ */ qa({
  __name: "RoutingWidget",
  props: {
    datasourceId: {},
    config: {},
    id: {}
  },
  setup(re, { expose: g }) {
    const s = re, { datasourceId: H, config: X, id: K } = Xa(s), b = uu(Qp.TINY_EMITTER), We = uu(Up), at = Jp().params.pageid || "", oe = X.value?.waypoints, U = At(
      Array.isArray(oe) ? [...oe] : []
    ), j = At(
      X.value?.costing || X.value?.defaultCosting || "auto"
    ), ee = At(null), ge = At(!1), we = At(!1), Z = At(
      Array.isArray(oe) && oe.length > 0 ? oe.map((w) => w.name || `${w.lat.toFixed(4)}, ${w.lon.toFixed(4)}`) : ["", ""]
    ), ce = At(
      Array.isArray(oe) && oe.length > 0 ? oe.map(() => []) : [[], []]
    ), Dt = At(-1);
    function Le() {
      if (!X.value) return;
      const w = U.value.filter((T) => T.lat !== 0 || T.lon !== 0);
      X.value.waypoints = w.length > 0 ? [...w] : void 0, X.value.costing = j.value;
    }
    Ln(U, Le, { deep: !0 }), Ln(j, Le);
    const Tt = At(null), { update: Je } = Vp(
      H,
      "object",
      Tt
    );
    Ln(H, (w, T) => {
      Je(w, T);
    }), Ln(Tt, (w) => {
      w && (ee.value = w);
    });
    const Et = [
      { text: "Auto", value: "auto", icon: "🚗" },
      { text: "Fahrrad", value: "bicycle", icon: "🚲" },
      { text: "Zu Fuß", value: "pedestrian", icon: "🚶" },
      { text: "LKW", value: "truck", icon: "🚛" },
      { text: "Bus", value: "bus", icon: "🚌" },
      { text: "Roller", value: "motor_scooter", icon: "🛵" },
      { text: "Motorrad", value: "motorcycle", icon: "🏍️" }
    ], Ve = su(() => {
      const w = Et.find((T) => T.value === j.value);
      return w ? `${w.icon} ${w.text}` : j.value;
    }), Rt = su(() => {
      if (!ee.value) return "";
      const w = ee.value.summary.duration_min;
      if (w < 60) return `${w} min`;
      const T = Math.floor(w / 60), x = w % 60;
      return x > 0 ? `${T} h ${x} min` : `${T} h`;
    }), Ht = su(() => ee.value?.legs ? ee.value.legs.flatMap(
      (w, T) => w.maneuvers.map((x) => ({ ...x, legIndex: T }))
    ) : []);
    async function yr(w, T) {
      if (!w || w.length < 3) {
        ce.value[T] = [];
        return;
      }
      try {
        const x = "https://nominatim.openstreetmap.org/search?" + new URLSearchParams({
          q: w,
          format: "json",
          limit: "5",
          addressdetails: "1"
        }), q = await fetch(x, {
          headers: { "User-Agent": "DaanseBoard/1.0" }
        });
        ce.value[T] = await q.json();
      } catch {
        ce.value[T] = [];
      }
    }
    const Dr = ad.debounce(yr, 400);
    function Rr(w) {
      Dt.value = w, Dr(Z.value[w], w);
    }
    function Fr(w, T) {
      const x = {
        lat: parseFloat(T.lat),
        lon: parseFloat(T.lon),
        name: T.display_name?.split(",")[0] || ""
      };
      Z.value[w] = x.name || T.display_name, ce.value[w] = [], Dt.value = -1, w < U.value.length ? U.value[w] = x : U.value.push(x), Ft(x, w);
    }
    function yn() {
      const w = U.value.length > 0 ? U.value.length - 1 : U.value.length;
      U.value.splice(w, 0, {
        lat: 0,
        lon: 0,
        name: ""
      }), Z.value.splice(w, 0, ""), ce.value.splice(w, 0, []);
    }
    function Dn(w) {
      const T = U.value.splice(w, 1)[0];
      Z.value.splice(w, 1), ce.value.splice(w, 1), T && Ge(T, w);
    }
    function Ur(w) {
      return w === 0 ? "Start" : w === U.value.length - 1 && U.value.length > 1 ? "Ziel" : `Halt ${w}`;
    }
    function ot(w) {
      return w === 0 ? "#4caf50" : w === U.value.length - 1 && U.value.length > 1 ? "#f44336" : "#2196f3";
    }
    async function be() {
      const w = U.value.filter(
        (T) => T.lat !== 0 || T.lon !== 0
      );
      if (!(w.length < 2)) {
        ge.value = !0;
        try {
          const {
            DatasourceRepository: T,
            identifier: x
          } = await import("org.eclipse.daanse.board.app.lib.repository.datasource"), ae = uu(x).getDatasource(H.value);
          ae && typeof ae.callEvent == "function" && await ae.callEvent(td, {
            waypoints: w,
            costing: j.value
          });
        } catch (T) {
          console.warn("Route calculation failed:", T);
        } finally {
          ge.value = !1;
        }
      }
    }
    function Rn() {
      U.value = [], Z.value = ["", ""], ce.value = [[], []], ee.value = null, Le(), K?.value && b.emit("widget:RoutingWidget:route_cleared", {
        type: "widget:RoutingWidget:route_cleared",
        widgetId: K.value,
        payload: { widgetId: K.value, timestamp: Date.now() }
      });
    }
    function Ft(w, T) {
      if (!K?.value) return;
      const x = new Y();
      x.lat = w.lat, x.lon = w.lon, x.name = w.name ?? "", x.index = T, b.emit("widget:RoutingWidget:waypoint_added", {
        type: "widget:RoutingWidget:waypoint_added",
        widgetId: K.value,
        payload: x,
        timestamp: Date.now()
      });
    }
    function Ge(w, T) {
      if (!K?.value) return;
      const x = new Y();
      x.lat = w.lat, x.lon = w.lon, x.name = w.name ?? "", x.index = T, b.emit("widget:RoutingWidget:waypoint_removed", {
        type: "widget:RoutingWidget:waypoint_removed",
        widgetId: K.value,
        payload: x,
        timestamp: Date.now()
      });
    }
    function Wr(w) {
      if (!K?.value) return;
      const T = new P();
      T.geojson = w.geojson, T.distance_km = w.summary.distance_km, T.duration_min = w.summary.duration_min, T.waypoints = w.waypoints, T.costing = j.value, b.emit("widget:RoutingWidget:route_calculated", {
        type: "widget:RoutingWidget:route_calculated",
        widgetId: K.value,
        payload: T,
        timestamp: Date.now()
      });
    }
    Ln(ee, (w) => {
      w && Wr(w);
    });
    class br extends id {
      addWaypoint(T, x, q) {
        const ae = { lat: T, lon: x, name: q };
        U.value.push(ae), Z.value.push(q || `${T.toFixed(4)}, ${x.toFixed(4)}`), ce.value.push([]), Ft(ae, U.value.length - 1);
      }
      removeWaypoint(T) {
        Dn(T);
      }
      clearWaypoints() {
        Rn();
      }
      setCosting(T) {
        j.value = T;
      }
      calculateRoute() {
        be();
      }
    }
    const Fn = new br();
    return g(Fn), Yp(() => {
      K?.value && We.registerInstance(
        K.value,
        Fn,
        "RoutingWidget",
        at
      ), U.value.filter((T) => T.lat !== 0 || T.lon !== 0).length >= 2 && be();
    }), $p(() => {
      K?.value && We.unregisterInstance(K.value);
    }), (w, T) => (Ce(), Ne("div", od, [
      V("div", fd, [
        T[2] || (T[2] = V("span", { class: "routing-title" }, "Routing", -1)),
        Ha(V("select", {
          "onUpdate:modelValue": T[0] || (T[0] = (x) => j.value = x),
          class: "costing-select"
        }, [
          (Ce(), Ne(Or, null, Sr(Et, (x) => V("option", {
            key: x.value,
            value: x.value
          }, Xe(x.icon) + " " + Xe(x.text), 9, ld)), 64))
        ], 512), [
          [Hp, j.value]
        ])
      ]),
      V("div", cd, [
        (Ce(!0), Ne(Or, null, Sr(Math.max(2, U.value.length), (x, q) => (Ce(), Ne("div", {
          key: q,
          class: "waypoint-row"
        }, [
          V("div", {
            class: "waypoint-dot",
            style: Kp({ backgroundColor: ot(q) })
          }, null, 4),
          V("div", hd, [
            V("label", gd, Xe(Ur(q)), 1),
            Ha(V("input", {
              "onUpdate:modelValue": (ae) => Z.value[q] = ae,
              class: "waypoint-input",
              placeholder: "Adresse eingeben...",
              onInput: (ae) => Rr(q),
              onFocus: (ae) => Dt.value = q
            }, null, 40, _d), [
              [qp, Z.value[q]]
            ]),
            Dt.value === q && ce.value[q] && ce.value[q].length > 0 ? (Ce(), Ne("div", pd, [
              (Ce(!0), Ne(Or, null, Sr(ce.value[q], (ae, Gr) => (Ce(), Ne("div", {
                key: Gr,
                class: "suggestion-item",
                onMousedown: Xp((an) => Fr(q, ae), ["prevent"])
              }, Xe(ae.display_name), 41, dd))), 128))
            ])) : sn("", !0)
          ]),
          q >= 2 ? (Ce(), Ne("button", {
            key: 0,
            class: "remove-btn",
            title: "Entfernen",
            onClick: (ae) => Dn(q)
          }, " × ", 8, vd)) : sn("", !0)
        ]))), 128))
      ]),
      V("div", wd, [
        V("button", {
          class: "btn-secondary",
          onClick: yn
        }, " + Zwischenhalt "),
        V("button", {
          class: "btn-primary",
          disabled: ge.value,
          onClick: be
        }, Xe(ge.value ? "Berechne..." : "Route berechnen"), 9, Ad),
        ee.value || U.value.length > 0 ? (Ce(), Ne("button", {
          key: 0,
          class: "btn-clear",
          onClick: Rn
        }, " Löschen ")) : sn("", !0)
      ]),
      ee.value ? (Ce(), Ne("div", Td, [
        V("div", Ed, [
          V("div", Id, [
            V("span", md, Xe(ee.value.summary.distance_km.toFixed(1)) + " km ", 1),
            T[3] || (T[3] = V("span", { class: "summary-label" }, "Distanz", -1))
          ]),
          V("div", Od, [
            V("span", Sd, Xe(Rt.value), 1),
            T[4] || (T[4] = V("span", { class: "summary-label" }, "Dauer", -1))
          ]),
          V("div", Nd, [
            V("span", Cd, Xe(Ve.value), 1),
            T[5] || (T[5] = V("span", { class: "summary-label" }, "Verkehrsart", -1))
          ])
        ]),
        V("div", Ld, [
          V("button", {
            class: "maneuvers-toggle",
            onClick: T[1] || (T[1] = (x) => we.value = !we.value)
          }, Xe(we.value ? "▾" : "▸") + " Manöver (" + Xe(Ht.value.length) + ") ", 1),
          we.value ? (Ce(), Ne("div", xd, [
            (Ce(!0), Ne(Or, null, Sr(Ht.value, (x, q) => (Ce(), Ne("div", {
              key: q,
              class: "maneuver-item"
            }, [
              V("span", yd, Xe(x.instruction), 1),
              V("span", Dd, Xe(x.length.toFixed(1)) + " km ", 1)
            ]))), 128))
          ])) : sn("", !0)
        ])
      ])) : sn("", !0)
    ]));
  }
}), Fd = {
  key: 0,
  class: "routing-settings"
}, Ud = /* @__PURE__ */ qa({
  __name: "RoutingWidgetSettings",
  props: {
    widgetSettings: {}
  },
  setup(re) {
    const g = re, { widgetSettings: s } = Xa(g), H = [
      { text: "Auto", value: "auto" },
      { text: "Fahrrad", value: "bicycle" },
      { text: "Zu Fuß", value: "pedestrian" },
      { text: "LKW", value: "truck" },
      { text: "Bus", value: "bus" },
      { text: "Roller", value: "motor_scooter" },
      { text: "Motorrad", value: "motorcycle" }
    ];
    return s.value && !s.value.defaultCosting && (s.value.defaultCosting = "auto"), (X, K) => {
      const b = zp("VaSelect");
      return au(s) ? (Ce(), Ne("div", Fd, [
        Zp(b, {
          modelValue: au(s).defaultCosting,
          "onUpdate:modelValue": K[0] || (K[0] = (We) => au(s).defaultCosting = We),
          label: "Default Verkehrsart",
          options: H,
          "text-by": "text",
          "value-by": "value"
        }, null, 8, ["modelValue"])
      ])) : sn("", !0);
    };
  }
}), Wd = (re, g) => {
  const s = re.__vccOpts || re;
  for (const [H, X] of g)
    s[H] = X;
  return s;
}, bd = /* @__PURE__ */ Wd(Ud, [["__scopeId", "data-v-79a5860e"]]), Gd = [
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
], Pd = `<?xml version="1.0" encoding="UTF-8"?>
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
        label="Verkehrsart">
      <values>auto</values>
      <values>bicycle</values>
      <values>pedestrian</values>
      <values>truck</values>
      <values>bus</values>
      <values>motor_scooter</values>
      <values>motorcycle</values>
      <optionLabel language="JS" body="({ auto: 'Auto', bicycle: 'Fahrrad', pedestrian: 'Zu Fuß', truck: 'LKW', bus: 'Bus', motor_scooter: 'Roller', motorcycle: 'Motorrad' })[option] ?? option"/>
    </fields>
  </components>
</uimodel:UIModel>
`;
var Md = Object.defineProperty, Bd = Object.getOwnPropertyDescriptor, cu = (re, g, s, H) => {
  for (var X = H > 1 ? void 0 : H ? Bd(g, s) : g, K = re.length - 1, b; K >= 0; K--)
    (b = re[K]) && (X = (H ? b(g, s, X) : b(X)) || X);
  return H && X && Md(g, s, X), X;
}, Yd = (re, g) => (s, H) => g(s, H, re);
Wp.eINSTANCE;
C.eINSTANCE;
const Lr = "RoutingWidget";
let xr = class {
  constructor(re) {
    this.events = re;
  }
  type = Lr;
  component = Rd;
  settingsComponent = bd;
  supportedDSTypes = ["valhalla"];
  icon = rd;
  name = "Routing";
  /*
   * The settings form, as a model. Carried on the registration like the
   * icon, so whoever shows the settings does not have to know this widget
   * exists - and the shell needs no dependency on this bundle.
   */
  settingsForm = {
    xmi: Pd,
    uri: "/routing-settings.ui.xmi",
    ePackage: () => C.eINSTANCE,
    create: () => new se()
  };
  register() {
    this.events.registerWidget(Lr, Gd);
  }
  unregister() {
    this.events.unregisterWidget(Lr);
  }
};
cu([
  Gp()
], xr.prototype, "register", 1);
cu([
  Pp()
], xr.prototype, "unregister", 1);
xr = cu([
  Mp({
    service: [nd],
    properties: { "widget.type": Lr }
  }),
  Yd(0, Bp(bp))
], xr);
export {
  C as RoutingSettingsPackage,
  Rd as RoutingWidget,
  xr as RoutingWidgetProvider,
  bd as RoutingWidgetSettings,
  se as RoutingWidgetSettingsImpl,
  Pd as routingSettingsFormXmi
};
