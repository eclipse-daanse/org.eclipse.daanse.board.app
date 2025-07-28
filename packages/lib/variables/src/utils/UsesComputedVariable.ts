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

import { container } from 'org.eclipse.daanse.board.app.lib.core'
import { ComputedStoreParameter } from '../classes/ComputedStoreParameter'

export class UsesComputedVariable {
  protected updateCb: () => void = () => {}

  constructor() {}

  protected setUpdateCb(cb: () => void) {
    this.updateCb = cb
  }

  initVariable(expression: string): ComputedStoreParameter {
    const computedStoreParameter = container.get<ComputedStoreParameter>(
      ComputedStoreParameter,
    )
    computedStoreParameter.init(expression,() => { this.updateCb() })
    return computedStoreParameter
  }
}
