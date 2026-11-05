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

/*
 * The layer as a layout uses it: mounted around a board, reading the
 * page's weather and the widgets' rectangles, and asking for frames only
 * when it should. Frames are run by hand here, so a test decides when
 * time passes.
 */
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { defineComponent, h, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { JSONResource, URI } from '@emfts/core'
import {
  LayoutItemImpl,
  PageImpl,
  WeatherKind,
  createWeather,
  writeShapes,
  type Page,
} from 'org.eclipse.daanse.board.app.lib.model.workspace'
import { DefaultServiceRegistry } from '@eclipse-daanse/tsm'
import * as wrapperFactory from 'org.eclipse.daanse.board.app.lib.factory.variableWrapper'
import { VARIABLE_REPOSITORY } from 'org.eclipse.daanse.board.app.lib.api.variable'
import WeatherLayer from '../weather/WeatherLayer.vue'
import LightLayer from '../light/LightLayer.vue'
import { MAX_PIXEL_RATIO } from '../weather/useWeatherLayer'
import { FRAMELESS_ATTRIBUTE } from 'org.eclipse.daanse.board.app.lib.api.widget'

/* Where each widget is on screen; the host sits at the origin. */
const boxes = new Map<string, { left: number; top: number; width: number; height: number }>()
let frames: FrameRequestCallback[] = []
let drawn = 0

function rect(box: { left: number; top: number; width: number; height: number }) {
  return { ...box, x: box.left, y: box.top, right: box.left + box.width, bottom: box.top + box.height, toJSON() {} } as DOMRect
}

beforeEach(() => {
  boxes.clear()
  frames = []
  drawn = 0
  vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockImplementation(function (this: HTMLElement) {
    const id = this.getAttribute('data-weather-obstacle')
    if (id && boxes.has(id)) return rect(boxes.get(id)!)
    return rect({ left: 0, top: 0, width: 400, height: 600 })
  })
  vi.stubGlobal('requestAnimationFrame', (callback: FrameRequestCallback) => {
    frames.push(callback)
    return frames.length
  })
  vi.stubGlobal('cancelAnimationFrame', () => {})
  /* A context that only counts what is drawn */
  const context = new Proxy({} as Record<string, unknown>, {
    get: (target, key) => {
      if (key in target) return target[key as string]
      return (...args: unknown[]) => {
        if (key === 'fill' || key === 'stroke') drawn++
        return args && undefined
      }
    },
    set: (target, key, value) => {
      target[key as string] = value
      return true
    },
  })
  vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockImplementation(() => context as never)
})

afterEach(() => {
  vi.restoreAllMocks()
  vi.unstubAllGlobals()
})

/** Runs the frames asked for, a twentieth of a second apart. */
function run(count: number, from = 1000) {
  for (let i = 0; i < count; i++) {
    const pending = frames
    frames = []
    for (const callback of pending) callback(from + i * 50)
  }
}

function snowPage(): Page {
  const page = new PageImpl()
  page.id = 'p'
  page.weather = createWeather()
  page.weather.kind!.value = 'snow'
  const item = new LayoutItemImpl()
  item.id = 'w1'
  item.x = 100
  item.y = 200
  item.width = 200
  item.height = 100
  page.layout.push(item)
  return page
}

/** The layer around a board with one widget, the way a layout mounts it. */
function mountLayer(page: Page, props: Record<string, unknown> = {}) {
  boxes.set('w1', { left: 100, top: 200, width: 200, height: 100 })
  const Board = defineComponent({
    setup: () => () =>
      h(WeatherLayer, { page, ...props }, () => h('div', { 'data-weather-obstacle': 'w1' })),
  })
  return mount(Board, { attachTo: document.body })
}

const layerOf = (wrapper: ReturnType<typeof mountLayer>) =>
  wrapper.findComponent(WeatherLayer).vm as unknown as {
    running: boolean
    engine: import('../weather/engine').WeatherEngine
    settings: () => import('../weather/engine').WeatherLayerSettings
  }

describe('the weather layer', () => {
  it('reads the widget rectangles, and reads them again when one moves', async () => {
    const page = snowPage()
    const wrapper = mountLayer(page)
    await nextTick()
    const layer = layerOf(wrapper)

    expect(layer.running).toBe(true)
    expect(layer.engine.obstacleRects).toEqual([{ id: 'w1', x: 100, y: 200, width: 200, height: 100 }])

    /* Moved on the page: the model changes, and so does where it is drawn */
    boxes.set('w1', { left: 160, top: 240, width: 200, height: 100 })
    page.layout.get(0).x = 160
    await nextTick()
    await nextTick()

    expect(layer.engine.obstacleRects).toEqual([{ id: 'w1', x: 160, y: 240, width: 200, height: 100 }])
    wrapper.unmount()
  })

  it('lets a frameless widget be: nothing falls on what is not seen (#1242)', async () => {
    const page = snowPage()
    boxes.set('w1', { left: 100, top: 200, width: 200, height: 100 })
    boxes.set('light', { left: 20, top: 40, width: 80, height: 80 })
    const Board = defineComponent({
      setup: () => () =>
        h(WeatherLayer, { page }, () => [
          h('div', { 'data-weather-obstacle': 'w1' }),
          /* The wrapper marks the root it hands the obstacle attribute to */
          h('div', { 'data-weather-obstacle': 'light', [FRAMELESS_ATTRIBUTE]: '' }),
        ]),
    })
    const wrapper = mount(Board, { attachTo: document.body })
    await nextTick()

    expect(layerOf(wrapper as never).engine.obstacleRects.map((each) => each.id)).toEqual(['w1'])
    wrapper.unmount()
  })

  it('still keeps to a frameless widget that is its region', async () => {
    const page = snowPage()
    page.weather!.region!.value = 'widget'
    page.weather!.regionWidget!.value = 'light'
    boxes.set('light', { left: 20, top: 40, width: 80, height: 80 })
    const Board = defineComponent({
      setup: () => () =>
        h(WeatherLayer, { page }, () => h('div', { 'data-weather-obstacle': 'light', [FRAMELESS_ATTRIBUTE]: '' })),
    })
    const wrapper = mount(Board, { attachTo: document.body })
    await nextTick()

    expect(layerOf(wrapper as never).engine.region).toMatchObject({ x: 20, y: 40, width: 80, height: 80 })
    wrapper.unmount()
  })

  it('draws when it runs', async () => {
    const wrapper = mountLayer(snowPage())
    await nextTick()
    run(5)
    expect(drawn).toBeGreaterThan(0)
    wrapper.unmount()
  })

  it('asks for no frame and draws nothing while the board is edited', async () => {
    const wrapper = mountLayer(snowPage(), { editMode: true })
    await nextTick()
    run(5)
    expect(layerOf(wrapper).running).toBe(false)
    expect(frames).toHaveLength(0)
    expect(drawn).toBe(0)
    wrapper.unmount()
  })

  it('asks for no frame and draws nothing when reduced motion is asked for', async () => {
    vi.stubGlobal('matchMedia', (query: string) => ({
      matches: query.includes('reduce'),
      addEventListener() {},
      removeEventListener() {},
    }))
    const wrapper = mountLayer(snowPage())
    await nextTick()
    run(5)
    expect(layerOf(wrapper).running).toBe(false)
    expect(frames).toHaveLength(0)
    expect(drawn).toBe(0)
    wrapper.unmount()
  })

  it('stands still on a page without weather', async () => {
    const page = snowPage()
    page.weather!.kind!.value = 'none'
    const wrapper = mountLayer(page)
    await nextTick()
    expect(frames).toHaveLength(0)

    /* And starts when the kind is set */
    page.weather!.kind!.value = 'rain'
    await nextTick()
    await nextTick()
    expect(layerOf(wrapper).running).toBe(true)
    expect(frames.length).toBeGreaterThan(0)
    wrapper.unmount()
  })

  it('draws a canvas at no more than twice its size', async () => {
    vi.stubGlobal('devicePixelRatio', 3)
    const wrapper = mountLayer(snowPage())
    await nextTick()
    const canvas = wrapper.find('canvas').element as HTMLCanvasElement
    expect(canvas.width).toBe(400 * MAX_PIXEL_RATIO)
    wrapper.unmount()
  })

  /*
   * The whole way a variable takes: a page saved with its intensity bound,
   * read back as a stored workspace is, bound again in the one place that
   * does it - and then the variable changes, and the layer makes more snow.
   */
  it('follows a variable bound to the intensity, after the page was saved and read back', async () => {
    const stored = snowPage()
    stored.weather!.intensity!.value = 10
    stored.weather!.intensity!.variable = 'storm'
    stored.weather!.intensity!.isSet = true
    const out = new JSONResource(URI.createURI('page.json'))
    out.getContents().add(stored)
    const text = out.saveToString()

    const back = new JSONResource(URI.createURI('page.json'))
    back.loadFromString(text)
    const page = back.getContents().get(0) as Page

    let changed: () => void = () => {}
    const storm = {
      name: 'storm',
      value: 10,
      subscribe(listener: () => void) {
        changed = listener
      },
      unsubscribe() {},
    }
    /* The factory as the application starts it, over a repository that knows one variable */
    const services = new DefaultServiceRegistry()
    services.register(VARIABLE_REPOSITORY, {
      getVariable: (name: string) => (name === 'storm' ? storm : undefined),
    } as never)
    wrapperFactory.activate({ services } as never)
    services
      .getRequired(wrapperFactory.VARIABLE_WRAPPER_FACTORY)
      .bindContainedWrappers(page as never)

    const wrapper = mountLayer(page)
    await nextTick()
    const layer = layerOf(wrapper)
    expect(layer.settings()).toMatchObject({ kind: WeatherKind.SNOW, intensity: 10 })

    const rate = () => {
      const before = layer.engine.spawned
      run(20, 10_000 + Math.random() * 1000)
      return layer.engine.spawned - before
    }
    run(1)
    const calm = rate()

    storm.value = 90
    changed()
    await nextTick()

    expect(layer.settings().intensity).toBe(90)
    expect(rate()).toBeGreaterThan(calm * 4)
    wrapper.unmount()
  })

  it('keeps a widget region on its widget when the widget moves', async () => {
    const page = snowPage()
    page.weather!.region!.value = 'widget'
    page.weather!.regionWidget!.value = 'w1'
    const wrapper = mountLayer(page)
    await nextTick()
    const layer = layerOf(wrapper)

    expect(layer.engine.region).toEqual({ x: 100, y: 200, width: 200, height: 100 })
    /* The region's widget is where the weather is, not something in its way */
    expect(layer.engine.obstacleRects).toEqual([])

    boxes.set('w1', { left: 40, top: 320, width: 260, height: 150 })
    page.layout.get(0).x = 40
    await nextTick()
    await nextTick()

    expect(layer.engine.region).toEqual({ x: 40, y: 320, width: 260, height: 150 })
    wrapper.unmount()
  })

  it('measures a drawn region in the grid units of its layout', async () => {
    const page = snowPage()
    page.weather!.region!.value = 'area'
    writeShapes(page.weather!, [
      { kind: 'rectangle', x: 2, y: 1, width: 4, height: 3 },
      { kind: 'polygon', points: [{ x: 6, y: 4 }, { x: 8, y: 4 }, { x: 7, y: 6 }] },
    ])
    const wrapper = mountLayer(page, { cell: () => ({ width: 50, height: 30 }) })
    await nextTick()
    const { engine } = layerOf(wrapper)
    expect(engine.regionShapes).toEqual([
      { kind: 'rectangle', x: 100, y: 30, width: 200, height: 90 },
      { kind: 'polygon', points: [{ x: 300, y: 120 }, { x: 400, y: 120 }, { x: 350, y: 180 }] },
    ])
    expect(engine.region).toEqual({ x: 100, y: 30, width: 300, height: 150 })
    wrapper.unmount()
  })

  it('draws no front canvas and meets no widget when it does not affect them', async () => {
    const page = snowPage()
    page.weather!.affectsWidgets!.value = false
    const wrapper = mountLayer(page)
    await nextTick()
    expect(wrapper.findAll('canvas')).toHaveLength(1)
    expect(layerOf(wrapper).engine.obstacleRects).toEqual([])
    run(5)
    expect(drawn).toBeGreaterThan(0)
    wrapper.unmount()
  })
})

/*
 * #1260: a light layer blends its front canvas, and the element holding a
 * blended canvas is drawn as a group of its own - where Chrome ends what a
 * frame's backdrop-filter sees. While the weather ran, its board was that
 * element, and no frame's blur showed the page behind the board.
 */
describe('the weather with a light layer inside', () => {
  function mountWithLight(page: Page) {
    boxes.set('w1', { left: 100, top: 200, width: 200, height: 100 })
    const Board = defineComponent({
      setup: () => () =>
        h(WeatherLayer, { page }, () =>
          h(LightLayer, { page }, () => h('div', { 'data-weather-obstacle': 'w1' })),
        ),
    })
    return mount(Board, { attachTo: document.body })
  }

  it('leaves the stacking context of the widgets to the light layer while it runs', async () => {
    const wrapper = mountWithLight(snowPage())
    await nextTick()
    expect(layerOf(wrapper).running).toBe(true)
    const weather = wrapper.find('.weather')
    expect(weather.classes()).toContain('weather--on')
    expect(weather.classes()).toContain('weather--stacked-inside')
    // The light board holds the widgets, the blended canvas stays outside it
    const light = wrapper.find('.light')
    expect(light.classes()).toContain('light--stacked')
    expect(light.find('.light__board .light__canvas--front').exists()).toBe(false)
    wrapper.unmount()
  })

  it('stacks the widgets on its own board without a light layer', async () => {
    const wrapper = mountLayer(snowPage())
    await nextTick()
    expect(wrapper.find('.weather').classes()).toContain('weather--on')
    expect(wrapper.find('.weather').classes()).not.toContain('weather--stacked-inside')
    wrapper.unmount()
  })

  it('leaves the light board free while the weather is still', async () => {
    const Still = defineComponent({
      setup: () => () =>
        h(WeatherLayer, { page: snowPage(), editMode: true }, () => h(LightLayer, { page: snowPage() })),
    })
    const still = mount(Still, { attachTo: document.body })
    await nextTick()
    expect(still.find('.weather').classes()).not.toContain('weather--on')
    expect(still.find('.light').classes()).not.toContain('light--stacked')
    still.unmount()
  })
})
