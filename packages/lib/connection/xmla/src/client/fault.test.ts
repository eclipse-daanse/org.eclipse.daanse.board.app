// @vitest-environment node
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

import { describe, expect, it } from 'vitest'

import { decodeCharacterReferences, readableFault } from './fault'

describe('decodeCharacterReferences', () => {
  it('decodes decimal and hexadecimal references', () => {
    expect(decodeCharacterReferences('MDX object &#39;[Measures].[Nope]&#39; not found')).toBe(
      "MDX object '[Measures].[Nope]' not found",
    )
    expect(decodeCharacterReferences('Session with id &#34;s-1&#34; does not exists')).toBe(
      'Session with id "s-1" does not exists',
    )
    expect(decodeCharacterReferences('&#x27;a&#X27; &#xe4;')).toBe("'a' ä")
  })

  it('decodes the five named references', () => {
    expect(decodeCharacterReferences('&lt;a&gt; &quot;b&quot; &apos;c&apos; d &amp; e')).toBe(
      `<a> "b" 'c' d & e`,
    )
  })

  it('decodes once, and keeps what it does not know', () => {
    expect(decodeCharacterReferences('&amp;lt; &amp;#39;')).toBe('&lt; &#39;')
    expect(decodeCharacterReferences('&nbsp; &#x110000; & alone; a&b')).toBe('&nbsp; &#x110000; & alone; a&b')
  })
})

describe('readableFault', () => {
  class XmlaFaultError extends Error {
    constructor(
      message: string,
      readonly details: readonly string[],
    ) {
      super(message)
      this.name = 'XmlaFaultError'
    }
  }

  it('decodes the message and the details of a fault, keeping the instance', () => {
    const fault = new XmlaFaultError('the server answered a SOAP fault: &#39;x&#39;', ['&#39;x&#39;'])

    const readable = readableFault(fault)

    expect(readable).toBe(fault)
    expect(fault.message).toBe("the server answered a SOAP fault: 'x'")
    expect(fault.details).toEqual(["'x'"])
  })

  it('leaves any other error alone', () => {
    const error = new Error('&#39;x&#39;')
    expect(readableFault(error)).toBe(error)
    expect(error.message).toBe('&#39;x&#39;')
  })
})
