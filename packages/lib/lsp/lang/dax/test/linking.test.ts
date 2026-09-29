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
 * What a name resolves to inside the document. Names of the model stay
 * unresolved - that is the point of DaxDocumentValidator - so every test
 * here is either "resolves to this declaration" or "resolves to nothing".
 */
import { describe, expect, test } from 'vitest'
import { AstUtils, type AstNode, type Reference } from 'langium'
import { parseHelper } from 'langium/test'
import { createDaxServicesForTesting } from '../src/language/dax-module.js'
import {
  isColumnReference,
  isNameExpression,
  isParameterReference,
} from '../src/language/generated/ast.js'

const services = createDaxServicesForTesting()
const parseQuery = parseHelper(services.DaxQuery)
const parseFormula = parseHelper(services.DaxFormula)

/** Every reference in the document, as `text -> type:line` of its target (or `-`). */
async function links(
  text: string,
  kind: 'query' | 'formula' = 'query',
): Promise<string[]> {
  const document = await (kind === 'query' ? parseQuery : parseFormula)(text)
  await services.shared.workspace.DocumentBuilder.build([document])
  const found: string[] = []
  for (const node of AstUtils.streamAst(document.parseResult.value)) {
    let reference: Reference<AstNode> | undefined
    if (isNameExpression(node)) reference = node.target
    else if (isColumnReference(node)) reference = node.column
    else if (isParameterReference(node)) reference = node.parameter
    if (!reference) continue
    const target = reference.ref
    const where = target?.$cstNode
      ? `${target.$type}:${target.$cstNode.range.start.character}`
      : '-'
    found.push(`${reference.$refText} -> ${where}`)
  }
  return found
}

describe('variables', () => {
  test('RETURN sees every variable of its block', async () => {
    expect(await links('VAR a = 1 VAR b = 2 RETURN a + b', 'formula')).toEqual([
      'a -> VariableDefinition:0',
      'b -> VariableDefinition:10',
    ])
  })

  test('a variable sees the ones before it, not itself or later ones', async () => {
    expect(await links('VAR a = b VAR b = a RETURN 0', 'formula')).toEqual([
      'b -> -',
      'a -> VariableDefinition:0',
    ])
  })

  test('an inner block shadows an outer one', async () => {
    expect(
      await links('VAR a = 1 RETURN VAR a = 2 RETURN a', 'formula'),
    ).toEqual(['a -> VariableDefinition:17'])
  })

  test('names are case-insensitive', async () => {
    expect(await links('VAR Total = 1 RETURN TOTAL', 'formula')).toEqual([
      'TOTAL -> VariableDefinition:0',
    ])
  })

  test('a query variable is seen by EVALUATE and by later definitions', async () => {
    expect(
      await links("DEFINE VAR x = 1 MEASURE 'T'[m] = x EVALUATE { x }"),
    ).toEqual(['x -> VariableDefinition:7', 'x -> VariableDefinition:7'])
  })

  test('a query variable is not seen by the definitions before it', async () => {
    expect(
      await links("DEFINE MEASURE 'T'[m] = x VAR x = 1 EVALUATE { 1 }"),
    ).toEqual(['x -> -'])
  })

  test('a DEFINE TABLE is a name EVALUATE can use', async () => {
    expect(await links('DEFINE TABLE Top = {1} EVALUATE Top')).toEqual([
      'Top -> TableDefinition:7',
    ])
  })

  test('a name of the model resolves to nothing', async () => {
    expect(await links('EVALUATE Sales')).toEqual(['Sales -> -'])
  })
})

describe('measures and columns', () => {
  const DEFINE = "DEFINE MEASURE 'Sales'[Total] = 1 COLUMN 'Sales'[Net] = 2 "

  test('a bare [name] resolves to a DEFINE MEASURE or COLUMN', async () => {
    expect(
      await links(DEFINE + 'EVALUATE ROW("a", [Total], "b", [net])'),
    ).toEqual(['Total -> MeasureDefinition:7', 'net -> ColumnDefinition:34'])
  })

  test('a qualified name has to match the table too', async () => {
    expect(
      await links(
        DEFINE + 'EVALUATE ROW("a", \'Sales\'[Total], "b", \'Other\'[Total])',
      ),
    ).toEqual(['Total -> MeasureDefinition:7', 'Total -> -'])
  })

  test('measures may refer to each other in any order', async () => {
    expect(
      await links(
        "DEFINE MEASURE 'T'[a] = [b] MEASURE 'T'[b] = 1 EVALUATE {1}",
      ),
    ).toEqual(['b -> MeasureDefinition:28'])
  })

  test('a column of the model resolves to nothing', async () => {
    expect(await links('EVALUATE ROW("a", \'Sales\'[Amount])')).toEqual([
      'Amount -> -',
    ])
  })

  test('a formula has no DEFINE, so nothing to resolve to', async () => {
    expect(await links('[Total]', 'formula')).toEqual(['Total -> -'])
  })
})

describe('parameters', () => {
  test('@name resolves to the default DEFINE gives it', async () => {
    expect(await links('DEFINE @Year = 2024 EVALUATE { @year }')).toEqual([
      'year -> ParameterDefinition:7',
    ])
  })

  test('an undeclared parameter is supplied by the caller', async () => {
    expect(await links('EVALUATE { @Year }')).toEqual(['Year -> -'])
  })
})
