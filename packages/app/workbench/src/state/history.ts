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
/*
 * Every statement that was run, newest first: what it was, against which
 * cube, how long it took and how it ended. Kept across sessions; the same
 * text run again moves to the top instead of appearing twice.
 */

import { readStored, writeStored } from './storage'

export const HISTORY_LIMIT = 50

export interface HistoryEntry {
  mdx: string
  /** Epoch milliseconds the run started. */
  time: number
  connection?: string
  catalog?: string
  cube?: string
  durationMs?: number
  outcome: 'ok' | 'error' | 'aborted'
  /** Cells or rows the answer held. */
  size?: number
  error?: string
}

export function loadHistory(): HistoryEntry[] {
  const stored = readStored<HistoryEntry[]>('history', [])
  return Array.isArray(stored) ? stored.filter(e => e && typeof e.mdx === 'string') : []
}

export function recordHistory(history: HistoryEntry[], entry: HistoryEntry): HistoryEntry[] {
  const next = [entry, ...history.filter(e => e.mdx.trim() !== entry.mdx.trim())].slice(0, HISTORY_LIMIT)
  writeStored('history', next)
  return next
}

export function clearHistory(): HistoryEntry[] {
  writeStored('history', [])
  return []
}
