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
 * The pin a sensor stands on the map as (#1273): a drop with a white eye,
 * outlined dark, drawn in the colour of the thing's value. Drawn here, pixel
 * by pixel, rather than on a canvas: one image per colour, made when the map
 * first asks for it, and the same in a test as in the browser.
 */

/** The prefix of a pin image's name; the colour follows it. */
export const PIN_PREFIX = 'daanse-pin:'

/** Pixels per point: pins are drawn at twice their size, for sharp screens. */
export const PIN_PIXEL_RATIO = 2
const W = 48
const H = 64
const HEAD = { x: 24, y: 22, r: 19 }
const TIP_Y = 62
const OUTLINE = 3
const EYE = 7

/** A colour as RGB, from #rgb, #rrggbb or #rrggbbaa; grey for anything else. */
export function rgbOf(color: string): [number, number, number] {
  const hex = color.trim().replace(/^#/, '')
  const full = hex.length === 3 ? hex.split('').map((c) => c + c).join('') : hex.slice(0, 6)
  if (!/^[0-9a-f]{6}$/i.test(full)) return [158, 158, 158]
  return [0, 2, 4].map((i) => parseInt(full.slice(i, i + 2), 16)) as [number, number, number]
}

/** Whether a point lies in the drop, grown or shrunk by an inset. */
function inDrop(x: number, y: number, inset: number): boolean {
  const r = HEAD.r - inset
  const dx = x - HEAD.x
  const dy = y - HEAD.y
  if (dx * dx + dy * dy <= r * r) return true
  const tip = TIP_Y - inset * 1.6
  if (y < HEAD.y || y > tip) return false
  return Math.abs(dx) <= (r * (tip - y)) / (tip - HEAD.y)
}

/** The pin in a colour, as an RGBA image MapLibre takes with addImage. */
export function pinImage(color: string): { width: number; height: number; data: Uint8Array } {
  const [r, g, b] = rgbOf(color)
  const data = new Uint8Array(W * H * 4)
  const SAMPLES = 4
  for (let py = 0; py < H; py++) {
    for (let px = 0; px < W; px++) {
      let outline = 0
      let fill = 0
      let eye = 0
      for (let sy = 0; sy < SAMPLES; sy++) {
        for (let sx = 0; sx < SAMPLES; sx++) {
          const x = px + (sx + 0.5) / SAMPLES
          const y = py + (sy + 0.5) / SAMPLES
          if (!inDrop(x, y, 0)) continue
          const dx = x - HEAD.x
          const dy = y - HEAD.y
          if (dx * dx + dy * dy <= EYE * EYE) eye++
          else if (inDrop(x, y, OUTLINE)) fill++
          else outline++
        }
      }
      const total = SAMPLES * SAMPLES
      const covered = outline + fill + eye
      if (!covered) continue
      const at = (py * W + px) * 4
      // The colour of the covered part, mixed by share: outline dark, eye white.
      data[at] = Math.round((outline * 34 + fill * r + eye * 255) / covered)
      data[at + 1] = Math.round((outline * 34 + fill * g + eye * 255) / covered)
      data[at + 2] = Math.round((outline * 34 + fill * b + eye * 255) / covered)
      data[at + 3] = Math.round((covered / total) * 255)
    }
  }
  return { width: W, height: H, data }
}
