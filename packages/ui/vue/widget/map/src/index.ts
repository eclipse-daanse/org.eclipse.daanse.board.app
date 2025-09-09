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
import Icon from './assets/progress.svg'
import MapsWidget from './MapsWidget.vue'
import MapsWidgetSettings from './MapsWidgetSettings.vue'
import { container } from 'org.eclipse.daanse.board.app.lib.core'
import { useDataPointRegistry } from './composables/datapointRegistry'
import TLCDataLabelRendererDescription from './parts/dataLabelRenderer/TLCDataLabelRendererDescription'
import ValueUnitDataLabelRendererDescription from './parts/dataLabelRenderer/ValueUnitDataLabelRendererDescription'

const register = () => {
  console.log('registering Map widget', container)
  const widgetRepository = container.get<WidgetRepository>(identifier)
  useDataPointRegistry().registerDataPointRenderer(new TLCDataLabelRendererDescription())
  useDataPointRegistry().registerDataPointRenderer(new ValueUnitDataLabelRendererDescription())
  widgetRepository.registerWidget('MapWidget', {
    component: MapsWidget,
    settingsComponent: MapsWidgetSettings,
    supportedDSTypes: ['ogcsta','OGC Composer'],
    icon: Icon,
    name: 'Map'
  })
}

register();

export { MapsWidget, MapsWidgetSettings }
