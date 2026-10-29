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
    DEFAULT_TIMEOUT_SECONDS: 60,
    XmlaConnection: {
      getCatalogs: vi.fn().mockResolvedValue([
        { CATALOG_NAME: 'Accounting' },
        { CATALOG_NAME: 'Foodmart' }
      ])
    }
  };
});

/*
 * Mounted with its real controls. Written when the dialog used Vuestic;
 * DInput and DSelect render a plain input and select, so the stubs left
 * the assertions with nothing to find.
 *
 * Fields are located by their label. No translator is provided here, so a
 * label written as a key renders as that key - which is what the dialog
 * shows in this setting, and what the assertions therefore look for.
 */
function fieldNamed(wrapper: ReturnType<typeof mount>, label: string) {
  const tag = wrapper.findAll('label').find((l) => l.text().includes(label));
  return tag ? wrapper.find(`#${tag.attributes('for')}`) : undefined;
}
;

describe('XMLA Connection Settings.vue', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders standard fields URL, Catalog and Security', () => {
    const config = { url: '', catalogName: '', security: 'None' };
    const wrapper = mount(Settings, {
      props: { config }
    });

    expect((fieldNamed(wrapper, 'URL') ?? { exists: () => false }).exists()).toBe(true);
    expect((fieldNamed(wrapper, 'Xmla.catalog') ?? { exists: () => false }).exists()).toBe(true);
    expect((fieldNamed(wrapper, 'Xmla.security') ?? { exists: () => false }).exists()).toBe(true);
    expect((fieldNamed(wrapper, 'Xmla.user') ?? { exists: () => false }).exists()).toBe(false);
  });

  it('renders user and password fields when security is Basic', () => {
    const config = { url: '', catalogName: '', security: 'Basic', user: '', password: '' };
    const wrapper = mount(Settings, {
      props: { config }
    });

    expect((fieldNamed(wrapper, 'Xmla.user') ?? { exists: () => false }).exists()).toBe(true);
    expect((fieldNamed(wrapper, 'Xmla.password') ?? { exists: () => false }).exists()).toBe(true);
  });

  it('calls fetchCatalogs on mount if URL is set', async () => {
    const config = { url: 'https://daans.emondrian.com/xmla', catalogName: '', security: 'None' };
    mount(Settings, {
      props: { config }
    });

    expect(XmlaConnection.getCatalogs).toHaveBeenCalledWith('https://daans.emondrian.com/xmla', {
      type: 'None',
      user: undefined,
      password: undefined
    });
  });
});
