import { VARIABLE_REPOSITORY as E } from "org.eclipse.daanse.board.app.lib.api.variable";
import { CONSTANT_VARIABLE as p, ConstantVariableSymbol as d } from "org.eclipse.daanse.board.app.lib.variables";
import { BasicEFactory as I, BasicEPackage as A, EPackageRegistry as S, BasicEClass as T, BasicEAttribute as f, getEcorePackage as _, BasicEObject as b } from "@emfts/core";
import { component as w } from "@eclipse-daanse/tsm";
class c extends I {
  static get eINSTANCE() {
    return this._instance || (this._instance = new c()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(s.eINSTANCE);
  }
  /**
   * Create a new ConstantVariableSettings instance
   */
  createConstantVariableSettings() {
    return new i();
  }
  /**
   * Create an instance of the given class
   */
  create(e) {
    switch (e.getName()) {
      case "ConstantVariableSettings":
        return this.createConstantVariableSettings();
      default:
        throw new Error(`Unknown class: ${e.getName()}`);
    }
  }
}
class s extends A {
  static {
    this.eNAME = "constantVariable";
  }
  static {
    this.eNS_URI = "http://org.eclipse.daanse.board.app.ui.vue.variable.constant";
  }
  static {
    this.eNS_PREFIX = "constantVariable";
  }
  static get eINSTANCE() {
    return this._instance || (this._instance = new s(), this._instance.init()), this._instance;
  }
  static {
    this.Literals = {
      CONSTANT_VARIABLE_SETTINGS: null,
      CONSTANT_VARIABLE_SETTINGS__VALUE: null
    };
  }
  constructor() {
    super(), this.setName(s.eNAME), this.setNsURI(s.eNS_URI), this.setNsPrefix(s.eNS_PREFIX);
  }
  /**
   * Initialize package contents
   */
  init() {
    S.INSTANCE.set(s.eNS_URI, this), this.setEFactoryInstance(c.eINSTANCE);
    const e = new T();
    e.setName("ConstantVariableSettings"), e.setAbstract(!1), e.setInterface(!1), this.getEClassifiers().push(e), e.setEPackage(this), s.Literals.CONSTANT_VARIABLE_SETTINGS = e;
    const t = new f();
    t.setName("value"), t.setLowerBound(0), t.setUpperBound(1), e.getEStructuralFeatures().push(t), s.Literals.CONSTANT_VARIABLE_SETTINGS__VALUE = t, s.Literals.CONSTANT_VARIABLE_SETTINGS__VALUE.setEType(_().getEClassifier("EString"));
  }
}
class i extends b {
  static {
    this.VALUE = 0;
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return s.Literals.CONSTANT_VARIABLE_SETTINGS;
  }
  // Getters and Setters
  get value() {
    return this._value;
  }
  set value(e) {
    const t = this._value;
    this._value = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(i.VALUE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => i.VALUE,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case i.VALUE:
        return this.value;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case i.VALUE:
        this.value = t, super.eSet(e, t);
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
      case i.VALUE:
        return this._value !== void 0;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case i.VALUE:
        this._value = void 0;
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
      value: this.value
    };
  }
}
const m = `<?xml version="1.0" encoding="UTF-8"?>
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

The form for this variable type: the one thing it needs.

What it is called, where it applies and who may write it belong to every
variable, not to this type, and the dialog asks for them once.
-->
<uimodel:UIModel
    xmlns:xmi="http://www.omg.org/XMI"
    xmi:version="2.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:uimodel="http://uimodel/1.0"
    name="ConstantVariableSettingsForm">

  <targetClasses href="http://org.eclipse.daanse.board.app.ui.vue.variable.constant#//ConstantVariableSettings"/>

  <components xsi:type="uimodel:FormView" name="ConstantVariableSettingsFormView">
    <fields xsi:type="uimodel:InputWidget" name="value"
        feature="http://org.eclipse.daanse.board.app.ui.vue.variable.constant#//ConstantVariableSettings/value"
        label="variableConstant:FormConstant.value"/>
  </components>
</uimodel:UIModel>
`, C = { value: "Wert" }, L = {
  FormConstant: C
}, V = { value: "Value" }, y = {
  FormConstant: V
};
var F = Object.getOwnPropertyDescriptor, R = (a, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? F(e, t) : e, o = a.length - 1, u; o >= 0; o--)
    (u = a[o]) && (n = u(n) || n);
  return n;
};
const g = "variableConstant";
let l = class {
  constructor() {
    this.namespace = g, this.resources = {
      de: L,
      en: y
    };
  }
};
l = R([
  w({
    service: ["Translations"],
    properties: { "i18n.namespace": g }
  })
], l);
s.eINSTANCE;
function v({ services: a }) {
  a.getRequired(E).registerVariableType(p, {
    Variable: d,
    /*
     * The form is a model, not a template: the fields come from the
     * Ecore beside this, so there is one description of what this type
     * needs rather than a class and a form that can drift apart.
     */
    settingsForm: {
      xmi: m,
      uri: "/constant-variable-settings.ui.xmi",
      ePackage: () => s.eINSTANCE,
      create: () => new i()
    }
  });
}
function N({ services: a }) {
  a.getRequired(E).unregisterVariableType(p);
}
const U = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ConstantVariableSettingsImpl: i,
  ConstantVariableSettingsPackage: s,
  get VariableConstantTranslations() {
    return l;
  },
  activate: v,
  deactivate: N,
  settingsFormXmi: m
}, Symbol.toStringTag, { value: "Module" })), h = "org.eclipse.daanse.board.app.ui.vue.variable.constant", D = "0.0.1-next.1";
async function G(a) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${h}: tsm runtime is not initialized`);
  e.register(h, U, D, "ui.vue.variable.constant"), await v?.(a);
}
async function M(a) {
  await N?.(a);
}
export {
  i as ConstantVariableSettingsImpl,
  s as ConstantVariableSettingsPackage,
  l as VariableConstantTranslations,
  G as activate,
  M as deactivate,
  m as settingsFormXmi
};
