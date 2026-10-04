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
import { DateTimePickerVariableSettingsImpl } from './gen/DateTimePickerVariableSettingsImpl'
import { DateTimePickerVariableSettingsPackage } from './gen/DateTimePickerVariableSettingsPackage'
import settingsFormXmi from '../model/ui.xmi?raw'

/*
 * Touching eINSTANCE is what builds the EPackage: until then the class
 * literals are null and an instance cannot say what it is. EMF expects the
 * package to register itself when its code is loaded, and for a bundle
 * that moment is here.
 */
void DateTimePickerVariableSettingsPackage.eINSTANCE

export function activate({ services }: ActivationContext) {
  services
    .getRequired<VariableRepository>(VARIABLE_REPOSITORY)
    .registerVariableType(DATETIME_PICKER_VARIABLE, {
      Variable: DateTimePickerVariableSymbol,
      /*
       * The form is a model, not a template: the fields come from the
       * Ecore beside this, so there is one description of what this type
       * needs rather than a class and a form that can drift apart.
       */
      settingsForm: {
        xmi: settingsFormXmi,
        uri: '/timepicker-variable-settings.ui.xmi',
        ePackage: () => DateTimePickerVariableSettingsPackage.eINSTANCE,
        create: () => new DateTimePickerVariableSettingsImpl(),
      },
    })
}

export function deactivate({ services }: ActivationContext) {
  services
    .getRequired<VariableRepository>(VARIABLE_REPOSITORY)
    .unregisterVariableType(DATETIME_PICKER_VARIABLE)
}

export { DateTimePickerVariableSettingsImpl, DateTimePickerVariableSettingsPackage, settingsFormXmi }
