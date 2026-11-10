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
 * A table and the settings, made into what ECharts draws.
 *
 * Nothing here touches a canvas, so all of it is tested without one: the
 * widget only hands the result to the chart. What a kind cannot draw from
 * the table it was given comes back as a problem with a name, which the
 * widget says in words, rather than as an empty canvas that says nothing.
 */

import type { Table } from './table'
import { Context, type Drawing, type Look, type Option } from './context'
import { bars3d } from './kinds/bars3d'
import { surface } from './kinds/surface'
import { scatter3d } from './kinds/scatter3d'
import { sunburst } from './kinds/sunburst'

export { HOME_VIEW, homeOf, SMALL, WORDS, type Drawing, type Look, type Option, type Problem, type Word } from './context'

export const KINDS = [
  'bars3d',
  'surface',
  'scatter3d',
  'sunburst',
] as const
export type Kind = (typeof KINDS)[number]

/** The kinds drawn in a 3D box, which turn and take the lighting. */
export const SPATIAL: ReadonlySet<Kind> = new Set(['bars3d', 'surface', 'scatter3d'])

/** How each kind is drawn: one module each, under kinds/. */
const DRAWERS: Record<Kind, (context: Context) => Drawing> = {
  bars3d,
  surface,
  scatter3d,
  sunburst,
}

/** A kind by what is stored: the enum's name (BARS3D) or its literal (bars3d). */
export function kindOf(stored: unknown): Kind {
  const text = String(stored ?? '').toLowerCase().replace(/_/g, '')
  return (KINDS as readonly string[]).includes(text) ? (text as Kind) : 'bars3d'
}

export function draw(table: Table | null, look: Look): Drawing {
  if (!table || !table.rows.length) return { problem: 'noData' }
  return DRAWERS[look.kind](new Context(table, look))
}

/**
 * The shape of a drawing: which parts it has and how many of each. A new
 * drawing of the same shape is merged into the chart, so its marks move to
 * their new places; one of another shape - fewer series, a calendar less, a
 * part gone - is drawn afresh, since a merge keeps whatever the new drawing
 * does not mention.
 */
export function shapeOf(option: Option): string {
  return Object.keys(option)
    .sort()
    .map((key) => (Array.isArray(option[key]) ? `${key}:${option[key].length}` : key))
    .join(',')
}
