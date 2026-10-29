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

/*
 * eMondrian escapes the text of a fault before it writes it into the
 * envelope, which escapes it once more - so what the parser hands back still
 * reads `MDX object &#39;[Measures].[Nope]&#39; not found`. The text is
 * decoded once here, before anybody shows it.
 */

const NAMED: Record<string, string> = {
  amp: '&',
  lt: '<',
  gt: '>',
  quot: '"',
  apos: "'",
}

const REFERENCE = /&(?:#(\d+)|#[xX]([0-9a-fA-F]+)|([a-zA-Z]+));/g

/**
 * The text with its character references - the five named ones, decimal and
 * hexadecimal - replaced by the characters they stand for. One pass, so
 * `&amp;lt;` becomes `&lt;` and not `<`; a reference it does not know is kept.
 */
export function decodeCharacterReferences(text: string): string {
  if (!text.includes('&')) return text
  return text.replace(REFERENCE, (reference, decimal?: string, hex?: string, name?: string) => {
    if (name !== undefined) return NAMED[name] ?? reference
    const code = decimal !== undefined ? parseInt(decimal, 10) : parseInt(hex!, 16)
    return code <= 0x10ffff ? String.fromCodePoint(code) : reference
  })
}

/**
 * A SOAP fault from the client, with its message and details decoded; any
 * other error as it came. The error is changed rather than replaced, so it
 * stays the instance - and the class - the client raised.
 */
export function readableFault(error: unknown): unknown {
  if (!(error instanceof Error) || error.name !== 'XmlaFaultError') return error
  error.message = decodeCharacterReferences(error.message)
  const details = (error as { details?: unknown }).details
  if (Array.isArray(details)) {
    Object.defineProperty(error, 'details', {
      value: details.map(detail => (typeof detail === 'string' ? decodeCharacterReferences(detail) : detail)),
      enumerable: true,
    })
  }
  return error
}
