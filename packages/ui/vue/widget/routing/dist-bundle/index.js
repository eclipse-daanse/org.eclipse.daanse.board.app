(function(){var i="ui.vue.widget.routing",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".routing-widget{display:flex;flex-direction:column;height:100%;padding:.75rem;gap:.75rem;overflow-y:auto;font-family:inherit;font-size:.875rem}.routing-header{display:flex;align-items:center;justify-content:space-between;gap:.5rem}.routing-title{font-weight:600;font-size:1rem;color:#c45e00}.costing-select{padding:.25rem .5rem;border:1px solid #ddd;border-radius:4px;font-size:.8rem;background:#fff}.waypoints-list{display:flex;flex-direction:column;gap:.5rem}.waypoint-row{display:flex;align-items:flex-start;gap:.5rem}.waypoint-dot{width:12px;height:12px;border-radius:50%;margin-top:1.4rem;flex-shrink:0}.waypoint-input-wrapper{flex:1;position:relative}.waypoint-label{display:block;font-size:.7rem;color:#888;margin-bottom:2px}.waypoint-input{width:100%;padding:.35rem .5rem;border:1px solid #ddd;border-radius:4px;font-size:.8rem;box-sizing:border-box}.waypoint-input:focus{outline:none;border-color:#c45e00}.suggestions-dropdown{position:absolute;top:100%;left:0;right:0;background:#fff;border:1px solid #ddd;border-radius:0 0 4px 4px;z-index:100;max-height:200px;overflow-y:auto;box-shadow:0 4px 8px #0000001a}.suggestion-item{padding:.4rem .5rem;cursor:pointer;font-size:.75rem;border-bottom:1px solid #f0f0f0}.suggestion-item:hover{background:#fff3e0}.remove-btn{background:none;border:none;color:#999;font-size:1.2rem;cursor:pointer;padding:.2rem;margin-top:1.2rem;line-height:1}.remove-btn:hover{color:#f44336}.routing-actions{display:flex;gap:.5rem;flex-wrap:wrap}.btn-primary{padding:.4rem .75rem;background:#c45e00;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:.8rem;font-weight:500}.btn-primary:hover{background:#a04e00}.btn-primary:disabled{background:#ccc;cursor:not-allowed}.btn-secondary{padding:.4rem .75rem;background:#fff;color:#555;border:1px solid #ddd;border-radius:4px;cursor:pointer;font-size:.8rem}.btn-secondary:hover{background:#f5f5f5}.btn-clear{padding:.4rem .75rem;background:#fff;color:#f44336;border:1px solid #ffcdd2;border-radius:4px;cursor:pointer;font-size:.8rem}.btn-clear:hover{background:#ffebee}.route-result{border-top:1px solid #e0e0e0;padding-top:.75rem}.result-summary{display:flex;gap:1rem;flex-wrap:wrap}.summary-item{display:flex;flex-direction:column}.summary-value{font-weight:600;font-size:1rem;color:#333}.summary-label{font-size:.7rem;color:#888}.maneuvers-section{margin-top:.75rem}.maneuvers-toggle{background:none;border:none;cursor:pointer;font-size:.8rem;color:#555;padding:.25rem 0;font-weight:500}.maneuvers-toggle:hover{color:#c45e00}.maneuvers-list{margin-top:.5rem;display:flex;flex-direction:column;gap:.25rem}.maneuver-item{display:flex;justify-content:space-between;align-items:flex-start;gap:.5rem;padding:.3rem 0;border-bottom:1px solid #f5f5f5;font-size:.75rem}.maneuver-instruction{flex:1;color:#333}.maneuver-distance{color:#888;white-space:nowrap}\n";})();
import { PayloadImpl as fu, WidgetActionInterfaceImpl as xp, EVENT_ACTIONS_REGISTRY as Dp, EventsPackage as Rp, EVENT_REGISTRY_ID as Fp } from "org.eclipse.daanse.board.app.lib.api.events";
import { activate as Up, deactivate as Wp, component as bp, inject as Gp } from "@eclipse-daanse/tsm";
import { defineComponent as Pp, toRefs as Mp, inject as uu, ref as At, watch as Cn, computed as su, onMounted as Bp, onUnmounted as Yp, createElementBlock as Fe, openBlock as Ue, createElementVNode as J, createCommentVNode as Ln, withDirectives as $a, Fragment as Or, renderList as Sr, toDisplayString as qe, vModelSelect as $p, normalizeStyle as Hp, vModelText as Kp, withModifiers as qp } from "vue";
import { useRoute as Xp } from "vue-router";
import { useDatasourceRepository as Jp } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { BasicEObject as Zp, BasicEFactory as Vp, BasicEPackage as Qp, EPackageRegistry as Ka, BasicEClass as Nr, BasicEAttribute as Xe, getEcorePackage as Je } from "@emfts/core";
import { SET_WAYPOINTS as kp } from "org.eclipse.daanse.board.app.lib.datasource.valhalla";
import { WIDGET_SERVICE_ID as jp } from "org.eclipse.daanse.board.app.lib.api.widget";
const { identifiers: zp } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), ed = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3ccircle%20cx='6'%20cy='19'%20r='3'/%3e%3ccircle%20cx='18'%20cy='5'%20r='3'/%3e%3cpath%20d='M12%2019h4.5a3.5%203.5%200%200%200%200-7h-9a3.5%203.5%200%200%201%200-7H12'/%3e%3c/svg%3e";
class ue extends Zp {
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
      getFeature: () => this.eClass().getEStructuralFeature(ue.DEFAULT_COSTING),
      getOldValue: () => s,
      getNewValue: () => g,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => ue.DEFAULT_COSTING,
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
      getFeature: () => this.eClass().getEStructuralFeature(ue.COSTING),
      getOldValue: () => s,
      getNewValue: () => g,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => ue.COSTING,
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
      getFeature: () => this.eClass().getEStructuralFeature(ue.WAYPOINTS),
      getOldValue: () => s,
      getNewValue: () => g,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => ue.WAYPOINTS,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(g) {
    switch (this.eClass().getFeatureID(g)) {
      case ue.DEFAULT_COSTING:
        return this.defaultCosting;
      case ue.COSTING:
        return this.costing;
      case ue.WAYPOINTS:
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
      case ue.DEFAULT_COSTING:
        this.defaultCosting = s, super.eSet(g, s);
        break;
      case ue.COSTING:
        this.costing = s, super.eSet(g, s);
        break;
      case ue.WAYPOINTS:
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
      case ue.DEFAULT_COSTING:
        return this._defaultCosting !== "auto";
      case ue.COSTING:
        return this._costing !== "auto";
      case ue.WAYPOINTS:
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
      case ue.DEFAULT_COSTING:
        this._defaultCosting = "auto";
        return;
      case ue.COSTING:
        this._costing = "auto";
        return;
      case ue.WAYPOINTS:
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
class G extends fu {
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
      getFeature: () => this.eClass().getEStructuralFeature(G.GEOJSON),
      getOldValue: () => s,
      getNewValue: () => g,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => G.GEOJSON,
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
      getFeature: () => this.eClass().getEStructuralFeature(G.DISTANCE_KM),
      getOldValue: () => s,
      getNewValue: () => g,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => G.DISTANCE_KM,
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
      getFeature: () => this.eClass().getEStructuralFeature(G.DURATION_MIN),
      getOldValue: () => s,
      getNewValue: () => g,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => G.DURATION_MIN,
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
      getFeature: () => this.eClass().getEStructuralFeature(G.WAYPOINTS),
      getOldValue: () => s,
      getNewValue: () => g,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => G.WAYPOINTS,
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
      getFeature: () => this.eClass().getEStructuralFeature(G.COSTING),
      getOldValue: () => s,
      getNewValue: () => g,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => G.COSTING,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(g) {
    switch (this.eClass().getFeatureID(g)) {
      case G.GEOJSON:
        return this.geojson;
      case G.DISTANCE_KM:
        return this.distance_km;
      case G.DURATION_MIN:
        return this.duration_min;
      case G.WAYPOINTS:
        return this.waypoints;
      case G.COSTING:
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
      case G.GEOJSON:
        this.geojson = s, super.eSet(g, s);
        break;
      case G.DISTANCE_KM:
        this.distance_km = s, super.eSet(g, s);
        break;
      case G.DURATION_MIN:
        this.duration_min = s, super.eSet(g, s);
        break;
      case G.WAYPOINTS:
        this.waypoints = s, super.eSet(g, s);
        break;
      case G.COSTING:
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
      case G.GEOJSON:
        return this._geojson !== void 0;
      case G.DISTANCE_KM:
        return this._distance_km !== void 0;
      case G.DURATION_MIN:
        return this._duration_min !== void 0;
      case G.WAYPOINTS:
        return this._waypoints !== void 0;
      case G.COSTING:
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
      case G.GEOJSON:
        this._geojson = void 0;
        return;
      case G.DISTANCE_KM:
        this._distance_km = void 0;
        return;
      case G.DURATION_MIN:
        this._duration_min = void 0;
        return;
      case G.WAYPOINTS:
        this._waypoints = void 0;
        return;
      case G.COSTING:
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
class ou extends Vp {
  // Lazy singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new ou()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(C.eINSTANCE);
  }
  /**
   * Create a new RoutingWidgetSettings instance
   */
  createRoutingWidgetSettings() {
    return new ue();
  }
  /**
   * Create a new RouteCalculatedPayload instance
   */
  createRouteCalculatedPayload() {
    return new G();
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
function au(pe) {
  const g = Ka.INSTANCE.getEPackage(pe);
  if (!g)
    throw new Error(`EPackage '${pe}' is not registered. Access the eINSTANCE of that model's generated package (or register it via EPackageRegistry.INSTANCE.registerPackage) before initializing RoutingSettingsPackage.`);
  return g;
}
class C extends Qp {
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
    Ka.INSTANCE.set(C.eNS_URI, this), this.setEFactoryInstance(ou.eINSTANCE);
    const g = new Nr();
    g.setName("RoutingWidgetInterface"), g.setAbstract(!0), g.setInterface(!1), this.getEClassifiers().push(g), g.setEPackage(this), C.Literals.ROUTING_WIDGET_INTERFACE = g;
    const s = new Nr();
    s.setName("RoutingWidgetSettings"), s.setAbstract(!1), s.setInterface(!1), this.getEClassifiers().push(s), s.setEPackage(this), C.Literals.ROUTING_WIDGET_SETTINGS = s;
    const V = new Xe();
    V.setName("defaultCosting"), V.setLowerBound(0), V.setUpperBound(1), s.getEStructuralFeatures().push(V), C.Literals.ROUTING_WIDGET_SETTINGS__DEFAULT_COSTING = V;
    const Q = new Xe();
    Q.setName("costing"), Q.setLowerBound(0), Q.setUpperBound(1), s.getEStructuralFeatures().push(Q), C.Literals.ROUTING_WIDGET_SETTINGS__COSTING = Q;
    const z = new Xe();
    z.setName("waypoints"), z.setLowerBound(0), z.setUpperBound(1), s.getEStructuralFeatures().push(z), C.Literals.ROUTING_WIDGET_SETTINGS__WAYPOINTS = z;
    const P = new Nr();
    P.setName("RouteCalculatedPayload"), P.setAbstract(!1), P.setInterface(!1), this.getEClassifiers().push(P), P.setEPackage(this), C.Literals.ROUTE_CALCULATED_PAYLOAD = P;
    const nt = new Xe();
    nt.setName("geojson"), nt.setLowerBound(0), nt.setUpperBound(1), P.getEStructuralFeatures().push(nt), C.Literals.ROUTE_CALCULATED_PAYLOAD__GEOJSON = nt;
    const rt = new Xe();
    rt.setName("distance_km"), rt.setLowerBound(0), rt.setUpperBound(1), P.getEStructuralFeatures().push(rt), C.Literals.ROUTE_CALCULATED_PAYLOAD__DISTANCE_KM = rt;
    const at = new Xe();
    at.setName("duration_min"), at.setLowerBound(0), at.setUpperBound(1), P.getEStructuralFeatures().push(at), C.Literals.ROUTE_CALCULATED_PAYLOAD__DURATION_MIN = at;
    const ae = new Xe();
    ae.setName("waypoints"), ae.setLowerBound(0), ae.setUpperBound(1), P.getEStructuralFeatures().push(ae), C.Literals.ROUTE_CALCULATED_PAYLOAD__WAYPOINTS = ae;
    const U = new Xe();
    U.setName("costing"), U.setLowerBound(0), U.setUpperBound(1), P.getEStructuralFeatures().push(U), C.Literals.ROUTE_CALCULATED_PAYLOAD__COSTING = U;
    const j = new Nr();
    j.setName("WaypointPayload"), j.setAbstract(!1), j.setInterface(!1), this.getEClassifiers().push(j), j.setEPackage(this), C.Literals.WAYPOINT_PAYLOAD = j;
    const ee = new Xe();
    ee.setName("lat"), ee.setLowerBound(0), ee.setUpperBound(1), j.getEStructuralFeatures().push(ee), C.Literals.WAYPOINT_PAYLOAD__LAT = ee;
    const he = new Xe();
    he.setName("lon"), he.setLowerBound(0), he.setUpperBound(1), j.getEStructuralFeatures().push(he), C.Literals.WAYPOINT_PAYLOAD__LON = he;
    const we = new Xe();
    we.setName("name"), we.setLowerBound(0), we.setUpperBound(1), j.getEStructuralFeatures().push(we), C.Literals.WAYPOINT_PAYLOAD__NAME = we;
    const q = new Xe();
    q.setName("index"), q.setLowerBound(0), q.setUpperBound(1), j.getEStructuralFeatures().push(q), C.Literals.WAYPOINT_PAYLOAD__INDEX = q, C.Literals.ROUTING_WIDGET_INTERFACE.getESuperTypes().push(au("http://org.eclipse.daanse.board.app.lib.events").getEClassifier("WidgetActionInterface")), C.Literals.ROUTE_CALCULATED_PAYLOAD.getESuperTypes().push(au("http://org.eclipse.daanse.board.app.lib.events").getEClassifier("Payload")), C.Literals.WAYPOINT_PAYLOAD.getESuperTypes().push(au("http://org.eclipse.daanse.board.app.lib.events").getEClassifier("Payload")), C.Literals.ROUTING_WIDGET_SETTINGS__DEFAULT_COSTING.setEType(Je().getEClassifier("EString")), C.Literals.ROUTING_WIDGET_SETTINGS__COSTING.setEType(Je().getEClassifier("EString")), C.Literals.ROUTING_WIDGET_SETTINGS__WAYPOINTS.setEType(Je().getEClassifier("EJavaObject")), C.Literals.ROUTE_CALCULATED_PAYLOAD__GEOJSON.setEType(Je().getEClassifier("EJavaObject")), C.Literals.ROUTE_CALCULATED_PAYLOAD__DISTANCE_KM.setEType(Je().getEClassifier("EDouble")), C.Literals.ROUTE_CALCULATED_PAYLOAD__DURATION_MIN.setEType(Je().getEClassifier("EDouble")), C.Literals.ROUTE_CALCULATED_PAYLOAD__WAYPOINTS.setEType(Je().getEClassifier("EJavaObject")), C.Literals.ROUTE_CALCULATED_PAYLOAD__COSTING.setEType(Je().getEClassifier("EString")), C.Literals.WAYPOINT_PAYLOAD__LAT.setEType(Je().getEClassifier("EDouble")), C.Literals.WAYPOINT_PAYLOAD__LON.setEType(Je().getEClassifier("EDouble")), C.Literals.WAYPOINT_PAYLOAD__NAME.setEType(Je().getEClassifier("EString")), C.Literals.WAYPOINT_PAYLOAD__INDEX.setEType(Je().getEClassifier("EInt"));
  }
}
class td extends xp {
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
    const V = this.eClass().getFeatureID(g);
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
  addWaypoint(g, s, V) {
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
var Cr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, yn = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var nd = yn.exports, Ha;
function rd() {
  return Ha || (Ha = 1, (function(pe, g) {
    (function() {
      var s, V = "4.17.21", Q = 200, z = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", P = "Expected a function", nt = "Invalid `variable` option passed into `_.template`", rt = "__lodash_hash_undefined__", at = 500, ae = "__lodash_placeholder__", U = 1, j = 2, ee = 4, he = 1, we = 2, q = 1, le = 2, Dt = 4, Ne = 8, Tt = 16, ze = 32, Et = 64, Ze = 128, Rt = 256, Ht = 512, xr = 30, Dr = "...", Rr = 800, Fr = 16, xn = 1, Dn = 2, Ur = 3, ft = 1 / 0, We = 9007199254740991, Rn = 17976931348623157e292, Ft = NaN, be = 4294967295, Wr = be - 1, br = be >>> 1, Fn = [
        ["ary", Ze],
        ["bind", q],
        ["bindKey", le],
        ["curry", Ne],
        ["curryRight", Tt],
        ["flip", Ht],
        ["partial", ze],
        ["partialRight", Et],
        ["rearg", Rt]
      ], w = "[object Arguments]", T = "[object Array]", y = "[object AsyncFunction]", H = "[object Boolean]", se = "[object Date]", Gr = "[object DOMException]", sn = "[object Error]", Un = "[object Function]", cu = "[object GeneratorFunction]", Ve = "[object Map]", an = "[object Number]", qa = "[object Null]", ot = "[object Object]", hu = "[object Promise]", Xa = "[object Proxy]", fn = "[object RegExp]", Qe = "[object Set]", on = "[object String]", Wn = "[object Symbol]", Ja = "[object Undefined]", ln = "[object WeakMap]", za = "[object WeakSet]", cn = "[object ArrayBuffer]", Kt = "[object DataView]", Pr = "[object Float32Array]", Mr = "[object Float64Array]", Br = "[object Int8Array]", Yr = "[object Int16Array]", $r = "[object Int32Array]", Hr = "[object Uint8Array]", Kr = "[object Uint8ClampedArray]", qr = "[object Uint16Array]", Xr = "[object Uint32Array]", Za = /\b__p \+= '';/g, Va = /\b(__p \+=) '' \+/g, Qa = /(__e\(.*?\)|\b__t\)) \+\n'';/g, gu = /&(?:amp|lt|gt|quot|#39);/g, _u = /[&<>"']/g, ka = RegExp(gu.source), ja = RegExp(_u.source), ef = /<%-([\s\S]+?)%>/g, tf = /<%([\s\S]+?)%>/g, pu = /<%=([\s\S]+?)%>/g, nf = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, rf = /^\w*$/, uf = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Jr = /[\\^$.*+?()[\]{}|]/g, sf = RegExp(Jr.source), zr = /^\s+/, af = /\s/, ff = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, of = /\{\n\/\* \[wrapped with (.+)\] \*/, lf = /,? & /, cf = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, hf = /[()=,{}\[\]\/\s]/, gf = /\\(\\)?/g, _f = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, du = /\w*$/, pf = /^[-+]0x[0-9a-f]+$/i, df = /^0b[01]+$/i, vf = /^\[object .+?Constructor\]$/, wf = /^0o[0-7]+$/i, Af = /^(?:0|[1-9]\d*)$/, Tf = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, bn = /($^)/, Ef = /['\n\r\u2028\u2029\\]/g, Gn = "\\ud800-\\udfff", If = "\\u0300-\\u036f", mf = "\\ufe20-\\ufe2f", Of = "\\u20d0-\\u20ff", vu = If + mf + Of, wu = "\\u2700-\\u27bf", Au = "a-z\\xdf-\\xf6\\xf8-\\xff", Sf = "\\xac\\xb1\\xd7\\xf7", Nf = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Cf = "\\u2000-\\u206f", Lf = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Tu = "A-Z\\xc0-\\xd6\\xd8-\\xde", Eu = "\\ufe0e\\ufe0f", Iu = Sf + Nf + Cf + Lf, Zr = "['’]", yf = "[" + Gn + "]", mu = "[" + Iu + "]", Pn = "[" + vu + "]", Ou = "\\d+", xf = "[" + wu + "]", Su = "[" + Au + "]", Nu = "[^" + Gn + Iu + Ou + wu + Au + Tu + "]", Vr = "\\ud83c[\\udffb-\\udfff]", Df = "(?:" + Pn + "|" + Vr + ")", Cu = "[^" + Gn + "]", Qr = "(?:\\ud83c[\\udde6-\\uddff]){2}", kr = "[\\ud800-\\udbff][\\udc00-\\udfff]", qt = "[" + Tu + "]", Lu = "\\u200d", yu = "(?:" + Su + "|" + Nu + ")", Rf = "(?:" + qt + "|" + Nu + ")", xu = "(?:" + Zr + "(?:d|ll|m|re|s|t|ve))?", Du = "(?:" + Zr + "(?:D|LL|M|RE|S|T|VE))?", Ru = Df + "?", Fu = "[" + Eu + "]?", Ff = "(?:" + Lu + "(?:" + [Cu, Qr, kr].join("|") + ")" + Fu + Ru + ")*", Uf = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Wf = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Uu = Fu + Ru + Ff, bf = "(?:" + [xf, Qr, kr].join("|") + ")" + Uu, Gf = "(?:" + [Cu + Pn + "?", Pn, Qr, kr, yf].join("|") + ")", Pf = RegExp(Zr, "g"), Mf = RegExp(Pn, "g"), jr = RegExp(Vr + "(?=" + Vr + ")|" + Gf + Uu, "g"), Bf = RegExp([
        qt + "?" + Su + "+" + xu + "(?=" + [mu, qt, "$"].join("|") + ")",
        Rf + "+" + Du + "(?=" + [mu, qt + yu, "$"].join("|") + ")",
        qt + "?" + yu + "+" + xu,
        qt + "+" + Du,
        Wf,
        Uf,
        Ou,
        bf
      ].join("|"), "g"), Yf = RegExp("[" + Lu + Gn + vu + Eu + "]"), $f = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Hf = [
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
      ], Kf = -1, Z = {};
      Z[Pr] = Z[Mr] = Z[Br] = Z[Yr] = Z[$r] = Z[Hr] = Z[Kr] = Z[qr] = Z[Xr] = !0, Z[w] = Z[T] = Z[cn] = Z[H] = Z[Kt] = Z[se] = Z[sn] = Z[Un] = Z[Ve] = Z[an] = Z[ot] = Z[fn] = Z[Qe] = Z[on] = Z[ln] = !1;
      var X = {};
      X[w] = X[T] = X[cn] = X[Kt] = X[H] = X[se] = X[Pr] = X[Mr] = X[Br] = X[Yr] = X[$r] = X[Ve] = X[an] = X[ot] = X[fn] = X[Qe] = X[on] = X[Wn] = X[Hr] = X[Kr] = X[qr] = X[Xr] = !0, X[sn] = X[Un] = X[ln] = !1;
      var qf = {
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
      }, Xf = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }, Jf = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      }, zf = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      }, Zf = parseFloat, Vf = parseInt, Wu = typeof Cr == "object" && Cr && Cr.Object === Object && Cr, Qf = typeof self == "object" && self && self.Object === Object && self, ge = Wu || Qf || Function("return this")(), ei = g && !g.nodeType && g, Ut = ei && !0 && pe && !pe.nodeType && pe, bu = Ut && Ut.exports === ei, ti = bu && Wu.process, Ge = (function() {
        try {
          var l = Ut && Ut.require && Ut.require("util").types;
          return l || ti && ti.binding && ti.binding("util");
        } catch {
        }
      })(), Gu = Ge && Ge.isArrayBuffer, Pu = Ge && Ge.isDate, Mu = Ge && Ge.isMap, Bu = Ge && Ge.isRegExp, Yu = Ge && Ge.isSet, $u = Ge && Ge.isTypedArray;
      function Ce(l, _, h) {
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
      function kf(l, _, h, E) {
        for (var N = -1, M = l == null ? 0 : l.length; ++N < M; ) {
          var fe = l[N];
          _(E, fe, h(fe), l);
        }
        return E;
      }
      function Pe(l, _) {
        for (var h = -1, E = l == null ? 0 : l.length; ++h < E && _(l[h], h, l) !== !1; )
          ;
        return l;
      }
      function jf(l, _) {
        for (var h = l == null ? 0 : l.length; h-- && _(l[h], h, l) !== !1; )
          ;
        return l;
      }
      function Hu(l, _) {
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
      function eo(l, _, h, E) {
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
      var to = ui("length");
      function no(l) {
        return l.split("");
      }
      function ro(l) {
        return l.match(cf) || [];
      }
      function Ku(l, _, h) {
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
        return _ === _ ? po(l, _, h) : Bn(l, qu, h);
      }
      function io(l, _, h, E) {
        for (var N = h - 1, M = l.length; ++N < M; )
          if (E(l[N], _))
            return N;
        return -1;
      }
      function qu(l) {
        return l !== l;
      }
      function Xu(l, _) {
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
      function Ju(l, _, h, E, N) {
        return N(l, function(M, fe, K) {
          h = E ? (E = !1, M) : _(h, M, fe, K);
        }), h;
      }
      function uo(l, _) {
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
      function fi(l, _) {
        for (var h = -1, E = Array(l); ++h < l; )
          E[h] = _(h);
        return E;
      }
      function so(l, _) {
        return k(_, function(h) {
          return [h, l[h]];
        });
      }
      function zu(l) {
        return l && l.slice(0, ku(l) + 1).replace(zr, "");
      }
      function Le(l) {
        return function(_) {
          return l(_);
        };
      }
      function oi(l, _) {
        return k(_, function(h) {
          return l[h];
        });
      }
      function hn(l, _) {
        return l.has(_);
      }
      function Zu(l, _) {
        for (var h = -1, E = l.length; ++h < E && Xt(_, l[h], 0) > -1; )
          ;
        return h;
      }
      function Vu(l, _) {
        for (var h = l.length; h-- && Xt(_, l[h], 0) > -1; )
          ;
        return h;
      }
      function ao(l, _) {
        for (var h = l.length, E = 0; h--; )
          l[h] === _ && ++E;
        return E;
      }
      var fo = si(qf), oo = si(Xf);
      function lo(l) {
        return "\\" + zf[l];
      }
      function co(l, _) {
        return l == null ? s : l[_];
      }
      function Jt(l) {
        return Yf.test(l);
      }
      function ho(l) {
        return $f.test(l);
      }
      function go(l) {
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
      function Qu(l, _) {
        return function(h) {
          return l(_(h));
        };
      }
      function Ot(l, _) {
        for (var h = -1, E = l.length, N = 0, M = []; ++h < E; ) {
          var fe = l[h];
          (fe === _ || fe === ae) && (l[h] = ae, M[N++] = h);
        }
        return M;
      }
      function Yn(l) {
        var _ = -1, h = Array(l.size);
        return l.forEach(function(E) {
          h[++_] = E;
        }), h;
      }
      function _o(l) {
        var _ = -1, h = Array(l.size);
        return l.forEach(function(E) {
          h[++_] = [E, E];
        }), h;
      }
      function po(l, _, h) {
        for (var E = h - 1, N = l.length; ++E < N; )
          if (l[E] === _)
            return E;
        return -1;
      }
      function vo(l, _, h) {
        for (var E = h + 1; E--; )
          if (l[E] === _)
            return E;
        return E;
      }
      function zt(l) {
        return Jt(l) ? Ao(l) : to(l);
      }
      function ke(l) {
        return Jt(l) ? To(l) : no(l);
      }
      function ku(l) {
        for (var _ = l.length; _-- && af.test(l.charAt(_)); )
          ;
        return _;
      }
      var wo = si(Jf);
      function Ao(l) {
        for (var _ = jr.lastIndex = 0; jr.test(l); )
          ++_;
        return _;
      }
      function To(l) {
        return l.match(jr) || [];
      }
      function Eo(l) {
        return l.match(Bf) || [];
      }
      var Io = (function l(_) {
        _ = _ == null ? ge : Zt.defaults(ge.Object(), _, Zt.pick(ge, Hf));
        var h = _.Array, E = _.Date, N = _.Error, M = _.Function, fe = _.Math, K = _.Object, ci = _.RegExp, mo = _.String, Me = _.TypeError, $n = h.prototype, Oo = M.prototype, Vt = K.prototype, Hn = _["__core-js_shared__"], Kn = Oo.toString, $ = Vt.hasOwnProperty, So = 0, ju = (function() {
          var e = /[^.]+$/.exec(Hn && Hn.keys && Hn.keys.IE_PROTO || "");
          return e ? "Symbol(src)_1." + e : "";
        })(), qn = Vt.toString, No = Kn.call(K), Co = ge._, Lo = ci(
          "^" + Kn.call($).replace(Jr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        ), Xn = bu ? _.Buffer : s, St = _.Symbol, Jn = _.Uint8Array, es = Xn ? Xn.allocUnsafe : s, zn = Qu(K.getPrototypeOf, K), ts = K.create, ns = Vt.propertyIsEnumerable, Zn = $n.splice, rs = St ? St.isConcatSpreadable : s, gn = St ? St.iterator : s, Wt = St ? St.toStringTag : s, Vn = (function() {
          try {
            var e = Bt(K, "defineProperty");
            return e({}, "", {}), e;
          } catch {
          }
        })(), yo = _.clearTimeout !== ge.clearTimeout && _.clearTimeout, xo = E && E.now !== ge.Date.now && E.now, Do = _.setTimeout !== ge.setTimeout && _.setTimeout, Qn = fe.ceil, kn = fe.floor, hi = K.getOwnPropertySymbols, Ro = Xn ? Xn.isBuffer : s, is = _.isFinite, Fo = $n.join, Uo = Qu(K.keys, K), oe = fe.max, de = fe.min, Wo = E.now, bo = _.parseInt, us = fe.random, Go = $n.reverse, gi = Bt(_, "DataView"), _n = Bt(_, "Map"), _i = Bt(_, "Promise"), Qt = Bt(_, "Set"), pn = Bt(_, "WeakMap"), dn = Bt(K, "create"), jn = pn && new pn(), kt = {}, Po = Yt(gi), Mo = Yt(_n), Bo = Yt(_i), Yo = Yt(Qt), $o = Yt(pn), er = St ? St.prototype : s, vn = er ? er.valueOf : s, ss = er ? er.toString : s;
        function u(e) {
          if (ne(e) && !L(e) && !(e instanceof W)) {
            if (e instanceof Be)
              return e;
            if ($.call(e, "__wrapped__"))
              return aa(e);
          }
          return new Be(e);
        }
        var jt = /* @__PURE__ */ (function() {
          function e() {
          }
          return function(t) {
            if (!te(t))
              return {};
            if (ts)
              return ts(t);
            e.prototype = t;
            var n = new e();
            return e.prototype = s, n;
          };
        })();
        function tr() {
        }
        function Be(e, t) {
          this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = s;
        }
        u.templateSettings = {
          /**
           * Used to detect `data` property values to be HTML-escaped.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          escape: ef,
          /**
           * Used to detect code to be evaluated.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          evaluate: tf,
          /**
           * Used to detect `data` property values to inject.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          interpolate: pu,
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
        }, u.prototype = tr.prototype, u.prototype.constructor = u, Be.prototype = jt(tr.prototype), Be.prototype.constructor = Be;
        function W(e) {
          this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = be, this.__views__ = [];
        }
        function Ho() {
          var e = new W(this.__wrapped__);
          return e.__actions__ = Ie(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = Ie(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = Ie(this.__views__), e;
        }
        function Ko() {
          if (this.__filtered__) {
            var e = new W(this);
            e.__dir__ = -1, e.__filtered__ = !0;
          } else
            e = this.clone(), e.__dir__ *= -1;
          return e;
        }
        function qo() {
          var e = this.__wrapped__.value(), t = this.__dir__, n = L(e), r = t < 0, i = n ? e.length : 0, a = rc(0, i, this.__views__), f = a.start, o = a.end, c = o - f, p = r ? o : f - 1, d = this.__iteratees__, v = d.length, A = 0, I = de(c, this.__takeCount__);
          if (!n || !r && i == c && I == c)
            return xs(e, this.__actions__);
          var O = [];
          e:
            for (; c-- && A < I; ) {
              p += t;
              for (var D = -1, S = e[p]; ++D < v; ) {
                var F = d[D], b = F.iteratee, De = F.type, Ee = b(S);
                if (De == Dn)
                  S = Ee;
                else if (!Ee) {
                  if (De == xn)
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
        function Xo() {
          this.__data__ = dn ? dn(null) : {}, this.size = 0;
        }
        function Jo(e) {
          var t = this.has(e) && delete this.__data__[e];
          return this.size -= t ? 1 : 0, t;
        }
        function zo(e) {
          var t = this.__data__;
          if (dn) {
            var n = t[e];
            return n === rt ? s : n;
          }
          return $.call(t, e) ? t[e] : s;
        }
        function Zo(e) {
          var t = this.__data__;
          return dn ? t[e] !== s : $.call(t, e);
        }
        function Vo(e, t) {
          var n = this.__data__;
          return this.size += this.has(e) ? 0 : 1, n[e] = dn && t === s ? rt : t, this;
        }
        bt.prototype.clear = Xo, bt.prototype.delete = Jo, bt.prototype.get = zo, bt.prototype.has = Zo, bt.prototype.set = Vo;
        function lt(e) {
          var t = -1, n = e == null ? 0 : e.length;
          for (this.clear(); ++t < n; ) {
            var r = e[t];
            this.set(r[0], r[1]);
          }
        }
        function Qo() {
          this.__data__ = [], this.size = 0;
        }
        function ko(e) {
          var t = this.__data__, n = nr(t, e);
          if (n < 0)
            return !1;
          var r = t.length - 1;
          return n == r ? t.pop() : Zn.call(t, n, 1), --this.size, !0;
        }
        function jo(e) {
          var t = this.__data__, n = nr(t, e);
          return n < 0 ? s : t[n][1];
        }
        function el(e) {
          return nr(this.__data__, e) > -1;
        }
        function tl(e, t) {
          var n = this.__data__, r = nr(n, e);
          return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
        }
        lt.prototype.clear = Qo, lt.prototype.delete = ko, lt.prototype.get = jo, lt.prototype.has = el, lt.prototype.set = tl;
        function ct(e) {
          var t = -1, n = e == null ? 0 : e.length;
          for (this.clear(); ++t < n; ) {
            var r = e[t];
            this.set(r[0], r[1]);
          }
        }
        function nl() {
          this.size = 0, this.__data__ = {
            hash: new bt(),
            map: new (_n || lt)(),
            string: new bt()
          };
        }
        function rl(e) {
          var t = _r(this, e).delete(e);
          return this.size -= t ? 1 : 0, t;
        }
        function il(e) {
          return _r(this, e).get(e);
        }
        function ul(e) {
          return _r(this, e).has(e);
        }
        function sl(e, t) {
          var n = _r(this, e), r = n.size;
          return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
        }
        ct.prototype.clear = nl, ct.prototype.delete = rl, ct.prototype.get = il, ct.prototype.has = ul, ct.prototype.set = sl;
        function Gt(e) {
          var t = -1, n = e == null ? 0 : e.length;
          for (this.__data__ = new ct(); ++t < n; )
            this.add(e[t]);
        }
        function al(e) {
          return this.__data__.set(e, rt), this;
        }
        function fl(e) {
          return this.__data__.has(e);
        }
        Gt.prototype.add = Gt.prototype.push = al, Gt.prototype.has = fl;
        function je(e) {
          var t = this.__data__ = new lt(e);
          this.size = t.size;
        }
        function ol() {
          this.__data__ = new lt(), this.size = 0;
        }
        function ll(e) {
          var t = this.__data__, n = t.delete(e);
          return this.size = t.size, n;
        }
        function cl(e) {
          return this.__data__.get(e);
        }
        function hl(e) {
          return this.__data__.has(e);
        }
        function gl(e, t) {
          var n = this.__data__;
          if (n instanceof lt) {
            var r = n.__data__;
            if (!_n || r.length < Q - 1)
              return r.push([e, t]), this.size = ++n.size, this;
            n = this.__data__ = new ct(r);
          }
          return n.set(e, t), this.size = n.size, this;
        }
        je.prototype.clear = ol, je.prototype.delete = ll, je.prototype.get = cl, je.prototype.has = hl, je.prototype.set = gl;
        function as(e, t) {
          var n = L(e), r = !n && $t(e), i = !n && !r && xt(e), a = !n && !r && !i && rn(e), f = n || r || i || a, o = f ? fi(e.length, mo) : [], c = o.length;
          for (var p in e)
            (t || $.call(e, p)) && !(f && // Safari 9 has enumerable `arguments.length` in strict mode.
            (p == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            i && (p == "offset" || p == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            a && (p == "buffer" || p == "byteLength" || p == "byteOffset") || // Skip index properties.
            pt(p, c))) && o.push(p);
          return o;
        }
        function fs(e) {
          var t = e.length;
          return t ? e[Si(0, t - 1)] : s;
        }
        function _l(e, t) {
          return pr(Ie(e), Pt(t, 0, e.length));
        }
        function pl(e) {
          return pr(Ie(e));
        }
        function pi(e, t, n) {
          (n !== s && !et(e[t], n) || n === s && !(t in e)) && ht(e, t, n);
        }
        function wn(e, t, n) {
          var r = e[t];
          (!($.call(e, t) && et(r, n)) || n === s && !(t in e)) && ht(e, t, n);
        }
        function nr(e, t) {
          for (var n = e.length; n--; )
            if (et(e[n][0], t))
              return n;
          return -1;
        }
        function dl(e, t, n, r) {
          return Nt(e, function(i, a, f) {
            t(r, i, n(i), f);
          }), r;
        }
        function os(e, t) {
          return e && ut(t, ce(t), e);
        }
        function vl(e, t) {
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
        function Ye(e, t, n, r, i, a) {
          var f, o = t & U, c = t & j, p = t & ee;
          if (n && (f = i ? n(e, r, i, a) : n(e)), f !== s)
            return f;
          if (!te(e))
            return e;
          var d = L(e);
          if (d) {
            if (f = uc(e), !o)
              return Ie(e, f);
          } else {
            var v = ve(e), A = v == Un || v == cu;
            if (xt(e))
              return Fs(e, o);
            if (v == ot || v == w || A && !i) {
              if (f = c || A ? {} : ks(e), !o)
                return c ? zl(e, vl(f, e)) : Jl(e, os(f, e));
            } else {
              if (!X[v])
                return i ? e : {};
              f = sc(e, v, o);
            }
          }
          a || (a = new je());
          var I = a.get(e);
          if (I)
            return I;
          a.set(e, f), Ca(e) ? e.forEach(function(S) {
            f.add(Ye(S, t, n, S, e, a));
          }) : Sa(e) && e.forEach(function(S, F) {
            f.set(F, Ye(S, t, n, F, e, a));
          });
          var O = p ? c ? bi : Wi : c ? Oe : ce, D = d ? s : O(e);
          return Pe(D || e, function(S, F) {
            D && (F = S, S = e[F]), wn(f, F, Ye(S, t, n, F, e, a));
          }), f;
        }
        function wl(e) {
          var t = ce(e);
          return function(n) {
            return ls(n, e, t);
          };
        }
        function ls(e, t, n) {
          var r = n.length;
          if (e == null)
            return !r;
          for (e = K(e); r--; ) {
            var i = n[r], a = t[i], f = e[i];
            if (f === s && !(i in e) || !a(f))
              return !1;
          }
          return !0;
        }
        function cs(e, t, n) {
          if (typeof e != "function")
            throw new Me(P);
          return Sn(function() {
            e.apply(s, n);
          }, t);
        }
        function An(e, t, n, r) {
          var i = -1, a = Mn, f = !0, o = e.length, c = [], p = t.length;
          if (!o)
            return c;
          n && (t = k(t, Le(n))), r ? (a = ni, f = !1) : t.length >= Q && (a = hn, f = !1, t = new Gt(t));
          e:
            for (; ++i < o; ) {
              var d = e[i], v = n == null ? d : n(d);
              if (d = r || d !== 0 ? d : 0, f && v === v) {
                for (var A = p; A--; )
                  if (t[A] === v)
                    continue e;
                c.push(d);
              } else a(t, v, r) || c.push(d);
            }
          return c;
        }
        var Nt = Ps(it), hs = Ps(wi, !0);
        function Al(e, t) {
          var n = !0;
          return Nt(e, function(r, i, a) {
            return n = !!t(r, i, a), n;
          }), n;
        }
        function rr(e, t, n) {
          for (var r = -1, i = e.length; ++r < i; ) {
            var a = e[r], f = t(a);
            if (f != null && (o === s ? f === f && !xe(f) : n(f, o)))
              var o = f, c = a;
          }
          return c;
        }
        function Tl(e, t, n, r) {
          var i = e.length;
          for (n = x(n), n < 0 && (n = -n > i ? 0 : i + n), r = r === s || r > i ? i : x(r), r < 0 && (r += i), r = n > r ? 0 : ya(r); n < r; )
            e[n++] = t;
          return e;
        }
        function gs(e, t) {
          var n = [];
          return Nt(e, function(r, i, a) {
            t(r, i, a) && n.push(r);
          }), n;
        }
        function _e(e, t, n, r, i) {
          var a = -1, f = e.length;
          for (n || (n = fc), i || (i = []); ++a < f; ) {
            var o = e[a];
            t > 0 && n(o) ? t > 1 ? _e(o, t - 1, n, r, i) : mt(i, o) : r || (i[i.length] = o);
          }
          return i;
        }
        var vi = Ms(), _s = Ms(!0);
        function it(e, t) {
          return e && vi(e, t, ce);
        }
        function wi(e, t) {
          return e && _s(e, t, ce);
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
        function ps(e, t, n) {
          var r = t(e);
          return L(e) ? r : mt(r, n(e));
        }
        function Ae(e) {
          return e == null ? e === s ? Ja : qa : Wt && Wt in K(e) ? nc(e) : pc(e);
        }
        function Ai(e, t) {
          return e > t;
        }
        function El(e, t) {
          return e != null && $.call(e, t);
        }
        function Il(e, t) {
          return e != null && t in K(e);
        }
        function ml(e, t, n) {
          return e >= de(t, n) && e < oe(t, n);
        }
        function Ti(e, t, n) {
          for (var r = n ? ni : Mn, i = e[0].length, a = e.length, f = a, o = h(a), c = 1 / 0, p = []; f--; ) {
            var d = e[f];
            f && t && (d = k(d, Le(t))), c = de(d.length, c), o[f] = !n && (t || i >= 120 && d.length >= 120) ? new Gt(f && d) : s;
          }
          d = e[0];
          var v = -1, A = o[0];
          e:
            for (; ++v < i && p.length < c; ) {
              var I = d[v], O = t ? t(I) : I;
              if (I = n || I !== 0 ? I : 0, !(A ? hn(A, O) : r(p, O, n))) {
                for (f = a; --f; ) {
                  var D = o[f];
                  if (!(D ? hn(D, O) : r(e[f], O, n)))
                    continue e;
                }
                A && A.push(O), p.push(I);
              }
            }
          return p;
        }
        function Ol(e, t, n, r) {
          return it(e, function(i, a, f) {
            t(r, n(i), a, f);
          }), r;
        }
        function Tn(e, t, n) {
          t = Lt(t, e), e = na(e, t);
          var r = e == null ? e : e[st(He(t))];
          return r == null ? s : Ce(r, e, n);
        }
        function ds(e) {
          return ne(e) && Ae(e) == w;
        }
        function Sl(e) {
          return ne(e) && Ae(e) == cn;
        }
        function Nl(e) {
          return ne(e) && Ae(e) == se;
        }
        function En(e, t, n, r, i) {
          return e === t ? !0 : e == null || t == null || !ne(e) && !ne(t) ? e !== e && t !== t : Cl(e, t, n, r, En, i);
        }
        function Cl(e, t, n, r, i, a) {
          var f = L(e), o = L(t), c = f ? T : ve(e), p = o ? T : ve(t);
          c = c == w ? ot : c, p = p == w ? ot : p;
          var d = c == ot, v = p == ot, A = c == p;
          if (A && xt(e)) {
            if (!xt(t))
              return !1;
            f = !0, d = !1;
          }
          if (A && !d)
            return a || (a = new je()), f || rn(e) ? Zs(e, t, n, r, i, a) : ec(e, t, c, n, r, i, a);
          if (!(n & he)) {
            var I = d && $.call(e, "__wrapped__"), O = v && $.call(t, "__wrapped__");
            if (I || O) {
              var D = I ? e.value() : e, S = O ? t.value() : t;
              return a || (a = new je()), i(D, S, n, r, a);
            }
          }
          return A ? (a || (a = new je()), tc(e, t, n, r, i, a)) : !1;
        }
        function Ll(e) {
          return ne(e) && ve(e) == Ve;
        }
        function Ei(e, t, n, r) {
          var i = n.length, a = i, f = !r;
          if (e == null)
            return !a;
          for (e = K(e); i--; ) {
            var o = n[i];
            if (f && o[2] ? o[1] !== e[o[0]] : !(o[0] in e))
              return !1;
          }
          for (; ++i < a; ) {
            o = n[i];
            var c = o[0], p = e[c], d = o[1];
            if (f && o[2]) {
              if (p === s && !(c in e))
                return !1;
            } else {
              var v = new je();
              if (r)
                var A = r(p, d, c, e, t, v);
              if (!(A === s ? En(d, p, he | we, r, v) : A))
                return !1;
            }
          }
          return !0;
        }
        function vs(e) {
          if (!te(e) || lc(e))
            return !1;
          var t = dt(e) ? Lo : vf;
          return t.test(Yt(e));
        }
        function yl(e) {
          return ne(e) && Ae(e) == fn;
        }
        function xl(e) {
          return ne(e) && ve(e) == Qe;
        }
        function Dl(e) {
          return ne(e) && Er(e.length) && !!Z[Ae(e)];
        }
        function ws(e) {
          return typeof e == "function" ? e : e == null ? Se : typeof e == "object" ? L(e) ? Es(e[0], e[1]) : Ts(e) : Ba(e);
        }
        function Ii(e) {
          if (!On(e))
            return Uo(e);
          var t = [];
          for (var n in K(e))
            $.call(e, n) && n != "constructor" && t.push(n);
          return t;
        }
        function Rl(e) {
          if (!te(e))
            return _c(e);
          var t = On(e), n = [];
          for (var r in e)
            r == "constructor" && (t || !$.call(e, r)) || n.push(r);
          return n;
        }
        function mi(e, t) {
          return e < t;
        }
        function As(e, t) {
          var n = -1, r = me(e) ? h(e.length) : [];
          return Nt(e, function(i, a, f) {
            r[++n] = t(i, a, f);
          }), r;
        }
        function Ts(e) {
          var t = Pi(e);
          return t.length == 1 && t[0][2] ? ea(t[0][0], t[0][1]) : function(n) {
            return n === e || Ei(n, e, t);
          };
        }
        function Es(e, t) {
          return Bi(e) && js(t) ? ea(st(e), t) : function(n) {
            var r = Vi(n, e);
            return r === s && r === t ? Qi(n, e) : En(t, r, he | we);
          };
        }
        function ur(e, t, n, r, i) {
          e !== t && vi(t, function(a, f) {
            if (i || (i = new je()), te(a))
              Fl(e, t, f, n, ur, r, i);
            else {
              var o = r ? r($i(e, f), a, f + "", e, t, i) : s;
              o === s && (o = a), pi(e, f, o);
            }
          }, Oe);
        }
        function Fl(e, t, n, r, i, a, f) {
          var o = $i(e, n), c = $i(t, n), p = f.get(c);
          if (p) {
            pi(e, n, p);
            return;
          }
          var d = a ? a(o, c, n + "", e, t, f) : s, v = d === s;
          if (v) {
            var A = L(c), I = !A && xt(c), O = !A && !I && rn(c);
            d = c, A || I || O ? L(o) ? d = o : re(o) ? d = Ie(o) : I ? (v = !1, d = Fs(c, !0)) : O ? (v = !1, d = Us(c, !0)) : d = [] : Nn(c) || $t(c) ? (d = o, $t(o) ? d = xa(o) : (!te(o) || dt(o)) && (d = ks(c))) : v = !1;
          }
          v && (f.set(c, d), i(d, c, r, a, f), f.delete(c)), pi(e, n, d);
        }
        function Is(e, t) {
          var n = e.length;
          if (n)
            return t += t < 0 ? n : 0, pt(t, n) ? e[t] : s;
        }
        function ms(e, t, n) {
          t.length ? t = k(t, function(a) {
            return L(a) ? function(f) {
              return Mt(f, a.length === 1 ? a[0] : a);
            } : a;
          }) : t = [Se];
          var r = -1;
          t = k(t, Le(m()));
          var i = As(e, function(a, f, o) {
            var c = k(t, function(p) {
              return p(a);
            });
            return { criteria: c, index: ++r, value: a };
          });
          return uo(i, function(a, f) {
            return Xl(a, f, n);
          });
        }
        function Ul(e, t) {
          return Os(e, t, function(n, r) {
            return Qi(e, r);
          });
        }
        function Os(e, t, n) {
          for (var r = -1, i = t.length, a = {}; ++r < i; ) {
            var f = t[r], o = Mt(e, f);
            n(o, f) && In(a, Lt(f, e), o);
          }
          return a;
        }
        function Wl(e) {
          return function(t) {
            return Mt(t, e);
          };
        }
        function Oi(e, t, n, r) {
          var i = r ? io : Xt, a = -1, f = t.length, o = e;
          for (e === t && (t = Ie(t)), n && (o = k(e, Le(n))); ++a < f; )
            for (var c = 0, p = t[a], d = n ? n(p) : p; (c = i(o, d, c, r)) > -1; )
              o !== e && Zn.call(o, c, 1), Zn.call(e, c, 1);
          return e;
        }
        function Ss(e, t) {
          for (var n = e ? t.length : 0, r = n - 1; n--; ) {
            var i = t[n];
            if (n == r || i !== a) {
              var a = i;
              pt(i) ? Zn.call(e, i, 1) : Li(e, i);
            }
          }
          return e;
        }
        function Si(e, t) {
          return e + kn(us() * (t - e + 1));
        }
        function bl(e, t, n, r) {
          for (var i = -1, a = oe(Qn((t - e) / (n || 1)), 0), f = h(a); a--; )
            f[r ? a : ++i] = e, e += n;
          return f;
        }
        function Ni(e, t) {
          var n = "";
          if (!e || t < 1 || t > We)
            return n;
          do
            t % 2 && (n += e), t = kn(t / 2), t && (e += e);
          while (t);
          return n;
        }
        function R(e, t) {
          return Hi(ta(e, t, Se), e + "");
        }
        function Gl(e) {
          return fs(un(e));
        }
        function Pl(e, t) {
          var n = un(e);
          return pr(n, Pt(t, 0, n.length));
        }
        function In(e, t, n, r) {
          if (!te(e))
            return e;
          t = Lt(t, e);
          for (var i = -1, a = t.length, f = a - 1, o = e; o != null && ++i < a; ) {
            var c = st(t[i]), p = n;
            if (c === "__proto__" || c === "constructor" || c === "prototype")
              return e;
            if (i != f) {
              var d = o[c];
              p = r ? r(d, c, o) : s, p === s && (p = te(d) ? d : pt(t[i + 1]) ? [] : {});
            }
            wn(o, c, p), o = o[c];
          }
          return e;
        }
        var Ns = jn ? function(e, t) {
          return jn.set(e, t), e;
        } : Se, Ml = Vn ? function(e, t) {
          return Vn(e, "toString", {
            configurable: !0,
            enumerable: !1,
            value: ji(t),
            writable: !0
          });
        } : Se;
        function Bl(e) {
          return pr(un(e));
        }
        function $e(e, t, n) {
          var r = -1, i = e.length;
          t < 0 && (t = -t > i ? 0 : i + t), n = n > i ? i : n, n < 0 && (n += i), i = t > n ? 0 : n - t >>> 0, t >>>= 0;
          for (var a = h(i); ++r < i; )
            a[r] = e[r + t];
          return a;
        }
        function Yl(e, t) {
          var n;
          return Nt(e, function(r, i, a) {
            return n = t(r, i, a), !n;
          }), !!n;
        }
        function sr(e, t, n) {
          var r = 0, i = e == null ? r : e.length;
          if (typeof t == "number" && t === t && i <= br) {
            for (; r < i; ) {
              var a = r + i >>> 1, f = e[a];
              f !== null && !xe(f) && (n ? f <= t : f < t) ? r = a + 1 : i = a;
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
          for (var f = t !== t, o = t === null, c = xe(t), p = t === s; i < a; ) {
            var d = kn((i + a) / 2), v = n(e[d]), A = v !== s, I = v === null, O = v === v, D = xe(v);
            if (f)
              var S = r || O;
            else p ? S = O && (r || A) : o ? S = O && A && (r || !I) : c ? S = O && A && !I && (r || !D) : I || D ? S = !1 : S = r ? v <= t : v < t;
            S ? i = d + 1 : a = d;
          }
          return de(a, Wr);
        }
        function Cs(e, t) {
          for (var n = -1, r = e.length, i = 0, a = []; ++n < r; ) {
            var f = e[n], o = t ? t(f) : f;
            if (!n || !et(o, c)) {
              var c = o;
              a[i++] = f === 0 ? 0 : f;
            }
          }
          return a;
        }
        function Ls(e) {
          return typeof e == "number" ? e : xe(e) ? Ft : +e;
        }
        function ye(e) {
          if (typeof e == "string")
            return e;
          if (L(e))
            return k(e, ye) + "";
          if (xe(e))
            return ss ? ss.call(e) : "";
          var t = e + "";
          return t == "0" && 1 / e == -ft ? "-0" : t;
        }
        function Ct(e, t, n) {
          var r = -1, i = Mn, a = e.length, f = !0, o = [], c = o;
          if (n)
            f = !1, i = ni;
          else if (a >= Q) {
            var p = t ? null : kl(e);
            if (p)
              return Yn(p);
            f = !1, i = hn, c = new Gt();
          } else
            c = t ? [] : o;
          e:
            for (; ++r < a; ) {
              var d = e[r], v = t ? t(d) : d;
              if (d = n || d !== 0 ? d : 0, f && v === v) {
                for (var A = c.length; A--; )
                  if (c[A] === v)
                    continue e;
                t && c.push(v), o.push(d);
              } else i(c, v, n) || (c !== o && c.push(v), o.push(d));
            }
          return o;
        }
        function Li(e, t) {
          return t = Lt(t, e), e = na(e, t), e == null || delete e[st(He(t))];
        }
        function ys(e, t, n, r) {
          return In(e, t, n(Mt(e, t)), r);
        }
        function ar(e, t, n, r) {
          for (var i = e.length, a = r ? i : -1; (r ? a-- : ++a < i) && t(e[a], a, e); )
            ;
          return n ? $e(e, r ? 0 : a, r ? a + 1 : i) : $e(e, r ? a + 1 : 0, r ? i : a);
        }
        function xs(e, t) {
          var n = e;
          return n instanceof W && (n = n.value()), ri(t, function(r, i) {
            return i.func.apply(i.thisArg, mt([r], i.args));
          }, n);
        }
        function yi(e, t, n) {
          var r = e.length;
          if (r < 2)
            return r ? Ct(e[0]) : [];
          for (var i = -1, a = h(r); ++i < r; )
            for (var f = e[i], o = -1; ++o < r; )
              o != i && (a[i] = An(a[i] || f, e[o], t, n));
          return Ct(_e(a, 1), t, n);
        }
        function Ds(e, t, n) {
          for (var r = -1, i = e.length, a = t.length, f = {}; ++r < i; ) {
            var o = r < a ? t[r] : s;
            n(f, e[r], o);
          }
          return f;
        }
        function xi(e) {
          return re(e) ? e : [];
        }
        function Di(e) {
          return typeof e == "function" ? e : Se;
        }
        function Lt(e, t) {
          return L(e) ? e : Bi(e, t) ? [e] : sa(B(e));
        }
        var $l = R;
        function yt(e, t, n) {
          var r = e.length;
          return n = n === s ? r : n, !t && n >= r ? e : $e(e, t, n);
        }
        var Rs = yo || function(e) {
          return ge.clearTimeout(e);
        };
        function Fs(e, t) {
          if (t)
            return e.slice();
          var n = e.length, r = es ? es(n) : new e.constructor(n);
          return e.copy(r), r;
        }
        function Ri(e) {
          var t = new e.constructor(e.byteLength);
          return new Jn(t).set(new Jn(e)), t;
        }
        function Hl(e, t) {
          var n = t ? Ri(e.buffer) : e.buffer;
          return new e.constructor(n, e.byteOffset, e.byteLength);
        }
        function Kl(e) {
          var t = new e.constructor(e.source, du.exec(e));
          return t.lastIndex = e.lastIndex, t;
        }
        function ql(e) {
          return vn ? K(vn.call(e)) : {};
        }
        function Us(e, t) {
          var n = t ? Ri(e.buffer) : e.buffer;
          return new e.constructor(n, e.byteOffset, e.length);
        }
        function Ws(e, t) {
          if (e !== t) {
            var n = e !== s, r = e === null, i = e === e, a = xe(e), f = t !== s, o = t === null, c = t === t, p = xe(t);
            if (!o && !p && !a && e > t || a && f && c && !o && !p || r && f && c || !n && c || !i)
              return 1;
            if (!r && !a && !p && e < t || p && n && i && !r && !a || o && n && i || !f && i || !c)
              return -1;
          }
          return 0;
        }
        function Xl(e, t, n) {
          for (var r = -1, i = e.criteria, a = t.criteria, f = i.length, o = n.length; ++r < f; ) {
            var c = Ws(i[r], a[r]);
            if (c) {
              if (r >= o)
                return c;
              var p = n[r];
              return c * (p == "desc" ? -1 : 1);
            }
          }
          return e.index - t.index;
        }
        function bs(e, t, n, r) {
          for (var i = -1, a = e.length, f = n.length, o = -1, c = t.length, p = oe(a - f, 0), d = h(c + p), v = !r; ++o < c; )
            d[o] = t[o];
          for (; ++i < f; )
            (v || i < a) && (d[n[i]] = e[i]);
          for (; p--; )
            d[o++] = e[i++];
          return d;
        }
        function Gs(e, t, n, r) {
          for (var i = -1, a = e.length, f = -1, o = n.length, c = -1, p = t.length, d = oe(a - o, 0), v = h(d + p), A = !r; ++i < d; )
            v[i] = e[i];
          for (var I = i; ++c < p; )
            v[I + c] = t[c];
          for (; ++f < o; )
            (A || i < a) && (v[I + n[f]] = e[i++]);
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
          for (var a = -1, f = t.length; ++a < f; ) {
            var o = t[a], c = r ? r(n[o], e[o], o, n, e) : s;
            c === s && (c = e[o]), i ? ht(n, o, c) : wn(n, o, c);
          }
          return n;
        }
        function Jl(e, t) {
          return ut(e, Mi(e), t);
        }
        function zl(e, t) {
          return ut(e, Vs(e), t);
        }
        function fr(e, t) {
          return function(n, r) {
            var i = L(n) ? kf : dl, a = t ? t() : {};
            return i(n, e, m(r, 2), a);
          };
        }
        function en(e) {
          return R(function(t, n) {
            var r = -1, i = n.length, a = i > 1 ? n[i - 1] : s, f = i > 2 ? n[2] : s;
            for (a = e.length > 3 && typeof a == "function" ? (i--, a) : s, f && Te(n[0], n[1], f) && (a = i < 3 ? s : a, i = 1), t = K(t); ++r < i; ) {
              var o = n[r];
              o && e(t, o, r, a);
            }
            return t;
          });
        }
        function Ps(e, t) {
          return function(n, r) {
            if (n == null)
              return n;
            if (!me(n))
              return e(n, r);
            for (var i = n.length, a = t ? i : -1, f = K(n); (t ? a-- : ++a < i) && r(f[a], a, f) !== !1; )
              ;
            return n;
          };
        }
        function Ms(e) {
          return function(t, n, r) {
            for (var i = -1, a = K(t), f = r(t), o = f.length; o--; ) {
              var c = f[e ? o : ++i];
              if (n(a[c], c, a) === !1)
                break;
            }
            return t;
          };
        }
        function Zl(e, t, n) {
          var r = t & q, i = mn(e);
          function a() {
            var f = this && this !== ge && this instanceof a ? i : e;
            return f.apply(r ? n : this, arguments);
          }
          return a;
        }
        function Bs(e) {
          return function(t) {
            t = B(t);
            var n = Jt(t) ? ke(t) : s, r = n ? n[0] : t.charAt(0), i = n ? yt(n, 1).join("") : t.slice(1);
            return r[e]() + i;
          };
        }
        function tn(e) {
          return function(t) {
            return ri(Pa(Ga(t).replace(Pf, "")), e, "");
          };
        }
        function mn(e) {
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
        function Vl(e, t, n) {
          var r = mn(e);
          function i() {
            for (var a = arguments.length, f = h(a), o = a, c = nn(i); o--; )
              f[o] = arguments[o];
            var p = a < 3 && f[0] !== c && f[a - 1] !== c ? [] : Ot(f, c);
            if (a -= p.length, a < n)
              return qs(
                e,
                t,
                or,
                i.placeholder,
                s,
                f,
                p,
                s,
                s,
                n - a
              );
            var d = this && this !== ge && this instanceof i ? r : e;
            return Ce(d, this, f);
          }
          return i;
        }
        function Ys(e) {
          return function(t, n, r) {
            var i = K(t);
            if (!me(t)) {
              var a = m(n, 3);
              t = ce(t), n = function(o) {
                return a(i[o], o, i);
              };
            }
            var f = e(t, n, r);
            return f > -1 ? i[a ? t[f] : f] : s;
          };
        }
        function $s(e) {
          return _t(function(t) {
            var n = t.length, r = n, i = Be.prototype.thru;
            for (e && t.reverse(); r--; ) {
              var a = t[r];
              if (typeof a != "function")
                throw new Me(P);
              if (i && !f && gr(a) == "wrapper")
                var f = new Be([], !0);
            }
            for (r = f ? r : n; ++r < n; ) {
              a = t[r];
              var o = gr(a), c = o == "wrapper" ? Gi(a) : s;
              c && Yi(c[0]) && c[1] == (Ze | Ne | ze | Rt) && !c[4].length && c[9] == 1 ? f = f[gr(c[0])].apply(f, c[3]) : f = a.length == 1 && Yi(a) ? f[o]() : f.thru(a);
            }
            return function() {
              var p = arguments, d = p[0];
              if (f && p.length == 1 && L(d))
                return f.plant(d).value();
              for (var v = 0, A = n ? t[v].apply(this, p) : d; ++v < n; )
                A = t[v].call(this, A);
              return A;
            };
          });
        }
        function or(e, t, n, r, i, a, f, o, c, p) {
          var d = t & Ze, v = t & q, A = t & le, I = t & (Ne | Tt), O = t & Ht, D = A ? s : mn(e);
          function S() {
            for (var F = arguments.length, b = h(F), De = F; De--; )
              b[De] = arguments[De];
            if (I)
              var Ee = nn(S), Re = ao(b, Ee);
            if (r && (b = bs(b, r, i, I)), a && (b = Gs(b, a, f, I)), F -= Re, I && F < p) {
              var ie = Ot(b, Ee);
              return qs(
                e,
                t,
                or,
                S.placeholder,
                n,
                b,
                ie,
                o,
                c,
                p - F
              );
            }
            var tt = v ? n : this, wt = A ? tt[e] : e;
            return F = b.length, o ? b = dc(b, o) : O && F > 1 && b.reverse(), d && c < F && (b.length = c), this && this !== ge && this instanceof S && (wt = D || mn(wt)), wt.apply(tt, b);
          }
          return S;
        }
        function Hs(e, t) {
          return function(n, r) {
            return Ol(n, e, t(r), {});
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
              typeof n == "string" || typeof r == "string" ? (n = ye(n), r = ye(r)) : (n = Ls(n), r = Ls(r)), i = e(n, r);
            }
            return i;
          };
        }
        function Fi(e) {
          return _t(function(t) {
            return t = k(t, Le(m())), R(function(n) {
              var r = this;
              return e(t, function(i) {
                return Ce(i, r, n);
              });
            });
          });
        }
        function cr(e, t) {
          t = t === s ? " " : ye(t);
          var n = t.length;
          if (n < 2)
            return n ? Ni(t, e) : t;
          var r = Ni(t, Qn(e / zt(t)));
          return Jt(t) ? yt(ke(r), 0, e).join("") : r.slice(0, e);
        }
        function Ql(e, t, n, r) {
          var i = t & q, a = mn(e);
          function f() {
            for (var o = -1, c = arguments.length, p = -1, d = r.length, v = h(d + c), A = this && this !== ge && this instanceof f ? a : e; ++p < d; )
              v[p] = r[p];
            for (; c--; )
              v[p++] = arguments[++o];
            return Ce(A, i ? n : this, v);
          }
          return f;
        }
        function Ks(e) {
          return function(t, n, r) {
            return r && typeof r != "number" && Te(t, n, r) && (n = r = s), t = vt(t), n === s ? (n = t, t = 0) : n = vt(n), r = r === s ? t < n ? 1 : -1 : vt(r), bl(t, n, r, e);
          };
        }
        function hr(e) {
          return function(t, n) {
            return typeof t == "string" && typeof n == "string" || (t = Ke(t), n = Ke(n)), e(t, n);
          };
        }
        function qs(e, t, n, r, i, a, f, o, c, p) {
          var d = t & Ne, v = d ? f : s, A = d ? s : f, I = d ? a : s, O = d ? s : a;
          t |= d ? ze : Et, t &= ~(d ? Et : ze), t & Dt || (t &= -4);
          var D = [
            e,
            t,
            i,
            I,
            v,
            O,
            A,
            o,
            c,
            p
          ], S = n.apply(s, D);
          return Yi(e) && ra(S, D), S.placeholder = r, ia(S, e, t);
        }
        function Ui(e) {
          var t = fe[e];
          return function(n, r) {
            if (n = Ke(n), r = r == null ? 0 : de(x(r), 292), r && is(n)) {
              var i = (B(n) + "e").split("e"), a = t(i[0] + "e" + (+i[1] + r));
              return i = (B(a) + "e").split("e"), +(i[0] + "e" + (+i[1] - r));
            }
            return t(n);
          };
        }
        var kl = Qt && 1 / Yn(new Qt([, -0]))[1] == ft ? function(e) {
          return new Qt(e);
        } : nu;
        function Xs(e) {
          return function(t) {
            var n = ve(t);
            return n == Ve ? li(t) : n == Qe ? _o(t) : so(t, e(t));
          };
        }
        function gt(e, t, n, r, i, a, f, o) {
          var c = t & le;
          if (!c && typeof e != "function")
            throw new Me(P);
          var p = r ? r.length : 0;
          if (p || (t &= -97, r = i = s), f = f === s ? f : oe(x(f), 0), o = o === s ? o : x(o), p -= i ? i.length : 0, t & Et) {
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
            f,
            o
          ];
          if (A && gc(I, A), e = I[0], t = I[1], n = I[2], r = I[3], i = I[4], o = I[9] = I[9] === s ? c ? 0 : e.length : oe(I[9] - p, 0), !o && t & (Ne | Tt) && (t &= -25), !t || t == q)
            var O = Zl(e, t, n);
          else t == Ne || t == Tt ? O = Vl(e, t, o) : (t == ze || t == (q | ze)) && !i.length ? O = Ql(e, t, n, r) : O = or.apply(s, I);
          var D = A ? Ns : ra;
          return ia(D(O, I), e, t);
        }
        function Js(e, t, n, r) {
          return e === s || et(e, Vt[n]) && !$.call(r, n) ? t : e;
        }
        function zs(e, t, n, r, i, a) {
          return te(e) && te(t) && (a.set(t, e), ur(e, t, s, zs, a), a.delete(t)), e;
        }
        function jl(e) {
          return Nn(e) ? s : e;
        }
        function Zs(e, t, n, r, i, a) {
          var f = n & he, o = e.length, c = t.length;
          if (o != c && !(f && c > o))
            return !1;
          var p = a.get(e), d = a.get(t);
          if (p && d)
            return p == t && d == e;
          var v = -1, A = !0, I = n & we ? new Gt() : s;
          for (a.set(e, t), a.set(t, e); ++v < o; ) {
            var O = e[v], D = t[v];
            if (r)
              var S = f ? r(D, O, v, t, e, a) : r(O, D, v, e, t, a);
            if (S !== s) {
              if (S)
                continue;
              A = !1;
              break;
            }
            if (I) {
              if (!ii(t, function(F, b) {
                if (!hn(I, b) && (O === F || i(O, F, n, r, a)))
                  return I.push(b);
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
        function ec(e, t, n, r, i, a, f) {
          switch (n) {
            case Kt:
              if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
                return !1;
              e = e.buffer, t = t.buffer;
            case cn:
              return !(e.byteLength != t.byteLength || !a(new Jn(e), new Jn(t)));
            case H:
            case se:
            case an:
              return et(+e, +t);
            case sn:
              return e.name == t.name && e.message == t.message;
            case fn:
            case on:
              return e == t + "";
            case Ve:
              var o = li;
            case Qe:
              var c = r & he;
              if (o || (o = Yn), e.size != t.size && !c)
                return !1;
              var p = f.get(e);
              if (p)
                return p == t;
              r |= we, f.set(e, t);
              var d = Zs(o(e), o(t), r, i, a, f);
              return f.delete(e), d;
            case Wn:
              if (vn)
                return vn.call(e) == vn.call(t);
          }
          return !1;
        }
        function tc(e, t, n, r, i, a) {
          var f = n & he, o = Wi(e), c = o.length, p = Wi(t), d = p.length;
          if (c != d && !f)
            return !1;
          for (var v = c; v--; ) {
            var A = o[v];
            if (!(f ? A in t : $.call(t, A)))
              return !1;
          }
          var I = a.get(e), O = a.get(t);
          if (I && O)
            return I == t && O == e;
          var D = !0;
          a.set(e, t), a.set(t, e);
          for (var S = f; ++v < c; ) {
            A = o[v];
            var F = e[A], b = t[A];
            if (r)
              var De = f ? r(b, F, A, t, e, a) : r(F, b, A, e, t, a);
            if (!(De === s ? F === b || i(F, b, n, r, a) : De)) {
              D = !1;
              break;
            }
            S || (S = A == "constructor");
          }
          if (D && !S) {
            var Ee = e.constructor, Re = t.constructor;
            Ee != Re && "constructor" in e && "constructor" in t && !(typeof Ee == "function" && Ee instanceof Ee && typeof Re == "function" && Re instanceof Re) && (D = !1);
          }
          return a.delete(e), a.delete(t), D;
        }
        function _t(e) {
          return Hi(ta(e, s, la), e + "");
        }
        function Wi(e) {
          return ps(e, ce, Mi);
        }
        function bi(e) {
          return ps(e, Oe, Vs);
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
          return e = e === eu ? ws : e, arguments.length ? e(arguments[0], arguments[1]) : e;
        }
        function _r(e, t) {
          var n = e.__data__;
          return oc(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
        }
        function Pi(e) {
          for (var t = ce(e), n = t.length; n--; ) {
            var r = t[n], i = e[r];
            t[n] = [r, i, js(i)];
          }
          return t;
        }
        function Bt(e, t) {
          var n = co(e, t);
          return vs(n) ? n : s;
        }
        function nc(e) {
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
          return e == null ? [] : (e = K(e), It(hi(e), function(t) {
            return ns.call(e, t);
          }));
        } : ru, Vs = hi ? function(e) {
          for (var t = []; e; )
            mt(t, Mi(e)), e = zn(e);
          return t;
        } : ru, ve = Ae;
        (gi && ve(new gi(new ArrayBuffer(1))) != Kt || _n && ve(new _n()) != Ve || _i && ve(_i.resolve()) != hu || Qt && ve(new Qt()) != Qe || pn && ve(new pn()) != ln) && (ve = function(e) {
          var t = Ae(e), n = t == ot ? e.constructor : s, r = n ? Yt(n) : "";
          if (r)
            switch (r) {
              case Po:
                return Kt;
              case Mo:
                return Ve;
              case Bo:
                return hu;
              case Yo:
                return Qe;
              case $o:
                return ln;
            }
          return t;
        });
        function rc(e, t, n) {
          for (var r = -1, i = n.length; ++r < i; ) {
            var a = n[r], f = a.size;
            switch (a.type) {
              case "drop":
                e += f;
                break;
              case "dropRight":
                t -= f;
                break;
              case "take":
                t = de(t, e + f);
                break;
              case "takeRight":
                e = oe(e, t - f);
                break;
            }
          }
          return { start: e, end: t };
        }
        function ic(e) {
          var t = e.match(of);
          return t ? t[1].split(lf) : [];
        }
        function Qs(e, t, n) {
          t = Lt(t, e);
          for (var r = -1, i = t.length, a = !1; ++r < i; ) {
            var f = st(t[r]);
            if (!(a = e != null && n(e, f)))
              break;
            e = e[f];
          }
          return a || ++r != i ? a : (i = e == null ? 0 : e.length, !!i && Er(i) && pt(f, i) && (L(e) || $t(e)));
        }
        function uc(e) {
          var t = e.length, n = new e.constructor(t);
          return t && typeof e[0] == "string" && $.call(e, "index") && (n.index = e.index, n.input = e.input), n;
        }
        function ks(e) {
          return typeof e.constructor == "function" && !On(e) ? jt(zn(e)) : {};
        }
        function sc(e, t, n) {
          var r = e.constructor;
          switch (t) {
            case cn:
              return Ri(e);
            case H:
            case se:
              return new r(+e);
            case Kt:
              return Hl(e, n);
            case Pr:
            case Mr:
            case Br:
            case Yr:
            case $r:
            case Hr:
            case Kr:
            case qr:
            case Xr:
              return Us(e, n);
            case Ve:
              return new r();
            case an:
            case on:
              return new r(e);
            case fn:
              return Kl(e);
            case Qe:
              return new r();
            case Wn:
              return ql(e);
          }
        }
        function ac(e, t) {
          var n = t.length;
          if (!n)
            return e;
          var r = n - 1;
          return t[r] = (n > 1 ? "& " : "") + t[r], t = t.join(n > 2 ? ", " : " "), e.replace(ff, `{
/* [wrapped with ` + t + `] */
`);
        }
        function fc(e) {
          return L(e) || $t(e) || !!(rs && e && e[rs]);
        }
        function pt(e, t) {
          var n = typeof e;
          return t = t ?? We, !!t && (n == "number" || n != "symbol" && Af.test(e)) && e > -1 && e % 1 == 0 && e < t;
        }
        function Te(e, t, n) {
          if (!te(n))
            return !1;
          var r = typeof t;
          return (r == "number" ? me(n) && pt(t, n.length) : r == "string" && t in n) ? et(n[t], e) : !1;
        }
        function Bi(e, t) {
          if (L(e))
            return !1;
          var n = typeof e;
          return n == "number" || n == "symbol" || n == "boolean" || e == null || xe(e) ? !0 : rf.test(e) || !nf.test(e) || t != null && e in K(t);
        }
        function oc(e) {
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
        function lc(e) {
          return !!ju && ju in e;
        }
        var cc = Hn ? dt : iu;
        function On(e) {
          var t = e && e.constructor, n = typeof t == "function" && t.prototype || Vt;
          return e === n;
        }
        function js(e) {
          return e === e && !te(e);
        }
        function ea(e, t) {
          return function(n) {
            return n == null ? !1 : n[e] === t && (t !== s || e in K(n));
          };
        }
        function hc(e) {
          var t = Ar(e, function(r) {
            return n.size === at && n.clear(), r;
          }), n = t.cache;
          return t;
        }
        function gc(e, t) {
          var n = e[1], r = t[1], i = n | r, a = i < (q | le | Ze), f = r == Ze && n == Ne || r == Ze && n == Rt && e[7].length <= t[8] || r == (Ze | Rt) && t[7].length <= t[8] && n == Ne;
          if (!(a || f))
            return e;
          r & q && (e[2] = t[2], i |= n & q ? 0 : Dt);
          var o = t[3];
          if (o) {
            var c = e[3];
            e[3] = c ? bs(c, o, t[4]) : o, e[4] = c ? Ot(e[3], ae) : t[4];
          }
          return o = t[5], o && (c = e[5], e[5] = c ? Gs(c, o, t[6]) : o, e[6] = c ? Ot(e[5], ae) : t[6]), o = t[7], o && (e[7] = o), r & Ze && (e[8] = e[8] == null ? t[8] : de(e[8], t[8])), e[9] == null && (e[9] = t[9]), e[0] = t[0], e[1] = i, e;
        }
        function _c(e) {
          var t = [];
          if (e != null)
            for (var n in K(e))
              t.push(n);
          return t;
        }
        function pc(e) {
          return qn.call(e);
        }
        function ta(e, t, n) {
          return t = oe(t === s ? e.length - 1 : t, 0), function() {
            for (var r = arguments, i = -1, a = oe(r.length - t, 0), f = h(a); ++i < a; )
              f[i] = r[t + i];
            i = -1;
            for (var o = h(t + 1); ++i < t; )
              o[i] = r[i];
            return o[t] = n(f), Ce(e, this, o);
          };
        }
        function na(e, t) {
          return t.length < 2 ? e : Mt(e, $e(t, 0, -1));
        }
        function dc(e, t) {
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
        var ra = ua(Ns), Sn = Do || function(e, t) {
          return ge.setTimeout(e, t);
        }, Hi = ua(Ml);
        function ia(e, t, n) {
          var r = t + "";
          return Hi(e, ac(r, vc(ic(r), n)));
        }
        function ua(e) {
          var t = 0, n = 0;
          return function() {
            var r = Wo(), i = Fr - (r - n);
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
            var a = Si(n, i), f = e[a];
            e[a] = e[n], e[n] = f;
          }
          return e.length = t, e;
        }
        var sa = hc(function(e) {
          var t = [];
          return e.charCodeAt(0) === 46 && t.push(""), e.replace(uf, function(n, r, i, a) {
            t.push(i ? a.replace(gf, "$1") : r || n);
          }), t;
        });
        function st(e) {
          if (typeof e == "string" || xe(e))
            return e;
          var t = e + "";
          return t == "0" && 1 / e == -ft ? "-0" : t;
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
        function vc(e, t) {
          return Pe(Fn, function(n) {
            var r = "_." + n[0];
            t & n[1] && !Mn(e, r) && e.push(r);
          }), e.sort();
        }
        function aa(e) {
          if (e instanceof W)
            return e.clone();
          var t = new Be(e.__wrapped__, e.__chain__);
          return t.__actions__ = Ie(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t;
        }
        function wc(e, t, n) {
          (n ? Te(e, t, n) : t === s) ? t = 1 : t = oe(x(t), 0);
          var r = e == null ? 0 : e.length;
          if (!r || t < 1)
            return [];
          for (var i = 0, a = 0, f = h(Qn(r / t)); i < r; )
            f[a++] = $e(e, i, i += t);
          return f;
        }
        function Ac(e) {
          for (var t = -1, n = e == null ? 0 : e.length, r = 0, i = []; ++t < n; ) {
            var a = e[t];
            a && (i[r++] = a);
          }
          return i;
        }
        function Tc() {
          var e = arguments.length;
          if (!e)
            return [];
          for (var t = h(e - 1), n = arguments[0], r = e; r--; )
            t[r - 1] = arguments[r];
          return mt(L(n) ? Ie(n) : [n], _e(t, 1));
        }
        var Ec = R(function(e, t) {
          return re(e) ? An(e, _e(t, 1, re, !0)) : [];
        }), Ic = R(function(e, t) {
          var n = He(t);
          return re(n) && (n = s), re(e) ? An(e, _e(t, 1, re, !0), m(n, 2)) : [];
        }), mc = R(function(e, t) {
          var n = He(t);
          return re(n) && (n = s), re(e) ? An(e, _e(t, 1, re, !0), s, n) : [];
        });
        function Oc(e, t, n) {
          var r = e == null ? 0 : e.length;
          return r ? (t = n || t === s ? 1 : x(t), $e(e, t < 0 ? 0 : t, r)) : [];
        }
        function Sc(e, t, n) {
          var r = e == null ? 0 : e.length;
          return r ? (t = n || t === s ? 1 : x(t), t = r - t, $e(e, 0, t < 0 ? 0 : t)) : [];
        }
        function Nc(e, t) {
          return e && e.length ? ar(e, m(t, 3), !0, !0) : [];
        }
        function Cc(e, t) {
          return e && e.length ? ar(e, m(t, 3), !0) : [];
        }
        function Lc(e, t, n, r) {
          var i = e == null ? 0 : e.length;
          return i ? (n && typeof n != "number" && Te(e, t, n) && (n = 0, r = i), Tl(e, t, n, r)) : [];
        }
        function fa(e, t, n) {
          var r = e == null ? 0 : e.length;
          if (!r)
            return -1;
          var i = n == null ? 0 : x(n);
          return i < 0 && (i = oe(r + i, 0)), Bn(e, m(t, 3), i);
        }
        function oa(e, t, n) {
          var r = e == null ? 0 : e.length;
          if (!r)
            return -1;
          var i = r - 1;
          return n !== s && (i = x(n), i = n < 0 ? oe(r + i, 0) : de(i, r - 1)), Bn(e, m(t, 3), i, !0);
        }
        function la(e) {
          var t = e == null ? 0 : e.length;
          return t ? _e(e, 1) : [];
        }
        function yc(e) {
          var t = e == null ? 0 : e.length;
          return t ? _e(e, ft) : [];
        }
        function xc(e, t) {
          var n = e == null ? 0 : e.length;
          return n ? (t = t === s ? 1 : x(t), _e(e, t)) : [];
        }
        function Dc(e) {
          for (var t = -1, n = e == null ? 0 : e.length, r = {}; ++t < n; ) {
            var i = e[t];
            r[i[0]] = i[1];
          }
          return r;
        }
        function ca(e) {
          return e && e.length ? e[0] : s;
        }
        function Rc(e, t, n) {
          var r = e == null ? 0 : e.length;
          if (!r)
            return -1;
          var i = n == null ? 0 : x(n);
          return i < 0 && (i = oe(r + i, 0)), Xt(e, t, i);
        }
        function Fc(e) {
          var t = e == null ? 0 : e.length;
          return t ? $e(e, 0, -1) : [];
        }
        var Uc = R(function(e) {
          var t = k(e, xi);
          return t.length && t[0] === e[0] ? Ti(t) : [];
        }), Wc = R(function(e) {
          var t = He(e), n = k(e, xi);
          return t === He(n) ? t = s : n.pop(), n.length && n[0] === e[0] ? Ti(n, m(t, 2)) : [];
        }), bc = R(function(e) {
          var t = He(e), n = k(e, xi);
          return t = typeof t == "function" ? t : s, t && n.pop(), n.length && n[0] === e[0] ? Ti(n, s, t) : [];
        });
        function Gc(e, t) {
          return e == null ? "" : Fo.call(e, t);
        }
        function He(e) {
          var t = e == null ? 0 : e.length;
          return t ? e[t - 1] : s;
        }
        function Pc(e, t, n) {
          var r = e == null ? 0 : e.length;
          if (!r)
            return -1;
          var i = r;
          return n !== s && (i = x(n), i = i < 0 ? oe(r + i, 0) : de(i, r - 1)), t === t ? vo(e, t, i) : Bn(e, qu, i, !0);
        }
        function Mc(e, t) {
          return e && e.length ? Is(e, x(t)) : s;
        }
        var Bc = R(ha);
        function ha(e, t) {
          return e && e.length && t && t.length ? Oi(e, t) : e;
        }
        function Yc(e, t, n) {
          return e && e.length && t && t.length ? Oi(e, t, m(n, 2)) : e;
        }
        function $c(e, t, n) {
          return e && e.length && t && t.length ? Oi(e, t, s, n) : e;
        }
        var Hc = _t(function(e, t) {
          var n = e == null ? 0 : e.length, r = di(e, t);
          return Ss(e, k(t, function(i) {
            return pt(i, n) ? +i : i;
          }).sort(Ws)), r;
        });
        function Kc(e, t) {
          var n = [];
          if (!(e && e.length))
            return n;
          var r = -1, i = [], a = e.length;
          for (t = m(t, 3); ++r < a; ) {
            var f = e[r];
            t(f, r, e) && (n.push(f), i.push(r));
          }
          return Ss(e, i), n;
        }
        function Ki(e) {
          return e == null ? e : Go.call(e);
        }
        function qc(e, t, n) {
          var r = e == null ? 0 : e.length;
          return r ? (n && typeof n != "number" && Te(e, t, n) ? (t = 0, n = r) : (t = t == null ? 0 : x(t), n = n === s ? r : x(n)), $e(e, t, n)) : [];
        }
        function Xc(e, t) {
          return sr(e, t);
        }
        function Jc(e, t, n) {
          return Ci(e, t, m(n, 2));
        }
        function zc(e, t) {
          var n = e == null ? 0 : e.length;
          if (n) {
            var r = sr(e, t);
            if (r < n && et(e[r], t))
              return r;
          }
          return -1;
        }
        function Zc(e, t) {
          return sr(e, t, !0);
        }
        function Vc(e, t, n) {
          return Ci(e, t, m(n, 2), !0);
        }
        function Qc(e, t) {
          var n = e == null ? 0 : e.length;
          if (n) {
            var r = sr(e, t, !0) - 1;
            if (et(e[r], t))
              return r;
          }
          return -1;
        }
        function kc(e) {
          return e && e.length ? Cs(e) : [];
        }
        function jc(e, t) {
          return e && e.length ? Cs(e, m(t, 2)) : [];
        }
        function eh(e) {
          var t = e == null ? 0 : e.length;
          return t ? $e(e, 1, t) : [];
        }
        function th(e, t, n) {
          return e && e.length ? (t = n || t === s ? 1 : x(t), $e(e, 0, t < 0 ? 0 : t)) : [];
        }
        function nh(e, t, n) {
          var r = e == null ? 0 : e.length;
          return r ? (t = n || t === s ? 1 : x(t), t = r - t, $e(e, t < 0 ? 0 : t, r)) : [];
        }
        function rh(e, t) {
          return e && e.length ? ar(e, m(t, 3), !1, !0) : [];
        }
        function ih(e, t) {
          return e && e.length ? ar(e, m(t, 3)) : [];
        }
        var uh = R(function(e) {
          return Ct(_e(e, 1, re, !0));
        }), sh = R(function(e) {
          var t = He(e);
          return re(t) && (t = s), Ct(_e(e, 1, re, !0), m(t, 2));
        }), ah = R(function(e) {
          var t = He(e);
          return t = typeof t == "function" ? t : s, Ct(_e(e, 1, re, !0), s, t);
        });
        function fh(e) {
          return e && e.length ? Ct(e) : [];
        }
        function oh(e, t) {
          return e && e.length ? Ct(e, m(t, 2)) : [];
        }
        function lh(e, t) {
          return t = typeof t == "function" ? t : s, e && e.length ? Ct(e, s, t) : [];
        }
        function qi(e) {
          if (!(e && e.length))
            return [];
          var t = 0;
          return e = It(e, function(n) {
            if (re(n))
              return t = oe(n.length, t), !0;
          }), fi(t, function(n) {
            return k(e, ui(n));
          });
        }
        function ga(e, t) {
          if (!(e && e.length))
            return [];
          var n = qi(e);
          return t == null ? n : k(n, function(r) {
            return Ce(t, s, r);
          });
        }
        var ch = R(function(e, t) {
          return re(e) ? An(e, t) : [];
        }), hh = R(function(e) {
          return yi(It(e, re));
        }), gh = R(function(e) {
          var t = He(e);
          return re(t) && (t = s), yi(It(e, re), m(t, 2));
        }), _h = R(function(e) {
          var t = He(e);
          return t = typeof t == "function" ? t : s, yi(It(e, re), s, t);
        }), ph = R(qi);
        function dh(e, t) {
          return Ds(e || [], t || [], wn);
        }
        function vh(e, t) {
          return Ds(e || [], t || [], In);
        }
        var wh = R(function(e) {
          var t = e.length, n = t > 1 ? e[t - 1] : s;
          return n = typeof n == "function" ? (e.pop(), n) : s, ga(e, n);
        });
        function _a(e) {
          var t = u(e);
          return t.__chain__ = !0, t;
        }
        function Ah(e, t) {
          return t(e), e;
        }
        function dr(e, t) {
          return t(e);
        }
        var Th = _t(function(e) {
          var t = e.length, n = t ? e[0] : 0, r = this.__wrapped__, i = function(a) {
            return di(a, e);
          };
          return t > 1 || this.__actions__.length || !(r instanceof W) || !pt(n) ? this.thru(i) : (r = r.slice(n, +n + (t ? 1 : 0)), r.__actions__.push({
            func: dr,
            args: [i],
            thisArg: s
          }), new Be(r, this.__chain__).thru(function(a) {
            return t && !a.length && a.push(s), a;
          }));
        });
        function Eh() {
          return _a(this);
        }
        function Ih() {
          return new Be(this.value(), this.__chain__);
        }
        function mh() {
          this.__values__ === s && (this.__values__ = La(this.value()));
          var e = this.__index__ >= this.__values__.length, t = e ? s : this.__values__[this.__index__++];
          return { done: e, value: t };
        }
        function Oh() {
          return this;
        }
        function Sh(e) {
          for (var t, n = this; n instanceof tr; ) {
            var r = aa(n);
            r.__index__ = 0, r.__values__ = s, t ? i.__wrapped__ = r : t = r;
            var i = r;
            n = n.__wrapped__;
          }
          return i.__wrapped__ = e, t;
        }
        function Nh() {
          var e = this.__wrapped__;
          if (e instanceof W) {
            var t = e;
            return this.__actions__.length && (t = new W(this)), t = t.reverse(), t.__actions__.push({
              func: dr,
              args: [Ki],
              thisArg: s
            }), new Be(t, this.__chain__);
          }
          return this.thru(Ki);
        }
        function Ch() {
          return xs(this.__wrapped__, this.__actions__);
        }
        var Lh = fr(function(e, t, n) {
          $.call(e, n) ? ++e[n] : ht(e, n, 1);
        });
        function yh(e, t, n) {
          var r = L(e) ? Hu : Al;
          return n && Te(e, t, n) && (t = s), r(e, m(t, 3));
        }
        function xh(e, t) {
          var n = L(e) ? It : gs;
          return n(e, m(t, 3));
        }
        var Dh = Ys(fa), Rh = Ys(oa);
        function Fh(e, t) {
          return _e(vr(e, t), 1);
        }
        function Uh(e, t) {
          return _e(vr(e, t), ft);
        }
        function Wh(e, t, n) {
          return n = n === s ? 1 : x(n), _e(vr(e, t), n);
        }
        function pa(e, t) {
          var n = L(e) ? Pe : Nt;
          return n(e, m(t, 3));
        }
        function da(e, t) {
          var n = L(e) ? jf : hs;
          return n(e, m(t, 3));
        }
        var bh = fr(function(e, t, n) {
          $.call(e, n) ? e[n].push(t) : ht(e, n, [t]);
        });
        function Gh(e, t, n, r) {
          e = me(e) ? e : un(e), n = n && !r ? x(n) : 0;
          var i = e.length;
          return n < 0 && (n = oe(i + n, 0)), Ir(e) ? n <= i && e.indexOf(t, n) > -1 : !!i && Xt(e, t, n) > -1;
        }
        var Ph = R(function(e, t, n) {
          var r = -1, i = typeof t == "function", a = me(e) ? h(e.length) : [];
          return Nt(e, function(f) {
            a[++r] = i ? Ce(t, f, n) : Tn(f, t, n);
          }), a;
        }), Mh = fr(function(e, t, n) {
          ht(e, n, t);
        });
        function vr(e, t) {
          var n = L(e) ? k : As;
          return n(e, m(t, 3));
        }
        function Bh(e, t, n, r) {
          return e == null ? [] : (L(t) || (t = t == null ? [] : [t]), n = r ? s : n, L(n) || (n = n == null ? [] : [n]), ms(e, t, n));
        }
        var Yh = fr(function(e, t, n) {
          e[n ? 0 : 1].push(t);
        }, function() {
          return [[], []];
        });
        function $h(e, t, n) {
          var r = L(e) ? ri : Ju, i = arguments.length < 3;
          return r(e, m(t, 4), n, i, Nt);
        }
        function Hh(e, t, n) {
          var r = L(e) ? eo : Ju, i = arguments.length < 3;
          return r(e, m(t, 4), n, i, hs);
        }
        function Kh(e, t) {
          var n = L(e) ? It : gs;
          return n(e, Tr(m(t, 3)));
        }
        function qh(e) {
          var t = L(e) ? fs : Gl;
          return t(e);
        }
        function Xh(e, t, n) {
          (n ? Te(e, t, n) : t === s) ? t = 1 : t = x(t);
          var r = L(e) ? _l : Pl;
          return r(e, t);
        }
        function Jh(e) {
          var t = L(e) ? pl : Bl;
          return t(e);
        }
        function zh(e) {
          if (e == null)
            return 0;
          if (me(e))
            return Ir(e) ? zt(e) : e.length;
          var t = ve(e);
          return t == Ve || t == Qe ? e.size : Ii(e).length;
        }
        function Zh(e, t, n) {
          var r = L(e) ? ii : Yl;
          return n && Te(e, t, n) && (t = s), r(e, m(t, 3));
        }
        var Vh = R(function(e, t) {
          if (e == null)
            return [];
          var n = t.length;
          return n > 1 && Te(e, t[0], t[1]) ? t = [] : n > 2 && Te(t[0], t[1], t[2]) && (t = [t[0]]), ms(e, _e(t, 1), []);
        }), wr = xo || function() {
          return ge.Date.now();
        };
        function Qh(e, t) {
          if (typeof t != "function")
            throw new Me(P);
          return e = x(e), function() {
            if (--e < 1)
              return t.apply(this, arguments);
          };
        }
        function va(e, t, n) {
          return t = n ? s : t, t = e && t == null ? e.length : t, gt(e, Ze, s, s, s, s, t);
        }
        function wa(e, t) {
          var n;
          if (typeof t != "function")
            throw new Me(P);
          return e = x(e), function() {
            return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = s), n;
          };
        }
        var Xi = R(function(e, t, n) {
          var r = q;
          if (n.length) {
            var i = Ot(n, nn(Xi));
            r |= ze;
          }
          return gt(e, r, t, n, i);
        }), Aa = R(function(e, t, n) {
          var r = q | le;
          if (n.length) {
            var i = Ot(n, nn(Aa));
            r |= ze;
          }
          return gt(t, r, e, n, i);
        });
        function Ta(e, t, n) {
          t = n ? s : t;
          var r = gt(e, Ne, s, s, s, s, s, t);
          return r.placeholder = Ta.placeholder, r;
        }
        function Ea(e, t, n) {
          t = n ? s : t;
          var r = gt(e, Tt, s, s, s, s, s, t);
          return r.placeholder = Ea.placeholder, r;
        }
        function Ia(e, t, n) {
          var r, i, a, f, o, c, p = 0, d = !1, v = !1, A = !0;
          if (typeof e != "function")
            throw new Me(P);
          t = Ke(t) || 0, te(n) && (d = !!n.leading, v = "maxWait" in n, a = v ? oe(Ke(n.maxWait) || 0, t) : a, A = "trailing" in n ? !!n.trailing : A);
          function I(ie) {
            var tt = r, wt = i;
            return r = i = s, p = ie, f = e.apply(wt, tt), f;
          }
          function O(ie) {
            return p = ie, o = Sn(F, t), d ? I(ie) : f;
          }
          function D(ie) {
            var tt = ie - c, wt = ie - p, Ya = t - tt;
            return v ? de(Ya, a - wt) : Ya;
          }
          function S(ie) {
            var tt = ie - c, wt = ie - p;
            return c === s || tt >= t || tt < 0 || v && wt >= a;
          }
          function F() {
            var ie = wr();
            if (S(ie))
              return b(ie);
            o = Sn(F, D(ie));
          }
          function b(ie) {
            return o = s, A && r ? I(ie) : (r = i = s, f);
          }
          function De() {
            o !== s && Rs(o), p = 0, r = c = i = o = s;
          }
          function Ee() {
            return o === s ? f : b(wr());
          }
          function Re() {
            var ie = wr(), tt = S(ie);
            if (r = arguments, i = this, c = ie, tt) {
              if (o === s)
                return O(c);
              if (v)
                return Rs(o), o = Sn(F, t), I(c);
            }
            return o === s && (o = Sn(F, t)), f;
          }
          return Re.cancel = De, Re.flush = Ee, Re;
        }
        var kh = R(function(e, t) {
          return cs(e, 1, t);
        }), jh = R(function(e, t, n) {
          return cs(e, Ke(t) || 0, n);
        });
        function eg(e) {
          return gt(e, Ht);
        }
        function Ar(e, t) {
          if (typeof e != "function" || t != null && typeof t != "function")
            throw new Me(P);
          var n = function() {
            var r = arguments, i = t ? t.apply(this, r) : r[0], a = n.cache;
            if (a.has(i))
              return a.get(i);
            var f = e.apply(this, r);
            return n.cache = a.set(i, f) || a, f;
          };
          return n.cache = new (Ar.Cache || ct)(), n;
        }
        Ar.Cache = ct;
        function Tr(e) {
          if (typeof e != "function")
            throw new Me(P);
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
        function tg(e) {
          return wa(2, e);
        }
        var ng = $l(function(e, t) {
          t = t.length == 1 && L(t[0]) ? k(t[0], Le(m())) : k(_e(t, 1), Le(m()));
          var n = t.length;
          return R(function(r) {
            for (var i = -1, a = de(r.length, n); ++i < a; )
              r[i] = t[i].call(this, r[i]);
            return Ce(e, this, r);
          });
        }), Ji = R(function(e, t) {
          var n = Ot(t, nn(Ji));
          return gt(e, ze, s, t, n);
        }), ma = R(function(e, t) {
          var n = Ot(t, nn(ma));
          return gt(e, Et, s, t, n);
        }), rg = _t(function(e, t) {
          return gt(e, Rt, s, s, s, t);
        });
        function ig(e, t) {
          if (typeof e != "function")
            throw new Me(P);
          return t = t === s ? t : x(t), R(e, t);
        }
        function ug(e, t) {
          if (typeof e != "function")
            throw new Me(P);
          return t = t == null ? 0 : oe(x(t), 0), R(function(n) {
            var r = n[t], i = yt(n, 0, t);
            return r && mt(i, r), Ce(e, this, i);
          });
        }
        function sg(e, t, n) {
          var r = !0, i = !0;
          if (typeof e != "function")
            throw new Me(P);
          return te(n) && (r = "leading" in n ? !!n.leading : r, i = "trailing" in n ? !!n.trailing : i), Ia(e, t, {
            leading: r,
            maxWait: t,
            trailing: i
          });
        }
        function ag(e) {
          return va(e, 1);
        }
        function fg(e, t) {
          return Ji(Di(t), e);
        }
        function og() {
          if (!arguments.length)
            return [];
          var e = arguments[0];
          return L(e) ? e : [e];
        }
        function lg(e) {
          return Ye(e, ee);
        }
        function cg(e, t) {
          return t = typeof t == "function" ? t : s, Ye(e, ee, t);
        }
        function hg(e) {
          return Ye(e, U | ee);
        }
        function gg(e, t) {
          return t = typeof t == "function" ? t : s, Ye(e, U | ee, t);
        }
        function _g(e, t) {
          return t == null || ls(e, t, ce(t));
        }
        function et(e, t) {
          return e === t || e !== e && t !== t;
        }
        var pg = hr(Ai), dg = hr(function(e, t) {
          return e >= t;
        }), $t = ds(/* @__PURE__ */ (function() {
          return arguments;
        })()) ? ds : function(e) {
          return ne(e) && $.call(e, "callee") && !ns.call(e, "callee");
        }, L = h.isArray, vg = Gu ? Le(Gu) : Sl;
        function me(e) {
          return e != null && Er(e.length) && !dt(e);
        }
        function re(e) {
          return ne(e) && me(e);
        }
        function wg(e) {
          return e === !0 || e === !1 || ne(e) && Ae(e) == H;
        }
        var xt = Ro || iu, Ag = Pu ? Le(Pu) : Nl;
        function Tg(e) {
          return ne(e) && e.nodeType === 1 && !Nn(e);
        }
        function Eg(e) {
          if (e == null)
            return !0;
          if (me(e) && (L(e) || typeof e == "string" || typeof e.splice == "function" || xt(e) || rn(e) || $t(e)))
            return !e.length;
          var t = ve(e);
          if (t == Ve || t == Qe)
            return !e.size;
          if (On(e))
            return !Ii(e).length;
          for (var n in e)
            if ($.call(e, n))
              return !1;
          return !0;
        }
        function Ig(e, t) {
          return En(e, t);
        }
        function mg(e, t, n) {
          n = typeof n == "function" ? n : s;
          var r = n ? n(e, t) : s;
          return r === s ? En(e, t, s, n) : !!r;
        }
        function zi(e) {
          if (!ne(e))
            return !1;
          var t = Ae(e);
          return t == sn || t == Gr || typeof e.message == "string" && typeof e.name == "string" && !Nn(e);
        }
        function Og(e) {
          return typeof e == "number" && is(e);
        }
        function dt(e) {
          if (!te(e))
            return !1;
          var t = Ae(e);
          return t == Un || t == cu || t == y || t == Xa;
        }
        function Oa(e) {
          return typeof e == "number" && e == x(e);
        }
        function Er(e) {
          return typeof e == "number" && e > -1 && e % 1 == 0 && e <= We;
        }
        function te(e) {
          var t = typeof e;
          return e != null && (t == "object" || t == "function");
        }
        function ne(e) {
          return e != null && typeof e == "object";
        }
        var Sa = Mu ? Le(Mu) : Ll;
        function Sg(e, t) {
          return e === t || Ei(e, t, Pi(t));
        }
        function Ng(e, t, n) {
          return n = typeof n == "function" ? n : s, Ei(e, t, Pi(t), n);
        }
        function Cg(e) {
          return Na(e) && e != +e;
        }
        function Lg(e) {
          if (cc(e))
            throw new N(z);
          return vs(e);
        }
        function yg(e) {
          return e === null;
        }
        function xg(e) {
          return e == null;
        }
        function Na(e) {
          return typeof e == "number" || ne(e) && Ae(e) == an;
        }
        function Nn(e) {
          if (!ne(e) || Ae(e) != ot)
            return !1;
          var t = zn(e);
          if (t === null)
            return !0;
          var n = $.call(t, "constructor") && t.constructor;
          return typeof n == "function" && n instanceof n && Kn.call(n) == No;
        }
        var Zi = Bu ? Le(Bu) : yl;
        function Dg(e) {
          return Oa(e) && e >= -We && e <= We;
        }
        var Ca = Yu ? Le(Yu) : xl;
        function Ir(e) {
          return typeof e == "string" || !L(e) && ne(e) && Ae(e) == on;
        }
        function xe(e) {
          return typeof e == "symbol" || ne(e) && Ae(e) == Wn;
        }
        var rn = $u ? Le($u) : Dl;
        function Rg(e) {
          return e === s;
        }
        function Fg(e) {
          return ne(e) && ve(e) == ln;
        }
        function Ug(e) {
          return ne(e) && Ae(e) == za;
        }
        var Wg = hr(mi), bg = hr(function(e, t) {
          return e <= t;
        });
        function La(e) {
          if (!e)
            return [];
          if (me(e))
            return Ir(e) ? ke(e) : Ie(e);
          if (gn && e[gn])
            return go(e[gn]());
          var t = ve(e), n = t == Ve ? li : t == Qe ? Yn : un;
          return n(e);
        }
        function vt(e) {
          if (!e)
            return e === 0 ? e : 0;
          if (e = Ke(e), e === ft || e === -ft) {
            var t = e < 0 ? -1 : 1;
            return t * Rn;
          }
          return e === e ? e : 0;
        }
        function x(e) {
          var t = vt(e), n = t % 1;
          return t === t ? n ? t - n : t : 0;
        }
        function ya(e) {
          return e ? Pt(x(e), 0, be) : 0;
        }
        function Ke(e) {
          if (typeof e == "number")
            return e;
          if (xe(e))
            return Ft;
          if (te(e)) {
            var t = typeof e.valueOf == "function" ? e.valueOf() : e;
            e = te(t) ? t + "" : t;
          }
          if (typeof e != "string")
            return e === 0 ? e : +e;
          e = zu(e);
          var n = df.test(e);
          return n || wf.test(e) ? Vf(e.slice(2), n ? 2 : 8) : pf.test(e) ? Ft : +e;
        }
        function xa(e) {
          return ut(e, Oe(e));
        }
        function Gg(e) {
          return e ? Pt(x(e), -We, We) : e === 0 ? e : 0;
        }
        function B(e) {
          return e == null ? "" : ye(e);
        }
        var Pg = en(function(e, t) {
          if (On(t) || me(t)) {
            ut(t, ce(t), e);
            return;
          }
          for (var n in t)
            $.call(t, n) && wn(e, n, t[n]);
        }), Da = en(function(e, t) {
          ut(t, Oe(t), e);
        }), mr = en(function(e, t, n, r) {
          ut(t, Oe(t), e, r);
        }), Mg = en(function(e, t, n, r) {
          ut(t, ce(t), e, r);
        }), Bg = _t(di);
        function Yg(e, t) {
          var n = jt(e);
          return t == null ? n : os(n, t);
        }
        var $g = R(function(e, t) {
          e = K(e);
          var n = -1, r = t.length, i = r > 2 ? t[2] : s;
          for (i && Te(t[0], t[1], i) && (r = 1); ++n < r; )
            for (var a = t[n], f = Oe(a), o = -1, c = f.length; ++o < c; ) {
              var p = f[o], d = e[p];
              (d === s || et(d, Vt[p]) && !$.call(e, p)) && (e[p] = a[p]);
            }
          return e;
        }), Hg = R(function(e) {
          return e.push(s, zs), Ce(Ra, s, e);
        });
        function Kg(e, t) {
          return Ku(e, m(t, 3), it);
        }
        function qg(e, t) {
          return Ku(e, m(t, 3), wi);
        }
        function Xg(e, t) {
          return e == null ? e : vi(e, m(t, 3), Oe);
        }
        function Jg(e, t) {
          return e == null ? e : _s(e, m(t, 3), Oe);
        }
        function zg(e, t) {
          return e && it(e, m(t, 3));
        }
        function Zg(e, t) {
          return e && wi(e, m(t, 3));
        }
        function Vg(e) {
          return e == null ? [] : ir(e, ce(e));
        }
        function Qg(e) {
          return e == null ? [] : ir(e, Oe(e));
        }
        function Vi(e, t, n) {
          var r = e == null ? s : Mt(e, t);
          return r === s ? n : r;
        }
        function kg(e, t) {
          return e != null && Qs(e, t, El);
        }
        function Qi(e, t) {
          return e != null && Qs(e, t, Il);
        }
        var jg = Hs(function(e, t, n) {
          t != null && typeof t.toString != "function" && (t = qn.call(t)), e[t] = n;
        }, ji(Se)), e_ = Hs(function(e, t, n) {
          t != null && typeof t.toString != "function" && (t = qn.call(t)), $.call(e, t) ? e[t].push(n) : e[t] = [n];
        }, m), t_ = R(Tn);
        function ce(e) {
          return me(e) ? as(e) : Ii(e);
        }
        function Oe(e) {
          return me(e) ? as(e, !0) : Rl(e);
        }
        function n_(e, t) {
          var n = {};
          return t = m(t, 3), it(e, function(r, i, a) {
            ht(n, t(r, i, a), r);
          }), n;
        }
        function r_(e, t) {
          var n = {};
          return t = m(t, 3), it(e, function(r, i, a) {
            ht(n, i, t(r, i, a));
          }), n;
        }
        var i_ = en(function(e, t, n) {
          ur(e, t, n);
        }), Ra = en(function(e, t, n, r) {
          ur(e, t, n, r);
        }), u_ = _t(function(e, t) {
          var n = {};
          if (e == null)
            return n;
          var r = !1;
          t = k(t, function(a) {
            return a = Lt(a, e), r || (r = a.length > 1), a;
          }), ut(e, bi(e), n), r && (n = Ye(n, U | j | ee, jl));
          for (var i = t.length; i--; )
            Li(n, t[i]);
          return n;
        });
        function s_(e, t) {
          return Fa(e, Tr(m(t)));
        }
        var a_ = _t(function(e, t) {
          return e == null ? {} : Ul(e, t);
        });
        function Fa(e, t) {
          if (e == null)
            return {};
          var n = k(bi(e), function(r) {
            return [r];
          });
          return t = m(t), Os(e, n, function(r, i) {
            return t(r, i[0]);
          });
        }
        function f_(e, t, n) {
          t = Lt(t, e);
          var r = -1, i = t.length;
          for (i || (i = 1, e = s); ++r < i; ) {
            var a = e == null ? s : e[st(t[r])];
            a === s && (r = i, a = n), e = dt(a) ? a.call(e) : a;
          }
          return e;
        }
        function o_(e, t, n) {
          return e == null ? e : In(e, t, n);
        }
        function l_(e, t, n, r) {
          return r = typeof r == "function" ? r : s, e == null ? e : In(e, t, n, r);
        }
        var Ua = Xs(ce), Wa = Xs(Oe);
        function c_(e, t, n) {
          var r = L(e), i = r || xt(e) || rn(e);
          if (t = m(t, 4), n == null) {
            var a = e && e.constructor;
            i ? n = r ? new a() : [] : te(e) ? n = dt(a) ? jt(zn(e)) : {} : n = {};
          }
          return (i ? Pe : it)(e, function(f, o, c) {
            return t(n, f, o, c);
          }), n;
        }
        function h_(e, t) {
          return e == null ? !0 : Li(e, t);
        }
        function g_(e, t, n) {
          return e == null ? e : ys(e, t, Di(n));
        }
        function __(e, t, n, r) {
          return r = typeof r == "function" ? r : s, e == null ? e : ys(e, t, Di(n), r);
        }
        function un(e) {
          return e == null ? [] : oi(e, ce(e));
        }
        function p_(e) {
          return e == null ? [] : oi(e, Oe(e));
        }
        function d_(e, t, n) {
          return n === s && (n = t, t = s), n !== s && (n = Ke(n), n = n === n ? n : 0), t !== s && (t = Ke(t), t = t === t ? t : 0), Pt(Ke(e), t, n);
        }
        function v_(e, t, n) {
          return t = vt(t), n === s ? (n = t, t = 0) : n = vt(n), e = Ke(e), ml(e, t, n);
        }
        function w_(e, t, n) {
          if (n && typeof n != "boolean" && Te(e, t, n) && (t = n = s), n === s && (typeof t == "boolean" ? (n = t, t = s) : typeof e == "boolean" && (n = e, e = s)), e === s && t === s ? (e = 0, t = 1) : (e = vt(e), t === s ? (t = e, e = 0) : t = vt(t)), e > t) {
            var r = e;
            e = t, t = r;
          }
          if (n || e % 1 || t % 1) {
            var i = us();
            return de(e + i * (t - e + Zf("1e-" + ((i + "").length - 1))), t);
          }
          return Si(e, t);
        }
        var A_ = tn(function(e, t, n) {
          return t = t.toLowerCase(), e + (n ? ba(t) : t);
        });
        function ba(e) {
          return ki(B(e).toLowerCase());
        }
        function Ga(e) {
          return e = B(e), e && e.replace(Tf, fo).replace(Mf, "");
        }
        function T_(e, t, n) {
          e = B(e), t = ye(t);
          var r = e.length;
          n = n === s ? r : Pt(x(n), 0, r);
          var i = n;
          return n -= t.length, n >= 0 && e.slice(n, i) == t;
        }
        function E_(e) {
          return e = B(e), e && ja.test(e) ? e.replace(_u, oo) : e;
        }
        function I_(e) {
          return e = B(e), e && sf.test(e) ? e.replace(Jr, "\\$&") : e;
        }
        var m_ = tn(function(e, t, n) {
          return e + (n ? "-" : "") + t.toLowerCase();
        }), O_ = tn(function(e, t, n) {
          return e + (n ? " " : "") + t.toLowerCase();
        }), S_ = Bs("toLowerCase");
        function N_(e, t, n) {
          e = B(e), t = x(t);
          var r = t ? zt(e) : 0;
          if (!t || r >= t)
            return e;
          var i = (t - r) / 2;
          return cr(kn(i), n) + e + cr(Qn(i), n);
        }
        function C_(e, t, n) {
          e = B(e), t = x(t);
          var r = t ? zt(e) : 0;
          return t && r < t ? e + cr(t - r, n) : e;
        }
        function L_(e, t, n) {
          e = B(e), t = x(t);
          var r = t ? zt(e) : 0;
          return t && r < t ? cr(t - r, n) + e : e;
        }
        function y_(e, t, n) {
          return n || t == null ? t = 0 : t && (t = +t), bo(B(e).replace(zr, ""), t || 0);
        }
        function x_(e, t, n) {
          return (n ? Te(e, t, n) : t === s) ? t = 1 : t = x(t), Ni(B(e), t);
        }
        function D_() {
          var e = arguments, t = B(e[0]);
          return e.length < 3 ? t : t.replace(e[1], e[2]);
        }
        var R_ = tn(function(e, t, n) {
          return e + (n ? "_" : "") + t.toLowerCase();
        });
        function F_(e, t, n) {
          return n && typeof n != "number" && Te(e, t, n) && (t = n = s), n = n === s ? be : n >>> 0, n ? (e = B(e), e && (typeof t == "string" || t != null && !Zi(t)) && (t = ye(t), !t && Jt(e)) ? yt(ke(e), 0, n) : e.split(t, n)) : [];
        }
        var U_ = tn(function(e, t, n) {
          return e + (n ? " " : "") + ki(t);
        });
        function W_(e, t, n) {
          return e = B(e), n = n == null ? 0 : Pt(x(n), 0, e.length), t = ye(t), e.slice(n, n + t.length) == t;
        }
        function b_(e, t, n) {
          var r = u.templateSettings;
          n && Te(e, t, n) && (t = s), e = B(e), t = mr({}, t, r, Js);
          var i = mr({}, t.imports, r.imports, Js), a = ce(i), f = oi(i, a), o, c, p = 0, d = t.interpolate || bn, v = "__p += '", A = ci(
            (t.escape || bn).source + "|" + d.source + "|" + (d === pu ? _f : bn).source + "|" + (t.evaluate || bn).source + "|$",
            "g"
          ), I = "//# sourceURL=" + ($.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Kf + "]") + `
`;
          e.replace(A, function(S, F, b, De, Ee, Re) {
            return b || (b = De), v += e.slice(p, Re).replace(Ef, lo), F && (o = !0, v += `' +
__e(` + F + `) +
'`), Ee && (c = !0, v += `';
` + Ee + `;
__p += '`), b && (v += `' +
((__t = (` + b + `)) == null ? '' : __t) +
'`), p = Re + S.length, S;
          }), v += `';
`;
          var O = $.call(t, "variable") && t.variable;
          if (!O)
            v = `with (obj) {
` + v + `
}
`;
          else if (hf.test(O))
            throw new N(nt);
          v = (c ? v.replace(Za, "") : v).replace(Va, "$1").replace(Qa, "$1;"), v = "function(" + (O || "obj") + `) {
` + (O ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (o ? ", __e = _.escape" : "") + (c ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + v + `return __p
}`;
          var D = Ma(function() {
            return M(a, I + "return " + v).apply(s, f);
          });
          if (D.source = v, zi(D))
            throw D;
          return D;
        }
        function G_(e) {
          return B(e).toLowerCase();
        }
        function P_(e) {
          return B(e).toUpperCase();
        }
        function M_(e, t, n) {
          if (e = B(e), e && (n || t === s))
            return zu(e);
          if (!e || !(t = ye(t)))
            return e;
          var r = ke(e), i = ke(t), a = Zu(r, i), f = Vu(r, i) + 1;
          return yt(r, a, f).join("");
        }
        function B_(e, t, n) {
          if (e = B(e), e && (n || t === s))
            return e.slice(0, ku(e) + 1);
          if (!e || !(t = ye(t)))
            return e;
          var r = ke(e), i = Vu(r, ke(t)) + 1;
          return yt(r, 0, i).join("");
        }
        function Y_(e, t, n) {
          if (e = B(e), e && (n || t === s))
            return e.replace(zr, "");
          if (!e || !(t = ye(t)))
            return e;
          var r = ke(e), i = Zu(r, ke(t));
          return yt(r, i).join("");
        }
        function $_(e, t) {
          var n = xr, r = Dr;
          if (te(t)) {
            var i = "separator" in t ? t.separator : i;
            n = "length" in t ? x(t.length) : n, r = "omission" in t ? ye(t.omission) : r;
          }
          e = B(e);
          var a = e.length;
          if (Jt(e)) {
            var f = ke(e);
            a = f.length;
          }
          if (n >= a)
            return e;
          var o = n - zt(r);
          if (o < 1)
            return r;
          var c = f ? yt(f, 0, o).join("") : e.slice(0, o);
          if (i === s)
            return c + r;
          if (f && (o += c.length - o), Zi(i)) {
            if (e.slice(o).search(i)) {
              var p, d = c;
              for (i.global || (i = ci(i.source, B(du.exec(i)) + "g")), i.lastIndex = 0; p = i.exec(d); )
                var v = p.index;
              c = c.slice(0, v === s ? o : v);
            }
          } else if (e.indexOf(ye(i), o) != o) {
            var A = c.lastIndexOf(i);
            A > -1 && (c = c.slice(0, A));
          }
          return c + r;
        }
        function H_(e) {
          return e = B(e), e && ka.test(e) ? e.replace(gu, wo) : e;
        }
        var K_ = tn(function(e, t, n) {
          return e + (n ? " " : "") + t.toUpperCase();
        }), ki = Bs("toUpperCase");
        function Pa(e, t, n) {
          return e = B(e), t = n ? s : t, t === s ? ho(e) ? Eo(e) : ro(e) : e.match(t) || [];
        }
        var Ma = R(function(e, t) {
          try {
            return Ce(e, s, t);
          } catch (n) {
            return zi(n) ? n : new N(n);
          }
        }), q_ = _t(function(e, t) {
          return Pe(t, function(n) {
            n = st(n), ht(e, n, Xi(e[n], e));
          }), e;
        });
        function X_(e) {
          var t = e == null ? 0 : e.length, n = m();
          return e = t ? k(e, function(r) {
            if (typeof r[1] != "function")
              throw new Me(P);
            return [n(r[0]), r[1]];
          }) : [], R(function(r) {
            for (var i = -1; ++i < t; ) {
              var a = e[i];
              if (Ce(a[0], this, r))
                return Ce(a[1], this, r);
            }
          });
        }
        function J_(e) {
          return wl(Ye(e, U));
        }
        function ji(e) {
          return function() {
            return e;
          };
        }
        function z_(e, t) {
          return e == null || e !== e ? t : e;
        }
        var Z_ = $s(), V_ = $s(!0);
        function Se(e) {
          return e;
        }
        function eu(e) {
          return ws(typeof e == "function" ? e : Ye(e, U));
        }
        function Q_(e) {
          return Ts(Ye(e, U));
        }
        function k_(e, t) {
          return Es(e, Ye(t, U));
        }
        var j_ = R(function(e, t) {
          return function(n) {
            return Tn(n, e, t);
          };
        }), ep = R(function(e, t) {
          return function(n) {
            return Tn(e, n, t);
          };
        });
        function tu(e, t, n) {
          var r = ce(t), i = ir(t, r);
          n == null && !(te(t) && (i.length || !r.length)) && (n = t, t = e, e = this, i = ir(t, ce(t)));
          var a = !(te(n) && "chain" in n) || !!n.chain, f = dt(e);
          return Pe(i, function(o) {
            var c = t[o];
            e[o] = c, f && (e.prototype[o] = function() {
              var p = this.__chain__;
              if (a || p) {
                var d = e(this.__wrapped__), v = d.__actions__ = Ie(this.__actions__);
                return v.push({ func: c, args: arguments, thisArg: e }), d.__chain__ = p, d;
              }
              return c.apply(e, mt([this.value()], arguments));
            });
          }), e;
        }
        function tp() {
          return ge._ === this && (ge._ = Co), this;
        }
        function nu() {
        }
        function np(e) {
          return e = x(e), R(function(t) {
            return Is(t, e);
          });
        }
        var rp = Fi(k), ip = Fi(Hu), up = Fi(ii);
        function Ba(e) {
          return Bi(e) ? ui(st(e)) : Wl(e);
        }
        function sp(e) {
          return function(t) {
            return e == null ? s : Mt(e, t);
          };
        }
        var ap = Ks(), fp = Ks(!0);
        function ru() {
          return [];
        }
        function iu() {
          return !1;
        }
        function op() {
          return {};
        }
        function lp() {
          return "";
        }
        function cp() {
          return !0;
        }
        function hp(e, t) {
          if (e = x(e), e < 1 || e > We)
            return [];
          var n = be, r = de(e, be);
          t = m(t), e -= be;
          for (var i = fi(r, t); ++n < e; )
            t(n);
          return i;
        }
        function gp(e) {
          return L(e) ? k(e, st) : xe(e) ? [e] : Ie(sa(B(e)));
        }
        function _p(e) {
          var t = ++So;
          return B(e) + t;
        }
        var pp = lr(function(e, t) {
          return e + t;
        }, 0), dp = Ui("ceil"), vp = lr(function(e, t) {
          return e / t;
        }, 1), wp = Ui("floor");
        function Ap(e) {
          return e && e.length ? rr(e, Se, Ai) : s;
        }
        function Tp(e, t) {
          return e && e.length ? rr(e, m(t, 2), Ai) : s;
        }
        function Ep(e) {
          return Xu(e, Se);
        }
        function Ip(e, t) {
          return Xu(e, m(t, 2));
        }
        function mp(e) {
          return e && e.length ? rr(e, Se, mi) : s;
        }
        function Op(e, t) {
          return e && e.length ? rr(e, m(t, 2), mi) : s;
        }
        var Sp = lr(function(e, t) {
          return e * t;
        }, 1), Np = Ui("round"), Cp = lr(function(e, t) {
          return e - t;
        }, 0);
        function Lp(e) {
          return e && e.length ? ai(e, Se) : 0;
        }
        function yp(e, t) {
          return e && e.length ? ai(e, m(t, 2)) : 0;
        }
        return u.after = Qh, u.ary = va, u.assign = Pg, u.assignIn = Da, u.assignInWith = mr, u.assignWith = Mg, u.at = Bg, u.before = wa, u.bind = Xi, u.bindAll = q_, u.bindKey = Aa, u.castArray = og, u.chain = _a, u.chunk = wc, u.compact = Ac, u.concat = Tc, u.cond = X_, u.conforms = J_, u.constant = ji, u.countBy = Lh, u.create = Yg, u.curry = Ta, u.curryRight = Ea, u.debounce = Ia, u.defaults = $g, u.defaultsDeep = Hg, u.defer = kh, u.delay = jh, u.difference = Ec, u.differenceBy = Ic, u.differenceWith = mc, u.drop = Oc, u.dropRight = Sc, u.dropRightWhile = Nc, u.dropWhile = Cc, u.fill = Lc, u.filter = xh, u.flatMap = Fh, u.flatMapDeep = Uh, u.flatMapDepth = Wh, u.flatten = la, u.flattenDeep = yc, u.flattenDepth = xc, u.flip = eg, u.flow = Z_, u.flowRight = V_, u.fromPairs = Dc, u.functions = Vg, u.functionsIn = Qg, u.groupBy = bh, u.initial = Fc, u.intersection = Uc, u.intersectionBy = Wc, u.intersectionWith = bc, u.invert = jg, u.invertBy = e_, u.invokeMap = Ph, u.iteratee = eu, u.keyBy = Mh, u.keys = ce, u.keysIn = Oe, u.map = vr, u.mapKeys = n_, u.mapValues = r_, u.matches = Q_, u.matchesProperty = k_, u.memoize = Ar, u.merge = i_, u.mergeWith = Ra, u.method = j_, u.methodOf = ep, u.mixin = tu, u.negate = Tr, u.nthArg = np, u.omit = u_, u.omitBy = s_, u.once = tg, u.orderBy = Bh, u.over = rp, u.overArgs = ng, u.overEvery = ip, u.overSome = up, u.partial = Ji, u.partialRight = ma, u.partition = Yh, u.pick = a_, u.pickBy = Fa, u.property = Ba, u.propertyOf = sp, u.pull = Bc, u.pullAll = ha, u.pullAllBy = Yc, u.pullAllWith = $c, u.pullAt = Hc, u.range = ap, u.rangeRight = fp, u.rearg = rg, u.reject = Kh, u.remove = Kc, u.rest = ig, u.reverse = Ki, u.sampleSize = Xh, u.set = o_, u.setWith = l_, u.shuffle = Jh, u.slice = qc, u.sortBy = Vh, u.sortedUniq = kc, u.sortedUniqBy = jc, u.split = F_, u.spread = ug, u.tail = eh, u.take = th, u.takeRight = nh, u.takeRightWhile = rh, u.takeWhile = ih, u.tap = Ah, u.throttle = sg, u.thru = dr, u.toArray = La, u.toPairs = Ua, u.toPairsIn = Wa, u.toPath = gp, u.toPlainObject = xa, u.transform = c_, u.unary = ag, u.union = uh, u.unionBy = sh, u.unionWith = ah, u.uniq = fh, u.uniqBy = oh, u.uniqWith = lh, u.unset = h_, u.unzip = qi, u.unzipWith = ga, u.update = g_, u.updateWith = __, u.values = un, u.valuesIn = p_, u.without = ch, u.words = Pa, u.wrap = fg, u.xor = hh, u.xorBy = gh, u.xorWith = _h, u.zip = ph, u.zipObject = dh, u.zipObjectDeep = vh, u.zipWith = wh, u.entries = Ua, u.entriesIn = Wa, u.extend = Da, u.extendWith = mr, tu(u, u), u.add = pp, u.attempt = Ma, u.camelCase = A_, u.capitalize = ba, u.ceil = dp, u.clamp = d_, u.clone = lg, u.cloneDeep = hg, u.cloneDeepWith = gg, u.cloneWith = cg, u.conformsTo = _g, u.deburr = Ga, u.defaultTo = z_, u.divide = vp, u.endsWith = T_, u.eq = et, u.escape = E_, u.escapeRegExp = I_, u.every = yh, u.find = Dh, u.findIndex = fa, u.findKey = Kg, u.findLast = Rh, u.findLastIndex = oa, u.findLastKey = qg, u.floor = wp, u.forEach = pa, u.forEachRight = da, u.forIn = Xg, u.forInRight = Jg, u.forOwn = zg, u.forOwnRight = Zg, u.get = Vi, u.gt = pg, u.gte = dg, u.has = kg, u.hasIn = Qi, u.head = ca, u.identity = Se, u.includes = Gh, u.indexOf = Rc, u.inRange = v_, u.invoke = t_, u.isArguments = $t, u.isArray = L, u.isArrayBuffer = vg, u.isArrayLike = me, u.isArrayLikeObject = re, u.isBoolean = wg, u.isBuffer = xt, u.isDate = Ag, u.isElement = Tg, u.isEmpty = Eg, u.isEqual = Ig, u.isEqualWith = mg, u.isError = zi, u.isFinite = Og, u.isFunction = dt, u.isInteger = Oa, u.isLength = Er, u.isMap = Sa, u.isMatch = Sg, u.isMatchWith = Ng, u.isNaN = Cg, u.isNative = Lg, u.isNil = xg, u.isNull = yg, u.isNumber = Na, u.isObject = te, u.isObjectLike = ne, u.isPlainObject = Nn, u.isRegExp = Zi, u.isSafeInteger = Dg, u.isSet = Ca, u.isString = Ir, u.isSymbol = xe, u.isTypedArray = rn, u.isUndefined = Rg, u.isWeakMap = Fg, u.isWeakSet = Ug, u.join = Gc, u.kebabCase = m_, u.last = He, u.lastIndexOf = Pc, u.lowerCase = O_, u.lowerFirst = S_, u.lt = Wg, u.lte = bg, u.max = Ap, u.maxBy = Tp, u.mean = Ep, u.meanBy = Ip, u.min = mp, u.minBy = Op, u.stubArray = ru, u.stubFalse = iu, u.stubObject = op, u.stubString = lp, u.stubTrue = cp, u.multiply = Sp, u.nth = Mc, u.noConflict = tp, u.noop = nu, u.now = wr, u.pad = N_, u.padEnd = C_, u.padStart = L_, u.parseInt = y_, u.random = w_, u.reduce = $h, u.reduceRight = Hh, u.repeat = x_, u.replace = D_, u.result = f_, u.round = Np, u.runInContext = l, u.sample = qh, u.size = zh, u.snakeCase = R_, u.some = Zh, u.sortedIndex = Xc, u.sortedIndexBy = Jc, u.sortedIndexOf = zc, u.sortedLastIndex = Zc, u.sortedLastIndexBy = Vc, u.sortedLastIndexOf = Qc, u.startCase = U_, u.startsWith = W_, u.subtract = Cp, u.sum = Lp, u.sumBy = yp, u.template = b_, u.times = hp, u.toFinite = vt, u.toInteger = x, u.toLength = ya, u.toLower = G_, u.toNumber = Ke, u.toSafeInteger = Gg, u.toString = B, u.toUpper = P_, u.trim = M_, u.trimEnd = B_, u.trimStart = Y_, u.truncate = $_, u.unescape = H_, u.uniqueId = _p, u.upperCase = K_, u.upperFirst = ki, u.each = pa, u.eachRight = da, u.first = ca, tu(u, (function() {
          var e = {};
          return it(u, function(t, n) {
            $.call(u.prototype, n) || (e[n] = t);
          }), e;
        })(), { chain: !1 }), u.VERSION = V, Pe(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
          u[e].placeholder = u;
        }), Pe(["drop", "take"], function(e, t) {
          W.prototype[e] = function(n) {
            n = n === s ? 1 : oe(x(n), 0);
            var r = this.__filtered__ && !t ? new W(this) : this.clone();
            return r.__filtered__ ? r.__takeCount__ = de(n, r.__takeCount__) : r.__views__.push({
              size: de(n, be),
              type: e + (r.__dir__ < 0 ? "Right" : "")
            }), r;
          }, W.prototype[e + "Right"] = function(n) {
            return this.reverse()[e](n).reverse();
          };
        }), Pe(["filter", "map", "takeWhile"], function(e, t) {
          var n = t + 1, r = n == xn || n == Ur;
          W.prototype[e] = function(i) {
            var a = this.clone();
            return a.__iteratees__.push({
              iteratee: m(i, 3),
              type: n
            }), a.__filtered__ = a.__filtered__ || r, a;
          };
        }), Pe(["head", "last"], function(e, t) {
          var n = "take" + (t ? "Right" : "");
          W.prototype[e] = function() {
            return this[n](1).value()[0];
          };
        }), Pe(["initial", "tail"], function(e, t) {
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
            return Tn(n, e, t);
          });
        }), W.prototype.reject = function(e) {
          return this.filter(Tr(m(e)));
        }, W.prototype.slice = function(e, t) {
          e = x(e);
          var n = this;
          return n.__filtered__ && (e > 0 || t < 0) ? new W(n) : (e < 0 ? n = n.takeRight(-e) : e && (n = n.drop(e)), t !== s && (t = x(t), n = t < 0 ? n.dropRight(-t) : n.take(t - e)), n);
        }, W.prototype.takeRightWhile = function(e) {
          return this.reverse().takeWhile(e).reverse();
        }, W.prototype.toArray = function() {
          return this.take(be);
        }, it(W.prototype, function(e, t) {
          var n = /^(?:filter|find|map|reject)|While$/.test(t), r = /^(?:head|last)$/.test(t), i = u[r ? "take" + (t == "last" ? "Right" : "") : t], a = r || /^find/.test(t);
          i && (u.prototype[t] = function() {
            var f = this.__wrapped__, o = r ? [1] : arguments, c = f instanceof W, p = o[0], d = c || L(f), v = function(F) {
              var b = i.apply(u, mt([F], o));
              return r && A ? b[0] : b;
            };
            d && n && typeof p == "function" && p.length != 1 && (c = d = !1);
            var A = this.__chain__, I = !!this.__actions__.length, O = a && !A, D = c && !I;
            if (!a && d) {
              f = D ? f : new W(this);
              var S = e.apply(f, o);
              return S.__actions__.push({ func: dr, args: [v], thisArg: s }), new Be(S, A);
            }
            return O && D ? e.apply(this, o) : (S = this.thru(v), O ? r ? S.value()[0] : S.value() : S);
          });
        }), Pe(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
          var t = $n[e], n = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", r = /^(?:pop|shift)$/.test(e);
          u.prototype[e] = function() {
            var i = arguments;
            if (r && !this.__chain__) {
              var a = this.value();
              return t.apply(L(a) ? a : [], i);
            }
            return this[n](function(f) {
              return t.apply(L(f) ? f : [], i);
            });
          };
        }), it(W.prototype, function(e, t) {
          var n = u[t];
          if (n) {
            var r = n.name + "";
            $.call(kt, r) || (kt[r] = []), kt[r].push({ name: t, func: n });
          }
        }), kt[or(s, le).name] = [{
          name: "wrapper",
          func: s
        }], W.prototype.clone = Ho, W.prototype.reverse = Ko, W.prototype.value = qo, u.prototype.at = Th, u.prototype.chain = Eh, u.prototype.commit = Ih, u.prototype.next = mh, u.prototype.plant = Sh, u.prototype.reverse = Nh, u.prototype.toJSON = u.prototype.valueOf = u.prototype.value = Ch, u.prototype.first = u.prototype.head, gn && (u.prototype[gn] = Oh), u;
      }), Zt = Io();
      Ut ? ((Ut.exports = Zt)._ = Zt, ei._ = Zt) : ge._ = Zt;
    }).call(nd);
  })(yn, yn.exports)), yn.exports;
}
var id = rd();
const ud = { class: "routing-widget" }, sd = { class: "routing-header" }, ad = ["value"], fd = { class: "waypoints-list" }, od = { class: "waypoint-input-wrapper" }, ld = { class: "waypoint-label" }, cd = ["onUpdate:modelValue", "onInput", "onFocus"], hd = {
  key: 0,
  class: "suggestions-dropdown"
}, gd = ["onMousedown"], _d = ["onClick"], pd = { class: "routing-actions" }, dd = ["disabled"], vd = {
  key: 0,
  class: "route-result"
}, wd = { class: "result-summary" }, Ad = { class: "summary-item" }, Td = { class: "summary-value" }, Ed = { class: "summary-item" }, Id = { class: "summary-value" }, md = { class: "summary-item" }, Od = { class: "summary-value" }, Sd = { class: "maneuvers-section" }, Nd = {
  key: 0,
  class: "maneuvers-list"
}, Cd = { class: "maneuver-instruction" }, Ld = { class: "maneuver-distance" }, yd = /* @__PURE__ */ Pp({
  __name: "RoutingWidget",
  props: {
    datasourceId: {},
    config: {},
    id: {}
  },
  setup(pe, { expose: g }) {
    const s = pe, { datasourceId: V, config: Q, id: z } = Mp(s), P = uu(zp.TINY_EMITTER), nt = uu(Dp), at = Xp().params.pageid || "", ae = Q.value?.waypoints, U = At(
      Array.isArray(ae) ? [...ae] : []
    ), j = At(
      Q.value?.costing || Q.value?.defaultCosting || "auto"
    ), ee = At(null), he = At(!1), we = At(!1), q = At(
      Array.isArray(ae) && ae.length > 0 ? ae.map((w) => w.name || `${w.lat.toFixed(4)}, ${w.lon.toFixed(4)}`) : ["", ""]
    ), le = At(
      Array.isArray(ae) && ae.length > 0 ? ae.map(() => []) : [[], []]
    ), Dt = At(-1);
    function Ne() {
      if (!Q.value) return;
      const w = U.value.filter((T) => T.lat !== 0 || T.lon !== 0);
      Q.value.waypoints = w.length > 0 ? [...w] : void 0, Q.value.costing = j.value;
    }
    Cn(U, Ne, { deep: !0 }), Cn(j, Ne);
    const Tt = At(null), { update: ze } = Jp(
      V,
      "object",
      Tt
    );
    Cn(V, (w, T) => {
      ze(w, T);
    }), Cn(Tt, (w) => {
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
    ], Ze = su(() => {
      const w = Et.find((T) => T.value === j.value);
      return w ? `${w.icon} ${w.text}` : j.value;
    }), Rt = su(() => {
      if (!ee.value) return "";
      const w = ee.value.summary.duration_min;
      if (w < 60) return `${w} min`;
      const T = Math.floor(w / 60), y = w % 60;
      return y > 0 ? `${T} h ${y} min` : `${T} h`;
    }), Ht = su(() => ee.value?.legs ? ee.value.legs.flatMap(
      (w, T) => w.maneuvers.map((y) => ({ ...y, legIndex: T }))
    ) : []);
    async function xr(w, T) {
      if (!w || w.length < 3) {
        le.value[T] = [];
        return;
      }
      try {
        const y = "https://nominatim.openstreetmap.org/search?" + new URLSearchParams({
          q: w,
          format: "json",
          limit: "5",
          addressdetails: "1"
        }), H = await fetch(y, {
          headers: { "User-Agent": "DaanseBoard/1.0" }
        });
        le.value[T] = await H.json();
      } catch {
        le.value[T] = [];
      }
    }
    const Dr = id.debounce(xr, 400);
    function Rr(w) {
      Dt.value = w, Dr(q.value[w], w);
    }
    function Fr(w, T) {
      const y = {
        lat: parseFloat(T.lat),
        lon: parseFloat(T.lon),
        name: T.display_name?.split(",")[0] || ""
      };
      q.value[w] = y.name || T.display_name, le.value[w] = [], Dt.value = -1, w < U.value.length ? U.value[w] = y : U.value.push(y), Ft(y, w);
    }
    function xn() {
      const w = U.value.length > 0 ? U.value.length - 1 : U.value.length;
      U.value.splice(w, 0, {
        lat: 0,
        lon: 0,
        name: ""
      }), q.value.splice(w, 0, ""), le.value.splice(w, 0, []);
    }
    function Dn(w) {
      const T = U.value.splice(w, 1)[0];
      q.value.splice(w, 1), le.value.splice(w, 1), T && be(T, w);
    }
    function Ur(w) {
      return w === 0 ? "Start" : w === U.value.length - 1 && U.value.length > 1 ? "Ziel" : `Halt ${w}`;
    }
    function ft(w) {
      return w === 0 ? "#4caf50" : w === U.value.length - 1 && U.value.length > 1 ? "#f44336" : "#2196f3";
    }
    async function We() {
      const w = U.value.filter(
        (T) => T.lat !== 0 || T.lon !== 0
      );
      if (!(w.length < 2)) {
        he.value = !0;
        try {
          const {
            DatasourceRepository: T,
            identifier: y
          } = await import("org.eclipse.daanse.board.app.lib.repository.datasource"), se = uu(y).getDatasource(V.value);
          se && typeof se.callEvent == "function" && await se.callEvent(kp, {
            waypoints: w,
            costing: j.value
          });
        } catch (T) {
          console.warn("Route calculation failed:", T);
        } finally {
          he.value = !1;
        }
      }
    }
    function Rn() {
      U.value = [], q.value = ["", ""], le.value = [[], []], ee.value = null, Ne(), z?.value && P.emit("widget:RoutingWidget:route_cleared", {
        type: "widget:RoutingWidget:route_cleared",
        widgetId: z.value,
        payload: { widgetId: z.value, timestamp: Date.now() }
      });
    }
    function Ft(w, T) {
      if (!z?.value) return;
      const y = new Y();
      y.lat = w.lat, y.lon = w.lon, y.name = w.name ?? "", y.index = T, P.emit("widget:RoutingWidget:waypoint_added", {
        type: "widget:RoutingWidget:waypoint_added",
        widgetId: z.value,
        payload: y,
        timestamp: Date.now()
      });
    }
    function be(w, T) {
      if (!z?.value) return;
      const y = new Y();
      y.lat = w.lat, y.lon = w.lon, y.name = w.name ?? "", y.index = T, P.emit("widget:RoutingWidget:waypoint_removed", {
        type: "widget:RoutingWidget:waypoint_removed",
        widgetId: z.value,
        payload: y,
        timestamp: Date.now()
      });
    }
    function Wr(w) {
      if (!z?.value) return;
      const T = new G();
      T.geojson = w.geojson, T.distance_km = w.summary.distance_km, T.duration_min = w.summary.duration_min, T.waypoints = w.waypoints, T.costing = j.value, P.emit("widget:RoutingWidget:route_calculated", {
        type: "widget:RoutingWidget:route_calculated",
        widgetId: z.value,
        payload: T,
        timestamp: Date.now()
      });
    }
    Cn(ee, (w) => {
      w && Wr(w);
    });
    class br extends td {
      addWaypoint(T, y, H) {
        const se = { lat: T, lon: y, name: H };
        U.value.push(se), q.value.push(H || `${T.toFixed(4)}, ${y.toFixed(4)}`), le.value.push([]), Ft(se, U.value.length - 1);
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
        We();
      }
    }
    const Fn = new br();
    return g(Fn), Bp(() => {
      z?.value && nt.registerInstance(
        z.value,
        Fn,
        "RoutingWidget",
        at
      ), U.value.filter((T) => T.lat !== 0 || T.lon !== 0).length >= 2 && We();
    }), Yp(() => {
      z?.value && nt.unregisterInstance(z.value);
    }), (w, T) => (Ue(), Fe("div", ud, [
      J("div", sd, [
        T[2] || (T[2] = J("span", { class: "routing-title" }, "Routing", -1)),
        $a(J("select", {
          "onUpdate:modelValue": T[0] || (T[0] = (y) => j.value = y),
          class: "costing-select"
        }, [
          (Ue(), Fe(Or, null, Sr(Et, (y) => J("option", {
            key: y.value,
            value: y.value
          }, qe(y.icon) + " " + qe(y.text), 9, ad)), 64))
        ], 512), [
          [$p, j.value]
        ])
      ]),
      J("div", fd, [
        (Ue(!0), Fe(Or, null, Sr(Math.max(2, U.value.length), (y, H) => (Ue(), Fe("div", {
          key: H,
          class: "waypoint-row"
        }, [
          J("div", {
            class: "waypoint-dot",
            style: Hp({ backgroundColor: ft(H) })
          }, null, 4),
          J("div", od, [
            J("label", ld, qe(Ur(H)), 1),
            $a(J("input", {
              "onUpdate:modelValue": (se) => q.value[H] = se,
              class: "waypoint-input",
              placeholder: "Adresse eingeben...",
              onInput: (se) => Rr(H),
              onFocus: (se) => Dt.value = H
            }, null, 40, cd), [
              [Kp, q.value[H]]
            ]),
            Dt.value === H && le.value[H] && le.value[H].length > 0 ? (Ue(), Fe("div", hd, [
              (Ue(!0), Fe(Or, null, Sr(le.value[H], (se, Gr) => (Ue(), Fe("div", {
                key: Gr,
                class: "suggestion-item",
                onMousedown: qp((sn) => Fr(H, se), ["prevent"])
              }, qe(se.display_name), 41, gd))), 128))
            ])) : Ln("", !0)
          ]),
          H >= 2 ? (Ue(), Fe("button", {
            key: 0,
            class: "remove-btn",
            title: "Entfernen",
            onClick: (se) => Dn(H)
          }, " × ", 8, _d)) : Ln("", !0)
        ]))), 128))
      ]),
      J("div", pd, [
        J("button", {
          class: "btn-secondary",
          onClick: xn
        }, " + Zwischenhalt "),
        J("button", {
          class: "btn-primary",
          disabled: he.value,
          onClick: We
        }, qe(he.value ? "Berechne..." : "Route berechnen"), 9, dd),
        ee.value || U.value.length > 0 ? (Ue(), Fe("button", {
          key: 0,
          class: "btn-clear",
          onClick: Rn
        }, " Löschen ")) : Ln("", !0)
      ]),
      ee.value ? (Ue(), Fe("div", vd, [
        J("div", wd, [
          J("div", Ad, [
            J("span", Td, qe(ee.value.summary.distance_km.toFixed(1)) + " km ", 1),
            T[3] || (T[3] = J("span", { class: "summary-label" }, "Distanz", -1))
          ]),
          J("div", Ed, [
            J("span", Id, qe(Rt.value), 1),
            T[4] || (T[4] = J("span", { class: "summary-label" }, "Dauer", -1))
          ]),
          J("div", md, [
            J("span", Od, qe(Ze.value), 1),
            T[5] || (T[5] = J("span", { class: "summary-label" }, "Verkehrsart", -1))
          ])
        ]),
        J("div", Sd, [
          J("button", {
            class: "maneuvers-toggle",
            onClick: T[1] || (T[1] = (y) => we.value = !we.value)
          }, qe(we.value ? "▾" : "▸") + " Manöver (" + qe(Ht.value.length) + ") ", 1),
          we.value ? (Ue(), Fe("div", Nd, [
            (Ue(!0), Fe(Or, null, Sr(Ht.value, (y, H) => (Ue(), Fe("div", {
              key: H,
              class: "maneuver-item"
            }, [
              J("span", Cd, qe(y.instruction), 1),
              J("span", Ld, qe(y.length.toFixed(1)) + " km ", 1)
            ]))), 128))
          ])) : Ln("", !0)
        ])
      ])) : Ln("", !0)
    ]));
  }
}), xd = [
  {
    name: "Route Calculated",
    type: "route_calculated",
    description: "Triggered when a route has been calculated",
    payloadType: G
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
], Dd = `<?xml version="1.0" encoding="UTF-8"?>
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
var Rd = Object.defineProperty, Fd = Object.getOwnPropertyDescriptor, lu = (pe, g, s, V) => {
  for (var Q = V > 1 ? void 0 : V ? Fd(g, s) : g, z = pe.length - 1, P; z >= 0; z--)
    (P = pe[z]) && (Q = (V ? P(g, s, Q) : P(Q)) || Q);
  return V && Q && Rd(g, s, Q), Q;
}, Ud = (pe, g) => (s, V) => g(s, V, pe);
Rp.eINSTANCE;
C.eINSTANCE;
const Lr = "RoutingWidget";
let yr = class {
  constructor(pe) {
    this.events = pe;
  }
  type = Lr;
  component = yd;
  supportedDSTypes = ["valhalla"];
  icon = ed;
  name = "Routing";
  /*
   * The settings form, as a model. Carried on the registration like the
   * icon, so whoever shows the settings does not have to know this widget
   * exists - and the shell needs no dependency on this bundle.
   */
  settingsForm = {
    xmi: Dd,
    uri: "/routing-settings.ui.xmi",
    ePackage: () => C.eINSTANCE,
    create: () => new ue()
  };
  register() {
    this.events.registerWidget(Lr, xd);
  }
  unregister() {
    this.events.unregisterWidget(Lr);
  }
};
lu([
  Up()
], yr.prototype, "register", 1);
lu([
  Wp()
], yr.prototype, "unregister", 1);
yr = lu([
  bp({
    service: [jp],
    properties: { "widget.type": Lr }
  }),
  Ud(0, Gp(Fp))
], yr);
export {
  C as RoutingSettingsPackage,
  yd as RoutingWidget,
  yr as RoutingWidgetProvider,
  ue as RoutingWidgetSettingsImpl,
  Dd as routingSettingsFormXmi
};
