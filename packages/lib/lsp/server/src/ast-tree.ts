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

import {
  DocumentState,
  GrammarUtils,
  URI,
  isAstNode,
  isReference,
  type AstNode,
  type CstNode,
  type LangiumDocument,
} from 'langium'
import type { LangiumSharedServices } from 'langium/lsp'
import type { CancellationToken, Connection } from 'vscode-languageserver'
import {
  AST_REQUEST,
  type AstRequestParams,
  type AstTreeNode,
  type AstTreeResult,
} from 'org.eclipse.daanse.board.app.lib.api.lsp'

export type {
  AstRequestParams,
  AstTreeNode,
  AstTreeResult,
} from 'org.eclipse.daanse.board.app.lib.api.lsp'
export { AST_REQUEST } from 'org.eclipse.daanse.board.app.lib.api.lsp'

export interface AstTreeContext {
  serializeNode(
    node: AstNode,
    id: string,
    property?: string,
    index?: number,
  ): AstTreeNode
}

export interface AstTreeStrategy {
  customProperty?(
    node: AstNode,
    property: string,
    value: unknown,
    id: string,
    context: AstTreeContext,
  ): AstTreeNode[] | undefined
  renderScalar?(value: unknown): string
  labelNode?(node: AstNode): string
}

function locate(
  cst: CstNode | undefined,
): Pick<AstTreeNode, 'range' | 'offset' | 'length'> {
  if (!cst) {
    // Error recovery synthesises nodes with no CST node at all.
    return {}
  }
  return { range: cst.range, offset: cst.offset, length: cst.length }
}

export function renderScalar(value: unknown): string {
  return typeof value === 'string' ? JSON.stringify(value) : String(value)
}

function createSerializer(strategy: AstTreeStrategy): AstTreeContext {
  const scalar = strategy.renderScalar ?? renderScalar
  const label = strategy.labelNode ?? ((node: AstNode) => node.$type)

  function serializeChildren(node: AstNode, id: string): AstTreeNode[] {
    const children: AstTreeNode[] = []
    for (const [property, value] of Object.entries(node)) {
      if (property.startsWith('$')) {
        // `$container`, `$document` and `$cstNode` are all cyclic.
        continue
      }
      const custom = strategy.customProperty?.(
        node,
        property,
        value,
        id,
        context,
      )
      if (custom) {
        children.push(...custom)
        continue
      }
      if (Array.isArray(value)) {
        value.forEach((element, index) => {
          children.push(
            serializeValue(
              node,
              element,
              `${id}.${property}.${index}`,
              property,
              index,
            ),
          )
        })
        continue
      }
      if (value === undefined || value === null) {
        continue
      }
      children.push(
        serializeValue(node, value, `${id}.${property}`, property, undefined),
      )
    }
    return children
  }

  function serializeValue(
    owner: AstNode,
    value: unknown,
    id: string,
    property: string,
    index: number | undefined,
  ): AstTreeNode {
    if (isReference(value)) {
      // At `DocumentState.Parsed` the linker has not run, and reading
      // `ref` would force it. Only the text is taken.
      return {
        id,
        kind: 'reference',
        label: property,
        property,
        index,
        value: value.$refText,
        ...locate(value.$refNode),
        children: [],
      }
    }
    if (isAstNode(value)) {
      return serializeNode(value, id, property, index)
    }
    return {
      id,
      kind: 'scalar',
      label: property,
      property,
      index,
      value: scalar(value),
      // Datatype rules are plain strings with no AST node of their own,
      // but they do have a CST node, so a name row can still be clicked
      // through to its source.
      ...locate(
        GrammarUtils.findNodeForProperty(owner.$cstNode, property, index),
      ),
      children: [],
    }
  }

  function serializeNode(
    node: AstNode,
    id: string,
    property?: string,
    index?: number,
  ): AstTreeNode {
    return {
      id,
      kind: 'node',
      label: label(node),
      property,
      index,
      ...locate(node.$cstNode),
      children: serializeChildren(node, id),
    }
  }

  const context: AstTreeContext = { serializeNode }
  return context
}

export function buildAstTree(
  document: LangiumDocument,
  strategy: AstTreeStrategy = {},
): AstTreeResult {
  const root = document.parseResult.value as AstNode | undefined
  const { serializeNode } = createSerializer(strategy)
  return {
    uri: document.uri.toString(),
    root: root ? serializeNode(root, 'root') : undefined,
    parserErrors: document.parseResult.parserErrors.length,
  }
}

export function registerAstRequest(
  connection: Connection,
  shared: LangiumSharedServices,
  strategy: AstTreeStrategy = {},
): void {
  connection.onRequest(
    AST_REQUEST,
    async (
      params: AstRequestParams,
      cancelToken: CancellationToken,
    ): Promise<AstTreeResult> => {
      const uri = URI.parse(params.textDocument.uri)
      const document =
        await shared.workspace.LangiumDocuments.getOrCreateDocument(uri)
      // `Parsed` rather than `Linked`: the tree is wanted even when the
      // document is mid-edit and nothing links, and the panel does not
      // show resolution state anyway.
      await shared.workspace.DocumentBuilder.waitUntil(
        DocumentState.Parsed,
        uri,
        cancelToken,
      )
      return buildAstTree(document, strategy)
    },
  )
}
