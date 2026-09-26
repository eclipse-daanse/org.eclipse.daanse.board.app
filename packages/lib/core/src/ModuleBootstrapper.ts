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

import type { ServiceRegistry, ModuleLogger } from '@eclipse-daanse/tsm'
import type { ActivationContext, ActivatableModule } from './api/ActivationContext'

/**
 * Ein Eintrag in der Modulliste der Anwendung.
 */
export interface ModuleEntry {
  /** Sprechender Name, erscheint in Protokoll und Fehlermeldungen */
  readonly id: string
  /** Lädt das Modul. Der Import selbst darf keine Wirkung haben. */
  readonly load: () => Promise<Partial<ActivatableModule>>
  /**
   * Dienst-IDs, die dieses Modul in `activate` registriert.
   *
   * Daraus leitet der Bootstrapper die Aktivierungsreihenfolge ab — die Liste
   * muss deshalb nicht mehr von Hand sortiert werden. Entspricht `provides`
   * im tsm-Manifest.
   */
  readonly provides?: readonly string[]
  /**
   * Dienst-IDs, die dieses Modul in `activate` auflöst.
   *
   * Dienste, die kein Modul der Liste bereitstellt, gelten als extern: sie
   * kommen aus noch nicht umgestellten Paketen und werden über den
   * Rückfallweg der Registry aufgelöst. Sie beeinflussen die Reihenfolge
   * nicht. Entspricht `requiresService` im tsm-Manifest.
   */
  readonly requires?: readonly string[]
  /**
   * Ein optionales Modul darf fehlschlagen, ohne den Start abzubrechen.
   * Voreinstellung ist `false`: ein Pflichtmodul, das nicht aktiviert werden
   * kann, bricht den Start ab.
   */
  readonly optional?: boolean
}

export interface ActivationFailure {
  readonly id: string
  readonly error: unknown
}

export interface BootstrapResult {
  readonly activated: string[]
  readonly failed: ActivationFailure[]
}

/**
 * Aktiviert Module und wartet auf jedes einzelne.
 *
 * Die Reihenfolge wird aus den `provides`/`requires`-Angaben der Einträge
 * abgeleitet, nicht der Liste entnommen: Ein Modul läuft nach denen, deren
 * Dienste es auflöst. Wo keine Abhängigkeit besteht, bleibt die Reihenfolge
 * der Liste erhalten — die Widget-Palette behält also ihre Sortierung.
 *
 * Dienste, die kein Eintrag bereitstellt, gelten als extern: sie stammen aus
 * noch nicht umgestellten Paketen und werden über den Rückfallweg der
 * Registry aufgelöst.
 *
 * Auf asynchrone Aktivierung wird gewartet — bisher lief `loadPackages()`
 * ohne `await` neben dem synchron folgenden Code, was nur durch Timing
 * gutging.
 *
 * Fehler werden nicht verschluckt: ein Pflichtmodul, das nicht aktiviert
 * werden kann, bricht den Start mit der ursprünglichen Ursache ab. Nur als
 * `optional` gekennzeichnete Module werden protokolliert und übersprungen.
 */
export class ModuleBootstrapper {
  private readonly activated: Array<{ entry: ModuleEntry; module: ActivatableModule }> = []

  constructor(
    private readonly services: ServiceRegistry,
    private readonly log: ModuleLogger,
  ) {}

  async activateAll(entries: readonly ModuleEntry[]): Promise<BootstrapResult> {
    const activated: string[] = []
    const failed: ActivationFailure[] = []

    for (const entry of this.reihenfolge(entries)) {
      try {
        const module = (await entry.load()) as ActivatableModule

        if (typeof module.activate !== 'function') {
          throw new Error(`Modul "${entry.id}" exportiert keine activate-Funktion`)
        }

        await module.activate(this.contextFor(entry))
        this.activated.push({ entry, module })
        activated.push(entry.id)
      } catch (error) {
        if (!entry.optional) {
          throw new Error(`Modul "${entry.id}" konnte nicht aktiviert werden`, { cause: error })
        }
        this.log.warn(`optionales Modul "${entry.id}" übersprungen`, error)
        failed.push({ id: entry.id, error })
      }
    }

    return { activated, failed }
  }

  /**
   * Deaktiviert alle aktivierten Module in umgekehrter Reihenfolge, damit
   * Abhängige vor ihren Abhängigkeiten abgebaut werden.
   *
   * Ein Fehler beim Deaktivieren bricht den Vorgang nicht ab — sonst bliebe
   * der Rest der Module in einem halb abgebauten Zustand zurück.
   */
  async deactivateAll(): Promise<ActivationFailure[]> {
    const failed: ActivationFailure[] = []

    for (const { entry, module } of [...this.activated].reverse()) {
      if (typeof module.deactivate !== 'function') continue
      try {
        await module.deactivate(this.contextFor(entry))
      } catch (error) {
        this.log.error(`Modul "${entry.id}" konnte nicht deaktiviert werden`, error)
        failed.push({ id: entry.id, error })
      }
    }

    this.activated.length = 0
    return failed
  }

  /**
   * Bringt die Einträge in eine Reihenfolge, in der jedes Modul nach den
   * Modulen steht, deren Dienste es auflöst.
   *
   * Stabil: Einträge ohne Abhängigkeit zueinander behalten ihre relative
   * Reihenfolge aus der Liste. Ein Zyklus bricht mit den beteiligten Modulen
   * ab, statt eine willkürliche Reihenfolge zu wählen.
   */
  private reihenfolge(entries: readonly ModuleEntry[]): ModuleEntry[] {
    const anbieter = new Map<string, ModuleEntry>()
    for (const entry of entries) {
      for (const dienst of entry.provides ?? []) {
        anbieter.set(dienst, entry)
      }
    }

    const geordnet: ModuleEntry[] = []
    const fertig = new Set<ModuleEntry>()
    const imGang = new Set<ModuleEntry>()

    const einfuegen = (entry: ModuleEntry, pfad: readonly ModuleEntry[]): void => {
      if (fertig.has(entry)) return
      if (imGang.has(entry)) {
        const zyklus = [...pfad.slice(pfad.indexOf(entry)), entry].map(e => e.id)
        throw new Error(`Zyklische Modulabhängigkeit: ${zyklus.join(' -> ')}`)
      }

      imGang.add(entry)
      for (const dienst of entry.requires ?? []) {
        const lieferant = anbieter.get(dienst)
        // Kein Lieferant in der Liste: externer Dienst, kein Einfluss auf die Reihenfolge
        if (lieferant && lieferant !== entry) {
          einfuegen(lieferant, [...pfad, entry])
        }
      }
      imGang.delete(entry)

      fertig.add(entry)
      geordnet.push(entry)
    }

    for (const entry of entries) {
      einfuegen(entry, [])
    }
    return geordnet
  }

  private contextFor(entry: ModuleEntry): ActivationContext {
    return {
      services: this.services,
      log: this.prefixedLogger(entry.id),
    }
  }

  private prefixedLogger(id: string): ModuleLogger {
    const prefix = `[${id}]`
    return {
      debug: (msg: string, ...args: unknown[]) => this.log.debug(`${prefix} ${msg}`, ...args),
      info: (msg: string, ...args: unknown[]) => this.log.info(`${prefix} ${msg}`, ...args),
      warn: (msg: string, ...args: unknown[]) => this.log.warn(`${prefix} ${msg}`, ...args),
      error: (msg: string, ...args: unknown[]) => this.log.error(`${prefix} ${msg}`, ...args),
    }
  }
}
