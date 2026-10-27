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
 * A random RFC 4122 version 4 id, in any context the board runs in.
 *
 * `crypto.randomUUID` exists only in secure contexts - https and localhost.
 * Opened over plain http on a LAN address, the board called it while
 * creating its first connection and never started. `crypto.getRandomValues`
 * is there in every context, so the id is built from it when `randomUUID`
 * is missing; the result has the same shape either way.
 */
export function randomUUID(): string {
  const source = globalThis.crypto
  if (typeof source.randomUUID === 'function') return source.randomUUID()

  const bytes = source.getRandomValues(new Uint8Array(16))
  /* Version 4 in the high nibble of byte 6, variant 10xx in byte 8. */
  bytes[6] = (bytes[6]! & 0x0f) | 0x40
  bytes[8] = (bytes[8]! & 0x3f) | 0x80

  const hex = Array.from(bytes, (byte) => byte.toString(16).padStart(2, '0')).join('')
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`
}
