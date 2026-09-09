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

export interface TokenStream {
  eol(): boolean
  next(): string | void
  peek(): string | undefined
  match(pattern: string): unknown
}

export function consumeDelimited(stream: TokenStream, close: string): boolean {
  while (!stream.eol()) {
    if (stream.next() !== close) continue
    if (stream.peek() === close) {
      stream.next() // doubled: an escaped delimiter, keep going
      continue
    }
    return true
  }
  return false
}

export function consumeBlockComment(stream: TokenStream): boolean {
  while (!stream.eol()) {
    if (stream.match('*/')) return true
    stream.next()
  }
  return false
}
