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
  QueryStatement,
  SelectCore,
  SqlModel,
  Statement,
  TableFactor,
} from './generated/ast.js'
import { isQueryStatement, isSqlModel } from './generated/ast.js'

/**
 * The outline. A statement is a row, its CTEs and its FROM sources are its
 * children, and a column alias is a leaf - which is what makes a long query
 * navigable without reading it.
 *
 * The WITH prefix belongs to `Statement` rather than to the query inside it, so
 * the CTEs are listed from there whatever kind of statement follows: a
 * data-modifying CTE is as much part of the outline as a query one.
 */
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

  private statementSymbol(statement: Statement): DocumentSymbol | undefined {
    const range = statement.$cstNode?.range
    if (!range) return undefined

    const children: DocumentSymbol[] = []
    for (const cte of statement.with?.ctes ?? []) {
      const symbol = this.cteSymbol(cte)
      if (symbol) children.push(symbol)
    }
    for (const core of coresOf(statement.body)) {
      children.push(...this.sourceSymbols(core), ...this.aliasSymbols(core))
    }

    return {
      name: statementLabel(statement.body),
      detail: statementDetail(statement),
      kind: STATEMENT_KIND[statement.body.$type] ?? SymbolKind.Object,
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
    for (const core of coresOf(cte.query.body)) {
      children.push(...this.sourceSymbols(core), ...this.aliasSymbols(core))
    }
    return {
      name: cte.name,
      detail:
        cte.columns.length > 0 ? `(${cte.columns.join(', ')})` : undefined,
      kind: SymbolKind.Namespace,
      range,
      selectionRange: range,
      children: children.length > 0 ? children : undefined,
    }
  }

  private sourceSymbols(core: SelectCore): DocumentSymbol[] {
    const symbols: DocumentSymbol[] = []
    for (const source of core.from) {
      for (const node of [source, ...AstUtils.streamAllContents(source)]) {
        if (!SOURCE_KIND[node.$type]) continue
        // A derived table's own FROM belongs to its inner query, which gets its
        // own rows; only the outer level is listed here.
        if (AstUtils.getContainerOfType(node.$container, isNestedQuery)) continue
        const range = node.$cstNode?.range
        if (!range) continue
        const factor = node as TableFactor
        symbols.push({
          name: sourceLabel(factor),
          detail: sourceDetail(factor),
          kind: SOURCE_KIND[node.$type],
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
  QueryStatement: SymbolKind.Function,
  InsertStatement: SymbolKind.Method,
  UpdateStatement: SymbolKind.Method,
  DeleteStatement: SymbolKind.Method,
  MergeStatement: SymbolKind.Method,
}

const STATEMENT_LABEL: Record<string, string> = {
  QueryStatement: 'SELECT',
  InsertStatement: 'INSERT',
  UpdateStatement: 'UPDATE',
  DeleteStatement: 'DELETE',
  MergeStatement: 'MERGE',
}

/** The FROM items worth a row, and the icon each gets. */
const SOURCE_KIND: Record<string, SymbolKind> = {
  NamedTable: SymbolKind.Class,
  DerivedTable: SymbolKind.Struct,
  TableFunction: SymbolKind.Function,
  RowsFromTable: SymbolKind.Function,
  JsonTableFunction: SymbolKind.Function,
}

function statementLabel(body: AstNode): string {
  return STATEMENT_LABEL[body.$type] ?? body.$type
}

function statementDetail(statement: Statement): string | undefined {
  const named = [...AstUtils.streamAst(statement)].find(
    node => node.$type === 'NamedTable',
  )
  const parts = (named as { table?: { parts: string[] } } | undefined)?.table
    ?.parts
  return parts ? parts.join('.') : undefined
}

/**
 * The operands of a set operation, in source order. Nested subqueries are
 * excluded: they are reached through their own containing rows.
 */
function coresOf(body: AstNode): SelectCore[] {
  const query = isQueryStatement(body)
    ? (body as QueryStatement).query
    : undefined
  const root: AstNode = query ?? body
  return [...AstUtils.streamAst(root)].filter(
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

function aliasName(factor: TableFactor): string | undefined {
  return (factor as { alias?: { name?: string } }).alias?.name
}

function tableName(factor: TableFactor): string | undefined {
  return (factor as { table?: { parts: string[] } }).table?.parts.join('.')
}

function sourceLabel(factor: TableFactor): string {
  return aliasName(factor) ?? tableName(factor) ?? SOURCE_FALLBACK[factor.$type] ?? '(source)'
}

const SOURCE_FALLBACK: Record<string, string> = {
  DerivedTable: '(subquery)',
  RowsFromTable: 'ROWS FROM',
  JsonTableFunction: 'JSON_TABLE',
}

function sourceDetail(factor: TableFactor): string | undefined {
  if (factor.$type === 'DerivedTable') return 'derived'
  if (factor.$type === 'JsonTableFunction') return 'json_table'
  if (factor.$type === 'RowsFromTable') return 'rows from'
  // Only worth showing when the alias hid the real name.
  return aliasName(factor) ? tableName(factor) : undefined
}
