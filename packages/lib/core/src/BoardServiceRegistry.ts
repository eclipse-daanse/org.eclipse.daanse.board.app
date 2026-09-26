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

import { DefaultServiceRegistry } from '@eclipse-daanse/tsm'
import type { ServiceProperties, ServiceRegistration } from '@eclipse-daanse/tsm'
import type { Container } from 'inversify'

/**
 * The application's ServiceRegistry: tsm's `DefaultServiceRegistry` with a
 * fallback path onto the Inversify container.
 *
 * Background: the migration of packages to `activate(ctx)` runs step by
 * step. Already migrated packages register through this registry, the rest
 * still bind straight into the Inversify container. So that a migrated
 * package finds the others' services, an unknown ID is resolved against
 * Inversify once.
 *
 * The fallback path is deliberately built as a dying part: once the last
 * package is migrated it finds nothing anymore and can be removed together
 * with Inversify, without replacement. It is not a permanent layer.
 *
 * Bridge between the namespaces: tsm addresses services by strings, the
 * application so far by `Symbol.for(...)`. Since `Symbol.for` is globally
 * registered, the string ID `'WidgetRepository'` denotes exactly the former
 * `Symbol.for('WidgetRepository')`.
 *
 * Out of the fallback's reach are bindings that use a class itself as the
 * identifier (`container.bind(CsvStore).toSelf()`), because no symbol exists
 * for those. Such bindings are package-internal - what is handed outward is
 * always a factory symbol.
 */
export class BoardServiceRegistry extends DefaultServiceRegistry {
  constructor(private readonly legacyContainer: Container) {
    super()
  }

  /**
   * Registers the service in the Inversify container as well.
   *
   * The fallback path below covers only one direction: a migrated package
   * finds services of the not-yet-migrated ones. The other way around,
   * unmigrated consumers still read via `container.get(Symbol.for(...))` -
   * `DatasourceEditor.vue` does, for the preview and settings components.
   * Without this mirroring they would see nothing once the provider is
   * migrated.
   *
   * Like the fallback path, the mirroring is a transitional part: once the
   * last package is migrated nobody reads from the container anymore, and
   * both go away together.
   */
  override register<T>(
    id: string,
    service: T,
    options: {
      providedBy?: string
      ranking?: number
      properties?: ServiceProperties
    } = {},
  ): ServiceRegistration {
    const registration = super.register(id, service, options)

    const identifier = Symbol.for(id)
    try {
      if (this.legacyContainer.isBound(identifier)) {
        this.legacyContainer.unbind(identifier)
      }
      this.legacyContainer.bind(identifier).toConstantValue(service)
    } catch {
      // The mirroring is a bonus for the transition. If it fails, the
      // registration in this registry stays valid regardless.
    }

    return registration
  }

  /**
   * Withdraws the registration - including the mirrored binding.
   *
   * Without that, the fallback path would kick in right afterwards and keep
   * handing out the service just removed, making `deactivate` ineffective.
   */
  override unregister(id: string): boolean {
    const removed = super.unregister(id)

    const identifier = Symbol.for(id)
    try {
      if (this.legacyContainer.isBound(identifier)) {
        this.legacyContainer.unbind(identifier)
      }
    } catch {
      // see register(): the mirroring is a bonus for the transition
    }

    return removed
  }

  override get<T>(id: string, _resolving?: Set<string>): T | undefined {
    const own = super.get<T>(id, _resolving)
    if (own !== undefined) {
      return own
    }
    return this.getFromLegacyContainer<T>(id)
  }

  override has(id: string): boolean {
    return super.has(id) || this.isBoundInLegacyContainer(id)
  }

  /**
   * Service IDs of both namespaces, without duplicates.
   *
   * Inversify cannot enumerate its bindings; only the IDs of the tsm
   * registry are included. That is enough for the transition, because the
   * enumeration is used diagnostically only.
   */
  override getServiceIds(): string[] {
    return super.getServiceIds()
  }

  private getFromLegacyContainer<T>(id: string): T | undefined {
    const identifier = Symbol.for(id)
    try {
      if (!this.legacyContainer.isBound(identifier)) {
        return undefined
      }
      return this.legacyContainer.get<T>(identifier)
    } catch {
      // The service is bound but its resolution fails - for instance because
      // one of its own dependencies is not registered yet. To the caller
      // that is the same as 'not there'.
      return undefined
    }
  }

  private isBoundInLegacyContainer(id: string): boolean {
    try {
      return this.legacyContainer.isBound(Symbol.for(id))
    } catch {
      return false
    }
  }
}
