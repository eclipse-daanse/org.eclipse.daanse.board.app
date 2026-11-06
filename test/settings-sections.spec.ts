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
 * #1269: a widget names the hand-written sections of its settings that
 * the "Weiteres" tab shows, and the tab finds them by their
 * data-section-id. Six widgets still named the old German label after the
 * sections got ids (a7e0d968), and the tab hid their sections - the rich
 * text widget had no editor at all. Nothing failed; the settings were
 * just empty.
 *
 * Read from the sources, as widget-data-contract.spec.ts does: what is
 * checked is a declaration, and importing a widget bundle pulls in
 * editors and maps.
 */

import { describe, it, expect } from 'vitest'
import { readFileSync, globSync } from 'node:fs'
import { dirname, resolve } from 'node:path'

const ROOT = resolve(import.meta.dirname, '..')

/** Every widget provider that lists unmodelled sections, with the entries. */
function declarations(): Array<{ name: string; dir: string; sections: string[] }> {
  return globSync('packages/ui/vue/widget/*/src/index.ts', { cwd: ROOT })
    .concat(globSync('packages/ui/vue/widget/*/*/src/index.ts', { cwd: ROOT }))
    .map((path) => {
      const source = readFileSync(resolve(ROOT, path), 'utf8')
      const list = source.match(/unmodelledSections:\s*\[([^\]]*)\]/)?.[1]
      const sections = list ? [...list.matchAll(/['"]([^'"]+)['"]/g)].map((m) => m[1]) : []
      return {
        name: path.replace('packages/ui/vue/widget/', '').replace('/src/index.ts', ''),
        dir: dirname(resolve(ROOT, path)),
        sections,
      }
    })
    .filter((each) => each.sections.length > 0)
}

/** The section ids the components of a widget package carry. */
function sectionIds(dir: string): Set<string> {
  const ids = new Set<string>()
  for (const file of globSync('**/*.vue', { cwd: dir })) {
    const source = readFileSync(resolve(dir, file), 'utf8')
    for (const m of source.matchAll(/data-section-id="([^"]+)"/g)) ids.add(m[1])
  }
  return ids
}

describe('the unmodelled sections of a widget', () => {
  const found = declarations()

  it('are declared by the widgets that have them', () => {
    expect(found.map((each) => each.name)).toEqual(
      expect.arrayContaining(['text/rich', 'text/plain', 'icon', 'timeline', 'page', 'progress']),
    )
  })

  it.each(found.map((each) => [each.name, each] as const))('of %s name sections its settings carry', (_name, each) => {
    const ids = sectionIds(each.dir)
    expect(each.sections.filter((section) => !ids.has(section))).toEqual([])
  })
})
