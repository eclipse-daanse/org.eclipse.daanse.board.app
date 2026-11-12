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
 * The encodings of a symbol layer (#1296): from the fields of a point, how
 * tall and wide a model is, its colour, the colours of its parts and which
 * file it is. The same shape as a Vega encoding - field, scale, a value
 * where the field has none. Plain functions; the widget hands them the rows
 * after the layer's transforms.
 */

/** What of the encodings is read here - the model's names. */
export interface FieldEncodingLike {
  field?: string
  unit?: string
  scaleType?: string
  domainMin?: number
  domainMax?: number
  rangeMin?: number
  rangeMax?: number
  value?: number
}
export interface ColorEncodingLike {
  field?: string
  type?: string
  mappings?: Iterable<{ code?: string; color?: string }> | null
  domainMin?: number
  domainMax?: number
  lowColor?: string
  highColor?: string
  color?: string
}
export interface ModelEncodingLike {
  field?: string
  mappings?: Iterable<{ code?: string; url?: string }> | null
}
export interface PartEncodingLike {
  mesh?: string
  color?: ColorEncodingLike | null
}

const listOf = <T>(held: Iterable<T> | null | undefined): T[] => (held ? Array.from(held) : [])
const text = (value: unknown) => String(value ?? '').trim()
const finite = (value: unknown): number | undefined => {
  if (value === null || value === undefined || value === '') return undefined
  const n = typeof value === 'number' ? value : Number(String(value).trim())
  return Number.isFinite(n) ? n : undefined
}

/** Metres per unit. */
const UNITS: Record<string, number> = { m: 1, cm: 0.01, mm: 0.001, km: 1000, dm: 0.1 }

/**
 * A length in metres from a row: the field in its unit (the encoding's, else
 * the column's, else metres), through the scale; the encoding's value where
 * the field has none; undefined where neither says anything.
 */
export function lengthOf(encoding: FieldEncodingLike | null | undefined, row: Record<string, unknown>, columnUnit = ''): number | undefined {
  if (!encoding) return undefined
  const field = text(encoding.field)
  const raw = field ? finite(row[field]) : undefined
  if (raw !== undefined && raw > 0) {
    if (text(encoding.scaleType) === 'linear') {
      const d0 = finite(encoding.domainMin) ?? 0
      const d1 = finite(encoding.domainMax) ?? 1
      const r0 = finite(encoding.rangeMin) ?? 0
      const r1 = finite(encoding.rangeMax) ?? 1
      const t = d1 === d0 ? 0 : (raw - d0) / (d1 - d0)
      return r0 + t * (r1 - r0)
    }
    const unit = text(encoding.unit) || text(columnUnit) || 'm'
    return raw * (UNITS[unit.toLowerCase()] ?? 1)
  }
  const fallback = finite(encoding.value)
  return fallback !== undefined && fallback > 0 ? fallback : undefined
}

const hex = (value: number) => Math.round(Math.max(0, Math.min(255, value))).toString(16).padStart(2, '0')
const rgb = (color: string): [number, number, number] | null => {
  const h = color.trim().replace(/^#/, '')
  const full = h.length === 3 ? h.split('').map((c) => c + c).join('') : h.slice(0, 6)
  return /^[0-9a-f]{6}$/i.test(full) ? [0, 2, 4].map((i) => parseInt(full.slice(i, i + 2), 16)) as [number, number, number] : null
}

/**
 * A colour from a row: nominal, the colour of the value's mapping;
 * quantitative, the ramp between lowColor and highColor over the domain;
 * the encoding's colour where neither gives one; undefined for none.
 */
export function colorOf(encoding: ColorEncodingLike | null | undefined, row: Record<string, unknown>): string | undefined {
  if (!encoding) return undefined
  const field = text(encoding.field)
  const value = field ? row[field] : undefined
  if (value !== undefined && value !== null && value !== '') {
    if (text(encoding.type) === 'quantitative') {
      const n = finite(value)
      const low = rgb(text(encoding.lowColor))
      const high = rgb(text(encoding.highColor))
      if (n !== undefined && low && high) {
        const d0 = finite(encoding.domainMin) ?? 0
        const d1 = finite(encoding.domainMax) ?? 1
        const t = Math.max(0, Math.min(1, d1 === d0 ? 0 : (n - d0) / (d1 - d0)))
        return '#' + low.map((c, i) => hex(c + t * (high[i] - c))).join('')
      }
    } else {
      const mapped = listOf(encoding.mappings).find((m) => text(m.code) === String(value))
      if (text(mapped?.color)) return text(mapped?.color)
    }
  }
  return text(encoding.color) || undefined
}

/** The model file of a row: its value's mapping, else the default. */
export function modelOf(encoding: ModelEncodingLike | null | undefined, row: Record<string, unknown>, fallback: string): string {
  const field = text(encoding?.field)
  if (!field) return fallback
  const mapped = listOf(encoding?.mappings).find((m) => text(m.code) === String(row[field] ?? ''))
  return text(mapped?.url) || fallback
}

/** Whether a mesh belongs to a part: its pattern on the mesh and material names, case ignored. */
export function inPart(part: PartEncodingLike, names: string): boolean {
  const pattern = text(part.mesh)
  if (!pattern) return false
  try {
    return new RegExp(pattern, 'i').test(names)
  } catch {
    return false
  }
}
