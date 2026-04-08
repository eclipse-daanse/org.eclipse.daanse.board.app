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
import ImageWidget from './ImageWidget.vue'
import ImageWidgetSettings from './ImageWidgetSettings.vue'
import { container } from 'org.eclipse.daanse.board.app.lib.core'
import { EventRegistry, EVENT_REGISTRY } from 'org.eclipse.daanse.board.app.lib.events'
import { ImageWidgetEvents } from './events/ImageWidgetEvents'

interface IImageSettings {
  imagesSettings: GallerySettings
  images: ImageGalleryItem[]
}

interface ImageGalleryItem {
  id: string
  url: string
}

interface GallerySettings {
  fit: string
  diashowInterval: number
}

const register = () => {
  console.log('registering image widget')
  const widgetRepository = container.get<WidgetRepository>(identifier)
  const eventRegistry = container.get<EventRegistry>(EVENT_REGISTRY)

  widgetRepository.registerWidget('ImageWidget', {
    component: ImageWidget,
    settingsComponent: ImageWidgetSettings,
    supportedDSTypes: [],
    icon: Icon,
    name: 'Image'
  })

  // Register widget events
  eventRegistry.registerWidget('ImageWidget', ImageWidgetEvents)
}

register();

export { ImageWidget, ImageWidgetSettings }
export type { IImageSettings }
