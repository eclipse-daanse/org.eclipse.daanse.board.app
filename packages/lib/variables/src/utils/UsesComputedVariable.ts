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

import { Container } from 'inversify'
import { ComputedStoreParameter } from '../classes/ComputedStoreParameter'

export class UsesComputedVariable {
  protected updateCb: () => void = () => {}

  constructor(private _container: Container) {}

  protected setUpdateCb(cb: () => void) {
    this.updateCb = cb
  }

  initVariable(expression: string): ComputedStoreParameter {
    const variable = new ComputedStoreParameter(
      this._container,
      expression,
      () => {
        this.updateCb()
      },
    )
    return variable
  }
}
