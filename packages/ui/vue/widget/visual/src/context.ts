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
 * What every kind is drawn with: the settings as a drawing reads them, the
 * problems it can name, and the context it works in - the table's columns,
 * the palette, the board's colours and how numbers are written.
 */

import { columnNamed, columnsOf, rowLabel, type Columns, type Table } from './table'
import { isLight, onDark, paletteNamed, withAlpha, type Palette } from './palettes'
import type { Kind } from './drawing'

/** Where the camera of a 3D box stands until the reader turns it, and goes back to on a double click. */
export const HOME_VIEW = { alpha: 24, beta: 38, distance: 380 } as const

/**
 * The home view for a tile of a shape: the camera's field is fixed from top
 * to bottom, so a tile narrower than the one the home view was set for would
 * cut the box at its sides; the camera stands back as far as the tile is
 * narrower.
 */
export function homeOf(look: Pick<Look, 'aspect' | 'small' | 'showScale'>): { alpha: number; beta: number; distance: number } {
  // In a small tile the scale's 72 pixels are a good share of the width the box has left.
  const aspect = (look.aspect > 0 ? look.aspect : WIDE) * (look.small && look.showScale ? 0.72 : 1)
  return { ...HOME_VIEW, distance: Math.round(HOME_VIEW.distance * Math.max(1, WIDE / aspect)) }
}

/** How wide a tile is for its height, below which the home view stands further back. */
const WIDE = 1.6

/** A tile this small, in either direction, gets a shorter scale and no axis names. */
export const SMALL = { width: 360, height: 240 } as const

export interface Look {
  kind: Kind
  title: string
  palette: string
  valueColumn: string
  xColumn: string
  yColumn: string
  zColumn: string
  sizeColumn: string
  separator: string
  autoRotate: boolean
  showScale: boolean
  showLabels: boolean
  topN: number
  frameDuration: number
  /** The board's text colour, which every label and line follows. */
  textColor: string
  /** For month and day names, and for numbers. */
  locale: string
  /** The few words a tooltip needs, from the language pack. */
  words: Record<Word, string>
  /** The tile's width over its height, in quarter steps; 0 while it is not known. */
  aspect: number
  /** Whether the tile is too small for a full scale and the names of 3D axes. */
  small: boolean
}

/** The words a drawing says in its tooltips; the widget has them translated. */
export const WORDS = [] as const
export type Word = (typeof WORDS)[number]

export type Problem =
  /** Nothing came back, or nothing that is a table. */
  | 'noData'
  /** The query answered, but every cell in it is empty. */
  | 'noValues'
  /** No column of numbers to draw. */
  | 'needsNumbers'
  /** A surface needs two rows and two columns to span. */
  | 'needsGrid'
  /** Points need three columns of numbers. */
  | 'needsThreeNumbers'
  /** No row has a positive value to size a ring or a tile by. */
  | 'needsValues'
  /** No row leads from one thing to another. */
  | 'needsFlows'
  /** No label reads as a day. */
  | 'needsDates'

/* ECharts' option is a large open object, and echarts-gl's half is not typed at all. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Option = Record<string, any>

export type Drawing = { option: Option } | { problem: Problem }


/* ------------------------------------------------------------- shared */

export const escape = (text: unknown) =>
  String(text ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!)

export class Context {
  readonly columns: Columns
  readonly palette: Palette
  readonly text: string
  readonly faint: string
  /** What separates rings, tiles and days: the board's own ground, guessed from its text. */
  readonly gap: string
  readonly format: (value: number) => string
  /**
   * The scale's colours as they are drawn, low to high. A scale that runs
   * from pale to dark is turned round on a dark board, where its darkest
   * colour - the highest value - would sink into the ground.
   */
  readonly ramp: string[]

  constructor(
    readonly table: Table,
    readonly look: Look,
  ) {
    this.columns = columnsOf(table)
    this.text = look.textColor || '#333'
    // Light text means a dark board, where a palette's darkest colours are lifted so they do not sink into it.
    const named = paletteNamed(look.palette)
    this.palette = isLight(this.text) ? onDark(named) : named
    this.faint = withAlpha(this.text, 0.18)
    const scale = named.scale
    const sinks = isLight(this.text) && isLight(scale[0]) && !isLight(scale[scale.length - 1])
    /*
     * Turned round, its darkest colour would sink as the lowest value instead,
     * beside the days with none: it is left out, and the rest is not lifted,
     * which would make its new low end lighter than the step above it.
     */
    this.ramp = sinks ? [...scale].reverse().slice(1) : this.palette.scale
    this.gap = isLight(this.text) ? 'rgba(18, 22, 30, 0.9)' : 'rgba(255, 255, 255, 0.9)'
    let formatter: Intl.NumberFormat
    try {
      formatter = new Intl.NumberFormat(look.locale || undefined, { maximumFractionDigits: 2 })
    } catch {
      formatter = new Intl.NumberFormat(undefined, { maximumFractionDigits: 2 })
    }
    this.format = (value) => formatter.format(value)
  }

  label(row: unknown[]): string {
    return rowLabel(row, this.columns.labels, this.look.separator || ' - ')
  }

  /** The column the settings name, or the one a kind takes when they name none. */
  column(named: string, fallback: number | undefined): number | undefined {
    return columnNamed(this.table, named) ?? fallback
  }

  /**
   * A row's levels: every label column, one level per member where the
   * source named the members of its caption, otherwise split where the
   * separator says.
   */
  path(row: unknown[]): string[] {
    return this.columns.labels.flatMap((column) => {
      const cell = row[column]
      if (cell === null || cell === undefined) return []
      return this.levels(String(cell), this.table.rowLevels)
    })
  }

  /** A column header's levels, read the way a row's label is. */
  headerLevels(column: number): string[] {
    return this.levels(String(this.table.headers[column] ?? ''), this.table.columnLevels)
  }

  private levels(text: string, known: Map<string, string[]> | undefined): string[] {
    const members = known?.get(text)
    if (members) return members.filter(Boolean)
    const separator = this.look.separator
    return (separator ? text.split(separator) : [text]).map((part) => part.trim()).filter(Boolean)
  }

  /** What every drawing starts from: the title, the tooltip, the colours, a transparent ground. */
  base(): Option {
    const option: Option = {
      backgroundColor: 'transparent',
      color: this.palette.set,
      textStyle: { color: this.text },
      tooltip: {
        confine: true,
        backgroundColor: 'rgba(24, 28, 38, 0.92)',
        borderWidth: 0,
        textStyle: { color: '#fff', fontSize: 12 },
        extraCssText: 'border-radius: 8px; box-shadow: 0 6px 24px rgba(0, 0, 0, 0.25);',
      },
    }
    // The widget merges a redraw of the same kind into the last one, so a title taken away must be hidden, not left out.
    option.title = this.look.title
      ? { show: true, text: this.look.title, left: 'center', top: 6, textStyle: { color: this.text, fontSize: 14, fontWeight: 600 } }
      : { show: false, text: '' }
    return option
  }

  /** The scale from the lowest value to the highest, for whatever is coloured by its value. */
  scale(min: number, max: number, extra: Option = {}): Option {
    return {
      show: this.look.showScale,
      type: 'continuous',
      min,
      max: max > min ? max : min + 1,
      calculable: true,
      realtime: true,
      itemHeight: this.look.small ? 60 : 120,
      right: 8,
      top: 'middle',
      inRange: { color: this.ramp },
      textStyle: { color: this.text },
      formatter: (value: number) => this.format(value),
      ...extra,
    }
  }

  /** The 3D box the bars, the surface and the points stand in. */
  box(depthShare = 1): Option {
    return {
      boxWidth: 200,
      boxDepth: Math.round(200 * Math.max(0.5, Math.min(1, depthShare))),
      boxHeight: 100,
      // Without these echarts-gl takes the whole canvas and ignores the margins below.
      width: 'auto',
      height: 'auto',
      top: this.look.title ? 24 : 0,
      // Room for the scale beside the box, so the two do not overlap.
      right: this.look.showScale ? 72 : 0,
      environment: 'none',
      viewControl: {
        autoRotate: this.look.autoRotate,
        autoRotateSpeed: 6,
        autoRotateAfterStill: 4,
        ...homeOf(this.look),
        minDistance: 120,
        maxDistance: 1000,
        damping: 0.85,
      },
      light: {
        main: { intensity: 1.15, shadow: true, shadowQuality: 'high', alpha: 40, beta: 30 },
        ambient: { intensity: 0.35 },
      },
      postEffect: {
        enable: true,
        SSAO: { enable: true, radius: 3, intensity: 1.1, quality: 'medium' },
      },
      temporalSuperSampling: { enable: true },
      axisLine: { lineStyle: { color: withAlpha(this.text, 0.45) } },
      axisPointer: { lineStyle: { color: withAlpha(this.text, 0.6) } },
      splitLine: { lineStyle: { color: this.faint } },
      axisLabel: { textStyle: { color: this.text } },
      axisTick: { lineStyle: { color: withAlpha(this.text, 0.45) } },
    }
  }

  axis3d(extra: Option): Option {
    // In a small tile the names of the axes only cover the labels; the tooltip names them.
    const name = this.look.small ? { name: '' } : {}
    return { nameTextStyle: { color: this.text }, axisLabel: { textStyle: { color: this.text } }, ...extra, ...name }
  }
}

/** Labels along an axis of indices: every n-th, so that a long one stays readable. */
export function every(count: number): number {
  return Math.max(1, Math.ceil(count / 10))
}
