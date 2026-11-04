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
 * The drawing mode as the page settings start it: asked for on the event
 * bus, laid over the board by the layer, driven by pointer events on its
 * surface, and left with Done or Escape.
 */
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { defineComponent, h, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { TinyEmitter } from 'tiny-emitter'
import { identifiers } from 'org.eclipse.daanse.board.app.lib.core'
import {
  DRAW_WEATHER_REGION,
  PageImpl,
  createWeather,
  readShapes,
  writeShapes,
  type Page,
} from 'org.eclipse.daanse.board.app.lib.model.workspace'
import WeatherLayer from '../weather/WeatherLayer.vue'

const CELL = { width: 20, height: 10 }

beforeEach(() => {
  /* The board, and the drawing surface over it, at the origin */
  vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockImplementation(
    () => ({ left: 0, top: 0, x: 0, y: 0, width: 400, height: 300, right: 400, bottom: 300, toJSON() {} }) as DOMRect,
  )
  vi.spyOn(SVGElement.prototype, 'getBoundingClientRect').mockImplementation(
    () => ({ left: 0, top: 0, x: 0, y: 0, width: 400, height: 300, right: 400, bottom: 300, toJSON() {} }) as DOMRect,
  )
  vi.stubGlobal('requestAnimationFrame', () => 1)
  vi.stubGlobal('cancelAnimationFrame', () => {})
  vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockImplementation(() => null)
})

afterEach(() => {
  vi.restoreAllMocks()
  vi.unstubAllGlobals()
  document.body.innerHTML = ''
})

function page(): Page {
  const p = new PageImpl()
  p.id = 'p'
  p.weather = createWeather()
  p.weather.kind!.value = 'snow'
  return p
}

function mountLayer(p: Page) {
  const bus = new TinyEmitter()
  const Board = defineComponent({
    setup: () => () =>
      h(WeatherLayer, { page: p, editMode: true, cell: () => CELL }, () =>
        h('div', { class: 'widget', 'data-weather-obstacle': 'w1' }),
      ),
  })
  const wrapper = mount(Board, {
    attachTo: document.body,
    global: { provide: { [identifiers.TINY_EMITTER as symbol]: bus } },
  })
  return { wrapper, bus }
}

async function startDrawing(bus: TinyEmitter, pageId = 'p') {
  bus.emit(DRAW_WEATHER_REGION, { pageId })
  await nextTick()
}

type Wrapper = ReturnType<typeof mountLayer>['wrapper']

/* jsdom has no PointerEvent; a MouseEvent of the pointer's type carries what is read */
async function pointer(wrapper: Wrapper, type: string, x: number, y: number) {
  wrapper.find('.region__surface').element.dispatchEvent(new MouseEvent(type, { clientX: x, clientY: y, bubbles: true }))
  await nextTick()
}

/** A pointer pressed, moved and let go on the drawing surface, in pixels. */
async function dragOn(wrapper: Wrapper, from: [number, number], to: [number, number]) {
  await pointer(wrapper, 'pointerdown', from[0], from[1])
  await pointer(wrapper, 'pointermove', to[0], to[1])
  await pointer(wrapper, 'pointerup', to[0], to[1])
}

function key(name: string) {
  window.dispatchEvent(new KeyboardEvent('keydown', { key: name, bubbles: true }))
}

describe('the drawing mode of a weather region', () => {
  it('opens for its own page only, and leaves the widgets without pointer', async () => {
    const { wrapper, bus } = mountLayer(page())
    await startDrawing(bus, 'another')
    expect(wrapper.find('.region').exists()).toBe(false)

    await startDrawing(bus)
    expect(wrapper.find('.region').exists()).toBe(true)
    expect(wrapper.find('.weather').classes()).toContain('weather--drawing')
    /* The widgets are still on the page underneath */
    expect(wrapper.find('.widget').exists()).toBe(true)
    wrapper.unmount()
  })

  it('writes what was drawn to the page on Done, and makes it the region', async () => {
    const p = page()
    const { wrapper, bus } = mountLayer(p)
    await startDrawing(bus)

    await wrapper.find('[data-tool="rectangle"]').trigger('click')
    await dragOn(wrapper, [40, 20], [120, 60])
    await wrapper.find('[data-tool="ellipse"]').trigger('click')
    await dragOn(wrapper, [200, 100], [300, 150])
    /* Nothing reaches the page while drawing */
    expect(readShapes(p.weather)).toEqual([])

    await wrapper.find('[data-action="done"]').trigger('click')
    expect(readShapes(p.weather)).toEqual([
      { kind: 'rectangle', x: 2, y: 2, width: 4, height: 4 },
      { kind: 'ellipse', x: 10, y: 10, width: 5, height: 5 },
    ])
    expect(p.weather!.region!.value).toBe('area')
    expect(wrapper.find('.region').exists()).toBe(false)
    wrapper.unmount()
  })

  it('draws a polygon by its points and closes it on a double click', async () => {
    const p = page()
    const { wrapper, bus } = mountLayer(p)
    await startDrawing(bus)
    await wrapper.find('[data-tool="polygon"]').trigger('click')
    for (const [x, y] of [[0, 0], [80, 0], [40, 40], [40, 40]]) {
      await pointer(wrapper, 'pointerdown', x, y)
      await pointer(wrapper, 'pointerup', x, y)
    }
    await pointer(wrapper, 'dblclick', 40, 40)
    await wrapper.find('[data-action="done"]').trigger('click')
    expect(readShapes(p.weather)).toEqual([
      { kind: 'polygon', points: [{ x: 0, y: 0 }, { x: 4, y: 0 }, { x: 2, y: 4 }] },
    ])
    wrapper.unmount()
  })

  it('changes the stored shape by a moved handle', async () => {
    const p = page()
    writeShapes(p.weather!, [{ kind: 'rectangle', x: 1, y: 1, width: 2, height: 2 }])
    const { wrapper, bus } = mountLayer(p)
    await startDrawing(bus)
    await wrapper.find('[data-tool="select"]').trigger('click')
    await dragOn(wrapper, [40, 20], [40, 20])
    expect(wrapper.findAll('[data-handle]')).toHaveLength(8)

    /* The bottom right corner, at (3, 3) grid units, pulled to (6, 5) */
    await dragOn(wrapper, [60, 30], [120, 50])
    await wrapper.find('[data-action="done"]').trigger('click')
    expect(readShapes(p.weather)).toEqual([{ kind: 'rectangle', x: 1, y: 1, width: 5, height: 4 }])
    wrapper.unmount()
  })

  it('deletes the selected shapes with Delete, and offers the button only with a selection', async () => {
    const p = page()
    writeShapes(p.weather!, [
      { kind: 'rectangle', x: 1, y: 1, width: 2, height: 2 },
      { kind: 'rectangle', x: 5, y: 1, width: 2, height: 2 },
      { kind: 'rectangle', x: 9, y: 1, width: 2, height: 2 },
    ])
    const { wrapper, bus } = mountLayer(p)
    await startDrawing(bus)
    await wrapper.find('[data-tool="select"]').trigger('click')
    const remove = () => wrapper.find('[data-action="delete"]').element as HTMLButtonElement
    expect(remove().disabled).toBe(true)

    await dragOn(wrapper, [40, 20], [40, 20])
    const surface = wrapper.find('.region__surface').element
    surface.dispatchEvent(new MouseEvent('pointerdown', { clientX: 200, clientY: 20, shiftKey: true, bubbles: true }))
    surface.dispatchEvent(new MouseEvent('pointerup', { clientX: 200, clientY: 20, bubbles: true }))
    await nextTick()
    expect(wrapper.findAll('.region__shape--selected')).toHaveLength(2)
    expect(remove().disabled).toBe(false)

    key('Delete')
    await nextTick()
    expect(wrapper.findAll('.region__shape')).toHaveLength(1)
    expect(remove().disabled).toBe(true)
    await wrapper.find('[data-action="done"]').trigger('click')
    expect(readShapes(p.weather)).toEqual([{ kind: 'rectangle', x: 5, y: 1, width: 2, height: 2 }])
    wrapper.unmount()
  })

  it('leaves the page as it was on Escape', async () => {
    const p = page()
    p.weather!.region!.value = 'page'
    writeShapes(p.weather!, [{ kind: 'rectangle', x: 1, y: 1, width: 2, height: 2 }])
    const { wrapper, bus } = mountLayer(p)
    await startDrawing(bus)

    /* The existing shape deleted, a new one drawn */
    await wrapper.find('[data-tool="select"]').trigger('click')
    await dragOn(wrapper, [30, 15], [30, 15])
    await wrapper.find('[data-action="delete"]').trigger('click')
    await wrapper.find('[data-tool="rectangle"]').trigger('click')
    await dragOn(wrapper, [100, 100], [200, 200])

    /* The first Escape lets go of the new shape, the second leaves */
    key('Escape')
    await nextTick()
    expect(wrapper.find('.region').exists()).toBe(true)
    expect(wrapper.find('.region__shape--selected').exists()).toBe(false)
    key('Escape')
    await nextTick()
    expect(wrapper.find('.region').exists()).toBe(false)
    expect(readShapes(p.weather)).toEqual([{ kind: 'rectangle', x: 1, y: 1, width: 2, height: 2 }])
    expect(p.weather!.region!.value).toBe('page')
    wrapper.unmount()
  })

  it('gives a page without weather one on Done', async () => {
    const p = new PageImpl()
    p.id = 'p'
    const { wrapper, bus } = mountLayer(p)
    await startDrawing(bus)
    await dragOn(wrapper, [0, 0], [100, 50])
    await wrapper.find('[data-action="done"]').trigger('click')
    expect(p.weather?.eContainer()).toBe(p)
    expect(readShapes(p.weather)).toEqual([{ kind: 'rectangle', x: 0, y: 0, width: 5, height: 5 }])
    wrapper.unmount()
  })
})
