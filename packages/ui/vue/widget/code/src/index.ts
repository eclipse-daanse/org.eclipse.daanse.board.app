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
import CodeWidget from './CodeWidget.vue'
import CodeWidgetSettings from './CodeWidgetSettings.vue'
import { Container } from 'inversify'

const init = (container: Container) => {
  const widgetRepository = container.get<WidgetRepository>(identifier)

  register(widgetRepository);
}

interface ICodeSettings {
  code: string;
  theme: string;
  language: string;
}

const register = (widgetRepository: WidgetRepository) => {
  widgetRepository.registerWidget('CodeWidget', {
    component: CodeWidget,
    settingsComponent: CodeWidgetSettings,
    supportedDSTypes: [],
    icon: Icon,
    name: 'Code'
  })
}

export { CodeWidget, CodeWidgetSettings, init }

export type { ICodeSettings }
