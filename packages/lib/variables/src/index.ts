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

import { ComputedVariable, symbol as ComputedVariableSymbol,COMPUTED_VARIABLE } from './classes/ComputedVariable'
import { ConstantVariable, symbol as ConstantVariableSymbol,CONSTANT_VARIABLE } from './classes/ConstantVariable'
import { QueryVariable, symbol as QueryVariableSymbol } from './classes/QueryVariable'
import { RequestVariable, symbol as RequestVariableSymbol } from './classes/RequestVariable'
import { TimeVariable, symbol as TimeVariableSymbol } from './classes/TimeVariable'
import { DateTimePickerVariable, symbol as DateTimePickerVariableSymbol, DATETIME_PICKER_VARIABLE, type IDateTimePickerVariableConfig } from './classes/DateTimePickerVariable'
import { UsesComputedVariable } from './utils/UsesComputedVariable'
import { ComputedStoreParameter } from './classes/ComputedStoreParameter'

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

interface IPageVariableConfig extends IVariableConfig {
  value: any
  accessMode: VariableAccessMode
  pageId: string
  scope: VariableScope
}

type INewVariableConfig =
  | IConstantVariableConfig
  | IComputedVariableConfig
  | IQueryVariableConfig
  | IRequestVaribleConfig
  | IPageVariableConfig
  | IVariableConfig


import { Variable, VariableScope, VariableAccessMode } from './classes/Variable'
import { VariableWrapper, VARIABLEWRAPPER } from './classes/VariableWrapper'

export {
  VariableWrapper,
  VARIABLEWRAPPER,
  ComputedVariable,
  ConstantVariable,
  QueryVariable,
  RequestVariable,
  TimeVariable,
  DateTimePickerVariable,
  Variable,
  VariableScope,
  VariableAccessMode,
  IPageVariableConfig,
  SourceType,
  VariableEvents,
  RefreshType,
  IVariableConfig,
  IQueryVariableConfig,
  IComputedVariableConfig,
  IConstantVariableConfig,
  IRequestVaribleConfig,
  IDateTimePickerVariableConfig,
  INewVariableConfig,
  UsesComputedVariable,
  ComputedVariableSymbol,
  ConstantVariableSymbol,
  QueryVariableSymbol,
  RequestVariableSymbol,
  TimeVariableSymbol,
  DateTimePickerVariableSymbol,
  ComputedStoreParameter,
  COMPUTED_VARIABLE,
  CONSTANT_VARIABLE,
  DATETIME_PICKER_VARIABLE
}

import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'
import type { TinyEmitter } from 'tiny-emitter'
import type { PageContextServiceI } from 'org.eclipse.daanse.board.app.lib.pagecontext.pagecontext_service'
import type { VariableRepository } from 'org.eclipse.daanse.board.app.lib.repository.variable'
import type { VariableDependencies } from './classes/Variable'
import { createConstantVariableFactory } from './classes/ConstantVariable'
import { createComputedVariableFactory } from './classes/ComputedVariable'
import { createQueryVariableFactory } from './classes/QueryVariable'
import { createRequestVariableFactory } from './classes/RequestVariable'
import { createTimeVariableFactory } from './classes/TimeVariable'
import { createDateTimePickerVariableFactory } from './classes/DateTimePickerVariable'
import { provideComputedStoreParameterFactory } from './utils/UsesComputedVariable'

/**
 * Registers the per-type variable factories under their type ids. The
 * VariableRepository resolves them through the symbols the variable type
 * packages hand in - Symbol.for(id), so the symbol's description is the id.
 *
 * This replaced import-time container.bind blocks in every class file: the
 * last load-bearing side-effect import of the application.
 */
export function activate({ services }: ActivationContext) {
  const deps: VariableDependencies = {
    eventBus: services.get<TinyEmitter>('TINY_EMITTER'),
    pageContextService: services.get<PageContextServiceI>('PageContext'),
  }

  services.register(CONSTANT_VARIABLE, createConstantVariableFactory(deps))
  services.register(COMPUTED_VARIABLE, createComputedVariableFactory(deps))
  services.register('QueryVariable', createQueryVariableFactory(deps))
  services.register('RequestVariable', createRequestVariableFactory(deps))
  services.register('TimeVariable', createTimeVariableFactory(deps))
  services.register(DATETIME_PICKER_VARIABLE, createDateTimePickerVariableFactory(deps))

  provideComputedStoreParameterFactory(() => {
    const parameter = new ComputedStoreParameter()
    parameter.eventBus = deps.eventBus
    parameter.storage = services.get<VariableRepository>('VariableRepository')
    return parameter
  })
}
