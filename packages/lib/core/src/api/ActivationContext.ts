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

/**
 * Kontext, den ein Paket bei Aktivierung und Deaktivierung erhält.
 *
 * Die Felder sind eine Teilmenge des `ModuleContext` von tsm, sodass ein
 * Paket, das gegen diesen Vertrag geschrieben ist, später unverändert von
 * tsm aktiviert werden kann.
 */
export interface ActivationContext {
  /** Dienste registrieren und auflösen */
  readonly services: ServiceRegistry
  /** Logger, auf das aktivierte Modul vorbeschriftet */
  readonly log: ModuleLogger
}

/**
 * Vertrag, den ein aktivierbares Paket erfüllt.
 *
 * Ein Paket exportiert `activate` und - sofern es seine Registrierungen
 * zurücknehmen kann - `deactivate`. Der Import des Pakets selbst darf keine
 * Wirkung haben.
 */
export interface ActivatableModule {
  activate(context: ActivationContext): void | Promise<void>
  deactivate?(context: ActivationContext): void | Promise<void>
}
