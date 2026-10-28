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
  GrammarAST,
  GrammarUtils,
  URI,
  isAstNode,
  isCompositeCstNode,
  isLeafCstNode,
  isReference,
  type AstNode,
  type CstNode,
  type LangiumDocument,
} from 'langium'
import type { LangiumSharedServices } from 'langium/lsp'
import type { CancellationToken, Connection } from 'vscode-languageserver'
import {
  AST_REQUEST,
  CST_REQUEST,
  type AstRequestParams,
  type AstTreeNode,
  type AstTreeResult,
  type CstTreeNode,
  type CstTreeResult,
} from 'org.eclipse.daanse.board.app.lib.api.lsp'

export type {
  AstRequestParams,
  AstTreeNode,
  AstTreeResult,
  CstTreeNode,
  CstTreeResult,
} from 'org.eclipse.daanse.board.app.lib.api.lsp'
export { AST_REQUEST, CST_REQUEST } from 'org.eclipse.daanse.board.app.lib.api.lsp'

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

function createSerializer(
  strategy: AstTreeStrategy,
  ids?: Map<AstNode, string>,
): AstTreeContext {
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
    ids?.set(node, id)
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

/*
 * What made the tree partial: the parser's errors and the lexer's, which
 * the Problems list shows as well - a `[` never closed is a lexer error and
 * leaves the tree as partial as a missing keyword. The wire field keeps its
 * name; it counts both.
 */
function syntaxErrors(document: LangiumDocument): number {
  const { lexerErrors, parserErrors } = document.parseResult
  return lexerErrors.length + parserErrors.length
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
    parserErrors: syntaxErrors(document),
  }
}

/** A composite node's rule: the AST type where it is a node's own, the rule it calls otherwise. */
function ruleName(node: CstNode): string {
  if (node.astNode.$cstNode === node) return node.astNode.$type
  const source = node.grammarSource
  if (source && GrammarAST.isRuleCall(source)) return source.rule.$refText
  if (source && GrammarAST.isKeyword(source)) return source.value
  return source?.$type ?? 'node'
}

/**
 * The concrete syntax tree, with each composite that is an AST node's own
 * carrying that node's id in the langium/ast tree - so a selection in one
 * view finds its row in the other. Built from the same serializer, which is
 * what makes the ids agree.
 */
export function buildCstTree(
  document: LangiumDocument,
  strategy: AstTreeStrategy = {},
): CstTreeResult {
  const root = document.parseResult.value as AstNode | undefined
  const ids = new Map<AstNode, string>()
  if (root) createSerializer(strategy, ids).serializeNode(root, 'root')

  function serialize(node: CstNode, id: string): CstTreeNode {
    const base = {
      id,
      range: node.range,
      offset: node.offset,
      length: node.length,
    }
    if (isLeafCstNode(node)) {
      return {
        ...base,
        kind: 'leaf',
        name: node.tokenType.name,
        text: node.text,
        ...(node.hidden ? { hidden: true } : {}),
        children: [],
      }
    }
    const astId = node.astNode.$cstNode === node ? ids.get(node.astNode) : undefined
    return {
      ...base,
      kind: 'composite',
      name: ruleName(node),
      ...(astId ? { astId } : {}),
      children: isCompositeCstNode(node)
        ? node.content.map((child, index) => serialize(child, `${id}.${index}`))
        : [],
    }
  }

  const cst = root?.$cstNode
  return {
    uri: document.uri.toString(),
    root: cst ? serialize(cst, 'cst') : undefined,
    parserErrors: syntaxErrors(document),
  }
}

export function registerCstRequest(
  connection: Connection,
  shared: LangiumSharedServices,
  strategy: AstTreeStrategy = {},
): void {
  connection.onRequest(
    CST_REQUEST,
    async (
      params: AstRequestParams,
      cancelToken: CancellationToken,
    ): Promise<CstTreeResult> => {
      const uri = URI.parse(params.textDocument.uri)
      const document =
        await shared.workspace.LangiumDocuments.getOrCreateDocument(uri)
      await shared.workspace.DocumentBuilder.waitUntil(
        DocumentState.Parsed,
        uri,
        cancelToken,
      )
      return buildCstTree(document, strategy)
    },
  )
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
