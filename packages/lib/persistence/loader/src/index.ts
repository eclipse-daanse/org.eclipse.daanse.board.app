/**
  Copyright (c) 2025 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0
  Contributors: Smart City Jena
 */

import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'
import { SETTINGS_MANAGER, identifier, SettingsManagerI } from 'org.eclipse.daanse.board.app.lib.api.settings'
import { REPOSITORY_REGISTRY, identifier as RepoManagerId, Repository, RepositoryRegistryI } from 'org.eclipse.daanse.board.app.lib.api.persistence'


/**
 * Stellt die gespeicherten Repository-Instanzen wieder her.
 *
 * Setzt voraus, dass die Repository-Typen bereits angemeldet sind - deshalb
 * `requires` auf die drei Umsetzungen. Vorher lief das als `init()` am
 * Dateiende, ohne `await` und ohne dass jemand die Reihenfolge zusicherte;
 * die Anwendung lud dieses Paket darum in einer eigenen Nachlaufphase.
 */
export async function activate({ services, log }: ActivationContext) {
  const settingsManager = services.get(SETTINGS_MANAGER)
  if (!settingsManager) {
    log.info('SettingsManager nicht vorhanden - nichts wiederherzustellen')
    return
  }

  const repoManager = services.getRequired(REPOSITORY_REGISTRY)
  const gespeicherte = await settingsManager.getSettings(['persistanceRepositories'])
  if (!gespeicherte) return

  for (const [type, instances] of Object.entries(gespeicherte)) {
    const baseclass = repoManager.availableRepoTypes.get(type)
    if (!baseclass) {
      log.warn(`Repository-Typ "${type}" ist nicht angemeldet`)
      continue
    }

    const repository = services.get<Repository>(String(baseclass.description ?? baseclass))
    if (!repository) {
      log.warn(`keine Umsetzung fuer Repository-Typ "${type}"`)
      continue
    }

    for (const entitysetting of instances as any[]) {
      if (!entitysetting.name || !entitysetting.url) continue
      /*
       * Pro Instanz auffangen: ein Repository, das sich nicht herstellen
       * laesst, darf die uebrigen nicht mitnehmen. Vorher lief diese Funktion
       * ohne `await` neben dem Start her - ein Fehler landete als unbehandelte
       * Zusage in der Konsole und blieb unbemerkt.
       */
      try {
        repository.init(new URL(entitysetting.url), entitysetting.name, entitysetting)
        repoManager.register(repository)
      } catch (fehler) {
        log.warn(`Repository "${entitysetting.name}" (${type}) nicht wiederhergestellt`, fehler)
      }
    }
  }
}


