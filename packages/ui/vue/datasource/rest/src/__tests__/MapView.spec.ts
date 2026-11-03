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

/* Set where the endpoint is to refuse rather than answer. */
let refuses = false

/*
 * The whole answer, where a test wants it to differ from the narrowed
 * one - which is the case the two views used to disagree about.
 */
let wholeAnswer: unknown = undefined

const store = {
  getData: vi.fn(async (shape: string) => {
    asked.push(shape)
    if (refuses) throw new Error('404')
    return answer
  }),
  getOriginalData: vi.fn(async () => {
    if (refuses) throw new Error('404')
    return wholeAnswer === undefined ? answer : wholeAnswer
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
    wholeAnswer = undefined
    refuses = false
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

    /* What it draws is asked for exactly once, and as 'object'. */
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

  /*
   * A map with nothing on it says nothing about why (#1194). The three
   * reasons are different things to be told, and two of them are not the
   * map's to say.
   */
  describe('when there is nothing to draw', () => {
    it('says the endpoint gave nothing, rather than drawing an empty map', async () => {
      answer = null
      const wrapper = await open()

      expect(wrapper.find('[role="alert"]').text()).toBe('Preview.failed')
      expect(shown(wrapper).exists()).toBe(false)
    })

    it('says the same where the read was refused outright', async () => {
      refuses = true
      const wrapper = await open()

      expect(wrapper.find('[role="alert"]').text()).toBe('Preview.failed')
      expect(shown(wrapper).exists()).toBe(false)
    })

    it('says an answer came back empty, which is not the same thing', async () => {
      answer = {}
      const wrapper = await open()

      expect(wrapper.find('[role="status"]').text()).toBe('Preview.empty')
      expect(shown(wrapper).exists()).toBe(false)
    })

    /* An answer with features in it is the map's business again. */
    it('leaves a real answer to the map', async () => {
      answer = {
        type: 'FeatureCollection',
        features: [{ type: 'Feature', geometry: { type: 'Point', coordinates: [7, 51] }, properties: null }],
      }
      const wrapper = await open()

      expect(wrapper.find('[role="alert"]').exists()).toBe(false)
      expect(shown(wrapper).exists()).toBe(true)
    })

    /* A refusal arriving through the subscription had nobody to hand it
      to, and went to the console alone. */
    it('shows a later refusal, not only the first answer', async () => {
      answer = { type: 'FeatureCollection', features: [{ type: 'Feature', geometry: null, properties: null }] }
      const wrapper = await open()
      expect(shown(wrapper).exists()).toBe(true)

      refuses = true
      notify?.()
      await flushPromises()

      expect(wrapper.find('[role="alert"]').text()).toBe('Preview.failed')
    })
  })

  /*
   * The two views of one source, agreeing about it (#1194).
   *
   * The map draws the narrowed answer and the tree shows the whole one,
   * so they used to measure "is there anything" on different things: a
   * selected path matching nothing made the map say "empty" while the
   * tree drew a full answer beside it.
   */
  it('calls it empty by the whole answer, not by what the path selected', async () => {
    wholeAnswer = { type: 'FeatureCollection', features: [{ type: 'Feature', geometry: null, properties: null }] }
    answer = {}
    const wrapper = await open()

    /* Something came back; the path just did not match it. */
    expect(wrapper.find('[role="status"]').exists()).toBe(false)
    expect(shown(wrapper).exists()).toBe(true)
    expect(shown(wrapper).props('data')).toEqual({})
  })

  it('calls it empty where the whole answer is empty', async () => {
    wholeAnswer = {}
    answer = {}
    const wrapper = await open()

    expect(wrapper.find('[role="status"]').text()).toBe('Preview.empty')
  })

  /* A source that refused once and then answers is drawn again, not
    left showing the refusal. */
  it('recovers when a later answer comes back', async () => {
    refuses = true
    const wrapper = await open()
    expect(wrapper.find('[role="alert"]').exists()).toBe(true)

    refuses = false
    answer = { type: 'FeatureCollection', features: [{ type: 'Feature', geometry: null, properties: null }] }
    wholeAnswer = answer
    notify?.()
    await flushPromises()

    expect(wrapper.find('[role="alert"]').exists()).toBe(false)
    expect(shown(wrapper).exists()).toBe(true)
  })

  it('says so when a later answer is empty', async () => {
    answer = { type: 'FeatureCollection', features: [{ type: 'Feature', geometry: null, properties: null }] }
    wholeAnswer = answer
    const wrapper = await open()
    expect(shown(wrapper).exists()).toBe(true)

    answer = {}
    wholeAnswer = {}
    notify?.()
    await flushPromises()

    expect(wrapper.find('[role="status"]').text()).toBe('Preview.empty')
  })

  /*
   * A store replaced while a read is in flight (#1194).
   *
   * The old read is still running and finishes later. Without a sequence
   * number it writes its answer - and its failed, and its asked - over
   * the store that replaced it, so the view shows what the source it no
   * longer has said.
   */
  it('ignores a read that comes back after its store was replaced', async () => {
    const letGo: Array<(value: unknown) => void> = []
    const slow = {
      getData: vi.fn(() => new Promise((resolve) => letGo.push(resolve))),
      getOriginalData: vi.fn(() => new Promise((resolve) => letGo.push(resolve))),
    }
    const quick = {
      getData: vi.fn(async () => ({ type: 'FeatureCollection', features: [{ type: 'Feature', geometry: null, properties: null }] })),
      getOriginalData: vi.fn(async () => ({ type: 'FeatureCollection', features: [{ type: 'Feature', geometry: null, properties: null }] })),
    }

    const wrapper = mount(MapView, { props: { dataSource: SOURCE } })
    await flushPromises()
    const held = built.value as { value: unknown }

    held.value = slow
    await flushPromises()

    /* The second source answers while the first is still thinking. */
    held.value = quick
    await flushPromises()
    expect(shown(wrapper).exists()).toBe(true)

    /* And now the first one answers, with nothing. */
    letGo.forEach((resolve) => resolve(null))
    await flushPromises()

    expect(wrapper.find('[role="alert"]').exists()).toBe(false)
    expect(shown(wrapper).exists()).toBe(true)
  })
})
