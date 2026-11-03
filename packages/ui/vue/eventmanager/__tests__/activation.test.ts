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

/*
 * What this bundle contributes when it starts, and takes back when it
 * stops (#1188).
 *
 * The tab is registered in activate() rather than declared as a component,
 * because what it applies to is a question only the event registry can
 * answer - so the registration is a thing this test can get wrong
 * silently, and the tab would simply never appear.
 */

import { beforeEach, describe, expect, it, vi } from 'vitest'
import { WIDGET_SETTINGS_TAB_SERVICE_ID, type WidgetSettingsTab } from 'org.eclipse.daanse.board.app.lib.api.widget'
import { activate, deactivate } from '../src/index'

const EVENTS = [
  { name: 'Column Clicked', type: 'DataTableWidget:col_click', description: '' },
  { name: 'Map Clicked', type: 'MapWidget:click', description: '' },
]

/** Only what activate() reaches for, answering as the real ones do. */
function wiring() {
  const registered = new Map<string, unknown>()

  const services = {
    register: (id: string, value: unknown) => registered.set(id, value),
    unregister: (id: string) => registered.delete(id),
    getRequired: (id: string) => {
      if (id === 'EventRegistry') {
        return {
          getAllEvents: () => EVENTS,
          getWidgetEvents: (type: string) =>
            EVENTS.filter((event) => event.type.startsWith(`${type}:`)),
        }
      }
      if (id === 'RouteRegistry') return { registerRoute: vi.fn(), unregisterRoute: vi.fn() }
      if (id === 'NavigationRegistry') {
        return { registerNavigationItem: vi.fn(), unregisterNavigationItem: vi.fn() }
      }
      throw new Error(`nothing provides ${id}`)
    },
  }

  return { services, registered }
}

describe('the eventmanager bundle', () => {
  let wired: ReturnType<typeof wiring>

  beforeEach(() => {
    wired = wiring()
  })

  it('contributes a settings tab when it starts', () => {
    activate({ services: wired.services } as never)

    const tab = wired.registered.get(WIDGET_SETTINGS_TAB_SERVICE_ID) as WidgetSettingsTab
    expect(tab).toBeDefined()
    expect(tab.id).toBe('events')
    expect(tab.component).toBeDefined()
  })

  /*
   * On a widget that raises nothing the tab would open on an empty list
   * and a dialog with nothing to choose from.
   */
  it('offers it only for widgets that raise events', () => {
    activate({ services: wired.services } as never)
    const tab = wired.registered.get(WIDGET_SETTINGS_TAB_SERVICE_ID) as WidgetSettingsTab

    expect(tab.appliesTo?.('DataTableWidget')).toBe(true)
    expect(tab.appliesTo?.('MapWidget')).toBe(true)
    expect(tab.appliesTo?.('MarkdownWidget')).toBe(false)
  })

  it('takes it back when it stops', () => {
    activate({ services: wired.services } as never)
    expect(wired.registered.has(WIDGET_SETTINGS_TAB_SERVICE_ID)).toBe(true)

    deactivate({ services: wired.services } as never)
    expect(wired.registered.has(WIDGET_SETTINGS_TAB_SERVICE_ID)).toBe(false)
  })
})
