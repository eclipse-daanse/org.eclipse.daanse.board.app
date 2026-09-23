(function(){var i="ui.vue.widget.progress",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".container[data-v-645e6476]{width:100%;height:100%;display:flex;justify-content:center;align-items:center}.grid-layout[data-v-645e6476]{display:grid;grid-template-columns:auto 1fr auto;grid-template-rows:1fr auto 1fr;gap:.5em;width:100%;height:100%;position:relative}.grid-layout.vertical[data-v-645e6476]{grid-template-columns:1fr auto 1fr;grid-template-rows:auto 1fr auto}.progress-bar[data-v-645e6476]{grid-column:2;grid-row:2;background:var(--v095f0594);border-radius:var(--e369f6f8);justify-self:center;position:relative;display:flex;align-items:end;justify-content:start;height:var(--v63c75e65);width:var(--v1c012893)}.progress-percent[data-v-645e6476]{height:var(--acc6ed20);width:var(--v97a15d44);background:var(--v1f9de667);transition:var(--v4307e336);border-radius:var(--e369f6f8)}.progress-value[data-v-645e6476]{font-weight:600;white-space:nowrap;align-self:center;justify-self:center;color:var(--v1067f835);z-index:1000}.align-left[data-v-645e6476]{grid-column:1}.align-center[data-v-645e6476]{grid-column:2}.align-right[data-v-645e6476]{grid-column:3}.justify-top[data-v-645e6476]{grid-row:1}.justify-center[data-v-645e6476]{grid-row:2}.justify-bottom[data-v-645e6476]{grid-row:3}.hint[data-v-09bfd86c]{margin:0;font-size:12px;color:var(--color-fg-muted, #6b7280)}.settings-container[data-v-09bfd86c]{display:flex;flex-direction:column;align-items:stretch;gap:1rem}.add-btn[data-v-09bfd86c]{width:150px}.stops[data-v-09bfd86c]{display:flex;flex-direction:column;gap:8px;margin:0;padding:0;list-style:none}.stop[data-v-09bfd86c]{display:flex;align-items:flex-end;gap:8px}.stop__color[data-v-09bfd86c]{flex:1 1 auto;min-width:0}.stop__at[data-v-09bfd86c]{flex:0 0 110px}.loading[data-v-09bfd86c]{height:100%;padding:50px;border-radius:4px;margin-bottom:1rem;background-color:var(--app-response-background)}\n";})();
import { WidgetActionInterfaceImpl as Ae, EVENT_ACTIONS_REGISTRY as ye, PayloadImpl as $, EVENT_REGISTRY_ID as Fe, EVENT_ACTIONS_REGISTRY_ID as we } from "org.eclipse.daanse.board.app.lib.api.events";
import { component as re, activate as Ve, deactivate as De, inject as H } from "@eclipse-daanse/tsm";
import { defineComponent as ie, mergeModels as xe, useCssVars as Be, computed as f, toRefs as Ue, inject as Y, onUnmounted as ke, useModel as ae, ref as oe, watch as W, onMounted as We, createElementBlock as G, openBlock as L, withModifiers as Me, createElementVNode as A, normalizeClass as z, toDisplayString as M, unref as T, Fragment as Z, createVNode as F, withCtx as q, createTextVNode as Je, renderList as Xe } from "vue";
import { useRoute as je } from "vue-router";
import { VariableWrapper as o, useDatasourceRepository as Ke, useTranslation as $e } from "org.eclipse.daanse.board.app.ui.vue.composables";
import P from "org.eclipse.daanse.board.app.lib.utils.helpers";
import { BasicEFactory as He, BasicEPackage as Ye, EPackageRegistry as ne, BasicEClass as ze, BasicEReference as R, BasicEAttribute as V, getEcorePackage as Q, BasicEObject as Ze } from "@emfts/core";
import { WidgetAction as le } from "org.eclipse.daanse.board.app.lib.events";
import { DButton as ee, DColorInput as Pe, DInput as Qe, DIcon as et } from "org.eclipse.daanse.board.app.ui.vue.controls";
import { WIDGET_SERVICE_ID as tt } from "org.eclipse.daanse.board.app.lib.api.widget";
const { identifiers: qe } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), U = {
  CENTER: "CENTER"
}, k = {
  CENTER: "CENTER"
};
class J extends He {
  // Lazy singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new J()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(a.eINSTANCE);
  }
  /**
   * Create a new ProgressSettings instance
   */
  createProgressSettings() {
    return new s();
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
function v(u) {
  const e = ne.INSTANCE.getEPackage(u);
  if (!e)
    throw new Error(`EPackage '${u}' is not registered. Access the eINSTANCE of that model's generated package (or register it via EPackageRegistry.INSTANCE.registerPackage) before initializing ProgresswidgetsPackage.`);
  return e;
}
class a extends Ye {
  static eNAME = "progresswidgets";
  static eNS_URI = "http://org.eclipse.daanse.board.app.ui.vue.widget.progress";
  static eNS_PREFIX = "progresswidgets";
  // Singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new a(), this._instance.init()), this._instance;
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
    super(), this.setName(a.eNAME), this.setNsURI(a.eNS_URI), this.setNsPrefix(a.eNS_PREFIX);
  }
  /**
   * Initialize package contents
   */
  init() {
    ne.INSTANCE.set(a.eNS_URI, this), this.setEFactoryInstance(J.eINSTANCE);
    const e = new ze();
    e.setName("ProgressSettings"), e.setAbstract(!1), e.setInterface(!1), this.getEClassifiers().push(e), e.setEPackage(this), a.Literals.PROGRESS_SETTINGS = e;
    const t = new R();
    t.setContainment(!1), t.setName("progress"), t.setLowerBound(0), t.setUpperBound(1), e.getEStructuralFeatures().push(t), a.Literals.PROGRESS_SETTINGS__PROGRESS = t;
    const n = new R();
    n.setContainment(!1), n.setName("fillColor"), n.setLowerBound(0), n.setUpperBound(1), e.getEStructuralFeatures().push(n), a.Literals.PROGRESS_SETTINGS__FILL_COLOR = n;
    const r = new R();
    r.setContainment(!1), r.setName("gradientColor"), r.setLowerBound(0), r.setUpperBound(1), e.getEStructuralFeatures().push(r), a.Literals.PROGRESS_SETTINGS__GRADIENT_COLOR = r;
    const c = new R();
    c.setContainment(!1), c.setName("backgroundColor"), c.setLowerBound(0), c.setUpperBound(1), e.getEStructuralFeatures().push(c), a.Literals.PROGRESS_SETTINGS__BACKGROUND_COLOR = c;
    const l = new V();
    l.setName("isGradient"), l.setLowerBound(0), l.setUpperBound(1), e.getEStructuralFeatures().push(l), a.Literals.PROGRESS_SETTINGS__IS_GRADIENT = l;
    const C = new V();
    C.setName("isVertical"), C.setLowerBound(0), C.setUpperBound(1), e.getEStructuralFeatures().push(C), a.Literals.PROGRESS_SETTINGS__IS_VERTICAL = C;
    const p = new R();
    p.setContainment(!1), p.setName("rotation"), p.setLowerBound(0), p.setUpperBound(1), e.getEStructuralFeatures().push(p), a.Literals.PROGRESS_SETTINGS__ROTATION = p;
    const E = new R();
    E.setContainment(!1), E.setName("min"), E.setLowerBound(0), E.setUpperBound(1), e.getEStructuralFeatures().push(E), a.Literals.PROGRESS_SETTINGS__MIN = E;
    const g = new R();
    g.setContainment(!1), g.setName("max"), g.setLowerBound(0), g.setUpperBound(1), e.getEStructuralFeatures().push(g), a.Literals.PROGRESS_SETTINGS__MAX = g;
    const _ = new R();
    _.setContainment(!1), _.setName("textColor"), _.setLowerBound(0), _.setUpperBound(1), e.getEStructuralFeatures().push(_), a.Literals.PROGRESS_SETTINGS__TEXT_COLOR = _;
    const N = new R();
    N.setContainment(!1), N.setName("barThickness"), N.setLowerBound(0), N.setUpperBound(1), e.getEStructuralFeatures().push(N), a.Literals.PROGRESS_SETTINGS__BAR_THICKNESS = N;
    const i = new R();
    i.setContainment(!1), i.setName("borderRadius"), i.setLowerBound(0), i.setUpperBound(1), e.getEStructuralFeatures().push(i), a.Literals.PROGRESS_SETTINGS__BORDER_RADIUS = i;
    const m = new V();
    m.setName("valueAlign"), m.setLowerBound(0), m.setUpperBound(1), e.getEStructuralFeatures().push(m), a.Literals.PROGRESS_SETTINGS__VALUE_ALIGN = m;
    const b = new V();
    b.setName("valueJustify"), b.setLowerBound(0), b.setUpperBound(1), e.getEStructuralFeatures().push(b), a.Literals.PROGRESS_SETTINGS__VALUE_JUSTIFY = b, a.Literals.PROGRESS_SETTINGS__PROGRESS.setEType(v("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), a.Literals.PROGRESS_SETTINGS__FILL_COLOR.setEType(v("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), a.Literals.PROGRESS_SETTINGS__GRADIENT_COLOR.setEType(v("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), a.Literals.PROGRESS_SETTINGS__BACKGROUND_COLOR.setEType(v("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), a.Literals.PROGRESS_SETTINGS__IS_GRADIENT.setEType(Q().getEClassifier("EBoolean")), a.Literals.PROGRESS_SETTINGS__IS_VERTICAL.setEType(Q().getEClassifier("EBoolean")), a.Literals.PROGRESS_SETTINGS__ROTATION.setEType(v("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), a.Literals.PROGRESS_SETTINGS__MIN.setEType(v("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), a.Literals.PROGRESS_SETTINGS__MAX.setEType(v("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), a.Literals.PROGRESS_SETTINGS__TEXT_COLOR.setEType(v("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), a.Literals.PROGRESS_SETTINGS__BAR_THICKNESS.setEType(v("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), a.Literals.PROGRESS_SETTINGS__BORDER_RADIUS.setEType(v("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper"));
  }
}
class s extends Ze {
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
  _valueAlign = U.CENTER;
  _valueJustify = k.CENTER;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return a.Literals.PROGRESS_SETTINGS;
  }
  // Getters and Setters
  get progress() {
    return this._progress;
  }
  set progress(e) {
    const t = this._progress;
    this._progress = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(s.PROGRESS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => s.PROGRESS,
      merge: () => !1
    });
  }
  get fillColor() {
    return this._fillColor;
  }
  set fillColor(e) {
    const t = this._fillColor;
    this._fillColor = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(s.FILL_COLOR),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => s.FILL_COLOR,
      merge: () => !1
    });
  }
  get gradientColor() {
    return this._gradientColor;
  }
  set gradientColor(e) {
    const t = this._gradientColor;
    this._gradientColor = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(s.GRADIENT_COLOR),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => s.GRADIENT_COLOR,
      merge: () => !1
    });
  }
  get backgroundColor() {
    return this._backgroundColor;
  }
  set backgroundColor(e) {
    const t = this._backgroundColor;
    this._backgroundColor = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(s.BACKGROUND_COLOR),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => s.BACKGROUND_COLOR,
      merge: () => !1
    });
  }
  get isGradient() {
    return this._isGradient;
  }
  set isGradient(e) {
    const t = this._isGradient;
    this._isGradient = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(s.IS_GRADIENT),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => s.IS_GRADIENT,
      merge: () => !1
    });
  }
  get isVertical() {
    return this._isVertical;
  }
  set isVertical(e) {
    const t = this._isVertical;
    this._isVertical = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(s.IS_VERTICAL),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => s.IS_VERTICAL,
      merge: () => !1
    });
  }
  get rotation() {
    return this._rotation;
  }
  set rotation(e) {
    const t = this._rotation;
    this._rotation = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(s.ROTATION),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => s.ROTATION,
      merge: () => !1
    });
  }
  get min() {
    return this._min;
  }
  set min(e) {
    const t = this._min;
    this._min = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(s.MIN),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => s.MIN,
      merge: () => !1
    });
  }
  get max() {
    return this._max;
  }
  set max(e) {
    const t = this._max;
    this._max = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(s.MAX),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => s.MAX,
      merge: () => !1
    });
  }
  get textColor() {
    return this._textColor;
  }
  set textColor(e) {
    const t = this._textColor;
    this._textColor = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(s.TEXT_COLOR),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => s.TEXT_COLOR,
      merge: () => !1
    });
  }
  get barThickness() {
    return this._barThickness;
  }
  set barThickness(e) {
    const t = this._barThickness;
    this._barThickness = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(s.BAR_THICKNESS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => s.BAR_THICKNESS,
      merge: () => !1
    });
  }
  get borderRadius() {
    return this._borderRadius;
  }
  set borderRadius(e) {
    const t = this._borderRadius;
    this._borderRadius = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(s.BORDER_RADIUS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => s.BORDER_RADIUS,
      merge: () => !1
    });
  }
  get valueAlign() {
    return this._valueAlign;
  }
  set valueAlign(e) {
    const t = this._valueAlign;
    this._valueAlign = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(s.VALUE_ALIGN),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => s.VALUE_ALIGN,
      merge: () => !1
    });
  }
  get valueJustify() {
    return this._valueJustify;
  }
  set valueJustify(e) {
    const t = this._valueJustify;
    this._valueJustify = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(s.VALUE_JUSTIFY),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => s.VALUE_JUSTIFY,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case s.PROGRESS:
        return this.progress;
      case s.FILL_COLOR:
        return this.fillColor;
      case s.GRADIENT_COLOR:
        return this.gradientColor;
      case s.BACKGROUND_COLOR:
        return this.backgroundColor;
      case s.IS_GRADIENT:
        return this.isGradient;
      case s.IS_VERTICAL:
        return this.isVertical;
      case s.ROTATION:
        return this.rotation;
      case s.MIN:
        return this.min;
      case s.MAX:
        return this.max;
      case s.TEXT_COLOR:
        return this.textColor;
      case s.BAR_THICKNESS:
        return this.barThickness;
      case s.BORDER_RADIUS:
        return this.borderRadius;
      case s.VALUE_ALIGN:
        return this.valueAlign;
      case s.VALUE_JUSTIFY:
        return this.valueJustify;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case s.PROGRESS:
        this.progress = t, super.eSet(e, t);
        break;
      case s.FILL_COLOR:
        this.fillColor = t, super.eSet(e, t);
        break;
      case s.GRADIENT_COLOR:
        this.gradientColor = t, super.eSet(e, t);
        break;
      case s.BACKGROUND_COLOR:
        this.backgroundColor = t, super.eSet(e, t);
        break;
      case s.IS_GRADIENT:
        this.isGradient = t, super.eSet(e, t);
        break;
      case s.IS_VERTICAL:
        this.isVertical = t, super.eSet(e, t);
        break;
      case s.ROTATION:
        this.rotation = t, super.eSet(e, t);
        break;
      case s.MIN:
        this.min = t, super.eSet(e, t);
        break;
      case s.MAX:
        this.max = t, super.eSet(e, t);
        break;
      case s.TEXT_COLOR:
        this.textColor = t, super.eSet(e, t);
        break;
      case s.BAR_THICKNESS:
        this.barThickness = t, super.eSet(e, t);
        break;
      case s.BORDER_RADIUS:
        this.borderRadius = t, super.eSet(e, t);
        break;
      case s.VALUE_ALIGN:
        this.valueAlign = t, super.eSet(e, t);
        break;
      case s.VALUE_JUSTIFY:
        this.valueJustify = t, super.eSet(e, t);
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
      case s.PROGRESS:
        return this._progress !== new o();
      case s.FILL_COLOR:
        return this._fillColor !== new o();
      case s.GRADIENT_COLOR:
        return this._gradientColor !== new o();
      case s.BACKGROUND_COLOR:
        return this._backgroundColor !== new o();
      case s.IS_GRADIENT:
        return this._isGradient !== !1;
      case s.IS_VERTICAL:
        return this._isVertical !== !1;
      case s.ROTATION:
        return this._rotation !== new o();
      case s.MIN:
        return this._min !== new o();
      case s.MAX:
        return this._max !== new o();
      case s.TEXT_COLOR:
        return this._textColor !== new o();
      case s.BAR_THICKNESS:
        return this._barThickness !== new o();
      case s.BORDER_RADIUS:
        return this._borderRadius !== new o();
      case s.VALUE_ALIGN:
        return this._valueAlign !== U.CENTER;
      case s.VALUE_JUSTIFY:
        return this._valueJustify !== k.CENTER;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case s.PROGRESS:
        this._progress = new o();
        return;
      case s.FILL_COLOR:
        this._fillColor = new o();
        return;
      case s.GRADIENT_COLOR:
        this._gradientColor = new o();
        return;
      case s.BACKGROUND_COLOR:
        this._backgroundColor = new o();
        return;
      case s.IS_GRADIENT:
        this._isGradient = !1;
        return;
      case s.IS_VERTICAL:
        this._isVertical = !1;
        return;
      case s.ROTATION:
        this._rotation = new o();
        return;
      case s.MIN:
        this._min = new o();
        return;
      case s.MAX:
        this._max = new o();
        return;
      case s.TEXT_COLOR:
        this._textColor = new o();
        return;
      case s.BAR_THICKNESS:
        this._barThickness = new o();
        return;
      case s.BORDER_RADIUS:
        this._borderRadius = new o();
        return;
      case s.VALUE_ALIGN:
        this._valueAlign = U.CENTER;
        return;
      case s.VALUE_JUSTIFY:
        this._valueJustify = k.CENTER;
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
var st = Object.defineProperty, rt = Object.getOwnPropertyDescriptor, ue = (u, e, t, n) => {
  for (var r = rt(e, t), c = u.length - 1, l; c >= 0; c--)
    (l = u[c]) && (r = l(e, t, r) || r);
  return r && st(e, t, r), r;
};
class x extends Ae {
  setValue(e) {
    throw new Error("setValue not implemented");
  }
  reset() {
    throw new Error("reset not implemented");
  }
}
ue([
  le({ eventType: "progress.setValue" })
], x.prototype, "setValue");
ue([
  le({ eventType: "progress.reset" })
], x.prototype, "reset");
const it = /* @__PURE__ */ ie({
  __name: "ProgressWidget",
  props: /* @__PURE__ */ xe({
    datasourceId: {},
    id: {}
  }, {
    configv: { required: !0 },
    configvModifiers: {}
  }),
  emits: ["update:configv"],
  setup(u, { expose: e }) {
    Be((d) => ({
      v095f0594: he.value,
      e369f6f8: me.value,
      v63c75e65: Ne.value,
      v1c012893: _e.value,
      acc6ed20: ve.value,
      v97a15d44: Te.value,
      v1f9de667: Ce.value,
      v4307e336: Se.value,
      v1067f835: be.value
    }));
    const t = u, { datasourceId: n, id: r } = Ue(t), c = Y(qe.TINY_EMITTER), l = Y(ye), p = je().params.pageid || "";
    class E extends x {
      setValue(h) {
        i.value?.progress && (i.value.progress.value = String(h));
      }
      setMax(h) {
        i.value?.max && (i.value.max.value = String(h));
      }
      reset() {
        i.value?.progress && (i.value.progress.value = "0");
      }
    }
    const g = new E();
    e(g), ke(() => {
      r?.value && l.unregisterInstance(r.value);
    });
    const _ = () => {
      r?.value && c.emit("widget:ProgressWidget:click", {
        type: "widget:ProgressWidget:click",
        widgetId: r.value,
        payload: { widgetId: r.value, timestamp: Date.now() }
      });
    }, N = () => {
      r?.value && c.emit("widget:ProgressWidget:right_click", {
        type: "widget:ProgressWidget:right_click",
        widgetId: r.value,
        payload: { widgetId: r.value, timestamp: Date.now() }
      });
    }, i = ae(u, "configv"), m = oe(null), { update: b } = Ke(n, "object", m);
    W(n, (d, h) => {
      b(d, h);
    });
    const pe = {
      isGradient: !1,
      isVertical: !1,
      valueAlign: "center",
      valueJustify: "center"
    }, ge = {
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
    We(() => {
      r?.value && l.registerInstance(r.value, g, "ProgressWidget", p), i.value || (i.value = new s());
      for (const [d, h] of Object.entries(ge)) {
        const S = i.value[d];
        if (S == null)
          i.value[d] = new o(h);
        else if (!(S instanceof o)) if (typeof S == "object" && "value" in S) {
          const y = new o(S.value);
          "variable" in S && (y.variable = S.variable), i.value[d] = y;
        } else
          i.value[d] = new o(S);
      }
      for (const [d, h] of Object.entries(pe))
        (i.value[d] === void 0 || i.value[d] === null) && (i.value[d] = h);
    });
    const he = f(() => i.value.backgroundColor?.value), fe = f(() => {
      const d = i.value.rotation?.value;
      return parseFloat(d) || 0;
    }), Ee = f(() => i.value.gradientColor?.value), Ce = f(
      () => i.value.isGradient ? `linear-gradient(${fe.value}deg, ${Ee.value})` : i.value.fillColor?.value
    ), Se = f(
      () => i.value.isVertical ? "height .7s ease" : "width .7s ease"
    ), Re = f(() => parseFloat(i.value.min?.value) || 0), B = f(() => parseFloat(i.value.max?.value) || 100), ve = f(
      () => i.value.isVertical && O.value !== null ? `${O.value / B.value * 100}%` : "35px"
    ), Te = f(
      () => !i.value.isVertical && O.value !== null ? `${O.value / B.value * 100}%` : "35px"
    ), _e = f(
      () => i.value.isVertical && O.value !== null ? "35px" : "100%"
    ), Ne = f(
      () => !i.value.isVertical && O.value !== null ? "35px" : "100%"
    ), me = f(() => i.value.borderRadius?.value || "10px"), O = f(() => {
      const d = i.value.progress;
      if (!d) return null;
      const h = d.value;
      if (!h && h !== 0) return null;
      const { parts: S } = P.widget.extractValuesAndFullObject(String(h));
      let y = "";
      for (const w of S) {
        const K = w.path || w.path === null ? P.widget.getValueByPath(m.value, w.path) : void 0;
        y += K !== void 0 ? K : w.text;
      }
      const j = parseFloat(y);
      if (isNaN(j)) return null;
      const Le = Re.value, Ie = B.value;
      return Math.max(Le, Math.min(Ie, j));
    }), Oe = f(() => {
      switch (i.value?.valueAlign) {
        case "left":
          return "align-left";
        case "right":
          return "align-right";
        default:
          return "align-center";
      }
    }), be = f(() => i.value.textColor?.value || "#000000"), Ge = f(() => {
      switch (i.value?.valueJustify) {
        case "top":
          return "justify-top";
        case "bottom":
          return "justify-bottom";
        default:
          return "justify-center";
      }
    });
    return (d, h) => (L(), G("div", {
      class: "container",
      onClick: _,
      onContextmenu: Me(N, ["prevent"])
    }, [
      A("div", {
        class: z(["grid-layout", { vertical: i.value.isVertical }])
      }, [
        A("div", {
          class: z(["progress-value", [Ge.value, Oe.value]])
        }, M(O.value !== null ? O.value : "n/a"), 3),
        h[0] || (h[0] = A("div", { class: "progress-bar" }, [
          A("div", { class: "progress-percent" })
        ], -1))
      ], 2)
    ], 32));
  }
}), ce = (u, e) => {
  const t = u.__vccOpts || u;
  for (const [n, r] of e)
    t[n] = r;
  return t;
}, at = /* @__PURE__ */ ce(it, [["__scopeId", "data-v-645e6476"]]), ot = ["data-section"], nt = { class: "settings-container" }, lt = {
  key: 0,
  class: "hint"
}, ut = { class: "stops" }, ct = /* @__PURE__ */ ie({
  __name: "ProgressWidgetSettings",
  props: {
    modelValue: { required: !0 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(u) {
    const { t: e } = $e("progress"), t = oe([]), n = ae(u, "modelValue"), r = () => t.value.push({
      color: "#" + ("000000" + Math.floor(Math.random() * 16777215).toString(16)).slice(-6),
      location: Math.floor(Math.random() * 101)
    });
    W(
      [() => n.value.fillColor?.value, () => t.value],
      ([l, C]) => {
        if (!n.value.isGradient) return;
        const p = C.length < 1 ? `${l} 0%, #FAFAFA 85%` : C.map((g) => `${g.color} ${g.location}%`).join(", "), E = n.value.gradientColor;
        E && (E.value = p);
      },
      { deep: !0 }
    ), W(
      () => n.value.isGradient,
      (l) => {
        if (!l) {
          t.value = [];
          return;
        }
        const C = n.value.fillColor?.value ?? "#00FF00";
        t.value.push({ color: C, location: 0 }, { color: "#FAFAFA", location: 85 });
      }
    );
    const c = (l) => {
      t.value = t.value.filter((C, p) => p !== l);
    };
    return (l, C) => (L(), G("section", {
      class: "settings-section",
      "data-section-id": "stops",
      "data-section": T(e)("Settings.stops")
    }, [
      A("div", nt, [
        n.value.isGradient ? (L(), G(Z, { key: 1 }, [
          F(T(ee), {
            class: "add-btn",
            onClick: r
          }, {
            default: q(() => [
              Je(M(T(e)("Settings.add")), 1)
            ]),
            _: 1
          }),
          A("ul", ut, [
            (L(!0), G(Z, null, Xe(t.value, (p, E) => (L(), G("li", {
              key: E,
              class: "stop"
            }, [
              F(T(Pe), {
                modelValue: p.color,
                "onUpdate:modelValue": (g) => p.color = g,
                class: "stop__color"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              F(T(Qe), {
                modelValue: p.location,
                "onUpdate:modelValue": (g) => p.location = g,
                type: "number",
                suffix: "%",
                class: "stop__at"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              F(T(ee), {
                intent: "quiet",
                title: T(e)("Settings.remove"),
                onClick: (g) => c(E)
              }, {
                default: q(() => [
                  F(T(et), {
                    name: "delete",
                    size: "sm"
                  })
                ]),
                _: 1
              }, 8, ["title", "onClick"])
            ]))), 128))
          ])
        ], 64)) : (L(), G("p", lt, M(T(e)("Settings.gradientOff")), 1))
      ])
    ], 8, ot));
  }
}), dt = /* @__PURE__ */ ce(ct, [["__scopeId", "data-v-09bfd86c"]]), pt = "data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M105%207.5H15C10.8579%207.5%207.5%2010.8579%207.5%2015V105C7.5%20109.142%2010.8579%20112.5%2015%20112.5H105C109.142%20112.5%20112.5%20109.142%20112.5%20105V15C112.5%2010.8579%20109.142%207.5%20105%207.5ZM15%200C6.71573%200%200%206.71573%200%2015V105C0%20113.284%206.71573%20120%2015%20120H105C113.284%20120%20120%20113.284%20120%20105V15C120%206.71573%20113.284%200%20105%200H15Z'%20fill='%23606060'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M72.8493%2032.89C69.3438%2031.2286%2065.5539%2030.2648%2061.6902%2030.0469C60.8631%2030.0002%2060.1953%2029.3283%2060.2006%2028.4999L60.2291%2024C60.2344%2023.1716%2060.9105%2022.5011%2061.7381%2022.5395C66.6971%2022.7695%2071.5664%2023.9822%2076.0614%2026.1127C81.0087%2028.4575%2085.3826%2031.8571%2088.8758%2036.0728C92.3689%2040.2885%2094.8967%2045.2179%2096.2814%2050.5147C97.6661%2055.8115%2097.8742%2061.3473%2096.891%2066.7332C95.9079%2072.119%2093.7574%2077.2243%2090.5906%2081.6903C87.4238%2086.1563%2083.3175%2089.8748%2078.5602%2092.5844C73.8029%2095.294%2068.51%2096.9291%2063.0533%2097.3748C58.0955%2097.7797%2053.1118%2097.1939%2048.3913%2095.657C47.6035%2095.4005%2047.2079%2094.5344%2047.4957%2093.7576L49.0588%2089.5378C49.3465%2088.761%2050.2086%2088.3683%2050.9989%2088.6169C54.6904%2089.778%2058.5764%2090.2155%2062.4428%2089.8997C66.8081%2089.5431%2071.0424%2088.2351%2074.8483%2086.0674C78.6541%2083.8997%2081.9392%2080.9249%2084.4726%2077.3521C87.0061%2073.7793%2088.7265%2069.6951%2089.513%2065.3864C90.2995%2061.0777%2090.133%2056.6491%2089.0252%2052.4116C87.9175%2048.1741%2085.8953%2044.2306%2083.1007%2040.8581C80.3062%2037.4856%2076.8071%2034.7658%2072.8493%2032.89Z'%20fill='%23606060'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M54.3529%2029.0093C54.5013%2029.8243%2053.9599%2030.6016%2053.1533%2030.7906C49.8368%2031.5678%2046.6767%2032.9043%2043.8089%2034.7425C43.1115%2035.1895%2042.1766%2035.0366%2041.6953%2034.3624L39.0806%2030.6999C38.5992%2030.0257%2038.754%2029.0862%2039.4469%2028.6322C43.2192%2026.1606%2047.4066%2024.3897%2051.8076%2023.4047C52.616%2023.2238%2053.3979%2023.7671%2053.5464%2024.5822L54.3529%2029.0093Z'%20fill='%23606060'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M36.5688%2038.9443C37.185%2039.498%2037.2324%2040.4441%2036.7101%2041.0872C34.5626%2043.7313%2032.8811%2046.7221%2031.7377%2049.9308C31.4597%2050.7112%2030.6267%2051.1623%2029.8334%2050.9236L25.5243%2049.6269C24.731%2049.3882%2024.2785%2048.5505%2024.5487%2047.7673C26.0199%2043.5042%2028.2481%2039.5412%2031.1261%2036.069C31.6548%2035.4312%2032.6057%2035.3825%2033.2219%2035.9363L36.5688%2038.9443Z'%20fill='%23606060'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M28.5877%2057.6524C29.4138%2057.7142%2030.0295%2058.4341%2030.0091%2059.2623C29.9252%2062.6676%2030.4219%2066.0625%2031.4779%2069.3011C31.7347%2070.0887%2031.3511%2070.9548%2030.5773%2071.2507L26.374%2072.8578C25.6003%2073.1536%2024.7301%2072.767%2024.4654%2071.982C23.0245%2067.7085%2022.3663%2063.2099%2022.5225%2058.7028C22.5512%2057.8748%2023.2741%2057.2552%2024.1002%2057.3169L28.5877%2057.6524Z'%20fill='%23606060'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M33.3378%2076.7775C34.039%2076.3362%2034.962%2076.5494%2035.4377%2077.2276C37.3939%2080.0162%2039.8108%2082.4515%2042.5846%2084.4287C43.2592%2084.9095%2043.4654%2085.8341%2043.0188%2086.5319L40.5933%2090.3222C40.1467%2091.02%2039.2171%2091.2262%2038.5378%2090.7521C34.8394%2088.1713%2031.6367%2084.9443%2029.0839%2081.2265C28.615%2080.5435%2028.8281%2079.6155%2029.5293%2079.1743L33.3378%2076.7775Z'%20fill='%23606060'/%3e%3cpath%20d='M62.7264%2071.7358C62.7256%2071.7369%2062.7253%2071.7382%2062.7255%2071.7394V71.7394V71.7394C62.7257%2071.7407%2062.7254%2071.742%2062.7246%2071.7431L59.2097%2076.6014C58.7241%2077.2726%2057.7863%2077.4231%2057.1152%2076.9375L41.3164%2065.5073C40.6452%2065.0217%2040.4947%2064.084%2040.9803%2063.4128L43.6181%2059.7669C44.1036%2059.0957%2045.0414%2058.9453%2045.7126%2059.4309L55.4326%2066.4631C56.1038%2066.9487%2057.0416%2066.7983%2057.5271%2066.1271L73.3534%2044.2521C73.839%2043.5809%2074.7767%2043.4304%2075.4479%2043.916L79.0938%2046.5537C79.765%2047.0393%2079.9154%2047.9771%2079.4298%2048.6483L62.7264%2071.7358Z'%20fill='%23606060'/%3e%3c/svg%3e", gt = [
  { name: "Progress Clicked", type: "click", description: "Triggered when the progress widget is clicked", payloadType: $ },
  { name: "Progress Right Clicked", type: "right_click", description: "Triggered when the progress widget is right-clicked", payloadType: $ }
], ht = `<?xml version="1.0" encoding="UTF-8"?>
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

    <fields xsi:type="uimodel:GroupWidget" name="valueGroup" layout="VERTICAL" label="progress:Form.valueGroup">
      <fields xsi:type="uimodel:NumberWidget" name="progress"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.progress#//ProgressSettings/progress" label="progress:Form.progress"/>
      <fields xsi:type="uimodel:NumberWidget" name="min"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.progress#//ProgressSettings/min" label="progress:Form.min"/>
      <fields xsi:type="uimodel:NumberWidget" name="max"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.progress#//ProgressSettings/max" label="progress:Form.max"/>
    </fields>

    <fields xsi:type="uimodel:GroupWidget" name="barGroup" layout="VERTICAL" label="progress:Form.barGroup">
      <fields xsi:type="uimodel:CheckboxWidget" name="isVertical"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.progress#//ProgressSettings/isVertical" label="progress:Form.isVertical"/>
      <fields xsi:type="uimodel:InputWidget" name="fillColor"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.progress#//ProgressSettings/fillColor" label="progress:Form.fillColor"/>
      <fields xsi:type="uimodel:InputWidget" name="backgroundColor"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.progress#//ProgressSettings/backgroundColor" label="progress:Form.backgroundColor"/>
      <fields xsi:type="uimodel:InputWidget" name="barThickness"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.progress#//ProgressSettings/barThickness" label="progress:Form.barThickness"
          placeholder="20px"/>
      <fields xsi:type="uimodel:InputWidget" name="borderRadius"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.progress#//ProgressSettings/borderRadius" label="progress:Form.borderRadius"
          placeholder="0px"/>
    </fields>

    <fields xsi:type="uimodel:GroupWidget" name="gradientGroup" layout="VERTICAL" label="progress:Form.gradientGroup">
      <fields xsi:type="uimodel:CheckboxWidget" name="isGradient"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.progress#//ProgressSettings/isGradient" label="progress:Form.isGradient"/>
      <fields xsi:type="uimodel:NumberWidget" name="rotation"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.progress#//ProgressSettings/rotation" label="progress:Form.rotation" min="0" max="360" step="15">
        <visibilityCondition language="JS" body="self.isGradient === true || self.isGradient === 'true'"/>
      </fields>
    </fields>

    <fields xsi:type="uimodel:GroupWidget" name="labelGroup" layout="VERTICAL" label="progress:Form.labelGroup">
      <fields xsi:type="uimodel:InputWidget" name="textColor"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.progress#//ProgressSettings/textColor" label="progress:Form.textColor"/>
      <fields xsi:type="uimodel:SelectWidget" name="valueAlign"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.progress#//ProgressSettings/valueAlign" label="progress:Form.valueAlign">
        <values>left</values>
        <values>center</values>
        <values>right</values>
        <optionLabel language="JS" body="({ left: 'progress:Options.align.left', center: 'progress:Options.align.center', right: 'progress:Options.align.right' })[option] ?? option"/>
      </fields>
      <fields xsi:type="uimodel:SelectWidget" name="valueJustify"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.progress#//ProgressSettings/valueJustify" label="progress:Form.valueJustify">
        <values>top</values>
        <values>center</values>
        <values>bottom</values>
        <optionLabel language="JS" body="({ top: 'progress:Options.justify.top', center: 'progress:Options.justify.center', bottom: 'progress:Options.justify.bottom' })[option] ?? option"/>
      </fields>
    </fields>

  </components>
</uimodel:UIModel>
`, ft = { name: "Fortschritt" }, Et = { stops: "Farbstopps", gradientOff: "Der Farbverlauf ist ausgeschaltet. Er lässt sich unter „Darstellung“ einschalten.", add: "Farbstopp hinzufügen", remove: "Farbstopp entfernen" }, Ct = { valueGroup: "Wert", progress: "Fortschritt", min: "Kleinster Wert", max: "Größter Wert", barGroup: "Balken", isVertical: "Senkrecht", fillColor: "Balkenfarbe", backgroundColor: "Hintergrundfarbe", barThickness: "Dicke", borderRadius: "Eckenradius", gradientGroup: "Farbverlauf", isGradient: "Farbverlauf statt einer Farbe", rotation: "Richtung (Grad)", labelGroup: "Beschriftung", textColor: "Schriftfarbe", valueAlign: "Waagerecht", valueJustify: "Senkrecht" }, St = { align: { left: "Links", center: "Mittig", right: "Rechts" }, justify: { top: "Oben", center: "Mittig", bottom: "Unten" } }, Rt = {
  Widget: ft,
  Settings: Et,
  Form: Ct,
  Options: St
}, vt = { name: "Progress" }, Tt = { stops: "Colour stops", gradientOff: "The gradient is switched off. It can be switched on under “Appearance”.", add: "Add colour stop", remove: "Remove colour stop" }, _t = { valueGroup: "Value", progress: "Progress", min: "Minimum", max: "Maximum", barGroup: "Bar", isVertical: "Vertical", fillColor: "Bar colour", backgroundColor: "Background colour", barThickness: "Thickness", borderRadius: "Corner radius", gradientGroup: "Gradient", isGradient: "Gradient instead of a single colour", rotation: "Direction (degrees)", labelGroup: "Label", textColor: "Text colour", valueAlign: "Horizontal", valueJustify: "Vertical" }, Nt = { align: { left: "Left", center: "Centre", right: "Right" }, justify: { top: "Top", center: "Middle", bottom: "Bottom" } }, mt = {
  Widget: vt,
  Settings: Tt,
  Form: _t,
  Options: Nt
};
var Ot = Object.getOwnPropertyDescriptor, bt = (u, e, t, n) => {
  for (var r = n > 1 ? void 0 : n ? Ot(e, t) : e, c = u.length - 1, l; c >= 0; c--)
    (l = u[c]) && (r = l(r) || r);
  return r;
};
const de = "progress";
let te = class {
  namespace = de;
  resources = {
    de: Rt,
    en: mt
  };
};
te = bt([
  re({
    service: ["Translations"],
    properties: { "i18n.namespace": de }
  })
], te);
var Gt = Object.defineProperty, Lt = Object.getOwnPropertyDescriptor, X = (u, e, t, n) => {
  for (var r = n > 1 ? void 0 : n ? Lt(e, t) : e, c = u.length - 1, l; c >= 0; c--)
    (l = u[c]) && (r = (n ? l(e, t, r) : l(r)) || r);
  return n && r && Gt(e, t, r), r;
}, se = (u, e) => (t, n) => e(t, n, u);
a.eINSTANCE;
const I = "ProgressWidget";
let D = class {
  constructor(u, e) {
    this.events = u, this.actions = e;
  }
  type = I;
  name = "Progress";
  nameKey = "progress:Widget.name";
  /*
   * The settings form, as a model. Carried on the registration like the
   * icon, so whoever shows the settings does not have to know this widget
   * exists - and the shell needs no dependency on this bundle.
   */
  settingsForm = {
    xmi: ht,
    uri: "/progress-settings.ui.xmi",
    ePackage: () => a.eINSTANCE,
    create: () => new s(),
    /*
     * The gradient's stops stay with the hand-written component: they are a
     * table built up row by row, and the colour they produce is worked out
     * rather than typed.
     */
    unmodelledSections: ["Farbstopps"]
  };
  icon = pt;
  supportedDSTypes = [];
  component = at;
  settingsComponent = dt;
  register() {
    this.events.registerWidget(I, gt), this.actions.registerWidgetType(I, x, "widget");
  }
  unregister() {
    this.events.unregisterWidget(I), this.actions.unregisterWidgetType(I);
  }
};
X([
  Ve()
], D.prototype, "register", 1);
X([
  De()
], D.prototype, "unregister", 1);
D = X([
  re({
    service: [tt],
    properties: { "widget.type": I }
  }),
  se(0, H(Fe)),
  se(1, H(we))
], D);
export {
  s as ProgressSettingsImpl,
  te as ProgressTranslations,
  at as ProgressWidget,
  D as ProgressWidgetProvider,
  dt as ProgressWidgetSettings,
  a as ProgresswidgetsPackage,
  ht as progressSettingsFormXmi
};
