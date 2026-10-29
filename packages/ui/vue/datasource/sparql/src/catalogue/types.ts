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
 * What a DCAT catalogue offers, in the two shapes it offers it in.
 *
 * A **dataset** is published as one or more distributions - a file at an
 * address, with a format. A **service** is an endpoint that answers
 * queries; it has no format, it has a protocol it conforms to. They are
 * reached differently and they become different things here, so the
 * difference is carried rather than flattened.
 */
export type EntryKind = 'dataset' | 'service'

export interface CatalogueEntry {
  kind: EntryKind
  /** The dataset's or service's own title. */
  title: string
  description?: string
  /** Where it is read from: a distribution's accessURL, a service's endpointURL. */
  accessUrl: string
  /** A distribution's dct:format, or a service's dct:conformsTo. */
  format?: string
  publisher?: string
  modified?: string
}

/** The file-type URIs the EU vocabulary uses, for the formats we can read. */
export const FILE_TYPE = {
  XMLA: 'http://publications.europa.eu/resource/authority/file-type/XMLA',
  CSV: 'http://publications.europa.eu/resource/authority/file-type/CSV',
  XML: 'http://publications.europa.eu/resource/authority/file-type/XML',
  JSON: 'http://publications.europa.eu/resource/authority/file-type/JSON',
  REST: 'http://publications.europa.eu/resource/authority/file-type/REST',
  GEOJSON: 'http://publications.europa.eu/resource/authority/file-type/GEOJSON',
  WMS: 'http://publications.europa.eu/resource/authority/file-type/WMS_SRVC',
  WFS: 'http://publications.europa.eu/resource/authority/file-type/WFS_SRVC',
} as const

/**
 * What a service says it speaks, through dct:conformsTo.
 *
 * Not file types - a service is not a file - so they come from the
 * specifications themselves. OGC SensorThings is the one we read today;
 * it has no entry in the EU file-type vocabulary, which is why the format
 * list used to carry it as the placeholder '???' and never matched.
 */
export const CONFORMS_TO = {
  SENSORTHINGS: 'http://www.opengis.net/doc/is/sensorthings/1.1',
} as const

/** A format or protocol URI, and what this app reads it with. */
const READS: Record<string, string> = {
  [FILE_TYPE.XMLA]: 'xmla',
  [FILE_TYPE.CSV]: 'csv',
  [FILE_TYPE.JSON]: 'rest',
  [FILE_TYPE.REST]: 'rest',
  [CONFORMS_TO.SENSORTHINGS]: 'ogcsta',
}

/** A URI as the catalogue may hand it over, with or without its brackets. */
export function bareUri(value: string | undefined): string | undefined {
  return value?.replace(/^<|>$/g, '') || undefined
}

/**
 * The data source type that can read an entry, where there is one.
 *
 * Nothing for a format we have no source for - WMS, WFS and GeoJSON are
 * listed above because a catalogue serves them and a person may want to
 * see them, not because we can open them yet.
 */
export function readsWith(entry: CatalogueEntry): string | undefined {
  const named = bareUri(entry.format)
  return named ? READS[named] : undefined
}

/** The last meaningful word of a URI - what to show when we cannot read it. */
export function shortFormat(value: string | undefined): string | undefined {
  const bare = bareUri(value)
  return bare ? bare.split(/[/#]/).filter(Boolean).pop() : undefined
}
