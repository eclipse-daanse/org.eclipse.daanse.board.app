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
import MarkdownWidget from './MarkdownWidget.vue'
import MarkdownWidgetSettings from './MarkdownWidgetSettings.vue'
import { container } from 'org.eclipse.daanse.board.app.lib.core'

interface IMarkdownWidgetSettings {
  value: string;
}

const register = () => {
  console.log('registering Markdown widget', container)
  container.get<WidgetRepository>(identifier).registerWidget('MarkdownWidget', {
    component: MarkdownWidget,
    settingsComponent: MarkdownWidgetSettings,
    supportedDSTypes: [],
    icon: Icon,
    name: 'Markdown'
  })
}

register();

export { MarkdownWidget, MarkdownWidgetSettings }
export type { IMarkdownWidgetSettings }
