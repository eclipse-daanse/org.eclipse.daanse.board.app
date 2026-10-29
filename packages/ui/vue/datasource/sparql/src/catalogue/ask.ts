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

import type { SparqlResults } from './query'

/**
 * Sends a query over a connection and hands back what came back.
 *
 * The catalogue asks questions of its own - a search is not the query the
 * source stores - so it cannot go through the store, which answers with
 * the one configured query. What it shares with the store is the
 * connection, and therefore this shape of request.
 *
 * POST with a form-encoded body rather than a query string: a DCAT search
 * runs to a couple of kilobytes and endpoints disagree about how long a
 * URL may be.
 */
export async function askSparql(
  connection: { fetch: (config: any, options?: RequestInit) => Promise<Response> },
  query: string,
  signal?: AbortSignal,
): Promise<SparqlResults> {
  const response = await connection.fetch(
    { url: '' },
    {
      method: 'POST',
      signal,
      body: 'query=' + encodeURIComponent(query),
      headers: {
        Accept: 'application/sparql-results+json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    },
  )

  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`)
  }

  return (await response.json()) as SparqlResults
}
