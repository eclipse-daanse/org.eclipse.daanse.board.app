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
import Icon from './assets/icon.svg'
import IconWidget from './IconWidget.vue'
import IconWidgetSettings from './IconWidgetSettings.vue'
import { IconWidgetEvents } from './events/IconWidgetEvents'
import { VariableWrapper } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import type { EventRegistry } from 'org.eclipse.daanse.board.app.lib.events'
import type { WidgetProvider } from 'org.eclipse.daanse.board.app.lib.repository.widget'

interface IIconSettings {
  currentIcon: string;
  iconColor: string | VariableWrapper<string>;
  iconSize: number;
  isIconFilled: boolean;
  strokeWeight: number;
  opticSize: number;
  grade: number;
}

/*
 * Literal on purpose: the tsm plugin derives the manifest's provides at
 * build time and cannot evaluate an imported constant. Must match
 * WIDGET_SERVICE_ID in lib.repository.widget.
 */
const WIDGET_SERVICE = 'daanse.widget'

const WIDGET_TYPE = 'IconWidget'

/**
 * Declared component: the loader registers it under WIDGET_SERVICE, the
 * WidgetRepository tracks it into the palette, unloading withdraws it.
 */
@component({
  service: [WIDGET_SERVICE],
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
    @inject('EventRegistry') private readonly events: EventRegistry,
  ) {}

  @activate()
  register(): void {
    this.events.registerWidget(WIDGET_TYPE, IconWidgetEvents)
  }

  @deactivate()
  unregister(): void {
    this.events.unregisterWidget(WIDGET_TYPE)
  }
}

export { IconWidget, IconWidgetSettings }
export type { IIconSettings }
