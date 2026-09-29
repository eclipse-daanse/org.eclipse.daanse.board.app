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
import { type IRequestVaribleConfig } from '..'
import type { VariableDependencies } from './Variable'


const symbol = Symbol.for('RequestVariable')


class RequestVariable extends Variable {
  private innerRequest: string = ''
  public type = 'request'
  public time = 0

  init(name: string, config: IRequestVaribleConfig) {
    super.init(name, config)
    this.request = config.request

    super.onInterval = () => {
      this.request = config.request
    }
  }

  get request(): string {
    return this.innerRequest
  }

  set request(request) {
    this.innerRequest = request

    fetch(this.innerRequest)
      .then(response => response.json())
      .then(data => {
        super.value = data
      })
  }

  get value(): any {
    return JSON.stringify(super.value)
  }

  set value(value) {}
}


/**
 * Builds the per-type factory the VariableRepository resolves and calls.
 * Dependencies are closed over once, at activation - the instances receive
 * them as plain properties, no container involved.
 */
export function createRequestVariableFactory(deps: VariableDependencies) {
  return (name: string, config: IRequestVaribleConfig): RequestVariable => {
    const variable = new RequestVariable()
    variable.eventBus = deps.eventBus
    variable.pageContextService = deps.pageContextService
    variable.init(name, config)
    return variable
  }
}

export { RequestVariable, symbol }
