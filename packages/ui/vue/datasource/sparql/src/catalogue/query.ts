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

import type { CatalogueEntry, EntryKind } from './types'

/** What a SELECT answers with, as the SPARQL 1.1 JSON results format puts it. */
export interface SparqlResults {
  head: { vars: string[] }
  results: { bindings: Record<string, { value: string; type: string }>[] }
}

/**
 * A string as SPARQL will read it back.
 *
 * The search text used to be dropped into the query between quotes as it
 * was typed. A quotation mark ended the literal and everything after it
 * was read as query - a broken search at best, and a different query than
 * the one meant at worst.
 */
export function asLiteral(value: string): string {
  const escaped = value
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '\\r')
    .replace(/\t/g, '\\t')
  return `"${escaped}"`
}

export interface CatalogueSearch {
  /** Matched against the title, case-insensitively. Empty lists everything. */
  text?: string
  /** Format or conformsTo URIs to keep; empty means every kind. */
  formats?: string[]
  /** Only datasets, only services, or - left out - both. */
  kind?: EntryKind
  limit?: number
  /** Rows to skip, for the page after the first. */
  offset?: number
}

/**
 * One row more than the page holds.
 *
 * Whether there is a next page is asked by fetching one extra row and
 * seeing whether it arrived. A COUNT over a federated catalogue costs as
 * much as the search itself and most endpoints time out on it, so the
 * total is not offered at all rather than offered unreliably.
 */
export const PROBE = 1

/**
 * The query that reads a DCAT catalogue.
 *
 * Two shapes in one answer, through a UNION: datasets reached by their
 * distribution's accessURL, and services reached by their endpointURL.
 * The service half used to sit in the query commented out, so a catalogue's
 * endpoints - the very things worth connecting to - were never found.
 *
 * Only what DCAT-AP makes mandatory is required: a distribution has an
 * accessURL, a dataset and a service have a title. Format, description,
 * publisher and date are optional here because they are optional there,
 * and demanding them hid conformant datasets entirely (#1151).
 */
export function catalogueQuery(search: CatalogueSearch = {}): string {
  const limit = Math.min(Math.max(search.limit ?? 10, 1), 1000)
  const offset = Math.max(search.offset ?? 0, 0)
  const text = (search.text ?? '').trim().toLowerCase()

  const byTitle = text ? `FILTER (CONTAINS(LCASE(?title), ${asLiteral(text)}))` : ''
  const byFormat = search.formats?.length
    ? `FILTER (?format IN (${search.formats.map((each) => `<${each}>`).join(', ')}))`
    : ''
  /* The two halves are told apart by the bound ?kind, so one filter does it. */
  const byKind = search.kind ? `FILTER (?kind = ${asLiteral(search.kind)})` : ''

  return `
PREFIX dcat: <http://www.w3.org/ns/dcat#>
PREFIX dct: <http://purl.org/dc/terms/>
PREFIX foaf: <http://xmlns.com/foaf/0.1/>

SELECT DISTINCT ?kind ?title ?description ?accessUrl ?format ?publisher ?modified WHERE {
  {
    ?d a dcat:Dataset .
    ?d dct:title ?title .
    ?d dcat:distribution ?dist .
    ?dist dcat:accessURL ?accessUrl .
    OPTIONAL { ?dist dct:format ?format }
    OPTIONAL { ?d dct:description ?description }
    OPTIONAL { ?d dct:modified ?modified }
    OPTIONAL { ?d dct:publisher ?p . OPTIONAL { ?p foaf:name ?publisher } }
    BIND("dataset" AS ?kind)
  }
  UNION
  {
    ?s a dcat:DataService .
    ?s dct:title ?title .
    ?s dcat:endpointURL ?accessUrl .
    OPTIONAL { ?s dct:conformsTo ?format }
    OPTIONAL { ?s dct:description ?description }
    OPTIONAL { ?s dct:modified ?modified }
    OPTIONAL { ?s dct:publisher ?p . OPTIONAL { ?p foaf:name ?publisher } }
    BIND("service" AS ?kind)
  }
  ${byTitle}
  ${byFormat}
  ${byKind}
}
ORDER BY ?title ?accessUrl
LIMIT ${limit + PROBE}${offset ? `
OFFSET ${offset}` : ''}
`.trim()
}

/**
 * A page of results, and whether the catalogue holds more.
 *
 * The extra row PROBE asked for is dropped here: it exists to answer the
 * question, not to be shown.
 */
export function pageFrom(results: SparqlResults, limit: number) {
  const all = entriesFrom(results)
  return { entries: all.slice(0, limit), more: all.length > limit }
}

/** The bindings as entries, with the empties left out rather than carried as ''. */
export function entriesFrom(results: SparqlResults): CatalogueEntry[] {
  return (results.results?.bindings ?? []).map((row: SparqlResults['results']['bindings'][number]) => ({
    kind: row.kind?.value === 'service' ? 'service' : 'dataset',
    title: row.title?.value ?? '',
    description: row.description?.value || undefined,
    accessUrl: row.accessUrl?.value ?? '',
    format: row.format?.value || undefined,
    publisher: row.publisher?.value || undefined,
    modified: row.modified?.value || undefined,
  }))
}
