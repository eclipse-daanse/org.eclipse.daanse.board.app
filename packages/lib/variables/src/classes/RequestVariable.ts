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
import { Factory, injectFromBase } from 'inversify'
import { container } from 'org.eclipse.daanse.board.app.lib.core'


const symbol = Symbol.for('RequestVariable')


@injectFromBase({
  extendProperties: true,
})
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

if (!container.isBound(RequestVariable)) {
  container.bind<RequestVariable>(RequestVariable).toSelf().inTransientScope()
}

if (!container.isBound(symbol)) {
  container.bind<Factory<RequestVariable>>(symbol).toFactory(() => {
    return (name: string, config: IRequestVaribleConfig) => {
      const variable = container.get<RequestVariable>(RequestVariable)
      variable.init(name, config as IRequestVaribleConfig)
      return variable
    }
  })
}

export { RequestVariable, symbol }
