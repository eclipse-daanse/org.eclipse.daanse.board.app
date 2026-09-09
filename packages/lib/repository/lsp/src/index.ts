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
 * The language palette bundle.
 *
 * There is no activate and no hand-written tracker: the palette is the
 * TrackedLanguageRepository component, whose `@injectAll` reference does what
 * a ServiceTracker does in OSGi - the loader registers the component under
 * LanguageRepository, keeps its provider collection current, and withdraws
 * everything when a language bundle stops.
 */

import { component, injectAll } from '@eclipse-daanse/tsm'
import {
  LANGUAGE_REPOSITORY,
  LANGUAGE_SERVICE_ID,
  type LanguageDescriptor,
  type LanguageProvider,
  type LanguageRepository,
} from 'org.eclipse.daanse.board.app.lib.api.lsp'

@component({
  service: [LANGUAGE_REPOSITORY],
})
export class TrackedLanguageRepository implements LanguageRepository {
  private tracked: LanguageProvider[] = []
  private readonly changeListeners = new Set<() => void>()

  @injectAll(LANGUAGE_SERVICE_ID)
  set providers(providers: LanguageProvider[]) {
    this.tracked = providers
    this.notifyChange()
  }

  get providers(): LanguageProvider[] {
    return this.tracked
  }

  getLanguage(id: string): LanguageDescriptor | undefined {
    return this.getAllLanguages()[id]
  }

  getAllLanguages(): Record<string, LanguageDescriptor> {
    const languages: Record<string, LanguageDescriptor> = {}
    /*
     * First occurrence per id wins: the registry hands references out in
     * ranking order, so this IS the OSGi selection rule.
     */
    for (const provider of this.tracked) {
      if (!(provider.id in languages)) {
        languages[provider.id] = provider
      }
    }
    return languages
  }

  /*
   * Extension matching is longest-first, so a language claiming `.mdxq` wins
   * over one claiming `.q` for the same file - the specific claim beats the
   * general one regardless of registration order.
   */
  languageForFile(fileName: string): LanguageDescriptor | undefined {
    const lower = fileName.toLowerCase()
    let best: LanguageDescriptor | undefined
    let bestLength = -1
    for (const language of Object.values(this.getAllLanguages())) {
      for (const extension of language.extensions) {
        const ext = extension.toLowerCase()
        if (lower.endsWith(ext) && ext.length > bestLength) {
          best = language
          bestLength = ext.length
        }
      }
    }
    return best
  }

  onChange(listener: () => void): () => void {
    this.changeListeners.add(listener)
    return () => this.changeListeners.delete(listener)
  }

  private notifyChange(): void {
    for (const listener of this.changeListeners) listener()
  }
}
