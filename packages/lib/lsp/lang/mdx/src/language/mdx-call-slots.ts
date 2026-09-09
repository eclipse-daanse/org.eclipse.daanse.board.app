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

import { CstUtils, isLeafCstNode, type AstNode } from 'langium'

export type ArgumentList = AstNode & { arguments: AstNode[] }

function separatorOffsets(call: ArgumentList): number[] | undefined {
  const cst = call.$cstNode
  if (!cst) {
    return undefined
  }
  return CstUtils.streamCst(cst)
    .filter(
      node => isLeafCstNode(node) && node.text === ',' && node.astNode === call,
    )
    .map(node => node.offset)
    .toArray()
    .sort((left, right) => left - right)
}

export function argumentSlotCount(call: ArgumentList): number {
  const separators = separatorOffsets(call)
  if (!separators) {
    return call.arguments.length
  }
  // No slots at all (`Fn()`) rather than one empty slot.
  return separators.length === 0 && call.arguments.length === 0
    ? 0
    : separators.length + 1
}

export function argumentSlotIndices(call: ArgumentList): number[] {
  const separators = separatorOffsets(call)
  if (!separators) {
    return call.arguments.map((_, index) => index)
  }
  return call.arguments.map((argument, index) => {
    const offset = argument.$cstNode?.offset
    if (offset === undefined) {
      return index
    }
    return separators.filter(separator => separator < offset).length
  })
}
