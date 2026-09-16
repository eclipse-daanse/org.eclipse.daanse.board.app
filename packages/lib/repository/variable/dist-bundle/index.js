import { EVENT_ACTIONS_REGISTRY_ID } from "org.eclipse.daanse.board.app.lib.events";
import { WORKSPACE, VariableImpl } from "org.eclipse.daanse.board.app.lib.model.workspace";
import { loggerFactory } from "org.eclipse.daanse.board.app.lib.logger";
import { VARIABLE_REPOSITORY, identifier } from "org.eclipse.daanse.board.app.lib.api.variable";
import { VARIABLE_REPOSITORY as VARIABLE_REPOSITORY2, identifier as identifier2 } from "org.eclipse.daanse.board.app.lib.api.variable";
class VariableRepository {
  /*
   * No event bus. A change to the list is announced by the model itself,
   * the way every other modelled change is; the bus carries value changes,
   * which a variable emits on its own and which this never saw.
   */
  constructor(resolver) {
    this.resolver = resolver;
  }
  /** The running objects, by the uid of the modelled variable they were built from. */
  live = /* @__PURE__ */ new Map();
  availableVariablesTypes = /* @__PURE__ */ new Map();
  /*
   * Resolved on first use, not in the constructor: this repository is
   * created while its own module activates, and the workspace may not be
   * registered yet at that point.
   */
  workspaceHeld;
  get workspace() {
    if (!this.workspaceHeld) {
      this.workspaceHeld = this.resolver.getRequired(WORKSPACE);
    }
    return this.workspaceHeld;
  }
  /**
   * Resolves one of the identifiers a registered variable type carries.
   * All of them are created with Symbol.for, so the description IS the id.
   */
  resolveIdentifier(identifier3) {
    return this.resolver.getRequired(identifier3.description);
  }
  // ------------------------------------------------------------ the types
  registerVariableType(type, identifiers) {
    if (this.availableVariablesTypes.has(type)) {
      throw Error("Multiple registration of the same variable type");
    }
    this.availableVariablesTypes.set(type, identifiers);
  }
  /**
   * Takes a variable type's registration back.
   *
   * The counterpart to registerVariableType, so a module can undo its
   * registration in deactivate(). Concerns the type only; variables that
   * were created are removed through removeVariable.
   *
   * @returns whether the type was registered
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
  // -------------------------------------------------------- the model side
  /** What the workspace holds, in order. */
  getVariableModels() {
    return this.workspace.variables.toArray();
  }
  getVariableModel(uid) {
    return this.getVariableModels().find((variable) => variable.uid === uid);
  }
  /** The board a page-scoped variable names, if the workspace still holds it. */
  pageById(pageId) {
    if (!pageId) return void 0;
    return this.workspace.board?.pages.toArray().find((page) => page.id === pageId);
  }
  /**
   * Builds the running object for one modelled variable.
   *
   * The uid, name and scope are put back into the configuration because
   * that is what a variable's own init() reads - the one place that
   * happens, rather than at each caller.
   */
  build(held) {
    const identifiers = this.availableVariablesTypes.get(held.type);
    if (!identifiers) return;
    const config = { ...held.definition ?? {} };
    config["uid"] = held.uid;
    config["scope"] = held.scope ?? "global";
    config["accessMode"] = held.accessMode ?? "external-writable";
    config["pageId"] = held.page?.id;
    const factory = this.resolveIdentifier(
      identifiers.Variable
    );
    const variable = factory(held.name, config);
    variable.id = held.uid;
    this.live.set(held.uid, variable);
  }
  /**
   * Builds a live object for every variable the workspace holds.
   *
   * What a loaded workspace needs: the model came out of a file, the things
   * that hold a value and tick did not.
   */
  rebuildLive() {
    this.live.clear();
    for (const held of this.getVariableModels()) this.build(held);
  }
  // ---------------------------------------------------------- the variables
  registerVariable(name, type, config) {
    const uid = config.uid ?? config.id ?? Math.random().toString(36).substring(7);
    const held = this.getVariableModel(uid) ?? new VariableImpl();
    held.uid = uid;
    held.name = name;
    held.type = type;
    held.scope = config.scope ?? "global";
    held.accessMode = config.accessMode ?? "external-writable";
    held.page = this.pageById(config.pageId);
    const { uid: _uid, id: _id, scope: _scope, accessMode: _mode, pageId: _page, ...rest } = config;
    held.definition = rest;
    if (!this.getVariableModel(uid)) this.workspace.variables.push(held);
    this.build(held);
  }
  /**
   * Writes a changed variable back and builds it again.
   *
   * Changing the type means a different live object, which is why this
   * rebuilds rather than updating in place.
   */
  saveVariable(uid, name, type, config) {
    this.registerVariable(name, type, { ...config, uid });
  }
  getVariable(name) {
    const held = this.getVariableModels().find((variable) => variable.name === name);
    return held ? this.live.get(held.uid) : void 0;
  }
  /**
   * The variable this name means on this board.
   *
   * A board's own variable wins over a global one of the same name, which
   * is what makes a page variable a local override.
   */
  getVariableWithContext(name, pageId) {
    const models = this.getVariableModels();
    if (pageId) {
      const onPage = models.find(
        (variable) => variable.name === name && variable.scope === "page" && variable.page?.id === pageId
      );
      if (onPage) return this.live.get(onPage.uid);
    }
    const global = models.find(
      (variable) => variable.name === name && (variable.scope ?? "global") === "global"
    );
    return global ? this.live.get(global.uid) : this.getVariable(name);
  }
  getVariableById(id) {
    return this.live.get(id);
  }
  /**
   * Takes a variable out of the workspace and lets go of its live object.
   *
   * Both halves, because both exist. Either the uid or the name reaches it;
   * the name because that is what a caller who only ever saw a name has.
   */
  removeVariable(nameOrId) {
    const held = this.getVariableModels();
    const at = held.findIndex(
      (variable) => variable.uid === nameOrId || variable.name === nameOrId
    );
    if (at < 0) return;
    this.live.delete(held[at].uid);
    this.workspace.variables.removeAt(at);
  }
  /** Every variable as a [name, live object] pair, the way callers read them. */
  getAllVariables() {
    const pairs = [];
    for (const held of this.getVariableModels()) {
      const variable = this.live.get(held.uid);
      if (variable) pairs.push([held.name, variable]);
    }
    return pairs;
  }
  renameVariable(newname, oldname) {
    const held = this.getVariableModels().find((variable) => variable.name === oldname);
    if (held) this.renameVariableById(held.uid, newname);
  }
  /**
   * Renames one variable.
   *
   * Nothing is keyed by the name, so this writes it in the two places that
   * hold it - the model and the running object - and is done. It used to
   * have to move the entry between Map keys, in whichever of the two Maps
   * it was found in.
   */
  renameVariableById(id, newname) {
    const held = this.getVariableModel(id);
    if (!held) return;
    held.name = newname;
    this.live.get(id)?.rename?.(newname);
  }
  getVariablesByScope(scope, pageId) {
    return this.getVariableModels().filter(
      (variable) => scope === "global" ? (variable.scope ?? "global") === "global" : variable.scope === "page" && variable.page?.id === pageId
    ).map((variable) => [variable.name, this.live.get(variable.uid)]).filter(([, live]) => !!live);
  }
  getVariableWithPageContext(pageId, name) {
    return this.getVariableWithContext(name, pageId);
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
function activate$1({ services }) {
  const repository = new VariableRepository(services);
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
  VARIABLE_REPOSITORY2 as VARIABLE_REPOSITORY,
  VariableRepository,
  activate,
  deactivate,
  identifier2 as identifier
};
