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
 * Der Bootstrapper ersetzt die nebenwirkungsgetriebenen Importe in main.ts.
 * Zugesichert wird vor allem, was dort bisher nicht galt: eine feste
 * Reihenfolge, Warten auf asynchrone Aktivierung, und dass ein
 * fehlgeschlagenes Pflichtmodul den Start abbricht statt still weiterzulaufen.
 */

import { describe, it, expect, beforeEach } from 'vitest'
import { Container } from 'inversify'
import { BoardServiceRegistry } from './BoardServiceRegistry'
import { ModuleBootstrapper, type ModuleEntry } from './ModuleBootstrapper'

const stilleAusgabe = () => ({
  debug: () => {},
  info: () => {},
  warn: () => {},
  error: () => {},
})

describe('ModuleBootstrapper', () => {
  let services: BoardServiceRegistry
  let bootstrapper: ModuleBootstrapper

  beforeEach(() => {
    services = new BoardServiceRegistry(new Container())
    bootstrapper = new ModuleBootstrapper(services, stilleAusgabe())
  })

  it('behaelt die Listenreihenfolge, wo keine Abhaengigkeit besteht', async () => {
    const reihenfolge: string[] = []
    const modul = (id: string): ModuleEntry => ({
      id,
      load: async () => ({ activate: () => { reihenfolge.push(id) } }),
    })

    await bootstrapper.activateAll([modul('a'), modul('b'), modul('c')])

    expect(reihenfolge).toEqual(['a', 'b', 'c'])
  })

  it('wartet auf asynchrone Aktivierung, bevor das naechste Modul startet', async () => {
    const reihenfolge: string[] = []
    const langsam: ModuleEntry = {
      id: 'langsam',
      load: async () => ({
        activate: async () => {
          await new Promise((r) => setTimeout(r, 20))
          reihenfolge.push('langsam')
        },
      }),
    }
    const schnell: ModuleEntry = {
      id: 'schnell',
      load: async () => ({ activate: () => { reihenfolge.push('schnell') } }),
    }

    await bootstrapper.activateAll([langsam, schnell])

    // Genau die Zusicherung, die main.ts bisher fehlte
    expect(reihenfolge).toEqual(['langsam', 'schnell'])
  })

  it('reicht den Dienstzugriff an das Modul durch', async () => {
    services.register('Repository', { eintraege: [] as string[] })

    await bootstrapper.activateAll([
      {
        id: 'nutzer',
        load: async () => ({
          activate: ({ services: s }) => {
            s.getRequired<{ eintraege: string[] }>('Repository').eintraege.push('x')
          },
        }),
      },
    ])

    expect(services.getRequired<{ eintraege: string[] }>('Repository').eintraege).toEqual(['x'])
  })

  it('bricht ab, wenn ein Pflichtmodul fehlschlaegt', async () => {
    const danach: string[] = []

    await expect(
      bootstrapper.activateAll([
        { id: 'kaputt', load: async () => ({ activate: () => { throw new Error('Ursache') } }) },
        { id: 'danach', load: async () => ({ activate: () => { danach.push('lief') } }) },
      ]),
    ).rejects.toThrow(/kaputt/)

    // Kein stilles Weiterlaufen mit halb initialisiertem Zustand
    expect(danach).toEqual([])
  })

  it('nennt die urspruengliche Ursache als cause', async () => {
    const ursache = new Error('Dienst fehlt')

    await expect(
      bootstrapper.activateAll([
        { id: 'kaputt', load: async () => ({ activate: () => { throw ursache } }) },
      ]),
    ).rejects.toMatchObject({ cause: ursache })
  })

  it('ueberspringt ein optionales Modul und laeuft weiter', async () => {
    const danach: string[] = []

    const ergebnis = await bootstrapper.activateAll([
      {
        id: 'optional-kaputt',
        optional: true,
        load: async () => ({ activate: () => { throw new Error('egal') } }),
      },
      { id: 'danach', load: async () => ({ activate: () => { danach.push('lief') } }) },
    ])

    expect(danach).toEqual(['lief'])
    expect(ergebnis.activated).toEqual(['danach'])
    expect(ergebnis.failed.map((f) => f.id)).toEqual(['optional-kaputt'])
  })

  it('weist ein Modul ohne activate zurueck', async () => {
    await expect(
      bootstrapper.activateAll([{ id: 'leer', load: async () => ({}) }]),
    ).rejects.toThrow(/leer/)
  })

  it('deaktiviert in umgekehrter Reihenfolge', async () => {
    const reihenfolge: string[] = []
    const modul = (id: string): ModuleEntry => ({
      id,
      load: async () => ({
        activate: () => {},
        deactivate: () => { reihenfolge.push(id) },
      }),
    })

    await bootstrapper.activateAll([modul('a'), modul('b'), modul('c')])
    await bootstrapper.deactivateAll()

    expect(reihenfolge).toEqual(['c', 'b', 'a'])
  })

  it('deaktiviert die uebrigen Module weiter, wenn eines dabei scheitert', async () => {
    const reihenfolge: string[] = []

    await bootstrapper.activateAll([
      {
        id: 'a',
        load: async () => ({ activate: () => {}, deactivate: () => { reihenfolge.push('a') } }),
      },
      {
        id: 'b',
        load: async () => ({ activate: () => {}, deactivate: () => { throw new Error('nope') } }),
      },
    ])
    const fehler = await bootstrapper.deactivateAll()

    expect(reihenfolge).toEqual(['a'])
    expect(fehler.map((f) => f.id)).toEqual(['b'])
  })

  it('deaktiviert nur, was auch aktiviert wurde', async () => {
    const reihenfolge: string[] = []

    await bootstrapper.activateAll([
      {
        id: 'ok',
        load: async () => ({ activate: () => {}, deactivate: () => { reihenfolge.push('ok') } }),
      },
      {
        id: 'optional-kaputt',
        optional: true,
        load: async () => ({
          activate: () => { throw new Error('egal') },
          deactivate: () => { reihenfolge.push('darf-nicht') },
        }),
      },
    ])
    await bootstrapper.deactivateAll()

    expect(reihenfolge).toEqual(['ok'])
  })

  describe('Reihenfolge aus Deklarationen', () => {
    const protokollierend = (
      id: string,
      reihenfolge: string[],
      rest: Partial<ModuleEntry> = {},
    ): ModuleEntry => ({
      id,
      load: async () => ({ activate: () => { reihenfolge.push(id) } }),
      ...rest,
    })

    it('aktiviert den Anbieter vor seinem Konsumenten, egal wie die Liste sortiert ist', async () => {
      const reihenfolge: string[] = []

      await bootstrapper.activateAll([
        protokollierend('widget', reihenfolge, { requires: ['WidgetRepository'] }),
        protokollierend('registry', reihenfolge, { provides: ['WidgetRepository'] }),
      ])

      expect(reihenfolge).toEqual(['registry', 'widget'])
    })

    it('ordnet ueber mehrere Stufen hinweg', async () => {
      const reihenfolge: string[] = []

      await bootstrapper.activateAll([
        protokollierend('c', reihenfolge, { requires: ['B'] }),
        protokollierend('b', reihenfolge, { provides: ['B'], requires: ['A'] }),
        protokollierend('a', reihenfolge, { provides: ['A'] }),
      ])

      expect(reihenfolge).toEqual(['a', 'b', 'c'])
    })

    /*
     * Der eigentliche Beweis: Wenn die Reihenfolge aus den Deklarationen
     * folgt, darf die Reihenfolge der Liste beliebig sein. Geprueft ueber
     * alle Permutationen, damit kein Zufall durchrutscht.
     */
    it('kommt bei jeder Permutation der Liste zum selben Ergebnis', async () => {
      const permutationen = <T,>(xs: T[]): T[][] =>
        xs.length <= 1
          ? [xs]
          : xs.flatMap((x, i) =>
              permutationen([...xs.slice(0, i), ...xs.slice(i + 1)]).map((rest) => [x, ...rest]),
            )

      for (const reihe of permutationen(['registry', 'layout', 'widget'])) {
        const reihenfolge: string[] = []
        const bauplan: Record<string, Partial<ModuleEntry>> = {
          registry: { provides: ['WidgetRepository'] },
          layout: { provides: ['LayoutRepository'], requires: ['WidgetRepository'] },
          widget: { requires: ['WidgetRepository', 'LayoutRepository'] },
        }

        const eigener = new ModuleBootstrapper(new BoardServiceRegistry(new Container()), stilleAusgabe())
        await eigener.activateAll(reihe.map((id) => protokollierend(id, reihenfolge, bauplan[id])))

        expect(reihenfolge, `Eingabe: ${reihe.join(', ')}`).toEqual(['registry', 'layout', 'widget'])
      }
    })

    /*
     * Waehrend der Umstellung stammen die meisten Dienste noch aus nicht
     * migrierten Paketen. Die duerfen die Sortierung nicht blockieren -
     * sie kommen ueber den Rueckfallweg der Registry.
     */
    it('ignoriert Dienste, die kein Modul der Liste bereitstellt', async () => {
      const reihenfolge: string[] = []

      const { activated } = await bootstrapper.activateAll([
        protokollierend('a', reihenfolge, { requires: ['EventRegistry', 'I18next'] }),
        protokollierend('b', reihenfolge, { requires: ['DatasourceRepository'] }),
      ])

      expect(activated).toEqual(['a', 'b'])
      expect(reihenfolge).toEqual(['a', 'b'])
    })

    it('meldet einen Zyklus mit den beteiligten Modulen, statt willkuerlich zu sortieren', async () => {
      const reihenfolge: string[] = []

      await expect(
        bootstrapper.activateAll([
          protokollierend('a', reihenfolge, { provides: ['A'], requires: ['B'] }),
          protokollierend('b', reihenfolge, { provides: ['B'], requires: ['A'] }),
        ]),
      ).rejects.toThrow(/Zyklische Modulabhaengigkeit|Zyklische Modulabhängigkeit/)

      expect(reihenfolge).toEqual([])
    })

    it('stoert sich nicht an einem Modul, das seinen eigenen Dienst aufloest', async () => {
      const reihenfolge: string[] = []

      await bootstrapper.activateAll([
        protokollierend('selbst', reihenfolge, { provides: ['X'], requires: ['X'] }),
      ])

      expect(reihenfolge).toEqual(['selbst'])
    })

    it('baut in umgekehrter Aktivierungsreihenfolge ab, nicht in Listenreihenfolge', async () => {
      const reihenfolge: string[] = []
      const modul = (id: string, rest: Partial<ModuleEntry>): ModuleEntry => ({
        id,
        load: async () => ({
          activate: () => {},
          deactivate: () => { reihenfolge.push(id) },
        }),
        ...rest,
      })

      await bootstrapper.activateAll([
        modul('konsument', { requires: ['R'] }),
        modul('anbieter', { provides: ['R'] }),
      ])
      await bootstrapper.deactivateAll()

      expect(reihenfolge).toEqual(['konsument', 'anbieter'])
    })
  })
})
