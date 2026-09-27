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

import { component, inject, activate, deactivate } from '@eclipse-daanse/tsm/decorators'
import Icon from './assets/sample.svg'
import FiltersWidget from './FiltersWidget.vue';
import FiltersWidgetSettings from './FiltersWidgetSettings.vue';
import { FiltersWidgetEvents } from './events/FiltersWidgetEvents'
import type { EventRegistry } from 'org.eclipse.daanse.board.app.lib.events'
import type { WidgetProvider } from 'org.eclipse.daanse.board.app.lib.repository.widget'

/*
 * Literal on purpose: the tsm plugin derives the manifest's provides at
 * build time and cannot evaluate an imported constant. Must match
 * WIDGET_SERVICE_ID in lib.repository.widget.
 */
const WIDGET_SERVICE = 'daanse.widget'

const WIDGET_TYPE = 'FiltersWidget'

/**
 * Declared component: the loader registers it under WIDGET_SERVICE, the
 * WidgetRepository tracks it into the palette, unloading withdraws it.
 */
@component({
  service: [WIDGET_SERVICE],
  properties: { 'widget.type': WIDGET_TYPE },
})
export class FiltersWidgetProvider implements WidgetProvider {
  readonly type = WIDGET_TYPE
  readonly component = FiltersWidget
  readonly settingsComponent = FiltersWidgetSettings
  readonly supportedDSTypes = ['xmla']
  readonly icon = Icon
  readonly name = 'XMLA Filters'

  constructor(
    @inject('EventRegistry') private readonly events: EventRegistry,
  ) {}

  @activate()
  register(): void {
    this.events.registerWidget(WIDGET_TYPE, FiltersWidgetEvents)
  }

  @deactivate()
  unregister(): void {
    this.events.unregisterWidget(WIDGET_TYPE)
  }
}

export { FiltersWidget, FiltersWidgetSettings }
