(function(){var i="ui.vue.widget.progress",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".container[data-v-645e6476]{width:100%;height:100%;display:flex;justify-content:center;align-items:center}.grid-layout[data-v-645e6476]{display:grid;grid-template-columns:auto 1fr auto;grid-template-rows:1fr auto 1fr;gap:.5em;width:100%;height:100%;position:relative}.grid-layout.vertical[data-v-645e6476]{grid-template-columns:1fr auto 1fr;grid-template-rows:auto 1fr auto}.progress-bar[data-v-645e6476]{grid-column:2;grid-row:2;background:var(--v095f0594);border-radius:var(--e369f6f8);justify-self:center;position:relative;display:flex;align-items:end;justify-content:start;height:var(--v63c75e65);width:var(--v1c012893)}.progress-percent[data-v-645e6476]{height:var(--acc6ed20);width:var(--v97a15d44);background:var(--v1f9de667);transition:var(--v4307e336);border-radius:var(--e369f6f8)}.progress-value[data-v-645e6476]{font-weight:600;white-space:nowrap;align-self:center;justify-self:center;color:var(--v1067f835);z-index:1000}.align-left[data-v-645e6476]{grid-column:1}.align-center[data-v-645e6476]{grid-column:2}.align-right[data-v-645e6476]{grid-column:3}.justify-top[data-v-645e6476]{grid-row:1}.justify-center[data-v-645e6476]{grid-row:2}.justify-bottom[data-v-645e6476]{grid-row:3}.hint[data-v-0306f9bb]{margin:0;font-size:12px;color:var(--color-fg-muted, #6b7280)}.settings-container[data-v-0306f9bb]{display:flex;flex-direction:column;align-items:stretch;gap:1rem}.add-btn[data-v-0306f9bb]{width:150px}.input[data-v-0306f9bb]{width:100px}.loading[data-v-0306f9bb]{height:100%;padding:50px;border-radius:4px;margin-bottom:1rem;background-color:var(--app-response-background)}\n";})();
import { WidgetActionInterfaceImpl as be, EVENT_ACTIONS_REGISTRY as me, PayloadImpl as Z, EVENT_REGISTRY_ID as Ge, EVENT_ACTIONS_REGISTRY_ID as Le } from "org.eclipse.daanse.board.app.lib.api.events";
import { activate as Ie, deactivate as Ae, component as we, inject as z } from "@eclipse-daanse/tsm";
import { defineComponent as te, mergeModels as ye, useCssVars as Ve, computed as S, toRefs as Fe, inject as M, onUnmounted as De, useModel as se, ref as J, watch as X, onMounted as xe, createElementBlock as K, openBlock as D, withModifiers as Ue, createElementVNode as y, normalizeClass as q, toDisplayString as ae, resolveComponent as I, createBlock as Be, withCtx as A, Fragment as ke, createVNode as w, createTextVNode as We } from "vue";
import { useRoute as Me } from "vue-router";
import { VariableWrapper as o, useDatasourceRepository as Je } from "org.eclipse.daanse.board.app.ui.vue.composables";
import Q from "org.eclipse.daanse.board.app.lib.utils.helpers";
import { BasicEFactory as Xe, BasicEPackage as Ke, EPackageRegistry as ie, BasicEClass as je, BasicEReference as T, BasicEAttribute as F, getEcorePackage as P, BasicEObject as He } from "@emfts/core";
import { WidgetAction as re } from "org.eclipse.daanse.board.app.lib.events";
import { WIDGET_SERVICE_ID as Ye } from "org.eclipse.daanse.board.app.lib.api.widget";
const { identifiers: $e } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), k = {
  CENTER: "CENTER"
}, W = {
  CENTER: "CENTER"
};
class j extends Xe {
  // Lazy singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new j()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(r.eINSTANCE);
  }
  /**
   * Create a new ProgressSettings instance
   */
  createProgressSettings() {
    return new t();
  }
  /**
   * Create an instance of the given class
   */
  create(e) {
    switch (e.getName()) {
      case "ProgressSettings":
        return this.createProgressSettings();
      default:
        throw new Error(`Unknown class: ${e.getName()}`);
    }
  }
}
function N(u) {
  const e = ie.INSTANCE.getEPackage(u);
  if (!e)
    throw new Error(`EPackage '${u}' is not registered. Access the eINSTANCE of that model's generated package (or register it via EPackageRegistry.INSTANCE.registerPackage) before initializing ProgresswidgetsPackage.`);
  return e;
}
class r extends Ke {
  static eNAME = "progresswidgets";
  static eNS_URI = "http://org.eclipse.daanse.board.app.ui.vue.widget.progress";
  static eNS_PREFIX = "progresswidgets";
  // Singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new r(), this._instance.init()), this._instance;
  }
  /**
   * Literals for quick access to metaclasses and features
   */
  static Literals = {
    PROGRESS_SETTINGS: null,
    PROGRESS_SETTINGS__PROGRESS: null,
    PROGRESS_SETTINGS__FILL_COLOR: null,
    PROGRESS_SETTINGS__GRADIENT_COLOR: null,
    PROGRESS_SETTINGS__BACKGROUND_COLOR: null,
    PROGRESS_SETTINGS__IS_GRADIENT: null,
    PROGRESS_SETTINGS__IS_VERTICAL: null,
    PROGRESS_SETTINGS__ROTATION: null,
    PROGRESS_SETTINGS__MIN: null,
    PROGRESS_SETTINGS__MAX: null,
    PROGRESS_SETTINGS__TEXT_COLOR: null,
    PROGRESS_SETTINGS__BAR_THICKNESS: null,
    PROGRESS_SETTINGS__BORDER_RADIUS: null,
    PROGRESS_SETTINGS__VALUE_ALIGN: null,
    PROGRESS_SETTINGS__VALUE_JUSTIFY: null
  };
  constructor() {
    super(), this.setName(r.eNAME), this.setNsURI(r.eNS_URI), this.setNsPrefix(r.eNS_PREFIX);
  }
  /**
   * Initialize package contents
   */
  init() {
    ie.INSTANCE.set(r.eNS_URI, this), this.setEFactoryInstance(j.eINSTANCE);
    const e = new je();
    e.setName("ProgressSettings"), e.setAbstract(!1), e.setInterface(!1), this.getEClassifiers().push(e), e.setEPackage(this), r.Literals.PROGRESS_SETTINGS = e;
    const s = new T();
    s.setContainment(!1), s.setName("progress"), s.setLowerBound(0), s.setUpperBound(1), e.getEStructuralFeatures().push(s), r.Literals.PROGRESS_SETTINGS__PROGRESS = s;
    const n = new T();
    n.setContainment(!1), n.setName("fillColor"), n.setLowerBound(0), n.setUpperBound(1), e.getEStructuralFeatures().push(n), r.Literals.PROGRESS_SETTINGS__FILL_COLOR = n;
    const a = new T();
    a.setContainment(!1), a.setName("gradientColor"), a.setLowerBound(0), a.setUpperBound(1), e.getEStructuralFeatures().push(a), r.Literals.PROGRESS_SETTINGS__GRADIENT_COLOR = a;
    const l = new T();
    l.setContainment(!1), l.setName("backgroundColor"), l.setLowerBound(0), l.setUpperBound(1), e.getEStructuralFeatures().push(l), r.Literals.PROGRESS_SETTINGS__BACKGROUND_COLOR = l;
    const p = new F();
    p.setName("isGradient"), p.setLowerBound(0), p.setUpperBound(1), e.getEStructuralFeatures().push(p), r.Literals.PROGRESS_SETTINGS__IS_GRADIENT = p;
    const O = new F();
    O.setName("isVertical"), O.setLowerBound(0), O.setUpperBound(1), e.getEStructuralFeatures().push(O), r.Literals.PROGRESS_SETTINGS__IS_VERTICAL = O;
    const c = new T();
    c.setContainment(!1), c.setName("rotation"), c.setLowerBound(0), c.setUpperBound(1), e.getEStructuralFeatures().push(c), r.Literals.PROGRESS_SETTINGS__ROTATION = c;
    const h = new T();
    h.setContainment(!1), h.setName("min"), h.setLowerBound(0), h.setUpperBound(1), e.getEStructuralFeatures().push(h), r.Literals.PROGRESS_SETTINGS__MIN = h;
    const E = new T();
    E.setContainment(!1), E.setName("max"), E.setLowerBound(0), E.setUpperBound(1), e.getEStructuralFeatures().push(E), r.Literals.PROGRESS_SETTINGS__MAX = E;
    const R = new T();
    R.setContainment(!1), R.setName("textColor"), R.setLowerBound(0), R.setUpperBound(1), e.getEStructuralFeatures().push(R), r.Literals.PROGRESS_SETTINGS__TEXT_COLOR = R;
    const C = new T();
    C.setContainment(!1), C.setName("barThickness"), C.setLowerBound(0), C.setUpperBound(1), e.getEStructuralFeatures().push(C), r.Literals.PROGRESS_SETTINGS__BAR_THICKNESS = C;
    const i = new T();
    i.setContainment(!1), i.setName("borderRadius"), i.setLowerBound(0), i.setUpperBound(1), e.getEStructuralFeatures().push(i), r.Literals.PROGRESS_SETTINGS__BORDER_RADIUS = i;
    const _ = new F();
    _.setName("valueAlign"), _.setLowerBound(0), _.setUpperBound(1), e.getEStructuralFeatures().push(_), r.Literals.PROGRESS_SETTINGS__VALUE_ALIGN = _;
    const g = new F();
    g.setName("valueJustify"), g.setLowerBound(0), g.setUpperBound(1), e.getEStructuralFeatures().push(g), r.Literals.PROGRESS_SETTINGS__VALUE_JUSTIFY = g, r.Literals.PROGRESS_SETTINGS__PROGRESS.setEType(N("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), r.Literals.PROGRESS_SETTINGS__FILL_COLOR.setEType(N("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), r.Literals.PROGRESS_SETTINGS__GRADIENT_COLOR.setEType(N("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), r.Literals.PROGRESS_SETTINGS__BACKGROUND_COLOR.setEType(N("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), r.Literals.PROGRESS_SETTINGS__IS_GRADIENT.setEType(P().getEClassifier("EBoolean")), r.Literals.PROGRESS_SETTINGS__IS_VERTICAL.setEType(P().getEClassifier("EBoolean")), r.Literals.PROGRESS_SETTINGS__ROTATION.setEType(N("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), r.Literals.PROGRESS_SETTINGS__MIN.setEType(N("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), r.Literals.PROGRESS_SETTINGS__MAX.setEType(N("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), r.Literals.PROGRESS_SETTINGS__TEXT_COLOR.setEType(N("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), r.Literals.PROGRESS_SETTINGS__BAR_THICKNESS.setEType(N("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), r.Literals.PROGRESS_SETTINGS__BORDER_RADIUS.setEType(N("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper"));
  }
}
class t extends He {
  // Feature ID Constants (eLiterals)
  static PROGRESS = 0;
  static FILL_COLOR = 1;
  static GRADIENT_COLOR = 2;
  static BACKGROUND_COLOR = 3;
  static IS_GRADIENT = 4;
  static IS_VERTICAL = 5;
  static ROTATION = 6;
  static MIN = 7;
  static MAX = 8;
  static TEXT_COLOR = 9;
  static BAR_THICKNESS = 10;
  static BORDER_RADIUS = 11;
  static VALUE_ALIGN = 12;
  static VALUE_JUSTIFY = 13;
  // Private fields
  _progress = new o();
  _fillColor = new o();
  _gradientColor = new o();
  _backgroundColor = new o();
  _isGradient = !1;
  _isVertical = !1;
  _rotation = new o();
  _min = new o();
  _max = new o();
  _textColor = new o();
  _barThickness = new o();
  _borderRadius = new o();
  _valueAlign = k.CENTER;
  _valueJustify = W.CENTER;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return r.Literals.PROGRESS_SETTINGS;
  }
  // Getters and Setters
  get progress() {
    return this._progress;
  }
  set progress(e) {
    const s = this._progress;
    this._progress = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(t.PROGRESS),
      getOldValue: () => s,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => t.PROGRESS,
      merge: () => !1
    });
  }
  get fillColor() {
    return this._fillColor;
  }
  set fillColor(e) {
    const s = this._fillColor;
    this._fillColor = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(t.FILL_COLOR),
      getOldValue: () => s,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => t.FILL_COLOR,
      merge: () => !1
    });
  }
  get gradientColor() {
    return this._gradientColor;
  }
  set gradientColor(e) {
    const s = this._gradientColor;
    this._gradientColor = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(t.GRADIENT_COLOR),
      getOldValue: () => s,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => t.GRADIENT_COLOR,
      merge: () => !1
    });
  }
  get backgroundColor() {
    return this._backgroundColor;
  }
  set backgroundColor(e) {
    const s = this._backgroundColor;
    this._backgroundColor = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(t.BACKGROUND_COLOR),
      getOldValue: () => s,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => t.BACKGROUND_COLOR,
      merge: () => !1
    });
  }
  get isGradient() {
    return this._isGradient;
  }
  set isGradient(e) {
    const s = this._isGradient;
    this._isGradient = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(t.IS_GRADIENT),
      getOldValue: () => s,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => t.IS_GRADIENT,
      merge: () => !1
    });
  }
  get isVertical() {
    return this._isVertical;
  }
  set isVertical(e) {
    const s = this._isVertical;
    this._isVertical = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(t.IS_VERTICAL),
      getOldValue: () => s,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => t.IS_VERTICAL,
      merge: () => !1
    });
  }
  get rotation() {
    return this._rotation;
  }
  set rotation(e) {
    const s = this._rotation;
    this._rotation = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(t.ROTATION),
      getOldValue: () => s,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => t.ROTATION,
      merge: () => !1
    });
  }
  get min() {
    return this._min;
  }
  set min(e) {
    const s = this._min;
    this._min = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(t.MIN),
      getOldValue: () => s,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => t.MIN,
      merge: () => !1
    });
  }
  get max() {
    return this._max;
  }
  set max(e) {
    const s = this._max;
    this._max = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(t.MAX),
      getOldValue: () => s,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => t.MAX,
      merge: () => !1
    });
  }
  get textColor() {
    return this._textColor;
  }
  set textColor(e) {
    const s = this._textColor;
    this._textColor = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(t.TEXT_COLOR),
      getOldValue: () => s,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => t.TEXT_COLOR,
      merge: () => !1
    });
  }
  get barThickness() {
    return this._barThickness;
  }
  set barThickness(e) {
    const s = this._barThickness;
    this._barThickness = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(t.BAR_THICKNESS),
      getOldValue: () => s,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => t.BAR_THICKNESS,
      merge: () => !1
    });
  }
  get borderRadius() {
    return this._borderRadius;
  }
  set borderRadius(e) {
    const s = this._borderRadius;
    this._borderRadius = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(t.BORDER_RADIUS),
      getOldValue: () => s,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => t.BORDER_RADIUS,
      merge: () => !1
    });
  }
  get valueAlign() {
    return this._valueAlign;
  }
  set valueAlign(e) {
    const s = this._valueAlign;
    this._valueAlign = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(t.VALUE_ALIGN),
      getOldValue: () => s,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => t.VALUE_ALIGN,
      merge: () => !1
    });
  }
  get valueJustify() {
    return this._valueJustify;
  }
  set valueJustify(e) {
    const s = this._valueJustify;
    this._valueJustify = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(t.VALUE_JUSTIFY),
      getOldValue: () => s,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => t.VALUE_JUSTIFY,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case t.PROGRESS:
        return this.progress;
      case t.FILL_COLOR:
        return this.fillColor;
      case t.GRADIENT_COLOR:
        return this.gradientColor;
      case t.BACKGROUND_COLOR:
        return this.backgroundColor;
      case t.IS_GRADIENT:
        return this.isGradient;
      case t.IS_VERTICAL:
        return this.isVertical;
      case t.ROTATION:
        return this.rotation;
      case t.MIN:
        return this.min;
      case t.MAX:
        return this.max;
      case t.TEXT_COLOR:
        return this.textColor;
      case t.BAR_THICKNESS:
        return this.barThickness;
      case t.BORDER_RADIUS:
        return this.borderRadius;
      case t.VALUE_ALIGN:
        return this.valueAlign;
      case t.VALUE_JUSTIFY:
        return this.valueJustify;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, s) {
    switch (this.eClass().getFeatureID(e)) {
      case t.PROGRESS:
        this.progress = s, super.eSet(e, s);
        break;
      case t.FILL_COLOR:
        this.fillColor = s, super.eSet(e, s);
        break;
      case t.GRADIENT_COLOR:
        this.gradientColor = s, super.eSet(e, s);
        break;
      case t.BACKGROUND_COLOR:
        this.backgroundColor = s, super.eSet(e, s);
        break;
      case t.IS_GRADIENT:
        this.isGradient = s, super.eSet(e, s);
        break;
      case t.IS_VERTICAL:
        this.isVertical = s, super.eSet(e, s);
        break;
      case t.ROTATION:
        this.rotation = s, super.eSet(e, s);
        break;
      case t.MIN:
        this.min = s, super.eSet(e, s);
        break;
      case t.MAX:
        this.max = s, super.eSet(e, s);
        break;
      case t.TEXT_COLOR:
        this.textColor = s, super.eSet(e, s);
        break;
      case t.BAR_THICKNESS:
        this.barThickness = s, super.eSet(e, s);
        break;
      case t.BORDER_RADIUS:
        this.borderRadius = s, super.eSet(e, s);
        break;
      case t.VALUE_ALIGN:
        this.valueAlign = s, super.eSet(e, s);
        break;
      case t.VALUE_JUSTIFY:
        this.valueJustify = s, super.eSet(e, s);
        break;
      default:
        super.eSet(e, s);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case t.PROGRESS:
        return this._progress !== new o();
      case t.FILL_COLOR:
        return this._fillColor !== new o();
      case t.GRADIENT_COLOR:
        return this._gradientColor !== new o();
      case t.BACKGROUND_COLOR:
        return this._backgroundColor !== new o();
      case t.IS_GRADIENT:
        return this._isGradient !== !1;
      case t.IS_VERTICAL:
        return this._isVertical !== !1;
      case t.ROTATION:
        return this._rotation !== new o();
      case t.MIN:
        return this._min !== new o();
      case t.MAX:
        return this._max !== new o();
      case t.TEXT_COLOR:
        return this._textColor !== new o();
      case t.BAR_THICKNESS:
        return this._barThickness !== new o();
      case t.BORDER_RADIUS:
        return this._borderRadius !== new o();
      case t.VALUE_ALIGN:
        return this._valueAlign !== k.CENTER;
      case t.VALUE_JUSTIFY:
        return this._valueJustify !== W.CENTER;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case t.PROGRESS:
        this._progress = new o();
        return;
      case t.FILL_COLOR:
        this._fillColor = new o();
        return;
      case t.GRADIENT_COLOR:
        this._gradientColor = new o();
        return;
      case t.BACKGROUND_COLOR:
        this._backgroundColor = new o();
        return;
      case t.IS_GRADIENT:
        this._isGradient = !1;
        return;
      case t.IS_VERTICAL:
        this._isVertical = !1;
        return;
      case t.ROTATION:
        this._rotation = new o();
        return;
      case t.MIN:
        this._min = new o();
        return;
      case t.MAX:
        this._max = new o();
        return;
      case t.TEXT_COLOR:
        this._textColor = new o();
        return;
      case t.BAR_THICKNESS:
        this._barThickness = new o();
        return;
      case t.BORDER_RADIUS:
        this._borderRadius = new o();
        return;
      case t.VALUE_ALIGN:
        this._valueAlign = k.CENTER;
        return;
      case t.VALUE_JUSTIFY:
        this._valueJustify = W.CENTER;
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
      progress: this.progress,
      fillColor: this.fillColor,
      gradientColor: this.gradientColor,
      backgroundColor: this.backgroundColor,
      isGradient: this.isGradient,
      isVertical: this.isVertical,
      rotation: this.rotation,
      min: this.min,
      max: this.max,
      textColor: this.textColor,
      barThickness: this.barThickness,
      borderRadius: this.borderRadius,
      valueAlign: this.valueAlign,
      valueJustify: this.valueJustify
    };
  }
}
var Ze = Object.defineProperty, ze = Object.getOwnPropertyDescriptor, oe = (u, e, s, n) => {
  for (var a = ze(e, s), l = u.length - 1, p; l >= 0; l--)
    (p = u[l]) && (a = p(e, s, a) || a);
  return a && Ze(e, s, a), a;
};
class U extends be {
  setValue(e) {
    throw new Error("setValue not implemented");
  }
  reset() {
    throw new Error("reset not implemented");
  }
}
oe([
  re({ eventType: "progress.setValue" })
], U.prototype, "setValue");
oe([
  re({ eventType: "progress.reset" })
], U.prototype, "reset");
const qe = /* @__PURE__ */ te({
  __name: "ProgressWidget",
  props: /* @__PURE__ */ ye({
    datasourceId: {},
    id: {}
  }, {
    configv: { required: !0 },
    configvModifiers: {}
  }),
  emits: ["update:configv"],
  setup(u, { expose: e }) {
    Ve((d) => ({
      v095f0594: ue.value,
      e369f6f8: Ce.value,
      v63c75e65: Re.value,
      v1c012893: Se.value,
      acc6ed20: Ee.value,
      v97a15d44: fe.value,
      v1f9de667: pe.value,
      v4307e336: he.value,
      v1067f835: _e.value
    }));
    const s = u, { datasourceId: n, id: a } = Fe(s), l = M($e.TINY_EMITTER), p = M(me), c = Me().params.pageid || "";
    class h extends U {
      setValue(f) {
        i.value?.progress && (i.value.progress.value = String(f));
      }
      setMax(f) {
        i.value?.max && (i.value.max.value = String(f));
      }
      reset() {
        i.value?.progress && (i.value.progress.value = "0");
      }
    }
    const E = new h();
    e(E), De(() => {
      a?.value && p.unregisterInstance(a.value);
    });
    const R = () => {
      a?.value && l.emit("widget:ProgressWidget:click", {
        type: "widget:ProgressWidget:click",
        widgetId: a.value,
        payload: { widgetId: a.value, timestamp: Date.now() }
      });
    }, C = () => {
      a?.value && l.emit("widget:ProgressWidget:right_click", {
        type: "widget:ProgressWidget:right_click",
        widgetId: a.value,
        payload: { widgetId: a.value, timestamp: Date.now() }
      });
    }, i = se(u, "configv"), _ = J(null), { update: g } = Je(n, "object", _);
    X(n, (d, f) => {
      g(d, f);
    });
    const m = {
      isGradient: !1,
      isVertical: !1,
      valueAlign: "center",
      valueJustify: "center"
    }, ne = {
      progress: "",
      fillColor: "#00FF00",
      gradientColor: "",
      backgroundColor: "#D3D3D3",
      rotation: 90,
      min: 0,
      max: 100,
      textColor: "#000000",
      barThickness: "20px",
      borderRadius: "10px"
    };
    xe(() => {
      a?.value && p.registerInstance(a.value, E, "ProgressWidget", c), i.value || (i.value = new t());
      for (const [d, f] of Object.entries(ne)) {
        const v = i.value[d];
        if (v == null)
          i.value[d] = new o(f);
        else if (!(v instanceof o)) if (typeof v == "object" && "value" in v) {
          const L = new o(v.value);
          "variable" in v && (L.variable = v.variable), i.value[d] = L;
        } else
          i.value[d] = new o(v);
      }
      for (const [d, f] of Object.entries(m))
        (i.value[d] === void 0 || i.value[d] === null) && (i.value[d] = f);
    });
    const ue = S(() => i.value.backgroundColor?.value), ce = S(() => {
      const d = i.value.rotation?.value;
      return parseFloat(d) || 0;
    }), de = S(() => i.value.gradientColor?.value), pe = S(
      () => i.value.isGradient ? `linear-gradient(${ce.value}deg, ${de.value})` : i.value.fillColor?.value
    ), he = S(
      () => i.value.isVertical ? "height .7s ease" : "width .7s ease"
    ), ge = S(() => parseFloat(i.value.min?.value) || 0), B = S(() => parseFloat(i.value.max?.value) || 100), Ee = S(
      () => i.value.isVertical && b.value !== null ? `${b.value / B.value * 100}%` : "35px"
    ), fe = S(
      () => !i.value.isVertical && b.value !== null ? `${b.value / B.value * 100}%` : "35px"
    ), Se = S(
      () => i.value.isVertical && b.value !== null ? "35px" : "100%"
    ), Re = S(
      () => !i.value.isVertical && b.value !== null ? "35px" : "100%"
    ), Ce = S(() => i.value.borderRadius?.value || "10px"), b = S(() => {
      const d = i.value.progress;
      if (!d) return null;
      const f = d.value;
      if (!f && f !== 0) return null;
      const { parts: v } = Q.widget.extractValuesAndFullObject(String(f));
      let L = "";
      for (const V of v) {
        const Y = V.path || V.path === null ? Q.widget.getValueByPath(_.value, V.path) : void 0;
        L += Y !== void 0 ? Y : V.text;
      }
      const $ = parseFloat(L);
      if (isNaN($)) return null;
      const Ne = ge.value, Oe = B.value;
      return Math.max(Ne, Math.min(Oe, $));
    }), ve = S(() => {
      switch (i.value?.valueAlign) {
        case "left":
          return "align-left";
        case "right":
          return "align-right";
        default:
          return "align-center";
      }
    }), _e = S(() => i.value.textColor?.value || "#000000"), Te = S(() => {
      switch (i.value?.valueJustify) {
        case "top":
          return "justify-top";
        case "bottom":
          return "justify-bottom";
        default:
          return "justify-center";
      }
    });
    return (d, f) => (D(), K("div", {
      class: "container",
      onClick: R,
      onContextmenu: Ue(C, ["prevent"])
    }, [
      y("div", {
        class: q(["grid-layout", { vertical: i.value.isVertical }])
      }, [
        y("div", {
          class: q(["progress-value", [Te.value, ve.value]])
        }, ae(b.value !== null ? b.value : "n/a"), 3),
        f[0] || (f[0] = y("div", { class: "progress-bar" }, [
          y("div", { class: "progress-percent" })
        ], -1))
      ], 2)
    ], 32));
  }
}), le = (u, e) => {
  const s = u.__vccOpts || u;
  for (const [n, a] of e)
    s[n] = a;
  return s;
}, Qe = /* @__PURE__ */ le(qe, [["__scopeId", "data-v-645e6476"]]), Pe = { class: "settings-container" }, et = {
  key: 0,
  class: "hint"
}, tt = /* @__PURE__ */ te({
  __name: "ProgressWidgetSettings",
  props: {
    modelValue: { required: !0 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(u) {
    const e = M("i18n"), s = (c) => e ? e.t(c) : c, n = J({
      /* The stops open first: it is the only thing left in this half */
      gradientSection: !0
    }), a = J([]), l = se(u, "modelValue"), p = () => a.value.push({
      color: "#" + ("000000" + Math.floor(Math.random() * 16777215).toString(16)).slice(-6),
      location: Math.floor(Math.random() * 101)
    });
    X(
      [() => l.value.fillColor?.value, () => a.value],
      ([c, h]) => {
        if (!l.value.isGradient) return;
        const E = h.length < 1 ? `${c} 0%, #FAFAFA 85%` : h.map((C) => `${C.color} ${C.location}%`).join(", "), R = l.value.gradientColor;
        R && (R.value = E);
      },
      { deep: !0 }
    ), X(
      () => l.value.isGradient,
      (c) => {
        if (!c) {
          a.value = [];
          return;
        }
        const h = l.value.fillColor?.value ?? "#00FF00";
        a.value.push({ color: h, location: 0 }, { color: "#FAFAFA", location: 85 });
      }
    );
    const O = (c) => {
      a.value = a.value.filter((h, E) => E !== c);
    };
    return (c, h) => {
      const E = I("va-button"), R = I("va-color-input"), C = I("va-input"), i = I("va-data-table"), _ = I("va-collapse");
      return D(), Be(_, {
        modelValue: n.value.gradientSection,
        "onUpdate:modelValue": h[0] || (h[0] = (g) => n.value.gradientSection = g),
        header: "Farbstopps",
        icon: "gradient"
      }, {
        default: A(() => [
          y("div", Pe, [
            l.value.isGradient ? (D(), K(ke, { key: 1 }, [
              w(E, {
                class: "add-btn",
                onClick: p
              }, {
                default: A(() => [
                  We(ae(s("progress:ProgressWidget.addButton")), 1)
                ]),
                _: 1
              }),
              w(i, {
                class: "table-config",
                items: a.value,
                columns: [{ key: "color" }, { key: "location" }, { key: "actions" }]
              }, {
                "cell(color)": A(({ rowIndex: g }) => [
                  w(R, {
                    class: "input-color",
                    modelValue: a.value[g].color,
                    "onUpdate:modelValue": (m) => a.value[g].color = m
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                "cell(location)": A(({ rowIndex: g }) => [
                  w(C, {
                    class: "input",
                    modelValue: a.value[g].location,
                    "onUpdate:modelValue": (m) => a.value[g].location = m
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                "cell(actions)": A(({ rowIndex: g }) => [
                  w(E, {
                    icon: "delete",
                    color: "danger",
                    onClick: (m) => O(g)
                  }, null, 8, ["onClick"])
                ]),
                _: 1
              }, 8, ["items"])
            ], 64)) : (D(), K("p", et, " Der Farbverlauf ist ausgeschaltet. Er lässt sich unter „Darstellung“ einschalten. "))
          ])
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
}), st = /* @__PURE__ */ le(tt, [["__scopeId", "data-v-0306f9bb"]]), at = "data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M105%207.5H15C10.8579%207.5%207.5%2010.8579%207.5%2015V105C7.5%20109.142%2010.8579%20112.5%2015%20112.5H105C109.142%20112.5%20112.5%20109.142%20112.5%20105V15C112.5%2010.8579%20109.142%207.5%20105%207.5ZM15%200C6.71573%200%200%206.71573%200%2015V105C0%20113.284%206.71573%20120%2015%20120H105C113.284%20120%20120%20113.284%20120%20105V15C120%206.71573%20113.284%200%20105%200H15Z'%20fill='%23606060'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M72.8493%2032.89C69.3438%2031.2286%2065.5539%2030.2648%2061.6902%2030.0469C60.8631%2030.0002%2060.1953%2029.3283%2060.2006%2028.4999L60.2291%2024C60.2344%2023.1716%2060.9105%2022.5011%2061.7381%2022.5395C66.6971%2022.7695%2071.5664%2023.9822%2076.0614%2026.1127C81.0087%2028.4575%2085.3826%2031.8571%2088.8758%2036.0728C92.3689%2040.2885%2094.8967%2045.2179%2096.2814%2050.5147C97.6661%2055.8115%2097.8742%2061.3473%2096.891%2066.7332C95.9079%2072.119%2093.7574%2077.2243%2090.5906%2081.6903C87.4238%2086.1563%2083.3175%2089.8748%2078.5602%2092.5844C73.8029%2095.294%2068.51%2096.9291%2063.0533%2097.3748C58.0955%2097.7797%2053.1118%2097.1939%2048.3913%2095.657C47.6035%2095.4005%2047.2079%2094.5344%2047.4957%2093.7576L49.0588%2089.5378C49.3465%2088.761%2050.2086%2088.3683%2050.9989%2088.6169C54.6904%2089.778%2058.5764%2090.2155%2062.4428%2089.8997C66.8081%2089.5431%2071.0424%2088.2351%2074.8483%2086.0674C78.6541%2083.8997%2081.9392%2080.9249%2084.4726%2077.3521C87.0061%2073.7793%2088.7265%2069.6951%2089.513%2065.3864C90.2995%2061.0777%2090.133%2056.6491%2089.0252%2052.4116C87.9175%2048.1741%2085.8953%2044.2306%2083.1007%2040.8581C80.3062%2037.4856%2076.8071%2034.7658%2072.8493%2032.89Z'%20fill='%23606060'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M54.3529%2029.0093C54.5013%2029.8243%2053.9599%2030.6016%2053.1533%2030.7906C49.8368%2031.5678%2046.6767%2032.9043%2043.8089%2034.7425C43.1115%2035.1895%2042.1766%2035.0366%2041.6953%2034.3624L39.0806%2030.6999C38.5992%2030.0257%2038.754%2029.0862%2039.4469%2028.6322C43.2192%2026.1606%2047.4066%2024.3897%2051.8076%2023.4047C52.616%2023.2238%2053.3979%2023.7671%2053.5464%2024.5822L54.3529%2029.0093Z'%20fill='%23606060'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M36.5688%2038.9443C37.185%2039.498%2037.2324%2040.4441%2036.7101%2041.0872C34.5626%2043.7313%2032.8811%2046.7221%2031.7377%2049.9308C31.4597%2050.7112%2030.6267%2051.1623%2029.8334%2050.9236L25.5243%2049.6269C24.731%2049.3882%2024.2785%2048.5505%2024.5487%2047.7673C26.0199%2043.5042%2028.2481%2039.5412%2031.1261%2036.069C31.6548%2035.4312%2032.6057%2035.3825%2033.2219%2035.9363L36.5688%2038.9443Z'%20fill='%23606060'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M28.5877%2057.6524C29.4138%2057.7142%2030.0295%2058.4341%2030.0091%2059.2623C29.9252%2062.6676%2030.4219%2066.0625%2031.4779%2069.3011C31.7347%2070.0887%2031.3511%2070.9548%2030.5773%2071.2507L26.374%2072.8578C25.6003%2073.1536%2024.7301%2072.767%2024.4654%2071.982C23.0245%2067.7085%2022.3663%2063.2099%2022.5225%2058.7028C22.5512%2057.8748%2023.2741%2057.2552%2024.1002%2057.3169L28.5877%2057.6524Z'%20fill='%23606060'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M33.3378%2076.7775C34.039%2076.3362%2034.962%2076.5494%2035.4377%2077.2276C37.3939%2080.0162%2039.8108%2082.4515%2042.5846%2084.4287C43.2592%2084.9095%2043.4654%2085.8341%2043.0188%2086.5319L40.5933%2090.3222C40.1467%2091.02%2039.2171%2091.2262%2038.5378%2090.7521C34.8394%2088.1713%2031.6367%2084.9443%2029.0839%2081.2265C28.615%2080.5435%2028.8281%2079.6155%2029.5293%2079.1743L33.3378%2076.7775Z'%20fill='%23606060'/%3e%3cpath%20d='M62.7264%2071.7358C62.7256%2071.7369%2062.7253%2071.7382%2062.7255%2071.7394V71.7394V71.7394C62.7257%2071.7407%2062.7254%2071.742%2062.7246%2071.7431L59.2097%2076.6014C58.7241%2077.2726%2057.7863%2077.4231%2057.1152%2076.9375L41.3164%2065.5073C40.6452%2065.0217%2040.4947%2064.084%2040.9803%2063.4128L43.6181%2059.7669C44.1036%2059.0957%2045.0414%2058.9453%2045.7126%2059.4309L55.4326%2066.4631C56.1038%2066.9487%2057.0416%2066.7983%2057.5271%2066.1271L73.3534%2044.2521C73.839%2043.5809%2074.7767%2043.4304%2075.4479%2043.916L79.0938%2046.5537C79.765%2047.0393%2079.9154%2047.9771%2079.4298%2048.6483L62.7264%2071.7358Z'%20fill='%23606060'/%3e%3c/svg%3e", it = [
  { name: "Progress Clicked", type: "click", description: "Triggered when the progress widget is clicked", payloadType: Z },
  { name: "Progress Right Clicked", type: "right_click", description: "Triggered when the progress widget is right-clicked", payloadType: Z }
], rt = `<?xml version="1.0" encoding="UTF-8"?>
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

The form for the progress widget.

The order is the order of the decisions: what the bar is showing, then what
it looks like, then where the number sits on it. The gradient is a switch
here and a table of stops in the section beside this - the stops are built
up row by row, which is not a field.

Rotation only means something once there is a gradient to rotate, and the
gradient's colour is worked out from the stops rather than typed, so it is
not offered here at all.

The alignment values are the model's own literals, which is what a board
stores; optionLabel gives them the words.
-->
<uimodel:UIModel
    xmlns:xmi="http://www.omg.org/XMI"
    xmi:version="2.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:uimodel="http://uimodel/1.0"
    name="ProgressSettingsForm">

  <targetClasses href="http://org.eclipse.daanse.board.app.ui.vue.widget.progress#//ProgressSettings"/>

  <components xsi:type="uimodel:FormView" name="ProgressSettingsFormView">

    <fields xsi:type="uimodel:GroupWidget" name="valueGroup" layout="VERTICAL" label="Wert">
      <fields xsi:type="uimodel:NumberWidget" name="progress"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.progress#//ProgressSettings/progress" label="Fortschritt"/>
      <fields xsi:type="uimodel:NumberWidget" name="min"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.progress#//ProgressSettings/min" label="Kleinster Wert"/>
      <fields xsi:type="uimodel:NumberWidget" name="max"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.progress#//ProgressSettings/max" label="Größter Wert"/>
    </fields>

    <fields xsi:type="uimodel:GroupWidget" name="barGroup" layout="VERTICAL" label="Balken">
      <fields xsi:type="uimodel:CheckboxWidget" name="isVertical"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.progress#//ProgressSettings/isVertical" label="Senkrecht"/>
      <fields xsi:type="uimodel:InputWidget" name="fillColor"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.progress#//ProgressSettings/fillColor" label="Balkenfarbe"/>
      <fields xsi:type="uimodel:InputWidget" name="backgroundColor"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.progress#//ProgressSettings/backgroundColor" label="Hintergrundfarbe"/>
      <fields xsi:type="uimodel:InputWidget" name="barThickness"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.progress#//ProgressSettings/barThickness" label="Dicke"
          placeholder="20px"/>
      <fields xsi:type="uimodel:InputWidget" name="borderRadius"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.progress#//ProgressSettings/borderRadius" label="Eckenradius"
          placeholder="0px"/>
    </fields>

    <fields xsi:type="uimodel:GroupWidget" name="gradientGroup" layout="VERTICAL" label="Farbverlauf">
      <fields xsi:type="uimodel:CheckboxWidget" name="isGradient"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.progress#//ProgressSettings/isGradient" label="Farbverlauf statt einer Farbe"/>
      <fields xsi:type="uimodel:NumberWidget" name="rotation"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.progress#//ProgressSettings/rotation" label="Richtung (Grad)" min="0" max="360" step="15">
        <visibilityCondition language="JS" body="self.isGradient === true || self.isGradient === 'true'"/>
      </fields>
    </fields>

    <fields xsi:type="uimodel:GroupWidget" name="labelGroup" layout="VERTICAL" label="Beschriftung">
      <fields xsi:type="uimodel:InputWidget" name="textColor"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.progress#//ProgressSettings/textColor" label="Schriftfarbe"/>
      <fields xsi:type="uimodel:SelectWidget" name="valueAlign"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.progress#//ProgressSettings/valueAlign" label="Waagerecht">
        <values>left</values>
        <values>center</values>
        <values>right</values>
        <optionLabel language="JS" body="({ left: 'Links', center: 'Mittig', right: 'Rechts' })[option] ?? option"/>
      </fields>
      <fields xsi:type="uimodel:SelectWidget" name="valueJustify"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.progress#//ProgressSettings/valueJustify" label="Senkrecht">
        <values>top</values>
        <values>center</values>
        <values>bottom</values>
        <optionLabel language="JS" body="({ top: 'Oben', center: 'Mittig', bottom: 'Unten' })[option] ?? option"/>
      </fields>
    </fields>

  </components>
</uimodel:UIModel>
`;
var ot = Object.defineProperty, lt = Object.getOwnPropertyDescriptor, H = (u, e, s, n) => {
  for (var a = n > 1 ? void 0 : n ? lt(e, s) : e, l = u.length - 1, p; l >= 0; l--)
    (p = u[l]) && (a = (n ? p(e, s, a) : p(a)) || a);
  return n && a && ot(e, s, a), a;
}, ee = (u, e) => (s, n) => e(s, n, u);
r.eINSTANCE;
const G = "ProgressWidget";
let x = class {
  constructor(u, e) {
    this.events = u, this.actions = e;
  }
  type = G;
  name = "Progress";
  /*
   * The settings form, as a model. Carried on the registration like the
   * icon, so whoever shows the settings does not have to know this widget
   * exists - and the shell needs no dependency on this bundle.
   */
  settingsForm = {
    xmi: rt,
    uri: "/progress-settings.ui.xmi",
    ePackage: () => r.eINSTANCE,
    create: () => new t(),
    /*
     * The gradient's stops stay with the hand-written component: they are a
     * table built up row by row, and the colour they produce is worked out
     * rather than typed.
     */
    unmodelledSections: ["Farbstopps"]
  };
  icon = at;
  supportedDSTypes = [];
  component = Qe;
  settingsComponent = st;
  register() {
    this.events.registerWidget(G, it), this.actions.registerWidgetType(G, U, "widget");
  }
  unregister() {
    this.events.unregisterWidget(G), this.actions.unregisterWidgetType(G);
  }
};
H([
  Ie()
], x.prototype, "register", 1);
H([
  Ae()
], x.prototype, "unregister", 1);
x = H([
  we({
    service: [Ye],
    properties: { "widget.type": G }
  }),
  ee(0, z(Ge)),
  ee(1, z(Le))
], x);
export {
  t as ProgressSettingsImpl,
  Qe as ProgressWidget,
  x as ProgressWidgetProvider,
  st as ProgressWidgetSettings,
  r as ProgresswidgetsPackage,
  rt as progressSettingsFormXmi
};
