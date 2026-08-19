import { E as Emitter, l as languages } from "./toggleHighContrast-IljKYUWO.js";
class MonacoGraphQLAPI {
  _onDidChange = new Emitter();
  _formattingOptions;
  _modeConfiguration;
  _diagnosticSettings;
  _completionSettings;
  _schemas = null;
  _schemasById = /* @__PURE__ */ Object.create(null);
  _languageId;
  _externalFragmentDefinitions;
  constructor({ languageId, schemas, modeConfiguration, formattingOptions, diagnosticSettings, completionSettings }) {
    this._languageId = languageId;
    if (schemas) {
      this.setSchemaConfig(schemas);
    }
    this._modeConfiguration = modeConfiguration;
    this._completionSettings = completionSettings;
    this._diagnosticSettings = diagnosticSettings;
    this._formattingOptions = formattingOptions;
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
  setSchemaConfig(schemas) {
    this._schemas = schemas;
    this._schemasById = schemas.reduce((result, schema) => {
      result[schema.uri] = schema;
      return result;
    }, /* @__PURE__ */ Object.create(null));
    this._onDidChange.fire(this);
  }
  setExternalFragmentDefinitions(externalFragmentDefinitions) {
    this._externalFragmentDefinitions = externalFragmentDefinitions;
  }
  setModeConfiguration(modeConfiguration) {
    this._modeConfiguration = modeConfiguration;
    this._onDidChange.fire(this);
  }
  setFormattingOptions(formattingOptions) {
    this._formattingOptions = formattingOptions;
    this._onDidChange.fire(this);
  }
  setDiagnosticSettings(diagnosticSettings) {
    this._diagnosticSettings = diagnosticSettings;
    this._onDidChange.fire(this);
  }
  setCompletionSettings(completionSettings) {
    this._completionSettings = completionSettings;
    this._onDidChange.fire(this);
  }
}
function create(languageId, config) {
  if (!config) {
    return new MonacoGraphQLAPI({
      languageId,
      schemas: [],
      formattingOptions: formattingDefaults,
      modeConfiguration: modeConfigurationDefault,
      diagnosticSettings: diagnosticSettingDefault,
      completionSettings: completionSettingDefault
    });
  }
  const { schemas, formattingOptions, modeConfiguration, diagnosticSettings, completionSettings } = config;
  return new MonacoGraphQLAPI({
    languageId,
    schemas,
    formattingOptions: {
      ...formattingDefaults,
      ...formattingOptions,
      prettierConfig: {
        ...formattingDefaults.prettierConfig,
        ...formattingOptions?.prettierConfig
      }
    },
    modeConfiguration: {
      ...modeConfigurationDefault,
      ...modeConfiguration
    },
    diagnosticSettings: {
      ...diagnosticSettingDefault,
      ...diagnosticSettings
    },
    completionSettings: {
      ...completionSettingDefault,
      ...completionSettings
    }
  });
}
const modeConfigurationDefault = {
  documentFormattingEdits: true,
  documentRangeFormattingEdits: false,
  completionItems: true,
  hovers: true,
  documentSymbols: false,
  tokens: false,
  colors: false,
  foldingRanges: false,
  diagnostics: true,
  selectionRanges: false
};
const formattingDefaults = {
  prettierConfig: {
    tabWidth: 2
  }
};
const diagnosticSettingDefault = {
  jsonDiagnosticSettings: {
    schemaValidation: "error"
  }
};
const completionSettingDefault = {
  __experimental__fillLeafsOnComplete: false
};
const LANGUAGE_ID = "graphql";
let api;
function initializeMode(config) {
  if (!api) {
    api = create(LANGUAGE_ID, config);
    languages.graphql = { api };
    void getMode().then((mode) => mode.setupMode(api));
  }
  return api;
}
function getMode() {
  return import("./graphqlMode-DfYPXT3x.js");
}
export {
  LANGUAGE_ID,
  initializeMode
};
