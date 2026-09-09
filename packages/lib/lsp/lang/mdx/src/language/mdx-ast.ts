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

import type { AstNode } from 'langium'
import type {
  AstTreeContext,
  AstTreeNode,
  AstTreeStrategy,
} from 'org.eclipse.daanse.board.app.lib.lsp.server'
import {
  argumentSlotCount,
  argumentSlotIndices,
  type ArgumentList,
} from './mdx-call-slots.js'

function isArgumentList(node: AstNode): node is ArgumentList {
  return Array.isArray((node as { arguments?: unknown }).arguments)
}

function serializeArguments(
  call: ArgumentList,
  parentId: string,
  context: AstTreeContext,
): AstTreeNode[] {
  const indices = argumentSlotIndices(call)
  const slots: AstTreeNode[] = []
  for (let slot = 0; slot < argumentSlotCount(call); slot++) {
    const position = indices.indexOf(slot)
    if (position === -1) {
      slots.push({
        id: `${parentId}.arguments.${slot}`,
        kind: 'empty',
        label: '(skipped)',
        property: 'arguments',
        index: slot,
        children: [],
      })
    } else {
      slots.push(
        context.serializeNode(
          call.arguments[position],
          `${parentId}.arguments.${slot}`,
          'arguments',
          slot,
        ),
      )
    }
  }
  return slots
}

export const MDX_AST_STRATEGY: AstTreeStrategy = {
  customProperty(node, property, _value, id, context) {
    if (property === 'arguments' && isArgumentList(node)) {
      return serializeArguments(node, id, context)
    }
    return undefined
  },
}
