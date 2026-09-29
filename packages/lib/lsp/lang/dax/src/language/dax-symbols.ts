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
 * The outline of a DAX document: what DEFINE declares, then each EVALUATE.
 *
 * VARs inside expressions are not listed - they are local to a formula, and
 * a long query has dozens - only the ones DEFINE declares for the query.
 */
import type { AstNode, AstNodeDescription, LangiumDocument } from 'langium'
import {
  DefaultDocumentSymbolProvider,
  DefaultNodeKindProvider,
} from 'langium/lsp'
import { SymbolKind } from 'vscode-languageserver'
import type { DocumentSymbol } from 'vscode-languageserver-protocol'
import {
  isColumnDefinition,
  isEvaluateStatement,
  isMeasureDefinition,
  isParameterDefinition,
  isQueryDocument,
  isTableDefinition,
  isVariableDefinition,
} from './generated/ast.js'

const KINDS: Record<string, SymbolKind> = {
  MeasureDefinition: SymbolKind.Field,
  ColumnDefinition: SymbolKind.Property,
  TableDefinition: SymbolKind.Struct,
  VariableDefinition: SymbolKind.Variable,
  ParameterDefinition: SymbolKind.TypeParameter,
  EvaluateStatement: SymbolKind.Function,
}

export class DaxNodeKindProvider extends DefaultNodeKindProvider {
  override getSymbolKind(node: AstNode | AstNodeDescription): SymbolKind {
    const type = '$type' in node ? node.$type : node.type
    return KINDS[type] ?? super.getSymbolKind(node)
  }
}

export class DaxDocumentSymbolProvider extends DefaultDocumentSymbolProvider {
  override getSymbols(document: LangiumDocument): DocumentSymbol[] {
    const root = document.parseResult.value
    if (!isQueryDocument(root)) return []
    return [...root.definitions, ...root.statements].flatMap(node =>
      this.outlineOf(node),
    )
  }

  protected outlineOf(node: AstNode): DocumentSymbol[] {
    const cst = node.$cstNode
    if (!cst) return []
    const entry = describe(node)
    if (!entry) return []
    const nameNode = this.nameProvider.getNameNode(node) ?? cst
    return [
      {
        kind: this.nodeKindProvider.getSymbolKind(node),
        name: entry.name,
        detail: entry.detail,
        range: cst.range,
        selectionRange: nameNode.range,
      },
    ]
  }
}

function describe(
  node: AstNode,
): { name: string; detail?: string } | undefined {
  if (isMeasureDefinition(node))
    return { name: `[${node.name}]`, detail: `MEASURE '${node.table}'` }
  if (isColumnDefinition(node))
    return { name: `[${node.name}]`, detail: `COLUMN '${node.table}'` }
  if (isTableDefinition(node)) return { name: node.name, detail: 'TABLE' }
  if (isVariableDefinition(node)) return { name: node.name, detail: 'VAR' }
  if (isParameterDefinition(node))
    return { name: `@${node.name}`, detail: 'parameter' }
  if (isEvaluateStatement(node)) {
    const columns = node.orderBy.length
    return {
      name: 'EVALUATE',
      detail:
        columns === 0
          ? undefined
          : `ORDER BY ${columns} ${columns === 1 ? 'column' : 'columns'}`,
    }
  }
  return undefined
}
