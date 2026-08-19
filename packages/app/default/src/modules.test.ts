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
 * Prüft die echte Modulliste — nicht Attrappen. Der Bootstrapper-Test zeigt,
 * dass die Sortierung funktioniert; dieser hier zeigt, dass die Deklarationen
 * in modules.ts vollständig genug sind, damit sie greifen kann.
 *
 * `load` wird dabei nie aufgerufen: geprüft werden nur die Deklarationen, die
 * Pakete selbst bleiben ungeladen.
 */

import { describe, it, expect } from 'vitest'
import type { ModuleEntry } from 'org.eclipse.daanse.board.app.lib.core'
import { modules } from './modules'

const anbieterVon = (liste: readonly ModuleEntry[]) => {
  const anbieter = new Map<string, string>()
  for (const m of liste) {
    for (const d of m.provides ?? []) anbieter.set(d, m.id)
  }
  return anbieter
}

/**
 * Stellt fest, welche Module nach ihrem Lieferanten aktiviert werden müssten,
 * es aber nicht werden. Leer heißt: die Reihenfolge trägt.
 */
const verletzungen = (folge: readonly string[], liste: readonly ModuleEntry[]) => {
  const platz = new Map(folge.map((id, i) => [id, i]))
  const anbieter = anbieterVon(liste)
  return liste.flatMap((m) =>
    (m.requires ?? [])
      .map((d) => ({ d, lieferant: anbieter.get(d) }))
      .filter(({ lieferant }) => lieferant && lieferant !== m.id)
      .filter(({ lieferant }) => platz.get(lieferant!)! > platz.get(m.id)!)
      .map(({ d, lieferant }) => `${m.id} braucht ${d} von ${lieferant}, das erst später läuft`),
  )
}

/** Baut dieselbe Reihenfolge wie ModuleBootstrapper.reihenfolge(). */
const aktivierungsfolge = (liste: readonly ModuleEntry[] = modules) => {
  const anbieter = anbieterVon(liste)

  const folge: string[] = []
  const fertig = new Set<string>()
  const imGang = new Set<string>()
  const nachId = new Map(liste.map((m) => [m.id, m]))

  const ein = (id: string) => {
    if (fertig.has(id)) return
    expect(imGang.has(id), `Zyklus bei ${id}`).toBe(false)
    imGang.add(id)
    for (const d of nachId.get(id)!.requires ?? []) {
      const l = anbieter.get(d)
      if (l && l !== id) ein(l)
    }
    imGang.delete(id)
    fertig.add(id)
    folge.push(id)
  }

  for (const m of liste) ein(m.id)
  return folge
}

describe('modules.ts', () => {
  it('vergibt jede Modul-ID nur einmal', () => {
    const ids = modules.map((m) => m.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('vergibt jeden Dienst nur einmal', () => {
    const angeboten = modules.flatMap((m) => m.provides ?? [])
    const doppelt = angeboten.filter((d, i) => angeboten.indexOf(d) !== i)
    expect(doppelt).toEqual([])
  })

  it('ist zyklenfrei und aktiviert jeden Anbieter vor seinen Konsumenten', () => {
    const folge = aktivierungsfolge()

    expect(folge.length).toBe(modules.length)
    expect(verletzungen(folge, modules)).toEqual([])
  })

  /*
   * Der eigentliche Punkt der Umstellung: Die Datei darf beliebig sortiert
   * sein. Ginge das nicht, wäre die Liste weiterhin handsortiert - nur ohne
   * die Kommentare, die das früher wenigstens sichtbar gemacht haben.
   */
  it('kommt bei umgekehrter Listenreihenfolge zur gleichen Aktivierungsfolge', () => {
    const umgekehrt = [...modules].reverse()

    expect(verletzungen(aktivierungsfolge(umgekehrt), umgekehrt)).toEqual([])
    expect(new Set(aktivierungsfolge(umgekehrt))).toEqual(new Set(aktivierungsfolge()))
  })

  /*
   * Dienste ohne Anbieter in der Liste stammen aus noch nicht umgestellten
   * Paketen und kommen über den Rückfallweg der BoardServiceRegistry. Der
   * Test hält fest, welche das sind - schrumpft die Liste auf leer, kann der
   * Rückfallweg samt Inversify entfallen.
   */
  it('loest die uebrigen Dienste ueber den Rueckfallweg auf', () => {
    const angeboten = new Set(modules.flatMap((m) => m.provides ?? []))
    const extern = [...new Set(modules.flatMap((m) => m.requires ?? []))]
      .filter((d) => !angeboten.has(d))
      .sort()

    expect(extern).toEqual([
      'App',
      'EventActionsRegistry',
      'EventRegistry',
      'TINY_EMITTER',
    ])
  })
})
