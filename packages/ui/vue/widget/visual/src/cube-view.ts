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
 * The cube, drawn by three.js: one rounded, glossy cell per member of each
 * of three axes, coloured by its value, in a frame the size of the whole.
 *
 * What is in the cube is decided in drawing.ts, without a canvas; this only
 * builds the scene from it. Kept apart from the component, like echarts.ts,
 * so a test can stand in for it - jsdom has no WebGL.
 *
 * The cells assemble when the cube first shows. A pointer over a cell
 * lifts it, says its members and value, and dims what shares no member
 * with it, so the three slices through it stand out. Drag turns the cube,
 * scroll zooms, a double click brings it back; it turns by itself only
 * where the settings ask, and then again a while after a drag.
 */
import {
  BoxGeometry,
  Color,
  DirectionalLight,
  EdgesGeometry,
  HemisphereLight,
  InstancedMesh,
  LineBasicMaterial,
  LineSegments,
  Mesh,
  MeshPhysicalMaterial,
  NeutralToneMapping,
  Object3D,
  PCFSoftShadowMap,
  PerspectiveCamera,
  PlaneGeometry,
  PMREMGenerator,
  Raycaster,
  Scene,
  ShadowMaterial,
  SRGBColorSpace,
  Vector2,
  Vector3,
  WebGLRenderer,
} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js'
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js'
import type { Cube } from './kinds/cube'

type Handler = (params: { name?: string; value?: unknown }) => void

export interface CubeView {
  show(cube: Cube): void
  resize(): void
  on(event: 'click' | 'contextmenu', handler: Handler): void
  dispose(): void
}

/** A cell and the gap to the next: the gap is what makes the cells read as cells. */
const PITCH = 1.22
/** How far the labels stand off their edge at the least, and how much further each time they meet another axis's. */
const STANDOFF = 26
const FURTHER = 16
const SVG = 'http://www.w3.org/2000/svg'
/** How long one cell takes to settle, in seconds, and how far apart the cells start. */
const SETTLE = 0.6
const STAGGER = 0.04
/** How long the cube stays still after a drag before it turns by itself again, in ms. */
const STILL = 4000

const escape = (text: unknown) =>
  String(text ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!)

/** Out a little past its size, then back: a cell settling into its place. */
const settle = (t: number) => {
  const c = 1.5
  return 1 + (c + 1) * (t - 1) ** 3 + c * (t - 1) ** 2
}

/** A CSS colour three.js can read: rgba() loses its alpha, which the frame sets by itself. */
const opaque = (css: string) => {
  const rgb = css.match(/^rgba?\(\s*(\d+)[\s,]+(\d+)[\s,]+(\d+)/i)
  return rgb ? `rgb(${rgb[1]}, ${rgb[2]}, ${rgb[3]})` : css || '#333333'
}

export interface Point {
  x: number
  y: number
}
export interface Box extends Point {
  w: number
  h: number
}

/** The convex hull of points, counter-clockwise (Andrew's monotone chain). */
export function hullOf(points: Point[]): Point[] {
  const sorted = [...points].sort((a, b) => a.x - b.x || a.y - b.y)
  const cross = (o: Point, a: Point, b: Point) => (a.x - o.x) * (b.y - o.y) - (a.y - o.y) * (b.x - o.x)
  const half = (list: Point[]) => {
    const out: Point[] = []
    for (const p of list) {
      while (out.length >= 2 && cross(out[out.length - 2], out[out.length - 1], p) <= 0) out.pop()
      out.push(p)
    }
    out.pop()
    return out
  }
  return sorted.length < 3 ? sorted : [...half(sorted), ...half([...sorted].reverse())]
}

/** Whether a box and a convex polygon overlap: no axis of either separates them. */
export function boxMeetsHull(box: Box, hull: Point[]): boolean {
  if (hull.length < 3) return false
  const corners = [
    { x: box.x - box.w / 2, y: box.y - box.h / 2 },
    { x: box.x + box.w / 2, y: box.y - box.h / 2 },
    { x: box.x + box.w / 2, y: box.y + box.h / 2 },
    { x: box.x - box.w / 2, y: box.y + box.h / 2 },
  ]
  const axes: Point[] = [{ x: 1, y: 0 }, { x: 0, y: 1 }]
  hull.forEach((p, i) => {
    const q = hull[(i + 1) % hull.length]
    axes.push({ x: q.y - p.y, y: p.x - q.x })
  })
  return axes.every((axis) => {
    const span = (points: Point[]) => {
      const values = points.map((p) => p.x * axis.x + p.y * axis.y)
      return [Math.min(...values), Math.max(...values)]
    }
    const [a0, a1] = span(corners)
    const [b0, b1] = span(hull)
    return a1 > b0 && b1 > a0
  })
}

/**
 * How much further along (dx, dy) a box must move to clear the one before it, with a little room:
 * clear once apart across or apart up, whichever comes first along that way.
 */
export function clearance(before: Box, box: Box, dx: number, dy: number): number {
  const gapX = (before.w + box.w) / 2 + 4
  const gapY = (before.h + box.h) / 2 + 2
  const ox = box.x - before.x
  const oy = box.y - before.y
  if (Math.abs(ox) >= gapX || Math.abs(oy) >= gapY) return 0
  const ways: number[] = []
  // Moving along d, the offset across reaches the gap on the side d points to.
  if (Math.abs(dx) > 1e-3) ways.push((Math.sign(dx) * gapX - ox) / dx)
  if (Math.abs(dy) > 1e-3) ways.push((Math.sign(dy) * gapY - oy) / dy)
  const ahead = ways.filter((t) => t >= 0)
  return ahead.length ? Math.min(...ahead) : 0
}

/**
 * How far back a camera of a vertical field of view (in degrees) stands to see a sphere of a radius
 * whole, in a view of a width and height of which the scale takes room at one side. The narrower of
 * the two fields decides: in a tile taller than it is wide, the field across is the smaller one, and a
 * camera framed by its height alone cuts the cube at both sides.
 */
export function homeDistance(radius: number, fov: number, width: number, height: number, room = 0): number {
  const up = (fov / 2) * (Math.PI / 180)
  const across = Math.atan((Math.tan(up) * Math.max(1, width - room)) / Math.max(1, height))
  return radius / Math.sin(Math.min(up, across))
}

/**
 * The order the axes' labels are laid out in: the axis of the fewest members first. Each axis keeps
 * clear of those laid out before it, so the last one gets what room is left and drops labels first;
 * where the standing axis and the one across the front meet at a corner, a few quarters or measures
 * would otherwise lose half their labels to a dozen products. Of two axes alike, the first stays first.
 */
/**
 * The scale's bar, and how far below the middle of the view the scale stands: its full length where the
 * view has room, shorter in a small tile, so it and its numbers fit - and, under a title, between the
 * title and the foot of the view, which in a small tile would otherwise put its top number over the title.
 */
export function scaleFit(height: number, above = 0): { bar: number; shift: number } {
  return { bar: Math.max(36, Math.min(120, height - 64 - above)), shift: above / 2 }
}

export function layoutOrder(axes: readonly [readonly string[], readonly string[], readonly string[]]): (0 | 1 | 2)[] {
  return ([0, 1, 2] as const).slice().sort((a, b) => axes[a].length - axes[b].length)
}

export function createCubeView(host: HTMLElement): CubeView {
  const renderer = new WebGLRenderer({ antialias: true, alpha: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
  renderer.setClearColor(0x000000, 0)
  renderer.outputColorSpace = SRGBColorSpace
  // Neutral, not filmic: a value's colour is information and must stay the one on the scale.
  renderer.toneMapping = NeutralToneMapping
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = PCFSoftShadowMap
  const canvas = renderer.domElement
  Object.assign(canvas.style, { display: 'block', position: 'absolute', inset: '0', outline: 'none' })
  host.append(canvas)

  // The labels and the lines from them to their place: HTML for crisp text, SVG for the lines.
  const layer = document.createElement('div')
  Object.assign(layer.style, { position: 'absolute', inset: '0', pointerEvents: 'none', overflow: 'hidden' })
  const lines = document.createElementNS(SVG, 'svg')
  Object.assign(lines.style, { position: 'absolute', inset: '0', width: '100%', height: '100%', overflow: 'visible' })
  const arrowId = `cube-arrow-${Math.random().toString(36).slice(2)}`
  const arrow = document.createElementNS(SVG, 'path')
  arrow.setAttribute('d', 'M0,0 L7,3.5 L0,7 z')
  const marker = document.createElementNS(SVG, 'marker')
  for (const [name, value] of Object.entries({ id: arrowId, markerWidth: '7', markerHeight: '7', refX: '6.5', refY: '3.5', orient: 'auto', markerUnits: 'userSpaceOnUse' }))
    marker.setAttribute(name, value)
  marker.append(arrow)
  const defs = document.createElementNS(SVG, 'defs')
  defs.append(marker)
  lines.append(defs)
  layer.append(lines)
  host.append(layer)

  const tooltip = document.createElement('div')
  Object.assign(tooltip.style, {
    position: 'absolute',
    pointerEvents: 'none',
    display: 'none',
    padding: '6px 9px',
    borderRadius: '8px',
    background: 'rgba(24, 28, 38, 0.92)',
    color: '#fff',
    font: '12px/1.45 system-ui, sans-serif',
    boxShadow: '0 6px 24px rgba(0, 0, 0, 0.25)',
    whiteSpace: 'nowrap',
    zIndex: '2',
  })
  host.append(tooltip)

  const legend = document.createElement('div')
  Object.assign(legend.style, {
    position: 'absolute',
    right: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4px',
    font: '11px system-ui, sans-serif',
    pointerEvents: 'none',
  })
  host.append(legend)

  // The title the settings give: the cube has no ECharts title of its own to show it.
  const title = document.createElement('div')
  Object.assign(title.style, {
    position: 'absolute',
    left: '0',
    right: '0',
    top: '6px',
    textAlign: 'center',
    font: '600 14px/1.3 system-ui, sans-serif',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    padding: '0 8px',
    pointerEvents: 'none',
  })
  host.append(title)

  /* ------------------------------------------------------------ scene */

  const scene = new Scene()
  const environment = new PMREMGenerator(renderer)
  const room = new RoomEnvironment()
  scene.environment = environment.fromScene(room, 0.04).texture
  room.dispose()
  scene.add(new HemisphereLight(0xffffff, 0x404050, 0.5))
  const sun = new DirectionalLight(0xffffff, 1.5)
  sun.castShadow = true
  sun.shadow.mapSize.set(2048, 2048)
  sun.shadow.radius = 5
  sun.shadow.bias = -0.0004
  scene.add(sun, sun.target)

  const camera = new PerspectiveCamera(32, 1, 0.1, 5000)
  const controls = new OrbitControls(camera, canvas)
  controls.enableDamping = true
  controls.dampingFactor = 0.08
  controls.autoRotateSpeed = 1.1
  controls.enablePan = false

  const geometry = new RoundedBoxGeometry(1, 1, 1, 3, 0.12)
  const material = new MeshPhysicalMaterial({ roughness: 0.3, metalness: 0, clearcoat: 1, clearcoatRoughness: 0.15 })
  const ghostMaterial = new MeshPhysicalMaterial({ roughness: 0.2, transparent: true, opacity: 0.06, depthWrite: false })

  let cube: Cube | undefined
  let shape = ''
  let cells: InstancedMesh | undefined
  let ghosts: InstancedMesh | undefined
  let frame: LineSegments | undefined
  let floor: Mesh | undefined
  /** A label, its line, where it belongs, and its size on screen once measured - read once, not every frame. */
  interface Label {
    element: HTMLDivElement
    line: SVGLineElement
    axis: 0 | 1 | 2
    index: number
    width: number
    height: number
  }
  const labels: Label[] = []
  /** Show a label and its line, or leave both out where the axis has no room for every one. */
  const showLabel = (label: Label, shown: boolean) => {
    label.element.style.visibility = shown ? '' : 'hidden'
    label.line.style.visibility = shown ? '' : 'hidden'
  }
  /** Where the camera stood and how big the view was when the labels were last laid out. */
  let laidOut = ''
  const size = new Vector3()
  let assemblyStart = -1
  let hovered = -1
  /** How far back frameCamera stood the camera, so a resize can tell whether it was zoomed since. */
  let home = 0
  let turning: ReturnType<typeof setTimeout> | undefined
  const handlers: Partial<Record<'click' | 'contextmenu', Handler>> = {}

  const place = new Object3D()
  const centre = (index: number, count: number) => (index - (count - 1) / 2) * PITCH
  /** Axis 0 runs across, axis 1 into the depth, axis 2 upwards: the columns stack as layers. */
  const positionOf = (cell: { x: number; y: number; z: number }, into: Vector3) => {
    const [xs, ys, zs] = cube!.axes
    return into.set(centre(cell.x, xs.length), centre(cell.z, zs.length), centre(cell.y, ys.length))
  }
  /** Where a cell is in the assembly: 0 not yet there, 1 in its place. */
  const delayOf = (cell: { x: number; y: number; z: number }) => (cell.x + cell.y + cell.z) * STAGGER

  function setCell(index: number, scale: number, lift = 0) {
    positionOf(cube!.cells[index], place.position)
    place.position.y += lift
    place.scale.setScalar(Math.max(0.0001, scale))
    place.updateMatrix()
    cells!.setMatrixAt(index, place.matrix)
  }

  /** Dim what shares no member with the cell under the pointer; with none, every cell its own colour. */
  function paint() {
    if (!cube || !cells) return
    const focus = hovered >= 0 ? cube.cells[hovered] : undefined
    const grey = new Color('#8a8f98')
    const colour = new Color()
    cube.cells.forEach((cell, index) => {
      colour.set(cell.colour)
      if (focus && index !== hovered && cell.x !== focus.x && cell.y !== focus.y && cell.z !== focus.z) colour.lerp(grey, 0.75)
      if (index === hovered) colour.offsetHSL(0, 0.04, 0.08)
      cells!.setColorAt(index, colour)
    })
    if (cells.instanceColor) cells.instanceColor.needsUpdate = true
  }

  function clear() {
    for (const mesh of [cells, ghosts]) {
      if (!mesh) continue
      scene.remove(mesh)
      mesh.dispose()
    }
    for (const thing of [frame, floor]) {
      if (!thing) continue
      scene.remove(thing)
      thing.geometry.dispose()
      ;(thing.material as LineBasicMaterial | ShadowMaterial).dispose()
    }
    for (const { element, line } of labels) {
      element.remove()
      line.remove()
    }
    labels.length = 0
    laidOut = ''
    cells = ghosts = frame = floor = undefined
    hovered = -1
    tooltip.style.display = 'none'
  }

  function addLabel(text: string, axis: 0 | 1 | 2, index: number) {
    const element = document.createElement('div')
    element.textContent = text
    element.title = text
    Object.assign(element.style, {
      position: 'absolute',
      left: '0',
      top: '0',
      color: cube!.text,
      font: '11px/1.25 system-ui, sans-serif',
      whiteSpace: 'nowrap',
      maxWidth: '150px',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      opacity: '0.9',
      willChange: 'transform',
    })
    layer.append(element)
    const line = document.createElementNS(SVG, 'line')
    line.setAttribute('stroke', cube!.text)
    line.setAttribute('stroke-opacity', '0.45')
    line.setAttribute('stroke-width', '1')
    line.setAttribute('marker-end', `url(#${arrowId})`)
    lines.append(line)
    labels.push({ element, line, axis, index, width: element.offsetWidth, height: element.offsetHeight })
  }

  const projected = new Vector3()
  /** A point of the scene where it is on screen, in pixels from the view's top left. */
  function onScreen(x: number, y: number, z: number, width: number, height: number) {
    projected.set(x, y, z).project(camera)
    return { x: ((projected.x + 1) / 2) * width, y: ((1 - projected.y) / 2) * height }
  }

  /**
   * Every label shown, none over another, each with a line to its place.
   *
   * A member's place is on the edge of the frame nearest the eye - along the
   * floor for the two lying axes, up a corner for the standing one - so the
   * lines never cross the cube. The labels of an axis stand off that edge
   * on the outside, in the order of their places, pushed apart along the
   * edge as far as their size on screen needs and then centred back on it.
   * An axis whose labels would meet another's stands further off. Laid out
   * again only when the camera or the view has moved.
   */
  function placeLabels() {
    if (!cube || !labels.length) return
    const width = host.clientWidth
    const height = host.clientHeight
    const key = `${camera.position.toArray().map((n) => n.toFixed(3))}|${width}x${height}`
    if (key === laidOut) return
    laidOut = key

    for (const label of labels) {
      if (label.width) continue
      label.width = label.element.offsetWidth
      label.height = label.element.offsetHeight
    }
    const [xs, ys, zs] = cube.axes
    const edge = 0.175
    const halfX = size.x / 2 + edge
    const halfY = size.y / 2 + edge
    const halfZ = size.z / 2 + edge
    const front = camera.position.z >= 0 ? 1 : -1
    const side = camera.position.x >= 0 ? 1 : -1
    const placeOf = (axis: 0 | 1 | 2, index: number) =>
      axis === 0
        ? onScreen(centre(index, xs.length), -halfY, front * halfZ, width, height)
        : axis === 1
          ? onScreen(side * halfX, -halfY, centre(index, ys.length), width, height)
          : onScreen(-side * halfX, centre(index, zs.length), front * halfZ, width, height)
    const middle = onScreen(0, 0, 0, width, height)
    // The cube as it stands on screen: no label may lie over it.
    const corners: Point[] = []
    for (const x of [-halfX, halfX]) for (const y of [-halfY, halfY]) for (const z of [-halfZ, halfZ]) corners.push(onScreen(x, y, z, width, height))
    const silhouette = hullOf(corners)
    // What else stands in the view, the scale and the title, which no label may lie over either.
    const taken: Box[] = []
    const view = host.getBoundingClientRect()
    for (const element of [legend, title.firstElementChild]) {
      if (!element?.childNodes.length) continue
      const box = element.getBoundingClientRect()
      if (box.width && box.height)
        taken.push({ x: box.left - view.left + box.width / 2, y: box.top - view.top + box.height / 2, w: box.width + 8, h: box.height + 4 })
    }
    const overlap = (a: Box, b: Box) => Math.abs(a.x - b.x) * 2 < a.w + b.w && Math.abs(a.y - b.y) * 2 < a.h + b.h
    const meets = (a: Box) => boxMeetsHull(a, silhouette) || taken.some((b) => overlap(a, b))

    for (const axis of layoutOrder(cube.axes)) {
      const own = labels.filter((label) => label.axis === axis)
      if (!own.length) continue
      const places = own.map((label) => placeOf(axis, label.index))
      // Along the edge on screen, and out from the cube across it.
      let dx = places[places.length - 1].x - places[0].x
      let dy = places[places.length - 1].y - places[0].y
      const length = Math.hypot(dx, dy)
      const mx = places.reduce((sum, p) => sum + p.x, 0) / places.length
      const my = places.reduce((sum, p) => sum + p.y, 0) / places.length
      let nx: number
      let ny: number
      if (length < 4 * own.length) {
        // Seen end on, every place is in one spot: the labels form a list standing out from it.
        const away = Math.hypot(mx - middle.x, my - middle.y)
        ;[nx, ny] = away < 1 ? [0, 1] : [(mx - middle.x) / away, (my - middle.y) / away]
        ;[dx, dy] = [-ny, nx]
      } else {
        ;[dx, dy] = [dx / length, dy / length]
        ;[nx, ny] = [-dy, dx]
        const outward = (mx - middle.x) * nx + (my - middle.y) * ny
        if (outward < 0) [nx, ny] = [-nx, -ny]
      }

      const across = own.map((label) => Math.abs(label.width * nx) + Math.abs(label.height * ny))
      const wanted = places.map((p) => p.x * dx + p.y * dy)
      const order = own.map((_, i) => i).sort((a, b) => wanted[a] - wanted[b])

      /**
       * The labels of every step-th member, laid out: pushed apart along the edge, centred back on
       * it, then stood off it until they meet nothing, moved back into the view where they fit.
       * Undefined where no standoff gives that.
       */
      const layout = (step: number) => {
        const kept = order.filter((_, k) => k % step === 0)
        const boxAt = (i: number, slide: number, off: number): Box => {
          const out = off + across[i] / 2
          return { x: places[i].x + nx * out + dx * slide, y: places[i].y + ny * out + dy * slide, w: own[i].width + 4, h: own[i].height + 2 }
        }
        // Each pushed along the edge just clear of the one before, measured on the boxes themselves:
        // a wider label stands further out, so on a slanting edge it reaches sideways into its neighbour.
        // How far apart they stand off the edge moves every box alike, so the standoff does not matter here.
        const slides = new Map<number, number>()
        kept.forEach((i, k) => {
          if (k === 0) {
            slides.set(i, 0)
            return
          }
          const before = kept[k - 1]
          let slide = Math.max(0, wanted[before] + slides.get(before)! - wanted[i])
          slide += clearance(boxAt(before, slides.get(before)!, 0), boxAt(i, slide, 0), dx, dy)
          slides.set(i, slide)
        })
        const shift = -[...slides.values()].reduce((sum, slide) => sum + slide, 0) / kept.length
        const fit = (low: number, high: number, size: number) => (high - low > size - 4 ? undefined : low < 2 ? 2 - low : high > size - 2 ? size - 2 - high : 0)
        for (let tries = 0; tries < 16; tries++) {
          const off = STANDOFF + tries * FURTHER
          const boxes = new Map(kept.map((i) => [i, boxAt(i, slides.get(i)! + shift, off)]))
          // The whole axis moved back into the view, so none is cut off at an edge; where it cannot be, fewer are shown.
          const all = [...boxes.values()]
          const moveX = fit(Math.min(...all.map((b) => b.x - b.w / 2)), Math.max(...all.map((b) => b.x + b.w / 2)), width)
          const moveY = fit(Math.min(...all.map((b) => b.y - b.h / 2)), Math.max(...all.map((b) => b.y + b.h / 2)), height)
          if (moveX === undefined || moveY === undefined) return undefined
          for (const box of all) {
            box.x += moveX
            box.y += moveY
          }
          // Pushed apart as they are, two of one axis can still meet where the edge bends away on screen.
          if (!all.some((a, j) => meets(a) || all.some((b, k) => k < j && overlap(a, b)))) return boxes
        }
        return undefined
      }
      // As many labels as have room: every one where they fit, else every second, third, ... member's.
      let boxes: Map<number, Box> | undefined
      for (let step = 1; !boxes && step <= own.length; step = step < 4 ? step + 1 : Math.ceil(step * 1.5)) boxes = layout(step)
      // Not even one fits clear of the rest: the axis goes without, and the tooltip still names its members.
      boxes ??= layout(own.length) ?? new Map()
      taken.push(...boxes.values())

      own.forEach((label, i) => {
        const box = boxes.get(i)
        showLabel(label, !!box)
        if (!box) return
        label.element.style.transform = `translate(${Math.round(box.x - label.width / 2)}px, ${Math.round(box.y - label.height / 2)}px)`
        // From the side of the label that faces its place, to the place.
        const vx = places[i].x - box.x
        const vy = places[i].y - box.y
        const reach = Math.min(
          vx ? label.width / 2 / Math.abs(vx) : Infinity,
          vy ? label.height / 2 / Math.abs(vy) : Infinity,
          1,
        )
        label.line.setAttribute('x1', String(box.x + vx * reach))
        label.line.setAttribute('y1', String(box.y + vy * reach))
        label.line.setAttribute('x2', String(places[i].x))
        label.line.setAttribute('y2', String(places[i].y))
      })
    }
  }

  /** What the title takes of the view's height from its top, its gap below included; 0 without one. */
  const titleRoom = () => (title.childNodes.length && title.offsetHeight ? title.offsetTop + title.offsetHeight + 4 : 0)
  /** The scale fitted to the view's height, below the title where there is one. */
  function fitScale() {
    const { bar, shift } = scaleFit(host.clientHeight || 200, titleRoom())
    legend.style.top = `calc(50% + ${shift}px)`
    const element = legend.children[1] as HTMLElement | undefined
    if (element) element.style.height = `${bar}px`
  }

  function showTitle(next: Cube) {
    title.replaceChildren()
    if (!next.title) return
    const text = document.createElement('span')
    text.textContent = next.title
    text.title = next.title
    text.style.color = next.text
    title.append(text)
  }

  function showLegend(next: Cube) {
    legend.replaceChildren()
    if (!next.showScale) return
    const high = document.createElement('span')
    const bar = document.createElement('span')
    const low = document.createElement('span')
    high.textContent = next.format(next.max)
    low.textContent = next.format(next.min)
    high.style.color = low.style.color = next.text
    Object.assign(bar.style, {
      width: '12px',
      borderRadius: '6px',
      background: `linear-gradient(to top, ${next.scale.join(', ')})`,
    })
    legend.append(high, bar, low)
    fitScale()
  }

  /** What the scale beside the cube takes of the view's width, the gap to the cube included; 0 without one. */
  const legendRoom = () => (legend.childNodes.length ? legend.offsetWidth + 14 : 0)

  /**
   * The camera fitted to the view: its shape, and its centre moved left by half the scale's room,
   * so the cube stands in the middle of what the scale leaves rather than under it.
   */
  function aim() {
    const width = host.clientWidth || 1
    const height = host.clientHeight || 1
    camera.aspect = width / height
    const room = legendRoom()
    if (room) camera.setViewOffset(width, height, room / 2, 0, width, height)
    else camera.clearViewOffset()
    camera.updateProjectionMatrix()
  }

  /**
   * The camera back where it sees the whole cube, from a little above and aside - or, kept, from
   * where it looks now, only as far back as the view's shape asks.
   */
  function frameCamera(keepDirection = false) {
    // Room around the cube for the labels that stand off its edges.
    const radius = size.length() / 2 + (cube?.showLabels ? 3.2 : 1.5)
    const distance = homeDistance(radius, camera.fov, host.clientWidth || 1, host.clientHeight || 1, legendRoom())
    home = distance
    const direction = keepDirection && camera.position.lengthSq() > 0 ? camera.position.clone() : new Vector3(1, 0.75, 1.35)
    camera.position.copy(direction.normalize().multiplyScalar(distance))
    camera.near = distance / 100
    camera.far = distance * 10
    camera.updateProjectionMatrix()
    controls.target.set(0, 0, 0)
    controls.minDistance = radius * 1.1
    controls.maxDistance = distance * 3
    controls.update()
    sun.position.set(radius * 1.2, radius * 2.4, radius * 1.6)
    const shadow = sun.shadow.camera
    shadow.left = shadow.bottom = -radius * 1.5
    shadow.right = shadow.top = radius * 1.5
    shadow.near = 0.1
    shadow.far = radius * 6
    shadow.updateProjectionMatrix()
  }

  function build(next: Cube) {
    const [xs, ys, zs] = next.axes
    const nextShape = [xs, ys, zs].map((axis) => axis.join('\u0000')).join('\u0001')
    const fresh = nextShape !== shape
    // Labels or the scale turned on or off take or give back room: the camera stands as far back as that asks.
    const reframe = !fresh && (cube?.showLabels !== next.showLabels || cube?.showScale !== next.showScale)
    clear()
    cube = next
    shape = nextShape
    size.set(xs.length * PITCH, zs.length * PITCH, ys.length * PITCH)

    cells = new InstancedMesh(geometry, material, next.cells.length)
    cells.castShadow = true
    cells.receiveShadow = true
    next.cells.forEach((_, index) => setCell(index, fresh ? 0 : 1))
    cells.instanceMatrix.needsUpdate = true
    paint()
    scene.add(cells)

    // Where the cube has no value a faint cell keeps the place, so a gap reads as nothing there, not as a hole.
    const filled = new Set(next.cells.map((cell) => `${cell.x}:${cell.y}:${cell.z}`))
    const total = xs.length * ys.length * zs.length
    if (total > filled.size && total <= 60000) {
      const empty: { x: number; y: number; z: number }[] = []
      for (let x = 0; x < xs.length; x++)
        for (let y = 0; y < ys.length; y++)
          for (let z = 0; z < zs.length; z++) if (!filled.has(`${x}:${y}:${z}`)) empty.push({ x, y, z })
      ghosts = new InstancedMesh(geometry, ghostMaterial, empty.length)
      ghostMaterial.color.set(opaque(next.text))
      empty.forEach((cell, index) => {
        positionOf(cell, place.position)
        place.scale.setScalar(0.9)
        place.updateMatrix()
        ghosts!.setMatrixAt(index, place.matrix)
      })
      scene.add(ghosts)
    }

    frame = new LineSegments(
      new EdgesGeometry(new BoxGeometry(size.x + 0.35, size.y + 0.35, size.z + 0.35)),
      new LineBasicMaterial({ color: opaque(next.text), transparent: true, opacity: 0.25 }),
    )
    scene.add(frame)

    floor = new Mesh(new PlaneGeometry(size.x * 4 + 20, size.z * 4 + 20), new ShadowMaterial({ opacity: 0.16 }))
    floor.rotation.x = -Math.PI / 2
    floor.position.y = -size.y / 2 - 0.3
    floor.receiveShadow = true
    scene.add(floor)

    arrow.setAttribute('fill', next.text)
    arrow.setAttribute('fill-opacity', '0.6')
    if (next.showLabels) {
      next.axes.forEach((members, axis) => members.forEach((member, index) => addLabel(member, axis as 0 | 1 | 2, index)))
    }
    // The title first: the scale stands below it.
    showTitle(next)
    showLegend(next)
    aim()

    if (fresh) {
      frameCamera()
      assemblyStart = performance.now()
    } else if (reframe) frameCamera(true)
    controls.autoRotate = next.autoRotate
  }

  /* ------------------------------------------------------------- loop */

  let running = true
  function tick(now: number) {
    if (!running) return
    requestAnimationFrame(tick)
    if (cube && cells && assemblyStart >= 0) {
      const elapsed = (now - assemblyStart) / 1000
      let done = true
      cube.cells.forEach((cell, index) => {
        const t = Math.min(1, Math.max(0, (elapsed - delayOf(cell)) / SETTLE))
        if (t < 1) done = false
        setCell(index, t <= 0 ? 0 : settle(t), index === hovered ? 0.18 : 0)
      })
      cells.instanceMatrix.needsUpdate = true
      if (done) assemblyStart = -1
    }
    controls.update()
    placeLabels()
    renderer.render(scene, camera)
  }
  requestAnimationFrame(tick)

  /* ------------------------------------------------------ the pointer */

  const raycaster = new Raycaster()
  const pointer = new Vector2()
  let pressed: { x: number; y: number } | undefined

  function cellAt(event: PointerEvent | MouseEvent): number {
    if (!cells) return -1
    const box = canvas.getBoundingClientRect()
    pointer.set(((event.clientX - box.left) / box.width) * 2 - 1, -((event.clientY - box.top) / box.height) * 2 + 1)
    raycaster.setFromCamera(pointer, camera)
    const hit = raycaster.intersectObject(cells, false)[0]
    return hit?.instanceId ?? -1
  }

  function describe(index: number) {
    const cell = cube!.cells[index]
    const [xs, ys, zs] = cube!.axes
    return { name: [xs[cell.x], ys[cell.y], zs[cell.z]].join(' · '), value: cell.value }
  }

  function hover(index: number, event?: PointerEvent) {
    if (index !== hovered) {
      const before = hovered
      hovered = index
      if (cube && cells && assemblyStart < 0) {
        if (before >= 0) setCell(before, 1)
        if (index >= 0) setCell(index, 1, 0.18)
        cells.instanceMatrix.needsUpdate = true
      }
      paint()
      canvas.style.cursor = index >= 0 ? 'pointer' : ''
    }
    if (index < 0 || !event || !cube) {
      tooltip.style.display = 'none'
      return
    }
    const cell = cube.cells[index]
    const [xs, ys, zs] = cube.axes
    tooltip.innerHTML = `${escape(xs[cell.x])}<br/>${escape(ys[cell.y])}<br/>${escape(zs[cell.z])}<br/><b>${escape(cube.format(cell.value))}</b>`
    const box = host.getBoundingClientRect()
    const x = event.clientX - box.left
    const y = event.clientY - box.top
    tooltip.style.display = 'block'
    const width = tooltip.offsetWidth
    tooltip.style.left = `${Math.min(x + 14, box.width - width - 4)}px`
    tooltip.style.top = `${Math.max(4, y - tooltip.offsetHeight - 10)}px`
  }

  const onMove = (event: PointerEvent) => {
    if (event.buttons) return
    hover(cellAt(event), event)
  }
  const onLeave = () => hover(-1)
  const onDown = (event: PointerEvent) => {
    pressed = { x: event.clientX, y: event.clientY }
  }
  const onUp = (event: PointerEvent) => {
    const moved = pressed ? Math.hypot(event.clientX - pressed.x, event.clientY - pressed.y) : Infinity
    pressed = undefined
    if (moved > 4 || event.button !== 0) return
    const index = cellAt(event)
    if (index >= 0) handlers.click?.(describe(index))
  }
  const onMenu = (event: MouseEvent) => {
    const index = cellAt(event)
    if (index >= 0) handlers.contextmenu?.(describe(index))
  }
  canvas.addEventListener('pointermove', onMove)
  canvas.addEventListener('pointerleave', onLeave)
  canvas.addEventListener('pointerdown', onDown)
  canvas.addEventListener('pointerup', onUp)
  canvas.addEventListener('contextmenu', onMenu)
  // A double click brings the cube back to where it started, however far it was turned.
  const onHome = () => {
    if (cube) frameCamera()
  }
  canvas.addEventListener('dblclick', onHome)

  // A drag stops the turning; left still a while, the cube turns by itself again.
  controls.addEventListener('start', () => {
    clearTimeout(turning)
    controls.autoRotate = false
    hover(-1)
  })
  controls.addEventListener('end', () => {
    clearTimeout(turning)
    turning = setTimeout(() => (controls.autoRotate = cube?.autoRotate ?? false), STILL)
  })

  function resize() {
    const width = host.clientWidth || 1
    const height = host.clientHeight || 1
    renderer.setSize(width, height, false)
    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`
    laidOut = ''
    fitScale()
    aim()
    // A view of another shape needs the camera nearer or further; unless the user has zoomed, it follows.
    if (cube && home && Math.abs(camera.position.length() - home) < home * 1e-3) frameCamera(true)
  }
  resize()

  return {
    show: build,
    resize,
    on(event, handler) {
      handlers[event] = handler
    },
    dispose() {
      running = false
      clearTimeout(turning)
      clear()
      canvas.removeEventListener('pointermove', onMove)
      canvas.removeEventListener('pointerleave', onLeave)
      canvas.removeEventListener('pointerdown', onDown)
      canvas.removeEventListener('pointerup', onUp)
      canvas.removeEventListener('contextmenu', onMenu)
      canvas.removeEventListener('dblclick', onHome)
      controls.dispose()
      geometry.dispose()
      material.dispose()
      ghostMaterial.dispose()
      scene.environment?.dispose()
      environment.dispose()
      renderer.dispose()
      canvas.remove()
      layer.remove()
      tooltip.remove()
      legend.remove()
      title.remove()
    },
  }
}
