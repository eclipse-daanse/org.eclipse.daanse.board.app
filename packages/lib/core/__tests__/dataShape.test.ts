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
 * ********************************************************************/

import { describe, test, expect } from 'vitest'
import { fits, READS_NOTHING } from '../src/index'

/*
 * Whether a widget fits a source (#1183).
 *
 * The question used to be asked of source types - a widget listed 'csv'
 * and 'rest' - which went wrong in both directions: eleven widgets that
 * read data listed nothing and so fitted nothing, and a new kind of
 * source fitted no widget until twenty packages had been edited. Asked
 * of shapes, it is whether what the source answers is among what the
 * widget reads.
 */
describe('fits', () => {
  test('a table widget takes a source that answers DataTable', () => {
    expect(fits(['DataTable'], ['DataTable', 'string'])).toBe(true)
  })

  test('and not one that answers something else', () => {
    expect(fits(['PivotTable'], ['DataTable', 'string'])).toBe(false)
  })

  test('one shape in common is enough', () => {
    expect(fits(['object', 'OGCSTAData'], ['DataTable', 'object', 'string'])).toBe(true)
  })

  /* A widget that shows no data is not a widget to put a source on. */
  test('a widget that reads nothing fits no source', () => {
    expect(fits(READS_NOTHING, ['DataTable', 'object', 'string'])).toBe(false)
  })

  /*
   * A source type that has not said what it answers is left out rather
   * than offered - the opposite of the empty list it replaces, which was
   * read as "fits nothing" for widgets that fitted plenty.
   */
  test('a source that has not said is not offered', () => {
    expect(fits(['DataTable'], undefined)).toBe(false)
    expect(fits(['DataTable'], [])).toBe(false)
  })

  /* A bundle bringing its own kind of data names its own shape. */
  test('a shape the application does not ship still matches itself', () => {
    expect(fits(['SeismicTrace'], ['SeismicTrace'])).toBe(true)
  })
})
