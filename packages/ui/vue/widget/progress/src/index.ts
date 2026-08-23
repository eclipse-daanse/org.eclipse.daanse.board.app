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

import { EVENT_ACTIONS_REGISTRY_ID, EVENT_REGISTRY_ID } from 'org.eclipse.daanse.board.app.lib.api.events'
import { component, inject, activate, deactivate } from '@eclipse-daanse/tsm'
import ProgressWidget from './ProgressWidget.vue'
import ProgressWidgetSettings from './ProgressWidgetSettings.vue'
import Icon from './assets/progress.svg'
import { WIDGET_SERVICE_ID, type WidgetProvider } from 'org.eclipse.daanse.board.app.lib.api.widget'

/*
 * Literal on purpose (tsm#21): the build-time component scan cannot yet read
 * a constant behind a bare import, so the contract's WIDGET_SERVICE_ID from
 * lib.repository.widget cannot appear in @component directly. The type
 * annotation ties this literal to the same contract; the value must match.
 */
const WIDGET_SERVICE: typeof WIDGET_SERVICE_ID = 'daanse.widget'
import type { EventRegistry, EventActionsRegistry } from 'org.eclipse.daanse.board.app.lib.api.events'
import { ProgressWidgetEvents } from './events/ProgressWidgetEvents'
import { ProgressWidgetInterface } from './api/ProgressWidgetInterface'

interface IProgressSettings {
  progress: string
  fillColor: string
  gradientColor?: string
  backgroundColor: string
  isGradient: boolean
  isVertical: boolean
  rotation: number
  min?: number
  max?: number
  barThickness?: string
  borderRadius?: string
  valueAlign?: 'left' | 'center' | 'right'
  valueJustify?: 'top' | 'center' | 'bottom'
  textColor?: string
}

const WIDGET_TYPE = 'ProgressWidget'

/**
 * The widget as a declared component: the loader registers it under
 * WIDGET_SERVICE_ID, the WidgetRepository tracks that registration into the
 * palette, and unloading the bundle withdraws it - nobody calls
 * registerWidget or unregisterWidget for this module anymore.
 *
 * Immediate (it has an @activate method), because the event and action
 * registrations must exist whether or not the palette ever resolves the
 * provider.
 */
@component({
  service: [WIDGET_SERVICE],
  properties: { 'widget.type': WIDGET_TYPE },
})
export class ProgressWidgetProvider implements WidgetProvider {
  readonly type = WIDGET_TYPE
  readonly name = 'Progress'
  readonly icon = Icon
  readonly supportedDSTypes: string[] = []
  readonly component = ProgressWidget
  readonly settingsComponent = ProgressWidgetSettings

  constructor(
    @inject(EVENT_REGISTRY_ID) private readonly events: EventRegistry,
    @inject(EVENT_ACTIONS_REGISTRY_ID) private readonly actions: EventActionsRegistry,
  ) {}

  @activate()
  register(): void {
    this.events.registerWidget(WIDGET_TYPE, ProgressWidgetEvents)
    this.actions.registerWidgetType(WIDGET_TYPE, ProgressWidgetInterface, 'widget')
  }

  @deactivate()
  unregister(): void {
    this.events.unregisterWidget(WIDGET_TYPE)
    this.actions.unregisterWidgetType(WIDGET_TYPE)
  }
}

export { ProgressWidget, ProgressWidgetSettings }
export type { IProgressSettings }
