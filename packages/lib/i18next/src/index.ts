/**
Copyright (c) 2025 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena
*/
import i18next from "i18next";
import type {i18n} from "i18next";
import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core';
import { serviceId } from 'org.eclipse.daanse.board.app.lib.core'
/** Typed service id - the name and the contract declared once, here. */
/** Typed service id - the name and the contract declared once, here. */
const I18NEXT = serviceId<typeof i18next>('I18next')

const symbolForI18n = Symbol.for(I18NEXT)


/** Where the chosen language survives a reload - useLanguage writes it. */
const LANGUAGE_STORAGE_KEY = 'daanse.board.language'
/** What is shown when nothing better is known: the language every package must hold. */
const FALLBACK_LANGUAGE = 'en'
/** A key without a namespace reads from here. */
const DEFAULT_NAMESPACE = 'common'

/**
 * The language to start in: the one chosen before, else the browser's.
 *
 * Only the language part - 'de-AT' starts as 'de' - because the texts are
 * per language. Whether any exist for it does not matter here: texts
 * arrive later, and until they do i18next falls back to English.
 */
function startLanguage(): string {
  try {
    const remembered = globalThis.localStorage?.getItem(LANGUAGE_STORAGE_KEY)
    if (remembered) return remembered
  } catch {
    // private window, or storage turned off
  }
  const browser = globalThis.navigator?.language
  return browser ? browser.split('-')[0].toLowerCase() : FALLBACK_LANGUAGE
}

/* A missing key is said once, not on every render that asks for it. */
const reported = new Set<string>()
function reportMissing(languages: readonly string[], namespace: string, key: string) {
  /* The package's texts have not arrived yet - that is a wait, not a gap. */
  if (!i18next.hasResourceBundle(FALLBACK_LANGUAGE, namespace)) return
  const id = `${languages.join(',')}|${namespace}:${key}`
  if (reported.has(id)) return
  reported.add(id)
  console.warn(`[i18n] no text for ${namespace}:${key} in ${languages.join(', ')}`)
}

/*
 * Bundles are built for production even under the dev watcher, so the build
 * cannot say whether this is development. Where it runs can: a missing key
 * is worth a warning on a developer's machine and noise anywhere else.
 */
function isDevelopment(): boolean {
  const host = globalThis.location?.hostname
  return host === 'localhost' || host === '127.0.0.1'
}

/* The page says which language it is in, for screen readers and hyphenation. */
function markDocument(language: string) {
  if (globalThis.document?.documentElement) globalThis.document.documentElement.lang = language
}

/**
 * Richtet i18next ein und meldet es als Dienst an.
 *
 * Grunddienst: die Texte der Pakete sammelt der TranslationTracker ein,
 * sobald ein Paket sie registriert - in welcher Reihenfolge die Bundles
 * starten, spielt keine Rolle.
 */
export function activate({ services }: ActivationContext) {
  const development = isDevelopment()
  i18next.init({
    lng: startLanguage(),
    fallbackLng: FALLBACK_LANGUAGE,
    load: 'languageOnly',
    defaultNS: DEFAULT_NAMESPACE,
    ns: [DEFAULT_NAMESPACE],
    resources: {},
    /* Texts land in Vue templates, which escape on their own. */
    interpolation: { escapeValue: false },
    /* An empty text is a gap, not a translation. */
    returnEmptyString: false,
    saveMissing: development,
    missingKeyHandler: development ? reportMissing : undefined,
  })
  markDocument(i18next.language)
  i18next.on('languageChanged', markDocument)
  services.register(I18NEXT, i18next)
}

/** Translates outside a component - a message built in code, say. Not reactive. */
export function translate(key: string, options?: Record<string, unknown>): string {
  return i18next.t(key, options) as string
}

/** The language in use, for Intl formatters outside a component. */
export function currentLanguage(): string {
  return i18next.resolvedLanguage ?? i18next.language ?? FALLBACK_LANGUAGE
}

export function deactivate({ services }: ActivationContext) {
  i18next.off('languageChanged', markDocument)
  services.unregister(I18NEXT)
}
export {
  symbolForI18n,
  i18n, I18NEXT }
export {
  TRANSLATIONS,
  TranslationTracker,
  addTranslations,
  removeTranslations,
  type Translations,
} from './translations'
