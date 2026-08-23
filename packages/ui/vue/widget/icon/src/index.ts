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
import { initTsmRuntime } from '@eclipse-daanse/tsm'
import Icon from './assets/icon.svg'
import IconWidget from './IconWidget.vue'
import IconWidgetSettings from './IconWidgetSettings.vue'
import { IconWidgetEvents } from './events/IconWidgetEvents'
import { VariableWrapper } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import type { EventRegistry } from 'org.eclipse.daanse.board.app.lib.api.events'
import { WIDGET_SERVICE_ID, type WidgetProvider } from 'org.eclipse.daanse.board.app.lib.api.widget'

interface IIconSettings {
  currentIcon: string;
  iconColor: string | VariableWrapper<string>;
  iconSize: number;
  isIconFilled: boolean;
  strokeWeight: number;
  opticSize: number;
  grade: number;
}

const WIDGET_TYPE = 'IconWidget'

/**
 * Declared component: the loader registers it under WIDGET_SERVICE_ID, the
 * WidgetRepository tracks it into the palette, unloading withdraws it.
 */
@component({
  service: [WIDGET_SERVICE_ID],
  properties: { 'widget.type': WIDGET_TYPE },
})
export class IconWidgetProvider implements WidgetProvider {
  readonly type = WIDGET_TYPE
  readonly component = IconWidget
  readonly settingsComponent = IconWidgetSettings
  readonly supportedDSTypes = []
  readonly icon = Icon
  readonly name = 'Icon'

  constructor(
    @inject(EVENT_REGISTRY_ID) private readonly events: EventRegistry,
  ) {}

  @activate()
  register(): void {
    this.events.registerWidget(WIDGET_TYPE, IconWidgetEvents)

    /*
     * Publish this bundle's public API as a shared library: the map bundle
     * renders IconWidget inside its markers and must use THIS component
     * object, not a bundled copy. The listing is explicit on purpose - it is
     * the bundle's declared API surface, importing our own namespace would
     * be circular.
     */
    initTsmRuntime().register(
      'org.eclipse.daanse.board.app.ui.vue.widget.icon',
      { IconWidget, IconWidgetSettings },
      '0.0.1-next.1',
      'ui.vue.widget.icon',
    )
  }

  @deactivate()
  unregister(): void {
    this.events.unregisterWidget(WIDGET_TYPE)
  }
}

export { IconWidget, IconWidgetSettings }
export type { IIconSettings }
