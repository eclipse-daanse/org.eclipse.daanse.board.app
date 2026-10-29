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

import type { AstNode, AstNodeDescription, LangiumDocument } from 'langium'
import {
  DefaultDocumentSymbolProvider,
  DefaultNodeKindProvider,
} from 'langium/lsp'
import { SymbolKind } from 'vscode-languageserver'
import type {
  DocumentSymbol,
  DocumentSymbolParams,
} from 'vscode-languageserver-protocol'

interface OutlineType {
  kind: SymbolKind
  name: (node: AstNode) => string
  detail?: (node: AstNode) => string | undefined
}

function text(node: AstNode, property: string): string | undefined {
  const value = (node as unknown as Record<string, unknown>)[property]
  return typeof value === 'string' ? value : undefined
}

function count(node: AstNode, property: string): number {
  const value = (node as unknown as Record<string, unknown>)[property]
  return Array.isArray(value) ? value.length : 0
}

const KIND_SYMBOLS: Record<string, SymbolKind> = {
  MEMBER: SymbolKind.Property,
  SET: SymbolKind.Array,
  KPI: SymbolKind.Event,
  SUBCUBE: SymbolKind.Namespace,
  CELL: SymbolKind.Event,
}

function declaredKind(node: AstNode): SymbolKind {
  return KIND_SYMBOLS[text(node, 'kind') ?? ''] ?? SymbolKind.Object
}

const OUTLINE: Record<string, OutlineType> = {
  SelectStatement: {
    kind: SymbolKind.Function,
    name: () => 'SELECT',
    detail: node => {
      const axes = count(node, 'axes')
      return axes === 1 ? '1 axis' : `${axes} axes`
    },
  },
  DrillthroughStatement: {
    kind: SymbolKind.Function,
    name: () => 'DRILLTHROUGH',
  },
  ExplainStatement: { kind: SymbolKind.Function, name: () => 'EXPLAIN PLAN' },
  RefreshStatement: { kind: SymbolKind.Function, name: () => 'REFRESH CUBE' },
  UpdateStatement: { kind: SymbolKind.Function, name: () => 'UPDATE CUBE' },
  CalculateStatement: { kind: SymbolKind.Function, name: () => 'CALCULATE' },
  CallStatement: { kind: SymbolKind.Function, name: () => 'CALL' },
  FreezeStatement: { kind: SymbolKind.Function, name: () => 'FREEZE' },

  ScopeStatement: {
    kind: SymbolKind.Namespace,
    name: () => 'SCOPE',
    detail: node => {
      const statements = count(node, 'body')
      return statements === 1 ? '1 statement' : `${statements} statements`
    },
  },
  Assignment: { kind: SymbolKind.Variable, name: () => 'This =' },

  CreateStatement: {
    kind: SymbolKind.Object,
    name: node => text(node, 'name') ?? 'CREATE',
    detail: node => {
      const modifiers = ['session', 'global', 'hidden', 'calculated'].filter(
        flag => (node as unknown as Record<string, unknown>)[flag] === true,
      )
      return [
        'CREATE',
        ...modifiers.map(flag => flag.toUpperCase()),
        text(node, 'kind'),
      ]
        .filter(Boolean)
        .join(' ')
    },
  },
  DropStatement: {
    kind: SymbolKind.Operator,
    name: node => `DROP ${text(node, 'kind') ?? ''}`.trim(),
    detail: node => {
      const targets = (node as unknown as { targets?: unknown }).targets
      return Array.isArray(targets) ? targets.join(', ') : undefined
    },
  },

  WithMember: {
    kind: SymbolKind.Property,
    name: node => text(node, 'name') ?? 'MEMBER',
    detail: () => 'WITH MEMBER',
  },
  WithSet: {
    kind: SymbolKind.Array,
    name: node => text(node, 'name') ?? 'SET',
    detail: () => 'WITH SET',
  },
  WithCellCalculation: {
    kind: SymbolKind.Event,
    name: node => text(node, 'name') ?? 'CELL CALCULATION',
    detail: () => 'WITH CELL CALCULATION',
  },
  WithMeasure: {
    kind: SymbolKind.Number,
    name: () => 'MEASURE',
    detail: () => 'WITH MEASURE',
  },

  AxisClause: {
    kind: SymbolKind.Key,
    name: node => {
      const target = (node as unknown as { target?: AstNode }).target
      return (target && text(target, 'name')) ?? 'AXIS'
    },
    detail: node =>
      (node as unknown as Record<string, unknown>).nonEmpty === true
        ? 'NON EMPTY'
        : undefined,
  },
}

export class MdxNodeKindProvider extends DefaultNodeKindProvider {
  override getSymbolKind(node: AstNode | AstNodeDescription): SymbolKind {
    const type =
      'type' in node && typeof node.type === 'string'
        ? node.type
        : (node as AstNode).$type
    if (type === 'CreateStatement' || type === 'DropStatement') {
      return '$type' in node ? declaredKind(node as AstNode) : SymbolKind.Object
    }
    return OUTLINE[type]?.kind ?? super.getSymbolKind(node)
  }
}

export class MdxDocumentSymbolProvider extends DefaultDocumentSymbolProvider {
  protected override getSymbol(
    document: LangiumDocument,
    astNode: AstNode,
  ): DocumentSymbol[] {
    const outline = OUTLINE[astNode.$type]
    const cstNode = astNode.$cstNode
    if (!outline || !cstNode) {
      // Not a navigable node: skip it, but keep whatever is inside it.
      return this.getChildSymbols(document, astNode) ?? []
    }
    // `selectionRange` is what the editor selects on click; the name node
    // when the node has one, otherwise the node's own span.
    const nameNode = this.nameProvider.getNameNode(astNode) ?? cstNode
    return [
      {
        kind: this.nodeKindProvider.getSymbolKind(astNode),
        name: outline.name(astNode),
        detail: outline.detail?.(astNode),
        range: cstNode.range,
        selectionRange: nameNode.range,
        children: this.getChildSymbols(document, astNode) ?? [],
      },
    ]
  }

  override getSymbols(
    document: LangiumDocument,
    params: DocumentSymbolParams,
    cancelToken?: Parameters<DefaultDocumentSymbolProvider['getSymbols']>[2],
  ): DocumentSymbol[] {
    void params
    void cancelToken
    const root = document.parseResult.value as AstNode | undefined
    return root ? this.getSymbol(document, root) : []
  }
}
