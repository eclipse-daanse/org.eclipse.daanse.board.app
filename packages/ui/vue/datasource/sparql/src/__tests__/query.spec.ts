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

import { describe, expect, it } from 'vitest'
import { asLiteral, catalogueQuery, entriesFrom, pageFrom, PROBE } from '../catalogue/query'
import { FILE_TYPE, CONFORMS_TO, readsWith } from '../catalogue/types'

describe('the catalogue query', () => {
  it('asks for services as well as datasets', () => {
    const query = catalogueQuery()

    expect(query).toContain('a dcat:Dataset')
    expect(query).toContain('a dcat:DataService')
    expect(query).toContain('dcat:endpointURL')
    expect(query).toContain('UNION')
  })

  it('requires only what DCAT-AP requires, so a sparse catalogue still answers', () => {
    const query = catalogueQuery()

    /* #1151: these two were mandatory and hid conformant datasets. */
    expect(query).toContain('OPTIONAL { ?dist dct:format ?format }')
    expect(query).toContain('OPTIONAL { ?d dct:description ?description }')
    /* The one a distribution must have. */
    expect(query).toContain('?dist dcat:accessURL ?accessUrl .')
  })

  it('leaves out the title filter when nothing was typed', () => {
    expect(catalogueQuery({ text: '   ' })).not.toContain('CONTAINS')
    expect(catalogueQuery({ text: 'wind' })).toContain('CONTAINS(LCASE(?title), "wind")')
  })

  it('keeps a quotation mark inside the string it was typed in', () => {
    const query = catalogueQuery({ text: 'say "hello"' })

    expect(query).toContain('CONTAINS(LCASE(?title), "say \\"hello\\"")')
    /* One literal, not three: the quotes in the text do not end it. */
    expect(query.match(/CONTAINS\(LCASE\(\?title\), "(?:[^"\\]|\\.)*"\)/)).not.toBeNull()
  })

  it('escapes a backslash before it can escape the closing quote', () => {
    expect(asLiteral('c:\\path')).toBe('"c:\\\\path"')
    expect(asLiteral('a\nb')).toBe('"a\\nb"')
  })

  it('holds the page size between one and a thousand, probe aside', () => {
    expect(catalogueQuery({ limit: 0 })).toContain(`LIMIT ${1 + PROBE}`)
    expect(catalogueQuery({ limit: 5000 })).toContain(`LIMIT ${1000 + PROBE}`)
    expect(catalogueQuery({ limit: 25 })).toContain(`LIMIT ${25 + PROBE}`)
  })

  it('filters by format only when formats were chosen', () => {
    expect(catalogueQuery()).not.toContain('?format IN')
    expect(catalogueQuery({ formats: [FILE_TYPE.CSV] })).toContain(
      `?format IN (<${FILE_TYPE.CSV}>)`,
    )
  })
})

describe('reading the answer', () => {
  it('tells a service from a dataset and drops the empties', () => {
    const entries = entriesFrom({
      head: { vars: [] },
      results: {
        bindings: [
          {
            kind: { value: 'service', type: 'literal' },
            title: { value: 'Sensors', type: 'literal' },
            accessUrl: { value: 'https://example.org/v1.1', type: 'uri' },
            description: { value: '', type: 'literal' },
          },
          {
            kind: { value: 'dataset', type: 'literal' },
            title: { value: 'Rainfall', type: 'literal' },
            accessUrl: { value: 'https://example.org/rain.csv', type: 'uri' },
            format: { value: FILE_TYPE.CSV, type: 'uri' },
          },
        ],
      },
    })

    expect(entries[0].kind).toBe('service')
    expect(entries[0].description).toBeUndefined()
    expect(entries[1].kind).toBe('dataset')
    expect(entries[1].format).toBe(FILE_TYPE.CSV)
  })

  it('says what can read an entry, and nothing where we have no source', () => {
    const of = (format?: string) =>
      readsWith({ kind: 'dataset', title: '', accessUrl: '', format })

    expect(of(FILE_TYPE.CSV)).toBe('csv')
    expect(of(FILE_TYPE.XMLA)).toBe('xmla')
    /* A service says what it speaks, not what file it is. */
    expect(of(CONFORMS_TO.SENSORTHINGS)).toBe('ogcsta')
    expect(of(FILE_TYPE.WMS)).toBeUndefined()
    expect(of(undefined)).toBeUndefined()
  })
})

describe('paging through a catalogue', () => {
  it('asks for one row more than the page, to learn whether there is a next', () => {
    expect(catalogueQuery({ limit: 20 })).toContain('LIMIT 21')
  })

  it('skips only when there is something to skip', () => {
    expect(catalogueQuery({ limit: 20 })).not.toContain('OFFSET')
    expect(catalogueQuery({ limit: 20, offset: 40 })).toContain('OFFSET 40')
  })

  it('orders the rows, because a page without an order is not a page', () => {
    expect(catalogueQuery()).toContain('ORDER BY ?title ?accessUrl')
  })

  it('drops the probe row and says that more is there', () => {
    const rows = Array.from({ length: 3 }, (_, at) => ({
      kind: { value: 'dataset', type: 'literal' },
      title: { value: `row ${at}`, type: 'literal' },
      accessUrl: { value: `https://example.org/${at}`, type: 'uri' },
    }))
    const page = pageFrom({ head: { vars: [] }, results: { bindings: rows } }, 2)

    expect(page.entries).toHaveLength(2)
    expect(page.more).toBe(true)
  })

  it('reports the last page as the last', () => {
    const rows = [
      {
        kind: { value: 'dataset', type: 'literal' },
        title: { value: 'only', type: 'literal' },
        accessUrl: { value: 'https://example.org/1', type: 'uri' },
      },
    ]
    const page = pageFrom({ head: { vars: [] }, results: { bindings: rows } }, 2)

    expect(page.entries).toHaveLength(1)
    expect(page.more).toBe(false)
  })

  it('narrows to one kind when asked, and to both when not', () => {
    expect(catalogueQuery()).not.toContain('?kind =')
    expect(catalogueQuery({ kind: 'service' })).toContain('FILTER (?kind = "service")')
  })
})
