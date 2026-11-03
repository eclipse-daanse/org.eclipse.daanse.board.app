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
 * ********************************************************************/

// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { defineComponent, h } from 'vue'
import { mount } from '@vue/test-utils'
import DSelect from '../DSelect.vue'

let warn: ReturnType<typeof vi.spyOn>

beforeEach(() => {
  warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
})

afterEach(() => {
  warn.mockRestore()
})

/** Mounted inside a named component, which is what the warning names. */
function inside(name: string, props: Record<string, unknown>) {
  const Caller = defineComponent({
    name,
    /* Cast: the props are written per case here, not typed up front. */
    render: () => h(DSelect, props as never),
  })
  return mount(Caller)
}

/*
 * The options themselves. While nothing is chosen the select also offers
 * an empty entry to stand in for that, which is not one of them.
 */
function optionTexts(wrapper: ReturnType<typeof mount>) {
  return wrapper
    .findAll('option')
    .filter((each) => each.element.value !== '')
    .map((each) => each.text())
}

describe('DSelect', () => {
  describe('reading options', () => {
    it('takes uid and name without being told', () => {
      const wrapper = mount(DSelect, {
        props: { options: [{ uid: 'a', name: 'Auslastung' }, { uid: 'b', name: 'Posts' }] },
      })

      expect(optionTexts(wrapper)).toEqual(['Auslastung', 'Posts'])
    })

    it('takes the fields it is told to take', () => {
      const wrapper = mount(DSelect, {
        props: {
          options: [{ text: 'Newest first', value: 'desc' }],
          labelKey: 'text',
          valueKey: 'value',
        },
      })

      expect(optionTexts(wrapper)).toEqual(['Newest first'])
    })

    /*
     * What the model is set to, which is what a board keeps. Checking the
     * labels alone would pass just as well with the option object sitting
     * in the model - which is the whole of #1191.
     */
    it('sets the model to the value inside the option, not to the option', async () => {
      const wrapper = mount(DSelect, {
        props: {
          options: [{ text: 'Newest first', value: 'phenomenonTime desc' }],
          labelKey: 'text',
          valueKey: 'value',
          modelValue: undefined,
        },
      })

      const option = wrapper.findAll('option').find((each) => each.text() === 'Newest first')!
      await wrapper.find('select').setValue(option.element.value)

      expect(wrapper.emitted('update:modelValue')?.at(-1)).toEqual(['phenomenonTime desc'])
    })

    it('shows plain values as themselves', () => {
      const wrapper = mount(DSelect, { props: { options: ['sql', 'mdx'] } })

      expect(optionTexts(wrapper)).toEqual(['sql', 'mdx'])
    })
  })

  /*
   * What #1191 is about. The defaults fit most callers here, which is
   * exactly why the ones they do not fit went unnoticed: the list reads
   * "[object Object]" and the model is set to the option object rather
   * than to the value inside it, so a board saved from such a select
   * keeps an object where a string belongs.
   */
  describe('when an option cannot be read', () => {
    const UNREADABLE = [
      { text: 'Newest first', value: 'phenomenonTime desc' },
      { text: 'Oldest first', value: 'phenomenonTime asc' },
    ]

    it('says so, naming the component that owns the select', () => {
      inside('OGCSTAStoreSettings', { options: UNREADABLE })

      expect(warn).toHaveBeenCalledOnce()
      const said = warn.mock.calls[0][0] as string
      expect(said).toContain('OGCSTAStoreSettings')
      /* The field it looked for ... */
      expect(said).toContain('uid')
      /* ... and what the option has instead, so the fix is obvious. */
      expect(said).toContain('text, value')
    })

    it('says it once, however often the select redraws', async () => {
      const wrapper = inside('Settings', { options: UNREADABLE })
      await wrapper.setProps({})
      await wrapper.vm.$nextTick()

      expect(warn).toHaveBeenCalledOnce()
    })

    it('stays quiet once it is told which fields to use', () => {
      inside('Settings', { options: UNREADABLE, labelKey: 'text', valueKey: 'value' })

      expect(warn).not.toHaveBeenCalled()
    })

    it('stays quiet for options it can read', () => {
      inside('Settings', { options: [{ uid: 'a', name: 'Auslastung' }] })
      inside('Settings', { options: ['sql', 'mdx'] })
      inside('Settings', { options: [] })

      expect(warn).not.toHaveBeenCalled()
    })

    /*
     * A label that falls back to the value is visible at a glance; a value
     * that is the whole option is not. So the value field is the one worth
     * warning about - this test said the opposite until the review of
     * #1191 caught it, and wrote the defect down as wanted.
     */
    it('says so when the value field is missing, label or no label', () => {
      inside('Settings', { options: [{ name: 'Auslastung' }] })

      expect(warn).toHaveBeenCalledOnce()
      expect(warn.mock.calls[0][0] as string).toContain('uid')
    })

    it('stays quiet when the value field is there but the label is not', () => {
      inside('Settings', { options: [{ uid: 'a' }] })

      expect(warn).not.toHaveBeenCalled()
    })
  })
})
