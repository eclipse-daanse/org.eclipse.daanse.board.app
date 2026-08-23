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

import { component } from '@eclipse-daanse/tsm'
//@ts-ignore
import Icon from './assets/progress.svg'
import PageWidget from './PageWidget.vue'
import PageWidgetSettings from './PageWidgetSettings.vue'
import { type PageI } from './interface/PageI'
import type { WidgetProvider } from 'org.eclipse.daanse.board.app.lib.repository.widget'

/*
 * Literal on purpose (tsm#21): the build-time component scan cannot yet read
 * a constant behind a bare import, so the contract's WIDGET_SERVICE_ID from
 * lib.repository.widget cannot appear in @component directly. The type
 * annotation ties this literal to the same contract; the value must match.
 */
const WIDGET_SERVICE: typeof WIDGET_SERVICE_ID = 'daanse.widget'

const WIDGET_TYPE = 'PageWidget'

/**
 * Delayed component - no lifecycle methods, nothing to do until the palette
 * resolves it. The nested-board machinery it renders (wrapper, layout and
 * page stores) comes through the shared workspace libraries.
 */
@component({
  service: [WIDGET_SERVICE],
  properties: { 'widget.type': WIDGET_TYPE },
})
export class PageWidgetProvider implements WidgetProvider {
  readonly type = WIDGET_TYPE
  readonly component = PageWidget
  readonly settingsComponent = PageWidgetSettings
  readonly supportedDSTypes = []
  readonly icon = Icon
  readonly name = 'Page'
}

export { type PageI }
