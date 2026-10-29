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

// @vitest-environment jsdom

import { describe, expect, test } from 'vitest'
import { CompletionContext } from '@codemirror/autocomplete'
import { EditorState } from '@codemirror/state'
import { EditorView } from '@codemirror/view'
import {
  mdxMetadataAt,
  mdxMetadataCompletion,
  mdxMetadataHighlight,
  type MdxMetadataItem,
  type MdxMetadataSource,
} from '../../src/mdx-metadata-editing.js'

const items: MdxMetadataItem[] = [
  { uniqueName: '[Measures]', caption: 'Measures', kind: 'dimension' },
  { uniqueName: '[Measures].[Unit Sales]', caption: 'Unit Sales', kind: 'measure' },
  { uniqueName: '[Measures].[Store Sales]', caption: 'Store Sales', kind: 'measure' },
  // A measure is a member of [Measures] too; the measure must win.
  { uniqueName: '[Measures].[Unit Sales]', caption: 'Unit Sales', kind: 'member' },
  { uniqueName: '[Time]', caption: 'Time', kind: 'hierarchy' },
  { uniqueName: '[Time].[Year]', caption: 'Year', kind: 'level' },
  { uniqueName: '[Time].[Quarter]', caption: 'Quarter', kind: 'level' },
  { uniqueName: '[Gender]', caption: 'Gender', kind: 'dimension' },
  { uniqueName: '[Gender].[All Gender]', caption: 'All Gender', kind: 'member', level: '[Gender].[(All)]' },
  { uniqueName: '[Gender].[F]', caption: 'F', kind: 'member', level: '[Gender].[Gender]', parent: '[Gender].[All Gender]' },
]

const cubes: MdxMetadataItem[] = [
  { uniqueName: '[Sales Ragged]', caption: 'Sales Ragged', kind: 'cube' },
  { uniqueName: '[Sales]', caption: 'Sales', kind: 'cube', description: 'The sales of the stores' },
  { uniqueName: '[Warehouse]', caption: 'Warehouse', kind: 'cube' },
]

const source: MdxMetadataSource = {
  items: () => items,
  cubes: () => cubes,
  functions: () => [],
  children: async prefix =>
    prefix === '[Time]'
      ? [
          { uniqueName: '[Time].[1997]', caption: '1997', kind: 'member' },
          { uniqueName: '[Time].[1998]', caption: '1998', kind: 'member' },
        ]
      : prefix === '[Gender].[All Gender]'
        ? [
            { uniqueName: '[Gender].[F]', caption: 'F', kind: 'member', level: '[Gender].[Gender]' },
            { uniqueName: '[Gender].[M]', caption: 'M', kind: 'member', level: '[Gender].[Gender]' },
          ]
        : [],
}

async function complete(text: string, explicit = false, at = text.length) {
  const state = EditorState.create({ doc: text })
  return mdxMetadataCompletion(source)(new CompletionContext(state, at, explicit))
}

const labels = (result: Awaited<ReturnType<typeof complete>>) => result?.options.map(o => o.label) ?? []

describe('cube metadata completion', () => {
  test('offers the measures after [Measures]. and starts at the typed segment', async () => {
    const result = await complete('SELECT {[Measures].[Un')
    expect(labels(result)).toEqual(['[Unit Sales]', '[Store Sales]'])
    expect(result!.from).toBe('SELECT {[Measures].'.length)
  })

  test('offers levels and the members the server sends below a hierarchy', async () => {
    const result = await complete('SELECT {[Time].[')
    expect(labels(result)).toEqual(['[Year]', '[Quarter]', '[1997]', '[1998]'])
  })

  test('offers cubes after FROM', async () => {
    expect(labels(await complete('SELECT {} ON 0 FROM [Sa'))).toContain('[Sales]')
  })

  test('ranks the cube named by what was typed above longer ones that start alike', async () => {
    const boosts = (result: Awaited<ReturnType<typeof complete>>) =>
      Object.fromEntries(result!.options.map(o => [o.label, o.boost ?? 0]))
    const typed = boosts(await complete('SELECT {} ON 0 FROM [Sa'))
    expect(typed['[Sales]']).toBeGreaterThan(typed['[Sales Ragged]']!)
    expect(typed['[Sales Ragged]']).toBeGreaterThan(typed['[Warehouse]']!)
    const exact = boosts(await complete('SELECT {} ON 0 FROM [Sales'))
    expect(exact['[Sales]']).toBeGreaterThan(exact['[Sales Ragged]']!)
  })

  test('leaves a bare word after a dot to the language server', async () => {
    expect(await complete('SELECT {[Time].Chi')).toBeNull()
  })

  test('offers the alternatives of a complete name when asked', async () => {
    const text = 'SELECT {[Time].[Year].Members} ON 0'
    const result = await complete(text, true, text.indexOf('[Year]') + 2)
    expect(labels(result)).toEqual(['[Year]', '[Quarter]'])
    expect(result!.from).toBe(text.indexOf('[Time]'))
    expect(result!.to).toBe(text.indexOf('.Members'))
  })

  test('offers a member\'s siblings, not the parent that shares its prefix', async () => {
    const text = 'SELECT {[Gender].[F]} ON 0'
    const result = await complete(text, true, text.indexOf('[F]') + 1)
    expect(labels(result)).toEqual(['[F]', '[M]'])
  })
})

describe('cube metadata on hover', () => {
  const at = (text: string, pos: number) => mdxMetadataAt(source)(EditorState.create({ doc: text }), pos)

  test('the segment under the pointer is described, not the member the chain ends in', () => {
    const text = 'SELECT {[Gender].[F]} ON 0 FROM [Sales]'
    const onGender = at(text, text.indexOf('[Gender]') + 2)
    expect(onGender?.item.uniqueName).toBe('[Gender]')
    expect(onGender?.item.kind).toBe('dimension')
    expect(text.slice(onGender!.from, onGender!.to)).toBe('[Gender]')
    const onF = at(text, text.indexOf('[F]') + 1)
    expect(onF?.item.uniqueName).toBe('[Gender].[F]')
    expect(text.slice(onF!.from, onF!.to)).toBe('[F]')
  })

  test('the name after FROM is the cube', () => {
    const text = 'SELECT {[Gender].[F]} ON 0\nFROM\n  [Sales]'
    const named = at(text, text.indexOf('[Sales]') + 2)
    expect(named?.item.kind).toBe('cube')
    expect(named?.item.description).toBe('The sales of the stores')
    expect(text.slice(named!.from, named!.to)).toBe('[Sales]')
  })

  test('a cube\'s name elsewhere is not taken for the cube', () => {
    const text = 'SELECT {[Sales]} ON 0 FROM [Sales]'
    expect(at(text, text.indexOf('[Sales]') + 2)).toBeNull()
  })
})

describe('cube metadata in colour', () => {
  test('the cube after FROM is marked as a cube', () => {
    const parent = document.createElement('div')
    document.body.appendChild(parent)
    const view = new EditorView({
      doc: 'SELECT {[Gender].[F]} ON COLUMNS FROM [Sales]',
      extensions: [mdxMetadataHighlight(source)],
      parent,
    })
    try {
      const cube = view.contentDOM.querySelector('.cm-mdx-cube')
      expect(cube?.textContent).toBe('[Sales]')
      expect(view.contentDOM.querySelector('.cm-mdx-member')?.textContent).toBe('[Gender].[F]')
    } finally {
      view.destroy()
      parent.remove()
    }
  })
})
