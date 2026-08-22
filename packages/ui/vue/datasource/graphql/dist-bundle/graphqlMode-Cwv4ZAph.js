import { e as editor, U as Uri, l as languages } from "./toggleHighContrast-Bwheb1RR.js";
import { a as getStringSchema, b as getModelLanguageId, C as CompletionItemKind } from "./index-B1rT-hwY.js";
const STOP_WHEN_IDLE_FOR = 2 * 60 * 1e3;
class WorkerManager {
  _defaults;
  _idleCheckInterval;
  _lastUsedTime = 0;
  _configChangeListener;
  _worker = null;
  _client = null;
  constructor(defaults) {
    this._defaults = defaults;
    this._idleCheckInterval = window.setInterval(() => this._checkIfIdle(), 30 * 1e3);
    this._configChangeListener = this._defaults.onDidChange(() => {
      this._stopWorker();
    });
  }
  _stopWorker() {
    if (this._worker) {
      this._worker.dispose();
      this._worker = null;
    }
    this._client = null;
  }
  dispose() {
    clearInterval(this._idleCheckInterval);
    this._configChangeListener.dispose();
    this._stopWorker();
  }
  _checkIfIdle() {
    if (!this._worker) {
      return;
    }
    const timePassedSinceLastUsed = Date.now() - this._lastUsedTime;
    if (timePassedSinceLastUsed > STOP_WHEN_IDLE_FOR) {
      this._stopWorker();
    }
  }
  async _getClient() {
    this._lastUsedTime = Date.now();
    if (!this._client && !this._worker) {
      try {
        const { languageId, formattingOptions, schemas, externalFragmentDefinitions, completionSettings } = this._defaults;
        this._worker = editor.createWebWorker({
          moduleId: "monaco-graphql/esm/GraphQLWorker.js",
          label: languageId,
          createData: {
            languageId,
            formattingOptions,
            languageConfig: {
              schemas: schemas?.map(getStringSchema),
              externalFragmentDefinitions,
              fillLeafsOnComplete: completionSettings.__experimental__fillLeafsOnComplete
            }
          }
        });
        this._client = this._worker.getProxy();
      } catch (error) {
        console.error("error loading worker", error);
      }
    }
    return this._client;
  }
  async getLanguageServiceWorker(...resources) {
    const client = await this._getClient();
    await this._worker.withSyncedResources(resources);
    return client;
  }
}
class DiagnosticsAdapter {
  defaults;
  _worker;
  _disposables = [];
  _listener = /* @__PURE__ */ Object.create(null);
  constructor(defaults, _worker) {
    this.defaults = defaults;
    this._worker = _worker;
    this._worker = _worker;
    let onChangeTimeout;
    const onModelAdd = (model) => {
      const modeId = getModelLanguageId(model);
      if (modeId !== this.defaults.languageId) {
        return;
      }
      const modelUri = model.uri.toString();
      const jsonValidationForModel = defaults.diagnosticSettings.validateVariablesJSON?.[modelUri];
      onChangeTimeout = setTimeout(() => {
        void this._doValidate(model.uri, modeId, jsonValidationForModel);
      }, 400);
      this._listener[modelUri] = model.onDidChangeContent(() => {
        clearTimeout(onChangeTimeout);
        onChangeTimeout = setTimeout(() => {
          void this._doValidate(model.uri, modeId, jsonValidationForModel);
        }, 400);
      });
    };
    const onModelRemoved = (model) => {
      editor.setModelMarkers(model, this.defaults.languageId, []);
      const uriStr = model.uri.toString();
      const listener = this._listener[uriStr];
      if (listener) {
        listener.dispose();
        delete this._listener[uriStr];
      }
    };
    this._disposables.push(editor.onDidCreateModel(onModelAdd), {
      dispose() {
        clearTimeout(onChangeTimeout);
      }
    }, editor.onWillDisposeModel((model) => {
      onModelRemoved(model);
    }), editor.onDidChangeModelLanguage((event) => {
      onModelRemoved(event.model);
      onModelAdd(event.model);
    }), {
      dispose: () => {
        for (const listener of Object.values(this._listener)) {
          listener.dispose();
        }
      }
    }, defaults.onDidChange(() => {
      for (const model of editor.getModels()) {
        if (getModelLanguageId(model) === this.defaults.languageId) {
          onModelRemoved(model);
          onModelAdd(model);
        }
      }
    }));
    for (const model of editor.getModels()) {
      if (getModelLanguageId(model) === this.defaults.languageId) {
        onModelAdd(model);
      }
    }
  }
  dispose() {
    for (const disposable of this._disposables) {
      disposable.dispose();
    }
    this._disposables = [];
  }
  async _doValidate(resource, languageId, variablesUris) {
    const worker = await this._worker(resource);
    if (!worker) {
      return;
    }
    const diagnostics = await worker.doValidation(resource.toString());
    editor.setModelMarkers(editor.getModel(resource), languageId, diagnostics);
    if (variablesUris) {
      await import("./toggleHighContrast-Bwheb1RR.js").then((n) => n.d);
      if (!variablesUris.length) {
        throw new Error("No variables URI strings provided to validate");
      }
      const jsonSchema = await worker.doGetVariablesJSONSchema(resource.toString());
      if (!jsonSchema) {
        return;
      }
      const schemaUri = Uri.file(variablesUris[0].replace(".json", "-schema.json")).toString();
      const configResult = {
        uri: schemaUri,
        schema: jsonSchema,
        fileMatch: variablesUris
      };
      const currentSchemas = languages.json.jsonDefaults.diagnosticsOptions.schemas?.filter((s) => s.uri !== schemaUri) || [];
      languages.json.jsonDefaults.setDiagnosticsOptions({
        schemaValidation: "error",
        validate: true,
        ...this.defaults.diagnosticSettings.jsonDiagnosticSettings,
        schemas: [...currentSchemas, configResult],
        enableSchemaRequest: false
      });
    }
  }
}
const mKind = languages.CompletionItemKind;
const kindMap = {
  [CompletionItemKind.Text]: mKind.Text,
  [CompletionItemKind.Method]: mKind.Method,
  [CompletionItemKind.Function]: mKind.Function,
  [CompletionItemKind.Constructor]: mKind.Constructor,
  [CompletionItemKind.Field]: mKind.Field,
  [CompletionItemKind.Variable]: mKind.Variable,
  [CompletionItemKind.Class]: mKind.Class,
  [CompletionItemKind.Interface]: mKind.Interface,
  [CompletionItemKind.Module]: mKind.Module,
  [CompletionItemKind.Property]: mKind.Property,
  [CompletionItemKind.Unit]: mKind.Unit,
  [CompletionItemKind.Value]: mKind.Value,
  [CompletionItemKind.Enum]: mKind.Enum,
  [CompletionItemKind.Keyword]: mKind.Keyword,
  [CompletionItemKind.Snippet]: mKind.Snippet,
  [CompletionItemKind.Color]: mKind.Color,
  [CompletionItemKind.File]: mKind.File,
  [CompletionItemKind.Reference]: mKind.Reference,
  [CompletionItemKind.Folder]: mKind.Folder,
  [CompletionItemKind.EnumMember]: mKind.EnumMember,
  [CompletionItemKind.Constant]: mKind.Constant,
  [CompletionItemKind.Struct]: mKind.Struct,
  [CompletionItemKind.Event]: mKind.Event,
  [CompletionItemKind.Operator]: mKind.Operator,
  [CompletionItemKind.TypeParameter]: mKind.TypeParameter
};
function toCompletionItemKind(kind) {
  return kind in kindMap ? kindMap[kind] : mKind.Text;
}
function toCompletion(entry) {
  const suggestions = {
    range: entry.range,
    kind: toCompletionItemKind(entry.kind),
    label: entry.label,
    insertText: entry.insertText ?? entry.label,
    insertTextRules: entry.insertText ? languages.CompletionItemInsertTextRule.InsertAsSnippet : void 0,
    sortText: entry.sortText,
    filterText: entry.filterText,
    documentation: entry.documentation,
    detail: entry.detail,
    command: entry.command
  };
  return suggestions;
}
class CompletionAdapter {
  _worker;
  constructor(_worker) {
    this._worker = _worker;
    this._worker = _worker;
  }
  get triggerCharacters() {
    return [":", "$", " ", "(", "@"];
  }
  async provideCompletionItems(model, position, _context, _token) {
    try {
      const worker = await this._worker(model.uri);
      const completionItems = await worker.doComplete(model.uri.toString(), position);
      return {
        incomplete: true,
        suggestions: completionItems.map(toCompletion)
      };
    } catch (err) {
      console.error("Error fetching completion items", err);
      return { suggestions: [] };
    }
  }
}
class DocumentFormattingAdapter {
  _worker;
  constructor(_worker) {
    this._worker = _worker;
    this._worker = _worker;
  }
  async provideDocumentFormattingEdits(document, _options, _token) {
    const worker = await this._worker(document.uri);
    const formatted = await worker.doFormat(document.uri.toString());
    if (!formatted) {
      return [];
    }
    return [
      {
        range: document.getFullModelRange(),
        text: formatted
      }
    ];
  }
}
class HoverAdapter {
  _worker;
  constructor(_worker) {
    this._worker = _worker;
  }
  async provideHover(model, position, _token) {
    const resource = model.uri;
    const worker = await this._worker(model.uri);
    const hoverItem = await worker.doHover(resource.toString(), position);
    if (hoverItem) {
      return {
        range: hoverItem.range,
        contents: [{ value: hoverItem.content }]
      };
    }
    return {
      contents: []
    };
  }
  dispose() {
  }
}
function setupMode(defaults) {
  const disposables = [];
  const providers = [];
  const client = new WorkerManager(defaults);
  disposables.push(client);
  const worker = (...uris) => {
    try {
      return client.getLanguageServiceWorker(...uris);
    } catch {
      throw new Error("Error fetching graphql language service worker");
    }
  };
  function registerSchemaLessProviders() {
    const { modeConfiguration: modeConfiguration2, languageId } = defaults;
    if (modeConfiguration2.documentFormattingEdits) {
      providers.push(languages.registerDocumentFormattingEditProvider(languageId, new DocumentFormattingAdapter(worker)));
    }
  }
  function registerAllProviders(api) {
    const { modeConfiguration: modeConfiguration2, languageId } = defaults;
    disposeAll(providers);
    if (modeConfiguration2.completionItems) {
      providers.push(languages.registerCompletionItemProvider(languageId, new CompletionAdapter(worker)));
    }
    if (modeConfiguration2.diagnostics) {
      providers.push(new DiagnosticsAdapter(api, worker));
    }
    if (modeConfiguration2.hovers) {
      providers.push(languages.registerHoverProvider(languageId, new HoverAdapter(worker)));
    }
    registerSchemaLessProviders();
  }
  let { modeConfiguration, formattingOptions, diagnosticSettings, externalFragmentDefinitions, schemas } = defaults;
  registerAllProviders(defaults);
  defaults.onDidChange((newDefaults) => {
    if (newDefaults.modeConfiguration !== modeConfiguration) {
      modeConfiguration = newDefaults.modeConfiguration;
      registerAllProviders(newDefaults);
    }
    if (newDefaults.formattingOptions !== formattingOptions) {
      formattingOptions = newDefaults.formattingOptions;
      registerSchemaLessProviders();
    }
    if (newDefaults.externalFragmentDefinitions !== externalFragmentDefinitions) {
      externalFragmentDefinitions = newDefaults.externalFragmentDefinitions;
      registerAllProviders(newDefaults);
    }
    if (newDefaults.diagnosticSettings !== diagnosticSettings) {
      diagnosticSettings = newDefaults.diagnosticSettings;
      registerAllProviders(newDefaults);
    }
    if (newDefaults.schemas !== schemas) {
      schemas = newDefaults.schemas;
      registerAllProviders(newDefaults);
    }
  });
  disposables.push(asDisposable(providers));
  return asDisposable(disposables);
}
function asDisposable(disposables) {
  return { dispose: () => disposeAll(disposables) };
}
function disposeAll(disposables) {
  while (disposables.length) {
    disposables.pop().dispose();
  }
}
export {
  setupMode
};
