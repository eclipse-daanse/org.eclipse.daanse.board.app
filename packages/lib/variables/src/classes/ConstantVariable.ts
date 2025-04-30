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
import { type IConstantVariableConfig } from '..'
import { Container } from 'inversify'

const symbol = Symbol.for('Variable')

const init = (container: Container) => {
  container.bind(symbol).toConstantValue(ConstantVariable);
}

class ConstantVariable extends Variable {
  public type = 'constant'

  constructor(
    name: string,
    container: Container,
    config: IConstantVariableConfig,
  ) {
    super(name, container, config)
    this.value = config.value
  }

  get value(): string {
    return super.value
  }

  set value(value) {
    super.value = value
  }
}

export { ConstantVariable, symbol, init }
