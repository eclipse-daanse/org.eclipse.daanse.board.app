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

import { type WidgetRepository, identifier } from 'org.eclipse.daanse.board.app.lib.repository.widget'
import Icon from './assets/text.svg'
import TextWidget from './TextWidget.vue'
import TextWidgetSettings from './TextWidgetSettings.vue'
import { container } from 'org.eclipse.daanse.board.app.lib.core'
import { VariableComplexStringWrapper, VariableWrapper } from 'org.eclipse.daanse.board.app.ui.vue.composables'

interface ITextSettings {
  text: VariableComplexStringWrapper
  fontSize: VariableWrapper<number>
  fontColor: VariableWrapper<string>
  fontWeight: VariableWrapper<string>
  fontStyle: VariableWrapper<string>
  textDecoration: VariableWrapper<string>
  horizontalAlign: VariableWrapper<string>
  verticalAlign: VariableWrapper<string>
}

const register = () => {
  console.log('registering Text widget', container)
  container.get<WidgetRepository>(identifier).registerWidget('TextWidget', {
    component: TextWidget,
    settingsComponent: TextWidgetSettings,
    supportedDSTypes: [],
    icon: Icon,
    name: 'Text'
  })
}

register();

export { TextWidget, TextWidgetSettings }
export type { ITextSettings }
