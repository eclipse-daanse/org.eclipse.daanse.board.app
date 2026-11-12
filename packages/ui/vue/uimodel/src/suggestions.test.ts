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
/*
 * A free-text field asks the form what to suggest (#1285): once when it is
 * shown, again for another object, and the latest answer wins.
 */
import { describe, expect, it } from 'vitest'
import { defineComponent, h, markRaw, nextTick, provide, ref } from 'vue'
import { flushPromises, mount } from '@vue/test-utils'
import type { EObject } from '@emfts/core'
import { FIELD_SUGGESTIONS, useSuggestions, type FieldSuggest } from './suggestions'
import SettingsForm from './SettingsForm.vue'
import { ContainmentfixturePackage } from './gen/ContainmentfixturePackage'
import { ContainmentfixtureFactory } from './gen/ContainmentfixtureFactory'
import fixtureEcore from '../model/containment-fixture.ecore?raw'

function harness(suggest: FieldSuggest | undefined, enabled = true) {
  const owner = ref<EObject>({ name: 'first' } as unknown as EObject)
  let shown: ReturnType<typeof useSuggestions> | undefined
  const Field = defineComponent({
    setup() {
      shown = useSuggestions(() => owner.value, () => 'field', () => enabled)
      return () => h('span', shown!.suggestions.value.join(','))
    },
  })
  const Form = defineComponent({
    setup() {
      provide(FIELD_SUGGESTIONS, () => suggest)
      return () => h(Field)
    },
  })
  return { view: mount(Form), owner, shown: () => shown! }
}

describe('useSuggestions', () => {
  it('asks when the field is shown, and keeps each value once', async () => {
    const { view } = harness(() => ['a', 'b', 'a', ''])
    await flushPromises()
    expect(view.text()).toBe('a,b')
  })

  it('asks again for another object', async () => {
    const { view, owner } = harness((object) => [String((object as unknown as { name: string }).name)])
    await flushPromises()
    owner.value = { name: 'second' } as unknown as EObject
    await nextTick()
    await flushPromises()
    expect(view.text()).toBe('second')
  })

  it('keeps the latest answer when an older one arrives after it', async () => {
    let release: (value: string[]) => void = () => {}
    let calls = 0
    const { view, shown } = harness(() => {
      calls++
      return calls === 1 ? new Promise<string[]>((resolve) => (release = resolve)) : ['new']
    })
    await flushPromises()
    shown().refresh()
    await flushPromises()
    release(['old'])
    await flushPromises()
    expect(view.text()).toBe('new')
  })

  it('suggests nothing without a provider, a failing one, or for a plain field', async () => {
    const without = harness(undefined)
    const failing = harness(() => Promise.reject(new Error('down')))
    const plain = harness(() => ['a'], false)
    await flushPromises()
    expect([without.view.text(), failing.view.text(), plain.view.text()]).toEqual(['', '', ''])
  })
})

describe('a suggestion with words of its own', () => {
  it('keeps the value, and the words apart', async () => {
    const { view, shown } = harness(() => [{ value: 'ds-1', label: 'Bäume' }, 'plain'])
    await flushPromises()
    expect(view.text()).toBe('ds-1,plain')
    expect(shown().labels.value).toEqual({ 'ds-1': 'Bäume' })
  })

  it('is a choice of a SelectWidget: the reader sees the words, the value is stored', async () => {
    void ContainmentfixturePackage.eINSTANCE
    const NS = 'http://org.eclipse.daanse.board.app.ui.vue.uimodel.containmentfixture'
    const xmi = `<?xml version="1.0" encoding="UTF-8"?>
<uimodel:UIModel xmlns:xmi="http://www.omg.org/XMI" xmi:version="2.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:uimodel="http://uimodel/1.0" name="SelectSuggestFixture">
  <targetClasses href="${NS}#//FixtureSettings"/>
  <components xsi:type="uimodel:FormView" name="SelectSuggestFixtureView">
    <fields xsi:type="uimodel:SelectWidget" name="title" feature="${NS}#//FixtureSettings/title" label="Source"/>
  </components>
</uimodel:UIModel>`
    const settings = ContainmentfixtureFactory.eINSTANCE.createFixtureSettings()
    ;(settings as unknown as { title: string }).title = 'gone'
    const view = mount(SettingsForm, {
      props: {
        modelValue: markRaw(settings),
        create: () => ContainmentfixtureFactory.eINSTANCE.createFixtureSettings(),
        uiModelXmi: xmi,
        domainPackage: ContainmentfixturePackage.eINSTANCE,
        uiModelUri: '/select-suggest-fixture.ui.xmi',
        ecore: fixtureEcore,
        suggest: (_owner: EObject, feature: string) => (feature === 'title' ? [{ value: 'ds-1', label: 'Bäume' }, { value: 'ds-2', label: 'Messstellen' }] : []),
      },
      attachTo: document.body,
    })
    await flushPromises()
    const select = view.findComponent({ name: 'DSelect' })
    const options = select.props('options') as { value: string; text: string }[]
    // A held value the answer does not name stays a choice.
    expect(options).toEqual([
      { value: 'ds-1', text: 'Bäume' },
      { value: 'ds-2', text: 'Messstellen' },
      { value: 'gone', text: 'gone' },
    ])
    select.vm.$emit('update:modelValue', 'ds-2')
    await flushPromises()
    expect((settings as unknown as { title: string }).title).toBe('ds-2')
    view.unmount()
  })
})
