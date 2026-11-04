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
 * The weather itself: particles, the widgets they meet, and what settles.
 *
 * No Vue and no DOM in here. The layer measures the widgets and owns the
 * canvases; this is handed the rectangles and a time step and draws onto
 * whatever 2D contexts it is given. That is what lets the behaviour that
 * matters - a flake stopping on an edge, a drop bursting on one, snow
 * falling off a widget that moved - be tested without a browser.
 *
 * Everything is in board coordinates: a widget's rectangle as the board
 * lays it out, independent of how far the board is scrolled. The viewport
 * says which part of the board is on screen; particles are made above it
 * and dropped below it, and drawing shifts by it. Scrolling therefore
 * moves nothing and shakes no snow off.
 */
import { WeatherKind, type ShapeSpec } from 'org.eclipse.daanse.board.app.lib.model.workspace'

/** A widget as an obstacle: where it is on the board, and which one it is. */
export interface Obstacle {
  id: string
  x: number
  y: number
  width: number
  height: number
}

/** What the layer is told to draw, already read out of the page's wrappers. */
export interface WeatherLayerSettings {
  kind: WeatherKind
  /** 0 to 100. */
  intensity: number
  /** -100 to 100. */
  wind: number
  /** A CSS colour, or empty for the kind's own. */
  color: string
  /**
   * Whether what falls acts with the widgets. Off, nothing settles or
   * splashes, and everything is drawn behind the widgets. Left out, on.
   */
  affectsWidgets?: boolean
}

/** A rectangle on the board, in board coordinates. */
export interface Area {
  x: number
  y: number
  width: number
  height: number
}

/**
 * One shape of a region, in board coordinates: a drawn shape once the
 * layer has turned its grid units into pixels.
 */
export type BoardShape = ShapeSpec

/** The two surfaces: behind the widgets and above them. */
export interface WeatherSurfaces {
  back: CanvasRenderingContext2D | null
  front: CanvasRenderingContext2D | null
}

/*
 * The limits that keep a frame cheap. The cap holds however large the page
 * and however high the intensity: past it, a new particle simply is not made.
 */
export const LIMITS = {
  /** Falling particles, near and far together. */
  particles: 600,
  /** Splashes alive at once. */
  splashes: 160,
  /** Width of one column of a snow profile, in pixels. */
  bin: 4,
  /** The deepest snow can lie on a widget, in pixels. */
  depth: 12,
  /** Of a widget's height, at most this much may be snow. */
  depthShare: 0.2,
  /** A step longer than this is a tab coming back, not a frame. */
  step: 0.05,
} as const

/*
 * Melting, as a share of the depth per second. Snow that melts in
 * proportion to its depth settles where melting takes away what falls:
 * twice the snowfall, twice the depth, instead of a heap that grows to the
 * cap and stays there. Once it stops snowing it goes faster, and a fixed
 * part on top, so the last of it does not linger.
 */
export const MELT = {
  /** While it snows. */
  snowing: 0.04,
  /** Once the kind is something else. */
  after: 0.5,
  /** Pixels per second on top of that, once the kind is something else. */
  afterFixed: 1.5,
} as const

/** Particles made per pixel of width per second, at intensity 100. */
const RATE: Partial<Record<WeatherKind, number>> = {
  [WeatherKind.RAIN]: 0.3,
  [WeatherKind.SNOW]: 0.05,
}

/** Of what is made, this share falls far away, behind the widgets. */
const FAR_SHARE = 0.4

const DEFAULT_COLOR: Partial<Record<WeatherKind, string>> = {
  [WeatherKind.RAIN]: 'rgb(174, 194, 224)',
  [WeatherKind.SNOW]: 'rgb(255, 255, 255)',
}

interface Particle {
  x: number
  y: number
  /** Where it was before this step - an edge is met between the two. */
  px: number
  py: number
  vx: number
  vy: number
  size: number
  far: boolean
  /** For snow: where in its sway it is. */
  phase: number
}

interface Splash {
  x: number
  y: number
  /** The edge it jumped off; falling back past it, it is gone. */
  edge: number
  vx: number
  vy: number
  life: number
}

/** The snow lying on one widget: a height per column across its top edge. */
export interface Profile {
  rect: Obstacle
  heights: Float32Array
}

export class WeatherEngine {
  readonly particles: Particle[] = []
  readonly splashes: Splash[] = []
  readonly profiles = new Map<string, Profile>()
  /** How many particles have been made - what a rate is measured by. */
  spawned = 0

  private obstacles: Obstacle[] = []
  private viewport = { x: 0, y: 0, width: 0, height: 0 }
  /** The box around the region; undefined is the whole board. */
  private regionHeld: Area | undefined
  /** The shapes the region is the union of, when there is a region. */
  private shapesHeld: BoardShape[] = []
  private carry = 0
  private time = 0
  private kind: WeatherKind = WeatherKind.NONE
  private filled = false

  constructor(private readonly random: () => number = Math.random) {}

  /** The widgets as last measured. */
  get obstacleRects(): readonly Obstacle[] {
    return this.obstacles
  }

  /** The box around the region the weather keeps to, or undefined for the whole board. */
  get region(): Area | undefined {
    return this.regionHeld
  }

  /** The shapes of the region; none while it covers the whole board. */
  get regionShapes(): readonly BoardShape[] {
    return this.shapesHeld
  }

  /**
   * Keeps the weather to a rectangle of the board or to the union of
   * shapes, or lets it cover the whole board again with undefined.
   *
   * A particle is made and kept within the box around the shapes, and is
   * drawn only inside one of them. No shapes at all is a region of
   * nothing, not the whole board.
   */
  setRegion(region: Area | readonly BoardShape[] | undefined): void {
    if (!region) {
      this.regionHeld = undefined
      this.shapesHeld = []
      return
    }
    const shapes: BoardShape[] = isShapeList(region)
      ? region.map(normalised).filter((shape): shape is BoardShape => shape !== undefined)
      : [{ kind: 'rectangle', x: region.x, y: region.y, width: Math.max(0, region.width), height: Math.max(0, region.height) }]
    this.shapesHeld = shapes
    this.regionHeld = boxAround(shapes)
  }

  /**
   * Where particles are made and kept: the region where it is on screen,
   * or the screen.
   */
  private get bounds(): Area {
    const v = this.viewport
    const r = this.regionHeld
    if (!r) return v
    const x = Math.max(v.x, r.x)
    const y = Math.max(v.y, r.y)
    const right = Math.min(v.x + v.width, r.x + r.width)
    const bottom = Math.min(v.y + v.height, r.y + r.height)
    return { x, y, width: Math.max(0, right - x), height: Math.max(0, bottom - y) }
  }

  /** The part of the board on screen, in board coordinates. */
  setViewport(x: number, y: number, width: number, height: number): void {
    this.viewport = { x, y, width, height }
  }

  /**
   * The widgets, as they now stand.
   *
   * A widget that moved, changed width or went away loses its snow: what
   * lay on it falls as flakes from where its top edge was. One that only
   * grew taller keeps it - its top did not move.
   */
  setObstacles(next: Obstacle[]): void {
    const seen = new Set<string>()
    for (const rect of next) {
      seen.add(rect.id)
      const held = this.profiles.get(rect.id)
      if (!held) {
        this.profiles.set(rect.id, newProfile(rect))
        continue
      }
      const moved =
        Math.abs(held.rect.x - rect.x) > 0.5 ||
        Math.abs(held.rect.y - rect.y) > 0.5 ||
        Math.abs(held.rect.width - rect.width) > 0.5
      if (moved) {
        this.shakeOff(held)
        this.profiles.set(rect.id, newProfile(rect))
      } else {
        held.rect = rect
      }
    }
    for (const [id, held] of this.profiles) {
      if (seen.has(id)) continue
      this.shakeOff(held)
      this.profiles.delete(id)
    }
    this.obstacles = next
  }

  /** Forgets every particle and all settled snow - a fresh start. */
  reset(): void {
    this.particles.length = 0
    this.splashes.length = 0
    for (const profile of this.profiles.values()) profile.heights.fill(0)
    this.carry = 0
    this.filled = false
  }

  /** Advances the weather by dt seconds. */
  step(dt: number, settings: WeatherLayerSettings): void {
    const t = Math.min(Math.max(dt, 0), LIMITS.step)
    this.time += t

    if (settings.kind !== this.kind) {
      /* Rain does not turn into snow in mid-air */
      this.particles.length = 0
      this.kind = settings.kind
      this.filled = false
    }

    const rate = RATE[settings.kind] ?? 0
    if (rate > 0 && !this.filled) {
      this.fill(settings)
      this.filled = true
    }

    const intensity = clamp(settings.intensity, 0, 100) / 100
    const bounds = this.bounds
    /* A region starts the weather at its own top, not above the screen */
    const top = this.regionHeld ? bounds.y : bounds.y - 4 - this.random() * 20
    this.carry += rate * intensity * bounds.width * t
    while (this.carry >= 1) {
      this.carry -= 1
      this.spawn(settings, top)
    }

    /* Before what falls in this step lands, so the cap still holds exactly */
    this.melt(t, settings.kind === WeatherKind.SNOW)
    this.move(t, settings)
    this.moveSplashes(t)
  }

  /** Draws the current state; either surface may be missing. */
  draw(surfaces: WeatherSurfaces, settings: WeatherLayerSettings): void {
    const { back, front } = surfaces
    const { x: ox, y: oy, width, height } = this.viewport
    back?.clearRect(0, 0, width, height)
    front?.clearRect(0, 0, width, height)

    const color = settings.color.trim() || DEFAULT_COLOR[settings.kind] || DEFAULT_COLOR[WeatherKind.SNOW]!
    /* Not acting with the widgets, all of it is behind them */
    const affects = settings.affectsWidgets !== false
    if (back) {
      this.clip(back, ox, oy, () => {
        this.drawFalling(back, color, true, ox, oy, settings)
        if (!affects) this.drawFalling(back, color, false, ox, oy, settings)
      })
    }
    if (front && affects) {
      this.clip(front, ox, oy, () => {
        this.drawFalling(front, color, false, ox, oy, settings)
        this.drawSplashes(front, color, ox, oy)
        this.drawProfiles(front, ox, oy)
      })
    }
  }

  /**
   * Draws inside the region only, when there is one: one path of every
   * shape, each going round the same way, so the non-zero rule fills
   * their union and an overlap is no hole.
   */
  private clip(ctx: CanvasRenderingContext2D, ox: number, oy: number, draw: () => void): void {
    if (!this.regionHeld) return draw()
    ctx.save()
    ctx.beginPath()
    for (const shape of this.shapesHeld) tracePath(ctx, shape, ox, oy)
    ctx.clip('nonzero')
    draw()
    ctx.restore()
  }

  /** Whether a point of the board is inside the region - inside any of its shapes. */
  inRegion(x: number, y: number): boolean {
    const r = this.regionHeld
    if (!r) return true
    if (x < r.x || x > r.x + r.width || y < r.y || y > r.y + r.height) return false
    return this.shapesHeld.some((shape) => contains(shape, x, y))
  }

  /* ------------------------------------------------------------ making */

  /** The sky as if it had been falling for a while, so it does not start empty. */
  private fill(settings: WeatherLayerSettings): void {
    const rate = RATE[settings.kind] ?? 0
    const intensity = clamp(settings.intensity, 0, 100) / 100
    const speed = settings.kind === WeatherKind.RAIN ? 800 : 55
    const bounds = this.bounds
    const lifetime = (bounds.height + 40) / speed
    const count = Math.round(rate * intensity * bounds.width * lifetime)
    for (let i = 0; i < count; i++) {
      this.spawn(settings, bounds.y + this.random() * bounds.height)
    }
  }

  private spawn(settings: WeatherLayerSettings, y: number): void {
    if (this.particles.length >= LIMITS.particles) return
    const far = this.random() < FAR_SHARE
    const rain = settings.kind === WeatherKind.RAIN
    const wind = clamp(settings.wind, -100, 100)

    const vy = rain
      ? (far ? 450 : 750) + this.random() * 250
      : (far ? 22 : 45) + this.random() * 30
    const vx = rain ? wind * 3 : wind * 0.6

    /*
     * Upwind of the screen as well, so wind does not leave a dry strip. A
     * region has edges of its own: what falls there starts inside it.
     */
    const bounds = this.bounds
    const drift = this.regionHeld ? 0 : (Math.abs(vx) * bounds.height) / vy
    const from = bounds.x - (vx > 0 ? drift : 0)
    const span = bounds.width + drift

    const x = from + this.random() * span
    this.particles.push({
      x,
      y,
      px: x,
      py: y,
      vx,
      vy,
      size: rain ? (far ? 0.7 : 1.1) : (far ? 1 : 1.6) + this.random() * 1.4,
      far,
      phase: this.random() * Math.PI * 2,
    })
    this.spawned++
  }

  /** Lets the snow on a widget fall, from where the widget's top edge was. */
  private shakeOff(profile: Profile): void {
    const { rect, heights } = profile
    for (let i = 0; i < heights.length; i++) {
      if (heights[i] < 1) continue
      if (this.particles.length >= LIMITS.particles) break
      /* One flake for every few pixels of depth - a token, not the volume */
      for (let n = 0; n < Math.ceil(heights[i] / 4); n++) {
        const x = rect.x + (i + this.random()) * LIMITS.bin
        const y = rect.y - this.random() * heights[i]
        this.particles.push({
          x, y, px: x, py: y,
          vx: (this.random() - 0.5) * 20,
          vy: 30 + this.random() * 40,
          size: 1.4 + this.random() * 1.2,
          far: false,
          phase: this.random() * Math.PI * 2,
        })
      }
    }
  }

  /* ------------------------------------------------------------ moving */

  private move(t: number, settings: WeatherLayerSettings): void {
    const snow = settings.kind === WeatherKind.SNOW
    const affects = settings.affectsWidgets !== false
    const region = this.regionHeld
    const bounds = this.bounds
    /* Off the screen it may come back with the wind; out of a region it is gone */
    const bottom = region ? bounds.y + bounds.height : bounds.y + bounds.height + 20
    const left = region ? bounds.x : bounds.x - bounds.width
    const right = region ? bounds.x + bounds.width : bounds.x + bounds.width * 2

    let kept = 0
    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i]
      p.px = p.x
      p.py = p.y
      const sway = snow ? Math.sin(this.time * 1.3 + p.phase) * 14 : 0
      p.x += (p.vx + sway) * t
      p.y += p.vy * t

      if (p.y > bottom || p.x < left || p.x > right) continue
      /*
       * A widget ends what falls onto it wherever it is, so nothing comes
       * out from under one into a shape below; what it leaves - snow, a
       * splash - is only left inside the region.
       */
      if (affects && !p.far && this.meets(p, snow, this.inRegion(p.x, p.y))) continue
      this.particles[kept++] = p
    }
    this.particles.length = kept
  }

  /**
   * Whether a falling particle ends here, and what it leaves.
   *
   * It ends where it crosses a widget's top edge - or the snow already
   * lying there - between its last position and this one. A particle
   * that drifted into a widget from the side ends too, unseen: it is
   * behind the widget as far as anyone looking is concerned.
   */
  private meets(p: Particle, snow: boolean, leaves: boolean): boolean {
    for (const rect of this.obstacles) {
      if (p.x < rect.x || p.x >= rect.x + rect.width) continue
      const profile = this.profiles.get(rect.id)
      const bin = profile ? Math.min(profile.heights.length - 1, Math.floor((p.x - rect.x) / LIMITS.bin)) : -1
      const lying = profile && bin >= 0 ? profile.heights[bin] : 0
      const surface = rect.y - lying

      if (p.py <= surface && p.y >= surface) {
        if (leaves && snow && profile) this.settle(profile, bin, p.size)
        else if (leaves && !snow) this.splash(p.x, surface, p.vx)
        return true
      }
      if (p.y > surface && p.y < rect.y + rect.height) return true
    }
    return false
  }

  /** A flake adds to the snow where it landed, a little to either side as well. */
  private settle(profile: Profile, bin: number, size: number): void {
    const amount = size * 0.5
    add(profile, bin, amount)
    add(profile, bin - 1, amount * 0.5)
    add(profile, bin + 1, amount * 0.5)
  }

  /** A drop bursts into a few splashes that jump up and fall back. */
  private splash(x: number, y: number, vx: number): void {
    const count = 2 + Math.floor(this.random() * 3)
    for (let i = 0; i < count; i++) {
      if (this.splashes.length >= LIMITS.splashes) return
      this.splashes.push({
        x,
        y: y - 1,
        edge: y,
        vx: (this.random() - 0.5) * 140 + vx * 0.2,
        vy: -(60 + this.random() * 120),
        life: 0.25 + this.random() * 0.25,
      })
    }
  }

  private moveSplashes(t: number): void {
    let kept = 0
    for (let i = 0; i < this.splashes.length; i++) {
      const s = this.splashes[i]
      s.life -= t
      if (s.life <= 0) continue
      s.vy += 900 * t
      s.x += s.vx * t
      s.y += s.vy * t
      /* Back down on the edge, or past it onto the widget's face */
      if (s.vy > 0 && s.y >= s.edge) continue
      this.splashes[kept++] = s
    }
    this.splashes.length = kept
  }

  /**
   * Snow lying melts: slowly in proportion to its depth while it snows, so
   * each edge comes to a steady depth; quickly once the kind has changed.
   */
  private melt(t: number, snowing: boolean): void {
    const share = snowing ? MELT.snowing : MELT.after
    const fixed = snowing ? 0 : MELT.afterFixed
    for (const profile of this.profiles.values()) {
      const h = profile.heights
      for (let i = 0; i < h.length; i++) {
        if (h[i] > 0) h[i] = Math.max(0, h[i] - (h[i] * share + fixed) * t)
      }
    }
  }

  /* ------------------------------------------------------------ drawing */

  private drawFalling(
    ctx: CanvasRenderingContext2D,
    color: string,
    far: boolean,
    ox: number,
    oy: number,
    settings: WeatherLayerSettings,
  ): void {
    const rain = settings.kind === WeatherKind.RAIN
    ctx.globalAlpha = far ? 0.35 : rain ? 0.6 : 0.9
    ctx.beginPath()
    for (const p of this.particles) {
      if (p.far !== far) continue
      if (!this.inRegion(p.x, p.y)) continue
      const x = p.x - ox
      const y = p.y - oy
      if (rain) {
        /* A streak along the way it falls */
        ctx.moveTo(x, y)
        ctx.lineTo(x - p.vx * 0.018, y - p.vy * 0.018)
      } else {
        ctx.moveTo(x + p.size, y)
        ctx.arc(x, y, p.size, 0, Math.PI * 2)
      }
    }
    if (rain) {
      ctx.strokeStyle = color
      ctx.lineWidth = far ? 0.8 : 1.1
      ctx.stroke()
    } else {
      ctx.fillStyle = color
      ctx.fill()
    }
    ctx.globalAlpha = 1
  }

  private drawSplashes(ctx: CanvasRenderingContext2D, color: string, ox: number, oy: number): void {
    if (this.splashes.length === 0) return
    ctx.globalAlpha = 0.7
    ctx.fillStyle = color
    ctx.beginPath()
    for (const s of this.splashes) ctx.rect(s.x - ox - 0.75, s.y - oy - 0.75, 1.5, 1.5)
    ctx.fill()
    ctx.globalAlpha = 1
  }

  /** The snow on each widget, as one shape per widget along its top edge. */
  private drawProfiles(ctx: CanvasRenderingContext2D, ox: number, oy: number): void {
    ctx.fillStyle = 'rgb(255, 255, 255)'
    ctx.shadowColor = 'rgba(0, 0, 0, 0.18)'
    ctx.shadowBlur = 3
    ctx.shadowOffsetY = 1
    for (const { rect, heights } of this.profiles.values()) {
      let any = false
      for (let i = 0; i < heights.length; i++) if (heights[i] >= 0.3) { any = true; break }
      if (!any) continue
      const top = rect.y - oy
      const left = rect.x - ox
      /* Through the middle of each pair of columns, so the heap reads as soft */
      ctx.beginPath()
      ctx.moveTo(left, top)
      let px = left
      let py = top - heights[0]
      ctx.lineTo(px, py)
      for (let i = 1; i < heights.length; i++) {
        const x = left + Math.min(i * LIMITS.bin, rect.width)
        const y = top - heights[i]
        ctx.quadraticCurveTo(px, py, (px + x) / 2, (py + y) / 2)
        px = x
        py = y
      }
      ctx.lineTo(left + rect.width, py)
      ctx.lineTo(left + rect.width, top)
      ctx.closePath()
      ctx.fill()
    }
    ctx.shadowColor = 'transparent'
    ctx.shadowBlur = 0
    ctx.shadowOffsetY = 0
  }
}

/* ------------------------------------------------------------ shapes */

function isShapeList(region: Area | readonly BoardShape[]): region is readonly BoardShape[] {
  return Array.isArray(region)
}

/**
 * A shape the region can use: a box with no negative size, a polygon
 * going round the way a rectangle does (clockwise on screen). Undefined
 * for a polygon of fewer than three points, which encloses nothing.
 */
function normalised(shape: BoardShape): BoardShape | undefined {
  if (shape.kind === 'polygon') {
    if (shape.points.length < 3) return undefined
    const points = shape.points.map((point) => ({ x: point.x, y: point.y }))
    return { kind: 'polygon', points: signedArea(points) < 0 ? points.reverse() : points }
  }
  const x = Math.min(shape.x, shape.x + shape.width)
  const y = Math.min(shape.y, shape.y + shape.height)
  return { kind: shape.kind, x, y, width: Math.abs(shape.width), height: Math.abs(shape.height) }
}

/** Twice the signed area; positive is clockwise on a screen, whose y points down. */
function signedArea(points: readonly { x: number; y: number }[]): number {
  let sum = 0
  for (let i = 0; i < points.length; i++) {
    const a = points[i]
    const b = points[(i + 1) % points.length]
    sum += a.x * b.y - b.x * a.y
  }
  return sum
}

/** The box around every shape; an empty one where there are none. */
export function boxAround(shapes: readonly BoardShape[]): Area {
  let left = Infinity
  let top = Infinity
  let right = -Infinity
  let bottom = -Infinity
  for (const shape of shapes) {
    const corners =
      shape.kind === 'polygon'
        ? shape.points
        : [{ x: shape.x, y: shape.y }, { x: shape.x + shape.width, y: shape.y + shape.height }]
    for (const { x, y } of corners) {
      left = Math.min(left, x)
      top = Math.min(top, y)
      right = Math.max(right, x)
      bottom = Math.max(bottom, y)
    }
  }
  if (left > right) return { x: 0, y: 0, width: 0, height: 0 }
  return { x: left, y: top, width: right - left, height: bottom - top }
}

/** Adds a shape to the current path, shifted by the viewport, clockwise. */
function tracePath(ctx: CanvasRenderingContext2D, shape: BoardShape, ox: number, oy: number): void {
  if (shape.kind === 'rectangle') {
    ctx.rect(shape.x - ox, shape.y - oy, shape.width, shape.height)
  } else if (shape.kind === 'ellipse') {
    const rx = shape.width / 2
    const ry = shape.height / 2
    ctx.moveTo(shape.x + shape.width - ox, shape.y + ry - oy)
    ctx.ellipse(shape.x + rx - ox, shape.y + ry - oy, rx, ry, 0, 0, Math.PI * 2, false)
    ctx.closePath()
  } else {
    const [first, ...rest] = shape.points
    ctx.moveTo(first.x - ox, first.y - oy)
    for (const point of rest) ctx.lineTo(point.x - ox, point.y - oy)
    ctx.closePath()
  }
}

/** Whether a shape holds a point; a polygon by the non-zero rule, as it is clipped. */
export function contains(shape: BoardShape, x: number, y: number): boolean {
  if (shape.kind === 'rectangle') {
    return x >= shape.x && x <= shape.x + shape.width && y >= shape.y && y <= shape.y + shape.height
  }
  if (shape.kind === 'ellipse') {
    const rx = shape.width / 2
    const ry = shape.height / 2
    if (rx <= 0 || ry <= 0) return false
    const dx = (x - (shape.x + rx)) / rx
    const dy = (y - (shape.y + ry)) / ry
    return dx * dx + dy * dy <= 1
  }
  let winding = 0
  const points = shape.points
  for (let i = 0; i < points.length; i++) {
    const a = points[i]
    const b = points[(i + 1) % points.length]
    const side = (b.x - a.x) * (y - a.y) - (x - a.x) * (b.y - a.y)
    if (a.y <= y) {
      if (b.y > y && side > 0) winding++
    } else if (b.y <= y && side < 0) {
      winding--
    }
  }
  return winding !== 0
}

function newProfile(rect: Obstacle): Profile {
  return { rect, heights: new Float32Array(Math.max(1, Math.ceil(rect.width / LIMITS.bin))) }
}

/**
 * How deep snow may lie in one column: the cap, less towards the corners
 * so a heap rounds off instead of standing in a block, and never more
 * than a share of a short widget's height.
 */
export function depthAt(profile: Profile, bin: number): number {
  const n = profile.heights.length
  const fromEdge = Math.min(bin, n - 1 - bin)
  const corner = Math.min(1, (fromEdge + 1) / 3)
  return Math.min(LIMITS.depth, profile.rect.height * LIMITS.depthShare) * corner
}

function add(profile: Profile, bin: number, amount: number): void {
  if (bin < 0 || bin >= profile.heights.length) return
  profile.heights[bin] = Math.min(depthAt(profile, bin), profile.heights[bin] + amount)
}

function clamp(value: number, min: number, max: number): number {
  const n = Number(value)
  if (!Number.isFinite(n)) return min
  return Math.min(max, Math.max(min, n))
}
