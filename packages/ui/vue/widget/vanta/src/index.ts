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
import Icon from './assets/image.svg'
import VantaWidget from './VantaWidget.vue'
import VantaWidgetSettings from './VantaWidgetSettings.vue'
import { container } from 'org.eclipse.daanse.board.app.lib.core'

const register = () => {
  console.log('registering Vanta widget', container)
  container.get<WidgetRepository>(identifier).registerWidget('VantaWidget', {
    component: VantaWidget,
    settingsComponent: VantaWidgetSettings,
    supportedDSTypes: [],
    icon: Icon,
    name: 'Vanta'
  })
}

register();

export { VantaWidget, VantaWidgetSettings }
