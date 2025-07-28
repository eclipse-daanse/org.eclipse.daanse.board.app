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
import { injectFromBase, Factory } from 'inversify'
import { container } from 'org.eclipse.daanse.board.app.lib.core'

const symbol = Symbol.for('TimeVariable')

@injectFromBase({
  extendProperties: true,
})
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

if (!container.isBound(TimeVariable)) {
  container.bind<TimeVariable>(TimeVariable).toSelf().inTransientScope()
}

if (!container.isBound(symbol)) {
  container.bind<Factory<TimeVariable>>(symbol).toFactory(() => {
    return (name: string, config: IVariableConfig) => {
      const variable = container.get<TimeVariable>(TimeVariable)
      variable.init(name, config as IVariableConfig)
      return variable
    }
  })
}

export { TimeVariable, symbol }
