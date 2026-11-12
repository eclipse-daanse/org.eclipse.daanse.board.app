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
 * The advanced overlay of a chart (#1291): what an advanced reader wrote
 * into the spec beyond what the form can show, kept as the difference to
 * the spec the recipe compiles to - not as a second spec. The recipe stays
 * the truth for everything it says; the overlay adds to it and, where it
 * says otherwise, wins.
 *
 * Objects merge key by key, arrays by position. What the overlay may not
 * say is taken out before it is merged: a URL to load data from (the data
 * comes from board datasources), a link channel, data of its own, another
 * schema.
 */

import type { TopLevelSpec } from 'vega-lite'

type Json = Record<string, unknown>

const isObject = (value: unknown): value is Json => !!value && typeof value === 'object' && !Array.isArray(value)

/** Why the text of an overlay is no overlay. */
export class OverlayError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'OverlayError'
  }
}

/** The overlay a text holds; empty text is no overlay. */
export function parseOverlay(text: string | null | undefined): Json | undefined {
  const held = String(text ?? '').trim()
  if (!held) return undefined
  let parsed: unknown
  try {
    parsed = JSON.parse(held)
  } catch (e) {
    throw new OverlayError(e instanceof Error ? e.message : String(e))
  }
  if (!isObject(parsed)) throw new OverlayError('the overlay is a JSON object')
  return parsed
}

/* Keys an overlay may not set, anywhere in it. */
const REFUSED_KEYS = new Set(['url', 'href', '$schema', 'datasets', 'usermeta'])

/** The overlay without what it may not say; the paths taken out are reported. */
export function guarded(overlay: unknown, path = '', refused: string[] = []): { overlay: unknown; refused: string[] } {
  if (Array.isArray(overlay)) {
    return { overlay: overlay.map((each, i) => guarded(each, `${path}[${i}]`, refused).overlay), refused }
  }
  if (!isObject(overlay)) return { overlay, refused }
  const out: Json = {}
  for (const [key, value] of Object.entries(overlay)) {
    const at = path ? `${path}.${key}` : key
    if (REFUSED_KEYS.has(key)) {
      refused.push(at)
      continue
    }
    /* A data definition is the recipe's: only a name may point at a dataset. */
    if (key === 'data' && isObject(value) && !('name' in value && Object.keys(value).length === 1)) {
      refused.push(at)
      continue
    }
    out[key] = guarded(value, at, refused).overlay
  }
  return { overlay: out, refused }
}

/** The overlay merged into the spec, and the overlay paths that found nothing to merge into. */
export function mergeOverlay(spec: TopLevelSpec, overlay: Json | undefined): { spec: TopLevelSpec; unused: string[] } {
  const unused: string[] = []
  if (!overlay) return { spec, unused }
  const merge = (base: unknown, over: unknown, path: string): unknown => {
    if (isObject(base) && isObject(over)) {
      const out: Json = { ...base }
      for (const [key, value] of Object.entries(over)) out[key] = merge(base[key], value, path ? `${path}.${key}` : key)
      return out
    }
    if (Array.isArray(base) && Array.isArray(over)) {
      over.forEach((_value, i) => {
        if (i >= base.length && isObject(over[i]) && !Object.keys(over[i] as Json).length) return
        if (i >= base.length) unused.push(`${path}[${i}]`)
      })
      return base.map((each, i) => (i < over.length ? merge(each, over[i], `${path}[${i}]`) : each))
    }
    return over === undefined ? base : over
  }
  return { spec: merge(spec, overlay, '') as TopLevelSpec, unused }
}

/**
 * The overlay that turns the compiled spec into the edited one: only what
 * differs. A key the reader removed becomes null - Vega-Lite's word for
 * "none" - since a merge cannot remove. An array of another length is
 * taken whole; one of the same length by position, {} where nothing
 * changed.
 */
export function diffOverlay(compiled: unknown, edited: unknown): unknown {
  if (isObject(compiled) && isObject(edited)) {
    const out: Json = {}
    for (const [key, value] of Object.entries(edited)) {
      const part = diffOverlay(compiled[key], value)
      if (part !== undefined) out[key] = part
    }
    for (const key of Object.keys(compiled)) if (!(key in edited)) out[key] = null
    return Object.keys(out).length ? out : undefined
  }
  if (Array.isArray(compiled) && Array.isArray(edited) && compiled.length === edited.length) {
    const parts = edited.map((each, i) => diffOverlay(compiled[i], each))
    return parts.some((part) => part !== undefined) ? parts.map((part) => part ?? {}) : undefined
  }
  return JSON.stringify(compiled) === JSON.stringify(edited) ? undefined : edited
}

/** The leaf paths an overlay sets - what the tab lists as overrides. */
export function overlayPaths(overlay: unknown, path = ''): string[] {
  /* A list of plain values is one setting - a dash pattern, a domain - not one per entry. */
  if (Array.isArray(overlay) && overlay.every((each) => !each || typeof each !== 'object')) return path ? [path] : []
  if (Array.isArray(overlay)) return overlay.flatMap((each, i) => overlayPaths(each, `${path}[${i}]`))
  if (isObject(overlay) && Object.keys(overlay).length) {
    return Object.entries(overlay).flatMap(([key, value]) => overlayPaths(value, path ? `${path}.${key}` : key))
  }
  if (isObject(overlay)) return []
  return path ? [path] : []
}

/** The overlay without one path; empty parents go with it. */
export function withoutPath(overlay: unknown, path: string): unknown {
  const steps = path.match(/[^.[\]]+/g) ?? []
  const remove = (held: unknown, at: number): unknown => {
    if (at >= steps.length) return undefined
    const step = steps[at]
    if (Array.isArray(held)) {
      const index = Number(step)
      const next = held.map((each, i) => (i === index ? remove(each, at + 1) ?? {} : each))
      return next.every((each) => isObject(each) && !Object.keys(each).length) ? undefined : next
    }
    if (!isObject(held) || !(step in held)) return held
    const out: Json = { ...held }
    const part = remove(held[step], at + 1)
    if (part === undefined) delete out[step]
    else out[step] = part
    return Object.keys(out).length ? out : undefined
  }
  return remove(overlay, 0)
}

/** The overlay as the model stores it; nothing left is the empty text. */
export const overlayText = (overlay: unknown): string =>
  overlay === undefined || (isObject(overlay) && !Object.keys(overlay).length) ? '' : JSON.stringify(overlay, null, 2)

/** The spec a chart draws: the compiled one with its stored overlay, and what the overlay could not do. */
export function withOverlay(compiled: TopLevelSpec, text: string | null | undefined): {
  spec: TopLevelSpec
  unused: string[]
  refused: string[]
  error?: string
} {
  let parsed: Json | undefined
  try {
    parsed = parseOverlay(text)
  } catch (e) {
    /* A broken overlay is not drawn, but the chart the form describes is. */
    return { spec: compiled, unused: [], refused: [], error: e instanceof Error ? e.message : String(e) }
  }
  const { overlay, refused } = guarded(parsed)
  const { spec, unused } = mergeOverlay(compiled, overlay as Json | undefined)
  return { spec, unused, refused }
}
