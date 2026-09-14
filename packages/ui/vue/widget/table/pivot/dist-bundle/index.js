(function(){var i="ui.vue.widget.table.pivot",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".text-container[data-v-498e0ac7]{display:flex;flex-direction:column;width:100%;height:100%;gap:1rem;align-items:stretch}.component[data-v-498e0ac7]{overflow:hidden;padding:16px}.settings-container[data-v-8668e0f0]{padding:16px}.settings-block[data-v-8668e0f0]{display:flex;flex-direction:column;gap:12px;margin-bottom:16px}.settings-block[data-v-8668e0f0]:last-child{margin-bottom:0}.settings-block h3[data-v-8668e0f0]{margin:0 0 8px;font-size:14px;font-weight:600;color:var(--color-accent)}.hint-text[data-v-8668e0f0]{margin:0 0 16px;color:var(--color-dim);font-size:13px}.level-header[data-v-8668e0f0]{display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;font-weight:600}.level-card[data-v-8668e0f0]{border:1px solid #ddd;padding:16px;border-radius:4px;margin-bottom:12px;background:#fafafa;display:flex;flex-direction:column;gap:12px}.level-card-header[data-v-8668e0f0]{display:flex;justify-content:space-between;align-items:center}.empty-state[data-v-8668e0f0]{padding:20px;text-align:center;color:var(--color-dim);background:#f5f5f5;border-radius:4px}.color-scale-row[data-v-8668e0f0]{display:flex;gap:12px}.color-scale-row[data-v-8668e0f0]>*{flex:1}\n";})();
import { PayloadImpl as Te, WidgetActionInterfaceImpl as We, EVENT_REGISTRY_ID as xe, EVENT_ACTIONS_REGISTRY_ID as He } from "org.eclipse.daanse.board.app.lib.api.events";
import { activate as Me, deactivate as be, component as ke, inject as we } from "@eclipse-daanse/tsm";
import { defineComponent as ye, mergeModels as Ge, toRefs as Ye, inject as Xe, useModel as Ue, onMounted as Ke, computed as U, ref as qe, watch as De, createElementBlock as W, openBlock as w, withModifiers as ze, createElementVNode as _, createBlock as Oe, createCommentVNode as Q, unref as u, Fragment as Le, createVNode as c, withCtx as f, createTextVNode as ne, renderList as fe, toDisplayString as Ne } from "vue";
import { VariableWrapper as h, useVariableRepository as Ze, plainSettings as ve, useDatasourceRepository as Je } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { PivotTable as Qe } from "org.eclipse.daanse.board.app.ui.vue.common.xmla";
import { BasicEObject as me, BasicEFactory as je, BasicEPackage as $e, EPackageRegistry as Fe, BasicEClass as te, BasicEReference as N, BasicEAttribute as v, getEcorePackage as V, createContainmentEList as ue } from "@emfts/core";
import { VariableInput as A } from "org.eclipse.daanse.board.app.ui.vue.variable.components";
import { DCheckbox as Se, DColorInput as F, DInput as B, DSelect as Ve, DButton as de } from "org.eclipse.daanse.board.app.ui.vue.controls";
import { WIDGET_SERVICE_ID as et } from "org.eclipse.daanse.board.app.lib.api.widget";
const { identifiers: Pe } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), tt = "data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M105%207.5H15C10.8579%207.5%207.5%2010.8579%207.5%2015V105C7.5%20109.142%2010.8579%20112.5%2015%20112.5H105C109.142%20112.5%20112.5%20109.142%20112.5%20105V15C112.5%2010.8579%20109.142%207.5%20105%207.5ZM15%200C6.71573%200%200%206.71573%200%2015V105C0%20113.284%206.71573%20120%2015%20120H105C113.284%20120%20120%20113.284%20120%20105V15C120%206.71573%20113.284%200%20105%200H15Z'%20fill='%23606060'/%3e%3cpath%20d='M22.5%2048C22.5%2046.3431%2023.8431%2045%2025.5%2045H34.5C36.1569%2045%2037.5%2046.3431%2037.5%2048V94.5C37.5%2096.1569%2036.1569%2097.5%2034.5%2097.5H25.5C23.8431%2097.5%2022.5%2096.1569%2022.5%2094.5V48Z'%20fill='%23606060'/%3e%3cpath%20d='M45%2025.5C45%2023.8431%2046.3431%2022.5%2048%2022.5H94.5C96.1569%2022.5%2097.5%2023.8431%2097.5%2025.5V34.5C97.5%2036.1569%2096.1569%2037.5%2094.5%2037.5H48C46.3431%2037.5%2045%2036.1569%2045%2034.5V25.5Z'%20fill='%23606060'/%3e%3cpath%20d='M37.5%2025.5C37.5%2023.8431%2036.1569%2022.5%2034.5%2022.5H25.5C23.8431%2022.5%2022.5%2023.8431%2022.5%2025.5V34.5C22.5%2036.1569%2023.8431%2037.5%2025.5%2037.5H34.5C36.1569%2037.5%2037.5%2036.1569%2037.5%2034.5V25.5Z'%20fill='%23606060'/%3e%3cpath%20d='M57.4399%2077.5607C58.3849%2076.6157%2060.0006%2077.285%2060.0006%2078.6213V84C60.0006%2084.8284%2060.6722%2085.5%2061.5006%2085.5H84C84.8284%2085.5%2085.5%2084.8284%2085.5%2084V61.5C85.5%2060.6716%2084.8284%2060%2084%2060H78.6214C77.285%2060%2076.6158%2058.3843%2077.5608%2057.4393L88.9399%2046.0606C89.5257%2045.4749%2090.4755%2045.4749%2091.0612%2046.0607L102.439%2057.4394C103.384%2058.3843%20102.715%2060%20101.379%2060H96C95.1716%2060%2094.5%2060.6716%2094.5%2061.5V93C94.5%2093.8284%2093.8284%2094.5%2093%2094.5H61.5006C60.6722%2094.5%2060.0006%2095.1716%2060.0006%2096V101.379C60.0006%20102.715%2058.3849%20103.384%2057.44%20102.44L46.0607%2091.0613C45.4749%2090.4755%2045.4749%2089.5257%2046.0607%2088.9399L57.4399%2077.5607Z'%20fill='%23606060'/%3e%3c/svg%3e";
class O extends me {
  // Feature ID Constants (eLiterals)
  static LEVEL = 0;
  static BACKGROUND_COLOR = 1;
  static TEXT_COLOR = 2;
  static FONT_WEIGHT = 3;
  // Private fields
  _level;
  _backgroundColor = new h();
  _textColor = new h();
  _fontWeight = 600;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return l.Literals.LEVEL_STYLE;
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
        return this._backgroundColor !== new h();
      case O.TEXT_COLOR:
        return this._textColor !== new h();
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
        this._backgroundColor = new h();
        return;
      case O.TEXT_COLOR:
        this._textColor = new h();
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
class n extends me {
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
  _backgroundColor = new h();
  _textColor = new h();
  _minColor = new h();
  _maxColor = new h();
  _fontWeight = 400;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return l.Literals.CONDITIONAL_FORMAT;
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
      getFeature: () => this.eClass().getEStructuralFeature(n.ID),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => n.ID,
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
      getFeature: () => this.eClass().getEStructuralFeature(n.CONDITION_TYPE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => n.CONDITION_TYPE,
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
      getFeature: () => this.eClass().getEStructuralFeature(n.PRIORITY),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => n.PRIORITY,
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
      getFeature: () => this.eClass().getEStructuralFeature(n.VALUE1),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => n.VALUE1,
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
      getFeature: () => this.eClass().getEStructuralFeature(n.VALUE2),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => n.VALUE2,
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
      getFeature: () => this.eClass().getEStructuralFeature(n.BACKGROUND_COLOR),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => n.BACKGROUND_COLOR,
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
      getFeature: () => this.eClass().getEStructuralFeature(n.TEXT_COLOR),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => n.TEXT_COLOR,
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
      getFeature: () => this.eClass().getEStructuralFeature(n.MIN_COLOR),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => n.MIN_COLOR,
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
      getFeature: () => this.eClass().getEStructuralFeature(n.MAX_COLOR),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => n.MAX_COLOR,
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
      getFeature: () => this.eClass().getEStructuralFeature(n.FONT_WEIGHT),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => n.FONT_WEIGHT,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case n.ID:
        return this.id;
      case n.CONDITION_TYPE:
        return this.conditionType;
      case n.PRIORITY:
        return this.priority;
      case n.VALUE1:
        return this.value1;
      case n.VALUE2:
        return this.value2;
      case n.BACKGROUND_COLOR:
        return this.backgroundColor;
      case n.TEXT_COLOR:
        return this.textColor;
      case n.MIN_COLOR:
        return this.minColor;
      case n.MAX_COLOR:
        return this.maxColor;
      case n.FONT_WEIGHT:
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
      case n.ID:
        this.id = t, super.eSet(e, t);
        break;
      case n.CONDITION_TYPE:
        this.conditionType = t, super.eSet(e, t);
        break;
      case n.PRIORITY:
        this.priority = t, super.eSet(e, t);
        break;
      case n.VALUE1:
        this.value1 = t, super.eSet(e, t);
        break;
      case n.VALUE2:
        this.value2 = t, super.eSet(e, t);
        break;
      case n.BACKGROUND_COLOR:
        this.backgroundColor = t, super.eSet(e, t);
        break;
      case n.TEXT_COLOR:
        this.textColor = t, super.eSet(e, t);
        break;
      case n.MIN_COLOR:
        this.minColor = t, super.eSet(e, t);
        break;
      case n.MAX_COLOR:
        this.maxColor = t, super.eSet(e, t);
        break;
      case n.FONT_WEIGHT:
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
      case n.ID:
        return this._id !== void 0;
      case n.CONDITION_TYPE:
        return this._conditionType !== "greaterThan";
      case n.PRIORITY:
        return this._priority !== void 0;
      case n.VALUE1:
        return this._value1 !== "0";
      case n.VALUE2:
        return this._value2 !== "100";
      case n.BACKGROUND_COLOR:
        return this._backgroundColor !== new h();
      case n.TEXT_COLOR:
        return this._textColor !== new h();
      case n.MIN_COLOR:
        return this._minColor !== new h();
      case n.MAX_COLOR:
        return this._maxColor !== new h();
      case n.FONT_WEIGHT:
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
      case n.ID:
        this._id = void 0;
        return;
      case n.CONDITION_TYPE:
        this._conditionType = "greaterThan";
        return;
      case n.PRIORITY:
        this._priority = void 0;
        return;
      case n.VALUE1:
        this._value1 = "0";
        return;
      case n.VALUE2:
        this._value2 = "100";
        return;
      case n.BACKGROUND_COLOR:
        this._backgroundColor = new h();
        return;
      case n.TEXT_COLOR:
        this._textColor = new h();
        return;
      case n.MIN_COLOR:
        this._minColor = new h();
        return;
      case n.MAX_COLOR:
        this._maxColor = new h();
        return;
      case n.FONT_WEIGHT:
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
class x extends Te {
  // Feature ID Constants (eLiterals)
  static UNIQUE_NAME = 4;
  // Private fields
  _uniqueName;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return l.Literals.HEADER_EXPANDED_PAYLOAD;
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
class H extends Te {
  // Feature ID Constants (eLiterals)
  static UNIQUE_NAME = 4;
  // Private fields
  _uniqueName;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return l.Literals.HEADER_CLICKED_PAYLOAD;
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
class Re extends je {
  // Lazy singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new Re()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(l.eINSTANCE);
  }
  /**
   * Create a new PivotTable instance
   */
  createPivotTable() {
    return new s();
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
    return new n();
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
function R(S) {
  const e = Fe.INSTANCE.getEPackage(S);
  if (!e)
    throw new Error(`EPackage '${S}' is not registered. Access the eINSTANCE of that model's generated package (or register it via EPackageRegistry.INSTANCE.registerPackage) before initializing PivotTablePackage.`);
  return e;
}
class l extends $e {
  static eNAME = "PivotTable";
  static eNS_URI = "http://org.eclipse.daanse.board.app.ui.vue.widget.table.pivot";
  static eNS_PREFIX = "PivotTable";
  // Singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new l(), this._instance.init()), this._instance;
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
    super(), this.setName(l.eNAME), this.setNsURI(l.eNS_URI), this.setNsPrefix(l.eNS_PREFIX);
  }
  /**
   * Initialize package contents
   */
  init() {
    Fe.INSTANCE.set(l.eNS_URI, this), this.setEFactoryInstance(Re.eINSTANCE);
    const e = new te();
    e.setName("PivotTable"), e.setAbstract(!1), e.setInterface(!1), this.getEClassifiers().push(e), e.setEPackage(this), l.Literals.PIVOT_TABLE = e;
    const t = new N();
    t.setContainment(!0), t.setName("rows"), t.setLowerBound(1), t.setUpperBound(-1), e.getEStructuralFeatures().push(t), l.Literals.PIVOT_TABLE__ROWS = t;
    const i = new N();
    i.setContainment(!0), i.setName("columns"), i.setLowerBound(1), i.setUpperBound(-1), e.getEStructuralFeatures().push(i), l.Literals.PIVOT_TABLE__COLUMNS = i;
    const L = new N();
    L.setContainment(!0), L.setName("cells"), L.setLowerBound(1), L.setUpperBound(-1), e.getEStructuralFeatures().push(L), l.Literals.PIVOT_TABLE__CELLS = L;
    const y = new v();
    y.setName("tableState"), y.setLowerBound(0), y.setUpperBound(1), e.getEStructuralFeatures().push(y), l.Literals.PIVOT_TABLE__TABLE_STATE = y;
    const I = new N();
    I.setContainment(!1), I.setName("headerBackgroundColor"), I.setLowerBound(0), I.setUpperBound(1), e.getEStructuralFeatures().push(I), l.Literals.PIVOT_TABLE__HEADER_BACKGROUND_COLOR = I;
    const b = new N();
    b.setContainment(!1), b.setName("headerTextColor"), b.setLowerBound(0), b.setUpperBound(1), e.getEStructuralFeatures().push(b), l.Literals.PIVOT_TABLE__HEADER_TEXT_COLOR = b;
    const k = new N();
    k.setContainment(!1), k.setName("cellBackgroundColor"), k.setLowerBound(0), k.setUpperBound(1), e.getEStructuralFeatures().push(k), l.Literals.PIVOT_TABLE__CELL_BACKGROUND_COLOR = k;
    const G = new N();
    G.setContainment(!1), G.setName("cellTextColor"), G.setLowerBound(0), G.setUpperBound(1), e.getEStructuralFeatures().push(G), l.Literals.PIVOT_TABLE__CELL_TEXT_COLOR = G;
    const Y = new N();
    Y.setContainment(!1), Y.setName("borderColor"), Y.setLowerBound(0), Y.setUpperBound(1), e.getEStructuralFeatures().push(Y), l.Literals.PIVOT_TABLE__BORDER_COLOR = Y;
    const X = new N();
    X.setContainment(!1), X.setName("defaultColumnWidth"), X.setLowerBound(0), X.setUpperBound(1), e.getEStructuralFeatures().push(X), l.Literals.PIVOT_TABLE__DEFAULT_COLUMN_WIDTH = X;
    const K = new N();
    K.setContainment(!1), K.setName("defaultRowHeight"), K.setLowerBound(0), K.setUpperBound(1), e.getEStructuralFeatures().push(K), l.Literals.PIVOT_TABLE__DEFAULT_ROW_HEIGHT = K;
    const q = new N();
    q.setContainment(!1), q.setName("fontSize"), q.setLowerBound(0), q.setUpperBound(1), e.getEStructuralFeatures().push(q), l.Literals.PIVOT_TABLE__FONT_SIZE = q;
    const M = new N();
    M.setContainment(!1), M.setName("headerFontWeight"), M.setLowerBound(0), M.setUpperBound(1), e.getEStructuralFeatures().push(M), l.Literals.PIVOT_TABLE__HEADER_FONT_WEIGHT = M;
    const z = new v();
    z.setName("cellTextAlign"), z.setLowerBound(0), z.setUpperBound(1), e.getEStructuralFeatures().push(z), l.Literals.PIVOT_TABLE__CELL_TEXT_ALIGN = z;
    const Z = new v();
    Z.setName("showRowsProperties"), Z.setLowerBound(0), Z.setUpperBound(1), e.getEStructuralFeatures().push(Z), l.Literals.PIVOT_TABLE__SHOW_ROWS_PROPERTIES = Z;
    const T = new v();
    T.setName("showColumnsProperties"), T.setLowerBound(0), T.setUpperBound(1), e.getEStructuralFeatures().push(T), l.Literals.PIVOT_TABLE__SHOW_COLUMNS_PROPERTIES = T;
    const E = new v();
    E.setName("showSingleMeasureHeader"), E.setLowerBound(0), E.setUpperBound(1), e.getEStructuralFeatures().push(E), l.Literals.PIVOT_TABLE__SHOW_SINGLE_MEASURE_HEADER = E;
    const o = new N();
    o.setContainment(!0), o.setName("rowLevelStyles"), o.setLowerBound(0), o.setUpperBound(-1), e.getEStructuralFeatures().push(o), l.Literals.PIVOT_TABLE__ROW_LEVEL_STYLES = o;
    const r = new N();
    r.setContainment(!0), r.setName("columnLevelStyles"), r.setLowerBound(0), r.setUpperBound(-1), e.getEStructuralFeatures().push(r), l.Literals.PIVOT_TABLE__COLUMN_LEVEL_STYLES = r;
    const g = new N();
    g.setContainment(!0), g.setName("conditionalFormats"), g.setLowerBound(0), g.setUpperBound(-1), e.getEStructuralFeatures().push(g), l.Literals.PIVOT_TABLE__CONDITIONAL_FORMATS = g;
    const a = new te();
    a.setName("LevelStyle"), a.setAbstract(!1), a.setInterface(!1), this.getEClassifiers().push(a), a.setEPackage(this), l.Literals.LEVEL_STYLE = a;
    const p = new v();
    p.setName("level"), p.setLowerBound(0), p.setUpperBound(1), a.getEStructuralFeatures().push(p), l.Literals.LEVEL_STYLE__LEVEL = p;
    const D = new N();
    D.setContainment(!1), D.setName("backgroundColor"), D.setLowerBound(0), D.setUpperBound(1), a.getEStructuralFeatures().push(D), l.Literals.LEVEL_STYLE__BACKGROUND_COLOR = D;
    const J = new N();
    J.setContainment(!1), J.setName("textColor"), J.setLowerBound(0), J.setUpperBound(1), a.getEStructuralFeatures().push(J), l.Literals.LEVEL_STYLE__TEXT_COLOR = J;
    const j = new v();
    j.setName("fontWeight"), j.setLowerBound(0), j.setUpperBound(1), a.getEStructuralFeatures().push(j), l.Literals.LEVEL_STYLE__FONT_WEIGHT = j;
    const m = new te();
    m.setName("ConditionalFormat"), m.setAbstract(!1), m.setInterface(!1), this.getEClassifiers().push(m), m.setEPackage(this), l.Literals.CONDITIONAL_FORMAT = m;
    const $ = new v();
    $.setName("id"), $.setLowerBound(0), $.setUpperBound(1), m.getEStructuralFeatures().push($), l.Literals.CONDITIONAL_FORMAT__ID = $;
    const d = new v();
    d.setName("conditionType"), d.setLowerBound(0), d.setUpperBound(1), m.getEStructuralFeatures().push(d), l.Literals.CONDITIONAL_FORMAT__CONDITION_TYPE = d;
    const C = new v();
    C.setName("priority"), C.setLowerBound(0), C.setUpperBound(1), m.getEStructuralFeatures().push(C), l.Literals.CONDITIONAL_FORMAT__PRIORITY = C;
    const he = new v();
    he.setName("value1"), he.setLowerBound(0), he.setUpperBound(1), m.getEStructuralFeatures().push(he), l.Literals.CONDITIONAL_FORMAT__VALUE1 = he;
    const Ee = new v();
    Ee.setName("value2"), Ee.setLowerBound(0), Ee.setUpperBound(1), m.getEStructuralFeatures().push(Ee), l.Literals.CONDITIONAL_FORMAT__VALUE2 = Ee;
    const se = new N();
    se.setContainment(!1), se.setName("backgroundColor"), se.setLowerBound(0), se.setUpperBound(1), m.getEStructuralFeatures().push(se), l.Literals.CONDITIONAL_FORMAT__BACKGROUND_COLOR = se;
    const re = new N();
    re.setContainment(!1), re.setName("textColor"), re.setLowerBound(0), re.setUpperBound(1), m.getEStructuralFeatures().push(re), l.Literals.CONDITIONAL_FORMAT__TEXT_COLOR = re;
    const le = new N();
    le.setContainment(!1), le.setName("minColor"), le.setLowerBound(0), le.setUpperBound(1), m.getEStructuralFeatures().push(le), l.Literals.CONDITIONAL_FORMAT__MIN_COLOR = le;
    const oe = new N();
    oe.setContainment(!1), oe.setName("maxColor"), oe.setLowerBound(0), oe.setUpperBound(1), m.getEStructuralFeatures().push(oe), l.Literals.CONDITIONAL_FORMAT__MAX_COLOR = oe;
    const _e = new v();
    _e.setName("fontWeight"), _e.setLowerBound(0), _e.setUpperBound(1), m.getEStructuralFeatures().push(_e), l.Literals.CONDITIONAL_FORMAT__FONT_WEIGHT = _e;
    const ae = new te();
    ae.setName("JavaObject"), ae.setAbstract(!0), ae.setInterface(!1), this.getEClassifiers().push(ae), ae.setEPackage(this), l.Literals.JAVA_OBJECT = ae;
    const ie = new te();
    ie.setName("PivotTableInterface"), ie.setAbstract(!0), ie.setInterface(!1), this.getEClassifiers().push(ie), ie.setEPackage(this), l.Literals.PIVOT_TABLE_INTERFACE = ie;
    const P = new te();
    P.setName("HeaderExpandedPayload"), P.setAbstract(!1), P.setInterface(!1), this.getEClassifiers().push(P), P.setEPackage(this), l.Literals.HEADER_EXPANDED_PAYLOAD = P;
    const ge = new v();
    ge.setName("uniqueName"), ge.setLowerBound(0), ge.setUpperBound(1), P.getEStructuralFeatures().push(ge), l.Literals.HEADER_EXPANDED_PAYLOAD__UNIQUE_NAME = ge;
    const ee = new te();
    ee.setName("HeaderClickedPayload"), ee.setAbstract(!1), ee.setInterface(!1), this.getEClassifiers().push(ee), ee.setEPackage(this), l.Literals.HEADER_CLICKED_PAYLOAD = ee;
    const Ce = new v();
    Ce.setName("uniqueName"), Ce.setLowerBound(0), Ce.setUpperBound(1), ee.getEStructuralFeatures().push(Ce), l.Literals.HEADER_CLICKED_PAYLOAD__UNIQUE_NAME = Ce, l.Literals.PIVOT_TABLE_INTERFACE.getESuperTypes().push(R("http://org.eclipse.daanse.board.app.lib.events").getEClassifier("WidgetActionInterface")), l.Literals.HEADER_EXPANDED_PAYLOAD.getESuperTypes().push(R("http://org.eclipse.daanse.board.app.lib.events").getEClassifier("Payload")), l.Literals.HEADER_CLICKED_PAYLOAD.getESuperTypes().push(R("http://org.eclipse.daanse.board.app.lib.events").getEClassifier("Payload")), l.Literals.PIVOT_TABLE__ROWS.setEType(l.Literals.JAVA_OBJECT), l.Literals.PIVOT_TABLE__COLUMNS.setEType(l.Literals.JAVA_OBJECT), l.Literals.PIVOT_TABLE__CELLS.setEType(l.Literals.JAVA_OBJECT), l.Literals.PIVOT_TABLE__TABLE_STATE.setEType(V().getEClassifier("EJavaObject")), l.Literals.PIVOT_TABLE__HEADER_BACKGROUND_COLOR.setEType(R("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), l.Literals.PIVOT_TABLE__HEADER_TEXT_COLOR.setEType(R("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), l.Literals.PIVOT_TABLE__CELL_BACKGROUND_COLOR.setEType(R("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), l.Literals.PIVOT_TABLE__CELL_TEXT_COLOR.setEType(R("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), l.Literals.PIVOT_TABLE__BORDER_COLOR.setEType(R("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), l.Literals.PIVOT_TABLE__DEFAULT_COLUMN_WIDTH.setEType(R("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), l.Literals.PIVOT_TABLE__DEFAULT_ROW_HEIGHT.setEType(R("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), l.Literals.PIVOT_TABLE__FONT_SIZE.setEType(R("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), l.Literals.PIVOT_TABLE__HEADER_FONT_WEIGHT.setEType(R("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), l.Literals.PIVOT_TABLE__CELL_TEXT_ALIGN.setEType(V().getEClassifier("EString")), l.Literals.PIVOT_TABLE__SHOW_ROWS_PROPERTIES.setEType(V().getEClassifier("EBoolean")), l.Literals.PIVOT_TABLE__SHOW_COLUMNS_PROPERTIES.setEType(V().getEClassifier("EBoolean")), l.Literals.PIVOT_TABLE__SHOW_SINGLE_MEASURE_HEADER.setEType(V().getEClassifier("EBoolean")), l.Literals.PIVOT_TABLE__ROW_LEVEL_STYLES.setEType(l.Literals.LEVEL_STYLE), l.Literals.PIVOT_TABLE__COLUMN_LEVEL_STYLES.setEType(l.Literals.LEVEL_STYLE), l.Literals.PIVOT_TABLE__CONDITIONAL_FORMATS.setEType(l.Literals.CONDITIONAL_FORMAT), l.Literals.LEVEL_STYLE__LEVEL.setEType(V().getEClassifier("EDouble")), l.Literals.LEVEL_STYLE__BACKGROUND_COLOR.setEType(R("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), l.Literals.LEVEL_STYLE__TEXT_COLOR.setEType(R("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), l.Literals.LEVEL_STYLE__FONT_WEIGHT.setEType(V().getEClassifier("EDouble")), l.Literals.CONDITIONAL_FORMAT__ID.setEType(V().getEClassifier("EString")), l.Literals.CONDITIONAL_FORMAT__CONDITION_TYPE.setEType(V().getEClassifier("EString")), l.Literals.CONDITIONAL_FORMAT__PRIORITY.setEType(V().getEClassifier("EDouble")), l.Literals.CONDITIONAL_FORMAT__VALUE1.setEType(V().getEClassifier("EString")), l.Literals.CONDITIONAL_FORMAT__VALUE2.setEType(V().getEClassifier("EString")), l.Literals.CONDITIONAL_FORMAT__BACKGROUND_COLOR.setEType(R("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), l.Literals.CONDITIONAL_FORMAT__TEXT_COLOR.setEType(R("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), l.Literals.CONDITIONAL_FORMAT__MIN_COLOR.setEType(R("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), l.Literals.CONDITIONAL_FORMAT__MAX_COLOR.setEType(R("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), l.Literals.CONDITIONAL_FORMAT__FONT_WEIGHT.setEType(V().getEClassifier("EDouble")), l.Literals.HEADER_EXPANDED_PAYLOAD__UNIQUE_NAME.setEType(V().getEClassifier("EString")), l.Literals.HEADER_CLICKED_PAYLOAD__UNIQUE_NAME.setEType(V().getEClassifier("EString"));
  }
}
class s extends me {
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
  _headerBackgroundColor = new h();
  _headerTextColor = new h();
  _cellBackgroundColor = new h();
  _cellTextColor = new h();
  _borderColor = new h();
  _defaultColumnWidth = new h();
  _defaultRowHeight = new h();
  _fontSize = new h();
  _headerFontWeight = new h();
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
    return l.Literals.PIVOT_TABLE;
  }
  // Getters and Setters
  get rows() {
    return this._rows || (this._rows = ue(this, this.eClass().getEStructuralFeature("rows"))), this._rows;
  }
  get columns() {
    return this._columns || (this._columns = ue(this, this.eClass().getEStructuralFeature("columns"))), this._columns;
  }
  get cells() {
    return this._cells || (this._cells = ue(this, this.eClass().getEStructuralFeature("cells"))), this._cells;
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
      getFeature: () => this.eClass().getEStructuralFeature(s.TABLE_STATE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => s.TABLE_STATE,
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
      getFeature: () => this.eClass().getEStructuralFeature(s.HEADER_BACKGROUND_COLOR),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => s.HEADER_BACKGROUND_COLOR,
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
      getFeature: () => this.eClass().getEStructuralFeature(s.HEADER_TEXT_COLOR),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => s.HEADER_TEXT_COLOR,
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
      getFeature: () => this.eClass().getEStructuralFeature(s.CELL_BACKGROUND_COLOR),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => s.CELL_BACKGROUND_COLOR,
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
      getFeature: () => this.eClass().getEStructuralFeature(s.CELL_TEXT_COLOR),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => s.CELL_TEXT_COLOR,
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
      getFeature: () => this.eClass().getEStructuralFeature(s.BORDER_COLOR),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => s.BORDER_COLOR,
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
      getFeature: () => this.eClass().getEStructuralFeature(s.DEFAULT_COLUMN_WIDTH),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => s.DEFAULT_COLUMN_WIDTH,
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
      getFeature: () => this.eClass().getEStructuralFeature(s.DEFAULT_ROW_HEIGHT),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => s.DEFAULT_ROW_HEIGHT,
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
      getFeature: () => this.eClass().getEStructuralFeature(s.FONT_SIZE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => s.FONT_SIZE,
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
      getFeature: () => this.eClass().getEStructuralFeature(s.HEADER_FONT_WEIGHT),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => s.HEADER_FONT_WEIGHT,
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
      getFeature: () => this.eClass().getEStructuralFeature(s.CELL_TEXT_ALIGN),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => s.CELL_TEXT_ALIGN,
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
      getFeature: () => this.eClass().getEStructuralFeature(s.SHOW_ROWS_PROPERTIES),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => s.SHOW_ROWS_PROPERTIES,
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
      getFeature: () => this.eClass().getEStructuralFeature(s.SHOW_COLUMNS_PROPERTIES),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => s.SHOW_COLUMNS_PROPERTIES,
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
      getFeature: () => this.eClass().getEStructuralFeature(s.SHOW_SINGLE_MEASURE_HEADER),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => s.SHOW_SINGLE_MEASURE_HEADER,
      merge: () => !1
    });
  }
  get rowLevelStyles() {
    return this._rowLevelStyles || (this._rowLevelStyles = ue(this, this.eClass().getEStructuralFeature("rowLevelStyles"))), this._rowLevelStyles;
  }
  get columnLevelStyles() {
    return this._columnLevelStyles || (this._columnLevelStyles = ue(this, this.eClass().getEStructuralFeature("columnLevelStyles"))), this._columnLevelStyles;
  }
  get conditionalFormats() {
    return this._conditionalFormats || (this._conditionalFormats = ue(this, this.eClass().getEStructuralFeature("conditionalFormats"))), this._conditionalFormats;
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case s.ROWS:
        return this.rows;
      case s.COLUMNS:
        return this.columns;
      case s.CELLS:
        return this.cells;
      case s.TABLE_STATE:
        return this.tableState;
      case s.HEADER_BACKGROUND_COLOR:
        return this.headerBackgroundColor;
      case s.HEADER_TEXT_COLOR:
        return this.headerTextColor;
      case s.CELL_BACKGROUND_COLOR:
        return this.cellBackgroundColor;
      case s.CELL_TEXT_COLOR:
        return this.cellTextColor;
      case s.BORDER_COLOR:
        return this.borderColor;
      case s.DEFAULT_COLUMN_WIDTH:
        return this.defaultColumnWidth;
      case s.DEFAULT_ROW_HEIGHT:
        return this.defaultRowHeight;
      case s.FONT_SIZE:
        return this.fontSize;
      case s.HEADER_FONT_WEIGHT:
        return this.headerFontWeight;
      case s.CELL_TEXT_ALIGN:
        return this.cellTextAlign;
      case s.SHOW_ROWS_PROPERTIES:
        return this.showRowsProperties;
      case s.SHOW_COLUMNS_PROPERTIES:
        return this.showColumnsProperties;
      case s.SHOW_SINGLE_MEASURE_HEADER:
        return this.showSingleMeasureHeader;
      case s.ROW_LEVEL_STYLES:
        return this.rowLevelStyles;
      case s.COLUMN_LEVEL_STYLES:
        return this.columnLevelStyles;
      case s.CONDITIONAL_FORMATS:
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
      case s.ROWS:
        this.rows.clear(), this.rows.addAll(t), super.eSet(e, t);
        break;
      case s.COLUMNS:
        this.columns.clear(), this.columns.addAll(t), super.eSet(e, t);
        break;
      case s.CELLS:
        this.cells.clear(), this.cells.addAll(t), super.eSet(e, t);
        break;
      case s.TABLE_STATE:
        this.tableState = t, super.eSet(e, t);
        break;
      case s.HEADER_BACKGROUND_COLOR:
        this.headerBackgroundColor = t, super.eSet(e, t);
        break;
      case s.HEADER_TEXT_COLOR:
        this.headerTextColor = t, super.eSet(e, t);
        break;
      case s.CELL_BACKGROUND_COLOR:
        this.cellBackgroundColor = t, super.eSet(e, t);
        break;
      case s.CELL_TEXT_COLOR:
        this.cellTextColor = t, super.eSet(e, t);
        break;
      case s.BORDER_COLOR:
        this.borderColor = t, super.eSet(e, t);
        break;
      case s.DEFAULT_COLUMN_WIDTH:
        this.defaultColumnWidth = t, super.eSet(e, t);
        break;
      case s.DEFAULT_ROW_HEIGHT:
        this.defaultRowHeight = t, super.eSet(e, t);
        break;
      case s.FONT_SIZE:
        this.fontSize = t, super.eSet(e, t);
        break;
      case s.HEADER_FONT_WEIGHT:
        this.headerFontWeight = t, super.eSet(e, t);
        break;
      case s.CELL_TEXT_ALIGN:
        this.cellTextAlign = t, super.eSet(e, t);
        break;
      case s.SHOW_ROWS_PROPERTIES:
        this.showRowsProperties = t, super.eSet(e, t);
        break;
      case s.SHOW_COLUMNS_PROPERTIES:
        this.showColumnsProperties = t, super.eSet(e, t);
        break;
      case s.SHOW_SINGLE_MEASURE_HEADER:
        this.showSingleMeasureHeader = t, super.eSet(e, t);
        break;
      case s.ROW_LEVEL_STYLES:
        this.rowLevelStyles.clear(), this.rowLevelStyles.addAll(t), super.eSet(e, t);
        break;
      case s.COLUMN_LEVEL_STYLES:
        this.columnLevelStyles.clear(), this.columnLevelStyles.addAll(t), super.eSet(e, t);
        break;
      case s.CONDITIONAL_FORMATS:
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
      case s.ROWS:
        return this._rows !== void 0 && !this._rows.isEmpty();
      case s.COLUMNS:
        return this._columns !== void 0 && !this._columns.isEmpty();
      case s.CELLS:
        return this._cells !== void 0 && !this._cells.isEmpty();
      case s.TABLE_STATE:
        return this._tableState !== void 0;
      case s.HEADER_BACKGROUND_COLOR:
        return this._headerBackgroundColor !== new h();
      case s.HEADER_TEXT_COLOR:
        return this._headerTextColor !== new h();
      case s.CELL_BACKGROUND_COLOR:
        return this._cellBackgroundColor !== new h();
      case s.CELL_TEXT_COLOR:
        return this._cellTextColor !== new h();
      case s.BORDER_COLOR:
        return this._borderColor !== new h();
      case s.DEFAULT_COLUMN_WIDTH:
        return this._defaultColumnWidth !== new h();
      case s.DEFAULT_ROW_HEIGHT:
        return this._defaultRowHeight !== new h();
      case s.FONT_SIZE:
        return this._fontSize !== new h();
      case s.HEADER_FONT_WEIGHT:
        return this._headerFontWeight !== new h();
      case s.CELL_TEXT_ALIGN:
        return this._cellTextAlign !== "left";
      case s.SHOW_ROWS_PROPERTIES:
        return this._showRowsProperties !== !1;
      case s.SHOW_COLUMNS_PROPERTIES:
        return this._showColumnsProperties !== !1;
      case s.SHOW_SINGLE_MEASURE_HEADER:
        return this._showSingleMeasureHeader !== !1;
      case s.ROW_LEVEL_STYLES:
        return this._rowLevelStyles !== void 0 && !this._rowLevelStyles.isEmpty();
      case s.COLUMN_LEVEL_STYLES:
        return this._columnLevelStyles !== void 0 && !this._columnLevelStyles.isEmpty();
      case s.CONDITIONAL_FORMATS:
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
      case s.ROWS:
        this._rows && this._rows.clear();
        return;
      case s.COLUMNS:
        this._columns && this._columns.clear();
        return;
      case s.CELLS:
        this._cells && this._cells.clear();
        return;
      case s.TABLE_STATE:
        this._tableState = void 0;
        return;
      case s.HEADER_BACKGROUND_COLOR:
        this._headerBackgroundColor = new h();
        return;
      case s.HEADER_TEXT_COLOR:
        this._headerTextColor = new h();
        return;
      case s.CELL_BACKGROUND_COLOR:
        this._cellBackgroundColor = new h();
        return;
      case s.CELL_TEXT_COLOR:
        this._cellTextColor = new h();
        return;
      case s.BORDER_COLOR:
        this._borderColor = new h();
        return;
      case s.DEFAULT_COLUMN_WIDTH:
        this._defaultColumnWidth = new h();
        return;
      case s.DEFAULT_ROW_HEIGHT:
        this._defaultRowHeight = new h();
        return;
      case s.FONT_SIZE:
        this._fontSize = new h();
        return;
      case s.HEADER_FONT_WEIGHT:
        this._headerFontWeight = new h();
        return;
      case s.CELL_TEXT_ALIGN:
        this._cellTextAlign = "left";
        return;
      case s.SHOW_ROWS_PROPERTIES:
        this._showRowsProperties = !1;
        return;
      case s.SHOW_COLUMNS_PROPERTIES:
        this._showColumnsProperties = !1;
        return;
      case s.SHOW_SINGLE_MEASURE_HEADER:
        this._showSingleMeasureHeader = !1;
        return;
      case s.ROW_LEVEL_STYLES:
        this._rowLevelStyles && this._rowLevelStyles.clear();
        return;
      case s.COLUMN_LEVEL_STYLES:
        this._columnLevelStyles && this._columnLevelStyles.clear();
        return;
      case s.CONDITIONAL_FORMATS:
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
const st = { class: "component" }, rt = /* @__PURE__ */ ye({
  __name: "PivotTableWidget",
  props: /* @__PURE__ */ Ge({
    datasourceId: {},
    id: {}
  }, {
    configv: { required: !0 },
    configvModifiers: {}
  }),
  emits: ["update:configv"],
  setup(S) {
    const e = S, { datasourceId: t, id: i } = Ye(e), L = Xe(Pe.TINY_EMITTER), y = () => {
      i?.value && L.emit("widget:PivotTableWidget:click", {
        type: "widget:PivotTableWidget:click",
        widgetId: i.value,
        payload: { widgetId: i.value, timestamp: Date.now() }
      });
    }, I = () => {
      i?.value && L.emit("widget:PivotTableWidget:right_click", {
        type: "widget:PivotTableWidget:right_click",
        widgetId: i.value,
        payload: { widgetId: i.value, timestamp: Date.now() }
      });
    }, b = (d) => {
      i?.value && L.emit("widget:PivotTableWidget:row_clicked", {
        type: "widget:PivotTableWidget:row_clicked",
        widgetId: i.value,
        payload: { widgetId: i.value, timestamp: Date.now(), uniqueName: d }
      });
    }, k = (d) => {
      i?.value && L.emit("widget:PivotTableWidget:row_right_clicked", {
        type: "widget:PivotTableWidget:row_right_clicked",
        widgetId: i.value,
        payload: { widgetId: i.value, timestamp: Date.now(), uniqueName: d }
      });
    }, G = (d) => {
      i?.value && L.emit("widget:PivotTableWidget:column_clicked", {
        type: "widget:PivotTableWidget:column_clicked",
        widgetId: i.value,
        payload: { widgetId: i.value, timestamp: Date.now(), uniqueName: d }
      });
    }, Y = (d) => {
      i?.value && L.emit("widget:PivotTableWidget:column_right_clicked", {
        type: "widget:PivotTableWidget:column_right_clicked",
        widgetId: i.value,
        payload: { widgetId: i.value, timestamp: Date.now(), uniqueName: d }
      });
    }, X = (d) => {
      i?.value && L.emit("widget:PivotTableWidget:cell_clicked", {
        type: "widget:PivotTableWidget:cell_clicked",
        widgetId: i.value,
        payload: { widgetId: i.value, timestamp: Date.now(), rowId: d.rowId, colId: d.colId }
      });
    }, K = (d) => {
      i?.value && L.emit("widget:PivotTableWidget:cell_right_clicked", {
        type: "widget:PivotTableWidget:cell_right_clicked",
        widgetId: i.value,
        payload: { widgetId: i.value, timestamp: Date.now(), rowId: d.rowId, colId: d.colId }
      });
    }, q = (d) => {
      i?.value && L.emit("widget:PivotTableWidget:row_expanded", {
        type: "widget:PivotTableWidget:row_expanded",
        widgetId: i.value,
        payload: { widgetId: i.value, timestamp: Date.now(), uniqueName: d }
      });
    }, M = (d) => {
      i?.value && L.emit("widget:PivotTableWidget:row_collapsed", {
        type: "widget:PivotTableWidget:row_collapsed",
        widgetId: i.value,
        payload: { widgetId: i.value, timestamp: Date.now(), uniqueName: d }
      });
    }, z = (d) => {
      i?.value && L.emit("widget:PivotTableWidget:column_expanded", {
        type: "widget:PivotTableWidget:column_expanded",
        widgetId: i.value,
        payload: { widgetId: i.value, timestamp: Date.now(), uniqueName: d }
      });
    }, Z = (d) => {
      i?.value && L.emit("widget:PivotTableWidget:column_collapsed", {
        type: "widget:PivotTableWidget:column_collapsed",
        widgetId: i.value,
        payload: { widgetId: i.value, timestamp: Date.now(), uniqueName: d }
      });
    }, T = Ue(S, "configv"), { wrapParameters: E } = Ze(), o = new s();
    Ke(() => {
      T.value && Object.assign(T.value, {
        ...ve(o),
        ...ve(T.value)
      });
    });
    const r = E({
      headerBackgroundColor: U(() => T.value?.headerBackgroundColor?.value ?? o.headerBackgroundColor),
      headerTextColor: U(() => T.value?.headerTextColor?.value ?? o.headerTextColor),
      cellBackgroundColor: U(() => T.value?.cellBackgroundColor?.value ?? o.cellBackgroundColor),
      cellTextColor: U(() => T.value?.cellTextColor?.value ?? o.cellTextColor),
      borderColor: U(() => T.value?.borderColor?.value ?? o.borderColor),
      defaultColumnWidth: U(() => T.value?.defaultColumnWidth?.value ?? o.defaultColumnWidth),
      defaultRowHeight: U(() => T.value?.defaultRowHeight?.value ?? o.defaultRowHeight),
      fontSize: U(() => T.value?.fontSize?.value ?? o.fontSize),
      headerFontWeight: U(() => T.value?.headerFontWeight?.value ?? o.headerFontWeight),
      jsonArrays: U(() => {
        const d = {
          rowLevelStyles: T.value?.rowLevelStyles?.map((C) => ({
            ...C,
            backgroundColor: C.backgroundColor?.value ?? C.backgroundColor,
            textColor: C.textColor?.value ?? C.textColor
          })),
          columnLevelStyles: T.value?.columnLevelStyles?.map((C) => ({
            ...C,
            backgroundColor: C.backgroundColor?.value ?? C.backgroundColor,
            textColor: C.textColor?.value ?? C.textColor
          })),
          conditionalFormats: T.value?.conditionalFormats?.map((C) => ({
            ...C,
            id: C.id ?? "",
            priority: C.priority ?? 0,
            backgroundColor: C.backgroundColor?.value ?? C.backgroundColor,
            textColor: C.textColor?.value ?? C.textColor,
            minColor: C.minColor?.value ?? C.minColor,
            maxColor: C.maxColor?.value ?? C.maxColor
          }))
        };
        return JSON.stringify(d);
      })
    }), g = U(() => {
      try {
        const d = r.jsonArrays.value, C = JSON.parse(d || "{}");
        return {
          rowLevelStyles: C.rowLevelStyles || o.rowLevelStyles,
          columnLevelStyles: C.columnLevelStyles || o.columnLevelStyles,
          conditionalFormats: C.conditionalFormats || o.conditionalFormats
        };
      } catch {
        return {
          rowLevelStyles: o.rowLevelStyles,
          columnLevelStyles: o.columnLevelStyles,
          conditionalFormats: o.conditionalFormats
        };
      }
    }), a = U(() => ({
      headerBackgroundColor: r.headerBackgroundColor.value,
      headerTextColor: r.headerTextColor.value,
      cellBackgroundColor: r.cellBackgroundColor.value,
      cellTextColor: r.cellTextColor.value,
      borderColor: r.borderColor.value,
      defaultColumnWidth: r.defaultColumnWidth.value,
      defaultRowHeight: r.defaultRowHeight.value,
      fontSize: r.fontSize.value,
      headerFontWeight: r.headerFontWeight.value,
      cellTextAlign: T.value?.cellTextAlign || o.cellTextAlign,
      rowLevelStyles: g.value.rowLevelStyles,
      columnLevelStyles: g.value.columnLevelStyles,
      conditionalFormats: g.value.conditionalFormats
    })), p = U(() => ({
      showRowsProperties: T.value?.showRowsProperties || o.showRowsProperties,
      showColumnsProperties: T.value?.showColumnsProperties || o.showColumnsProperties,
      showSingleMeasureHeader: T.value?.showSingleMeasureHeader ?? o.showSingleMeasureHeader
    })), D = qe(null), { callEvent: J, update: j } = Je(t, "PivotTable", D, [], p);
    De(t, (d, C) => {
      j(d, C);
    }), De(() => p.value, () => {
      j();
    });
    const m = (d) => {
      J("expand", d, !0), d.area === "rows" ? q(d.value?.UName || d.value?.UNAME) : d.area === "columns" && z(d.value?.UName || d.value?.UNAME);
    }, $ = (d) => {
      J("collapse", d, !0), d.area === "rows" ? M(d.value?.UName || d.value?.UNAME) : d.area === "columns" && Z(d.value?.UName || d.value?.UNAME);
    };
    return (d, C) => (w(), W("div", {
      class: "text-container",
      onClick: y,
      onContextmenu: ze(I, ["prevent"])
    }, [
      _("div", st, [
        D.value ? (w(), Oe(u(Qe), {
          "model-value": D.value,
          onOnExpand: m,
          onOnCollapse: $,
          onRow_clicked: b,
          onRow_right_clicked: k,
          onColumn_clicked: G,
          onColumn_right_clicked: Y,
          onCell_clicked: X,
          onCell_right_clicked: K,
          key: JSON.stringify(D.value).length,
          rowsExpandedMembers: D.value.tableState.rowsExpandedMembers,
          columnsExpandedMembers: D.value.tableState.columnsExpandedMembers,
          propertiesRows: D.value.propertiesRows,
          propertiesCols: D.value.propertiesCols,
          headerBackgroundColor: a.value.headerBackgroundColor,
          headerTextColor: a.value.headerTextColor,
          cellBackgroundColor: a.value.cellBackgroundColor,
          cellTextColor: a.value.cellTextColor,
          borderColor: a.value.borderColor,
          defaultColumnWidth: a.value.defaultColumnWidth,
          defaultRowHeight: a.value.defaultRowHeight,
          fontSize: a.value.fontSize,
          headerFontWeight: a.value.headerFontWeight,
          cellTextAlign: a.value.cellTextAlign,
          rowLevelStyles: a.value.rowLevelStyles,
          columnLevelStyles: a.value.columnLevelStyles,
          conditionalFormats: a.value.conditionalFormats
        }, null, 8, ["model-value", "rowsExpandedMembers", "columnsExpandedMembers", "propertiesRows", "propertiesCols", "headerBackgroundColor", "headerTextColor", "cellBackgroundColor", "cellTextColor", "borderColor", "defaultColumnWidth", "defaultRowHeight", "fontSize", "headerFontWeight", "cellTextAlign", "rowLevelStyles", "columnLevelStyles", "conditionalFormats"])) : Q("", !0)
      ])
    ], 32));
  }
}), Be = (S, e) => {
  const t = S.__vccOpts || S;
  for (const [i, L] of e)
    t[i] = L;
  return t;
}, lt = /* @__PURE__ */ Be(rt, [["__scopeId", "data-v-498e0ac7"]]), ot = {
  class: "settings-section",
  "data-section": "Data settings"
}, at = { class: "settings-container" }, it = {
  class: "settings-section",
  "data-section": "Farben"
}, nt = { class: "settings-container" }, ut = { class: "settings-block" }, dt = { class: "settings-block" }, ct = { class: "settings-block" }, ht = {
  class: "settings-section",
  "data-section": "Dimensionen"
}, Et = { class: "settings-container" }, _t = { class: "settings-block" }, gt = {
  class: "settings-section",
  "data-section": "Text"
}, Ct = { class: "settings-container" }, Lt = { class: "settings-block" }, Ot = {
  class: "settings-section",
  "data-section": "Zeilen-Level Styles"
}, Tt = { class: "settings-container" }, pt = { class: "level-header" }, ft = { class: "level-card-header" }, Nt = {
  key: 0,
  class: "empty-state"
}, St = {
  class: "settings-section",
  "data-section": "Spalten-Level Styles"
}, mt = { class: "settings-container" }, Rt = { class: "level-header" }, At = { class: "level-card-header" }, wt = {
  key: 0,
  class: "empty-state"
}, Dt = {
  class: "settings-section",
  "data-section": "Bedingte Formatierung"
}, vt = { class: "settings-container" }, Vt = { class: "level-header" }, It = { class: "level-card-header" }, yt = {
  key: 3,
  class: "color-scale-row"
}, Ut = {
  key: 0,
  class: "empty-state"
}, Ft = /* @__PURE__ */ ye({
  __name: "PivotTableWidgetSettings",
  props: {
    modelValue: { required: !0 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(S) {
    const e = Ue(S, "modelValue"), t = [
      { value: "left", text: "Links" },
      { value: "center", text: "Zentriert" },
      { value: "right", text: "Rechts" }
    ];
    function i(E, o) {
      typeof E?.add == "function" ? E.add(o) : Array.isArray(E) && E.push(o);
    }
    function L(E, o) {
      typeof E?.removeAt == "function" ? E.removeAt(o) : Array.isArray(E) && E.splice(o, 1);
    }
    const y = () => {
      e.value.rowLevelStyles || (e.value.rowLevelStyles = []);
      const E = e.value.rowLevelStyles.length, o = new O();
      o.level = E, i(e.value.rowLevelStyles, o);
    }, I = (E) => {
      L(e.value.rowLevelStyles, E);
    }, b = () => {
      e.value.columnLevelStyles || (e.value.columnLevelStyles = []);
      const E = e.value.columnLevelStyles.length, o = new O();
      o.level = E, i(e.value.columnLevelStyles, o);
    }, k = (E) => {
      L(e.value.columnLevelStyles, E);
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
      const E = e.value.conditionalFormats.length, o = new n();
      o.id = Y(), o.priority = E, i(e.value.conditionalFormats, o);
    }, K = (E) => {
      L(e.value.conditionalFormats, E);
    }, q = (E) => E === "between", M = (E) => E === "colorScale", z = (E) => E === "contains", Z = (E) => E === "topN" || E === "bottomN", T = (E) => E !== "colorScale";
    return (E, o) => (w(), W(Le, null, [
      _("section", ot, [
        _("div", at, [
          c(u(Se), {
            modelValue: e.value.showRowsProperties,
            "onUpdate:modelValue": o[0] || (o[0] = (r) => e.value.showRowsProperties = r),
            label: "Show rows properties"
          }, null, 8, ["modelValue"]),
          c(u(Se), {
            modelValue: e.value.showColumnsProperties,
            "onUpdate:modelValue": o[1] || (o[1] = (r) => e.value.showColumnsProperties = r),
            label: "Show columns properties"
          }, null, 8, ["modelValue"]),
          c(u(Se), {
            modelValue: e.value.showSingleMeasureHeader,
            "onUpdate:modelValue": o[2] || (o[2] = (r) => e.value.showSingleMeasureHeader = r),
            label: "Show single measure header"
          }, null, 8, ["modelValue"])
        ])
      ]),
      _("section", it, [
        _("div", nt, [
          _("div", ut, [
            o[13] || (o[13] = _("h3", null, "Header", -1)),
            c(u(A), {
              modelValue: e.value.headerBackgroundColor,
              "onUpdate:modelValue": o[3] || (o[3] = (r) => e.value.headerBackgroundColor = r),
              label: "Header Hintergrund"
            }, {
              default: f(({ value: r, change: g }) => [
                c(u(F), {
                  label: "Header Hintergrund",
                  "model-value": r,
                  "onUpdate:modelValue": g
                }, null, 8, ["model-value", "onUpdate:modelValue"])
              ]),
              _: 1
            }, 8, ["modelValue"]),
            c(u(A), {
              modelValue: e.value.headerTextColor,
              "onUpdate:modelValue": o[4] || (o[4] = (r) => e.value.headerTextColor = r),
              label: "Header Textfarbe"
            }, {
              default: f(({ value: r, change: g }) => [
                c(u(F), {
                  label: "Header Textfarbe",
                  "model-value": r,
                  "onUpdate:modelValue": g
                }, null, 8, ["model-value", "onUpdate:modelValue"])
              ]),
              _: 1
            }, 8, ["modelValue"])
          ]),
          _("div", dt, [
            o[14] || (o[14] = _("h3", null, "Zellen", -1)),
            c(u(A), {
              modelValue: e.value.cellBackgroundColor,
              "onUpdate:modelValue": o[5] || (o[5] = (r) => e.value.cellBackgroundColor = r),
              label: "Zellen Hintergrund"
            }, {
              default: f(({ value: r, change: g }) => [
                c(u(F), {
                  label: "Zellen Hintergrund",
                  "model-value": r,
                  "onUpdate:modelValue": g
                }, null, 8, ["model-value", "onUpdate:modelValue"])
              ]),
              _: 1
            }, 8, ["modelValue"]),
            c(u(A), {
              modelValue: e.value.cellTextColor,
              "onUpdate:modelValue": o[6] || (o[6] = (r) => e.value.cellTextColor = r),
              label: "Zellen Textfarbe"
            }, {
              default: f(({ value: r, change: g }) => [
                c(u(F), {
                  label: "Zellen Textfarbe",
                  "model-value": r,
                  "onUpdate:modelValue": g
                }, null, 8, ["model-value", "onUpdate:modelValue"])
              ]),
              _: 1
            }, 8, ["modelValue"])
          ]),
          _("div", ct, [
            o[15] || (o[15] = _("h3", null, "Rahmen", -1)),
            c(u(A), {
              modelValue: e.value.borderColor,
              "onUpdate:modelValue": o[7] || (o[7] = (r) => e.value.borderColor = r),
              label: "Rahmenfarbe"
            }, {
              default: f(({ value: r, change: g }) => [
                c(u(F), {
                  label: "Rahmenfarbe",
                  "model-value": r,
                  "onUpdate:modelValue": g
                }, null, 8, ["model-value", "onUpdate:modelValue"])
              ]),
              _: 1
            }, 8, ["modelValue"])
          ])
        ])
      ]),
      _("section", ht, [
        _("div", Et, [
          _("div", _t, [
            c(u(A), {
              modelValue: e.value.defaultColumnWidth,
              "onUpdate:modelValue": o[8] || (o[8] = (r) => e.value.defaultColumnWidth = r),
              label: "Standard Spaltenbreite (px)"
            }, {
              default: f(({ value: r, change: g }) => [
                c(u(B), {
                  label: "Standard Spaltenbreite (px)",
                  "model-value": r,
                  "onUpdate:modelValue": g,
                  type: "number",
                  min: 50,
                  max: 500
                }, null, 8, ["model-value", "onUpdate:modelValue"])
              ]),
              _: 1
            }, 8, ["modelValue"]),
            c(u(A), {
              modelValue: e.value.defaultRowHeight,
              "onUpdate:modelValue": o[9] || (o[9] = (r) => e.value.defaultRowHeight = r),
              label: "Standard Zeilenhöhe (px)"
            }, {
              default: f(({ value: r, change: g }) => [
                c(u(B), {
                  label: "Standard Zeilenhöhe (px)",
                  "model-value": r,
                  "onUpdate:modelValue": g,
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
      _("section", gt, [
        _("div", Ct, [
          _("div", Lt, [
            c(u(A), {
              modelValue: e.value.fontSize,
              "onUpdate:modelValue": o[10] || (o[10] = (r) => e.value.fontSize = r),
              label: "Schriftgröße (px)"
            }, {
              default: f(({ value: r, change: g }) => [
                c(u(B), {
                  label: "Schriftgröße (px)",
                  "model-value": r,
                  "onUpdate:modelValue": g,
                  type: "number",
                  min: 8,
                  max: 32
                }, null, 8, ["model-value", "onUpdate:modelValue"])
              ]),
              _: 1
            }, 8, ["modelValue"]),
            c(u(A), {
              modelValue: e.value.headerFontWeight,
              "onUpdate:modelValue": o[11] || (o[11] = (r) => e.value.headerFontWeight = r),
              label: "Header Font-Weight"
            }, {
              default: f(({ value: r, change: g }) => [
                c(u(B), {
                  label: "Header Font-Weight",
                  "model-value": r,
                  "onUpdate:modelValue": g,
                  type: "number",
                  min: 100,
                  max: 900,
                  step: 100
                }, null, 8, ["model-value", "onUpdate:modelValue"])
              ]),
              _: 1
            }, 8, ["modelValue"]),
            c(u(Ve), {
              label: "Text-Ausrichtung (Zellen)",
              modelValue: e.value.cellTextAlign,
              "onUpdate:modelValue": o[12] || (o[12] = (r) => e.value.cellTextAlign = r),
              options: t,
              "value-key": "value"
            }, null, 8, ["modelValue"])
          ])
        ])
      ]),
      _("section", Ot, [
        _("div", Tt, [
          o[19] || (o[19] = _("p", { class: "hint-text" }, " Definiere individuelle Styles für verschiedene Hierarchie-Level in den Zeilen-Headern. ", -1)),
          _("div", pt, [
            o[17] || (o[17] = _("span", null, "Level-Konfiguration", -1)),
            c(u(de), {
              size: "sm",
              onClick: y
            }, {
              default: f(() => [...o[16] || (o[16] = [
                ne("Level hinzufügen", -1)
              ])]),
              _: 1
            })
          ]),
          (w(!0), W(Le, null, fe(e.value.rowLevelStyles, (r, g) => (w(), W("div", {
            key: `row_level_${g}`,
            class: "level-card"
          }, [
            _("div", ft, [
              _("strong", null, "Level " + Ne(r.level), 1),
              c(u(de), {
                size: "sm",
                intent: "danger",
                onClick: (a) => I(g)
              }, {
                default: f(() => [...o[18] || (o[18] = [
                  ne("Entfernen", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])
            ]),
            c(u(B), {
              label: "Level-Nummer",
              modelValue: r.level,
              "onUpdate:modelValue": (a) => r.level = a,
              modelModifiers: { number: !0 },
              type: "number",
              min: 0
            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
            c(u(A), {
              modelValue: r.backgroundColor,
              "onUpdate:modelValue": (a) => r.backgroundColor = a,
              label: "Hintergrundfarbe"
            }, {
              default: f(({ value: a, change: p }) => [
                c(u(F), {
                  label: "Hintergrundfarbe",
                  "model-value": a,
                  "onUpdate:modelValue": p
                }, null, 8, ["model-value", "onUpdate:modelValue"])
              ]),
              _: 1
            }, 8, ["modelValue", "onUpdate:modelValue"]),
            c(u(A), {
              modelValue: r.textColor,
              "onUpdate:modelValue": (a) => r.textColor = a,
              label: "Textfarbe"
            }, {
              default: f(({ value: a, change: p }) => [
                c(u(F), {
                  label: "Textfarbe",
                  "model-value": a,
                  "onUpdate:modelValue": p
                }, null, 8, ["model-value", "onUpdate:modelValue"])
              ]),
              _: 1
            }, 8, ["modelValue", "onUpdate:modelValue"]),
            c(u(B), {
              label: "Font-Weight",
              modelValue: r.fontWeight,
              "onUpdate:modelValue": (a) => r.fontWeight = a,
              modelModifiers: { number: !0 },
              type: "number",
              min: 100,
              max: 900,
              step: 100
            }, null, 8, ["modelValue", "onUpdate:modelValue"])
          ]))), 128)),
          e.value.rowLevelStyles?.length ? Q("", !0) : (w(), W("div", Nt, ' Keine Level-Styles definiert. Klicke "Level hinzufügen" um anzufangen. '))
        ])
      ]),
      _("section", St, [
        _("div", mt, [
          o[23] || (o[23] = _("p", { class: "hint-text" }, " Definiere individuelle Styles für verschiedene Hierarchie-Level in den Spalten-Headern. ", -1)),
          _("div", Rt, [
            o[21] || (o[21] = _("span", null, "Level-Konfiguration", -1)),
            c(u(de), {
              size: "sm",
              onClick: b
            }, {
              default: f(() => [...o[20] || (o[20] = [
                ne("Level hinzufügen", -1)
              ])]),
              _: 1
            })
          ]),
          (w(!0), W(Le, null, fe(e.value.columnLevelStyles, (r, g) => (w(), W("div", {
            key: `col_level_${g}`,
            class: "level-card"
          }, [
            _("div", At, [
              _("strong", null, "Level " + Ne(r.level), 1),
              c(u(de), {
                size: "sm",
                intent: "danger",
                onClick: (a) => k(g)
              }, {
                default: f(() => [...o[22] || (o[22] = [
                  ne("Entfernen", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])
            ]),
            c(u(B), {
              label: "Level-Nummer",
              modelValue: r.level,
              "onUpdate:modelValue": (a) => r.level = a,
              modelModifiers: { number: !0 },
              type: "number",
              min: 0
            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
            c(u(A), {
              modelValue: r.backgroundColor,
              "onUpdate:modelValue": (a) => r.backgroundColor = a,
              label: "Hintergrundfarbe"
            }, {
              default: f(({ value: a, change: p }) => [
                c(u(F), {
                  label: "Hintergrundfarbe",
                  "model-value": a,
                  "onUpdate:modelValue": p
                }, null, 8, ["model-value", "onUpdate:modelValue"])
              ]),
              _: 1
            }, 8, ["modelValue", "onUpdate:modelValue"]),
            c(u(A), {
              modelValue: r.textColor,
              "onUpdate:modelValue": (a) => r.textColor = a,
              label: "Textfarbe"
            }, {
              default: f(({ value: a, change: p }) => [
                c(u(F), {
                  label: "Textfarbe",
                  "model-value": a,
                  "onUpdate:modelValue": p
                }, null, 8, ["model-value", "onUpdate:modelValue"])
              ]),
              _: 1
            }, 8, ["modelValue", "onUpdate:modelValue"]),
            c(u(B), {
              label: "Font-Weight",
              modelValue: r.fontWeight,
              "onUpdate:modelValue": (a) => r.fontWeight = a,
              modelModifiers: { number: !0 },
              type: "number",
              min: 100,
              max: 900,
              step: 100
            }, null, 8, ["modelValue", "onUpdate:modelValue"])
          ]))), 128)),
          e.value.columnLevelStyles?.length ? Q("", !0) : (w(), W("div", wt, ' Keine Level-Styles definiert. Klicke "Level hinzufügen" um anzufangen. '))
        ])
      ]),
      _("section", Dt, [
        _("div", vt, [
          o[27] || (o[27] = _("p", { class: "hint-text" }, " Definiere Regeln zur automatischen Formatierung von Zellen basierend auf ihren Werten. ", -1)),
          _("div", Vt, [
            o[25] || (o[25] = _("span", null, "Formatierungsregeln", -1)),
            c(u(de), {
              size: "sm",
              onClick: X
            }, {
              default: f(() => [...o[24] || (o[24] = [
                ne("Regel hinzufügen", -1)
              ])]),
              _: 1
            })
          ]),
          (w(!0), W(Le, null, fe(e.value.conditionalFormats, (r, g) => (w(), W("div", {
            key: r.id,
            class: "level-card"
          }, [
            _("div", It, [
              _("strong", null, "Regel " + Ne(g + 1), 1),
              c(u(de), {
                size: "sm",
                intent: "danger",
                onClick: (a) => K(g)
              }, {
                default: f(() => [...o[26] || (o[26] = [
                  ne("Entfernen", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])
            ]),
            c(u(Ve), {
              label: "Bedingungstyp",
              modelValue: r.conditionType,
              "onUpdate:modelValue": (a) => r.conditionType = a,
              options: G,
              "value-key": "value"
            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
            !z(r.conditionType) && !M(r.conditionType) ? (w(), Oe(u(B), {
              key: 0,
              label: Z(r.conditionType) ? "Anzahl (N)" : "Wert",
              modelValue: r.value1,
              "onUpdate:modelValue": (a) => r.value1 = a,
              modelModifiers: { number: !0 },
              type: "number"
            }, null, 8, ["label", "modelValue", "onUpdate:modelValue"])) : Q("", !0),
            q(r.conditionType) ? (w(), Oe(u(B), {
              key: 1,
              label: "Bis Wert",
              modelValue: r.value2,
              "onUpdate:modelValue": (a) => r.value2 = a,
              modelModifiers: { number: !0 },
              type: "number"
            }, null, 8, ["modelValue", "onUpdate:modelValue"])) : Q("", !0),
            z(r.conditionType) ? (w(), Oe(u(B), {
              key: 2,
              label: "Text",
              modelValue: r.value1,
              "onUpdate:modelValue": (a) => r.value1 = a
            }, null, 8, ["modelValue", "onUpdate:modelValue"])) : Q("", !0),
            M(r.conditionType) ? (w(), W("div", yt, [
              c(u(A), {
                modelValue: r.minColor,
                "onUpdate:modelValue": (a) => r.minColor = a,
                label: "Min-Farbe"
              }, {
                default: f(({ value: a, change: p }) => [
                  c(u(F), {
                    label: "Min-Farbe",
                    "model-value": a,
                    "onUpdate:modelValue": p
                  }, null, 8, ["model-value", "onUpdate:modelValue"])
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"]),
              c(u(A), {
                modelValue: r.maxColor,
                "onUpdate:modelValue": (a) => r.maxColor = a,
                label: "Max-Farbe"
              }, {
                default: f(({ value: a, change: p }) => [
                  c(u(F), {
                    label: "Max-Farbe",
                    "model-value": a,
                    "onUpdate:modelValue": p
                  }, null, 8, ["model-value", "onUpdate:modelValue"])
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"])
            ])) : Q("", !0),
            T(r.conditionType) ? (w(), W(Le, { key: 4 }, [
              c(u(A), {
                modelValue: r.backgroundColor,
                "onUpdate:modelValue": (a) => r.backgroundColor = a,
                label: "Hintergrundfarbe"
              }, {
                default: f(({ value: a, change: p }) => [
                  c(u(F), {
                    label: "Hintergrundfarbe",
                    "model-value": a,
                    "onUpdate:modelValue": p
                  }, null, 8, ["model-value", "onUpdate:modelValue"])
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"]),
              c(u(A), {
                modelValue: r.textColor,
                "onUpdate:modelValue": (a) => r.textColor = a,
                label: "Textfarbe"
              }, {
                default: f(({ value: a, change: p }) => [
                  c(u(F), {
                    label: "Textfarbe",
                    "model-value": a,
                    "onUpdate:modelValue": p
                  }, null, 8, ["model-value", "onUpdate:modelValue"])
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"]),
              c(u(B), {
                label: "Font-Weight",
                modelValue: r.fontWeight,
                "onUpdate:modelValue": (a) => r.fontWeight = a,
                modelModifiers: { number: !0 },
                type: "number",
                min: 100,
                max: 900,
                step: 100
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ], 64)) : Q("", !0),
            c(u(B), {
              label: "Priorität (niedriger = höher)",
              modelValue: r.priority,
              "onUpdate:modelValue": (a) => r.priority = a,
              modelModifiers: { number: !0 },
              type: "number",
              min: 0
            }, null, 8, ["modelValue", "onUpdate:modelValue"])
          ]))), 128)),
          e.value.conditionalFormats?.length ? Q("", !0) : (w(), W("div", Ut, ' Keine Formatierungsregeln definiert. Klicke "Regel hinzufügen" um anzufangen. '))
        ])
      ])
    ], 64));
  }
}), Bt = /* @__PURE__ */ Be(Ft, [["__scopeId", "data-v-8668e0f0"]]), Wt = [
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
    payloadType: Te
  },
  {
    name: "Cell Right Clicked",
    type: "cell_right_clicked",
    description: "Triggered when a cell is right-clicked in the pivot table",
    payloadType: Te
  }
];
class xt extends We {
  // Feature ID Constants (eLiterals)
  // Private fields
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return l.Literals.PIVOT_TABLE_INTERFACE;
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
    const i = this.eClass().getFeatureID(e);
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
var Ht = Object.defineProperty, Mt = Object.getOwnPropertyDescriptor, Ae = (S, e, t, i) => {
  for (var L = i > 1 ? void 0 : i ? Mt(e, t) : e, y = S.length - 1, I; y >= 0; y--)
    (I = S[y]) && (L = (i ? I(e, t, L) : I(L)) || L);
  return i && L && Ht(e, t, L), L;
}, Ie = (S, e) => (t, i) => e(t, i, S);
l.eINSTANCE;
const ce = "PivotTableWidget";
let pe = class {
  constructor(S, e) {
    this.events = S, this.actions = e;
  }
  type = ce;
  component = lt;
  settingsComponent = Bt;
  supportedDSTypes = [];
  icon = tt;
  name = "PivotTable";
  register() {
    this.events.registerWidget(ce, Wt), this.actions.registerWidgetType(ce, xt, "widget");
  }
  unregister() {
    this.events.unregisterWidget(ce), this.actions.unregisterWidgetType(ce);
  }
};
Ae([
  Me()
], pe.prototype, "register", 1);
Ae([
  be()
], pe.prototype, "unregister", 1);
pe = Ae([
  ke({
    service: [et],
    properties: { "widget.type": ce }
  }),
  Ie(0, we(xe)),
  Ie(1, we(He))
], pe);
export {
  lt as PivotTableWidget,
  pe as PivotTableWidgetProvider,
  Bt as PivotTableWidgetSettings
};
