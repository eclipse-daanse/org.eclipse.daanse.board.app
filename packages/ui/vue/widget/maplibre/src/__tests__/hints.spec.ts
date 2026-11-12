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
 * The generated symbol-layer form tells each field in the reader's
 * language: every field of its entry forms has a `maplibre:Hints` text in
 * German and English, else the English Ecore documentation shows under a
 * German label.
 */
import { describe, expect, it } from 'vitest'
import de from '../i18n/de.json'
import en from '../i18n/en.json'

const forms = import.meta.glob('../../model/ui-*.xmi', { query: '?raw', import: 'default', eager: true }) as Record<string, string>

function fieldsOfForms(): string[] {
  const fields = new Set<string>()
  for (const xmi of Object.values(forms)) {
    for (const m of xmi.matchAll(/feature="[^"#]*widget\.maplibre#\/\/(\w+)\/(\w+)"[^>]*label="maplibre:Symbols\./g)) {
      fields.add(`${m[1]}.${m[2]}`)
    }
  }
  return [...fields].sort()
}

function hintOf(texts: { Hints?: Record<string, Record<string, string>> }, field: string) {
  const [owner, name] = field.split('.')
  return texts.Hints?.[owner!]?.[name!]
}

describe('symbol-layer form hints', () => {
  it('finds the fields of the symbol forms', () => {
    expect(fieldsOfForms()).toContain('ColorEncoding.color')
  })

  it('has a German and an English hint for every field', () => {
    const missing = fieldsOfForms().filter((f) => !hintOf(de, f) || !hintOf(en, f))
    expect(missing).toEqual([])
  })
})
