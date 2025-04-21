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
import Icon from './assets/rich_text.svg'
import RichTextWidget from './RichTextWidget.vue'
import RichTextWidgetSettings from './RichTextWidgetSettings.vue'
import { Container } from 'inversify'

const init = (container: Container) => {
  const widgetRepository = container.get<WidgetRepository>(identifier)

  register(widgetRepository);
}

interface IRichTextEditorSettings {
  editor: string
}

const register = (widgetRepository: WidgetRepository) => {
  widgetRepository.registerWidget('RichTextWidget', {
    component: RichTextWidget,
    settingsComponent: RichTextWidgetSettings,
    supportedDSTypes: [],
    icon: Icon,
  })
}

export { RichTextWidget, RichTextWidgetSettings, init }

export type { IRichTextEditorSettings }
