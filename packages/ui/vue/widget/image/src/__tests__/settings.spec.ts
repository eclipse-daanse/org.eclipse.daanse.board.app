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
 * ********************************************************************/

// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import { identifiers } from 'org.eclipse.daanse.board.app.lib.core'
import { EventsPackage } from 'org.eclipse.daanse.board.app.lib.api.events'
import { ImagesettingsPackage } from '../gen/ImagesettingsPackage'
import { ImageSettingsImpl } from '../gen/ImageSettingsImpl'
import { ImageGalleryItemImpl } from '../gen/ImageGalleryItemImpl'
import ImageWidget from '../ImageWidget.vue'

vi.mock('org.eclipse.daanse.board.app.ui.vue.composables', async (importOriginal) => {
  const actual = (await importOriginal()) as Record<string, unknown>
  return { ...actual, useTranslation: () => ({ t: (key: string) => key }) }
})

/* The payloads point at the events model, so that one goes first. */
void EventsPackage.eINSTANCE
void ImagesettingsPackage.eINSTANCE

function pictureAt(url: string) {
  const item = new ImageGalleryItemImpl()
  item.id = url
  item.url = url
  return item
}

async function show(settings: ImageSettingsImpl) {
  const wrapper = mount(ImageWidget, {
    props: { datasourceId: 'ds-1', id: 'w1', configv: settings },
    global: {
      stubs: { DButton: { template: '<button><slot /></button>' }, DIcon: { template: '<i />' } },
      provide: { [identifiers.TINY_EMITTER as symbol]: { emit: vi.fn(), on: vi.fn(), off: vi.fn() } },
    },
  })
  await flushPromises()
  return wrapper
}

const sources = (wrapper: Awaited<ReturnType<typeof show>>) => wrapper.findAll('img').map((img) => img.attributes('src'))

/*
 * Widget.config is an attribute, not a containment: the adapter on the
 * widget never hears a write inside the settings object, and the widget is
 * handed the same instance on every change. A setting changed in the open
 * dialog has to reach the gallery all the same (#1203). And a generated
 * instance has to survive the mount at all (#1204).
 */
describe('a generated settings instance', () => {
  it('is mounted without a throw, and given the gallery defaults the model names', async () => {
    const settings = new ImageSettingsImpl()
    const wrapper = await show(settings)

    expect(wrapper.exists()).toBe(true)
    expect(settings.imagesSettings?.fit?.value).toBe('contain')
    expect(settings.imagesSettings?.diashowInterval?.value).toBe(0)
  })
})

describe('a setting changed in the open dialog', () => {
  it('reaches the gallery: a picture added is shown', async () => {
    const settings = new ImageSettingsImpl()
    settings.images.add(pictureAt('/one.png'))
    const wrapper = await show(settings)
    expect(sources(wrapper)).toEqual(['/one.png'])

    settings.images.add(pictureAt('/two.png'))
    await nextTick()

    expect(sources(wrapper)).toEqual(['/one.png', '/two.png'])
  })

  it('reaches the gallery: a picture removed goes', async () => {
    const settings = new ImageSettingsImpl()
    const first = pictureAt('/one.png')
    settings.images.add(first)
    settings.images.add(pictureAt('/two.png'))
    const wrapper = await show(settings)
    expect(sources(wrapper)).toHaveLength(2)

    settings.images.remove(first)
    await nextTick()

    expect(sources(wrapper)).toEqual(['/two.png'])
  })
})
