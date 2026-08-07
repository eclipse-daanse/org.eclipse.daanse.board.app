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
import { XmlaConnection } from 'org.eclipse.daanse.board.app.lib.connection.xmla';

vi.mock('org.eclipse.daanse.board.app.lib.connection.xmla', () => {
  return {
    XmlaConnection: {
      getCatalogs: vi.fn().mockResolvedValue([
        { CATALOG_NAME: 'Accounting' },
        { CATALOG_NAME: 'Foodmart' }
      ])
    }
  };
});

const customStubs = {
  VaInput: {
    template: '<div><input class="va-input-stub" :data-label="label" :value="modelValue" @input="$emit(\'update:modelValue\', $event.target.value)" /></div>',
    props: ['modelValue', 'label']
  },
  VaSelect: {
    template: '<div><select class="va-select-stub" :data-label="label" :value="modelValue" @change="$emit(\'update:modelValue\', $event.target.value)"><option v-for="opt in options" :key="typeof opt === \'string\' ? opt : opt[valueBy]">{{ typeof opt === \'string\' ? opt : opt[textBy] }}</option></select></div>',
    props: ['modelValue', 'label', 'options', 'textBy', 'valueBy']
  }
};

describe('XMLA Connection Settings.vue', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders standard fields URL, Catalog and Security', () => {
    const config = { url: '', catalogName: '', security: 'None' };
    const wrapper = mount(Settings, {
      props: { config },
      global: { stubs: customStubs }
    });

    expect(wrapper.find('input[data-label="URL"]').exists()).toBe(true);
    expect(wrapper.find('select[data-label="Catalog"]').exists()).toBe(true);
    expect(wrapper.find('select[data-label="Security"]').exists()).toBe(true);
    expect(wrapper.find('input[data-label="User"]').exists()).toBe(false);
  });

  it('renders user and password fields when security is Basic', () => {
    const config = { url: '', catalogName: '', security: 'Basic', user: '', password: '' };
    const wrapper = mount(Settings, {
      props: { config },
      global: { stubs: customStubs }
    });

    expect(wrapper.find('input[data-label="User"]').exists()).toBe(true);
    expect(wrapper.find('input[data-label="Password"]').exists()).toBe(true);
  });

  it('calls fetchCatalogs on mount if URL is set', async () => {
    const config = { url: 'https://daans.emondrian.com/xmla', catalogName: '', security: 'None' };
    mount(Settings, {
      props: { config },
      global: { stubs: customStubs }
    });

    expect(XmlaConnection.getCatalogs).toHaveBeenCalledWith('https://daans.emondrian.com/xmla', {
      type: 'None',
      user: undefined,
      password: undefined
    });
  });
});
