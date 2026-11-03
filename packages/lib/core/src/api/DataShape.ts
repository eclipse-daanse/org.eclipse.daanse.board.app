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
 * The form data takes between a source and a widget.
 *
 * It is the argument a store answers in `getData(type)` and the one a
 * widget passes to `useDatasourceRepository`. Both ends have always
 * agreed on these strings and neither has ever said so anywhere that
 * could be read without running the code (#1183).
 *
 * Here rather than beside either end, because both have to name it and
 * neither should depend on the other for a word. It is a type and a few
 * constants; nothing of it survives into the bundle.
 *
 * Open on purpose: a bundle that brings its own kind of source and its
 * own widget to read it names a shape of its own, and the ones listed
 * are the ones the application ships with.
 */
export type DataShape =
  /** Rows with headers, as a table shows them. */
  | 'DataTable'
  /** A cube's cells and axes, for the pivot table. */
  | 'PivotTable'
  /** Series ready for a chart. */
  | 'ChartData'
  /** Readings as the weather widget expects them. */
  | 'WeatherData'
  /** Observations from an OGC SensorThings endpoint. */
  | 'OGCSTAData'
  /** Features with geometry. */
  | 'geojson'
  /** Whatever came back, parsed. */
  | 'object'
  /** Whatever came back, as text. */
  | 'string'
  | (string & {})

/**
 * What a widget that shows no data reads.
 *
 * Said rather than left empty: an empty list used to mean both this and
 * "nobody has filled it in", and eleven widgets that do read data stood
 * on it.
 */
export const READS_NOTHING = 'none' as const

/** What a widget reads: the shapes it can be given, or nothing at all. */
export type Reads = typeof READS_NOTHING | DataShape[]

/** Whether a source answering these shapes can feed a widget reading that. */
export function fits(reads: Reads, answers: readonly DataShape[] | undefined): boolean {
  if (reads === READS_NOTHING) return false
  if (!answers?.length) return false
  return reads.some((shape) => answers.includes(shape))
}
