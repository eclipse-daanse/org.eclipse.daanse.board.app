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

import { beforeEach, describe, expect, it } from 'vitest'
import { defineComponent, h, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import i18next from 'i18next'
import { useLanguage } from './useLanguage'

const REMEMBERED = 'daanse.board.language'

async function fresh() {
  const instance = i18next.createInstance()
  await instance.init({ fallbackLng: 'en', lng: 'en', resources: {} })
  return instance
}

/** Renders what the switcher would show, so the list can be read off it. */
function switcher() {
  return defineComponent({
    setup() {
      const { available, current, choose } = useLanguage()
      return { available, current, choose }
    },
    render() {
      return h('div', [
        h('span', { class: 'current' }, this.current ?? ''),
        h(
          'ul',
          this.available.map((l) => h('li', { class: 'lang' }, `${l.tag}:${l.label}`)),
        ),
      ])
    },
  })
}

describe('useLanguage', () => {
  beforeEach(() => localStorage.clear())

  it('offers the languages there are texts for, and no others', async () => {
    const i18n = await fresh()
    i18n.addResourceBundle('en', 'demo', { a: 'A' })
    i18n.addResourceBundle('de', 'demo', { a: 'A' })

    const view = mount(switcher(), { global: { provide: { i18n } } })
    const shown = view.findAll('.lang').map((n) => n.text())

    expect(shown).toEqual(['de:Deutsch', 'en:English'])
  })

  it('grows when a pack is deployed', async () => {
    const i18n = await fresh()
    i18n.addResourceBundle('en', 'demo', { a: 'A' })
    const view = mount(switcher(), { global: { provide: { i18n } } })
    expect(view.findAll('.lang')).toHaveLength(1)

    /* A language pack arriving is what adds a language to the menu. */
    i18n.addResourceBundle('fr', 'demo', { a: 'A' })
    await nextTick()

    expect(view.findAll('.lang').map((n) => n.text())).toContain('fr:Français')
  })

  it('switches, and says which one is in use', async () => {
    const i18n = await fresh()
    i18n.addResourceBundle('en', 'demo', { a: 'A' })
    i18n.addResourceBundle('de', 'demo', { a: 'A' })
    const view = mount(switcher(), { global: { provide: { i18n } } })
    expect(view.find('.current').text()).toBe('en')

    view.vm.choose('de')
    await nextTick()
    await nextTick()

    expect(i18n.language).toBe('de')
    expect(view.find('.current').text()).toBe('de')
  })

  it('remembers the choice past a reload', async () => {
    const i18n = await fresh()
    i18n.addResourceBundle('de', 'demo', { a: 'A' })
    const view = mount(switcher(), { global: { provide: { i18n } } })
    view.vm.choose('de')

    expect(localStorage.getItem(REMEMBERED)).toBe('de')
  })

  it('applies what was remembered when it mounts', async () => {
    localStorage.setItem(REMEMBERED, 'de')
    const i18n = await fresh()
    i18n.addResourceBundle('de', 'demo', { a: 'A' })

    mount(switcher(), { global: { provide: { i18n } } })
    await nextTick()

    expect(i18n.language).toBe('de')
  })

  it('shows the language the texts are in, not the browser one nobody translated', async () => {
    /* A Russian browser: i18next starts in 'ru', and only de and en exist. */
    const instance = i18next.createInstance()
    await instance.init({ fallbackLng: 'en', lng: 'ru', resources: {} })
    instance.addResourceBundle('en', 'demo', { a: 'A' })
    instance.addResourceBundle('de', 'demo', { a: 'A' })

    const view = mount(switcher(), { global: { provide: { i18n: instance } } })

    expect(view.find('.current').text()).toBe('en')
    expect(view.findAll('.lang').map((n) => n.text())).toEqual(['de:Deutsch', 'en:English'])
  })

  it('takes the pack of the same language for a regional browser language', async () => {
    const instance = i18next.createInstance()
    await instance.init({ fallbackLng: 'en', lng: 'de-AT', resources: {} })
    instance.addResourceBundle('en', 'demo', { a: 'A' })
    instance.addResourceBundle('de', 'demo', { a: 'A' })

    const view = mount(switcher(), { global: { provide: { i18n: instance } } })

    expect(view.find('.current').text()).toBe('de')
  })

  it('moves to the wanted language once a pack for it arrives', async () => {
    const instance = i18next.createInstance()
    await instance.init({ fallbackLng: 'en', lng: 'ru', resources: {} })
    instance.addResourceBundle('en', 'demo', { a: 'A' })
    const view = mount(switcher(), { global: { provide: { i18n: instance } } })
    expect(view.find('.current').text()).toBe('en')

    instance.addResourceBundle('ru', 'demo', { a: 'A' })
    await nextTick()

    expect(view.find('.current').text()).toBe('ru')
  })

  it('offers nothing rather than failing when there is no translator', () => {
    const view = mount(switcher())
    expect(view.findAll('.lang')).toHaveLength(0)
  })
})
