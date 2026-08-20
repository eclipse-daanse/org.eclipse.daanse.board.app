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
 **********************************************************************/

/*
 * Integration test of the widget bundle pattern (B5.2/B5.3).
 *
 * Successor of the B3-era spec that drove activate/deactivate exports:
 * widgets are declared components now. What must hold instead:
 *
 * 1. The package exports a @component provider under 'daanse.widget' with a
 *    'widget.type' property.
 * 2. Constructing it via the registry injects the event registries; its
 *    @activate registers events/actions, @deactivate withdraws them.
 * 3. The WidgetRepository tracks registrations under 'daanse.widget' into
 *    the palette and out again - the ServiceTracker pattern end to end.
 */

import { describe, it, expect, beforeEach } from 'vitest'
import { Container } from 'inversify'
import {
  getComponentMetadata,
  getActivateMethod,
  getDeactivateMethod,
} from '@eclipse-daanse/tsm/decorators'
import { ModuleLoader, type ModuleManifest } from '@eclipse-daanse/tsm'
import { BoardServiceRegistry } from 'org.eclipse.daanse.board.app.lib.core'
import { WIDGET_SERVICE_ID, WidgetRepository } from 'org.eclipse.daanse.board.app.lib.repository.widget'

const silentLogger = () => ({
  debug: () => {}, info: () => {}, warn: () => {}, error: () => {},
})

/** Accepts the widgets' calls without booting the event system. */
class EventRegistryDouble {
  readonly registered = new Set<string>()
  registerWidget(type: string) { this.registered.add(type) }
  unregisterWidget(type: string) { this.registered.delete(type) }
}
class ActionsRegistryDouble {
  readonly registered = new Set<string>()
  registerWidgetType(type: string) { this.registered.add(type) }
  unregisterWidgetType(type: string) { this.registered.delete(type) }
}

/*
 * Monaco (pulled in by the code widget) probes clipboard APIs at import
 * time; jsdom has none. The stub keeps the import side-effect free without
 * touching the widget.
 */
document.queryCommandSupported ??= () => false
window.matchMedia ??= ((query: string) => ({
  matches: false, media: query, onchange: null,
  addListener() {}, removeListener() {},
  addEventListener() {}, removeEventListener() {},
  dispatchEvent: () => false,
})) as typeof window.matchMedia

describe('widget bundles as declared components', () => {
  let services: BoardServiceRegistry
  let events: EventRegistryDouble
  let actions: ActionsRegistryDouble

  beforeEach(async () => {
    services = new BoardServiceRegistry(new Container())
    events = new EventRegistryDouble()
    actions = new ActionsRegistryDouble()
    services.register('EventRegistry', events)
    services.register('EventActionsRegistry', actions)

    // The repository module installs the tracker; run by the real loader,
    // its container handed over - the same path main.ts uses.
    const loader = new ModuleLoader({ serviceRegistry: services, logger: silentLogger() })
    const manifest: ModuleManifest = {
      id: 'lib.repository.widget', name: 'widget repository', version: '0.0.0',
      entry: './src/index.ts', exports: {},
      provides: [{ id: 'WidgetRepository' }],
    }
    await loader.loadModule(manifest, {
      container: await import('org.eclipse.daanse.board.app.lib.repository.widget'),
      awaitCascade: true,
    })
  })

  it('sample declares a component providing daanse.widget with its type', async () => {
    const { SampleWidgetProvider } = await import('org.eclipse.daanse.board.app.ui.vue.widget.sample')

    const meta = getComponentMetadata(SampleWidgetProvider)
    expect(meta?.service).toEqual([WIDGET_SERVICE_ID])
    expect(meta?.properties?.['widget.type']).toBe('SampleWidget')
    expect(getActivateMethod(SampleWidgetProvider)).toBeDefined()
    expect(getDeactivateMethod(SampleWidgetProvider)).toBeDefined()
  })

  it('constructing the provider injects the registries; lifecycle registers and withdraws', async () => {
    const { SampleWidgetProvider } = await import('org.eclipse.daanse.board.app.ui.vue.widget.sample')

    const provider = services.construct(SampleWidgetProvider)
    provider.register()
    expect(events.registered.has('SampleWidget')).toBe(true)

    provider.unregister()
    expect(events.registered.has('SampleWidget')).toBe(false)
  })

  it('the tracker carries a registration into the palette and out again', async () => {
    const { SampleWidgetProvider } = await import('org.eclipse.daanse.board.app.ui.vue.widget.sample')
    const repository = services.getRequired<WidgetRepository>('WidgetRepository')

    const provider = services.construct(SampleWidgetProvider)
    const registration = services.register(WIDGET_SERVICE_ID, provider, {
      properties: { 'widget.type': provider.type },
    })
    expect(repository.getWidget('SampleWidget')).toBeDefined()
    expect(repository.getWidget('SampleWidget').name).toBe('Sample')

    registration.unregister()
    expect(repository.getWidget('SampleWidget')).toBeUndefined()
  })

  /*
   * Contract sweep across all migrated widget bundles: every one exports at
   * least one @component provider for daanse.widget whose widget.type
   * property is set. Guards against a generator slip in any single package.
   */
  const bundleIds = [
    'chart', 'code', 'icon', 'image', 'markdown', 'mermaid', 'page',
    'routing', 'rss', 'sample', 'svg.base', 'svg.repeat', 'table.data',
    'table.kpi', 'table.pivot', 'text.plain', 'text.rich', 'timeline',
    'vanta', 'video', 'weather', 'xmla.filters', 'progress',
  ]
  // 30s: the code widget drags monaco through the SSR transform on a cold
  // cache - import cost, not a defect.
  it.each(bundleIds)('%s exports a daanse.widget component', { timeout: 30_000 }, async (suffix) => {
    const ns = await import(/* @vite-ignore */ `org.eclipse.daanse.board.app.ui.vue.widget.${suffix}`)

    const providers = Object.values(ns).filter(
      (e) => typeof e === 'function' && getComponentMetadata(e as never)?.service?.includes(WIDGET_SERVICE_ID),
    )
    expect(providers.length).toBeGreaterThanOrEqual(1)
    const meta = getComponentMetadata(providers[0] as never)
    expect(typeof meta?.properties?.['widget.type']).toBe('string')
  })
})
