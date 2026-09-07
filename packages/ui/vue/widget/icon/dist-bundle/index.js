(function(){var i="ui.vue.widget.icon",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".icon[data-v-68eea9d7]{width:100%;height:100%;display:flex;justify-content:center;align-items:center}.material-symbols-outlined[data-v-68eea9d7]{font-family:Material Symbols Outlined;font-weight:400;font-style:normal;font-size:var(--d221fe60);color:var(--v9c7b78b2);display:inline-block;line-height:1;text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;direction:ltr}.settings-container[data-v-a8457eeb]{display:flex;flex-direction:column;align-items:stretch;gap:1rem}.icons-container[data-v-a8457eeb]{display:flex;flex-wrap:wrap;gap:10px;max-height:220px;overflow-y:auto;overflow-x:hidden;width:100%;cursor:pointer;padding:10px}.material-symbols-outlined[data-v-a8457eeb]{font-family:Material Symbols Outlined;font-weight:400;font-style:inherit;font-size:40px;display:inline-block;line-height:1;text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;direction:ltr;border:2px solid transparent;border-radius:5px;transition:border-color .5s ease,transform .5s ease}.material-symbols-outlined[data-v-a8457eeb]:hover{transform:scale(1.1)}.active-icon[data-v-a8457eeb]{border:2px solid rgb(0,121,0)}.slider[data-v-a8457eeb]{padding:0 10px}\n";})();
import { PayloadImpl as U, EventsPackage as ee, EVENT_REGISTRY_ID as te } from "org.eclipse.daanse.board.app.lib.api.events";
import { activate as _e, deactivate as ae, component as oe, inject as re, initTsmRuntime as ie } from "@eclipse-daanse/tsm";
import { defineComponent as B, mergeModels as se, useCssVars as ne, unref as A, toRefs as le, useModel as Z, inject as H, onMounted as K, computed as k, createElementBlock as O, openBlock as T, Fragment as G, createElementVNode as C, withModifiers as ce, mergeProps as de, toDisplayString as Y, ref as S, resolveComponent as N, createVNode as g, withCtx as D, normalizeStyle as ue, renderList as pe, normalizeClass as me } from "vue";
import { VariableWrapper as I, useVariableRepository as he } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { BasicEFactory as ge, BasicEPackage as fe, EPackageRegistry as $, BasicEClass as F, BasicEReference as be, BasicEAttribute as y, getEcorePackage as v, BasicEObject as we } from "@emfts/core";
import { VariableInput as ve } from "org.eclipse.daanse.board.app.ui.vue.variable.components";
import { WIDGET_SERVICE_ID as ke } from "org.eclipse.daanse.board.app.lib.api.widget";
const { identifiers: ye } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), Ce = "data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M105%207.5H15C10.8579%207.5%207.5%2010.8579%207.5%2015V105C7.5%20109.142%2010.8579%20112.5%2015%20112.5H105C109.142%20112.5%20112.5%20109.142%20112.5%20105V15C112.5%2010.8579%20109.142%207.5%20105%207.5ZM15%200C6.71573%200%200%206.71573%200%2015V105C0%20113.284%206.71573%20120%2015%20120H105C113.284%20120%20120%20113.284%20120%20105V15C120%206.71573%20113.284%200%20105%200H15Z'%20fill='%23606060'/%3e%3cpath%20d='M39.9389%2066.162C39.4109%2066.162%2039.0029%2066.018%2038.7149%2065.73C38.4269%2065.43%2038.2829%2065.01%2038.2829%2064.47V54.84C38.2829%2054.288%2038.4269%2053.868%2038.7149%2053.58C39.0029%2053.292%2039.4109%2053.148%2039.9389%2053.148C40.4789%2053.148%2040.8869%2053.292%2041.1629%2053.58C41.4509%2053.868%2041.5949%2054.288%2041.5949%2054.84V64.47C41.5949%2065.01%2041.4569%2065.43%2041.1809%2065.73C40.9049%2066.018%2040.4909%2066.162%2039.9389%2066.162Z'%20fill='%23606060'/%3e%3cpath%20d='M50.2983%2066.198C48.8943%2066.198%2047.6883%2065.928%2046.6803%2065.388C45.6723%2064.848%2044.8983%2064.086%2044.3583%2063.102C43.8303%2062.118%2043.5663%2060.966%2043.5663%2059.646C43.5663%2058.662%2043.7163%2057.768%2044.0163%2056.964C44.3283%2056.16%2044.7723%2055.47%2045.3483%2054.894C45.9363%2054.318%2046.6443%2053.88%2047.4723%2053.58C48.3123%2053.268%2049.2543%2053.112%2050.2983%2053.112C50.8503%2053.112%2051.4203%2053.178%2052.0083%2053.31C52.6083%2053.43%2053.1363%2053.616%2053.5923%2053.868C53.9283%2054.048%2054.1623%2054.276%2054.2943%2054.552C54.4263%2054.828%2054.4683%2055.11%2054.4203%2055.398C54.3843%2055.686%2054.2823%2055.944%2054.1143%2056.172C53.9463%2056.4%2053.7303%2056.556%2053.4663%2056.64C53.2023%2056.712%2052.9143%2056.67%2052.6023%2056.514C52.2423%2056.346%2051.8823%2056.22%2051.5223%2056.136C51.1743%2056.04%2050.8083%2055.992%2050.4243%2055.992C49.6803%2055.992%2049.0563%2056.136%2048.5523%2056.424C48.0603%2056.7%2047.6883%2057.108%2047.4363%2057.648C47.1843%2058.188%2047.0583%2058.854%2047.0583%2059.646C47.0583%2060.438%2047.1843%2061.11%2047.4363%2061.662C47.6883%2062.202%2048.0603%2062.616%2048.5523%2062.904C49.0563%2063.18%2049.6803%2063.318%2050.4243%2063.318C50.7363%2063.318%2051.0723%2063.282%2051.4323%2063.21C51.7923%2063.126%2052.1463%2063%2052.4943%2062.832C52.8543%2062.676%2053.1723%2062.634%2053.4483%2062.706C53.7363%2062.778%2053.9643%2062.922%2054.1323%2063.138C54.3123%2063.354%2054.4263%2063.606%2054.4743%2063.894C54.5223%2064.17%2054.4803%2064.446%2054.3483%2064.722C54.2283%2064.998%2054.0123%2065.22%2053.7003%2065.388C53.2803%2065.64%2052.7583%2065.838%2052.1343%2065.982C51.5223%2066.126%2050.9103%2066.198%2050.2983%2066.198Z'%20fill='%23606060'/%3e%3cpath%20d='M61.981%2066.198C60.697%2066.198%2059.569%2065.928%2058.597%2065.388C57.625%2064.836%2056.869%2064.068%2056.329%2063.084C55.801%2062.1%2055.537%2060.954%2055.537%2059.646C55.537%2058.662%2055.687%2057.768%2055.987%2056.964C56.299%2056.16%2056.737%2055.47%2057.301%2054.894C57.877%2054.318%2058.561%2053.88%2059.353%2053.58C60.145%2053.268%2061.021%2053.112%2061.981%2053.112C63.265%2053.112%2064.387%2053.382%2065.347%2053.922C66.319%2054.462%2067.075%2055.224%2067.615%2056.208C68.155%2057.18%2068.425%2058.326%2068.425%2059.646C68.425%2060.63%2068.269%2061.524%2067.957%2062.328C67.657%2063.132%2067.219%2063.828%2066.643%2064.416C66.079%2064.992%2065.401%2065.436%2064.609%2065.748C63.817%2066.048%2062.941%2066.198%2061.981%2066.198ZM61.981%2063.426C62.617%2063.426%2063.157%2063.276%2063.601%2062.976C64.045%2062.676%2064.387%2062.244%2064.627%2061.68C64.867%2061.116%2064.987%2060.438%2064.987%2059.646C64.987%2058.458%2064.723%2057.534%2064.195%2056.874C63.667%2056.214%2062.929%2055.884%2061.981%2055.884C61.357%2055.884%2060.817%2056.034%2060.361%2056.334C59.917%2056.622%2059.575%2057.048%2059.335%2057.612C59.095%2058.164%2058.975%2058.842%2058.975%2059.646C58.975%2060.834%2059.239%2061.764%2059.767%2062.436C60.295%2063.096%2061.033%2063.426%2061.981%2063.426Z'%20fill='%23606060'/%3e%3cpath%20d='M71.9285%2066.162C71.4245%2066.162%2071.0405%2066.03%2070.7765%2065.766C70.5125%2065.502%2070.3805%2065.112%2070.3805%2064.596V54.786C70.3805%2054.258%2070.5125%2053.856%2070.7765%2053.58C71.0405%2053.292%2071.3885%2053.148%2071.8205%2053.148C72.2045%2053.148%2072.5045%2053.22%2072.7205%2053.364C72.9365%2053.508%2073.1765%2053.748%2073.4405%2054.084L79.1465%2061.212H78.6425V54.696C78.6425%2054.192%2078.7685%2053.808%2079.0205%2053.544C79.2845%2053.28%2079.6685%2053.148%2080.1725%2053.148C80.6765%2053.148%2081.0545%2053.28%2081.3065%2053.544C81.5705%2053.808%2081.7025%2054.192%2081.7025%2054.696V64.668C81.7025%2065.124%2081.5825%2065.49%2081.3425%2065.766C81.1025%2066.03%2080.7785%2066.162%2080.3705%2066.162C79.9625%2066.162%2079.6385%2066.09%2079.3985%2065.946C79.1705%2065.79%2078.9245%2065.55%2078.6605%2065.226L72.9545%2058.08H73.4585V64.596C73.4585%2065.112%2073.3265%2065.502%2073.0625%2065.766C72.8105%2066.03%2072.4325%2066.162%2071.9285%2066.162Z'%20fill='%23606060'/%3e%3cpath%20d='M22.5%2043.5C22.5%2042.6716%2023.1716%2042%2024%2042H96C96.8284%2042%2097.5%2042.6716%2097.5%2043.5C97.5%2044.3284%2096.8284%2045%2096%2045H24C23.1716%2045%2022.5%2044.3284%2022.5%2043.5Z'%20fill='%23606060'/%3e%3cpath%20d='M22.5%2076.5C22.5%2075.6716%2023.1716%2075%2024%2075H96C96.8284%2075%2097.5%2075.6716%2097.5%2076.5C97.5%2077.3284%2096.8284%2078%2096%2078H24C23.1716%2078%2022.5%2077.3284%2022.5%2076.5Z'%20fill='%23606060'/%3e%3c/svg%3e";
class b extends U {
  // Feature ID Constants (eLiterals)
  static ICON_NAME = 4;
  // Private fields
  _iconName;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return o.Literals.ICON_CLICK_PAYLOAD;
  }
  // Getters and Setters
  get iconName() {
    return this._iconName;
  }
  set iconName(e) {
    const t = this._iconName;
    this._iconName = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(b.ICON_NAME),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => b.ICON_NAME,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case b.ICON_NAME:
        return this.iconName;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case b.ICON_NAME:
        this.iconName = t, super.eSet(e, t);
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
      case b.ICON_NAME:
        return this._iconName !== void 0;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case b.ICON_NAME:
        this._iconName = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
}
class w extends U {
  // Feature ID Constants (eLiterals)
  static ICON_NAME = 4;
  // Private fields
  _iconName;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return o.Literals.ICON_RIGHT_CLICK_PAYLOAD;
  }
  // Getters and Setters
  get iconName() {
    return this._iconName;
  }
  set iconName(e) {
    const t = this._iconName;
    this._iconName = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(w.ICON_NAME),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => w.ICON_NAME,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case w.ICON_NAME:
        return this.iconName;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case w.ICON_NAME:
        this.iconName = t, super.eSet(e, t);
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
      case w.ICON_NAME:
        return this._iconName !== void 0;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case w.ICON_NAME:
        this._iconName = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
}
class W extends ge {
  // Lazy singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new W()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(o.eINSTANCE);
  }
  /**
   * Create a new IconSettings instance
   */
  createIconSettings() {
    return new a();
  }
  /**
   * Create a new IconClickPayload instance
   */
  createIconClickPayload() {
    return new b();
  }
  /**
   * Create a new IconRightClickPayload instance
   */
  createIconRightClickPayload() {
    return new w();
  }
  /**
   * Create an instance of the given class
   */
  create(e) {
    switch (e.getName()) {
      case "IconSettings":
        return this.createIconSettings();
      case "IconClickPayload":
        return this.createIconClickPayload();
      case "IconRightClickPayload":
        return this.createIconRightClickPayload();
      default:
        throw new Error(`Unknown class: ${e.getName()}`);
    }
  }
}
function R(l) {
  const e = $.INSTANCE.getEPackage(l);
  if (!e)
    throw new Error(`EPackage '${l}' is not registered. Access the eINSTANCE of that model's generated package (or register it via EPackageRegistry.INSTANCE.registerPackage) before initializing IconSettingsPackage.`);
  return e;
}
class o extends fe {
  static eNAME = "IconSettings";
  static eNS_URI = "http://org.eclipse.daanse.board.app.ui.vue.widget.icon";
  static eNS_PREFIX = "IconSettings";
  // Singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new o(), this._instance.init()), this._instance;
  }
  /**
   * Literals for quick access to metaclasses and features
   */
  static Literals = {
    ICON_SETTINGS: null,
    ICON_SETTINGS__ICON_COLOR: null,
    ICON_SETTINGS__ICON_SIZE: null,
    ICON_SETTINGS__IS_ICON_FILLED: null,
    ICON_SETTINGS__STROKE_WEIGHT: null,
    ICON_SETTINGS__OPTIC_SIZE: null,
    ICON_SETTINGS__GRADE: null,
    ICON_SETTINGS__CURRENT_ICON: null,
    ICON_CLICK_PAYLOAD: null,
    ICON_CLICK_PAYLOAD__ICON_NAME: null,
    ICON_RIGHT_CLICK_PAYLOAD: null,
    ICON_RIGHT_CLICK_PAYLOAD__ICON_NAME: null
  };
  constructor() {
    super(), this.setName(o.eNAME), this.setNsURI(o.eNS_URI), this.setNsPrefix(o.eNS_PREFIX);
  }
  /**
   * Initialize package contents
   */
  init() {
    $.INSTANCE.set(o.eNS_URI, this), this.setEFactoryInstance(W.eINSTANCE);
    const e = new F();
    e.setName("IconSettings"), e.setAbstract(!1), e.setInterface(!1), this.getEClassifiers().push(e), e.setEPackage(this), o.Literals.ICON_SETTINGS = e;
    const t = new be();
    t.setContainment(!1), t.setName("iconColor"), t.setLowerBound(0), t.setUpperBound(1), e.getEStructuralFeatures().push(t), o.Literals.ICON_SETTINGS__ICON_COLOR = t;
    const s = new y();
    s.setName("iconSize"), s.setLowerBound(0), s.setUpperBound(1), e.getEStructuralFeatures().push(s), o.Literals.ICON_SETTINGS__ICON_SIZE = s;
    const _ = new y();
    _.setName("isIconFilled"), _.setLowerBound(0), _.setUpperBound(1), e.getEStructuralFeatures().push(_), o.Literals.ICON_SETTINGS__IS_ICON_FILLED = _;
    const d = new y();
    d.setName("strokeWeight"), d.setLowerBound(0), d.setUpperBound(1), e.getEStructuralFeatures().push(d), o.Literals.ICON_SETTINGS__STROKE_WEIGHT = d;
    const c = new y();
    c.setName("opticSize"), c.setLowerBound(0), c.setUpperBound(1), e.getEStructuralFeatures().push(c), o.Literals.ICON_SETTINGS__OPTIC_SIZE = c;
    const p = new y();
    p.setName("grade"), p.setLowerBound(0), p.setUpperBound(1), e.getEStructuralFeatures().push(p), o.Literals.ICON_SETTINGS__GRADE = p;
    const f = new y();
    f.setName("currentIcon"), f.setLowerBound(0), f.setUpperBound(1), e.getEStructuralFeatures().push(f), o.Literals.ICON_SETTINGS__CURRENT_ICON = f;
    const m = new F();
    m.setName("IconClickPayload"), m.setAbstract(!1), m.setInterface(!1), this.getEClassifiers().push(m), m.setEPackage(this), o.Literals.ICON_CLICK_PAYLOAD = m;
    const u = new y();
    u.setName("iconName"), u.setLowerBound(0), u.setUpperBound(1), m.getEStructuralFeatures().push(u), o.Literals.ICON_CLICK_PAYLOAD__ICON_NAME = u;
    const h = new F();
    h.setName("IconRightClickPayload"), h.setAbstract(!1), h.setInterface(!1), this.getEClassifiers().push(h), h.setEPackage(this), o.Literals.ICON_RIGHT_CLICK_PAYLOAD = h;
    const r = new y();
    r.setName("iconName"), r.setLowerBound(0), r.setUpperBound(1), h.getEStructuralFeatures().push(r), o.Literals.ICON_RIGHT_CLICK_PAYLOAD__ICON_NAME = r, o.Literals.ICON_CLICK_PAYLOAD.getESuperTypes().push(R("http://org.eclipse.daanse.board.app.lib.events").getEClassifier("Payload")), o.Literals.ICON_RIGHT_CLICK_PAYLOAD.getESuperTypes().push(R("http://org.eclipse.daanse.board.app.lib.events").getEClassifier("Payload")), o.Literals.ICON_SETTINGS__ICON_COLOR.setEType(R("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), o.Literals.ICON_SETTINGS__ICON_SIZE.setEType(v().getEClassifier("EInt")), o.Literals.ICON_SETTINGS__IS_ICON_FILLED.setEType(v().getEClassifier("EBoolean")), o.Literals.ICON_SETTINGS__STROKE_WEIGHT.setEType(v().getEClassifier("EInt")), o.Literals.ICON_SETTINGS__OPTIC_SIZE.setEType(v().getEClassifier("EInt")), o.Literals.ICON_SETTINGS__GRADE.setEType(v().getEClassifier("EInt")), o.Literals.ICON_SETTINGS__CURRENT_ICON.setEType(v().getEClassifier("EString")), o.Literals.ICON_CLICK_PAYLOAD__ICON_NAME.setEType(v().getEClassifier("EString")), o.Literals.ICON_RIGHT_CLICK_PAYLOAD__ICON_NAME.setEType(v().getEClassifier("EString"));
  }
}
class a extends we {
  // Feature ID Constants (eLiterals)
  static ICON_COLOR = 0;
  static ICON_SIZE = 1;
  static IS_ICON_FILLED = 2;
  static STROKE_WEIGHT = 3;
  static OPTIC_SIZE = 4;
  static GRADE = 5;
  static CURRENT_ICON = 6;
  // Private fields
  _iconColor = new I();
  _iconSize;
  _isIconFilled;
  _strokeWeight;
  _opticSize;
  _grade;
  _currentIcon;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return o.Literals.ICON_SETTINGS;
  }
  // Getters and Setters
  get iconColor() {
    return this._iconColor;
  }
  set iconColor(e) {
    const t = this._iconColor;
    this._iconColor = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(a.ICON_COLOR),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => a.ICON_COLOR,
      merge: () => !1
    });
  }
  get iconSize() {
    return this._iconSize;
  }
  set iconSize(e) {
    const t = this._iconSize;
    this._iconSize = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(a.ICON_SIZE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => a.ICON_SIZE,
      merge: () => !1
    });
  }
  get isIconFilled() {
    return this._isIconFilled;
  }
  set isIconFilled(e) {
    const t = this._isIconFilled;
    this._isIconFilled = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(a.IS_ICON_FILLED),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => a.IS_ICON_FILLED,
      merge: () => !1
    });
  }
  get strokeWeight() {
    return this._strokeWeight;
  }
  set strokeWeight(e) {
    const t = this._strokeWeight;
    this._strokeWeight = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(a.STROKE_WEIGHT),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => a.STROKE_WEIGHT,
      merge: () => !1
    });
  }
  get opticSize() {
    return this._opticSize;
  }
  set opticSize(e) {
    const t = this._opticSize;
    this._opticSize = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(a.OPTIC_SIZE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => a.OPTIC_SIZE,
      merge: () => !1
    });
  }
  get grade() {
    return this._grade;
  }
  set grade(e) {
    const t = this._grade;
    this._grade = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(a.GRADE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => a.GRADE,
      merge: () => !1
    });
  }
  get currentIcon() {
    return this._currentIcon;
  }
  set currentIcon(e) {
    const t = this._currentIcon;
    this._currentIcon = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(a.CURRENT_ICON),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => a.CURRENT_ICON,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case a.ICON_COLOR:
        return this.iconColor;
      case a.ICON_SIZE:
        return this.iconSize;
      case a.IS_ICON_FILLED:
        return this.isIconFilled;
      case a.STROKE_WEIGHT:
        return this.strokeWeight;
      case a.OPTIC_SIZE:
        return this.opticSize;
      case a.GRADE:
        return this.grade;
      case a.CURRENT_ICON:
        return this.currentIcon;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case a.ICON_COLOR:
        this.iconColor = t, super.eSet(e, t);
        break;
      case a.ICON_SIZE:
        this.iconSize = t, super.eSet(e, t);
        break;
      case a.IS_ICON_FILLED:
        this.isIconFilled = t, super.eSet(e, t);
        break;
      case a.STROKE_WEIGHT:
        this.strokeWeight = t, super.eSet(e, t);
        break;
      case a.OPTIC_SIZE:
        this.opticSize = t, super.eSet(e, t);
        break;
      case a.GRADE:
        this.grade = t, super.eSet(e, t);
        break;
      case a.CURRENT_ICON:
        this.currentIcon = t, super.eSet(e, t);
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
      case a.ICON_COLOR:
        return this._iconColor !== new I();
      case a.ICON_SIZE:
        return this._iconSize !== void 0;
      case a.IS_ICON_FILLED:
        return this._isIconFilled !== void 0;
      case a.STROKE_WEIGHT:
        return this._strokeWeight !== void 0;
      case a.OPTIC_SIZE:
        return this._opticSize !== void 0;
      case a.GRADE:
        return this._grade !== void 0;
      case a.CURRENT_ICON:
        return this._currentIcon !== void 0;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case a.ICON_COLOR:
        this._iconColor = new I();
        return;
      case a.ICON_SIZE:
        this._iconSize = void 0;
        return;
      case a.IS_ICON_FILLED:
        this._isIconFilled = void 0;
        return;
      case a.STROKE_WEIGHT:
        this._strokeWeight = void 0;
        return;
      case a.OPTIC_SIZE:
        this._opticSize = void 0;
        return;
      case a.GRADE:
        this._grade = void 0;
        return;
      case a.CURRENT_ICON:
        this._currentIcon = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
}
const Ie = /* @__PURE__ */ B({
  __name: "IconWidget",
  props: /* @__PURE__ */ se({
    id: {}
  }, {
    configv: { required: !0 },
    configvModifiers: {}
  }),
  emits: ["update:configv"],
  setup(l) {
    ne((r) => ({
      d221fe60: A(u) + "px",
      v9c7b78b2: A(m)
    }));
    const e = l, { id: t } = le(e), { wrapParameters: s } = he(), _ = Z(l, "configv"), d = new a(), c = H(ye.TINY_EMITTER);
    K(() => {
      if (_.value) {
        Object.assign(_.value, { ...d, ..._.value });
        const r = _.value.iconColor;
        if (!(r instanceof I))
          if (typeof r == "object" && r !== null && "value" in r) {
            const i = r, E = new I(i.value);
            i.variable && (E.variable = i.variable), _.value.iconColor = E;
          } else
            _.value.iconColor = new I(
              typeof r == "string" && r ? r : "var(--color-fg)"
            );
      }
    });
    const p = () => {
      if (!t.value) return;
      const r = {
        iconName: _.value?.currentIcon || "",
        widgetId: t.value,
        timestamp: Date.now()
      };
      console.log("🖱️ Icon Widget: Emitting click event", r), c.emit("widget:IconWidget:click", {
        type: "widget:IconWidget:click",
        widgetId: t.value,
        payload: r
      });
    }, f = () => {
      if (!t.value) return;
      const r = {
        iconName: _.value?.currentIcon || "",
        widgetId: t.value,
        timestamp: Date.now()
      };
      console.log("🖱️ Icon Widget: Emitting right-click event", r), c.emit("widget:IconWidget:right_click", {
        type: "widget:IconWidget:right_click",
        widgetId: t.value,
        payload: r
      });
    }, {
      iconColor: m,
      iconSize: u
    } = s({
      iconColor: k(() => _.value.iconColor?.value || "var(--color-fg)"),
      iconSize: k(() => _.value.iconSize)
    }), h = k(() => {
      if (_.value)
        return `
        font-variation-settings:
            'FILL' ${_.value.isIconFilled ? 1 : 0},
            'wght' ${_.value.strokeWeight},
            'GRAD' ${_.value.grade},
            'opsz' ${_.value.opticSize};
        `;
    });
    return (r, i) => (T(), O(G, null, [
      i[0] || (i[0] = C("link", {
        href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200",
        rel: "stylesheet"
      }, null, -1)),
      C("div", {
        class: "icon",
        onClick: p,
        onContextmenu: ce(f, ["prevent"]),
        style: { cursor: "pointer" }
      }, [
        C("span", de(r.$attrs, {
          style: h.value,
          class: "material-symbols-outlined"
        }), Y(_.value.currentIcon), 17)
      ], 32)
    ], 64));
  }
}), X = (l, e) => {
  const t = l.__vccOpts || l;
  for (const [s, _] of e)
    t[s] = _;
  return t;
}, M = /* @__PURE__ */ X(Ie, [["__scopeId", "data-v-68eea9d7"]]), Ne = /* @__PURE__ */ JSON.parse('["10k","10mp","11mp","123","12mp","13mp","14mp","15mp","16mp","17mp","18_up_rating","18mp","19mp","1k","1k_plus","1x_mobiledata","1x_mobiledata_badge","20mp","21mp","22mp","23mp","24mp","2d","2k","2k_plus","2mp","30fps","30fps_select","360","3d_rotation","3g_mobiledata","3g_mobiledata_badge","3k","3k_plus","3mp","3p","4g_mobiledata","4g_mobiledata_badge","4g_plus_mobiledata","4k","4k_plus","4mp","50mp","5g","5g_mobiledata_badge","5k","5k_plus","5mp","60fps","60fps_select","6_ft_apart","6k","6k_plus","6mp","7k","7k_plus","7mp","8k","8k_plus","8mp","9k","9k_plus","9mp","abc","ac_unit","access_alarm","access_alarms","access_time","access_time_filled","accessibility","accessibility_new","accessible","accessible_forward","account_balance","account_balance_wallet","account_box","account_child","account_child_invert","account_circle","account_circle_off","account_tree","action_key","activity_zone","acute","ad","ad_group","ad_group_off","ad_off","ad_units","adb","add","add_a_photo","add_ad","add_alarm","add_alert","add_box","add_business","add_call","add_card","add_chart","add_circle","add_circle_outline","add_comment","add_home","add_home_work","add_ic_call","add_link","add_location","add_location_alt","add_moderator","add_notes","add_photo_alternate","add_reaction","add_road","add_shopping_cart","add_task","add_to_drive","add_to_home_screen","add_to_photos","add_to_queue","addchart","adf_scanner","adjust","admin_meds","admin_panel_settings","ads_click","agender","agriculture","air","air_freshener","air_purifier","air_purifier_gen","airline_seat_flat","airline_seat_flat_angled","airline_seat_individual_suite","airline_seat_legroom_extra","airline_seat_legroom_normal","airline_seat_legroom_reduced","airline_seat_recline_extra","airline_seat_recline_normal","airline_stops","airlines","airplane_ticket","airplanemode_active","airplanemode_inactive","airplay","airport_shuttle","airware","airwave","alarm","alarm_add","alarm_off","alarm_on","alarm_smart_wake","album","align_center","align_end","align_flex_center","align_flex_end","align_flex_start","align_horizontal_center","align_horizontal_left","align_horizontal_right","align_items_stretch","align_justify_center","align_justify_flex_end","align_justify_flex_start","align_justify_space_around","align_justify_space_between","align_justify_space_even","align_justify_stretch","align_self_stretch","align_space_around","align_space_between","align_space_even","align_start","align_stretch","align_vertical_bottom","align_vertical_center","align_vertical_top","all_inbox","all_inclusive","all_match","all_out","allergies","allergy","alt_route","alternate_email","altitude","ambulance","amend","amp_stories","analytics","anchor","android","animation","announcement","aod","aod_tablet","aod_watch","apartment","api","apk_document","apk_install","app_badging","app_blocking","app_promo","app_registration","app_settings_alt","app_shortcut","apparel","approval","approval_delegation","apps","apps_outage","aq","aq_indoor","ar_on_you","ar_stickers","architecture","archive","area_chart","arming_countdown","arrow_and_edge","arrow_back","arrow_back_ios","arrow_back_ios_new","arrow_circle_down","arrow_circle_left","arrow_circle_right","arrow_circle_up","arrow_downward","arrow_downward_alt","arrow_drop_down","arrow_drop_down_circle","arrow_drop_up","arrow_forward","arrow_forward_ios","arrow_insert","arrow_left","arrow_left_alt","arrow_or_edge","arrow_outward","arrow_range","arrow_right","arrow_right_alt","arrow_selector_tool","arrow_split","arrow_top_left","arrow_top_right","arrow_upward","arrow_upward_alt","arrows_more_down","arrows_more_up","arrows_outward","art_track","article","article_shortcut","artist","aspect_ratio","assessment","assignment","assignment_add","assignment_ind","assignment_late","assignment_return","assignment_returned","assignment_turned_in","assist_walker","assistant","assistant_device","assistant_direction","assistant_navigation","assistant_on_hub","assistant_photo","assured_workload","asterisk","atm","atr","attach_email","attach_file","attach_file_add","attach_file_off","attach_money","attachment","attractions","attribution","audio_description","audio_file","audio_video_receiver","audiotrack","auto_awesome","auto_awesome_mosaic","auto_awesome_motion","auto_delete","auto_fix_high","auto_fix_normal","auto_fix_off","auto_graph","auto_mode","auto_read_pause","auto_read_play","auto_stories","auto_towing","auto_transmission","autofps_select","autopause","autoplay","autorenew","autostop","av_timer","avg_pace","avg_time","award_star","azm","baby_changing_station","back_hand","back_to_tab","background_dot_large","background_dot_small","background_grid_small","background_replace","backlight_high","backlight_high_off","backlight_low","backpack","backspace","backup","backup_table","badge","badge_critical_battery","bakery_dining","balance","balcony","ballot","bar_chart","bar_chart_4_bars","barcode","barcode_reader","barcode_scanner","barefoot","batch_prediction","bath_outdoor","bath_private","bath_public_large","bathroom","bathtub","battery_0_bar","battery_1_bar","battery_20","battery_2_bar","battery_30","battery_3_bar","battery_4_bar","battery_50","battery_5_bar","battery_60","battery_6_bar","battery_80","battery_90","battery_alert","battery_change","battery_charging_20","battery_charging_30","battery_charging_50","battery_charging_60","battery_charging_80","battery_charging_90","battery_charging_full","battery_error","battery_full","battery_full_alt","battery_horiz_000","battery_horiz_050","battery_horiz_075","battery_low","battery_plus","battery_profile","battery_saver","battery_share","battery_status_good","battery_std","battery_unknown","battery_very_low","beach_access","bed","bedroom_baby","bedroom_child","bedroom_parent","bedtime","bedtime_off","beenhere","bento","bia","bid_landscape","bid_landscape_disabled","bigtop_updates","bike_scooter","biotech","blanket","blender","blind","blinds","blinds_closed","block","block_flipped","blood_pressure","bloodtype","bluetooth","bluetooth_audio","bluetooth_connected","bluetooth_disabled","bluetooth_drive","bluetooth_searching","blur_circular","blur_linear","blur_medium","blur_off","blur_on","blur_short","body_fat","body_system","bolt","bomb","book","book_2","book_3","book_4","book_5","book_online","bookmark","bookmark_add","bookmark_added","bookmark_border","bookmark_manager","bookmark_remove","bookmarks","border_all","border_bottom","border_clear","border_color","border_horizontal","border_inner","border_left","border_outer","border_right","border_style","border_top","border_vertical","bottom_app_bar","bottom_drawer","bottom_navigation","bottom_panel_close","bottom_panel_open","bottom_right_click","bottom_sheets","box","box_add","box_edit","boy","brand_awareness","brand_family","branding_watermark","breakfast_dining","breaking_news","breaking_news_alt_1","breastfeeding","brightness_1","brightness_2","brightness_3","brightness_4","brightness_5","brightness_6","brightness_7","brightness_alert","brightness_auto","brightness_empty","brightness_high","brightness_low","brightness_medium","bring_your_own_ip","broadcast_on_home","broadcast_on_personal","broken_image","browse","browse_activity","browse_gallery","browser_not_supported","browser_updated","brunch_dining","brush","bubble","bubble_chart","bubbles","bug_report","build","build_circle","bungalow","burst_mode","bus_alert","business","business_center","business_chip","business_messages","buttons_alt","cabin","cable","cached","cake","cake_add","calculate","calendar_add_on","calendar_apps_script","calendar_clock","calendar_month","calendar_today","calendar_view_day","calendar_view_month","calendar_view_week","call","call_end","call_log","call_made","call_merge","call_missed","call_missed_outgoing","call_quality","call_received","call_split","call_to_action","camera","camera_alt","camera_enhance","camera_front","camera_indoor","camera_outdoor","camera_rear","camera_roll","camera_video","cameraswitch","campaign","camping","cancel","cancel_presentation","cancel_schedule_send","candle","candlestick_chart","captive_portal","capture","car_crash","car_rental","car_repair","car_tag","card_giftcard","card_membership","card_travel","cardiology","cards","carpenter","carry_on_bag","carry_on_bag_checked","carry_on_bag_inactive","carry_on_bag_question","cases","casino","cast","cast_connected","cast_for_education","cast_pause","cast_warning","castle","catching_pokemon","category","celebration","cell_merge","cell_tower","cell_wifi","center_focus_strong","center_focus_weak","chair","chair_alt","chalet","change_circle","change_history","charger","charging_station","chart_data","chat","chat_add_on","chat_apps_script","chat_bubble","chat_bubble_outline","chat_error","chat_info","chat_paste_go","check","check_box","check_box_outline_blank","check_circle","check_circle_outline","check_in_out","check_indeterminate_small","check_small","checkbook","checked_bag","checked_bag_question","checklist","checklist_rtl","checkroom","cheer","chess","chevron_left","chevron_right","child_care","child_friendly","chip_extraction","chips","chrome_reader_mode","chromecast_2","chromecast_device","chronic","church","cinematic_blur","circle","circle_notifications","circles","circles_ext","clarify","class","clean_hands","cleaning","cleaning_bucket","cleaning_services","clear","clear_all","clear_day","clear_night","climate_mini_split","clinical_notes","clock_loader_10","clock_loader_20","clock_loader_40","clock_loader_60","clock_loader_80","clock_loader_90","close","close_fullscreen","close_small","closed_caption","closed_caption_disabled","closed_caption_off","cloud","cloud_circle","cloud_done","cloud_download","cloud_off","cloud_queue","cloud_sync","cloud_upload","cloudy_snowing","co2","co_present","code","code_blocks","code_off","coffee","coffee_maker","cognition","collapse_all","collapse_content","collections","collections_bookmark","color_lens","colorize","colors","comedy_mask","comic_bubble","comment","comment_bank","comments_disabled","commit","communication","communities","commute","compare","compare_arrows","compass_calibration","component_exchange","compost","compress","computer","concierge","conditions","confirmation_number","congenital","connect_without_contact","connected_tv","connecting_airports","construction","contact_emergency","contact_mail","contact_page","contact_phone","contact_support","contactless","contactless_off","contacts","contacts_product","content_copy","content_cut","content_paste","content_paste_go","content_paste_off","content_paste_search","contract","contract_delete","contract_edit","contrast","contrast_rtl_off","control_camera","control_point","control_point_duplicate","controller_gen","conversion_path","conversion_path_off","conveyor_belt","cookie","cookie_off","cooking","cool_to_dry","copy_all","copyright","coronavirus","corporate_fare","cottage","counter_0","counter_1","counter_2","counter_3","counter_4","counter_5","counter_6","counter_7","counter_8","counter_9","countertops","create","create_new_folder","credit_card","credit_card_gear","credit_card_heart","credit_card_off","credit_score","crib","crisis_alert","crop","crop_16_9","crop_3_2","crop_5_4","crop_7_5","crop_9_16","crop_din","crop_free","crop_landscape","crop_original","crop_portrait","crop_rotate","crop_square","crossword","crowdsource","cruelty_free","css","csv","currency_bitcoin","currency_exchange","currency_franc","currency_lira","currency_pound","currency_ruble","currency_rupee","currency_yen","currency_yuan","curtains","curtains_closed","custom_typography","cut","cycle","cyclone","dangerous","dark_mode","dashboard","dashboard_customize","data_alert","data_array","data_check","data_exploration","data_info_alert","data_loss_prevention","data_object","data_saver_off","data_saver_on","data_table","data_thresholding","data_usage","database","dataset","dataset_linked","date_range","deblur","deceased","decimal_decrease","decimal_increase","deck","dehaze","delete","delete_forever","delete_history","delete_outline","delete_sweep","delivery_dining","demography","density_large","density_medium","density_small","dentistry","departure_board","deployed_code","deployed_code_account","deployed_code_alert","deployed_code_history","deployed_code_update","dermatology","description","deselect","design_services","desk","deskphone","desktop_access_disabled","desktop_mac","desktop_windows","destruction","details","detection_and_zone","detector","detector_alarm","detector_battery","detector_co","detector_offline","detector_smoke","detector_status","developer_board","developer_board_off","developer_guide","developer_mode","developer_mode_tv","device_hub","device_reset","device_thermostat","device_unknown","devices","devices_fold","devices_off","devices_other","devices_wearables","dew_point","diagnosis","dialer_sip","dialogs","dialpad","diamond","dictionary","difference","digital_out_of_home","digital_wellbeing","dining","dinner_dining","directions","directions_alt","directions_alt_off","directions_bike","directions_boat","directions_boat_filled","directions_bus","directions_bus_filled","directions_car","directions_car_filled","directions_off","directions_railway","directions_railway_filled","directions_run","directions_subway","directions_subway_filled","directions_transit","directions_transit_filled","directions_walk","directory_sync","dirty_lens","disabled_by_default","disabled_visible","disc_full","discount","discover_tune","dishwasher","dishwasher_gen","display_external_input","display_settings","distance","diversity_1","diversity_2","diversity_3","diversity_4","dns","do_disturb","do_disturb_alt","do_disturb_off","do_disturb_on","do_not_disturb","do_not_disturb_alt","do_not_disturb_off","do_not_disturb_on","do_not_disturb_on_total_silence","do_not_step","do_not_touch","dock","dock_to_bottom","dock_to_left","dock_to_right","docs_add_on","docs_apps_script","document_scanner","domain","domain_add","domain_disabled","domain_verification","domain_verification_off","domino_mask","done","done_all","done_outline","donut_large","donut_small","door_back","door_front","door_open","door_sensor","door_sliding","doorbell","doorbell_3p","doorbell_chime","double_arrow","downhill_skiing","download","download_2","download_done","download_for_offline","downloading","draft","draft_orders","drafts","drag_click","drag_handle","drag_indicator","drag_pan","draw","draw_abstract","draw_collage","dresser","drive_eta","drive_file_move","drive_file_move_outline","drive_file_move_rtl","drive_file_rename_outline","drive_folder_upload","dropdown","dry","dry_cleaning","dual_screen","duo","dvr","dynamic_feed","dynamic_form","e911_avatar","e911_emergency","e_mobiledata","e_mobiledata_badge","earbuds","earbuds_battery","early_on","earthquake","east","ecg","ecg_heart","eco","eda","edgesensor_high","edgesensor_low","edit","edit_attributes","edit_calendar","edit_document","edit_location","edit_location_alt","edit_note","edit_notifications","edit_off","edit_road","edit_square","editor_choice","egg","egg_alt","eject","elderly","elderly_woman","electric_bike","electric_bolt","electric_car","electric_meter","electric_moped","electric_rickshaw","electric_scooter","electrical_services","elevation","elevator","email","emergency","emergency_heat","emergency_heat_2","emergency_home","emergency_recording","emergency_share","emergency_share_off","emoji_emotions","emoji_events","emoji_flags","emoji_food_beverage","emoji_nature","emoji_objects","emoji_people","emoji_symbols","emoji_transportation","emoticon","empty_dashboard","enable","encrypted","endocrinology","energy","energy_program_saving","energy_program_time_used","energy_savings_leaf","engineering","enhanced_encryption","ent","enterprise","enterprise_off","equal","equalizer","error","error_med","error_outline","escalator","escalator_warning","euro","euro_symbol","ev_charger","ev_mobiledata_badge","ev_shadow","ev_shadow_add","ev_shadow_minus","ev_station","event","event_available","event_busy","event_list","event_note","event_repeat","event_seat","event_upcoming","exclamation","exercise","exit_to_app","expand","expand_all","expand_circle_down","expand_circle_right","expand_circle_up","expand_content","expand_less","expand_more","experiment","explicit","explore","explore_nearby","explore_off","explosion","export_notes","exposure","exposure_neg_1","exposure_neg_2","exposure_plus_1","exposure_plus_2","exposure_zero","extension","extension_off","eyeglasses","face","face_2","face_3","face_4","face_5","face_6","face_retouching_natural","face_retouching_off","face_unlock","fact_check","factory","falling","familiar_face_and_zone","family_history","family_home","family_link","family_restroom","family_star","farsight_digital","fast_forward","fast_rewind","fastfood","faucet","favorite","favorite_border","fax","feature_search","featured_play_list","featured_seasonal_and_gifts","featured_video","feed","feedback","female","femur","femur_alt","fence","fertile","festival","fiber_dvr","fiber_manual_record","fiber_new","fiber_pin","fiber_smart_record","file_copy","file_copy_off","file_download","file_download_done","file_download_off","file_map","file_open","file_present","file_save","file_save_off","file_upload","file_upload_off","filter","filter_1","filter_2","filter_3","filter_4","filter_5","filter_6","filter_7","filter_8","filter_9","filter_9_plus","filter_alt","filter_alt_off","filter_b_and_w","filter_center_focus","filter_drama","filter_frames","filter_hdr","filter_list","filter_list_alt","filter_list_off","filter_none","filter_retrolux","filter_tilt_shift","filter_vintage","finance","finance_chip","finance_mode","find_in_page","find_replace","fingerprint","fire_extinguisher","fire_hydrant","fire_hydrant_alt","fire_truck","fireplace","first_page","fit_page","fit_screen","fit_width","fitbit","fitness_center","flag","flag_circle","flaky","flare","flash_auto","flash_off","flash_on","flashlight_off","flashlight_on","flatware","flex_direction","flex_no_wrap","flex_wrap","flight","flight_class","flight_land","flight_takeoff","flights_and_hotels","flightsmode","flip","flip_camera_android","flip_camera_ios","flip_to_back","flip_to_front","flood","floor","floor_lamp","flowsheet","fluid","fluid_balance","fluid_med","fluorescent","flutter","flutter_dash","fmd_bad","fmd_good","foggy","folded_hands","folder","folder_copy","folder_data","folder_delete","folder_limited","folder_managed","folder_off","folder_open","folder_shared","folder_special","folder_supervised","folder_zip","follow_the_signs","font_download","font_download_off","food_bank","foot_bones","footprint","for_you","forest","fork_left","fork_right","forklift","format_align_center","format_align_justify","format_align_left","format_align_right","format_bold","format_clear","format_color_fill","format_color_reset","format_color_text","format_h1","format_h2","format_h3","format_h4","format_h5","format_h6","format_image_left","format_image_right","format_indent_decrease","format_indent_increase","format_ink_highlighter","format_italic","format_letter_spacing","format_letter_spacing_2","format_letter_spacing_standard","format_letter_spacing_wide","format_letter_spacing_wider","format_line_spacing","format_list_bulleted","format_list_bulleted_add","format_list_numbered","format_list_numbered_rtl","format_overline","format_paint","format_paragraph","format_quote","format_shapes","format_size","format_strikethrough","format_text_clip","format_text_overflow","format_text_wrap","format_textdirection_l_to_r","format_textdirection_r_to_l","format_underlined","format_underlined_squiggle","forms_add_on","forms_apps_script","fort","forum","forward","forward_10","forward_30","forward_5","forward_circle","forward_media","forward_to_inbox","foundation","frame_inspect","frame_person","frame_person_off","frame_reload","frame_source","free_breakfast","free_cancellation","front_hand","front_loader","full_coverage","full_hd","full_stacked_bar_chart","fullscreen","fullscreen_exit","function","functions","g_mobiledata","g_mobiledata_badge","g_translate","gallery_thumbnail","gamepad","games","garage","garage_door","garage_home","garden_cart","gas_meter","gastroenterology","gate","gavel","general_device","generating_tokens","genetics","genres","gesture","gesture_select","get_app","gif","gif_box","girl","gite","glass_cup","globe","globe_asia","globe_uk","glucose","glyphs","go_to_line","golf_course","google_home_devices","google_tv_remote","google_wifi","gpp_bad","gpp_good","gpp_maybe","gps_fixed","gps_not_fixed","gps_off","grade","gradient","grading","grain","graphic_eq","grass","grid_3x3","grid_3x3_off","grid_4x4","grid_goldenratio","grid_guides","grid_off","grid_on","grid_view","grocery","group","group_add","group_off","group_remove","group_work","grouped_bar_chart","groups","groups_2","groups_3","gynecology","h_mobiledata","h_mobiledata_badge","h_plus_mobiledata","h_plus_mobiledata_badge","hail","hallway","hand_bones","hand_gesture","handshake","handyman","hangout_video","hangout_video_off","hard_drive","hard_drive_2","hardware","hd","hdr_auto","hdr_auto_select","hdr_enhanced_select","hdr_off","hdr_off_select","hdr_on","hdr_on_select","hdr_plus","hdr_plus_off","hdr_strong","hdr_weak","headphones","headphones_battery","headset","headset_mic","headset_off","healing","health_and_beauty","health_and_safety","health_metrics","heap_snapshot_large","heap_snapshot_multiple","heap_snapshot_thumbnail","hearing","hearing_disabled","heart_broken","heart_check","heart_minus","heart_plus","heat","heat_pump","heat_pump_balance","height","helicopter","help","help_center","help_clinic","help_outline","hematology","hevc","hexagon","hide","hide_image","hide_source","high_density","high_quality","high_res","highlight","highlight_alt","highlight_keyboard_focus","highlight_mouse_cursor","highlight_off","highlight_text_cursor","highlighter_size_1","highlighter_size_2","highlighter_size_3","highlighter_size_4","highlighter_size_5","hiking","history","history_edu","history_off","history_toggle_off","hive","hls","hls_off","holiday_village","home","home_and_garden","home_app_logo","home_filled","home_health","home_improvement_and_tools","home_iot_device","home_max","home_max_dots","home_mini","home_pin","home_repair_service","home_speaker","home_storage","home_work","horizontal_distribute","horizontal_rule","horizontal_split","hot_tub","hotel","hotel_class","hourglass","hourglass_bottom","hourglass_disabled","hourglass_empty","hourglass_full","hourglass_top","house","house_siding","house_with_shield","houseboat","household_supplies","how_to_reg","how_to_vote","hr_resting","html","http","https","hub","humerus","humerus_alt","humidity_high","humidity_indoor","humidity_low","humidity_mid","humidity_percentage","hvac","ice_skating","icecream","ifl","iframe","iframe_off","image","image_aspect_ratio","image_not_supported","image_search","imagesearch_roller","imagesmode","immunology","import_contacts","import_export","important_devices","in_home_mode","inactive_order","inbox","inbox_customize","incomplete_circle","indeterminate_check_box","indeterminate_question_box","info","info_i","info_outline","infrared","ink_eraser","ink_eraser_off","ink_highlighter","ink_highlighter_move","ink_marker","ink_pen","inpatient","input","input_circle","insert_chart","insert_chart_outlined","insert_comment","insert_drive_file","insert_emoticon","insert_invitation","insert_link","insert_page_break","insert_photo","insert_text","insights","install_desktop","install_mobile","instant_mix","integration_instructions","interactive_space","interests","interpreter_mode","inventory","inventory_2","invert_colors","invert_colors_off","ios","ios_share","iron","iso","jamboard_kiosk","javascript","join","join_full","join_inner","join_left","join_right","joystick","jump_to_element","kayaking","kebab_dining","kettle","key","key_off","key_vertical","key_visualizer","keyboard","keyboard_alt","keyboard_arrow_down","keyboard_arrow_left","keyboard_arrow_right","keyboard_arrow_up","keyboard_backspace","keyboard_capslock","keyboard_capslock_badge","keyboard_command_key","keyboard_control_key","keyboard_double_arrow_down","keyboard_double_arrow_left","keyboard_double_arrow_right","keyboard_double_arrow_up","keyboard_external_input","keyboard_full","keyboard_hide","keyboard_keys","keyboard_off","keyboard_onscreen","keyboard_option_key","keyboard_previous_language","keyboard_return","keyboard_tab","keyboard_tab_rtl","keyboard_voice","kid_star","king_bed","kitchen","kitesurfing","lab_panel","lab_profile","lab_research","label","label_important","label_important_outline","label_off","labs","lan","landscape","landslide","language","language_chinese_array","language_chinese_cangjie","language_chinese_dayi","language_chinese_pinyin","language_chinese_quick","language_chinese_wubi","language_french","language_gb_english","language_international","language_japanese_kana","language_korean_latin","language_pinyin","language_spanish","language_us","language_us_colemak","language_us_dvorak","laps","laptop","laptop_chromebook","laptop_mac","laptop_windows","lasso_select","last_page","launch","laundry","layers","layers_clear","lda","leaderboard","leak_add","leak_remove","left_click","left_panel_close","left_panel_open","legend_toggle","lens","lens_blur","letter_switch","library_add","library_add_check","library_books","library_music","license","lift_to_talk","light","light_group","light_mode","light_off","lightbulb","lightbulb_circle","lightbulb_outline","lightning_stand","line_axis","line_curve","line_end","line_end_arrow","line_end_arrow_notch","line_end_circle","line_end_diamond","line_end_square","line_start","line_start_arrow","line_start_arrow_notch","line_start_circle","line_start_diamond","line_start_square","line_style","line_weight","linear_scale","link","link_off","linked_camera","linked_services","liquor","list","list_alt","list_alt_add","lists","live_help","live_tv","living","local_activity","local_airport","local_atm","local_bar","local_cafe","local_car_wash","local_convenience_store","local_dining","local_drink","local_fire_department","local_florist","local_gas_station","local_grocery_store","local_hospital","local_hotel","local_laundry_service","local_library","local_mall","local_movies","local_offer","local_parking","local_pharmacy","local_phone","local_pizza","local_play","local_police","local_post_office","local_printshop","local_see","local_shipping","local_taxi","location_away","location_chip","location_city","location_disabled","location_home","location_off","location_on","location_pin","location_searching","lock","lock_clock","lock_open","lock_open_right","lock_outline","lock_person","lock_reset","login","logo_dev","logout","looks","looks_3","looks_4","looks_5","looks_6","looks_one","looks_two","loop","loupe","low_density","low_priority","loyalty","lte_mobiledata","lte_mobiledata_badge","lte_plus_mobiledata","lte_plus_mobiledata_badge","luggage","lunch_dining","lyrics","macro_auto","macro_off","magnification_large","magnification_small","magnify_docked","magnify_fullscreen","mail","mail_lock","mail_outline","male","man","man_2","man_3","man_4","manage_accounts","manage_history","manage_search","manga","manufacturing","map","maps_home_work","maps_ugc","margin","mark_as_unread","mark_chat_read","mark_chat_unread","mark_email_read","mark_email_unread","mark_unread_chat_alt","markdown","markdown_copy","markdown_paste","markunread","markunread_mailbox","masked_transitions","masks","match_case","match_word","matter","maximize","measuring_tape","media_bluetooth_off","media_bluetooth_on","media_link","media_output","media_output_off","mediation","medical_information","medical_mask","medical_services","medication","medication_liquid","meeting_room","memory","memory_alt","menstrual_health","menu","menu_book","menu_open","merge","merge_type","message","metabolism","mfg_nest_yale_lock","mic","mic_double","mic_external_off","mic_external_on","mic_none","mic_off","microbiology","microwave","microwave_gen","military_tech","mimo","mimo_disconnect","mindfulness","minimize","minor_crash","mintmark","miscellaneous_services","missed_video_call","missing_controller","mist","mitre","mixture_med","mms","mobile_friendly","mobile_off","mobile_screen_share","mobiledata_off","mode","mode_comment","mode_cool","mode_cool_off","mode_dual","mode_edit","mode_edit_outline","mode_fan","mode_fan_off","mode_heat","mode_heat_cool","mode_heat_off","mode_night","mode_of_travel","mode_off_on","mode_standby","model_training","monetization_on","money","money_off","money_off_csred","monitor","monitor_heart","monitor_weight","monitor_weight_gain","monitor_weight_loss","monitoring","monochrome_photos","mood","mood_bad","mop","moped","more","more_down","more_horiz","more_time","more_up","more_vert","mosque","motion_blur","motion_mode","motion_photos_auto","motion_photos_off","motion_photos_on","motion_photos_pause","motion_photos_paused","motion_sensor_active","motion_sensor_alert","motion_sensor_idle","motion_sensor_urgent","motorcycle","mountain_flag","mouse","move","move_down","move_group","move_item","move_location","move_selection_down","move_selection_left","move_selection_right","move_selection_up","move_to_inbox","move_up","moved_location","movie","movie_creation","movie_edit","movie_filter","movie_info","moving","moving_beds","moving_ministry","mp","multicooker","multiline_chart","multiple_stop","museum","music_cast","music_note","music_off","music_video","my_location","mystery","nat","nature","nature_people","navigate_before","navigate_next","navigation","near_me","near_me_disabled","nearby","nearby_error","nearby_off","nephrology","nest_audio","nest_cam_floodlight","nest_cam_indoor","nest_cam_iq","nest_cam_iq_outdoor","nest_cam_magnet_mount","nest_cam_outdoor","nest_cam_stand","nest_cam_wall_mount","nest_cam_wired_stand","nest_clock_farsight_analog","nest_clock_farsight_digital","nest_connect","nest_detect","nest_display","nest_display_max","nest_doorbell_visitor","nest_eco_leaf","nest_farsight_weather","nest_found_savings","nest_gale_wifi","nest_heat_link_e","nest_heat_link_gen_3","nest_hello_doorbell","nest_mini","nest_multi_room","nest_protect","nest_remote","nest_remote_comfort_sensor","nest_secure_alarm","nest_sunblock","nest_tag","nest_thermostat","nest_thermostat_e_eu","nest_thermostat_gen_3","nest_thermostat_sensor","nest_thermostat_sensor_eu","nest_thermostat_zirconium_eu","nest_true_radiant","nest_wake_on_approach","nest_wake_on_press","nest_wifi_point","nest_wifi_pro","nest_wifi_pro_2","nest_wifi_router","network_cell","network_check","network_intelligence_history","network_intelligence_update","network_locked","network_manage","network_node","network_ping","network_wifi","network_wifi_1_bar","network_wifi_1_bar_locked","network_wifi_2_bar","network_wifi_2_bar_locked","network_wifi_3_bar","network_wifi_3_bar_locked","network_wifi_locked","neurology","new_label","new_releases","new_window","news","newsmode","newspaper","newsstand","next_plan","next_week","nfc","night_shelter","night_sight_auto","night_sight_auto_off","night_sight_max","nightlife","nightlight","nightlight_round","nights_stay","no_accounts","no_adult_content","no_backpack","no_cell","no_crash","no_drinks","no_encryption","no_encryption_gmailerrorred","no_flash","no_food","no_luggage","no_meals","no_meals_ouline","no_meeting_room","no_photography","no_sim","no_sound","no_stroller","no_transfer","noise_aware","noise_control_off","noise_control_on","nordic_walking","north","north_east","north_west","not_accessible","not_accessible_forward","not_interested","not_listed_location","not_started","note","note_add","note_alt","note_stack","note_stack_add","notes","notification_add","notification_important","notification_multiple","notifications","notifications_active","notifications_none","notifications_off","notifications_paused","notifications_unread","numbers","nutrition","ods","odt","offline_bolt","offline_pin","offline_share","oil_barrel","on_device_training","on_hub_device","oncology","ondemand_video","online_prediction","onsen","opacity","open_in_browser","open_in_full","open_in_new","open_in_new_down","open_in_new_off","open_in_phone","open_jam","open_with","ophthalmology","oral_disease","order_approve","order_play","orders","orthopedics","other_admission","other_houses","outbound","outbox","outbox_alt","outdoor_garden","outdoor_grill","outgoing_mail","outlet","outlined_flag","outpatient","outpatient_med","output","output_circle","oven","oven_gen","overview","overview_key","oxygen_saturation","p2p","pace","pacemaker","package","package_2","padding","page_control","page_info","pageless","pages","pageview","paid","palette","pallet","pan_tool","pan_tool_alt","pan_zoom","panorama","panorama_fish_eye","panorama_horizontal","panorama_horizontal_select","panorama_photosphere","panorama_photosphere_select","panorama_vertical","panorama_vertical_select","panorama_wide_angle","panorama_wide_angle_select","paragliding","park","partly_cloudy_day","partly_cloudy_night","partner_exchange","partner_reports","party_mode","passkey","password","patient_list","pattern","pause","pause_circle","pause_circle_filled","pause_circle_outline","pause_presentation","payment","payments","pedal_bike","pediatrics","pen_size_1","pen_size_2","pen_size_3","pen_size_4","pen_size_5","pending","pending_actions","pentagon","people","people_alt","people_outline","percent","pergola","perm_camera_mic","perm_contact_calendar","perm_data_setting","perm_device_information","perm_identity","perm_media","perm_phone_msg","perm_scan_wifi","person","person_2","person_3","person_4","person_add","person_add_alt","person_add_alt_1","person_add_disabled","person_alert","person_apron","person_book","person_cancel","person_celebrate","person_check","person_edit","person_off","person_outline","person_pin","person_pin_circle","person_play","person_raised_hand","person_remove","person_remove_alt_1","person_search","personal_bag","personal_bag_off","personal_bag_question","personal_injury","personal_places","personal_video","pest_control","pest_control_rodent","pet_supplies","pets","phishing","phone","phone_android","phone_bluetooth_speaker","phone_callback","phone_disabled","phone_enabled","phone_forwarded","phone_in_talk","phone_iphone","phone_locked","phone_missed","phone_paused","phonelink","phonelink_erase","phonelink_lock","phonelink_off","phonelink_ring","phonelink_ring_off","phonelink_setup","photo","photo_album","photo_auto_merge","photo_camera","photo_camera_back","photo_camera_front","photo_filter","photo_frame","photo_library","photo_prints","photo_size_select_actual","photo_size_select_large","photo_size_select_small","php","physical_therapy","piano","piano_off","picture_as_pdf","picture_in_picture","picture_in_picture_alt","picture_in_picture_center","picture_in_picture_large","picture_in_picture_medium","picture_in_picture_mobile","picture_in_picture_off","picture_in_picture_small","pie_chart","pie_chart_outline","pie_chart_outlined","pill","pill_off","pin","pin_drop","pin_end","pin_invoke","pinch","pinch_zoom_in","pinch_zoom_out","pip","pip_exit","pivot_table_chart","pix","place","place_item","plagiarism","planner_banner_ad_pt","planner_review","play_arrow","play_circle","play_circle_filled","play_circle_outline","play_disabled","play_for_work","play_lesson","play_pause","play_shapes","playing_cards","playlist_add","playlist_add_check","playlist_add_check_circle","playlist_add_circle","playlist_play","playlist_remove","plumbing","plus_one","podcasts","podiatry","podium","point_of_sale","point_scan","policy","poll","polyline","polymer","pool","portable_wifi_off","portrait","position_bottom_left","position_bottom_right","position_top_right","post","post_add","potted_plant","power","power_input","power_off","power_settings_new","prayer_times","precision_manufacturing","pregnancy","pregnant_woman","preliminary","prescriptions","present_to_all","preview","preview_off","price_change","price_check","print","print_add","print_connect","print_disabled","print_error","print_lock","priority","priority_high","privacy","privacy_tip","private_connectivity","problem","procedure","process_chart","production_quantity_limits","productivity","progress_activity","prompt_suggestion","propane","propane_tank","psychiatry","psychology","psychology_alt","public","public_off","publish","published_with_changes","pulmonology","pulse_alert","punch_clock","push_pin","qr_code","qr_code_2","qr_code_2_add","qr_code_scanner","query_builder","query_stats","question_answer","question_exchange","question_mark","queue","queue_music","queue_play_next","quick_phrases","quick_reference","quick_reference_all","quick_reorder","quickreply","quiet_time","quiet_time_active","quiz","r_mobiledata","radar","radio","radio_button_checked","radio_button_partial","radio_button_unchecked","radiology","railway_alert","rainy","rainy_heavy","rainy_light","rainy_snow","ramen_dining","ramp_left","ramp_right","range_hood","rate_review","raven","raw_off","raw_on","read_more","readiness_score","real_estate_agent","rear_camera","rebase","rebase_edit","receipt","receipt_long","recent_actors","recent_patient","recommend","record_voice_over","rectangle","recycling","redeem","redo","reduce_capacity","refresh","regular_expression","relax","release_alert","remember_me","reminder","remote_gen","remove","remove_circle","remove_circle_outline","remove_done","remove_from_queue","remove_moderator","remove_red_eye","remove_road","remove_selection","remove_shopping_cart","reopen_window","reorder","repartition","repeat","repeat_on","repeat_one","repeat_one_on","replay","replay_10","replay_30","replay_5","replay_circle_filled","reply","reply_all","report","report_gmailerrorred","report_off","report_problem","request_page","request_quote","reset_image","reset_tv","reset_wrench","resize","respiratory_rate","responsive_layout","restart_alt","restaurant","restaurant_menu","restore","restore_from_trash","restore_page","resume","reviews","rewarded_ads","rheumatology","rib_cage","rice_bowl","right_click","right_panel_close","right_panel_open","ring_volume","ripples","robot","robot_2","rocket","rocket_launch","roller_shades","roller_shades_closed","roller_skating","roofing","room","room_preferences","room_service","rotate_90_degrees_ccw","rotate_90_degrees_cw","rotate_left","rotate_right","roundabout_left","roundabout_right","rounded_corner","route","router","routine","rowing","rss_feed","rsvp","rtt","rubric","rule","rule_folder","rule_settings","run_circle","running_with_errors","rv_hookup","safety_check","safety_check_off","safety_divider","sailing","salinity","sanitizer","satellite","satellite_alt","sauna","save","save_alt","save_as","saved_search","savings","scale","scan","scan_delete","scanner","scatter_plot","scene","schedule","schedule_send","schema","school","science","science_off","score","scoreboard","screen_lock_landscape","screen_lock_portrait","screen_lock_rotation","screen_record","screen_rotation","screen_rotation_alt","screen_rotation_up","screen_search_desktop","screen_share","screenshot","screenshot_frame","screenshot_keyboard","screenshot_monitor","screenshot_region","screenshot_tablet","scrollable_header","scuba_diving","sd","sd_card","sd_card_alert","sd_storage","sdk","search","search_check","search_hands_free","search_off","security","security_key","security_update","security_update_good","security_update_warning","segment","select","select_all","select_check_box","select_to_speak","select_window","select_window_off","self_care","self_improvement","sell","send","send_and_archive","send_money","send_time_extension","send_to_mobile","sensor_door","sensor_occupied","sensor_window","sensors","sensors_krx","sensors_krx_off","sensors_off","sentiment_calm","sentiment_content","sentiment_dissatisfied","sentiment_excited","sentiment_extremely_dissatisfied","sentiment_frustrated","sentiment_neutral","sentiment_sad","sentiment_satisfied","sentiment_satisfied_alt","sentiment_stressed","sentiment_very_dissatisfied","sentiment_very_satisfied","sentiment_worried","service_toolbox","set_meal","settings","settings_accessibility","settings_account_box","settings_alert","settings_applications","settings_b_roll","settings_backup_restore","settings_bluetooth","settings_brightness","settings_cell","settings_cinematic_blur","settings_ethernet","settings_heart","settings_input_antenna","settings_input_component","settings_input_composite","settings_input_hdmi","settings_input_svideo","settings_motion_mode","settings_night_sight","settings_overscan","settings_panorama","settings_phone","settings_photo_camera","settings_power","settings_remote","settings_slow_motion","settings_suggest","settings_system_daydream","settings_timelapse","settings_video_camera","settings_voice","settop_component","severe_cold","shadow","shadow_add","shadow_minus","shape_line","shapes","share","share_location","share_off","share_reviews","share_windows","sheets_rtl","shelf_auto_hide","shelf_position","shelves","shield","shield_lock","shield_locked","shield_moon","shield_person","shield_question","shield_with_heart","shield_with_house","shift","shift_lock","shop","shop_2","shop_two","shopping_bag","shopping_basket","shopping_cart","shopping_cart_checkout","shopping_cart_off","shoppingmode","short_stay","short_text","shortcut","show_chart","shower","shuffle","shuffle_on","shutter_speed","shutter_speed_add","shutter_speed_minus","sick","side_navigation","sign_language","signal_cellular_0_bar","signal_cellular_1_bar","signal_cellular_2_bar","signal_cellular_3_bar","signal_cellular_4_bar","signal_cellular_add","signal_cellular_alt","signal_cellular_alt_1_bar","signal_cellular_alt_2_bar","signal_cellular_connected_no_internet_0_bar","signal_cellular_connected_no_internet_1_bar","signal_cellular_connected_no_internet_2_bar","signal_cellular_connected_no_internet_3_bar","signal_cellular_connected_no_internet_4_bar","signal_cellular_no_sim","signal_cellular_nodata","signal_cellular_null","signal_cellular_off","signal_cellular_pause","signal_disconnected","signal_wifi_0_bar","signal_wifi_1_bar","signal_wifi_1_bar_lock","signal_wifi_2_bar","signal_wifi_2_bar_lock","signal_wifi_3_bar","signal_wifi_3_bar_lock","signal_wifi_4_bar","signal_wifi_4_bar_lock","signal_wifi_bad","signal_wifi_connected_no_internet_0","signal_wifi_connected_no_internet_1","signal_wifi_connected_no_internet_2","signal_wifi_connected_no_internet_3","signal_wifi_connected_no_internet_4","signal_wifi_off","signal_wifi_statusbar_1_bar","signal_wifi_statusbar_2_bar","signal_wifi_statusbar_3_bar","signal_wifi_statusbar_4_bar","signal_wifi_statusbar_connected_no_internet","signal_wifi_statusbar_connected_no_internet_1","signal_wifi_statusbar_connected_no_internet_2","signal_wifi_statusbar_connected_no_internet_3","signal_wifi_statusbar_connected_no_internet_4","signal_wifi_statusbar_not_connected","signal_wifi_statusbar_null","signature","signpost","sim_card","sim_card_alert","sim_card_download","single_bed","sip","skateboarding","skeleton","skillet","skillet_cooktop","skip_next","skip_previous","skull","sledding","sleep_score","slide_library","sliders","slideshow","slow_motion_video","smart_button","smart_display","smart_outlet","smart_screen","smart_toy","smartphone","smb_share","smoke_free","smoking_rooms","sms","sms_failed","snippet_folder","snooze","snowboarding","snowing","snowing_heavy","snowmobile","snowshoeing","soap","social_distance","social_leaderboard","solar_power","sort","sort_by_alpha","sos","sound_detection_dog_barking","sound_detection_glass_break","sound_detection_loud_sound","sound_sampler","soup_kitchen","source","source_environment","source_notes","south","south_america","south_east","south_west","spa","space_bar","space_dashboard","spatial_audio","spatial_audio_off","spatial_tracking","speaker","speaker_group","speaker_notes","speaker_notes_off","speaker_phone","special_character","specific_gravity","speech_to_text","speed","speed_0_5","speed_1_2","speed_1_5","speed_2x","spellcheck","splitscreen","splitscreen_add","splitscreen_bottom","splitscreen_left","splitscreen_right","splitscreen_top","splitscreen_vertical_add","spo2","spoke","sports","sports_and_outdoors","sports_bar","sports_baseball","sports_basketball","sports_cricket","sports_esports","sports_football","sports_golf","sports_gymnastics","sports_handball","sports_hockey","sports_kabaddi","sports_martial_arts","sports_mma","sports_motorsports","sports_rugby","sports_score","sports_soccer","sports_tennis","sports_volleyball","sprinkler","sprint","square","square_foot","ssid_chart","stack","stack_off","stack_star","stacked_bar_chart","stacked_email","stacked_inbox","stacked_line_chart","stacks","stadia_controller","stadium","stairs","star","star_border","star_border_purple500","star_half","star_outline","star_purple500","star_rate","star_rate_half","stars","start","stat_0","stat_1","stat_2","stat_3","stat_minus_1","stat_minus_2","stat_minus_3","stay_current_landscape","stay_current_portrait","stay_primary_landscape","stay_primary_portrait","step","step_into","step_out","step_over","steppers","steps","stethoscope","stethoscope_arrow","stethoscope_check","sticky_note","sticky_note_2","stock_media","stockpot","stop","stop_circle","stop_screen_share","storage","store","store_mall_directory","storefront","storm","straight","straighten","strategy","stream","stream_apps","streetview","stress_management","strikethrough_s","stroke_full","stroke_partial","stroller","style","styler","stylus","stylus_laser_pointer","stylus_note","subdirectory_arrow_left","subdirectory_arrow_right","subheader","subject","subscript","subscriptions","subtitles","subtitles_off","subway","summarize","sunny","sunny_snowing","superscript","supervised_user_circle","supervised_user_circle_off","supervisor_account","support","support_agent","surfing","surgical","surround_sound","swap_calls","swap_driving_apps","swap_driving_apps_wheel","swap_horiz","swap_horizontal_circle","swap_vert","swap_vertical_circle","sweep","swipe","swipe_down","swipe_down_alt","swipe_left","swipe_left_alt","swipe_right","swipe_right_alt","swipe_up","swipe_up_alt","swipe_vertical","switch","switch_access","switch_access_2","switch_access_shortcut","switch_access_shortcut_add","switch_account","switch_camera","switch_left","switch_right","switch_video","switches","sword_rose","swords","symptoms","synagogue","sync","sync_alt","sync_disabled","sync_lock","sync_problem","sync_saved_locally","syringe","system_security_update","system_security_update_good","system_security_update_warning","system_update","system_update_alt","tab","tab_close","tab_close_right","tab_duplicate","tab_group","tab_move","tab_new_right","tab_recent","tab_unselected","table","table_bar","table_chart","table_chart_view","table_lamp","table_restaurant","table_rows","table_rows_narrow","table_view","tablet","tablet_android","tablet_mac","tabs","tactic","tag","tag_faces","takeout_dining","tamper_detection_off","tamper_detection_on","tap_and_play","tapas","target","task","task_alt","taunt","taxi_alert","team_dashboard","temp_preferences_eco","temple_buddhist","temple_hindu","tenancy","terminal","terrain","text_ad","text_decrease","text_fields","text_fields_alt","text_format","text_increase","text_rotate_up","text_rotate_vertical","text_rotation_angledown","text_rotation_angleup","text_rotation_down","text_rotation_none","text_select_end","text_select_jump_to_beginning","text_select_jump_to_end","text_select_move_back_character","text_select_move_back_word","text_select_move_down","text_select_move_forward_character","text_select_move_forward_word","text_select_move_up","text_select_start","text_snippet","text_to_speech","textsms","texture","texture_add","texture_minus","theater_comedy","theaters","thermometer","thermometer_add","thermometer_gain","thermometer_loss","thermometer_minus","thermostat","thermostat_auto","thermostat_carbon","things_to_do","thread_unread","thumb_down","thumb_down_alt","thumb_down_off_alt","thumb_up","thumb_up_alt","thumb_up_off_alt","thumbnail_bar","thumbs_up_down","thunderstorm","tibia","tibia_alt","time_auto","time_to_leave","timelapse","timeline","timer","timer_10","timer_10_alt_1","timer_10_select","timer_3","timer_3_alt_1","timer_3_select","timer_off","tips_and_updates","tire_repair","title","toast","toc","today","toggle_off","toggle_on","token","toll","tonality","toolbar","tools_flat_head","tools_installation_kit","tools_ladder","tools_level","tools_phillips","tools_pliers_wire_stripper","tools_power_drill","tooltip","top_panel_close","top_panel_open","topic","tornado","total_dissolved_solids","touch_app","touchpad_mouse","touchpad_mouse_off","tour","toys","toys_and_games","toys_fan","track_changes","traffic","trail_length","trail_length_medium","trail_length_short","train","tram","transcribe","transfer_within_a_station","transform","transgender","transit_enterexit","transition_chop","transition_dissolve","transition_fade","transition_push","transition_slide","translate","transportation","travel","travel_explore","travel_luggage_and_bags","trending_down","trending_flat","trending_up","trip","trip_origin","trolley","trophy","troubleshoot","try","tsunami","tsv","tty","tune","tungsten","turn_left","turn_right","turn_sharp_left","turn_sharp_right","turn_slight_left","turn_slight_right","turned_in","turned_in_not","tv","tv_gen","tv_guide","tv_off","tv_options_edit_channels","tv_options_input_settings","tv_remote","tv_signin","tv_with_assistant","two_pager","two_wheeler","type_specimen","u_turn_left","u_turn_right","ulna_radius","ulna_radius_alt","umbrella","unarchive","undo","unfold_less","unfold_less_double","unfold_more","unfold_more_double","ungroup","universal_currency","universal_currency_alt","universal_local","unknown_2","unknown_5","unknown_document","unknown_med","unlicense","unpublished","unsubscribe","upcoming","update","update_disabled","upgrade","upload","upload_2","upload_file","urology","usb","usb_off","user_attributes","vaccines","vacuum","valve","vape_free","vaping_rooms","variable_add","variable_insert","variable_remove","variables","ventilator","verified","verified_user","vertical_align_bottom","vertical_align_center","vertical_align_top","vertical_distribute","vertical_shades","vertical_shades_closed","vertical_split","vibration","video_call","video_camera_back","video_camera_front","video_camera_front_off","video_chat","video_file","video_label","video_library","video_search","video_settings","video_stable","videocam","videocam_off","videogame_asset","videogame_asset_off","view_agenda","view_array","view_carousel","view_column","view_column_2","view_comfy","view_comfy_alt","view_compact","view_compact_alt","view_cozy","view_day","view_headline","view_in_ar","view_in_ar_off","view_kanban","view_list","view_module","view_quilt","view_sidebar","view_stream","view_timeline","view_week","vignette","villa","visibility","visibility_lock","visibility_off","vital_signs","voice_chat","voice_over_off","voice_selection","voicemail","volcano","volume_down","volume_down_alt","volume_mute","volume_off","volume_up","volunteer_activism","voting_chip","vpn_key","vpn_key_alert","vpn_key_off","vpn_lock","vr180_create2d","vr180_create2d_off","vrpano","wall_art","wall_lamp","wallet","wallpaper","wallpaper_slideshow","ward","warehouse","warning","warning_amber","warning_off","wash","watch","watch_button_press","watch_later","watch_off","watch_screentime","watch_wake","water","water_bottle","water_bottle_large","water_damage","water_do","water_drop","water_ec","water_full","water_heater","water_lock","water_loss","water_lux","water_medium","water_orp","water_ph","water_pump","water_voc","waterfall_chart","waves","waving_hand","wb_auto","wb_cloudy","wb_incandescent","wb_iridescent","wb_shade","wb_sunny","wb_twighlight","wb_twilight","wc","weather_hail","weather_mix","weather_snowy","web","web_asset","web_asset_off","web_stories","web_traffic","webhook","weekend","weight","west","whatshot","wheelchair_pickup","where_to_vote","widgets","width","width_full","width_normal","width_wide","wifi","wifi_1_bar","wifi_2_bar","wifi_add","wifi_calling","wifi_calling_1","wifi_calling_2","wifi_calling_3","wifi_channel","wifi_find","wifi_home","wifi_lock","wifi_notification","wifi_off","wifi_password","wifi_protected_setup","wifi_proxy","wifi_tethering","wifi_tethering_error","wifi_tethering_off","wind_power","window","window_closed","window_open","window_sensor","wine_bar","woman","woman_2","work","work_alert","work_history","work_off","work_outline","work_update","workspace_premium","workspaces","workspaces_filled","workspaces_outline","wounds_injuries","wrap_text","wrist","wrong_location","wysiwyg","yard","your_trips","youtube_activity","youtube_searched_for","zone_person_alert","zone_person_idle","zone_person_urgent","zoom_in","zoom_in_map","zoom_out","zoom_out_map"]'), Ee = { class: "settings-container" }, xe = ["onClick"], Se = { class: "settings-container" }, Oe = /* @__PURE__ */ B({
  __name: "IconWidgetSettings",
  props: {
    modelValue: { required: !0 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(l) {
    const e = H("i18n"), t = (r) => e ? e.t(r) : r, s = S({
      /* The picker opens first: choosing the symbol is what you came for */
      pickerSection: !0,
      widgetSection: !1,
      storeSection: !1
    }), _ = Z(l, "modelValue"), d = S(
      JSON.parse(localStorage.getItem("isDarkTheme") || "false")
    ), c = S([]), p = S(""), f = k(() => c.value.filter(
      (r) => r.toLowerCase().includes(p.value.toLowerCase())
    )), m = (r) => {
      r && (_.value.currentIcon = r);
    };
    K(() => {
      c.value = Ne;
    });
    const u = k(() => d.value ? "#ffffff" : ""), h = k(() => 'font-variation-settings: "FILL" 0, "wght" 200, "GRAD" 100, "opsz" 48;');
    return (r, i) => {
      const E = N("va-input"), q = N("va-collapse"), J = N("va-checkbox"), Q = N("va-color-input"), x = N("va-slider");
      return T(), O(G, null, [
        g(q, {
          modelValue: s.value.pickerSection,
          "onUpdate:modelValue": i[1] || (i[1] = (n) => s.value.pickerSection = n),
          icon: "search",
          header: "Symbol wählen"
        }, {
          default: D(() => [
            C("div", Ee, [
              g(E, {
                modelValue: p.value,
                "onUpdate:modelValue": i[0] || (i[0] = (n) => p.value = n),
                placeholder: "Search icon...",
                label: t("icon:IconWidget.iconSearch")
              }, null, 8, ["modelValue", "label"]),
              C("div", {
                class: "icons-container",
                style: ue(h.value)
              }, [
                (T(!0), O(G, null, pe(f.value, (n) => (T(), O("span", {
                  key: n,
                  onClick: (j) => m(n),
                  class: me(["material-symbols-outlined", { "active-icon": n === _.value.currentIcon }])
                }, Y(n), 11, xe))), 128))
              ], 4)
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        g(q, {
          modelValue: s.value.widgetSection,
          "onUpdate:modelValue": i[8] || (i[8] = (n) => s.value.widgetSection = n),
          icon: "settings",
          header: t("IconWidget.title")
        }, {
          default: D(() => [
            C("div", Se, [
              g(J, {
                modelValue: _.value.isIconFilled,
                "onUpdate:modelValue": i[2] || (i[2] = (n) => _.value.isIconFilled = n),
                label: t("icon:IconWidget.iconFilled")
              }, null, 8, ["modelValue", "label"]),
              g(A(ve), {
                modelValue: _.value.iconColor,
                "onUpdate:modelValue": i[3] || (i[3] = (n) => _.value.iconColor = n),
                label: t("icon:IconWidget.iconColor")
              }, {
                default: D(({ value: n, change: j }) => [
                  g(Q, {
                    "model-value": n,
                    onInput: j,
                    label: t("icon:IconWidget.iconColor")
                  }, null, 8, ["model-value", "onInput", "label"])
                ]),
                _: 1
              }, 8, ["modelValue", "label"]),
              g(x, {
                class: "slider",
                modelValue: _.value.iconSize,
                "onUpdate:modelValue": i[4] || (i[4] = (n) => _.value.iconSize = n),
                "label-color": u.value,
                "track-label-visible": "",
                min: 10,
                max: 1e3,
                step: 10,
                label: t("icon:IconWidget.iconSize")
              }, null, 8, ["modelValue", "label-color", "label"]),
              g(x, {
                class: "slider",
                modelValue: _.value.strokeWeight,
                "onUpdate:modelValue": i[5] || (i[5] = (n) => _.value.strokeWeight = n),
                "label-color": u.value,
                "track-label-visible": "",
                min: 100,
                max: 700,
                step: 100,
                label: t("icon:IconWidget.strokeWeight")
              }, null, 8, ["modelValue", "label-color", "label"]),
              g(x, {
                class: "slider",
                modelValue: _.value.opticSize,
                "onUpdate:modelValue": i[6] || (i[6] = (n) => _.value.opticSize = n),
                "label-color": u.value,
                "track-label-visible": "",
                min: 20,
                max: 48,
                label: t("icon:IconWidget.opticSize")
              }, null, 8, ["modelValue", "label-color", "label"]),
              g(x, {
                class: "slider",
                modelValue: _.value.grade,
                "onUpdate:modelValue": i[7] || (i[7] = (n) => _.value.grade = n),
                "label-color": u.value,
                "track-label-visible": "",
                min: -25,
                max: 200,
                step: 15,
                label: t("icon:IconWidget.grade")
              }, null, 8, ["modelValue", "label-color", "label"])
            ])
          ]),
          _: 1
        }, 8, ["modelValue", "header"])
      ], 64);
    };
  }
}), P = /* @__PURE__ */ X(Oe, [["__scopeId", "data-v-a8457eeb"]]), Te = [
  {
    name: "Icon Clicked",
    type: "click",
    description: "Triggered when the icon is clicked",
    payloadType: b
  },
  {
    name: "Icon Right Clicked",
    type: "right_click",
    description: "Triggered when the icon is right-clicked",
    payloadType: w
  }
], Le = `<?xml version="1.0" encoding="UTF-8"?>
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

The form for the icon widget, minus the symbol itself.

Choosing the symbol is searching a list and clicking one - there is no value
to type, so it stays with the hand-written component next to this. What is
left divides in two: what the symbol looks like at a glance, and the four
numbers of the Material Symbols variable font, which are a different kind of
decision and are grouped apart.

The ranges are the font's own, not guesses: outside them the font simply
clamps and turning the number further does nothing visible.
-->
<uimodel:UIModel
    xmlns:xmi="http://www.omg.org/XMI"
    xmi:version="2.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:uimodel="http://uimodel/1.0"
    name="IconSettingsForm">

  <targetClasses href="http://org.eclipse.daanse.board.app.ui.vue.widget.icon#//IconSettings"/>

  <components xsi:type="uimodel:FormView" name="IconSettingsFormView">

    <fields xsi:type="uimodel:GroupWidget" name="appearanceGroup" layout="VERTICAL" label="Aussehen">
      <fields xsi:type="uimodel:CheckboxWidget"
          name="isIconFilled"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.icon#//IconSettings/isIconFilled"
          label="Gefüllt"/>
      <fields xsi:type="uimodel:InputWidget"
          name="iconColor"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.icon#//IconSettings/iconColor"
          label="Farbe"/>
      <fields xsi:type="uimodel:NumberWidget"
          name="iconSize"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.icon#//IconSettings/iconSize"
          label="Größe (px)" min="10" max="1000" step="10"/>
    </fields>

    <fields xsi:type="uimodel:GroupWidget" name="fontGroup" layout="VERTICAL" label="Schriftachsen">
      <fields xsi:type="uimodel:NumberWidget"
          name="strokeWeight"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.icon#//IconSettings/strokeWeight"
          label="Strichstärke" min="100" max="700" step="100"/>
      <fields xsi:type="uimodel:NumberWidget"
          name="opticSize"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.icon#//IconSettings/opticSize"
          label="Optische Größe" min="20" max="48" step="1"/>
      <fields xsi:type="uimodel:NumberWidget"
          name="grade"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.icon#//IconSettings/grade"
          label="Kontrast" min="-25" max="200" step="15"/>
    </fields>

  </components>
</uimodel:UIModel>
`;
var ze = Object.defineProperty, De = Object.getOwnPropertyDescriptor, V = (l, e, t, s) => {
  for (var _ = s > 1 ? void 0 : s ? De(e, t) : e, d = l.length - 1, c; d >= 0; d--)
    (c = l[d]) && (_ = (s ? c(e, t, _) : c(_)) || _);
  return s && _ && ze(e, t, _), _;
}, Fe = (l, e) => (t, s) => e(t, s, l);
ee.eINSTANCE;
o.eINSTANCE;
const L = "IconWidget";
let z = class {
  constructor(l) {
    this.events = l;
  }
  type = L;
  component = M;
  settingsComponent = P;
  supportedDSTypes = [];
  icon = Ce;
  name = "Icon";
  /*
   * The settings form, as a model. Carried on the registration like the
   * icon, so whoever shows the settings does not have to know this widget
   * exists - and the shell needs no dependency on this bundle.
   */
  settingsForm = {
    xmi: Le,
    uri: "/icon-settings.ui.xmi",
    ePackage: () => o.eINSTANCE,
    create: () => new a(),
    /*
     * Picking the symbol is not a field - it is searching a list and
     * clicking one - so it stays with the hand-written component. Named so
     * that what is modelled is not offered twice.
     */
    unmodelledSections: ["Symbol wählen"]
  };
  register() {
    this.events.registerWidget(L, Te), ie().register(
      "org.eclipse.daanse.board.app.ui.vue.widget.icon",
      { IconWidget: M, IconWidgetSettings: P },
      "0.0.1-next.1",
      "ui.vue.widget.icon"
    );
  }
  unregister() {
    this.events.unregisterWidget(L);
  }
};
V([
  _e()
], z.prototype, "register", 1);
V([
  ae()
], z.prototype, "unregister", 1);
z = V([
  oe({
    service: [ke],
    properties: { "widget.type": L }
  }),
  Fe(0, re(te))
], z);
export {
  a as IconSettingsImpl,
  o as IconSettingsPackage,
  M as IconWidget,
  z as IconWidgetProvider,
  P as IconWidgetSettings,
  Le as iconSettingsFormXmi
};
