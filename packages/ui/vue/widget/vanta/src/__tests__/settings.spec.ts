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
import { VantasettingsPackage } from '../gen/VantasettingsPackage'
import { VantaSettingsImpl } from '../gen/VantaSettingsImpl'
import VantaWidget from '../VantaWidget.vue'

/*
 * No WebGL here. Each effect is the same stub: it writes its name and the
 * colour it was given onto the element it was started on, which is what
 * the real one would paint.
 */
vi.mock('vanta/dist/vanta.clouds.min', () => ({ default: (o: any) => effect('CLOUDS', o) }))
vi.mock('vanta/dist/vanta.birds.min', () => ({ default: (o: any) => effect('BIRDS', o) }))
vi.mock('vanta/dist/vanta.net.min', () => ({ default: (o: any) => effect('NET', o) }))
vi.mock('vanta/dist/vanta.trunk.min', () => ({ default: (o: any) => effect('TRUNK', o) }))
vi.mock('three', () => ({}))
vi.mock('p5', () => ({ default: {} }))

function effect(name: string, options: { el: HTMLElement; color?: string }) {
  options.el.dataset.effect = name
  options.el.dataset.color = options.color ?? ''
  return { destroy: () => { delete options.el.dataset.effect } }
}

if (typeof globalThis.ResizeObserver === 'undefined') {
  globalThis.ResizeObserver = class { observe() {} unobserve() {} disconnect() {} } as any
}

void VantasettingsPackage.eINSTANCE

async function show(settings: VantaSettingsImpl) {
  const wrapper = mount(VantaWidget, {
    props: { datasourceId: 'ds-1', id: 'w1', config: settings },
    global: { provide: { [identifiers.TINY_EMITTER as symbol]: { emit: vi.fn(), on: vi.fn(), off: vi.fn() } } },
  })
  await flushPromises()
  return wrapper
}

const canvas = (wrapper: Awaited<ReturnType<typeof show>>) => wrapper.find('.vanta-container')

/*
 * Widget.config is an attribute, not a containment: the adapter on the
 * widget never hears a write inside the settings object, and the widget is
 * handed the same instance on every change. A setting changed in the open
 * dialog has to reach the background all the same (#1203).
 */
describe('a setting changed in the open dialog', () => {
  it('reaches the background: a new effect is started', async () => {
    const settings = new VantaSettingsImpl()
    settings.type = 'CLOUDS'
    const wrapper = await show(settings)
    expect(canvas(wrapper).attributes('data-effect')).toBe('CLOUDS')

    settings.type = 'NET'
    await nextTick()
    await flushPromises()

    expect(canvas(wrapper).attributes('data-effect')).toBe('NET')
  })

  it('reaches the background: a new colour is handed to the effect', async () => {
    const settings = new VantaSettingsImpl()
    settings.type = 'NET'
    settings.color = '#ff0000'
    const wrapper = await show(settings)
    expect(canvas(wrapper).attributes('data-color')).toBe('#ff0000')

    settings.color = '#00ff00'
    await nextTick()
    await flushPromises()

    expect(canvas(wrapper).attributes('data-color')).toBe('#00ff00')
  })
})
