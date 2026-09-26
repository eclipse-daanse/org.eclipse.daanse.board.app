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
 * Das Factory-Muster nach der Umstellung.
 *
 * Vorher banden diese Pakete zweierlei: die Klasse selbst (nur intern
 * gebraucht) und ein Factory-Symbol nach außen. Da die Klassen parameterlose
 * Konstruktoren haben und keine Decorators tragen, war die Klassenbindung ein
 * Umweg über den Container — sie entfällt, die Factory ruft direkt `new`.
 *
 * Entscheidend ist die Kette bis zum Konsumenten: das DatasourceRepository
 * löst den Eintrag über `container.get(identifiers.Store)` auf und ruft ihn
 * als Funktion. Das funktioniert nur, weil die Registry ihre Einträge in den
 * Container spiegelt.
 */

import { describe, it, expect, beforeEach } from 'vitest'
import { Container } from 'inversify'
import { BoardServiceRegistry, ModuleBootstrapper } from 'org.eclipse.daanse.board.app.lib.core'

/** Minimal gueltige Konfiguration - validateConfiguration prueft genau diese vier Felder. */
const GUELTIG = {
  connectedDatasources: ['ds1'],
  labelColumn: 'label',
  usedSets: ['set1'],
  composeBy: 'row',
}

const stilleAusgabe = () => ({
  debug: () => {}, info: () => {}, warn: () => {}, error: () => {},
})

describe('Composer-Factory', () => {
  let container: Container
  let services: BoardServiceRegistry
  let bootstrapper: ModuleBootstrapper

  const chartModul = {
    id: 'lib.composer.chart',
    load: () => import('org.eclipse.daanse.board.app.lib.composer.chart'),
  }

  beforeEach(() => {
    container = new Container()
    services = new BoardServiceRegistry(container)
    bootstrapper = new ModuleBootstrapper(services, stilleAusgabe())
  })

  it('registriert die Factory unter ihrer Dienst-ID', async () => {
    expect(services.has('ChartComposer')).toBe(false)

    await bootstrapper.activateAll([chartModul])

    expect(typeof services.get('ChartComposer')).toBe('function')
  })

  it('ist ueber das Symbol im Container auffindbar', async () => {
    // Genau so löst das DatasourceRepository den 'Store'-Eintrag auf
    await bootstrapper.activateAll([chartModul])

    const { symbol } = await import('org.eclipse.daanse.board.app.lib.composer.chart')
    expect(typeof container.get(symbol)).toBe('function')
  })

  it('laesst eine gueltige Konfiguration die Validierung passieren', async () => {
    await bootstrapper.activateAll([chartModul])
    const { symbol } = await import('org.eclipse.daanse.board.app.lib.composer.chart')
    const factory = container.get(symbol) as (c: unknown) => unknown

    // Die Instanziierung selbst braucht angemeldete Datenquellen; hier zaehlt,
    // dass die Factory die Konfiguration annimmt und bis init() kommt, statt
    // vorher mit der Validierungsmeldung abzubrechen.
    expect(() => factory(GUELTIG)).toThrow(/Store with id ds1 not found/)
  })

  it('weist eine ungueltige Konfiguration zurueck', async () => {
    await bootstrapper.activateAll([chartModul])
    const { symbol } = await import('org.eclipse.daanse.board.app.lib.composer.chart')

    const factory = container.get(symbol) as (c: unknown) => unknown
    // validateConfiguration prueft nur einzelne Felder - fehlen sie, meldet
    // die Factory das mit ihrer eigenen Meldung
    expect(() => factory({})).toThrow(/Invalid ChartComposer configuration/)
  })

  it('nimmt die Registrierung beim Deaktivieren zurueck', async () => {
    const { symbol } = await import('org.eclipse.daanse.board.app.lib.composer.chart')

    await bootstrapper.activateAll([chartModul])
    await bootstrapper.deactivateAll()

    expect(services.has('ChartComposer')).toBe(false)
    expect(container.isBound(symbol)).toBe(false)
  })

  it('hat beim Import keine Wirkung', async () => {
    await import('org.eclipse.daanse.board.app.lib.composer.chart')

    expect(services.has('ChartComposer')).toBe(false)
  })
})
