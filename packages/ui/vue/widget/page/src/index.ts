/**
Copyright (c) 2025 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena
*/

import type { Container } from 'inversify'

import { type WidgetRepository, identifier } from 'org.eclipse.daanse.board.app.lib.repository.widget'
//@ts-ignore
import Icon from './assets/progress.svg'
import PageWidget from './PageWidget.vue'
import PageWidgetSettings from './PageWidgetSettings.vue'
import {type PageI} from './interface/PageI'

const init = (container: Container) => {
  const widgetRepository = container.get<WidgetRepository>(identifier)


  const register = (widgetRepository: WidgetRepository) => {
    widgetRepository.registerWidget('PageWidget', {
      component: PageWidget,
      settingsComponent: PageWidgetSettings,
      supportedDSTypes: [],
      icon: Icon,
      name:'Page'
    })
  }
  register(widgetRepository);

}

export {
  init,
  type PageI
}
