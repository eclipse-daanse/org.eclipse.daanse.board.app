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

import { ComputedStoreParameter } from '../classes/ComputedStoreParameter'

let parameterFactory: (() => ComputedStoreParameter) | undefined

/** Called by lib.variables' activate - dependency injection at the module boundary. */
export function provideComputedStoreParameterFactory(factory: () => ComputedStoreParameter): void {
  parameterFactory = factory
}

function requireParameterFactory(): () => ComputedStoreParameter {
  if (!parameterFactory) {
    throw new Error('ComputedStoreParameter factory not provided - is lib.variables active?')
  }
  return parameterFactory
}

export class UsesComputedVariable {
  protected updateCb: () => void = () => {}

  constructor() {}

  protected setUpdateCb(cb: () => void) {
    this.updateCb = cb
  }

  initVariable(expression: string): ComputedStoreParameter {
    const computedStoreParameter = requireParameterFactory()()
    computedStoreParameter.init(expression, () => { this.updateCb() })
    return computedStoreParameter
  }
}
