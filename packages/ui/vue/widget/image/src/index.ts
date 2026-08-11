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

import { type WidgetRepository, WIDGET_REPOSITORY } from 'org.eclipse.daanse.board.app.lib.repository.widget'
import Icon from './assets/image.svg'
import ImageWidget from './ImageWidget.vue'
import ImageWidgetSettings from './ImageWidgetSettings.vue'
import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'
import { EventRegistry, EVENT_REGISTRY_ID } from 'org.eclipse.daanse.board.app.lib.events'
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

export function activate({ services }: ActivationContext) {
  console.log('registering image widget')
  const widgetRepository = services.getRequired<WidgetRepository>(WIDGET_REPOSITORY)
  const eventRegistry = services.getRequired<EventRegistry>(EVENT_REGISTRY_ID)

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

export function deactivate({ services }: ActivationContext) {
  services.getRequired<WidgetRepository>(WIDGET_REPOSITORY).unregisterWidget('ImageWidget')
  services.getRequired<EventRegistry>(EVENT_REGISTRY_ID).unregisterWidget('ImageWidget')
}

export { ImageWidget, ImageWidgetSettings }
export type { IImageSettings }
