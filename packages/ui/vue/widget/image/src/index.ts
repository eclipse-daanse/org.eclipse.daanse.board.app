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
import Icon from './assets/image.svg'
import ImageWidget from './ImageWidget.vue'
import ImageWidgetSettings from './ImageWidgetSettings.vue'
import { ImageWidgetEvents } from './events/ImageWidgetEvents'
import type { EventRegistry } from 'org.eclipse.daanse.board.app.lib.events'
import type { WidgetProvider } from 'org.eclipse.daanse.board.app.lib.repository.widget'

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

/*
 * Literal on purpose: the tsm plugin derives the manifest's provides at
 * build time and cannot evaluate an imported constant. Must match
 * WIDGET_SERVICE_ID in lib.repository.widget.
 */
const WIDGET_SERVICE = 'daanse.widget'

const WIDGET_TYPE = 'ImageWidget'

/**
 * Declared component: the loader registers it under WIDGET_SERVICE, the
 * WidgetRepository tracks it into the palette, unloading withdraws it.
 */
@component({
  service: [WIDGET_SERVICE],
  properties: { 'widget.type': WIDGET_TYPE },
})
export class ImageWidgetProvider implements WidgetProvider {
  readonly type = WIDGET_TYPE
  readonly component = ImageWidget
  readonly settingsComponent = ImageWidgetSettings
  readonly supportedDSTypes = []
  readonly icon = Icon
  readonly name = 'Image'

  constructor(
    @inject('EventRegistry') private readonly events: EventRegistry,
  ) {}

  @activate()
  register(): void {
    this.events.registerWidget(WIDGET_TYPE, ImageWidgetEvents)
  }

  @deactivate()
  unregister(): void {
    this.events.unregisterWidget(WIDGET_TYPE)
  }
}

export { ImageWidget, ImageWidgetSettings }
export type { IImageSettings }
