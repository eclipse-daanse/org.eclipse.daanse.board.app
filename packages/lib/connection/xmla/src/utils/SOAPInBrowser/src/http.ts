/*********************************************************************
 * Copyright (c) 2025 Contributors to the Eclipse Foundation.
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
export async function request (url: string | URL, data: string | null, exheaders: any = {}): Promise<Response> {
  const fetchFunc = fetch

  const baseHeaders = {
    Accept: 'text/html,application/xhtml+xml,application/xml',
    'Content-Type': 'text/xml'
  }

  const request = await fetchFunc(url, {
    method: data ? 'POST' : 'GET',
    headers: {
      ...baseHeaders,
      ...exheaders
    },
    body: data
  })

  return request
}
