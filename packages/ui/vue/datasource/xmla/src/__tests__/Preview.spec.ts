/*********************************************************************
 * Copyright (c) 2025 Contributors to the Eclipse Foundation.
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
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { mount, flushPromises } from '@vue/test-utils';
import { identifier as datasourceIdentifier } from 'org.eclipse.daanse.board.app.lib.api.datasource';
import Preview from '../Preview.vue';

/*
 * The query designer, the pivot table and the editor are other packages'
 * components with their own servers to talk to. They are replaced by
 * components that only take what they are given and emit what the real
 * ones emit; the tabs and the checkbox stay the project's real controls.
 */
vi.mock('org.eclipse.daanse.board.app.ui.vue.common.xmla', async () => {
  const { defineComponent, h } = await import('vue');
  return {
    MetadataTree: defineComponent({
      name: 'MetadataTree',
      props: ['metadata'],
      setup: () => () => h('div', { class: 'metadata-tree' }),
    }),
    QueryDesigner: defineComponent({
      name: 'QueryDesigner',
      props: ['modelValue', 'api', 'catalog'],
      emits: ['update:modelValue'],
      setup: () => () => h('div', { class: 'query-designer' }),
    }),
    PivotTable: defineComponent({
      name: 'PivotTable',
      props: ['modelValue', 'rowsExpandedMembers', 'columnsExpandedMembers'],
      emits: ['onExpand', 'onCollapse'],
      setup: () => () => h('div', { class: 'pivot-table' }),
    }),
  };
});

vi.mock('org.eclipse.daanse.board.app.ui.vue.common.monaco', async () => {
  const { defineComponent, h } = await import('vue');
  return {
    MonacoEditor: defineComponent({
      name: 'MonacoEditor',
      props: ['modelValue'],
      setup: () => () => h('div', { class: 'monaco' }),
    }),
  };
});

const tableState = { rowsExpandedMembers: [], columnsExpandedMembers: [] };

function createStore() {
  return {
    getConnection: vi.fn(() => ({ getApi: async () => ({}), catalogName: 'Catalog' })),
    getMetadata: vi.fn(async () => ({ cube: 'Sales' })),
    getData: vi.fn(async () => ({ rows: [], tableState })),
    getMdxRequest: vi.fn(async () => 'SELECT FROM [Sales]'),
    setRequestParams: vi.fn(async () => {}),
    expand: vi.fn(() => ({ expanded: true })),
    collapse: vi.fn(() => ({})),
    destroy: vi.fn(),
  };
}

let store: ReturnType<typeof createStore>;

function mountPreview() {
  const datasourceRepository = {
    getDatasourceIdentifiers: () => ({ Store: Symbol.for('XmlaStore') }),
    resolveIdentifier: () => () => store,
  };
  return mount(Preview, {
    props: {
      dataSource: {
        type: 'xmla',
        config: { connection: 'xmla-conn-1', cube: 'Sales', requestParams: {} },
      },
    },
    global: { provide: { [datasourceIdentifier]: datasourceRepository } },
  });
}

describe('XMLA Datasource Preview.vue', () => {
  beforeEach(() => {
    store = createStore();
  });

  it('loads the metadata and the data of the store it creates', async () => {
    const wrapper = mountPreview();

    await vi.waitFor(() => expect(store.getData).toHaveBeenCalledTimes(1));
    await flushPromises();

    expect(store.getMetadata).toHaveBeenCalled();
    expect(wrapper.find('.metadata-tree').exists()).toBe(true);
    expect(wrapper.text()).not.toContain('Xmla.pickConnection');
    expect(wrapper.findComponent({ name: 'PivotTable' }).props('modelValue'))
      .toEqual({ rows: [], tableState });
  });

  it('asks for the data again when the query changes', async () => {
    const wrapper = mountPreview();
    await vi.waitFor(() => expect(store.getData).toHaveBeenCalledTimes(1));

    const params = { filters: [], rows: [{ id: 'r' }], columns: [], measures: [{ id: 'm' }] };
    wrapper.findComponent({ name: 'QueryDesigner' }).vm.$emit('update:modelValue', params);

    await vi.waitFor(() => expect(store.getData).toHaveBeenCalledTimes(2));
    expect(store.setRequestParams).toHaveBeenCalledWith(params);
    expect(wrapper.emitted('updateConfig')!.at(-1)![0]).toMatchObject({ requestParams: params });
  });

  it('asks for the data again after an expand and a collapse', async () => {
    const wrapper = mountPreview();
    await vi.waitFor(() => expect(store.getData).toHaveBeenCalledTimes(1));
    await flushPromises();

    const pivot = wrapper.findComponent({ name: 'PivotTable' });
    pivot.vm.$emit('onExpand', { member: 'a' });
    await vi.waitFor(() => expect(store.getData).toHaveBeenCalledTimes(2));
    expect(store.expand).toHaveBeenCalledWith({ member: 'a' });

    pivot.vm.$emit('onCollapse', { member: 'a' });
    await vi.waitFor(() => expect(store.getData).toHaveBeenCalledTimes(3));
    expect(store.collapse).toHaveBeenCalledWith({ member: 'a' });
  });
});
