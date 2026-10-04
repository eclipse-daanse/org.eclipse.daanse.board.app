/*********************************************************************
 * Copyright (c) 2025 Contributors to the Eclipse Foundation.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Contributors:
 *   Smart City Jena
 **********************************************************************/

/**
 * The variables a workspace holds.
 *
 * They live in the model, beside the connections and the data sources, and
 * what runs is built from them - the same arrangement, because it is the
 * same kind of thing: a stored description and a live object made from it.
 *
 * What this replaces kept two Maps. One was keyed by name and held only
 * the global variables; the other was keyed by "scope" or "page-<id>" and
 * held all of them. Both were written on every change and read in a
 * different order by every method, `getVariablesByScope` read the one that
 * never held a page variable, and renaming had to move an entry between
 * keys because the key was the name being changed.
 */

import { SystemVariableActions } from '../gen/SystemVariableActions'
import { PageVariableActions } from '../gen/PageVariableActions'
import {
  WORKSPACE,
  VariableImpl,
  type Page,
  type Variable as ModelVariable,
  type Workspace,
} from 'org.eclipse.daanse.board.app.lib.model.workspace'

export interface VariableConfig {
  [key: string]: any
}

export interface VariableDeffinition {
  Variable: symbol,
  Settings: any
}

/** The slice of the service registry this needs. */
export interface IdentifierResolver {
  getRequired<T>(id: string): T
}

export class VariableRepository implements SystemVariableActions, PageVariableActions {
  /** The running objects, by the uid of the modelled variable they were built from. */
  private live: Map<string, any> = new Map()
  private availableVariablesTypes: Map<string, VariableDeffinition> = new Map();

  /*
   * No event bus. A change to the list is announced by the model itself,
   * the way every other modelled change is; the bus carries value changes,
   * which a variable emits on its own and which this never saw.
   */
  constructor(private readonly resolver: IdentifierResolver) {}

  /*
   * Resolved on first use, not in the constructor: this repository is
   * created while its own module activates, and the workspace may not be
   * registered yet at that point.
   */
  private workspaceHeld: Workspace | undefined

  private get workspace(): Workspace {
    if (!this.workspaceHeld) {
      this.workspaceHeld = this.resolver.getRequired<Workspace>(WORKSPACE)
    }
    return this.workspaceHeld
  }

  /**
   * Resolves one of the identifiers a registered variable type carries.
   * All of them are created with Symbol.for, so the description IS the id.
   */
  resolveIdentifier<T>(identifier: symbol): T {
    return this.resolver.getRequired<T>(identifier.description as string)
  }

  // ------------------------------------------------------------ the types

  registerVariableType(type: string, identifiers: VariableDeffinition) {
    if (this.availableVariablesTypes.has(type)) {
      throw Error('Multiple registration of the same variable type')
    }
    this.availableVariablesTypes.set(type, identifiers)
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
  unregisterVariableType(type: string): boolean {
    return this.availableVariablesTypes.delete(type)
  }

  getRegisteredVariableTypes(): string[] {
    return Array.from(this.availableVariablesTypes.keys())
  }

  getVariableIdentifiers(type: string): VariableDeffinition | undefined {
    return this.availableVariablesTypes.get(type);
  }

  // -------------------------------------------------------- the model side

  /** What the workspace holds, in order. */
  getVariableModels(): ModelVariable[] {
    return this.workspace.variables.toArray()
  }

  getVariableModel(uid: string): ModelVariable | undefined {
    return this.getVariableModels().find((variable) => variable.uid === uid)
  }

  /** The board a page-scoped variable names, if the workspace still holds it. */
  private pageById(pageId?: string): Page | undefined {
    if (!pageId) return undefined
    return this.workspace.board?.pages.toArray().find((page: Page) => page.id === pageId)
  }

  /**
   * Builds the running object for one modelled variable.
   *
   * The uid, name and scope are put back into the configuration because
   * that is what a variable's own init() reads - the one place that
   * happens, rather than at each caller.
   */
  private build(held: ModelVariable): void {
    const identifiers = this.availableVariablesTypes.get(held.type as string)
    if (!identifiers) return

    const config = { ...((held.definition ?? {}) as VariableConfig) }
    config['uid'] = held.uid
    config['scope'] = held.scope ?? 'global'
    config['accessMode'] = held.accessMode ?? 'external-writable'
    config['pageId'] = held.page?.id

    const factory = this.resolveIdentifier<(name: string, config: VariableConfig) => any>(
      identifiers.Variable,
    )
    const variable = factory(held.name as string, config)
    /* One identity for the pair: the model's uid is the live object's id. */
    variable.id = held.uid
    this.live.set(held.uid as string, variable)
  }

  /**
   * Builds a live object for every variable the workspace holds.
   *
   * What a loaded workspace needs: the model came out of a file, the things
   * that hold a value and tick did not.
   */
  rebuildLive(): void {
    this.live.clear()
    for (const held of this.getVariableModels()) this.build(held)
  }

  // ---------------------------------------------------------- the variables

  registerVariable(name: string, type: string, config: VariableConfig) {
    const uid = (config.uid ?? config.id ?? Math.random().toString(36).substring(7)) as string

    const held = this.getVariableModel(uid) ?? new VariableImpl()
    held.uid = uid
    held.name = name
    held.type = type
    held.scope = (config.scope as string) ?? 'global'
    held.accessMode = (config.accessMode as string) ?? 'external-writable'
    held.page = this.pageById(config.pageId as string)

    /*
     * The identity and the placement are the model's own features now, so
     * they do not go in the bag as well: one fact, one place.
     */
    const { uid: _uid, id: _id, scope: _scope, accessMode: _mode, pageId: _page, ...rest } = config
    held.definition = rest

    if (!this.getVariableModel(uid)) this.workspace.variables.push(held)

    this.build(held)
  }

  /**
   * Writes a changed variable back and builds it again.
   *
   * Changing the type means a different live object, which is why this
   * rebuilds rather than updating in place.
   */
  saveVariable(uid: string, name: string, type: string, config: VariableConfig): void {
    this.registerVariable(name, type, { ...config, uid })
  }

  getVariable(name: string): any {
    const held = this.getVariableModels().find((variable) => variable.name === name)
    return held ? this.live.get(held.uid as string) : undefined
  }

  /**
   * The variable this name means on this board.
   *
   * A board's own variable wins over a global one of the same name, which
   * is what makes a page variable a local override.
   */
  getVariableWithContext(name: string, pageId?: string): any {
    const models = this.getVariableModels()

    if (pageId) {
      const onPage = models.find(
        (variable) => variable.name === name && variable.scope === 'page' && variable.page?.id === pageId,
      )
      if (onPage) return this.live.get(onPage.uid as string)
    }

    const global = models.find(
      (variable) => variable.name === name && (variable.scope ?? 'global') === 'global',
    )
    return global ? this.live.get(global.uid as string) : this.getVariable(name)
  }

  getVariableById(id: string): any {
    return this.live.get(id)
  }

  /**
   * Takes a variable out of the workspace and lets go of its live object.
   *
   * Both halves, because both exist. Either the uid or the name reaches it;
   * the name because that is what a caller who only ever saw a name has.
   */
  removeVariable(nameOrId: string): void {
    const held = this.getVariableModels()
    const at = held.findIndex(
      (variable) => variable.uid === nameOrId || variable.name === nameOrId,
    )
    if (at < 0) return

    this.live.delete(held[at].uid as string)
    this.workspace.variables.removeAt(at)
  }

  /** Every variable as a [name, live object] pair, the way callers read them. */
  getAllVariables(): any[] {
    const pairs: any[] = []
    for (const held of this.getVariableModels()) {
      const variable = this.live.get(held.uid as string)
      if (variable) pairs.push([held.name, variable])
    }
    return pairs
  }

  renameVariable(newname: string, oldname: string): void {
    const held = this.getVariableModels().find((variable) => variable.name === oldname)
    if (held) this.renameVariableById(held.uid as string, newname)
  }

  /**
   * Renames one variable.
   *
   * Nothing is keyed by the name, so this writes it in the two places that
   * hold it - the model and the running object - and is done. It used to
   * have to move the entry between Map keys, in whichever of the two Maps
   * it was found in.
   */
  renameVariableById(id: string, newname: string): void {
    const held = this.getVariableModel(id)
    if (!held) return

    held.name = newname
    this.live.get(id)?.rename?.(newname)
  }

  getVariablesByScope(scope: 'global' | 'page', pageId?: string): any[] {
    return this.getVariableModels()
      .filter((variable) =>
        scope === 'global'
          ? (variable.scope ?? 'global') === 'global'
          : variable.scope === 'page' && variable.page?.id === pageId,
      )
      .map((variable) => [variable.name, this.live.get(variable.uid as string)])
      .filter(([, live]) => !!live)
  }

  getVariableWithPageContext(pageId: string, name: string): any {
    return this.getVariableWithContext(name, pageId)
  }

  /**
   * Sets or updates a global variable (Action method)
   */
  setGlobalVariable(variableName: string, value: any): void {
    const existingVar = this.getVariable(variableName);

    if (existingVar) {
      existingVar.value = value;
    } else {
      this.registerVariable(variableName, 'constant', {
        value: value,
        scope: 'global'
      });
    }
  }

  /**
   * Sets or updates a page-scoped variable (Action method)
   */
  setPageVariable(variableName: string, value: any, pageId?: string): void {
    const existingVar = this.getVariableWithContext(variableName, pageId);

    if (existingVar && typeof existingVar.set === 'function') {
      existingVar.set(value);
    } else if (existingVar) {
      existingVar.value = value;
    } else {
      this.registerVariable(variableName, 'constant', {
        value: value,
        scope: 'page',
        pageId: pageId
      });
    }
  }
}
