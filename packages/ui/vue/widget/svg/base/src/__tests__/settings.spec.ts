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
 * ********************************************************************/

// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import { EVENT_ACTIONS_REGISTRY } from 'org.eclipse.daanse.board.app.lib.api.events'
import { identifiers } from 'org.eclipse.daanse.board.app.lib.core'
import { VariableWrapper } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { SvgwidgetsPackage } from '../gen/SvgwidgetsPackage'
import { SvgSettingsImpl } from '../gen/SvgSettingsImpl'
import { SvgClassConfigMapEntryImpl } from '../gen/SvgClassConfigMapEntryImpl'
import { SvgConfigItemImpl } from '../gen/SvgConfigItemImpl'
import SvgWidget from '../SvgWidget.vue'

vi.mock('vue-router', () => ({
  useRoute: () => ({ params: { pageid: 'p1' } }),
  useRouter: () => ({ push: vi.fn() }),
}))

vi.mock('org.eclipse.daanse.board.app.ui.vue.composables', async (importOriginal) => {
  const actual = (await importOriginal()) as Record<string, unknown>
  return { ...actual, useTranslation: () => ({ t: (key: string) => key }) }
})

/* What the asset host answers for any source. */
vi.stubGlobal('fetch', vi.fn(async () => ({ text: async () => '<svg><rect class="roof" /></svg>' })))

void SvgwidgetsPackage.eINSTANCE

function paint(className: string, fill: string) {
  const item = new SvgConfigItemImpl()
  item.className = className
  item.fill = new VariableWrapper(fill)
  const entry = new SvgClassConfigMapEntryImpl()
  entry.key = className
  entry.value = item
  return entry
}

async function show(settings: SvgSettingsImpl) {
  const wrapper = mount(SvgWidget, {
    props: { datasourceId: 'ds-1', id: 'w1', configv: settings },
    global: {
      provide: {
        [identifiers.TINY_EMITTER as symbol]: { emit: vi.fn(), on: vi.fn(), off: vi.fn() },
        [EVENT_ACTIONS_REGISTRY as unknown as symbol]: { registerInstance: vi.fn(), unregisterInstance: vi.fn() },
      },
    },
  })
  await flushPromises()
  return wrapper
}

/*
 * Widget.config is an attribute, not a containment: the adapter on the
 * widget never hears a write inside the settings object, and the widget is
 * handed the same instance on every change. A setting changed in the open
 * dialog has to reach the drawing all the same (#1203). And a generated
 * instance has to survive the mount at all (#1204).
 */
describe('a generated settings instance', () => {
  it('is mounted without a throw, and given a source wrapper', async () => {
    const settings = new SvgSettingsImpl()
    const wrapper = await show(settings)

    expect(wrapper.exists()).toBe(true)
    expect(settings.src).toBeInstanceOf(VariableWrapper)
  })
})

describe('a setting changed in the open dialog', () => {
  it('reaches the drawing: a class painted after the fact gets its style', async () => {
    const settings = new SvgSettingsImpl()
    settings.src = new VariableWrapper('/house.svg')
    const wrapper = await show(settings)
    expect(wrapper.html()).not.toContain('.roof')

    settings.classesConfig.add(paint('roof', '#ff0000'))
    await nextTick()

    expect(wrapper.html()).toContain('.roof')
    expect(wrapper.html()).toContain('#ff0000')
  })

  it('reaches the drawing: a new source is fetched', async () => {
    const settings = new SvgSettingsImpl()
    settings.src = new VariableWrapper('/house.svg')
    await show(settings)
    const fetched = vi.mocked(fetch)
    fetched.mockClear()

    settings.src = new VariableWrapper('/barn.svg')
    await nextTick()

    expect(fetched).toHaveBeenCalledWith('/barn.svg')
  })
})
