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
import { EVENT_ACTIONS_REGISTRY } from 'org.eclipse.daanse.board.app.lib.api.events'
import { identifiers } from 'org.eclipse.daanse.board.app.lib.core'
import { VariableWrapper } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { VideoSettingsPackage } from '../gen/VideoSettingsPackage'
import { VideoSettingsImpl } from '../gen/VideoSettingsImpl'
import { ObjectFitSettingImpl } from '../gen/ObjectFitSettingImpl'
import VideoWidget from '../VideoWidget.vue'

vi.mock('vue-router', () => ({
  useRoute: () => ({ params: { pageid: 'p1' } }),
  useRouter: () => ({ push: vi.fn() }),
}))

vi.mock('org.eclipse.daanse.board.app.ui.vue.composables', async (importOriginal) => {
  const actual = (await importOriginal()) as Record<string, unknown>
  return { ...actual, useTranslation: () => ({ t: (key: string) => key }) }
})

void VideoSettingsPackage.eINSTANCE

function fitting(fit: string) {
  const made = new ObjectFitSettingImpl()
  made.fit = fit
  return made
}

async function show(settings: VideoSettingsImpl) {
  const wrapper = mount(VideoWidget, {
    props: { datasourceId: 'ds-1', id: 'w1', configv: settings },
    global: {
      provide: {
        [identifiers.TINY_EMITTER as symbol]: { emit: vi.fn(), on: vi.fn(), off: vi.fn() },
        [EVENT_ACTIONS_REGISTRY as unknown as symbol]: { registerInstance: vi.fn(), unregisterInstance: vi.fn() },
      },
    },
  })
  await flushPromises()
  return wrapper
}

const fitOf = (wrapper: Awaited<ReturnType<typeof show>>) => wrapper.find('video').attributes('style') ?? ''

/*
 * Widget.config is an attribute, not a containment: the adapter on the
 * widget never hears a write inside the settings object, and the widget is
 * handed the same instance on every change. The object-fit chosen in the
 * open dialog has to reach the video all the same (#1205, #1203).
 */
describe('the object-fit setting', () => {
  it('reaches the element: the chosen fit is bound', async () => {
    const settings = new VideoSettingsImpl()
    settings.videoUrl = new VariableWrapper('/clip.mp4')
    settings.videoFitSettings = fitting('cover')
    const wrapper = await show(settings)

    expect(fitOf(wrapper)).toContain('object-fit: cover')
  })

  it('reaches the element: a fit changed in the open dialog follows', async () => {
    const settings = new VideoSettingsImpl()
    settings.videoUrl = new VariableWrapper('/clip.mp4')
    settings.videoFitSettings = fitting('cover')
    const wrapper = await show(settings)
    expect(fitOf(wrapper)).toContain('object-fit: cover')

    settings.videoFitSettings.fit = 'contain'
    await nextTick()

    expect(fitOf(wrapper)).toContain('object-fit: contain')
    expect(fitOf(wrapper)).not.toContain('object-fit: cover')
  })
})
