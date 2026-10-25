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
/*
 * A query as a link: #q=<base64url of its UTF-8 text>, and where it ran -
 * &s=<server URL>&c=<catalog>&cube=<cube>, each URI-encoded. Opening such a
 * link starts the workbench with that query, against that cube. No
 * credentials travel: a server that wants them asks again.
 */

/** A shared query and the place it ran. */
export interface SharedQuery {
  text: string
  url?: string
  catalog?: string
  cube?: string
}

export function encodeQuery(text: string): string {
  const bytes = new TextEncoder().encode(text)
  let binary = ''
  for (const byte of bytes) binary += String.fromCharCode(byte)
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

export function decodeQuery(encoded: string): string | null {
  try {
    const base64 = encoded.replace(/-/g, '+').replace(/_/g, '/')
    const padded = base64 + '='.repeat((4 - (base64.length % 4)) % 4)
    const binary = atob(padded)
    return new TextDecoder().decode(Uint8Array.from(binary, c => c.charCodeAt(0)))
  } catch {
    return null
  }
}

function hashParams(hash: string): URLSearchParams {
  return new URLSearchParams(hash.replace(/^#/, ''))
}

export function sharedFromHash(hash: string): SharedQuery | null {
  const params = hashParams(hash)
  const encoded = params.get('q')
  const text = encoded ? decodeQuery(encoded) : null
  if (text === null) return null
  const optional = (key: string) => params.get(key) || undefined
  return { text, url: optional('s'), catalog: optional('c'), cube: optional('cube') }
}

export function queryFromHash(hash: string): string | null {
  return sharedFromHash(hash)?.text ?? null
}

export function shareLink(
  location: { origin: string; pathname: string },
  text: string,
  place: Omit<SharedQuery, 'text'> = {},
): string {
  const parts = [`q=${encodeQuery(text)}`]
  if (place.url) parts.push(`s=${encodeURIComponent(place.url)}`)
  if (place.catalog) parts.push(`c=${encodeURIComponent(place.catalog)}`)
  if (place.cube) parts.push(`cube=${encodeURIComponent(place.cube)}`)
  return `${location.origin}${location.pathname}#${parts.join('&')}`
}
