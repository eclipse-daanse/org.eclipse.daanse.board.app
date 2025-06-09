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
import MarkdownWidget from './MarkdownWidget.vue'
import MarkdownWidgetSettings from './MarkdownWidgetSettings.vue'
import { Container } from 'inversify'


interface IMarkdownWidgetSettings {
  value: string;
}

const init = (container: Container) => {
  const widgetRepository = container.get<WidgetRepository>(identifier)

  register(widgetRepository);
}

const register = (widgetRepository: WidgetRepository) => {
  widgetRepository.registerWidget('MarkdownWidget', {
    component: MarkdownWidget,
    settingsComponent: MarkdownWidgetSettings,
    supportedDSTypes: [],
    icon: Icon,
    name: 'Markdown'
  })
}

export { MarkdownWidget, MarkdownWidgetSettings, init }
export type { IMarkdownWidgetSettings }
