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

import { EVENT_REGISTRY_ID, EventsPackage } from 'org.eclipse.daanse.board.app.lib.api.events'
import { component, inject, activate, deactivate } from '@eclipse-daanse/tsm'
import Icon from './assets/image.svg'
import ImageWidget from './ImageWidget.vue'
import ImageWidgetSettings from './ImageWidgetSettings.vue'
import { ImageWidgetEvents } from './events/ImageWidgetEvents'
import { ImageSettingsImpl } from './gen/ImageSettingsImpl'
import { ImagesettingsPackage } from './gen/ImagesettingsPackage'
/* The form for these settings, written as a model beside the Ecore. */
import imageSettingsFormXmi from '../model/ui.xmi?raw'
/* The form for one picture of the gallery list. */
import imageItemFormXmi from '../model/ui-item.xmi?raw'
/* The form for the nested display options. */
import galleryFormXmi from '../model/ui-gallery.xmi?raw'

/*
 * Building the EPackage on load: until it exists the class literals are
 * null, an instance cannot say what it is, and nothing can render it from
 * the model.
 *
 * The events package first: the click payloads below inherit from Payload,
 * and a package cannot resolve a supertype that is not in the registry yet.
 */
EventsPackage.eINSTANCE
ImagesettingsPackage.eINSTANCE
import type { EventRegistry } from 'org.eclipse.daanse.board.app.lib.api.events'
import { WIDGET_SERVICE_ID, type WidgetProvider } from 'org.eclipse.daanse.board.app.lib.api.widget'

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

const WIDGET_TYPE = 'ImageWidget'

/**
 * Declared component: the loader registers it under WIDGET_SERVICE_ID, the
 * WidgetRepository tracks it into the palette, unloading withdraws it.
 */
@component({
  service: [WIDGET_SERVICE_ID],
  properties: { 'widget.type': WIDGET_TYPE },
})
export class ImageWidgetProvider implements WidgetProvider {
  readonly type = WIDGET_TYPE
  readonly component = ImageWidget
  readonly settingsComponent = ImageWidgetSettings
  readonly supportedDSTypes = []
  readonly icon = Icon
  readonly name = 'Image'

  /*
   * The settings form, as a model. Carried on the registration like the
   * icon, so whoever shows the settings does not have to know this widget
   * exists - and the shell needs no dependency on this bundle.
   */
  readonly settingsForm = {
    xmi: imageSettingsFormXmi,
    uri: '/image-settings.ui.xmi',
    ePackage: () => ImagesettingsPackage.eINSTANCE,
    create: () => new ImageSettingsImpl(),
    /* Forms for the classes that appear inside this one - the pictures of
     * the list, and the display options it contains. */
    entryForms: [
      { xmi: imageItemFormXmi, uri: '/image-item.ui.xmi' },
      { xmi: galleryFormXmi, uri: '/image-gallery.ui.xmi' },
    ],
  }

  constructor(
    @inject(EVENT_REGISTRY_ID) private readonly events: EventRegistry,
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
export { ImageSettingsImpl, ImagesettingsPackage, imageSettingsFormXmi, imageItemFormXmi, galleryFormXmi }
export type { IImageSettings }
