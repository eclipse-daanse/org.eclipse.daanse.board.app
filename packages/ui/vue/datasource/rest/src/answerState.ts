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
 * Whether an answer holds nothing.
 *
 * "Nothing came back" and "something came back and it was empty" are
 * different things to be told, and both of them used to look like an
 * empty pane - as did "still waiting" (#1194). Telling them apart needs
 * one rule, used by every view of this source type, or the tree and the
 * map disagree about the same answer.
 *
 * An answer that is absent is not empty, it is missing: that is the
 * caller's other case.
 */
export function isEmptyAnswer(answer: unknown): boolean {
  if (answer === null || answer === undefined) return false
  if (Array.isArray(answer)) return answer.length === 0
  if (typeof answer === 'string') return answer.length === 0
  if (typeof answer === 'object') return Object.keys(answer as object).length === 0
  return false
}
