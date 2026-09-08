/*
Copyright (c) 2026 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena
*/

/**
 * A settings object read by the names the model gives its features.
 *
 * A generated instance keeps its values in private fields behind the
 * getters, so spreading one - `{ ...defaults }`, `Object.assign(x, config)`
 * - hands back `_title` and `_borderColor`, plus a handful of EMF's own
 * bookkeeping. Merging that into a widget's configuration writes names
 * nothing reads, leaves the real ones at their defaults, and stores the
 * result with the board.
 *
 * A generated instance says what it is through toJSON; anything else is
 * handed back as it stands, which is what a board saved before its widget
 * was modelled brings.
 */
export function plainSettings(settings: unknown): Record<string, unknown> {
  if (!settings || typeof settings !== 'object') return {}

  const held = settings as { toJSON?: () => Record<string, unknown> }
  return typeof held.toJSON === 'function'
    ? held.toJSON()
    : (settings as Record<string, unknown>)
}
