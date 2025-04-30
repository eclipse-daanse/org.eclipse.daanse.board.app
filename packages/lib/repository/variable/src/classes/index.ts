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
import { Container } from 'inversify'
import { VariableFactory, init as initVariableFactory, identifier as variableFactoryIdentifier }
  from 'org.eclipse.daanse.board.app.lib.factory.variable'

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
  private eventBus: TinyEmitter

  constructor (private container: Container) {
    this.eventBus = this.container.get<TinyEmitter>(identifiers.TINY_EMITTER)
  }

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
      const variableFactory = this.container.get<VariableFactory>(variableFactoryIdentifier)
      const variable = variableFactory.createVariable(identifiers.Variable, config)

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

  // registerVariable(name: string, config: VariableConfig) {
  //   this.availableVariables[name] = config
  // }

  // getVariable(name: string): VariableConfig {
  //   return this.availableVariables[name]
  // }

  // getAllVariables(): Record<string, VariableConfig> {
  //   return this.availableVariables
  // }
}
