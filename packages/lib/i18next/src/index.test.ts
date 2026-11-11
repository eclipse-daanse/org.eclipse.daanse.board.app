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
import { afterEach, describe, expect, it } from 'vitest'
import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'
import { activate, currentLanguage, deactivate } from './index'

const context = { services: { register: () => undefined, unregister: () => undefined } } as unknown as ActivationContext

/* A browser whose language no package holds: the language starts as 'ru'. */
function startIn(language: string) {
  localStorage.setItem('daanse.board.language', language)
  activate(context)
}

describe('the language on screen', () => {
  afterEach(() => {
    deactivate(context)
    localStorage.clear()
    for (const language of Object.keys(i18next.store.data)) i18next.removeResourceBundle(language, 'demo')
  })

  it('is English when the wanted language has no texts', () => {
    startIn('ru')
    i18next.addResourceBundle('en', 'demo', { a: 'A' })
    i18next.addResourceBundle('de', 'demo', { a: 'A' })

    expect(i18next.language).toBe('ru')
    expect(currentLanguage()).toBe('en')
    expect(document.documentElement.lang).toBe('en')
  })

  it('is the pack of the same language for a regional one', () => {
    startIn('de-AT')
    i18next.addResourceBundle('en', 'demo', { a: 'A' })
    i18next.addResourceBundle('de', 'demo', { a: 'A' })

    expect(currentLanguage()).toBe('de')
    expect(document.documentElement.lang).toBe('de')
  })

  it('becomes the wanted language once its pack arrives', () => {
    startIn('ru')
    i18next.addResourceBundle('en', 'demo', { a: 'A' })
    expect(document.documentElement.lang).toBe('en')

    i18next.addResourceBundle('ru', 'demo', { a: 'A' })

    expect(currentLanguage()).toBe('ru')
    expect(document.documentElement.lang).toBe('ru')
  })
  it('falls back again when the pack of the wanted language leaves', () => {
    startIn('ru')
    i18next.addResourceBundle('en', 'demo', { a: 'A' })
    i18next.addResourceBundle('ru', 'demo', { a: 'A' })
    expect(document.documentElement.lang).toBe('ru')

    i18next.removeResourceBundle('ru', 'demo')

    expect(currentLanguage()).toBe('en')
    expect(document.documentElement.lang).toBe('en')
  })
})
