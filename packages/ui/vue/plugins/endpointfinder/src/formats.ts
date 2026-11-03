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

import { Formats } from './queryBuilder/FilterAPI'

/**
 * What a found endpoint is read with: the kind of connection it needs,
 * and the kind of source that reads it through that connection.
 *
 * It stood as two switch statements over the same formats, a few lines
 * apart, each answering half the question - so a format added to one and
 * forgotten in the other produced a connection with nothing reading it.
 * GEOJSON was missing from both: a found GeoJSON distribution offered a
 * button that quietly made nothing (#1187).
 *
 * The catalogue answers the same question in
 * packages/ui/vue/datasource/sparql/src/catalogue/types.ts, over the same
 * authority URIs. The two are not joined up here because this bundle does
 * not depend on that one; keeping them in step is worth a ticket of its
 * own rather than a dependency between two plugins.
 */
export interface ReadWith {
  /** The connection type that reaches it. */
  connection: string
  /** The source type that reads it through that connection. */
  source: string
  /** Settings the source needs beyond its address. */
  config?: Record<string, unknown>
}

const READ_WITH: Record<string, ReadWith> = {
  [Formats.CSV]: { connection: 'rest', source: 'csv', config: { separators: ',' } },
  [Formats.JSON]: { connection: 'rest', source: 'rest' },
  [Formats.REST]: { connection: 'rest', source: 'rest' },
  /*
   * A document at an address, like any other - what makes it geography is
   * the map view the rest source offers, not a source type of its own.
   * The catalogue reads it the same way.
   */
  [Formats.GEOJSON]: { connection: 'rest', source: 'rest' },
  [Formats.OGCSTA]: { connection: 'rest', source: 'ogcsta' },
  [Formats.XMLA]: { connection: 'xmla', source: 'xmla' },
}

/**
 * How to read an endpoint of this format, where we can read it at all.
 *
 * The format arrives bare, as the catalogue's value without its angle
 * brackets; the Formats enum holds them, which is the one place that
 * difference is dealt with.
 */
export function readWith(format: string | undefined): ReadWith | undefined {
  if (!format) return undefined
  return READ_WITH[`<${format}>`]
}
