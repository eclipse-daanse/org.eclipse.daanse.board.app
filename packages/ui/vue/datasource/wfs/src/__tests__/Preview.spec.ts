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

// @vitest-environment jsdom
/*
 * The preview is a reader like a map (#1301): a store with the extent
 * viewport is sent the configured box as the preview's view, and the view
 * is taken back when the preview closes.
 */
import { describe, it, expect, vi } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { defineComponent, h, reactive } from 'vue'
import { VIEWPORT_EVENT } from 'org.eclipse.daanse.board.app.lib.datasource.base'

let store: any
vi.mock('org.eclipse.daanse.board.app.ui.vue.composables', async (original) => ({
  ...((await original()) as object),
  useTemporaryStore: (_type: string, _settings: unknown, target: { value: unknown }) => {
    // The repository builds the store after the preview is set up.
    void Promise.resolve().then(() => (target.value = store))
    return { update: () => {} }
  },
}))
vi.mock('org.eclipse.daanse.board.app.ui.vue.common.map', async (original) => ({
  ...((await original()) as object),
  GeoFeatureMap: defineComponent({ props: ['data', 'loading'], setup: () => () => h('div') }),
}))

function fakeStore(accepts: boolean) {
  return {
    acceptedEvents: () => (accepts ? [VIEWPORT_EVENT] : []),
    callEvent: vi.fn(async (_event: string, _params: any) => {}),
    getData: vi.fn(async () => ({ type: 'FeatureCollection', features: [{ id: 1 }, { id: 2 }] })),
  }
}

async function preview(config: Record<string, unknown>) {
  const { default: Preview } = await import('../Preview.vue')
  const wrapper = mount(Preview, { props: { dataSource: reactive({ type: 'wfs', config }) } })
  await flushPromises()
  return wrapper
}

describe('the WFS preview', () => {
  it('sends the configured box as its view to a store that reads by view, before it asks for the data, and takes it back when it closes', async () => {
    store = fakeStore(true)
    const wrapper = await preview({ extent: 'viewport', bbox: '11.6125,50.9565,11.6215,50.9625' })
    expect(store.callEvent).toHaveBeenCalledTimes(1)
    const [event, params] = store.callEvent.mock.calls[0]
    expect(event).toBe(VIEWPORT_EVENT)
    expect(params).toMatchObject({ bbox: [11.6125, 50.9565, 11.6215, 50.9625] })
    expect(params.sender).toMatch(/^wfs-preview-/)
    expect(store.callEvent.mock.invocationCallOrder[0]).toBeLessThan(store.getData.mock.invocationCallOrder[0])
    expect(wrapper.text()).toContain('Preview.count')
    wrapper.unmount()
    expect(store.callEvent).toHaveBeenLastCalledWith(VIEWPORT_EVENT, { bbox: null, zoom: params.zoom, sender: params.sender })
  })

  it('sends no view to a store that does not read by view, or without a box', async () => {
    store = fakeStore(false)
    ;(await preview({ bbox: '11.6,50.9,11.7,51' })).unmount()
    expect(store.callEvent).not.toHaveBeenCalled()
    store = fakeStore(true)
    ;(await preview({ extent: 'viewport', bbox: '' })).unmount()
    expect(store.callEvent.mock.calls.filter(([, p]: any[]) => p.bbox !== null)).toEqual([])
    expect(store.getData).toHaveBeenCalled()
  })
})
