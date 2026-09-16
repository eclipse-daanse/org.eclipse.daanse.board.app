import { EVENT_ACTIONS_REGISTRY_ID as u } from "org.eclipse.daanse.board.app.lib.events";
import { WORKSPACE as m, VariableImpl as h } from "org.eclipse.daanse.board.app.lib.model.workspace";
import { loggerFactory as f } from "org.eclipse.daanse.board.app.lib.logger";
import { VARIABLE_REPOSITORY as o, identifier as w } from "org.eclipse.daanse.board.app.lib.api.variable";
import { VARIABLE_REPOSITORY as G, identifier as B } from "org.eclipse.daanse.board.app.lib.api.variable";
class p {
  /*
   * No event bus. A change to the list is announced by the model itself,
   * the way every other modelled change is; the bus carries value changes,
   * which a variable emits on its own and which this never saw.
   */
  constructor(e) {
    this.resolver = e;
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
    return this.workspaceHeld || (this.workspaceHeld = this.resolver.getRequired(m)), this.workspaceHeld;
  }
  /**
   * Resolves one of the identifiers a registered variable type carries.
   * All of them are created with Symbol.for, so the description IS the id.
   */
  resolveIdentifier(e) {
    return this.resolver.getRequired(e.description);
  }
  // ------------------------------------------------------------ the types
  registerVariableType(e, a) {
    if (this.availableVariablesTypes.has(e))
      throw Error("Multiple registration of the same variable type");
    this.availableVariablesTypes.set(e, a);
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
  unregisterVariableType(e) {
    return this.availableVariablesTypes.delete(e);
  }
  getRegisteredVariableTypes() {
    return Array.from(this.availableVariablesTypes.keys());
  }
  getVariableIdentifiers(e) {
    return this.availableVariablesTypes.get(e);
  }
  // -------------------------------------------------------- the model side
  /** What the workspace holds, in order. */
  getVariableModels() {
    return this.workspace.variables.toArray();
  }
  getVariableModel(e) {
    return this.getVariableModels().find((a) => a.uid === e);
  }
  /** The board a page-scoped variable names, if the workspace still holds it. */
  pageById(e) {
    if (e)
      return this.workspace.board?.pages.toArray().find((a) => a.id === e);
  }
  /**
   * Builds the running object for one modelled variable.
   *
   * The uid, name and scope are put back into the configuration because
   * that is what a variable's own init() reads - the one place that
   * happens, rather than at each caller.
   */
  build(e) {
    const a = this.availableVariablesTypes.get(e.type);
    if (!a) return;
    const t = { ...e.definition ?? {} };
    t.uid = e.uid, t.scope = e.scope ?? "global", t.accessMode = e.accessMode ?? "external-writable", t.pageId = e.page?.id;
    const n = this.resolveIdentifier(
      a.Variable
    )(e.name, t);
    n.id = e.uid, this.live.set(e.uid, n);
  }
  /**
   * Builds a live object for every variable the workspace holds.
   *
   * What a loaded workspace needs: the model came out of a file, the things
   * that hold a value and tick did not.
   */
  rebuildLive() {
    this.live.clear();
    for (const e of this.getVariableModels()) this.build(e);
  }
  // ---------------------------------------------------------- the variables
  registerVariable(e, a, t) {
    const i = t.uid ?? t.id ?? Math.random().toString(36).substring(7), n = this.getVariableModel(i) ?? new h();
    n.uid = i, n.name = e, n.type = a, n.scope = t.scope ?? "global", n.accessMode = t.accessMode ?? "external-writable", n.page = this.pageById(t.pageId);
    const { uid: s, id: E, scope: M, accessMode: T, pageId: P, ...b } = t;
    n.definition = b, this.getVariableModel(i) || this.workspace.variables.push(n), this.build(n);
  }
  /**
   * Writes a changed variable back and builds it again.
   *
   * Changing the type means a different live object, which is why this
   * rebuilds rather than updating in place.
   */
  saveVariable(e, a, t, i) {
    this.registerVariable(a, t, { ...i, uid: e });
  }
  getVariable(e) {
    const a = this.getVariableModels().find((t) => t.name === e);
    return a ? this.live.get(a.uid) : void 0;
  }
  /**
   * The variable this name means on this board.
   *
   * A board's own variable wins over a global one of the same name, which
   * is what makes a page variable a local override.
   */
  getVariableWithContext(e, a) {
    const t = this.getVariableModels();
    if (a) {
      const n = t.find(
        (s) => s.name === e && s.scope === "page" && s.page?.id === a
      );
      if (n) return this.live.get(n.uid);
    }
    const i = t.find(
      (n) => n.name === e && (n.scope ?? "global") === "global"
    );
    return i ? this.live.get(i.uid) : this.getVariable(e);
  }
  getVariableById(e) {
    return this.live.get(e);
  }
  /**
   * Takes a variable out of the workspace and lets go of its live object.
   *
   * Both halves, because both exist. Either the uid or the name reaches it;
   * the name because that is what a caller who only ever saw a name has.
   */
  removeVariable(e) {
    const a = this.getVariableModels(), t = a.findIndex(
      (i) => i.uid === e || i.name === e
    );
    t < 0 || (this.live.delete(a[t].uid), this.workspace.variables.removeAt(t));
  }
  /** Every variable as a [name, live object] pair, the way callers read them. */
  getAllVariables() {
    const e = [];
    for (const a of this.getVariableModels()) {
      const t = this.live.get(a.uid);
      t && e.push([a.name, t]);
    }
    return e;
  }
  renameVariable(e, a) {
    const t = this.getVariableModels().find((i) => i.name === a);
    t && this.renameVariableById(t.uid, e);
  }
  /**
   * Renames one variable.
   *
   * Nothing is keyed by the name, so this writes it in the two places that
   * hold it - the model and the running object - and is done. It used to
   * have to move the entry between Map keys, in whichever of the two Maps
   * it was found in.
   */
  renameVariableById(e, a) {
    const t = this.getVariableModel(e);
    t && (t.name = a, this.live.get(e)?.rename?.(a));
  }
  getVariablesByScope(e, a) {
    return this.getVariableModels().filter(
      (t) => e === "global" ? (t.scope ?? "global") === "global" : t.scope === "page" && t.page?.id === a
    ).map((t) => [t.name, this.live.get(t.uid)]).filter(([, t]) => !!t);
  }
  getVariableWithPageContext(e, a) {
    return this.getVariableWithContext(a, e);
  }
  /**
   * Sets or updates a global variable (Action method)
   */
  setGlobalVariable(e, a) {
    const t = this.getVariable(e);
    t ? t.value = a : this.registerVariable(e, "constant", {
      value: a,
      scope: "global"
    });
  }
  /**
   * Sets or updates a page-scoped variable (Action method)
   */
  setPageVariable(e, a, t) {
    const i = this.getVariableWithContext(e, t);
    i && typeof i.set == "function" ? i.set(a) : i ? i.value = a : this.registerVariable(e, "constant", {
      value: a,
      scope: "page",
      pageId: t
    });
  }
}
const l = `<?xml version="1.0" encoding="UTF-8"?>
<!--
  Copyright (c) 2025 Contributors to the Eclipse Foundation.

  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/

  SPDX-License-Identifier: EPL-2.0

  Contributors:
    Smart City Jena
-->
<ecore:EPackage xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:ecore="http://www.eclipse.org/emf/2002/Ecore" name="variableactions" nsURI="http://org.eclipse.daanse.board.app.lib.repository.variable.actions"
    nsPrefix="variableactions">

  <!-- Reference to Events package -->
  <eClassifiers xsi:type="ecore:EClass" name="SystemVariableActions" interface="true" eSuperTypes="http://org.eclipse.daanse.board.app.lib.events#//SystemActionInterface">
    <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
      <details key="documentation" value="System-level variable actions"/>
    </eAnnotations>

    <eOperations name="setGlobalVariable">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="Set or update a global variable"/>
      </eAnnotations>
      <eAnnotations source="org.eclipse.daanse.board.app.lib.events/WidgetAction">
        <details key="eventType" value="system.setGlobalVariable"/>
      </eAnnotations>
      <eParameters name="variableName" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
          <details key="documentation" value="Name of the variable to set"/>
        </eAnnotations>
      </eParameters>
      <eParameters name="value" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EJavaObject">
        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
          <details key="documentation" value="Value to set"/>
        </eAnnotations>
      </eParameters>
    </eOperations>
  </eClassifiers>

  <eClassifiers xsi:type="ecore:EClass" name="PageVariableActions" interface="true" eSuperTypes="http://org.eclipse.daanse.board.app.lib.events#//PageActionInterface">
    <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
      <details key="documentation" value="Page-level variable actions"/>
    </eAnnotations>

    <eOperations name="setPageVariable">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="Set or update a page-scoped variable"/>
      </eAnnotations>
      <eAnnotations source="org.eclipse.daanse.board.app.lib.events/WidgetAction">
        <details key="eventType" value="page.setPageVariable"/>
      </eAnnotations>
      <eParameters name="variableName" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
          <details key="documentation" value="Name of the variable to set"/>
        </eAnnotations>
      </eParameters>
      <eParameters name="value" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EJavaObject">
        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
          <details key="documentation" value="Value to set"/>
        </eAnnotations>
      </eParameters>
      <eParameters name="pageId" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString" lowerBound="0">
        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
          <details key="documentation" value="Optional page ID (defaults to current page)"/>
        </eAnnotations>
      </eParameters>
    </eOperations>
  </eClassifiers>
</ecore:EPackage>`, v = f.createLogger("daanse:variable:actions");
function y(r, e) {
  r.registerActionsFromEcoreString(
    "SystemVariableActions",
    l,
    "system",
    "VariableActions.ecore"
  ), r.registerActionsFromEcoreString(
    "PageVariableActions",
    l,
    "page",
    "VariableActions.ecore"
  ), r.registerInstance("VariableRepository", e), v("Variable actions registered");
}
function d({ services: r }) {
  const e = new p(r);
  r.register(o, e), y(
    r.getRequired(u),
    e
  );
}
function g({ services: r }) {
  r.unregister(o);
}
const V = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  VARIABLE_REPOSITORY: o,
  VariableRepository: p,
  activate: d,
  deactivate: g,
  identifier: w
}, Symbol.toStringTag, { value: "Module" })), c = "org.eclipse.daanse.board.app.lib.repository.variable", A = "0.0.1-next.1";
async function _(r) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${c}: tsm runtime is not initialized`);
  e.register(c, V, A, "lib.repository.variable"), await d?.(r);
}
async function R(r) {
  await g?.(r);
}
export {
  G as VARIABLE_REPOSITORY,
  p as VariableRepository,
  _ as activate,
  R as deactivate,
  B as identifier
};
