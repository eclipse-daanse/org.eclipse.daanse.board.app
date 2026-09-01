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

export function splitMemberPath(path: string): string[] {
  const segments: string[] = []
  let current = ''
  let depth = 0
  for (let i = 0; i < path.length; i++) {
    const char = path[i]
    if (char === '[') {
      depth++
    } else if (char === ']') {
      if (path[i + 1] === ']') {
        current += ']]'
        i++
        continue
      }
      depth--
    } else if (char === '.' && depth === 0) {
      segments.push(current.trim())
      current = ''
      continue
    }
    current += char
  }
  if (current.trim().length > 0) {
    segments.push(current.trim())
  }
  return segments.map(stripKeyQualifier).filter(segment => segment.length > 0)
}

function stripKeyQualifier(segment: string): string {
  return segment.startsWith('&') ? segment.slice(1).trim() : segment
}

export function normalizeMemberPath(path: string): string {
  return path
    .replace(/\s*\.\s*/g, '.')
    .trim()
    .toUpperCase()
}

export function identifierBody(segment: string): string {
  return segment.startsWith('[') && segment.endsWith(']')
    ? segment.slice(1, -1).replace(/]]/g, ']')
    : segment
}
