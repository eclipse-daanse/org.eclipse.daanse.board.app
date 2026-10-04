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
 * Stellvertretend für die elf Datasource-Pakete, die alle demselben Muster
 * folgen: Factory registrieren, Instanz über `construct` erzeugen.
 *
 * Der Punkt ist die Injektion. Vorher band Inversify die Store-Klasse selbst
 * und löste `@inject` beim `container.get(RestStore)` auf. Jetzt kommt die
 * Instanz aus `services.construct()` — greift das nicht, ist
 * `connectionRepository` still `undefined` und der Store fällt erst beim
 * Datenabruf um, weit weg von der Ursache.
 */

import { TINY_EMITTER } from 'org.eclipse.daanse.board.app.lib.core'
import { VARIABLE_REPOSITORY } from 'org.eclipse.daanse.board.app.lib.api.variable'
import { CONNECTION_REPOSITORY } from 'org.eclipse.daanse.board.app.lib.api.connection'
import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { DefaultServiceRegistry } from '@eclipse-daanse/tsm'
import { activate, deactivate, REST_STORE_FACTORY } from './index'

const konfiguration = {
  resourceUrl: 'https://example.invalid/daten',
  connection: 'verbindung-1',
  type: 'REST',
  name: 'Testquelle',
  uid: 'test-1',
}

describe('lib.datasource.rest', () => {
  let services: DefaultServiceRegistry
  let repositoryAttrappe: { getConnection: (id: string) => unknown }

  beforeEach(async () => {
    /*
     * Der echte Container aus lib.core, nicht ein eigener: der
     * Service-Locator in ComputedStoreParameter greift auf genau diesen zu,
     * ein frischer bliebe für ihn leer. Aufgeräumt wird in afterEach.
     */
    services = new DefaultServiceRegistry()
    repositoryAttrappe = { getConnection: () => ({ getData: async () => ({}) }) }
    services.register(CONNECTION_REPOSITORY, repositoryAttrappe)
    /*
     * `init` legt über `super.initVariable` einen ComputedStoreParameter an,
     * der seinerseits VariableRepository und den Emitter auflöst - noch über
     * den Inversify-Container, nicht über `@inject`. Solange dieser
     * Service-Locator im Klassenrumpf steht, gehören beide zum Aufbau des
     * Tests.
     */
    services.register(VARIABLE_REPOSITORY, { getVariable: () => undefined })
    services.register(TINY_EMITTER, { on() {}, off() {}, emit() {} })
    // Since the locator cleanup, ComputedStoreParameter instances come from
    // lib.variables' activate - the test boots it like the runtime does.
    const variables = await import('org.eclipse.daanse.board.app.lib.variables')
    variables.activate({ services, log: { debug() {}, info() {}, warn() {}, error() {} } })
    activate({ services, log: { debug() {}, info() {}, warn() {}, error() {} } })
  })

  afterEach(() => {
    for (const id of ['ConnectionRepository', 'VariableRepository', 'TINY_EMITTER']) {
      services.unregister(id)
    }
  })

  it('registriert die Factory unter ihrer Dienst-ID', () => {
    expect(services.has(REST_STORE_FACTORY)).toBe(true)
  })

  it('traegt das ConnectionRepository in die erzeugte Instanz ein', () => {
    const factory = services.getRequired<(c: unknown) => any>(REST_STORE_FACTORY)

    const store = factory(konfiguration)

    // Das Feld ist privat; geprüft wird, dass die Injektion es gesetzt hat.
    expect((store as Record<string, unknown>).connectionRepository).toBe(repositoryAttrappe)
  })

  it('liefert bei jedem Aufruf eine eigene Instanz', () => {
    const factory = services.getRequired<(c: unknown) => any>(REST_STORE_FACTORY)

    expect(factory(konfiguration)).not.toBe(factory(konfiguration))
  })

  it('weist eine ungueltige Konfiguration zurueck', () => {
    const factory = services.getRequired<(c: unknown) => any>(REST_STORE_FACTORY)

    expect(() => factory({ kein: 'store' })).toThrow(/Invalid RestStore configuration/)
  })

  it('nimmt die Registrierung in deactivate zurueck', () => {
    deactivate({ services, log: { debug() {}, info() {}, warn() {}, error() {} } })

    expect(services.has(REST_STORE_FACTORY)).toBe(false)
  })
})
