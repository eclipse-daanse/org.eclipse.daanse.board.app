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
 * Both ends of the question "can this widget show this source" (#1183).
 *
 * A widget declares the data shapes it reads, a source type the ones it
 * answers, and `fits` puts the two together. Neither declaration is
 * reached by any other test: a widget that forgets `reads` is simply
 * never offered, and a source type that forgets `answers` offers nothing
 * - both of which look like a quiet UI rather than a defect.
 *
 * That is not hypothetical. The list this replaced held source types in
 * some widgets, a data type in another and a composer's display name in a
 * third, and eleven widgets that do read data stood on an empty one -
 * chart, pivot, progress, rss, video, both svg widgets and both text
 * widgets among them. Nothing failed; they were just never offered.
 *
 * Read from the sources rather than by importing them: a widget bundle
 * pulls in Monaco, Mermaid and a map at import time, and what is being
 * checked is a declaration, which is right there in the text. Same
 * reasoning as scripts/check-model-conformance.mjs.
 */

import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { globSync } from 'node:fs'

const ROOT = resolve(import.meta.dirname, '..')

/** Every widget package that declares a provider. */
function widgetProviders(): Array<{ name: string; source: string }> {
  return globSync('packages/ui/vue/widget/*/src/index.ts', { cwd: ROOT })
    .concat(globSync('packages/ui/vue/widget/*/*/src/index.ts', { cwd: ROOT }))
    .map((path) => ({
      name: path.replace('packages/ui/vue/widget/', '').replace('/src/index.ts', ''),
      source: readFileSync(resolve(ROOT, path), 'utf8'),
    }))
    .filter((each) => /implements\s+WidgetProvider/.test(each.source))
}

/** Every registration of a source type, with the object it was given. */
function sourceTypes(): Array<{ name: string; declaration: string; file: string }> {
  const out: Array<{ name: string; declaration: string; file: string }> = []
  const files = globSync('packages/ui/vue/datasource/*/src/index.ts', { cwd: ROOT }).concat(
    globSync('packages/ui/vue/composer/*/src/index.ts', { cwd: ROOT }),
  )
  for (const path of files) {
    const source = readFileSync(resolve(ROOT, path), 'utf8')
    for (const match of source.matchAll(/registerDatasourceType\(\s*'([^']+)'\s*,\s*\{/g)) {
      /* To the closing brace of the object it was handed. */
      let depth = 1
      let at = match.index + match[0].length
      while (at < source.length && depth > 0) {
        if (source[at] === '{') depth++
        else if (source[at] === '}') depth--
        at++
      }
      out.push({ name: match[1], declaration: source.slice(match.index, at), file: path })
    }
  }
  return out
}

/** The shapes named in a `readonly reads = [...]` declaration. */
function readsOf(source: string): string[] | 'none' | undefined {
  const match = /readonly\s+reads\s*(?::[^=]+)?=\s*([^\n]+)/.exec(source)
  if (!match) return undefined
  const written = match[1].trim()
  if (written.startsWith('READS_NOTHING') || written.includes("'none'")) return 'none'
  const list = /\[([^\]]*)\]/.exec(written)
  if (!list) return undefined
  return [...list[1].matchAll(/'([^']+)'/g)].map((each) => each[1])
}

/** The shapes named in an `answers: [...]` entry. */
function answersOf(declaration: string): string[] | undefined {
  const match = /answers\s*:\s*\[([^\]]*)\]/.exec(declaration)
  if (!match) return undefined
  return [...match[1].matchAll(/'([^']+)'/g)].map((each) => each[1])
}

describe('what widgets read and sources answer', () => {
  /*
   * The two readers, on text written for the purpose.
   *
   * What this guards is a check that quietly stops checking: a reader
   * that finds nothing makes every package look compliant, and the suite
   * stays green while the declarations rot.
   */
  describe('reading a declaration', () => {
    it('sees the shapes a widget names, and notices when it names none', () => {
      expect(readsOf("  readonly reads = ['DataTable', 'object']")).toEqual(['DataTable', 'object'])
      expect(readsOf('  readonly reads = READS_NOTHING')).toBe('none')
      expect(readsOf('  readonly reads: Reads = READS_NOTHING')).toBe('none')
      expect(readsOf('  readonly icon = Icon')).toBeUndefined()
      expect(readsOf("  readonly supportedDSTypes = ['csv']")).toBeUndefined()
    })

    it('sees the shapes a source names, and notices when it names none', () => {
      expect(answersOf("{ answers: ['DataTable', 'string'], icon: 'grid_on' }")).toEqual([
        'DataTable',
        'string',
      ])
      expect(answersOf("{ icon: 'grid_on', Store: symbol }")).toBeUndefined()
    })
  })

  it('finds the packages it is meant to check', () => {
    /* A rename that moves these would otherwise make this test vacuous. */
    expect(widgetProviders().length).toBeGreaterThan(15)
    expect(sourceTypes().length).toBeGreaterThan(10)
  })

  it('every widget says which data shapes it reads, or that it reads none', () => {
    const silent = widgetProviders()
      .filter((widget) => readsOf(widget.source) === undefined)
      .map((widget) => widget.name)

    expect(silent).toEqual([])
  })

  it('every source type says which data shapes it answers', () => {
    const silent = sourceTypes()
      .filter((type) => answersOf(type.declaration) === undefined)
      .map((type) => `${type.name} (${type.file})`)

    expect(silent).toEqual([])
  })

  /*
   * A shape no source answers is a widget nobody can ever be offered -
   * which is how `weather` stood, declaring OGCSTAData while reading
   * WeatherData.
   */
  it('every shape a widget reads is answered by some source', () => {
    const answered = new Set(sourceTypes().flatMap((type) => answersOf(type.declaration) ?? []))

    const orphaned: string[] = []
    for (const widget of widgetProviders()) {
      const reads = readsOf(widget.source)
      if (reads === undefined || reads === 'none') continue
      for (const shape of reads) {
        if (!answered.has(shape)) orphaned.push(`${widget.name} reads ${shape}`)
      }
    }

    expect(orphaned).toEqual([])
  })
})
