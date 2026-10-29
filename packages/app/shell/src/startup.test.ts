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

import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

/*
 * Only needed when the finder's plugin is installed into a real app, which
 * the stand-in App here never does - and its CommonJS entry does not load
 * under Vitest at all.
 */
vi.mock('mount-vue-component', () => ({ mount: () => ({ vNode: {} }) }))
import { DefaultServiceRegistry } from '@eclipse-daanse/tsm'
import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'
import { WORKSPACE, type Workspace } from 'org.eclipse.daanse.board.app.lib.model.workspace'
import * as workspaceModule from 'org.eclipse.daanse.board.app.lib.model.workspace'
import * as connectionModule from 'org.eclipse.daanse.board.app.lib.repository.connection'
import * as datasourceModule from 'org.eclipse.daanse.board.app.lib.repository.datasource'
import * as endpointFinder from 'org.eclipse.daanse.board.app.ui.vue.plugins.endpointfinder'
import {
  CONNECTION_REPOSITORY,
  type ConnectionRepository,
} from 'org.eclipse.daanse.board.app.lib.api.connection'
import {
  DATASOURCE_REPOSITORY,
  type DatasourceRepository,
} from 'org.eclipse.daanse.board.app.lib.api.datasource'
import { seedEmptyWorkspace } from './seedWorkspace'
import { guardBeforeUnload, startTracking, stopTracking } from './composables/unsavedChanges'

const quiet = { debug: () => {}, info: () => {}, warn: () => {}, error: () => {} }

/**
 * The startup of a fresh origin, in the order the loader runs it.
 *
 * The workspace and the repositories first, then the shell: it seeds the
 * empty workspace and starts tracking. Everything that waits for the App
 * service - the endpoint finder among them - activates after that, so
 * whatever it does to the workspace happens while it is already tracked.
 */
async function startFresh() {
  const services = new DefaultServiceRegistry()
  const context = { services, log: quiet } as unknown as ActivationContext

  workspaceModule.activate(context)
  connectionModule.activate(context)
  datasourceModule.activate(context)

  /* What ui.vue.connection.rest registers; the live object is a stand-in. */
  services.register('RestConnectionFactory', (config: unknown) => ({ config }))
  const connections = services.getRequired<ConnectionRepository>(CONNECTION_REPOSITORY)
  connections.registerConnectionType('rest', {
    Connection: Symbol.for('RestConnectionFactory'),
    Settings: Symbol.for('RestConnectionSettings'),
  })
  const datasources = services.getRequired<DatasourceRepository>(DATASOURCE_REPOSITORY)

  /* The shell's part of it. */
  seedEmptyWorkspace(connections, datasources)
  const changes = startTracking(services.getRequired<Workspace>(WORKSPACE))
  const target = new EventTarget()
  guardBeforeUnload(changes, target)
  services.register('App', { use: () => {} })

  /* What activates once the shell has published the App. */
  endpointFinder.activate(context)

  return { services, connections, changes, target }
}

function leaving(target: EventTarget): boolean {
  const event = new Event('beforeunload', { cancelable: true })
  target.dispatchEvent(event)
  return event.defaultPrevented
}

describe('a fresh start', () => {
  let started: Awaited<ReturnType<typeof startFresh>>

  beforeEach(async () => {
    started = await startFresh()
  })

  afterEach(() => stopTracking())

  it('lets the page go when nobody has changed anything', () => {
    expect(started.changes.dirty).toBe(false)
    expect(leaving(started.target)).toBe(false)
    /* Asked twice, the answer stays the same. */
    expect(leaving(started.target)).toBe(false)
  })

  it('holds only the seeded connection', () => {
    expect(started.connections.getConnections().map((c) => c.name)).toEqual([
      'Test Connection 01',
    ])
  })

  it('still gives the endpoint finder its live connection', () => {
    expect(
      started.connections.getConnection(endpointFinder.SPARQL_CONNECTION_ID),
    ).toBeDefined()
  })

  it('asks once something was changed, and not again once stored', () => {
    started.connections.getConnections()[0].name = 'Renamed'
    expect(leaving(started.target)).toBe(true)

    started.changes.markSaved()
    expect(leaving(started.target)).toBe(false)
  })
})
