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
 * One entry in the application's module list.
 */
export interface ModuleEntry {
  /** Human-readable name, shows up in logs and error messages */
  readonly id: string
  /** Loads the module. The import itself must not have side effects. */
  readonly load: () => Promise<Partial<ActivatableModule>>
  /**
   * Service IDs this module registers in `activate`.
   *
   * The bootstrapper derives the activation order from these - the list no
   * longer needs to be sorted by hand. Matches `provides` in the tsm
   * manifest.
   */
  readonly provides?: readonly string[]
  /**
   * Service IDs this module resolves in `activate`.
   *
   * Services no module of the list provides count as external: they come
   * from not-yet-migrated packages through the registry's fallback path and
   * do not influence the order. Matches `requiresService` in the tsm
   * manifest.
   */
  readonly requires?: readonly string[]
  /**
   * An optional module may fail without aborting startup. Defaults to
   * `false`: a required module that cannot be activated aborts the start.
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
 * Activates modules and awaits each one.
 *
 * The order is derived from the entries' `provides`/`requires` declarations,
 * not taken from the list: a module runs after those whose services it
 * resolves. Where no dependency exists, list order is preserved - the widget
 * palette keeps its sorting.
 *
 * Services no entry provides count as external: they come from
 * not-yet-migrated packages and are resolved through the registry's fallback
 * path.
 *
 * Asynchronous activation is awaited - previously `loadPackages()` ran
 * without `await` next to synchronously following code, which only worked by
 * timing.
 *
 * Errors are not swallowed: a required module that cannot be activated aborts
 * the start with the original cause attached. Only modules marked `optional`
 * are logged and skipped.
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

    for (const entry of this.orderOf(entries)) {
      try {
        const module = (await entry.load()) as ActivatableModule

        if (typeof module.activate !== 'function') {
          throw new Error(`Module "${entry.id}" does not export an activate function`)
        }

        await module.activate(this.contextFor(entry))
        this.activated.push({ entry, module })
        activated.push(entry.id)
      } catch (error) {
        if (!entry.optional) {
          throw new Error(`Module "${entry.id}" could not be activated`, { cause: error })
        }
        this.log.warn(`optional module "${entry.id}" skipped`, error)
        failed.push({ id: entry.id, error })
      }
    }

    return { activated, failed }
  }

  /**
   * Deactivates all activated modules in reverse order, so dependents are
   * torn down before their dependencies.
   *
   * A failure while deactivating does not abort the run - otherwise the rest
   * of the modules would be left in a half-dismantled state.
   */
  async deactivateAll(): Promise<ActivationFailure[]> {
    const failed: ActivationFailure[] = []

    for (const { entry, module } of [...this.activated].reverse()) {
      if (typeof module.deactivate !== 'function') continue
      try {
        await module.deactivate(this.contextFor(entry))
      } catch (error) {
        this.log.error(`Module "${entry.id}" could not be deactivated`, error)
        failed.push({ id: entry.id, error })
      }
    }

    this.activated.length = 0
    return failed
  }

  /**
   * Brings the entries into an order in which every module runs after the
   * modules whose services it resolves.
   *
   * Stable: entries without a dependency between them keep their relative
   * list order. A cycle aborts naming the modules involved instead of picking
   * an arbitrary order.
   */
  private orderOf(entries: readonly ModuleEntry[]): ModuleEntry[] {
    const providers = new Map<string, ModuleEntry>()
    for (const entry of entries) {
      for (const service of entry.provides ?? []) {
        providers.set(service, entry)
      }
    }

    const ordered: ModuleEntry[] = []
    const done = new Set<ModuleEntry>()
    const inProgress = new Set<ModuleEntry>()

    const insert = (entry: ModuleEntry, path: readonly ModuleEntry[]): void => {
      if (done.has(entry)) return
      if (inProgress.has(entry)) {
        const cycle = [...path.slice(path.indexOf(entry)), entry].map(e => e.id)
        throw new Error(`Cyclic module dependency: ${cycle.join(' -> ')}`)
      }

      inProgress.add(entry)
      for (const service of entry.requires ?? []) {
        const provider = providers.get(service)
        // No provider in the list: external service, no influence on the order
        if (provider && provider !== entry) {
          insert(provider, [...path, entry])
        }
      }
      inProgress.delete(entry)

      done.add(entry)
      ordered.push(entry)
    }

    for (const entry of entries) {
      insert(entry, [])
    }
    return ordered
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
