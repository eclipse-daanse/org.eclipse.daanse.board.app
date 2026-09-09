(function(){var i="ui.vue.widget.table.pivot",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".text-container[data-v-498e0ac7]{display:flex;flex-direction:column;width:100%;height:100%;gap:1rem;align-items:stretch}.component[data-v-498e0ac7]{overflow:hidden;padding:16px}.settings-container[data-v-6b0d43bf]{padding:16px}.settings-block[data-v-6b0d43bf]{display:flex;flex-direction:column;gap:12px;margin-bottom:16px}.settings-block[data-v-6b0d43bf]:last-child{margin-bottom:0}.settings-block h3[data-v-6b0d43bf]{margin:0 0 8px;font-size:14px;font-weight:600;color:var(--va-primary)}.hint-text[data-v-6b0d43bf]{margin:0 0 16px;color:var(--va-text-secondary);font-size:13px}.level-header[data-v-6b0d43bf]{display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;font-weight:600}.level-card[data-v-6b0d43bf]{border:1px solid #ddd;padding:16px;border-radius:4px;margin-bottom:12px;background:#fafafa;display:flex;flex-direction:column;gap:12px}.level-card-header[data-v-6b0d43bf]{display:flex;justify-content:space-between;align-items:center}.empty-state[data-v-6b0d43bf]{padding:20px;text-align:center;color:var(--va-text-secondary);background:#f5f5f5;border-radius:4px}.color-scale-row[data-v-6b0d43bf]{display:flex;gap:12px}.color-scale-row[data-v-6b0d43bf]>*{flex:1}\n";})();
import { PayloadImpl as Le, WidgetActionInterfaceImpl as Fe, EVENT_REGISTRY_ID as Ue, EVENT_ACTIONS_REGISTRY_ID as Be } from "org.eclipse.daanse.board.app.lib.api.events";
import { activate as We, deactivate as xe, component as He, inject as me } from "@eclipse-daanse/tsm";
import { defineComponent as ve, mergeModels as Me, toRefs as be, inject as ke, useModel as De, onMounted as Ge, computed as F, ref as Ie, watch as Re, createElementBlock as B, openBlock as R, withModifiers as Ye, createElementVNode as C, createBlock as Ce, createCommentVNode as Q, unref as y, resolveComponent as ae, Fragment as ge, createVNode as d, withCtx as p, createTextVNode as ie, renderList as Te, toDisplayString as pe } from "vue";
import { VariableWrapper as c, useVariableRepository as Xe, plainSettings as Ae, useDatasourceRepository as Ke } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { PivotTable as qe } from "org.eclipse.daanse.board.app.ui.vue.common.xmla";
import { BasicEObject as fe, BasicEFactory as ze, BasicEPackage as Ze, EPackageRegistry as Ve, BasicEClass as P, BasicEReference as S, BasicEAttribute as v, getEcorePackage as D, createContainmentEList as ne } from "@emfts/core";
import { VariableInput as U } from "org.eclipse.daanse.board.app.ui.vue.variable.components";
import { WIDGET_SERVICE_ID as Qe } from "org.eclipse.daanse.board.app.lib.api.widget";
const { identifiers: Je } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), je = "data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M105%207.5H15C10.8579%207.5%207.5%2010.8579%207.5%2015V105C7.5%20109.142%2010.8579%20112.5%2015%20112.5H105C109.142%20112.5%20112.5%20109.142%20112.5%20105V15C112.5%2010.8579%20109.142%207.5%20105%207.5ZM15%200C6.71573%200%200%206.71573%200%2015V105C0%20113.284%206.71573%20120%2015%20120H105C113.284%20120%20120%20113.284%20120%20105V15C120%206.71573%20113.284%200%20105%200H15Z'%20fill='%23606060'/%3e%3cpath%20d='M22.5%2048C22.5%2046.3431%2023.8431%2045%2025.5%2045H34.5C36.1569%2045%2037.5%2046.3431%2037.5%2048V94.5C37.5%2096.1569%2036.1569%2097.5%2034.5%2097.5H25.5C23.8431%2097.5%2022.5%2096.1569%2022.5%2094.5V48Z'%20fill='%23606060'/%3e%3cpath%20d='M45%2025.5C45%2023.8431%2046.3431%2022.5%2048%2022.5H94.5C96.1569%2022.5%2097.5%2023.8431%2097.5%2025.5V34.5C97.5%2036.1569%2096.1569%2037.5%2094.5%2037.5H48C46.3431%2037.5%2045%2036.1569%2045%2034.5V25.5Z'%20fill='%23606060'/%3e%3cpath%20d='M37.5%2025.5C37.5%2023.8431%2036.1569%2022.5%2034.5%2022.5H25.5C23.8431%2022.5%2022.5%2023.8431%2022.5%2025.5V34.5C22.5%2036.1569%2023.8431%2037.5%2025.5%2037.5H34.5C36.1569%2037.5%2037.5%2036.1569%2037.5%2034.5V25.5Z'%20fill='%23606060'/%3e%3cpath%20d='M57.4399%2077.5607C58.3849%2076.6157%2060.0006%2077.285%2060.0006%2078.6213V84C60.0006%2084.8284%2060.6722%2085.5%2061.5006%2085.5H84C84.8284%2085.5%2085.5%2084.8284%2085.5%2084V61.5C85.5%2060.6716%2084.8284%2060%2084%2060H78.6214C77.285%2060%2076.6158%2058.3843%2077.5608%2057.4393L88.9399%2046.0606C89.5257%2045.4749%2090.4755%2045.4749%2091.0612%2046.0607L102.439%2057.4394C103.384%2058.3843%20102.715%2060%20101.379%2060H96C95.1716%2060%2094.5%2060.6716%2094.5%2061.5V93C94.5%2093.8284%2093.8284%2094.5%2093%2094.5H61.5006C60.6722%2094.5%2060.0006%2095.1716%2060.0006%2096V101.379C60.0006%20102.715%2058.3849%20103.384%2057.44%20102.44L46.0607%2091.0613C45.4749%2090.4755%2045.4749%2089.5257%2046.0607%2088.9399L57.4399%2077.5607Z'%20fill='%23606060'/%3e%3c/svg%3e";
class O extends fe {
  // Feature ID Constants (eLiterals)
  static LEVEL = 0;
  static BACKGROUND_COLOR = 1;
  static TEXT_COLOR = 2;
  static FONT_WEIGHT = 3;
  // Private fields
  _level;
  _backgroundColor = new c();
  _textColor = new c();
  _fontWeight = 600;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return o.Literals.LEVEL_STYLE;
  }
  // Getters and Setters
  get level() {
    return this._level;
  }
  set level(e) {
    const t = this._level;
    this._level = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(O.LEVEL),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => O.LEVEL,
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
      getFeature: () => this.eClass().getEStructuralFeature(O.BACKGROUND_COLOR),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => O.BACKGROUND_COLOR,
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
      getFeature: () => this.eClass().getEStructuralFeature(O.TEXT_COLOR),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => O.TEXT_COLOR,
      merge: () => !1
    });
  }
  get fontWeight() {
    return this._fontWeight;
  }
  set fontWeight(e) {
    const t = this._fontWeight;
    this._fontWeight = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(O.FONT_WEIGHT),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => O.FONT_WEIGHT,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case O.LEVEL:
        return this.level;
      case O.BACKGROUND_COLOR:
        return this.backgroundColor;
      case O.TEXT_COLOR:
        return this.textColor;
      case O.FONT_WEIGHT:
        return this.fontWeight;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case O.LEVEL:
        this.level = t, super.eSet(e, t);
        break;
      case O.BACKGROUND_COLOR:
        this.backgroundColor = t, super.eSet(e, t);
        break;
      case O.TEXT_COLOR:
        this.textColor = t, super.eSet(e, t);
        break;
      case O.FONT_WEIGHT:
        this.fontWeight = t, super.eSet(e, t);
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
      case O.LEVEL:
        return this._level !== void 0;
      case O.BACKGROUND_COLOR:
        return this._backgroundColor !== new c();
      case O.TEXT_COLOR:
        return this._textColor !== new c();
      case O.FONT_WEIGHT:
        return this._fontWeight !== 600;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case O.LEVEL:
        this._level = void 0;
        return;
      case O.BACKGROUND_COLOR:
        this._backgroundColor = new c();
        return;
      case O.TEXT_COLOR:
        this._textColor = new c();
        return;
      case O.FONT_WEIGHT:
        this._fontWeight = 600;
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
      level: this.level,
      backgroundColor: this.backgroundColor,
      textColor: this.textColor,
      fontWeight: this.fontWeight
    };
  }
}
class i extends fe {
  // Feature ID Constants (eLiterals)
  static ID = 0;
  static CONDITION_TYPE = 1;
  static PRIORITY = 2;
  static VALUE1 = 3;
  static VALUE2 = 4;
  static BACKGROUND_COLOR = 5;
  static TEXT_COLOR = 6;
  static MIN_COLOR = 7;
  static MAX_COLOR = 8;
  static FONT_WEIGHT = 9;
  // Private fields
  _id;
  _conditionType = "greaterThan";
  _priority;
  _value1 = "0";
  _value2 = "100";
  _backgroundColor = new c();
  _textColor = new c();
  _minColor = new c();
  _maxColor = new c();
  _fontWeight = 400;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return o.Literals.CONDITIONAL_FORMAT;
  }
  // Getters and Setters
  get id() {
    return this._id;
  }
  set id(e) {
    const t = this._id;
    this._id = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(i.ID),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => i.ID,
      merge: () => !1
    });
  }
  get conditionType() {
    return this._conditionType;
  }
  set conditionType(e) {
    const t = this._conditionType;
    this._conditionType = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(i.CONDITION_TYPE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => i.CONDITION_TYPE,
      merge: () => !1
    });
  }
  get priority() {
    return this._priority;
  }
  set priority(e) {
    const t = this._priority;
    this._priority = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(i.PRIORITY),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => i.PRIORITY,
      merge: () => !1
    });
  }
  get value1() {
    return this._value1;
  }
  set value1(e) {
    const t = this._value1;
    this._value1 = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(i.VALUE1),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => i.VALUE1,
      merge: () => !1
    });
  }
  get value2() {
    return this._value2;
  }
  set value2(e) {
    const t = this._value2;
    this._value2 = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(i.VALUE2),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => i.VALUE2,
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
      getFeature: () => this.eClass().getEStructuralFeature(i.BACKGROUND_COLOR),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => i.BACKGROUND_COLOR,
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
      getFeature: () => this.eClass().getEStructuralFeature(i.TEXT_COLOR),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => i.TEXT_COLOR,
      merge: () => !1
    });
  }
  get minColor() {
    return this._minColor;
  }
  set minColor(e) {
    const t = this._minColor;
    this._minColor = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(i.MIN_COLOR),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => i.MIN_COLOR,
      merge: () => !1
    });
  }
  get maxColor() {
    return this._maxColor;
  }
  set maxColor(e) {
    const t = this._maxColor;
    this._maxColor = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(i.MAX_COLOR),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => i.MAX_COLOR,
      merge: () => !1
    });
  }
  get fontWeight() {
    return this._fontWeight;
  }
  set fontWeight(e) {
    const t = this._fontWeight;
    this._fontWeight = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(i.FONT_WEIGHT),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => i.FONT_WEIGHT,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case i.ID:
        return this.id;
      case i.CONDITION_TYPE:
        return this.conditionType;
      case i.PRIORITY:
        return this.priority;
      case i.VALUE1:
        return this.value1;
      case i.VALUE2:
        return this.value2;
      case i.BACKGROUND_COLOR:
        return this.backgroundColor;
      case i.TEXT_COLOR:
        return this.textColor;
      case i.MIN_COLOR:
        return this.minColor;
      case i.MAX_COLOR:
        return this.maxColor;
      case i.FONT_WEIGHT:
        return this.fontWeight;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case i.ID:
        this.id = t, super.eSet(e, t);
        break;
      case i.CONDITION_TYPE:
        this.conditionType = t, super.eSet(e, t);
        break;
      case i.PRIORITY:
        this.priority = t, super.eSet(e, t);
        break;
      case i.VALUE1:
        this.value1 = t, super.eSet(e, t);
        break;
      case i.VALUE2:
        this.value2 = t, super.eSet(e, t);
        break;
      case i.BACKGROUND_COLOR:
        this.backgroundColor = t, super.eSet(e, t);
        break;
      case i.TEXT_COLOR:
        this.textColor = t, super.eSet(e, t);
        break;
      case i.MIN_COLOR:
        this.minColor = t, super.eSet(e, t);
        break;
      case i.MAX_COLOR:
        this.maxColor = t, super.eSet(e, t);
        break;
      case i.FONT_WEIGHT:
        this.fontWeight = t, super.eSet(e, t);
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
      case i.ID:
        return this._id !== void 0;
      case i.CONDITION_TYPE:
        return this._conditionType !== "greaterThan";
      case i.PRIORITY:
        return this._priority !== void 0;
      case i.VALUE1:
        return this._value1 !== "0";
      case i.VALUE2:
        return this._value2 !== "100";
      case i.BACKGROUND_COLOR:
        return this._backgroundColor !== new c();
      case i.TEXT_COLOR:
        return this._textColor !== new c();
      case i.MIN_COLOR:
        return this._minColor !== new c();
      case i.MAX_COLOR:
        return this._maxColor !== new c();
      case i.FONT_WEIGHT:
        return this._fontWeight !== 400;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case i.ID:
        this._id = void 0;
        return;
      case i.CONDITION_TYPE:
        this._conditionType = "greaterThan";
        return;
      case i.PRIORITY:
        this._priority = void 0;
        return;
      case i.VALUE1:
        this._value1 = "0";
        return;
      case i.VALUE2:
        this._value2 = "100";
        return;
      case i.BACKGROUND_COLOR:
        this._backgroundColor = new c();
        return;
      case i.TEXT_COLOR:
        this._textColor = new c();
        return;
      case i.MIN_COLOR:
        this._minColor = new c();
        return;
      case i.MAX_COLOR:
        this._maxColor = new c();
        return;
      case i.FONT_WEIGHT:
        this._fontWeight = 400;
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
      id: this.id,
      conditionType: this.conditionType,
      priority: this.priority,
      value1: this.value1,
      value2: this.value2,
      backgroundColor: this.backgroundColor,
      textColor: this.textColor,
      minColor: this.minColor,
      maxColor: this.maxColor,
      fontWeight: this.fontWeight
    };
  }
}
class x extends Le {
  // Feature ID Constants (eLiterals)
  static UNIQUE_NAME = 4;
  // Private fields
  _uniqueName;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return o.Literals.HEADER_EXPANDED_PAYLOAD;
  }
  // Getters and Setters
  get uniqueName() {
    return this._uniqueName;
  }
  set uniqueName(e) {
    const t = this._uniqueName;
    this._uniqueName = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(x.UNIQUE_NAME),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => x.UNIQUE_NAME,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case x.UNIQUE_NAME:
        return this.uniqueName;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case x.UNIQUE_NAME:
        this.uniqueName = t, super.eSet(e, t);
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
      case x.UNIQUE_NAME:
        return this._uniqueName !== void 0;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case x.UNIQUE_NAME:
        this._uniqueName = void 0;
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
      uniqueName: this.uniqueName
    };
  }
}
class H extends Le {
  // Feature ID Constants (eLiterals)
  static UNIQUE_NAME = 4;
  // Private fields
  _uniqueName;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return o.Literals.HEADER_CLICKED_PAYLOAD;
  }
  // Getters and Setters
  get uniqueName() {
    return this._uniqueName;
  }
  set uniqueName(e) {
    const t = this._uniqueName;
    this._uniqueName = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(H.UNIQUE_NAME),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => H.UNIQUE_NAME,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case H.UNIQUE_NAME:
        return this.uniqueName;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case H.UNIQUE_NAME:
        this.uniqueName = t, super.eSet(e, t);
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
      case H.UNIQUE_NAME:
        return this._uniqueName !== void 0;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case H.UNIQUE_NAME:
        this._uniqueName = void 0;
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
      uniqueName: this.uniqueName
    };
  }
}
class Se extends ze {
  // Lazy singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new Se()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(o.eINSTANCE);
  }
  /**
   * Create a new PivotTable instance
   */
  createPivotTable() {
    return new r();
  }
  /**
   * Create a new LevelStyle instance
   */
  createLevelStyle() {
    return new O();
  }
  /**
   * Create a new ConditionalFormat instance
   */
  createConditionalFormat() {
    return new i();
  }
  /**
   * Create a new HeaderExpandedPayload instance
   */
  createHeaderExpandedPayload() {
    return new x();
  }
  /**
   * Create a new HeaderClickedPayload instance
   */
  createHeaderClickedPayload() {
    return new H();
  }
  /**
   * Create an instance of the given class
   */
  create(e) {
    switch (e.getName()) {
      case "PivotTable":
        return this.createPivotTable();
      case "LevelStyle":
        return this.createLevelStyle();
      case "ConditionalFormat":
        return this.createConditionalFormat();
      case "HeaderExpandedPayload":
        return this.createHeaderExpandedPayload();
      case "HeaderClickedPayload":
        return this.createHeaderClickedPayload();
      default:
        throw new Error(`Unknown class: ${e.getName()}`);
    }
  }
}
function m(N) {
  const e = Ve.INSTANCE.getEPackage(N);
  if (!e)
    throw new Error(`EPackage '${N}' is not registered. Access the eINSTANCE of that model's generated package (or register it via EPackageRegistry.INSTANCE.registerPackage) before initializing PivotTablePackage.`);
  return e;
}
class o extends Ze {
  static eNAME = "PivotTable";
  static eNS_URI = "http://org.eclipse.daanse.board.app.ui.vue.widget.table.pivot";
  static eNS_PREFIX = "PivotTable";
  // Singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new o(), this._instance.init()), this._instance;
  }
  /**
   * Literals for quick access to metaclasses and features
   */
  static Literals = {
    PIVOT_TABLE: null,
    PIVOT_TABLE__ROWS: null,
    PIVOT_TABLE__COLUMNS: null,
    PIVOT_TABLE__CELLS: null,
    PIVOT_TABLE__TABLE_STATE: null,
    PIVOT_TABLE__HEADER_BACKGROUND_COLOR: null,
    PIVOT_TABLE__HEADER_TEXT_COLOR: null,
    PIVOT_TABLE__CELL_BACKGROUND_COLOR: null,
    PIVOT_TABLE__CELL_TEXT_COLOR: null,
    PIVOT_TABLE__BORDER_COLOR: null,
    PIVOT_TABLE__DEFAULT_COLUMN_WIDTH: null,
    PIVOT_TABLE__DEFAULT_ROW_HEIGHT: null,
    PIVOT_TABLE__FONT_SIZE: null,
    PIVOT_TABLE__HEADER_FONT_WEIGHT: null,
    PIVOT_TABLE__CELL_TEXT_ALIGN: null,
    PIVOT_TABLE__SHOW_ROWS_PROPERTIES: null,
    PIVOT_TABLE__SHOW_COLUMNS_PROPERTIES: null,
    PIVOT_TABLE__SHOW_SINGLE_MEASURE_HEADER: null,
    PIVOT_TABLE__ROW_LEVEL_STYLES: null,
    PIVOT_TABLE__COLUMN_LEVEL_STYLES: null,
    PIVOT_TABLE__CONDITIONAL_FORMATS: null,
    LEVEL_STYLE: null,
    LEVEL_STYLE__LEVEL: null,
    LEVEL_STYLE__BACKGROUND_COLOR: null,
    LEVEL_STYLE__TEXT_COLOR: null,
    LEVEL_STYLE__FONT_WEIGHT: null,
    CONDITIONAL_FORMAT: null,
    CONDITIONAL_FORMAT__ID: null,
    CONDITIONAL_FORMAT__CONDITION_TYPE: null,
    CONDITIONAL_FORMAT__PRIORITY: null,
    CONDITIONAL_FORMAT__VALUE1: null,
    CONDITIONAL_FORMAT__VALUE2: null,
    CONDITIONAL_FORMAT__BACKGROUND_COLOR: null,
    CONDITIONAL_FORMAT__TEXT_COLOR: null,
    CONDITIONAL_FORMAT__MIN_COLOR: null,
    CONDITIONAL_FORMAT__MAX_COLOR: null,
    CONDITIONAL_FORMAT__FONT_WEIGHT: null,
    JAVA_OBJECT: null,
    PIVOT_TABLE_INTERFACE: null,
    HEADER_EXPANDED_PAYLOAD: null,
    HEADER_EXPANDED_PAYLOAD__UNIQUE_NAME: null,
    HEADER_CLICKED_PAYLOAD: null,
    HEADER_CLICKED_PAYLOAD__UNIQUE_NAME: null
  };
  constructor() {
    super(), this.setName(o.eNAME), this.setNsURI(o.eNS_URI), this.setNsPrefix(o.eNS_PREFIX);
  }
  /**
   * Initialize package contents
   */
  init() {
    Ve.INSTANCE.set(o.eNS_URI, this), this.setEFactoryInstance(Se.eINSTANCE);
    const e = new P();
    e.setName("PivotTable"), e.setAbstract(!1), e.setInterface(!1), this.getEClassifiers().push(e), e.setEPackage(this), o.Literals.PIVOT_TABLE = e;
    const t = new S();
    t.setContainment(!0), t.setName("rows"), t.setLowerBound(1), t.setUpperBound(-1), e.getEStructuralFeatures().push(t), o.Literals.PIVOT_TABLE__ROWS = t;
    const n = new S();
    n.setContainment(!0), n.setName("columns"), n.setLowerBound(1), n.setUpperBound(-1), e.getEStructuralFeatures().push(n), o.Literals.PIVOT_TABLE__COLUMNS = n;
    const _ = new S();
    _.setContainment(!0), _.setName("cells"), _.setLowerBound(1), _.setUpperBound(-1), e.getEStructuralFeatures().push(_), o.Literals.PIVOT_TABLE__CELLS = _;
    const A = new v();
    A.setName("tableState"), A.setLowerBound(0), A.setUpperBound(1), e.getEStructuralFeatures().push(A), o.Literals.PIVOT_TABLE__TABLE_STATE = A;
    const I = new S();
    I.setContainment(!1), I.setName("headerBackgroundColor"), I.setLowerBound(0), I.setUpperBound(1), e.getEStructuralFeatures().push(I), o.Literals.PIVOT_TABLE__HEADER_BACKGROUND_COLOR = I;
    const M = new S();
    M.setContainment(!1), M.setName("headerTextColor"), M.setLowerBound(0), M.setUpperBound(1), e.getEStructuralFeatures().push(M), o.Literals.PIVOT_TABLE__HEADER_TEXT_COLOR = M;
    const b = new S();
    b.setContainment(!1), b.setName("cellBackgroundColor"), b.setLowerBound(0), b.setUpperBound(1), e.getEStructuralFeatures().push(b), o.Literals.PIVOT_TABLE__CELL_BACKGROUND_COLOR = b;
    const k = new S();
    k.setContainment(!1), k.setName("cellTextColor"), k.setLowerBound(0), k.setUpperBound(1), e.getEStructuralFeatures().push(k), o.Literals.PIVOT_TABLE__CELL_TEXT_COLOR = k;
    const G = new S();
    G.setContainment(!1), G.setName("borderColor"), G.setLowerBound(0), G.setUpperBound(1), e.getEStructuralFeatures().push(G), o.Literals.PIVOT_TABLE__BORDER_COLOR = G;
    const Y = new S();
    Y.setContainment(!1), Y.setName("defaultColumnWidth"), Y.setLowerBound(0), Y.setUpperBound(1), e.getEStructuralFeatures().push(Y), o.Literals.PIVOT_TABLE__DEFAULT_COLUMN_WIDTH = Y;
    const X = new S();
    X.setContainment(!1), X.setName("defaultRowHeight"), X.setLowerBound(0), X.setUpperBound(1), e.getEStructuralFeatures().push(X), o.Literals.PIVOT_TABLE__DEFAULT_ROW_HEIGHT = X;
    const K = new S();
    K.setContainment(!1), K.setName("fontSize"), K.setLowerBound(0), K.setUpperBound(1), e.getEStructuralFeatures().push(K), o.Literals.PIVOT_TABLE__FONT_SIZE = K;
    const q = new S();
    q.setContainment(!1), q.setName("headerFontWeight"), q.setLowerBound(0), q.setUpperBound(1), e.getEStructuralFeatures().push(q), o.Literals.PIVOT_TABLE__HEADER_FONT_WEIGHT = q;
    const z = new v();
    z.setName("cellTextAlign"), z.setLowerBound(0), z.setUpperBound(1), e.getEStructuralFeatures().push(z), o.Literals.PIVOT_TABLE__CELL_TEXT_ALIGN = z;
    const Z = new v();
    Z.setName("showRowsProperties"), Z.setLowerBound(0), Z.setUpperBound(1), e.getEStructuralFeatures().push(Z), o.Literals.PIVOT_TABLE__SHOW_ROWS_PROPERTIES = Z;
    const T = new v();
    T.setName("showColumnsProperties"), T.setLowerBound(0), T.setUpperBound(1), e.getEStructuralFeatures().push(T), o.Literals.PIVOT_TABLE__SHOW_COLUMNS_PROPERTIES = T;
    const J = new v();
    J.setName("showSingleMeasureHeader"), J.setLowerBound(0), J.setUpperBound(1), e.getEStructuralFeatures().push(J), o.Literals.PIVOT_TABLE__SHOW_SINGLE_MEASURE_HEADER = J;
    const u = new S();
    u.setContainment(!0), u.setName("rowLevelStyles"), u.setLowerBound(0), u.setUpperBound(-1), e.getEStructuralFeatures().push(u), o.Literals.PIVOT_TABLE__ROW_LEVEL_STYLES = u;
    const l = new S();
    l.setContainment(!0), l.setName("columnLevelStyles"), l.setLowerBound(0), l.setUpperBound(-1), e.getEStructuralFeatures().push(l), o.Literals.PIVOT_TABLE__COLUMN_LEVEL_STYLES = l;
    const V = new S();
    V.setContainment(!0), V.setName("conditionalFormats"), V.setLowerBound(0), V.setUpperBound(-1), e.getEStructuralFeatures().push(V), o.Literals.PIVOT_TABLE__CONDITIONAL_FORMATS = V;
    const g = new P();
    g.setName("LevelStyle"), g.setAbstract(!1), g.setInterface(!1), this.getEClassifiers().push(g), g.setEPackage(this), o.Literals.LEVEL_STYLE = g;
    const f = new v();
    f.setName("level"), f.setLowerBound(0), f.setUpperBound(1), g.getEStructuralFeatures().push(f), o.Literals.LEVEL_STYLE__LEVEL = f;
    const L = new S();
    L.setContainment(!1), L.setName("backgroundColor"), L.setLowerBound(0), L.setUpperBound(1), g.getEStructuralFeatures().push(L), o.Literals.LEVEL_STYLE__BACKGROUND_COLOR = L;
    const W = new S();
    W.setContainment(!1), W.setName("textColor"), W.setLowerBound(0), W.setUpperBound(1), g.getEStructuralFeatures().push(W), o.Literals.LEVEL_STYLE__TEXT_COLOR = W;
    const w = new v();
    w.setName("fontWeight"), w.setLowerBound(0), w.setUpperBound(1), g.getEStructuralFeatures().push(w), o.Literals.LEVEL_STYLE__FONT_WEIGHT = w;
    const s = new P();
    s.setName("ConditionalFormat"), s.setAbstract(!1), s.setInterface(!1), this.getEClassifiers().push(s), s.setEPackage(this), o.Literals.CONDITIONAL_FORMAT = s;
    const E = new v();
    E.setName("id"), E.setLowerBound(0), E.setUpperBound(1), s.getEStructuralFeatures().push(E), o.Literals.CONDITIONAL_FORMAT__ID = E;
    const a = new v();
    a.setName("conditionType"), a.setLowerBound(0), a.setUpperBound(1), s.getEStructuralFeatures().push(a), o.Literals.CONDITIONAL_FORMAT__CONDITION_TYPE = a;
    const h = new v();
    h.setName("priority"), h.setLowerBound(0), h.setUpperBound(1), s.getEStructuralFeatures().push(h), o.Literals.CONDITIONAL_FORMAT__PRIORITY = h;
    const de = new v();
    de.setName("value1"), de.setLowerBound(0), de.setUpperBound(1), s.getEStructuralFeatures().push(de), o.Literals.CONDITIONAL_FORMAT__VALUE1 = de;
    const ce = new v();
    ce.setName("value2"), ce.setLowerBound(0), ce.setUpperBound(1), s.getEStructuralFeatures().push(ce), o.Literals.CONDITIONAL_FORMAT__VALUE2 = ce;
    const ee = new S();
    ee.setContainment(!1), ee.setName("backgroundColor"), ee.setLowerBound(0), ee.setUpperBound(1), s.getEStructuralFeatures().push(ee), o.Literals.CONDITIONAL_FORMAT__BACKGROUND_COLOR = ee;
    const te = new S();
    te.setContainment(!1), te.setName("textColor"), te.setLowerBound(0), te.setUpperBound(1), s.getEStructuralFeatures().push(te), o.Literals.CONDITIONAL_FORMAT__TEXT_COLOR = te;
    const se = new S();
    se.setContainment(!1), se.setName("minColor"), se.setLowerBound(0), se.setUpperBound(1), s.getEStructuralFeatures().push(se), o.Literals.CONDITIONAL_FORMAT__MIN_COLOR = se;
    const re = new S();
    re.setContainment(!1), re.setName("maxColor"), re.setLowerBound(0), re.setUpperBound(1), s.getEStructuralFeatures().push(re), o.Literals.CONDITIONAL_FORMAT__MAX_COLOR = re;
    const he = new v();
    he.setName("fontWeight"), he.setLowerBound(0), he.setUpperBound(1), s.getEStructuralFeatures().push(he), o.Literals.CONDITIONAL_FORMAT__FONT_WEIGHT = he;
    const le = new P();
    le.setName("JavaObject"), le.setAbstract(!0), le.setInterface(!1), this.getEClassifiers().push(le), le.setEPackage(this), o.Literals.JAVA_OBJECT = le;
    const oe = new P();
    oe.setName("PivotTableInterface"), oe.setAbstract(!0), oe.setInterface(!1), this.getEClassifiers().push(oe), oe.setEPackage(this), o.Literals.PIVOT_TABLE_INTERFACE = oe;
    const j = new P();
    j.setName("HeaderExpandedPayload"), j.setAbstract(!1), j.setInterface(!1), this.getEClassifiers().push(j), j.setEPackage(this), o.Literals.HEADER_EXPANDED_PAYLOAD = j;
    const Ee = new v();
    Ee.setName("uniqueName"), Ee.setLowerBound(0), Ee.setUpperBound(1), j.getEStructuralFeatures().push(Ee), o.Literals.HEADER_EXPANDED_PAYLOAD__UNIQUE_NAME = Ee;
    const $ = new P();
    $.setName("HeaderClickedPayload"), $.setAbstract(!1), $.setInterface(!1), this.getEClassifiers().push($), $.setEPackage(this), o.Literals.HEADER_CLICKED_PAYLOAD = $;
    const _e = new v();
    _e.setName("uniqueName"), _e.setLowerBound(0), _e.setUpperBound(1), $.getEStructuralFeatures().push(_e), o.Literals.HEADER_CLICKED_PAYLOAD__UNIQUE_NAME = _e, o.Literals.PIVOT_TABLE_INTERFACE.getESuperTypes().push(m("http://org.eclipse.daanse.board.app.lib.events").getEClassifier("WidgetActionInterface")), o.Literals.HEADER_EXPANDED_PAYLOAD.getESuperTypes().push(m("http://org.eclipse.daanse.board.app.lib.events").getEClassifier("Payload")), o.Literals.HEADER_CLICKED_PAYLOAD.getESuperTypes().push(m("http://org.eclipse.daanse.board.app.lib.events").getEClassifier("Payload")), o.Literals.PIVOT_TABLE__ROWS.setEType(o.Literals.JAVA_OBJECT), o.Literals.PIVOT_TABLE__COLUMNS.setEType(o.Literals.JAVA_OBJECT), o.Literals.PIVOT_TABLE__CELLS.setEType(o.Literals.JAVA_OBJECT), o.Literals.PIVOT_TABLE__TABLE_STATE.setEType(D().getEClassifier("EJavaObject")), o.Literals.PIVOT_TABLE__HEADER_BACKGROUND_COLOR.setEType(m("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), o.Literals.PIVOT_TABLE__HEADER_TEXT_COLOR.setEType(m("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), o.Literals.PIVOT_TABLE__CELL_BACKGROUND_COLOR.setEType(m("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), o.Literals.PIVOT_TABLE__CELL_TEXT_COLOR.setEType(m("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), o.Literals.PIVOT_TABLE__BORDER_COLOR.setEType(m("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), o.Literals.PIVOT_TABLE__DEFAULT_COLUMN_WIDTH.setEType(m("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), o.Literals.PIVOT_TABLE__DEFAULT_ROW_HEIGHT.setEType(m("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), o.Literals.PIVOT_TABLE__FONT_SIZE.setEType(m("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), o.Literals.PIVOT_TABLE__HEADER_FONT_WEIGHT.setEType(m("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), o.Literals.PIVOT_TABLE__CELL_TEXT_ALIGN.setEType(D().getEClassifier("EString")), o.Literals.PIVOT_TABLE__SHOW_ROWS_PROPERTIES.setEType(D().getEClassifier("EBoolean")), o.Literals.PIVOT_TABLE__SHOW_COLUMNS_PROPERTIES.setEType(D().getEClassifier("EBoolean")), o.Literals.PIVOT_TABLE__SHOW_SINGLE_MEASURE_HEADER.setEType(D().getEClassifier("EBoolean")), o.Literals.PIVOT_TABLE__ROW_LEVEL_STYLES.setEType(o.Literals.LEVEL_STYLE), o.Literals.PIVOT_TABLE__COLUMN_LEVEL_STYLES.setEType(o.Literals.LEVEL_STYLE), o.Literals.PIVOT_TABLE__CONDITIONAL_FORMATS.setEType(o.Literals.CONDITIONAL_FORMAT), o.Literals.LEVEL_STYLE__LEVEL.setEType(D().getEClassifier("EDouble")), o.Literals.LEVEL_STYLE__BACKGROUND_COLOR.setEType(m("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), o.Literals.LEVEL_STYLE__TEXT_COLOR.setEType(m("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), o.Literals.LEVEL_STYLE__FONT_WEIGHT.setEType(D().getEClassifier("EDouble")), o.Literals.CONDITIONAL_FORMAT__ID.setEType(D().getEClassifier("EString")), o.Literals.CONDITIONAL_FORMAT__CONDITION_TYPE.setEType(D().getEClassifier("EString")), o.Literals.CONDITIONAL_FORMAT__PRIORITY.setEType(D().getEClassifier("EDouble")), o.Literals.CONDITIONAL_FORMAT__VALUE1.setEType(D().getEClassifier("EString")), o.Literals.CONDITIONAL_FORMAT__VALUE2.setEType(D().getEClassifier("EString")), o.Literals.CONDITIONAL_FORMAT__BACKGROUND_COLOR.setEType(m("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), o.Literals.CONDITIONAL_FORMAT__TEXT_COLOR.setEType(m("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), o.Literals.CONDITIONAL_FORMAT__MIN_COLOR.setEType(m("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), o.Literals.CONDITIONAL_FORMAT__MAX_COLOR.setEType(m("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), o.Literals.CONDITIONAL_FORMAT__FONT_WEIGHT.setEType(D().getEClassifier("EDouble")), o.Literals.HEADER_EXPANDED_PAYLOAD__UNIQUE_NAME.setEType(D().getEClassifier("EString")), o.Literals.HEADER_CLICKED_PAYLOAD__UNIQUE_NAME.setEType(D().getEClassifier("EString"));
  }
}
class r extends fe {
  // Feature ID Constants (eLiterals)
  static ROWS = 0;
  static COLUMNS = 1;
  static CELLS = 2;
  static TABLE_STATE = 3;
  static HEADER_BACKGROUND_COLOR = 4;
  static HEADER_TEXT_COLOR = 5;
  static CELL_BACKGROUND_COLOR = 6;
  static CELL_TEXT_COLOR = 7;
  static BORDER_COLOR = 8;
  static DEFAULT_COLUMN_WIDTH = 9;
  static DEFAULT_ROW_HEIGHT = 10;
  static FONT_SIZE = 11;
  static HEADER_FONT_WEIGHT = 12;
  static CELL_TEXT_ALIGN = 13;
  static SHOW_ROWS_PROPERTIES = 14;
  static SHOW_COLUMNS_PROPERTIES = 15;
  static SHOW_SINGLE_MEASURE_HEADER = 16;
  static ROW_LEVEL_STYLES = 17;
  static COLUMN_LEVEL_STYLES = 18;
  static CONDITIONAL_FORMATS = 19;
  // Private fields
  _rows;
  _columns;
  _cells;
  _tableState;
  _headerBackgroundColor = new c();
  _headerTextColor = new c();
  _cellBackgroundColor = new c();
  _cellTextColor = new c();
  _borderColor = new c();
  _defaultColumnWidth = new c();
  _defaultRowHeight = new c();
  _fontSize = new c();
  _headerFontWeight = new c();
  _cellTextAlign = "left";
  _showRowsProperties = !1;
  _showColumnsProperties = !1;
  _showSingleMeasureHeader = !1;
  _rowLevelStyles;
  _columnLevelStyles;
  _conditionalFormats;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return o.Literals.PIVOT_TABLE;
  }
  // Getters and Setters
  get rows() {
    return this._rows || (this._rows = ne(this, this.eClass().getEStructuralFeature("rows"))), this._rows;
  }
  get columns() {
    return this._columns || (this._columns = ne(this, this.eClass().getEStructuralFeature("columns"))), this._columns;
  }
  get cells() {
    return this._cells || (this._cells = ne(this, this.eClass().getEStructuralFeature("cells"))), this._cells;
  }
  get tableState() {
    return this._tableState;
  }
  set tableState(e) {
    const t = this._tableState;
    this._tableState = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(r.TABLE_STATE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => r.TABLE_STATE,
      merge: () => !1
    });
  }
  get headerBackgroundColor() {
    return this._headerBackgroundColor;
  }
  set headerBackgroundColor(e) {
    const t = this._headerBackgroundColor;
    this._headerBackgroundColor = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(r.HEADER_BACKGROUND_COLOR),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => r.HEADER_BACKGROUND_COLOR,
      merge: () => !1
    });
  }
  get headerTextColor() {
    return this._headerTextColor;
  }
  set headerTextColor(e) {
    const t = this._headerTextColor;
    this._headerTextColor = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(r.HEADER_TEXT_COLOR),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => r.HEADER_TEXT_COLOR,
      merge: () => !1
    });
  }
  get cellBackgroundColor() {
    return this._cellBackgroundColor;
  }
  set cellBackgroundColor(e) {
    const t = this._cellBackgroundColor;
    this._cellBackgroundColor = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(r.CELL_BACKGROUND_COLOR),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => r.CELL_BACKGROUND_COLOR,
      merge: () => !1
    });
  }
  get cellTextColor() {
    return this._cellTextColor;
  }
  set cellTextColor(e) {
    const t = this._cellTextColor;
    this._cellTextColor = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(r.CELL_TEXT_COLOR),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => r.CELL_TEXT_COLOR,
      merge: () => !1
    });
  }
  get borderColor() {
    return this._borderColor;
  }
  set borderColor(e) {
    const t = this._borderColor;
    this._borderColor = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(r.BORDER_COLOR),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => r.BORDER_COLOR,
      merge: () => !1
    });
  }
  get defaultColumnWidth() {
    return this._defaultColumnWidth;
  }
  set defaultColumnWidth(e) {
    const t = this._defaultColumnWidth;
    this._defaultColumnWidth = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(r.DEFAULT_COLUMN_WIDTH),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => r.DEFAULT_COLUMN_WIDTH,
      merge: () => !1
    });
  }
  get defaultRowHeight() {
    return this._defaultRowHeight;
  }
  set defaultRowHeight(e) {
    const t = this._defaultRowHeight;
    this._defaultRowHeight = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(r.DEFAULT_ROW_HEIGHT),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => r.DEFAULT_ROW_HEIGHT,
      merge: () => !1
    });
  }
  get fontSize() {
    return this._fontSize;
  }
  set fontSize(e) {
    const t = this._fontSize;
    this._fontSize = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(r.FONT_SIZE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => r.FONT_SIZE,
      merge: () => !1
    });
  }
  get headerFontWeight() {
    return this._headerFontWeight;
  }
  set headerFontWeight(e) {
    const t = this._headerFontWeight;
    this._headerFontWeight = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(r.HEADER_FONT_WEIGHT),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => r.HEADER_FONT_WEIGHT,
      merge: () => !1
    });
  }
  get cellTextAlign() {
    return this._cellTextAlign;
  }
  set cellTextAlign(e) {
    const t = this._cellTextAlign;
    this._cellTextAlign = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(r.CELL_TEXT_ALIGN),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => r.CELL_TEXT_ALIGN,
      merge: () => !1
    });
  }
  get showRowsProperties() {
    return this._showRowsProperties;
  }
  set showRowsProperties(e) {
    const t = this._showRowsProperties;
    this._showRowsProperties = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(r.SHOW_ROWS_PROPERTIES),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => r.SHOW_ROWS_PROPERTIES,
      merge: () => !1
    });
  }
  get showColumnsProperties() {
    return this._showColumnsProperties;
  }
  set showColumnsProperties(e) {
    const t = this._showColumnsProperties;
    this._showColumnsProperties = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(r.SHOW_COLUMNS_PROPERTIES),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => r.SHOW_COLUMNS_PROPERTIES,
      merge: () => !1
    });
  }
  get showSingleMeasureHeader() {
    return this._showSingleMeasureHeader;
  }
  set showSingleMeasureHeader(e) {
    const t = this._showSingleMeasureHeader;
    this._showSingleMeasureHeader = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(r.SHOW_SINGLE_MEASURE_HEADER),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => r.SHOW_SINGLE_MEASURE_HEADER,
      merge: () => !1
    });
  }
  get rowLevelStyles() {
    return this._rowLevelStyles || (this._rowLevelStyles = ne(this, this.eClass().getEStructuralFeature("rowLevelStyles"))), this._rowLevelStyles;
  }
  get columnLevelStyles() {
    return this._columnLevelStyles || (this._columnLevelStyles = ne(this, this.eClass().getEStructuralFeature("columnLevelStyles"))), this._columnLevelStyles;
  }
  get conditionalFormats() {
    return this._conditionalFormats || (this._conditionalFormats = ne(this, this.eClass().getEStructuralFeature("conditionalFormats"))), this._conditionalFormats;
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case r.ROWS:
        return this.rows;
      case r.COLUMNS:
        return this.columns;
      case r.CELLS:
        return this.cells;
      case r.TABLE_STATE:
        return this.tableState;
      case r.HEADER_BACKGROUND_COLOR:
        return this.headerBackgroundColor;
      case r.HEADER_TEXT_COLOR:
        return this.headerTextColor;
      case r.CELL_BACKGROUND_COLOR:
        return this.cellBackgroundColor;
      case r.CELL_TEXT_COLOR:
        return this.cellTextColor;
      case r.BORDER_COLOR:
        return this.borderColor;
      case r.DEFAULT_COLUMN_WIDTH:
        return this.defaultColumnWidth;
      case r.DEFAULT_ROW_HEIGHT:
        return this.defaultRowHeight;
      case r.FONT_SIZE:
        return this.fontSize;
      case r.HEADER_FONT_WEIGHT:
        return this.headerFontWeight;
      case r.CELL_TEXT_ALIGN:
        return this.cellTextAlign;
      case r.SHOW_ROWS_PROPERTIES:
        return this.showRowsProperties;
      case r.SHOW_COLUMNS_PROPERTIES:
        return this.showColumnsProperties;
      case r.SHOW_SINGLE_MEASURE_HEADER:
        return this.showSingleMeasureHeader;
      case r.ROW_LEVEL_STYLES:
        return this.rowLevelStyles;
      case r.COLUMN_LEVEL_STYLES:
        return this.columnLevelStyles;
      case r.CONDITIONAL_FORMATS:
        return this.conditionalFormats;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case r.ROWS:
        this.rows.clear(), this.rows.addAll(t), super.eSet(e, t);
        break;
      case r.COLUMNS:
        this.columns.clear(), this.columns.addAll(t), super.eSet(e, t);
        break;
      case r.CELLS:
        this.cells.clear(), this.cells.addAll(t), super.eSet(e, t);
        break;
      case r.TABLE_STATE:
        this.tableState = t, super.eSet(e, t);
        break;
      case r.HEADER_BACKGROUND_COLOR:
        this.headerBackgroundColor = t, super.eSet(e, t);
        break;
      case r.HEADER_TEXT_COLOR:
        this.headerTextColor = t, super.eSet(e, t);
        break;
      case r.CELL_BACKGROUND_COLOR:
        this.cellBackgroundColor = t, super.eSet(e, t);
        break;
      case r.CELL_TEXT_COLOR:
        this.cellTextColor = t, super.eSet(e, t);
        break;
      case r.BORDER_COLOR:
        this.borderColor = t, super.eSet(e, t);
        break;
      case r.DEFAULT_COLUMN_WIDTH:
        this.defaultColumnWidth = t, super.eSet(e, t);
        break;
      case r.DEFAULT_ROW_HEIGHT:
        this.defaultRowHeight = t, super.eSet(e, t);
        break;
      case r.FONT_SIZE:
        this.fontSize = t, super.eSet(e, t);
        break;
      case r.HEADER_FONT_WEIGHT:
        this.headerFontWeight = t, super.eSet(e, t);
        break;
      case r.CELL_TEXT_ALIGN:
        this.cellTextAlign = t, super.eSet(e, t);
        break;
      case r.SHOW_ROWS_PROPERTIES:
        this.showRowsProperties = t, super.eSet(e, t);
        break;
      case r.SHOW_COLUMNS_PROPERTIES:
        this.showColumnsProperties = t, super.eSet(e, t);
        break;
      case r.SHOW_SINGLE_MEASURE_HEADER:
        this.showSingleMeasureHeader = t, super.eSet(e, t);
        break;
      case r.ROW_LEVEL_STYLES:
        this.rowLevelStyles.clear(), this.rowLevelStyles.addAll(t), super.eSet(e, t);
        break;
      case r.COLUMN_LEVEL_STYLES:
        this.columnLevelStyles.clear(), this.columnLevelStyles.addAll(t), super.eSet(e, t);
        break;
      case r.CONDITIONAL_FORMATS:
        this.conditionalFormats.clear(), this.conditionalFormats.addAll(t), super.eSet(e, t);
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
      case r.ROWS:
        return this._rows !== void 0 && !this._rows.isEmpty();
      case r.COLUMNS:
        return this._columns !== void 0 && !this._columns.isEmpty();
      case r.CELLS:
        return this._cells !== void 0 && !this._cells.isEmpty();
      case r.TABLE_STATE:
        return this._tableState !== void 0;
      case r.HEADER_BACKGROUND_COLOR:
        return this._headerBackgroundColor !== new c();
      case r.HEADER_TEXT_COLOR:
        return this._headerTextColor !== new c();
      case r.CELL_BACKGROUND_COLOR:
        return this._cellBackgroundColor !== new c();
      case r.CELL_TEXT_COLOR:
        return this._cellTextColor !== new c();
      case r.BORDER_COLOR:
        return this._borderColor !== new c();
      case r.DEFAULT_COLUMN_WIDTH:
        return this._defaultColumnWidth !== new c();
      case r.DEFAULT_ROW_HEIGHT:
        return this._defaultRowHeight !== new c();
      case r.FONT_SIZE:
        return this._fontSize !== new c();
      case r.HEADER_FONT_WEIGHT:
        return this._headerFontWeight !== new c();
      case r.CELL_TEXT_ALIGN:
        return this._cellTextAlign !== "left";
      case r.SHOW_ROWS_PROPERTIES:
        return this._showRowsProperties !== !1;
      case r.SHOW_COLUMNS_PROPERTIES:
        return this._showColumnsProperties !== !1;
      case r.SHOW_SINGLE_MEASURE_HEADER:
        return this._showSingleMeasureHeader !== !1;
      case r.ROW_LEVEL_STYLES:
        return this._rowLevelStyles !== void 0 && !this._rowLevelStyles.isEmpty();
      case r.COLUMN_LEVEL_STYLES:
        return this._columnLevelStyles !== void 0 && !this._columnLevelStyles.isEmpty();
      case r.CONDITIONAL_FORMATS:
        return this._conditionalFormats !== void 0 && !this._conditionalFormats.isEmpty();
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case r.ROWS:
        this._rows && this._rows.clear();
        return;
      case r.COLUMNS:
        this._columns && this._columns.clear();
        return;
      case r.CELLS:
        this._cells && this._cells.clear();
        return;
      case r.TABLE_STATE:
        this._tableState = void 0;
        return;
      case r.HEADER_BACKGROUND_COLOR:
        this._headerBackgroundColor = new c();
        return;
      case r.HEADER_TEXT_COLOR:
        this._headerTextColor = new c();
        return;
      case r.CELL_BACKGROUND_COLOR:
        this._cellBackgroundColor = new c();
        return;
      case r.CELL_TEXT_COLOR:
        this._cellTextColor = new c();
        return;
      case r.BORDER_COLOR:
        this._borderColor = new c();
        return;
      case r.DEFAULT_COLUMN_WIDTH:
        this._defaultColumnWidth = new c();
        return;
      case r.DEFAULT_ROW_HEIGHT:
        this._defaultRowHeight = new c();
        return;
      case r.FONT_SIZE:
        this._fontSize = new c();
        return;
      case r.HEADER_FONT_WEIGHT:
        this._headerFontWeight = new c();
        return;
      case r.CELL_TEXT_ALIGN:
        this._cellTextAlign = "left";
        return;
      case r.SHOW_ROWS_PROPERTIES:
        this._showRowsProperties = !1;
        return;
      case r.SHOW_COLUMNS_PROPERTIES:
        this._showColumnsProperties = !1;
        return;
      case r.SHOW_SINGLE_MEASURE_HEADER:
        this._showSingleMeasureHeader = !1;
        return;
      case r.ROW_LEVEL_STYLES:
        this._rowLevelStyles && this._rowLevelStyles.clear();
        return;
      case r.COLUMN_LEVEL_STYLES:
        this._columnLevelStyles && this._columnLevelStyles.clear();
        return;
      case r.CONDITIONAL_FORMATS:
        this._conditionalFormats && this._conditionalFormats.clear();
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
      rows: this.rows?.toArray?.() ?? this.rows,
      columns: this.columns?.toArray?.() ?? this.columns,
      cells: this.cells?.toArray?.() ?? this.cells,
      tableState: this.tableState,
      headerBackgroundColor: this.headerBackgroundColor,
      headerTextColor: this.headerTextColor,
      cellBackgroundColor: this.cellBackgroundColor,
      cellTextColor: this.cellTextColor,
      borderColor: this.borderColor,
      defaultColumnWidth: this.defaultColumnWidth,
      defaultRowHeight: this.defaultRowHeight,
      fontSize: this.fontSize,
      headerFontWeight: this.headerFontWeight,
      cellTextAlign: this.cellTextAlign,
      showRowsProperties: this.showRowsProperties,
      showColumnsProperties: this.showColumnsProperties,
      showSingleMeasureHeader: this.showSingleMeasureHeader,
      rowLevelStyles: this.rowLevelStyles?.toArray?.() ?? this.rowLevelStyles,
      columnLevelStyles: this.columnLevelStyles?.toArray?.() ?? this.columnLevelStyles,
      conditionalFormats: this.conditionalFormats?.toArray?.() ?? this.conditionalFormats
    };
  }
}
const $e = { class: "component" }, Pe = /* @__PURE__ */ ve({
  __name: "PivotTableWidget",
  props: /* @__PURE__ */ Me({
    datasourceId: {},
    id: {}
  }, {
    configv: { required: !0 },
    configvModifiers: {}
  }),
  emits: ["update:configv"],
  setup(N) {
    const e = N, { datasourceId: t, id: n } = be(e), _ = ke(Je.TINY_EMITTER), A = () => {
      n?.value && _.emit("widget:PivotTableWidget:click", {
        type: "widget:PivotTableWidget:click",
        widgetId: n.value,
        payload: { widgetId: n.value, timestamp: Date.now() }
      });
    }, I = () => {
      n?.value && _.emit("widget:PivotTableWidget:right_click", {
        type: "widget:PivotTableWidget:right_click",
        widgetId: n.value,
        payload: { widgetId: n.value, timestamp: Date.now() }
      });
    }, M = (a) => {
      n?.value && _.emit("widget:PivotTableWidget:row_clicked", {
        type: "widget:PivotTableWidget:row_clicked",
        widgetId: n.value,
        payload: { widgetId: n.value, timestamp: Date.now(), uniqueName: a }
      });
    }, b = (a) => {
      n?.value && _.emit("widget:PivotTableWidget:row_right_clicked", {
        type: "widget:PivotTableWidget:row_right_clicked",
        widgetId: n.value,
        payload: { widgetId: n.value, timestamp: Date.now(), uniqueName: a }
      });
    }, k = (a) => {
      n?.value && _.emit("widget:PivotTableWidget:column_clicked", {
        type: "widget:PivotTableWidget:column_clicked",
        widgetId: n.value,
        payload: { widgetId: n.value, timestamp: Date.now(), uniqueName: a }
      });
    }, G = (a) => {
      n?.value && _.emit("widget:PivotTableWidget:column_right_clicked", {
        type: "widget:PivotTableWidget:column_right_clicked",
        widgetId: n.value,
        payload: { widgetId: n.value, timestamp: Date.now(), uniqueName: a }
      });
    }, Y = (a) => {
      n?.value && _.emit("widget:PivotTableWidget:cell_clicked", {
        type: "widget:PivotTableWidget:cell_clicked",
        widgetId: n.value,
        payload: { widgetId: n.value, timestamp: Date.now(), rowId: a.rowId, colId: a.colId }
      });
    }, X = (a) => {
      n?.value && _.emit("widget:PivotTableWidget:cell_right_clicked", {
        type: "widget:PivotTableWidget:cell_right_clicked",
        widgetId: n.value,
        payload: { widgetId: n.value, timestamp: Date.now(), rowId: a.rowId, colId: a.colId }
      });
    }, K = (a) => {
      n?.value && _.emit("widget:PivotTableWidget:row_expanded", {
        type: "widget:PivotTableWidget:row_expanded",
        widgetId: n.value,
        payload: { widgetId: n.value, timestamp: Date.now(), uniqueName: a }
      });
    }, q = (a) => {
      n?.value && _.emit("widget:PivotTableWidget:row_collapsed", {
        type: "widget:PivotTableWidget:row_collapsed",
        widgetId: n.value,
        payload: { widgetId: n.value, timestamp: Date.now(), uniqueName: a }
      });
    }, z = (a) => {
      n?.value && _.emit("widget:PivotTableWidget:column_expanded", {
        type: "widget:PivotTableWidget:column_expanded",
        widgetId: n.value,
        payload: { widgetId: n.value, timestamp: Date.now(), uniqueName: a }
      });
    }, Z = (a) => {
      n?.value && _.emit("widget:PivotTableWidget:column_collapsed", {
        type: "widget:PivotTableWidget:column_collapsed",
        widgetId: n.value,
        payload: { widgetId: n.value, timestamp: Date.now(), uniqueName: a }
      });
    }, T = De(N, "configv"), { wrapParameters: J } = Xe(), u = new r();
    Ge(() => {
      T.value && Object.assign(T.value, {
        ...Ae(u),
        ...Ae(T.value)
      });
    });
    const l = J({
      headerBackgroundColor: F(() => T.value?.headerBackgroundColor?.value ?? u.headerBackgroundColor),
      headerTextColor: F(() => T.value?.headerTextColor?.value ?? u.headerTextColor),
      cellBackgroundColor: F(() => T.value?.cellBackgroundColor?.value ?? u.cellBackgroundColor),
      cellTextColor: F(() => T.value?.cellTextColor?.value ?? u.cellTextColor),
      borderColor: F(() => T.value?.borderColor?.value ?? u.borderColor),
      defaultColumnWidth: F(() => T.value?.defaultColumnWidth?.value ?? u.defaultColumnWidth),
      defaultRowHeight: F(() => T.value?.defaultRowHeight?.value ?? u.defaultRowHeight),
      fontSize: F(() => T.value?.fontSize?.value ?? u.fontSize),
      headerFontWeight: F(() => T.value?.headerFontWeight?.value ?? u.headerFontWeight),
      jsonArrays: F(() => {
        const a = {
          rowLevelStyles: T.value?.rowLevelStyles?.map((h) => ({
            ...h,
            backgroundColor: h.backgroundColor?.value ?? h.backgroundColor,
            textColor: h.textColor?.value ?? h.textColor
          })),
          columnLevelStyles: T.value?.columnLevelStyles?.map((h) => ({
            ...h,
            backgroundColor: h.backgroundColor?.value ?? h.backgroundColor,
            textColor: h.textColor?.value ?? h.textColor
          })),
          conditionalFormats: T.value?.conditionalFormats?.map((h) => ({
            ...h,
            id: h.id ?? "",
            priority: h.priority ?? 0,
            backgroundColor: h.backgroundColor?.value ?? h.backgroundColor,
            textColor: h.textColor?.value ?? h.textColor,
            minColor: h.minColor?.value ?? h.minColor,
            maxColor: h.maxColor?.value ?? h.maxColor
          }))
        };
        return JSON.stringify(a);
      })
    }), V = F(() => {
      try {
        const a = l.jsonArrays.value, h = JSON.parse(a || "{}");
        return {
          rowLevelStyles: h.rowLevelStyles || u.rowLevelStyles,
          columnLevelStyles: h.columnLevelStyles || u.columnLevelStyles,
          conditionalFormats: h.conditionalFormats || u.conditionalFormats
        };
      } catch {
        return {
          rowLevelStyles: u.rowLevelStyles,
          columnLevelStyles: u.columnLevelStyles,
          conditionalFormats: u.conditionalFormats
        };
      }
    }), g = F(() => ({
      headerBackgroundColor: l.headerBackgroundColor.value,
      headerTextColor: l.headerTextColor.value,
      cellBackgroundColor: l.cellBackgroundColor.value,
      cellTextColor: l.cellTextColor.value,
      borderColor: l.borderColor.value,
      defaultColumnWidth: l.defaultColumnWidth.value,
      defaultRowHeight: l.defaultRowHeight.value,
      fontSize: l.fontSize.value,
      headerFontWeight: l.headerFontWeight.value,
      cellTextAlign: T.value?.cellTextAlign || u.cellTextAlign,
      rowLevelStyles: V.value.rowLevelStyles,
      columnLevelStyles: V.value.columnLevelStyles,
      conditionalFormats: V.value.conditionalFormats
    })), f = F(() => ({
      showRowsProperties: T.value?.showRowsProperties || u.showRowsProperties,
      showColumnsProperties: T.value?.showColumnsProperties || u.showColumnsProperties,
      showSingleMeasureHeader: T.value?.showSingleMeasureHeader ?? u.showSingleMeasureHeader
    })), L = Ie(null), { callEvent: W, update: w } = Ke(t, "PivotTable", L, [], f);
    Re(t, (a, h) => {
      w(a, h);
    }), Re(() => f.value, () => {
      w();
    });
    const s = (a) => {
      W("expand", a, !0), a.area === "rows" ? K(a.value?.UName || a.value?.UNAME) : a.area === "columns" && z(a.value?.UName || a.value?.UNAME);
    }, E = (a) => {
      W("collapse", a, !0), a.area === "rows" ? q(a.value?.UName || a.value?.UNAME) : a.area === "columns" && Z(a.value?.UName || a.value?.UNAME);
    };
    return (a, h) => (R(), B("div", {
      class: "text-container",
      onClick: A,
      onContextmenu: Ye(I, ["prevent"])
    }, [
      C("div", $e, [
        L.value ? (R(), Ce(y(qe), {
          "model-value": L.value,
          onOnExpand: s,
          onOnCollapse: E,
          onRow_clicked: M,
          onRow_right_clicked: b,
          onColumn_clicked: k,
          onColumn_right_clicked: G,
          onCell_clicked: Y,
          onCell_right_clicked: X,
          key: JSON.stringify(L.value).length,
          rowsExpandedMembers: L.value.tableState.rowsExpandedMembers,
          columnsExpandedMembers: L.value.tableState.columnsExpandedMembers,
          propertiesRows: L.value.propertiesRows,
          propertiesCols: L.value.propertiesCols,
          headerBackgroundColor: g.value.headerBackgroundColor,
          headerTextColor: g.value.headerTextColor,
          cellBackgroundColor: g.value.cellBackgroundColor,
          cellTextColor: g.value.cellTextColor,
          borderColor: g.value.borderColor,
          defaultColumnWidth: g.value.defaultColumnWidth,
          defaultRowHeight: g.value.defaultRowHeight,
          fontSize: g.value.fontSize,
          headerFontWeight: g.value.headerFontWeight,
          cellTextAlign: g.value.cellTextAlign,
          rowLevelStyles: g.value.rowLevelStyles,
          columnLevelStyles: g.value.columnLevelStyles,
          conditionalFormats: g.value.conditionalFormats
        }, null, 8, ["model-value", "rowsExpandedMembers", "columnsExpandedMembers", "propertiesRows", "propertiesCols", "headerBackgroundColor", "headerTextColor", "cellBackgroundColor", "cellTextColor", "borderColor", "defaultColumnWidth", "defaultRowHeight", "fontSize", "headerFontWeight", "cellTextAlign", "rowLevelStyles", "columnLevelStyles", "conditionalFormats"])) : Q("", !0)
      ])
    ], 32));
  }
}), ye = (N, e) => {
  const t = N.__vccOpts || N;
  for (const [n, _] of e)
    t[n] = _;
  return t;
}, et = /* @__PURE__ */ ye(Pe, [["__scopeId", "data-v-498e0ac7"]]), tt = { class: "settings-container" }, st = { class: "settings-container" }, rt = { class: "settings-block" }, lt = { class: "settings-block" }, ot = { class: "settings-block" }, at = { class: "settings-container" }, it = { class: "settings-block" }, nt = { class: "settings-container" }, ut = { class: "settings-block" }, dt = { class: "settings-container" }, ct = { class: "level-header" }, ht = { class: "level-card-header" }, Et = {
  key: 0,
  class: "empty-state"
}, _t = { class: "settings-container" }, gt = { class: "level-header" }, Ct = { class: "level-card-header" }, Lt = {
  key: 0,
  class: "empty-state"
}, Ot = { class: "settings-container" }, Tt = { class: "level-header" }, pt = { class: "level-card-header" }, ft = {
  key: 3,
  class: "color-scale-row"
}, St = {
  key: 0,
  class: "empty-state"
}, Nt = /* @__PURE__ */ ve({
  __name: "PivotTableWidgetSettings",
  props: {
    modelValue: { required: !0 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(N) {
    const e = De(N, "modelValue"), t = Ie({
      colorsSection: !0,
      dimensionsSection: !1,
      textSection: !1,
      rowLevelsSection: !1,
      columnLevelsSection: !1,
      conditionalFormatSection: !1,
      dataSettings: !1
    }), n = [
      { value: "left", text: "Links" },
      { value: "center", text: "Zentriert" },
      { value: "right", text: "Rechts" }
    ];
    function _(u, l) {
      typeof u?.add == "function" ? u.add(l) : Array.isArray(u) && u.push(l);
    }
    function A(u, l) {
      typeof u?.removeAt == "function" ? u.removeAt(l) : Array.isArray(u) && u.splice(l, 1);
    }
    const I = () => {
      e.value.rowLevelStyles || (e.value.rowLevelStyles = []);
      const u = e.value.rowLevelStyles.length, l = new O();
      l.level = u, _(e.value.rowLevelStyles, l);
    }, M = (u) => {
      A(e.value.rowLevelStyles, u);
    }, b = () => {
      e.value.columnLevelStyles || (e.value.columnLevelStyles = []);
      const u = e.value.columnLevelStyles.length, l = new O();
      l.level = u, _(e.value.columnLevelStyles, l);
    }, k = (u) => {
      A(e.value.columnLevelStyles, u);
    }, G = [
      { value: "greaterThan", text: "Größer als" },
      { value: "lessThan", text: "Kleiner als" },
      { value: "equals", text: "Gleich" },
      { value: "notEquals", text: "Ungleich" },
      { value: "between", text: "Zwischen" },
      { value: "contains", text: "Enthält (Text)" },
      { value: "colorScale", text: "Farbskala (Min→Max)" },
      { value: "topN", text: "Top N Werte" },
      { value: "bottomN", text: "Bottom N Werte" }
    ], Y = () => Math.random().toString(36).substring(2, 9), X = () => {
      e.value.conditionalFormats || (e.value.conditionalFormats = []);
      const u = e.value.conditionalFormats.length, l = new i();
      l.id = Y(), l.priority = u, _(e.value.conditionalFormats, l);
    }, K = (u) => {
      A(e.value.conditionalFormats, u);
    }, q = (u) => u === "between", z = (u) => u === "colorScale", Z = (u) => u === "contains", T = (u) => u === "topN" || u === "bottomN", J = (u) => u !== "colorScale";
    return (u, l) => {
      const V = ae("VaCheckbox"), g = ae("va-collapse"), f = ae("va-color-input"), L = ae("va-input"), W = ae("va-select"), w = ae("va-button");
      return R(), B(ge, null, [
        d(g, {
          modelValue: t.value.dataSettings,
          "onUpdate:modelValue": l[3] || (l[3] = (s) => t.value.dataSettings = s),
          header: "Data settings",
          icon: "palette"
        }, {
          default: p(() => [
            C("div", tt, [
              d(V, {
                modelValue: e.value.showRowsProperties,
                "onUpdate:modelValue": l[0] || (l[0] = (s) => e.value.showRowsProperties = s),
                label: "Show rows properties",
                style: { margin: "0.5rem 0" }
              }, null, 8, ["modelValue"]),
              d(V, {
                modelValue: e.value.showColumnsProperties,
                "onUpdate:modelValue": l[1] || (l[1] = (s) => e.value.showColumnsProperties = s),
                label: "Show columns properties",
                style: { margin: "0.5rem 0" }
              }, null, 8, ["modelValue"]),
              d(V, {
                modelValue: e.value.showSingleMeasureHeader,
                "onUpdate:modelValue": l[2] || (l[2] = (s) => e.value.showSingleMeasureHeader = s),
                label: "Show single measure header",
                style: { margin: "0.5rem 0" }
              }, null, 8, ["modelValue"])
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        d(g, {
          modelValue: t.value.colorsSection,
          "onUpdate:modelValue": l[9] || (l[9] = (s) => t.value.colorsSection = s),
          header: "Farben",
          icon: "palette"
        }, {
          default: p(() => [
            C("div", st, [
              C("div", rt, [
                l[20] || (l[20] = C("h3", null, "Header", -1)),
                d(y(U), {
                  modelValue: e.value.headerBackgroundColor,
                  "onUpdate:modelValue": l[4] || (l[4] = (s) => e.value.headerBackgroundColor = s),
                  label: "Header Hintergrund"
                }, {
                  default: p(({ value: s, change: E }) => [
                    d(f, {
                      label: "Header Hintergrund",
                      "model-value": s,
                      onInput: E
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"]),
                d(y(U), {
                  modelValue: e.value.headerTextColor,
                  "onUpdate:modelValue": l[5] || (l[5] = (s) => e.value.headerTextColor = s),
                  label: "Header Textfarbe"
                }, {
                  default: p(({ value: s, change: E }) => [
                    d(f, {
                      label: "Header Textfarbe",
                      "model-value": s,
                      onInput: E
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ]),
              C("div", lt, [
                l[21] || (l[21] = C("h3", null, "Zellen", -1)),
                d(y(U), {
                  modelValue: e.value.cellBackgroundColor,
                  "onUpdate:modelValue": l[6] || (l[6] = (s) => e.value.cellBackgroundColor = s),
                  label: "Zellen Hintergrund"
                }, {
                  default: p(({ value: s, change: E }) => [
                    d(f, {
                      label: "Zellen Hintergrund",
                      "model-value": s,
                      onInput: E
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"]),
                d(y(U), {
                  modelValue: e.value.cellTextColor,
                  "onUpdate:modelValue": l[7] || (l[7] = (s) => e.value.cellTextColor = s),
                  label: "Zellen Textfarbe"
                }, {
                  default: p(({ value: s, change: E }) => [
                    d(f, {
                      label: "Zellen Textfarbe",
                      "model-value": s,
                      onInput: E
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ]),
              C("div", ot, [
                l[22] || (l[22] = C("h3", null, "Rahmen", -1)),
                d(y(U), {
                  modelValue: e.value.borderColor,
                  "onUpdate:modelValue": l[8] || (l[8] = (s) => e.value.borderColor = s),
                  label: "Rahmenfarbe"
                }, {
                  default: p(({ value: s, change: E }) => [
                    d(f, {
                      label: "Rahmenfarbe",
                      "model-value": s,
                      onInput: E
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        d(g, {
          modelValue: t.value.dimensionsSection,
          "onUpdate:modelValue": l[12] || (l[12] = (s) => t.value.dimensionsSection = s),
          header: "Dimensionen",
          icon: "straighten"
        }, {
          default: p(() => [
            C("div", at, [
              C("div", it, [
                d(y(U), {
                  modelValue: e.value.defaultColumnWidth,
                  "onUpdate:modelValue": l[10] || (l[10] = (s) => e.value.defaultColumnWidth = s),
                  label: "Standard Spaltenbreite (px)"
                }, {
                  default: p(({ value: s, change: E }) => [
                    d(L, {
                      label: "Standard Spaltenbreite (px)",
                      "model-value": s,
                      "onUpdate:modelValue": E,
                      type: "number",
                      min: 50,
                      max: 500
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }, 8, ["modelValue"]),
                d(y(U), {
                  modelValue: e.value.defaultRowHeight,
                  "onUpdate:modelValue": l[11] || (l[11] = (s) => e.value.defaultRowHeight = s),
                  label: "Standard Zeilenhöhe (px)"
                }, {
                  default: p(({ value: s, change: E }) => [
                    d(L, {
                      label: "Standard Zeilenhöhe (px)",
                      "model-value": s,
                      "onUpdate:modelValue": E,
                      type: "number",
                      min: 20,
                      max: 100
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        d(g, {
          modelValue: t.value.textSection,
          "onUpdate:modelValue": l[16] || (l[16] = (s) => t.value.textSection = s),
          header: "Text",
          icon: "text_fields"
        }, {
          default: p(() => [
            C("div", nt, [
              C("div", ut, [
                d(y(U), {
                  modelValue: e.value.fontSize,
                  "onUpdate:modelValue": l[13] || (l[13] = (s) => e.value.fontSize = s),
                  label: "Schriftgröße (px)"
                }, {
                  default: p(({ value: s, change: E }) => [
                    d(L, {
                      label: "Schriftgröße (px)",
                      "model-value": s,
                      "onUpdate:modelValue": E,
                      type: "number",
                      min: 8,
                      max: 32
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }, 8, ["modelValue"]),
                d(y(U), {
                  modelValue: e.value.headerFontWeight,
                  "onUpdate:modelValue": l[14] || (l[14] = (s) => e.value.headerFontWeight = s),
                  label: "Header Font-Weight"
                }, {
                  default: p(({ value: s, change: E }) => [
                    d(L, {
                      label: "Header Font-Weight",
                      "model-value": s,
                      "onUpdate:modelValue": E,
                      type: "number",
                      min: 100,
                      max: 900,
                      step: 100
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }, 8, ["modelValue"]),
                d(W, {
                  label: "Text-Ausrichtung (Zellen)",
                  modelValue: e.value.cellTextAlign,
                  "onUpdate:modelValue": l[15] || (l[15] = (s) => e.value.cellTextAlign = s),
                  options: n,
                  "value-by": "value"
                }, null, 8, ["modelValue"])
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        d(g, {
          modelValue: t.value.rowLevelsSection,
          "onUpdate:modelValue": l[17] || (l[17] = (s) => t.value.rowLevelsSection = s),
          header: "Zeilen-Level Styles",
          icon: "table_rows"
        }, {
          default: p(() => [
            C("div", dt, [
              l[26] || (l[26] = C("p", { class: "hint-text" }, " Definiere individuelle Styles für verschiedene Hierarchie-Level in den Zeilen-Headern. ", -1)),
              C("div", ct, [
                l[24] || (l[24] = C("span", null, "Level-Konfiguration", -1)),
                d(w, {
                  size: "small",
                  onClick: I
                }, {
                  default: p(() => [...l[23] || (l[23] = [
                    ie("Level hinzufügen", -1)
                  ])]),
                  _: 1
                })
              ]),
              (R(!0), B(ge, null, Te(e.value.rowLevelStyles, (s, E) => (R(), B("div", {
                key: `row_level_${E}`,
                class: "level-card"
              }, [
                C("div", ht, [
                  C("strong", null, "Level " + pe(s.level), 1),
                  d(w, {
                    size: "small",
                    color: "danger",
                    onClick: (a) => M(E)
                  }, {
                    default: p(() => [...l[25] || (l[25] = [
                      ie("Entfernen", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                d(L, {
                  label: "Level-Nummer",
                  modelValue: s.level,
                  "onUpdate:modelValue": (a) => s.level = a,
                  modelModifiers: { number: !0 },
                  type: "number",
                  min: 0
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                d(y(U), {
                  modelValue: s.backgroundColor,
                  "onUpdate:modelValue": (a) => s.backgroundColor = a,
                  label: "Hintergrundfarbe"
                }, {
                  default: p(({ value: a, change: h }) => [
                    d(f, {
                      label: "Hintergrundfarbe",
                      "model-value": a,
                      onInput: h
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue"]),
                d(y(U), {
                  modelValue: s.textColor,
                  "onUpdate:modelValue": (a) => s.textColor = a,
                  label: "Textfarbe"
                }, {
                  default: p(({ value: a, change: h }) => [
                    d(f, {
                      label: "Textfarbe",
                      "model-value": a,
                      onInput: h
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue"]),
                d(L, {
                  label: "Font-Weight",
                  modelValue: s.fontWeight,
                  "onUpdate:modelValue": (a) => s.fontWeight = a,
                  modelModifiers: { number: !0 },
                  type: "number",
                  min: 100,
                  max: 900,
                  step: 100
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ]))), 128)),
              e.value.rowLevelStyles?.length ? Q("", !0) : (R(), B("div", Et, ' Keine Level-Styles definiert. Klicke "Level hinzufügen" um anzufangen. '))
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        d(g, {
          modelValue: t.value.columnLevelsSection,
          "onUpdate:modelValue": l[18] || (l[18] = (s) => t.value.columnLevelsSection = s),
          header: "Spalten-Level Styles",
          icon: "view_column"
        }, {
          default: p(() => [
            C("div", _t, [
              l[30] || (l[30] = C("p", { class: "hint-text" }, " Definiere individuelle Styles für verschiedene Hierarchie-Level in den Spalten-Headern. ", -1)),
              C("div", gt, [
                l[28] || (l[28] = C("span", null, "Level-Konfiguration", -1)),
                d(w, {
                  size: "small",
                  onClick: b
                }, {
                  default: p(() => [...l[27] || (l[27] = [
                    ie("Level hinzufügen", -1)
                  ])]),
                  _: 1
                })
              ]),
              (R(!0), B(ge, null, Te(e.value.columnLevelStyles, (s, E) => (R(), B("div", {
                key: `col_level_${E}`,
                class: "level-card"
              }, [
                C("div", Ct, [
                  C("strong", null, "Level " + pe(s.level), 1),
                  d(w, {
                    size: "small",
                    color: "danger",
                    onClick: (a) => k(E)
                  }, {
                    default: p(() => [...l[29] || (l[29] = [
                      ie("Entfernen", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                d(L, {
                  label: "Level-Nummer",
                  modelValue: s.level,
                  "onUpdate:modelValue": (a) => s.level = a,
                  modelModifiers: { number: !0 },
                  type: "number",
                  min: 0
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                d(y(U), {
                  modelValue: s.backgroundColor,
                  "onUpdate:modelValue": (a) => s.backgroundColor = a,
                  label: "Hintergrundfarbe"
                }, {
                  default: p(({ value: a, change: h }) => [
                    d(f, {
                      label: "Hintergrundfarbe",
                      "model-value": a,
                      onInput: h
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue"]),
                d(y(U), {
                  modelValue: s.textColor,
                  "onUpdate:modelValue": (a) => s.textColor = a,
                  label: "Textfarbe"
                }, {
                  default: p(({ value: a, change: h }) => [
                    d(f, {
                      label: "Textfarbe",
                      "model-value": a,
                      onInput: h
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue"]),
                d(L, {
                  label: "Font-Weight",
                  modelValue: s.fontWeight,
                  "onUpdate:modelValue": (a) => s.fontWeight = a,
                  modelModifiers: { number: !0 },
                  type: "number",
                  min: 100,
                  max: 900,
                  step: 100
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ]))), 128)),
              e.value.columnLevelStyles?.length ? Q("", !0) : (R(), B("div", Lt, ' Keine Level-Styles definiert. Klicke "Level hinzufügen" um anzufangen. '))
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        d(g, {
          modelValue: t.value.conditionalFormatSection,
          "onUpdate:modelValue": l[19] || (l[19] = (s) => t.value.conditionalFormatSection = s),
          header: "Bedingte Formatierung",
          icon: "format_color_fill"
        }, {
          default: p(() => [
            C("div", Ot, [
              l[34] || (l[34] = C("p", { class: "hint-text" }, " Definiere Regeln zur automatischen Formatierung von Zellen basierend auf ihren Werten. ", -1)),
              C("div", Tt, [
                l[32] || (l[32] = C("span", null, "Formatierungsregeln", -1)),
                d(w, {
                  size: "small",
                  onClick: X
                }, {
                  default: p(() => [...l[31] || (l[31] = [
                    ie("Regel hinzufügen", -1)
                  ])]),
                  _: 1
                })
              ]),
              (R(!0), B(ge, null, Te(e.value.conditionalFormats, (s, E) => (R(), B("div", {
                key: s.id,
                class: "level-card"
              }, [
                C("div", pt, [
                  C("strong", null, "Regel " + pe(E + 1), 1),
                  d(w, {
                    size: "small",
                    color: "danger",
                    onClick: (a) => K(E)
                  }, {
                    default: p(() => [...l[33] || (l[33] = [
                      ie("Entfernen", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                d(W, {
                  label: "Bedingungstyp",
                  modelValue: s.conditionType,
                  "onUpdate:modelValue": (a) => s.conditionType = a,
                  options: G,
                  "value-by": "value"
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                !Z(s.conditionType) && !z(s.conditionType) ? (R(), Ce(L, {
                  key: 0,
                  label: T(s.conditionType) ? "Anzahl (N)" : "Wert",
                  modelValue: s.value1,
                  "onUpdate:modelValue": (a) => s.value1 = a,
                  modelModifiers: { number: !0 },
                  type: "number"
                }, null, 8, ["label", "modelValue", "onUpdate:modelValue"])) : Q("", !0),
                q(s.conditionType) ? (R(), Ce(L, {
                  key: 1,
                  label: "Bis Wert",
                  modelValue: s.value2,
                  "onUpdate:modelValue": (a) => s.value2 = a,
                  modelModifiers: { number: !0 },
                  type: "number"
                }, null, 8, ["modelValue", "onUpdate:modelValue"])) : Q("", !0),
                Z(s.conditionType) ? (R(), Ce(L, {
                  key: 2,
                  label: "Text",
                  modelValue: s.value1,
                  "onUpdate:modelValue": (a) => s.value1 = a
                }, null, 8, ["modelValue", "onUpdate:modelValue"])) : Q("", !0),
                z(s.conditionType) ? (R(), B("div", ft, [
                  d(f, {
                    label: "Min-Farbe",
                    modelValue: s.minColor,
                    "onUpdate:modelValue": (a) => s.minColor = a
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  d(f, {
                    label: "Max-Farbe",
                    modelValue: s.maxColor,
                    "onUpdate:modelValue": (a) => s.maxColor = a
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ])) : Q("", !0),
                J(s.conditionType) ? (R(), B(ge, { key: 4 }, [
                  d(f, {
                    label: "Hintergrundfarbe",
                    modelValue: s.backgroundColor,
                    "onUpdate:modelValue": (a) => s.backgroundColor = a
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  d(f, {
                    label: "Textfarbe",
                    modelValue: s.textColor,
                    "onUpdate:modelValue": (a) => s.textColor = a
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  d(L, {
                    label: "Font-Weight",
                    modelValue: s.fontWeight,
                    "onUpdate:modelValue": (a) => s.fontWeight = a,
                    modelModifiers: { number: !0 },
                    type: "number",
                    min: 100,
                    max: 900,
                    step: 100
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ], 64)) : Q("", !0),
                d(L, {
                  label: "Priorität (niedriger = höher)",
                  modelValue: s.priority,
                  "onUpdate:modelValue": (a) => s.priority = a,
                  modelModifiers: { number: !0 },
                  type: "number",
                  min: 0
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ]))), 128)),
              e.value.conditionalFormats?.length ? Q("", !0) : (R(), B("div", St, ' Keine Formatierungsregeln definiert. Klicke "Regel hinzufügen" um anzufangen. '))
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ], 64);
    };
  }
}), mt = /* @__PURE__ */ ye(Nt, [["__scopeId", "data-v-6b0d43bf"]]), Rt = [
  {
    name: "Row Expanded",
    type: "row_expanded",
    description: "Triggered when a row is expanded in the pivot table",
    payloadType: x
  },
  {
    name: "Row Collapsed",
    type: "row_collapsed",
    description: "Triggered when a row is collapsed in the pivot table",
    payloadType: x
  },
  {
    name: "Column Expanded",
    type: "column_expanded",
    description: "Triggered when a column is expanded in the pivot table",
    payloadType: x
  },
  {
    name: "Column Collapsed",
    type: "column_collapsed",
    description: "Triggered when a column is collapsed in the pivot table",
    payloadType: x
  },
  {
    name: "Row Clicked",
    type: "row_clicked",
    description: "Triggered when a row is clicked in the pivot table",
    payloadType: H
  },
  {
    name: "Column Clicked",
    type: "column_clicked",
    description: "Triggered when a column is clicked in the pivot table",
    payloadType: H
  },
  {
    name: "Row Right Clicked",
    type: "row_right_clicked",
    description: "Triggered when a row is right-clicked in the pivot table",
    payloadType: H
  },
  {
    name: "Column Right Clicked",
    type: "column_right_clicked",
    description: "Triggered when a column is right-clicked in the pivot table",
    payloadType: H
  },
  {
    name: "Cell Clicked",
    type: "cell_clicked",
    description: "Triggered when a cell is clicked in the pivot table",
    payloadType: Le
  },
  {
    name: "Cell Right Clicked",
    type: "cell_right_clicked",
    description: "Triggered when a cell is right-clicked in the pivot table",
    payloadType: Le
  }
];
class At extends Fe {
  // Feature ID Constants (eLiterals)
  // Private fields
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return o.Literals.PIVOT_TABLE_INTERFACE;
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
    const n = this.eClass().getFeatureID(e);
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
  expandRow(e) {
    throw new Error("expandRow not implemented");
  }
}
var wt = Object.defineProperty, vt = Object.getOwnPropertyDescriptor, Ne = (N, e, t, n) => {
  for (var _ = n > 1 ? void 0 : n ? vt(e, t) : e, A = N.length - 1, I; A >= 0; A--)
    (I = N[A]) && (_ = (n ? I(e, t, _) : I(_)) || _);
  return n && _ && wt(e, t, _), _;
}, we = (N, e) => (t, n) => e(t, n, N);
o.eINSTANCE;
const ue = "PivotTableWidget";
let Oe = class {
  constructor(N, e) {
    this.events = N, this.actions = e;
  }
  type = ue;
  component = et;
  settingsComponent = mt;
  supportedDSTypes = [];
  icon = je;
  name = "PivotTable";
  register() {
    this.events.registerWidget(ue, Rt), this.actions.registerWidgetType(ue, At, "widget");
  }
  unregister() {
    this.events.unregisterWidget(ue), this.actions.unregisterWidgetType(ue);
  }
};
Ne([
  We()
], Oe.prototype, "register", 1);
Ne([
  xe()
], Oe.prototype, "unregister", 1);
Oe = Ne([
  He({
    service: [Qe],
    properties: { "widget.type": ue }
  }),
  we(0, me(Ue)),
  we(1, me(Be))
], Oe);
export {
  et as PivotTableWidget,
  Oe as PivotTableWidgetProvider,
  mt as PivotTableWidgetSettings
};
