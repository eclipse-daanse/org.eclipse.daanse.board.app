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

import { Comperator } from '../gen/Comperator'

/** The part of a renderer this reads: its thing conditions. */
interface ThingRule {
  thing?: Iterable<{ prop?: string; comperator?: Comperator; value?: string }> | null
}

const literal = (s: string) => `'${s.replace(/'/g, "''")}'`

/**
 * One thing condition as an OData filter on `/Things`, or null when the
 * server cannot express it. Mirrors compareThing (comparator.ts): `x*`
 * starts with, `*x` ends with, `*x*` contains, no star is equality.
 */
function conditionFilter(condition: { prop?: string; comperator?: Comperator; value?: string }): string | null {
  if (condition.prop !== 'name' || condition.comperator !== Comperator.eq) return null
  const value = String(condition.value ?? '')
  const lead = value.startsWith('*')
  const trail = value.length > 1 && value.endsWith('*')
  const core = value.slice(lead ? 1 : 0, trail ? -1 : undefined)
  if (!core || core.includes('*')) return null
  if (lead && trail) return `substringof(${literal(core)},name)`
  if (lead) return `endswith(name,${literal(core)})`
  if (trail) return `startswith(name,${literal(core)})`
  return `name eq ${literal(core)}`
}

/**
 * The things a map shows, as a filter on `/Things`.
 *
 * A map draws a thing only when one of its renderers matches it, and a
 * renderer matches when all of its thing conditions do - so the filter is
 * the renderers joined with `or`, each its conditions joined with `and`.
 * A condition on `*` matches every thing and adds nothing; a renderer
 * without thing conditions matches none and is left out.
 *
 * Returns null when a rule has no server form (another property, another
 * comparator, every thing): the map then needs the full catalogue, as
 * before. A filter on `/Things` is used because this server's `/Things`
 * collection is complete, unlike `/Datastreams` (#1250).
 */
export function thingFilterOf(renderers: Iterable<ThingRule> | null | undefined): string | null {
  const alternatives: string[] = []
  for (const renderer of renderers ?? []) {
    const conditions = [...(renderer.thing ?? [])]
    if (conditions.length === 0) continue
    const parts: string[] = []
    for (const condition of conditions) {
      if (condition.value === '*') continue
      const part = conditionFilter(condition)
      if (part === null) return null
      parts.push(part)
    }
    // Only stars: this renderer matches every thing.
    if (parts.length === 0) return null
    alternatives.push(parts.length === 1 ? parts[0] : `(${parts.join(' and ')})`)
  }
  if (alternatives.length === 0) return null
  return [...new Set(alternatives)].join(' or ')
}
