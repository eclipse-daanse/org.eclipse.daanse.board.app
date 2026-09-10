/**
Copyright (c) 2025 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena
*/

import {
  type LayoutI,
  type LayoutRepositoryI,
  LAYOUT_REPOSITORY,
} from 'org.eclipse.daanse.board.app.lib.api.layout.page'
import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'
import View from './comonents/View.vue'
import Edit from './comonents/Edit.vue'
import { GridSettingsImpl } from './gen/GridSettingsImpl'
import { GridsettingsPackage } from './gen/GridsettingsPackage'
/* The form for these settings, written as a model beside the Ecore. */
import gridSettingsFormXmi from '../model/ui.xmi?raw'
/* The form for the columns it contains. */
import gridColumnsFormXmi from '../model/ui-columns.xmi?raw'

/*
 * Building the EPackage on load: until it exists the class literals are
 * null, an instance cannot say what it is, and nothing can render it from
 * the model.
 */
void GridsettingsPackage.eINSTANCE

const LAYOUT_ID = 'org.eclipse.daanse.board.app.ui.vue.layouts.grid'

export function activate({ services }: ActivationContext) {
  services.getRequired<LayoutRepositoryI>(LAYOUT_REPOSITORY).addLayout({
    id: LAYOUT_ID,
    name: 'GridLayout',
    description: 'responsive grid-based layout',
    component: View,
    editor: Edit,
    /*
     * No hand-written panel: a row height and five column counts are
     * fields, so there is nothing to keep beside the model and no second
     * place for the two to disagree.
     */
    settingsForm: {
      xmi: gridSettingsFormXmi,
      uri: '/grid-settings.ui.xmi',
      ePackage: () => GridsettingsPackage.eINSTANCE,
      create: () => new GridSettingsImpl(),
      entryForms: [{ xmi: gridColumnsFormXmi, uri: '/grid-columns.ui.xmi' }],
    },
  } as LayoutI)
}

export function deactivate({ services }: ActivationContext) {
  services
    .getRequired<LayoutRepositoryI>(LAYOUT_REPOSITORY)
    .removeLayout(LAYOUT_ID)
}
