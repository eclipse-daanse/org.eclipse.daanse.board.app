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

import { describe, expect, test } from 'vitest'
import { parseMdx, services } from '../test-helper.js'

const provider = services.Mdx.lsp.DefinitionProvider!

describe('go to definition', () => {
  test('answers where the name is declared, as a link and as a location', async () => {
    const text = 'WITH MEMBER [Measures].[X] AS 1 SELECT {[Measures].[X]} ON 0 FROM [Sales]'
    const document = await parseMdx(text)
    const use = text.lastIndexOf('[X]') + 1

    const answer = await provider.getDefinition(document, {
      textDocument: { uri: document.uri.toString() },
      position: document.textDocument.positionAt(use),
    })

    expect(answer).toHaveLength(1)
    const [found] = answer! as Array<Record<string, unknown>>
    const declared = text.indexOf('[X]') + 1
    const at = document.textDocument.positionAt(declared)
    expect(found.targetUri).toBe(document.uri.toString())
    expect((found.targetSelectionRange as { start: { character: number } }).start.character).toBeLessThanOrEqual(at.character)
    // A client that reads Location, not LocationLink, finds the same place.
    expect(found.uri).toBe(found.targetUri)
    expect(found.range).toEqual(found.targetSelectionRange)
  })
})
