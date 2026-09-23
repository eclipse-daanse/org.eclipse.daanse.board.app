import { VARIABLE_REPOSITORY as E } from "org.eclipse.daanse.board.app.lib.api.variable";
import { COMPUTED_VARIABLE as h, ComputedVariableSymbol as g } from "org.eclipse.daanse.board.app.lib.variables";
import { BasicEFactory as N, BasicEPackage as f, EPackageRegistry as T, BasicEClass as _, BasicEAttribute as b, getEcorePackage as v, BasicEObject as w } from "@emfts/core";
import { component as x } from "@eclipse-daanse/tsm";
class u extends N {
  static get eINSTANCE() {
    return this._instance || (this._instance = new u()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(s.eINSTANCE);
  }
  /**
   * Create a new ComputedVariableSettings instance
   */
  createComputedVariableSettings() {
    return new r();
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
class s extends f {
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
    T.INSTANCE.set(s.eNS_URI, this), this.setEFactoryInstance(u.eINSTANCE);
    const e = new _();
    e.setName("ComputedVariableSettings"), e.setAbstract(!1), e.setInterface(!1), this.getEClassifiers().push(e), e.setEPackage(this), s.Literals.COMPUTED_VARIABLE_SETTINGS = e;
    const t = new b();
    t.setName("expression"), t.setLowerBound(0), t.setUpperBound(1), e.getEStructuralFeatures().push(t), s.Literals.COMPUTED_VARIABLE_SETTINGS__EXPRESSION = t, s.Literals.COMPUTED_VARIABLE_SETTINGS__EXPRESSION.setEType(v().getEClassifier("EString"));
  }
}
class r extends w {
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
      getFeature: () => this.eClass().getEStructuralFeature(r.EXPRESSION),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => r.EXPRESSION,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case r.EXPRESSION:
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
      case r.EXPRESSION:
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
      case r.EXPRESSION:
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
      case r.EXPRESSION:
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
    name="ComputedVariableSettingsForm">

  <targetClasses href="http://org.eclipse.daanse.board.app.ui.vue.variable.computed#//ComputedVariableSettings"/>

  <components xsi:type="uimodel:FormView" name="ComputedVariableSettingsFormView">
    <fields xsi:type="uimodel:InputWidget" name="expression"
        feature="http://org.eclipse.daanse.board.app.ui.vue.variable.computed#//ComputedVariableSettings/expression"
        label="variableComputed:FormComputed.expression"/>
  </components>
</uimodel:UIModel>
`, C = { expression: "Ausdruck" }, R = {
  FormComputed: C
}, A = { expression: "Expression" }, O = {
  FormComputed: A
};
var P = Object.getOwnPropertyDescriptor, D = (i, e, t, a) => {
  for (var n = a > 1 ? void 0 : a ? P(e, t) : e, o = i.length - 1, l; o >= 0; o--)
    (l = i[o]) && (n = l(n) || n);
  return n;
};
const d = "variableComputed";
let c = class {
  constructor() {
    this.namespace = d, this.resources = {
      de: R,
      en: O
    };
  }
};
c = D([
  x({
    service: ["Translations"],
    properties: { "i18n.namespace": d }
  })
], c);
s.eINSTANCE;
function S({ services: i }) {
  i.getRequired(E).registerVariableType(h, {
    Variable: g,
    /*
     * The form is a model, not a template: the fields come from the
     * Ecore beside this, so there is one description of what this type
     * needs rather than a class and a form that can drift apart.
     */
    settingsForm: {
      xmi: m,
      uri: "/computed-variable-settings.ui.xmi",
      ePackage: () => s.eINSTANCE,
      create: () => new r()
    }
  });
}
function I({ services: i }) {
  i.getRequired(E).unregisterVariableType(h);
}
const y = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ComputedVariableSettingsImpl: r,
  ComputedVariableSettingsPackage: s,
  get VariableComputedTranslations() {
    return c;
  },
  activate: S,
  deactivate: I,
  settingsFormXmi: m
}, Symbol.toStringTag, { value: "Module" })), p = "org.eclipse.daanse.board.app.ui.vue.variable.computed", F = "0.0.1-next.1";
async function X(i) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${p}: tsm runtime is not initialized`);
  e.register(p, y, F, "ui.vue.variable.computed"), await S?.(i);
}
async function M(i) {
  await I?.(i);
}
export {
  r as ComputedVariableSettingsImpl,
  s as ComputedVariableSettingsPackage,
  c as VariableComputedTranslations,
  X as activate,
  M as deactivate,
  m as settingsFormXmi
};
