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
import { container } from 'org.eclipse.daanse.board.app.lib.core'
import { VariableComplexStringWrapper, VariableWrapper } from 'org.eclipse.daanse.board.app.ui.vue.composables'

interface IMermaidWidgetSettings {
  theme: VariableWrapper<string>
  value: VariableComplexStringWrapper
}

import { EventRegistry, EVENT_REGISTRY } from 'org.eclipse.daanse.board.app.lib.events'
import { MermaidWidgetEvents } from './events/MermaidWidgetEvents'

const register = () => {
  console.log('registering Mermaid widget', container)
  container.get<WidgetRepository>(identifier).registerWidget('MermaidWidget', {
    component: MermaidWidget,
    settingsComponent: MermaidWidgetSettings,
    supportedDSTypes: [],
    icon: Icon,
    name: 'Mermaid'
  })

  const eventRegistry = container.get<EventRegistry>(EVENT_REGISTRY)
  eventRegistry.registerWidget('MermaidWidget', MermaidWidgetEvents)
}

register();

export { MermaidWidget, MermaidWidgetSettings }
export type { IMermaidWidgetSettings }
