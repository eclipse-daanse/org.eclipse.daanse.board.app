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
 * matters - a drop bursting on an edge - be tested without a browser.
 *
 * Everything is in board coordinates: a widget's rectangle as the board
 * lays it out, independent of how far the board is scrolled. The viewport
 * says which part of the board is on screen; particles are made above it
 * and dropped below it, and drawing shifts by it. Scrolling therefore
 * moves nothing.
 */
import { WeatherKind } from 'org.eclipse.daanse.board.app.lib.model.workspace'

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
}

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
  /** A step longer than this is a tab coming back, not a frame. */
  step: 0.05,
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

export class WeatherEngine {
  readonly particles: Particle[] = []
  readonly splashes: Splash[] = []
  /** How many particles have been made - what a rate is measured by. */
  spawned = 0

  private obstacles: Obstacle[] = []
  private viewport = { x: 0, y: 0, width: 0, height: 0 }
  private carry = 0
  private time = 0
  private kind: WeatherKind = WeatherKind.NONE
  private filled = false

  constructor(private readonly random: () => number = Math.random) {}

  /** The widgets as last measured. */
  get obstacleRects(): readonly Obstacle[] {
    return this.obstacles
  }

  /** The part of the board on screen, in board coordinates. */
  setViewport(x: number, y: number, width: number, height: number): void {
    this.viewport = { x, y, width, height }
  }

  /** The widgets, as they now stand. */
  setObstacles(next: Obstacle[]): void {
    this.obstacles = next
  }

  /** Forgets every particle - a fresh start. */
  reset(): void {
    this.particles.length = 0
    this.splashes.length = 0
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
    this.carry += rate * intensity * this.viewport.width * t
    while (this.carry >= 1) {
      this.carry -= 1
      this.spawn(settings, this.viewport.y - 4 - this.random() * 20)
    }

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
    if (back) this.drawFalling(back, color, true, ox, oy, settings)
    if (front) {
      this.drawFalling(front, color, false, ox, oy, settings)
      this.drawSplashes(front, color, ox, oy)
    }
  }

  /* ------------------------------------------------------------ making */

  /** The sky as if it had been falling for a while, so it does not start empty. */
  private fill(settings: WeatherLayerSettings): void {
    const rate = RATE[settings.kind] ?? 0
    const intensity = clamp(settings.intensity, 0, 100) / 100
    const speed = settings.kind === WeatherKind.RAIN ? 800 : 55
    const lifetime = (this.viewport.height + 40) / speed
    const count = Math.round(rate * intensity * this.viewport.width * lifetime)
    for (let i = 0; i < count; i++) {
      this.spawn(settings, this.viewport.y + this.random() * this.viewport.height)
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

    /* Upwind of the screen as well, so wind does not leave a dry strip */
    const drift = (Math.abs(vx) * this.viewport.height) / vy
    const from = this.viewport.x - (vx > 0 ? drift : 0)
    const span = this.viewport.width + drift

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

  /* ------------------------------------------------------------ moving */

  private move(t: number, settings: WeatherLayerSettings): void {
    const snow = settings.kind === WeatherKind.SNOW
    const bottom = this.viewport.y + this.viewport.height + 20
    const left = this.viewport.x - this.viewport.width
    const right = this.viewport.x + this.viewport.width * 2

    let kept = 0
    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i]
      p.px = p.x
      p.py = p.y
      const sway = snow ? Math.sin(this.time * 1.3 + p.phase) * 14 : 0
      p.x += (p.vx + sway) * t
      p.y += p.vy * t

      if (p.y > bottom || p.x < left || p.x > right) continue
      if (!p.far && this.meets(p, snow)) continue
      this.particles[kept++] = p
    }
    this.particles.length = kept
  }

  /**
   * Whether a falling particle ends here, and what it leaves.
   *
   * It ends where it crosses a widget's top edge between its last
   * position and this one. A particle
   * that drifted into a widget from the side ends too, unseen: it is
   * behind the widget as far as anyone looking is concerned.
   */
  private meets(p: Particle, snow: boolean): boolean {
    for (const rect of this.obstacles) {
      if (p.x < rect.x || p.x >= rect.x + rect.width) continue
      const surface = rect.y

      if (p.py <= surface && p.y >= surface) {
        if (!snow) this.splash(p.x, surface, p.vx)
        return true
      }
      if (p.y > surface && p.y < rect.y + rect.height) return true
    }
    return false
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

}

function clamp(value: number, min: number, max: number): number {
  const n = Number(value)
  if (!Number.isFinite(n)) return min
  return Math.min(max, Math.max(min, n))
}
