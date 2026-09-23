import { VARIABLE_REPOSITORY as m } from "org.eclipse.daanse.board.app.lib.api.variable";
import { DATETIME_PICKER_VARIABLE as h, DateTimePickerVariableSymbol as g } from "org.eclipse.daanse.board.app.lib.variables";
import { BasicEFactory as _, BasicEPackage as A, EPackageRegistry as f, BasicEClass as N, BasicEAttribute as S, getEcorePackage as b, BasicEObject as v } from "@emfts/core";
import { component as w } from "@eclipse-daanse/tsm";
class l extends _ {
  static get eINSTANCE() {
    return this._instance || (this._instance = new l()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(i.eINSTANCE);
  }
  /**
   * Create a new DateTimePickerVariableSettings instance
   */
  createDateTimePickerVariableSettings() {
    return new a();
  }
  /**
   * Create an instance of the given class
   */
  create(e) {
    switch (e.getName()) {
      case "DateTimePickerVariableSettings":
        return this.createDateTimePickerVariableSettings();
      default:
        throw new Error(`Unknown class: ${e.getName()}`);
    }
  }
}
class i extends A {
  static {
    this.eNAME = "dateTimePickerVariable";
  }
  static {
    this.eNS_URI = "http://org.eclipse.daanse.board.app.ui.vue.variable.timepicker";
  }
  static {
    this.eNS_PREFIX = "dateTimePickerVariable";
  }
  static get eINSTANCE() {
    return this._instance || (this._instance = new i(), this._instance.init()), this._instance;
  }
  static {
    this.Literals = {
      DATE_TIME_PICKER_VARIABLE_SETTINGS: null,
      DATE_TIME_PICKER_VARIABLE_SETTINGS__DATETIME: null
    };
  }
  constructor() {
    super(), this.setName(i.eNAME), this.setNsURI(i.eNS_URI), this.setNsPrefix(i.eNS_PREFIX);
  }
  /**
   * Initialize package contents
   */
  init() {
    f.INSTANCE.set(i.eNS_URI, this), this.setEFactoryInstance(l.eINSTANCE);
    const e = new N();
    e.setName("DateTimePickerVariableSettings"), e.setAbstract(!1), e.setInterface(!1), this.getEClassifiers().push(e), e.setEPackage(this), i.Literals.DATE_TIME_PICKER_VARIABLE_SETTINGS = e;
    const t = new S();
    t.setName("datetime"), t.setLowerBound(0), t.setUpperBound(1), e.getEStructuralFeatures().push(t), i.Literals.DATE_TIME_PICKER_VARIABLE_SETTINGS__DATETIME = t, i.Literals.DATE_TIME_PICKER_VARIABLE_SETTINGS__DATETIME.setEType(b().getEClassifier("EString"));
  }
}
class a extends v {
  static {
    this.DATETIME = 0;
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return i.Literals.DATE_TIME_PICKER_VARIABLE_SETTINGS;
  }
  // Getters and Setters
  get datetime() {
    return this._datetime;
  }
  set datetime(e) {
    const t = this._datetime;
    this._datetime = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(a.DATETIME),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => a.DATETIME,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case a.DATETIME:
        return this.datetime;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case a.DATETIME:
        this.datetime = t, super.eSet(e, t);
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
      case a.DATETIME:
        return this._datetime !== void 0;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case a.DATETIME:
        this._datetime = void 0;
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
      datetime: this.datetime
    };
  }
}
const T = `<?xml version="1.0" encoding="UTF-8"?>
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
    name="DateTimePickerVariableSettingsForm">

  <targetClasses href="http://org.eclipse.daanse.board.app.ui.vue.variable.timepicker#//DateTimePickerVariableSettings"/>

  <components xsi:type="uimodel:FormView" name="DateTimePickerVariableSettingsFormView">
    <fields xsi:type="uimodel:InputWidget" name="datetime"
        feature="http://org.eclipse.daanse.board.app.ui.vue.variable.timepicker#//DateTimePickerVariableSettings/datetime"
        label="variableTimepicker:FormTimepicker.datetime"/>
  </components>
</uimodel:UIModel>
`, D = { datetime: "Zeitpunkt" }, R = {
  FormTimepicker: D
}, C = { datetime: "Point in time" }, M = {
  FormTimepicker: C
};
var y = Object.getOwnPropertyDescriptor, F = (s, e, t, n) => {
  for (var r = n > 1 ? void 0 : n ? y(e, t) : e, o = s.length - 1, u; o >= 0; o--)
    (u = s[o]) && (r = u(r) || r);
  return r;
};
const d = "variableTimepicker";
let c = class {
  constructor() {
    this.namespace = d, this.resources = {
      de: R,
      en: M
    };
  }
};
c = F([
  w({
    service: ["Translations"],
    properties: { "i18n.namespace": d }
  })
], c);
i.eINSTANCE;
function p({ services: s }) {
  s.getRequired(m).registerVariableType(h, {
    Variable: g,
    /*
     * The form is a model, not a template: the fields come from the
     * Ecore beside this, so there is one description of what this type
     * needs rather than a class and a form that can drift apart.
     */
    settingsForm: {
      xmi: T,
      uri: "/timepicker-variable-settings.ui.xmi",
      ePackage: () => i.eINSTANCE,
      create: () => new a()
    }
  });
}
function I({ services: s }) {
  s.getRequired(m).unregisterVariableType(h);
}
const P = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DateTimePickerVariableSettingsImpl: a,
  DateTimePickerVariableSettingsPackage: i,
  get VariableTimepickerTranslations() {
    return c;
  },
  activate: p,
  deactivate: I,
  settingsFormXmi: T
}, Symbol.toStringTag, { value: "Module" })), E = "org.eclipse.daanse.board.app.ui.vue.variable.timepicker", L = "0.0.1-next.1";
async function O(s) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${E}: tsm runtime is not initialized`);
  e.register(E, P, L, "ui.vue.variable.timepicker"), await p?.(s);
}
async function U(s) {
  await I?.(s);
}
export {
  a as DateTimePickerVariableSettingsImpl,
  i as DateTimePickerVariableSettingsPackage,
  c as VariableTimepickerTranslations,
  O as activate,
  U as deactivate,
  T as settingsFormXmi
};
