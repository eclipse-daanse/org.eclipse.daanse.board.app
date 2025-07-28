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
import { injectFromBase, Factory } from 'inversify'
import { container } from 'org.eclipse.daanse.board.app.lib.core'

const symbol = Symbol.for('QueryVariable')

@injectFromBase({
  extendProperties: true,
})
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

if (!container.isBound(QueryVariable)) {
  container.bind<QueryVariable>(QueryVariable).toSelf().inTransientScope()
}

if (!container.isBound(symbol)) {
  container.bind<Factory<QueryVariable>>(symbol).toFactory(() => {
    return (name: string, config: IQueryVariableConfig) => {
      const variable = container.get<QueryVariable>(QueryVariable)
      variable.init(name, config as IQueryVariableConfig)
      return variable
    }
  })
}

export { QueryVariable, symbol }
