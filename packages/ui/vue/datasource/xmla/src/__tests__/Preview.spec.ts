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
      emits: ['update:modelValue'],
      setup: (_, { slots }) => () => h('div', { class: 'monaco' }, slots.actions?.()),
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
    setMdx: vi.fn(),
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

  it('asks once for a store whose insides change with every answer', async () => {
    // The real store holds the designer's request and the explorer's metadata, both reactive.
    const { reactive } = await import('vue');
    const inside = reactive({ answers: 0 });
    Object.assign(store, { inside });
    store.getData.mockImplementation(async () => {
      inside.answers += 1;
      return { rows: [], tableState };
    });

    mountPreview();
    await vi.waitFor(() => expect(store.getData).toHaveBeenCalledTimes(1));
    await new Promise(resolve => setTimeout(resolve, 400));

    // Was: a deep watch on the store, and every answer asked for the next one.
    expect(store.getData).toHaveBeenCalledTimes(1);
  });

  async function openTheEditor() {
    const wrapper = mountPreview();
    await vi.waitFor(() => expect(store.getData).toHaveBeenCalledTimes(1));
    await flushPromises();
    const tab = wrapper.findAll('button, [role="tab"]').find(b => b.text().includes('Xmla.write'))!;
    await tab.trigger('click');
    await flushPromises();
    return wrapper;
  }

  it('runs the MDX typed in the editor and leaves it there', async () => {
    const wrapper = await openTheEditor();
    const editor = wrapper.findComponent({ name: 'MonacoEditor' });
    expect(editor.props('modelValue')).toBe('SELECT FROM [Sales]');

    const typed = 'SELECT {[Measures].[Store Cost]} ON 0 FROM [Sales]';
    editor.vm.$emit('update:modelValue', typed);
    await vi.waitFor(() => expect(store.getData).toHaveBeenCalledTimes(2));
    await flushPromises();

    expect(store.setMdx).toHaveBeenLastCalledWith(typed, true);
    expect(wrapper.emitted('updateConfig')!.at(-1)![0]).toMatchObject({ mdx: typed, useMdx: true });
    // Was: the designer's query written back over it with the answer.
    expect(wrapper.findComponent({ name: 'MonacoEditor' }).props('modelValue')).toBe(typed);
  });

  it('keeps what is typed while the designer\'s query is still being asked for', async () => {
    let give!: (mdx: string) => void;
    store.getMdxRequest.mockImplementationOnce(() => new Promise<string>(resolve => { give = resolve; }));
    const wrapper = mountPreview();
    await vi.waitFor(() => expect(store.getMdxRequest).toHaveBeenCalledTimes(1));
    const tab = wrapper.findAll('button, [role="tab"]').find(b => b.text().includes('Xmla.write'))!;
    await tab.trigger('click');

    const typed = 'SELECT {[Measures].[Profit]} ON 0 FROM [Sales]';
    wrapper.findComponent({ name: 'MonacoEditor' }).vm.$emit('update:modelValue', typed);
    give('SELECT FROM [Sales]');
    await flushPromises();

    // Was: the late designer's query landed over what was typed.
    expect(wrapper.findComponent({ name: 'MonacoEditor' }).props('modelValue')).toBe(typed);
  });

  it("goes back to the designer's query when the MDX is no longer used", async () => {
    const wrapper = await openTheEditor();
    wrapper.findComponent({ name: 'MonacoEditor' }).vm.$emit('update:modelValue', 'SELECT FROM [Sales] WHERE 1');
    await vi.waitFor(() => expect(store.getData).toHaveBeenCalledTimes(2));
    await flushPromises();

    await wrapper.find('input[type="checkbox"]').setValue(false);
    await vi.waitFor(() => expect(store.getData).toHaveBeenCalledTimes(3));
    await flushPromises();

    expect(store.setMdx).toHaveBeenLastCalledWith('SELECT FROM [Sales] WHERE 1', false);
    expect(wrapper.findComponent({ name: 'MonacoEditor' }).props('modelValue')).toBe('SELECT FROM [Sales]');
  });
});
