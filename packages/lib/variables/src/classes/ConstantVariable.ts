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
import { type IConstantVariableConfig, RefreshType } from '..'
import type { VariableDependencies } from './Variable'
import { Serializable } from '../interface/JSONSerializableI'

const TYPE = 'ConstantVariable'
const symbol = Symbol.for(TYPE)



class ConstantVariable extends Variable implements Serializable {
  public type = TYPE

  init(name: string, config: IConstantVariableConfig) {
    super.init(name, config);
    this.value = config.value;
  }

  update(config: IConstantVariableConfig): void {
    super.update(config);
    this.value = config.value
  }

  get value(): string {
    return super.value
  }

  set value(value) {
    super.value = value
  }

  serialize(): any {
    const ret = super.serialize();
    ret.value = this.value;
    ret.type = this.type;
    return ret;
  }
}




/**
 * Builds the per-type factory the VariableRepository resolves and calls.
 * Dependencies are closed over once, at activation - the instances receive
 * them as plain properties, no container involved.
 */
export function createConstantVariableFactory(deps: VariableDependencies) {
  return (name: string, config: IConstantVariableConfig): ConstantVariable => {
    const variable = new ConstantVariable()
    variable.eventBus = deps.eventBus
    variable.pageContextService = deps.pageContextService
    variable.init(name, config)
    return variable
  }
}

export { ConstantVariable, symbol, TYPE as CONSTANT_VARIABLE }
