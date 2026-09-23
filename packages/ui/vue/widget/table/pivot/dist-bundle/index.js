(function(){var i="ui.vue.widget.table.pivot",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".text-container[data-v-498e0ac7]{display:flex;flex-direction:column;width:100%;height:100%;gap:1rem;align-items:stretch}.component[data-v-498e0ac7]{overflow:hidden;padding:16px}.settings-container[data-v-9d79c855]{padding:16px}.settings-block[data-v-9d79c855]{display:flex;flex-direction:column;gap:12px;margin-bottom:16px}.settings-block[data-v-9d79c855]:last-child{margin-bottom:0}.settings-block h3[data-v-9d79c855]{margin:0 0 8px;font-size:14px;font-weight:600;color:var(--color-accent)}.hint-text[data-v-9d79c855]{margin:0 0 16px;color:var(--color-dim);font-size:13px}.level-header[data-v-9d79c855]{display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;font-weight:600}.level-card[data-v-9d79c855]{border:1px solid #ddd;padding:16px;border-radius:4px;margin-bottom:12px;background:#fafafa;display:flex;flex-direction:column;gap:12px}.level-card-header[data-v-9d79c855]{display:flex;justify-content:space-between;align-items:center}.empty-state[data-v-9d79c855]{padding:20px;text-align:center;color:var(--color-dim);background:#f5f5f5;border-radius:4px}.color-scale-row[data-v-9d79c855]{display:flex;gap:12px}.color-scale-row[data-v-9d79c855]>*{flex:1}\n";})();
import { PayloadImpl as pe, WidgetActionInterfaceImpl as He, EVENT_REGISTRY_ID as Me, EVENT_ACTIONS_REGISTRY_ID as ke } from "org.eclipse.daanse.board.app.lib.api.events";
import { component as Ue, activate as Ge, deactivate as Ye, inject as Ae } from "@eclipse-daanse/tsm";
import { defineComponent as Fe, mergeModels as Xe, toRefs as Ke, inject as qe, useModel as Be, onMounted as ze, computed as U, ref as Ze, watch as ve, createElementBlock as W, openBlock as V, withModifiers as Pe, createElementVNode as C, createBlock as Te, createCommentVNode as Q, unref as s, Fragment as Oe, createVNode as g, toDisplayString as m, withCtx as S, createTextVNode as ue, renderList as fe } from "vue";
import { VariableWrapper as E, useVariableRepository as Je, plainSettings as De, useDatasourceRepository as Qe, useTranslation as je } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { PivotTable as $e } from "org.eclipse.daanse.board.app.ui.vue.common.xmla";
import { BasicEObject as Ne, BasicEFactory as et, BasicEPackage as tt, EPackageRegistry as We, BasicEClass as se, BasicEReference as N, BasicEAttribute as y, getEcorePackage as I, createContainmentEList as de } from "@emfts/core";
import { VariableInput as D } from "org.eclipse.daanse.board.app.ui.vue.variable.components";
import { DCheckbox as me, DColorInput as F, DInput as B, DSelect as Ve, DButton as ce } from "org.eclipse.daanse.board.app.ui.vue.controls";
import { WIDGET_SERVICE_ID as lt } from "org.eclipse.daanse.board.app.lib.api.widget";
const { identifiers: st } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), rt = "data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M105%207.5H15C10.8579%207.5%207.5%2010.8579%207.5%2015V105C7.5%20109.142%2010.8579%20112.5%2015%20112.5H105C109.142%20112.5%20112.5%20109.142%20112.5%20105V15C112.5%2010.8579%20109.142%207.5%20105%207.5ZM15%200C6.71573%200%200%206.71573%200%2015V105C0%20113.284%206.71573%20120%2015%20120H105C113.284%20120%20120%20113.284%20120%20105V15C120%206.71573%20113.284%200%20105%200H15Z'%20fill='%23606060'/%3e%3cpath%20d='M22.5%2048C22.5%2046.3431%2023.8431%2045%2025.5%2045H34.5C36.1569%2045%2037.5%2046.3431%2037.5%2048V94.5C37.5%2096.1569%2036.1569%2097.5%2034.5%2097.5H25.5C23.8431%2097.5%2022.5%2096.1569%2022.5%2094.5V48Z'%20fill='%23606060'/%3e%3cpath%20d='M45%2025.5C45%2023.8431%2046.3431%2022.5%2048%2022.5H94.5C96.1569%2022.5%2097.5%2023.8431%2097.5%2025.5V34.5C97.5%2036.1569%2096.1569%2037.5%2094.5%2037.5H48C46.3431%2037.5%2045%2036.1569%2045%2034.5V25.5Z'%20fill='%23606060'/%3e%3cpath%20d='M37.5%2025.5C37.5%2023.8431%2036.1569%2022.5%2034.5%2022.5H25.5C23.8431%2022.5%2022.5%2023.8431%2022.5%2025.5V34.5C22.5%2036.1569%2023.8431%2037.5%2025.5%2037.5H34.5C36.1569%2037.5%2037.5%2036.1569%2037.5%2034.5V25.5Z'%20fill='%23606060'/%3e%3cpath%20d='M57.4399%2077.5607C58.3849%2076.6157%2060.0006%2077.285%2060.0006%2078.6213V84C60.0006%2084.8284%2060.6722%2085.5%2061.5006%2085.5H84C84.8284%2085.5%2085.5%2084.8284%2085.5%2084V61.5C85.5%2060.6716%2084.8284%2060%2084%2060H78.6214C77.285%2060%2076.6158%2058.3843%2077.5608%2057.4393L88.9399%2046.0606C89.5257%2045.4749%2090.4755%2045.4749%2091.0612%2046.0607L102.439%2057.4394C103.384%2058.3843%20102.715%2060%20101.379%2060H96C95.1716%2060%2094.5%2060.6716%2094.5%2061.5V93C94.5%2093.8284%2093.8284%2094.5%2093%2094.5H61.5006C60.6722%2094.5%2060.0006%2095.1716%2060.0006%2096V101.379C60.0006%20102.715%2058.3849%20103.384%2057.44%20102.44L46.0607%2091.0613C45.4749%2090.4755%2045.4749%2089.5257%2046.0607%2088.9399L57.4399%2077.5607Z'%20fill='%23606060'/%3e%3c/svg%3e";
class T extends Ne {
  // Feature ID Constants (eLiterals)
  static LEVEL = 0;
  static BACKGROUND_COLOR = 1;
  static TEXT_COLOR = 2;
  static FONT_WEIGHT = 3;
  // Private fields
  _level;
  _backgroundColor = new E();
  _textColor = new E();
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
      getFeature: () => this.eClass().getEStructuralFeature(T.LEVEL),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => T.LEVEL,
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
      getFeature: () => this.eClass().getEStructuralFeature(T.BACKGROUND_COLOR),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => T.BACKGROUND_COLOR,
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
      getFeature: () => this.eClass().getEStructuralFeature(T.TEXT_COLOR),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => T.TEXT_COLOR,
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
      getFeature: () => this.eClass().getEStructuralFeature(T.FONT_WEIGHT),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => T.FONT_WEIGHT,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case T.LEVEL:
        return this.level;
      case T.BACKGROUND_COLOR:
        return this.backgroundColor;
      case T.TEXT_COLOR:
        return this.textColor;
      case T.FONT_WEIGHT:
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
      case T.LEVEL:
        this.level = t, super.eSet(e, t);
        break;
      case T.BACKGROUND_COLOR:
        this.backgroundColor = t, super.eSet(e, t);
        break;
      case T.TEXT_COLOR:
        this.textColor = t, super.eSet(e, t);
        break;
      case T.FONT_WEIGHT:
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
      case T.LEVEL:
        return this._level !== void 0;
      case T.BACKGROUND_COLOR:
        return this._backgroundColor !== new E();
      case T.TEXT_COLOR:
        return this._textColor !== new E();
      case T.FONT_WEIGHT:
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
      case T.LEVEL:
        this._level = void 0;
        return;
      case T.BACKGROUND_COLOR:
        this._backgroundColor = new E();
        return;
      case T.TEXT_COLOR:
        this._textColor = new E();
        return;
      case T.FONT_WEIGHT:
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
class u extends Ne {
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
  _backgroundColor = new E();
  _textColor = new E();
  _minColor = new E();
  _maxColor = new E();
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
      getFeature: () => this.eClass().getEStructuralFeature(u.ID),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => u.ID,
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
      getFeature: () => this.eClass().getEStructuralFeature(u.CONDITION_TYPE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => u.CONDITION_TYPE,
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
      getFeature: () => this.eClass().getEStructuralFeature(u.PRIORITY),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => u.PRIORITY,
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
      getFeature: () => this.eClass().getEStructuralFeature(u.VALUE1),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => u.VALUE1,
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
      getFeature: () => this.eClass().getEStructuralFeature(u.VALUE2),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => u.VALUE2,
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
      getFeature: () => this.eClass().getEStructuralFeature(u.BACKGROUND_COLOR),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => u.BACKGROUND_COLOR,
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
      getFeature: () => this.eClass().getEStructuralFeature(u.TEXT_COLOR),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => u.TEXT_COLOR,
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
      getFeature: () => this.eClass().getEStructuralFeature(u.MIN_COLOR),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => u.MIN_COLOR,
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
      getFeature: () => this.eClass().getEStructuralFeature(u.MAX_COLOR),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => u.MAX_COLOR,
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
      getFeature: () => this.eClass().getEStructuralFeature(u.FONT_WEIGHT),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => u.FONT_WEIGHT,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case u.ID:
        return this.id;
      case u.CONDITION_TYPE:
        return this.conditionType;
      case u.PRIORITY:
        return this.priority;
      case u.VALUE1:
        return this.value1;
      case u.VALUE2:
        return this.value2;
      case u.BACKGROUND_COLOR:
        return this.backgroundColor;
      case u.TEXT_COLOR:
        return this.textColor;
      case u.MIN_COLOR:
        return this.minColor;
      case u.MAX_COLOR:
        return this.maxColor;
      case u.FONT_WEIGHT:
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
      case u.ID:
        this.id = t, super.eSet(e, t);
        break;
      case u.CONDITION_TYPE:
        this.conditionType = t, super.eSet(e, t);
        break;
      case u.PRIORITY:
        this.priority = t, super.eSet(e, t);
        break;
      case u.VALUE1:
        this.value1 = t, super.eSet(e, t);
        break;
      case u.VALUE2:
        this.value2 = t, super.eSet(e, t);
        break;
      case u.BACKGROUND_COLOR:
        this.backgroundColor = t, super.eSet(e, t);
        break;
      case u.TEXT_COLOR:
        this.textColor = t, super.eSet(e, t);
        break;
      case u.MIN_COLOR:
        this.minColor = t, super.eSet(e, t);
        break;
      case u.MAX_COLOR:
        this.maxColor = t, super.eSet(e, t);
        break;
      case u.FONT_WEIGHT:
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
      case u.ID:
        return this._id !== void 0;
      case u.CONDITION_TYPE:
        return this._conditionType !== "greaterThan";
      case u.PRIORITY:
        return this._priority !== void 0;
      case u.VALUE1:
        return this._value1 !== "0";
      case u.VALUE2:
        return this._value2 !== "100";
      case u.BACKGROUND_COLOR:
        return this._backgroundColor !== new E();
      case u.TEXT_COLOR:
        return this._textColor !== new E();
      case u.MIN_COLOR:
        return this._minColor !== new E();
      case u.MAX_COLOR:
        return this._maxColor !== new E();
      case u.FONT_WEIGHT:
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
      case u.ID:
        this._id = void 0;
        return;
      case u.CONDITION_TYPE:
        this._conditionType = "greaterThan";
        return;
      case u.PRIORITY:
        this._priority = void 0;
        return;
      case u.VALUE1:
        this._value1 = "0";
        return;
      case u.VALUE2:
        this._value2 = "100";
        return;
      case u.BACKGROUND_COLOR:
        this._backgroundColor = new E();
        return;
      case u.TEXT_COLOR:
        this._textColor = new E();
        return;
      case u.MIN_COLOR:
        this._minColor = new E();
        return;
      case u.MAX_COLOR:
        this._maxColor = new E();
        return;
      case u.FONT_WEIGHT:
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
class b extends pe {
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
      getFeature: () => this.eClass().getEStructuralFeature(b.UNIQUE_NAME),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => b.UNIQUE_NAME,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case b.UNIQUE_NAME:
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
      case b.UNIQUE_NAME:
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
      case b.UNIQUE_NAME:
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
      case b.UNIQUE_NAME:
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
class x extends pe {
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
class Re extends et {
  // Lazy singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new Re()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(o.eINSTANCE);
  }
  /**
   * Create a new PivotTable instance
   */
  createPivotTable() {
    return new l();
  }
  /**
   * Create a new LevelStyle instance
   */
  createLevelStyle() {
    return new T();
  }
  /**
   * Create a new ConditionalFormat instance
   */
  createConditionalFormat() {
    return new u();
  }
  /**
   * Create a new HeaderExpandedPayload instance
   */
  createHeaderExpandedPayload() {
    return new b();
  }
  /**
   * Create a new HeaderClickedPayload instance
   */
  createHeaderClickedPayload() {
    return new x();
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
function A(f) {
  const e = We.INSTANCE.getEPackage(f);
  if (!e)
    throw new Error(`EPackage '${f}' is not registered. Access the eINSTANCE of that model's generated package (or register it via EPackageRegistry.INSTANCE.registerPackage) before initializing PivotTablePackage.`);
  return e;
}
class o extends tt {
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
    We.INSTANCE.set(o.eNS_URI, this), this.setEFactoryInstance(Re.eINSTANCE);
    const e = new se();
    e.setName("PivotTable"), e.setAbstract(!1), e.setInterface(!1), this.getEClassifiers().push(e), e.setEPackage(this), o.Literals.PIVOT_TABLE = e;
    const t = new N();
    t.setContainment(!0), t.setName("rows"), t.setLowerBound(1), t.setUpperBound(-1), e.getEStructuralFeatures().push(t), o.Literals.PIVOT_TABLE__ROWS = t;
    const a = new N();
    a.setContainment(!0), a.setName("columns"), a.setLowerBound(1), a.setUpperBound(-1), e.getEStructuralFeatures().push(a), o.Literals.PIVOT_TABLE__COLUMNS = a;
    const _ = new N();
    _.setContainment(!0), _.setName("cells"), _.setLowerBound(1), _.setUpperBound(-1), e.getEStructuralFeatures().push(_), o.Literals.PIVOT_TABLE__CELLS = _;
    const R = new y();
    R.setName("tableState"), R.setLowerBound(0), R.setUpperBound(1), e.getEStructuralFeatures().push(R), o.Literals.PIVOT_TABLE__TABLE_STATE = R;
    const v = new N();
    v.setContainment(!1), v.setName("headerBackgroundColor"), v.setLowerBound(0), v.setUpperBound(1), e.getEStructuralFeatures().push(v), o.Literals.PIVOT_TABLE__HEADER_BACKGROUND_COLOR = v;
    const H = new N();
    H.setContainment(!1), H.setName("headerTextColor"), H.setLowerBound(0), H.setUpperBound(1), e.getEStructuralFeatures().push(H), o.Literals.PIVOT_TABLE__HEADER_TEXT_COLOR = H;
    const M = new N();
    M.setContainment(!1), M.setName("cellBackgroundColor"), M.setLowerBound(0), M.setUpperBound(1), e.getEStructuralFeatures().push(M), o.Literals.PIVOT_TABLE__CELL_BACKGROUND_COLOR = M;
    const k = new N();
    k.setContainment(!1), k.setName("cellTextColor"), k.setLowerBound(0), k.setUpperBound(1), e.getEStructuralFeatures().push(k), o.Literals.PIVOT_TABLE__CELL_TEXT_COLOR = k;
    const G = new N();
    G.setContainment(!1), G.setName("borderColor"), G.setLowerBound(0), G.setUpperBound(1), e.getEStructuralFeatures().push(G), o.Literals.PIVOT_TABLE__BORDER_COLOR = G;
    const Y = new N();
    Y.setContainment(!1), Y.setName("defaultColumnWidth"), Y.setLowerBound(0), Y.setUpperBound(1), e.getEStructuralFeatures().push(Y), o.Literals.PIVOT_TABLE__DEFAULT_COLUMN_WIDTH = Y;
    const X = new N();
    X.setContainment(!1), X.setName("defaultRowHeight"), X.setLowerBound(0), X.setUpperBound(1), e.getEStructuralFeatures().push(X), o.Literals.PIVOT_TABLE__DEFAULT_ROW_HEIGHT = X;
    const K = new N();
    K.setContainment(!1), K.setName("fontSize"), K.setLowerBound(0), K.setUpperBound(1), e.getEStructuralFeatures().push(K), o.Literals.PIVOT_TABLE__FONT_SIZE = K;
    const q = new N();
    q.setContainment(!1), q.setName("headerFontWeight"), q.setLowerBound(0), q.setUpperBound(1), e.getEStructuralFeatures().push(q), o.Literals.PIVOT_TABLE__HEADER_FONT_WEIGHT = q;
    const z = new y();
    z.setName("cellTextAlign"), z.setLowerBound(0), z.setUpperBound(1), e.getEStructuralFeatures().push(z), o.Literals.PIVOT_TABLE__CELL_TEXT_ALIGN = z;
    const Z = new y();
    Z.setName("showRowsProperties"), Z.setLowerBound(0), Z.setUpperBound(1), e.getEStructuralFeatures().push(Z), o.Literals.PIVOT_TABLE__SHOW_ROWS_PROPERTIES = Z;
    const p = new y();
    p.setName("showColumnsProperties"), p.setLowerBound(0), p.setUpperBound(1), e.getEStructuralFeatures().push(p), o.Literals.PIVOT_TABLE__SHOW_COLUMNS_PROPERTIES = p;
    const P = new y();
    P.setName("showSingleMeasureHeader"), P.setLowerBound(0), P.setUpperBound(1), e.getEStructuralFeatures().push(P), o.Literals.PIVOT_TABLE__SHOW_SINGLE_MEASURE_HEADER = P;
    const i = new N();
    i.setContainment(!0), i.setName("rowLevelStyles"), i.setLowerBound(0), i.setUpperBound(-1), e.getEStructuralFeatures().push(i), o.Literals.PIVOT_TABLE__ROW_LEVEL_STYLES = i;
    const d = new N();
    d.setContainment(!0), d.setName("columnLevelStyles"), d.setLowerBound(0), d.setUpperBound(-1), e.getEStructuralFeatures().push(d), o.Literals.PIVOT_TABLE__COLUMN_LEVEL_STYLES = d;
    const r = new N();
    r.setContainment(!0), r.setName("conditionalFormats"), r.setLowerBound(0), r.setUpperBound(-1), e.getEStructuralFeatures().push(r), o.Literals.PIVOT_TABLE__CONDITIONAL_FORMATS = r;
    const c = new se();
    c.setName("LevelStyle"), c.setAbstract(!1), c.setInterface(!1), this.getEClassifiers().push(c), c.setEPackage(this), o.Literals.LEVEL_STYLE = c;
    const n = new y();
    n.setName("level"), n.setLowerBound(0), n.setUpperBound(1), c.getEStructuralFeatures().push(n), o.Literals.LEVEL_STYLE__LEVEL = n;
    const O = new N();
    O.setContainment(!1), O.setName("backgroundColor"), O.setLowerBound(0), O.setUpperBound(1), c.getEStructuralFeatures().push(O), o.Literals.LEVEL_STYLE__BACKGROUND_COLOR = O;
    const J = new N();
    J.setContainment(!1), J.setName("textColor"), J.setLowerBound(0), J.setUpperBound(1), c.getEStructuralFeatures().push(J), o.Literals.LEVEL_STYLE__TEXT_COLOR = J;
    const j = new y();
    j.setName("fontWeight"), j.setLowerBound(0), j.setUpperBound(1), c.getEStructuralFeatures().push(j), o.Literals.LEVEL_STYLE__FONT_WEIGHT = j;
    const w = new se();
    w.setName("ConditionalFormat"), w.setAbstract(!1), w.setInterface(!1), this.getEClassifiers().push(w), w.setEPackage(this), o.Literals.CONDITIONAL_FORMAT = w;
    const $ = new y();
    $.setName("id"), $.setLowerBound(0), $.setUpperBound(1), w.getEStructuralFeatures().push($), o.Literals.CONDITIONAL_FORMAT__ID = $;
    const h = new y();
    h.setName("conditionType"), h.setLowerBound(0), h.setUpperBound(1), w.getEStructuralFeatures().push(h), o.Literals.CONDITIONAL_FORMAT__CONDITION_TYPE = h;
    const L = new y();
    L.setName("priority"), L.setLowerBound(0), L.setUpperBound(1), w.getEStructuralFeatures().push(L), o.Literals.CONDITIONAL_FORMAT__PRIORITY = L;
    const ge = new y();
    ge.setName("value1"), ge.setLowerBound(0), ge.setUpperBound(1), w.getEStructuralFeatures().push(ge), o.Literals.CONDITIONAL_FORMAT__VALUE1 = ge;
    const Ee = new y();
    Ee.setName("value2"), Ee.setLowerBound(0), Ee.setUpperBound(1), w.getEStructuralFeatures().push(Ee), o.Literals.CONDITIONAL_FORMAT__VALUE2 = Ee;
    const le = new N();
    le.setContainment(!1), le.setName("backgroundColor"), le.setLowerBound(0), le.setUpperBound(1), w.getEStructuralFeatures().push(le), o.Literals.CONDITIONAL_FORMAT__BACKGROUND_COLOR = le;
    const re = new N();
    re.setContainment(!1), re.setName("textColor"), re.setLowerBound(0), re.setUpperBound(1), w.getEStructuralFeatures().push(re), o.Literals.CONDITIONAL_FORMAT__TEXT_COLOR = re;
    const oe = new N();
    oe.setContainment(!1), oe.setName("minColor"), oe.setLowerBound(0), oe.setUpperBound(1), w.getEStructuralFeatures().push(oe), o.Literals.CONDITIONAL_FORMAT__MIN_COLOR = oe;
    const ae = new N();
    ae.setContainment(!1), ae.setName("maxColor"), ae.setLowerBound(0), ae.setUpperBound(1), w.getEStructuralFeatures().push(ae), o.Literals.CONDITIONAL_FORMAT__MAX_COLOR = ae;
    const _e = new y();
    _e.setName("fontWeight"), _e.setLowerBound(0), _e.setUpperBound(1), w.getEStructuralFeatures().push(_e), o.Literals.CONDITIONAL_FORMAT__FONT_WEIGHT = _e;
    const ie = new se();
    ie.setName("JavaObject"), ie.setAbstract(!0), ie.setInterface(!1), this.getEClassifiers().push(ie), ie.setEPackage(this), o.Literals.JAVA_OBJECT = ie;
    const ne = new se();
    ne.setName("PivotTableInterface"), ne.setAbstract(!0), ne.setInterface(!1), this.getEClassifiers().push(ne), ne.setEPackage(this), o.Literals.PIVOT_TABLE_INTERFACE = ne;
    const ee = new se();
    ee.setName("HeaderExpandedPayload"), ee.setAbstract(!1), ee.setInterface(!1), this.getEClassifiers().push(ee), ee.setEPackage(this), o.Literals.HEADER_EXPANDED_PAYLOAD = ee;
    const Ce = new y();
    Ce.setName("uniqueName"), Ce.setLowerBound(0), Ce.setUpperBound(1), ee.getEStructuralFeatures().push(Ce), o.Literals.HEADER_EXPANDED_PAYLOAD__UNIQUE_NAME = Ce;
    const te = new se();
    te.setName("HeaderClickedPayload"), te.setAbstract(!1), te.setInterface(!1), this.getEClassifiers().push(te), te.setEPackage(this), o.Literals.HEADER_CLICKED_PAYLOAD = te;
    const Le = new y();
    Le.setName("uniqueName"), Le.setLowerBound(0), Le.setUpperBound(1), te.getEStructuralFeatures().push(Le), o.Literals.HEADER_CLICKED_PAYLOAD__UNIQUE_NAME = Le, o.Literals.PIVOT_TABLE_INTERFACE.getESuperTypes().push(A("http://org.eclipse.daanse.board.app.lib.events").getEClassifier("WidgetActionInterface")), o.Literals.HEADER_EXPANDED_PAYLOAD.getESuperTypes().push(A("http://org.eclipse.daanse.board.app.lib.events").getEClassifier("Payload")), o.Literals.HEADER_CLICKED_PAYLOAD.getESuperTypes().push(A("http://org.eclipse.daanse.board.app.lib.events").getEClassifier("Payload")), o.Literals.PIVOT_TABLE__ROWS.setEType(o.Literals.JAVA_OBJECT), o.Literals.PIVOT_TABLE__COLUMNS.setEType(o.Literals.JAVA_OBJECT), o.Literals.PIVOT_TABLE__CELLS.setEType(o.Literals.JAVA_OBJECT), o.Literals.PIVOT_TABLE__TABLE_STATE.setEType(I().getEClassifier("EJavaObject")), o.Literals.PIVOT_TABLE__HEADER_BACKGROUND_COLOR.setEType(A("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), o.Literals.PIVOT_TABLE__HEADER_TEXT_COLOR.setEType(A("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), o.Literals.PIVOT_TABLE__CELL_BACKGROUND_COLOR.setEType(A("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), o.Literals.PIVOT_TABLE__CELL_TEXT_COLOR.setEType(A("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), o.Literals.PIVOT_TABLE__BORDER_COLOR.setEType(A("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), o.Literals.PIVOT_TABLE__DEFAULT_COLUMN_WIDTH.setEType(A("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), o.Literals.PIVOT_TABLE__DEFAULT_ROW_HEIGHT.setEType(A("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), o.Literals.PIVOT_TABLE__FONT_SIZE.setEType(A("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), o.Literals.PIVOT_TABLE__HEADER_FONT_WEIGHT.setEType(A("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), o.Literals.PIVOT_TABLE__CELL_TEXT_ALIGN.setEType(I().getEClassifier("EString")), o.Literals.PIVOT_TABLE__SHOW_ROWS_PROPERTIES.setEType(I().getEClassifier("EBoolean")), o.Literals.PIVOT_TABLE__SHOW_COLUMNS_PROPERTIES.setEType(I().getEClassifier("EBoolean")), o.Literals.PIVOT_TABLE__SHOW_SINGLE_MEASURE_HEADER.setEType(I().getEClassifier("EBoolean")), o.Literals.PIVOT_TABLE__ROW_LEVEL_STYLES.setEType(o.Literals.LEVEL_STYLE), o.Literals.PIVOT_TABLE__COLUMN_LEVEL_STYLES.setEType(o.Literals.LEVEL_STYLE), o.Literals.PIVOT_TABLE__CONDITIONAL_FORMATS.setEType(o.Literals.CONDITIONAL_FORMAT), o.Literals.LEVEL_STYLE__LEVEL.setEType(I().getEClassifier("EDouble")), o.Literals.LEVEL_STYLE__BACKGROUND_COLOR.setEType(A("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), o.Literals.LEVEL_STYLE__TEXT_COLOR.setEType(A("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), o.Literals.LEVEL_STYLE__FONT_WEIGHT.setEType(I().getEClassifier("EDouble")), o.Literals.CONDITIONAL_FORMAT__ID.setEType(I().getEClassifier("EString")), o.Literals.CONDITIONAL_FORMAT__CONDITION_TYPE.setEType(I().getEClassifier("EString")), o.Literals.CONDITIONAL_FORMAT__PRIORITY.setEType(I().getEClassifier("EDouble")), o.Literals.CONDITIONAL_FORMAT__VALUE1.setEType(I().getEClassifier("EString")), o.Literals.CONDITIONAL_FORMAT__VALUE2.setEType(I().getEClassifier("EString")), o.Literals.CONDITIONAL_FORMAT__BACKGROUND_COLOR.setEType(A("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), o.Literals.CONDITIONAL_FORMAT__TEXT_COLOR.setEType(A("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), o.Literals.CONDITIONAL_FORMAT__MIN_COLOR.setEType(A("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), o.Literals.CONDITIONAL_FORMAT__MAX_COLOR.setEType(A("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), o.Literals.CONDITIONAL_FORMAT__FONT_WEIGHT.setEType(I().getEClassifier("EDouble")), o.Literals.HEADER_EXPANDED_PAYLOAD__UNIQUE_NAME.setEType(I().getEClassifier("EString")), o.Literals.HEADER_CLICKED_PAYLOAD__UNIQUE_NAME.setEType(I().getEClassifier("EString"));
  }
}
class l extends Ne {
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
  _headerBackgroundColor = new E();
  _headerTextColor = new E();
  _cellBackgroundColor = new E();
  _cellTextColor = new E();
  _borderColor = new E();
  _defaultColumnWidth = new E();
  _defaultRowHeight = new E();
  _fontSize = new E();
  _headerFontWeight = new E();
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
    return this._rows || (this._rows = de(this, this.eClass().getEStructuralFeature("rows"))), this._rows;
  }
  get columns() {
    return this._columns || (this._columns = de(this, this.eClass().getEStructuralFeature("columns"))), this._columns;
  }
  get cells() {
    return this._cells || (this._cells = de(this, this.eClass().getEStructuralFeature("cells"))), this._cells;
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
      getFeature: () => this.eClass().getEStructuralFeature(l.TABLE_STATE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => l.TABLE_STATE,
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
      getFeature: () => this.eClass().getEStructuralFeature(l.HEADER_BACKGROUND_COLOR),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => l.HEADER_BACKGROUND_COLOR,
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
      getFeature: () => this.eClass().getEStructuralFeature(l.HEADER_TEXT_COLOR),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => l.HEADER_TEXT_COLOR,
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
      getFeature: () => this.eClass().getEStructuralFeature(l.CELL_BACKGROUND_COLOR),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => l.CELL_BACKGROUND_COLOR,
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
      getFeature: () => this.eClass().getEStructuralFeature(l.CELL_TEXT_COLOR),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => l.CELL_TEXT_COLOR,
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
      getFeature: () => this.eClass().getEStructuralFeature(l.BORDER_COLOR),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => l.BORDER_COLOR,
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
      getFeature: () => this.eClass().getEStructuralFeature(l.DEFAULT_COLUMN_WIDTH),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => l.DEFAULT_COLUMN_WIDTH,
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
      getFeature: () => this.eClass().getEStructuralFeature(l.DEFAULT_ROW_HEIGHT),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => l.DEFAULT_ROW_HEIGHT,
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
      getFeature: () => this.eClass().getEStructuralFeature(l.FONT_SIZE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => l.FONT_SIZE,
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
      getFeature: () => this.eClass().getEStructuralFeature(l.HEADER_FONT_WEIGHT),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => l.HEADER_FONT_WEIGHT,
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
      getFeature: () => this.eClass().getEStructuralFeature(l.CELL_TEXT_ALIGN),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => l.CELL_TEXT_ALIGN,
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
      getFeature: () => this.eClass().getEStructuralFeature(l.SHOW_ROWS_PROPERTIES),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => l.SHOW_ROWS_PROPERTIES,
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
      getFeature: () => this.eClass().getEStructuralFeature(l.SHOW_COLUMNS_PROPERTIES),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => l.SHOW_COLUMNS_PROPERTIES,
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
      getFeature: () => this.eClass().getEStructuralFeature(l.SHOW_SINGLE_MEASURE_HEADER),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => l.SHOW_SINGLE_MEASURE_HEADER,
      merge: () => !1
    });
  }
  get rowLevelStyles() {
    return this._rowLevelStyles || (this._rowLevelStyles = de(this, this.eClass().getEStructuralFeature("rowLevelStyles"))), this._rowLevelStyles;
  }
  get columnLevelStyles() {
    return this._columnLevelStyles || (this._columnLevelStyles = de(this, this.eClass().getEStructuralFeature("columnLevelStyles"))), this._columnLevelStyles;
  }
  get conditionalFormats() {
    return this._conditionalFormats || (this._conditionalFormats = de(this, this.eClass().getEStructuralFeature("conditionalFormats"))), this._conditionalFormats;
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case l.ROWS:
        return this.rows;
      case l.COLUMNS:
        return this.columns;
      case l.CELLS:
        return this.cells;
      case l.TABLE_STATE:
        return this.tableState;
      case l.HEADER_BACKGROUND_COLOR:
        return this.headerBackgroundColor;
      case l.HEADER_TEXT_COLOR:
        return this.headerTextColor;
      case l.CELL_BACKGROUND_COLOR:
        return this.cellBackgroundColor;
      case l.CELL_TEXT_COLOR:
        return this.cellTextColor;
      case l.BORDER_COLOR:
        return this.borderColor;
      case l.DEFAULT_COLUMN_WIDTH:
        return this.defaultColumnWidth;
      case l.DEFAULT_ROW_HEIGHT:
        return this.defaultRowHeight;
      case l.FONT_SIZE:
        return this.fontSize;
      case l.HEADER_FONT_WEIGHT:
        return this.headerFontWeight;
      case l.CELL_TEXT_ALIGN:
        return this.cellTextAlign;
      case l.SHOW_ROWS_PROPERTIES:
        return this.showRowsProperties;
      case l.SHOW_COLUMNS_PROPERTIES:
        return this.showColumnsProperties;
      case l.SHOW_SINGLE_MEASURE_HEADER:
        return this.showSingleMeasureHeader;
      case l.ROW_LEVEL_STYLES:
        return this.rowLevelStyles;
      case l.COLUMN_LEVEL_STYLES:
        return this.columnLevelStyles;
      case l.CONDITIONAL_FORMATS:
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
      case l.ROWS:
        this.rows.clear(), this.rows.addAll(t), super.eSet(e, t);
        break;
      case l.COLUMNS:
        this.columns.clear(), this.columns.addAll(t), super.eSet(e, t);
        break;
      case l.CELLS:
        this.cells.clear(), this.cells.addAll(t), super.eSet(e, t);
        break;
      case l.TABLE_STATE:
        this.tableState = t, super.eSet(e, t);
        break;
      case l.HEADER_BACKGROUND_COLOR:
        this.headerBackgroundColor = t, super.eSet(e, t);
        break;
      case l.HEADER_TEXT_COLOR:
        this.headerTextColor = t, super.eSet(e, t);
        break;
      case l.CELL_BACKGROUND_COLOR:
        this.cellBackgroundColor = t, super.eSet(e, t);
        break;
      case l.CELL_TEXT_COLOR:
        this.cellTextColor = t, super.eSet(e, t);
        break;
      case l.BORDER_COLOR:
        this.borderColor = t, super.eSet(e, t);
        break;
      case l.DEFAULT_COLUMN_WIDTH:
        this.defaultColumnWidth = t, super.eSet(e, t);
        break;
      case l.DEFAULT_ROW_HEIGHT:
        this.defaultRowHeight = t, super.eSet(e, t);
        break;
      case l.FONT_SIZE:
        this.fontSize = t, super.eSet(e, t);
        break;
      case l.HEADER_FONT_WEIGHT:
        this.headerFontWeight = t, super.eSet(e, t);
        break;
      case l.CELL_TEXT_ALIGN:
        this.cellTextAlign = t, super.eSet(e, t);
        break;
      case l.SHOW_ROWS_PROPERTIES:
        this.showRowsProperties = t, super.eSet(e, t);
        break;
      case l.SHOW_COLUMNS_PROPERTIES:
        this.showColumnsProperties = t, super.eSet(e, t);
        break;
      case l.SHOW_SINGLE_MEASURE_HEADER:
        this.showSingleMeasureHeader = t, super.eSet(e, t);
        break;
      case l.ROW_LEVEL_STYLES:
        this.rowLevelStyles.clear(), this.rowLevelStyles.addAll(t), super.eSet(e, t);
        break;
      case l.COLUMN_LEVEL_STYLES:
        this.columnLevelStyles.clear(), this.columnLevelStyles.addAll(t), super.eSet(e, t);
        break;
      case l.CONDITIONAL_FORMATS:
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
      case l.ROWS:
        return this._rows !== void 0 && !this._rows.isEmpty();
      case l.COLUMNS:
        return this._columns !== void 0 && !this._columns.isEmpty();
      case l.CELLS:
        return this._cells !== void 0 && !this._cells.isEmpty();
      case l.TABLE_STATE:
        return this._tableState !== void 0;
      case l.HEADER_BACKGROUND_COLOR:
        return this._headerBackgroundColor !== new E();
      case l.HEADER_TEXT_COLOR:
        return this._headerTextColor !== new E();
      case l.CELL_BACKGROUND_COLOR:
        return this._cellBackgroundColor !== new E();
      case l.CELL_TEXT_COLOR:
        return this._cellTextColor !== new E();
      case l.BORDER_COLOR:
        return this._borderColor !== new E();
      case l.DEFAULT_COLUMN_WIDTH:
        return this._defaultColumnWidth !== new E();
      case l.DEFAULT_ROW_HEIGHT:
        return this._defaultRowHeight !== new E();
      case l.FONT_SIZE:
        return this._fontSize !== new E();
      case l.HEADER_FONT_WEIGHT:
        return this._headerFontWeight !== new E();
      case l.CELL_TEXT_ALIGN:
        return this._cellTextAlign !== "left";
      case l.SHOW_ROWS_PROPERTIES:
        return this._showRowsProperties !== !1;
      case l.SHOW_COLUMNS_PROPERTIES:
        return this._showColumnsProperties !== !1;
      case l.SHOW_SINGLE_MEASURE_HEADER:
        return this._showSingleMeasureHeader !== !1;
      case l.ROW_LEVEL_STYLES:
        return this._rowLevelStyles !== void 0 && !this._rowLevelStyles.isEmpty();
      case l.COLUMN_LEVEL_STYLES:
        return this._columnLevelStyles !== void 0 && !this._columnLevelStyles.isEmpty();
      case l.CONDITIONAL_FORMATS:
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
      case l.ROWS:
        this._rows && this._rows.clear();
        return;
      case l.COLUMNS:
        this._columns && this._columns.clear();
        return;
      case l.CELLS:
        this._cells && this._cells.clear();
        return;
      case l.TABLE_STATE:
        this._tableState = void 0;
        return;
      case l.HEADER_BACKGROUND_COLOR:
        this._headerBackgroundColor = new E();
        return;
      case l.HEADER_TEXT_COLOR:
        this._headerTextColor = new E();
        return;
      case l.CELL_BACKGROUND_COLOR:
        this._cellBackgroundColor = new E();
        return;
      case l.CELL_TEXT_COLOR:
        this._cellTextColor = new E();
        return;
      case l.BORDER_COLOR:
        this._borderColor = new E();
        return;
      case l.DEFAULT_COLUMN_WIDTH:
        this._defaultColumnWidth = new E();
        return;
      case l.DEFAULT_ROW_HEIGHT:
        this._defaultRowHeight = new E();
        return;
      case l.FONT_SIZE:
        this._fontSize = new E();
        return;
      case l.HEADER_FONT_WEIGHT:
        this._headerFontWeight = new E();
        return;
      case l.CELL_TEXT_ALIGN:
        this._cellTextAlign = "left";
        return;
      case l.SHOW_ROWS_PROPERTIES:
        this._showRowsProperties = !1;
        return;
      case l.SHOW_COLUMNS_PROPERTIES:
        this._showColumnsProperties = !1;
        return;
      case l.SHOW_SINGLE_MEASURE_HEADER:
        this._showSingleMeasureHeader = !1;
        return;
      case l.ROW_LEVEL_STYLES:
        this._rowLevelStyles && this._rowLevelStyles.clear();
        return;
      case l.COLUMN_LEVEL_STYLES:
        this._columnLevelStyles && this._columnLevelStyles.clear();
        return;
      case l.CONDITIONAL_FORMATS:
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
const ot = { class: "component" }, at = /* @__PURE__ */ Fe({
  __name: "PivotTableWidget",
  props: /* @__PURE__ */ Xe({
    datasourceId: {},
    id: {}
  }, {
    configv: { required: !0 },
    configvModifiers: {}
  }),
  emits: ["update:configv"],
  setup(f) {
    const e = f, { datasourceId: t, id: a } = Ke(e), _ = qe(st.TINY_EMITTER), R = () => {
      a?.value && _.emit("widget:PivotTableWidget:click", {
        type: "widget:PivotTableWidget:click",
        widgetId: a.value,
        payload: { widgetId: a.value, timestamp: Date.now() }
      });
    }, v = () => {
      a?.value && _.emit("widget:PivotTableWidget:right_click", {
        type: "widget:PivotTableWidget:right_click",
        widgetId: a.value,
        payload: { widgetId: a.value, timestamp: Date.now() }
      });
    }, H = (h) => {
      a?.value && _.emit("widget:PivotTableWidget:row_clicked", {
        type: "widget:PivotTableWidget:row_clicked",
        widgetId: a.value,
        payload: { widgetId: a.value, timestamp: Date.now(), uniqueName: h }
      });
    }, M = (h) => {
      a?.value && _.emit("widget:PivotTableWidget:row_right_clicked", {
        type: "widget:PivotTableWidget:row_right_clicked",
        widgetId: a.value,
        payload: { widgetId: a.value, timestamp: Date.now(), uniqueName: h }
      });
    }, k = (h) => {
      a?.value && _.emit("widget:PivotTableWidget:column_clicked", {
        type: "widget:PivotTableWidget:column_clicked",
        widgetId: a.value,
        payload: { widgetId: a.value, timestamp: Date.now(), uniqueName: h }
      });
    }, G = (h) => {
      a?.value && _.emit("widget:PivotTableWidget:column_right_clicked", {
        type: "widget:PivotTableWidget:column_right_clicked",
        widgetId: a.value,
        payload: { widgetId: a.value, timestamp: Date.now(), uniqueName: h }
      });
    }, Y = (h) => {
      a?.value && _.emit("widget:PivotTableWidget:cell_clicked", {
        type: "widget:PivotTableWidget:cell_clicked",
        widgetId: a.value,
        payload: { widgetId: a.value, timestamp: Date.now(), rowId: h.rowId, colId: h.colId }
      });
    }, X = (h) => {
      a?.value && _.emit("widget:PivotTableWidget:cell_right_clicked", {
        type: "widget:PivotTableWidget:cell_right_clicked",
        widgetId: a.value,
        payload: { widgetId: a.value, timestamp: Date.now(), rowId: h.rowId, colId: h.colId }
      });
    }, K = (h) => {
      a?.value && _.emit("widget:PivotTableWidget:row_expanded", {
        type: "widget:PivotTableWidget:row_expanded",
        widgetId: a.value,
        payload: { widgetId: a.value, timestamp: Date.now(), uniqueName: h }
      });
    }, q = (h) => {
      a?.value && _.emit("widget:PivotTableWidget:row_collapsed", {
        type: "widget:PivotTableWidget:row_collapsed",
        widgetId: a.value,
        payload: { widgetId: a.value, timestamp: Date.now(), uniqueName: h }
      });
    }, z = (h) => {
      a?.value && _.emit("widget:PivotTableWidget:column_expanded", {
        type: "widget:PivotTableWidget:column_expanded",
        widgetId: a.value,
        payload: { widgetId: a.value, timestamp: Date.now(), uniqueName: h }
      });
    }, Z = (h) => {
      a?.value && _.emit("widget:PivotTableWidget:column_collapsed", {
        type: "widget:PivotTableWidget:column_collapsed",
        widgetId: a.value,
        payload: { widgetId: a.value, timestamp: Date.now(), uniqueName: h }
      });
    }, p = Be(f, "configv"), { wrapParameters: P } = Je(), i = new l();
    ze(() => {
      p.value && Object.assign(p.value, {
        ...De(i),
        ...De(p.value)
      });
    });
    const d = P({
      headerBackgroundColor: U(() => p.value?.headerBackgroundColor?.value ?? i.headerBackgroundColor),
      headerTextColor: U(() => p.value?.headerTextColor?.value ?? i.headerTextColor),
      cellBackgroundColor: U(() => p.value?.cellBackgroundColor?.value ?? i.cellBackgroundColor),
      cellTextColor: U(() => p.value?.cellTextColor?.value ?? i.cellTextColor),
      borderColor: U(() => p.value?.borderColor?.value ?? i.borderColor),
      defaultColumnWidth: U(() => p.value?.defaultColumnWidth?.value ?? i.defaultColumnWidth),
      defaultRowHeight: U(() => p.value?.defaultRowHeight?.value ?? i.defaultRowHeight),
      fontSize: U(() => p.value?.fontSize?.value ?? i.fontSize),
      headerFontWeight: U(() => p.value?.headerFontWeight?.value ?? i.headerFontWeight),
      jsonArrays: U(() => {
        const h = {
          rowLevelStyles: p.value?.rowLevelStyles?.map((L) => ({
            ...L,
            backgroundColor: L.backgroundColor?.value ?? L.backgroundColor,
            textColor: L.textColor?.value ?? L.textColor
          })),
          columnLevelStyles: p.value?.columnLevelStyles?.map((L) => ({
            ...L,
            backgroundColor: L.backgroundColor?.value ?? L.backgroundColor,
            textColor: L.textColor?.value ?? L.textColor
          })),
          conditionalFormats: p.value?.conditionalFormats?.map((L) => ({
            ...L,
            id: L.id ?? "",
            priority: L.priority ?? 0,
            backgroundColor: L.backgroundColor?.value ?? L.backgroundColor,
            textColor: L.textColor?.value ?? L.textColor,
            minColor: L.minColor?.value ?? L.minColor,
            maxColor: L.maxColor?.value ?? L.maxColor
          }))
        };
        return JSON.stringify(h);
      })
    }), r = U(() => {
      try {
        const h = d.jsonArrays.value, L = JSON.parse(h || "{}");
        return {
          rowLevelStyles: L.rowLevelStyles || i.rowLevelStyles,
          columnLevelStyles: L.columnLevelStyles || i.columnLevelStyles,
          conditionalFormats: L.conditionalFormats || i.conditionalFormats
        };
      } catch {
        return {
          rowLevelStyles: i.rowLevelStyles,
          columnLevelStyles: i.columnLevelStyles,
          conditionalFormats: i.conditionalFormats
        };
      }
    }), c = U(() => ({
      headerBackgroundColor: d.headerBackgroundColor.value,
      headerTextColor: d.headerTextColor.value,
      cellBackgroundColor: d.cellBackgroundColor.value,
      cellTextColor: d.cellTextColor.value,
      borderColor: d.borderColor.value,
      defaultColumnWidth: d.defaultColumnWidth.value,
      defaultRowHeight: d.defaultRowHeight.value,
      fontSize: d.fontSize.value,
      headerFontWeight: d.headerFontWeight.value,
      cellTextAlign: p.value?.cellTextAlign || i.cellTextAlign,
      rowLevelStyles: r.value.rowLevelStyles,
      columnLevelStyles: r.value.columnLevelStyles,
      conditionalFormats: r.value.conditionalFormats
    })), n = U(() => ({
      showRowsProperties: p.value?.showRowsProperties || i.showRowsProperties,
      showColumnsProperties: p.value?.showColumnsProperties || i.showColumnsProperties,
      showSingleMeasureHeader: p.value?.showSingleMeasureHeader ?? i.showSingleMeasureHeader
    })), O = Ze(null), { callEvent: J, update: j } = Qe(t, "PivotTable", O, [], n);
    ve(t, (h, L) => {
      j(h, L);
    }), ve(() => n.value, () => {
      j();
    });
    const w = (h) => {
      J("expand", h, !0), h.area === "rows" ? K(h.value?.UName || h.value?.UNAME) : h.area === "columns" && z(h.value?.UName || h.value?.UNAME);
    }, $ = (h) => {
      J("collapse", h, !0), h.area === "rows" ? q(h.value?.UName || h.value?.UNAME) : h.area === "columns" && Z(h.value?.UName || h.value?.UNAME);
    };
    return (h, L) => (V(), W("div", {
      class: "text-container",
      onClick: R,
      onContextmenu: Pe(v, ["prevent"])
    }, [
      C("div", ot, [
        O.value ? (V(), Te(s($e), {
          "model-value": O.value,
          onOnExpand: w,
          onOnCollapse: $,
          onRow_clicked: H,
          onRow_right_clicked: M,
          onColumn_clicked: k,
          onColumn_right_clicked: G,
          onCell_clicked: Y,
          onCell_right_clicked: X,
          key: JSON.stringify(O.value).length,
          rowsExpandedMembers: O.value.tableState.rowsExpandedMembers,
          columnsExpandedMembers: O.value.tableState.columnsExpandedMembers,
          propertiesRows: O.value.propertiesRows,
          propertiesCols: O.value.propertiesCols,
          headerBackgroundColor: c.value.headerBackgroundColor,
          headerTextColor: c.value.headerTextColor,
          cellBackgroundColor: c.value.cellBackgroundColor,
          cellTextColor: c.value.cellTextColor,
          borderColor: c.value.borderColor,
          defaultColumnWidth: c.value.defaultColumnWidth,
          defaultRowHeight: c.value.defaultRowHeight,
          fontSize: c.value.fontSize,
          headerFontWeight: c.value.headerFontWeight,
          cellTextAlign: c.value.cellTextAlign,
          rowLevelStyles: c.value.rowLevelStyles,
          columnLevelStyles: c.value.columnLevelStyles,
          conditionalFormats: c.value.conditionalFormats
        }, null, 8, ["model-value", "rowsExpandedMembers", "columnsExpandedMembers", "propertiesRows", "propertiesCols", "headerBackgroundColor", "headerTextColor", "cellBackgroundColor", "cellTextColor", "borderColor", "defaultColumnWidth", "defaultRowHeight", "fontSize", "headerFontWeight", "cellTextAlign", "rowLevelStyles", "columnLevelStyles", "conditionalFormats"])) : Q("", !0)
      ])
    ], 32));
  }
}), be = (f, e) => {
  const t = f.__vccOpts || f;
  for (const [a, _] of e)
    t[a] = _;
  return t;
}, it = /* @__PURE__ */ be(at, [["__scopeId", "data-v-498e0ac7"]]), nt = ["data-section"], ut = { class: "settings-container" }, dt = ["data-section"], ct = { class: "settings-container" }, ht = { class: "settings-block" }, gt = { class: "settings-block" }, Et = { class: "settings-block" }, _t = ["data-section"], Ct = { class: "settings-container" }, Lt = { class: "settings-block" }, Ot = ["data-section"], Tt = { class: "settings-container" }, pt = { class: "settings-block" }, St = ["data-section"], ft = { class: "settings-container" }, mt = { class: "hint-text" }, Nt = { class: "level-header" }, Rt = { class: "level-card-header" }, wt = {
  key: 0,
  class: "empty-state"
}, At = ["data-section"], vt = { class: "settings-container" }, Dt = { class: "hint-text" }, Vt = { class: "level-header" }, yt = { class: "level-card-header" }, It = {
  key: 0,
  class: "empty-state"
}, Ut = ["data-section"], Ft = { class: "settings-container" }, Bt = { class: "hint-text" }, Wt = { class: "level-header" }, bt = { class: "level-card-header" }, xt = {
  key: 3,
  class: "color-scale-row"
}, Ht = {
  key: 0,
  class: "empty-state"
}, Mt = /* @__PURE__ */ Fe({
  __name: "PivotTableWidgetSettings",
  props: {
    modelValue: { required: !0 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(f) {
    const e = Be(f, "modelValue"), { t } = je("tablePivot"), a = U(() => [
      { value: "left", text: t("Settings.align.left") },
      { value: "center", text: t("Settings.align.center") },
      { value: "right", text: t("Settings.align.right") }
    ]);
    function _(i, d) {
      typeof i?.add == "function" ? i.add(d) : Array.isArray(i) && i.push(d);
    }
    function R(i, d) {
      typeof i?.removeAt == "function" ? i.removeAt(d) : Array.isArray(i) && i.splice(d, 1);
    }
    const v = () => {
      e.value.rowLevelStyles || (e.value.rowLevelStyles = []);
      const i = e.value.rowLevelStyles.length, d = new T();
      d.level = i, _(e.value.rowLevelStyles, d);
    }, H = (i) => {
      R(e.value.rowLevelStyles, i);
    }, M = () => {
      e.value.columnLevelStyles || (e.value.columnLevelStyles = []);
      const i = e.value.columnLevelStyles.length, d = new T();
      d.level = i, _(e.value.columnLevelStyles, d);
    }, k = (i) => {
      R(e.value.columnLevelStyles, i);
    }, G = U(() => [
      { value: "greaterThan", text: "Größer als" },
      { value: "lessThan", text: "Kleiner als" },
      { value: "equals", text: "Gleich" },
      { value: "notEquals", text: "Ungleich" },
      { value: "between", text: "Zwischen" },
      { value: "contains", text: "Enthält (Text)" },
      { value: "colorScale", text: "Farbskala (Min→Max)" },
      { value: "topN", text: "Top N Werte" },
      { value: "bottomN", text: "Bottom N Werte" }
    ].map((i) => ({ ...i, text: t(`Settings.condition.${i.value}`) }))), Y = () => Math.random().toString(36).substring(2, 9), X = () => {
      e.value.conditionalFormats || (e.value.conditionalFormats = []);
      const i = e.value.conditionalFormats.length, d = new u();
      d.id = Y(), d.priority = i, _(e.value.conditionalFormats, d);
    }, K = (i) => {
      R(e.value.conditionalFormats, i);
    }, q = (i) => i === "between", z = (i) => i === "colorScale", Z = (i) => i === "contains", p = (i) => i === "topN" || i === "bottomN", P = (i) => i !== "colorScale";
    return (i, d) => (V(), W(Oe, null, [
      C("section", {
        class: "settings-section",
        "data-section-id": "data",
        "data-section": s(t)("Settings.sections.data")
      }, [
        C("div", ut, [
          g(s(me), {
            modelValue: e.value.showRowsProperties,
            "onUpdate:modelValue": d[0] || (d[0] = (r) => e.value.showRowsProperties = r),
            label: s(t)("Settings.showRowsProperties")
          }, null, 8, ["modelValue", "label"]),
          g(s(me), {
            modelValue: e.value.showColumnsProperties,
            "onUpdate:modelValue": d[1] || (d[1] = (r) => e.value.showColumnsProperties = r),
            label: s(t)("Settings.showColumnsProperties")
          }, null, 8, ["modelValue", "label"]),
          g(s(me), {
            modelValue: e.value.showSingleMeasureHeader,
            "onUpdate:modelValue": d[2] || (d[2] = (r) => e.value.showSingleMeasureHeader = r),
            label: s(t)("Settings.showSingleMeasureHeader")
          }, null, 8, ["modelValue", "label"])
        ])
      ], 8, nt),
      C("section", {
        class: "settings-section",
        "data-section-id": "colors",
        "data-section": s(t)("Settings.sections.colors")
      }, [
        C("div", ct, [
          C("div", ht, [
            C("h3", null, m(s(t)("Settings.header")), 1),
            g(s(D), {
              modelValue: e.value.headerBackgroundColor,
              "onUpdate:modelValue": d[3] || (d[3] = (r) => e.value.headerBackgroundColor = r),
              label: s(t)("Settings.headerBackground")
            }, {
              default: S(({ value: r, change: c }) => [
                g(s(F), {
                  label: s(t)("Settings.headerBackground"),
                  "model-value": r,
                  "onUpdate:modelValue": c
                }, null, 8, ["label", "model-value", "onUpdate:modelValue"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            g(s(D), {
              modelValue: e.value.headerTextColor,
              "onUpdate:modelValue": d[4] || (d[4] = (r) => e.value.headerTextColor = r),
              label: s(t)("Settings.headerText")
            }, {
              default: S(({ value: r, change: c }) => [
                g(s(F), {
                  label: s(t)("Settings.headerText"),
                  "model-value": r,
                  "onUpdate:modelValue": c
                }, null, 8, ["label", "model-value", "onUpdate:modelValue"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"])
          ]),
          C("div", gt, [
            C("h3", null, m(s(t)("Settings.cells")), 1),
            g(s(D), {
              modelValue: e.value.cellBackgroundColor,
              "onUpdate:modelValue": d[5] || (d[5] = (r) => e.value.cellBackgroundColor = r),
              label: s(t)("Settings.cellBackground")
            }, {
              default: S(({ value: r, change: c }) => [
                g(s(F), {
                  label: s(t)("Settings.cellBackground"),
                  "model-value": r,
                  "onUpdate:modelValue": c
                }, null, 8, ["label", "model-value", "onUpdate:modelValue"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            g(s(D), {
              modelValue: e.value.cellTextColor,
              "onUpdate:modelValue": d[6] || (d[6] = (r) => e.value.cellTextColor = r),
              label: s(t)("Settings.cellText")
            }, {
              default: S(({ value: r, change: c }) => [
                g(s(F), {
                  label: s(t)("Settings.cellText"),
                  "model-value": r,
                  "onUpdate:modelValue": c
                }, null, 8, ["label", "model-value", "onUpdate:modelValue"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"])
          ]),
          C("div", Et, [
            C("h3", null, m(s(t)("Settings.border")), 1),
            g(s(D), {
              modelValue: e.value.borderColor,
              "onUpdate:modelValue": d[7] || (d[7] = (r) => e.value.borderColor = r),
              label: s(t)("Settings.borderColor")
            }, {
              default: S(({ value: r, change: c }) => [
                g(s(F), {
                  label: s(t)("Settings.borderColor"),
                  "model-value": r,
                  "onUpdate:modelValue": c
                }, null, 8, ["label", "model-value", "onUpdate:modelValue"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"])
          ])
        ])
      ], 8, dt),
      C("section", {
        class: "settings-section",
        "data-section-id": "dimensions",
        "data-section": s(t)("Settings.sections.dimensions")
      }, [
        C("div", Ct, [
          C("div", Lt, [
            g(s(D), {
              modelValue: e.value.defaultColumnWidth,
              "onUpdate:modelValue": d[8] || (d[8] = (r) => e.value.defaultColumnWidth = r),
              label: s(t)("Settings.columnWidth")
            }, {
              default: S(({ value: r, change: c }) => [
                g(s(B), {
                  label: s(t)("Settings.columnWidth"),
                  "model-value": r,
                  "onUpdate:modelValue": c,
                  type: "number",
                  min: 50,
                  max: 500
                }, null, 8, ["label", "model-value", "onUpdate:modelValue"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            g(s(D), {
              modelValue: e.value.defaultRowHeight,
              "onUpdate:modelValue": d[9] || (d[9] = (r) => e.value.defaultRowHeight = r),
              label: s(t)("Settings.rowHeight")
            }, {
              default: S(({ value: r, change: c }) => [
                g(s(B), {
                  label: s(t)("Settings.rowHeight"),
                  "model-value": r,
                  "onUpdate:modelValue": c,
                  type: "number",
                  min: 20,
                  max: 100
                }, null, 8, ["label", "model-value", "onUpdate:modelValue"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"])
          ])
        ])
      ], 8, _t),
      C("section", {
        class: "settings-section",
        "data-section-id": "text",
        "data-section": s(t)("Settings.sections.text")
      }, [
        C("div", Tt, [
          C("div", pt, [
            g(s(D), {
              modelValue: e.value.fontSize,
              "onUpdate:modelValue": d[10] || (d[10] = (r) => e.value.fontSize = r),
              label: s(t)("Settings.fontSize")
            }, {
              default: S(({ value: r, change: c }) => [
                g(s(B), {
                  label: s(t)("Settings.fontSize"),
                  "model-value": r,
                  "onUpdate:modelValue": c,
                  type: "number",
                  min: 8,
                  max: 32
                }, null, 8, ["label", "model-value", "onUpdate:modelValue"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            g(s(D), {
              modelValue: e.value.headerFontWeight,
              "onUpdate:modelValue": d[11] || (d[11] = (r) => e.value.headerFontWeight = r),
              label: s(t)("Settings.headerFontWeight")
            }, {
              default: S(({ value: r, change: c }) => [
                g(s(B), {
                  label: s(t)("Settings.headerFontWeight"),
                  "model-value": r,
                  "onUpdate:modelValue": c,
                  type: "number",
                  min: 100,
                  max: 900,
                  step: 100
                }, null, 8, ["label", "model-value", "onUpdate:modelValue"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            g(s(Ve), {
              label: s(t)("Settings.textAlign"),
              modelValue: e.value.cellTextAlign,
              "onUpdate:modelValue": d[12] || (d[12] = (r) => e.value.cellTextAlign = r),
              options: a.value,
              "value-key": "value"
            }, null, 8, ["label", "modelValue", "options"])
          ])
        ])
      ], 8, Ot),
      C("section", {
        class: "settings-section",
        "data-section-id": "rowLevels",
        "data-section": s(t)("Settings.sections.rowLevels")
      }, [
        C("div", ft, [
          C("p", mt, m(s(t)("Settings.rowLevelsHint")), 1),
          C("div", Nt, [
            C("span", null, m(s(t)("Settings.levels")), 1),
            g(s(ce), {
              size: "sm",
              onClick: v
            }, {
              default: S(() => [
                ue(m(s(t)("Settings.addLevel")), 1)
              ]),
              _: 1
            })
          ]),
          (V(!0), W(Oe, null, fe(e.value.rowLevelStyles, (r, c) => (V(), W("div", {
            key: `row_level_${c}`,
            class: "level-card"
          }, [
            C("div", Rt, [
              C("strong", null, m(s(t)("Settings.level", { level: r.level })), 1),
              g(s(ce), {
                size: "sm",
                intent: "danger",
                onClick: (n) => H(c)
              }, {
                default: S(() => [
                  ue(m(s(t)("Settings.remove")), 1)
                ]),
                _: 1
              }, 8, ["onClick"])
            ]),
            g(s(B), {
              label: s(t)("Settings.levelNumber"),
              modelValue: r.level,
              "onUpdate:modelValue": (n) => r.level = n,
              modelModifiers: { number: !0 },
              type: "number",
              min: 0
            }, null, 8, ["label", "modelValue", "onUpdate:modelValue"]),
            g(s(D), {
              modelValue: r.backgroundColor,
              "onUpdate:modelValue": (n) => r.backgroundColor = n,
              label: s(t)("Settings.background")
            }, {
              default: S(({ value: n, change: O }) => [
                g(s(F), {
                  label: s(t)("Settings.background"),
                  "model-value": n,
                  "onUpdate:modelValue": O
                }, null, 8, ["label", "model-value", "onUpdate:modelValue"])
              ]),
              _: 1
            }, 8, ["modelValue", "onUpdate:modelValue", "label"]),
            g(s(D), {
              modelValue: r.textColor,
              "onUpdate:modelValue": (n) => r.textColor = n,
              label: s(t)("Settings.textColor")
            }, {
              default: S(({ value: n, change: O }) => [
                g(s(F), {
                  label: s(t)("Settings.textColor"),
                  "model-value": n,
                  "onUpdate:modelValue": O
                }, null, 8, ["label", "model-value", "onUpdate:modelValue"])
              ]),
              _: 1
            }, 8, ["modelValue", "onUpdate:modelValue", "label"]),
            g(s(B), {
              label: s(t)("Settings.fontWeight"),
              modelValue: r.fontWeight,
              "onUpdate:modelValue": (n) => r.fontWeight = n,
              modelModifiers: { number: !0 },
              type: "number",
              min: 100,
              max: 900,
              step: 100
            }, null, 8, ["label", "modelValue", "onUpdate:modelValue"])
          ]))), 128)),
          e.value.rowLevelStyles?.length ? Q("", !0) : (V(), W("div", wt, m(s(t)("Settings.noLevels")), 1))
        ])
      ], 8, St),
      C("section", {
        class: "settings-section",
        "data-section-id": "columnLevels",
        "data-section": s(t)("Settings.sections.columnLevels")
      }, [
        C("div", vt, [
          C("p", Dt, m(s(t)("Settings.columnLevelsHint")), 1),
          C("div", Vt, [
            C("span", null, m(s(t)("Settings.levels")), 1),
            g(s(ce), {
              size: "sm",
              onClick: M
            }, {
              default: S(() => [
                ue(m(s(t)("Settings.addLevel")), 1)
              ]),
              _: 1
            })
          ]),
          (V(!0), W(Oe, null, fe(e.value.columnLevelStyles, (r, c) => (V(), W("div", {
            key: `col_level_${c}`,
            class: "level-card"
          }, [
            C("div", yt, [
              C("strong", null, m(s(t)("Settings.level", { level: r.level })), 1),
              g(s(ce), {
                size: "sm",
                intent: "danger",
                onClick: (n) => k(c)
              }, {
                default: S(() => [
                  ue(m(s(t)("Settings.remove")), 1)
                ]),
                _: 1
              }, 8, ["onClick"])
            ]),
            g(s(B), {
              label: s(t)("Settings.levelNumber"),
              modelValue: r.level,
              "onUpdate:modelValue": (n) => r.level = n,
              modelModifiers: { number: !0 },
              type: "number",
              min: 0
            }, null, 8, ["label", "modelValue", "onUpdate:modelValue"]),
            g(s(D), {
              modelValue: r.backgroundColor,
              "onUpdate:modelValue": (n) => r.backgroundColor = n,
              label: s(t)("Settings.background")
            }, {
              default: S(({ value: n, change: O }) => [
                g(s(F), {
                  label: s(t)("Settings.background"),
                  "model-value": n,
                  "onUpdate:modelValue": O
                }, null, 8, ["label", "model-value", "onUpdate:modelValue"])
              ]),
              _: 1
            }, 8, ["modelValue", "onUpdate:modelValue", "label"]),
            g(s(D), {
              modelValue: r.textColor,
              "onUpdate:modelValue": (n) => r.textColor = n,
              label: s(t)("Settings.textColor")
            }, {
              default: S(({ value: n, change: O }) => [
                g(s(F), {
                  label: s(t)("Settings.textColor"),
                  "model-value": n,
                  "onUpdate:modelValue": O
                }, null, 8, ["label", "model-value", "onUpdate:modelValue"])
              ]),
              _: 1
            }, 8, ["modelValue", "onUpdate:modelValue", "label"]),
            g(s(B), {
              label: s(t)("Settings.fontWeight"),
              modelValue: r.fontWeight,
              "onUpdate:modelValue": (n) => r.fontWeight = n,
              modelModifiers: { number: !0 },
              type: "number",
              min: 100,
              max: 900,
              step: 100
            }, null, 8, ["label", "modelValue", "onUpdate:modelValue"])
          ]))), 128)),
          e.value.columnLevelStyles?.length ? Q("", !0) : (V(), W("div", It, m(s(t)("Settings.noLevels")), 1))
        ])
      ], 8, At),
      C("section", {
        class: "settings-section",
        "data-section-id": "conditional",
        "data-section": s(t)("Settings.sections.conditional")
      }, [
        C("div", Ft, [
          C("p", Bt, m(s(t)("Settings.rulesHint")), 1),
          C("div", Wt, [
            C("span", null, m(s(t)("Settings.rules")), 1),
            g(s(ce), {
              size: "sm",
              onClick: X
            }, {
              default: S(() => [
                ue(m(s(t)("Settings.addRule")), 1)
              ]),
              _: 1
            })
          ]),
          (V(!0), W(Oe, null, fe(e.value.conditionalFormats, (r, c) => (V(), W("div", {
            key: r.id,
            class: "level-card"
          }, [
            C("div", bt, [
              C("strong", null, m(s(t)("Settings.rule", { n: c + 1 })), 1),
              g(s(ce), {
                size: "sm",
                intent: "danger",
                onClick: (n) => K(c)
              }, {
                default: S(() => [
                  ue(m(s(t)("Settings.remove")), 1)
                ]),
                _: 1
              }, 8, ["onClick"])
            ]),
            g(s(Ve), {
              label: s(t)("Settings.conditionType"),
              modelValue: r.conditionType,
              "onUpdate:modelValue": (n) => r.conditionType = n,
              options: G.value,
              "value-key": "value"
            }, null, 8, ["label", "modelValue", "onUpdate:modelValue", "options"]),
            !Z(r.conditionType) && !z(r.conditionType) ? (V(), Te(s(B), {
              key: 0,
              label: p(r.conditionType) ? s(t)("Settings.count") : s(t)("Settings.value"),
              modelValue: r.value1,
              "onUpdate:modelValue": (n) => r.value1 = n,
              modelModifiers: { number: !0 },
              type: "number"
            }, null, 8, ["label", "modelValue", "onUpdate:modelValue"])) : Q("", !0),
            q(r.conditionType) ? (V(), Te(s(B), {
              key: 1,
              label: s(t)("Settings.toValue"),
              modelValue: r.value2,
              "onUpdate:modelValue": (n) => r.value2 = n,
              modelModifiers: { number: !0 },
              type: "number"
            }, null, 8, ["label", "modelValue", "onUpdate:modelValue"])) : Q("", !0),
            Z(r.conditionType) ? (V(), Te(s(B), {
              key: 2,
              label: s(t)("Settings.textValue"),
              modelValue: r.value1,
              "onUpdate:modelValue": (n) => r.value1 = n
            }, null, 8, ["label", "modelValue", "onUpdate:modelValue"])) : Q("", !0),
            z(r.conditionType) ? (V(), W("div", xt, [
              g(s(D), {
                modelValue: r.minColor,
                "onUpdate:modelValue": (n) => r.minColor = n,
                label: s(t)("Settings.minColor")
              }, {
                default: S(({ value: n, change: O }) => [
                  g(s(F), {
                    label: s(t)("Settings.minColor"),
                    "model-value": n,
                    "onUpdate:modelValue": O
                  }, null, 8, ["label", "model-value", "onUpdate:modelValue"])
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue", "label"]),
              g(s(D), {
                modelValue: r.maxColor,
                "onUpdate:modelValue": (n) => r.maxColor = n,
                label: s(t)("Settings.maxColor")
              }, {
                default: S(({ value: n, change: O }) => [
                  g(s(F), {
                    label: s(t)("Settings.maxColor"),
                    "model-value": n,
                    "onUpdate:modelValue": O
                  }, null, 8, ["label", "model-value", "onUpdate:modelValue"])
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue", "label"])
            ])) : Q("", !0),
            P(r.conditionType) ? (V(), W(Oe, { key: 4 }, [
              g(s(D), {
                modelValue: r.backgroundColor,
                "onUpdate:modelValue": (n) => r.backgroundColor = n,
                label: s(t)("Settings.background")
              }, {
                default: S(({ value: n, change: O }) => [
                  g(s(F), {
                    label: s(t)("Settings.background"),
                    "model-value": n,
                    "onUpdate:modelValue": O
                  }, null, 8, ["label", "model-value", "onUpdate:modelValue"])
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue", "label"]),
              g(s(D), {
                modelValue: r.textColor,
                "onUpdate:modelValue": (n) => r.textColor = n,
                label: s(t)("Settings.textColor")
              }, {
                default: S(({ value: n, change: O }) => [
                  g(s(F), {
                    label: s(t)("Settings.textColor"),
                    "model-value": n,
                    "onUpdate:modelValue": O
                  }, null, 8, ["label", "model-value", "onUpdate:modelValue"])
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue", "label"]),
              g(s(B), {
                label: s(t)("Settings.fontWeight"),
                modelValue: r.fontWeight,
                "onUpdate:modelValue": (n) => r.fontWeight = n,
                modelModifiers: { number: !0 },
                type: "number",
                min: 100,
                max: 900,
                step: 100
              }, null, 8, ["label", "modelValue", "onUpdate:modelValue"])
            ], 64)) : Q("", !0),
            g(s(B), {
              label: s(t)("Settings.priority"),
              modelValue: r.priority,
              "onUpdate:modelValue": (n) => r.priority = n,
              modelModifiers: { number: !0 },
              type: "number",
              min: 0
            }, null, 8, ["label", "modelValue", "onUpdate:modelValue"])
          ]))), 128)),
          e.value.conditionalFormats?.length ? Q("", !0) : (V(), W("div", Ht, m(s(t)("Settings.noRules")), 1))
        ])
      ], 8, Ut)
    ], 64));
  }
}), kt = /* @__PURE__ */ be(Mt, [["__scopeId", "data-v-9d79c855"]]), Gt = [
  {
    name: "Row Expanded",
    type: "row_expanded",
    description: "Triggered when a row is expanded in the pivot table",
    payloadType: b
  },
  {
    name: "Row Collapsed",
    type: "row_collapsed",
    description: "Triggered when a row is collapsed in the pivot table",
    payloadType: b
  },
  {
    name: "Column Expanded",
    type: "column_expanded",
    description: "Triggered when a column is expanded in the pivot table",
    payloadType: b
  },
  {
    name: "Column Collapsed",
    type: "column_collapsed",
    description: "Triggered when a column is collapsed in the pivot table",
    payloadType: b
  },
  {
    name: "Row Clicked",
    type: "row_clicked",
    description: "Triggered when a row is clicked in the pivot table",
    payloadType: x
  },
  {
    name: "Column Clicked",
    type: "column_clicked",
    description: "Triggered when a column is clicked in the pivot table",
    payloadType: x
  },
  {
    name: "Row Right Clicked",
    type: "row_right_clicked",
    description: "Triggered when a row is right-clicked in the pivot table",
    payloadType: x
  },
  {
    name: "Column Right Clicked",
    type: "column_right_clicked",
    description: "Triggered when a column is right-clicked in the pivot table",
    payloadType: x
  },
  {
    name: "Cell Clicked",
    type: "cell_clicked",
    description: "Triggered when a cell is clicked in the pivot table",
    payloadType: pe
  },
  {
    name: "Cell Right Clicked",
    type: "cell_right_clicked",
    description: "Triggered when a cell is right-clicked in the pivot table",
    payloadType: pe
  }
];
class Yt extends He {
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
  expandRow(e) {
    throw new Error("expandRow not implemented");
  }
}
const Xt = { sections: { data: "Datendarstellung", colors: "Farben", dimensions: "Maße", text: "Text", rowLevels: "Stile je Zeilenebene", columnLevels: "Stile je Spaltenebene", conditional: "Bedingte Formatierung" }, showRowsProperties: "Zeileneigenschaften zeigen", showColumnsProperties: "Spalteneigenschaften zeigen", showSingleMeasureHeader: "Kopf bei nur einer Kennzahl zeigen", headerBackground: "Kopf: Hintergrund", headerText: "Kopf: Textfarbe", cellBackground: "Zellen: Hintergrund", cellText: "Zellen: Textfarbe", borderColor: "Rahmenfarbe", columnWidth: "Standard-Spaltenbreite (px)", rowHeight: "Standard-Zeilenhöhe (px)", fontSize: "Schriftgröße (px)", headerFontWeight: "Kopf: Schriftstärke", textAlign: "Textausrichtung (Zellen)", levelNumber: "Ebene", background: "Hintergrundfarbe", textColor: "Textfarbe", fontWeight: "Schriftstärke", conditionType: "Art der Bedingung", toValue: "Bis Wert", textValue: "Text", minColor: "Farbe für das Minimum", maxColor: "Farbe für das Maximum", priority: "Priorität (niedriger = höher)", header: "Kopf", cells: "Zellen", border: "Rahmen", levels: "Ebenen", rules: "Formatierungsregeln", addLevel: "Ebene hinzufügen", addRule: "Regel hinzufügen", remove: "Entfernen", align: { left: "Links", center: "Zentriert", right: "Rechts" }, count: "Anzahl (N)", value: "Wert", level: "Ebene {{level}}", rule: "Regel {{n}}", condition: { greaterThan: "Größer als", lessThan: "Kleiner als", equals: "Gleich", notEquals: "Ungleich", between: "Zwischen", contains: "Enthält (Text)", colorScale: "Farbskala (Min→Max)", topN: "Größte N Werte", bottomN: "Kleinste N Werte" }, rowLevelsHint: "Eigene Stile für die Hierarchieebenen in den Zeilenköpfen.", columnLevelsHint: "Eigene Stile für die Hierarchieebenen in den Spaltenköpfen.", rulesHint: "Regeln, nach denen Zellen anhand ihrer Werte formatiert werden.", noLevels: "Noch keine Stile je Ebene. „Ebene hinzufügen“ legt den ersten an.", noRules: "Noch keine Formatierungsregeln. „Regel hinzufügen“ legt die erste an." }, Kt = { name: "Pivot-Tabelle" }, qt = {
  Settings: Xt,
  Widget: Kt
}, zt = { sections: { data: "Data settings", colors: "Colours", dimensions: "Dimensions", text: "Text", rowLevels: "Row level styles", columnLevels: "Column level styles", conditional: "Conditional formatting" }, showRowsProperties: "Show row properties", showColumnsProperties: "Show column properties", showSingleMeasureHeader: "Show single measure header", headerBackground: "Header background", headerText: "Header text colour", cellBackground: "Cell background", cellText: "Cell text colour", borderColor: "Border colour", columnWidth: "Default column width (px)", rowHeight: "Default row height (px)", fontSize: "Font size (px)", headerFontWeight: "Header font weight", textAlign: "Text alignment (cells)", levelNumber: "Level number", background: "Background colour", textColor: "Text colour", fontWeight: "Font weight", conditionType: "Condition type", toValue: "To value", textValue: "Text", minColor: "Minimum colour", maxColor: "Maximum colour", priority: "Priority (lower = higher)", header: "Header", cells: "Cells", border: "Border", levels: "Level configuration", rules: "Formatting rules", addLevel: "Add level", addRule: "Add rule", remove: "Remove", align: { left: "Left", center: "Centred", right: "Right" }, count: "Count (N)", value: "Value", level: "Level {{level}}", rule: "Rule {{n}}", condition: { greaterThan: "Greater than", lessThan: "Less than", equals: "Equals", notEquals: "Not equal", between: "Between", contains: "Contains (text)", colorScale: "Colour scale (min→max)", topN: "Top N values", bottomN: "Bottom N values" }, rowLevelsHint: "Styles of your own for the hierarchy levels in the row headers.", columnLevelsHint: "Styles of your own for the hierarchy levels in the column headers.", rulesHint: "Rules by which cells are formatted based on their values.", noLevels: "No level styles yet. “Add level” creates the first one.", noRules: "No formatting rules yet. “Add rule” creates the first one." }, Zt = { name: "Pivot table" }, Pt = {
  Settings: zt,
  Widget: Zt
};
var Jt = Object.getOwnPropertyDescriptor, Qt = (f, e, t, a) => {
  for (var _ = a > 1 ? void 0 : a ? Jt(e, t) : e, R = f.length - 1, v; R >= 0; R--)
    (v = f[R]) && (_ = v(_) || _);
  return _;
};
const xe = "tablePivot";
let ye = class {
  namespace = xe;
  resources = {
    de: qt,
    en: Pt
  };
};
ye = Qt([
  Ue({
    service: ["Translations"],
    properties: { "i18n.namespace": xe }
  })
], ye);
var jt = Object.defineProperty, $t = Object.getOwnPropertyDescriptor, we = (f, e, t, a) => {
  for (var _ = a > 1 ? void 0 : a ? $t(e, t) : e, R = f.length - 1, v; R >= 0; R--)
    (v = f[R]) && (_ = (a ? v(e, t, _) : v(_)) || _);
  return a && _ && jt(e, t, _), _;
}, Ie = (f, e) => (t, a) => e(t, a, f);
o.eINSTANCE;
const he = "PivotTableWidget";
let Se = class {
  constructor(f, e) {
    this.events = f, this.actions = e;
  }
  type = he;
  component = it;
  settingsComponent = kt;
  supportedDSTypes = [];
  icon = rt;
  name = "PivotTable";
  nameKey = "tablePivot:Widget.name";
  register() {
    this.events.registerWidget(he, Gt), this.actions.registerWidgetType(he, Yt, "widget");
  }
  unregister() {
    this.events.unregisterWidget(he), this.actions.unregisterWidgetType(he);
  }
};
we([
  Ge()
], Se.prototype, "register", 1);
we([
  Ye()
], Se.prototype, "unregister", 1);
Se = we([
  Ue({
    service: [lt],
    properties: { "widget.type": he }
  }),
  Ie(0, Ae(Me)),
  Ie(1, Ae(ke))
], Se);
export {
  it as PivotTableWidget,
  Se as PivotTableWidgetProvider,
  kt as PivotTableWidgetSettings,
  ye as TablePivotTranslations
};
