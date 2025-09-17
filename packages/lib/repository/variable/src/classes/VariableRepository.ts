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

import { identifiers } from 'org.eclipse.daanse.board.app.lib.core'
import { type TinyEmitter } from 'tiny-emitter'
import { container } from 'org.eclipse.daanse.board.app.lib.core'
import { inject, injectable } from 'inversify'
// Import moved to method level to avoid circular dependency

export interface VariableConfig {
  [key: string]: any
}

export interface VariableDeffinition {
  Variable: symbol,
  Settings: any
}
@injectable()
export class VariableRepository {
  private availableVariables: Map<string, any> = new Map();
  private availableVariablesByScope: Map<string, Map<string, any>> = new Map(); // scope -> name -> variable
  private availableVariablesTypes: Map<string, VariableDeffinition> = new Map();

  @inject(identifiers.TINY_EMITTER)
  private tinyEmitter?: TinyEmitter;

  registerVariableType(type: string, identifiers: VariableDeffinition) {
    if (this.availableVariablesTypes.has(type)) {
      throw Error('Multiple registration of the same variable type')
    }
    this.availableVariablesTypes.set(type, identifiers)
  }

  getRegisteredVariableTypes(): string[] {
    return Array.from(this.availableVariablesTypes.keys())
  }

  getVariableIdentifiers(type: string): VariableDeffinition | undefined {
    return this.availableVariablesTypes.get(type);
  }

  registerVariable(name: string, type: string, config: VariableConfig) {
    const identifiers = this.availableVariablesTypes.get(type)
    if (identifiers) {
      const variableFactory = container.get(identifiers.Variable) as any
      const variable = variableFactory(name, config)

      // Add to scope-aware storage (primary system)
      const scope = config.scope || 'global'
      const scopeKey = config.pageId && scope === 'page' ? `${scope}-${config.pageId}` : scope
      if (!this.availableVariablesByScope.has(scopeKey)) {
        this.availableVariablesByScope.set(scopeKey, new Map())
      }
      this.availableVariablesByScope.get(scopeKey)!.set(name, variable)

      // Deprecated: Keep backward compatibility with old Map, but use unique keys
      // Only for global variables to avoid conflicts
      if (!config.scope || config.scope === 'global') {
        this.availableVariables.set(name, variable)
      }
    }
  }

  getVariable(name: string): any {
    // Search in scope-aware system
    for (const [scopeKey, scopeMap] of this.availableVariablesByScope.entries()) {
      if (scopeMap.has(name)) {
        return scopeMap.get(name);
      }
    }

    // Also check old system for backward compatibility
    if (this.availableVariables.has(name)) {
      return this.availableVariables.get(name);
    }

    return undefined;
  }

  getVariableWithContext(name: string, pageId?: string): any {
    // First check for page-scoped variable if pageId is provided
    if (pageId) {
      const pageScopeKey = `page-${pageId}`
      const pageScope = this.availableVariablesByScope.get(pageScopeKey)
      if (pageScope && pageScope.has(name)) {
        return pageScope.get(name)
      }
    }

    // Fall back to global variable
    const globalScope = this.availableVariablesByScope.get('global')
    if (globalScope && globalScope.has(name)) {
      return globalScope.get(name)
    }

    // Final fallback to old system
    return this.availableVariables.get(name)
  }

  getVariableById(id: string): any {
    // First search in scope-aware storage
    for (const scopeMap of this.availableVariablesByScope.values()) {
      for (const variable of scopeMap.values()) {
        if (variable.id === id) {
          return variable;
        }
      }
    }

    // Fallback to old system
    for (const variable of this.availableVariables.values()) {
      if (variable.id === id) {
        return variable;
      }
    }
    return undefined;
  }

  removeVariable(nameOrId: string): void {
    // Try to find by ID first
    let variableToRemove = this.getVariableById(nameOrId)
    let nameToRemove = nameOrId

    if (variableToRemove) {
      nameToRemove = variableToRemove.name

      // Remove from scope-aware storage
      const scope = variableToRemove.scope || 'global'
      const scopeKey = variableToRemove.pageId && scope === 'page' ? `page-${variableToRemove.pageId}` : scope
      const scopeMap = this.availableVariablesByScope.get(scopeKey)
      if (scopeMap) {
        scopeMap.delete(nameToRemove)
      }
    }

    // Remove from old system (backward compatibility)
    if (this.availableVariables.has(nameToRemove)) {
      this.availableVariables.delete(nameToRemove)
    }
  }

  getAllVariables(): any[] {
    const allVariables = new Map<string, any>()

    // Collect all variables from scope-aware storage
    for (const [scopeKey, scopeMap] of this.availableVariablesByScope.entries()) {
      for (const [name, variable] of scopeMap) {
        // Use variable ID as key to ensure each variable appears once
        allVariables.set(variable.id, [variable.name, variable])
      }
    }

    // Add variables from old system that might not be in new system
    for (const [name, variable] of this.availableVariables) {
      if (variable.id && !allVariables.has(variable.id)) {
        allVariables.set(variable.id, [name, variable])
      }
    }

    return Array.from(allVariables.values())
  }

  renameVariable(newname: string, oldname: string): void {
    let avar: any = null;
    let foundScopeKey: string | null = null;

    // Search in scope-aware system first (primary system)
    for (const [scopeKey, scopeMap] of this.availableVariablesByScope.entries()) {
      if (scopeMap.has(oldname)) {
        avar = scopeMap.get(oldname);
        foundScopeKey = scopeKey;
        break;
      }
    }

    // Fallback to old system if not found in scope-aware system
    if (!avar) {
      avar = this.availableVariables.get(oldname);
      if (avar) {
        foundScopeKey = 'old-system';
      }
    }

    if (avar && foundScopeKey) {
      // Update scope-aware system
      if (foundScopeKey !== 'old-system') {
        const scopeMap = this.availableVariablesByScope.get(foundScopeKey)
        if (scopeMap) {
          scopeMap.set(newname, avar)
          scopeMap.delete(oldname)
        }
      }

      // Update old system if variable exists there (only for global variables)
      if (this.availableVariables.has(oldname)) {
        this.availableVariables.set(newname, avar)
        this.availableVariables.delete(oldname);
      }
    }
  }

  renameVariableById(id: string, newname: string): void {
    // Find the variable by ID
    let avar: any = null;
    let foundScopeKey: string | null = null;
    let oldname: string | null = null;

    // Search in scope-aware system
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

    // Fallback to old system
    if (!avar) {
      for (const [name, variable] of this.availableVariables) {
        if (variable.id === id) {
          avar = variable;
          foundScopeKey = 'old-system';
          oldname = name;
          break;
        }
      }
    }

    if (avar && foundScopeKey && oldname) {
      // Update scope-aware system
      if (foundScopeKey !== 'old-system') {
        const scopeMap = this.availableVariablesByScope.get(foundScopeKey)
        if (scopeMap) {
          scopeMap.set(newname, avar)
          scopeMap.delete(oldname)
        }
      }

      // Update old system if variable exists there
      if (this.availableVariables.has(oldname)) {
        this.availableVariables.set(newname, avar)
        this.availableVariables.delete(oldname);
      }
    }
  }

  getVariablesByScope(scope: 'global' | 'page', pageId?: string): any[] {
    const allVars = Array.from(this.availableVariables);
    return allVars.filter(([name, variable]) => {
      if (scope === 'global') {
        return variable.scope === 'global';
      } else {
        return variable.scope === 'page' && variable.pageId === pageId;
      }
    });
  }

  getVariableWithPageContext(pageId: string, name: string): any {
    // First check for page-scoped variable
    const pageVar = this.getVariablesByScope('page', pageId).find(([varName]) => varName === name);
    if (pageVar) {
      return pageVar[1];
    }
    // Fall back to global variable
    return this.getVariable(name);
  }
}
