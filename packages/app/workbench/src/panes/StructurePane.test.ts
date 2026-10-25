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
import { computed, ref, shallowRef } from 'vue'
import { mount } from '@vue/test-utils'
import { WORKBENCH } from '../state/workbench'
import { EDITORS } from '../state/editors'
import StructurePane from './StructurePane.vue'

const i18n = { language: 'en', t: (key: string) => key }

/* A server, a tab and its editor, as far as the structure pane reads them. */
function mountPane() {
  const tab = { id: 'tab-1', title: '#1', uri: 'inmemory://q.mdxq', text: 'SELECT FROM [Sales]', result: null }
  const activeId = ref<string | null>('server')
  const wb = { activeId, activeTabId: ref('tab-1'), activeTab: computed(() => tab), metadata: shallowRef({}) }
  const tree = { activeRow: shallowRef({ label: 'SelectStatement' }) }
  const editor = { ast: tree, cst: tree, ready: shallowRef(true), session: { astStale: shallowRef(false) } }
  const editors = { editorFor: () => editor }
  const view = mount(StructurePane, {
    props: { inspectorHeight: 200 },
    global: {
      provide: { i18n, [WORKBENCH as symbol]: wb, [EDITORS as symbol]: editors },
      stubs: { ProvidedTree: true, Inspector: true, BuilderView: true, UnparseView: true, PivotDesigner: true, DTabs: true, Splitter: true },
    },
  })
  return { view, activeId }
}

describe('the structure pane', () => {
  it('shows the tab’s trees and the inspector while a server is open', () => {
    const { view } = mountPane()
    expect(view.findComponent({ name: 'ProvidedTree' }).exists()).toBe(true)
    expect(view.findComponent({ name: 'Inspector' }).exists()).toBe(true)
  })

  it('lets go of the query when its server is removed', async () => {
    const { view, activeId } = mountPane()
    activeId.value = null
    await view.vm.$nextTick()
    expect(view.findComponent({ name: 'ProvidedTree' }).exists()).toBe(false)
    expect(view.findComponent({ name: 'Inspector' }).exists()).toBe(false)
  })
})
