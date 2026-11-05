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
 * What the light layer draws, worked out apart from drawing it.
 *
 * The lamps announce their light relative to their widget; the layer
 * measures the widgets; this puts the two together into lights in pixels
 * of the layer, and says how dark the page is around them. Kept free of
 * the canvas so a test can ask where a light is without drawing it.
 */
import type { LightShape, LightSourceSpec } from 'org.eclipse.daanse.board.app.lib.model.workspace'

/** A widget's box, relative to the layer, in pixels. */
export interface Box {
  x: number
  y: number
  width: number
  height: number
}

/** One light as it is drawn: in pixels of the layer. */
export interface DrawnLight {
  widgetId: string
  x: number
  y: number
  radius: number
  color: string
  intensity: number
  shape: LightShape
  /** In radians: 0 is to the right, π/2 down. */
  direction: number
  /** In radians. */
  angle: number
  /** Drawn over the widgets as well, rather than behind them only. */
  front: boolean
}

export interface LightScene {
  /** How dark the page is where no light falls, 0 (not at all) to MAX_DARKNESS. */
  darkness: number
  lights: DrawnLight[]
}

/** Even an ambient light of 0 leaves the page faintly visible. */
export const MAX_DARKNESS = 0.9

/** How the darkness follows the ambient light, 0 to 100. */
export function darknessOf(ambient: number): number {
  const clamped = Math.min(100, Math.max(0, ambient))
  return ((100 - clamped) / 100) * MAX_DARKNESS
}

const toRadians = (degrees: number) => (degrees * Math.PI) / 180
const finite = (value: number, fallback: number) => (Number.isFinite(value) ? value : fallback)
const unit = (value: number, fallback: number) => Math.min(1, Math.max(0, finite(value, fallback)))

/**
 * The lights of the sources whose widget was measured, in pixels.
 *
 * A source whose widget is not under the layer - removed, or on another
 * page - draws nothing: its light goes with it. One that is off draws
 * nothing either. In edit mode every light is drawn over the board, which
 * covers the page behind its widgets with a canvas of its own.
 */
export function composeLightScene(
  sources: Iterable<LightSourceSpec>,
  boxes: ReadonlyMap<string, Box>,
  ambient: number,
  editMode = false,
): LightScene {
  const lights: DrawnLight[] = []
  for (const source of sources) {
    if (!source.on) continue
    const box = boxes.get(source.widgetId)
    if (!box) continue
    const radius = Math.max(0, finite(source.radius, 0))
    const intensity = unit(source.intensity, 1)
    if (radius <= 0 || intensity <= 0) continue
    lights.push({
      widgetId: source.widgetId,
      x: box.x + box.width * unit(source.x, 0.5),
      y: box.y + box.height * unit(source.y, 0.5),
      radius,
      color: source.color || '#ffffff',
      intensity,
      shape: source.shape === 'cone' ? 'cone' : 'round',
      direction: toRadians(finite(source.direction, 90)),
      angle: toRadians(Math.min(360, Math.max(1, finite(source.angle, 60)))),
      front: editMode || Boolean(source.lightsWidgets),
    })
  }
  return { darkness: editMode ? 0 : darknessOf(ambient), lights }
}

/** Whether there is anything to draw at all. */
export function isLit(scene: LightScene): boolean {
  return scene.darkness > 0 || scene.lights.length > 0
}

/** How bright a glow is at its centre, relative to the light's intensity. */
const GLOW = 0.55

function lightPath(ctx: CanvasRenderingContext2D, light: DrawnLight): void {
  ctx.beginPath()
  if (light.shape === 'cone') {
    ctx.moveTo(light.x, light.y)
    ctx.arc(light.x, light.y, light.radius, light.direction - light.angle / 2, light.direction + light.angle / 2)
    ctx.closePath()
  } else {
    ctx.arc(light.x, light.y, light.radius, 0, Math.PI * 2)
  }
}

/** Takes the darkness away where a light falls: the light cuts through the dark. */
function cut(ctx: CanvasRenderingContext2D, light: DrawnLight): void {
  const gradient = ctx.createRadialGradient(light.x, light.y, 0, light.x, light.y, light.radius)
  gradient.addColorStop(0, `rgba(0, 0, 0, ${light.intensity})`)
  gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')
  ctx.globalCompositeOperation = 'destination-out'
  ctx.globalAlpha = 1
  ctx.fillStyle = gradient
  lightPath(ctx, light)
  ctx.fill()
}

/** Adds the light's colour, fading out towards its reach. */
function glow(ctx: CanvasRenderingContext2D, light: DrawnLight): void {
  const gradient = ctx.createRadialGradient(light.x, light.y, 0, light.x, light.y, light.radius)
  gradient.addColorStop(0, light.color)
  gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')
  ctx.globalCompositeOperation = 'lighter'
  ctx.globalAlpha = light.intensity * GLOW
  ctx.fillStyle = gradient
  lightPath(ctx, light)
  ctx.fill()
}

/**
 * Draws a scene onto the layer's two canvases, each cleared first.
 *
 * Behind the widgets: the darkness, the lights cut out of it, and the glow
 * of every light that stays behind the widgets. Above them: the glow of
 * the lights that fall on the widgets too - that canvas is blended
 * additively, so it only ever adds light.
 */
export function drawLightScene(
  canvases: { back: CanvasRenderingContext2D | null; front: CanvasRenderingContext2D | null },
  scene: LightScene,
  size: { width: number; height: number },
): void {
  const { back, front } = canvases
  for (const ctx of [back, front]) {
    if (!ctx) continue
    ctx.globalCompositeOperation = 'source-over'
    ctx.globalAlpha = 1
    ctx.clearRect(0, 0, size.width, size.height)
  }

  if (back) {
    if (scene.darkness > 0) {
      back.fillStyle = `rgba(0, 0, 0, ${scene.darkness})`
      back.fillRect(0, 0, size.width, size.height)
      for (const light of scene.lights) cut(back, light)
    }
    for (const light of scene.lights) if (!light.front) glow(back, light)
  }
  if (front) {
    for (const light of scene.lights) if (light.front) glow(front, light)
  }

  for (const ctx of [back, front]) {
    if (!ctx) continue
    ctx.globalCompositeOperation = 'source-over'
    ctx.globalAlpha = 1
  }
}
