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
import {
  type VariableRepository,
  VARIABLE_REPOSITORY,
} from 'org.eclipse.daanse.board.app.lib.api.variable'
import {
  DATETIME_PICKER_VARIABLE,
  DateTimePickerVariableSymbol,
} from 'org.eclipse.daanse.board.app.lib.variables'
import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'
import Settings from './Settings.vue'

export function activate({ services }: ActivationContext) {
  services
    .getRequired<VariableRepository>(VARIABLE_REPOSITORY)
    .registerVariableType(DATETIME_PICKER_VARIABLE, {
      Variable: DateTimePickerVariableSymbol,
      Settings: Settings,
    })
}

export function deactivate({ services }: ActivationContext) {
  services
    .getRequired<VariableRepository>(VARIABLE_REPOSITORY)
    .unregisterVariableType(DATETIME_PICKER_VARIABLE)
}
