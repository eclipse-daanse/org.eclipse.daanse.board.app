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
import type { Container } from 'inversify'

/**
 * Die ServiceRegistry der Anwendung: `DefaultServiceRegistry` von tsm mit
 * einem Rückfallweg auf den Inversify-Container.
 *
 * Hintergrund: Die Umstellung der Pakete auf `activate(ctx)` läuft
 * schrittweise. Bereits umgestellte Pakete registrieren über diese Registry,
 * noch nicht umgestellte binden weiterhin direkt in den Inversify-Container.
 * Damit ein umgestelltes Paket die Dienste der übrigen findet, wird eine
 * unbekannte ID einmal gegen Inversify aufgelöst.
 *
 * Der Rückfallweg ist bewusst als absterbendes Bauteil angelegt: Wenn das
 * letzte Paket umgestellt ist, findet er nichts mehr und kann samt Inversify
 * ersatzlos entfallen. Er ist keine dauerhafte Schicht.
 *
 * Brücke zwischen den Namensräumen: tsm adressiert Dienste über Strings, die
 * Anwendung bisher über `Symbol.for(...)`. Da `Symbol.for` global registriert
 * ist, entspricht die String-ID `'WidgetRepository'` genau dem bisherigen
 * `Symbol.for('WidgetRepository')`.
 *
 * Nicht erreichbar ist der Rückfallweg für Bindungen, die eine Klasse selbst
 * als Identifier verwenden (`container.bind(CsvStore).toSelf()`), weil dafür
 * kein Symbol existiert. Solche Bindungen sind paketintern - nach außen
 * gereicht wird jeweils ein Factory-Symbol.
 */
export class BoardServiceRegistry extends DefaultServiceRegistry {
  constructor(private readonly legacyContainer: Container) {
    super()
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
   * Dienst-IDs beider Namensräume, ohne Doppelnennungen.
   *
   * Inversify kennt keine Aufzählung seiner Bindungen; enthalten sind
   * deshalb nur die IDs aus der tsm-Registry. Für den Übergang genügt das,
   * weil die Aufzählung nur diagnostisch verwendet wird.
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
      // Der Dienst ist gebunden, seine Auflösung schlägt aber fehl - etwa
      // weil eine seiner eigenen Abhängigkeiten noch nicht registriert ist.
      // Für den Aufrufer ist das dasselbe wie 'nicht vorhanden'.
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
