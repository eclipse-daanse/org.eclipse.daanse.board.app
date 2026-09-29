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

import { Variable } from './Variable'
import { type IVariableConfig } from '..'
import type { VariableDependencies } from './Variable'

const symbol = Symbol.for('TimeVariable')

class TimeVariable extends Variable {
  public type = 'time'

  init(name: string, config: IVariableConfig) {
    super.init(name, config)
    super.value = Date.now()

    super.onInterval = () => {
      super.value = Date.now()
    }
  }

  get value(): any {
    return super.value
  }

  set value(value) {}
}


/**
 * Builds the per-type factory the VariableRepository resolves and calls.
 * Dependencies are closed over once, at activation - the instances receive
 * them as plain properties, no container involved.
 */
export function createTimeVariableFactory(deps: VariableDependencies) {
  return (name: string, config: IVariableConfig): TimeVariable => {
    const variable = new TimeVariable()
    variable.eventBus = deps.eventBus
    variable.pageContextService = deps.pageContextService
    variable.init(name, config)
    return variable
  }
}

export { TimeVariable, symbol }
