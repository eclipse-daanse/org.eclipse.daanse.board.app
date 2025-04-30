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
import { type IVariableConfig } from '..'
import { Container } from 'inversify'


const symbol = Symbol.for('TimeVariable')

const init = (container: Container) => {
  container.bind(symbol).toConstantValue(TimeVariable);
}

class TimeVariable extends Variable {
  public type = 'time'

  constructor(
    name: string,
    container: Container,
    config: IVariableConfig,
  ) {
    super(name, container, config)
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

export { TimeVariable, symbol, init }
