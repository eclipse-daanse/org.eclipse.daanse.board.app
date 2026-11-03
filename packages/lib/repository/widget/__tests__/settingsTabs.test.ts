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

import { describe, expect, test, vi } from 'vitest'
import { TrackedWidgetSettingsTabs } from '../src/index'
import type { WidgetSettingsTab } from '../src/index'

function tab(over: Partial<WidgetSettingsTab> & { id: string }): WidgetSettingsTab {
  return { label: `${over.id}:Tab.label`, component: {}, ...over }
}

/** What the loader does: hand the component its tracked references. */
function tracking(...tabs: WidgetSettingsTab[]) {
  const registry = new TrackedWidgetSettingsTabs()
  registry.tabs = tabs
  return registry
}

describe('the settings tabs a bundle contributes', () => {
  test('a tab that says nothing is a tab for every widget', () => {
    const registry = tracking(tab({ id: 'events' }))

    expect(registry.getTabs('datatable').map((each) => each.id)).toEqual(['events'])
    expect(registry.getTabs('markdown').map((each) => each.id)).toEqual(['events'])
  })

  test('a tab is asked whether it has anything to say about this kind', () => {
    const registry = tracking(
      tab({ id: 'events', appliesTo: (type) => type === 'datatable' }),
      tab({ id: 'always' }),
    )

    expect(registry.getTabs('datatable').map((each) => each.id)).toEqual(['events', 'always'])
    expect(registry.getTabs('markdown').map((each) => each.id)).toEqual(['always'])
  })

  /*
   * References arrive in the registry's ranking order, which says which
   * provider wins a contest - not where a tab belongs on screen.
   */
  test('order decides where they sit, not the order they registered in', () => {
    const registry = tracking(
      tab({ id: 'third', order: 30 }),
      tab({ id: 'first', order: 10 }),
      tab({ id: 'second', order: 20 }),
    )

    expect(registry.getTabs('datatable').map((each) => each.id)).toEqual([
      'first',
      'second',
      'third',
    ])
  })

  /* One broken contributor costs its own tab, not the overlay. */
  test('a tab whose appliesTo throws is left out, and the rest stay', () => {
    const registry = tracking(
      tab({
        id: 'broken',
        appliesTo: () => {
          throw new Error('no')
        },
      }),
      tab({ id: 'sound' }),
    )

    expect(registry.getTabs('datatable').map((each) => each.id)).toEqual(['sound'])
  })

  test('a bundle arriving or leaving is heard', () => {
    const registry = tracking()
    const heard = vi.fn()
    const stop = registry.onChange(heard)

    registry.tabs = [tab({ id: 'events' })]
    expect(heard).toHaveBeenCalledTimes(1)
    expect(registry.getTabs('datatable')).toHaveLength(1)

    registry.tabs = []
    expect(heard).toHaveBeenCalledTimes(2)
    expect(registry.getTabs('datatable')).toHaveLength(0)

    stop()
    registry.tabs = [tab({ id: 'events' })]
    expect(heard).toHaveBeenCalledTimes(2)
  })

  test('one broken subscriber does not keep the others from hearing it', () => {
    const registry = tracking()
    const heard = vi.fn()
    registry.onChange(() => {
      throw new Error('no')
    })
    registry.onChange(heard)

    registry.tabs = [tab({ id: 'events' })]

    expect(heard).toHaveBeenCalledTimes(1)
  })
})
