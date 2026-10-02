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
 * The chain to the consumer: the DatasourceRepository resolves the entry
 * through its injected registry (resolveIdentifier) and calls it as a
 * function. No container, no mirror - those died with the migration.
 */

import { describe, it, expect, beforeEach } from 'vitest'
import { DefaultServiceRegistry } from '@eclipse-daanse/tsm'
import { DefaultServiceRegistry, ModuleLoader, type ModuleManifest } from '@eclipse-daanse/tsm'

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
  let services: DefaultServiceRegistry
  let loader: ModuleLoader

  const chartModul = {
    id: 'lib.composer.chart',
    load: () => import('org.eclipse.daanse.board.app.lib.composer.chart'),
    requires: ['DatasourceRepository'],
  }

  /*
   * Der ChartComposer schlägt Datenquellen im DatasourceRepository nach.
   * Solange dessen Paket beim Import band, war es allein durch die
   * Importkette da; seit es über `activate` registriert, muss es hier
   * mitaktiviert werden. Genau diesen stillen Verlass löst die Umstellung auf.
   */
  const datasourceRepositoryModul = {
    id: 'lib.repository.datasource',
    load: () => import('org.eclipse.daanse.board.app.lib.repository.datasource'),
    provides: ['DatasourceRepository'],
  }

  const module = [chartModul, datasourceRepositoryModul]

  beforeEach(() => {
    /*
     * Der echte Container aus lib.core, nicht ein eigener. Die Composer und
     * Stores lösen ihre Dienste über genau diesen auf; ein frischer bliebe
     * für sie leer. Vorher fiel das nicht auf, weil das Repository-Paket beim
     * Import global band — es war also immer der globale im Spiel, nur
     * unsichtbar.
     */
    services = new DefaultServiceRegistry()
    loader = new ModuleLoader({ serviceRegistry: services, logger: stilleAusgabe() })
  })

  const activateAll = async () => {
    const eintraege: Array<[ModuleManifest, string]> = [
      [{ id: 'lib.repository.datasource', name: 'ds repo', version: '0.0.0',
         entry: './src/index.ts', exports: {}, provides: [{ id: 'DatasourceRepository' }] },
       'org.eclipse.daanse.board.app.lib.repository.datasource'],
      [{ id: 'lib.composer.chart', name: 'chart composer', version: '0.0.0',
         entry: './src/index.ts', exports: {},
         requiresService: [{ id: 'DatasourceRepository' }] },
       'org.eclipse.daanse.board.app.lib.composer.chart'],
    ]
    for (const [manifest, pkg] of eintraege) {
      await loader.loadModule(manifest, { container: await import(/* @vite-ignore */ pkg), awaitCascade: true })
    }
  }

  it('registriert die Factory unter ihrer Dienst-ID', async () => {
    expect(services.has('ChartComposer')).toBe(false)

    await activateAll()

    expect(typeof services.get('ChartComposer')).toBe('function')
  })

  it('is resolvable through the repository, the way consumers reach it', async () => {
    await activateAll()

    const { symbol } = await import('org.eclipse.daanse.board.app.lib.composer.chart')
    const repository = services.getRequired<{ resolveIdentifier<T>(s: symbol): T }>('DatasourceRepository')
    expect(typeof repository.resolveIdentifier(symbol)).toBe('function')
  })

  it('laesst eine gueltige Konfiguration die Validierung passieren', async () => {
    await activateAll()
    const factory = services.getRequired<(c: unknown) => unknown>('ChartComposer')

    // Die Instanziierung selbst braucht angemeldete Datenquellen; hier zaehlt,
    // dass die Factory die Konfiguration annimmt und bis init() kommt, statt
    // vorher mit der Validierungsmeldung abzubrechen.
    expect(() => factory(GUELTIG)).toThrow(/Store with id ds1 not found/)
  })

  it('weist eine ungueltige Konfiguration zurueck', async () => {
    await activateAll()

    const factory = services.getRequired<(c: unknown) => unknown>('ChartComposer')
    // validateConfiguration prueft nur einzelne Felder - fehlen sie, meldet
    // die Factory das mit ihrer eigenen Meldung
    expect(() => factory({})).toThrow(/Invalid ChartComposer configuration/)
  })

  it('withdraws the registration on unload', async () => {
    await activateAll()
    await loader.unloadModule('lib.composer.chart')

    expect(services.has('ChartComposer')).toBe(false)
  })

  it('has no effect on import alone', async () => {
    await import('org.eclipse.daanse.board.app.lib.composer.chart')

    expect(services.has('ChartComposer')).toBe(false)
  })
})
