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

import {  injectable } from 'inversify'
export interface UsesComputedVariableI {
}

@injectable()
export class UsesComputedVariable implements UsesComputedVariableI {
  protected updateCb: () => void = () => {}

  //@inject(factoryComputedStoreParameter)
  //private readonly computedParameter!: (expression: string,
  //                    refreshCb: ()=>void)=>ComputedStoreParameter
  constructor() {
    console.log("_computedParameter")
  }

  protected setUpdateCb(cb: () => void) {
    this.updateCb = cb
  }

  initVariable(expression: string): void  {
    /*const variable =  this.computedParameter(
      expression,
      () => {
        this.updateCb()
      },
    )
    return variable*/
  }
}
