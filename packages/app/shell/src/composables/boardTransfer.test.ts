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

import { describe, expect, it, vi } from 'vitest'
import {
  boardParameter,
  boardUrl,
  fetchBoardText,
  freeName,
  initialBoard,
  nameFromFile,
  nameFromUrl,
} from './boardTransfer'

const PAGE = 'http://pi.local:8080/board/b1'

describe('names', () => {
  it('names a state after its file, without folder or suffix', () => {
    expect(nameFromFile('smart-home.json')).toBe('smart-home')
    expect(nameFromFile('C:\\boards\\Keller.JSON')).toBe('Keller')
    expect(nameFromFile('  ')).toBe('')
  })

  it('names a state after the last part of its address', () => {
    expect(nameFromUrl(new URL('http://pi.local/boards/Wohnzimmer%20oben.json'))).toBe('Wohnzimmer oben')
    expect(nameFromUrl(new URL('http://pi.local/'))).toBe('')
  })

  it('numbers a name that is taken, rather than writing over it', () => {
    expect(freeName('home', ['other'])).toBe('home')
    expect(freeName('home', ['home', 'home (2)'])).toBe('home (3)')
  })
})

describe('which board is asked for', () => {
  it('reads ?board= from the address', () => {
    expect(boardParameter(`${PAGE}?board=boards/x.json`)).toBe('boards/x.json')
    expect(boardParameter(`${PAGE}?board=`)).toBeUndefined()
    expect(boardParameter(PAGE)).toBeUndefined()
  })

  it('opens the deployment board only when it is switched on and names one', () => {
    expect(initialBoard({ enabled: true, url: 'boards/x.json' })).toBe('boards/x.json')
    expect(initialBoard({ enabled: false, url: 'boards/x.json' })).toBeUndefined()
    expect(initialBoard({ enabled: true, url: '' })).toBeUndefined()
    /* "true" as a string is not a switch someone set on purpose */
    expect(initialBoard({ enabled: 'true', url: 'boards/x.json' })).toBeUndefined()
    expect(initialBoard(null)).toBeUndefined()
  })
})

describe('where a board may come from', () => {
  it('takes the page origin, relative addresses included', () => {
    expect(boardUrl('/boards/x.json', PAGE, []).href).toBe('http://pi.local:8080/boards/x.json')
  })

  it('refuses another origin unless the deployment lists it', () => {
    expect(() => boardUrl('https://evil.example/x.json', PAGE, [])).toThrow(/not allowed/)
    expect(boardUrl('https://boards.example/x.json', PAGE, ['https://boards.example/']).origin).toBe(
      'https://boards.example',
    )
  })

  /* A board's formulas run as code, so no address that is not fetched over http(s). */
  it('refuses anything but http(s)', () => {
    expect(() => boardUrl('javascript:alert(1)', PAGE, [])).toThrow(/not allowed/)
    expect(() => boardUrl('data:application/json,{}', PAGE, ['data:'])).toThrow(/not allowed/)
  })

  it('ignores what in allowedOrigins is no origin', () => {
    expect(() => boardUrl('https://x.example/a.json', PAGE, ['nonsense', 42])).toThrow(/not allowed/)
    expect(() => boardUrl('https://x.example/a.json', PAGE, 'https://x.example')).toThrow(/not allowed/)
  })
})

describe('fetching a board', () => {
  it('hands back the text, and the status where there is none', async () => {
    const ok = vi.fn(async () => ({ ok: true, status: 200, text: async () => '{"a":1}' }))
    expect(await fetchBoardText(new URL('http://pi.local/x.json'), ok as never)).toBe('{"a":1}')

    const missing = vi.fn(async () => ({ ok: false, status: 404, text: async () => '' }))
    await expect(fetchBoardText(new URL('http://pi.local/x.json'), missing as never)).rejects.toThrow('HTTP 404')
  })
})
