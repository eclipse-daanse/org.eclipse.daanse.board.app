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
import { inject } from 'inversify'

export interface VariableConfig {
  [key: string]: any
}

export interface VariableDeffinition {
  Variable: symbol,
  Settings: any
}

export class VariableRepository {
  private availableVariables: Map<string, any> = new Map();
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
    // this.availableVariables[type] = config
    const identifiers = this.availableVariablesTypes.get(type)
    if (identifiers) {
      const variableFactory = container.get(identifiers.Variable) as any
      console.log('VariableFactory', variableFactory)
      const variable = variableFactory(name, config)

      this.availableVariables.set(name, variable)
    }
  }

  getVariable(name: string): any {
    return this.availableVariables.get(name)
  }

  removeVariable(name: string): void {
    if (this.availableVariables.has(name)) {
      this.availableVariables.delete(name)
    }
  }

  getAllVariables(): any[] {
    return Array.from(this.availableVariables)
  }

  renameVariable(newname: string,oldname:string): void {
    const avar = this.availableVariables.get(oldname);
    this.availableVariables.set(newname,avar)
    this.availableVariables.delete(oldname);
  }
}
