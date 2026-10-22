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
import { mount } from '@vue/test-utils';
import Settings from '../Settings.vue';
import { XmlaStore } from 'org.eclipse.daanse.board.app.lib.datasource.xmla';

vi.mock('org.eclipse.daanse.board.app.lib.datasource.xmla', () => {
  return {
    XmlaStore: {
      fetchCubes: vi.fn().mockResolvedValue([
        { CUBE_NAME: 'AccountingCube' },
        { CUBE_NAME: 'FoodmartCube' }
      ])
    }
  };
});

const customStubs = {
  VaSelect: {
    template: '<div><select class="va-select-stub" :data-label="label" :value="modelValue" @change="$emit(\'update:modelValue\', $event.target.value)"><option v-for="opt in options" :key="typeof opt === \'string\' ? opt : opt[valueBy]">{{ typeof opt === \'string\' ? opt : opt[textBy] }}</option></select></div>',
    props: ['modelValue', 'label', 'options', 'textBy', 'valueBy']
  },
  VaSwitch: {
    template: '<div><input type="checkbox" class="va-switch-stub" :data-label="label" :checked="modelValue" @change="$emit(\'update:modelValue\', $event.target.checked)" /></div>',
    props: ['modelValue', 'label']
  },
  VaInput: {
    template: '<div><input class="va-input-stub" :data-label="label" :value="modelValue" @input="$emit(\'update:modelValue\', $event.target.value)" /></div>',
    props: ['modelValue', 'label']
  }
};

describe('XMLA Datasource Settings.vue', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const connections = [
    { uid: 'xmla-conn-1', name: 'XMLA Conn 1', type: 'xmla' },
    { uid: 'other-conn', name: 'Other Conn', type: 'rest' }
  ];

  it('renders and filters connections of type xmla', () => {
    const config = { connection: '', cube: '', pollingEnabled: false };
    const wrapper = mount(Settings, {
      props: { config, connections, dataSources: [] },
      global: { stubs: customStubs }
    });

    const select = wrapper.findComponent(customStubs.VaSelect);
    expect(select.exists()).toBe(true);
    expect(select.props('options')).toEqual([
      { uid: 'xmla-conn-1', name: 'XMLA Conn 1', type: 'xmla' }
    ]);
  });

  it('fetches cubes on mount if connection is preset', async () => {
    const config = { connection: 'xmla-conn-1', cube: '', pollingEnabled: false };
    mount(Settings, {
      props: { config, connections, dataSources: [] },
      global: { stubs: customStubs }
    });

    expect(XmlaStore.fetchCubes).toHaveBeenCalledWith('xmla-conn-1');
  });

  it('toggles polling interval visibility and updates pollingInterval config', async () => {
    const config = { connection: 'xmla-conn-1', cube: '', pollingEnabled: false, pollingInterval: 5000 };
    const wrapper = mount(Settings, {
      props: { config, connections, dataSources: [] },
      global: { stubs: customStubs }
    });

    expect(wrapper.find('input[data-label="Polling Interval (ms)"]').exists()).toBe(false);

    // Toggle switch
    const toggle = wrapper.find('input[type="checkbox"]');
    await (toggle as any).setChecked(true);
    expect(config.pollingEnabled).toBe(true);

    await wrapper.vm.$nextTick();
    expect(wrapper.find('input[data-label="Polling Interval (ms)"]').exists()).toBe(true);

    const intervalInput = wrapper.find('input[data-label="Polling Interval (ms)"]');
    await intervalInput.setValue('7500');

    // Wait for lodash debounce (700ms)
    await new Promise(resolve => setTimeout(resolve, 800));
    expect(config.pollingInterval).toBe(7500);
  });
});
