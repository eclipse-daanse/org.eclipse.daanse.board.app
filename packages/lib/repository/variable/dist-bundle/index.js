import { EVENT_ACTIONS_REGISTRY_ID as h } from "org.eclipse.daanse.board.app.lib.events";
import { loggerFactory as y } from "org.eclipse.daanse.board.app.lib.logger";
import { VARIABLE_REPOSITORY as c, identifier as V } from "org.eclipse.daanse.board.app.lib.api.variable";
import { VARIABLE_REPOSITORY as R, identifier as _ } from "org.eclipse.daanse.board.app.lib.api.variable";
const { TINY_EMITTER: u } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
class f {
  constructor(e, t) {
    this.resolver = e, this.tinyEmitter = t;
  }
  availableVariables = /* @__PURE__ */ new Map();
  availableVariablesByScope = /* @__PURE__ */ new Map();
  // scope -> name -> variable
  availableVariablesTypes = /* @__PURE__ */ new Map();
  /**
   * Resolves one of the identifiers a registered variable type carries.
   * All of them are created with Symbol.for, so the description IS the id.
   */
  resolveIdentifier(e) {
    return this.resolver.getRequired(e.description);
  }
  registerVariableType(e, t) {
    if (this.availableVariablesTypes.has(e))
      throw Error("Multiple registration of the same variable type");
    this.availableVariablesTypes.set(e, t);
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
  unregisterVariableType(e) {
    return this.availableVariablesTypes.delete(e);
  }
  getRegisteredVariableTypes() {
    return Array.from(this.availableVariablesTypes.keys());
  }
  getVariableIdentifiers(e) {
    return this.availableVariablesTypes.get(e);
  }
  registerVariable(e, t, a) {
    const i = this.availableVariablesTypes.get(t);
    if (i) {
      const r = this.resolveIdentifier(i.Variable)(e, a), n = a.scope || "global", l = a.pageId && n === "page" ? `${n}-${a.pageId}` : n;
      this.availableVariablesByScope.has(l) || this.availableVariablesByScope.set(l, /* @__PURE__ */ new Map()), this.availableVariablesByScope.get(l).set(e, r), (!a.scope || a.scope === "global") && this.availableVariables.set(e, r);
    }
  }
  getVariable(e) {
    for (const [t, a] of this.availableVariablesByScope.entries())
      if (a.has(e))
        return a.get(e);
    if (this.availableVariables.has(e))
      return this.availableVariables.get(e);
  }
  getVariableWithContext(e, t) {
    if (t) {
      const i = `page-${t}`, s = this.availableVariablesByScope.get(i);
      if (s && s.has(e))
        return s.get(e);
    }
    const a = this.availableVariablesByScope.get("global");
    return a && a.has(e) ? a.get(e) : this.availableVariables.get(e);
  }
  getVariableById(e) {
    for (const t of this.availableVariablesByScope.values())
      for (const a of t.values())
        if (a.id === e)
          return a;
    for (const t of this.availableVariables.values())
      if (t.id === e)
        return t;
  }
  removeVariable(e) {
    let t = this.getVariableById(e), a = e;
    if (t) {
      a = t.name;
      const i = t.scope || "global", s = t.pageId && i === "page" ? `page-${t.pageId}` : i, r = this.availableVariablesByScope.get(s);
      r && r.delete(a);
    }
    this.availableVariables.has(a) && this.availableVariables.delete(a);
  }
  getAllVariables() {
    const e = /* @__PURE__ */ new Map();
    for (const [t, a] of this.availableVariablesByScope.entries())
      for (const [i, s] of a)
        e.set(s.id, [s.name, s]);
    for (const [t, a] of this.availableVariables)
      a.id && !e.has(a.id) && e.set(a.id, [t, a]);
    return Array.from(e.values());
  }
  renameVariable(e, t) {
    let a = null, i = null;
    for (const [s, r] of this.availableVariablesByScope.entries())
      if (r.has(t)) {
        a = r.get(t), i = s;
        break;
      }
    if (a || (a = this.availableVariables.get(t), a && (i = "old-system")), a && i) {
      if (i !== "old-system") {
        const s = this.availableVariablesByScope.get(i);
        s && (s.set(e, a), s.delete(t));
      }
      this.availableVariables.has(t) && (this.availableVariables.set(e, a), this.availableVariables.delete(t));
    }
  }
  renameVariableById(e, t) {
    let a = null, i = null, s = null;
    for (const [r, n] of this.availableVariablesByScope.entries()) {
      for (const [l, p] of n)
        if (p.id === e) {
          a = p, i = r, s = l;
          break;
        }
      if (a) break;
    }
    if (!a) {
      for (const [r, n] of this.availableVariables)
        if (n.id === e) {
          a = n, i = "old-system", s = r;
          break;
        }
    }
    if (a && i && s) {
      if (i !== "old-system") {
        const r = this.availableVariablesByScope.get(i);
        r && (r.set(t, a), r.delete(s));
      }
      this.availableVariables.has(s) && (this.availableVariables.set(t, a), this.availableVariables.delete(s));
    }
  }
  getVariablesByScope(e, t) {
    return Array.from(this.availableVariables).filter(([i, s]) => e === "global" ? s.scope === "global" : s.scope === "page" && s.pageId === t);
  }
  getVariableWithPageContext(e, t) {
    const a = this.getVariablesByScope("page", e).find(([i]) => i === t);
    return a ? a[1] : this.getVariable(t);
  }
  /**
   * Sets or updates a global variable (Action method)
   */
  setGlobalVariable(e, t) {
    const a = this.getVariable(e);
    a ? a.value = t : this.registerVariable(e, "constant", {
      value: t,
      scope: "global"
    });
  }
  /**
   * Sets or updates a page-scoped variable (Action method)
   */
  setPageVariable(e, t, a) {
    const i = this.getVariableWithContext(e, a);
    i && typeof i.set == "function" ? i.set(t) : i ? i.value = t : this.registerVariable(e, "constant", {
      value: t,
      scope: "page",
      pageId: a
    });
  }
}
const b = `<?xml version="1.0" encoding="UTF-8"?>
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
</ecore:EPackage>`, m = y.createLogger("daanse:variable:actions");
function w(o, e) {
  o.registerActionsFromEcoreString(
    "SystemVariableActions",
    b,
    "system",
    "VariableActions.ecore"
  ), o.registerActionsFromEcoreString(
    "PageVariableActions",
    b,
    "page",
    "VariableActions.ecore"
  ), o.registerInstance("VariableRepository", e), m("Variable actions registered");
}
function v({ services: o }) {
  const e = new f(
    o,
    o.get(u)
  );
  o.register(c, e), w(
    o.getRequired(h),
    e
  );
}
function d({ services: o }) {
  o.unregister(c);
}
const A = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  VARIABLE_REPOSITORY: c,
  VariableRepository: f,
  activate: v,
  deactivate: d,
  identifier: V
}, Symbol.toStringTag, { value: "Module" })), g = "org.eclipse.daanse.board.app.lib.repository.variable", S = "0.0.1-next.1";
async function M(o) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${g}: tsm runtime is not initialized`);
  e.register(g, A, S, "lib.repository.variable"), await v?.(o);
}
async function P(o) {
  await d?.(o);
}
export {
  R as VARIABLE_REPOSITORY,
  f as VariableRepository,
  M as activate,
  P as deactivate,
  _ as identifier
};
