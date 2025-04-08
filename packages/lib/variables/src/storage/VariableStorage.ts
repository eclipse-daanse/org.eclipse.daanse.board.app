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

import { ConstantVariable } from '../classes/ConstantVariable'
import { ComputedVariable } from '../classes/ComputedVariable'
import { QueryVariable } from '../classes/QueryVariable'
import { RequestVariable } from '../classes/RequestVariable'
import { TimeVariable } from '../classes/TimeVariable'
import { TinyEmitter } from 'tiny-emitter'
import { injectable, inject } from 'inversify'
import { identifiers } from 'org.eclipse.daanse.board.app.lib.core'
import {
  IConstantVariableConfig,
  IComputedVariableConfig,
  INewVariableConfig,
  IRequestVaribleConfig,
  IQueryVariableConfig,
  SourceType,
  VariableEvents,
} from '..'

@injectable()
export class VariableStorage {
  private variables: { [key: string]: any } = {}

  constructor(@inject(identifiers.TINY_EMITTER) private eventBus: TinyEmitter) {
    this.eventBus = eventBus
  }

  createVariable(name: string, config: INewVariableConfig) {
    switch (config.type) {
      case SourceType.Constant:
        this.variables[name] = new ConstantVariable(
          name,
          this,
          this.eventBus,
          config as IConstantVariableConfig,
        )
        break
      case SourceType.Expression:
        this.variables[name] = new ComputedVariable(
          name,
          this,
          this.eventBus,
          config as IComputedVariableConfig,
        )
        break
      case SourceType.QueryParameter:
        this.variables[name] = new QueryVariable(
          name,
          this,
          this.eventBus,
          config as IQueryVariableConfig,
        )
        break
      case SourceType.AsyncParameters:
        this.variables[name] = new RequestVariable(
          name,
          this,
          this.eventBus,
          config as IRequestVaribleConfig,
        )
        break
      case SourceType.Time:
        this.variables[name] = new TimeVariable(
          name,
          this,
          this.eventBus,
          config as IConstantVariableConfig,
        )
        break
      default:
        throw new Error('variable type not implemented yet')
    }

    this.eventBus.emit(VariableEvents.VariableCreated)
    return this.variables[name]
  }

  removeVariable(name: string) {
    if (this.variables[name]) {
      this.variables[name].clearInterval()
      this.variables[name].clearTrigger()
    }
    delete this.variables[name]
    this.eventBus.emit(VariableEvents.VariableRemoved)
  }

  getVariable(name: string) {
    return this.variables[name]
  }

  clearStorage() {
    this.variables = {}
    this.eventBus.emit(VariableEvents.VariablesCleared)
  }
}
