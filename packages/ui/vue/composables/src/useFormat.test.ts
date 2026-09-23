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

import { describe, expect, it } from 'vitest'
import { defineComponent, h, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import i18next from 'i18next'
import { relativeDays, useFormat } from './useFormat'

/** A number and a date, rendered the way a widget would. */
const screen = defineComponent({
  setup() {
    const format = useFormat()
    return () =>
      h('span', `${format.number(1234.5)}|${format.date(Date.UTC(2026, 8, 23), { timeZone: 'UTC' })}`)
  },
})

async function fresh(lng: string) {
  const instance = i18next.createInstance()
  await instance.init({ fallbackLng: 'en', lng, resources: {} })
  return instance
}

describe('useFormat', () => {
  it('formats in the language i18next is in', async () => {
    const view = mount(screen, { global: { provide: { i18n: await fresh('de') } } })
    expect(view.text()).toBe('1.234,5|23.9.2026')
  })

  it('follows a language change', async () => {
    const i18n = await fresh('de')
    const view = mount(screen, { global: { provide: { i18n } } })

    await i18n.changeLanguage('en')
    await nextTick()

    expect(view.text()).toBe('1,234.5|9/23/2026')
  })

  it('falls back to English without a translator', () => {
    const view = mount(screen)
    expect(view.text()).toBe('1,234.5|9/23/2026')
  })
})

describe('relativeDays', () => {
  const now = Date.UTC(2026, 8, 23, 12)
  const day = 24 * 60 * 60 * 1000

  it('says today and yesterday in words', () => {
    expect(relativeDays('de', now - 60_000, now)).toBe('heute')
    expect(relativeDays('en', now - day, now)).toBe('yesterday')
  })

  it('counts days within a month', () => {
    expect(relativeDays('de', now - 3 * day, now)).toBe('vor 3 Tagen')
  })

  it('gives the date once it is further back', () => {
    expect(relativeDays('en', now - 60 * day, now)).toBe('Jul 25, 2026')
  })
})
