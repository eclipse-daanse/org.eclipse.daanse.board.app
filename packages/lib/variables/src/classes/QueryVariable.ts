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
import { type IQueryVariableConfig } from '..'
import type { VariableDependencies } from './Variable'

const symbol = Symbol.for('QueryVariable')

class QueryVariable extends Variable {
  private innerQueryParam: string = ''
  public type = 'query'

  init(name: string, config: IQueryVariableConfig) {
    super.init(name, config)
    this.parameter = config.queryParam
  }

  get parameter(): string {
    return this.innerQueryParam
  }

  set parameter(parameter) {
    this.innerQueryParam = parameter

    const paramValue = new URLSearchParams(window.location.search).get(
      this.innerQueryParam,
    )
    super.value = paramValue
  }

  get value(): any {
    return super.value
  }
}


/**
 * Builds the per-type factory the VariableRepository resolves and calls.
 * Dependencies are closed over once, at activation - the instances receive
 * them as plain properties, no container involved.
 */
export function createQueryVariableFactory(deps: VariableDependencies) {
  return (name: string, config: IQueryVariableConfig): QueryVariable => {
    const variable = new QueryVariable()
    variable.eventBus = deps.eventBus
    variable.pageContextService = deps.pageContextService
    variable.init(name, config)
    return variable
  }
}

export { QueryVariable, symbol }
