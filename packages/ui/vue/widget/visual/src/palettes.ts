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
 * The colours, two kinds per palette: a scale, low to high, for anything
 * coloured by its value - the bars, the surface, the days - and a set for
 * things that are only told apart, such as the rings of a sunburst or the
 * bars of a race - and, for a waterfall, the colour of a rise and of a fall.
 */

export interface Palette {
  scale: string[]
  set: string[]
  rise: string
  fall: string
}

export const PALETTES: Record<string, Palette> = {
  /* Cold to warm through a pale middle: the classic look of a 3D bar chart. */
  aurora: {
    scale: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026'],
    set: ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc'],
    rise: '#3ba272',
    fall: '#ee6666',
  },
  ocean: {
    scale: ['#e0f3fb', '#a6d8ef', '#5fb4de', '#2b86c5', '#155a9c', '#0b2f63'],
    set: ['#1d6a96', '#2e86ab', '#3aafa9', '#57a0d3', '#0b3c5d', '#8fc1e3', '#2b7a78', '#5c88c4'],
    rise: '#3aafa9',
    fall: '#e07a5f',
  },
  sunset: {
    scale: ['#2c115f', '#721f81', '#b73779', '#f1605d', '#feb078', '#fcfdbf'],
    set: ['#ff6b6b', '#f06595', '#cc5de8', '#845ef7', '#ff922b', '#fcc419', '#e64980', '#5c7cfa'],
    rise: '#20c997',
    fall: '#e64980',
  },
  forest: {
    scale: ['#f7fcf5', '#c7e9c0', '#74c476', '#31a354', '#006d2c', '#00441b'],
    set: ['#2b9348', '#80b918', '#007f5f', '#aacc00', '#386641', '#55a630', '#6a994e', '#bfd200'],
    rise: '#55a630',
    fall: '#bc4749',
  },
  mono: {
    scale: ['#e9ecef', '#adb5bd', '#6c757d', '#343a40', '#121416'],
    set: ['#343a40', '#6c757d', '#adb5bd', '#495057', '#868e96', '#212529', '#ced4da'],
    rise: '#495057',
    fall: '#adb5bd',
  },
}

export function paletteNamed(name: string): Palette {
  return PALETTES[name] ?? PALETTES.aurora
}

/**
 * A colour made see-through, for lines and grids that should follow the
 * board's text colour without shouting. Anything it cannot read - a named
 * colour, a variable - is handed back as it is.
 */
export function withAlpha(color: string, alpha: number): string {
  const rgb = color.match(/^rgba?\(\s*(\d+)[\s,]+(\d+)[\s,]+(\d+)/i)
  if (rgb) return `rgba(${rgb[1]}, ${rgb[2]}, ${rgb[3]}, ${alpha})`
  const hex = color.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i)
  if (hex) {
    const digits = hex[1].length === 3 ? [...hex[1]].map((d) => d + d).join('') : hex[1]
    const [r, g, b] = [0, 2, 4].map((at) => parseInt(digits.slice(at, at + 2), 16))
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  }
  return color
}

/**
 * Whether a colour is a light one. Asked of the board's text colour: light
 * text means a dark board, and the gaps between rings and tiles should be
 * dark there rather than cut white lines into it.
 */
export function isLight(color: string): boolean {
  return brightness(color, 0) > 150
}

/** How bright a colour looks, 0 to 255; what it cannot read counts as the fallback. */
export function brightness(color: string, fallback = 255): number {
  const rgba = withAlpha(color, 1).match(/^rgba\((\d+), (\d+), (\d+)/)
  if (!rgba) return fallback
  const [r, g, b] = rgba.slice(1).map(Number)
  return 0.299 * r + 0.587 * g + 0.114 * b
}

/**
 * A palette for a dark board: its darkest colours - two of mono's, the deep
 * end of ocean, aurora and sunset - would sink into the ground there, so
 * they are lifted towards white until they stand out from it.
 */
export function onDark(palette: Palette): Palette {
  const lift = (colour: string) => (brightness(colour) < 70 ? colourAt([colour, '#ffffff'], 0.4) : colour)
  // A scale's order is its meaning: its dark stops are lifted only to the threshold, so none passes a brighter one.
  const floor = (colour: string) => {
    const b = brightness(colour)
    return b < 70 ? colourAt([colour, '#ffffff'], (70.5 - b) / (255 - b)) : colour
  }
  return { ...palette, set: palette.set.map(lift), scale: palette.scale.map(floor) }
}

/**
 * The colour at a share of a scale, 0 its first, 1 its last, mixed between
 * the two it falls among - for what is coloured outside ECharts, which has
 * no visual map to do it.
 */
export function colourAt(scale: string[], share: number): string {
  const rgb = (hex: string) => [1, 3, 5].map((at) => parseInt(hex.slice(at, at + 2), 16))
  const t = Math.max(0, Math.min(1, Number.isFinite(share) ? share : 0)) * (scale.length - 1)
  const below = Math.floor(t)
  const above = Math.min(scale.length - 1, below + 1)
  const [a, b] = [rgb(scale[below]), rgb(scale[above])]
  const mixed = a.map((channel, i) => Math.round(channel + (b[i] - channel) * (t - below)))
  return `#${mixed.map((channel) => channel.toString(16).padStart(2, '0')).join('')}`
}

/** The dark a label is written in where white would not read. */
export const INK = '#1b1f27'

/**
 * The label colour that reads best on a coloured piece: dark or white, whichever
 * stands further from it in contrast. Brightness alone, as the board's text
 * colour is judged, wrote white on the middle green of forest and on the
 * paler second level of every palette at barely twice the contrast of the
 * dark it passed over.
 */
export function inkOn(color: string): string {
  const onWhite = contrast(color, '#ffffff')
  return onWhite >= contrast(color, INK) ? '#fff' : INK
}

function contrast(a: string, b: string): number {
  const [lighter, darker] = [luminance(a), luminance(b)].sort((x, y) => y - x)
  return (lighter + 0.05) / (darker + 0.05)
}

/* The relative luminance of WCAG 2; a colour it cannot read counts as black, so white is written on it. */
function luminance(color: string): number {
  const rgba = withAlpha(color, 1).match(/^rgba\((\d+), (\d+), (\d+)/)
  if (!rgba) return 0
  const [r, g, b] = rgba.slice(1).map((channel) => {
    const share = Number(channel) / 255
    return share <= 0.03928 ? share / 12.92 : ((share + 0.055) / 1.055) ** 2.4
  })
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}
