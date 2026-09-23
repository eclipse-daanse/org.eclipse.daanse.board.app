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
 * Numbers and dates in the language on screen.
 *
 * A date written as 'de-DE' stays German when everything around it is
 * English, and a number with a decimal comma reads as two numbers to
 * somebody who expects a point. The language is the one useTranslation
 * follows, so a switch re-renders these too.
 *
 * Formatters are cached per language and options - building an
 * Intl.NumberFormat costs more than using one, and a table formats a lot.
 */
import { computed, type ComputedRef } from 'vue'
import { useTranslation } from './useTranslation'

/** Used until i18next has said which language it is in. */
const FALLBACK = 'en'

const numbers = new Map<string, Intl.NumberFormat>()
const dates = new Map<string, Intl.DateTimeFormat>()
const relatives = new Map<string, Intl.RelativeTimeFormat>()

function cached<T>(cache: Map<string, T>, locale: string, options: object | undefined, make: () => T): T {
  const key = `${locale}|${JSON.stringify(options ?? {})}`
  let held = cache.get(key)
  if (!held) {
    held = make()
    cache.set(key, held)
  }
  return held
}

export function numberFormat(locale: string, options?: Intl.NumberFormatOptions): Intl.NumberFormat {
  return cached(numbers, locale, options, () => new Intl.NumberFormat(locale, options))
}

export function dateFormat(locale: string, options?: Intl.DateTimeFormatOptions): Intl.DateTimeFormat {
  return cached(dates, locale, options, () => new Intl.DateTimeFormat(locale, options))
}

const DAY = 24 * 60 * 60 * 1000

/**
 * "today", "yesterday", "3 days ago" - and past a month the date itself,
 * which is the resolution the number is worth by then.
 */
export function relativeDays(locale: string, at: number | Date, now: number = Date.now()): string {
  const then = typeof at === 'number' ? at : at.getTime()
  const days = Math.floor((now - then) / DAY)
  if (days < 31) {
    const relative = cached(relatives, locale, { numeric: 'auto' }, () => new Intl.RelativeTimeFormat(locale, { numeric: 'auto' }))
    return relative.format(-Math.max(days, 0), 'day')
  }
  return dateFormat(locale, { day: 'numeric', month: 'short', year: 'numeric' }).format(then)
}

export interface Format {
  /** The language tag formatting follows, as a ref. */
  locale: ComputedRef<string>
  number: (value: number, options?: Intl.NumberFormatOptions) => string
  date: (value: number | Date | string, options?: Intl.DateTimeFormatOptions) => string
  relativeDays: (at: number | Date) => string
}

export function useFormat(): Format {
  const { language } = useTranslation()
  const locale = computed(() => language.value || FALLBACK)
  return {
    locale,
    number: (value, options) => numberFormat(locale.value, options).format(value),
    date: (value, options) =>
      dateFormat(locale.value, options).format(typeof value === 'string' ? new Date(value) : value),
    relativeDays: (at) => relativeDays(locale.value, at),
  }
}
