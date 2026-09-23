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

import 'reflect-metadata'
import i18next from 'i18next'
import { beforeEach, describe, expect, it } from 'vitest'
import { TranslationTracker, type Translations } from './translations'

const chart: Translations = {
  namespace: 'chart',
  resources: { en: { Widget: { name: 'Chart' } }, de: { Widget: { name: 'Diagramm' } } },
}
const map: Translations = {
  namespace: 'map',
  resources: { en: { Widget: { name: 'Map' } } },
}

describe('TranslationTracker', () => {
  beforeEach(async () => {
    await i18next.init({ lng: 'en', fallbackLng: 'en', resources: {} })
  })

  it('adds the texts of a package when its service appears', () => {
    const tracker = new TranslationTracker()
    tracker.translations = [chart]

    expect(i18next.t('chart:Widget.name')).toBe('Chart')
    expect(i18next.t('chart:Widget.name', { lng: 'de' })).toBe('Diagramm')
  })

  it('removes them when the package leaves, and leaves the others alone', () => {
    const tracker = new TranslationTracker()
    tracker.translations = [chart, map]
    tracker.translations = [map]

    expect(i18next.hasResourceBundle('en', 'chart')).toBe(false)
    expect(i18next.hasResourceBundle('de', 'chart')).toBe(false)
    expect(i18next.t('map:Widget.name')).toBe('Map')
  })

  it('keeps a namespace another package still offers', () => {
    const newer: Translations = { namespace: 'chart', resources: { en: { Widget: { name: 'Chart 2' } } } }
    const tracker = new TranslationTracker()
    tracker.translations = [chart, newer]
    tracker.translations = [newer]

    expect(i18next.t('chart:Widget.name')).toBe('Chart 2')
  })
})
