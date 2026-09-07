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

import { EVENT_REGISTRY_ID } from 'org.eclipse.daanse.board.app.lib.api.events'
import { component, inject, activate, deactivate } from '@eclipse-daanse/tsm'
import Icon from './assets/sample.svg'
import SampleWidget from './SampleWidget.vue'
import { SampleWidgetEvents } from './events/SampleWidgetEvents'
import type { EventRegistry } from 'org.eclipse.daanse.board.app.lib.api.events'
import { WIDGET_SERVICE_ID, type WidgetProvider } from 'org.eclipse.daanse.board.app.lib.api.widget'

const WIDGET_TYPE = 'SampleWidget'

@component({
  service: [WIDGET_SERVICE_ID],
  properties: { 'widget.type': WIDGET_TYPE },
})
export class SampleWidgetProvider implements WidgetProvider {
  readonly type = WIDGET_TYPE
  readonly component = SampleWidget
  /*
   * No settings at all: this widget takes its content from a datasource and
   * has nothing of its own to configure. The empty form it used to declare
   * put an empty section in the dialog and suggested otherwise.
   */
  readonly supportedDSTypes = ['csv']
  readonly icon = Icon
  readonly name = 'Sample'

  constructor(
    @inject(EVENT_REGISTRY_ID) private readonly events: EventRegistry,
  ) {}

  @activate()
  register(): void {
    this.events.registerWidget(WIDGET_TYPE, SampleWidgetEvents)
  }

  @deactivate()
  unregister(): void {
    this.events.unregisterWidget(WIDGET_TYPE)
  }
}

export { SampleWidget }
