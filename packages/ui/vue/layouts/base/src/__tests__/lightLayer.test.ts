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
 * The light layer as a layout uses it: mounted around a board, collecting
 * the lights the lamps announce on the bus, measuring their widgets and
 * darkening the page by its ambient light (#1242).
 */
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { defineComponent, h, nextTick, ref } from 'vue'
import { flushPromises, mount } from '@vue/test-utils'
import { TinyEmitter } from 'tiny-emitter'
import { identifiers } from 'org.eclipse.daanse.board.app.lib.core'
import {
  ANNOUNCE_LIGHT,
  LIGHTS_WANTED,
  LayoutItemImpl,
  PageImpl,
  WITHDRAW_LIGHT,
  createLighting,
  type LightSourceSpec,
  type Page,
} from 'org.eclipse.daanse.board.app.lib.model.workspace'
import LightLayer from '../light/LightLayer.vue'
import { LIGHT_BOX_ATTRIBUTE } from '../light/useLightLayer'
import { composeLightScene, darknessOf, MAX_DARKNESS, type LightScene } from '../light/scene'

/* Where each widget is on screen; the host sits at the origin. */
const boxes = new Map<string, { left: number; top: number; width: number; height: number }>()
/* What was filled on the canvases, with the style it was filled with */
let fills: { op: string; style: unknown; rect: boolean }[] = []

function rect(box: { left: number; top: number; width: number; height: number }) {
  return { ...box, x: box.left, y: box.top, right: box.left + box.width, bottom: box.top + box.height, toJSON() {} } as DOMRect
}

beforeEach(() => {
  boxes.clear()
  fills = []
  vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockImplementation(function (this: HTMLElement) {
    const id = this.getAttribute(LIGHT_BOX_ATTRIBUTE)
    if (id && boxes.has(id)) return rect(boxes.get(id)!)
    return rect({ left: 0, top: 0, width: 800, height: 600 })
  })
  const context = new Proxy({} as Record<string, unknown>, {
    get: (target, key) => {
      if (key in target) return target[key as string]
      if (key === 'createRadialGradient') return () => ({ addColorStop() {} })
      return (...args: unknown[]) => {
        if (key === 'fill' || key === 'fillRect') {
          fills.push({ op: String(target.globalCompositeOperation), style: target.fillStyle, rect: key === 'fillRect' })
        }
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
})

function lamp(overrides: Partial<LightSourceSpec> = {}): LightSourceSpec {
  return {
    widgetId: 'lamp',
    on: true,
    radius: 200,
    color: '#ffcc88',
    intensity: 0.8,
    shape: 'round',
    direction: 90,
    angle: 60,
    lightsWidgets: false,
    ...overrides,
  }
}

function pageWith(ambient?: number): Page {
  const page = new PageImpl()
  page.id = 'p'
  const item = new LayoutItemImpl()
  item.id = 'lamp'
  item.x = 100
  item.y = 100
  item.width = 100
  item.height = 100
  page.layout.push(item)
  if (ambient !== undefined) {
    page.lighting = createLighting()
    page.lighting.ambient!.value = ambient
  }
  return page
}

/** The layer around a board with the lamp's widget, the way a layout mounts it. */
function mountLayer(page: Page, props: Record<string, unknown> = {}) {
  boxes.set('lamp', { left: 100, top: 100, width: 100, height: 100 })
  const bus = new TinyEmitter()
  const shown = ref(true)
  const Board = defineComponent({
    setup: () => () =>
      h(LightLayer, { page, ...props }, () =>
        shown.value ? h('div', { [LIGHT_BOX_ATTRIBUTE]: 'lamp' }) : null,
      ),
  })
  const wrapper = mount(Board, {
    attachTo: document.body,
    global: { provide: { [identifiers.TINY_EMITTER as symbol]: bus } },
  })
  const layer = () => wrapper.findComponent(LightLayer).vm as unknown as { scene: LightScene; lit: boolean }
  return { wrapper, bus, layer, shown }
}

describe('the light layer', () => {
  it('draws a light where a lamp announces it, at the centre of its widget', async () => {
    const { wrapper, bus, layer } = mountLayer(pageWith())
    await flushPromises()
    expect(layer().scene.lights).toHaveLength(0)
    expect(layer().lit).toBe(false)

    bus.emit(ANNOUNCE_LIGHT, lamp())
    await flushPromises()

    expect(layer().scene.lights).toEqual([
      expect.objectContaining({ widgetId: 'lamp', x: 150, y: 150, radius: 200, color: '#ffcc88', front: false }),
    ])
    expect(layer().lit).toBe(true)
    expect(fills.some((each) => each.op === 'lighter')).toBe(true)
    wrapper.unmount()
  })

  it('asks the lamps to announce again once it is there', async () => {
    const bus = new TinyEmitter()
    const asked = vi.fn()
    bus.on(LIGHTS_WANTED, asked)
    const wrapper = mount(LightLayer, {
      props: { page: pageWith() },
      global: { provide: { [identifiers.TINY_EMITTER as symbol]: bus } },
    })
    await flushPromises()
    expect(asked).toHaveBeenCalledTimes(1)
    wrapper.unmount()
  })

  it('follows the widget when it is moved', async () => {
    const page = pageWith()
    const { wrapper, bus, layer } = mountLayer(page)
    bus.emit(ANNOUNCE_LIGHT, lamp())
    await flushPromises()

    boxes.set('lamp', { left: 300, top: 220, width: 100, height: 100 })
    page.layout.get(0).x = 300
    await flushPromises()

    expect(layer().scene.lights[0]).toMatchObject({ x: 350, y: 270 })
    wrapper.unmount()
  })

  it('follows the widget when only its style changes, as a drag does', async () => {
    const { wrapper, bus, layer } = mountLayer(pageWith())
    bus.emit(ANNOUNCE_LIGHT, lamp())
    await flushPromises()
    expect(layer().scene.lights[0]).toMatchObject({ x: 150, y: 150 })

    boxes.set('lamp', { left: 40, top: 60, width: 200, height: 50 })
    wrapper.find(`[${LIGHT_BOX_ATTRIBUTE}]`).element.setAttribute('style', 'left: 40px')
    await flushPromises()

    expect(layer().scene.lights[0]).toMatchObject({ x: 140, y: 85 })
    wrapper.unmount()
  })

  it('reaches half the longer side of its widget where the lamp names no reach', async () => {
    const { wrapper, bus, layer } = mountLayer(pageWith())
    bus.emit(ANNOUNCE_LIGHT, lamp({ radius: undefined }))
    await flushPromises()
    expect(layer().scene.lights[0].radius).toBe(50)

    /* Sized up, the light reaches further */
    boxes.set('lamp', { left: 100, top: 100, width: 300, height: 120 })
    wrapper.find(`[${LIGHT_BOX_ATTRIBUTE}]`).element.setAttribute('style', 'width: 300px')
    await flushPromises()
    expect(layer().scene.lights[0].radius).toBe(150)
    wrapper.unmount()
  })

  it('takes the light away with the lamp, or when the lamp withdraws it', async () => {
    const { wrapper, bus, layer, shown } = mountLayer(pageWith())
    bus.emit(ANNOUNCE_LIGHT, lamp())
    await flushPromises()
    expect(layer().scene.lights).toHaveLength(1)

    /* The widget is gone: nothing is measured for it */
    shown.value = false
    await flushPromises()
    expect(layer().scene.lights).toHaveLength(0)

    shown.value = true
    await flushPromises()
    expect(layer().scene.lights).toHaveLength(1)

    bus.emit(WITHDRAW_LIGHT, { widgetId: 'lamp' })
    await flushPromises()
    expect(layer().scene.lights).toHaveLength(0)
    expect(layer().lit).toBe(false)
    wrapper.unmount()
  })

  it('draws nothing for a lamp that is off', async () => {
    const { wrapper, bus, layer } = mountLayer(pageWith())
    bus.emit(ANNOUNCE_LIGHT, lamp({ on: false }))
    await flushPromises()
    expect(layer().scene.lights).toHaveLength(0)
    wrapper.unmount()
  })

  it('darkens the page below full ambient light, and the light cuts through', async () => {
    const page = pageWith(100)
    const { wrapper, bus, layer } = mountLayer(page)
    bus.emit(ANNOUNCE_LIGHT, lamp())
    await flushPromises()
    expect(layer().scene.darkness).toBe(0)
    expect(fills.some((each) => each.rect)).toBe(false)

    fills = []
    page.lighting!.ambient!.value = 20
    await flushPromises()

    expect(layer().scene.darkness).toBeCloseTo(0.8 * MAX_DARKNESS)
    expect(fills.find((each) => each.rect)?.style).toBe(`rgba(0, 0, 0, ${darknessOf(20)})`)
    expect(fills.some((each) => each.op === 'destination-out')).toBe(true)
    wrapper.unmount()
  })

  it('darkens a page with no lamp on it as well', async () => {
    const { wrapper, layer } = mountLayer(pageWith(0))
    await flushPromises()
    expect(layer().lit).toBe(true)
    expect(layer().scene.darkness).toBe(MAX_DARKNESS)
    wrapper.unmount()
  })

})

describe('a light scene', () => {
  it('puts a cone where it points, and a light on the widgets in front', () => {
    const scene = composeLightScene(
      [lamp({ shape: 'cone', direction: 180, angle: 90, lightsWidgets: true })],
      new Map([['lamp', { x: 0, y: 0, width: 10, height: 10 }]]),
      100,
    )
    expect(scene.lights[0]).toMatchObject({ shape: 'cone', front: true })
    expect(scene.lights[0].direction).toBeCloseTo(Math.PI)
    expect(scene.lights[0].angle).toBeCloseTo(Math.PI / 2)
  })
})
