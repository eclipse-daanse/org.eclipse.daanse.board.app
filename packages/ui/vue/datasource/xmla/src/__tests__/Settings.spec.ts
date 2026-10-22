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
import { identifier as connectionIdentifier } from 'org.eclipse.daanse.board.app.lib.api.connection';

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

/*
 * Mounted with its real controls. These tests were written when the dialogs
 * used Vuestic; the project's own DSelect and DInput render a plain select
 * and input, so there is nothing left to stand in for - and a stub left the
 * assertions with nothing to find.
 *
 * The dialog asks the connection repository for the connection it fetches
 * cubes through, so the mount provides one.
 */
const connectionRepository = {} as any

function mountSettings(config: any, connections: any[]) {
  return mount(Settings, {
    props: { config, connections, dataSources: [] },
    global: { provide: { [connectionIdentifier]: connectionRepository } }
  })
}

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
    const wrapper = mountSettings(config, connections);

    const select = wrapper.find('select');
    expect(select.exists()).toBe(true);
    expect(select.findAll('option').map((o) => o.text())).toEqual(['XMLA Conn 1']);
  });

  it('fetches cubes on mount if connection is preset', async () => {
    const config = { connection: 'xmla-conn-1', cube: '', pollingEnabled: false };
    mountSettings(config, connections);

    expect(XmlaStore.fetchCubes).toHaveBeenCalledWith('xmla-conn-1', connectionRepository);
  });

  it('toggles polling interval visibility and updates pollingInterval config', async () => {
    const config = { connection: 'xmla-conn-1', cube: '', pollingEnabled: false, pollingInterval: 5000 };
    const wrapper = mountSettings(config, connections);

    expect(wrapper.find('input').exists()).toBe(false);

    // Toggle switch
    const toggle = wrapper.find('[role="switch"]');
    await (toggle as any).trigger('click');
    expect(config.pollingEnabled).toBe(true);

    await wrapper.vm.$nextTick();
    expect(wrapper.find('input').exists()).toBe(true);

    const intervalInput = wrapper.find('input');
    await intervalInput.setValue('7500');

    // Wait for lodash debounce (700ms)
    await new Promise(resolve => setTimeout(resolve, 800));
    expect(config.pollingInterval).toBe(7500);
  });
});
