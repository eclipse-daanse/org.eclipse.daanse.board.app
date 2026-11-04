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

import { describe, expect, it, vi } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { defineComponent, h, reactive } from 'vue'
import { identifier as DATASOURCE_REPOSITORY } from 'org.eclipse.daanse.board.app.lib.api.datasource'
import { identifier as WORKSPACE, WorkspaceImpl } from 'org.eclipse.daanse.board.app.lib.model.workspace'
import DatasourceEditor from '../DatasourceEditor.vue'

/* A preview that changes the query the way xmla's does: by reporting a new configuration. */
const Preview = defineComponent({
  props: { dataSource: { type: Object, required: true } },
  emits: ['updateConfig'],
  setup(props, { emit }) {
    return () =>
      h(
        'button',
        {
          class: 'build',
          onClick: () =>
            emit('updateConfig', {
              ...(props.dataSource as any).config,
              requestParams: { rows: ['[Time]'], columns: [], measures: [], filters: [] },
            }),
        },
        'build',
      )
  },
})

/* The designer goes on to change the lists it was handed, in place. */
const PreviewEditingInPlace = defineComponent({
  props: { dataSource: { type: Object, required: true } },
  emits: ['updateConfig'],
  setup(props, { emit }) {
    // Reactive, as the xmla preview's queryConfig is.
    const params = reactive({ rows: ['[Time]'], columns: [], measures: [] as string[], filters: [] })
    return () => [
      h('button', { class: 'build', onClick: () => emit('updateConfig', { ...(props.dataSource as any).config, requestParams: params }) }, 'build'),
      h('button', { class: 'more', onClick: () => params.measures.push('[Measures].[Store Cost]') }, 'more'),
    ]
  },
})

function setUp(preview: any = Preview) {
  const source: any = {
    uid: 'ds1',
    name: 'Sales',
    type: 'xmla',
    tags: Object.assign(new Set<string>(), { clear: Set.prototype.clear }),
    config: { connection: 'c1', cube: 'Sales' },
  }
  const repository = {
    getDatasourceModel: () => source,
    getDatasourceIdentifiers: () => ({ Preview: Symbol.for('P'), Settings: Symbol.for('S') }),
    resolveIdentifier: (symbol: symbol) => (symbol === Symbol.for('P') ? preview : null),
    registeredDatasources: ['xmla'],
    saveDatasource: vi.fn(),
  }
  const wrapper = mount(DatasourceEditor, {
    props: { itemId: 'ds1', view: 'preview' },
    global: {
      provide: { [DATASOURCE_REPOSITORY]: repository, [WORKSPACE]: new WorkspaceImpl() },
    },
  })
  return { wrapper, repository, source }
}

describe('DatasourceEditor', () => {
  it('says when the preview changed the query, and saves it from there', async () => {
    const { wrapper, repository, source } = setUp()
    await flushPromises()

    expect(wrapper.find('.editor__unsaved').exists()).toBe(false)

    await wrapper.find('.build').trigger('click')
    expect(wrapper.find('.editor__unsaved').text()).toContain('Editor.unsaved')

    const save = wrapper.findAll('.editor__unsaved button').find((b) => b.text() === 'common:Action.save')!
    await save.trigger('click')

    expect(repository.saveDatasource).toHaveBeenCalledWith(source)
    expect(source.config.requestParams.rows).toEqual(['[Time]'])
    expect(wrapper.find('.editor__unsaved').exists()).toBe(false)
    /* Saving from the preview keeps the editor open. */
    expect(wrapper.emitted('close')).toBeUndefined()
  })

  it('keeps the preview\'s change when the settings are opened, so their Save keeps it too', async () => {
    const { wrapper, repository, source } = setUp()
    await flushPromises()
    await wrapper.find('.build').trigger('click')

    await wrapper.setProps({ view: 'settings' })
    const save = wrapper.findAll('button').find((b) => b.text() === 'common:Action.save')!
    await save.trigger('click')

    expect(repository.saveDatasource).toHaveBeenCalled()
    expect(source.config.requestParams.rows).toEqual(['[Time]'])
  })

  it('goes back to the saved query on discard', async () => {
    const { wrapper, repository } = setUp()
    await flushPromises()
    await wrapper.find('.build').trigger('click')

    const discard = wrapper.findAll('.editor__unsaved button').find((b) => b.text() === 'Editor.discard')!
    await discard.trigger('click')

    expect(wrapper.find('.editor__unsaved').exists()).toBe(false)
    expect(repository.saveDatasource).not.toHaveBeenCalled()
  })

  it('keeps what was saved apart from the draft the preview goes on editing', async () => {
    const { wrapper, source } = setUp(PreviewEditingInPlace)
    await flushPromises()

    await wrapper.find('.build').trigger('click')
    const save = wrapper.findAll('.editor__unsaved button').find((b) => b.text() === 'common:Action.save')!
    await save.trigger('click')

    await wrapper.find('.more').trigger('click')

    // Was: the stored source held the draft itself, and took the change without a Save.
    expect(source.config.requestParams.measures).toEqual([])
    expect((wrapper.vm as any).unsaved).toBe(true)
  })
})
