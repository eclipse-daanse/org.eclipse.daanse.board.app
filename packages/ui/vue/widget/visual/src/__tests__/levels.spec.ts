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

/*
 * The board's XMLA source joins a tuple's captions with ' - ' into one
 * caption, and hands the tuple's members on beside it - rowProperties for a
 * row, columnProperties for a header. A caption such as $30K - $50K holds
 * the separator itself; split, it would read as two levels that are none.
 */

import { describe, expect, it } from 'vitest'
import { Context } from '../context'
import { asTable } from '../table'
import { LOOK, option } from './fixtures'

const member = (hierarchy: string, caption: string, path = caption) => ({ Caption: caption, UName: `[${hierarchy}].[${path}]` })
const gender = (caption: string) => member('Gender', caption)
const income = (caption: string) => member('Yearly Income', caption)

/** Gender × Yearly Income on the rows, one measure across, as the source answers it. */
const CROSSJOIN = {
  headers: ['Caption', 'Unit Sales'],
  rows: [
    ['F - $30K - $50K', 10],
    ['F - $50K - $70K', 20],
    ['M - $30K - $50K', 30],
    ['M - $50K - $70K', 40],
  ],
  rowProperties: {
    'F - $30K - $50K': [gender('F'), income('$30K - $50K')],
    'F - $50K - $70K': [gender('F'), income('$50K - $70K')],
    'M - $30K - $50K': [gender('M'), income('$30K - $50K')],
    'M - $50K - $70K': [gender('M'), income('$50K - $70K')],
  },
}

/** Yearly Income × Gender: the caption that holds the separator comes first. */

const context = (data: unknown, look = {}) => new Context(asTable(data)!, { ...LOOK, ...look })

describe('levels from the members a caption stands for', () => {
  it('reads one level per member of a crossjoin, whatever the captions hold', () => {
    const at = context(CROSSJOIN)
    expect(at.path(CROSSJOIN.rows[0])).toEqual(['F', '$30K - $50K'])
    expect(at.path(CROSSJOIN.rows[3])).toEqual(['M', '$50K - $70K'])
  })

  it('reads a lone member as one level, though its caption holds the separator', () => {
    const data = {
      headers: ['Caption', 'Unit Sales'],
      rows: [['$30K - $50K', 1], ['$50K - $70K', 2]],
      rowProperties: { '$30K - $50K': income('$30K - $50K'), '$50K - $70K': income('$50K - $70K') },
    }
    expect(context(data).path(data.rows[0])).toEqual(['$30K - $50K'])
  })

  it('still splits where the source named no members, as a CSV does', () => {
    const data = { headers: ['Caption', 'Units'], rows: [['Drink - Jan', 1]] }
    expect(context(data).path(data.rows[0])).toEqual(['Drink', 'Jan'])
    expect(context(data, { separator: ' / ' }).path(data.rows[0])).toEqual(['Drink - Jan'])
  })

  it('splits a row the members do not cover, and reads the others by them', () => {
    const data = { ...CROSSJOIN, rows: [...CROSSJOIN.rows, ['X - Y', 5]] }
    const at = context(data)
    expect(at.path(data.rows[0])).toEqual(['F', '$30K - $50K'])
    expect(at.path(data.rows[4])).toEqual(['X', 'Y'])
  })

  it('takes the members also from a table given as items', () => {
    const data = { headers: CROSSJOIN.headers, items: [{ Caption: 'F - $30K - $50K', 'Unit Sales': 10 }], rowProperties: CROSSJOIN.rowProperties }
    const at = context(data)
    expect(at.path(at.table.rows[0])).toEqual(['F', '$30K - $50K'])
  })

  it('tells two members of one caption apart by their path, as the caption does', () => {
    const dairy = (family: string) => member('Product', 'Dairy', `${family}].[Dairy`)
    const ca = member('Store', 'CA', 'USA].[CA')
    const data = {
      headers: ['Caption', 'Unit Sales'],
      rows: [['Drink › Dairy - CA', 1], ['Food › Dairy - CA', 2], ['Eggs - CA', 3]],
      rowProperties: {
        'Drink › Dairy - CA': [dairy('Drink'), ca],
        'Food › Dairy - CA': [dairy('Food'), ca],
        'Eggs - CA': [member('Product', 'Eggs', 'Food].[Eggs'), ca],
      },
    }
    const at = context(data)
    expect(data.rows.map((row) => at.path(row))).toEqual([['Drink › Dairy', 'CA'], ['Food › Dairy', 'CA'], ['Eggs', 'CA']])
  })

  it('reads a header by its members, and splits one the source named none for', () => {
    const data = {
      headers: ['Caption', 'F - $30K - $50K', '1997 - Q1'],
      rows: [['Unit Sales', 1, 2]],
      columnProperties: { 'F - $30K - $50K': [gender('F'), income('$30K - $50K')] },
    }
    const at = context(data)
    expect(at.headerLevels(1)).toEqual(['F', '$30K - $50K'])
    expect(at.headerLevels(2)).toEqual(['1997', 'Q1'])
  })
})

describe('every kind that reads levels', () => {

  it('flows from member to member in the sankey', () => {
    const series = option('sankey', CROSSJOIN).series[0]
    const label = series.label.formatter
    expect(series.data.map((node: { name: string }) => label({ name: node.name })).sort()).toEqual(['$30K - $50K', '$50K - $70K', 'F', 'M'])
  })

  it('flows through the members of the headers in the sankey', () => {
    const data = {
      headers: ['Caption', 'F - $30K - $50K', 'F - $50K - $70K'],
      rows: [['Unit Sales', 1, 2]],
      columnProperties: {
        'F - $30K - $50K': [gender('F'), income('$30K - $50K')],
        'F - $50K - $70K': [gender('F'), income('$50K - $70K')],
      },
    }
    const series = option('sankey', data).series[0]
    const label = series.label.formatter
    expect(series.data.map((node: { name: string }) => label({ name: node.name }))).toEqual(['F', '$30K - $50K', '$50K - $70K'])
  })

})
