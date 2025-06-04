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
import MermaidWidget from './MermaidWidget.vue'
import MermaidWidgetSettings from './MermaidWidgetSettings.vue'
import { Container } from 'inversify'


interface IMermaidWidgetSettings {
  theme: string;
  value: string;
}

const init = (container: Container) => {
  const widgetRepository = container.get<WidgetRepository>(identifier)

  register(widgetRepository);
}

const register = (widgetRepository: WidgetRepository) => {
  widgetRepository.registerWidget('MermaidWidget', {
    component: MermaidWidget,
    settingsComponent: MermaidWidgetSettings,
    supportedDSTypes: [],
    icon: Icon,
    name: 'Mermaid'
  })
}

export { MermaidWidget, MermaidWidgetSettings, init }
export type { IMermaidWidgetSettings }
