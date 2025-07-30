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
import Icon from './assets/icon.svg'
import IconWidget from './IconWidget.vue'
import IconWidgetSettings from './IconWidgetSettings.vue'
import { container } from 'org.eclipse.daanse.board.app.lib.core'

interface Variable<T> {
  name: string
  value: T
}

interface IIconSettings {
  currentIcon: string | Variable<string>
  iconColor: string | Variable<string>
  iconSize: number | Variable<number>
  isIconFilled: boolean | Variable<boolean>
  strokeWeight: number | Variable<number>
  opticSize: number | Variable<number>
  grade: number | Variable<number>
}

const register = () => {
  console.log('registering Icon widget', container)
  container.get<WidgetRepository>(identifier).registerWidget('IconWidget', {
    component: IconWidget,
    settingsComponent: IconWidgetSettings,
    supportedDSTypes: [],
    icon: Icon,
    name: 'Icon'
  })
}

register();

export { IconWidget, IconWidgetSettings }
export type { IIconSettings }
