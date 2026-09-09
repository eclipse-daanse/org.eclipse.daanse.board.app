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

import { AstUtils, type AstNode, type LangiumDocument } from 'langium'
import { DefaultDocumentSymbolProvider } from 'langium/lsp'
import { SymbolKind } from 'vscode-languageserver'
import type {
  DocumentSymbol,
  DocumentSymbolParams,
} from 'vscode-languageserver-protocol'
import type {
  AliasedExpression,
  CommonTableExpression,
  SelectCore,
  SelectStatement,
  SqlModel,
  TableFactor,
} from './generated/ast.js'
import { isSqlModel } from './generated/ast.js'

export class SqlDocumentSymbolProvider extends DefaultDocumentSymbolProvider {
  override getSymbols(
    document: LangiumDocument,
    _params: DocumentSymbolParams,
  ): DocumentSymbol[] {
    const root = document.parseResult.value
    if (!isSqlModel(root)) return []
    return (root as SqlModel).statements
      .map(statement => this.statementSymbol(statement))
      .filter((symbol): symbol is DocumentSymbol => symbol !== undefined)
  }

  private statementSymbol(statement: AstNode): DocumentSymbol | undefined {
    const range = statement.$cstNode?.range
    if (!range) return undefined

    const children: DocumentSymbol[] = []
    if (statement.$type === 'SelectStatement') {
      const select = statement as SelectStatement
      for (const cte of select.with?.ctes ?? []) {
        const symbol = this.cteSymbol(cte)
        if (symbol) children.push(symbol)
      }
      for (const core of selectCores(select)) {
        children.push(...this.sourceSymbols(core), ...this.aliasSymbols(core))
      }
    }

    return {
      name: statementLabel(statement),
      detail: statementDetail(statement),
      kind: STATEMENT_KIND[statement.$type] ?? SymbolKind.Object,
      range,
      selectionRange: range,
      children: children.length > 0 ? children : undefined,
    }
  }

  private cteSymbol(cte: CommonTableExpression): DocumentSymbol | undefined {
    const range = cte.$cstNode?.range
    if (!range) return undefined
    const children: DocumentSymbol[] = []
    for (const nested of cte.query.with?.ctes ?? []) {
      const symbol = this.cteSymbol(nested)
      if (symbol) children.push(symbol)
    }
    for (const core of selectCores(cte.query)) {
      children.push(...this.sourceSymbols(core), ...this.aliasSymbols(core))
    }
    return {
      name: cte.name,
      detail:
        cte.columns.length > 0 ? `(${cte.columns.join(', ')})` : undefined,
      kind: SymbolKind.Namespace,
      range,
      selectionRange: cte.$cstNode?.range ?? range,
      children: children.length > 0 ? children : undefined,
    }
  }

  private sourceSymbols(core: SelectCore): DocumentSymbol[] {
    const symbols: DocumentSymbol[] = []
    for (const source of core.from) {
      for (const node of [source, ...AstUtils.streamAllContents(source)]) {
        if (node.$type !== 'NamedTable' && node.$type !== 'DerivedTable')
          continue
        // A derived table's own FROM belongs to its inner SELECT, which
        // gets its own rows; only the outer level is listed here.
        if (AstUtils.getContainerOfType(node.$container, isNestedQuery))
          continue
        const range = node.$cstNode?.range
        if (!range) continue
        const factor = node as TableFactor
        symbols.push({
          name: sourceLabel(factor),
          detail: sourceDetail(factor),
          kind:
            node.$type === 'DerivedTable'
              ? SymbolKind.Struct
              : SymbolKind.Class,
          range,
          selectionRange: range,
        })
      }
    }
    return symbols
  }

  private aliasSymbols(core: SelectCore): DocumentSymbol[] {
    const symbols: DocumentSymbol[] = []
    for (const selection of core.selections) {
      if (selection.$type !== 'AliasedExpression') continue
      const aliased = selection as AliasedExpression
      if (!aliased.alias) continue
      const range = aliased.$cstNode?.range
      if (!range) continue
      symbols.push({
        name: aliased.alias,
        kind: SymbolKind.Field,
        range,
        selectionRange: range,
      })
    }
    return symbols
  }
}

const STATEMENT_KIND: Record<string, SymbolKind> = {
  SelectStatement: SymbolKind.Function,
  InsertStatement: SymbolKind.Method,
  ReplaceStatement: SymbolKind.Method,
  UpdateStatement: SymbolKind.Method,
  DeleteStatement: SymbolKind.Method,
}

const STATEMENT_LABEL: Record<string, string> = {
  SelectStatement: 'SELECT',
  InsertStatement: 'INSERT',
  ReplaceStatement: 'REPLACE',
  UpdateStatement: 'UPDATE',
  DeleteStatement: 'DELETE',
}

function statementLabel(statement: AstNode): string {
  return STATEMENT_LABEL[statement.$type] ?? statement.$type
}

function statementDetail(statement: AstNode): string | undefined {
  const named = [...AstUtils.streamAst(statement)].find(
    node => node.$type === 'NamedTable',
  )
  const parts = (named as { table?: { parts: string[] } } | undefined)?.table
    ?.parts
  return parts ? parts.join('.') : undefined
}

function selectCores(statement: SelectStatement): SelectCore[] {
  // The operands of a set operation, in source order. Nested subqueries are
  // excluded: they are reached through their own containing rows.
  return [...AstUtils.streamAst(statement.query)].filter(
    (node): node is SelectCore =>
      node.$type === 'SelectCore' &&
      AstUtils.getContainerOfType(node.$container, isNestedQuery) === undefined,
  )
}

function isNestedQuery(node: AstNode): node is AstNode {
  return (
    node.$type === 'Subquery' ||
    node.$type === 'DerivedTable' ||
    node.$type === 'InSource'
  )
}

function sourceLabel(factor: TableFactor): string {
  if (factor.$type === 'DerivedTable') {
    return factor.alias ?? '(subquery)'
  }
  const named = factor as { alias?: string; table: { parts: string[] } }
  return named.alias ?? named.table.parts.join('.')
}

function sourceDetail(factor: TableFactor): string | undefined {
  if (factor.$type === 'DerivedTable') return 'derived'
  const named = factor as { alias?: string; table: { parts: string[] } }
  // Only worth showing when the alias hid the real name.
  return named.alias ? named.table.parts.join('.') : undefined
}
