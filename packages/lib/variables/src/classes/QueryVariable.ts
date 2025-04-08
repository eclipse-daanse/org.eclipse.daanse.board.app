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
import { type IQueryVariableConfig } from '..'

export class QueryVariable extends Variable {
  private innerQueryParam: string = ''
  public type = 'query'

  constructor(
    name: string,
    storage: VariableStorage,
    eventBus: TinyEmitter,
    config: IQueryVariableConfig,
  ) {
    console.log(config)
    super(name, storage, eventBus, config)
    this.parameter = config.queryParam
  }

  get parameter(): string {
    return this.innerQueryParam
  }

  set parameter(parameter) {
    this.innerQueryParam = parameter

    const paramValue = new URLSearchParams(window.location.search).get(
      this.innerQueryParam,
    )
    super.value = paramValue
  }

  get value(): any {
    return super.value
  }
}
