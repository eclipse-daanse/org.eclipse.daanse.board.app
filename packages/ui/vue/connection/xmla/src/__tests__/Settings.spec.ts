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
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { flushPromises, mount } from '@vue/test-utils';
import { reactive } from 'vue';
import Settings from '../Settings.vue';
import { XmlaConnection } from 'org.eclipse.daanse.board.app.lib.connection.xmla';
import en from '../i18n/en.json';

/*
 * The server, faked at the two questions the settings ask it: which
 * catalogues there are, and which cubes a catalogue holds.
 */
const CUBES: Record<string, string[]> = {
  Accounting: ['Ledger'],
  Foodmart: ['Sales', 'Warehouse'],
};

vi.mock('org.eclipse.daanse.board.app.lib.connection.xmla', () => {
  return {
    XmlaConnection: {
      getCatalogs: vi.fn(),
      getCubes: vi.fn(),
    }
  };
});

function serverAnswers() {
  vi.mocked(XmlaConnection.getCatalogs).mockResolvedValue([
    { CATALOG_NAME: 'Accounting' },
    { CATALOG_NAME: 'Foodmart' }
  ] as never);
  vi.mocked(XmlaConnection.getCubes).mockImplementation(async (_url, _security, catalog) =>
    (CUBES[catalog] ?? []).map((CUBE_NAME) => ({ CUBE_NAME })) as never,
  );
}

/*
 * The package's own English texts, interpolated - so an assertion reads
 * what a person reads, reason included.
 */
const i18n = {
  t(key: string, options?: Record<string, unknown>) {
    const path = key.replace(/^connectionXmla:/, '').split('.');
    let text: any = en;
    for (const part of path) text = text?.[part];
    if (typeof text !== 'string') return key;
    return text.replace(/\{\{(\w+)\}\}/g, (_, name) => String(options?.[name] ?? ''));
  },
};

function mountWith(config: Record<string, unknown>) {
  return mount(Settings, {
    props: { config: reactive(config) },
    global: { provide: { i18n } },
  });
}

function fieldNamed(wrapper: ReturnType<typeof mount>, label: string) {
  const tag = wrapper.findAll('label').find((l) => l.text().includes(label));
  return tag ? wrapper.find(`#${tag.attributes('for')}`) : undefined;
}

function suggestionsOf(wrapper: ReturnType<typeof mount>, label: string): string[] {
  const input = fieldNamed(wrapper, label)!.element as HTMLInputElement;
  const list = wrapper.find(`datalist[id="${input.getAttribute('list')}"]`);
  return list.exists() ? list.findAll('option').map((o) => (o.element as HTMLOptionElement).value) : [];
}

describe('XMLA Connection Settings.vue', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    serverAnswers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders standard fields URL, Catalog and Security', () => {
    const wrapper = mountWith({ url: '', catalogName: '', security: 'None' });

    expect(fieldNamed(wrapper, 'URL')?.exists()).toBe(true);
    expect(fieldNamed(wrapper, 'Catalogue')?.exists()).toBe(true);
    expect(fieldNamed(wrapper, 'Authentication')?.exists()).toBe(true);
    expect(fieldNamed(wrapper, 'User')).toBeUndefined();
  });

  it('renders user and password fields when security is Basic', () => {
    const wrapper = mountWith({ url: '', catalogName: '', security: 'Basic', user: '', password: '' });

    expect(fieldNamed(wrapper, 'User')?.exists()).toBe(true);
    expect(fieldNamed(wrapper, 'Password')?.exists()).toBe(true);
  });

  it('asks the server for its catalogues on mount if a URL is set', () => {
    mountWith({ url: 'https://daans.emondrian.com/xmla', catalogName: '', security: 'None' });

    expect(XmlaConnection.getCatalogs).toHaveBeenCalledWith('https://daans.emondrian.com/xmla', {
      type: 'None',
      user: undefined,
      password: undefined
    });
  });

  it('offers the server catalogues and the cubes of the chosen one', async () => {
    const wrapper = mountWith({ url: 'https://example.org/xmla', catalogName: 'Foodmart', security: 'None' });
    await flushPromises();

    expect(suggestionsOf(wrapper, 'Catalogue')).toEqual(['Accounting', 'Foodmart']);
    expect(XmlaConnection.getCubes).toHaveBeenCalledWith('https://example.org/xmla', expect.anything(), 'Foodmart');
    expect(suggestionsOf(wrapper, 'Cube')).toEqual(['Sales', 'Warehouse']);
  });

  /*
   * What the create dialog stores may be typed, not picked: the catalogue
   * has to show and stay even when the server's list does not hold it.
   */
  it('keeps a stored catalogue the server does not list', async () => {
    const config = reactive({ url: 'https://example.org/xmla', catalogName: 'Sales2024', security: 'None' });
    const wrapper = mount(Settings, { props: { config }, global: { provide: { i18n } } });
    await flushPromises();

    expect((fieldNamed(wrapper, 'Catalogue')!.element as HTMLInputElement).value).toBe('Sales2024');
    expect(config.catalogName).toBe('Sales2024');
  });

  it('says so when the server cannot be reached, keeping what is stored', async () => {
    vi.mocked(XmlaConnection.getCatalogs).mockRejectedValue(new TypeError('Failed to fetch'));
    vi.mocked(XmlaConnection.getCubes).mockRejectedValue(new TypeError('Failed to fetch'));
    const wrapper = mountWith({ url: 'https://wrong.example/xmla', catalogName: 'FoodMart', security: 'None' });
    await flushPromises();

    expect(wrapper.text()).toContain('Could not reach the server: Failed to fetch');
    expect((fieldNamed(wrapper, 'Catalogue')!.element as HTMLInputElement).value).toBe('FoodMart');
  });

  it('asks again once a typed URL holds still, not on every keystroke', async () => {
    vi.useFakeTimers();
    const config = reactive({ url: '', catalogName: '', security: 'None' });
    const wrapper = mount(Settings, { props: { config }, global: { provide: { i18n } } });

    for (const typed of ['h', 'ht', 'https://example.org/xmla']) {
      await fieldNamed(wrapper, 'URL')!.setValue(typed);
    }
    expect(XmlaConnection.getCatalogs).not.toHaveBeenCalled();

    await vi.advanceTimersByTimeAsync(600);
    expect(XmlaConnection.getCatalogs).toHaveBeenCalledTimes(1);
    expect(XmlaConnection.getCatalogs).toHaveBeenCalledWith('https://example.org/xmla', expect.anything());
  });

  it('drops a cube the newly chosen catalogue does not hold', async () => {
    vi.useFakeTimers();
    const config = reactive({ url: 'https://example.org/xmla', catalogName: 'Foodmart', cubeName: 'Sales', security: 'None' });
    const wrapper = mount(Settings, { props: { config }, global: { provide: { i18n } } });
    await vi.advanceTimersByTimeAsync(0);
    expect(config.cubeName).toBe('Sales');

    await fieldNamed(wrapper, 'Catalogue')!.setValue('Accounting');
    await vi.advanceTimersByTimeAsync(600);

    expect(config.cubeName).toBe('');
    expect(suggestionsOf(wrapper, 'Cube')).toEqual(['Ledger']);
  });

  it('keeps the cube when the new catalogue holds it too', async () => {
    vi.useFakeTimers();
    CUBES.Accounting2 = ['Sales'];
    const config = reactive({ url: 'https://example.org/xmla', catalogName: 'Foodmart', cubeName: 'Sales', security: 'None' });
    const wrapper = mount(Settings, { props: { config }, global: { provide: { i18n } } });
    await vi.advanceTimersByTimeAsync(0);

    await fieldNamed(wrapper, 'Catalogue')!.setValue('Accounting2');
    await vi.advanceTimersByTimeAsync(600);

    expect(config.cubeName).toBe('Sales');
    delete CUBES.Accounting2;
  });

  it('shows and edits the stored cube', async () => {
    const config = reactive({ url: '', catalogName: '', cubeName: 'Sales', security: 'None' });
    const wrapper = mount(Settings, { props: { config }, global: { provide: { i18n } } });

    const cube = fieldNamed(wrapper, 'Cube')!;
    expect((cube.element as HTMLInputElement).value).toBe('Sales');
    await cube.setValue('Warehouse');
    expect(config.cubeName).toBe('Warehouse');
  });
});
