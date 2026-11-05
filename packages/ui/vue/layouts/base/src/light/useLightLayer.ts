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

/**
 * A page's light layer, for any layout (#1242).
 *
 * Collects the lights the lamps on the page announce on the event bus,
 * measures the lamps' widgets, and draws the lights between the page's
 * background and its widgets - the way the weather layer draws between
 * them. Nothing moves by itself, so nothing runs per frame: the layer
 * draws again when something changed - a light announced, changed or
 * taken away, the page's ambient light, a widget moved or resized, the
 * board scrolled or the layer resized.
 *
 * The widgets are found by the attribute `data-light-box`, whose value is
 * the widget's id, on the element that is moved and resized. A widget's
 * style changing is what moving it is, in both layouts and in edit mode
 * alike, so the layer watches the styles under it and the light follows
 * the widget at once.
 */
import {
  computed,
  inject,
  nextTick,
  onBeforeUnmount,
  onMounted,
  shallowRef,
  toValue,
  watch,
  type MaybeRefOrGetter,
  type Ref,
} from 'vue'
import type { TinyEmitter } from 'tiny-emitter'
import { identifiers } from 'org.eclipse.daanse.board.app.lib.core'
import { useEObject } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import {
  ANNOUNCE_LIGHT,
  LIGHTS_WANTED,
  WITHDRAW_LIGHT,
  ambientOf,
  type LightSourceSpec,
  type Page,
  type WithdrawLightEvent,
} from 'org.eclipse.daanse.board.app.lib.model.workspace'
import { composeLightScene, drawLightScene, isLit, type Box } from './scene'

export const LIGHT_BOX_ATTRIBUTE = 'data-light-box'

/** A canvas is never drawn at more than twice its CSS size. */
export const MAX_PIXEL_RATIO = 2

export interface LightLayerOptions {
  page: MaybeRefOrGetter<Page | undefined>
  /** True while the board is being edited: every light is drawn over the board, the page is not darkened. */
  editMode: MaybeRefOrGetter<boolean>
  host: Ref<HTMLElement | undefined>
  back: Ref<HTMLCanvasElement | undefined>
  front: Ref<HTMLCanvasElement | undefined>
  /** The element that scrolls the widgets, if one does. */
  scroller?: () => HTMLElement | null | undefined
}

/** The boxes of the widgets under a host, relative to it, by widget id. */
export function measureLightBoxes(host: HTMLElement): Map<string, Box> {
  const origin = host.getBoundingClientRect()
  const found = new Map<string, Box>()
  for (const element of host.querySelectorAll<HTMLElement>(`[${LIGHT_BOX_ATTRIBUTE}]`)) {
    const id = element.getAttribute(LIGHT_BOX_ATTRIBUTE)
    if (!id) continue
    const box = element.getBoundingClientRect()
    if (box.width <= 0 || box.height <= 0) continue
    found.set(id, { x: box.left - origin.left, y: box.top - origin.top, width: box.width, height: box.height })
  }
  return found
}

export function useLightLayer(options: LightLayerOptions) {
  /* Read through the watched object: a variable driving the ambient light
    is a change inside the page, and the watched ref is what hears it. */
  const watched = useEObject(() => toValue(options.page))
  const ambient = computed(() => ambientOf(watched.value?.lighting?.ambient?.value))

  const sources = shallowRef(new Map<string, LightSourceSpec>())
  const boxes = shallowRef(new Map<string, Box>())

  const scene = computed(() =>
    composeLightScene(sources.value.values(), boxes.value, ambient.value, Boolean(toValue(options.editMode))),
  )
  const lit = computed(() => isLit(scene.value))

  /* ------------------------------------------------------------ sources */

  /* Listened to from the start: the lamps on the board mount before the layer does. */
  const bus = inject<TinyEmitter | null>(identifiers.TINY_EMITTER, null)
  const onAnnounce = (source: LightSourceSpec | undefined) => {
    if (!source?.widgetId) return
    const next = new Map(sources.value)
    next.set(source.widgetId, { ...source })
    sources.value = next
  }
  const onWithdraw = (event: WithdrawLightEvent | undefined) => {
    if (!event?.widgetId || !sources.value.has(event.widgetId)) return
    const next = new Map(sources.value)
    next.delete(event.widgetId)
    sources.value = next
  }
  bus?.on(ANNOUNCE_LIGHT, onAnnounce)
  bus?.on(WITHDRAW_LIGHT, onWithdraw)

  /* ------------------------------------------------------------ drawing */

  let ratio = 1
  let size = { width: 0, height: 0 }

  function context(canvas: HTMLCanvasElement | undefined): CanvasRenderingContext2D | null {
    let ctx: CanvasRenderingContext2D | null = null
    try {
      ctx = canvas?.getContext('2d') ?? null
    } catch {
      ctx = null
    }
    ctx?.setTransform(ratio, 0, 0, ratio, 0, 0)
    return ctx
  }

  function draw(): void {
    drawLightScene({ back: context(options.back.value), front: context(options.front.value) }, scene.value, size)
  }

  /** Measures the widgets again; the scene follows, and the drawing with it. */
  function measure(): void {
    const host = options.host.value
    if (!host) return
    boxes.value = measureLightBoxes(host)
  }

  function resize(): void {
    const host = options.host.value
    if (!host) return
    const box = host.getBoundingClientRect()
    size = { width: Math.round(box.width), height: Math.round(box.height) }
    ratio = Math.min(window.devicePixelRatio || 1, MAX_PIXEL_RATIO)
    for (const canvas of [options.back.value, options.front.value]) {
      if (!canvas) continue
      canvas.width = Math.max(1, Math.round(size.width * ratio))
      canvas.height = Math.max(1, Math.round(size.height * ratio))
    }
    measure()
    draw()
  }

  /* Several changes in one task are measured once */
  let pending = false
  function measureSoon(): void {
    if (pending) return
    pending = true
    queueMicrotask(() => {
      pending = false
      measure()
    })
  }

  watch(scene, draw)

  /* The page changed - a widget moved, came or went - or a light came: measured once the DOM shows it */
  watch([watched, sources], () => nextTick(measure))

  let resizeObserver: ResizeObserver | undefined
  let mutationObserver: MutationObserver | undefined
  const onScroll = () => measure()

  onMounted(() => {
    options.scroller?.()?.addEventListener('scroll', onScroll, { passive: true })
    const host = options.host.value
    if (host && typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(() => resize())
      resizeObserver.observe(host)
    }
    if (host && typeof MutationObserver !== 'undefined') {
      /* A widget moved or resized is a style changed under the host */
      mutationObserver = new MutationObserver(measureSoon)
      mutationObserver.observe(host, {
        subtree: true,
        childList: true,
        attributes: true,
        attributeFilter: ['style', 'class', LIGHT_BOX_ATTRIBUTE],
      })
    }
    resize()
    /* Lamps that announced before this layer listened announce again */
    bus?.emit(LIGHTS_WANTED)
  })

  onBeforeUnmount(() => {
    bus?.off(ANNOUNCE_LIGHT, onAnnounce)
    bus?.off(WITHDRAW_LIGHT, onWithdraw)
    options.scroller?.()?.removeEventListener('scroll', onScroll)
    resizeObserver?.disconnect()
    mutationObserver?.disconnect()
  })

  return { scene, lit, sources, ambient, measure }
}
