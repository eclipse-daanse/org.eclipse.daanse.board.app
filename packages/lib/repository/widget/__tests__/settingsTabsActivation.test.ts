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

/*
 * The tab registry as the loader drives it (#1188).
 *
 * settingsTabs.test.ts sets `tabs` by hand, which tests the sorting and
 * the filtering but not the one thing that could silently never happen:
 * that a tab a bundle declares actually arrives through @injectAll. The
 * widget repository has the same test for the same reason (#1076) - the
 * tracker was never the problem there, the test was.
 */

import { describe, expect, test, beforeEach } from 'vitest'
import { component } from '@eclipse-daanse/tsm'
import { DefaultServiceRegistry, ModuleLoader, type ModuleManifest } from '@eclipse-daanse/tsm'
import {
  WIDGET_SETTINGS_TAB_SERVICE_ID,
  type WidgetSettingsTab,
  type WidgetSettingsTabRegistry,
} from '../src/index'

const silentLogger = () => ({
  debug: () => {},
  info: () => {},
  warn: () => {},
  error: () => {},
})

/** A bundle that contributes one tab, declared the way a real one does. */
@component({ service: [WIDGET_SETTINGS_TAB_SERVICE_ID] })
class EventsTabProvider implements WidgetSettingsTab {
  readonly id = 'events'
  readonly label = 'eventmanager:Tab.events'
  readonly component = {}
  readonly order = 50
  appliesTo(widgetType: string): boolean {
    return widgetType !== 'markdown'
  }
}

describe('a tab a bundle declares', () => {
  let services: DefaultServiceRegistry
  let loader: ModuleLoader

  beforeEach(async () => {
    services = new DefaultServiceRegistry()
    loader = new ModuleLoader({ serviceRegistry: services, logger: silentLogger() })

    await loader.loadModule(
      {
        id: 'lib.repository.widget',
        name: 'widget repository',
        version: '0.0.0',
        entry: './src/index.ts',
        exports: {},
        provides: [{ id: 'WidgetRepository' }, { id: 'WidgetSettingsTabRegistry' }],
      } as ModuleManifest,
      { container: await import('../src/index'), awaitCascade: true },
    )
  })

  const registry = () =>
    services.getRequired<WidgetSettingsTabRegistry>('WidgetSettingsTabRegistry')

  test('reaches the registry through injectAll, and leaves again', async () => {
    expect(registry().getTabs('datatable')).toEqual([])

    await loader.loadModule(
      {
        id: 'ui.vue.eventmanager.double',
        name: 'a bundle with a tab',
        version: '0.0.0',
        entry: './index.ts',
        exports: {},
      } as ModuleManifest,
      { container: { EventsTabProvider }, awaitCascade: true },
    )

    expect(registry().getTabs('datatable').map((each) => each.id)).toEqual(['events'])

    await loader.unloadModule('ui.vue.eventmanager.double')

    expect(registry().getTabs('datatable')).toEqual([])
  })

  test('is asked what it applies to, as declared', async () => {
    await loader.loadModule(
      {
        id: 'ui.vue.eventmanager.double',
        name: 'a bundle with a tab',
        version: '0.0.0',
        entry: './index.ts',
        exports: {},
      } as ModuleManifest,
      { container: { EventsTabProvider }, awaitCascade: true },
    )

    expect(registry().getTabs('datatable').map((each) => each.id)).toEqual(['events'])
    expect(registry().getTabs('markdown')).toEqual([])
  })
})
