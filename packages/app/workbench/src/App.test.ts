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
import { computed, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { WORKBENCH } from './state/workbench'

/* The editors and what they attach for the cube: not the frame's concern here. */
vi.mock('./state/editors', () => ({
  EDITORS: Symbol('editors'),
  createEditors: () => ({ editorFor: () => ({ session: { refreshAst: async () => undefined } }) }),
}))
vi.mock('./state/editing', () => ({ useMetadataEditing: () => [] }))

const { default: App } = await import('./App.vue')

const i18n = { language: 'en', t: (key: string) => key }

function mountApp(activeId: string | null) {
  const active = ref<string | null>(activeId)
  const wb = { activeId: active, active: computed(() => null), activeTab: computed(() => null), tabs: ref([]), open: vi.fn() }
  const view = mount(App, {
    global: {
      provide: { i18n, [WORKBENCH as symbol]: wb },
      stubs: {
        Topbar: true,
        Splitter: true,
        ExplorerPane: true,
        EditorPane: true,
        BottomPane: true,
        StructurePane: true,
        ConnectionDialog: true,
        RowInfoDialog: true,
        FunctionInfoDialog: true,
      },
    },
  })
  return { view, active, wb }
}

describe('the workbench frame', () => {
  it('gives the start screen the column while no server is open', () => {
    const { view, wb } = mountApp(null)
    const start = view.find('.welcome__action')
    expect(start.exists()).toBe(true)
    expect(view.find('.workbench__bottom').isVisible()).toBe(false)
    expect(view.findAllComponents({ name: 'Splitter' }).filter(s => s.props('direction') === 'horizontal' && s.isVisible())).toHaveLength(0)
    start.trigger('click')
    expect(wb.open).toHaveBeenCalledWith('preset.emondrian.foodmart')
  })

  it('shows the results under the editor once a server is open', () => {
    const { view } = mountApp('server')
    expect(view.find('.welcome').exists()).toBe(false)
    expect(view.find('.workbench__bottom').isVisible()).toBe(true)
  })

  it('takes the result pane away when the open server is removed', async () => {
    const { view, active } = mountApp('server')
    active.value = null
    await view.vm.$nextTick()
    expect(view.find('.welcome__action').exists()).toBe(true)
    expect(view.find('.workbench__bottom').isVisible()).toBe(false)
  })
})
