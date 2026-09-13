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
  CONSTANT_VARIABLE,
  ConstantVariableSymbol,
} from 'org.eclipse.daanse.board.app.lib.variables'
import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'
import { ConstantVariableSettingsImpl } from './gen/ConstantVariableSettingsImpl'
import { ConstantVariableSettingsPackage } from './gen/ConstantVariableSettingsPackage'
import settingsFormXmi from '../model/ui.xmi?raw'

/*
 * Touching eINSTANCE is what builds the EPackage: until then the class
 * literals are null and an instance cannot say what it is. EMF expects the
 * package to register itself when its code is loaded, and for a bundle
 * that moment is here.
 */
void ConstantVariableSettingsPackage.eINSTANCE

export function activate({ services }: ActivationContext) {
  services
    .getRequired<VariableRepository>(VARIABLE_REPOSITORY)
    .registerVariableType(CONSTANT_VARIABLE, {
      Variable: ConstantVariableSymbol,
      /*
       * The form is a model, not a template: the fields come from the
       * Ecore beside this, so there is one description of what this type
       * needs rather than a class and a form that can drift apart.
       */
      settingsForm: {
        xmi: settingsFormXmi,
        uri: '/constant-variable-settings.ui.xmi',
        ePackage: () => ConstantVariableSettingsPackage.eINSTANCE,
        create: () => new ConstantVariableSettingsImpl(),
      },
    })
}

export function deactivate({ services }: ActivationContext) {
  services
    .getRequired<VariableRepository>(VARIABLE_REPOSITORY)
    .unregisterVariableType(CONSTANT_VARIABLE)
}

export { ConstantVariableSettingsImpl, ConstantVariableSettingsPackage, settingsFormXmi }
