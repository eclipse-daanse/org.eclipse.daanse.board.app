import { VARIABLE_REPOSITORY as o } from "org.eclipse.daanse.board.app.lib.api.variable";
import { COMPUTED_VARIABLE as c, ComputedVariableSymbol as h } from "org.eclipse.daanse.board.app.lib.variables";
import { BasicEFactory as p, BasicEPackage as d, EPackageRegistry as S, BasicEClass as I, BasicEAttribute as m, getEcorePackage as g, BasicEObject as N } from "@emfts/core";
class r extends p {
  static get eINSTANCE() {
    return this._instance || (this._instance = new r()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(s.eINSTANCE);
  }
  /**
   * Create a new ComputedVariableSettings instance
   */
  createComputedVariableSettings() {
    return new i();
  }
  /**
   * Create an instance of the given class
   */
  create(e) {
    switch (e.getName()) {
      case "ComputedVariableSettings":
        return this.createComputedVariableSettings();
      default:
        throw new Error(`Unknown class: ${e.getName()}`);
    }
  }
}
class s extends d {
  static {
    this.eNAME = "computedVariable";
  }
  static {
    this.eNS_URI = "http://org.eclipse.daanse.board.app.ui.vue.variable.computed";
  }
  static {
    this.eNS_PREFIX = "computedVariable";
  }
  static get eINSTANCE() {
    return this._instance || (this._instance = new s(), this._instance.init()), this._instance;
  }
  static {
    this.Literals = {
      COMPUTED_VARIABLE_SETTINGS: null,
      COMPUTED_VARIABLE_SETTINGS__EXPRESSION: null
    };
  }
  constructor() {
    super(), this.setName(s.eNAME), this.setNsURI(s.eNS_URI), this.setNsPrefix(s.eNS_PREFIX);
  }
  /**
   * Initialize package contents
   */
  init() {
    S.INSTANCE.set(s.eNS_URI, this), this.setEFactoryInstance(r.eINSTANCE);
    const e = new I();
    e.setName("ComputedVariableSettings"), e.setAbstract(!1), e.setInterface(!1), this.getEClassifiers().push(e), e.setEPackage(this), s.Literals.COMPUTED_VARIABLE_SETTINGS = e;
    const t = new m();
    t.setName("expression"), t.setLowerBound(0), t.setUpperBound(1), e.getEStructuralFeatures().push(t), s.Literals.COMPUTED_VARIABLE_SETTINGS__EXPRESSION = t, s.Literals.COMPUTED_VARIABLE_SETTINGS__EXPRESSION.setEType(g().getEClassifier("EString"));
  }
}
class i extends N {
  static {
    this.EXPRESSION = 0;
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return s.Literals.COMPUTED_VARIABLE_SETTINGS;
  }
  // Getters and Setters
  get expression() {
    return this._expression;
  }
  set expression(e) {
    const t = this._expression;
    this._expression = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(i.EXPRESSION),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => i.EXPRESSION,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case i.EXPRESSION:
        return this.expression;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case i.EXPRESSION:
        this.expression = t, super.eSet(e, t);
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
      case i.EXPRESSION:
        return this._expression !== void 0;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case i.EXPRESSION:
        this._expression = void 0;
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
      expression: this.expression
    };
  }
}
const u = `<?xml version="1.0" encoding="UTF-8"?>
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
    name="ComputedVariableSettingsForm">

  <targetClasses href="http://org.eclipse.daanse.board.app.ui.vue.variable.computed#//ComputedVariableSettings"/>

  <components xsi:type="uimodel:FormView" name="ComputedVariableSettingsFormView">
    <fields xsi:type="uimodel:InputWidget" name="expression"
        feature="http://org.eclipse.daanse.board.app.ui.vue.variable.computed#//ComputedVariableSettings/expression"
        label="Ausdruck"/>
  </components>
</uimodel:UIModel>
`;
s.eINSTANCE;
function l({ services: a }) {
  a.getRequired(o).registerVariableType(c, {
    Variable: h,
    /*
     * The form is a model, not a template: the fields come from the
     * Ecore beside this, so there is one description of what this type
     * needs rather than a class and a form that can drift apart.
     */
    settingsForm: {
      xmi: u,
      uri: "/computed-variable-settings.ui.xmi",
      ePackage: () => s.eINSTANCE,
      create: () => new i()
    }
  });
}
function E({ services: a }) {
  a.getRequired(o).unregisterVariableType(c);
}
const f = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ComputedVariableSettingsImpl: i,
  ComputedVariableSettingsPackage: s,
  activate: l,
  deactivate: E,
  settingsFormXmi: u
}, Symbol.toStringTag, { value: "Module" })), n = "org.eclipse.daanse.board.app.ui.vue.variable.computed", T = "0.0.1-next.1";
async function _(a) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${n}: tsm runtime is not initialized`);
  e.register(n, f, T, "ui.vue.variable.computed"), await l?.(a);
}
async function v(a) {
  await E?.(a);
}
export {
  i as ComputedVariableSettingsImpl,
  s as ComputedVariableSettingsPackage,
  _ as activate,
  v as deactivate,
  u as settingsFormXmi
};
