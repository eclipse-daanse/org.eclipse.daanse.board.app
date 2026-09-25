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
 * Aktiviert Module in der angegebenen Reihenfolge und wartet auf jedes.
 *
 * Damit ist die Startreihenfolge explizit und nicht mehr eine Folge davon, in
 * welcher Zeile ein Import steht. Vor allem wird auf asynchrone Aktivierung
 * gewartet — bisher lief `loadPackages()` ohne `await` neben dem synchron
 * folgenden Code, was nur durch Timing gutging.
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

    for (const entry of entries) {
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
