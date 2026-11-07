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

/** The name of a pin image: the icon, if any, and the colour. */
export const pinImageId = (color: string, icon = '') => `${PIN_PREFIX}${icon ? `${icon}|` : ''}${color}`

/** The colour and icon a pin image's name stands for. */
export function pinOfImageId(id: string): { color: string; icon: string } {
  const rest = id.slice(PIN_PREFIX.length)
  const bar = rest.indexOf('|')
  return bar < 0 ? { color: rest, icon: '' } : { icon: rest.slice(0, bar), color: rest.slice(bar + 1) }
}

/** The pin in a colour, as an RGBA image MapLibre takes with addImage; without the eye, its head is for an icon. */
export function pinImage(color: string, eyed = true): { width: number; height: number; data: Uint8Array } {
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
          if (eyed && dx * dx + dy * dy <= EYE * EYE) eye++
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

/* The icon font the board's icons use; loaded once where no icon widget did. */
const ICON_FONT = 'Material Symbols Outlined'
const ICON_FONT_CSS =
  'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200'

/**
 * The pin with a Material Symbols icon drawn white in its head. Drawn on a
 * canvas over the pin, as the font has it. Where there is no canvas or the
 * font does not come, the pin keeps its eye.
 */
export async function pinWithIcon(color: string, icon: string, doc: Document = document) {
  const plain = pinImage(color, false)
  const canvas = doc.createElement('canvas')
  canvas.width = plain.width
  canvas.height = plain.height
  const context = canvas.getContext('2d')
  if (!context) return pinImage(color)
  try {
    if (!doc.querySelector(`link[href="${ICON_FONT_CSS}"]`)) {
      const link = doc.createElement('link')
      link.rel = 'stylesheet'
      link.href = ICON_FONT_CSS
      doc.head.appendChild(link)
    }
    const font = `28px "${ICON_FONT}"`
    await doc.fonts.load(font, icon)
    if (!doc.fonts.check(font, icon)) return pinImage(color)
    context.putImageData(new ImageData(new Uint8ClampedArray(plain.data), plain.width, plain.height), 0, 0)
    context.font = font
    context.fillStyle = '#ffffff'
    context.textAlign = 'center'
    context.textBaseline = 'middle'
    context.fillText(icon, HEAD.x, HEAD.y + 1)
    const drawn = context.getImageData(0, 0, plain.width, plain.height)
    return { width: drawn.width, height: drawn.height, data: new Uint8Array(drawn.data.buffer) }
  } catch {
    return pinImage(color)
  }
}
