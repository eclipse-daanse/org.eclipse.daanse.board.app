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
 * A page's weather layer, for any layout.
 *
 * The layout hands over the page, its two canvases and the element its
 * widgets are drawn in; this measures the widgets, runs the engine and
 * decides when not to. It runs only when there is weather to draw, the
 * board is not being edited (or a region is being drawn on it), nobody asked for reduced motion and the
 * layer is on screen - otherwise no frame is requested at all.
 *
 * The widgets are found by the attribute `data-weather-obstacle`, whose
 * value is the widget's id. Measured rather than computed from the
 * layout items, because the two layouts place widgets differently (pixels
 * here, grid cells in the grid) and only the page knows where they ended
 * up. They are measured again when the page changes - a widget moved is a
 * change to the page - when the layer is resized, when its board scrolls,
 * and once a second while it runs, for whatever moves without telling.
 */
import {
  computed,
  onBeforeUnmount,
  onMounted,
  ref,
  toValue,
  watch,
  type MaybeRefOrGetter,
  type Ref,
} from 'vue'
import { useEObject } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import {
  WeatherKind,
  WeatherRegion,
  affectsWidgetsOf,
  weatherKindOf,
  weatherRegionOf,
  readShapes,
  WEATHER_DEFAULTS,
  type Page,
  type ShapeSpec,
  type Weather,
} from 'org.eclipse.daanse.board.app.lib.model.workspace'
import {
  WeatherEngine,
  type Area,
  type BoardShape,
  type Obstacle,
  type WeatherLayerSettings,
} from './engine'

export const OBSTACLE_ATTRIBUTE = 'data-weather-obstacle'

/** A canvas is never drawn at more than twice its CSS size. */
export const MAX_PIXEL_RATIO = 2

/** Kinds this layer draws so far; fog is the second part of #1228. */
const DRAWN: ReadonlySet<WeatherKind> = new Set([WeatherKind.RAIN, WeatherKind.SNOW])

const REMEASURE_MS = 1000

/** One grid unit, in pixels: what a drawn region is measured in. */
export interface GridCell {
  width: number
  height: number
}

/** The base layout's grid: what its widgets line up with when snapping. */
export const DEFAULT_CELL: GridCell = { width: 24, height: 24 }

/** Where a page's weather is drawn, read out of its wrappers. */
export interface WeatherRegionSettings {
  region: WeatherRegion
  /** The area region's shapes, in grid units. */
  shapes: ShapeSpec[]
  /** The widget region's widget. */
  widget: string
}

export function readRegion(weather: Weather | undefined): WeatherRegionSettings {
  return {
    region: weatherRegionOf(weather?.region?.value ?? WEATHER_DEFAULTS.region),
    shapes: readShapes(weather),
    widget: String(weather?.regionWidget?.value ?? WEATHER_DEFAULTS.regionWidget),
  }
}

/** A shape in grid units, on the board in pixels. */
export function shapeOnBoard(shape: ShapeSpec, cell: GridCell): BoardShape {
  if (shape.kind === 'polygon') {
    return { kind: 'polygon', points: shape.points.map((p) => ({ x: p.x * cell.width, y: p.y * cell.height })) }
  }
  return {
    kind: shape.kind,
    x: shape.x * cell.width,
    y: shape.y * cell.height,
    width: shape.width * cell.width,
    height: shape.height * cell.height,
  }
}

/**
 * The region on the board, and the widgets that are obstacles within it.
 *
 * A widget region is the widget as just measured, so it follows the widget
 * when it moves or is resized; that widget is the region rather than
 * something in it, so it is no obstacle. A widget that is not on the page
 * is a region of nothing: no weather rather than weather everywhere.
 */
export function resolveRegion(
  settings: WeatherRegionSettings,
  obstacles: Obstacle[],
  cell: GridCell,
): { area: Area | BoardShape[] | undefined; obstacles: Obstacle[] } {
  if (settings.region === WeatherRegion.AREA) {
    return { area: settings.shapes.map((shape) => shapeOnBoard(shape, cell)), obstacles }
  }
  if (settings.region === WeatherRegion.WIDGET) {
    const widget = obstacles.find((each) => each.id === settings.widget)
    return {
      area: widget
        ? { x: widget.x, y: widget.y, width: widget.width, height: widget.height }
        : { x: 0, y: 0, width: 0, height: 0 },
      obstacles: obstacles.filter((each) => each !== widget),
    }
  }
  return { area: undefined, obstacles }
}

export interface WeatherLayerOptions {
  page: MaybeRefOrGetter<Page | undefined>
  /** True while the board is being edited: the layer stands still and draws nothing. */
  editMode: MaybeRefOrGetter<boolean>
  /**
   * The region being drawn, in grid units, while it is: the layer then
   * runs even on a board being edited, clipped to these shapes rather
   * than to the page's region, so the person sees what they draw.
   */
  drawing?: MaybeRefOrGetter<ShapeSpec[] | undefined>
  host: Ref<HTMLElement | undefined>
  back: Ref<HTMLCanvasElement | undefined>
  front: Ref<HTMLCanvasElement | undefined>
  /** The element that scrolls the widgets, if one does. */
  scroller?: () => HTMLElement | null | undefined
  /** One grid unit of the layout, in pixels, given the host's width. */
  cell?: (hostWidth: number) => GridCell
  /** For tests: where random numbers come from. */
  random?: () => number
}

/** What a page's weather says right now, read out of its wrappers. */
export function readWeather(weather: Weather | undefined): WeatherLayerSettings {
  return {
    kind: weatherKindOf(weather?.kind?.value ?? WEATHER_DEFAULTS.kind),
    intensity: numberOr(weather?.intensity?.value, WEATHER_DEFAULTS.intensity),
    wind: numberOr(weather?.wind?.value, WEATHER_DEFAULTS.wind),
    color: String(weather?.color?.value ?? WEATHER_DEFAULTS.color),
    affectsWidgets: affectsWidgetsOf(weather?.affectsWidgets?.value),
  }
}

/**
 * The widgets under a host, in board coordinates.
 *
 * Board coordinates are screen coordinates relative to the host, plus how
 * far the board is scrolled - so a widget that only scrolled has not moved.
 */
export function measureObstacles(
  host: HTMLElement,
  scroll: { left: number; top: number } = { left: 0, top: 0 },
): Obstacle[] {
  const origin = host.getBoundingClientRect()
  const found: Obstacle[] = []
  for (const element of host.querySelectorAll<HTMLElement>(`[${OBSTACLE_ATTRIBUTE}]`)) {
    const id = element.getAttribute(OBSTACLE_ATTRIBUTE)
    if (!id) continue
    const box = element.getBoundingClientRect()
    if (box.width <= 0 || box.height <= 0) continue
    found.push({
      id,
      x: box.left - origin.left + scroll.left,
      y: box.top - origin.top + scroll.top,
      width: box.width,
      height: box.height,
    })
  }
  return found
}

function numberOr(value: unknown, fallback: number): number {
  if (value === '' || value === null || value === undefined) return fallback
  const n = Number(value)
  return Number.isFinite(n) ? n : fallback
}

function prefersReducedMotion(): MediaQueryList | undefined {
  try {
    return window.matchMedia?.('(prefers-reduced-motion: reduce)')
  } catch {
    return undefined
  }
}

export function useWeatherLayer(options: WeatherLayerOptions) {
  const engine = new WeatherEngine(options.random)

  /* Read through the watched object: a variable driving the kind is a
    change inside the page, and the watched ref is what hears it. */
  const watched = useEObject(() => toValue(options.page))
  const settings = () => readWeather(watched.value?.weather)
  const kind = computed(() => readWeather(watched.value?.weather).kind)
  /* Off, the layer draws behind the widgets only and has no front canvas */
  const affectsWidgets = computed(() => affectsWidgetsOf(watched.value?.weather?.affectsWidgets?.value))

  const reducedMotion = ref(false)
  const tabVisible = ref(true)
  const onScreen = ref(true)

  const drawn = () => toValue(options.drawing)
  const running = computed(
    () =>
      DRAWN.has(kind.value) &&
      (!toValue(options.editMode) || drawn() !== undefined) &&
      !reducedMotion.value &&
      tabVisible.value &&
      onScreen.value,
  )

  let frame = 0
  let last = 0
  let lastMeasure = 0
  let ratio = 1
  let size = { width: 0, height: 0 }
  let back: CanvasRenderingContext2D | null = null
  let front: CanvasRenderingContext2D | null = null

  function scrollOffset() {
    const element = options.scroller?.()
    return { left: element?.scrollLeft ?? 0, top: element?.scrollTop ?? 0 }
  }

  /** Measures the widgets and the visible part of the board again. */
  function measure(): void {
    const host = options.host.value
    if (!host) return
    const scroll = scrollOffset()
    engine.setViewport(scroll.left, scroll.top, size.width, size.height)
    const cell = options.cell?.(size.width) ?? DEFAULT_CELL
    const draft = drawn()
    const region = readRegion(watched.value?.weather)
    const { area, obstacles } = resolveRegion(
      draft ? { ...region, region: WeatherRegion.AREA, shapes: draft } : region,
      measureObstacles(host, scroll),
      cell,
    )
    engine.setRegion(area)
    /* Passing the widgets by: none of them is in the way */
    engine.setObstacles(affectsWidgets.value ? obstacles : [])
    lastMeasure = performance.now()
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
    back = context(options.back.value)
    front = context(options.front.value)
    measure()
  }

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

  function tick(now: number): void {
    frame = 0
    if (!running.value) return
    const dt = last ? (now - last) / 1000 : 0
    last = now
    if (now - lastMeasure > REMEASURE_MS) measure()
    const current = settings()
    engine.step(dt, current)
    engine.draw({ back, front }, current)
    frame = requestAnimationFrame(tick)
  }

  function start(): void {
    if (frame) return
    last = 0
    resize()
    frame = requestAnimationFrame(tick)
  }

  /** Stops asking for frames and leaves both canvases empty. */
  function stop(): void {
    if (frame) cancelAnimationFrame(frame)
    frame = 0
    engine.reset()
    back?.clearRect(0, 0, size.width, size.height)
    front?.clearRect(0, 0, size.width, size.height)
  }

  watch(running, (now) => (now ? start() : stop()))

  /* The front canvas comes and goes with affectsWidgets */
  watch(options.front, () => {
    if (running.value) resize()
  })

  /* The region being drawn changed: clipped to it at once */
  watch(
    () => drawn(),
    () => {
      if (running.value) measure()
    },
    { deep: true },
  )

  /* The page changed - a widget moved, came or went */
  watch(watched, () => {
    if (running.value) measure()
  })

  let resizeObserver: ResizeObserver | undefined
  let intersectionObserver: IntersectionObserver | undefined
  const media = prefersReducedMotion()
  const onMedia = () => (reducedMotion.value = Boolean(media?.matches))
  const onVisibility = () => (tabVisible.value = document.visibilityState !== 'hidden')
  const onScroll = () => {
    if (running.value) measure()
  }

  onMounted(() => {
    onMedia()
    onVisibility()
    media?.addEventListener?.('change', onMedia)
    document.addEventListener('visibilitychange', onVisibility)
    options.scroller?.()?.addEventListener('scroll', onScroll, { passive: true })

    const host = options.host.value
    if (host && typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(() => {
        if (running.value) resize()
      })
      resizeObserver.observe(host)
    }
    if (host && typeof IntersectionObserver !== 'undefined') {
      intersectionObserver = new IntersectionObserver((entries) => {
        onScreen.value = entries.some((entry) => entry.isIntersecting)
      })
      intersectionObserver.observe(host)
    }

    if (running.value) start()
  })

  onBeforeUnmount(() => {
    stop()
    media?.removeEventListener?.('change', onMedia)
    document.removeEventListener('visibilitychange', onVisibility)
    options.scroller?.()?.removeEventListener('scroll', onScroll)
    resizeObserver?.disconnect()
    intersectionObserver?.disconnect()
  })

  return { engine, running, settings, measure, affectsWidgets }
}
