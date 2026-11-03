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

import { MapSettingsImpl } from './gen/MapSettingsImpl'

/**
 * Bringing a stored board's background forward.
 *
 * Every map used to draw its tiles from CARTO, which now answers "API KEY
 * REQUIRED". The model's default moved to OpenStreetMap, but a default
 * only reaches a map that has none of its own - and a board that was
 * saved carries the old address with it, so it draws nothing and the
 * settings field holds an address that looks perfectly plausible (#1197).
 *
 * So the old address is replaced when such a board is opened. Only that
 * address: a person who entered a tile server of their own keeps it, and
 * an address that merely fails is left alone, because a failure is not
 * something this can tell from a slow network.
 */

/** Where the tiles came from until they started asking for a key. */
const RETIRED = 'https://a.basemaps.cartocdn.com/'

/**
 * What the model says a map starts with.
 *
 * Read from a fresh instance rather than held as a constant beside it:
 * the model is where the default is declared, and a second copy here
 * would be the one that goes stale.
 */
function defaults(): { url: string; attribution: string } {
  const fresh = new MapSettingsImpl()
  return { url: fresh.baseMapUrl ?? '', attribution: fresh.attribution ?? '' }
}

/** Whether this is the address that stopped working. */
export function isRetired(url: unknown): boolean {
  return typeof url === 'string' && url.startsWith(RETIRED)
}

/**
 * Whether this credit belongs to the retired tiles.
 *
 * Replaced where it names CARTO or says nothing - a credit someone wrote
 * themselves stays, even beside a replaced address, because it may name
 * the data rather than the tiles.
 */
export function creditIsStale(attribution: unknown): boolean {
  if (attribution === undefined || attribution === null) return true
  if (typeof attribution !== 'string') return false
  if (attribution.trim() === '') return true
  return /carto/i.test(attribution)
}

export interface BaseMapUpdate {
  baseMapUrl?: string
  attribution?: string
}

/**
 * What to change about a stored board's background, where anything.
 *
 * Nothing - an empty object - for a board that is already current or
 * that carries an address of its own. The caller applies what comes
 * back and says nothing where nothing came.
 */
export function renewBaseMap(stored: {
  baseMapUrl?: unknown
  attribution?: unknown
}): BaseMapUpdate {
  if (!isRetired(stored?.baseMapUrl)) return {}

  const { url, attribution } = defaults()
  const update: BaseMapUpdate = { baseMapUrl: url }
  if (creditIsStale(stored?.attribution)) update.attribution = attribution
  return update
}
