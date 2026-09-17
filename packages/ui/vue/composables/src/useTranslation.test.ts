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
import { createApp, defineComponent, h, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import i18next from 'i18next'
import { useTranslation } from './useTranslation'

/**
 * The point of all this: a bundle can arrive after the screen that needs it.
 *
 * These use the real i18next, because what is being tested is that its
 * events reach Vue - a stub that fires them on cue would prove nothing.
 */
function screen(namespace: string) {
  return defineComponent({
    setup() {
      const { t } = useTranslation(namespace)
      return () => h('span', t('title'))
    },
  })
}

async function fresh() {
  const instance = i18next.createInstance()
  await instance.init({ fallbackLng: 'en', lng: 'en', resources: {} })
  return instance
}

describe('useTranslation', () => {
  it('shows the key while nothing translates it', async () => {
    const i18n = await fresh()
    const view = mount(screen('demo'), { global: { provide: { i18n } } })
    /* i18next answers an unknown key with the key, without its namespace. */
    expect(view.text()).toBe('title')
  })

  it('picks up a language pack that arrives after the first render', async () => {
    const i18n = await fresh()
    const view = mount(screen('demo'), { global: { provide: { i18n } } })
    expect(view.text()).toBe('title')

    /* What a late bundle does in its activate(). */
    i18n.addResourceBundle('en', 'demo', { title: 'Overview' })
    await nextTick()

    expect(view.text()).toBe('Overview')
  })

  it('follows a language change', async () => {
    const i18n = await fresh()
    i18n.addResourceBundle('en', 'demo', { title: 'Overview' })
    i18n.addResourceBundle('de', 'demo', { title: 'Übersicht' })

    const view = mount(screen('demo'), { global: { provide: { i18n } } })
    expect(view.text()).toBe('Overview')

    await i18n.changeLanguage('de')
    await nextTick()

    expect(view.text()).toBe('Übersicht')
  })

  it('takes a pack for a language that was already in use', async () => {
    const i18n = await fresh()
    i18n.addResourceBundle('en', 'demo', { title: 'Overview' })
    const view = mount(screen('demo'), { global: { provide: { i18n } } })
    await i18n.changeLanguage('de')
    await nextTick()
    /* No German yet, so the fallback answers. */
    expect(view.text()).toBe('Overview')

    /* The German pack is deployed now. */
    i18n.addResourceBundle('de', 'demo', { title: 'Übersicht' })
    await nextTick()

    expect(view.text()).toBe('Übersicht')
  })

  it('lets a later pack fill in a key an earlier one missed', async () => {
    const i18n = await fresh()
    i18n.addResourceBundle('de', 'demo', { other: 'Anderes' })
    const view = mount(screen('demo'), { global: { provide: { i18n } } })
    await i18n.changeLanguage('de')
    await nextTick()

    /* deep + overwrite: the second pack adds to the first rather than
       replacing it, which is what "nachrüsten" has to mean. */
    i18n.addResourceBundle('de', 'demo', { title: 'Übersicht' }, true, true)
    await nextTick()

    expect(view.text()).toBe('Übersicht')
    expect(i18n.t('demo:other')).toBe('Anderes')
  })

  it('does not see a provide that lands after mount, which is why the service exists', async () => {
    /*
     * The limit, written down rather than worked around: Vue's provides are
     * not reactive, so a value put there after a component is mounted
     * reaches nothing - there is no event to re-render on. The Vue plugin
     * provides exactly that late, because it needs the app the shell
     * mounts. Which is why the service key above is the one that carries
     * this in the real application.
     */
    const i18n = await fresh()
    i18n.addResourceBundle('en', 'demo', { title: 'Overview' })

    const app = createApp(screen('demo'))
    const host = document.createElement('div')
    app.mount(host)
    expect(host.textContent).toBe('title')

    app.provide('i18n', i18n)
    await nextTick()

    /* Still the key - and that is the documented behaviour, not a defect. */
    expect(host.textContent).toBe('title')
    app.unmount()
  })

  it('finds the translator under the service key too', async () => {
    /*
     * lib.i18next registers the instance as a service before anything
     * renders; the Vue plugin provides the same object later. Reading the
     * service is what makes a component work in the window between.
     */
    const i18n = await fresh()
    i18n.addResourceBundle('en', 'demo', { title: 'Overview' })
    const view = mount(screen('demo'), { global: { provide: { I18next: i18n } } })
    expect(view.text()).toBe('Overview')
  })

  it('renders the key rather than failing when nothing is provided', () => {
    const view = mount(screen('demo'))
    expect(view.text()).toBe('title')
  })
})
