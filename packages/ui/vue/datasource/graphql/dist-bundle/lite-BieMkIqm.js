import { E as c, l as d } from "./toggleHighContrast-B7qgMFmR.js";
class m {
  _onDidChange = new c();
  _formattingOptions;
  _modeConfiguration;
  _diagnosticSettings;
  _completionSettings;
  _schemas = null;
  _schemasById = /* @__PURE__ */ Object.create(null);
  _languageId;
  _externalFragmentDefinitions;
  constructor({ languageId: t, schemas: i, modeConfiguration: e, formattingOptions: s, diagnosticSettings: a, completionSettings: g }) {
    this._languageId = t, i && this.setSchemaConfig(i), this._modeConfiguration = e, this._completionSettings = g, this._diagnosticSettings = a, this._formattingOptions = s;
  }
  get onDidChange() {
    return this._onDidChange.event;
  }
  get languageId() {
    return this._languageId;
  }
  get modeConfiguration() {
    return this._modeConfiguration;
  }
  get schemas() {
    return this._schemas;
  }
  schemasById() {
    return this._schemasById;
  }
  get formattingOptions() {
    return this._formattingOptions;
  }
  get diagnosticSettings() {
    return this._diagnosticSettings;
  }
  get completionSettings() {
    return {
      ...this._completionSettings,
      fillLeafsOnComplete: this._completionSettings.__experimental__fillLeafsOnComplete ?? this._completionSettings.fillLeafsOnComplete
    };
  }
  get externalFragmentDefinitions() {
    return this._externalFragmentDefinitions;
  }
  setSchemaConfig(t) {
    this._schemas = t, this._schemasById = t.reduce((i, e) => (i[e.uri] = e, i), /* @__PURE__ */ Object.create(null)), this._onDidChange.fire(this);
  }
  setExternalFragmentDefinitions(t) {
    this._externalFragmentDefinitions = t;
  }
  setModeConfiguration(t) {
    this._modeConfiguration = t, this._onDidChange.fire(this);
  }
  setFormattingOptions(t) {
    this._formattingOptions = t, this._onDidChange.fire(this);
  }
  setDiagnosticSettings(t) {
    this._diagnosticSettings = t, this._onDidChange.fire(this);
  }
  setCompletionSettings(t) {
    this._completionSettings = t, this._onDidChange.fire(this);
  }
}
function u(n, t) {
  if (!t)
    return new m({
      languageId: n,
      schemas: [],
      formattingOptions: r,
      modeConfiguration: l,
      diagnosticSettings: f,
      completionSettings: h
    });
  const { schemas: i, formattingOptions: e, modeConfiguration: s, diagnosticSettings: a, completionSettings: g } = t;
  return new m({
    languageId: n,
    schemas: i,
    formattingOptions: {
      ...r,
      ...e,
      prettierConfig: {
        ...r.prettierConfig,
        ...e?.prettierConfig
      }
    },
    modeConfiguration: {
      ...l,
      ...s
    },
    diagnosticSettings: {
      ...f,
      ...a
    },
    completionSettings: {
      ...h,
      ...g
    }
  });
}
const l = {
  documentFormattingEdits: !0,
  documentRangeFormattingEdits: !1,
  completionItems: !0,
  hovers: !0,
  documentSymbols: !1,
  tokens: !1,
  colors: !1,
  foldingRanges: !1,
  diagnostics: !0,
  selectionRanges: !1
}, r = {
  prettierConfig: {
    tabWidth: 2
  }
}, f = {
  jsonDiagnosticSettings: {
    schemaValidation: "error"
  }
}, h = {
  __experimental__fillLeafsOnComplete: !1
}, _ = "graphql";
let o;
function S(n) {
  return o || (o = u(_, n), d.graphql = { api: o }, p().then((t) => t.setupMode(o))), o;
}
function p() {
  return import("./graphqlMode-DKK4BE1E.js");
}
export {
  _ as LANGUAGE_ID,
  S as initializeMode
};
