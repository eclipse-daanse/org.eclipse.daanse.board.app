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
import { VariableStorage } from '../storage/VariableStorage'
import { type TinyEmitter } from 'tiny-emitter'
import { type IRequestVaribleConfig } from '..'
import { Container } from 'inversify'

const symbol = Symbol.for('RequestVariable')

const init = (container: Container) => {
  container.bind(symbol).toConstantValue(RequestVariable);
}

class RequestVariable extends Variable {
  private innerRequest: string = ''
  public type = 'request'
  public time = 0

  constructor(
    name: string,
    container: Container,
    config: IRequestVaribleConfig,
  ) {
    super(name, container, config)
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

export { RequestVariable, symbol, init }
