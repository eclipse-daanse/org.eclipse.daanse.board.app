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
 * A board carried in and out as a file, or opened from an address (#1424).
 *
 * A board served over HTTP had no way to get a board file into the
 * browser: the storage dialog reads the places the browser already
 * holds, and a phone has no folder to connect. These are the pieces that
 * know nothing of the application - names, the download, and which
 * addresses a board may be fetched from.
 */

/** The `boards` key of config.json */
export interface BoardsConfig {
  /** Origins other than the page's own that a board may be opened from */
  allowedOrigins?: unknown
}

/** The `initWithConfigurationURI` key of config.json */
export interface InitialBoardConfig {
  enabled?: unknown
  url?: unknown
}

/** A file's name as the name of a state: no folder, no `.json`. */
export function nameFromFile(fileName: string): string {
  const base = fileName.split(/[\\/]/).pop() ?? ''
  return base.replace(/\.json$/i, '').trim()
}

/** The last part of an address as the name of a state. */
export function nameFromUrl(url: URL): string {
  const last = url.pathname.split('/').filter(Boolean).pop() ?? ''
  try {
    return nameFromFile(decodeURIComponent(last))
  } catch {
    return nameFromFile(last)
  }
}

/**
 * A name not yet taken: the one wanted, or with a number after it.
 *
 * Importing a file twice keeps both rather than refusing the second -
 * a place rejects a name it already holds, and overwriting a state one
 * did not choose is worse than a second one to delete.
 */
export function freeName(wanted: string, taken: Iterable<string>): string {
  const held = new Set(taken)
  if (!held.has(wanted)) return wanted
  for (let n = 2; ; n += 1) {
    const candidate = `${wanted} (${n})`
    if (!held.has(candidate)) return candidate
  }
}

/** Hands the browser a JSON text to save as a file. */
export function downloadJson(name: string, text: string): void {
  const url = URL.createObjectURL(new Blob([text], { type: 'application/json' }))
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = `${name}.json`
  anchor.click()
  URL.revokeObjectURL(url)
}

/** The board an address asks for in `?board=`, if it asks for one. */
export function boardParameter(location: string): string | undefined {
  try {
    const value = new URL(location).searchParams.get('board')
    return value?.trim() ? value.trim() : undefined
  } catch {
    return undefined
  }
}

/** The board the deployment opens when nothing else is open, if any. */
export function initialBoard(config: InitialBoardConfig | null | undefined): string | undefined {
  if (!config || config.enabled !== true) return undefined
  return typeof config.url === 'string' && config.url.trim() ? config.url.trim() : undefined
}

/**
 * Where a board may be fetched from, or why not.
 *
 * A board is more than data: a computed variable and a chart formula run
 * as code. So the rule is the one for extra bundles - the page's own
 * origin, and the origins the deployment lists - and only over http(s).
 *
 * @throws Error naming the reason, when the address is refused.
 */
export function boardUrl(raw: string, base: string, allowedOrigins: unknown): URL {
  let url: URL
  try {
    url = new URL(raw, base)
  } catch {
    throw new Error(`"${raw}" is not an address`)
  }
  if (url.protocol !== 'http:' && url.protocol !== 'https:') {
    throw new Error(`${url.protocol} is not allowed`)
  }

  const trusted = new Set<string>([new URL(base).origin])
  for (const origin of Array.isArray(allowedOrigins) ? allowedOrigins : []) {
    try {
      if (typeof origin === 'string') trusted.add(new URL(origin).origin)
    } catch {
      /* Not an origin; it allows nothing. */
    }
  }
  if (!trusted.has(url.origin)) throw new Error(`origin ${url.origin} is not allowed`)
  return url
}

/**
 * The text of a board at an address.
 *
 * @throws Error naming the HTTP status, when the server does not hand it over.
 */
export async function fetchBoardText(
  url: URL,
  doFetch: typeof fetch = globalThis.fetch.bind(globalThis),
): Promise<string> {
  const response = await doFetch(url.href, { cache: 'no-cache' })
  if (!response.ok) throw new Error(`HTTP ${response.status}`)
  return response.text()
}
