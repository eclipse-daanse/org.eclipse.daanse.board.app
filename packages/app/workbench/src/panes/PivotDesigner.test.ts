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
import { describe, expect, it, vi } from 'vitest'
import { defineComponent, h, ref, shallowRef } from 'vue'
import { flushPromises, mount } from '@vue/test-utils'
import workbenchEnglish from '../i18n/en.json'
import { WORKBENCH } from '../state/workbench'
import { EDITORS } from '../state/editors'

/* The board's QueryDesigner, reduced to the one thing this test needs: setting its model. */
vi.mock('org.eclipse.daanse.board.app.ui.vue.common.xmla', () => ({
  QueryDesigner: defineComponent({
    props: { modelValue: Object },
    emits: ['update:modelValue'],
    setup(props, { emit }) {
      return () =>
        h('button', {
          class: 'fill',
          onClick: () => emit('update:modelValue', { ...props.modelValue, rows: [{ id: 'product' }], measures: [{ id: 'sales' }] }),
        })
    },
  }),
}))

const i18n = {
  t: (key: string) => key.split(':').pop()!.split('.').reduce<any>((node, part) => node?.[part], workbenchEnglish) ?? key,
}

async function mountDesigner() {
  const { default: PivotDesigner } = await import('./PivotDesigner.vue')
  const store = {
    setRequestParams: vi.fn(async () => {}),
    getMdxRequest: vi.fn(async () => 'SELECT {[Measures].[Unit Sales]} ON 0, [Product].Members ON 1 FROM [Sales]'),
  }
  const setText = vi.fn()
  const tab = { id: 't', text: '', uri: 'u', title: '1', result: null }
  const workbench = {
    store: shallowRef(store),
    generation: ref(1),
    active: ref({ uid: 'c' }),
    api: async () => ({}),
    catalog: ref('FoodMart'),
    activeTab: ref(tab),
    run: vi.fn(async () => {}),
  }
  const editors = { editorFor: () => ({ control: { value: { setText } } }) }
  const view = mount(PivotDesigner, {
    global: { provide: { i18n, [WORKBENCH as symbol]: workbench, [EDITORS as symbol]: editors } },
  })
  await flushPromises()
  return { view, store, setText, workbench }
}

describe('the pivot designer', () => {
  it('asks the board’s store for the MDX of the zones and previews it', async () => {
    const { view, store } = await mountDesigner()
    await view.find('.fill').trigger('click')
    await flushPromises()
    expect(store.setRequestParams).toHaveBeenCalledWith(expect.objectContaining({ rows: [{ id: 'product' }], measures: [{ id: 'sales' }] }))
    expect(view.find('.designer__mdx').text()).toContain('[Product].Members ON 1')
  })

  it('writes it into the editor and runs it on request', async () => {
    const { view, setText, workbench } = await mountDesigner()
    await view.find('.fill').trigger('click')
    await flushPromises()
    const run = view.findAll('button').find(b => b.text() === 'Run')!
    await run.trigger('click')
    expect(setText).toHaveBeenCalledWith(expect.stringContaining('FROM [Sales]'))
    expect(workbench.run).toHaveBeenCalled()
  })
})
