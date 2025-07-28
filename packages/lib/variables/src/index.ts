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
import { ComputedVariable, symbol as ComputedVariableSymbol,COMPUTED_VARIABLE } from './classes/ComputedVariable'
import { ConstantVariable, init as initConstant, symbol as ConstantVariableSymbol,CONSTANT_VARIABLE } from './classes/ConstantVariable'
import { QueryVariable, init as initQuery, symbol as QueryVariableSymbol } from './classes/QueryVariable'
import { RequestVariable, init as initRequest, symbol as RequestVariableSymbol } from './classes/RequestVariable'
import { TimeVariable, init as initTime, symbol as TimeVariableSymbol } from './classes/TimeVariable'
import { UsesComputedVariable } from './utils/UsesComputedVariable'
import { ComputedStoreParameter } from './classes/ComputedStoreParameter'
import { Variable } from './classes/Variable'

enum SourceType {
  Constant = 'Constant',
  QueryParameter = 'Query parameter',
  SystemProperties = 'System properties',
  EnvironmentVariables = 'Environment variables',
  BrowserProperties = 'Browser properties',
  Time = 'Time',
  Expression = 'Expression',
  AsyncParameters = 'Async parameters',
  ComputedString = 'Computed String',
}

enum VariableEvents {
  VariableUpdated = 'VariableUpdated',
  VariableDeleted = 'VariableDeleted',
  VariableCreated = 'VariableCreated',
  VariablesCleared = 'VariablesCleared',
  VariableRemoved = 'VariableRemoved',
}

enum RefreshType {
  None = 'None',
  Reactive = 'Reactive',
  Interval = 'Interval',
  Trigger = 'Trigger',
}

interface IVariableConfig {
  description: string
  refreshType: RefreshType
  refreshInterval?: number
  refreshTrigger?: string
  type: string
}

interface IQueryVariableConfig extends IVariableConfig {
  queryParam: string
  description: string
}

interface IComputedVariableConfig extends IVariableConfig {
  expression: string
}

interface IConstantVariableConfig extends IVariableConfig {
  value: any
}

interface IRequestVaribleConfig extends IVariableConfig {
  request: string
}

type INewVariableConfig =
  | IConstantVariableConfig
  | IComputedVariableConfig
  | IQueryVariableConfig
  | IRequestVaribleConfig
  | IVariableConfig

const init = (container: Container) => {
}

export {
  init,
  ComputedVariable,
  ConstantVariable,
  QueryVariable,
  RequestVariable,
  TimeVariable,
  SourceType,
  VariableEvents,
  RefreshType,
  IVariableConfig,
  IQueryVariableConfig,
  IComputedVariableConfig,
  IConstantVariableConfig,
  IRequestVaribleConfig,
  INewVariableConfig,
  UsesComputedVariable,
  ComputedVariableSymbol,
  ConstantVariableSymbol,
  QueryVariableSymbol,
  RequestVariableSymbol,
  TimeVariableSymbol,
  ComputedStoreParameter,
  type Variable,
  COMPUTED_VARIABLE,
  CONSTANT_VARIABLE
}
