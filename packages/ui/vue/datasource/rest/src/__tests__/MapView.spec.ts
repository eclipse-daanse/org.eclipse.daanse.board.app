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
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { ref } from 'vue'
import MapView from '../MapView.vue'

/* The store this view is given, and what it was asked for. */
const asked: string[] = []
let answer: unknown = null
let unsubscribed = false
let notify: (() => void) | undefined

const store = {
  getData: vi.fn(async (shape: string) => {
    asked.push(shape)
    return answer
  }),
  subscribe: (listener: () => void) => {
    notify = listener
    return () => {
      unsubscribed = true
    }
  },
}

/*
 * The real composable builds a store out of the datasource registry and a
 * factory; what this view does with the one it gets is the part under
 * test, so it is handed one directly.
 */
const built = ref<unknown>(null)
vi.mock('org.eclipse.daanse.board.app.ui.vue.composables', () => ({
  useTemporaryStore: (_type: string, _settings: unknown, tempStore: { value: unknown }) => {
    built.value = tempStore
    return { update: vi.fn() }
  },
  useTranslation: () => ({ t: (key: string) => key }),
}))

/* The map itself is tested in its own package. */
vi.mock('org.eclipse.daanse.board.app.ui.vue.common.map', () => ({
  GeoFeatureMap: {
    name: 'GeoFeatureMap',
    props: ['data', 'loading'],
    template: '<div class="geomap-stub" />',
  },
}))

const SOURCE = { uid: 'ds1', type: 'rest', config: { resourceUrl: 'shapes.geojson' } }

async function open() {
  const wrapper = mount(MapView, { props: { dataSource: SOURCE } })
  await flushPromises()
  /* The composable hands the view its store through the ref it was given. */
  ;(built.value as { value: unknown }).value = store
  await flushPromises()
  return wrapper
}

function shown(wrapper: ReturnType<typeof mount>) {
  return wrapper.findComponent({ name: 'GeoFeatureMap' })
}

describe('MapView', () => {
  beforeEach(() => {
    asked.length = 0
    answer = null
    unsubscribed = false
    notify = undefined
    vi.clearAllMocks()
  })

  /*
   * Asked for exactly what the map widget asks for, so that what is
   * previewed here is what a widget made from this source will draw.
   */
  it('asks the source for an object, as the map widget does', async () => {
    answer = { type: 'FeatureCollection', features: [] }
    await open()

    expect(asked).toEqual(['object'])
  })

  it('hands the answer to the map', async () => {
    answer = {
      type: 'FeatureCollection',
      features: [{ type: 'Feature', geometry: { type: 'Point', coordinates: [7, 51] }, properties: null }],
    }
    const wrapper = await open()

    expect(shown(wrapper).props('data')).toEqual(answer)
    expect(shown(wrapper).props('loading')).toBe(false)
  })

  it('says it is waiting until the source has answered', async () => {
    const wrapper = mount(MapView, { props: { dataSource: SOURCE } })
    await flushPromises()

    expect(shown(wrapper).props('loading')).toBe(true)
  })

  it('redraws when the source says its data changed', async () => {
    answer = { type: 'FeatureCollection', features: [] }
    const wrapper = await open()
    expect(asked).toHaveLength(1)

    answer = {
      type: 'FeatureCollection',
      features: [{ type: 'Feature', geometry: { type: 'Point', coordinates: [1, 2] }, properties: null }],
    }
    notify?.()
    await flushPromises()

    expect(asked).toEqual(['object', 'object'])
    expect(shown(wrapper).props('data')).toEqual(answer)
  })

  /* A polling source would otherwise keep answering into a view that is
    no longer on the screen. */
  it('stops listening when it is closed', async () => {
    const wrapper = await open()
    expect(unsubscribed).toBe(false)

    wrapper.unmount()
    expect(unsubscribed).toBe(true)
  })
})
