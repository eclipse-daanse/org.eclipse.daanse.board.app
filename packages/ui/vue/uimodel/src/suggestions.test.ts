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
import { defineComponent, h, nextTick, provide, ref } from 'vue'
import { flushPromises, mount } from '@vue/test-utils'
import type { EObject } from '@emfts/core'
import { FIELD_SUGGESTIONS, useSuggestions, type FieldSuggest } from './suggestions'

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
