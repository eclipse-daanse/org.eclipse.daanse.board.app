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
 **********************************************************************/

import {
  WidgetRepository,
  WIDGET_SERVICE_ID,
  type WidgetConfig,
  type WidgetProvider,
} from './classes'
import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'
import { serviceId } from 'org.eclipse.daanse.board.app.lib.core'
import type { ServiceRegistryListener, ServiceRegistryEvent } from '@eclipse-daanse/tsm'

/** Typed service id - the name and the contract declared once, here. */
const WIDGET_REPOSITORY = serviceId<WidgetRepository>('WidgetRepository')

const identifier = Symbol.for(WIDGET_REPOSITORY)

let tracker: ServiceRegistryListener | undefined

interface WidgetServiceReference {
  key: string
  properties: Readonly<Record<string, unknown>>
}

/**
 * Detects listener support at runtime: the interface keeps custom registries
 * valid without it, so the capability is probed, not assumed.
 */
function observable(services: ActivationContext['services']) {
  const candidate = services as ActivationContext['services'] & {
    addListener?(listener: ServiceRegistryListener): void
    removeListener?(listener: ServiceRegistryListener): void
    getServiceReferences?(id: string): WidgetServiceReference[]
    resolveReference?<T>(reference: WidgetServiceReference): T | undefined
  }
  return typeof candidate.addListener === 'function' ? candidate : undefined
}

export function activate({ services, log }: ActivationContext) {
  const repository = new WidgetRepository()
  services.register<WidgetRepository>(WIDGET_REPOSITORY, repository)

  /*
   * Track widget providers (OSGi ServiceTracker pattern): bundles register a
   * WidgetProvider under WIDGET_SERVICE_ID instead of calling registerWidget.
   * A bundle that unregisters - unload, reload - falls out of the palette
   * without anyone writing teardown code for it.
   *
   * The sync goes through references and their properties, not through the
   * event's service object: a component registration is lazy, its instance
   * does not exist yet when the 'registered' event fires. The 'widget.type'
   * property is there from the start, and resolveReference() constructs the
   * provider exactly when the palette needs it.
   */
  const registry = observable(services)
  if (!registry) {
    log.warn('service registry is not observable - widget bundles will not be tracked')
    return
  }

  const tracked = new Set<string>()

  const sync = () => {
    const references = registry.getServiceReferences?.(WIDGET_SERVICE_ID) ?? []
    const present = new Map<string, WidgetServiceReference>()
    for (const reference of references) {
      const type = reference.properties['widget.type']
      if (typeof type === 'string') present.set(type, reference)
    }

    for (const [type, reference] of present) {
      if (tracked.has(type)) continue
      const provider = registry.resolveReference?.<WidgetProvider>(reference)
      if (!provider) continue
      repository.registerWidget(type, provider)
      tracked.add(type)
      log.info(`widget "${type}" tracked`)
    }

    for (const type of [...tracked]) {
      if (present.has(type)) continue
      repository.unregisterWidget(type)
      tracked.delete(type)
      log.info(`widget "${type}" untracked`)
    }
  }

  sync()

  tracker = {
    onServiceEvent(event: ServiceRegistryEvent) {
      if (event.serviceId === WIDGET_SERVICE_ID) sync()
    },
  }
  registry.addListener?.(tracker)
}

export function deactivate({ services }: ActivationContext) {
  const registry = observable(services)
  if (registry && tracker) {
    registry.removeListener?.(tracker)
    tracker = undefined
  }
  services.unregister(WIDGET_REPOSITORY)
}

export {
  WidgetRepository,
  WIDGET_SERVICE_ID,
  type WidgetConfig,
  type WidgetProvider,
  identifier,
  WIDGET_REPOSITORY,
}
