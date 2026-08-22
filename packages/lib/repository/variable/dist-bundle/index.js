const { EVENT_ACTIONS_REGISTRY_ID } = __tsm__.require("org.eclipse.daanse.board.app.lib.events");
const { serviceId, TINY_EMITTER } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
const { loggerFactory } = __tsm__.require("org.eclipse.daanse.board.app.lib.logger");
class VariableRepository {
  constructor(resolver, tinyEmitter) {
    this.resolver = resolver;
    this.tinyEmitter = tinyEmitter;
  }
  availableVariables = /* @__PURE__ */ new Map();
  availableVariablesByScope = /* @__PURE__ */ new Map();
  // scope -> name -> variable
  availableVariablesTypes = /* @__PURE__ */ new Map();
  /**
   * Resolves one of the identifiers a registered variable type carries.
   * All of them are created with Symbol.for, so the description IS the id.
   */
  resolveIdentifier(identifier2) {
    return this.resolver.getRequired(identifier2.description);
  }
  registerVariableType(type, identifiers) {
    if (this.availableVariablesTypes.has(type)) {
      throw Error("Multiple registration of the same variable type");
    }
    this.availableVariablesTypes.set(type, identifiers);
  }
  /**
   * Nimmt die Registrierung eines Variablentyps zurück.
   *
   * Gegenstück zu registerVariableType, damit ein Modul seine Registrierung
   * in deactivate() wieder aufheben kann. Betrifft nur den Typ; angelegte
   * Variablen werden über removeVariable entfernt.
   *
   * @returns ob der Typ registriert war
   */
  unregisterVariableType(type) {
    return this.availableVariablesTypes.delete(type);
  }
  getRegisteredVariableTypes() {
    return Array.from(this.availableVariablesTypes.keys());
  }
  getVariableIdentifiers(type) {
    return this.availableVariablesTypes.get(type);
  }
  registerVariable(name, type, config) {
    const identifiers = this.availableVariablesTypes.get(type);
    if (identifiers) {
      const variableFactory = this.resolveIdentifier(identifiers.Variable);
      const variable = variableFactory(name, config);
      const scope = config.scope || "global";
      const scopeKey = config.pageId && scope === "page" ? `${scope}-${config.pageId}` : scope;
      if (!this.availableVariablesByScope.has(scopeKey)) {
        this.availableVariablesByScope.set(scopeKey, /* @__PURE__ */ new Map());
      }
      this.availableVariablesByScope.get(scopeKey).set(name, variable);
      if (!config.scope || config.scope === "global") {
        this.availableVariables.set(name, variable);
      }
    }
  }
  getVariable(name) {
    for (const [scopeKey, scopeMap] of this.availableVariablesByScope.entries()) {
      if (scopeMap.has(name)) {
        return scopeMap.get(name);
      }
    }
    if (this.availableVariables.has(name)) {
      return this.availableVariables.get(name);
    }
    return void 0;
  }
  getVariableWithContext(name, pageId) {
    if (pageId) {
      const pageScopeKey = `page-${pageId}`;
      const pageScope = this.availableVariablesByScope.get(pageScopeKey);
      if (pageScope && pageScope.has(name)) {
        return pageScope.get(name);
      }
    }
    const globalScope = this.availableVariablesByScope.get("global");
    if (globalScope && globalScope.has(name)) {
      return globalScope.get(name);
    }
    return this.availableVariables.get(name);
  }
  getVariableById(id) {
    for (const scopeMap of this.availableVariablesByScope.values()) {
      for (const variable of scopeMap.values()) {
        if (variable.id === id) {
          return variable;
        }
      }
    }
    for (const variable of this.availableVariables.values()) {
      if (variable.id === id) {
        return variable;
      }
    }
    return void 0;
  }
  removeVariable(nameOrId) {
    let variableToRemove = this.getVariableById(nameOrId);
    let nameToRemove = nameOrId;
    if (variableToRemove) {
      nameToRemove = variableToRemove.name;
      const scope = variableToRemove.scope || "global";
      const scopeKey = variableToRemove.pageId && scope === "page" ? `page-${variableToRemove.pageId}` : scope;
      const scopeMap = this.availableVariablesByScope.get(scopeKey);
      if (scopeMap) {
        scopeMap.delete(nameToRemove);
      }
    }
    if (this.availableVariables.has(nameToRemove)) {
      this.availableVariables.delete(nameToRemove);
    }
  }
  getAllVariables() {
    const allVariables = /* @__PURE__ */ new Map();
    for (const [scopeKey, scopeMap] of this.availableVariablesByScope.entries()) {
      for (const [name, variable] of scopeMap) {
        allVariables.set(variable.id, [variable.name, variable]);
      }
    }
    for (const [name, variable] of this.availableVariables) {
      if (variable.id && !allVariables.has(variable.id)) {
        allVariables.set(variable.id, [name, variable]);
      }
    }
    return Array.from(allVariables.values());
  }
  renameVariable(newname, oldname) {
    let avar = null;
    let foundScopeKey = null;
    for (const [scopeKey, scopeMap] of this.availableVariablesByScope.entries()) {
      if (scopeMap.has(oldname)) {
        avar = scopeMap.get(oldname);
        foundScopeKey = scopeKey;
        break;
      }
    }
    if (!avar) {
      avar = this.availableVariables.get(oldname);
      if (avar) {
        foundScopeKey = "old-system";
      }
    }
    if (avar && foundScopeKey) {
      if (foundScopeKey !== "old-system") {
        const scopeMap = this.availableVariablesByScope.get(foundScopeKey);
        if (scopeMap) {
          scopeMap.set(newname, avar);
          scopeMap.delete(oldname);
        }
      }
      if (this.availableVariables.has(oldname)) {
        this.availableVariables.set(newname, avar);
        this.availableVariables.delete(oldname);
      }
    }
  }
  renameVariableById(id, newname) {
    let avar = null;
    let foundScopeKey = null;
    let oldname = null;
    for (const [scopeKey, scopeMap] of this.availableVariablesByScope.entries()) {
      for (const [name, variable] of scopeMap) {
        if (variable.id === id) {
          avar = variable;
          foundScopeKey = scopeKey;
          oldname = name;
          break;
        }
      }
      if (avar) break;
    }
    if (!avar) {
      for (const [name, variable] of this.availableVariables) {
        if (variable.id === id) {
          avar = variable;
          foundScopeKey = "old-system";
          oldname = name;
          break;
        }
      }
    }
    if (avar && foundScopeKey && oldname) {
      if (foundScopeKey !== "old-system") {
        const scopeMap = this.availableVariablesByScope.get(foundScopeKey);
        if (scopeMap) {
          scopeMap.set(newname, avar);
          scopeMap.delete(oldname);
        }
      }
      if (this.availableVariables.has(oldname)) {
        this.availableVariables.set(newname, avar);
        this.availableVariables.delete(oldname);
      }
    }
  }
  getVariablesByScope(scope, pageId) {
    const allVars = Array.from(this.availableVariables);
    return allVars.filter(([name, variable]) => {
      if (scope === "global") {
        return variable.scope === "global";
      } else {
        return variable.scope === "page" && variable.pageId === pageId;
      }
    });
  }
  getVariableWithPageContext(pageId, name) {
    const pageVar = this.getVariablesByScope("page", pageId).find(([varName]) => varName === name);
    if (pageVar) {
      return pageVar[1];
    }
    return this.getVariable(name);
  }
  /**
   * Sets or updates a global variable (Action method)
   */
  setGlobalVariable(variableName, value) {
    const existingVar = this.getVariable(variableName);
    if (existingVar) {
      existingVar.value = value;
    } else {
      this.registerVariable(variableName, "constant", {
        value,
        scope: "global"
      });
    }
  }
  /**
   * Sets or updates a page-scoped variable (Action method)
   */
  setPageVariable(variableName, value, pageId) {
    const existingVar = this.getVariableWithContext(variableName, pageId);
    if (existingVar && typeof existingVar.set === "function") {
      existingVar.set(value);
    } else if (existingVar) {
      existingVar.value = value;
    } else {
      this.registerVariable(variableName, "constant", {
        value,
        scope: "page",
        pageId
      });
    }
  }
}
const VariableActionsModelContent = '<?xml version="1.0" encoding="UTF-8"?>\n<!--\n  Copyright (c) 2025 Contributors to the Eclipse Foundation.\n\n  This program and the accompanying materials are made\n  available under the terms of the Eclipse Public License 2.0\n  which is available at https://www.eclipse.org/legal/epl-2.0/\n\n  SPDX-License-Identifier: EPL-2.0\n\n  Contributors:\n    Smart City Jena\n-->\n<ecore:EPackage xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xmlns:ecore="http://www.eclipse.org/emf/2002/Ecore" name="variableactions" nsURI="http://org.eclipse.daanse.board.app.lib.repository.variable.actions"\n    nsPrefix="variableactions">\n\n  <!-- Reference to Events package -->\n  <eClassifiers xsi:type="ecore:EClass" name="SystemVariableActions" interface="true" eSuperTypes="http://org.eclipse.daanse.board.app.lib.events#//SystemActionInterface">\n    <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">\n      <details key="documentation" value="System-level variable actions"/>\n    </eAnnotations>\n\n    <eOperations name="setGlobalVariable">\n      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">\n        <details key="documentation" value="Set or update a global variable"/>\n      </eAnnotations>\n      <eAnnotations source="org.eclipse.daanse.board.app.lib.events/WidgetAction">\n        <details key="eventType" value="system.setGlobalVariable"/>\n      </eAnnotations>\n      <eParameters name="variableName" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">\n        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">\n          <details key="documentation" value="Name of the variable to set"/>\n        </eAnnotations>\n      </eParameters>\n      <eParameters name="value" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EJavaObject">\n        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">\n          <details key="documentation" value="Value to set"/>\n        </eAnnotations>\n      </eParameters>\n    </eOperations>\n  </eClassifiers>\n\n  <eClassifiers xsi:type="ecore:EClass" name="PageVariableActions" interface="true" eSuperTypes="http://org.eclipse.daanse.board.app.lib.events#//PageActionInterface">\n    <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">\n      <details key="documentation" value="Page-level variable actions"/>\n    </eAnnotations>\n\n    <eOperations name="setPageVariable">\n      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">\n        <details key="documentation" value="Set or update a page-scoped variable"/>\n      </eAnnotations>\n      <eAnnotations source="org.eclipse.daanse.board.app.lib.events/WidgetAction">\n        <details key="eventType" value="page.setPageVariable"/>\n      </eAnnotations>\n      <eParameters name="variableName" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">\n        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">\n          <details key="documentation" value="Name of the variable to set"/>\n        </eAnnotations>\n      </eParameters>\n      <eParameters name="value" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EJavaObject">\n        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">\n          <details key="documentation" value="Value to set"/>\n        </eAnnotations>\n      </eParameters>\n      <eParameters name="pageId" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString" lowerBound="0">\n        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">\n          <details key="documentation" value="Optional page ID (defaults to current page)"/>\n        </eAnnotations>\n      </eParameters>\n    </eOperations>\n  </eClassifiers>\n</ecore:EPackage>';
const log = loggerFactory.createLogger("daanse:variable:actions");
function registerVariableActions(actionsRegistry, variableRepository) {
  actionsRegistry.registerActionsFromEcoreString(
    "SystemVariableActions",
    VariableActionsModelContent,
    "system",
    "VariableActions.ecore"
  );
  actionsRegistry.registerActionsFromEcoreString(
    "PageVariableActions",
    VariableActionsModelContent,
    "page",
    "VariableActions.ecore"
  );
  actionsRegistry.registerInstance("VariableRepository", variableRepository);
  log("Variable actions registered");
}
const VARIABLE_REPOSITORY = serviceId("VariableRepository");
const identifier = Symbol.for(VARIABLE_REPOSITORY);
function activate$1({ services }) {
  const repository = new VariableRepository(
    services,
    services.get(TINY_EMITTER)
  );
  services.register(VARIABLE_REPOSITORY, repository);
  registerVariableActions(
    services.getRequired(EVENT_ACTIONS_REGISTRY_ID),
    repository
  );
}
function deactivate$1({ services }) {
  services.unregister(VARIABLE_REPOSITORY);
}
const library = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  VARIABLE_REPOSITORY,
  VariableRepository,
  activate: activate$1,
  deactivate: deactivate$1,
  identifier
}, Symbol.toStringTag, { value: "Module" }));
const LIBRARY_ID = "org.eclipse.daanse.board.app.lib.repository.variable";
const VERSION = "0.0.1-next.1";
async function activate(context) {
  const runtime = globalThis.__tsm__;
  if (!runtime) {
    throw new Error(`${LIBRARY_ID}: tsm runtime is not initialized`);
  }
  runtime.register(LIBRARY_ID, library, VERSION, "lib.repository.variable");
  await activate$1?.(context);
}
async function deactivate(context) {
  await deactivate$1?.(context);
}
export {
  VARIABLE_REPOSITORY,
  VariableRepository,
  activate,
  deactivate,
  identifier
};
