/*********************************************************************
 * Copyright (c) 2026 Contributors to the Eclipse Foundation.
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

/**
 * Settings forms rendered from the model.
 *
 * The widget settings are already modelled: an Ecore file per package and
 * generated classes beside it. Since those classes are generated in emf
 * mode they are EObjects, which is what EMFTs' uimodel-composer renders
 * from - so a form no longer has to be written a second time by hand in a
 * Vue template that can drift from the model behind it.
 *
 * What this bundle adds is the wiring: stored settings become modelled
 * instances again, a form is derived from a class that has no UI model yet,
 * and the app's own controls render the fields.
 */
import SettingsForm from './SettingsForm.vue'
import SettingsListWidget from './SettingsListWidget.vue'
import SettingsObjectWidget from './SettingsObjectWidget.vue'
import SettingsFieldWidget from './SettingsFieldWidget.vue'

export { SettingsForm, SettingsListWidget, SettingsObjectWidget, SettingsFieldWidget }
export { adopt, asModel, isModelled } from './adopt'
export { formFor, kindOf, labelOf, type FieldKind } from './buildForm'
export { loadUIModel } from './loadUIModel'

/*
 * Labels in a UI model can be translation keys; this is how the
 * application hands in the translator that turns them into words.
 */
export { useLabelTranslator, retranslate } from './loadUIModel'
export { hasLabelKeys } from './translateLabels'
