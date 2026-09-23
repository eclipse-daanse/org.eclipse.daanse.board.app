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

/**
 * The texts of every package, collected where they are registered.
 *
 * A package carries its own texts - src/i18n/<language>.json - and offers
 * them as a Translations service, one per namespace. Nothing lists the
 * packages: the tracker below takes whatever is registered and hands it to
 * i18next, so a bundle's texts arrive with the bundle and leave with it.
 * A package deployed on its own needs nobody else to know its words.
 */
import { component, injectAll } from '@eclipse-daanse/tsm'
import i18next from 'i18next'
import { serviceId } from 'org.eclipse.daanse.board.app.lib.core'

/** What a package offers: its namespace, and its texts per language. */
export interface Translations {
  readonly namespace: string
  readonly resources: Readonly<Record<string, Record<string, unknown>>>
}

/**
 * The id packages register their texts under.
 *
 * The generated src/i18n/index.ts of a package writes the literal instead
 * of importing this, so that a package with texts needs no dependency on
 * this one - the string is the contract.
 */
export const TRANSLATIONS = serviceId<Translations>('Translations')

/** Adds a package's texts; deep and overwriting, as the packs always were. */
export function addTranslations({ namespace, resources }: Translations): void {
  for (const [language, texts] of Object.entries(resources)) {
    i18next.addResourceBundle(language, namespace, texts, true, true)
  }
}

export function removeTranslations({ namespace, resources }: Translations): void {
  for (const language of Object.keys(resources)) {
    i18next.removeResourceBundle(language, namespace)
  }
}

/**
 * Keeps i18next in step with the Translations services.
 *
 * Immediate, because nothing asks for it: it exists to watch. It starts
 * after this bundle's activate has set i18next up, so there is always
 * something to add the texts to.
 */
@component({ immediate: true })
export class TranslationTracker {
  private held: Translations[] = []

  @injectAll(TRANSLATIONS)
  set translations(current: Translations[]) {
    const gone = this.held.filter((translations) => !current.includes(translations))
    for (const translations of gone) removeTranslations(translations)
    /* A namespace is one package's, but should two offer it, removing one
       must not take the other's texts with it. */
    const emptied = new Set(gone.map((translations) => translations.namespace))
    for (const translations of current) {
      if (!this.held.includes(translations) || emptied.has(translations.namespace)) addTranslations(translations)
    }
    this.held = current
  }

  get translations(): Translations[] {
    return this.held
  }
}
