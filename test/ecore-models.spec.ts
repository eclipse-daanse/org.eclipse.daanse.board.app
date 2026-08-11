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
 * Repo-weite Zusicherungen über alle Ecore-Modelle.
 *
 * Der Test lädt jedes Modell mit dem echten Loader, statt die Dateien nur
 * zu durchsuchen — nur so fallen kaputte Modelle überhaupt auf. Bei seiner
 * Einführung hat er zwei XML-invalide Modelle aufgedeckt, die von keinem
 * Parser gelesen werden konnten.
 *
 * Die nsURI-Konvention lautet: `http://<paketname>`, bei mehreren Modellen
 * in einem Paket mit unterscheidendem Suffix. Der nsURI ist die Identität
 * eines Modells — Duplikate bedeuten, dass ein Modell das andere in der
 * PackageRegistry verdrängt.
 */

import { describe, it, expect, beforeAll } from 'vitest'
import { EResourceSetImpl, URI, type EPackage } from '@emfts/core'

const models = import.meta.glob('../packages/**/model/*.ecore', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

interface LoadedModel {
  file: string
  nsURI: string
}

describe('Ecore-Modelle', () => {
  const loaded: LoadedModel[] = []
  const unloadable: Array<{ file: string; reason: string }> = []

  beforeAll(() => {
    for (const [file, content] of Object.entries(models)) {
      if (file.includes('/dist/') || file.includes('/node_modules/')) continue
      try {
        const resourceSet = new EResourceSetImpl()
        const resource = resourceSet.createResource(URI.createURI(`test:/${file}`))
        resource.loadFromString!(content)

        const contents = resource.getContents()
        if (contents.size() === 0) {
          unloadable.push({ file, reason: 'kein Wurzelobjekt' })
          continue
        }

        const nsURI = (contents.get(0) as EPackage).getNsURI()
        if (!nsURI) {
          unloadable.push({ file, reason: 'kein nsURI' })
          continue
        }

        loaded.push({ file, nsURI })
      } catch (error) {
        unloadable.push({ file, reason: String(error) })
      }
    }
  })

  it('jedes Modell lässt sich laden', () => {
    expect(unloadable).toEqual([])
    expect(loaded.length).toBeGreaterThan(35)
  })

  it('kein nsURI ist doppelt vergeben', () => {
    const seen = new Map<string, string>()
    const duplicates: string[] = []

    for (const { file, nsURI } of loaded) {
      const previous = seen.get(nsURI)
      if (previous) duplicates.push(`${nsURI} — ${previous} und ${file}`)
      else seen.set(nsURI, file)
    }

    expect(duplicates).toEqual([])
  })

  it('kein nsURI verweist auf einen Platzhalter', () => {
    const placeholders = loaded.filter(
      ({ nsURI }) => nsURI.includes('example.com') || nsURI.includes('example.org'),
    )

    expect(placeholders).toEqual([])
  })

  it('jeder nsURI beginnt mit http://', () => {
    expect(loaded.filter(({ nsURI }) => !nsURI.startsWith('http://'))).toEqual([])
  })
})
